import "./css/App.css";
import HeartRecordView from "./component/heart";

function App() {
  return (
    <div className="primary_background">
      <div className="container">
        <h1 className="h1" align="center" style={{color: "whitesmoke", paddingTop: "10px"}}> Smart Shenanigans: Our IoT Project</h1>
      
        {/* old record view */}
        <HeartRecordView></HeartRecordView>
      
      </div>
    </div>
  );
}

export default App;
