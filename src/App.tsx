import "./App.css";
import CoverPage from "./components/CoverPage";
import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";
import coverPicture from "./assets/img.png";

import {
  ApiKey,
  trending,
  upcoming,
  popular,
  topRated,
  now_playing,
  trendingShows,
  popularShows,
  top_Rated_Shows,
  airing_today,
} from "./modules/ApiLinks";

function App() {
  const itemsProps = {
    numberOfMovies: 16,
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <CoverPage
        title={"Hello"}
        description={"lorenmsf fetrwe"}
        catchyPhrase={"wegwe we twet"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${trending}?api_key=${ApiKey}`}
        itemHeading="trending"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${upcoming}?api_key=${ApiKey}`}
        itemHeading="upcoming"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${popular}?api_key=${ApiKey}`}
        itemHeading="popular"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${topRated}?api_key=${ApiKey}`}
        itemHeading="topRated"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${now_playing}?api_key=${ApiKey}`}
        itemHeading="now_playing"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      /*SHOWS*/
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${trendingShows}?api_key=${ApiKey}`}
        itemHeading="trendingShows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${popularShows}?api_key=${ApiKey}`}
        itemHeading="popularShows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${top_Rated_Shows}?api_key=${ApiKey}`}
        itemHeading="top_Rated_Shows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        {...itemsProps}
        apiEndpoint={`${airing_today}?api_key=${ApiKey}`}
        itemHeading="airing_today"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
    </>
  );
}

export default App;
