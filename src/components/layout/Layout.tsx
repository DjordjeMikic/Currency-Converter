import { PropsWithChildren } from 'react';

import { Nav } from '../nav/Nav';
import Footer from '../footer/Footer';
import { LayoutContainer } from './Layout.style';

interface LayoutProps extends PropsWithChildren {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ theme, setTheme, children }) => (
  <LayoutContainer column night={theme}>
    <Nav theme={theme} setTheme={setTheme} />
    {children}
    <Footer />
  </LayoutContainer>
);

export default Layout;