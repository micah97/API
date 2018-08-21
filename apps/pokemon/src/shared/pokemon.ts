import { Abilities } from "./abilities";
import { Stats } from "./stats";
import { Move } from "./move";
import { Sprite } from "./sprite";

export interface Pokemon {
  id: string;
  name: string;
  weight: number;
  height: number;
  abilities: Abilities[];
  stats: Stats[];
  moves: Move[];
  sprites?: Sprite;
}
