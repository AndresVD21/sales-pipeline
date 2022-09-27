import { getLead, getSatisfactoryScore } from './data-access';

describe('Data Access', () => {
  describe('Get Lead', () => {
    it('should get lead by ID', (done) => {
      const leadFound = getLead('100');
      leadFound.subscribe((data) => {
        expect(data.data).toBeTruthy();
        done();
      });
    });

    it('should get error', (done) => {
      const leadFound = getLead('101');
      leadFound.subscribe(({ data, error }) => {
        console.log(data);
        expect(data).toBeNull();
        expect(error).toBeDefined();
        expect(error).toEqual({ message: 'There is not a lead with ID 101' });
        done();
      });
    });
  });

  describe('Get Satisfactory Score', () => {
    const lead = {
      id: '100',
      birthdate: new Date(1996, 2, 21).toJSON(),
      email: 'jane@company.co',
      firstName: 'Jane',
      lastName: 'Doe',
      hasScore: false,
      score: 0,
    };
    const registry = {
      id: '100',
      birthdate: new Date(1996, 2, 21).toJSON(),
      email: 'jane@company.co',
      firstName: 'Jane',
      lastName: 'Doe',
    };
    const archive = {
      id: '100',
      hasJudicialRecord: true,
    };

    it('should get a score', (done) => {
      archive.hasJudicialRecord = false;
      getSatisfactoryScore(lead, registry, archive).subscribe((score) => {
        expect(score.score).toBeGreaterThanOrEqual(0);
        expect(score.systemsErrors.length).toEqual(0);
        done();
      });
    });

    it('should get an error related to national registry', (done) => {
      registry.firstName = 'Jhane';
      getSatisfactoryScore(lead, registry, archive).subscribe((score) => {
        expect(score.score).toEqual(0);
        expect(score.systemsErrors.length).toEqual(1);
        done();
      });
    });

    it('should get an error related to national archives', (done) => {
      getSatisfactoryScore(lead, registry, archive).subscribe((score) => {
        expect(score.score).toEqual(0);
        expect(score.systemsErrors.length).toEqual(1);
        done();
      });
    });
  });
});
