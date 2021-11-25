import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home"
import FeaturedInfo from "./components/FeaturedInfo/FeaturedInfo";
import DataInfo from "./components/DataInfo/DataInfo"
import Graph from "./components/Graphs/Graphs"
function App() {
  return (
    <div>
    <Topbar />
    <div className="container">
      <Sidebar/>
      <Home />
      <FeaturedInfo/>
      <div className="newDivision">
      <DataInfo/>
      <Graph/>
      </div>
    </div>
    </div>
  );
}

export default App;
