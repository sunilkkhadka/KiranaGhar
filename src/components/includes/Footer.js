import React from "react";

const Footer = () => {
  return (
    <div className="home-footer">
      <div className="wrapper">
        <div class="weaccept">
          <div class="container">
            <img
              src="https://www.himalmart.com/public/images/we-accept-himalmart-new.png"
              alt="Himal Mart We Accept Payment Getway"
            />
          </div>
        </div>

        <div class="footer-main-container">
          <div class="row">
            <div class="contact-us">
              <div class="footer-box">
                <h3>Contact Us </h3>
                <p>
                  <i class="flaticon-map"></i>
                  <strong> Address:</strong> Budhanilkantha, Kathmandu, Nepal
                </p>
                {/* <p>
                  <img
                    src="https://www.himalmart.com/public/images/himalmart-mail.jpg"
                    alt="himal mart mail"
                  />
                </p> */}

                <p class="d-none">
                  <i class="flaticon-phone"></i> <strong>Phone:</strong>
                  9801322212
                </p>
              </div>
            </div>
            <div class="quicklinks">
              <div class="footer-box">
                <h3>Quick Link</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/privacy-policy"
                      title="Privacy Policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/terms-and-condition"
                      title="Terms &amp; Condition"
                    >
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/why-choose-us"
                      title="Why choose us?"
                    >
                      Why choose us?
                    </a>
                  </li>
                  <li>
                    <a href="https://www.himalmart.com" title="Home">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="support">
              <div class="footer-box">
                <h3>Support</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/returns-and-refunds"
                      title="Returns &amp; Refunds"
                    >
                      Returns &amp; Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/how-to-buy"
                      title="How to Buy ?"
                    >
                      How to Buy ?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.himalmart.com/contact-us"
                      title="Contact us"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.himalmart.com/page/about-us"
                      title="About us"
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="offers">
              <div class="footer-box app-d-footer">
                <h3>Mobile App </h3>
                <p>Get access to exclusive offers!</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.appbasis.himalmart"
                  target="_blank"
                  title="Himal Mart Download app"
                >
                  <img
                    src="https://www.himalmart.com/public/images/google-play.png"
                    alt="Himal Mart App Google Play Store"
                  />
                </a>
                <a
                  href="https://www.himalmart.com"
                  title="Himal Mart Download app"
                >
                  <img
                    src="https://www.himalmart.com/public/images/apple-store.png"
                    alt="Himal Mart App Apple Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
