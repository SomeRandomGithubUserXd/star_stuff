import {Character} from "@/game/Sides/Character/Character";

export class Side {
    protected name: string

    protected icon: string

    public character: Character

    public isEvil: boolean

    get getName(): string {
        return this.name;
    }

    get getIcon(): string {
        return this.icon;
    }

    constructor(name: string, icon: string, character: Character, isEvil: boolean = false) {
        this.name = name;
        this.icon = icon;
        this.character = character;
        this.isEvil = isEvil;
    }
}