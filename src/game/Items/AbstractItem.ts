import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export abstract class AbstractItem {
    public abstract getName(): string

    public abstract getImage(): string

    public abstract getDescription(): string

    public abstract equipSound(): string

    public abstract getRarityLevel(): ItemRarityEnum
}