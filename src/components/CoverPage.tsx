import Search from "../pages/Search";
import { Cover } from "../styles/Styles.modules";

interface CoverProps {
  title: string;
  description: string;
  catchyPhrase: string;
  headerImage: string;
  showSearch: boolean;
  showHeaderImage: boolean;
}

const CoverPage: React.FC<CoverProps> = ({
  title,
  description,
  catchyPhrase,
  headerImage,
  showSearch,
  showHeaderImage,
}) => {
  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>

      {showHeaderImage && <img src={headerImage} alt="img" />}

      {showSearch && <Search />}
    </Cover>
  );
};

export default CoverPage;
