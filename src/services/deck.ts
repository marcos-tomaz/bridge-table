import { CardSymbol } from 'models/card-symbol';
import { DeckCard } from 'models/deck-card';
import { Suits } from 'models/suits';

const cardSymbolValue: Record<CardSymbol, number> = {
  A: 4,
  K: 3,
  Q: 2,
  J: 1,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 0,
  '8': 0,
  '9': 0,
  '10': 0
};

export function genBridgeDeck() {
  const suits: Array<Suits> = ['club', 'diamond', 'heart', 'spade'];
  const cardSymbols: Array<CardSymbol> = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ];

  const deck: Array<DeckCard> = suits
    .map((suit) =>
      cardSymbols
        .map((cardSymbol) => ({
          symbol: cardSymbol,
          suit,
          value: cardSymbolValue[cardSymbol],
          id: `${suit}-${cardSymbol}`
        }))
        .flat()
    )
    .flat();

  return deck;
}
