import { getNationalArchive } from './national-archives';

describe('Get National Archive', () => {
  it('should get national archive by ID', () => {
    const registryFound = getNationalArchive('100');
    registryFound.then((data) => {
      expect(data.data).toBeDefined();
      expect(data.error).toBeNull();
    });
  });

  it('should get error message', () => {
    const registryFound = getNationalArchive('101');
    registryFound.then((data) => {
      expect(data.data).toBeNull();
      expect(data.error).toBe({
        message: `There is no a national archive with the id 101`,
      });
    });
  });
});
