export const Items: {[itemid: string]: ItemData} = {

name: "Ability Shield",
basePower: 30,
ignoreKlutz: true,
// and in Neutralizing Gas itself within data/abilities.ts
if (effect && effect.effectType === 'Ability' && effect.name !== 'Trace') {
}
return null;
// Mold Breaker protection implemented in Battle.suppressingAbility() within sim/battle.ts
abilityshield: {
fling: {
},
// Neutralizing Gas protection implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
onSetAbility(ability, target, source, effect) {
this.add('-ability', source, effect);
this.add('-block', target, 'item: Ability Shield');
},
},
name: "Abomasite",
megaEvolves: "Abomasnow",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
aspearberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'frz') {
}
onEat(pokemon) {
pokemon.cureStatus();
},

name: "Absolite",
megaEvolves: "Absol",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
assaultvest: {
fling: {
},
onModifySpD(spd) {
},
for (const moveSlot of pokemon.moveSlots) {
pokemon.disableMove(moveSlot.id);
}
},

name: "Absorb Bulb",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
spa: 1,
},
babiriberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Steel' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Acrab Berry",
naturalGift: {
type: "Psychic",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
let stat: BoostID;
if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
}
if (stats.length) {
const boost: SparseBoostsTable = {};
this.boost(boost);
},
beachglass: {
onResidualOrder: 26,
onResidual: function (pokemon) {
this.boost({spe: 1}, pokemon);
this.boost({spe: -1}, pokemon);
},

name: "Adamant Crystal",
if (user.baseSpecies.num === 483 && (move.type === 'Steel' || move.type === 'Dragon')) {
}
bigroot: {
fling: {
},
onTryHeal(damage, target, source, effect) {
if (heals.includes(effect.id)) {
}
},

name: "Altarianite",
megaEvolves: "Altaria",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
bindingband: {
fling: {
},
},

name: "Ampharosite",
megaEvolves: "Ampharos",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
blackbelt: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Apicot Berry",
naturalGift: {
type: "Ground",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
blackglasses: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Armor Fossil",
basePower: 100,
isNonstandard: "Past",
blacksludge: {
fling: {
},
onResidualSubOrder: 4,
if (pokemon.hasType('Poison')) {
} else {
}
},

name: "Aspear Berry",
naturalGift: {
type: "Ice",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'frz') {
}
},
blunderpolicy: {
fling: {
},
},

name: "Assault Vest",
basePower: 80,
onModifySpDPriority: 1,
return this.chainModify(1.55);
onDisableMove(pokemon) {
if (this.dex.moves.get(moveSlot.move).category === 'Status') {
}
},
bulletproofvest: {
fling: {
},
onModifySpD(def) {
},
for (const moveSlot of pokemon.moveSlots) {
pokemon.disableMove(moveSlot.id);
}
},

name: "Audinite",
megaEvolves: "Audino",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
capsule: {
onDamagingHitOrder: 2,
if (!target.usedCapsule) {
const randomStatus = this.sample(statuses);
this.add('-status', source, randomStatus);
}
},

name: "Auspicious Armor",
basePower: 30,
},
cellsynergysurge: {
fling: {
},
if (move.type === 'Electric') {
}
boosts: {
spa: 1,
},

name: "Babiri Berry",
naturalGift: {
type: "Steel",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
charcoal: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Banettite",
megaEvolves: "Banette",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
chartiberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Rock' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Beach Glass",
onResidualSubOrder: 1,
if (this.field.isWeather('sunnyday')) {
} else {
}
},
cheriberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'par') {
}
onEat(pokemon) {
pokemon.cureStatus();
},

name: "Beast Ball",
},
chestoberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'slp') {
}
onEat(pokemon) {
pokemon.cureStatus();
},

name: "Beedrillite",
megaEvolves: "Beedrill",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
chilanberry: {
isBerry: true,
basePower: 80,
},
if (
(!target.volatiles['substitute'] || move.flags['bypasssub'] || (move.infiltrates && this.gen >= 6))
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},

name: "Belue Berry",
naturalGift: {
type: "Electric",
onEat: false,
},
chopleberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Fighting' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Berry",
naturalGift: {
type: "Poison",
onResidualOrder: 5,
if (pokemon.hp <= pokemon.maxhp / 2) {
}
onTryEatItem(item, pokemon) {
},
this.heal(10);
isNonstandard: "Past",
clearamulet: {
fling: {
},
if (source && target === source) return;
let i: BoostID;
if (boost[i]! < 0) {
showMsg = true;
}
this.add('-fail', target, 'unboost', '[from] item: Clear Amulet', '[of] ' + target);
},

name: "Berry Juice",
basePower: 30,
onUpdate(pokemon) {
if (this.runEvent('TryHeal', pokemon) && pokemon.useItem()) {
}
},
},
cobaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Flying' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Berry Sweet",
basePower: 10,
isNonstandard: "Past",
colburberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Dark' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Berserk Gene",
if (pokemon.useItem()) {
}
boosts: {
},
},
covertcloak: {
fling: {
},
this.debug('Covert Cloak prevent secondary');
},

name: "Big Nugget",
basePower: 130,
},
custapberry: {
isBerry: true,
basePower: 100,
},
onFractionalPriority(priority, pokemon) {
priority <= 0 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony))
if (pokemon.eatItem()) {
return 0.1;
}
onEat() { },
},

name: "Big Root",
basePower: 10,
onTryHealPriority: 1,
const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
return this.chainModify([115, 100]);
},
damprock: {
fling: {
},

name: "Binding Band",
basePower: 30,
// implemented in statuses
darkband: {
fling: {
},
if (move.type === 'Dark') {
}
boosts: {
spa: 1,
},

name: "Bitter Berry",
naturalGift: {
type: "Ground",
onUpdate(pokemon) {
pokemon.eatItem();
},
pokemon.removeVolatile('confusion');
isNonstandard: "Past",
donnyosmium: {
onModifyWeightPriority: 1,
return weighthg * 2.5;
isBreakable: true,

name: "Black Belt",
basePower: 30,
onBasePowerPriority: 15,
if (move && move.type === 'Fighting') {
}
},
dragonball: {
fling: {
},
onBasePower(basePower, attacker, defender, move) {
this.debug('Dragon Ball boost');
}
onModifyMovePriority: 1,
if (move.flags['beam']) delete move.flags['contact'];
},

name: "Black Glasses",
basePower: 30,
onBasePowerPriority: 15,
if (move && move.type === 'Dark') {
}
},
dragonfang: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Black Sludge",
basePower: 30,
onResidualOrder: 5,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 13.34);
this.damage(pokemon.baseMaxhp / 3);
},
egg: {
onDamagingHitOrder: 1,
this.add('-activate', target, 'item: Egg');
let damageAmount = Math.ceil(source.maxhp / 10);
target.setItem('');
onUse: function (pokemon) {
pokemon.addVolatile('eggused');
return false;
},

name: "Blastoisinite",
megaEvolves: "Blastoise",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
ejectbutton: {
fling: {
},
onAfterMoveSecondary(target, source, move) {
if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.beingCalledBack || target.isSkyDropped()) return;
for (const pokemon of this.getAllActive()) {
}
if (target.useItem()) {
} else {
}
},

name: "Blazikenite",
megaEvolves: "Blaziken",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
ejectpack: {
fling: {
},
if (this.activeMove?.id === 'partingshot') return;
let i: BoostID;
if (boost[i]! < 0) {
}
if (eject) {
if (!this.canSwitch(target.side)) return;
for (const pokemon of this.getAllActive()) {
}
}
},

name: "Blue Orb",
if (pokemon.isActive && pokemon.baseSpecies.name === 'Kyogre') {
}
onPrimal(pokemon) {
},
if (source.baseSpecies.baseSpecies === 'Kyogre') return false;
},
isNonstandard: "Past",
electricseed: {
fling: {
},
if (!pokemon.ignoringItem() && this.field.isTerrain('electricterrain')) {
}
onTerrainChange(pokemon) {
pokemon.useItem();
},
def: 1,
},

name: "Bluk Berry",
naturalGift: {
type: "Fire",
onEat: false,
},
enigmaberry: {
isBerry: true,
basePower: 100,
},
if (move && target.getMoveHitData(move).typeMod > 0) {
this.heal(target.baseMaxhp / 4);
}
onTryEatItem(item, pokemon) {
},
isNonstandard: "Unobtainable",

name: "Blunder Policy",
basePower: 80,
// Item activation located in scripts.js
eviolite: {
fling: {
},
onModifyDef(def, pokemon) {
return this.chainModify(1.5);
},
onModifySpD(spd, pokemon) {
return this.chainModify(1.5);
},

name: "Booster Energy",
basePower: 30,
onUpdate(pokemon) {
if (this.queue.peek(true)?.choice === 'runSwitch') return;
pokemon.addVolatile('protosynthesis');
if (pokemon.hasAbility('quarkdrive') && !this.field.isTerrain('electricterrain') && pokemon.useItem()) {
}
onTakeItem(item, source) {
return true;
},
eviomax: {
fling: {
},
onModifyDef(def, pokemon) {
return this.chainModify(1.25);
},
onModifySpD(spd, pokemon) {
return this.chainModify(1.25);
},

name: "Bright Powder",
basePower: 10,
onModifyAccuracyPriority: -2,
if (typeof accuracy !== 'number') return;
return this.chainModify([3686, 4096]);
},
expertbelt: {
fling: {
},
if (move && target.getMoveHitData(move).typeMod > 0) {
}
},

name: "Bug Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Bug' && source.useItem()) {
}
isNonstandard: "Past",
fairyscale: {
fling: {
},
if (move.type === 'Fairy') {
}
boosts: {
spa: 1,
},

name: "Buginium Z",
onTakeItem: false,
zMoveType: "Bug",
isNonstandard: "Past",
flameorb: {
fling: {
status: 'brn',
onResidualOrder: 28,
onResidual(pokemon) {
},

name: "Bug Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Bug",
isNonstandard: "Past",
floatstone: {
fling: {
},
return this.trunc(weighthg / 2);
},

name: "Bullet Proof Vest",
basePower: 80,
onModifySpDPriority: 1,
return this.chainModify(1.55);
onDisableMove(pokemon) {
if (this.dex.moves.get(moveSlot.move).category === 'Status') {
}
},
focusband: {
fling: {
},
onDamage(damage, target, source, effect) {
this.add("-activate", target, "item: Focus Band");
}
},

name: "Burn Drive",
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
}
},
forcedForme: "Genesect-Burn",
isNonstandard: "Past",
focussash: {
fling: {
},
onDamage(damage, target, source, effect) {
if (target.useItem()) {
}
},

name: "Burnt Berry",
naturalGift: {
type: "Ice",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'frz') {
}
isNonstandard: "Past",
ganlonberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
this.boost({def: 1.5});
},

name: "Cameruptite",
megaEvolves: "Camerupt",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
goldenbullet: {
fling: {
},
onBasePower(basePower, attacker, defender, move) {
this.debug('Golden Bullet boost');
}
onModifyMovePriority: 1,
if (move.flags['bullet']) delete move.flags['contact'];
},

name: "Capsule",
onDamagingHit(damage, target, source, move) {
const statuses = ['brn', 'par', 'frz', 'psn', 'tox', 'slp'];
this.add('-message', `${source.name} was affected by a Capsule!`);
target.usedCapsule = true;
},
grassyseed: {
fling: {
},
if (!pokemon.ignoringItem() && this.field.isTerrain('grassyterrain')) {
}
onTerrainChange(pokemon) {
pokemon.useItem();
},
def: 1,
},

name: "Captain's Armband",
basePower: 10,
onResidualOrder: 5,
onResidual(pokemon) {
},
onDamage(damage, target, source, effect) {
this.add("-activate", target, "item: Captains Armband");
}
},
gripclaw: {
fling: {
},
},

name: "Cell Synergy Surge",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 1,
},
habanberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Dragon' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Charcoal",
basePower: 30,
onBasePowerPriority: 15,
if (move && move.type === 'Fire') {
}
},
hardstone: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Charizardite X",
megaEvolves: "Charizard",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
heartscale: {
onFaint: function (source) {
for (const foeActive of source.side.foe.active) {
foeActive.addVolatile('confusion');
}
},

name: "Charizardite Y",
megaEvolves: "Charizard",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
heatrock: {
fling: {
},

name: "Charti Berry",
naturalGift: {
type: "Rock",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
heavydutyboots: {
fling: {
},
},

name: "Cheri Berry",
naturalGift: {
type: "Fire",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'par') {
}
},
iceskates: {
onResidualOrder: 26,
onResidual: function (pokemon) {
this.boost({spe: 1}, pokemon);
this.boost({spe: -1}, pokemon);
},

name: "Cherish Ball",
isNonstandard: "Unobtainable",
icyrock: {
fling: {
},

name: "Chesto Berry",
naturalGift: {
type: "Water",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'slp') {
}
},
ironball: {
fling: {
},
if (!target) return;
if (move.type === 'Ground' && target.hasType('Flying')) return 0;
// airborneness negation implemented in sim/pokemon.js:Pokemon#isGrounded
return this.chainModify(0.5);
},

name: "Chilan Berry",
naturalGift: {
type: "Normal",
onSourceModifyDamage(damage, source, target, move) {
move.type === 'Normal' &&
) {
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },
jabocaberry: {
isBerry: true,
basePower: 100,
},
if (move.category === 'Physical' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
}
onEat() { },
},

name: "Chill Drive",
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
}
},
forcedForme: "Genesect-Chill",
isNonstandard: "Past",
kasibberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Ghost' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Chipped Pot",
basePower: 80,
},
kebiaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Poison' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Choice Band",
basePower: 10,
onStart(pokemon) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
pokemon.removeVolatile('choicelock');
onModifyMove(move, pokemon) {
},
onModifyAtk(atk, pokemon) {
return this.chainModify(1.5);
isChoice: true,
keeberry: {
isBerry: true,
basePower: 100,
},
if (move.category === 'Physical') {
target.eatItem();
},
this.boost({def: 1.5});
isNonstandard: "Unobtainable",

name: "Choice Scarf",
basePower: 10,
onStart(pokemon) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
pokemon.removeVolatile('choicelock');
onModifyMove(move, pokemon) {
},
if (pokemon.volatiles['dynamax']) return;
},
},
kickpads: {
fling: {
},
onBasePower(basePower, attacker, defender, move) {
this.debug('Kickpads boost');
}
onModifyMovePriority: 1,
if (move.flags['kick']) delete move.flags['contact'];
},

name: "Choice Specs",
basePower: 10,
onStart(pokemon) {
this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
pokemon.removeVolatile('choicelock');
onModifyMove(move, pokemon) {
},
onModifySpA(spa, pokemon) {
return this.chainModify(1.5);
isChoice: true,
laggingtail: {
fling: {
},
},

name: "Chople Berry",
naturalGift: {
type: "Fighting",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
lansatberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
pokemon.addVolatile('focusenergy');
},

name: "Claw Fossil",
basePower: 100,
isNonstandard: "Past",
leftovers: {
fling: {
},
onResidualSubOrder: 4,
this.heal(pokemon.baseMaxhp / 13.34);
},

name: "Clear Amulet",
basePower: 30,
onTryBoost(boost, target, source, effect) {
let showMsg = false;
for (i in boost) {
delete boost[i];
}
if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
}
},
lemonjelly: {
onBasePowerPriority: 23,
if (this.field.isWeather('raindance') && move.flags['duck']) {
return this.chainModify([115, 100]);
},

name: "Clover Sweet",
basePower: 10,
isNonstandard: "Past",
liechiberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
this.boost({atk: 1.5});
},

name: "Coba Berry",
naturalGift: {
type: "Flying",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
lifeorb: {
fling: {
},
return this.chainModify([115, 100]);
onAfterMoveSecondarySelf(source, target, move) {
this.damage(source.baseMaxhp / 8, source, source, this.dex.items.get('lifeorb'));
},

name: "Colbur Berry",
naturalGift: {
type: "Dark",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
lightball: {
fling: {
status: 'par',
onModifyAtkPriority: 1,
if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
}
onModifySpAPriority: 1,
if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
}
itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],

name: "Cornn Berry",
naturalGift: {
type: "Bug",
onEat: false,
},
lightclay: {
fling: {
},
},

name: "Cover Fossil",
basePower: 100,
isNonstandard: "Past",
luckycoin: {
onModifyMovePriority: -1,
if (!attacker.volatiles['luckycoinused'] && attacker.activeTurns === 1) {
move.willCrit = true;
}
},

name: "Covert Cloak",
basePower: 30,
onModifySecondaries(secondaries) {
return secondaries.filter(effect => !!(effect.self || effect.dustproof));
},
lumberry: {
isBerry: true,
basePower: 80,
},
onAfterSetStatus(status, pokemon) {
},
if (pokemon.status || pokemon.volatiles['confusion']) {
}
onEat(pokemon) {
pokemon.removeVolatile('confusion');
},

name: "Cracked Pot",
basePower: 80,
},
magnesificent: {
onModifyWeight(weighthg) {
},
},

name: "Crucibellite",
megaEvolves: "Crucibelle",
onTakeItem(item, source) {
return true;
isNonstandard: "CAP",
magnet: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Custap Berry",
naturalGift: {
type: "Ghost",
onFractionalPriorityPriority: -2,
if (
(pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
) {
this.add('-activate', pokemon, 'item: Custap Berry', '[consumed]');
}
},
isNonstandard: "Unobtainable",
magoberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
if (pokemon.getNature().minus === 'spe') {
}
},

name: "Damp Rock",
basePower: 60,
},
marangaberry: {
isBerry: true,
basePower: 100,
},
if (move.category === 'Special') {
}
onEat(pokemon) {
},
},

name: "Dark Band",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 1,
},
mentalherb: {
fling: {
effect(pokemon) {
for (const firstCondition of conditions) {
for (const secondCondition of conditions) {
if (firstCondition === 'attract' && secondCondition === 'attract') {
}
return;
}
},
const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
if (pokemon.volatiles[firstCondition]) {
for (const secondCondition of conditions) {
if (firstCondition === 'attract' && secondCondition === 'attract') {
}
return;
}
},

name: "Dark Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Dark' && source.useItem()) {
}
isNonstandard: "Past",
metalcoat: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Darkinium Z",
onTakeItem: false,
zMoveType: "Dark",
isNonstandard: "Past",
micleberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
pokemon.addVolatile('micleberry');
condition: {
onSourceAccuracy(accuracy, target, source, move) {
this.add('-enditem', source, 'Micle Berry');
if (typeof accuracy === 'number') {
}
},
isNonstandard: "Unobtainable",

name: "Dark Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Dark",
isNonstandard: "Past",
miracleseed: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Dawn Stone",
basePower: 80,
},
mirrorherb: {
fling: {
},
if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
let statsRaised = false;
for (i in boost) {
boostPlus[i] = boost[i];
}
if (!statsRaised) return;
pokemon.useItem();
},

name: "Decidium Z",
zMove: "Sinister Arrow Raid",
itemUser: ["Decidueye"],
},
mistyseed: {
fling: {
},
if (!pokemon.ignoringItem() && this.field.isTerrain('mistyterrain')) {
}
onTerrainChange(pokemon) {
pokemon.useItem();
},
def: 1,
},

name: "Deep Sea Scale",
basePower: 30,
onModifySpDPriority: 2,
if (pokemon.baseSpecies.name === 'Clamperl') {
}
itemUser: ["Clamperl"],
},
muscleband: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Deep Sea Tooth",
basePower: 90,
onModifySpAPriority: 1,
if (pokemon.baseSpecies.name === 'Clamperl') {
}
itemUser: ["Clamperl"],
},
mysticwater: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Deneb Caestus",
basePower: 10,
onResidualOrder: 5,
onResidual(pokemon) {
},
onDamage(damage, target, source, effect) {
this.add("-activate", target, "item: Deneb Caestus");
}
},
nevermeltice: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Destiny Knot",
basePower: 10,
onAttractPriority: -100,
this.debug('attract intercepted: ' + target + ' from ' + source);
if (!source.volatiles['attract']) source.addVolatile('attract', target);
},
occaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Fire' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Diancite",
megaEvolves: "Diancie",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
oranberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2) {
}
onTryEatItem(item, pokemon) {
},
this.heal(50);
},

name: "Dive Ball",
},
passhoberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Water' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Dome Fossil",
basePower: 100,
isNonstandard: "Past",
payapaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Psychic' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Donny Osmium",
onModifyWeight(weighthg) {
},
},
pechaberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
}
onEat(pokemon) {
pokemon.cureStatus();
},

name: "Douse Drive",
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
}
},
forcedForme: "Genesect-Douse",
isNonstandard: "Past",
persimberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.volatiles['confusion']) {
}
onEat(pokemon) {
},

name: "Draco Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Dragon') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Dragon",
poisonbarb: {
fling: {
status: 'psn',
onBasePowerPriority: 15,
if (move.type === 'Poison') {
}
},

name: "Dragon Ball",
basePower: 30,
onBasePowerPriority: 23,
if (move.flags['beam']) {
return this.chainModify([115, 100]);
},
onModifyMove(move) {
},
powerherb: {
if (pokemon.useItem()) {
this.attrLastMove('[still]');
return false; // skip charge turn
},
fling: {
},

name: "Dragon Fang",
basePower: 70,
onBasePowerPriority: 15,
if (move && move.type === 'Dragon') {
}
},
protectivepads: {
fling: {
},
},

name: "Dragon Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Dragon' && source.useItem()) {
}
isNonstandard: "Past",
psychicseed: {
fling: {
},
if (!pokemon.ignoringItem() && this.field.isTerrain('psychicterrain')) {
}
onTerrainChange(pokemon) {
pokemon.useItem();
},
def: 1,
},

name: "Dragonium Z",
onTakeItem: false,
zMoveType: "Dragon",
isNonstandard: "Past",
puck: {
fling: {
},
if (move.type === 'Steel') {
}
boosts: {
spa: 1,
},

name: "Dragon Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Dragon",
isNonstandard: "Past",
punchingglove: {
fling: {
},
onBasePower(basePower, attacker, defender, move) {
this.debug('Punching Glove boost');
}
onModifyMovePriority: 1,
if (move.flags['punch']) delete move.flags['contact'];
},

name: "Dragon Scale",
basePower: 30,
isNonstandard: "Past",
quickclaw: {
onFractionalPriority(priority, pokemon, target, move) {
if (priority <= 0 && this.randomChance(1, 5)) {
return 0.1;
},
fling: {
},

name: "Dread Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Dark') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Dark",
rainbowreflector: {
onDamagingHitOrder: 2,
if (move.category === 'Special' && this.field.isWeather('raindance')) {
}
},

name: "Dream Ball",
},
rawstberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'brn') {
}
onEat(pokemon) {
pokemon.cureStatus();
},

name: "Dubious Disc",
basePower: 50,
isNonstandard: "Past",
redcard: {
fling: {
},
if (source && source !== target && source.hp && target.hp && move && move.category !== 'Status') {
return;
// The item is used up even against a pokemon with Ingrain or that otherwise can't be forced out
if (this.runEvent('DragOut', source, target, move)) {
}
}
},

name: "Durin Berry",
naturalGift: {
type: "Water",
onEat: false,
},
rindoberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Grass' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Dusk Ball",
},
ringtarget: {
fling: {
},
},

name: "Dusk Stone",
basePower: 80,
},
rockyhelmet: {
fling: {
},
onDamagingHit(damage, target, source, move) {
this.damage(source.baseMaxhp / 6, source, target);
},

name: "Earth Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Ground') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Ground",
roomservice: {
fling: {
},
if (!pokemon.ignoringItem() && this.field.getPseudoWeather('trickroom')) {
}
onAnyPseudoWeatherChange() {
if (this.field.getPseudoWeather('trickroom')) {
}
boosts: {
},

name: "Eevium Z",
zMove: "Extreme Evoboost",
itemUser: ["Eevee"],
},
roseliberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Fairy' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Egg",
onDamagingHit: function (damage, target, source, move) {
source.addVolatile('confusion', target);
this.damage(damageAmount, source, target);
},
if (!pokemon.volatiles['eggused']) {
} else {
}
},
rowapberry: {
isBerry: true,
basePower: 100,
},
if (move.category === 'Special' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
}
onEat() { },
},

name: "Eject Button",
basePower: 30,
onAfterMoveSecondaryPriority: 2,
if (source && source !== target && target.hp && move && move.category !== 'Status' && !move.flags['futuremove']) {
if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
if (pokemon.switchFlag === true) return;
target.switchFlag = true;
source.switchFlag = false;
target.switchFlag = false;
}
},
safetygoggles: {
fling: {
},
if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
onTryHit(pokemon, source, move) {
this.add('-activate', pokemon, 'item: Safety Goggles', move.name);
}
},

name: "Eject Pack",
basePower: 50,
onAfterBoost(boost, target, source, effect) {
let eject = false;
for (i in boost) {
eject = true;
}
if (target.hp) {
if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
if (pokemon.switchFlag === true) return;
if (target.useItem()) target.switchFlag = true;
}
},
salacberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
this.boost({spe: 1.5});
},

name: "Electirizer",
basePower: 80,
isNonstandard: "Past",
scopelens: {
fling: {
},
return critRatio + 1;
},

name: "Electric Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Electric' && source.useItem()) {
}
isNonstandard: "Past",
scorchingsandsstone: {
onModifyMovePriority: -1,
if (move.flags['contact'] && this.field.isWeather('sandstorm')) {
move.secondaries.push({
status: 'brn',
}
},

name: "Electric Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Electric",
isNonstandard: "Past",
sharpbeak: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Electric Seed",
basePower: 10,
onStart(pokemon) {
pokemon.useItem();
},
if (this.field.isTerrain('electricterrain')) {
}
boosts: {
spd: 1,
},
shedshell: {
fling: {
},
onTrapPokemon(pokemon) {
},

name: "Electrium Z",
onTakeItem: false,
zMoveType: "Electric",
isNonstandard: "Past",
shellbell: {
fling: {
},
onAfterMoveSecondarySelf(pokemon, target, move) {
this.heal(move.totalDamage / 8, pokemon);
},

name: "Enigma Berry",
naturalGift: {
type: "Bug",
onHit(target, source, move) {
if (target.eatItem()) {
}
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat() { },
},
shucaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Ground' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Eviolite",
basePower: 40,
onModifyDefPriority: 2,
if (pokemon.baseSpecies.nfe) {
}
onModifySpDPriority: 2,
if (pokemon.baseSpecies.nfe) {
}
},
silkscarf: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Eviomax",
basePower: 40,
onModifyDefPriority: 2,
if (pokemon.baseSpecies.fe) {
}
onModifySpDPriority: 2,
if (pokemon.baseSpecies.fe) {
}
},
silverpowder: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Expert Belt",
basePower: 10,
onModifyDamage(damage, source, target, move) {
return this.chainModify([115, 100]);
},
sitrusberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2) {
}
onTryEatItem(item, pokemon) {
},
this.heal(pokemon.baseMaxhp / 4);
},

name: "Fairium Z",
onTakeItem: false,
zMoveType: "Fairy",
isNonstandard: "Past",
skates: {
fling: {
},
onBasePower(basePower, attacker, defender, move) {
this.debug('Skates boost');
}
onModifyMovePriority: 1,
if (move.flags['slow']) delete move.flags['contact'];
},

name: "Fairy Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Fairy' && source.useItem()) {
}
isNonstandard: "Past",
smoothrock: {
fling: {
},

name: "Fairy Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Fairy",
isNonstandard: "Past",
snowball: {
fling: {
},
if (move.type === 'Ice') {
}
boosts: {
spa: 1,
},

name: "Fairy Scale",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 1,
},
softsand: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Fast Ball",
},
spelltag: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Fighting Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Fighting' && source.useItem()) {
}
isNonstandard: "Past",
starfberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
const stats: BoostID[] = [];
for (stat in pokemon.boosts) {
stats.push(stat);
}
const randomStat = this.sample(stats);
boost[randomStat] = 2.5;
}
},

name: "Fighting Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Fighting",
isNonstandard: "Past",
stickybarb: {
fling: {
},
onResidualSubOrder: 3,
this.damage(pokemon.baseMaxhp / 8);
onHit(target, source, move) {
const barb = target.takeItem();
source.setItem(barb);
}
},

name: "Fightinium Z",
onTakeItem: false,
zMoveType: "Fighting",
isNonstandard: "Past",
superspicycurry: {
fling: {
},
onResidualSubOrder: 4,
if (pokemon.hasType('fire')) {
} else {
}
},

name: "Figy Berry",
naturalGift: {
type: "Bug",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onTryEatItem(item, pokemon) {
},
this.heal(pokemon.baseMaxhp / 3);
pokemon.addVolatile('confusion');
},
tangaberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Bug' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Fire Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Fire' && source.useItem()) {
}
isNonstandard: "Past",
terrainextender: {
fling: {
},

name: "Fire Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Fire",
isNonstandard: "Past",
throatspray: {
fling: {
},
if (move.flags['sound']) {
}
boosts: {
},

name: "Fire Stone",
basePower: 30,
},
toxicorb: {
fling: {
status: 'tox',
onResidualOrder: 28,
onResidual(pokemon) {
},

name: "Firium Z",
onTakeItem: false,
zMoveType: "Fire",
isNonstandard: "Past",
twistedspoon: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Fist Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Fighting') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Fighting",
utilityumbrella: {
fling: {
},
onStart(pokemon) {
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
}
onUpdate(pokemon) {
this.effectState.inactive = false;
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
},
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
}
},

name: "Flame Orb",
basePower: 30,
},
onResidualSubOrder: 3,
pokemon.trySetStatus('brn', pokemon);
},
wacanberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Electric' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Flame Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Fire') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Fire",
weaknesspolicy: {
fling: {
},
if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
}
boosts: {
spa: 2,
},

name: "Float Stone",
basePower: 30,
onModifyWeight(weighthg) {
},
whippeddream: {
fling: {
},
},

name: "Flower Sweet",
basePower: 0,
isNonstandard: "Past",
whiteherb: {
fling: {
effect(pokemon) {
const boosts: SparseBoostsTable = {};
for (i in pokemon.boosts) {
activate = true;
}
if (activate) {
this.add('-clearnegativeboost', pokemon, '[silent]');
},
onUpdate(pokemon) {
const boosts: SparseBoostsTable = {};
for (i in pokemon.boosts) {
activate = true;
}
if (activate && pokemon.useItem()) {
this.add('-clearnegativeboost', pokemon, '[silent]');
},

name: "Flying Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Flying' && source.useItem()) {
}
isNonstandard: "Past",
widelens: {
fling: {
},
onSourceModifyAccuracy(accuracy) {
return this.chainModify([115, 100]);
},

name: "Flying Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Flying",
isNonstandard: "Past",
wiseglasses: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Flyinium Z",
onTakeItem: false,
zMoveType: "Flying",
isNonstandard: "Past",
yacheberry: {
isBerry: true,
basePower: 80,
},
if (move.type === 'Ice' && target.getMoveHitData(move).typeMod > 0) {
if (hitSub) return;
this.debug('-50% reduction');
return this.chainModify(0.5);
}
onEat() { },

name: "Focus Band",
basePower: 10,
onDamagePriority: -40,
if (this.randomChance(16.5, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
return target.hp - 1;
},
yellowcard: {
onStart: function (pokemon) {
},
if (defender.side !== attacker.side && !defender.volatiles['yellowcard']) {
this.add('-message', defender.name + ' was shown a Yellow Card and cannot attack this turn!');
let item = this.dex.items.get(defender.item);
this.add('-enditem', defender, item, '[consumed]');
}
defender.itemUsageCount = 0;
}
desc: "Stops the foe from attacking for one turn. Single use.",

name: "Focus Sash",
basePower: 10,
onDamagePriority: -40,
if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
return target.hp - 1;
}
},
zoomlens: {
fling: {
},
onSourceModifyAccuracy(accuracy, target) {
this.debug('Critical Zoom Lens boosting accuracy');
}
onModifyCritRatio(critRatio, source, target) {
this.debug('Critical Zoom Lens boosting critical hit ratio');
}
},

name: "Fossilized Bird",
basePower: 100,
isNonstandard: "Past",

name: "Fossilized Dino",
basePower: 100,
isNonstandard: "Past",

name: "Fossilized Drake",
basePower: 100,
isNonstandard: "Past",

name: "Fossilized Fish",
basePower: 100,
isNonstandard: "Past",

name: "Friend Ball",
},

name: "Full Incense",
basePower: 10,
onFractionalPriority: -0.1,
},

name: "Galarica Cuff",
basePower: 30,
isNonstandard: "Unobtainable",

name: "Galarica Wreath",
basePower: 30,
isNonstandard: "Unobtainable",

name: "Galladite",
megaEvolves: "Gallade",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Ganlon Berry",
naturalGift: {
type: "Ice",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},

name: "Garchompite",
megaEvolves: "Garchomp",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Gardevoirite",
megaEvolves: "Gardevoir",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Gengarite",
megaEvolves: "Gengar",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Ghost Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Ghost' && source.useItem()) {
}
isNonstandard: "Past",

name: "Ghostium Z",
onTakeItem: false,
zMoveType: "Ghost",
isNonstandard: "Past",

name: "Ghost Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Ghost",
isNonstandard: "Past",

name: "Glalitite",
megaEvolves: "Glalie",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Gold Berry",
naturalGift: {
type: "Psychic",
onResidualOrder: 5,
if (pokemon.hp <= pokemon.maxhp / 2) {
}
onTryEatItem(item, pokemon) {
},
this.heal(30);
isNonstandard: "Past",

name: "Gold Bottle Cap",
basePower: 30,
},

name: "Golden Bullet",
basePower: 30,
onBasePowerPriority: 23,
if (move.flags['bullet']) {
return this.chainModify([115, 100]);
},
onModifyMove(move) {
},

name: "Grass Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Grass' && source.useItem()) {
}
isNonstandard: "Past",

name: "Grassium Z",
onTakeItem: false,
zMoveType: "Grass",
isNonstandard: "Past",

name: "Grass Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Grass",
isNonstandard: "Past",

name: "Grassy Seed",
basePower: 10,
onStart(pokemon) {
pokemon.useItem();
},
if (this.field.isTerrain('grassyterrain')) {
}
boosts: {
spd: 1,
},

name: "Great Ball",
},

name: "Grepa Berry",
naturalGift: {
type: "Flying",
onEat: false,

name: "Grip Claw",
basePower: 90,
// implemented in statuses

name: "Griseous Core",
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if (source?.baseSpecies.num === 487 || pokemon.baseSpecies.num === 487) {
}
},
itemUser: ["Giratina-Origin"],

name: "Griseous Orb",
basePower: 60,
onBasePowerPriority: 15,
if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
}
itemUser: ["Giratina"],

name: "Ground Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Ground' && source.useItem()) {
}
isNonstandard: "Past",

name: "Groundium Z",
onTakeItem: false,
zMoveType: "Ground",
isNonstandard: "Past",

name: "Ground Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Ground",
isNonstandard: "Past",

name: "Gyaradosite",
megaEvolves: "Gyarados",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Haban Berry",
naturalGift: {
type: "Dragon",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},

name: "Hard Stone",
basePower: 100,
onBasePowerPriority: 15,
if (move && move.type === 'Rock') {
}
},

name: "Heal Ball",
},

name: "Heart Scale",
this.add('-message', source.side.name + "'s Heart Scale emits a radiant light, confusing all opposing Pokémon!");
if (foeActive && foeActive.hp) {
}
},

name: "Heat Rock",
basePower: 60,
},

name: "Heavy Ball",
},

name: "Heavy-Duty Boots",
basePower: 80,
// Hazard Immunity implemented in moves.ts

name: "Helix Fossil",
basePower: 100,
isNonstandard: "Past",

name: "Heracronite",
megaEvolves: "Heracross",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Hondew Berry",
naturalGift: {
type: "Ground",
onEat: false,

name: "Houndoominite",
megaEvolves: "Houndoom",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",

name: "Iapapa Berry",
naturalGift: {
type: "Dark",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onTryEatItem(item, pokemon) {
},
this.heal(pokemon.baseMaxhp / 3);
pokemon.addVolatile('confusion');
},

name: "Ice Berry",
naturalGift: {
type: "Grass",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'brn') {
}
isNonstandard: "Past",

name: "Ice Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Ice' && source.useItem()) {
}
isNonstandard: "Past",

name: "Ice Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Ice",
isNonstandard: "Past",
abomasite: {
megaStone: "Abomasnow-Mega",
itemUser: ["Abomasnow"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Ice Skates",
onResidualSubOrder: 1,
if (this.field.isWeather('snow')) {
} else {
}
},
absolite: {
megaStone: "Absol-Mega",
itemUser: ["Absol"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Ice Stone",
basePower: 30,
},
absorbbulb: {
fling: {
},
if (move.type === 'Water') {
}
boosts: {
},

name: "Icicle Plate",
onBasePowerPriority: 15,
if (move.type === 'Ice') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Ice",
acrabberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 3 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
const stats: BoostID[] = [];
for (stat in pokemon.boosts) {
stats.push(stat);
}
const randomStat = this.sample(stats);
boost[randomStat] = 3;
}
},

name: "Icium Z",
onTakeItem: false,
zMoveType: "Ice",
isNonstandard: "Past",
adamantcrystal: {
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},

name: "Icy Rock",
basePower: 40,
},
altarianite: {
megaStone: "Altaria-Mega",
itemUser: ["Altaria"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Incinium Z",
zMove: "Malicious Moonsault",
itemUser: ["Incineroar"],
},
ampharosite: {
megaStone: "Ampharos-Mega",
itemUser: ["Ampharos"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Insect Plate",
onBasePowerPriority: 15,
if (move.type === 'Bug') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Bug",
apicotberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
this.boost({spd: 1.5});
},

name: "Iron Ball",
basePower: 130,
onEffectiveness(typeMod, target, type, move) {
if (target.volatiles['ingrain'] || target.volatiles['smackdown'] || this.field.getPseudoWeather('gravity')) return;
},
onModifySpe(spe) {
},
armorfossil: {
fling: {
},
},

name: "Iron Plate",
onBasePowerPriority: 15,
if (move.type === 'Steel') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Steel",
audinite: {
megaStone: "Audino-Mega",
itemUser: ["Audino"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Jaboca Berry",
naturalGift: {
type: "Dragon",
onDamagingHit(damage, target, source, move) {
if (target.eatItem()) {
}
},
isNonstandard: "Unobtainable",
auspiciousarmor: {
fling: {
},

name: "Jaw Fossil",
basePower: 100,
isNonstandard: "Past",
banettite: {
megaStone: "Banette-Mega",
itemUser: ["Banette"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Kangaskhanite",
megaEvolves: "Kangaskhan",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
beastball: {
isPokeball: true,

name: "Kasib Berry",
naturalGift: {
type: "Ghost",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
beedrillite: {
megaStone: "Beedrill-Mega",
itemUser: ["Beedrill"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Kebia Berry",
naturalGift: {
type: "Poison",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
belueberry: {
isBerry: true,
basePower: 100,
},
isNonstandard: "Past",

name: "Kee Berry",
naturalGift: {
type: "Fairy",
onAfterMoveSecondary(target, source, move) {
if (move.id === 'present' && move.heal) return;
}
onEat(pokemon) {
},
},
berry: {
isBerry: true,
basePower: 80,
},
onResidual(pokemon) {
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
},
},

name: "Kelpsy Berry",
naturalGift: {
type: "Fighting",
onEat: false,
berryjuice: {
fling: {
},
if (pokemon.hp <= pokemon.maxhp / 2) {
this.heal(20);
}
isNonstandard: "Past",

name: "Kickpads",
basePower: 30,
onBasePowerPriority: 23,
if (move.flags['kick']) {
return this.chainModify([115, 100]);
},
onModifyMove(move) {
},
berrysweet: {
fling: {
},
},

name: "King's Rock",
basePower: 30,
},
onModifyMove(move) {
if (!move.secondaries) move.secondaries = [];
if (secondary.volatileStatus === 'flinch') return;
move.secondaries.push({
volatileStatus: 'flinch',
}
},
berserkgene: {
onUpdate(pokemon) {
pokemon.addVolatile('confusion');
},
atk: 2,
isNonstandard: "Past",

name: "Kommonium Z",
zMove: "Clangorous Soulblaze",
itemUser: ["Kommo-o", "Kommo-o-Totem"],
},
bignugget: {
fling: {
},

name: "Lagging Tail",
basePower: 10,
onFractionalPriority: -0.1,
bitterberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.volatiles['confusion']) {
}
onEat(pokemon) {
},
},

name: "Lansat Berry",
naturalGift: {
type: "Flying",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
blastoisinite: {
megaStone: "Blastoise-Mega",
itemUser: ["Blastoise"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Latiasite",
megaEvolves: "Latias",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
blazikenite: {
megaStone: "Blaziken-Mega",
itemUser: ["Blaziken"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Latiosite",
megaEvolves: "Latios",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
blueorb: {
onSwitchIn(pokemon) {
this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
},
pokemon.formeChange('Kyogre-Primal', this.effect, true);
onTakeItem(item, source) {
return true;
itemUser: ["Kyogre"],
},

name: "Lax Incense",
basePower: 10,
onModifyAccuracyPriority: -2,
if (typeof accuracy !== 'number') return;
return this.chainModify([3686, 4096]);
isNonstandard: "Past",
blukberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Leaf Stone",
basePower: 30,
},
boosterenergy: {
fling: {
},
if (pokemon.transformed) return;
if (pokemon.hasAbility('protosynthesis') && !this.field.isWeather('sunnyday') && pokemon.useItem()) {
}
pokemon.addVolatile('quarkdrive');
},
if (source.baseSpecies.tags.includes("Paradox")) return false;
},

name: "Leek",
basePower: 60,
onModifyCritRatio(critRatio, user) {
return critRatio + 2;
},
isNonstandard: "Past",
brightpowder: {
fling: {
},
onModifyAccuracy(accuracy) {
this.debug('brightpowder - decreasing accuracy');
},

name: "Leftovers",
basePower: 10,
onResidualOrder: 5,
onResidual(pokemon) {
},
buggem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Lemon Jelly",
onBasePower(basePower, attacker, defender, move) {
this.debug('Lemon Jelly boost');
}
},
buginiumz: {
onPlate: 'Bug',
zMove: true,
forcedForme: "Arceus-Bug",
},

name: "Leppa Berry",
naturalGift: {
type: "Fighting",
onUpdate(pokemon) {
if (pokemon.moveSlots.some(move => move.pp === 0)) {
}
onEat(pokemon) {
pokemon.moveSlots.find(move => move.pp < move.maxpp);
moveSlot.pp += 10;
this.add('-activate', pokemon, 'item: Leppa Berry', moveSlot.move, '[consumed]');
},
bugmemory: {
onMemory: 'Bug',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Bug"],
},

name: "Level Ball",
},
burndrive: {
onTakeItem(item, pokemon, source) {
return false;
return true;
onDrive: 'Fire',
itemUser: ["Genesect-Burn"],
},

name: "Liechi Berry",
naturalGift: {
type: "Grass",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
burntberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'frz') {
}
onEat(pokemon) {
pokemon.cureStatus();
},
},

name: "Life Orb",
basePower: 30,
onModifyDamage(damage, source, target, move) {
},
if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
}
},
cameruptite: {
megaStone: "Camerupt-Mega",
itemUser: ["Camerupt"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Light Ball",
basePower: 30,
},
onModifyAtk(atk, pokemon) {
return this.chainModify(2);
},
onModifySpA(spa, pokemon) {
return this.chainModify(2);
},
},
captainsarmband: {
fling: {
},
onResidualSubOrder: 4,
this.heal(pokemon.baseMaxhp / 40);
onDamagePriority: -40,
if (this.randomChance(10, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
return target.hp - 1;
},

name: "Light Clay",
basePower: 30,
// implemented in the corresponding thing
charizarditex: {
megaStone: "Charizard-Mega-X",
itemUser: ["Charizard"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Loaded Dice",
basePower: 30,
// partially implemented in sim/battle-actions.ts:BattleActions#hitStepMoveHitLoop
if (move.multiaccuracy) {
}
},
charizarditey: {
megaStone: "Charizard-Mega-Y",
itemUser: ["Charizard"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Lopunnite",
megaEvolves: "Lopunny",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
cherishball: {
isPokeball: true,
},

name: "Love Ball",
},
chilldrive: {
onTakeItem(item, pokemon, source) {
return false;
return true;
onDrive: 'Ice',
itemUser: ["Genesect-Chill"],
},

name: "Love Sweet",
basePower: 10,
isNonstandard: "Past",
chippedpot: {
fling: {
},

name: "Lucarionite",
megaEvolves: "Lucario",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
choiceband: {
fling: {
},
if (pokemon.volatiles['choicelock']) {
}
},
pokemon.addVolatile('choicelock');
onModifyAtkPriority: 1,
if (pokemon.volatiles['dynamax']) return;
},
},

name: "Lucky Coin",
onModifyMove: function (move, attacker, defender) {
attacker.addVolatile('luckycoinused');
this.add('-message', attacker.name + "'s attack became a critical hit due to the Lucky Coin!");
},
choicescarf: {
fling: {
},
if (pokemon.volatiles['choicelock']) {
}
},
pokemon.addVolatile('choicelock');
onModifySpe(spe, pokemon) {
return this.chainModify(1.5);
isChoice: true,

name: "Lucky Punch",
basePower: 40,
onModifyCritRatio(critRatio, user) {
return critRatio + 2;
},
isNonstandard: "Past",
choicespecs: {
fling: {
},
if (pokemon.volatiles['choicelock']) {
}
},
pokemon.addVolatile('choicelock');
onModifySpAPriority: 1,
if (pokemon.volatiles['dynamax']) return;
},
},

name: "Lum Berry",
naturalGift: {
type: "Flying",
onAfterSetStatusPriority: -1,
pokemon.eatItem();
onUpdate(pokemon) {
pokemon.eatItem();
},
pokemon.cureStatus();
},
clawfossil: {
fling: {
},
},

name: "Luminous Moss",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
spd: 1,
},
cloversweet: {
fling: {
},
},

name: "Lunalium Z",
zMove: "Menacing Moonraze Maelstrom",
itemUser: ["Lunala", "Necrozma-Dawn-Wings"],
},
cornnberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Lure Ball",
},
coverfossil: {
fling: {
},
},

name: "Lustrous Globe",
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if (source?.baseSpecies.num === 484 || pokemon.baseSpecies.num === 484) {
}
},
itemUser: ["Palkia-Origin"],
crackedpot: {
fling: {
},

name: "Lustrous Orb",
basePower: 60,
onBasePowerPriority: 15,
if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
}
itemUser: ["Palkia"],
crucibellite: {
megaStone: "Crucibelle-Mega",
itemUser: ["Crucibelle"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Luxury Ball",
},
darkgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Lycanium Z",
zMove: "Splintered Stormshards",
itemUser: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
},
darkiniumz: {
onPlate: 'Dark',
zMove: true,
forcedForme: "Arceus-Dark",
},

name: "Macho Brace",
fling: {
},
return this.chainModify(0.5);
isNonstandard: "Past",
darkmemory: {
onMemory: 'Dark',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Dark"],
},

name: "Magmarizer",
basePower: 80,
isNonstandard: "Past",
dawnstone: {
fling: {
},

name: "Magnesificent",
return this.trunc(weighthg / 2);
isBreakable: true,
decidiumz: {
onTakeItem: false,
zMoveFrom: "Spirit Shackle",
isNonstandard: "Past",

name: "Magnet",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Electric') {
}
},
deepseascale: {
fling: {
},
onModifySpD(spd, pokemon) {
return this.chainModify(2);
},
isNonstandard: "Past",

name: "Mago Berry",
naturalGift: {
type: "Ghost",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onTryEatItem(item, pokemon) {
},
this.heal(pokemon.baseMaxhp / 3);
pokemon.addVolatile('confusion');
},
deepseatooth: {
fling: {
},
onModifySpA(spa, pokemon) {
return this.chainModify(2);
},
isNonstandard: "Past",

name: "Magost Berry",
naturalGift: {
type: "Rock",
onEat: false,
},
denebcaestus: {
fling: {
},
onResidualSubOrder: 4,
this.heal(pokemon.baseMaxhp / 30);
onDamagePriority: -40,
if (this.randomChance(15, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
return target.hp - 1;
},

name: "Mail",
if (!this.activeMove) return false;
},
},
destinyknot: {
fling: {
},
onAttract(target, source) {
if (!source || source === target) return;
},

name: "Malicious Armor",
basePower: 30,
},
diancite: {
megaStone: "Diancie-Mega",
itemUser: ["Diancie"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Manectite",
megaEvolves: "Manectric",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
diveball: {
isPokeball: true,

name: "Maranga Berry",
naturalGift: {
type: "Dark",
onAfterMoveSecondary(target, source, move) {
target.eatItem();
},
this.boost({spd: 1});
isNonstandard: "Unobtainable",
domefossil: {
fling: {
},
},

name: "Marshadium Z",
zMove: "Soul-Stealing 7-Star Strike",
itemUser: ["Marshadow"],
},
dousedrive: {
onTakeItem(item, pokemon, source) {
return false;
return true;
onDrive: 'Water',
itemUser: ["Genesect-Douse"],
},

name: "Master Ball",
},
dracoplate: {
onPlate: 'Dragon',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Matt Berry",
naturalGift: {
type: "Poison",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
},
dragongem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Mawilite",
megaEvolves: "Mawile",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
dragoniumz: {
onPlate: 'Dragon',
zMove: true,
forcedForme: "Arceus-Dragon",
},

name: "Meadow Plate",
onBasePowerPriority: 15,
if (move.type === 'Grass') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Grass",
dragonmemory: {
onMemory: 'Dragon',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Dragon"],
},

name: "Medichamite",
megaEvolves: "Medicham",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
dragonscale: {
fling: {
},
},

name: "Mental Herb",
basePower: 10,
const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
if (pokemon.volatiles[firstCondition]) {
pokemon.removeVolatile(secondCondition);
this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
}
}
},
onUpdate(pokemon) {
for (const firstCondition of conditions) {
if (!pokemon.useItem()) return;
pokemon.removeVolatile(secondCondition);
this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
}
}
},
dreadplate: {
onPlate: 'Dark',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Metagrossite",
megaEvolves: "Metagross",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
dreamball: {
isPokeball: true,

name: "Metal Coat",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Steel') {
}
},
dubiousdisc: {
fling: {
},
},

name: "Metal Powder",
basePower: 10,
onModifyDefPriority: 2,
if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
}
itemUser: ["Ditto"],
},
durinberry: {
isBerry: true,
basePower: 100,
},
isNonstandard: "Past",

name: "Metronome",
basePower: 30,
onStart(pokemon) {
},
onStart(pokemon) {
this.effectState.numConsecutive = 0;
onTryMovePriority: -2,
if (!pokemon.hasItem('metronome')) {
return;
if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
} else if (pokemon.volatiles['twoturnmove']) {
this.effectState.numConsecutive = 1;
this.effectState.numConsecutive++;
} else {
}
},
const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
},
},
duskball: {
isPokeball: true,

name: "Mewnium Z",
zMove: "Genesis Supernova",
itemUser: ["Mew"],
},
duskstone: {
fling: {
},

name: "Mewtwonite X",
megaEvolves: "Mewtwo",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
earthplate: {
onPlate: 'Ground',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Mewtwonite Y",
megaEvolves: "Mewtwo",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
eeviumz: {
onTakeItem: false,
zMoveFrom: "Last Resort",
isNonstandard: "Past",

name: "Micle Berry",
naturalGift: {
type: "Rock",
onResidual(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
duration: 2,
if (!move.ohko) {
source.removeVolatile('micleberry');
return this.chainModify([115, 100]);
}
},
},
electirizer: {
fling: {
},
},

name: "Mimikium Z",
zMove: "Let's Snuggle Forever",
itemUser: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
},
electricgem: {
isGem: true,
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
source.addVolatile('gem');
},
},

name: "Mind Plate",
onBasePowerPriority: 15,
if (move.type === 'Psychic') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Psychic",
electricmemory: {
onMemory: 'Electric',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Electric"],
},

name: "Mint Berry",
naturalGift: {
type: "Water",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'slp') {
}
isNonstandard: "Past",
electriumz: {
onPlate: 'Electric',
zMove: true,
forcedForme: "Arceus-Electric",
},

name: "Miracle Berry",
naturalGift: {
type: "Flying",
onUpdate(pokemon) {
pokemon.eatItem();
},
pokemon.cureStatus();
},
},
fairiumz: {
onPlate: 'Fairy',
zMove: true,
forcedForme: "Arceus-Fairy",
},

name: "Miracle Seed",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Grass') {
}
},
fairygem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Mirror Herb",
basePower: 30,
onFoeAfterBoost(boost, target, source, effect) {
const boostPlus: SparseBoostsTable = {};
let i: BoostID;
if (boost[i]! > 0) {
statsRaised = true;
}
const pokemon: Pokemon = this.effectState.target;
this.boost(boostPlus, pokemon);
},
fairymemory: {
onMemory: 'Fairy',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Fairy"],
},

name: "Misty Seed",
basePower: 10,
onStart(pokemon) {
pokemon.useItem();
},
if (this.field.isTerrain('mistyterrain')) {
}
boosts: {
spd: 1,
},
fastball: {
isPokeball: true,

name: "Moon Ball",
},
fightinggem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Moon Stone",
basePower: 30,
},
fightingmemory: {
onMemory: 'Fighting',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Fighting"],
},

name: "Muscle Band",
basePower: 10,
onBasePowerPriority: 16,
if (move.category === 'Physical') {
}
},
fightiniumz: {
onPlate: 'Fighting',
zMove: true,
forcedForme: "Arceus-Fighting",
},

name: "Mystery Berry",
naturalGift: {
type: "Fighting",
onUpdate(pokemon) {
const moveSlot = pokemon.lastMove && pokemon.getMoveData(pokemon.lastMove.id);
pokemon.addVolatile('leppaberry');
pokemon.eatItem();
},
let moveSlot;
moveSlot = pokemon.volatiles['leppaberry'].moveSlot;
} else {
for (const possibleMoveSlot of pokemon.moveSlots) {
moveSlot = possibleMoveSlot;
}
}
if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
},
},
figyberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
if (pokemon.getNature().minus === 'atk') {
}
},

name: "Mystic Water",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Water') {
}
},
firegem: {
isGem: true,
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
source.addVolatile('gem');
},
},

name: "Nanab Berry",
naturalGift: {
type: "Water",
onEat: false,
},
firememory: {
onMemory: 'Fire',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Fire"],
},

name: "Nest Ball",
},
firestone: {
fling: {
},

name: "Net Ball",
},
firiumz: {
onPlate: 'Fire',
zMove: true,
forcedForme: "Arceus-Fire",
},

name: "Never-Melt Ice",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Ice') {
}
},
fistplate: {
onPlate: 'Fighting',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Nomel Berry",
naturalGift: {
type: "Dragon",
onEat: false,
},
flameplate: {
onPlate: 'Fire',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Normal Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Normal' && source.useItem()) {
}
},
flowersweet: {
fling: {
},
},

name: "Normalium Z",
zMove: true,
isNonstandard: "Past",
flyinggem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Occa Berry",
naturalGift: {
type: "Fire",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
flyingmemory: {
onMemory: 'Flying',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Flying"],
},

name: "Odd Incense",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Psychic') {
}
isNonstandard: "Past",
flyiniumz: {
onPlate: 'Flying',
zMove: true,
forcedForme: "Arceus-Flying",
},

name: "Old Amber",
basePower: 100,
isNonstandard: "Past",
fossilizedbird: {
fling: {
},
},

name: "Oran Berry",
naturalGift: {
type: "Poison",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
},
fossilizeddino: {
fling: {
},
},

name: "Oval Stone",
basePower: 80,
},
fossilizeddrake: {
fling: {
},
},

name: "Pamtre Berry",
naturalGift: {
type: "Steel",
onEat: false,
},
fossilizedfish: {
fling: {
},
},

name: "Park Ball",
isNonstandard: "Unobtainable",
friendball: {
isPokeball: true,

name: "Passho Berry",
naturalGift: {
type: "Water",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
fullincense: {
fling: {
},
isNonstandard: "Past",

name: "Payapa Berry",
naturalGift: {
type: "Psychic",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
galaricacuff: {
fling: {
},
},

name: "Pecha Berry",
naturalGift: {
type: "Electric",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
}
},
galaricawreath: {
fling: {
},
},

name: "Persim Berry",
naturalGift: {
type: "Ground",
onUpdate(pokemon) {
pokemon.eatItem();
},
pokemon.removeVolatile('confusion');
},
galladite: {
megaStone: "Gallade-Mega",
itemUser: ["Gallade"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Petaya Berry",
naturalGift: {
type: "Poison",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
garchompite: {
megaStone: "Garchomp-Mega",
itemUser: ["Garchomp"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Pidgeotite",
megaEvolves: "Pidgeot",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
gardevoirite: {
megaStone: "Gardevoir-Mega",
itemUser: ["Gardevoir"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Pikanium Z",
zMove: "Catastropika",
itemUser: ["Pikachu"],
},
gengarite: {
megaStone: "Gengar-Mega",
itemUser: ["Gengar"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Pikashunium Z",
zMove: "10,000,000 Volt Thunderbolt",
itemUser: ["Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner"],
},
ghostgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Pinap Berry",
naturalGift: {
type: "Grass",
onEat: false,
},
ghostiumz: {
onPlate: 'Ghost',
zMove: true,
forcedForme: "Arceus-Ghost",
},

name: "Pink Bow",
if (move.type === 'Normal') {
}
isNonstandard: "Past",
ghostmemory: {
onMemory: 'Ghost',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Ghost"],
},

name: "Pinsirite",
megaEvolves: "Pinsir",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
glalitite: {
megaStone: "Glalie-Mega",
itemUser: ["Glalie"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Pixie Plate",
onBasePowerPriority: 15,
if (move && move.type === 'Fairy') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Fairy",
goldberry: {
isBerry: true,
basePower: 80,
},
onResidual(pokemon) {
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
},
},

name: "Plume Fossil",
basePower: 100,
isNonstandard: "Past",
goldbottlecap: {
fling: {
},

name: "Poison Barb",
basePower: 70,
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
grassgem: {
isGem: true,
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
source.addVolatile('gem');
},
},

name: "Poison Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Poison' && source.useItem()) {
}
isNonstandard: "Past",
grassiumz: {
onPlate: 'Grass',
zMove: true,
forcedForme: "Arceus-Grass",
},

name: "Poisonium Z",
onTakeItem: false,
zMoveType: "Poison",
isNonstandard: "Past",
grassmemory: {
onMemory: 'Grass',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Grass"],
},

name: "Poison Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Poison",
isNonstandard: "Past",
greatball: {
isPokeball: true,

name: "Poke Ball",
},
grepaberry: {
isBerry: true,
basePower: 90,
},
},

name: "Polkadot Bow",
if (move.type === 'Normal') {
}
isNonstandard: "Past",
griseouscore: {
onBasePowerPriority: 15,
if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Giratina-Origin",
},

name: "Pomeg Berry",
naturalGift: {
type: "Ice",
onEat: false,
griseousorb: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Power Anklet",
fling: {
},
return this.chainModify(0.5);
},
groundgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Power Band",
fling: {
},
return this.chainModify(0.5);
},
groundiumz: {
onPlate: 'Ground',
zMove: true,
forcedForme: "Arceus-Ground",
},

name: "Power Belt",
fling: {
},
return this.chainModify(0.5);
},
groundmemory: {
onMemory: 'Ground',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Ground"],
},

name: "Power Bracer",
fling: {
},
return this.chainModify(0.5);
},
gyaradosite: {
megaStone: "Gyarados-Mega",
itemUser: ["Gyarados"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

onChargeMove(pokemon, target, move) {
this.debug('power herb - remove charge turn for ' + move.id);
this.addMove('-anim', pokemon, move.name, target);
}
name: "Power Herb",
basePower: 10,
},
healball: {
isPokeball: true,

name: "Power Lens",
fling: {
},
return this.chainModify(0.5);
},
heavyball: {
isPokeball: true,

name: "Power Weight",
fling: {
},
return this.chainModify(0.5);
},
helixfossil: {
fling: {
},
},

name: "Premier Ball",
},
heracronite: {
megaStone: "Heracross-Mega",
itemUser: ["Heracross"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Primarium Z",
zMove: "Oceanic Operetta",
itemUser: ["Primarina"],
},
hondewberry: {
isBerry: true,
basePower: 90,
},
},

name: "Prism Scale",
basePower: 30,
isNonstandard: "Past",
houndoominite: {
megaStone: "Houndoom-Mega",
itemUser: ["Houndoom"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Protective Pads",
basePower: 30,
// protective effect handled in Battle#checkMoveMakesContact
iapapaberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
if (pokemon.getNature().minus === 'def') {
}
},

name: "Protector",
basePower: 80,
isNonstandard: "Past",
iceberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'brn') {
}
onEat(pokemon) {
pokemon.cureStatus();
},
},

name: "PRZ Cure Berry",
naturalGift: {
type: "Fire",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'par') {
}
isNonstandard: "Past",
icegem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "PSN Cure Berry",
naturalGift: {
type: "Electric",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
}
isNonstandard: "Past",
icememory: {
onMemory: 'Ice',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Ice"],
},

name: "Psychic Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Psychic' && source.useItem()) {
}
isNonstandard: "Past",
icestone: {
fling: {
},

name: "Psychic Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Psychic",
isNonstandard: "Past",
icicleplate: {
onPlate: 'Ice',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Psychic Seed",
basePower: 10,
onStart(pokemon) {
pokemon.useItem();
},
if (this.field.isTerrain('psychicterrain')) {
}
boosts: {
spd: 1,
},
iciumz: {
onPlate: 'Ice',
zMove: true,
forcedForme: "Arceus-Ice",
},

name: "Psychium Z",
onTakeItem: false,
zMoveType: "Psychic",
isNonstandard: "Past",
inciniumz: {
onTakeItem: false,
zMoveFrom: "Darkest Lariat",
isNonstandard: "Past",

name: "Puck",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 1,
},
insectplate: {
onPlate: 'Bug',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Punching Glove",
basePower: 30,
onBasePowerPriority: 23,
if (move.flags['punch']) {
return this.chainModify([115, 100]);
},
onModifyMove(move) {
},
ironplate: {
onPlate: 'Steel',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Qualot Berry",
naturalGift: {
type: "Poison",
onEat: false,
jawfossil: {
fling: {
},
},

name: "Quick Ball",
},
kangaskhanite: {
megaStone: "Kangaskhan-Mega",
itemUser: ["Kangaskhan"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

onFractionalPriorityPriority: -2,
if (move.category === "Status" && pokemon.hasAbility("myceliummight")) return;
this.add('-activate', pokemon, 'item: Quick Claw');
}
name: "Quick Claw",
basePower: 80,
},
kelpsyberry: {
isBerry: true,
basePower: 90,
},
},

name: "Quick Powder",
basePower: 10,
onModifySpe(spe, pokemon) {
return this.chainModify(2);
},
isNonstandard: "Past",
kingsrock: {
fling: {
volatileStatus: 'flinch',
onModifyMovePriority: -1,
if (move.category !== "Status") {
for (const secondary of move.secondaries) {
}
chance: 10,
});
},

name: "Rabuta Berry",
naturalGift: {
type: "Ghost",
onEat: false,
},
kommoniumz: {
onTakeItem: false,
zMoveFrom: "Clanging Scales",
isNonstandard: "Past",

name: 'Rainbow Reflector',
onDamagingHit(damage, target, source, move) {
this.damage(source.baseMaxhp / 6, source, target);
},
latiasite: {
megaStone: "Latias-Mega",
itemUser: ["Latias"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Rare Bone",
basePower: 100,
},
latiosite: {
megaStone: "Latios-Mega",
itemUser: ["Latios"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Rawst Berry",
naturalGift: {
type: "Grass",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (pokemon.status === 'brn') {
}
},
laxincense: {
fling: {
},
onModifyAccuracy(accuracy) {
this.debug('lax incense - decreasing accuracy');
},
},

name: "Razor Claw",
basePower: 80,
onModifyCritRatio(critRatio) {
},
leafstone: {
fling: {
},

name: "Razor Fang",
basePower: 30,
},
onModifyMove(move) {
if (!move.secondaries) move.secondaries = [];
if (secondary.volatileStatus === 'flinch') return;
move.secondaries.push({
volatileStatus: 'flinch',
}
isNonstandard: "Past",
leek: {
fling: {
},
if (["Unbeliequack", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies))) {
}
itemUser: ["Farfetch\u2019d", "Farfetch\u2019d-Galar", "Sirfetch\u2019d"],
},

name: "Razz Berry",
naturalGift: {
type: "Steel",
onEat: false,
},
leppaberry: {
isBerry: true,
basePower: 80,
},
if (!pokemon.hp) return;
pokemon.eatItem();
},
const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
if (!moveSlot) return;
if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
},

name: "Reaper Cloth",
basePower: 10,
isNonstandard: "Past",
levelball: {
isPokeball: true,

name: "Red Card",
basePower: 10,
onAfterMoveSecondary(target, source, move) {
if (!source.isActive || !this.canSwitch(source.side) || source.forceSwitchFlag || target.forceSwitchFlag) {
}
if (target.useItem(source)) {
source.forceSwitchFlag = true;
}
},
loadeddice: {
fling: {
},
onModifyMove(move) {
delete move.multiaccuracy;
},

name: "Red Orb",
if (pokemon.isActive && pokemon.baseSpecies.name === 'Groudon') {
}
onPrimal(pokemon) {
},
if (source.baseSpecies.baseSpecies === 'Groudon') return false;
},
isNonstandard: "Past",
lopunnite: {
megaStone: "Lopunny-Mega",
itemUser: ["Lopunny"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Repeat Ball",
},
loveball: {
isPokeball: true,

name: "Ribbon Sweet",
basePower: 10,
isNonstandard: "Past",
lovesweet: {
fling: {
},
},

name: "Rindo Berry",
naturalGift: {
type: "Grass",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
lucarionite: {
megaStone: "Lucario-Mega",
itemUser: ["Lucario"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Ring Target",
basePower: 10,
onNegateImmunity: false,
luckypunch: {
fling: {
},
if (user.baseSpecies.name === 'Chansey') {
}
itemUser: ["Chansey"],
},

name: "Rock Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Rock' && source.useItem()) {
}
isNonstandard: "Past",
luminousmoss: {
fling: {
},
if (move.type === 'Water') {
}
boosts: {
},

name: "Rock Incense",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Rock') {
}
isNonstandard: "Past",
lunaliumz: {
onTakeItem: false,
zMoveFrom: "Moongeist Beam",
isNonstandard: "Past",

name: "Rockium Z",
onTakeItem: false,
zMoveType: "Rock",
isNonstandard: "Past",
lureball: {
isPokeball: true,

name: "Rock Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Rock",
isNonstandard: "Past",
lustrousglobe: {
onBasePowerPriority: 15,
if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Palkia-Origin",
},

name: "Rocky Helmet",
basePower: 60,
onDamagingHitOrder: 2,
if (this.checkMoveMakesContact(move, source, target)) {
}
},
lustrousorb: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Room Service",
basePower: 100,
onStart(pokemon) {
pokemon.useItem();
},
const pokemon = this.effectState.target;
pokemon.useItem(pokemon);
},
spe: -1,
},
luxuryball: {
isPokeball: true,

name: "Root Fossil",
basePower: 100,
isNonstandard: "Past",
lycaniumz: {
onTakeItem: false,
zMoveFrom: "Stone Edge",
isNonstandard: "Past",

name: "Rose Incense",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Grass') {
}
isNonstandard: "Past",
machobrace: {
ignoreKlutz: true,
basePower: 60,
onModifySpe(spe) {
},
},

name: "Roseli Berry",
naturalGift: {
type: "Fairy",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
magmarizer: {
fling: {
},
},

name: "Rowap Berry",
naturalGift: {
type: "Dark",
onDamagingHit(damage, target, source, move) {
if (target.eatItem()) {
}
},
isNonstandard: "Unobtainable",
magostberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Rusted Shield",
if ((source && source.baseSpecies.num === 889) || pokemon.baseSpecies.num === 889) {
}
},
},
mail: {
onTakeItem(item, source) {
if (this.activeMove.id !== 'knockoff' && this.activeMove.id !== 'thief' && this.activeMove.id !== 'covet') return false;
isNonstandard: "Past",

name: "Rusted Sword",
if ((source && source.baseSpecies.num === 888) || pokemon.baseSpecies.num === 888) {
}
},
},
maliciousarmor: {
fling: {
},

name: "Sablenite",
megaEvolves: "Sableye",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
manectite: {
megaStone: "Manectric-Mega",
itemUser: ["Manectric"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Sachet",
basePower: 80,
isNonstandard: "Past",
marshadiumz: {
onTakeItem: false,
zMoveFrom: "Spectral Thief",
isNonstandard: "Past",

name: "Safari Ball",
isNonstandard: "Unobtainable",
masterball: {
isPokeball: true,

name: "Safety Goggles",
basePower: 80,
onImmunity(type, pokemon) {
},
if (move.flags['powder'] && pokemon !== source && this.dex.getImmunity('powder', pokemon)) {
return null;
},
mattberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2.1) {
}
onTryEatItem(item, pokemon) {
},
this.heal(1);
},

name: "Sail Fossil",
basePower: 100,
isNonstandard: "Past",
mawilite: {
megaStone: "Mawile-Mega",
itemUser: ["Mawile"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Salac Berry",
naturalGift: {
type: "Fighting",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
},
meadowplate: {
onPlate: 'Grass',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Salamencite",
megaEvolves: "Salamence",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
medichamite: {
megaStone: "Medicham-Mega",
itemUser: ["Medicham"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Sceptilite",
megaEvolves: "Sceptile",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
metagrossite: {
megaStone: "Metagross-Mega",
itemUser: ["Metagross"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Scizorite",
megaEvolves: "Scizor",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
metalpowder: {
fling: {
},
onModifyDef(def, pokemon) {
return this.chainModify(2);
},
isNonstandard: "Past",

name: "Scope Lens",
basePower: 30,
onModifyCritRatio(critRatio) {
},
metronome: {
fling: {
},
pokemon.addVolatile('metronome');
condition: {
this.effectState.lastMove = '';
},
onTryMove(pokemon, target, move) {
pokemon.removeVolatile('metronome');
}
this.effectState.numConsecutive++;
if (this.effectState.lastMove !== move.id) {
} else {
}
this.effectState.numConsecutive = 0;
this.effectState.lastMove = move.id;
onModifyDamage(damage, source, target, move) {
const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
return this.chainModify([dmgMod[numConsecutive], 4096]);
},

name: 'Scorching Sands Stone',
onModifyMove(move) {
if (!move.secondaries) move.secondaries = [];
chance: 33,
});
},
mewniumz: {
onTakeItem: false,
zMoveFrom: "Psychic",
isNonstandard: "Past",

name: "Sea Incense",
basePower: 10,
onBasePowerPriority: 15,
if (move && move.type === 'Water') {
}
isNonstandard: "Past",
mewtwonitex: {
megaStone: "Mewtwo-Mega-X",
itemUser: ["Mewtwo"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Sharp Beak",
basePower: 50,
onBasePowerPriority: 15,
if (move && move.type === 'Flying') {
}
},
mewtwonitey: {
megaStone: "Mewtwo-Mega-Y",
itemUser: ["Mewtwo"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Sharpedonite",
megaEvolves: "Sharpedo",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
mimikiumz: {
onTakeItem: false,
zMoveFrom: "Play Rough",
isNonstandard: "Past",

name: "Shed Shell",
basePower: 10,
onTrapPokemonPriority: -10,
pokemon.trapped = pokemon.maybeTrapped = false;
},
mindplate: {
onPlate: 'Psychic',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Shell Bell",
basePower: 30,
onAfterMoveSecondarySelfPriority: -1,
if (move.totalDamage && !pokemon.forceSwitchFlag) {
}
},
mintberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'slp') {
}
onEat(pokemon) {
pokemon.cureStatus();
},
},

name: "Shiny Stone",
basePower: 80,
},
miracleberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status || pokemon.volatiles['confusion']) {
}
onEat(pokemon) {
pokemon.removeVolatile('confusion');
isNonstandard: "Past",

name: "Shock Drive",
if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
}
},
forcedForme: "Genesect-Shock",
isNonstandard: "Past",
moonball: {
isPokeball: true,

name: "Shuca Berry",
naturalGift: {
type: "Ground",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
moonstone: {
fling: {
},

name: "Silk Scarf",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Normal') {
}
},
mysteryberry: {
isBerry: true,
basePower: 80,
},
if (!pokemon.hp) return;
if (moveSlot && moveSlot.pp === 0) {
pokemon.volatiles['leppaberry'].moveSlot = moveSlot;
}
onEat(pokemon) {
if (pokemon.volatiles['leppaberry']) {
pokemon.removeVolatile('leppaberry');
let pp = 99;
if (possibleMoveSlot.pp < pp) {
pp = moveSlot.pp;
}
moveSlot.pp += 5;
this.add('-activate', pokemon, 'item: Mystery Berry', moveSlot.move);
isNonstandard: "Past",

name: "Silver Powder",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Bug') {
}
},
nanabberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Sirius Armilla",
basePower: 10,
onResidualOrder: 5,
onResidual(pokemon) {
},
onDamage(damage, target, source, effect) {
this.add("-activate", target, "item: Sirius Armilla");
}
},
nestball: {
isPokeball: true,

name: "Sitrus Berry",
naturalGift: {
type: "Psychic",
onUpdate(pokemon) {
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
},
netball: {
isPokeball: true,

name: "Skates",
basePower: 30,
onBasePowerPriority: 23,
if (move.flags['slow']) {
return this.chainModify([115, 100]);
},
onModifyMove(move) {
},
nomelberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Skull Fossil",
basePower: 100,
isNonstandard: "Past",
normalgem: {
isGem: true,
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
source.addVolatile('gem');
},

name: "Sky Plate",
onBasePowerPriority: 15,
if (move.type === 'Flying') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Flying",
normaliumz: {
onTakeItem: false,
zMoveType: "Normal",
},

name: "Slowbronite",
megaEvolves: "Slowbro",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
oddincense: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Smooth Rock",
basePower: 10,
},
oldamber: {
fling: {
},
},

name: "Snorlium Z",
zMove: "Pulverizing Pancake",
itemUser: ["Snorlax"],
},
ovalstone: {
fling: {
},

name: "Snowball",
basePower: 30,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 1,
},
pamtreberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Soft Sand",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Ground') {
}
},
parkball: {
isPokeball: true,
},

name: "Solganium Z",
zMove: "Searing Sunraze Smash",
itemUser: ["Solgaleo", "Necrozma-Dusk-Mane"],
},
petayaberry: {
isBerry: true,
basePower: 100,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
this.boost({spa: 1.5});
},

name: "Soul Dew",
basePower: 30,
onBasePowerPriority: 15,
if (
(move.type === 'Psychic' || move.type === 'Dragon')
return this.chainModify([115, 100]);
},
isNonstandard: "Past",
pidgeotite: {
megaStone: "Pidgeot-Mega",
itemUser: ["Pidgeot"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Spell Tag",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Ghost') {
}
},
pikaniumz: {
onTakeItem: false,
zMoveFrom: "Volt Tackle",
isNonstandard: "Past",

name: "Spelon Berry",
naturalGift: {
type: "Dark",
onEat: false,
},
pikashuniumz: {
onTakeItem: false,
zMoveFrom: "Thunderbolt",
isNonstandard: "Past",

name: "Splash Plate",
onBasePowerPriority: 15,
if (move.type === 'Water') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Water",
pinapberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Spooky Plate",
onBasePowerPriority: 15,
if (move.type === 'Ghost') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Ghost",
pinkbow: {
onBasePower(basePower, user, target, move) {
return basePower * 1.1;
},
},

name: "Sport Ball",
isNonstandard: "Unobtainable",
pinsirite: {
megaStone: "Pinsir-Mega",
itemUser: ["Pinsir"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Starf Berry",
naturalGift: {
type: "Psychic",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onEat(pokemon) {
let stat: BoostID;
if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
}
if (stats.length) {
const boost: SparseBoostsTable = {};
this.boost(boost);
},
pixieplate: {
onPlate: 'Fairy',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

name: "Star Sweet",
basePower: 10,
isNonstandard: "Past",
plumefossil: {
fling: {
},
},

name: "Steel Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Steel' && source.useItem()) {
}
isNonstandard: "Past",
poisongem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Steelium Z",
onTakeItem: false,
zMoveType: "Steel",
isNonstandard: "Past",
poisoniumz: {
onPlate: 'Poison',
zMove: true,
forcedForme: "Arceus-Poison",
},

name: "Steelixite",
megaEvolves: "Steelix",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
poisonmemory: {
onMemory: 'Poison',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Poison"],
},

name: "Steel Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Steel",
isNonstandard: "Past",
pokeball: {
isPokeball: true,

name: "Stick",
basePower: 60,
onModifyCritRatio(critRatio, user) {
return critRatio + 2;
},
isNonstandard: "Past",
polkadotbow: {
onBasePower(basePower, user, target, move) {
return basePower * 1.1;
},
},

name: "Sticky Barb",
basePower: 80,
onResidualOrder: 28,
onResidual(pokemon) {
},
if (source && source !== target && !source.item && move && this.checkMoveMakesContact(move, source, target)) {
if (!barb) return; // Gen 4 Multitype
// no message for Sticky Barb changing hands
},
pomegberry: {
isBerry: true,
basePower: 90,
},
},

name: "Stone Plate",
onBasePowerPriority: 15,
if (move.type === 'Rock') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Rock",
poweranklet: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Strange Ball",
isNonstandard: "Unobtainable",
powerband: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Strawberry Sweet",
basePower: 10,
isNonstandard: "Past",
powerbelt: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Sun Stone",
basePower: 30,
},
powerbracer: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Superspicy Curry",
basePower: 30,
onResidualOrder: 5,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 13.34);
this.damage(pokemon.baseMaxhp / 3);
},
powerlens: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Swampertite",
megaEvolves: "Swampert",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
powerweight: {
ignoreKlutz: true,
basePower: 70,
onModifySpe(spe) {
},

name: "Sweet Apple",
basePower: 30,
},
premierball: {
isPokeball: true,

name: "Tamato Berry",
naturalGift: {
type: "Psychic",
onEat: false,
primariumz: {
onTakeItem: false,
zMoveFrom: "Sparkling Aria",
isNonstandard: "Past",

name: "Tanga Berry",
naturalGift: {
type: "Bug",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
prismscale: {
fling: {
},
},

name: "Tapunium Z",
zMove: "Guardian of Alola",
itemUser: ["Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini"],
},
protector: {
fling: {
},
},

name: "Tart Apple",
basePower: 30,
},
przcureberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'par') {
}
onEat(pokemon) {
pokemon.cureStatus();
},
},

name: "Terrain Extender",
basePower: 60,
},
psncureberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.status === 'psn' || pokemon.status === 'tox') {
}
onEat(pokemon) {
pokemon.cureStatus();
},
},

name: "Thick Club",
basePower: 90,
onModifyAtkPriority: 1,
if (pokemon.baseSpecies.baseSpecies === 'Cubone' || pokemon.baseSpecies.baseSpecies === 'Harrowack') {
}
itemUser: ["Harrowack", "Marowak-Alola", "Marowak-Alola-Totem", "Cubone"],
},
psychicgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Throat Spray",
basePower: 30,
onAfterMoveSecondarySelf(target, source, move) {
target.useItem();
},
spa: 1,
},
psychicmemory: {
onMemory: 'Psychic',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Psychic"],
},

name: "Thunder Stone",
basePower: 30,
},
psychiumz: {
onPlate: 'Psychic',
zMove: true,
forcedForme: "Arceus-Psychic",
},

name: "Timer Ball",
},
qualotberry: {
isBerry: true,
basePower: 90,
},
},

name: "Toxic Orb",
basePower: 30,
},
onResidualSubOrder: 3,
pokemon.trySetStatus('tox', pokemon);
},
quickball: {
isPokeball: true,

name: "Toxic Plate",
onBasePowerPriority: 15,
if (move.type === 'Poison') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Poison",
quickpowder: {
fling: {
},
if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
}
itemUser: ["Ditto"],
},

name: "Twisted Spoon",
basePower: 30,
onBasePowerPriority: 15,
if (move.type === 'Psychic') {
}
},
rabutaberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

name: "Tyranitarite",
megaEvolves: "Tyranitar",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
rarebone: {
fling: {
},

name: "Ultra Ball",
},
razorclaw: {
fling: {
},
return critRatio + 1;
},

name: "Ultranecrozium Z",
zMove: "Light That Burns the Sky",
itemUser: ["Necrozma-Ultra"],
},
razorfang: {
fling: {
volatileStatus: 'flinch',
onModifyMovePriority: -1,
if (move.category !== "Status") {
for (const secondary of move.secondaries) {
}
chance: 10,
});
},
},

name: "Up-Grade",
basePower: 30,
isNonstandard: "Past",
razzberry: {
isBerry: true,
basePower: 80,
},
isNonstandard: "Past",

name: "Utility Umbrella",
basePower: 60,
// Partially implemented in Pokemon.effectiveWeather() in sim/pokemon.ts
if (!pokemon.ignoringItem()) return;
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
},
if (!this.effectState.inactive) return;
if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
}
onEnd(pokemon) {
this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
this.effectState.inactive = true;
},
reapercloth: {
fling: {
},
},

name: "Venusaurite",
megaEvolves: "Venusaur",
onTakeItem(item, source) {
return true;
isNonstandard: "Past",
redorb: {
onSwitchIn(pokemon) {
this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
},
pokemon.formeChange('Groudon-Primal', this.effect, true);
onTakeItem(item, source) {
return true;
itemUser: ["Groudon"],
},

name: "Vile Vial",
basePower: 60,
onBasePowerPriority: 15,
if (user.baseSpecies.num === -66 && ['Poison', 'Flying'].includes(move.type)) {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Venomicon-Epilogue",
isNonstandard: "CAP",
repeatball: {
isPokeball: true,

name: "Voodoo Doll",
onDamage: function (damage, target, source, effect) {
let damageToReflect = Math.floor(damage / 4);
this.add('-message', target.name + "'s Voodoo Doll reflects " + damageToReflect + " damage back at " + source.name + "!");
},
ribbonsweet: {
fling: {
},
},

name: "Wacan Berry",
naturalGift: {
type: "Electric",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
rockgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

name: "Water Gem",
onSourceTryPrimaryHit(target, source, move) {
if (move.type === 'Water' && source.useItem()) {
}
isNonstandard: "Past",
rockincense: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Waterium Z",
onTakeItem: false,
zMoveType: "Water",
isNonstandard: "Past",
rockiumz: {
onPlate: 'Rock',
zMove: true,
forcedForme: "Arceus-Rock",
},

name: "Water Memory",
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Silvally-Water",
isNonstandard: "Past",
rockmemory: {
onMemory: 'Rock',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Rock"],
},

name: "Water Stone",
basePower: 30,
},
rootfossil: {
fling: {
},
},

name: "Watmel Berry",
naturalGift: {
type: "Fire",
onEat: false,
},
roseincense: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Wave Incense",
basePower: 10,
onBasePowerPriority: 15,
if (move.type === 'Water') {
}
isNonstandard: "Past",
rustedshield: {
onTakeItem(item, pokemon, source) {
return false;
return true;
itemUser: ["Zamazenta-Crowned"],

name: "Weakness Policy",
basePower: 80,
onDamagingHit(damage, target, source, move) {
target.useItem();
},
atk: 2,
},
rustedsword: {
onTakeItem(item, pokemon, source) {
return false;
return true;
itemUser: ["Zacian-Crowned"],

name: "Wepear Berry",
naturalGift: {
type: "Electric",
onEat: false,
},
sablenite: {
megaStone: "Sableye-Mega",
itemUser: ["Sableye"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Whipped Dream",
basePower: 80,
isNonstandard: "Past",
sachet: {
fling: {
},
},

name: "White Herb",
basePower: 10,
let activate = false;
let i: BoostID;
if (pokemon.boosts[i] < 0) {
boosts[i] = 0;
}
pokemon.setBoost(boosts);
}
},
let activate = false;
let i: BoostID;
if (pokemon.boosts[i] < 0) {
boosts[i] = 0;
}
pokemon.setBoost(boosts);
}
},
safariball: {
isPokeball: true,
},

name: "Wide Lens",
basePower: 10,
onSourceModifyAccuracyPriority: -2,
if (typeof accuracy === 'number') {
}
},
sailfossil: {
fling: {
},
},

name: "Wiki Berry",
naturalGift: {
type: "Rock",
onUpdate(pokemon) {
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
}
onTryEatItem(item, pokemon) {
},
this.heal(pokemon.baseMaxhp / 3);
pokemon.addVolatile('confusion');
},
salamencite: {
megaStone: "Salamence-Mega",
itemUser: ["Salamence"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Wise Glasses",
basePower: 10,
onBasePowerPriority: 16,
if (move.category === 'Special') {
}
},
sceptilite: {
megaStone: "Sceptile-Mega",
itemUser: ["Sceptile"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Yache Berry",
naturalGift: {
type: "Ice",
onSourceModifyDamage(damage, source, target, move) {
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (target.eatItem()) {
this.add('-enditem', target, this.effect, '[weaken]');
}
},
},
scizorite: {
megaStone: "Scizor-Mega",
itemUser: ["Scizor"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Yellow Card",
pokemon.itemUsageCount = 1;
onBeforeMove: function (attacker, defender, move) {
defender.addVolatile('yellowcard');
if (defender.item) {
if (item) {
}
defender.setItem('');
return false;
},
},
seaincense: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
},

name: "Zap Plate",
onBasePowerPriority: 15,
if (move.type === 'Electric') {
}
onTakeItem(item, pokemon, source) {
return false;
return true;
forcedForme: "Arceus-Electric",
sharpedonite: {
megaStone: "Sharpedo-Mega",
itemUser: ["Sharpedo"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

name: "Zoom Lens",
basePower: 10,
onSourceModifyAccuracyPriority: -2,
if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
return this.chainModify([115, 100]);
},
if (!this.queue.willMove(target)) {
return critRatio + 1;
},
shinystone: {
fling: {
},

shockdrive: {
onTakeItem(item, pokemon, source) {
return false;
return true;
onDrive: 'Electric',
itemUser: ["Genesect-Shock"],
},

siriusarmilla: {
fling: {
},
onResidualSubOrder: 4,
this.heal(pokemon.baseMaxhp / 30);
onDamagePriority: -40,
if (this.randomChance(15, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
return target.hp - 1;
},

skullfossil: {
fling: {
},
},

skyplate: {
onPlate: 'Flying',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

slowbronite: {
megaStone: "Slowbro-Mega",
itemUser: ["Slowbro"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

snorliumz: {
onTakeItem: false,
zMoveFrom: "Giga Impact",
isNonstandard: "Past",

solganiumz: {
onTakeItem: false,
zMoveFrom: "Sunsteel Strike",
isNonstandard: "Past",

souldew: {
fling: {
},
onBasePower(basePower, user, target, move) {
move && (user.baseSpecies.num === 380 || user.baseSpecies.num === 381) &&
) {
}
itemUser: ["Latios", "Latias"],
},

spelonberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

splashplate: {
onPlate: 'Water',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

spookyplate: {
onPlate: 'Ghost',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

sportball: {
isPokeball: true,
},

starsweet: {
fling: {
},
},

steelgem: {
isGem: true,
if (target === source || move.category === 'Status') return;
source.addVolatile('gem');
},
},

steeliumz: {
onPlate: 'Steel',
zMove: true,
forcedForme: "Arceus-Steel",
},

steelixite: {
megaStone: "Steelix-Mega",
itemUser: ["Steelix"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

steelmemory: {
onMemory: 'Steel',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Steel"],
},

stick: {
fling: {
},
if (this.toID(user.baseSpecies.baseSpecies) === 'Unbeliequack') {
}
itemUser: ["Farfetch\u2019d"],
},

stoneplate: {
onPlate: 'Rock',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

strangeball: {
isPokeball: true,
},

strawberrysweet: {
fling: {
},
},

sunstone: {
fling: {
},

swampertite: {
megaStone: "Swampert-Mega",
itemUser: ["Swampert"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

sweetapple: {
fling: {
},

tamatoberry: {
isBerry: true,
basePower: 90,
},
},

tapuniumz: {
onTakeItem: false,
zMoveFrom: "Nature's Madness",
isNonstandard: "Past",

tartapple: {
fling: {
},

thickclub: {
fling: {
},
onModifyAtk(atk, pokemon) {
return this.chainModify(2);
},
isNonstandard: "Past",

thunderstone: {
fling: {
},

timerball: {
isPokeball: true,

toxicplate: {
onPlate: 'Poison',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

tyranitarite: {
megaStone: "Tyranitar-Mega",
itemUser: ["Tyranitar"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

ultraball: {
isPokeball: true,

ultranecroziumz: {
onTakeItem: false,
zMoveFrom: "Photon Geyser",
isNonstandard: "Past",

upgrade: {
fling: {
},
},

venusaurite: {
megaStone: "Venusaur-Mega",
itemUser: ["Venusaur"],
if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
},
},

vilevial: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if (source?.baseSpecies.num === -66 || pokemon.baseSpecies.num === -66) {
}
},
itemUser: ["Venomicon-Epilogue"],
},

voodoodoll: {
onDamagePriority: -100,
if (effect && effect.effectType === 'Move' && effect.isContact && damage > 0) {
this.damage(damageToReflect, source, target);
}
},

watergem: {
isGem: true,
if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
source.addVolatile('gem');
},
},

wateriumz: {
onPlate: 'Water',
zMove: true,
forcedForme: "Arceus-Water",
},

watermemory: {
onMemory: 'Water',
if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
}
},
itemUser: ["Silvally-Water"],
},

waterstone: {
fling: {
},

watmelberry: {
isBerry: true,
basePower: 100,
},
isNonstandard: "Past",

waveincense: {
fling: {
},
onBasePower(basePower, user, target, move) {
return this.chainModify([4915, 4096]);
},
},

wepearberry: {
isBerry: true,
basePower: 90,
},
isNonstandard: "Past",

wikiberry: {
isBerry: true,
basePower: 80,
},
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.eatItem();
},
if (!this.runEvent('TryHeal', pokemon)) return false;
onEat(pokemon) {
if (pokemon.getNature().minus === 'spa') {
}
},

zapplate: {
onPlate: 'Electric',
onBasePower(basePower, user, target, move) {
return this.chainModify([115, 100]);
},
if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
}
},
},

};