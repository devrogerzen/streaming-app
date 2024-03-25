import { useEffect, useState } from 'react'
import { MovieShowsWrapper } from '../styles/Styles.modules.ts'
import axios from 'axios'
import { trending } from '../modules/ApiLinks.ts'
import { CircularProgress } from '@mui/material'


interface Movie {
  id:number
  title:string
  poster_path:string
  release_date:string
  vote_average:number

  //For TV Shows

  first_air_date:string
  name:string
}

interface DataProps {
  apiEndpoint:string
  numberOfMovies:number
  showButtons:boolean
  tvShowsOn:boolean
  moviesOn:boolean
  itemHeading:string
}

const DisplayItems: React.FC<DataProps> = ({
  apiEndpoint, 
  numberOfMovies,
  showButtons,
  tvShowsOn,
  moviesOn,
  itemHeading
}) => {

const [showItems, setShowItems] = useState<Movie[]>([])
const [currentPage, setCurrentPage] = useState(1)
const [totalPages, setTotalPages] = useState(1)
const [loading, setLoading] = useState(false)


useEffect(() => {
  const fetchMovies = async () => {
    try {
     const response = await axios.get(`${trending}`, {
        params: {
          page: currentPage,
        },
     }) 
     const { results, total_pages } = response.data
     setShowItems(results.slice(0, 16))
     setTotalPages(total_pages)
     setTimeout(() => {
      	setLoading(true)
     },1000)
    } catch (error) {
    console.error("Error Fetching Movies",error)
    }
  }
  fetchMovies()
}, [currentPage, ])


//Function to change the date format

function getFormattedDate(dateString:string | number | Date) {
const options = { year: 'numeric', month: 'short', day: 'numeric' } as Intl.DateTimeFormatOptions
const date = new Date(dateString)
return date.toLocaleDateString('en-Us', options)  

}



  return (
    <MovieShowsWrapper>
      {loading ? (
        <div className='loadingOverlay' >
          <CircularProgress size={50}  color='warning' />
        <p>Loading</p>
        </div>
      
      
      )  : (
<>
<div className='movieHeading' >
        <h1>{itemHeading}</h1>
</div>
<div className="movieCard">
  {showItems.map((item ) => {
    const percentage = (item.vote_average / 10) * 100
      
   return (
    <>
    <div className="movie" key={item.id}>
      <div className="movieImage">
        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.name}  />
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <div className="movieInfo">
        {moviesOn && (
          <>
          <h4>{item.title}</h4>
          <p>{getFormattedDate(item.release_date)}</p>
          </>
        )}
        {tvShowsOn && (
          <>
          <h4>{item.name}</h4>
          <p>{getFormattedDate(item.first_air_date)}</p>
          </>
        )}
      </div>
    </div>
    </>
   )
})}

</div>

</>

      )
      
      
      }

    </MovieShowsWrapper>
  )
}

export default DisplayItems