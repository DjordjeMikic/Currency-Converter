import React from "react";
import { CircleButtonContainer } from "./Common.style";

interface CircleButtonProps {
  changeValues: VoidFunction;
}

export const CircleButton: React.FC<CircleButtonProps> = ({ changeValues }) => (
  <CircleButtonContainer onClick={changeValues}>
    <p>&larr;</p>
    <p>&rarr;</p>
  </CircleButtonContainer>
);