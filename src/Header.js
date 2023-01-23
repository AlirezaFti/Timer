import { useState } from "react";

function Header({changeText,id}){

    const[chngeTime,setChangeTime]=useState("")

    return(
        <div className="hed">
            {id==null?changeText:id}
        </div>
    );
}

export default Header;