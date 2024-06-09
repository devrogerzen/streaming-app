import "./App.css";
import DisplayItems from "./components/DisplayItems";

import Header from "./components/Header";
import {
  ApiKey,
  trendingShows,
  popularShows,
  top_Rated_Shows,
  airing_today,
} from "./modules/ApiLinks";

function App() {
  const itemsProps = {
    numberOfMovies: 12,
    moviesOn: false,
    tvShowsOn: true,
    showButtons: true,
  };

  return (
    <>
      <Header />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${trendingShows}?api_key=${ApiKey}`}
        itemHeading= "trendingShows"
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${popularShows}?api_key=${ApiKey}`}
        itemHeading= "popularShows"
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${top_Rated_Shows}?api_key=${ApiKey}`}
        itemHeading= "top_Rated_Shows"
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${airing_today}?api_key=${ApiKey}`}
        itemHeading= "airing_today"
      />
    </>
  );
}

export default App;
