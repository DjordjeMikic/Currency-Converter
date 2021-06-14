import React from 'react';
import Nav from '../nav';
import "./style.css";

const Layout = ({ children }) => {
  let [theme, setTheme] = React.useState(false);
  return (
    <div className={`flex column layout ${theme ? 'night' : ''}`}>
      <Nav theme={theme} setTheme={setTheme} />
      {children}
    </div>
  )
}

export default Layout;
