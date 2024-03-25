import './App.css'
import Header from './components/Header'
import { APIKEY, trending } from './modules/ApiLinks'

function App() {


  const url = `${trending}?api_key=${APIKEY}` 

  fetch(url).then(res => res.json())
  .then(data => console.log(data))


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


  return (
    <>
      <Header />
    </>
  )
}

export default App
