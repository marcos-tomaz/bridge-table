import { PlayerScore } from 'models/player-score';
import React, { FC } from 'react';
import { FaRedo } from 'react-icons/fa';
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from 'react-icons/gi';

import {
  ScoreboardContainer,
  ScoreboardResultsContainer,
  ScoreHeaderRowContainer,
  ScoreRowContainer,
  ShuffleButton,
  ShuffleContainer
} from './styles';

export interface ScoreboardProps {
  scores: Array<PlayerScore>;
  onCommandClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ScoreRow: FC<{ score: PlayerScore }> = ({ score }) => {
  return (
    <ScoreRowContainer>
      <div>{score.playerName}</div>
      <div>
        <GiSpades />
        {score.spadeScore}
      </div>
      <div>
        <GiHearts />
        {score.heartScore}
      </div>
      <div>
        <GiDiamonds />
        {score.diamondScore}
      </div>
      <div>
        <GiClubs /> {score.clubScore}
      </div>
      <div style={{ justifyContent: 'center', fontWeight: 'bold' }}>
        {score.totalPoints}
      </div>
    </ScoreRowContainer>
  );
};

const Scoreboard: FC<ScoreboardProps> = ({ scores, onCommandClick }) => {
  return (
    <ScoreboardContainer>
      <ScoreboardResultsContainer>
        <ScoreHeaderRowContainer>
          <div>PLAYER</div>
          <div>
            <GiSpades />
          </div>
          <div>
            <GiHearts />
          </div>
          <div>
            <GiDiamonds />
          </div>
          <div>
            <GiClubs />
          </div>
          <div>TOTAL</div>
        </ScoreHeaderRowContainer>
        {scores
          .sort(
            (playerScoreA, playerScoreB) =>
              playerScoreB.totalPoints - playerScoreA.totalPoints
          )
          .map((playerScore, index) => (
            <ScoreRow score={playerScore} key={index} />
          ))}
      </ScoreboardResultsContainer>
      <ShuffleContainer>
        <ShuffleButton onClick={onCommandClick}>
          <FaRedo />
        </ShuffleButton>
      </ShuffleContainer>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
