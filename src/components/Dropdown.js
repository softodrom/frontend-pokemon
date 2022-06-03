import React from "react";

const Dropdown = ({ label, renderData }) => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id={label} />
        <label className="tab-label" htmlFor={label}>
          {label}
        </label>
        <div className="tab-content" style={{ textAlign: "justify" }}>
          <ul>{renderData}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
