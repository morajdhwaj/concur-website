import React from "react";
import "./_inside-comp.scss";


const InsideComp = () => {
  return (
    <div className="inside">
      <div className="inside_div">
        <div className="inside1">
          <div className="inside1_div">
            <h1 className="inside1_h1">
              Inside IBM
            </h1>
          </div>
        </div>
        <div className="inside2">
          <div className="inside2_div1">
            <p>Solving the world’s problems through technology wouldn’t be possible without our most important invention: the IBMer. Have a look at our talented teams.</p>
          </div>
          <div className="inside2_div2">
            <a href="/#"><p> About IBM</p><i class='bx bx-right-arrow-alt bx-sm'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideComp;
