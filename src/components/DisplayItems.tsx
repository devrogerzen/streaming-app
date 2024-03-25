import { MovieShowsWrapper } from '../styles/Styles.modules.ts'

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


const DisplayItems = () => {
  return (
    <MovieShowsWrapper>
      <div className='movieHeading'>
        <h1>Heading</h1>
      </div>
    <div className='movieCard' >
      <div className='movieImg'>
        <img src='https://images.unsplash.com/photo-1612836997387-0e0d5e6e9a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='movie' />
      </div>
      <div className='movieInfo'>
        <h2>Movie Title</h2>
        <p>Movie Description</p>
        <button>Book Now</button>
      </div>

    </div>

    </MovieShowsWrapper>
  )
}

export default DisplayItems