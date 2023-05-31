import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";

export class Tatooine extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/tatooine/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/tatooine/map.jpg");
    }

    getName(): string {
        return "Татуин";
    }

    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/geonosis.mp3");
    }

    public getLocations(): (typeof AbstractLocation)[] {
        return [AbandonedDroidStation]
    }
}