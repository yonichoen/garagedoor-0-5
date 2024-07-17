import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "0px",
                }}
                className="col-md-8 col-md-offset-2 intro-text"
              >
                <div className="text-animation">
                  <h1 className="animated-text">
                    {" "}
                    {props.data ? props.data.title : "Loading"}
                  </h1>
                </div>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "sans-serif",
                    marginBottom: "30px",
                  }}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "sans-serif",
                    marginBottom: "50px",
                  }}
                >
                  {props.data ? props.data.tel : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
