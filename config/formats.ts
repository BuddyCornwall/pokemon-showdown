export const Formats: FormatList = [
{
    section: "PGL",
},
{
    name: "[PGL: Singles] BUDPOW",
    mod: 'gen9',
    gameType: 'singles',
    ruleset: ['Picked Team Size = 3','Max Move Count = 8', 'Exact HP Mod', 'Item Clause', 'Cancel Mod', 'VGC Timer', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 3', 'Max Team Size = 3'],
},
{
    name: "[PGL: Doubles] BUDPOW",
    mod: 'gen9',
    gameType: 'doubles',
    ruleset: ['Picked Team Size = 4','Max Move Count = 8', 'Exact HP Mod', 'Item Clause', 'Cancel Mod', 'VGC Timer', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 4', 'Max Team Size = 4'],
    onBeforeSwitchIn(pokemon) {
        this.add('-message', `I choose you ${pokemon.name}!! `);
    },
},
{
    name: "[PGL: Trios] BUDPOW",
    mod: 'gen9',
    gameType: 'triples',
    ruleset: ['Max Move Count = 8', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause'],
    onBeforeSwitchIn(pokemon) {
        this.add('-message', `I choose you ${pokemon.name}!! `);
    },
},
{
    section: "Cups",
},
{
    name: "[Gold Cup] BUDPOW",
    mod: 'gen9',
    gameType: 'singles',
    ruleset: ['Picked Team Size = 1','Max Move Count = 8', 'Exact HP Mod', 'Item Clause', 'Cancel Mod', 'VGC Timer', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 1', 'Max Team Size = 1'],
    onBeforeSwitchIn(pokemon) {
        this.add('-message', `I choose you ${pokemon.name}!! `);
    },
},
{
    name: "[MBSFBC] BUDPOW",
    mod: 'gen9',
    gameType: 'singles',
    ruleset: ['Max Move Count = 16', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 3', 'Max Team Size = 18'],
    onBeforeSwitchIn(pokemon) {
        this.add('-message', `I choose you ${pokemon.name}!! `);
    },
},
{
    name: "[tristan] BUDPOW",
    mod: 'gen9',
    gameType: 'triples',
    ruleset: ['Max Move Count = 8', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause'],
    onBeforeSwitchIn(pokemon) {
        this.add('-message', `I choose you ${pokemon.name}!! `);
    },
},
{
    section: "S/V Singles",
},
{
    name: "[Gen 9] Random Battle",
    desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
    threads: [
        `&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
    ],
    searchShow: false,
    mod: 'gen9',
    team: 'random',
    ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
},
];
