import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../../assets/assets";

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings.
      </p>

      <div className="explore-menu-list">
        {menu_list && menu_list.length > 0 ? (
          menu_list.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name? "active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default Exploremenu;
