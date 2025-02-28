import { styled } from "styled-components";

interface HideSidebarButtonProps {
  onClick: () => void;
}
export const HideSidebarButton = ({ onClick }: HideSidebarButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Icon />
      <Label>Hide Sidebar</Label>
    </Button>
  );
};

const Button = styled.button`
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
  color: #828fa3;
  cursor: pointer;

  &:hover {
    background-color: #f0effa;
    color: #635fc7;
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
    <svg width={18} height={16} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.522 11.223a4.252 4.252 0 01-3.654-5.22l3.654 5.22zM9 12.25A8.685 8.685 0 011.5 8a8.612 8.612 0 012.76-2.864l-.86-1.23A10.112 10.112 0 00.208 7.238a1.5 1.5 0 000 1.524A10.187 10.187 0 009 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 019 12.25zm8.792-3.488a10.14 10.14 0 01-4.486 4.046l1.504 2.148a.375.375 0 01-.092.523l-.648.453a.375.375 0 01-.523-.092L3.19 1.044A.375.375 0 013.282.52L3.93.068a.375.375 0 01.523.092l1.735 2.479A10.308 10.308 0 019 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 010 1.524zM16.5 8a8.674 8.674 0 00-6.755-4.219A1.75 1.75 0 1012.75 5v-.001a4.25 4.25 0 01-1.154 5.366l.834 1.192A8.641 8.641 0 0016.5 8z"
        fill="currentColor"
      />
    </svg>
  );
};
