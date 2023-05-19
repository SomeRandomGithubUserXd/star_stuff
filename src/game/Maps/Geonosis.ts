import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";
import {EmptyLocation} from "@/game/Locations/EmptyLocation";

export class Geonosis extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/geonosis/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/geonosis/map.jpg");
    }

    getName(): string {
        return "Джеонозис";
    }

    public getLocations(): AbstractLocation[] {
        return [new AbandonedDroidStation(0)]
    }

    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/geonosis.mp3");
    }
}