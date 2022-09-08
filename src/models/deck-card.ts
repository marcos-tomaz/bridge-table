import { CardSymbol } from './card-symbol';
import { Suits } from './suits';

export interface DeckCard {
  suit: Suits;
  symbol: CardSymbol;
  value: number;
  id: string;
}

const suitWeightMap: Record<Suits, number> = {
  spade: 3,
  heart: 2,
  diamond: 1,
  club: 0
};

const cardSymbolWeightMap: Record<CardSymbol, number> = {
  '2': 0,
  '3': 1,
  '4': 2,
  '5': 3,
  '6': 4,
  '7': 5,
  '8': 6,
  '9': 7,
  '10': 8,
  J: 9,
  Q: 10,
  K: 11,
  A: 12
};

export function sortBridgeCards(cardA: DeckCard, cardB: DeckCard) {
  return cardA.suit === cardB.suit
    ? cardSymbolWeightMap[cardA.symbol] - cardSymbolWeightMap[cardB.symbol]
    : suitWeightMap[cardA.suit] - suitWeightMap[cardB.suit];
}
