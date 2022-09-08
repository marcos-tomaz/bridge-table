import { DeckCard } from 'models/deck-card';
import { PlayerScore } from 'models/player-score';

export function calcPointsPerSuitInHand(
  cardsHand: Array<DeckCard>
): Omit<PlayerScore, 'playerName'> {
  const clubScore = cardsHand
    .filter((card) => card.suit === 'club')
    .reduce((acc, card) => acc + card.value, 0);

  const diamondScore = cardsHand
    .filter((card) => card.suit === 'diamond')
    .reduce((acc, card) => acc + card.value, 0);

  const heartScore = cardsHand
    .filter((card) => card.suit === 'heart')
    .reduce((acc, card) => acc + card.value, 0);

  const spadeScore = cardsHand
    .filter((card) => card.suit === 'spade')
    .reduce((acc, card) => acc + card.value, 0);

  return {
    clubScore,
    diamondScore,
    heartScore,
    spadeScore,
    totalPoints: clubScore + diamondScore + heartScore + spadeScore
  };
}
