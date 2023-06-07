import {JediTempleSector} from "@/game/Locations/Coruscant/JediTemple/JediTempleSector";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {Yoda} from "@/game/NPC/Yoda";

export class YodaSector extends JediTempleSector {
    constructor(location: AbstractLocation, id: number) {
        super(location, id);
        this.linkCharacter(new Yoda())
    }

    dodgeChanceIncrement: number = 100
}