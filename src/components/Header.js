import React from "react";
import MyPic from "../images/mustopha.png"

export default function Header() {
    return (
        <div className="header">
            <img src={MyPic} alt="Mustopha Abdulkareem"></img>
            <div>
                <h2>Mustopha Abdulkareem </h2>
                <h4>Frontend Developer</h4>
                
            </div>

            <div className="button">
                <button className="email">
                    <a href="mailto:aphatheology@gmail.com" target="_blank" rel="noreferre">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        Email
                    </a>
                
                    
                </button>
                
            </div>
        </div>
    )
}