import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class Character {

    public icon: string

    public fhIcon: string

    public voiceLines: CharacterVoiceLines

    constructor(icon: string, fhIcon: string, voiceLines: CharacterVoiceLines) {
        this.icon = icon
        this.fhIcon = fhIcon
        this.voiceLines = voiceLines
    }

}