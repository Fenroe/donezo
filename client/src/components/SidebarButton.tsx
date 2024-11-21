import { styled } from "styled-components";

interface SidebarButtonProps {
  text: string;
  isVariant?: boolean;
}

export const SidebarButton = ({
  text,
  isVariant = false,
}: SidebarButtonProps) => {
  return (
    <Button $isVariant={isVariant}>
      <Icon />
      <Label>{text}</Label>
    </Button>
  );
};

const Button = styled.button<{ $isVariant: boolean }>`
  display: flex;
  width: 240px;
  height: 48px;
  padding: 0 24px;
  justify-content: start;
  align-items: center;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: white;
  color: ${(props) => (props.$isVariant ? "#635fc7" : "#828fa3")};
  cursor: pointer;

  &:hover {
    background-color: #635fc7;
    color: white;
  }

  @media (min-width: 1200px) {
    width: 276px;
  }
`;

const Label = styled.span`
  font-size: 15px;
  line-height: 19px;
  margin-left: 10px;
  font-weight: 700;
`;

const Icon = () => {
  return (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 2.889A2.889 2.889 0 012.889 0H13.11A2.889 2.889 0 0116 2.889V13.11A2.888 2.888 0 0113.111 16H2.89A2.889 2.889 0 010 13.111V2.89zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333zm8.445-1.333V1.333h-6.89A1.556 1.556 0 001.334 2.89v4.22h8.445zm4.889-1.333H11.11v4.444h3.556V5.778zm0 5.778H11.11v3.11h2a1.556 1.556 0 001.556-1.555v-1.555zm0-7.112V2.89a1.555 1.555 0 00-1.556-1.556h-2v3.111h3.556z"
        fill="currentColor"
      />
    </svg>
  );
};
