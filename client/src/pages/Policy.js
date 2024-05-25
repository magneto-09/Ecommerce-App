import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6" style={{ marginTop: "20px" }}>
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="text-center mb-4">Privacy Policy</h2>
          <p>
            <strong>We collect</strong> personal information such as name,
            email, shipping address, and payment details for order processing,
            and non-personal information like IP address for analytics. We use
            this information to process orders, enhance your shopping
            experience, and send promotional offers (with opt-out options).
            Third-party services, such as payment processors and shippers, may
            handle your information under their privacy policies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
