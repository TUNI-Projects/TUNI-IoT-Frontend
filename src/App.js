import "./css/App.css";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <div className="primary_background">
      <div className="container">
        <h1 className="h1" align="center" style={{ color: "whitesmoke", paddingTop: "10px" }}> Smart Shenanigans</h1>
        <h3 className="h4" align="center" style={{ color: "whitesmoke", }}> Our IoT Project</h3>
        <hr style={{ backgroundColor: "white", height: "3px" }} />

        <Dashboard className=""></Dashboard>
      </div>
    </div>
  );
}

export default App;
