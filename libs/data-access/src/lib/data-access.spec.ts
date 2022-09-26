import { getLead, getSatisfactoryScore } from './data-access';

describe('Data Access', () => {
  describe('Get Lead', () => {
    it('should get lead by ID', () => {
      const leadFound = getLead('100');
      leadFound.subscribe((data) => {
        expect(data.data).toBeTruthy();
      });
    });

    it('should get error', () => {
      const leadFound = getLead('101');
      leadFound.subscribe(({ data, error }) => {
        console.log(data);
        expect(data).toBeNull();
        expect(error).toBeDefined();
        expect(error).toEqual({ message: '' });
      });
    });
  });

  describe('Get Satisfactory Score', () => {
    it('should get a score', () => {
      const score = getSatisfactoryScore(true, false);
      expect(score.score).toBeGreaterThanOrEqual(0);
      expect(score.systemsErrors.length).toEqual(0);
    });

    it('should get an error related to national registry', () => {
      const score = getSatisfactoryScore(false, false);
      expect(score.score).toEqual(0);
      expect(score.systemsErrors.length).toEqual(1);
    });

    it('should get an error related to national archives', () => {
      const score = getSatisfactoryScore(true, true);
      expect(score.score).toEqual(0);
      expect(score.systemsErrors.length).toEqual(1);
    });
  });
});
