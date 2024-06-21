import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import coverPicture from "../assets/img.png";
import {
  ApiKey,
  trending,
  popular,
  now_playing,
  trendingShows,
  popularShows,
  top_Rated_Shows,
} from "../modules/ApiLinks";

const Home = () => {
  return (
    <>
      <CoverPage
        title={"TODITOSTREAM"}
        description={
          "Bienvenido, averigua que plataforma tiene tu pelicula o serie favorita"
        }
        catchyPhrase={"Con gusto te la aportaremos"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${popular}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Peliculas: Lo más popular"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${now_playing}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Peliculas En Cartelera"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${trending}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Peliculas en Tendencias"
        tvShowsOn={false}
        moviesOn={true}
        showButtons={true}
      />

      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Series & Shows: Tendencias"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Popular Shows & Series"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
      <DisplayItems
        apiEndpoint={`${top_Rated_Shows}?api_key=${ApiKey}`}
        numberOfMovies={8}
        itemHeading="Top Rankedas Shows & Series"
        tvShowsOn={true}
        moviesOn={false}
        showButtons={true}
      />
    </>
  );
};

export default Home;
