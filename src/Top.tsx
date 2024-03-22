import React from "react";
import pic from "./antarctic.jpg";

const Top = () => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <img src={pic} alt="Antarctic" style={{ width: '100%', height: 'auto' }} />
            <h1 style={{ position: 'absolute', top: '20px', left: '20px', color: 'gray', zIndex: 1 }}>研究職～エンジニアの経験を活かして</h1>
        </div>
    )
}

export default Top;
