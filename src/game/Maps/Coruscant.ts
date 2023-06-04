import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {OutlanderClub} from "@/game/Locations/Coruscant/OutlanderClub/OutlanderClub";
import {JediTemple} from "@/game/Locations/Coruscant/JediTemple/JediTemple";

export class Coruscant extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/coruscant/preview.jpg");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/coruscant/map.jpg");
    }

    getName(): string {
        return "Корусант";
    }

    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/coruscant.mp3");
    }

    public getLocations(): (typeof AbstractLocation)[] {
        return [OutlanderClub, JediTemple]
    }
}