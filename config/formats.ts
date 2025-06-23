export const Formats: FormatList = [
{
section: "BUDPOW",
},
{
name: "[PGL: Singles]",
gameType: 'singles',
ruleset: ['Picked Team Size = 3','Max Move Count = 8', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 3', 'Max Team Size = 3'],
},

{
name: "[PGL: Doubles]",
gameType: 'doubles',
ruleset: ['Picked Team Size = 4','Max Move Count = 8', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 4', 'Max Team Size = 4'],
},

{
name: "[TRISTAN]",
gameType: 'triples',
ruleset: ['Max Move Count = 8', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
},

{
name: "[Gold Cup]",
gameType: 'singles',
ruleset: ['Picked Team Size = 1','Max Move Count = 8', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 1', 'Max Team Size = 1'],
},

{
name: "[MBSFBC]",
gameType: 'singles',
ruleset: ['Max Move Count = 16', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 3', 'Max Team Size = 18'],
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
team: 'random',
ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
},

];