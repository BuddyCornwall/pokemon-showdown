export const Items: {[itemid: string]: ItemData} = {

abilityshield: {
name: "Ability Shield",
spritenum: 746,
fling: {
basePower: 30,
},
ignoreKlutz: true,
// Neutralizing Gas protection implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
// and in Neutralizing Gas itself within data/abilities.ts
onSetAbility(ability, target, source, effect) {
if (effect && effect.effectType === 'Ability' && effect.name !== 'Trace') {
this.add('-ability', source, effect);
}
this.add('-block', target, 'item: Ability Shield');
return null;
},
// Mold Breaker protection implemented in Battle.suppressingAbility() within sim/battle.ts
num: 1881,
gen: 9,
},

captainsarmband: {
name: "Captains Armband",
spritenum: 242,
fling: {
basePower: 10,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 40);
},
onDamagePriority: -40,
onDamage(damage, target, source, effect) {
if (this.randomChance(10, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
this.add("-activate", target, "item: Focus Band");
return target.hp - 1;
}
},
},

abomasite: {
name: "Abomasite",
spritenum: 575,
megaStone: "Abomasnow-Mega",
megaEvolves: "Abomasnow",
itemUser: ["Abomasnow"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 674,
gen: 6,
isNonstandard: "Past",
},

absolite: {
name: "Absolite",
spritenum: 576,
megaStone: "Absol-Mega",
megaEvolves: "Absol",
itemUser: ["Absol"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 677,
gen: 6,
isNonstandard: "Past",
},

absorbbulb: {
name: "Absorb Bulb",
spritenum: 2,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Water') {
target.useItem();
}
},
boosts: {
spa: 1,
},
num: 545,
gen: 5,
},

adamantcrystal: {
name: "Adamant Crystal",
spritenum: 741,
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 483 && (move.type === 'Steel' || move.type === 'Dragon')) {
return this.chainModify([100, 20]);
}
},
onTakeItem(item, pokemon, source) {
if (source?.baseSpecies.num === 483 || pokemon.baseSpecies.num === 483) {
return false;
}
return true;
},
forcedForme: "Dialga-Origin",
itemUser: ["Dialga-Origin"],
num: 1777,
gen: 8,
},

adamantorb: {
name: "Adamant Orb",
spritenum: 4,
fling: {
basePower: 60,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 483 && (move.type === 'Steel' || move.type === 'Dragon')) {
return this.chainModify([100, 20]);
}
},
itemUser: ["Dialga"],
num: 135,
gen: 4,
},

adrenalineorb: {
name: "Adrenaline Orb",
spritenum: 660,
fling: {
basePower: 30,
},
onAfterBoost(boost, target, source, effect) {
// Adrenaline Orb activates if Intimidate is blocked by an ability like Hyper Cutter,
// which deletes boost.atk,
// but not if the holder's attack is already at -6 (or +6 if it has Contrary),
// which sets boost.atk to 0
if (target.boosts['spe'] === 6 || boost.atk === 0) {
return;
}
if (effect.name === 'Intimidate') {
target.useItem();
}
},
boosts: {
spe: 1,
},
num: 846,
gen: 7,
},

aerodactylite: {
name: "Aerodactylite",
spritenum: 577,
megaStone: "Aerodactyl-Mega",
megaEvolves: "Aerodactyl",
itemUser: ["Aerodactyl"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 672,
gen: 6,
isNonstandard: "Past",
},

aggronite: {
name: "Aggronite",
spritenum: 578,
megaStone: "Aggron-Mega",
megaEvolves: "Aggron",
itemUser: ["Aggron"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 667,
gen: 6,
isNonstandard: "Past",
},

aguavberry: {
name: "Aguav Berry",
spritenum: 5,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Dragon",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(pokemon.baseMaxhp / 3);
if (pokemon.getNature().minus === 'spd') {
pokemon.addVolatile('confusion');
}
},
num: 162,
gen: 3,
},

airballoon: {
name: "Air Balloon",
spritenum: 6,
fling: {
basePower: 10,
},
onStart(target) {
if (!target.ignoringItem() && !this.field.getPseudoWeather('gravity')) {
this.add('-item', target, 'Air Balloon');
}
},
// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
onDamagingHit(damage, target, source, move) {
this.add('-enditem', target, 'Air Balloon');
target.item = '';
target.itemState = {id: '', target};
this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
},
onAfterSubDamage(damage, target, source, effect) {
this.debug('effect: ' + effect.id);
if (effect.effectType === 'Move') {
this.add('-enditem', target, 'Air Balloon');
target.item = '';
target.itemState = {id: '', target};
this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
}
},
num: 541,
gen: 5,
},

alakazite: {
name: "Alakazite",
spritenum: 579,
megaStone: "Alakazam-Mega",
megaEvolves: "Alakazam",
itemUser: ["Alakazam"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 679,
gen: 6,
isNonstandard: "Past",
},

aloraichiumz: {
name: "Aloraichium Z",
spritenum: 655,
onTakeItem: false,
zMove: "Stoked Sparksurfer",
zMoveFrom: "Thunderbolt",
itemUser: ["Raichu-Alola"],
num: 803,
gen: 7,
isNonstandard: "Past",
},

altarianite: {
name: "Altarianite",
spritenum: 615,
megaStone: "Altaria-Mega",
megaEvolves: "Altaria",
itemUser: ["Altaria"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 755,
gen: 6,
isNonstandard: "Past",
},

ampharosite: {
name: "Ampharosite",
spritenum: 580,
megaStone: "Ampharos-Mega",
megaEvolves: "Ampharos",
itemUser: ["Ampharos"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 658,
gen: 6,
isNonstandard: "Past",
},

apicotberry: {
name: "Apicot Berry",
spritenum: 10,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Ground",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
this.boost({spd: 1.5});
},
num: 205,
gen: 3,
},

armorfossil: {
name: "Armor Fossil",
spritenum: 12,
fling: {
basePower: 100,
},
num: 104,
gen: 4,
isNonstandard: "Past",
},

aspearberry: {
name: "Aspear Berry",
spritenum: 13,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ice",
},
onUpdate(pokemon) {
if (pokemon.status === 'frz') {
pokemon.eatItem();
}
},
onEat(pokemon) {
if (pokemon.status === 'frz') {
pokemon.cureStatus();
}
},
num: 153,
gen: 3,
},

assaultvest: {
name: "Assault Vest",
spritenum: 581,
fling: {
basePower: 80,
},
onModifySpDPriority: 1,
onModifySpD(spd) {
return this.chainModify(1.55);
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
if (this.dex.moves.get(moveSlot.move).category === 'Status') {
pokemon.disableMove(moveSlot.id);
}
}
},
num: 640,
gen: 6,
},

audinite: {
name: "Audinite",
spritenum: 617,
megaStone: "Audino-Mega",
megaEvolves: "Audino",
itemUser: ["Audino"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 757,
gen: 6,
isNonstandard: "Past",
},

auspiciousarmor: {
name: "Auspicious Armor",
spritenum: 753,
fling: {
basePower: 30,
},
num: 2344,
gen: 9,
},

babiriberry: {
name: "Babiri Berry",
spritenum: 17,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Steel",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Steel' && target.getMoveHitData(move).typeMod > 0) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 199,
gen: 4,
},

banettite: {
name: "Banettite",
spritenum: 582,
megaStone: "Banette-Mega",
megaEvolves: "Banette",
itemUser: ["Banette"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 668,
gen: 6,
isNonstandard: "Past",
},

beastball: {
name: "Beast Ball",
spritenum: 661,
num: 851,
gen: 7,
isPokeball: true,
},

beedrillite: {
name: "Beedrillite",
spritenum: 628,
megaStone: "Beedrill-Mega",
megaEvolves: "Beedrill",
itemUser: ["Beedrill"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 770,
gen: 6,
isNonstandard: "Past",
},

belueberry: {
name: "Belue Berry",
spritenum: 21,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Electric",
},
onEat: false,
num: 183,
gen: 3,
isNonstandard: "Past",
},

berryjuice: {
name: "Berry Juice",
spritenum: 22,
fling: {
basePower: 30,
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
if (this.runEvent('TryHeal', pokemon) && pokemon.useItem()) {
this.heal(20);
}
}
},
num: 43,
gen: 2,
isNonstandard: "Past",
},

berrysweet: {
name: "Berry Sweet",
spritenum: 706,
fling: {
basePower: 10,
},
num: 1111,
gen: 8,
isNonstandard: "Past",
},

bignugget: {
name: "Big Nugget",
spritenum: 314, // placeholder
fling: {
basePower: 130,
},
num: 581,
gen: 5,
},

bigroot: {
name: "Big Root",
spritenum: 29,
fling: {
basePower: 10,
},
onTryHealPriority: 1,
onTryHeal(damage, target, source, effect) {
const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
if (heals.includes(effect.id)) {
return this.chainModify([100, 30]);
}
},
num: 296,
gen: 4,
},

bindingband: {
name: "Binding Band",
spritenum: 31,
fling: {
basePower: 30,
},
// implemented in statuses
num: 544,
gen: 5,
},

blackbelt: {
name: "Black Belt",
spritenum: 32,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fighting') {
return this.chainModify([100, 20]);
}
},
num: 241,
gen: 2,
},

blackglasses: {
name: "Black Glasses",
spritenum: 35,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Dark') {
return this.chainModify([100, 20]);
}
},
num: 240,
gen: 2,
},

blacksludge: {
name: "Black Sludge",
spritenum: 34,
fling: {
basePower: 30,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
if (pokemon.hasType('Poison')) {
this.heal(pokemon.baseMaxhp / 13.34);
} else {
this.damage(pokemon.baseMaxhp / 3);
}
},
num: 281,
gen: 4,
},

blastoisinite: {
name: "Blastoisinite",
spritenum: 583,
megaStone: "Blastoise-Mega",
megaEvolves: "Blastoise",
itemUser: ["Blastoise"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 661,
gen: 6,
isNonstandard: "Past",
},

blazikenite: {
name: "Blazikenite",
spritenum: 584,
megaStone: "Blaziken-Mega",
megaEvolves: "Blaziken",
itemUser: ["Blaziken"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 664,
gen: 6,
isNonstandard: "Past",
},

blueorb: {
name: "Blue Orb",
spritenum: 41,
onSwitchIn(pokemon) {
if (pokemon.isActive && pokemon.baseSpecies.name === 'Kyogre') {
this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
}
},
onPrimal(pokemon) {
pokemon.formeChange('Kyogre-Primal', this.effect, true);
},
onTakeItem(item, source) {
if (source.baseSpecies.baseSpecies === 'Kyogre') return false;
return true;
},
itemUser: ["Kyogre"],
num: 535,
gen: 6,
isNonstandard: "Past",
},

blukberry: {
name: "Bluk Berry",
spritenum: 44,
isBerry: true,
naturalGift: {
basePower: 90,
type: "Fire",
},
onEat: false,
num: 165,
gen: 3,
isNonstandard: "Past",
},

blunderpolicy: {
name: "Blunder Policy",
spritenum: 716,
fling: {
basePower: 80,
},
// Item activation located in scripts.js
num: 1121,
gen: 8,
},

boosterenergy: {
name: "Booster Energy",
spritenum: 745,
fling: {
basePower: 30,
},
onUpdate(pokemon) {
if (pokemon.transformed) return;
if (this.queue.peek(true)?.choice === 'runSwitch') return;
if (pokemon.hasAbility('protosynthesis') && !this.field.isWeather('sunnyday') && pokemon.useItem()) {
pokemon.addVolatile('protosynthesis');
}
if (pokemon.hasAbility('quarkdrive') && !this.field.isTerrain('electricterrain') && pokemon.useItem()) {
pokemon.addVolatile('quarkdrive');
}
},
onTakeItem(item, source) {
if (source.baseSpecies.tags.includes("Paradox")) return false;
return true;
},
num: 1880,
gen: 9,
},

brightpowder: {
name: "Bright Powder",
spritenum: 51,
fling: {
basePower: 10,
},
onModifyAccuracyPriority: -2,
onModifyAccuracy(accuracy) {
if (typeof accuracy !== 'number') return;
this.debug('brightpowder - decreasing accuracy');
return this.chainModify([3686, 4096]);
},
num: 213,
gen: 2,
},

buggem: {
name: "Bug Gem",
spritenum: 53,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
if (move.type === 'Bug' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 558,
gen: 5,
isNonstandard: "Past",
},

bugmemory: {
name: "Bug Memory",
spritenum: 673,
onMemory: 'Bug',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Bug",
itemUser: ["Silvally-Bug"],
num: 909,
gen: 7,
isNonstandard: "Past",
},

buginiumz: {
name: "Buginium Z",
spritenum: 642,
onPlate: 'Bug',
onTakeItem: false,
zMove: true,
zMoveType: "Bug",
forcedForme: "Arceus-Bug",
num: 787,
gen: 7,
isNonstandard: "Past",
},

burndrive: {
name: "Burn Drive",
spritenum: 54,
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
return false;
}
return true;
},
onDrive: 'Fire',
forcedForme: "Genesect-Burn",
itemUser: ["Genesect-Burn"],
num: 118,
gen: 5,
isNonstandard: "Past",
},

bulletproofvest: {
name: "Bullet Proof Vest",
spritenum: 581,
fling: {
basePower: 80,
},
onModifySpDPriority: 1,
onModifySpD(def) {
return this.chainModify(1.55);
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
if (this.dex.moves.get(moveSlot.move).category === 'Status') {
pokemon.disableMove(moveSlot.id);
}
}
},
num: 640,
gen: 6,
},

cameruptite: {
name: "Cameruptite",
spritenum: 625,
megaStone: "Camerupt-Mega",
megaEvolves: "Camerupt",
itemUser: ["Camerupt"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 767,
gen: 6,
isNonstandard: "Past",
},

charcoal: {
name: "Charcoal",
spritenum: 61,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fire') {
return this.chainModify([100, 20]);
}
},
num: 249,
gen: 2,
},

charizarditex: {
name: "Charizardite X",
spritenum: 585,
megaStone: "Charizard-Mega-X",
megaEvolves: "Charizard",
itemUser: ["Charizard"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 660,
gen: 6,
isNonstandard: "Past",
},

charizarditey: {
name: "Charizardite Y",
spritenum: 586,
megaStone: "Charizard-Mega-Y",
megaEvolves: "Charizard",
itemUser: ["Charizard"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 678,
gen: 6,
isNonstandard: "Past",
},

chartiberry: {
name: "Charti Berry",
spritenum: 62,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Rock",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Rock' && target.getMoveHitData(move).typeMod > 0) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 195,
gen: 4,
},

cheriberry: {
name: "Cheri Berry",
spritenum: 63,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fire",
},
onUpdate(pokemon) {
if (pokemon.status === 'par') {
pokemon.eatItem();
}
},
onEat(pokemon) {
if (pokemon.status === 'par') {
pokemon.cureStatus();
}
},
num: 149,
gen: 3,
},

cherishball: {
name: "Cherish Ball",
spritenum: 64,
num: 16,
gen: 4,
isPokeball: true,
isNonstandard: "Unobtainable",
},

chestoberry: {
name: "Chesto Berry",
spritenum: 65,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Water",
},
onUpdate(pokemon) {
if (pokemon.status === 'slp') {
pokemon.eatItem();
}
},
onEat(pokemon) {
if (pokemon.status === 'slp') {
pokemon.cureStatus();
}
},
num: 150,
gen: 3,
},

chilanberry: {
name: "Chilan Berry",
spritenum: 66,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Normal",
},
onSourceModifyDamage(damage, source, target, move) {
if (
move.type === 'Normal' &&
(!target.volatiles['substitute'] || move.flags['bypasssub'] || (move.infiltrates && this.gen >= 6))
) {
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 200,
gen: 4,
},

chilldrive: {
name: "Chill Drive",
spritenum: 67,
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
return false;
}
return true;
},
onDrive: 'Ice',
forcedForme: "Genesect-Chill",
itemUser: ["Genesect-Chill"],
num: 119,
gen: 5,
isNonstandard: "Past",
},

chippedpot: {
name: "Chipped Pot",
spritenum: 720,
fling: {
basePower: 80,
},
num: 1254,
gen: 8,
},

choiceband: {
name: "Choice Band",
spritenum: 68,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (pokemon.volatiles['choicelock']) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
}
pokemon.removeVolatile('choicelock');
},
onModifyMove(move, pokemon) {
pokemon.addVolatile('choicelock');
},
onModifyAtkPriority: 1,
onModifyAtk(atk, pokemon) {
if (pokemon.volatiles['dynamax']) return;
return this.chainModify(1.5);
},
isChoice: true,
num: 220,
gen: 3,
},

choicescarf: {
name: "Choice Scarf",
spritenum: 69,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (pokemon.volatiles['choicelock']) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
}
pokemon.removeVolatile('choicelock');
},
onModifyMove(move, pokemon) {
pokemon.addVolatile('choicelock');
},
onModifySpe(spe, pokemon) {
if (pokemon.volatiles['dynamax']) return;
return this.chainModify(1.5);
},
isChoice: true,
num: 287,
gen: 4,
},

choicespecs: {
name: "Choice Specs",
spritenum: 70,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (pokemon.volatiles['choicelock']) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
}
pokemon.removeVolatile('choicelock');
},
onModifyMove(move, pokemon) {
pokemon.addVolatile('choicelock');
},
onModifySpAPriority: 1,
onModifySpA(spa, pokemon) {
if (pokemon.volatiles['dynamax']) return;
return this.chainModify(1.5);
},
isChoice: true,
num: 297,
gen: 4,
},

chopleberry: {
name: "Chople Berry",
spritenum: 71,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fighting",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Fighting' && target.getMoveHitData(move).typeMod > 0) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 189,
gen: 4,
},

clawfossil: {
name: "Claw Fossil",
spritenum: 72,
fling: {
basePower: 100,
},
num: 100,
gen: 3,
isNonstandard: "Past",
},

clearamulet: {
name: "Clear Amulet",
spritenum: 747,
fling: {
basePower: 30,
},
onTryBoost(boost, target, source, effect) {
if (source && target === source) return;
let showMsg = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! < 0) {
delete boost[i];
showMsg = true;
}
}
if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
this.add('-fail', target, 'unboost', '[from] item: Clear Amulet', '[of] ' + target);
}
},
num: 1882,
gen: 9,
},

cloversweet: {
name: "Clover Sweet",
spritenum: 707,
fling: {
basePower: 10,
},
num: 1112,
gen: 8,
isNonstandard: "Past",
},

cobaberry: {
name: "Coba Berry",
spritenum: 76,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Flying",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Flying' && target.getMoveHitData(move).typeMod > 0) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 192,
gen: 4,
},

colburberry: {
name: "Colbur Berry",
spritenum: 78,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Dark",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Dark' && target.getMoveHitData(move).typeMod > 0) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;
if (target.eatItem()) {
this.debug('-50% reduction');
this.add('-enditem', target, this.effect, '[weaken]');
return this.chainModify(0.5);
}
}
},
onEat() { },
num: 198,
gen: 4,
},

cornnberry: {
name: "Cornn Berry",
spritenum: 81,
isBerry: true,
naturalGift: {
basePower: 90,
type: "Bug",
},
onEat: false,
num: 175,
gen: 3,
isNonstandard: "Past",
},

coverfossil: {
name: "Cover Fossil",
spritenum: 85,
fling: {
basePower: 100,
},
num: 572,
gen: 5,
isNonstandard: "Past",
},

covertcloak: {