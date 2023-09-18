import { PropsWithChildren, useState } from 'react';

import { Nav } from '../nav/Nav';
import Footer from '../footer/Footer';
import "./style.css";
import { LayoutContainer } from './Layout.style';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(false);

  return (
    <LayoutContainer column night={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout;
