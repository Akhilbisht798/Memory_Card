import { useState, useEffect } from "react";

const popUp = (props) => {
    return (props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner">
                <button className="close-btn">Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}