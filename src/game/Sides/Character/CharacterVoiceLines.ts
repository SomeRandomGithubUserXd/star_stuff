export class CharacterVoiceLines {
    public neutral: string[]

    public negative: string[]

    public positive: string[]

    constructor(neutral: string[], negative: string[], positive: string[]) {
        this.neutral = neutral
        this.negative = negative
        this.positive = positive
    }
}