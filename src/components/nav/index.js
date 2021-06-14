import React from 'react';
import "./style.css";

const Nav = ({ theme, setTheme }) => {
  return (
    <div className="flex nav">
      <h1>Nav</h1>
      <div
        className={`switch flex ${theme ? 'switch-right' : 'switch-left'}`}
        onClick={() => setTheme(prevState => !prevState)}
      >
        <div className="switch-selector"></div>
      </div>
    </div>
  )
}

export default Nav;
