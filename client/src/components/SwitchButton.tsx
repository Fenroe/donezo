import { useState } from "react";
import styled from "styled-components";

export const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <SwitchContainer>
      <Switch onClick={toggleSwitch}>
        <SwitchKnob $isOn={isOn} />
      </Switch>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: #635fc7;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a7a4ff;
  }
`;

const SwitchKnob = styled.div<{ $isOn: boolean }>`
  position: absolute;
  top: 2.5px;
  left: ${(props) => (props.$isOn ? "21px" : "5px")};
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
`;
