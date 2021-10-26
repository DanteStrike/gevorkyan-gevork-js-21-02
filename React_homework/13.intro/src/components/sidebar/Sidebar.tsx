import React from "react";
import './Sidebar.css';
import Filters from "../filters/Filters";
import {filtersMock} from "../../mocks/filters";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Filters filters={filtersMock}/>
    </aside>
  );
}


export default Sidebar;
