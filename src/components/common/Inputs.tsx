import React from "react";
import { EText, StyledInput, InputContainer, StyledSelect } from "./Inputs.style";
import { Flex } from "../../Shared.style";

interface InputProps {
  id: string;
  e?: string;
  info?: string;
  [x: string]: any;
}

export const Input: React.FC<InputProps> = ({ id, e, info, ...rest }) => (
  <InputContainer column>
    <label htmlFor={id}>{info}</label>

    <StyledInput
      type="text"
      id={id}
      {...rest}
    />

    {e && <EText className="e">{e}</EText>}
  </InputContainer>
);

interface SelectProps {
  state: string[];
  base: string;
  [x: string]: any;
}

export const Select: React.FC<SelectProps> = ({ state, base, ...rest }) => (
  <Flex column>
    <StyledSelect value={base} {...rest}>
      {state?.length > 0 && state.map((a, b) => (
        <option value={a} key={b}>{a}</option>
      ))}
    </StyledSelect>
  </Flex>
);
