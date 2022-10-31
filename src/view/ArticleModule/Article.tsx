import Seesion from "./pages/Seesion";
import Atop from "./pages/Atop";
import Anav from "./pages/Anav";
import Main from "./pages/Main";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import Nav from "../../Components/Nav";

import "./article.scss";
const Article: React.FC = () => {
  return (
    <div className="article-box">
      <Nav/>
      <Seesion />
      <div className="content">
        <Atop />
        <Anav />
        <Main />
        <Footer />
        <Backtop/>
      </div>
    </div>
  );
};
export default Article;
