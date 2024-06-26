import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Commitment to Ensuring Customer Satisfaction in Delivery
                  Services
                </h2>

                <p className="section__description">
                  our commitment to customer satisfaction drives everything we
                  do. We understand that reliable and timely delivery is crucial
                  to your needs, whether it's essential medical supplies,
                  everyday groceries, or special gifts. Our dedicated team works
                  tirelessly to ensure every package reaches its destination
                  safely and on time. We prioritize clear communication and
                  transparency throughout the delivery process, keeping you
                  informed at every step. Your trust is paramount to us!
                </p>

                <p className="section__description">
                  We uphold rigorous quality assurance standards to safeguard
                  your deliveries. From stringent handling protocols to secure
                  packaging, we ensure the integrity of your items from pickup
                  to drop-off. Moreover, we are committed to continuous
                  improvement. Your feedback shapes our services, guiding us as
                  we strive to enhance efficiency and exceed your delivery
                  expectations.we are not just delivering packages; we are
                  delivering peace of mind and exceptional service, ensuring
                  your satisfaction with every delivery experience.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
