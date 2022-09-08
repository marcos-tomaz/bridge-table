import styled from 'styled-components';

export const ScoreboardContainer = styled.div`
  display: grid;
  z-index: 100;
  width: 80%;
  max-width: 700px;
  grid-template-areas: 'results control';

  background-color: #242957;
  color: white;
  font-weight: 400;
  box-shadow: -3px -5px 9px 5px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-areas:
      'results'
      'control';
  }
`;

export const ScoreboardResultsContainer = styled.div`
  grid-area: results;
  display: flex;
  flex-direction: column;
`;

export const ScoreRowContainer = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: center;

  & > div {
    height: 100%;
    padding: 0.5rem 1rem;
    flex: 1;

    border: 1px solid #9ca6e3;

    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  & > div:first-of-type,
  & > div:last-of-type {
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    & > div {
      justify-content: center;

      padding: 0.5rem;
    }

    & > div > svg {
      display: none;
    }
  }
`;

export const ScoreHeaderRowContainer = styled(ScoreRowContainer)`
  font-weight: bold;
  font-size: 0.8rem;

  & > div {
    justify-content: center;
  }

  @media (max-width: 480px) {
    & > div > svg {
      display: block;
    }
  }
`;

export const ShuffleContainer = styled.div`
  border: 1px solid #9ca6e3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  padding: 1rem;
`;

export const ShuffleButton = styled.button`
  cursor: pointer;
  color: #9ca6e3;

  svg {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: #e4b02d;
      rotate: 180deg;
      scale: 1.1;
    }
  }
`;
