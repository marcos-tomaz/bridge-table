import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  height: 280px;
  width: 180px;

  border-radius: 15px;
  padding: 15px;

  background-color: #3a4187;
  box-shadow: 6px 6px 11px #242957, -6px -6px 11px #2f3466;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    z-index: 10;
    box-shadow: 11px 11px 11px #242957, -11px -11px 11px #2f3466;
    translate: 0 -10px;
  }
`;

const InnerBorder = styled.div`
  position: absolute;

  height: 65%;
  width: 65%;
`;

export const InnerBorderRight = styled(InnerBorder)`
  right: 10px;
  top: 10px;

  border-radius: 0 15px 0 0;
  border-top: 1px solid #e4b02d;
  border-right: 1px solid #e4b02d;
`;

export const InnerBorderLeft = styled(InnerBorder)`
  left: 10px;
  bottom: 10px;

  border-radius: 0 0 0 15px;
  border-bottom: 1px solid #e4b02d;
  border-left: 1px solid #e4b02d;
`;

const SuitWrapper = styled.div`
  font-family: 'Domine', serif;
  position: absolute;

  color: #e4b02d;
  font-size: 1.2rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SuitWrapperTopLeft = styled(SuitWrapper)`
  left: 10px;
  top: 10px;

  flex-direction: column-reverse;
`;

export const SuitWrapperBottomRight = styled(SuitWrapper)`
  right: 10px;
  bottom: 10px;

  flex-direction: column;
`;

export const SuitContainer = styled.img`
  height: 30px;
  filter: invert(89%) sepia(12%) saturate(6043%) hue-rotate(340deg)
    brightness(98%) contrast(83%);
`;

export const CardValueContainer = styled.div`
  font-family: 'Domine', serif;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #9ca6e3;
  font-weight: 500;
  font-size: 5.5rem;

  background-image: URL('https://www.transparenttextures.com/patterns/dark-fish-skin.png');

  width: 75%;
  height: 60%;
  border-radius: 15px;
  border: 1px solid #242957;
`;
