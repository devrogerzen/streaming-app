import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import coverPicture from "../assets/img.png";
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
} from "../modules/ApiLinks";

const Home = () => {
  return (
    <>
      <CoverPage
        title={"Hello"}
        description={"lorenmsf fetrwe"}
        catchyPhrase={"wegwe we twet"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${trending}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="trending"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${upcoming}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="upcoming"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${popular}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="popular"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${topRated}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="topRated"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${now_playing}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="now_playing"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      /*SHOWS*/
      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="trendingShows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="popularShows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${top_Rated_Shows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="top_Rated_Shows"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${airing_today}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="airing_today"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
    </>
  );
};

export default Home;
