import {JediTempleSector} from "@/game/Locations/Coruscant/JediTemple/JediTempleSector";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {NPC} from "@/game/NPC";

export class MaceWinduSector extends JediTempleSector {
    constructor(location: AbstractLocation, id: number) {
        super(location, id);
        const mace = new NPC(false, 'Мейс Винду', require("@/assets/pictures/icons/mace_windu_icon.png"), 100, 100000)
        this._characters = [mace]
    }
}