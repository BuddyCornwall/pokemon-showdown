export const Items: {[itemid: string]: ItemData} = {

siriusarmilla: {
name: "Sirius Armilla",
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
},

mattberry: {
name: "Matt Berry",
isBerry: true,
naturalGift: {
basePower: 80,
type: "Poison",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2.1) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(1);
},
},

mbcumuberry: {
name: "MBCUMU Berry",
isBerry: true,
naturalGift: {
basePower: 80,
type: "Poison",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2.1) {
pokemon.eatItem();
}
},
onTryEatItem(item, pokemon) {
if (!this.runEvent('TryHeal', pokemon)) return false;
},
onEat(pokemon) {
this.heal(1);
},
},

abilityshield: {
name: "Ability Shield",
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
},

captainsarmband: {
name: "Captain's Armband",
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

absorbbulb: {
name: "Absorb Bulb",
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
},

apicotberry: {
name: "Apicot Berry",
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
},

aspearberry: {
name: "Aspear Berry",
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
},

assaultvest: {
name: "Assault Vest",
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
},

babiriberry: {
name: "Babiri Berry",
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
},

belueberry: {
name: "Belue Berry",
isBerry: true,
naturalGift: {
basePower: 100,
type: "Electric",
},
onEat: false,
isNonstandard: "Past",
},

berryjuice: {
name: "Berry Juice",
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
isNonstandard: "Past",
},

berrysweet: {
name: "Berry Sweet",
fling: {
basePower: 10,
},
isNonstandard: "Past",
},

bigroot: {
name: "Big Root",
fling: {
basePower: 10,
},
onTryHealPriority: 1,
onTryHeal(damage, target, source, effect) {
const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
if (heals.includes(effect.id)) {
return this.chainModify([115, 100]);
}
},
},

blackbelt: {
name: "Black Belt",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fighting') {
return this.chainModify([115, 100]);
}
},
},

blackglasses: {
name: "Black Glasses",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Dark') {
return this.chainModify([115, 100]);
}
},
},

blacksludge: {
name: "Black Sludge",
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
},

blueorb: {
name: "Blue Orb",
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
isNonstandard: "Past",
},

blukberry: {
name: "Bluk Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Fire",
},
onEat: false,
isNonstandard: "Past",
},

blunderpolicy: {
name: "Blunder Policy",
onMoveFail(target, source, move) {
if (source && source.useItem()) {
this.boost({spe: 2}, source);
}
},
},

boosterenergy: {
name: "Booster Energy",
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
},

bulletproofvest: {
name: "Bullet Proof Vest",
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
},

charcoal: {
name: "Charcoal",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Fire') {
return this.chainModify([115, 100]);
}
},
},

chartiberry: {
name: "Charti Berry",
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
},

cheriberry: {
name: "Cheri Berry",
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
},

chestoberry: {
name: "Chesto Berry",
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
},

chilanberry: {
name: "Chilan Berry",
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
},

choiceband: {
name: "Choice Band",
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
},

choicescarf: {
name: "Choice Scarf",
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
},

choicespecs: {
name: "Choice Specs",
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
},

chopleberry: {
name: "Chople Berry",
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
},

clearamulet: {
name: "Clear Amulet",
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
},

cobaberry: {
name: "Coba Berry",
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
},

colburberry: {
name: "Colbur Berry",
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
},

cornnberry: {
name: "Cornn Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Bug",
},
onEat: false,
isNonstandard: "Past",
},

covertcloak: {
name: "Covert Cloak",
fling: {
basePower: 30,
},
onModifySecondaries(secondaries) {
this.debug('Covert Cloak prevent secondary');
return secondaries.filter(effect => !!(effect.self || effect.dustproof));
},
},

custapberry: {
name: "Custap Berry",
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
isNonstandard: "Unobtainable",
},

destinyknot: {
name: "Destiny Knot",
fling: {
basePower: 10,
},
onAttractPriority: -100,
onAttract(target, source) {
this.debug('attract intercepted: ' + target + ' from ' + source);
if (!source || source === target) return;
if (!source.volatiles['attract']) source.addVolatile('attract', target);
},
},

dragonfang: {
name: "Dragon Fang",
fling: {
basePower: 70,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Dragon') {
return this.chainModify([115, 100]);
}
},
},

durinberry: {
name: "Durin Berry",
isBerry: true,
naturalGift: {
basePower: 100,
type: "Water",
},
onEat: false,
isNonstandard: "Past",
},

ejectbutton: {
name: "Eject Button",
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
},

ejectpack: {
name: "Eject Pack",
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
},

electricseed: {
name: "Electric Seed",
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
},

enigmaberry: {
name: "Enigma Berry",
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
isNonstandard: "Unobtainable",
},

eviolite: {
name: "Eviolite",
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
},

eviomax: {
name: "Eviomax",
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
},

figyberry: {
name: "Figy Berry",
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
},

flameorb: {
name: "Flame Orb",
fling: {
basePower: 30,
status: 'brn',
},
onResidualOrder: 28,
onResidualSubOrder: 3,
onResidual(pokemon) {
pokemon.trySetStatus('brn', pokemon);
},
},

floatstone: {
name: "Float Stone",
fling: {
basePower: 30,
},
onModifyWeight(weighthg) {
return this.trunc(weighthg / 2);
},
},

focusband: {
name: "Focus Band",
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
},

focussash: {
name: "Focus Sash",
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
},

ganlonberry: {
name: "Ganlon Berry",
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
},

grassyseed: {
name: "Grassy Seed",
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
},

grepaberry: {
name: "Grepa Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Flying",
},
onEat: false,
},

gripclaw: {
name: "Grip Claw",
fling: {
basePower: 90,
},
// implemented in statuses
},

griseouscore: {
name: "Griseous Core",
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
return this.chainModify([115, 100]);
}
},
onTakeItem(item, pokemon, source) {
if (source?.baseSpecies.num === 487 || pokemon.baseSpecies.num === 487) {
return false;
}
return true;
},
forcedForme: "Giratina-Origin",
itemUser: ["Giratina-Origin"],
},

griseousorb: {
name: "Griseous Orb",
fling: {
basePower: 60,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
return this.chainModify([115, 100]);
}
},
itemUser: ["Giratina"],
},

habanberry: {
name: "Haban Berry",
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
},

hardstone: {
name: "Hard Stone",
fling: {
basePower: 100,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Rock') {
return this.chainModify([115, 100]);
}
},
},

hondewberry: {
name: "Hondew Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Ground",
},
onEat: false,
},

iapapaberry: {
name: "Iapapa Berry",
isBerry: true,
naturalGift: {
basePower: 80,
type: "Dark",
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
if (pokemon.getNature().minus === 'def') {
pokemon.addVolatile('confusion');
}
},
},

ironball: {
name: "Iron Ball",
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
},

jabocaberry: {
name: "Jaboca Berry",
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
isNonstandard: "Unobtainable",
},

kasibberry: {
name: "Kasib Berry",
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
},

kebiaberry: {
name: "Kebia Berry",
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
},

keeberry: {
name: "Kee Berry",
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
isNonstandard: "Unobtainable",
},

kelpsyberry: {
name: "Kelpsy Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Fighting",
},
onEat: false,
},

kingsrock: {
name: "King's Rock",
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
},

laggingtail: {
name: "Lagging Tail",
fling: {
basePower: 10,
},
onFractionalPriority: -0.1,
},

lansatberry: {
name: "Lansat Berry",
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
},

leek: {
name: "Leek",
fling: {
basePower: 60,
},
onModifyCritRatio(critRatio, user) {
if (["Unbeliequack", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies))) {
return critRatio + 2;
}
},
itemUser: ["Farfetch\u2019d", "Farfetch\u2019d-Galar", "Sirfetch\u2019d"],
isNonstandard: "Past",
},

leftovers: {
name: "Leftovers",
fling: {
basePower: 10,
},
onResidualOrder: 5,
onResidualSubOrder: 4,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 13.34);
},
},

leppaberry: {
name: "Leppa Berry",
isBerry: true,
naturalGift: {
basePower: 80,
type: "Fighting",
},
onUpdate(pokemon) {
if (!pokemon.hp) return;
if (pokemon.moveSlots.some(move => move.pp === 0)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
pokemon.moveSlots.find(move => move.pp < move.maxpp);
if (!moveSlot) return;
moveSlot.pp += 10;
if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
this.add('-activate', pokemon, 'item: Leppa Berry', moveSlot.move, '[consumed]');
},
},

liechiberry: {
name: "Liechi Berry",
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
},

lifeorb: {
name: "Life Orb",
fling: {
basePower: 30,
},
onModifyDamage(damage, source, target, move) {
return this.chainModify([115, 100]);
},
onAfterMoveSecondarySelf(source, target, move) {
if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
this.damage(source.baseMaxhp / 8, source, source, this.dex.items.get('lifeorb'));
}
},
},

lightball: {
name: "Light Ball",
fling: {
basePower: 30,
status: 'par',
},
onModifyAtkPriority: 1,
onModifyAtk(atk, pokemon) {
if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
return this.chainModify(2);
}
},
onModifySpAPriority: 1,
onModifySpA(spa, pokemon) {
if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
return this.chainModify(2);
}
},
itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
},

lightclay: {
name: "Light Clay",
// implemented in the corresponding thing
},

luckypunch: {
name: "Lucky Punch",
fling: {
basePower: 40,
},
onModifyCritRatio(critRatio, user) {
if (user.baseSpecies.name === 'Chansey') {
return critRatio + 2;
}
},
itemUser: ["Chansey"],
isNonstandard: "Past",
},

lumberry: {
name: "Lum Berry",
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
},

luminousmoss: {
name: "Luminous Moss",
fling: {
basePower: 30,
},
onDamagingHit(damage, target, source, move) {
if (move.type === 'Water') {
target.useItem();
}
},
boosts: {
spd: 1,
},
},

lustrousglobe: {
name: "Lustrous Globe",
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
return this.chainModify([115, 100]);
}
},
onTakeItem(item, pokemon, source) {
if (source?.baseSpecies.num === 484 || pokemon.baseSpecies.num === 484) {
return false;
}
return true;
},
forcedForme: "Palkia-Origin",
itemUser: ["Palkia-Origin"],
},

lustrousorb: {
name: "Lustrous Orb",
fling: {
basePower: 60,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
return this.chainModify([115, 100]);
}
},
itemUser: ["Palkia"],
},

magnet: {
name: "Magnet",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Electric') {
return this.chainModify([115, 100]);
}
},
},

magoberry: {
name: "Mago Berry",
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
},

magostberry: {
name: "Magost Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Rock",
},
onEat: false,
isNonstandard: "Past",
},

marangaberry: {
name: "Maranga Berry",
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
isNonstandard: "Unobtainable",
},

mentalherb: {
name: "Mental Herb",
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
},

metalcoat: {
name: "Metal Coat",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Steel') {
return this.chainModify([115, 100]);
}
},
},

metalpowder: {
name: "Metal Powder",
fling: {
basePower: 10,
},
onModifyDefPriority: 2,
onModifyDef(def, pokemon) {
if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
return this.chainModify(2);
}
},
itemUser: ["Ditto"],
isNonstandard: "Past",
},

metronome: {
name: "Metronome",
fling: {
basePower: 30,
},
onStart(pokemon) {
pokemon.addVolatile('metronome');
},
condition: {
onStart(pokemon) {
this.effectState.lastMove = '';
this.effectState.numConsecutive = 0;
},
onTryMovePriority: -2,
onTryMove(pokemon, target, move) {
if (!pokemon.hasItem('metronome')) {
pokemon.removeVolatile('metronome');
return;
}
if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
this.effectState.numConsecutive++;
} else if (pokemon.volatiles['twoturnmove']) {
if (this.effectState.lastMove !== move.id) {
this.effectState.numConsecutive = 1;
} else {
this.effectState.numConsecutive++;
}
} else {
this.effectState.numConsecutive = 0;
}
this.effectState.lastMove = move.id;
},
onModifyDamage(damage, source, target, move) {
const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
return this.chainModify([dmgMod[numConsecutive], 4096]);
},
},
},

micleberry: {
name: "Micle Berry",
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
return this.chainModify([115, 100]);
}
}
},
},
isNonstandard: "Unobtainable",
},

miracleseed: {
name: "Miracle Seed",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Grass') {
return this.chainModify([115, 100]);
}
},
},

mirrorherb: {
name: "Mirror Herb",
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
},

mistyseed: {
name: "Misty Seed",
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
},

mysticwater: {
name: "Mystic Water",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Water') {
return this.chainModify([115, 100]);
}
},
},

nanabberry: {
name: "Nanab Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Water",
},
onEat: false,
isNonstandard: "Past",
},

nevermeltice: {
name: "Never-Melt Ice",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ice') {
return this.chainModify([115, 100]);
}
},
},

nomelberry: {
name: "Nomel Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Dragon",
},
onEat: false,
isNonstandard: "Past",
},

occaberry: {
name: "Occa Berry",
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
},

oddincense: {
name: "Odd Incense",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Psychic') {
return this.chainModify([115, 100]);
}
},
isNonstandard: "Past",
},

oranberry: {
name: "Oran Berry",
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
},

pamtreberry: {
name: "Pamtre Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Steel",
},
onEat: false,
isNonstandard: "Past",
},

passhoberry: {
name: "Passho Berry",
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
},

payapaberry: {
name: "Payapa Berry",
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
},

pechaberry: {
name: "Pecha Berry",
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
},

persimberry: {
name: "Persim Berry",
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
},

petayaberry: {
name: "Petaya Berry",
isBerry: true,
naturalGift: {
basePower: 100,
type: "Poison",
},
onUpdate(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2 || (pokemon.hp <= pokemon.maxhp / 2 &&
pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
pokemon.eatItem();
}
},
onEat(pokemon) {
this.boost({spa: 1.5});
},
},

poisonbarb: {
name: "Poison Barb",
fling: {
basePower: 70,
status: 'psn',
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Poison') {
return this.chainModify([115, 100]);
}
},
},

pomegberry: {
name: "Pomeg Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Ice",
},
onEat: false,
},

powerbelt: {
name: "Power Belt",
ignoreKlutz: true,
fling: {
basePower: 70,
},
onModifySpe(spe) {
return this.chainModify(0.5);
},
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
fling: {
basePower: 10,
},
},

powerlens: {
name: "Power Lens",
ignoreKlutz: true,
fling: {
basePower: 70,
},
onModifySpe(spe) {
return this.chainModify(0.5);
},
},

protectivepads: {
name: "Protective Pads",
fling: {
basePower: 30,
},
// protective effect handled in Battle#checkMoveMakesContact
},

psychicseed: {
name: "Psychic Seed",
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
},

punchingglove: {
name: "Punching Glove",
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['punch']) {
this.debug('Punching Glove boost');
return this.chainModify([115, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['punch']) delete move.flags['contact'];
},
},

kickpads: {
name: "Kickpads",
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['kick']) {
this.debug('Kickpads boost');
return this.chainModify([115, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['kick']) delete move.flags['contact'];
},
},

goldenbullet: {
name: "Golden Bullet",
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['bullet']) {
this.debug('Golden Bullet boost');
return this.chainModify([115, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['bullet']) delete move.flags['contact'];
},
},

skates: {
name: "Skates",
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['slow']) {
this.debug('Skates boost');
return this.chainModify([115, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['slow']) delete move.flags['contact'];
},
},

wiseglasses: {
name: "Wise Glasses",
fling: {
basePower: 10,
},
onBasePowerPriority: 16,
onBasePower(basePower, user, target, move) {
if (move.category === 'Special') {
return this.chainModify([115, 100]);
}
},
},

muscleband: {
name: "Muscle Band",
fling: {
basePower: 10,
},
onBasePowerPriority: 16,
onBasePower(basePower, user, target, move) {
if (move.category === 'Physical') {
return this.chainModify([115, 100]);
}
},
},

dragonball: {
name: "Dragon Ball",
fling: {
basePower: 30,
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['beam']) {
this.debug('Dragon Ball boost');
return this.chainModify([115, 100]);
}
},
onModifyMovePriority: 1,
onModifyMove(move) {
if (move.flags['beam']) delete move.flags['contact'];
},
},

expertbelt: {
name: "Expert Belt",
fling: {
basePower: 10,
},
onModifyDamage(damage, source, target, move) {
if (move && target.getMoveHitData(move).typeMod > 0) {
return this.chainModify([115, 100]);
}
},
},

qualotberry: {
name: "Qualot Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Poison",
},
onEat: false,
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
fling: {
basePower: 80,
},
},

quickpowder: {
name: "Quick Powder",
fling: {
basePower: 10,
},
onModifySpe(spe, pokemon) {
if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
return this.chainModify(2);
}
},
itemUser: ["Ditto"],
isNonstandard: "Past",
},

rabutaberry: {
name: "Rabuta Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Ghost",
},
onEat: false,
isNonstandard: "Past",
},

rawstberry: {
name: "Rawst Berry",
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
},

razorclaw: {
name: "Razor Claw",
fling: {
basePower: 80,
},
onModifyCritRatio(critRatio) {
return critRatio + 1;
},
},

razorfang: {
name: "Razor Fang",
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
isNonstandard: "Past",
},

razzberry: {
name: "Razz Berry",
isBerry: true,
naturalGift: {
basePower: 80,
type: "Steel",
},
onEat: false,
isNonstandard: "Past",
},

redcard: {
name: "Red Card",
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
},

redorb: {
name: "Red Orb",
onSwitchIn(pokemon) {
if (pokemon.isActive && pokemon.baseSpecies.name === 'Groudon') {
this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
}
},
onPrimal(pokemon) {
pokemon.formeChange('Groudon-Primal', this.effect, true);
},
onTakeItem(item, source) {
if (source.baseSpecies.baseSpecies === 'Groudon') return false;
return true;
},
itemUser: ["Groudon"],
isNonstandard: "Past",
},

rindoberry: {
name: "Rindo Berry",
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
},

rockincense: {
name: "Rock Incense",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Rock') {
return this.chainModify([115, 100]);
}
},
isNonstandard: "Past",
},

rockyhelmet: {
name: "Rocky Helmet",
fling: {
basePower: 60,
},
onDamagingHitOrder: 2,
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
this.damage(source.baseMaxhp / 6, source, target);
}
},
},

roomservice: {
name: "Room Service",
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
},

roseincense: {
name: "Rose Incense",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Grass') {
return this.chainModify([115, 100]);
}
},
isNonstandard: "Past",
},

roseliberry: {
name: "Roseli Berry",
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
},

rowapberry: {
name: "Rowap Berry",
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
isNonstandard: "Unobtainable",
},

safetygoggles: {
name: "Safety Goggles",
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
},

salacberry: {
name: "Salac Berry",
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
},

scopelens: {
name: "Scope Lens",
fling: {
basePower: 30,
},
onModifyCritRatio(critRatio) {
return critRatio + 1;
},
},

seaincense: {
name: "Sea Incense",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Water') {
return this.chainModify([115, 100]);
}
},
isNonstandard: "Past",
},

sharpbeak: {
name: "Sharp Beak",
fling: {
basePower: 50,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move && move.type === 'Flying') {
return this.chainModify([115, 100]);
}
},
},

shedshell: {
name: "Shed Shell",
fling: {
basePower: 10,
},
onTrapPokemonPriority: -10,
onTrapPokemon(pokemon) {
pokemon.trapped = pokemon.maybeTrapped = false;
},
},

shellbell: {
name: "Shell Bell",
fling: {
basePower: 30,
},
onAfterMoveSecondarySelfPriority: -1,
onAfterMoveSecondarySelf(pokemon, target, move) {
if (move.totalDamage && !pokemon.forceSwitchFlag) {
this.heal(move.totalDamage / 8, pokemon);
}
},
},

shucaberry: {
name: "Shuca Berry",
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
},

silkscarf: {
name: "Silk Scarf",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Normal') {
return this.chainModify([115, 100]);
}
},
},

silverpowder: {
name: "Silver Powder",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Bug') {
return this.chainModify([115, 100]);
}
},
},

sitrusberry: {
name: "Sitrus Berry",
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
},

snowball: {
name: "Snowball",
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
},

fairyscale: {
name: "Fairy Scale",
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
},

cellsynergysurge: {
name: "Cell Synergy Surge",
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
},

darkband: {
name: "Dark Band",
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
},

puck: {
name: "Puck",
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
},

softsand: {
name: "Soft Sand",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ground') {
return this.chainModify([115, 100]);
}
},
},

souldew: {
name: "Soul Dew",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (
move && (user.baseSpecies.num === 380 || user.baseSpecies.num === 381) &&
(move.type === 'Psychic' || move.type === 'Dragon')
) {
return this.chainModify([115, 100]);
}
},
itemUser: ["Latios", "Latias"],
isNonstandard: "Past",
},

spelltag: {
name: "Spell Tag",
fling: {
basePower: 30,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Ghost') {
return this.chainModify([115, 100]);
}
},
},

spelonberry: {
name: "Spelon Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Dark",
},
onEat: false,
isNonstandard: "Past",
},

starfberry: {
name: "Starf Berry",
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
},

stick: {
name: "Stick",
fling: {
basePower: 60,
},
onModifyCritRatio(critRatio, user) {
if (this.toID(user.baseSpecies.baseSpecies) === 'Unbeliequack') {
return critRatio + 2;
}
},
itemUser: ["Farfetch\u2019d"],
isNonstandard: "Past",
},

stickybarb: {
name: "Sticky Barb",
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
},

strawberrysweet: {
name: "Strawberry Sweet",
fling: {
basePower: 10,
},
isNonstandard: "Past",
},

superspicycurry: {
name: "Superspicy Curry",
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
},

tamatoberry: {
name: "Tamato Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Psychic",
},
onEat: false,
},

tangaberry: {
name: "Tanga Berry",
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
},

thickclub: {
name: "Thick Club",
fling: {
basePower: 90,
},
onModifyAtkPriority: 1,
onModifyAtk(atk, pokemon) {
if (pokemon.baseSpecies.baseSpecies === 'Cubone' || pokemon.baseSpecies.baseSpecies === 'Harrowack') {
return this.chainModify(2);
}
},
itemUser: ["Harrowack", "Marowak-Alola", "Marowak-Alola-Totem", "Cubone"],
isNonstandard: "Past",
},

throatspray: {
name: "Throat Spray",
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
},

toxicorb: {
name: "Toxic Orb",
fling: {
basePower: 30,
status: 'tox',
},
onResidualOrder: 28,
onResidualSubOrder: 3,
onResidual(pokemon) {
pokemon.trySetStatus('tox', pokemon);
},
},

utilityumbrella: {
name: "Utility Umbrella",
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
},

wacanberry: {
name: "Wacan Berry",
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
},

watmelberry: {
name: "Watmel Berry",
isBerry: true,
naturalGift: {
basePower: 100,
type: "Fire",
},
onEat: false,
isNonstandard: "Past",
},

waveincense: {
name: "Wave Incense",
fling: {
basePower: 10,
},
onBasePowerPriority: 15,
onBasePower(basePower, user, target, move) {
if (move.type === 'Water') {
return this.chainModify([4915, 4096]);
}
},
isNonstandard: "Past",
},

weaknesspolicy: {
name: "Weakness Policy",
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
},

wepearberry: {
name: "Wepear Berry",
isBerry: true,
naturalGift: {
basePower: 90,
type: "Electric",
},
onEat: false,
isNonstandard: "Past",
},

whippeddream: {
name: "Whipped Dream",
fling: {
basePower: 80,
},
isNonstandard: "Past",
},

whiteherb: {
name: "White Herb",
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
},

widelens: {
name: "Wide Lens",
fling: {
basePower: 10,
},
onSourceModifyAccuracyPriority: -2,
onSourceModifyAccuracy(accuracy) {
if (typeof accuracy === 'number') {
return this.chainModify([115, 100]);
}
},
},

wikiberry: {
name: "Wiki Berry",
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
},

yacheberry: {
name: "Yache Berry",
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
},

zoomlens: {
name: "Zoom Lens",
fling: {
basePower: 10,
},
onSourceModifyAccuracyPriority: -2,
onSourceModifyAccuracy(accuracy, target) {
if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
this.debug('Critical Zoom Lens boosting accuracy');
return this.chainModify([115, 100]);
}
},
onModifyCritRatio(critRatio, source, target) {
if (!this.queue.willMove(target)) {
this.debug('Critical Zoom Lens boosting critical hit ratio');
return critRatio + 1;
}
},
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
name: "Ice Skates",
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
name: "Scorching Sands Stone",
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
name: "Rainbow Reflector",
onDamagingHitOrder: 2,
onDamagingHit(damage, target, source, move) {
if (move.category === 'Special' && this.field.isWeather('raindance')) {
this.damage(source.baseMaxhp / 6, source, target);
}
},
},

lemonjelly: {
name: "Lemon Jelly",
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (this.field.isWeather('raindance') && move.flags['duck']) {
this.debug('Lemon Jelly boost');
return this.chainModify([115, 100]);
}
},
},

//

altarianite: {
name: "Altarianite",
},

abomasite: {
name: "Abomasite",
},

absolite: {
name: "Absolite",
},

ampharosite: {
name: "Ampharosite",
},

audinite: {
name: "Audinite",
},

banettite: {
name: "Banettite",
},

beedrillite: {
name: "Beedrillite",
},

blastoisinite: {
name: "Blastoisinite",
},

blazikenite: {
name: "Blazikenite",
},

cameruptite: {
name: "Cameruptite",
},

charizarditex: {
name: "Charizardite X",
},

charizarditey: {
name: "Charizardite Y",
},

diancite: {
name: "Diancite",
},

galladite: {
name: "Galladite",
},

garchompite: {
name: "Garchompite",
},

gardevoirite: {
name: "Gardevoirite",
},

gengarite: {
name: "Gengarite",
},

ghostiumz: {
name: "Ghostium Z",
},

glalitite: {
name: "Glalitite",
},

groundiumz: {
name: "Groundium Z",
},

gyaradosite: {
name: "Gyaradosite",
},

helixfossil: {
name: "Helix Fossil",
},

heracronite: {
name: "Heracronite",
},

houndoominite: {
name: "Houndoominite",
},

kangaskhanite: {
name: "Kangaskhanite",
},

latiasite: {
name: "Latiasite",
},

latiosite: {
name: "Latiosite",
},

laxincense: {
name: "Lax Incense",
},

leafstone: {
name: "Leaf Stone",
},

lopunnite: {
name: "Lopunnite",
},

loveball: {
name: "Love Ball",
},

lovesweet: {
name: "Love Sweet",
},

lucarionite: {
name: "Lucarionite",
},

manectite: {
name: "Manectite",
},

marshadiumz: {
name: "Marshadium Z",
},

masterball: {
name: "Master Ball",
},

mawilite: {
name: "Mawilite",
},

medichamite: {
name: "Medichamite",
},

metagrossite: {
name: "Metagrossite",
},

mewniumz: {
name: "Mewnium Z",
},

mewtwonitex: {
name: "Mewtwonite X",
},

mewtwonitey: {
name: "Mewtwonite Y",
},

pidgeotite: {
name: "Pidgeotite",
},

pikaniumz: {
name: "Pikanium Z",
},

pikashuniumz: {
name: "Pikashunium Z",
},

pinsirite: {
name: "Pinsirite",
},

sablenite: {
name: "Sablenite",
},

sachet: {
name: "Sachet",
},

safariball: {
name: "Safari Ball",
},

salamencite: {
name: "Salamencite",
},

sceptilite: {
name: "Sceptilite",
},

scizorite: {
name: "Scizorite",
},

sharpedonite: {
name: "Sharpedonite",
},

slowbronite: {
name: "Slowbronite",
},

smoothrock: {
name: "Smooth Rock",
},

snorliumz: {
name: "Snorlium Z",
},

starsweet: {
name: "Star Sweet",
},

steelixite: {
name: "Steelixite",
},

swampertite: {
name: "Swampertite",
},

sweetapple: {
name: "Sweet Apple",
},

tyranitarite: {
name: "Tyranitarite",
},

ultraball: {
name: "Ultra Ball",
},

ultranecroziumz: {
name: "Ultranecrozium Z",
},

upgrade: {
name: "Up-Grade",
},

venusaurite: {
name: "Venusaurite",
},

crucibellite: {
name: "Crucibellite",
},

adamantcrystal: {
name: "Adamant Crystal",
},

armorfossil: {
name: "Armor Fossil",
},

auspiciousarmor: {
name: "Auspicious Armor",
},

beastball: {
name: "Beast Ball",
},

bignugget: {
name: "Big Nugget",
},

bindingband: {
name: "Binding Band",
},

brightpowder: {
name: "Bright Powder",
},

buggem: {
name: "Bug Gem",
},

bugmemory: {
name: "Bug Memory",
},

buginiumz: {
name: "Buginium Z",
},

burndrive: {
name: "Burn Drive",
},

cherishball: {
name: "Cherish Ball",
},

chilldrive: {
name: "Chill Drive",
},

chippedpot: {
name: "Chipped Pot",
},

clawfossil: {
name: "Claw Fossil",
},

cloversweet: {
name: "Clover Sweet",
},

coverfossil: {
name: "Cover Fossil",
},

crackedpot: {
name: "Cracked Pot",
},

damprock: {
name: "Damp Rock",
},

darkgem: {
name: "Dark Gem",
},

darkmemory: {
name: "Dark Memory",
},

darkiniumz: {
name: "Darkinium Z",
},

dawnstone: {
name: "Dawn Stone",
},

decidiumz: {
name: "Decidium Z",
},

deepseascale: {
name: "Deep Sea Scale",
},

deepseatooth: {
name: "Deep Sea Tooth",
},

diveball: {
name: "Dive Ball",
},

domefossil: {
name: "Dome Fossil",
},

dousedrive: {
name: "Douse Drive",
},

dracoplate: {
name: "Draco Plate",
},

dragongem: {
name: "Dragon Gem",
},

dragonmemory: {
name: "Dragon Memory",
},

dragonscale: {
},

dragoniumz: {
name: "Dragonium Z",
},

dreadplate: {
name: "Dread Plate",
},

dreamball: {
name: "Dream Ball",
},

dubiousdisc: {
name: "Dubious Disc",
},

duskball: {
name: "Dusk Ball",
},

duskstone: {
name: "Dusk Stone",
},

earthplate: {
name: "Earth Plate",
},

eeviumz: {
name: "Eevium Z",
},

electirizer: {
name: "Electirizer",
},

electricgem: {
name: "Electric Gem",
},

electricmemory: {
name: "Electric Memory",
},

electriumz: {
name: "Electrium Z",
},

fairiumz: {
name: "Fairium Z",
},

fairygem: {
name: "Fairy Gem",
},

fairymemory: {
name: "Fairy Memory",
},

fastball: {
name: "Fast Ball",
},

fightinggem: {
name: "Fighting Gem",
},

fightingmemory: {
name: "Fighting Memory",
},

fightiniumz: {
name: "Fightinium Z",
},

firegem: {
name: "Fire Gem",
},

firememory: {
name: "Fire Memory",
},

firestone: {
name: "Fire Stone",
},

firiumz: {
name: "Firium Z",
},

fistplate: {
name: "Fist Plate",
},

flameplate: {
name: "Flame Plate",
},

flowersweet: {
name: "Flower Sweet",
},

flyinggem: {
name: "Flying Gem",
},

flyingmemory: {
name: "Flying Memory",
},

flyiniumz: {
name: "Flyinium Z",
},

fossilizedbird: {
name: "Fossilized Bird",
},

fossilizeddino: {
name: "Fossilized Dino",
},

fossilizeddrake: {
name: "Fossilized Drake",
},

fossilizedfish: {
name: "Fossilized Fish",
},

friendball: {
name: "Friend Ball",
},

fullincense: {
name: "Full Incense",
},

galaricacuff: {
name: "Galarica Cuff",
},

galaricawreath: {
name: "Galarica Wreath",
},

ghostgem: {
name: "Ghost Gem",

ghostmemory: {
name: "Ghost Memory",
},


goldbottlecap: {
name: "Gold Bottle Cap",
},

grassgem: {
name: "Grass Gem",
},

grassmemory: {
name: "Grass Memory",
},

grassiumz: {
name: "Grassium Z",
},

greatball: {
name: "Great Ball",
},

groundgem: {
name: "Ground Gem",
},

groundmemory: {
name: "Ground Memory",
},

healball: {
name: "Heal Ball",
},

heatrock: {
name: "Heat Rock",
},

heavyball: {
name: "Heavy Ball",
},

heavydutyboots: {
name: "Heavy-Duty Boots",
},

icegem: {
name: "Ice Gem",
},

icememory: {
name: "Ice Memory",
},

icestone: {
name: "Ice Stone",
},

icicleplate: {
name: "Icicle Plate",
},

iciumz: {
name: "Icium Z",
},

icyrock: {
name: "Icy Rock",
},

inciniumz: {
name: "Incinium Z",
},

insectplate: {
name: "Insect Plate",
},

ironplate: {
name: "Iron Plate",
},

jawfossil: {
name: "Jaw Fossil",
},

kommoniumz: {
name: "Kommonium Z",
},

levelball: {
name: "Level Ball",
},

loadeddice: {
name: "Loaded Dice",
},

lunaliumz: {
name: "Lunalium Z",
},

lureball: {
name: "Lure Ball",
},

luxuryball: {
name: "Luxury Ball",
},

lycaniumz: {
name: "Lycanium Z",
},

machobrace: {
name: "Macho Brace",
},

magmarizer: {
name: "Magmarizer",
},

mail: {
name: "Mail",
},

maliciousarmor: {
name: "Malicious Armor",
},

meadowplate: {
name: "Meadow Plate",
},

pinapberry: {
name: "Pinap Berry",
},

pixieplate: {
name: "Pixie Plate",
},

plumefossil: {
name: "Plume Fossil",
},

mimikiumz: {
name: "Mimikium Z",
},

mindplate: {
name: "Mind Plate",
},

moonball: {
name: "Moon Ball",
},

moonstone: {
name: "Moon Stone",
},

nestball: {
name: "Nest Ball",
},

netball: {
name: "Net Ball",
},

normalgem: {
name: "Normal Gem",
},

normaliumz: {
name: "Normalium Z",
},

oldamber: {
name: "Old Amber",
},

ovalstone: {
name: "Oval Stone",
},

parkball: {
name: "Park Ball",
},

poisongem: {
name: "Poison Gem",
},

poisonmemory: {
name: "Poison Memory",
},

poisoniumz: {
name: "Poisonium Z",
},

pokeball: {
name: "Poke Ball",
},

poweranklet: {
name: "Power Anklet",
},

powerband: {
name: "Power Band",
},

powerbracer: {
name: "Power Bracer",
},

powerweight: {
name: "Power Weight",
},

premierball: {
name: "Premier Ball",
},

primariumz: {
name: "Primarium Z",
},

prismscale: {
name: "Prism Scale",
},

protector: {
name: "Protector",
},

psychicgem: {
name: "Psychic Gem",
},

psychicmemory: {
name: "Psychic Memory",
},

psychiumz: {
name: "Psychium Z",
},

quickball: {
name: "Quick Ball",
},

rarebone: {
name: "Rare Bone",
},

reapercloth: {
name: "Reaper Cloth",
},

repeatball: {
name: "Repeat Ball",
},

ribbonsweet: {
name: "Ribbon Sweet",
},

ringtarget: {
name: "Ring Target",
},

rockgem: {
name: "Rock Gem",
},

rockmemory: {
name: "Rock Memory",
},

rockiumz: {
name: "Rockium Z",
},

rootfossil: {
name: "Root Fossil",
},

rustedshield: {
name: "Rusted Shield",
},

rustedsword: {
name: "Rusted Sword",
},

sailfossil: {
name: "Sail Fossil",
},

shinystone: {
name: "Shiny Stone",
},

shockdrive: {
name: "Shock Drive",
},

skullfossil: {
name: "Skull Fossil",
},

skyplate: {
name: "Sky Plate",
},

solganiumz: {
name: "Solganium Z",
},

splashplate: {
name: "Splash Plate",
},

spookyplate: {
name: "Spooky Plate",
},

sportball: {
name: "Sport Ball",
},

steelgem: {
name: "Steel Gem",
},

steelmemory: {
name: "Steel Memory",
},

steeliumz: {
name: "Steelium Z",
},

stoneplate: {
name: "Stone Plate",
},

strangeball: {
name: "Strange Ball",
},

sunstone: {
name: "Sun Stone",
},

tapuniumz: {
name: "Tapunium Z",
},

tartapple: {
name: "Tart Apple",
},

terrainextender: {
name: "Terrain Extender",
},

thunderstone: {
name: "Thunder Stone",
},

timerball: {
name: "Timer Ball",
},

toxicplate: {
name: "Toxic Plate",
},

watergem: {
name: "Water Gem",
},

watermemory: {
name: "Water Memory",
},

waterstone: {
name: "Water Stone",
},

wateriumz: {
name: "Waterium Z",
},

zapplate: {
name: "Zap Plate",
},

berserkgene: {
name: "Berserk Gene",
},

berry: {
name: "Berry",
},

burntberry: {
name: "Burnt Berry",
},

goldberry: {
name: "Gold Berry",
},

iceberry: {
name: "Ice Berry",
},

mintberry: {
name: "Mint Berry",
},

miracleberry: {
name: "Miracle Berry",
},

mysteryberry: {
name: "Mystery Berry",
},

pinkbow: {
name: "Pink Bow",
},

polkadotbow: {
name: "Polkadot Bow",
},

przcureberry: {
name: "PRZ Cure Berry",
},

psncureberry: {
name: "PSN Cure Berry",
},

vilevial: {
name: "Vile Vial",
},

};