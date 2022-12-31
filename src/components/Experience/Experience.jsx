import React from "react";
import "./Experience.css";



const Experience = () => {
  return (
    <div className="experience" id='experience'>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>5 M</div>
        <span style={{ color: 'white' }}>years </span>
        <span>Experience </span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>7</div>
        <span style={{ color: 'white' }}>completed </span>
        <span>Projects </span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}> 3</div>
        <span style={{ color: 'white' }}>6 </span>
        <span>Work</span>
      </div>

    </div>
  );
};

export default Experience;
