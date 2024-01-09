import React from "react";
import sideBarJson from "../../data/side-bar.json";
import "../styles/SidebarStyle.css";

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins-SemiBold, Helvetica",
            fontSize: "18px",
            fontWeight: 500,
            letterSpacing: 0,
          }}
        >
          Related Categories
        </span>
        <select className="dropdown">
          <option value="shoes">Shoes</option>
          <option value="option1">Shoes</option>
          <option value="option2">Shoes</option>
          <option value="option3">Shoes</option>
        </select>
        <div className="searchContainer">
          <input type="text" placeholder="Search..." className="searchBar" />
        </div>
        {sideBarJson.map((item, index) => {
          return (
            <div className="sideBarItem" key={index}>
              <img
                className="sideBarItem_Image"
                src={item.image}
                alt={item.title}
              />
              <p style={{ textAlign: "center", paddingTop: "12px" }}>
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
