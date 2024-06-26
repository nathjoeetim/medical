import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import ServicesList from "../components/UI/ServicesList";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Our Services" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
