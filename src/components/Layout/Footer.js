import React from "react";
import "../styles/FooterStyle.css";

const Footer = () => {
  return (
    <>
      <div className="bg-light text-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-2" style={{ paddingTop: "75px" }}>
              <div className="logo-oneclick">
                <img
                  src="/images/logo.png"
                  alt="OneClick"
                  className="image-icon1"
                />
                <span className="text-wrapper-3">One</span>
                <span className="text-wrapper-4">Click</span>
              </div>
            </div>
            <div className="col-md-2">
              <p
                style={{
                  color: "#000000",
                  fontFamily: "Poppins-SemiBold, Helvetica",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Links
              </p>
              <ul className="footer-links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Customer care</a>
                </li>
                <li>
                  <a href="#">Free listing</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p
                style={{
                  color: "#000000",
                  fontFamily: "Poppins-SemiBold, Helvetica",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                OC Expert
              </p>
              <ul className="footer-links">
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Customer care</a>
                </li>
                <li>
                  <a href="#">Free listing</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2" style={{ paddingTop: "41px" }}>
              <ul className="footer-links">
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Customer care</a>
                </li>
                <li>
                  <a href="#">Free listing</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2" style={{ paddingTop: "41px" }}>
              <ul className="footer-links">
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Customer care</a>
                </li>
                <li>
                  <a href="#">Free listing</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p
                style={{
                  color: "#000000",
                  fontFamily: "Poppins-SemiBold, Helvetica",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Contact us on
              </p>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <i
                      className="bi bi-facebook"
                      style={{
                        color: "#1877f2",
                        marginRight: "15px",
                        fontSize: "24px",
                      }}
                    ></i>
                    <i
                      className="bi bi-instagram"
                      style={{
                        color: "#e4405f",
                        marginRight: "15px",
                        fontSize: "24px",
                      }}
                    ></i>
                    <i
                      className="bi bi-linkedin"
                      style={{
                        color: "#2867b2",
                        marginRight: "15px",
                        fontSize: "24px",
                      }}
                    ></i>
                    <i
                      className="bi bi-twitter"
                      style={{ color: "#1da1f2", fontSize: "24px" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <img
                    src="https://thumbs.dreamstime.com/b/app-store-155321571.jpg"
                    alt="abc"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      background: "transparent",
                    }}
                  />
                </li>
              </ul>
            </div>
            <div
              className="bg-light text-dark py-3"
              style={{ marginBottom: "-20px" }}
            >
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-12">
                    <p className="copyright">
                      <span>
                        Travel &amp; Tourism | Beauty | Job | Education | Food |
                        Home&amp; Decor | Fitness | Health | Real Estate |
                        Banking | Finance | Shopping Fitness | Health | Real
                        Estate
                      </span>
                      <br />
                      <span>
                        copyright @2008-2013. All right reserved Privacy | Help
                        | FAQs
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
