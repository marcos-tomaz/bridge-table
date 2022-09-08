import { CardSymbol } from 'models/card-symbol';
import { Suits } from 'models/suits';
import React, { FC } from 'react';

import {
  CardContainer,
  CardValueContainer,
  InnerBorderLeft,
  InnerBorderRight,
  SuitContainer,
  SuitWrapperBottomRight,
  SuitWrapperTopLeft
} from './styles';

const suitMap: Record<Suits, string> = {
  club: '/images/club.png',
  heart: '/images/heart.png',
  spade: '/images/spade.png',
  diamond: '/images/diamond.png'
};

interface CardProps {
  suit: Suits;
  cardSymbol: CardSymbol;
}

const Card: FC<CardProps> = ({ suit, cardSymbol }) => {
  return (
    <CardContainer>
      <InnerBorderLeft />
      <InnerBorderRight />
      <SuitWrapperBottomRight>
        <SuitContainer src={suitMap[suit]} />
        {cardSymbol}
      </SuitWrapperBottomRight>
      <SuitWrapperTopLeft>
        <SuitContainer src={suitMap[suit]} />
        {cardSymbol}
      </SuitWrapperTopLeft>
      <CardValueContainer>{cardSymbol}</CardValueContainer>
    </CardContainer>
  );
};

export default Card;
