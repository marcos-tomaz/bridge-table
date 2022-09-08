import { CardContainer } from 'components/card/styles';
import { TablePositions } from 'models/table-position';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export const HandNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #9ca6e3;

  h1 {
    letter-spacing: 3px;
  }
`;

const handOrientationStyles = {
  vertical: css`
    transform: translate(0, -50%);
    top: 50%;

    grid-template-rows: repeat(12, 45px) auto;
    grid-template-columns: auto auto;
    grid-column-gap: 15px;

    & > ${CardContainer}:nth-child(even) {
      transform: translateY(-30px);
    }
  `,
  horizontal: css`
    transform: translate(-50%);
    left: 50%;

    grid-template-columns: repeat(12, 45px) auto;
    grid-template-rows: auto auto;
    grid-row-gap: 15px;

    align-items: center;
  `
};

const handPositionStyles: Record<TablePositions, FlattenSimpleInterpolation> = {
  bottom: css`
    ${handOrientationStyles.horizontal}
    bottom: 10px;

    & > ${CardContainer} {
      grid-row: 2/3;
    }

    & > ${HandNameContainer} {
      grid-column: 1/-1;
    }
  `,
  top: css`
    ${handOrientationStyles.horizontal}
    top: 10px;

    & > ${CardContainer} {
      grid-row: 1/2;
    }

    & > ${HandNameContainer} {
      grid-column: 1/-1;
    }
  `,
  left: css`
    ${handOrientationStyles.vertical}
    left: 10px;

    & > ${CardContainer}:nth-child(even) {
      margin-left: 60px;
    }

    & > ${CardContainer} {
      grid-column: 1/2;
    }

    & > ${HandNameContainer} {
      grid-row: 1/-1;
      grid-column: 2/3;

      h1 {
        rotate: 90deg;
      }
    }
  `,
  right: css`
    ${handOrientationStyles.vertical}
    right: 10px;

    & > ${CardContainer}:nth-child(even) {
      margin-left: 60px;
    }

    & > ${CardContainer} {
      grid-column: 2/3;
    }

    & > ${HandNameContainer} {
      grid-row: 1/-1;
      grid-column: 1/2;

      h1 {
        rotate: 270deg;
      }
    }
  `
};

export const CardHandContainer = styled.div<{
  position: TablePositions;
}>`
  position: absolute;
  display: grid;

  ${({ position }) => handPositionStyles[position]}
`;

export const GameTableContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
