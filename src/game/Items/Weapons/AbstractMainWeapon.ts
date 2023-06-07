import {AbstractItem} from "@/game/Items/AbstractItem";

export abstract class AbstractMainWeapon extends AbstractItem {

    public abstract addsPossibleDamage(): number

    public abstract addsPossibleRange(): number

    public equipSound(): string {
        return "";
    }

    public abstract fireSound(): string
}