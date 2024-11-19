import styled from "styled-components";

interface DropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => any;
  value: string;
}

export const Dropdown = ({ options, onChange, value }: DropdownProps) => {
  return (
    <DropdownContainer>
      <StyledSelect onChange={onChange} value={value}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
      <ArrowIcon />
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
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

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  pointer-events: none;
  transform: translateY(-50%);
  border: solid #333;
  border-width: 0 2px 2px 0;
  padding: 5px;
  transform: rotate(45deg);
`;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;
