import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <strong>Who We Are:</strong> We are a team of dedicated individuals
            who believe in the power of ecommerce to connect people with the
            products they love. Together, we strive to offer a wide selection of
            high-quality products at competitive prices, all while providing
            excellent customer service. <br></br>
            <strong>Our Approach:</strong> We believe in transparency, honesty,
            and putting our customers first. Every decision we make is guided by
            our commitment to your satisfaction and our desire to exceed your
            expectations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
