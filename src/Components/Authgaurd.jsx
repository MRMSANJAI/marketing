import React from "react";
import Sidebar from "./sidebar/Sidebar"

const Authgaurd=({component})=>{

return(
    <div style={{display:"flex"}}>
        <Sidebar/>
        {component}
    </div>
)
}
export default Authgaurd;
