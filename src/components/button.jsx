import React from "react";

function Button (props){
    return(
        <button className={props.variant} >{props.children}</button>
    )
}
export default Button