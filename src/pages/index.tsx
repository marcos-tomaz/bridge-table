import Card from 'components/card/index';
import Scoreboard from 'components/scoreboard';
import { useDeck } from 'hooks/use-deck';
import { DeckCard, sortBridgeCards } from 'models/deck-card';
import { TablePositions } from 'models/table-position';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { calcPointsPerSuitInHand } from 'services/bridge-points';
import { genBridgeDeck } from 'services/deck';

import {
  CardHandContainer,
  GameTableContainer,
  HandNameContainer
} from './styles';

const tablePlayers: Array<{ playerName: string; position: TablePositions }> = [
  { playerName: 'North', position: 'top' },
  { playerName: 'South', position: 'bottom' },
  { playerName: 'West', position: 'left' },
  { playerName: 'East', position: 'right' }
];

const Home: NextPage = () => {
  const { drawCards, isDeckComplete, resetDeck } = useDeck(genBridgeDeck());
  const [gameHands, setGameHands] = useState<Record<string, DeckCard[]>>(
    tablePlayers.reduce((emptyGameHands, tablePlayer) => {
      return {
        ...emptyGameHands,
        [tablePlayer.playerName]: []
      };
    }, {})
  );

  const initializeGame = useCallback(() => {
    const drawnHands = drawCards(13, tablePlayers.length);

    const withCardsGameHands = tablePlayers.reduce(
      (initialGameHands, tablePlayer, index) => {
        return {
          ...initialGameHands,
          [tablePlayer.playerName]: drawnHands.get(index)
        };
      },
      {}
    );

    setGameHands(withCardsGameHands);
  }, [drawCards]);

  function handleRestarClick() {
    resetDeck(genBridgeDeck(), true);
  }

  function getPlayerScore(playerName: string, handCards: DeckCard[]) {
    return {
      playerName,
      ...calcPointsPerSuitInHand(handCards)
    };
  }

  useEffect(() => {
    if (isDeckComplete()) {
      initializeGame();
    }
  }, [initializeGame, isDeckComplete]);

  return (
    <GameTableContainer>
      <Head>
        <title>Bridge Table</title>
      </Head>
      {tablePlayers.map((tablePlayer, playerIndex) => (
        <CardHandContainer
          position={tablePlayer.position}
          key={`player-${playerIndex}`}
        >
          {gameHands[tablePlayer.playerName]
            .sort(sortBridgeCards)
            .map((handCard, cardIndex) => (
              <Card
                cardSymbol={handCard.symbol}
                suit={handCard.suit}
                key={`${playerIndex}-${cardIndex}`}
              />
            ))}
          <HandNameContainer>
            <h1>{tablePlayer.playerName}</h1>
          </HandNameContainer>
        </CardHandContainer>
      ))}
      <Scoreboard
        onCommandClick={handleRestarClick}
        scores={tablePlayers.map(({ playerName }) =>
          getPlayerScore(playerName, gameHands[playerName])
        )}
      />
    </GameTableContainer>
  );
};

export default Home;
