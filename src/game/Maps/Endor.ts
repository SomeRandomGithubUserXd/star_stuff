import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";

export class Endor extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/endor/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/endor/map.jpg");

    }
    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/geonosis.mp3");
    }
    getName(): string {
        return "Эндор";
    }

    public getLocations(): AbstractLocation[] {
        return [new AbandonedDroidStation(0)]
    }
}