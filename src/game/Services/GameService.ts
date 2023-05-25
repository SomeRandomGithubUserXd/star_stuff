import {AbstractItem} from "@/game/Items/AbstractItem";
import {CyclerRifle} from "@/game/Items/Weapons/CyclerRifle";

export function retrieveRandomItem(): AbstractItem {
    return new CyclerRifle()
}