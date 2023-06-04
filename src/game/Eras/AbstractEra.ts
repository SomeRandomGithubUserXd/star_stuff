import {Side} from "@/game/Sides/Side";
import {AbstractMap} from "@/game/Maps/AbstractMap";
import {Coruscant} from "@/game/Maps/Coruscant";
import {Naboo} from "@/game/Maps/Naboo";
import {Mustafar} from "@/game/Maps/Mustafar";

export abstract class AbstractEra {
    public abstract getName(): string;

    public abstract getColor(): string;

    public abstract lightSideInstance(): Side;

    public abstract darkSideInstance(): Side;


    public abstract getMaps(): AbstractMap[];
}