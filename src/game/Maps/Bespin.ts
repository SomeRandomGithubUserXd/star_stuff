import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";

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
        return require("@/assets/audio/maps/geonosis.mp3");
    }

    public getLocations(): AbstractLocation[] {
        return [new AbandonedDroidStation(0)]
    }
}