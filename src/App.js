import "./css/App.css";
import Dashboard from "./component/dashboard";
import github_logo from "./img/github-mark-white.png";

function App() {
  return (
    <div className="container-fluid primary_background">
      <h1
        className="h1"
        align="center"
        style={{ color: "whitesmoke", paddingTop: "10px" }}
      >
        {" "}
        Smart Shenanigans
      </h1>
      <h3 className="h4" align="center" style={{ color: "whitesmoke" }}>
        {" "}
        Our IoT Project
      </h3>

      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <button
          className="btn btn_github"
          onClick={() => window.open("https://github.com/TUNI-Projects/TUNI-IoT-Frontend")}
        >
          <img src={github_logo} alt="Logo" className="logo-github" />
          Find me on Github
        </button>
      </div>

      <hr style={{ backgroundColor: "white", height: "3px" }} />

      <Dashboard className=""></Dashboard>
    </div>
  );
}

export default App;
