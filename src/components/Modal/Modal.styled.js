import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    // max-width: calc(100vw - 48px);
    // max-height: calc(100vh - 24px);
  }

  .modalImage {
    position: absolute;
    top: 106px;
    width: 50%;
  }
`;
