import { styled } from "styled-components";

interface ListHeadingProps {
  text: string;
  count: number;
}

export const ListHeading = ({ text, count }: ListHeadingProps) => {
  return <Heading>{`${text} (${count})`}</Heading>;
};

const Heading = styled.h2`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: #828fa3;
  text-transform: uppercase;
  padding: 0 24px;
`;
