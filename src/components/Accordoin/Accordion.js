import React, { useState } from 'react';
import './accordin.css';

export default function Accordion() {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionClick = (category) => {
    setExpanded(expanded === category ? null : category);
  };

  const handleCheckboxChange = (event) => {
    // Handle checkbox change here
    console.log(event.target.checked, event.target.value);
  };

  return (
    <div className="accordion">
      <div className={`accordion-item ${expanded === 'All' ? 'expanded' : ''}`}>
        <div className="accordion-header" onClick={() => handleAccordionClick('All')}>
          All
        </div>
        <div className="accordion-content">
          <input type="checkbox" value="All" onChange={handleCheckboxChange} />
        </div>
      </div>
      <div className={`accordion-item ${expanded === 'Men' ? 'expanded' : ''}`}>
        <div className="accordion-header" onClick={() => handleAccordionClick('Men')}>
          Men
        </div>
        <div className="accordion-content">
          <input type="checkbox" value="Men" onChange={handleCheckboxChange} />
        </div>
      </div>
      <div className={`accordion-item ${expanded === 'Women' ? 'expanded' : ''}`}>
        <div className="accordion-header" onClick={() => handleAccordionClick('Women')}>
          Women
        </div>
        <div className="accordion-content">
          <input type="checkbox" value="Women" onChange={handleCheckboxChange} />
        </div>
      </div>
      <div className={`accordion-item ${expanded === 'Kids' ? 'expanded' : ''}`}>
        <div className="accordion-header" onClick={() => handleAccordionClick('Kids')}>
          Kids
        </div>
        <div className="accordion-content">
          <input type="checkbox" value="Kids" onChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
}
