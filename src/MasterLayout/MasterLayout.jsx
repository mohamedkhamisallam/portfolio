import React from "react";

import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
function MasterLayout() {
  return (



    <>
      <div className="container    ">
        <div className="row">
        <div className={`col-lg-2 col-md-3  col-12  z-3 `}>
        
        <SideBar/>
        </div >
          <div className="col-lg-10 col-md-9  col-12  vh-100  " >
            <Outlet />
            </div>
          
        </div>
      </div>
    </>
  );
}

export default MasterLayout;
