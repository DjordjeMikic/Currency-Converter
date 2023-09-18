import { useState } from 'react';
import Nav from '../nav';
import Footer from '../footer/Footer';
import "./style.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`flex column layout ${theme ? 'night' : ''}`}
    >
      <Nav theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
