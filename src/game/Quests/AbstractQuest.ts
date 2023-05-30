import {AbstractItem} from "@/game/Items/AbstractItem";
import {QuestOption} from "@/game/Quests/QuestOption";
import {Player} from "@/game/Player/Player";

export abstract class AbstractQuest {
    public static readonly movesRequired: number = 1

    public abstract getTitle(): string

    public abstract getImage(): string

    public abstract getText(): string

    public abstract getOptions(): QuestOption[]

    public abstract getSoundtrack(): string | null

    protected _assignedPlayer: Player | undefined

    public assignPlayer(player: Player): void {
        this._assignedPlayer = player
    }

    public getAssignedPlayer(): Player | undefined {
        return this._assignedPlayer
    }
}