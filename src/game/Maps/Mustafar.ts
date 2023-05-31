import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";

export class Mustafar extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/mustafar/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/mustafar/map.jpg");
    }

    getName(): string {
        return "Мустафар";
    }

    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/geonosis.mp3");
    }

    public getLocations(): (typeof AbstractLocation)[] {
        return [AbandonedDroidStation]
    }
}