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
return this.chainModify([130, 100]);
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

cellsynergysurge: {
name: "Cell Synergy Surge",
spritenum: 60,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Electric') {
target.useItem();
}
},
boosts: {
atk: 1,
spa: 1,
},
num: 546,
gen: 5,
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

covertcloak: {
name: "Covert Cloak",
spritenum: 750,
fling: {
basePower: 30,
},
onModifySecondaries(secondaries) {
this.debug('Covert Cloak prevent secondary');
return secondaries.filter(effect => !!(effect.self || effect.dustproof));
},
num: 1885,
gen: 9,
},

custapberry: {
name: "Custap Berry",
spritenum: 86,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Ghost",
},
onFractionalPriorityPriority: -2,
onFractionalPriority(priority, pokemon) {
if (
priority <= 0 &&
(pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony))
) {
if (pokemon.eatItem()) {
this.add('-activate', pokemon, 'item: Custap Berry', '[consumed]');
return 0.1;
}
}
},
onEat() { },
num: 210,
gen: 4,
isNonstandard: "Unobtainable",
},

damprock: {
name: "Damp Rock",
spritenum: 88,
fling: {
basePower: 60,
},
num: 285,
gen: 4,
},

darkband: {
name: "Dark Band",
spritenum: 60,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Dark') {
target.useItem();
}
},
boosts: {
atk: 1,
spa: 1,
},
num: 546,
gen: 5,
},

donnyosmium: {
name: "Donny Osmium",
onModifyWeightPriority: 1,
onModifyWeight(weighthg) {
return weighthg * 2.5;
},
isBreakable: true,
},

dragonball: {
name: "Dragon Ball",
spritenum: 749,
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['beam']) {
this.debug('Dragon Ball boost');
return this.chainModify([110, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['beam']) delete move.flags['contact'];
},
num: 1884,
gen: 9,
},

dragonfang: {
name: "Dragon Fang",
spritenum: 106,
fling: {
basePower: 70,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Dragon') {
return this.chainModify([120, 100]);
}
},
num: 250,
gen: 2,
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

expertbelt: {
name: "Expert Belt",
spritenum: 132,
fling: {
basePower: 10,
},
onModifyDamage(damage, source, target, move) {
if (move && target.getMoveHitData(move).typeMod > 0) {
return this.chainModify([110, 10]);
}
},
num: 268,
gen: 4,
},

fairyscale: {
name: "Fairy Scale",
spritenum: 606,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Fairy') {
target.useItem();
}
},
boosts: {
atk: 1,
spa: 1,
},
num: 649,
gen: 6,
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

goldenbullet: {
name: "Golden Bullet",
spritenum: 749,
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['bullet']) {
this.debug('Golden Bullet boost');
return this.chainModify([110, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['bullet']) delete move.flags['contact'];
},
num: 1884,
gen: 9,
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

habanberry: {
name: "Haban Berry",
spritenum: 185,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Dragon",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Dragon' && target.getMoveHitData(move).typeMod > 0) {
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
num: 197,
gen: 4,
},

hardstone: {
name: "Hard Stone",
spritenum: 187,
fling: {
basePower: 100,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Rock') {
return this.chainModify([120, 100]);
}
},
num: 238,
gen: 2,
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

heatrock: {
name: "Heat Rock",
spritenum: 193,
fling: {
basePower: 60,
},
num: 284,
gen: 4,
},

heavydutyboots: {
name: "Heavy-Duty Boots",
spritenum: 715,
fling: {
basePower: 80,
},
num: 1120,
gen: 8,
// Hazard Immunity implemented in moves.ts
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

icyrock: {
name: "Icy Rock",
spritenum: 221,
fling: {
basePower: 40,
},
num: 282,
gen: 4,
},

ironball: {
name: "Iron Ball",
spritenum: 224,
fling: {
basePower: 130,
},
onEffectiveness(typeMod, target, type, move) {
if (!target) return;
if (target.volatiles['ingrain'] || target.volatiles['smackdown'] || this.field.getPseudoWeather('gravity')) return;
if (move.type === 'Ground' && target.hasType('Flying')) return 0;
},
// airborneness negation implemented in sim/pokemon.js:Pokemon#isGrounded
onModifySpe(spe) {
return this.chainModify(0.5);
},
num: 278,
gen: 4,
},

jabocaberry: {
name: "Jaboca Berry",
spritenum: 230,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Dragon",
},
onDamagingHit(damage, target, source, move) {
if (move.category === 'Physical' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
if (target.eatItem()) {
this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
}
}
},
onEat() { },
num: 211,
gen: 4,
isNonstandard: "Unobtainable",
},

kasibberry: {
name: "Kasib Berry",
spritenum: 233,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ghost",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Ghost' && target.getMoveHitData(move).typeMod > 0) {
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
num: 196,
gen: 4,
},

kebiaberry: {
name: "Kebia Berry",
spritenum: 234,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Poison",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Poison' && target.getMoveHitData(move).typeMod > 0) {
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
num: 190,
gen: 4,
},

keeberry: {
name: "Kee Berry",
spritenum: 593,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Fairy",
},
onAfterMoveSecondary(target, source, move) {
if (move.category === 'Physical') {
if (move.id === 'present' && move.heal) return;
target.eatItem();
}
},
onEat(pokemon) {
this.boost({def: 1.5});
},
num: 687,
gen: 6,
isNonstandard: "Unobtainable",
},

kingsrock: {
name: "King's Rock",
spritenum: 236,
fling: {
basePower: 30,
volatileStatus: 'flinch',
},
onModifyMovePriority: -1,
onModifyMove(move) {
if (move.category !== "Status") {
if (!move.secondaries) move.secondaries = [];
for (const secondary of move.secondaries) {
if (secondary.volatileStatus === 'flinch') return;
}
move.secondaries.push({
chance: 10,
volatileStatus: 'flinch',
});
}
},
num: 221,
gen: 2,
},

laggingtail: {
name: "Lagging Tail",
spritenum: 237,
fling: {
basePower: 10,
},
onFractionalPriority: -0.1,
num: 279,
gen: 4,
},

lansatberry: {
name: "Lansat Berry",
spritenum: 238,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Flying",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
pokemon.addVolatile('focusenergy');
},
num: 206,
gen: 3,
},

leftovers: {
name: "Leftovers",
spritenum: 242,
fling: {
basePower: 10,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 13.34);
},
num: 234,
gen: 2,
},

liechiberry: {
name: "Liechi Berry",
spritenum: 248,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Grass",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
this.boost({atk: 1.5});
},
num: 201,
gen: 3,
},

lifeorb: {
name: "Life Orb",
spritenum: 249,
fling: {
basePower: 30,
},
onModifyDamage(damage, source, target, move) {
return this.chainModify([125, 100]);
},
onAfterMoveSecondarySelf(source, target, move) {
if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
this.damage(source.baseMaxhp / 4, source, source, this.dex.items.get('lifeorb'));
}
},
num: 270,
gen: 4,
},

lightclay: {
name: "Light Clay",
spritenum: 252,
fling: {
basePower: 30,
},
// implemented in the corresponding thing
num: 269,
gen: 4,
},

loadeddice: {
name: "Loaded Dice",
spritenum: 751,
fling: {
basePower: 30,
},
// partially implemented in sim/battle-actions.ts:BattleActions#hitStepMoveHitLoop
onModifyMove(move) {
if (move.multiaccuracy) {
delete move.multiaccuracy;
}
},
num: 1886,
gen: 9,
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

lumberry: {
name: "Lum Berry",
spritenum: 262,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Flying",
},
onAfterSetStatusPriority: -1,
onAfterSetStatus(status, pokemon) {
pokemon.eatItem();
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
gen: 3,
},

magnesificent: {
name: "Magnesificent", 
onModifyWeight(weighthg) {
return this.trunc(weighthg / 2);
},
isBreakable: true,
},

magnet: {
name: "Magnet",
spritenum: 273,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Electric') {
return this.chainModify([120, 100]);
}
},
num: 242,
gen: 2,
},

magoberry: {
name: "Mago Berry",
spritenum: 274,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ghost",
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
if (pokemon.getNature().minus === 'spe') {
pokemon.addVolatile('confusion');
}
},
num: 161,
gen: 3,
},

marangaberry: {
name: "Maranga Berry",
spritenum: 597,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Dark",
},
onAfterMoveSecondary(target, source, move) {
if (move.category === 'Special') {
target.eatItem();
}
},
onEat(pokemon) {
this.boost({spd: 1});
},
num: 688,
gen: 6,
isNonstandard: "Unobtainable",
},

mentalherb: {
name: "Mental Herb",
spritenum: 285,
fling: {
basePower: 10,
effect(pokemon) {
const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
for (const firstCondition of conditions) {
if (pokemon.volatiles[firstCondition]) {
for (const secondCondition of conditions) {
pokemon.removeVolatile(secondCondition);
if (firstCondition === 'attract' && secondCondition === 'attract') {
this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
}
}
return;
}
}
},
},
onUpdate(pokemon) {
const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
for (const firstCondition of conditions) {
if (pokemon.volatiles[firstCondition]) {
if (!pokemon.useItem()) return;
for (const secondCondition of conditions) {
pokemon.removeVolatile(secondCondition);
if (firstCondition === 'attract' && secondCondition === 'attract') {
this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
}
}
return;
}
}
},
num: 219,
gen: 3,
},

metalcoat: {
name: "Metal Coat",
spritenum: 286,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Steel') {
return this.chainModify([120, 100]);
}
},
num: 233,
gen: 2,
},

micleberry: {
name: "Micle Berry",
spritenum: 290,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Rock",
},
onResidual(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
pokemon.addVolatile('micleberry');
},
condition: {
duration: 2,
onSourceAccuracy(accuracy, target, source, move) {
if (!move.ohko) {
this.add('-enditem', source, 'Micle Berry');
source.removeVolatile('micleberry');
if (typeof accuracy === 'number') {
return this.chainModify([120, 100]);
}
}
},
},
num: 209,
gen: 4,
isNonstandard: "Unobtainable",
},

miracleseed: {
name: "Miracle Seed",
fling: {
basePower: 30,
},
spritenum: 292,
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Grass') {
return this.chainModify([120, 100]);
}
},
num: 239,
gen: 2,
},

mirrorherb: {
name: "Mirror Herb",
spritenum: 748,
fling: {
basePower: 30,
},
onFoeAfterBoost(boost, target, source, effect) {
if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
const boostPlus: SparseBoostsTable = {};
let statsRaised = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! > 0) {
boostPlus[i] = boost[i];
statsRaised = true;
}
}
if (!statsRaised) return;
const pokemon: Pokemon = this.effectState.target;
pokemon.useItem();
this.boost(boostPlus, pokemon);
},
num: 1883,
gen: 9,
},

mistyseed: {
name: "Misty Seed",
spritenum: 666,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (!pokemon.ignoringItem() && this.field.isTerrain('mistyterrain')) {
pokemon.useItem();
}
},
onTerrainChange(pokemon) {
if (this.field.isTerrain('mistyterrain')) {
pokemon.useItem();
}
},
boosts: {
def: 1,
spd: 1,
},
num: 883,
gen: 7,
},

muscleband: {
name: "Muscle Band",
spritenum: 297,
fling: {
basePower: 10,
},
onBasePowerPriority: 16,
onBasePower(basePower, user, target, move) {
if (move.category === 'Physical') {
return this.chainModify([110, 100]);
}
},
num: 266,
gen: 4,
},

mysticwater: {
name: "Mystic Water",
spritenum: 300,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Water') {
return this.chainModify([120, 100]);
}
},
num: 243,
gen: 2,
},

nevermeltice: {
name: "Never-Melt Ice",
spritenum: 305,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ice') {
return this.chainModify([120, 100]);
}
},
num: 246,
gen: 2,
},

occaberry: {
name: "Occa Berry",
spritenum: 311,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fire",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Fire' && target.getMoveHitData(move).typeMod > 0) {
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
num: 184,
gen: 4,
},

oranberry: {
name: "Oran Berry",
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
this.heal(50);
},
num: 155,
gen: 3,
},

passhoberry: {
name: "Passho Berry",
spritenum: 329,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Water",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Water' && target.getMoveHitData(move).typeMod > 0) {
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
num: 185,
gen: 4,
},

payapaberry: {
name: "Payapa Berry",
spritenum: 330,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Psychic",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Psychic' && target.getMoveHitData(move).typeMod > 0) {
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
num: 193,
gen: 4,
},

pechaberry: {
name: "Pecha Berry",
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
gen: 3,
},

persimberry: {
name: "Persim Berry",
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
gen: 3,
},

poisonbarb: {
name: "Poison Barb",
spritenum: 343,
fling: {
basePower: 70,
status: 'psn',
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Poison') {
return this.chainModify([120, 100]);
}
},
num: 245,
gen: 2,
},

powerherb: {
onChargeMove(pokemon, target, move) {
if (pokemon.useItem()) {
this.debug('power herb - remove charge turn for ' + move.id);
this.attrLastMove('[still]');
this.addMove('-anim', pokemon, move.name, target);
return false; // skip charge turn
}
},
name: "Power Herb",
spritenum: 358,
fling: {
basePower: 10,
},
num: 271,
gen: 4,
},

protectivepads: {
name: "Protective Pads",
spritenum: 663,
fling: {
basePower: 30,
},
// protective effect handled in Battle#checkMoveMakesContact
num: 880,
gen: 7,
},

psychicseed: {
name: "Psychic Seed",
spritenum: 665,
fling: {
basePower: 10,
},
onStart(pokemon) {
if (!pokemon.ignoringItem() && this.field.isTerrain('psychicterrain')) {
pokemon.useItem();
}
},
onTerrainChange(pokemon) {
if (this.field.isTerrain('psychicterrain')) {
pokemon.useItem();
}
},
boosts: {
def: 1,
spd: 1,
},
num: 882,
gen: 7,
},

puck: {
name: "Puck",
spritenum: 60,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Steel') {
target.useItem();
}
},
boosts: {
atk: 1,
spa: 1,
},
num: 546,
gen: 5,
},

punchingglove: {
name: "Punching Glove",
spritenum: 749,
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['punch']) {
this.debug('Punching Glove boost');
return this.chainModify([110, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['punch']) delete move.flags['contact'];
},
num: 1884,
gen: 9,
},

quickclaw: {
onFractionalPriorityPriority: -2,
onFractionalPriority(priority, pokemon, target, move) {
if (move.category === "Status" && pokemon.hasAbility("myceliummight")) return;
if (priority <= 0 && this.randomChance(1, 5)) {
this.add('-activate', pokemon, 'item: Quick Claw');
return 0.1;
}
},
name: "Quick Claw",
spritenum: 373,
fling: {
basePower: 80,
},
num: 217,
gen: 2,
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

rawstberry: {
name: "Rawst Berry",
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
gen: 3,
},

redcard: {
name: "Red Card",
spritenum: 387,
fling: {
basePower: 10,
},
onAfterMoveSecondary(target, source, move) {
if (source && source !== target && source.hp && target.hp && move && move.category !== 'Status') {
if (!source.isActive || !this.canSwitch(source.side) || source.forceSwitchFlag || target.forceSwitchFlag) {
return;
}
// The item is used up even against a pokemon with Ingrain or that otherwise can't be forced out
if (target.useItem(source)) {
if (this.runEvent('DragOut', source, target, move)) {
source.forceSwitchFlag = true;
}
}
}
},
num: 542,
gen: 5,
},

rindoberry: {
name: "Rindo Berry",
spritenum: 409,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Grass",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Grass' && target.getMoveHitData(move).typeMod > 0) {
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
num: 187,
gen: 4,
},

ringtarget: {
name: "Ring Target",
spritenum: 410,
fling: {
basePower: 10,
},
onNegateImmunity: false,
num: 543,
gen: 5,
},

rockyhelmet: {
name: "Rocky Helmet",
spritenum: 417,
fling: {
basePower: 60,
},
onDamagingHitOrder: 2,
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
this.damage(source.baseMaxhp / 6, source, target);
}
},
num: 540,
gen: 5,
},

roomservice: {
name: "Room Service",
spritenum: 717,
fling: {
basePower: 100,
},
onStart(pokemon) {
if (!pokemon.ignoringItem() && this.field.getPseudoWeather('trickroom')) {
pokemon.useItem();
}
},
onAnyPseudoWeatherChange() {
const pokemon = this.effectState.target;
if (this.field.getPseudoWeather('trickroom')) {
pokemon.useItem(pokemon);
}
},
boosts: {
spe: -1,
},
num: 1122,
gen: 8,
},

roseliberry: {
name: "Roseli Berry",
spritenum: 603,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fairy",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Fairy' && target.getMoveHitData(move).typeMod > 0) {
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
num: 686,
gen: 6,
},

rowapberry: {
name: "Rowap Berry",
spritenum: 420,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Dark",
},
onDamagingHit(damage, target, source, move) {
if (move.category === 'Special' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
if (target.eatItem()) {
this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
}
}
},
onEat() { },
num: 212,
gen: 4,
isNonstandard: "Unobtainable",
},

safetygoggles: {
name: "Safety Goggles",
spritenum: 604,
fling: {
basePower: 80,
},
onImmunity(type, pokemon) {
if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
},
onTryHit(pokemon, source, move) {
if (move.flags['powder'] && pokemon !== source && this.dex.getImmunity('powder', pokemon)) {
this.add('-activate', pokemon, 'item: Safety Goggles', move.name);
return null;
}
},
num: 650,
gen: 6,
},

salacberry: {
name: "Salac Berry",
spritenum: 426,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Fighting",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
this.boost({spe: 1.5});
},
num: 203,
gen: 3,
},

scopelens: {
name: "Scope Lens",
spritenum: 429,
fling: {
basePower: 30,
},
onModifyCritRatio(critRatio) {
return critRatio + 1;
},
num: 232,
gen: 2,
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

sharpbeak: {
name: "Sharp Beak",
spritenum: 436,
fling: {
basePower: 50,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Flying') {
return this.chainModify([120, 100]);
}
},
num: 244,
gen: 2,
},

shedshell: {
name: "Shed Shell",
spritenum: 437,
fling: {
basePower: 10,
},
onTrapPokemonPriority: -10,
onTrapPokemon(pokemon) {
pokemon.trapped = pokemon.maybeTrapped = false;
},
num: 295,
gen: 4,
},

shellbell: {
name: "Shell Bell",
spritenum: 438,
fling: {
basePower: 30,
},
onAfterMoveSecondarySelfPriority: -1,
onAfterMoveSecondarySelf(pokemon, target, move) {
if (move.totalDamage && !pokemon.forceSwitchFlag) {
this.heal(move.totalDamage / 8, pokemon);
}
},
num: 253,
gen: 3,
},

shucaberry: {
name: "Shuca Berry",
spritenum: 443,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Ground",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Ground' && target.getMoveHitData(move).typeMod > 0) {
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
num: 191,
gen: 4,
},

silkscarf: {
name: "Silk Scarf",
spritenum: 444,
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Normal') {
return this.chainModify([120, 100]);
}
},
num: 251,
gen: 3,
},

silverpowder: {
name: "Silver Powder",
spritenum: 447,
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Bug') {
return this.chainModify([120, 100]);
}
},
num: 222,
gen: 2,
},

sitrusberry: {
name: "Sitrus Berry",
spritenum: 448,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Psychic",
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
this.heal(pokemon.baseMaxhp / 4);
},
num: 158,
gen: 3,
},

skates: {
name: "Skates",
spritenum: 749,
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['slow']) {
this.debug('Skates boost');
return this.chainModify([110, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['slow']) delete move.flags['contact'];
},
num: 1884,
gen: 9,
},

smoothrock: {
name: "Smooth Rock",
spritenum: 453,
fling: {
basePower: 10,
},
num: 283,
gen: 4,
},

snowball: {
name: "Snowball",
spritenum: 606,
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Ice') {
target.useItem();
}
},
boosts: {
atk: 1,
spa: 1,
},
num: 649,
gen: 6,
},

softsand: {
name: "Soft Sand",
spritenum: 456,
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ground') {
return this.chainModify([120, 100]);
}
},
num: 237,
gen: 2,
},

spelltag: {
name: "Spell Tag",
spritenum: 461,
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ghost') {
return this.chainModify([120, 100]);
}
},
num: 247,
gen: 2,
},

starfberry: {
name: "Starf Berry",
spritenum: 472,
isBerry: true,
naturalGift: {
basePower: 100,
type: "Psychic",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
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
boost[randomStat] = 2.5;
this.boost(boost);
}
},
num: 207,
gen: 3,
},

stickybarb: {
name: "Sticky Barb",
spritenum: 476,
fling: {
basePower: 80,
},
onResidualOrder: 28,
onResidualSubOrder: 3,
onResidual(pokemon) {
this.damage(pokemon.baseMaxhp / 8);
},
onHit(target, source, move) {
if (source && source !== target && !source.item && move && this.checkMoveMakesContact(move, source, target)) {
const barb = target.takeItem();
if (!barb) return; // Gen 4 Multitype
source.setItem(barb);
// no message for Sticky Barb changing hands
}
},
num: 288,
gen: 4,
},

superspicycurry: {
name: "Superspicy Curry",
spritenum: 34,
fling: {
basePower: 30,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
if (pokemon.hasType('fire')) {
this.heal(pokemon.baseMaxhp / 13.34);
} else {
this.damage(pokemon.baseMaxhp / 3);
}
},
num: 281,
gen: 4,
},

tangaberry: {
name: "Tanga Berry",
spritenum: 487,
isBerry: true,
naturalGift: {
basePower: 80,
type: "Bug",
},
onSourceModifyDamage(damage, source, target, move) {
if (move.type === 'Bug' && target.getMoveHitData(move).typeMod > 0) {
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
num: 194,
gen: 4,
},

terrainextender: {
name: "Terrain Extender",
spritenum: 662,
fling: {
basePower: 60,
},
num: 879,
gen: 7,
},

throatspray: {
name: "Throat Spray",
spritenum: 713,
fling: {
basePower: 30,
},
onAfterMoveSecondarySelf(target, source, move) {
if (move.flags['sound']) {
target.useItem();
}
},
boosts: {
spa: 1,
},
num: 1118,
gen: 8,
},

toxicorb: {
name: "Toxic Orb",
spritenum: 515,
fling: {
basePower: 30,
status: 'tox',
},
onResidualOrder: 28,
onResidualSubOrder: 3,
onResidual(pokemon) {
pokemon.trySetStatus('tox', pokemon);
},
num: 272,
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

wiseglasses: {
name: "Wise Glasses",
spritenum: 539,
fling: {
basePower: 10,
},
onBasePowerPriority: 16,
onBasePower(basePower, user, target, move) {
if (move.category === 'Special') {
return this.chainModify([110, 100]);
}
},
num: 267,
gen: 4,
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

};