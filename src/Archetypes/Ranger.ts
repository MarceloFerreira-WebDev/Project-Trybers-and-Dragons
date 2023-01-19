import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static intancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addInstance();
  }

  private static addInstance() {
    this.intancesCreated += 1;
  }

  public static createdArchetypeInstances(): number {
    return this.intancesCreated;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}