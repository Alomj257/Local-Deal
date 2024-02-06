import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/about/about1.png";
import image2 from "../../assets/about/about2.png";
import image3 from "../../assets/about/about3.png";
import Layout from "../../utils/Layout";

function About() {
  return (
    <>
      <Layout>
        <div className="About">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
            integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
            crossOrigin="anonymous"
          />
          <div className="container">
            <div className="row align-items-center col-sm-12">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                          <img
                            src={image1}
                            className="img-fluid"
                            alt="Gold Icon"
                          />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mt-4 pt-2 text-right">
                          <a href="/" className="btn btn-info">
                            Read More <i className="mdi mdi-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                          <img
                            src={image2}
                            className="img-fluid"
                            alt="Black Icon"
                          />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                          <img
                            src={image3}
                            className="img-fluid"
                            alt="White Icon"
                          />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                <div className="section-title ml-lg-5">
                  <h5 className="text-custom font-weight-normal mb-3">
                    About Us
                  </h5>
                  <h4 className="title mb-4">
                    Our mission is to make your life easier.
                  </h4>
                  <p className="text-muted mb-0">
                    Welcome to LocalDeal – Your Gateway to Unmatched Savings and
                    Local Delights!
                    <hr />
                    At LocalDeal, we pride ourselves on being your go-to
                    destination for incredible deals right in your neighborhood.
                    Born out of a passion for supporting local businesses and
                    making your everyday experiences more affordable. Our
                    mission is simple: to connect you with exclusive discounts,
                    exciting offers, and hidden gems in your local area. We
                    believe in the power of community, and through LocalDeal,
                    we're fostering a sense of togetherness by encouraging you
                    to explore and support the businesses that make your
                    neighborhood unique.
                  </p>
                  <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center rounded shadow p-3">
                        <i className="fa fa-play h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0">
                          <a
                            href="/"
                            className="text-decoration-none text-dark"
                          >
                            Responsive
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center rounded shadow p-3">
                        <i className="fa fa-file-download h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0">
                          <a
                            href="/"
                            className="text-decoration-none text-dark"
                          >
                            Free Download
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center rounded shadow p-3">
                        <i className="fa fa-user h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0">
                          <a
                            href="/"
                            className="text-decoration-none text-dark"
                          >
                            Support
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center rounded shadow p-3">
                        <i className="fa fa-image h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0">
                          <a
                            href="/"
                            className="text-decoration-none text-dark"
                          >
                            Development
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
