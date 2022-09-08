import { fireEvent, render, screen } from '@testing-library/react';

import { TwoMockedUsersScores } from '../../__mocks__/scoreboard-values';
import Scoreboard from '../../src/components/scoreboard/index';
import { PlayerScore } from '../../src/models/player-score';

describe('Scoreboard component tests', () => {
  const stubOnClickCommandFunction = jest.fn();

  it('Should display correctly the points of an user in the scoreboard', () => {
    const mockPLayerScores: PlayerScore[] = TwoMockedUsersScores;
    const [playerOne, playerTwo] = TwoMockedUsersScores;

    render(
      <Scoreboard
        onCommandClick={stubOnClickCommandFunction}
        scores={mockPLayerScores}
      />
    );

    const userOneScoreBoardRow = screen.getByText(playerOne.playerName, {
      selector: 'div'
    });
    const userTwoScoreBoardRow = screen.getByText(playerTwo.playerName, {
      selector: 'div'
    });

    expect(userOneScoreBoardRow).toBeVisible();
    expect(userTwoScoreBoardRow).toBeVisible();

    expect(userOneScoreBoardRow.parentElement?.lastChild).toHaveTextContent(
      playerOne.totalPoints.toString()
    );
    expect(userTwoScoreBoardRow.parentElement?.lastChild).toHaveTextContent(
      playerTwo.totalPoints.toString()
    );
  });

  it('Should execute the command function on button click', () => {
    const mockPLayerScores: PlayerScore[] = TwoMockedUsersScores;

    render(
      <Scoreboard
        onCommandClick={stubOnClickCommandFunction}
        scores={mockPLayerScores}
      />
    );

    const restartButton = screen.getByText('', {
      selector: 'button > svg',
      exact: false
    }).parentElement;

    expect(restartButton).toBeTruthy();

    fireEvent.click(restartButton!);
    fireEvent.click(restartButton!);

    expect(stubOnClickCommandFunction).toBeCalledTimes(2);
  });
});
