import { genBridgeDeck } from '../../src/services/deck';

describe('bridge deck generator function', () => {
  it('Should create a valid bridge deck', () => {
    const numberOfCardsInBridgeDeck = 52;
    const totalPointsPerSuit = 10;
    const totalPointsPerDeck = 40;

    const result = genBridgeDeck();

    expect(result).toHaveLength(numberOfCardsInBridgeDeck);
    expect(
      result
        .filter((card) => card.suit === 'club')
        .reduce((acc, { value }) => acc + value, 0)
    ).toEqual(totalPointsPerSuit);
    expect(result.reduce((acc, { value }) => acc + value, 0)).toEqual(
      totalPointsPerDeck
    );
  });
});
