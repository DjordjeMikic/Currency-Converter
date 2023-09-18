import React from "react";

import { FooterContainer } from "./Footer.style";

const Footer = () => (
  <FooterContainer column={false}>

    <p>&copy; Copyright by{" "}
      <a
        href="https://newportfolio-delta.vercel.app/"
        rel="noreferrer"
        target="_blank"
      >Djordje Mikic</a>
    </p>

  </FooterContainer>
);

export default Footer;
