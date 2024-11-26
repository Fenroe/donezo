import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useAtom } from "jotai";
import { activeModalAtom } from "../state";

interface ModalProps {
  children: JSX.Element;
}

export const Modal = ({ children }: ModalProps) => {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom);

  const onClose = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (activeModal !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  if (activeModal === "") return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")!
  );
};

// Styled-components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  width: 90%;
  max-width: 480px;
  max-height: 90%;
  overflow-y: auto;
`;
