import styled from "styled-components";

export const ShowOptionsButton = () => {
  return (
    <Button>
      <VerticalEllipsis />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #828fa3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerticalEllipsis = () => {
  return (
    <svg width={5} height={20} xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" fillRule="evenodd">
        <circle cx={2.308} cy={2.308} r={2.308} />
        <circle cx={2.308} cy={10} r={2.308} />
        <circle cx={2.308} cy={17.692} r={2.308} />
      </g>
    </svg>
  );
};
