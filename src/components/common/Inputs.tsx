import React from "react";
import { EText, StyledInput, InputContainer, StyledSelect } from "./Common.style";
import { Flex } from "../../Shared.style";

interface BaseProps {
  [x: string]: any;
}

interface InputProps extends BaseProps {
  id: string;
  e?: string | null;
  info?: string;
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

interface SelectProps extends BaseProps {
  state: string[];
  base: string;
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
