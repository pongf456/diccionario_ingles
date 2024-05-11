export interface wordLicense {
    name:string
    url:string
}
export interface wordDefinitionsMeaning {
    antonyms:string[]
    definition:string
    example?:string
}
export interface wordMeaning {
    antonyms:string[]
    definitions:wordDefinitionsMeaning[]
    partOfSpeech:string
    synonyms:string[]
}
export interface wordPhonetics {
    text?:string
    audio:string
}
export interface wordDefinition {
    license:wordLicense
    meanings:wordMeaning[]
    phonetics:wordPhonetics[]
    sourceUrls:string[]
    word:string
}