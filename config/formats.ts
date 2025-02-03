export const Formats: FormatList = [
{
section: "BUDPOW",
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
},

{
name: "[TRI*] BUDPOW",
mod: 'gen9',
gameType: 'triples',
ruleset: ['Max Move Count = 8', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause'],

},

{
name: "[Gold Cup] BUDPOW",
mod: 'gen9',
gameType: 'singles',
ruleset: ['Picked Team Size = 1','Max Move Count = 8', 'Exact HP Mod', 'Item Clause', 'Cancel Mod', 'VGC Timer', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 1', 'Max Team Size = 1'],
},

{
name: "[MBSFBC] BUDPOW",
mod: 'gen9',
gameType: 'singles',
ruleset: ['Max Move Count = 16', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause', 'Team Preview', 'Min Team Size = 3', 'Max Team Size = 18'],
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


{
    name: "[TRI*] BUDPOW (Rotation Mode)",
    mod: 'gen9',
    gameType: 'triples',
    ruleset: ['Max Move Count = 8', 'Exact HP Mod', 'Cancel Mod', 'Dynamax Clause'],

    onSwitch(pokemon) {
        if (pokemon.side.active.length > 3) {
            this.add('-message', `${pokemon.name} moves to the reserve slot.`);
        }
    },

    onBeforeSwitchIn(pokemon) {
        this.add('-message', `${pokemon.name} rotates into battle!`);
    },

    onModifyCanSwitch(source) {
        if (source.side.active.length >= 3) {
            this.add('-message', `${source.name} is rotating in freely!`);
            return true; // Allows switch without using up a turn
        }
    },
},




];
