import {Side} from "@/game/Sides/Side";

export class Player {

    public static readonly movesLimit = 2

    public id: number

    public side: Side

    public name: string

    public health: number

    public totalExp: number

    public currentLocation: number

    public currentSector: number

    public movesLeft: number

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0, currentLocation = 0, currentSector = 0) {
        this.id = id;
        this.side = side;
        this.name = name;
        this.health = health;
        this.totalExp = totalExp;
        this.currentLocation = currentLocation;
        this.currentSector = currentSector;
        this.movesLeft = Player.movesLimit
    }
}