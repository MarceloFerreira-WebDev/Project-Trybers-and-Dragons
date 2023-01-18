import Race from './Race';

export default class Elf extends Race {
  public _maxLifePoints: number;
  private static intancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addInstance();
  }

  private static addInstance() {
    this.intancesCreated += 1;
  }

  public static createdRacesInstances(): number {
    return this.intancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}