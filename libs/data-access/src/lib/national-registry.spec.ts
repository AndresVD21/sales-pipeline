import { getRegistry } from './national-registry';

describe('Get National Registry', () => {
  it('should get national registry by ID', (done) => {
    const registryFound = getRegistry('100');
    registryFound.then((data) => {
      expect(data.data).toBeDefined();
      expect(data.error).toBeNull();
      done();
    });
  });

  it('should get error message', (done) => {
    const registryFound = getRegistry('101');
    registryFound.then((data) => {
      expect(data.data).toBeNull();
      expect(data.error).toBe({
        message: `There is no registry with the id 101`,
      });
      done();
    });
  });
});
