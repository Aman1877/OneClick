import React from "react";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Layout/Sidebar";
import Categories from "../components/Layout/Categories";
import Products from "../components/Layout/Products";
import Profile from "../components/Layout/Profile";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div style={{ display: "flex" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <Categories />
              <Profile />
            </div>
            <Products />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
