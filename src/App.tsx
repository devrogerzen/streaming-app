import './App.css'
import DisplayItems from './components/DisplayItems'

import Header from './components/Header'
import { trending, ApiKey, trendingShows } from './modules/ApiLinks'

function App() {



  return (
    <>
      <Header />
      <br /><br /><br /><br /><br /><br />
      <DisplayItems apiEndpoint={`${trendingShows}?api_key=${ApiKey}`}
       numberOfMovies={10} moviesOn={false}
      tvShowsOn={true} itemHeading="Hollywood Movies" showButtons={false} />
    </>
  )
}

export default App