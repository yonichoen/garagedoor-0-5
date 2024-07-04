import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center" style={{backgroundColor:"#454545"}}>
      <div className="container" style={{backgroundColor:"#454545"}}>
        <div className="section-title">
          <h2>Our Services</h2>

        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" style={{  display: "flex",
                    flexDirection: "column",alignItems:"center"}}>
                    <div className="services-image">
                        <img src={d.img} alt="" />{" "}
                    </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
