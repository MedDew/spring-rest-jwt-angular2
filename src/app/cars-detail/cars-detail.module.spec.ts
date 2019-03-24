import { CarsDetailModule } from './cars-detail.module';

describe('CarsDetailModule', () => {
  let carsDetailModule: CarsDetailModule;

  beforeEach(() => {
    carsDetailModule = new CarsDetailModule();
  });

  it('should create an instance', () => {
    expect(carsDetailModule).toBeTruthy();
  });
});
