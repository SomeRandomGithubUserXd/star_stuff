import {JediTempleSector} from "@/game/Locations/Coruscant/JediTemple/JediTempleSector";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {MaceWindu} from "@/game/NPC/MaceWindu";

export class MaceWinduSector extends JediTempleSector {
    constructor(location: AbstractLocation, id: number) {
        super(location, id);
        this.linkCharacter(new MaceWindu())
    }

    dodgeChanceIncrement: number = 80
}