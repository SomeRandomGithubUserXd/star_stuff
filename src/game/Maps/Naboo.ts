import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AdandonedDroidStation/AbandonedDroidStation";

export class Naboo extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/naboo/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/naboo/map.jpg");
    }

    getName(): string {
        return "Набу";
    }
    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/coruscant.mp3");
    }
    public getLocations(): (typeof AbstractLocation)[] {
        return [AbandonedDroidStation]
    }
}