import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AdandonedDroidStation/AbandonedDroidStation";

export class Bespin extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/bespin/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/bespin/map.jpg");
    }

    getName(): string {
        return "Беспин";
    }

    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/coruscant.mp3");
    }

    public getLocations(): (typeof AbstractLocation)[] {
        return [AbandonedDroidStation]
    }
}