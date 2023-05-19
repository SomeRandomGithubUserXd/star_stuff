export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const findById = (array, key) => {
    for (const assumingObj of array) {
        if (assumingObj.id === key) {
            return assumingObj
        }
    }
    return undefined
}

export const getColoredPlayerSpan = (player) => {
   return `<span style="color: ${player.side.getColor()}">${player.name}</span>`
}