import { ChangeEvent } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Dropdown = ({ options, onChange, value }: DropdownProps) => {
  return (
    <DropdownContainer>
      <StyledSelect onChange={onChange} value={value}>
        {options.map((option, idx) => (
          <Option key={idx} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
      <DownArrowContainer>
        <DownArrow />
      </DownArrowContainer>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  color: #000112;
  font-weight: medium;
  font-size: 13px;
  line-height: 23px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  pointer-events: none;
  transform: translateY(-50%);
  padding: 5px;
`;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;

const DownArrow = () => {
  return (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
      <path stroke="#635FC7" strokeWidth={2} fill="none" d="M1 1l4 4 4-4" />
    </svg>
  );
};
