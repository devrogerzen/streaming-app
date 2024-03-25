import { useEffect, useState } from 'react'
import { MovieShowsWrapper } from '../styles/Styles.modules.ts'
import axios from 'axios'
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
     const response = await axios.get(`${apiEndpoint}`, {
        params: {
          page: currentPage,
        },
     }) 
     const { results, total_pages } = response.data
     setShowItems(results.slice(0, numberOfMovies))
     setTotalPages(total_pages)
     setTimeout(() => {
      	setLoading(true)
     },1000)
    } catch (error) {
    console.error("Error Fetching Movies",error)
    }
  }
  
  fetchMovies()
}, [currentPage, apiEndpoint, numberOfMovies])


//Function to change the date format

function getFormattedDate(dateString:string | number | Date) {
const options = { year: 'numeric', month: 'short', day: 'numeric' } as Intl.DateTimeFormatOptions
const date = new Date(dateString)
return date.toLocaleDateString('en-Us', options)  

}


//! Previus Page Button
const prevItemsPage = () => { 
  if (currentPage < totalPages ) {
    setCurrentPage((nextPage)  => nextPage + 1)
  }
}

//! Next Page Button
const nexItemsPage = () => {
  if (currentPage > 1) {
    setCurrentPage((prevPage) => prevPage - 1)
  }
}

  return (
    <MovieShowsWrapper>
      {!loading ? (
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
  {showItems.map((item,  ) => {
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
     
      
     {
        showButtons && (
          <div className="buttons">
            {currentPage > 1 && (
              <button className='btnPrev' onClick={prevItemsPage}>Back</button>
            )}
          </div>
      )} 
<p>{currentPage}</p>
{
  showButtons && (
    <div className="buttons">
      {currentPage < totalPages && (
        <button className='btnPrev' onClick={nexItemsPage}>Next</button>
      )}
</div>
  )
}
</div>

</>

      )
      
      
      }

    </MovieShowsWrapper>
  )
}

export default DisplayItems