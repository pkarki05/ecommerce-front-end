import React from "react";

function Footer() {
  return (
    <div className="container-fluid p-0 " >
      <footer
        className="text-center text-lg-start text-white"
        style={{ background: "#45526e" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6>Company name</h6>
                <p>
                  here you can use rows and columnd to organize your footer
                  content.
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products{" "}
                </h6>
                <p>
                  <a href="" className="text-white nav-link">
                    Beer
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    White
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Red
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Sparkling
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Spirits
                  </a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Userful Links
                </h6>
                <p>
                  <a href="" className="text-white nav-link">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Delivery
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Return Policy
                  </a>
                </p>
                <p>
                  <a href="" className="text-white nav-link">
                    Privacy and Return Policy
                  </a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">&copy;All Right Reserved:</div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  href=""
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a
                  href=""
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                <a
                  href=""
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fab fa-google"></i>
                </a>

                <a
                  href=""
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
