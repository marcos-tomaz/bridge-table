import chunk from 'lodash.chunk';
import { useEffect, useState } from 'react';

export interface IUseDeck<TCard> {
  cards: TCard[];
  drawCards: (count?: number, hands?: number) => Map<number, TCard[]>;
  isDeckComplete: () => boolean;
  resetDeck: (newCards: TCard[], shuffle?: boolean) => void;
  shuffleCards: () => void;
}

const shuffleArray = <TItem>(array: Array<TItem>): Array<TItem> => {
  return array.sort(() => 0.5 - Math.random());
};

export function useDeck<TCard extends { id: string | number }>(
  cards: TCard[]
): IUseDeck<TCard> {
  const [deck, setDeck] = useState(shuffleArray(cards));
  const [deckSize, setDeckSize] = useState(cards.length);

  const shuffleCards = () => {
    setDeck(shuffleArray);
  };

  const drawCards = (count = 1, hands = 1) => {
    if (count * hands > deck.length) {
      throw new Error('there are no cards enough to draw');
    }

    const drawnCards = deck.slice(0, count * hands);
    const drawnIds = drawnCards.map((card) => card.id);

    setDeck((previousValueDeck) =>
      previousValueDeck.filter((cardItem) => !drawnIds.includes(cardItem.id))
    );

    const handChunks = chunk(drawnCards, count);
    const handsMap = new Map<number, TCard[]>(
      Array.from(handChunks.keys()).map((key) => [key, handChunks[key]])
    );

    return handsMap;
  };

  const resetDeck = (newCards: TCard[], shuffle = true) => {
    setDeck(shuffle ? shuffleArray(newCards) : newCards);
    setDeckSize(newCards.length);
  };

  const isDeckComplete = () => deck.length === deckSize;

  useEffect(() => {
    shuffleCards();
  }, []);

  return {
    cards: deck,
    drawCards,
    shuffleCards,
    isDeckComplete,
    resetDeck
  };
}
