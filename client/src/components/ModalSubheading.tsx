import styled from "styled-components";

interface ModalSubheadingProps {
  text: string;
}

export const ModalSubheading = ({ text }: ModalSubheadingProps) => {
  return <Subheading>{text}</Subheading>;
};

const Subheading = styled.h3`
  color: #828fa3;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
`;
