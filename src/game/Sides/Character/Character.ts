import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class Character {
    public icon: string

    public voiceLines: CharacterVoiceLines

    constructor(icon: string, voiceLines: CharacterVoiceLines) {
        this.icon = icon

        this.voiceLines = voiceLines
    }
}