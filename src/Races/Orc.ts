import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  private static intancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addInstance();
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