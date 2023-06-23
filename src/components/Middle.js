import React, { useState } from "react";


const Middle = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return (
        <>
            <div class="middle">
            <p>
                {date}, {time}            
            </p>
        </div>
        </>
    )

}

export default Middle;
