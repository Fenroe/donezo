import { styled } from "styled-components";

interface PrimaryButtonProps {
  text: string;
  isActive: boolean;
  variant: "primary" | "secondary" | "destructive";
  size: "large" | "medium";
  onClick: () => void;
}

export const AppButton = ({
  text,
  isActive,
  variant,
  size,
  onClick,
}: PrimaryButtonProps) => {
  const handleClick = () => {
    if (!isActive) return;
    onClick();
  };

  if (!isActive) return <InactiveButton>{text}</InactiveButton>;

  return (
    <Button onClick={handleClick} $variant={variant} $size={size}>
      {text}
    </Button>
  );
};

const getButtonIdleColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return "#635FC7";
    case "secondary":
      return "#F0EFFA";
    case "destructive":
      return "#EA5555";
    default:
      return "";
  }
};

const getButtonHoverColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return "#A8A4FF";
    case "secondary":
      return "#D8D7F1";
    case "destructive":
      return "#FF9898";
    default:
      return "";
  }
};

const getButtonTextColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return "#ffffff";
    case "secondary":
      return "#635FC7";
    case "destructive":
      return "#ffffff";
    default:
      return "";
  }
};

const Button = styled.button<{ $variant: string; $size: string }>`
  background-color: ${(props) => getButtonIdleColor(props.$variant)};
  height: ${(props) => (props.$size === "large" ? "48px" : "40px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  color: ${(props) => getButtonTextColor(props.$variant)};
  font-weight: bold;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) => getButtonHoverColor(props.$variant)};
  }
`;

const InactiveButton = styled.button`
  background-color: #cecde7;
  height: 48px;
  width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  color: #ffffff;
  font-weight: bold;
`;
