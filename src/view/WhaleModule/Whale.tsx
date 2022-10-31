import "./whale.scss";
import Nav from "../../Components/Nav";
import Seesion from "./pages/Seesion";
import Content from "./pages/Content";
import Backtop from "../../Components/Backtop";
const Whale: React.FC = () => {
  return (
    <div className="whale-box">
      <Nav/>
      <Seesion />
      <Content />
      <Backtop/>
    </div>
  );
};
export default Whale;
