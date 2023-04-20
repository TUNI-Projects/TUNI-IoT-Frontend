import React from "react";
import '../css/component.css';
import HeartForm from "./sub/heart_form";

class Dashboard extends React.Component {

    render() {
        return (
            // don't add anything in the parent div
            <div>
                <div className="row">
                    {/* this is the filtering portion */}
                    <div className="col-lg-4 white-col">
                        {/* heart */}
                        <HeartForm></HeartForm>
                    </div>

                    <div className="col-lg-4">
                        {/* acc */}
                    </div>

                    <div className="col-lg-4">
                        {/* gyro */}
                    </div>
                </div>

                <div className="row">
                    {/* portion where i am going to show data */}
                </div>

            </div>
        )
    }

}

export default Dashboard;