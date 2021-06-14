import { useState } from 'react';
import Nav from '../nav';
import Footer from '../footer';
import "./style.css";

const Layout = ({ children }) => {
  let [theme, setTheme] = useState(false);
  // React.useEffect(() => {
  //   console.log(ldn);
  // }, [])

  return (
    <div className={`flex column layout ${theme ? 'night' : ''}`}>
      <Nav theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
