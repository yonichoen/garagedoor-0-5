import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row" style={{padding:"0px 0px 50px"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

                    <div className="testimonial-image">
                        <img src={d.img} alt="" />{" "}
                    </div>
                  <h3>{d.title}</h3>

                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
