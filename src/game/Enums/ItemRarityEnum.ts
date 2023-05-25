export enum ItemRarityEnum {
    common,
    rare,
    mythical,
    legendary,
}

export namespace ItemRarityEnum {
    export function getName(rarity: ItemRarityEnum): string {
        switch (rarity) {
            case ItemRarityEnum.common: {
                return "Обычный"
            }
            case ItemRarityEnum.rare: {
                return "Редкий"
            }
            case ItemRarityEnum.mythical: {
                return "Мифический"

            }
            case ItemRarityEnum.legendary: {
                return "Легендарный"

            }
        }
    }

    export function getColors(rarity: ItemRarityEnum): [string, string, string] {
        switch (rarity) {
            case ItemRarityEnum.common: {
                return ['#0d9488', '#fff', '#6b7280']
            }
            case ItemRarityEnum.rare: {
                return ['#3b82f6', '#fff', '#2563eb']
            }
            case ItemRarityEnum.mythical: {
                return ['#1e3a8a', '#fff', '#172554']
            }
            case ItemRarityEnum.legendary: {
                return ['#e6c200', '#fafafa', '#926f34']
            }
        }
    }
}