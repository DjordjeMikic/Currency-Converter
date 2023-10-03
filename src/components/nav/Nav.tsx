import React from "react";

import { NavContainer, SwitchContainer, SwitchSelector } from "./Nav.style";

interface NavProps {
  theme: boolean;
  setTheme: any;
}

export const Nav: React.FC<NavProps> = ({ theme, setTheme }) => (
  <NavContainer column="" night={theme ? "true" : ""}>
    <h1>Currency Converter</h1>

    <SwitchContainer
      column=""
      left={!theme ? "true" : ""}
      onClick={() => setTheme(prevState => !prevState)}
    >
      <SwitchSelector />
    </SwitchContainer>
  </NavContainer>
);
