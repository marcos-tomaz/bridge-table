import { act, renderHook } from '@testing-library/react';

import {
  CardSetWithEightCards,
  CardSetWithFiveCards
} from '../../__mocks__/card-set';
import { useDeck } from '../../src/hooks/use-deck';

describe('useDeck hook tests', () => {
  it('Should correctly create a deck and draw one card from it', () => {
    const expectedInitialDeckLength = 5;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));

    expect(result.current.cards).toHaveLength(expectedInitialDeckLength);

    act(() => {
      const drawnOneCard = result.current.drawCards();
      expect(drawnOneCard.size).toEqual(1);
      expect(drawnOneCard.get(0)).toHaveLength(1);
    });

    expect(result.current.cards).toHaveLength(expectedInitialDeckLength - 1);
  });

  it('Should draw 2 cards from the initial deck', () => {
    const expectedInitialDeckLength = 5;
    const expectedNumberOfHands = 1;
    const numberOfCardsToDraw = 2;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));
    act(() => {
      const drawnCards = result.current.drawCards(numberOfCardsToDraw);
      expect(drawnCards.size).toEqual(expectedNumberOfHands);
      expect(drawnCards.get(0)).toHaveLength(numberOfCardsToDraw);
    });

    expect(result.current.cards).toHaveLength(
      expectedInitialDeckLength - numberOfCardsToDraw
    );
  });

  it('Should draw 2 cards for 2 hands from the initial deck', () => {
    const expectedInitialDeckLength = 5;
    const numberOfHands = 2;
    const numberOfCardsPerHand = 2;
    const totalCardsToDraw = 4;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));
    act(() => {
      const drawnCards = result.current.drawCards(
        numberOfCardsPerHand,
        numberOfHands
      );

      expect(drawnCards.size).toEqual(numberOfHands);
      expect(drawnCards.get(0)).toHaveLength(numberOfCardsPerHand);
      expect(drawnCards.get(1)).toHaveLength(numberOfCardsPerHand);
    });

    expect(result.current.cards).toHaveLength(
      expectedInitialDeckLength - totalCardsToDraw
    );
  });

  it('Should correct reset a new set of cards in the deck', () => {
    const expectedInitialDeckLength = 5;
    const expectedNewDeckLength = 8;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));
    expect(result.current.cards.length).toEqual(expectedInitialDeckLength);

    act(() => {
      result.current.resetDeck(CardSetWithEightCards);
    });

    expect(result.current.cards.length).toEqual(expectedNewDeckLength);
  });

  it('Should correct reset a new set of cards in the deck and keep its order', () => {
    const expectedInitialDeckLength = 5;
    const expectedNewDeckLength = 8;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));
    expect(result.current.cards.length).toEqual(expectedInitialDeckLength);

    act(() => {
      result.current.resetDeck(CardSetWithEightCards, false);
    });

    expect(result.current.cards.length).toEqual(expectedNewDeckLength);
    expect(result.current.cards).toEqual(CardSetWithEightCards);
  });

  it('Should throw error when trying to draw more cards than the deck has', () => {
    const totalDeckCards = 5;
    const totalCardsToDraw = totalDeckCards + 1;

    const { result } = renderHook(() => useDeck(CardSetWithFiveCards));

    act(() => {
      result.current.resetDeck(CardSetWithEightCards);
      expect(() => result.current.drawCards(totalCardsToDraw)).toThrowError();
    });
  });
});
