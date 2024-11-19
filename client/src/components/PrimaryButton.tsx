import { styled } from "styled-components";

interface PrimaryButtonProps {
  text: string;
  isActive: boolean;
}
export const PrimaryButton = ({ text, isActive }: PrimaryButtonProps) => {
  return <Button $isActive={isActive}>{text}</Button>;
};

const Button = styled.button<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? "#635FC7" : "#CECDE7")};
  height: 48px;
  width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: ${(props) => (props.$isActive ? "pointer" : "unset")};
  transition-property: all;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#A8A4FF" : "#CECDE7")};
  }
`;
