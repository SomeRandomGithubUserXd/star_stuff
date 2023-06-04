import {AbstractMap} from "@/game/Maps/AbstractMap";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AdandonedDroidStation/AbandonedDroidStation";

export class Endor extends AbstractMap {
    getPreviewImage(): string {
        return require("@/assets/pictures/maps/endor/preview.png");
    }

    getMapImage(): string {
        return require("@/assets/pictures/maps/endor/map.jpg");

    }
    getSoundtrackPath(): string {
        return require("@/assets/audio/maps/coruscant.mp3");
    }
    getName(): string {
        return "Эндор";
    }

    public getLocations(): (typeof AbstractLocation)[] {
        return [AbandonedDroidStation]
    }
}