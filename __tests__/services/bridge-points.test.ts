import {
  AllRoyalClubsCardHand,
  NoPointsCardHand,
  ThirteenPointsCardHand
} from '../../__mocks__/deck-card-set';
import {
  calcPointsPerSuitInHand
} from '../../src/services/bridge-points';

describe('calcPointsPerSuitInHand function => calculates points per suit in a given hand', () => {
  it('Should correctly calculate points in a hand with all four club royals', () => {
    const result = calcPointsPerSuitInHand(AllRoyalClubsCardHand);

    expect(result.clubScore).toEqual(10);
    expect(result.diamondScore).toEqual(0);
    expect(result.heartScore).toEqual(0);
    expect(result.spadeScore).toEqual(0);
    expect(result.totalPoints).toEqual(10);
  });

  it('Should correctly calculate points in a hand with no royal cards', () => {
    const result = calcPointsPerSuitInHand(NoPointsCardHand);

    expect(result.clubScore).toEqual(0);
    expect(result.diamondScore).toEqual(0);
    expect(result.heartScore).toEqual(0);
    expect(result.spadeScore).toEqual(0);
    expect(result.totalPoints).toEqual(0);
  });

  it('Should correctly sum points in all suits for the total', () => {
    const result = calcPointsPerSuitInHand(ThirteenPointsCardHand);

    expect(result.clubScore).toEqual(4);
    expect(result.diamondScore).toEqual(5);
    expect(result.heartScore).toEqual(3);
    expect(result.spadeScore).toEqual(1);
    expect(result.totalPoints).toEqual(13);
  });
});
