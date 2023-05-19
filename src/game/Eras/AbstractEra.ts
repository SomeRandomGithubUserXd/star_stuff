import {Side} from "@/game/Sides/Side";
import {AbstractMap} from "@/game/Maps/AbstractMap";
import {Geonosis} from "@/game/Maps/Geonosis";
import {Naboo} from "@/game/Maps/Naboo";
import {Mustafar} from "@/game/Maps/Mustafar";

export abstract class AbstractEra {
    public abstract getName(): string;

    public abstract getColor(): string;

    public abstract lightSideInstance(): Side;

    public abstract darkSideInstance(): Side;


    public abstract getMaps(): AbstractMap[];
}