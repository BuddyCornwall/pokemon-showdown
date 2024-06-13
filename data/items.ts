export const Items: {[itemid: string]: ItemData} = {

siriusarmilla: {
name: "Sirius Armilla",
spritenum: 242,
fling: {
basePower: 10,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 30);
},
onDamagePriority: -40,
onDamage(damage, target, source, effect) {
if (this.randomChance(15, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
this.add("-activate", target, "item: Sirius Armilla");
return target.hp - 1;
}
},
},

denebcaestus: {
name: "Deneb Caestus",
spritenum: 242,
fling: {
basePower: 10,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 30);
},
onDamagePriority: -40,
onDamage(damage, target, source, effect) {
if (this.randomChance(15, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
this.add("-activate", target, "item: Deneb Caestus");
return target.hp - 1;
}
},
},

acrabberry: {
name: "Acrab Berry",
spritenum: 472,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Psychic",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 3 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
const stats: BoostID[] = [];
let stat: BoostID;
for (stat in pokemon.boosts) {
if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
stats.push(stat);
}
}
if (stats.length) {
const randomStat = this.sample(stats);
const boost: SparseBoostsTable = {};
boost[randomStat] = 3;
this.boost(boost);
}
},
num: 207,
gen: 3,
},

mattberry: {
name: "Matt Berry",
spritenum: 319,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Poison",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(1);
},
num: 155,
gen: 3,
},

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
this.add("-activate", target, "item: Captains Armband");
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
return this.chainModify([120, 100]);
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
return this.chainModify([120, 100]);
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
return this.chainModify([130, 100]);
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
return this.chainModify([120, 100]);
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
return this.chainModify([120, 100]);
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
return this.chainModify([120, 100]);
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
name: "Dragonium Z",
spritenum: 645,
onPlate: 'Dragon',
onTakeItem: false,
zMove: true,
zMoveType: "Dragon",
forcedForme: "Arceus-Dragon",
num: 790,
gen: 7,
isNonstandard: "Past",
},

dreadplate: {
name: "Dread Plate",
spritenum: 110,
onPlate: 'Dark',
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Dark') {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Dark",
num: 312,
gen: 4,
},

dreamball: {
name: "Dream Ball",
spritenum: 111,
num: 576,
gen: 5,
isPokeball: true,
},

dubiousdisc: {
name: "Dubious Disc",
spritenum: 113,
fling: {
basePower: 50,
},
num: 324,
gen: 4,
isNonstandard: "Past",
},

durinberry: {
name: "Durin Berry",
spritenum: 114,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Water",
},
onEat: false,
num: 182,
gen: 3,
isNonstandard: "Past",
},

duskball: {
name: "Dusk Ball",
spritenum: 115,
num: 13,
gen: 4,
isPokeball: true,
},

duskstone: {
name: "Dusk Stone",
spritenum: 116,
fling: {
basePower: 80,
},
num: 108,
gen: 4,
},

earthplate: {
name: "Earth Plate",
spritenum: 117,
onPlate: 'Ground',
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Ground') {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Ground",
num: 305,
gen: 4,
},

eeviumz: {
name: "Eevium Z",
spritenum: 657,
onTakeItem: false,
zMove: "Extreme Evoboost",
zMoveFrom: "Last Resort",
itemUser: ["Eevee"],
num: 805,
gen: 7,
isNonstandard: "Past",
},

ejectbutton: {
name: "Eject Button",
spritenum: 118,
fling: {
basePower: 30,
},
onAfterMoveSecondaryPriority: 2,
onAfterMoveSecondary(target, source, move) {
if (source && source !== target && target.hp && move && move.category !== 'Status' && !move.flags['futuremove']) {
if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.beingCalledBack || target.isSkyDropped()) return;
if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
for (const pokemon of this.getAllActive()) {
if (pokemon.switchFlag === true) return;
}
target.switchFlag = true;
if (target.useItem()) {
source.switchFlag = false;
} else {
target.switchFlag = false;
}
}
},
num: 547,
gen: 5,
},

ejectpack: {
name: "Eject Pack",
spritenum: 714,
fling: {
basePower: 50,
},
onAfterBoost(boost, target, source, effect) {
if (this.activeMove?.id === 'partingshot') return;
let eject = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! < 0) {
eject = true;
}
}
if (eject) {
if (target.hp) {
if (!this.canSwitch(target.side)) return;
if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
for (const pokemon of this.getAllActive()) {
if (pokemon.switchFlag === true) return;
}
if (target.useItem()) target.switchFlag = true;
}
}
},
num: 1119,
gen: 8,
},

electirizer: {
name: "Electirizer",
spritenum: 119,
fling: {
basePower: 80,
},
num: 322,
gen: 4,
isNonstandard: "Past",
},

electricgem: {
name: "Electric Gem",
spritenum: 120,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
if (move.type === 'Electric' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 550,
gen: 5,
isNonstandard: "Past",
},

electricmemory: {
name: "Electric Memory",
spritenum: 679,
onMemory: 'Electric',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Electric",
itemUser: ["Silvally-Electric"],
num: 915,
gen: 7,
isNonstandard: "Past",
},

electricseed: {
name: "Electric Seed",
spritenum: 664,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (!pokemon.ignoringItem() && this.field.isTerrain('electricterrain')) {
pokemon.useItem();
}
},
onTerrainChange(pokemon) {
if (this.field.isTerrain('electricterrain')) {
pokemon.useItem();
}
},
boosts: {
def: 1,
spd: 1,
},
num: 881,
gen: 7,
},

electriumz: {
name: "Electrium Z",
spritenum: 634,
onPlate: 'Electric',
onTakeItem: false,
zMove: true,
zMoveType: "Electric",
forcedForme: "Arceus-Electric",
num: 779,
gen: 7,
isNonstandard: "Past",
},

enigmaberry: {
name: "Enigma Berry",
spritenum: 124,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Bug",
},
onHit(target, source, move) {
if (move && target.getMoveHitData(move).typeMod > 0) {
if (target.eatItem()) {
this.heal(target.baseMaxhp / 4);
}
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat() { },
num: 208,
gen: 3,
isNonstandard: "Unobtainable",
},

eviolite: {
name: "Eviolite",
spritenum: 130,
fling: {
basePower: 40,
},
onModifyDefPriority: 2,
onModifyDef(def, pokemon) {
if (pokemon.baseSpecies.nfe) {
return this.chainModify(1.5);
}
},
onModifySpDPriority: 2,
onModifySpD(spd, pokemon) {
if (pokemon.baseSpecies.nfe) {
return this.chainModify(1.5);
}
},
num: 538,
gen: 5,
},

eviomax: {
name: "Eviomax",
spritenum: 130,
fling: {
basePower: 40,
},
onModifyDefPriority: 2,
onModifyDef(def, pokemon) {
if (pokemon.baseSpecies.fe) {
return this.chainModify(1.25);
}
},
onModifySpDPriority: 2,
onModifySpD(spd, pokemon) {
if (pokemon.baseSpecies.fe) {
return this.chainModify(1.25);
}
},
num: 538,
gen: 5,
},

fairiumz: {
name: "Fairium Z",
spritenum: 648,
onPlate: 'Fairy',
onTakeItem: false,
zMove: true,
zMoveType: "Fairy",
forcedForme: "Arceus-Fairy",
num: 793,
gen: 7,
isNonstandard: "Past",
},

fairygem: {
name: "Fairy Gem",
spritenum: 611,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
if (move.type === 'Fairy' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 715,
gen: 6,
isNonstandard: "Past",
},

fairymemory: {
name: "Fairy Memory",
spritenum: 684,
onMemory: 'Fairy',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Fairy",
itemUser: ["Silvally-Fairy"],
num: 920,
gen: 7,
isNonstandard: "Past",
},

fastball: {
name: "Fast Ball",
spritenum: 137,
num: 492,
gen: 2,
isPokeball: true,
},

fightinggem: {
name: "Fighting Gem",
spritenum: 139,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
if (move.type === 'Fighting' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 553,
gen: 5,
isNonstandard: "Past",
},

fightingmemory: {
name: "Fighting Memory",
spritenum: 668,
onMemory: 'Fighting',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Fighting",
itemUser: ["Silvally-Fighting"],
num: 904,
gen: 7,
isNonstandard: "Past",
},

fightiniumz: {
name: "Fightinium Z",
spritenum: 637,
onPlate: 'Fighting',
onTakeItem: false,
zMove: true,
zMoveType: "Fighting",
forcedForme: "Arceus-Fighting",
num: 782,
gen: 7,
isNonstandard: "Past",
},

figyberry: {
name: "Figy Berry",
spritenum: 140,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Bug",
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
if (pokemon.getNature().minus === 'atk') {
pokemon.addVolatile('confusion');
}
},
num: 159,
gen: 3,
},

firegem: {
name: "Fire Gem",
spritenum: 141,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
if (move.type === 'Fire' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 548,
gen: 5,
isNonstandard: "Past",
},

firememory: {
name: "Fire Memory",
spritenum: 676,
onMemory: 'Fire',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Fire",
itemUser: ["Silvally-Fire"],
num: 912,
gen: 7,
isNonstandard: "Past",
},

firestone: {
name: "Fire Stone",
spritenum: 142,
fling: {
basePower: 30,
},
num: 82,
gen: 1,
},

firiumz: {
name: "Firium Z",
spritenum: 632,
onPlate: 'Fire',
onTakeItem: false,
zMove: true,
zMoveType: "Fire",
forcedForme: "Arceus-Fire",
num: 777,
gen: 7,
isNonstandard: "Past",
},

fistplate: {
name: "Fist Plate",
spritenum: 143,
onPlate: 'Fighting',
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fighting') {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Fighting",
num: 303,
gen: 4,
},

flameorb: {
name: "Flame Orb",
spritenum: 145,
fling: {
basePower: 30,
status: 'brn',
},
onResidualOrder: 28,
onResidualSubOrder: 3,
onResidual(pokemon) {
pokemon.trySetStatus('brn', pokemon);
},
num: 273,
gen: 4,
},

flameplate: {
name: "Flame Plate",
spritenum: 146,
onPlate: 'Fire',
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fire') {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Fire",
num: 298,
gen: 4,
},

floatstone: {
name: "Float Stone",
spritenum: 147,
fling: {
basePower: 30,
},
onModifyWeight(weighthg) {
return this.trunc(weighthg / 2);
},
num: 539,
gen: 5,
},

flowersweet: {
name: "Flower Sweet",
spritenum: 708,
fling: {
basePower: 0,
},
num: 1113,
gen: 8,
isNonstandard: "Past",
},

flyinggem: {
name: "Flying Gem",
spritenum: 149,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
if (move.type === 'Flying' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 556,
gen: 5,
isNonstandard: "Past",
},

flyingmemory: {
name: "Flying Memory",
spritenum: 669,
onMemory: 'Flying',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Flying",
itemUser: ["Silvally-Flying"],
num: 905,
gen: 7,
isNonstandard: "Past",
},

flyiniumz: {
name: "Flyinium Z",
spritenum: 640,
onPlate: 'Flying',
onTakeItem: false,
zMove: true,
zMoveType: "Flying",
forcedForme: "Arceus-Flying",
num: 785,
gen: 7,
isNonstandard: "Past",
},

focusband: {
name: "Focus Band",
spritenum: 150,
fling: {
basePower: 10,
},
onDamagePriority: -40,
onDamage(damage, target, source, effect) {
if (this.randomChance(16.5, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
this.add("-activate", target, "item: Focus Band");
return target.hp - 1;
}
},
num: 230,
gen: 2,
},

focussash: {
name: "Focus Sash",
spritenum: 151,
fling: {
basePower: 10,
},
onDamagePriority: -40,
onDamage(damage, target, source, effect) {
if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
if (target.useItem()) {
return target.hp - 1;
}
}
},
num: 275,
gen: 4,
},

fossilizedbird: {
name: "Fossilized Bird",
spritenum: 700,
fling: {
basePower: 100,
},
num: 1105,
gen: 8,
isNonstandard: "Past",
},

fossilizeddino: {
name: "Fossilized Dino",
spritenum: 703,
fling: {
basePower: 100,
},
num: 1108,
gen: 8,
isNonstandard: "Past",
},

fossilizeddrake: {
name: "Fossilized Drake",
spritenum: 702,
fling: {
basePower: 100,
},
num: 1107,
gen: 8,
isNonstandard: "Past",
},

fossilizedfish: {
name: "Fossilized Fish",
spritenum: 701,
fling: {
basePower: 100,
},
num: 1106,
gen: 8,
isNonstandard: "Past",
},

friendball: {
name: "Friend Ball",
spritenum: 153,
num: 497,
gen: 2,
isPokeball: true,
},

fullincense: {
name: "Full Incense",
spritenum: 155,
fling: {
basePower: 10,
},
onFractionalPriority: -0.1,
num: 316,
gen: 4,
isNonstandard: "Past",
},

galaricacuff: {
name: "Galarica Cuff",
spritenum: 739,
fling: {
basePower: 30,
},
num: 1582,
gen: 8,
isNonstandard: "Unobtainable",
},

galaricawreath: {
name: "Galarica Wreath",
spritenum: 740,
fling: {
basePower: 30,
},
num: 1592,
gen: 8,
isNonstandard: "Unobtainable",
},

galladite: {
name: "Galladite",
spritenum: 616,
megaStone: "Gallade-Mega",
megaEvolves: "Gallade",
itemUser: ["Gallade"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 756,
gen: 6,
isNonstandard: "Past",
},

ganlonberry: {
name: "Ganlon Berry",
spritenum: 158,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Ice",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
this.boost({def: 1.5});
},
num: 202,
gen: 3,
},

garchompite: {
name: "Garchompite",
spritenum: 589,
megaStone: "Garchomp-Mega",
megaEvolves: "Garchomp",
itemUser: ["Garchomp"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 683,
gen: 6,
isNonstandard: "Past",
},

gardevoirite: {
name: "Gardevoirite",
spritenum: 587,
megaStone: "Gardevoir-Mega",
megaEvolves: "Gardevoir",
itemUser: ["Gardevoir"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 657,
gen: 6,
isNonstandard: "Past",
},

gengarite: {
name: "Gengarite",
spritenum: 588,
megaStone: "Gengar-Mega",
megaEvolves: "Gengar",
itemUser: ["Gengar"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 656,
gen: 6,
isNonstandard: "Past",
},

ghostgem: {
name: "Ghost Gem",
spritenum: 161,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
if (move.type === 'Ghost' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 560,
gen: 5,
isNonstandard: "Past",
},

ghostmemory: {
name: "Ghost Memory",
spritenum: 674,
onMemory: 'Ghost',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Ghost",
itemUser: ["Silvally-Ghost"],
num: 910,
gen: 7,
isNonstandard: "Past",
},

ghostiumz: {
name: "Ghostium Z",
spritenum: 644,
onPlate: 'Ghost',
onTakeItem: false,
zMove: true,
zMoveType: "Ghost",
forcedForme: "Arceus-Ghost",
num: 789,
gen: 7,
isNonstandard: "Past",
},

glalitite: {
name: "Glalitite",
spritenum: 623,
megaStone: "Glalie-Mega",
megaEvolves: "Glalie",
itemUser: ["Glalie"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 763,
gen: 6,
isNonstandard: "Past",
},

goldbottlecap: {
name: "Gold Bottle Cap",
spritenum: 697,
fling: {
basePower: 30,
},
num: 796,
gen: 7,
},

grassgem: {
name: "Grass Gem",
spritenum: 172,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
if (move.type === 'Grass' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 551,
gen: 5,
isNonstandard: "Past",
},

grassmemory: {
name: "Grass Memory",
spritenum: 678,
onMemory: 'Grass',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Grass",
itemUser: ["Silvally-Grass"],
num: 914,
gen: 7,
isNonstandard: "Past",
},

grassiumz: {
name: "Grassium Z",
spritenum: 635,
onPlate: 'Grass',
onTakeItem: false,
zMove: true,
zMoveType: "Grass",
forcedForme: "Arceus-Grass",
num: 780,
gen: 7,
isNonstandard: "Past",
},

grassyseed: {
name: "Grassy Seed",
spritenum: 667,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (!pokemon.ignoringItem() && this.field.isTerrain('grassyterrain')) {
pokemon.useItem();
}
},
onTerrainChange(pokemon) {
if (this.field.isTerrain('grassyterrain')) {
pokemon.useItem();
}
},
boosts: {
def: 1,
spd: 1,
},
num: 884,
gen: 7,
},

greatball: {
name: "Great Ball",
spritenum: 174,
num: 3,
gen: 1,
isPokeball: true,
},

grepaberry: {
name: "Grepa Berry",
spritenum: 178,
isBerry: true,
naturalGift: {
basePower: 90,
type: "Flying",
},
onEat: false,
num: 173,
gen: 3,
},

gripclaw: {
name: "Grip Claw",
spritenum: 179,
fling: {
basePower: 90,
},
// implemented in statuses
num: 286,
gen: 4,
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Poison",
num: 304,
gen: 4,
},

twistedspoon: {
name: "Twisted Spoon",
spritenum: 520,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Psychic') {
return this.chainModify([120, 100]);
}
},
num: 248,
gen: 2,
},

tyranitarite: {
name: "Tyranitarite",
spritenum: 607,
megaStone: "Tyranitar-Mega",
megaEvolves: "Tyranitar",
itemUser: ["Tyranitar"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 669,
gen: 6,
isNonstandard: "Past",
},

ultraball: {
name: "Ultra Ball",
spritenum: 521,
num: 2,
gen: 1,
isPokeball: true,
},

ultranecroziumz: {
name: "Ultranecrozium Z",
spritenum: 687,
onTakeItem: false,
zMove: "Light That Burns the Sky",
zMoveFrom: "Photon Geyser",
itemUser: ["Necrozma-Ultra"],
num: 923,
gen: 7,
isNonstandard: "Past",
},

upgrade: {
name: "Up-Grade",
spritenum: 523,
fling: {
basePower: 30,
},
num: 252,
gen: 2,
isNonstandard: "Past",
},

utilityumbrella: {
name: "Utility Umbrella",
spritenum: 718,
fling: {
basePower: 60,
},
// Partially implemented in Pokemon.effectiveWeather() in sim/pokemon.ts
onStart(pokemon) {
if (!pokemon.ignoringItem()) return;
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
}
},
onUpdate(pokemon) {
if (!this.effectState.inactive) return;
this.effectState.inactive = false;
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
}
},
onEnd(pokemon) {
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
}
this.effectState.inactive = true;
},
num: 1123,
gen: 8,
},

venusaurite: {
name: "Venusaurite",
spritenum: 608,
megaStone: "Venusaur-Mega",
megaEvolves: "Venusaur",
itemUser: ["Venusaur"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: 659,
gen: 6,
isNonstandard: "Past",
},

wacanberry: {
name: "Wacan Berry",
spritenum: 526,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Electric",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Electric' && target.getMoveHitData(move).typeMod > 0) {
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
num: 186,
gen: 4,
},

watergem: {
name: "Water Gem",
spritenum: 528,
isGem: true,
onSourceTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
if (move.type === 'Water' && source.useItem()) {
source.addVolatile('gem');
}
},
num: 549,
gen: 5,
isNonstandard: "Past",
},

watermemory: {
name: "Water Memory",
spritenum: 677,
onMemory: 'Water',
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
return false;
}
return true;
},
forcedForme: "Silvally-Water",
itemUser: ["Silvally-Water"],
num: 913,
gen: 7,
isNonstandard: "Past",
},

waterstone: {
name: "Water Stone",
spritenum: 529,
fling: {
basePower: 30,
},
num: 84,
gen: 1,
},

wateriumz: {
name: "Waterium Z",
spritenum: 633,
onPlate: 'Water',
onTakeItem: false,
zMove: true,
zMoveType: "Water",
forcedForme: "Arceus-Water",
num: 778,
gen: 7,
isNonstandard: "Past",
},

watmelberry: {
name: "Watmel Berry",
spritenum: 530,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Fire",
},
onEat: false,
num: 181,
gen: 3,
isNonstandard: "Past",
},

waveincense: {
name: "Wave Incense",
spritenum: 531,
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Water') {
return this.chainModify([120, 100]);
}
},
num: 317,
gen: 4,
isNonstandard: "Past",
},

weaknesspolicy: {
name: "Weakness Policy",
spritenum: 609,
fling: {
basePower: 80,
},
onDamagingHit(damage, target, source, move) {
if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
target.useItem();
}
},
boosts: {
atk: 2,
spa: 2,
},
num: 639,
gen: 6,
},

wepearberry: {
name: "Wepear Berry",
spritenum: 533,
isBerry: true,
naturalGift: {
basePower: 90,
type: "Electric",
},
onEat: false,
num: 167,
gen: 3,
isNonstandard: "Past",
},

whippeddream: {
name: "Whipped Dream",
spritenum: 692,
fling: {
basePower: 80,
},
num: 646,
gen: 6,
isNonstandard: "Past",
},

whiteherb: {
name: "White Herb",
spritenum: 535,
fling: {
basePower: 10,
effect(pokemon) {
let activate = false;
const boosts: SparseBoostsTable = {};
let i: BoostID;
for (i in pokemon.boosts) {
if (pokemon.boosts[i] < 0) {
activate = true;
boosts[i] = 0;
}
}
if (activate) {
pokemon.setBoost(boosts);
this.add('-clearnegativeboost', pokemon, '[silent]');
}
},
},
onUpdate(pokemon) {
let activate = false;
const boosts: SparseBoostsTable = {};
let i: BoostID;
for (i in pokemon.boosts) {
if (pokemon.boosts[i] < 0) {
activate = true;
boosts[i] = 0;
}
}
if (activate && pokemon.useItem()) {
pokemon.setBoost(boosts);
this.add('-clearnegativeboost', pokemon, '[silent]');
}
},
num: 214,
gen: 3,
},

widelens: {
name: "Wide Lens",
spritenum: 537,
fling: {
basePower: 10,
},
onSourceModifyAccuracyPriority: -2,
onSourceModifyAccuracy(accuracy) {
if (typeof accuracy === 'number') {
return this.chainModify([120, 100]);
}
},
num: 265,
gen: 4,
},

wikiberry: {
name: "Wiki Berry",
spritenum: 538,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Rock",
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
if (pokemon.getNature().minus === 'spa') {
pokemon.addVolatile('confusion');
}
},
num: 160,
gen: 3,
},

yacheberry: {
name: "Yache Berry",
spritenum: 567,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ice",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Ice' && target.getMoveHitData(move).typeMod > 0) {
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
num: 188,
gen: 4,
},

zapplate: {
name: "Zap Plate",
spritenum: 572,
onPlate: 'Electric',
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Electric') {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
return false;
}
return true;
},
forcedForme: "Arceus-Electric",
num: 300,
gen: 4,
},

zoomlens: {
name: "Zoom Lens",
spritenum: 574,
fling: {
basePower: 10,
},
onSourceModifyAccuracyPriority: -2,
onSourceModifyAccuracy(accuracy, target) {
if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
this.debug('Zoom Lens boosting accuracy');
return this.chainModify([120, 100]);
}
},
num: 276,
gen: 4,
},

berserkgene: {
name: "Berserk Gene",
spritenum: 388,
onUpdate(pokemon) {
if (pokemon.useItem()) {
pokemon.addVolatile('confusion');
}
},
boosts: {
atk: 2,
},
num: 0,
gen: 2,
isNonstandard: "Past",
},

berry: {
name: "Berry",
spritenum: 319,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Poison",
},
onResidualOrder: 5,
onResidual(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(10);
},
num: 155,
gen: 2,
isNonstandard: "Past",
},

bitterberry: {
name: "Bitter Berry",
spritenum: 334,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ground",
},
onUpdate(pokemon) {
if (pokemon.volatiles['confusion']) {
pokemon.eatItem();
}
},
onEat(pokemon) {
pokemon.removeVolatile('confusion');
},
num: 156,
gen: 2,
isNonstandard: "Past",
},

burntberry: {
name: "Burnt Berry",
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
gen: 2,
isNonstandard: "Past",
},

goldberry: {
name: "Gold Berry",
spritenum: 448,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Psychic",
},
onResidualOrder: 5,
onResidual(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(30);
},
num: 158,
gen: 2,
isNonstandard: "Past",
},

iceberry: {
name: "Ice Berry",
spritenum: 381,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Grass",
},
onUpdate(pokemon) {
if (pokemon.status === 'brn') {
pokemon.eatItem();
}
},
onEat(pokemon) {
if (pokemon.status === 'brn') {
pokemon.cureStatus();
}
},
num: 152,
gen: 2,
isNonstandard: "Past",
},

mintberry: {
name: "Mint Berry",
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
gen: 2,
isNonstandard: "Past",
},

miracleberry: {
name: "Miracle Berry",
spritenum: 262,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Flying",
},
onUpdate(pokemon) {
if (pokemon.status || pokemon.volatiles['confusion']) {
pokemon.eatItem();
}
},
onEat(pokemon) {
pokemon.cureStatus();
pokemon.removeVolatile('confusion');
},
num: 157,
gen: 2,
isNonstandard: "Past",
},

mysteryberry: {
name: "Mystery Berry",
spritenum: 244,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fighting",
},
onUpdate(pokemon) {
if (!pokemon.hp) return;
const moveSlot = pokemon.lastMove && pokemon.getMoveData(pokemon.lastMove.id);
if (moveSlot && moveSlot.pp === 0) {
pokemon.addVolatile('leppaberry');
pokemon.volatiles['leppaberry'].moveSlot = moveSlot;
pokemon.eatItem();
}
},
onEat(pokemon) {
let moveSlot;
if (pokemon.volatiles['leppaberry']) {
moveSlot = pokemon.volatiles['leppaberry'].moveSlot;
pokemon.removeVolatile('leppaberry');
} else {
let pp = 99;
for (const possibleMoveSlot of pokemon.moveSlots) {
if (possibleMoveSlot.pp < pp) {
moveSlot = possibleMoveSlot;
pp = moveSlot.pp;
}
}
}
moveSlot.pp += 5;
if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
this.add('-activate', pokemon, 'item: Mystery Berry', moveSlot.move);
},
num: 154,
gen: 2,
isNonstandard: "Past",
},

pinkbow: {
name: "Pink Bow",
spritenum: 444,
onBasePower(basePower, user, target, move) {
if (move.type === 'Normal') {
return basePower * 1.1;
}
},
num: 251,
gen: 2,
isNonstandard: "Past",
},

polkadotbow: {
name: "Polkadot Bow",
spritenum: 444,
onBasePower(basePower, user, target, move) {
if (move.type === 'Normal') {
return basePower * 1.1;
}
},
num: 251,
gen: 2,
isNonstandard: "Past",
},

przcureberry: {
name: "PRZ Cure Berry",
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
gen: 2,
isNonstandard: "Past",
},

psncureberry: {
name: "PSN Cure Berry",
spritenum: 333,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Electric",
},
onUpdate(pokemon) {
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
pokemon.eatItem();
}
},
onEat(pokemon) {
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
pokemon.cureStatus();
}
},
num: 151,
gen: 2,
isNonstandard: "Past",
},

crucibellite: {
name: "Crucibellite",
spritenum: 577,
megaStone: "Crucibelle-Mega",
megaEvolves: "Crucibelle",
itemUser: ["Crucibelle"],
onTakeItem(item, source) {
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
return true;
},
num: -1,
gen: 6,
isNonstandard: "CAP",
},

vilevial: {
name: "Vile Vial",
spritenum: 752,
fling: {
basePower: 60,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === -66 && ['Poison', 'Flying'].includes(move.type)) {
return this.chainModify([120, 100]);
}
},
onTakeItem(item, pokemon, source) {
if (source?.baseSpecies.num === -66 || pokemon.baseSpecies.num === -66) {
return false;
}
return true;
},
forcedForme: "Venomicon-Epilogue",
itemUser: ["Venomicon-Epilogue"],
num: -2,
gen: 8,
isNonstandard: "CAP",
},

magnesificent: {
name: "Magnesificent", 
onModifyWeight(weighthg) {
return this.trunc(weighthg / 2);
},
isBreakable: true,
},

donnyosmium: {
name: "Donny Osmium",
onModifyWeightPriority: 1,
onModifyWeight(weighthg) {
return weighthg * 2.5;
},
isBreakable: true,
},

egg: {
name: "Egg",
onDamagingHitOrder: 1,
onDamagingHit: function (damage, target, source, move) {
this.add('-activate', target, 'item: Egg');
source.addVolatile('confusion', target);
let damageAmount = Math.ceil(source.maxhp / 10);
this.damage(damageAmount, source, target);
target.setItem('');
},
onUse: function (pokemon) {
if (!pokemon.volatiles['eggused']) {
pokemon.addVolatile('eggused');
} else {
return false;
}
},
},

beachglass: {
name: "Beach Glass",
onResidualOrder: 26,
onResidualSubOrder: 1,
onResidual: function (pokemon) {
if (this.field.isWeather('sunnyday')) {
this.boost({spe: 1}, pokemon);
} else {
this.boost({spe: -1}, pokemon);
}
},
},

iceskates: {
name: "iceskates",
onResidualOrder: 26,
onResidualSubOrder: 1,
onResidual: function (pokemon) {
if (this.field.isWeather('snow')) {
this.boost({spe: 1}, pokemon);
} else {
this.boost({spe: -1}, pokemon);
}
},
},

luckycoin: {
name: "Lucky Coin",
onModifyMovePriority: -1,
onModifyMove: function (move, attacker, defender) {
if (!attacker.volatiles['luckycoinused'] && attacker.activeTurns === 1) {
attacker.addVolatile('luckycoinused');
move.willCrit = true;
this.add('-message', attacker.name + "'s attack became a critical hit due to the Lucky Coin!");
}
},
},

capsule: {
name: "Capsule",
onDamagingHitOrder: 2,
onDamagingHit(damage, target, source, move) {
if (!target.usedCapsule) {
const statuses = ['brn', 'par', 'frz', 'psn', 'tox', 'slp'];
const randomStatus = this.sample(statuses);
this.add('-message', `${source.name} was affected by a Capsule!`);
this.add('-status', source, randomStatus);
target.usedCapsule = true;
}
},
},

voodoodoll: {
name: "Voodoo Doll",
onDamagePriority: -100,
onDamage: function (damage, target, source, effect) {
if (effect && effect.effectType === 'Move' && effect.isContact && damage > 0) {
let damageToReflect = Math.floor(damage / 4);
this.damage(damageToReflect, source, target);
this.add('-message', target.name + "'s Voodoo Doll reflects " + damageToReflect + " damage back at " + source.name + "!");
}
},
},

heartscale: {
name: "Heart Scale",
onFaint: function (source) {
this.add('-message', source.side.name + "'s Heart Scale emits a radiant light, confusing all opposing Pokémon!");
for (const foeActive of source.side.foe.active) {
if (foeActive && foeActive.hp) {
foeActive.addVolatile('confusion');
}
}
},
},

yellowcard: {
name: "Yellow Card",
onStart: function (pokemon) {
pokemon.itemUsageCount = 1;
},
onBeforeMove: function (attacker, defender, move) {
if (defender.side !== attacker.side && !defender.volatiles['yellowcard']) {
defender.addVolatile('yellowcard');
this.add('-message', defender.name + ' was shown a Yellow Card and cannot attack this turn!');
if (defender.item) {
let item = this.dex.items.get(defender.item);
if (item) {
this.add('-enditem', defender, item, '[consumed]');
}
}
defender.setItem('');
defender.itemUsageCount = 0;
return false;
}
},
desc: "Stops the foe from attacking for one turn. Single use.",
},

scorchingsandsstone: {
name: 'Scorching Sands Stone',
onModifyMovePriority: -1,
onModifyMove(move) {
if (move.flags['contact'] && this.field.isWeather('sandstorm')) {
if (!move.secondaries) move.secondaries = [];
move.secondaries.push({
chance: 33,
status: 'brn',
});
}
},
},

rainbowreflector: {
name: 'Rainbow Reflector',
onDamagingHitOrder: 2,
onDamagingHit(damage, target, source, move) {
if (move.category === 'Special' && this.field.isWeather('raindance')) {
this.damage(source.baseMaxhp / 6, source, target);
}
},
},

};