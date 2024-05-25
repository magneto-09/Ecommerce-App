import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description:
    "Discover an extensive collection of high-quality products on our MERN stack ecommerce platform. From trendy fashion apparel to cutting-edge electronics, we offer a diverse range of items to elevate your lifestyle and meet your needs. Enjoy seamless shopping experiences, secure transactions, and swift delivery to your doorstep.",
  keywords:
    "MERN stack, React, Node.js, MongoDB, Express, ecommerce, online shopping, fashion, electronics, lifestyle, trendy fashion, high-quality products, secure transactions, swift delivery, seamless shopping experience",
  author:
    "Piyush Sharma, Md. Mosharaf Hossain, Shubham Sharma, Suraj Mondal, Gautam Sarkar, Akash Choudhary",
};

export default Layout;
