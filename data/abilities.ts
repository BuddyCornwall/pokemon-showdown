export const Abilities: {[abilityid: string]: AbilityData} = {

noability: {
isNonstandard: "Past",
name: "No Ability",
},

adaptability: {
onModifyMove(move) {
move.stab = 2;
},
name: "Adaptability",
},

aerolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Flying';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Aerolate",
},

aqualate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Water';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Aqualate",
},

dracolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Dragon';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Dracolate",
},

dwaynelate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Rock';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Dwaynelate",
},

electrolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Electric';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Electrolate",
},

ferrolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Steel';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Ferrolate",
},

gladilate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Fighting';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Gladilate",
},

insectilate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Bug';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Insectilate",
},

necrolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Ghost';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Necrolate",
},

phytolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Grass';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Phytolate",
},

pixilate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Fairy';
move.typeChangerBoosted = this.effect;
}
},
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Pixilate",
},

psylate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Psychic';
move.typeChangerBoosted = this.effect;
}
},
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Psylate",
},

pyrolate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Fire';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Pyrolate",
},

refrigerate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Ice';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Refrigerate",
},

terralate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Ground';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Terralate",
},

umbralate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Dark';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Umbralate",
},

venelate: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Poison';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Venelate",
},

aftermath: {
name: "Aftermath",
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (!target.hp && this.checkMoveMakesContact(move, source, target, true)) {
this.damage(source.baseMaxhp / 3, source, target);
}
},
},

airlock: {
onSwitchIn(pokemon) {
this.effectState.switchingIn = true;
},
onStart(pokemon) {
if (this.effectState.switchingIn) {
this.add('-ability', pokemon, 'Air Lock');
this.effectState.switchingIn = false;
}
this.eachEvent('WeatherChange', this.effect);
},
onEnd(pokemon) {
this.eachEvent('WeatherChange', this.effect);
},
suppressWeather: true,
name: "Air Lock",
},

analytic: {
onBasePowerPriority: 21,
onBasePower(basePower, pokemon) {
let boosted = true;
for (const target of this.getAllActive()) {
if (target === pokemon) continue;
if (this.queue.willMove(target)) {
boosted = false;
break;
}
}
if (boosted) {
this.debug('Analytic boost');
return this.chainModify([133,100]);
}
},
name: "Analytic",
},

angerpoint: {
onHit(target, source, move) {
if (!target.hp) return;
if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
this.boost({atk: 12, spa: 12}, target, target);
}
},
name: "Anger Point",
},

borsalino : {
onHit(target, source, move) {
if (!target.hp) return;
if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
this.boost({spe: 12}, target, target);
}
},
name: "borsalino ",
},

angershell: {
onDamage(damage, target, source, effect) {
if (
effect.effectType === "Move" &&
!effect.multihit &&
(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
) {
this.effectState.checkedAngerShell = false;
} else {
this.effectState.checkedAngerShell = true;
}
},
onAfterMoveSecondary(target, source, move) {
this.effectState.checkedAngerShell = true;
if (!source || source === target || !target.hp || !move.totalDamage) return;
const lastAttackedBy = target.getLastAttackedBy();
if (!lastAttackedBy) return;
const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
this.boost({atk: 1.5, spa: 1.5, spe: 1.5, def: -1, spd: -1}, target, target);
}
},
name: "Anger Shell",
},

anticipation: {
onStart(pokemon) {
for (const target of pokemon.foes()) {
for (const moveSlot of target.moveSlots) {
const move = this.dex.moves.get(moveSlot.move);
if (move.category === 'Status') continue;
const moveType = move.id === 'hiddenpower' ? target.hpType : move.type;
if (
this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 ||
move.ohko
) {
this.add('-ability', pokemon, 'Anticipation');
return;
}
}
}
},
name: "Anticipation",
},

arenatrap: {
onFoeTrapPokemon(pokemon) {
if (!pokemon.isAdjacent(this.effectState.target)) return;
if (pokemon.isGrounded()) {
pokemon.tryTrap(true);
}
},
onFoeMaybeTrapPokemon(pokemon, source) {
if (!source) source = this.effectState.target;
if (!source || !pokemon.isAdjacent(source)) return;
if (pokemon.isGrounded(!pokemon.knownType)) {
pokemon.maybeTrapped = true;
}
},
name: "Arena Trap",
},

armortail: {
onFoeTryMove(target, source, move) {
const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
return;
}
const armorTailHolder = this.effectState.target;
if ((source.isAlly(armorTailHolder) || move.target === 'all') && move.priority > 0.1) {
this.attrLastMove('[still]');
this.add('cant', armorTailHolder, 'ability: Armor Tail', move, '[of] ' + target);
return false;
}
},
isBreakable: true,
name: "Armor Tail",
},

aromaveil: {
onAllyTryAddVolatile(status, target, source, effect) {
if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
if (effect.effectType === 'Move') {
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Aroma Veil', '[of] ' + effectHolder);
}
return null;
}
},
isBreakable: true,
name: "Aroma Veil",
},

asoneglastrier: {
onPreStart(pokemon) {
this.add('-ability', pokemon, 'As One');
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onEnd() {
this.effectState.unnerved = false;
},
onFoeTryEatItem() {
return !this.effectState.unnerved;
},
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
this.boost({atk: length}, source, source, this.dex.abilities.get('chillingneigh'));
}
},
isPermanent: true,
name: "As One (Glastrier)",
},

asonespectrier: {
onPreStart(pokemon) {
this.add('-ability', pokemon, 'As One');
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onEnd() {
this.effectState.unnerved = false;
},
onFoeTryEatItem() {
return !this.effectState.unnerved;
},
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
this.boost({spa: length}, source, source, this.dex.abilities.get('grimneigh'));
}
},
isPermanent: true,
name: "As One (Spectrier)",
},

aurabreak: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Aura Break');
},
onAnyTryPrimaryHit(target, source, move) {
if (target === source || move.category === 'Status') return;
move.hasAuraBreak = true;
},
isBreakable: true,
name: "Aura Break",
},

baddreams: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (!pokemon.hp) return;
for (const target of pokemon.foes()) {
if (target.status === 'slp' || target.hasAbility('comatose')) {
this.damage(target.baseMaxhp / 6, target, pokemon);
}
}
},
name: "Bad Dreams",
},

freezeinhell: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (!pokemon.hp) return;
for (const target of pokemon.foes()) {
if (target.status === 'frz' || target.hasAbility('comatose')) {
this.damage(target.baseMaxhp / 6, target, pokemon);
}
}
},
name: "Freeze in Hell",
},

shockingconsequences: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (!pokemon.hp) return;
for (const target of pokemon.foes()) {
if (target.status === 'frz' || target.hasAbility('comatose')) {
this.damage(target.baseMaxhp / 6, target, pokemon);
}
}
},
name: "Shocking Consequences",
},

ballfetch: {
name: "Ball Fetch",
},

synergysurge: {
onAllyBasePowerPriority: 22,
onAllyBasePower(basePower, attacker, defender, move) {
const ally = this.effectState.target;
const bestStat = ally.getBestStat(false, true);
if (attacker !== ally && move.category === bestStat) {
this.debug('Synergy Surge boost');
return this.chainModify(1.5);
}
},
name: "Synergy Surge",
},

inspireaura: {
onAllyBasePowerPriority: 22,
onAllyBasePower(basePower, attacker, defender, move) {
if (attacker !== this.effectState.target && move.category === 'Physical') {
this.debug('Inspire Aura boost');
return this.chainModify([133,100]);
}
},
name: "Inspire Aura",
},

battlearmor: {
onCriticalHit: false,
isBreakable: true,
name: "Battle Armor",
},

battlebond: {
onSourceAfterFaint(length, target, source, effect) {
if (effect?.effectType !== 'Move') return;
if (source.abilityState.battleBondTriggered) return;
if (source.species.id === 'greninjabond' && source.hp && !source.transformed && source.side.foePokemonLeft()) {
this.boost({atk: 1.5, spa: 1.5, spe: 1.5}, source, source, this.effect);
this.add('-activate', source, 'ability: Battle Bond');
source.abilityState.battleBondTriggered = true;
}
},
isPermanent: true,
name: "Battle Bond",
},

beadsofruin: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Beads of Ruin');
},
onAnyModifySpD(spd, target, source, move) {
const abilityHolder = this.effectState.target;
if (target.hasAbility('Beads of Ruin')) return;
if (!move.ruinedSpD?.hasAbility('Beads of Ruin')) move.ruinedSpD = abilityHolder;
if (move.ruinedSpD !== abilityHolder) return;
this.debug('Beads of Ruin SpD drop');
return this.chainModify(0.66);
},
name: "Beads of Ruin",
},

beastboost: {
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
const bestStat = source.getBestStat(true, true);
this.boost({[bestStat]: length}, source);
}
},
name: "Beast Boost",
},

berserk: {
onDamage(damage, target, source, effect) {
if (
effect.effectType === "Move" &&
!effect.multihit &&
(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
) {
this.effectState.checkedBerserk = false;
} else {
this.effectState.checkedBerserk = true;
}
},
onAfterMoveSecondary(target, source, move) {
this.effectState.checkedBerserk = true;
if (!source || source === target || !target.hp || !move.totalDamage) return;
const lastAttackedBy = target.getLastAttackedBy();
if (!lastAttackedBy) return;
const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
this.boost({spa: 1.5}, target, target);
}
},
name: "Berserk",
},

kentaromiura: {
onDamage(damage, target, source, effect) {
if (
effect.effectType === "Move" &&
!effect.multihit &&
(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
) {
this.effectState.checkedBerserk = false;
} else {
this.effectState.checkedBerserk = true;
}
},
onAfterMoveSecondary(target, source, move) {
this.effectState.checkedkentaromiura = true;
if (!source || source === target || !target.hp || !move.totalDamage) return;
const lastAttackedBy = target.getLastAttackedBy();
if (!lastAttackedBy) return;
const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
const bestStat = target.getBestStat();
if (bestStat === 'atk' || bestStat === 'spa') {
this.boost({ [bestStat]: 1.5 }, target, target);
}
}
},
name: "Kentaromiura",
},

bigpecks: {
onTryBoost(boost, target, source, effect) {
if (source && target === source) return;
if (boost.def && boost.def < 0) {
delete boost.def;
if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
}
}
},
isBreakable: true,
name: "Big Pecks",
},

blaze: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Blaze boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Blaze boost');
return this.chainModify(1.5);
}
},
name: "Blaze",
},

bulletproof: {
onTryHit(pokemon, target, move) {
if (move.flags['bullet']) {
this.add('-immune', pokemon, '[from] ability: Bulletproof');
return null;
}
},
isBreakable: true,
name: "Bulletproof",
},

deadlands: {
onBasePowerPriority: 7,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['bullet']) {
this.debug('Deadlands boost');
return this.chainModify([133,100]);
}
},
isBreakable: true,
name: "Deadlands",
},

cheekpouch: {
onEatItem(item, pokemon) {
this.heal(pokemon.baseMaxhp / 3);
},
name: "Cheek Pouch",
},

chillingneigh: {
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
this.boost({atk: length}, source);
}
},
name: "Chilling Neigh",
},

solrush: {
onModifySpe(spe, pokemon) {
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
return this.chainModify(2);
}
},
name: "Sol Rush",
},

clearbody: {
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
this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
}
},
isBreakable: true,
name: "Clear Body",
},

cloudnine: {
onSwitchIn(pokemon) {
this.effectState.switchingIn = true;
},
onStart(pokemon) {
if (this.effectState.switchingIn) {
this.add('-ability', pokemon, 'Cloud Nine');
this.effectState.switchingIn = false;
}
this.eachEvent('WeatherChange', this.effect);
},
onEnd(pokemon) {
this.eachEvent('WeatherChange', this.effect);
},
suppressWeather: true,
name: "Cloud Nine",
},

colorchange: {
onAfterMoveSecondary(target, source, move) {
if (!target.hp) return;
const type = move.type;
if (
target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
type !== '???' && !target.hasType(type)
) {
if (!target.setType(type)) return false;
this.add('-start', target, 'typechange', type, '[from] ability: Color Change');

if (target.side.active.length === 2 && target.position === 1) {
const action = this.queue.willMove(target);
if (action && action.move.id === 'curse') {
action.targetLoc = -1;
}
}
}
},
name: "Color Change",
},

comatose: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Comatose');
},
onSetStatus(status, target, source, effect) {
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Comatose');
}
return false;
},
isPermanent: true,
name: "Comatose",
},

commander: {
onUpdate(pokemon) {
if (this.gameType !== 'doubles') return;
const ally = pokemon.allies()[0];
if (!ally || pokemon.transformed ||
pokemon.baseSpecies.baseSpecies !== 'Tatsugiri' || ally.baseSpecies.baseSpecies !== 'Dondozo') {
if (pokemon.getVolatile('commanding')) pokemon.removeVolatile('commanding');
return;
}
if (!pokemon.getVolatile('commanding')) {
if (ally.getVolatile('commanded')) return;
this.queue.cancelAction(pokemon);
this.add('-activate', pokemon, 'ability: Commander', '[of] ' + ally);
pokemon.addVolatile('commanding');
ally.addVolatile('commanded', pokemon);
} else {
if (!ally.fainted) return;
pokemon.removeVolatile('commanding');
}
},
isPermanent: true,
name: "Commander",
},

competitive: {
onAfterEachBoost(boost, target, source, effect) {
if (!source || target.isAlly(source)) {
if (effect.id === 'stickyweb') {
this.hint("Court Change Sticky Web counts as lowering your own Speed, and Competitive only affects stats lowered by foes.", true, source.side);
}
return;
}
let statsLowered = false;
for (const i in boost) {
if (boost[i]! < 0) {
statsLowered = true;
break;
}
}
if (statsLowered) {
const atk = target.getStat('atk', false, true);
const spa = target.getStat('spa', false, true);
const bestStat = atk >= spa ? 'atk' : 'spa';
this.boost({ [bestStat]: 2 }, target, target, null, false, true);
}
},
name: "Competitive",
},

compoundeyes: {
onSourceModifyAccuracyPriority: -1,
onSourceModifyAccuracy(accuracy) {
if (typeof accuracy !== 'number') return;
this.debug('compoundeyes - enhancing accuracy');
return this.chainModify([133,100]);
},
name: "Compound Eyes",
},

contrary: {
onChangeBoost(boost, target, source, effect) {
if (effect && effect.id === 'zpower') return;
let i: BoostID;
for (i in boost) {
boost[i]! *= -1;
}
},
isBreakable: true,
name: "Contrary",
},

corrosion: {
name: "Corrosion",
},

costar: {
onStart(pokemon) {
const ally = pokemon.allies()[0];
if (!ally) return;
let i: BoostID;
for (i in ally.boosts) {
pokemon.boosts[i] = ally.boosts[i];
}
const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
for (const volatile of volatilesToCopy) {
if (ally.volatiles[volatile]) {
pokemon.addVolatile(volatile);
if (volatile === 'gmaxchistrike') pokemon.volatiles[volatile].layers = ally.volatiles[volatile].layers;
} else {
pokemon.removeVolatile(volatile);
}
}
this.add('-copyboost', pokemon, ally, '[from] ability: Costar');
},
name: "Costar",
},

cottondown: {
onDamagingHit(damage, target, source, move) {
let activated = false;
for (const pokemon of this.getAllActive()) {
if (pokemon === target || pokemon.fainted) continue;
if (!activated) {
this.add('-ability', target, 'Cotton Down');
activated = true;
}
this.boost({spe: -1}, pokemon, target, null, true);
}
},
name: "Cotton Down",
},

cudchew: {
onEatItem(item, pokemon) {
if (item.isBerry && pokemon.addVolatile('cudchew')) {
pokemon.volatiles['cudchew'].berry = item;
}
},
onEnd(pokemon) {
delete pokemon.volatiles['cudchew'];
},
condition: {
noCopy: true,
duration: 3,
onRestart() {
this.effectState.duration = 3;
},
onResidualOrder: 28,
onResidualSubOrder: 2,
onEnd(pokemon) {
if (pokemon.hp) {
const item = this.effectState.berry;
this.add('-activate', pokemon, 'ability: Cud Chew');
this.add('-enditem', pokemon, item.name, '[eat]');
if (this.singleEvent('Eat', item, null, pokemon, null, null)) {
this.runEvent('EatItem', pokemon, null, null, item);
}
if (item.onEat) pokemon.ateBerry = true;
}
},
},
name: "Cud Chew",
},

curiousmedicine: {
onStart(pokemon) {
for (const ally of pokemon.adjacentAllies()) {
ally.clearBoosts();
this.add('-clearboost', ally, '[from] ability: Curious Medicine', '[of] ' + pokemon);
}
},
name: "Curious Medicine",
},

cursedbody: {
onDamagingHit(damage, target, source, move) {
if (source.volatiles['disable']) return;
if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
if (this.randomChance(75, 100)) {
source.addVolatile('disable', this.effectState.target);
}
}
},
name: "Cursed Body",
},

cutecharm: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
if (this.randomChance(50, 100)) {
source.addVolatile('attract', this.effectState.target);
}
}
},
name: "Cute Charm",
},

damp: {
onAnyTryMove(target, source, effect) {
if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
this.attrLastMove('[still]');
this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
return false;
}
},
onAnyDamage(damage, target, source, effect) {
if (effect && effect.name === 'Aftermath') {
return false;
}
},
isBreakable: true,
name: "Damp",
},

dancer: {
name: "Dancer",
},

darkaura: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Dark Aura');
},
onAnyBasePowerPriority: 20,
onAnyBasePower(basePower, source, target, move) {
if (target === source || move.category === 'Status' || move.type !== 'Dark') return;
if (!move.auraBooster?.hasAbility('Dark Aura')) move.auraBooster = this.effectState.target;
if (move.auraBooster !== this.effectState.target) return;
return this.chainModify([133,100]);
},
name: "Dark Aura",
},

dauntlessshield: {
onStart(pokemon) {
if (pokemon.shieldBoost) return;
pokemon.shieldBoost = true;
this.boost({def: 1.5, spd: 1.5}, pokemon);
},
name: "Dauntless Shield",
},

dazzling: {
onFoeTryMove(target, source, move) {
const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
return;
}
const dazzlingHolder = this.effectState.target;
if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
this.attrLastMove('[still]');
this.add('cant', dazzlingHolder, 'ability: Dazzling', move, '[of] ' + target);
return false;
}
},
isBreakable: true,
name: "Dazzling",
},

defeatist: {
onModifyAtkPriority: 5,
onModifyAtk(atk, pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
return this.chainModify(0.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
return this.chainModify(0.5);
}
},
name: "Defeatist",
},

defiant: {
onAfterEachBoost(boost, target, source, effect) {
if (!source || target.isAlly(source)) {
if (effect.id === 'stickyweb') {
this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
}
return;
}
let statsLowered = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! < 0) {
statsLowered = true;
}
}
if (statsLowered) {
this.boost({atk: 2}, target, target, null, false, true);
}
},
name: "Defiant",
},

deltastream: {
onStart(source) {
this.field.setWeather('deltastream');
},
onAnySetWeather(target, source, weather) {
const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
if (this.field.getWeather().id === 'deltastream' && !strongWeathers.includes(weather.id)) return false;
},
onEnd(pokemon) {
if (this.field.weatherState.source !== pokemon) return;
for (const target of this.getAllActive()) {
if (target === pokemon) continue;
if (target.hasAbility('deltastream')) {
this.field.weatherState.source = target;
return;
}
}
this.field.clearWeather();
},
name: "Delta Stream",
},

desolateland: {
onStart(source) {
this.field.setWeather('desolateland');
},
onAnySetWeather(target, source, weather) {
const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
},
onEnd(pokemon) {
if (this.field.weatherState.source !== pokemon) return;
for (const target of this.getAllActive()) {
if (target === pokemon) continue;
if (target.hasAbility('desolateland')) {
this.field.weatherState.source = target;
return;
}
}
this.field.clearWeather();
},
name: "Desolate Land",
},

disguise: {
onDamagePriority: 1.5,
onDamage(damage, target, source, effect) {
if (
effect && effect.effectType === 'Move' &&
['mimikyu', 'mimikyutotem'].includes(target.species.id) && !target.transformed
) {
this.add('-activate', target, 'ability: Disguise');
this.effectState.busted = true;
return 0;
}
},
onCriticalHit(target, source, move) {
if (!target) return;
if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
return;
}
const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;

if (!target.runImmunity(move.type)) return;
return false;
},
onEffectiveness(typeMod, target, type, move) {
if (!target || move.category === 'Status') return;
if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
return;
}

const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;

if (!target.runImmunity(move.type)) return;
return 0;
},
onUpdate(pokemon) {
if (['mimikyu', 'mimikyutotem'].includes(pokemon.species.id) && this.effectState.busted) {
const speciesid = pokemon.species.id === 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
pokemon.formeChange(speciesid, this.effect, true);
this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
}
},
isBreakable: true,
isPermanent: true,
name: "Disguise",
},

download: {
onStart(pokemon) {
let totaldef = 0;
let totalspd = 0;
for (const target of pokemon.foes()) {
totaldef += target.getStat('def', false, true);
totalspd += target.getStat('spd', false, true);
}
if (totaldef && totaldef >= totalspd) {
this.boost({spa: 1.5});
} else if (totalspd) {
this.boost({atk: 1.5});
}
},
name: "Download",
},

dragonsmaw: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Dragon') {
this.debug('Dragon\'s Maw boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Dragon') {
this.debug('Dragon\'s Maw boost');
return this.chainModify(1.5);
}
},
name: "Dragon's Maw",
},

quackdrive: {
onStart(source) {
for (const action of this.queue) {
if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'kyogre') return;
if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
}
this.field.setWeather('raindance');
},
name: "Quackdrive",
},

drought: {
onStart(source) {
for (const action of this.queue) {
if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'groudon') return;
if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
}
this.field.setWeather('sunnyday');
},
name: "Drought",
},

dryskin: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Water') {
if (!this.heal(target.baseMaxhp / 4)) {
this.add('-immune', target, '[from] ability: Dry Skin');
}
return null;
}
},
onSourceBasePowerPriority: 1.57,
onSourceBasePower(basePower, attacker, defender, move) {
if (move.type === 'Fire') {
return this.chainModify(1.25);
}
},
onWeather(target, source, effect) {
if (target.hasItem('utilityumbrella')) return;
if (effect.id === 'raindance' || effect.id === 'primordialsea') {
this.heal(target.baseMaxhp / 8);
} else if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
this.damage(target.baseMaxhp / 8, target, target);
}
},
isBreakable: true,
name: "Dry Skin",
},

duneblessed: {
onWeather(target, source, effect) {
if (effect.id === 'sandstorm') {
this.heal(target.baseMaxhp / 9);
}
},
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
name: "Duneblessed",
},

earlybird: {
name: "Early Bird",
},

eartheater: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Ground') {
if (!this.heal(target.baseMaxhp / 3)) {
this.add('-immune', target, '[from] ability: Fire Eater');
}
return null;
}
},
isBreakable: true,
name: "Earth Eater",
},

fireeater: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Fire') {
if (!this.heal(target.baseMaxhp / 3)) {
this.add('-immune', target, '[from] ability: Fire Eater');
}
return null;
}
},
isBreakable: true,
name: "Fire Eater",
},

effectspore: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target) && !source.status && source.runStatusImmunity('powder')) {
const r = this.random(100);
if (r < 25) {
source.setStatus('slp', target);
} else if (r < 50) {
source.setStatus('par', target);
} else if (r < 75) {
source.setStatus('tox', target);
}
}
},
name: "Effect Spore",
},

electricsurge: {
onStart(source) {
this.field.setTerrain('electricterrain');
},
onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Electric Terrain! Electric moves are now more powerful! Pokémon can no longer fall asleep!');
},
name: "Electric Surge",
},

electromorphosis: {
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
target.addVolatile('charge');
},
name: "Electromorphosis",
},

emergencyexit: {
onEmergencyExit(target) {
if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
for (const side of this.sides) {
for (const active of side.active) {
active.switchFlag = false;
}
}
target.switchFlag = true;
this.add('-activate', target, 'ability: Emergency Exit');
},
name: "Emergency Exit",
},

fairyaura: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Fairy Aura');
},
onAnyBasePowerPriority: 20,
onAnyBasePower(basePower, source, target, move) {
if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
if (!move.auraBooster?.hasAbility('Fairy Aura')) move.auraBooster = this.effectState.target;
if (move.auraBooster !== this.effectState.target) return;
return this.chainModify([133,100]);
},
name: "Fairy Aura",
},

filter: {
onSourceModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).typeMod > 0) {
this.debug('Filter neutralize');
return this.chainModify(0.75);
}
},
isBreakable: true,
name: "Filter",
},

flamebody: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
if (this.randomChance(50, 10)) {
source.trySetStatus('brn', target);
}
}
},
name: "Flame Body",
},

flareboost: {
onPreStart(pokemon) {
this.add('-message', `${pokemon.name} is all fired up!`);
},
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (attacker.status === 'brn') {
const bestStat = attacker.getBestStat(false, true);
if ((move.category === 'Special' && bestStat === 'spa') || (move.category === 'Physical' && bestStat === 'atk')) {
this.chainModify(1.5);
}
}
},
name: "Flare Boost",
},

flashfire: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Fire') {
move.accuracy = true;
if (!target.addVolatile('flashfire')) {
this.add('-immune', target, '[from] ability: Flash Fire');
}
return null;
}
},
onEnd(pokemon) {
pokemon.removeVolatile('flashfire');
},
condition: {
noCopy: true,
onStart(target) {
this.add('-start', target, 'ability: Flash Fire');
},
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
this.debug('Flash Fire boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
this.debug('Flash Fire boost');
return this.chainModify(1.5);
}
},
onEnd(target) {
this.add('-end', target, 'ability: Flash Fire', '[silent]');
},
},
isBreakable: true,
name: "Flash Fire",
},

flowergift: {
onStart(pokemon) {
this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
},
onWeatherChange(pokemon) {
if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
if (!pokemon.hp) return;
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
if (pokemon.species.id !== 'cherrimsunshine') {
pokemon.formeChange('Cherrim-Sunshine', this.effect, false, '[msg]');
}
} else {
if (pokemon.species.id === 'cherrimsunshine') {
pokemon.formeChange('Cherrim', this.effect, false, '[msg]');
}
}
},
onAllyModifyAtkPriority: 3,
onAllyModifyAtk(atk, pokemon) {
if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
return this.chainModify(1.5);
}
},
onAllyModifySpAPriority: 4,
onAllyModifySpA(spa, pokemon) {
if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
return this.chainModify(1.5);
}
},
isBreakable: true,
name: "Flower Gift",
},

flowerveil: {
onAllyTryBoost(boost, target, source, effect) {
if ((source && target === source) || !target.hasType('Grass')) return;
let showMsg = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! < 0) {
delete boost[i];
showMsg = true;
}
}
if (showMsg && !(effect as ActiveMove).secondaries) {
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
}
},
onAllySetStatus(status, target, source, effect) {
if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
this.debug('interrupting setStatus with Flower Veil');
if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
}
return null;
}
},
onAllyTryAddVolatile(status, target) {
if (target.hasType('Grass') && status.id === 'yawn') {
this.debug('Flower Veil blocking yawn');
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
return null;
}
},
isBreakable: true,
name: "Flower Veil",
},

fluffy: {
onSourceModifyDamage(damage, source, target, move) {
let mod = 1;
if (move.type === 'Fire') mod *= 2;
if (move.flags['contact']) mod /= 2;
return this.chainModify(mod);
},
isBreakable: true,
name: "Fluffy",
},

forecast: {
onStart(pokemon) {
this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
},
onWeatherChange(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
let forme = null;
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
break;
case 'raindance':
case 'primordialsea':
if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
break;
case 'hail':
case 'snow':
if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
break;
default:
if (pokemon.species.id !== 'castform') forme = 'Castform';
break;
}
if (pokemon.isActive && forme) {
pokemon.formeChange(forme, this.effect, false, '[msg]');
}
},
name: "Forecast",
},

forewarn: {
onStart(pokemon) {
let warnMoves: (Move | Pokemon)[][] = [];
let warnBp = 1;
for (const target of pokemon.foes()) {
for (const moveSlot of target.moveSlots) {
const move = this.dex.moves.get(moveSlot.move);
let bp = move.basePower;
if (move.ohko) bp = 150;
if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
if (bp === 1) bp = 80;
if (!bp && move.category !== 'Status') bp = 80;
if (bp > warnBp) {
warnMoves = [[move, target]];
warnBp = bp;
} else if (bp === warnBp) {
warnMoves.push([move, target]);
}
}
}
if (!warnMoves.length) return;
const [warnMoveName, warnTarget] = this.sample(warnMoves);
this.add('-activate', pokemon, 'ability: Forewarn', warnMoveName, '[of] ' + warnTarget);
},
name: "Forewarn",
},

friendguard: {
name: "Friend Guard",
onAnyModifyDamage(damage, source, target, move) {
if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
this.debug('Friend Guard weaken');
return this.chainModify(0.75);
}
},
isBreakable: true,
},

frisk: {
onStart(pokemon) {
for (const target of pokemon.foes()) {
if (target.item) {
this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon, '[identify]');
}
}
},
name: "Frisk",
},

fullmetalbody: {
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
this.add("-fail", target, "unboost", "[from] ability: Full Metal Body", "[of] " + target);
}
},
name: "Full Metal Body",
},

furcoat: {
onModifyDefPriority: 6,
onModifyDef(def) {
return this.chainModify(2);
},
isBreakable: true,
name: "Fur Coat",
},

galewings: {
onModifyPriority(priority, pokemon, target, move) {
if (move?.type === 'Flying' && pokemon.hp === pokemon.maxhp) return priority + 2;
},
name: "Gale Wings",
},

gluttony: {
name: "Gluttony",
onStart(pokemon) {
pokemon.abilityState.gluttony = true;
},
onDamage(item, pokemon) {
pokemon.abilityState.gluttony = true;
},

},

goodasgold: {
onTryHit(target, source, move) {
if (move.category === 'Status' && target !== source) {
this.add('-immune', target, '[from] ability: Good as Gold');
return null;
}
},
isBreakable: true,
name: "Good as Gold",
},

gooey: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target, true)) {
this.add('-ability', target, 'Gooey');
this.boost({spe: -1}, source, target, null, true);
}
},
name: "Gooey",
},

gorillatactics: {
onStart(pokemon) {
pokemon.abilityState.choiceLock = "";
},
onBeforeMove(pokemon, target, move) {
if (move.isZOrMaxPowered || move.id === 'struggle') return;
if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
this.addMove('move', pokemon, move.name);
this.attrLastMove('[still]');
this.debug("Disabled by Gorilla Tactics");
this.add('-fail', pokemon);
return false;
}
},
onModifyMove(move, pokemon) {
if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
pokemon.abilityState.choiceLock = move.id;
},
onModifyAtkPriority: 1.5,
onModifyAtk(atk, pokemon) {
if (pokemon.volatiles['dynamax']) return;
this.debug('Gorilla Tactics Atk Boost');
return this.chainModify(1.5);
},
onDisableMove(pokemon) {
if (!pokemon.abilityState.choiceLock) return;
if (pokemon.volatiles['dynamax']) return;
for (const moveSlot of pokemon.moveSlots) {
if (moveSlot.id !== pokemon.abilityState.choiceLock) {
pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
}
}
},
onEnd(pokemon) {
pokemon.abilityState.choiceLock = "";
},
name: "Gorilla Tactics",
},

grasspelt: {
onModifyDefPriority: 6,
onModifyDef(pokemon) {
if (this.field.isTerrain('grassyterrain')) {
return this.chainModify(1.5);
}
},
onModifySpDPriority: 6,
onModifySpD(pokemon) {
if (this.field.isTerrain('grassyterrain')) {
return this.chainModify(1.5);
}
},
isBreakable: true,
name: "Grass Pelt",
},

grassysurge: {
onStart(source) {
this.field.setTerrain('grassyterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Grassy Terrain! Grass moves are now more powerful! Pokémon restore HP each turn!');
},

terrainweaver: {
onDamagingHit(damage, target, source, move) {
const abilities = [
{effect: 'electricterrain', message: `${target.name} triggered Electric Terrain! Electric moves are now more powerful! Pokémon can no longer fall asleep!`},
{effect: 'grassyterrain', message: `${target.name} triggered Grassy Terrain! Grass moves are now more powerful! Pokémon restore HP each turn!`},
{effect: 'mistyterrain', message: `${target.name} triggered Misty Terrain! Dragon moves are now less powerful! Pokémon cannot be inflicted with non-volatile status conditions!`},
{effect: 'psychicterrain', message: `${target.name} triggered Psychic Terrain! Psychic moves are now more powerful! Pokémon cannot use priority moves!`}
];

const randomEffect = this.sample(abilities);

this.field.setTerrain(randomEffect.effect);
this.add('-message', randomEffect.message);
},
name: "Terrain Weaver",
},

name: "Grassy Surge",
},

grimneigh: {
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
this.boost({spa: length}, source);
}
},
name: "Grim Neigh",
},

guarddog: {
onDragOutPriority: 1.5,
onDragOut(pokemon) {
this.add('-activate', pokemon, 'ability: Guard Dog');
return null;
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.boost({atk: 1.5, spa: 1.5}, target, target, null, false, true);
}
},
isBreakable: true,
name: "Guard Dog",
},

gulpmissile: {
onDamagingHit(damage, target, source, move) {
if (!source.hp || !source.isActive || target.transformed || target.isSemiInvulnerable()) return;
if (['cramorantgulping', 'cramorantgorging'].includes(target.species.id)) {
this.damage(source.baseMaxhp / 4, source, target);
if (target.species.id === 'cramorantgulping') {
this.boost({def: -1.5}, source, target, null, true);
} else {
source.trySetStatus('par', target, move);
}
target.formeChange('cramorant', move);
}
},
onSourceTryPrimaryHit(target, source, effect) {
if (
effect && effect.id === 'surf' && source.hasAbility('gulpmissile') &&
source.species.name === 'Cramorant' && !source.transformed
) {
const forme = source.hp <= source.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
source.formeChange(forme, effect);
}
},
isPermanent: true,
name: "Gulp Missile",
},

guts: {
onModifyAtkPriority: 5,
onModifyAtk(atk, pokemon) {
if (pokemon.status) {
return this.chainModify(1.5);
}
},
name: "Guts",
},

griffith: {
onModifyAtkPriority: 5,
onModifyAtk(spa, pokemon) {
if (pokemon.status) {
return this.chainModify(1.5);
}
},
name: "Guts",
},

hadronengine: {
onDamagingHit(damage, target, source, move) {
this.field.setTerrain('electricterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Electric Terrain! Electric moves are now more powerful! Pokémon can no longer fall asleep!');
},

isPermanent: true,
name: "Hadron Engine",
},

nimbusbarrier: {
onDamagingHit(damage, target, source, move) {
this.field.setTerrain('mistyterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Misty Terrain! Dragon moves are now less powerful! Pokémon can not be inflicted with non volatile status conditions!');
},

isPermanent: true,
name: "Nimbus Barrier",
},

psychicsanctum: {
onDamagingHit(damage, target, source, move) {
this.field.setTerrain('psychicterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Psychic Terrain! Psychic moves are now more powerful! Pokémon can not use priority moves!');
},

isPermanent: true,
name: "Psychic Sanctum",
},

harvest: {
name: "Harvest",
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (this.field.isWeather(['sunnyday', 'desolateland']) || this.randomChance(50, 100)) {
if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
pokemon.setItem(pokemon.lastItem);
pokemon.lastItem = '';
this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
}
}
},
},

healer: {
name: "Healer",
onResidualOrder: 5,
onResidualSubOrder: 3,
onResidual(pokemon) {
for (const allyActive of pokemon.adjacentAllies()) {
if (allyActive.status && this.randomChance(3, 10)) {
this.add('-activate', pokemon, 'ability: Healer');
allyActive.cureStatus();
}
}
},
},

imaginedragons: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Imagine Dragons');
},
onAnyBasePowerPriority: 20,
onAnyBasePower(basePower, source, target, move) {
if (target === source || move.category === 'Status' || move.type !== 'Dragon') return;
if (!move.auraBooster?.hasAbility('Imagine Dragons')) move.auraBooster = this.effectState.target;
if (move.auraBooster !== this.effectState.target) return;
return this.chainModify([133,100]);
},
name: "Imagine Dragons",
},

heatproof: {
onSourceBasePowerPriority: 1.58,
onSourceBasePower(basePower, attacker, defender, move) {
if (move.type === 'Fire') {
return this.chainModify(0.5);
}
},
onDamage(damage, target, source, effect) {
if (effect && effect.id === 'brn') {
return damage / 2;
}
},
isBreakable: true,
name: "Heatproof",
},

waterproof: {
onSourceBasePowerPriority: 1.58,
onSourceBasePower(basePower, attacker, defender, move) {
if (move.type === 'Water') {
return this.chainModify(0.5);
}
},
onDamage(damage, target, source, effect) {
if (effect && effect.id === 'brn') {
return damage / 2;
}
},
isBreakable: true,
name: "Waterproof",
},

heavymetal: {
onModifyWeightPriority: 1.5,
onModifyWeight(weighthg) {
return weighthg * 2.5;
},
isBreakable: true,
name: "Heavy Metal",
},

honeygather: {
name: "Honey Gather",
},

purepower: {
onPreStart(pokemon) {
this.add('-message', `${pokemon.name} is surging with power!`);
},
onModifyAtkPriority: 5,
onModifyAtk(atk) {
return this.chainModify(2);
},
name: "Pure Power",
},

hugepurepower: {
onPreStart(pokemon) {
this.add('-message', `Oh shit! ${pokemon.name} is surging with power!`);
},
onStart(pokemon, source, effect) {
this.effectState.bestStat = pokemon.getBestStat(false, true);
},
noCopy: true,
onModifyAtkPriority: 5,
onModifyAtk(atk, source, target, move) {
if (this.effectState.bestStat !== 'atk') return;
return this.chainModify(2);
},
onModifySpAPriority: 5,
onModifySpA(relayVar, source, target, move) {
if (this.effectState.bestStat !== 'spa') return;
return this.chainModify(2);
},
isPermanent: true,
name: "Huge Pure Power",
},

hugepower: {
onPreStart(pokemon) {
this.add('-message', `${pokemon.name} is surging with power!`);
},
onModifyAtkPriority: 5,
onModifyAtk(atk) {
return this.chainModify(2);
},
name: "Huge Power",
},

sonicpower: {
onModifySpaPriority: 5,
onModifySpa(spe) {
return this.chainModify(2.1);
},
name: "Sonic Power",
},

hungerswitch: {
onResidualOrder: 29,
onResidual(pokemon) {
if (pokemon.species.baseSpecies !== 'Morpeko' || pokemon.transformed) return;
const targetForme = pokemon.species.name === 'Morpeko' ? 'Morpeko-Hangry' : 'Morpeko';
pokemon.formeChange(targetForme);
},
name: "Hunger Switch",
},

hustle: {
onStart(pokemon, source, effect) {
this.effectState.bestStat = pokemon.getBestStat(false, true);
},
noCopy: true,
onModifyAtkPriority: 5,
onModifyAtk(atk, source, target, move) {
if (this.effectState.bestStat === 'atk') {
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(relayVar, source, target, move) {
if (this.effectState.bestStat === 'spa') {
return this.chainModify(1.5);
}
},
onSourceModifyAccuracyPriority: -1,
onSourceModifyAccuracy(accuracy, target, source, move) {
if (move.category === 'Physical' && typeof accuracy === 'number') {
return this.chainModify([100, 125]);
}
},
name: "Hustle",
},

hydration: {
onResidualOrder: 5,
onResidualSubOrder: 3,
onResidual(pokemon) {
if (pokemon.status && ['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
this.debug('hydration');
this.add('-activate', pokemon, 'ability: Hydration');
pokemon.cureStatus();
}
},
name: "Hydration",
},

hypercutter: {
onTryBoost(boost, target, source, effect) {
if (source && target === source) return;
if (boost.atk && boost.atk < 0) {
delete boost.atk;
if (!(effect as ActiveMove).secondaries) {
this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
}
}
if (boost.spa && boost.spa < 0) {
delete boost.spa;
if (!(effect as ActiveMove).secondaries) {
this.add("-fail", target, "unboost", "Special Attack", "[from] ability: Hyper Cutter", "[of] " + target);
}
}
},
isBreakable: true,
name: "Hyper Cutter",
},

icebody: {
onWeather(target, source, effect) {
if (effect.id === 'hail' || effect.id === 'snow') {
this.heal(target.baseMaxhp / 9);
}
},
onImmunity(type, pokemon) {
if (type === 'hail') return false;
},
name: "Ice Body",
},

iceface: {
onStart(pokemon) {
if (this.field.isWeather(['hail', 'snow']) &&
pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
this.add('-activate', pokemon, 'ability: Ice Face');
this.effectState.busted = false;
pokemon.formeChange('Eiscue', this.effect, true);
}
},
onDamagePriority: 1.5,
onDamage(damage, target, source, effect) {
if (
effect && effect.effectType === 'Move' && effect.category === 'Physical' &&
target.species.id === 'eiscue' && !target.transformed
) {
this.add('-activate', target, 'ability: Ice Face');
this.effectState.busted = true;
return 0;
}
},
onCriticalHit(target, type, move) {
if (!target) return;
if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;
if (target.volatiles['substitute'] && !(move.flags['bypasssub'] || move.infiltrates)) return;
if (!target.runImmunity(move.type)) return;
return false;
},
onEffectiveness(typeMod, target, type, move) {
if (!target) return;
if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;

const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
if (hitSub) return;

if (!target.runImmunity(move.type)) return;
return 0;
},
onUpdate(pokemon) {
if (pokemon.species.id === 'eiscue' && this.effectState.busted) {
pokemon.formeChange('Eiscue-Noice', this.effect, true);
}
},
onWeatherChange(pokemon, source, sourceEffect) {
if ((sourceEffect as Ability)?.suppressWeather) return;
if (!pokemon.hp) return;
if (this.field.isWeather(['hail', 'snow']) &&
pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
this.add('-activate', pokemon, 'ability: Ice Face');
this.effectState.busted = false;
pokemon.formeChange('Eiscue', this.effect, true);
}
},
isBreakable: true,
isPermanent: true,
name: "Ice Face",
},

icescales: {
onSourceModifyDamage(damage, source, target, move) {
if (move.category === 'Special') {
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Ice Scales",
},

metalarmour: {
onSourceModifyDamage(damage, source, target, move) {
if (move.category === 'Physical') {
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Metal Armour",
},

illuminate: {
name: "Illuminate",
},

illusion: {
onBeforeSwitchIn(pokemon) {
pokemon.illusion = null;
for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
const possibleTarget = pokemon.side.pokemon[i];
if (!possibleTarget.fainted) {
pokemon.illusion = possibleTarget;
break;
}
}
},
onDamagingHit(damage, target, source, move) {
if (target.illusion) {
this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
}
},
onEnd(pokemon) {
if (pokemon.illusion) {
this.debug('illusion cleared');
pokemon.illusion = null;
const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
this.add('replace', pokemon, details);
this.add('-end', pokemon, 'Illusion');
}
},
onFaint(pokemon) {
pokemon.illusion = null;
},
name: "Illusion",
},

immunity: {
onUpdate(pokemon) {
if (pokemon.status === 'tox' || pokemon.status === 'tox') {
this.add('-activate', pokemon, 'ability: Immunity');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'tox' && status.id !== 'tox') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Immunity');
}
return false;
},
isBreakable: true,
name: "Immunity",
},

imposter: {
onSwitchIn(pokemon) {
this.effectState.switchingIn = true;
},
onStart(pokemon) {
if (!this.effectState.switchingIn) return;
const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
if (target) {
pokemon.transformInto(target, this.dex.abilities.get('imposter'));
}
this.effectState.switchingIn = false;
},
flags: {failroleplay: 1.5, noreceiver: 1.5, noentrain: 1.5, notrace: 1.5},
name: "Imposter",
},

infiltrator: {
onModifyMove(move) {
move.infiltrates = true;
},
name: "Infiltrator",
},

innardsout: {
name: "Innards Out",
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (!target.hp) {
this.damage(target.getUndynamaxedHP(damage), source, target);
}
},
},

innerfocus: {
onTryAddVolatile(status, pokemon) {
if (status.id === 'flinch') return null;
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Focus', '[of] ' + target);
}
},
isBreakable: true,
name: "Inner Focus",
},

insomnia: {
onUpdate(pokemon) {
if (pokemon.status === 'slp') {
this.add('-activate', pokemon, 'ability: Insomnia');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'slp') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Insomnia');
}
return false;
},
isBreakable: true,
name: "Insomnia",
},

intimidate: {
onStart(pokemon) {
let activated = false;
for (const target of pokemon.adjacentFoes()) {
if (!activated) {
this.add('-ability', pokemon, 'Intimidate', 'boost');
activated = true;
}
if (target.volatiles['substitute']) {
this.add('-immune', target);
} else {
this.boost({atk: -1}, target, pokemon, null, true);
}
}
},
name: "Intimidate",
},

dishearten: {
onStart(pokemon) {
let activated = false;
for (const target of pokemon.adjacentFoes()) {
if (!activated) {
this.add('-ability', pokemon, 'Dishearten', 'boost');
activated = true;
}
if (target.volatiles['substitute']) {
this.add('-immune', target);
} else {
this.boost({spa: -1}, target, pokemon, null, true);
}
}
},
name: "Dishearten",
},

flustered: {
onStart(pokemon) {
let activated = false;
for (const target of pokemon.adjacentFoes()) {
if (!activated) {
this.add('-ability', pokemon, 'Flustered', 'boost');
activated = true;
}
if (target.volatiles['substitute']) {
this.add('-immune', target);
} else {
this.boost({spe: -1}, target, pokemon, null, true);
}
}
},
name: "Flustered",
},

intrepidsword: {
onPreStart(pokemon) {
this.add('-message', 'Intrepid Sword has boosted their highest attacking stat.');
this.add('-ability', pokemon, 'Intrepid Sword');
},
onStart(pokemon, source, effect) {
this.effectState.bestStat = pokemon.getBestStat(false, true);
},
noCopy: true,
onModifyAtkPriority: 5,
onModifyAtk(atk, source, target, move) {
if (this.effectState.bestStat !== 'atk') return;
return this.chainModify(1.5);
},
onModifySpAPriority: 5,
onModifySpA(relayVar, source, target, move) {
if (this.effectState.bestStat !== 'spa') return;
return this.chainModify(1.5);
},
isPermanent: true,
name: "Intrepid Sword",
},

ironbarbs: {
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target, true)) {
this.damage(source.baseMaxhp / 6, source, target);
}
},
name: "Iron Barbs",
},

ironfist: {
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['punch']) {
this.debug('Iron Fist boost');
return this.chainModify([133,100]);
}
},
name: "Iron Fist",
},

superkickparty: {
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['kick']) {
this.debug('Super Kick Party boost');
return this.chainModify([133,100]);
}
},
name: "Super Kick Party",
},

justified: {
onSourceModifyAtkPriority: 6,
onSourceModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Fairy' || move.type === 'Bug' || move.type === 'Fighting') {
this.debug('Justified boost');
return this.chainModify(0.75);
}
},
onSourceModifySpAPriority: 5,
onSourceModifySpA(spa, attacker, defender, move) {
if (move.type === 'Fairy' || move.type === 'Bug' || move.type === 'Fighting') {
this.debug('Justified boost');
return this.chainModify(0.75);
}
},
isBreakable: true,
name: "Justified",
},

keeneye: {
onTryBoost(boost, target, source, effect) {
if (source && target === source) return;
if (boost.accuracy && boost.accuracy < 0) {
delete boost.accuracy;
if (!(effect as ActiveMove).secondaries) {
this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
}
}
},
onModifyMove(move) {
move.ignoreEvasion = true;
},
isBreakable: true,
name: "Keen Eye",
},

klutz: {
onStart(pokemon) {
this.singleEvent('End', pokemon.getItem(), pokemon.itemState, pokemon);
},
name: "Klutz",
},

leafguard: {
onSetStatus(status, target, source, effect) {
if (['sandstorm','hail','snow','sunnyday','desolateland','raindance','primordialsea'].includes(target.effectiveWeather())) {
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Leaf Guard');
}
return false;
}
},
onTryAddVolatile(status, target) {
if (status.id === 'yawn' && ['sandstorm','hail','snow','sunnyday','desolateland','raindance','primordialsea'].includes(target.effectiveWeather())) {
this.add('-immune', target, '[from] ability: Leaf Guard');
return null;
}
},
isBreakable: true,
name: "Leaf Guard",
},

levitate: {
isBreakable: true,
name: "Levitate",
},

libero: {
onPrepareHit(source, target, move) {
if (this.effectState.libero) return;
if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
const type = move.type;
if (type && type !== '???' && source.getTypes().join() !== type) {
if (!source.setType(type)) return;
this.effectState.libero = true;
this.add('-start', source, 'typechange', type, '[from] ability: Libero');
}
},
onSwitchIn() {
delete this.effectState.libero;
},
name: "Libero",
},

lightmetal: {
onModifyWeight(weighthg) {
return this.trunc(weighthg / 2);
},
isBreakable: true,
name: "Light Metal",
},

lightningrod: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Electric') {
const bestStat = target.getBestStat(false, true);
if (!this.boost(bestStat === 'atk' ? { atk: 1.5 } : { spa: 1.5 })) {
this.add('-immune', target, '[from] ability: Lightning Rod');
}
return null;
}
},
onAnyRedirectTarget(target, source, source2, move) {
if (move.type !== 'Electric' || move.flags['pledgecombo']) return;
const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
if (this.validTarget(this.effectState.target, source, redirectTarget)) {
if (move.smartTarget) move.smartTarget = false;
if (this.effectState.target !== target) {
this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
}
return this.effectState.target;
}
},
isBreakable: true,
name: "Lightning Rod",
},

limber: {
onUpdate(pokemon) {
if (pokemon.status === 'par') {
this.add('-activate', pokemon, 'ability: Limber');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'par') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Limber');
}
return false;
},
isBreakable: true,
name: "Limber",
},

lingeringaroma: {
onDamagingHit(damage, target, source, move) {
const sourceAbility = source.getAbility();
if (sourceAbility.isPermanent || sourceAbility.id === 'lingeringaroma') {
return;
}
if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
const oldAbility = source.setAbility('lingeringaroma', target);
if (oldAbility) {
this.add('-activate', target, 'ability: Lingering Aroma', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
}
}
},
name: "Lingering Aroma",
},

liquidooze: {
onSourceTryHeal(damage, target, source, effect) {
this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
const canOoze = ['drain', 'leechseed', 'strengthsap'];
if (canOoze.includes(effect.id)) {
this.damage(damage);
return 0;
}
},
name: "Liquid Ooze",
},

fosrodah: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Dragon';
}
},
name: "Fosrodah",
},

qosrodah: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Electric';
}
},
name: "Qosrodah",
},

faetoorshul: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Fairy';
}
},
name: "Faetoorshul",
},

yoltoorshul: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Fire';
}
},
name: "Yoltoorshul",
},

vengaarnos: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Flying';
}
},
name: "Vengaarnos",
},

fokrahdiin: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Ice';
}
},
name: "Fokrahdiin",
},

okaazfokrah: {
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Water';
}
},
name: "Okaazfokrah",
},

longreach: {
onModifyMove(move) {
delete move.flags['contact'];
},
name: "Long Reach",
},

magicbounce: {
name: "Magic Bounce",
onTryHitPriority: 1.5,
onTryHit(target, source, move) {
if (target === source || move.hasBounced || !move.flags['reflectable']) {
return;
}
const newMove = this.dex.getActiveMove(move.id);
newMove.hasBounced = true;
newMove.pranksterBoosted = false;
this.actions.useMove(newMove, target, source);
return null;
},
onAllyTryHitSide(target, source, move) {
if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
return;
}
const newMove = this.dex.getActiveMove(move.id);
newMove.hasBounced = true;
newMove.pranksterBoosted = false;
this.actions.useMove(newMove, this.effectState.target, source);
return null;
},
condition: {
duration: 1.5,
},
isBreakable: true,
},

magicguard: {
onDamage(damage, target, source, effect) {
if (effect.effectType !== 'Move') {
if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
return false;
}
},
name: "Magic Guard",
},

magician: {
onAfterMoveSecondarySelf(source, target, move) {
if (!move || !target || source.switchFlag === true) return;
if (target !== source && move.category !== 'Status') {
if (source.item || source.volatiles['gem'] || move.id === 'fling') return;
const yourItem = target.takeItem(source);
if (!yourItem) return;
if (!source.setItem(yourItem)) {
target.item = yourItem.id;
return;
}
this.add('-item', source, yourItem, '[from] ability: Magician', '[of] ' + target);
}
},
name: "Magician",
},

magmaarmor: {
onUpdate(pokemon) {
if (pokemon.status === 'frz') {
this.add('-activate', pokemon, 'ability: Magma Armor');
pokemon.cureStatus();
}
},
onImmunity(type, pokemon) {
if (type === 'frz') return false;
},
isBreakable: true,
name: "Magma Armor",
},

magneato: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Steel') {
if (!this.heal(target.baseMaxhp / 5)) {
this.add('-immune', target, '[from] ability: Magneato');
}
return null;
}
},
onFoeTrapPokemon(pokemon) {
if (pokemon.hasType('Steel') && pokemon.isAdjacent(this.effectState.target)) {
pokemon.tryTrap(true);
}
},
onFoeMaybeTrapPokemon(pokemon, source) {
if (!source) source = this.effectState.target;
if (!source || !pokemon.isAdjacent(source)) return;
if (!pokemon.knownType || pokemon.hasType('Steel')) {
pokemon.maybeTrapped = true;
}
},
name: "Magneato",
},

marvelscale: {
onModifyDefPriority: 6,
onModifyDef(def, pokemon) {
if (pokemon.status) {
return this.chainModify(1.5);
}
},
flags: {breakable: 1.5},
name: "Marvel Scale",
},

dcscale: {
onModifyDefPriority: 6,
onModifySpD(SpD, pokemon) {
if (pokemon.status) {
return this.chainModify(1.5);
}
},
flags: {breakable: 1.5},
name: "DC Scale",
},

megalauncher: {
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['pulse']) {
return this.chainModify([133,100]);
}
},
name: "Mega Launcher",
},

merciless: {
onModifyCritRatio(critRatio, source, target) {
if (target && ['tox', 'tox'].includes(target.status)) return 5;
},
name: "Merciless",
},

mimicry: {
onStart(pokemon) {
this.singleEvent('TerrainChange', this.effect, this.effectState, pokemon);
},
onTerrainChange(pokemon) {
let types;
switch (this.field.terrain) {
case 'electricterrain':
types = ['Electric'];
break;
case 'grassyterrain':
types = ['Grass'];
break;
case 'mistyterrain':
types = ['Fairy'];
break;
case 'psychicterrain':
types = ['Psychic'];
break;
default:
types = pokemon.baseSpecies.types;
}
const oldTypes = pokemon.getTypes();
if (oldTypes.join() === types.join() || !pokemon.setType(types)) return;
if (this.field.terrain || pokemon.transformed) {
this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Mimicry');
if (!this.field.terrain) this.hint("Transform Mimicry changes you to your original un-transformed types.");
} else {
this.add('-activate', pokemon, 'ability: Mimicry');
this.add('-end', pokemon, 'typechange', '[silent]');
}
},
name: "Mimicry",
},

minus: {
onModifySpAPriority: 5,
onModifySpA(spa, pokemon) {
for (const allyActive of pokemon.allies()) {
if (allyActive.hasAbility(['minus', 'plus'])) {
return this.chainModify(1.5);
}
}
},
name: "Minus",
},

mirrorarmor: {
onTryBoost(boost, target, source, effect) {
if (!source || target === source || !boost || effect.name === 'Mirror Armor') return;
let b: BoostID;
for (b in boost) {
if (boost[b]! < 0) {
if (target.boosts[b] === -6) continue;
const negativeBoost: SparseBoostsTable = {};
negativeBoost[b] = boost[b];
delete boost[b];
if (source.hp) {
this.add('-ability', target, 'Mirror Armor');
this.boost(negativeBoost, source, target, null, true);
}
}
}
},
isBreakable: true,
name: "Mirror Armor",
},

mistysurge: {
onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Misty Terrain! Dragon moves are now less powerful! Pokémon can not be inflicted with non volatile status conditions!');
},

onStart(source) {
this.field.setTerrain('mistyterrain');
},

name: "Misty Surge",
},

moldbreaker: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Mold Breaker');
},
onModifyMove(move) {
move.ignoreAbility = true;
},
name: "Mold Breaker",
},

moody: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
let stats: BoostID[] = [];
const boost: SparseBoostsTable = {};
let statPlus: BoostID;
for (statPlus in pokemon.boosts) {
if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
if (pokemon.boosts[statPlus] < 6) {
stats.push(statPlus);
}
}
let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
if (randomStat) boost[randomStat] = 1.5;
stats = [];
let statMinus: BoostID;
for (statMinus in pokemon.boosts) {
if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
stats.push(statMinus);
}
}
randomStat = stats.length ? this.sample(stats) : undefined;
if (randomStat) boost[randomStat] = -1.5;
this.boost(boost, pokemon, pokemon);
},
name: "Moody",
},

mardy: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
let stats: BoostID[] = [];
const boost: SparseBoostsTable = {};
let statPlus: BoostID;
for (statPlus in pokemon.boosts) {
if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
if (pokemon.boosts[statPlus] < 6) {
stats.push(statPlus);
}
}
let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
if (randomStat) boost[randomStat] = 1;
stats = [];
let statMinus: BoostID;
for (statMinus in pokemon.boosts) {
if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
stats.push(statMinus);
}
}
randomStat = stats.length ? this.sample(stats) : undefined;
if (randomStat) boost[randomStat] = -1;
this.boost(boost, pokemon, pokemon);
},
name: "Mardy",
},

motordrive: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Electric') {
if (!this.boost({spe: 1.5})) {
this.add('-immune', target, '[from] ability: Motor Drive');
}
return null;
}
},
isBreakable: true,
name: "Motor Drive",
},

moxie: {
onStart(pokemon, source, effect) {
this.effectState.bestStat = pokemon.getBestStat(false, true);
},
noCopy: true,
onModifyAtkPriority: 5,
onModifyAtk(atk, source, target, move) {
if (this.effectState.bestStat === 'atk') {
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(relayVar, source, target, move) {
if (this.effectState.bestStat === 'spa') {
return this.chainModify(1.5);
}
},
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
const highestStat = source.getStat('atk') >= source.getStat('spa') ? 'atk' : 'spa';
const boost = {};
boost[highestStat] = length;
this.boost(boost, source);
}
},
name: "Moxie",
},

valor: {
onSourceAfterFaint(length, target, source, effect) {
if (effect && effect.effectType === 'Move') {
this.boost({spa: length}, source);
}
},
name: "Valor",
},

multiscale: {
onSourceModifyDamage(damage, source, target, move) {
if (target.hp >= target.maxhp) {
this.debug('Multiscale weaken');
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Multiscale",
},

invisiblescreen: {
onSourceModifyDamage(damage, source, target, move) {
if (target.hp >= target.maxhp) {
this.debug('Invisible Screen weaken');
return this.chainModify(0.25);
this.effectState.busted = true;
}
},
onDamagingHit(damage, target, source, effect) {
this.boost({def: -.5, spd: -.5});
},
isBreakable: true,
name: "Invisible Screen",
},

multitype: {
isPermanent: true,
name: "Multitype",
},

mummy: {
name: "Mummy",
onDamagingHit(damage, target, source, move) {
const sourceAbility = source.getAbility();
if (sourceAbility.isPermanent || sourceAbility.id === 'mummy') {
return;
}
if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
const oldAbility = source.setAbility('mummy', target);
if (oldAbility) {
this.add('-activate', target, 'ability: Mummy', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
}
}
},
},

myceliummight: {
onFractionalPriorityPriority: -1,
onFractionalPriority(priority, pokemon, target, move) {
if (move.category === 'Status') {
return -0.1;
}
},
onModifyMove(move) {
if (move.category === 'Status') {
move.ignoreAbility = true;
}
},
name: "Mycelium Might",
},

naturalcure: {
onCheckShow(pokemon) {
if (pokemon.side.active.length === 1) return;
if (pokemon.showCure === true || pokemon.showCure === false) return;
const cureList = [];
let noCureCount = 0;
for (const curPoke of pokemon.side.active) {
if (!curPoke?.status) {
continue;
}
if (curPoke.showCure) {
continue;
}
const species = curPoke.species;
if (!Object.values(species.abilities).includes('Natural Cure')) {
continue;
}
if (!species.abilities['1'] && !species.abilities['H']) {
continue;
}
if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
continue;
}

if (curPoke.hasAbility('naturalcure')) {
cureList.push(curPoke);
} else {
noCureCount++;
}
}

if (!cureList.length || !noCureCount) {
for (const pkmn of cureList) {
pkmn.showCure = true;
}
} else {

this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

for (const pkmn of cureList) {
pkmn.showCure = false;
}
}
},
onSwitchOut(pokemon) {
if (!pokemon.status) return;

if (pokemon.showCure === undefined) pokemon.showCure = true;

if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
pokemon.clearStatus();

if (!pokemon.showCure) pokemon.showCure = undefined;
},
name: "Natural Cure",
},

neuroforce: {
onModifyDamage(damage, source, target, move) {
if (move && target.getMoveHitData(move).typeMod > 0) {
return this.chainModify([133,100]);
}
},
name: "Neuroforce",
},

neutralizinggas: {
onPreStart(pokemon) {
if (pokemon.transformed) return;
this.add('-ability', pokemon, 'Neutralizing Gas');
pokemon.abilityState.ending = false;
const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
for (const target of this.getAllActive()) {
if (target.hasItem('Ability Shield')) {
this.add('-block', target, 'item: Ability Shield');
continue;
}
if (target.illusion) {
this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, pokemon, 'neutralizinggas');
}
if (target.volatiles['slowstart']) {
delete target.volatiles['slowstart'];
this.add('-end', target, 'Slow Start', '[silent]');
}
if (strongWeathers.includes(target.getAbility().id)) {
this.singleEvent('End', this.dex.abilities.get(target.getAbility().id), target.abilityState, target, pokemon, 'neutralizinggas');
}
}
},
onEnd(source) {
if (source.transformed) return;
for (const pokemon of this.getAllActive()) {
if (pokemon !== source && pokemon.hasAbility('Neutralizing Gas')) {
return;
}
}
this.add('-end', source, 'ability: Neutralizing Gas');


if (source.abilityState.ending) return;
source.abilityState.ending = true;
const sortedActive = this.getAllActive();
this.speedSort(sortedActive);
for (const pokemon of sortedActive) {
if (pokemon !== source) {

this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityState, pokemon);
if (pokemon.ability === "gluttony") {
pokemon.abilityState.gluttony = false;
}
}
}
},
name: "Neutralizing Gas",
},

noguard: {
onAnyInvulnerabilityPriority: 1.5,
onAnyInvulnerability(target, source, move) {
if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
},
onAnyAccuracy(accuracy, target, source, move) {
if (move && (source === this.effectState.target || target === this.effectState.target)) {
return true;
}
return accuracy;
},
name: "No Guard",
},

normalate: {
onModifyTypePriority: 1.5,
onModifyType(move, pokemon) {
if (!(move.isZ && move.category !== 'Status') && !noModifyType.includes(move.id) &&
!(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Normal';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([133,100]);
},
name: "Normalate",
},

oblivious: {
onUpdate(pokemon) {
if (pokemon.volatiles['attract']) {
this.add('-activate', pokemon, 'ability: Oblivious');
pokemon.removeVolatile('attract');
this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
}
if (pokemon.volatiles['taunt']) {
this.add('-activate', pokemon, 'ability: Oblivious');
pokemon.removeVolatile('taunt');
}
},
onImmunity(type, pokemon) {
if (type === 'attract') return false;
},
onTryHit(pokemon, target, move) {
if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
this.add('-immune', pokemon, '[from] ability: Oblivious');
return null;
}
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Oblivious', '[of] ' + target);
}
},
isBreakable: true,
name: "Oblivious",
},

opportunist: {
onFoeAfterBoost(boost, target, source, effect) {
if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
const pokemon = this.effectState.target;
const positiveBoosts: Partial<BoostsTable> = {};
let i: BoostID;
for (i in boost) {
if (boost[i]! > 0) {
positiveBoosts[i] = boost[i];
}
}
if (Object.keys(positiveBoosts).length < 1) return;
this.boost(positiveBoosts, pokemon);
},
name: "Opportunist",
},

orichalcumpulse: {
onStart(pokemon) {
if (this.field.setWeather('sunnyday')) {
this.add('-activate', pokemon, 'Orichalcum Pulse', '[source]');
} else if (this.field.isWeather('sunnyday')) {
this.add('-activate', pokemon, 'ability: Orichalcum Pulse');
}
},
onModifyAtkPriority: 5,
onModifyAtk(atk, pokemon) {
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
this.debug('Orichalcum boost');
return this.chainModify([5461, 4096]);
}
},
isPermanent: true,
name: "Orichalcum Pulse",
},

overcoat: {
onImmunity(type, pokemon) {
if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
},
onTryHitPriority: 1.5,
onTryHit(target, source, move) {
if (move.flags['powder'] && target !== source && this.dex.getImmunity('powder', target)) {
this.add('-immune', target, '[from] ability: Overcoat');
return null;
}
},
isBreakable: true,
name: "Overcoat",
},

overgrow: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Overgrow boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Overgrow boost');
return this.chainModify(1.5);
}
},
name: "Overgrow",
},

owntempo: {
onUpdate(pokemon) {
if (pokemon.volatiles['confusion']) {
this.add('-activate', pokemon, 'ability: Own Tempo');
pokemon.removeVolatile('confusion');
}
},
onTryAddVolatile(status, pokemon) {
if (status.id === 'confusion') return null;
},
onHit(target, source, move) {
if (move?.volatileStatus === 'confusion') {
this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
}
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Own Tempo', '[of] ' + target);
}
},
isBreakable: true,
name: "Own Tempo",
},

parentalbond: {
onPrepareHit(source, target, move) {
if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
move.multihit = 2;
move.multihitType = 'parentalbond';
},
onSourceModifySecondaries(secondaries, target, source, move) {
if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
return secondaries.filter(effect => effect.volatileStatus === 'flinch');
}
},
name: "Parental Bond",
},

pastelveil: {
onStart(pokemon) {
for (const ally of pokemon.alliesAndSelf()) {
if (['tox', 'slp', 'brn', 'par'].includes(ally.status)) {
this.add('-activate', pokemon, 'ability: Pastel Veil');
ally.cureStatus();
}
}
},
onUpdate(pokemon) {
if (['tox', 'slp', 'brn', 'par'].includes(pokemon.status)) {
this.add('-activate', pokemon, 'ability: Pastel Veil');
pokemon.cureStatus();
}
},
onAllySwitchIn(pokemon) {
if (['tox', 'slp', 'brn', 'par'].includes(pokemon.status)) {
this.add('-activate', this.effectState.target, 'ability: Pastel Veil');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (!['tox', 'slp', 'brn', 'par'].includes(status.id)) return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Pastel Veil');
}
return false;
},
onAllySetStatus(status, target, source, effect) {
if (!['tox', 'slp', 'brn', 'par'].includes(status.id)) return;
if ((effect as Move)?.status) {
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Pastel Veil', '[of] ' + effectHolder);
}
return false;
},
isBreakable: true,
name: "Pastel Veil",
},

perishbody: {
onDamagingHit(damage, target, source, move) {
if (!this.checkMoveMakesContact(move, source, target)) return;
let announced = false;
for (const pokemon of [source]) {
if (pokemon.volatiles['perishsong']) continue;
if (!announced) {
this.add('-ability', target, 'Perish Body');
announced = true;
}
pokemon.addVolatile('perishsong');
}
},
name: "Perish Body",
},

pickpocket: {
onAfterMoveSecondary(target, source, move) {
if (source && source !== target && move?.flags['contact']) {
if (target.item || target.switchFlag || target.forceSwitchFlag || source.switchFlag === true) {
return;
}
const yourItem = source.takeItem(target);
if (!yourItem) {
return;
}
if (!target.setItem(yourItem)) {
source.item = yourItem.id;
return;
}
this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Pickpocket', '[of] ' + source);
this.add('-item', target, yourItem, '[from] ability: Pickpocket', '[of] ' + source);
}
},
name: "Pickpocket",
},

pickup: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.item) return;
const pickupTargets = this.getAllActive().filter(target => (
target.lastItem && target.usedItemThisTurn && pokemon.isAdjacent(target)
));
if (!pickupTargets.length) return;
const randomTarget = this.sample(pickupTargets);
const item = randomTarget.lastItem;
randomTarget.lastItem = '';
this.add('-item', pokemon, this.dex.items.get(item), '[from] ability: Pickup');
pokemon.setItem(item);
},
name: "Pickup",
},

plus: {
onModifySpAPriority: 5,
onModifySpA(spa, pokemon) {
for (const allyActive of pokemon.allies()) {
if (allyActive.hasAbility(['minus', 'plus'])) {
return this.chainModify(1.5);
}
}
},
name: "Plus",
},

poisonheal: {
onDamagePriority: 1.5,
onDamage(damage, target, source, effect) {
if (effect.id === 'tox' || effect.id === 'tox') {
this.heal(target.baseMaxhp / 8);
return false;
}
},
name: "Poison Heal",
},

poisonpoint: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
if (this.randomChance(50, 100)) {
source.trySetStatus('tox', target);
}
}
},
name: "Poison Point",
},

poisontouch: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
if (this.randomChance(50, 100)) {
source.trySetStatus('tox', target);
}
}
},
name: "Poison Touch",
},

poisonpuppeteer: {
onAnyAfterSetStatus(status, target, source, effect) {
if (source.baseSpecies.name !== "Pecharunt") return;
if (source !== this.effectState.target || target === source || effect.effectType !== 'Move') return;
if (status.id === 'psn' || status.id === 'tox') {
target.addVolatile('confusion');
}
},
flags: {failroleplay: 1.5, noreceiver: 1.5, noentrain: 1.5, notrace: 1.5, failskillswap: 1.5},
name: "Poison Puppeteer",
},

powerconstruct: {
onResidualOrder: 29,
onResidual(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
if (pokemon.species.id === 'zygardecomplete' || pokemon.hp > pokemon.maxhp / 2) return;
this.add('-activate', pokemon, 'ability: Power Construct');
pokemon.formeChange('Zygarde-Complete', this.effect, true);
pokemon.baseMaxhp = Math.floor(Math.floor(
2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
) * pokemon.level / 100 + 10);
const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
pokemon.maxhp = newMaxHP;
this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
},
isPermanent: true,
name: "Power Construct",
},

powerofalchemy: {
onAllyFaint(target) {
if (!this.effectState.target.hp) return;
const ability = target.getAbility();
if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
if (this.effectState.target.setAbility(ability)) {
this.add('-ability', this.effectState.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
}
},
name: "Power of Alchemy",
},

powerspot: {
onAllyBasePowerPriority: 22,
onAllyBasePower(basePower, attacker, defender, move) {
if (attacker !== this.effectState.target) {
this.debug('Power Spot boost');
return this.chainModify([133,100]);
}
},
name: "Power Spot",
},

prankster: {
onModifyPriority(priority, pokemon, target, move) {
if (move?.category === 'Status') {
move.pranksterBoosted = true;
return priority + 1;
}
},
name: "Prankster",
},

pressure: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Pressure');
},
onDeductPP(target, source) {
if (target.isAlly(source)) return;
return 1;
},
name: "Pressure",
},

primordialsea: {
onStart(source) {
this.field.setWeather('primordialsea');
},
onAnySetWeather(target, source, weather) {
const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
if (this.field.getWeather().id === 'primordialsea' && !strongWeathers.includes(weather.id)) return false;
},
onEnd(pokemon) {
if (this.field.weatherState.source !== pokemon) return;
for (const target of this.getAllActive()) {
if (target === pokemon) continue;
if (target.hasAbility('primordialsea')) {
this.field.weatherState.source = target;
return;
}
}
this.field.clearWeather();
},
name: "Primordial Sea",
},

prismarmor: {
onSourceModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).typeMod > 0) {
this.debug('Prism Armor neutralize');
return this.chainModify(0.75);
}
},
name: "Prism Armor",
},

propellertail: {
onModifyMovePriority: 1.5,
onModifyMove(move) {
move.tracksTarget = move.target !== 'scripted';
},
name: "Propeller Tail",
},

protean: {
onPrepareHit(source, target, move) {
if (this.effectState.protean) return;
if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
const type = move.type;
if (type && type !== '???' && source.getTypes().join() !== type) {
if (!source.setType(type)) return;
this.effectState.protean = true;
this.add('-start', source, 'typechange', type, '[from] ability: Protean');
}
},
onSwitchIn(pokemon) {
delete this.effectState.protean;
},
name: "Protean",
},

psychicsurge: {
onStart(source) {
this.field.setTerrain('psychicterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Psychic Terrain! Psychic moves are now more powerful! Pokémon can not use priority moves!');
},

name: "Psychic Surge",
},

punkrock: {
onBasePowerPriority: 7,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['sound']) {
this.debug('Punk Rock boost');
return this.chainModify([133, 100]);
}
},
isBreakable: true,
name: "Punk Rock",
},

purifyingsalt: {
onSetStatus(status, target, source, effect) {
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Purifying Salt');
}
return false;
},
onTryAddVolatile(status, target) {
if (status.id === 'yawn') {
this.add('-immune', target, '[from] ability: Purifying Salt');
return null;
}
},
onSourceModifyAtkPriority: 6,
onSourceModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Ghost') {
this.debug('Purifying Salt weaken');
return this.chainModify(0.5);
}
},
onSourceModifySpAPriority: 5,
onSourceModifySpA(spa, attacker, defender, move) {
if (move.type === 'Ghost') {
this.debug('Purifying Salt weaken');
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Purifying Salt",
},

quarkdrive: {
onSwitchInPriority: -2,
onStart(pokemon) {
this.singleEvent('TerrainChange', this.effect, this.effectState, pokemon);
},
onTerrainChange(pokemon) {
if (
this.field.isTerrain('electricterrain') ||
this.field.isTerrain('grassyterrain') ||
this.field.isTerrain('mistyterrain') ||
this.field.isTerrain('psychicterrain')
) {
pokemon.addVolatile('quarkdrive');
} else if (!pokemon.volatiles['quarkdrive']?.fromBooster) {
pokemon.removeVolatile('quarkdrive');
}
},
onEnd(pokemon) {
delete pokemon.volatiles['quarkdrive'];
this.add('-end', pokemon, 'Quark Drive', '[silent]');
},
condition: {
noCopy: true,
onStart(pokemon, source, effect) {
if (effect?.name === 'Booster Energy') {
this.effectState.fromBooster = true;
this.add('-activate', pokemon, 'ability: Quark Drive', '[fromitem]');
} else {
this.add('-activate', pokemon, 'ability: Quark Drive');
}
this.effectState.bestStat = pokemon.getBestStat(false, true);
this.add('-start', pokemon, 'quarkdrive' + this.effectState.bestStat);
},
onModifyAtkPriority: 5,
onModifyAtk(atk, pokemon) {
if (this.effectState.bestStat !== 'atk' || pokemon.ignoringAbility()) return;
this.debug('Quark Drive atk boost');
return this.chainModify([5325, 4096]);
},
onModifyDefPriority: 6,
onModifyDef(def, pokemon) {
if (this.effectState.bestStat !== 'def' || pokemon.ignoringAbility()) return;
this.debug('Quark Drive def boost');
return this.chainModify([5325, 4096]);
},
onModifySpAPriority: 5,
onModifySpA(spa, pokemon) {
if (this.effectState.bestStat !== 'spa' || pokemon.ignoringAbility()) return;
this.debug('Quark Drive spa boost');
return this.chainModify([5325, 4096]);
},
onModifySpDPriority: 6,
onModifySpD(spd, pokemon) {
if (this.effectState.bestStat !== 'spd' || pokemon.ignoringAbility()) return;
this.debug('Quark Drive spd boost');
return this.chainModify([5325, 4096]);
},
onModifySpe(spe, pokemon) {
if (this.effectState.bestStat !== 'spe' || pokemon.ignoringAbility()) return;
this.debug('Quark Drive spe boost');
return this.chainModify(1.5);
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Quark Drive');
},
},
name: "Quark Drive",
},

queenlymajesty: {
onFoeTryMove(target, source, move) {
const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
return;
}
const dazzlingHolder = this.effectState.target;
if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
this.attrLastMove('[still]');
this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
return false;
}
},
isBreakable: true,
name: "Queenly Majesty",
},

quickdraw: {
onFractionalPriorityPriority: -1,
onFractionalPriority(priority, pokemon, target, move) {
if (move.category !== "Status" && this.randomChance(33, 100)) {
this.add('-activate', pokemon, 'ability: Quick Draw');
return 0.1;
}
},
name: "Quick Draw",
},

quickfeet: {
onModifySpe(spe, pokemon) {
if (pokemon.status) {
return this.chainModify(1.5);
}
},
name: "Quick Feet",
},

raindish: {
onWeather(target, source, effect) {
if (target.hasItem('utilityumbrella')) return;
if (effect.id === 'raindance' || effect.id === 'primordialsea') {
this.heal(target.baseMaxhp / 9);
}
},
name: "Rain Dish",
},

omniarush: {
onModifySpe(spe, pokemon) {
if (this.field.isWeather('sandstorm','hail','snow','sunnyday','desolateland','raindance','primordialsea')) {
return this.chainModify(1.5);
}
},
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
name: "Omnia Rush",
},

rattled: {
onDamagingHit(damage, target, source, move) {
if (['Dark', 'Bug', 'Ghost'].includes(move.type)) {
this.boost({spe: 1.5});
}
},
onAfterBoost(boost, target, source, effect) {
if (effect?.name === 'Intimidate') {
this.boost({spe: 1.5});
}
},
name: "Rattled",
},

receiver: {
onAllyFaint(target) {
if (!this.effectState.target.hp) return;
const ability = target.getAbility();
if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
if (this.effectState.target.setAbility(ability)) {
this.add('-ability', this.effectState.target, ability, '[from] ability: Receiver', '[of] ' + target);
}
},
name: "Receiver",
},

reckless: {
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.recoil || move.hasCrashDamage) {
this.debug('Reckless boost');
return this.chainModify([133,100]);
}
},
name: "Reckless",
},

regenerator: {
onSwitchOut(pokemon) {
pokemon.heal(pokemon.baseMaxhp / 3.333);
},
name: "Regenerator",
},

ripen: {
onTryHeal(damage, target, source, effect) {
if (!effect) return;
if (effect.name === 'Berry Juice' || effect.name === 'Leftovers') {
this.add('-activate', target, 'ability: Ripen');
}
if ((effect as Item).isBerry) return this.chainModify(2);
},
onChangeBoost(boost, target, source, effect) {
if (effect && (effect as Item).isBerry) {
let b: BoostID;
for (b in boost) {
boost[b]! *= 2;
}
}
},
onSourceModifyDamagePriority: -1,
onSourceModifyDamage(damage, source, target, move) {
if (target.abilityState.berryWeaken) {
target.abilityState.berryWeaken = false;
return this.chainModify(0.5);
}
},
onTryEatItemPriority: -1,
onTryEatItem(item, pokemon) {
this.add('-activate', pokemon, 'ability: Ripen');
},
onEatItem(item, pokemon) {
pokemon.abilityState.berryWeaken = weakenBerries.includes(item.name);
},
name: "Ripen",
},

rivalry: {
onBasePowerPriority: 24,
onBasePower(basePower, attacker, defender, move) {
if (attacker.gender && defender.gender) {
if (attacker.gender === defender.gender) {
this.debug('Rivalry boost');
return this.chainModify(1.25);
} else {
this.debug('Rivalry weaken');
return this.chainModify(0.75);
}
}
},
name: "Rivalry",
},

rkssystem: {
isPermanent: true,
name: "RKS System",
},

rockhead: {
onDamage(damage, target, source, effect) {
if (effect.id === 'recoil') {
if (!this.activeMove) throw new Error("Battle.activeMove is null");
if (this.activeMove.id !== 'struggle') return null;
}
},
name: "Rock Head",
},

rockypayload: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Rock') {
this.debug('Rocky Payload boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Rock') {
this.debug('Rocky Payload boost');
return this.chainModify(1.5);
}
},
name: "Rocky Payload",
},

roughskin: {
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target, true)) {
this.damage(source.baseMaxhp / 5, source, target);
}
},
name: "Rough Skin",
},

runaway: {
name: "Run Away",
},

sandforce: {
onBasePowerPriority: 21,
onBasePower(basePower, attacker, defender, move) {
if (this.field.isWeather('sandstorm')) {
if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
this.debug('Sand Force boost');
return this.chainModify([133,100]);
}
}
},
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
name: "Sand Force",
},

sandrush: {
onModifySpe(spe, pokemon) {
if (this.field.isWeather('sandstorm')) {
return this.chainModify(2);
}
},
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
name: "Sand Rush",
},

desolation: {
onDamagingHit(damage, target, source, move) {
this.field.setWeather('desolateLand');
},
name: "Desolation",
},

stormwarning: {
onDamagingHit(damage, target, source, move) {
this.field.setWeather('PrimordialSea');
},
name: "Storm Warning",
},

sandspit: {
onDamagingHit(damage, target, source, move) {
this.field.setWeather('sandstorm');
},
name: "Sand Spit",
},

sandstream: {
onStart(source) {
this.field.setWeather('sandstorm');
},
name: "Sand Stream",
},

sandveil: {
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
onModifyAccuracyPriority: -1,
onModifyAccuracy(accuracy) {
if (typeof accuracy !== 'number') return;
if (this.field.isWeather('sandstorm')) {
this.debug('Sand Veil - decreasing accuracy');
return this.chainModify([125, 1000]);
}
},
isBreakable: true,
name: "Sand Veil",
},

sapsipper: {
onTryHitPriority: 1.5,
onTryHit(target, source, move) {
if (target !== source && move.type === 'Grass') {
const bestStat = target.getBestStat();
if (bestStat === 'atk' || bestStat === 'spa') {
if (!this.boost({ [bestStat]: 1.5 })) {
this.add('-immune', target, '[from] ability: Sap Sipper');
}
}
return null;
}
},
onAllyTryHitSide(target, source, move) {
if (source === this.effectState.target || !target.isAlly(source)) return;
if (move.type === 'Grass') {
const bestStat = this.effectState.target.getBestStat();
if (bestStat === 'atk' || bestStat === 'spa') {
this.boost({ [bestStat]: 1.5 }, this.effectState.target);
}
}
},
isBreakable: true,
name: "Sap Sipper",
},

schooling: {
onStart(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
if (pokemon.hp > pokemon.maxhp / 2) {
if (pokemon.species.id === 'wishiwashi') {
pokemon.formeChange('Wishiwashi-School');
}
} else {
if (pokemon.species.id === 'wishiwashischool') {
pokemon.formeChange('Wishiwashi');
}
}
},
onResidualOrder: 29,
onResidual(pokemon) {
if (
pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 ||
pokemon.transformed || !pokemon.hp
) return;
if (pokemon.hp > pokemon.maxhp / 2) {
if (pokemon.species.id === 'wishiwashi') {
pokemon.formeChange('Wishiwashi-School');
}
} else {
if (pokemon.species.id === 'wishiwashischool') {
pokemon.formeChange('Wishiwashi');
}
}
},
isPermanent: true,
name: "Schooling",
},

scrappy: {
onModifyMovePriority: -5,
onModifyMove(move) {
if (!move.ignoreImmunity) move.ignoreImmunity = {};
if (move.ignoreImmunity !== true) {
move.ignoreImmunity['Fighting'] = true;
move.ignoreImmunity['Normal'] = true;
}
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
}
},
name: "Scrappy",
},

screencleaner: {
onStart(pokemon) {
let activated = false;
for (const sideCondition of ['reflect', 'lightscreen', 'auroraveil']) {
for (const side of [pokemon.side, ...pokemon.side.foeSidesWithConditions()]) {
if (side.getSideCondition(sideCondition)) {
if (!activated) {
this.add('-activate', pokemon, 'ability: Screen Cleaner');
activated = true;
}
side.removeSideCondition(sideCondition);
}
}
}
},
name: "Screen Cleaner",
},

seedsower: {
onDamagingHit(damage, target, source, move) {
this.field.setTerrain('grassyterrain');
},

onPreStart(pokemon) {
this.add('-message', 'pokemon','triggered Grassy Terrain! Grass moves are now more powerful! Pokémon restore HP each turn!');
},

name: "Seed Sower",
},

serenegrace: {
onModifyMovePriority: -2,
onModifyMove(move) {
if (move.secondaries) {
this.debug('doubling secondary chance');
for (const secondary of move.secondaries) {
if (secondary.chance) secondary.chance *= 2;
}
}
if (move.self?.chance) move.self.chance *= 2;
},
name: "Serene Grace",
},

shadowshield: {
onSourceModifyDamage(damage, source, target, move) {
if (target.hp >= target.maxhp) {
this.debug('Shadow Shield weaken');
return this.chainModify(0.5);
}
},
name: "Shadow Shield",
},

shadowtag: {
onFoeTrapPokemon(pokemon) {
if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target)) {
pokemon.tryTrap(true);
}
},
onFoeMaybeTrapPokemon(pokemon, source) {
if (!source) source = this.effectState.target;
if (!source || !pokemon.isAdjacent(source)) return;
if (!pokemon.hasAbility('shadowtag')) {
pokemon.maybeTrapped = true;
}
},
name: "Shadow Tag",
},

sharpness: {
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['slicing']) {
this.debug('Shapness boost');
return this.chainModify(1.5);
}
},
name: "Sharpness",
},

shedskin: {
onResidualOrder: 5,
onResidualSubOrder: 3,
onResidual(pokemon) {
if (pokemon.hp && pokemon.status && this.randomChance(33, 100)) {
this.debug('shed skin');
this.add('-activate', pokemon, 'ability: Shed Skin');
pokemon.cureStatus();
}
},
name: "Shed Skin",
},

sheerforce: {
onModifyMove(move, pokemon) {
if (move.secondaries) {
delete move.secondaries;
delete move.self;
if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
move.hasSheerForce = true;
}
},
onBasePowerPriority: 21,
onBasePower(basePower, pokemon, target, move) {
if (move.hasSheerForce) return this.chainModify([133,100]);
},
name: "Sheer Force",
},

shellarmor: {
onCriticalHit: false,
isBreakable: true,
name: "Shell Armor",
},

shielddust: {
onModifySecondaries(secondaries) {
this.debug('Shield Dust prevent secondary');
return secondaries.filter(effect => !!(effect.self || effect.dustproof));
},
isBreakable: true,
name: "Shield Dust",
},

shieldsdown: {
onStart(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed) return;
if (pokemon.hp > pokemon.maxhp / 2) {
if (pokemon.species.forme !== 'Meteor') {
pokemon.formeChange('Minior-Meteor');
}
} else {
if (pokemon.species.forme === 'Meteor') {
pokemon.formeChange(pokemon.set.species);
}
}
},
onResidualOrder: 29,
onResidual(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed || !pokemon.hp) return;
if (pokemon.hp > pokemon.maxhp / 2) {
if (pokemon.species.forme !== 'Meteor') {
pokemon.formeChange('Minior-Meteor');
}
} else {
if (pokemon.species.forme === 'Meteor') {
pokemon.formeChange(pokemon.set.species);
}
}
},
onSetStatus(status, target, source, effect) {
if (target.species.id !== 'miniormeteor' || target.transformed) return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Shields Down');
}
return false;
},
onTryAddVolatile(status, target) {
if (target.species.id !== 'miniormeteor' || target.transformed) return;
if (status.id !== 'yawn') return;
this.add('-immune', target, '[from] ability: Shields Down');
return null;
},
isPermanent: true,
name: "Shields Down",
},

simple: {
onChangeBoost(boost, target, source, effect) {
if (effect && effect.id === 'zpower') return;
let i: BoostID;
for (i in boost) {
boost[i]! *= 2;
}
},
isBreakable: true,
name: "Simple",
},

skilllink: {
onModifyMove(move) {
if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
move.multihit = move.multihit[2];
}
if (move.multiaccuracy) {
delete move.multiaccuracy;
}
},
name: "Skill Link",
},

slowstart: {
onStart(pokemon) {
pokemon.addVolatile('slowstart');
},
onEnd(pokemon) {
delete pokemon.volatiles['slowstart'];
this.add('-end', pokemon, 'Slow Start', '[silent]');
},
condition: {
duration: 5,
onResidualOrder: 28,
onResidualSubOrder: 2,
onStart(target) {
this.add('-start', target, 'ability: Slow Start');
},
onModifyAtkPriority: 5,
onModifyAtk(atk, pokemon) {
return this.chainModify(0.5);
},
onModifySpe(spe, pokemon) {
return this.chainModify(0.5);
},
onEnd(target) {
this.add('-end', target, 'Slow Start');
},
},
name: "Slow Start",
},

slushrush: {
onModifySpe(spe, pokemon) {
if (this.field.isWeather(['hail', 'snow'])) {
return this.chainModify(2);
}
},
name: "Slush Rush",
},

sniper: {
onModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).crit) {
this.debug('Sniper boost');
return this.chainModify(2);
}
},
name: "Sniper",
},

snowcloak: {
onImmunity(type, pokemon) {
if (type === 'hail') return false;
},
onModifyAccuracyPriority: -1,
onModifyAccuracy(accuracy) {
if (typeof accuracy !== 'number') return;
if (this.field.isWeather(['hail', 'snow'])) {
this.debug('Snow Cloak - decreasing accuracy');
return this.chainModify([125, 1000]);
}
},
isBreakable: true,
name: "Snow Cloak",
},

snowwarning: {
onStart(source) {
this.field.setWeather('snow');
},
name: "Snow Warning",
},

whatthehail: {
onStart(source) {
this.field.setWeather('hail');
},
name: "What the Hail",
},

jetstream: {
onStart(source) {
this.field.setWeather('DeltaStream');
},
name: "Jet Stream",
},

solarpower: {
onModifySpAPriority: 5,
onModifySpA(spa, pokemon) {
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
return this.chainModify(1.5);
}
},
onWeather(target, source, effect) {
if (target.hasItem('utilityumbrella')) return;
if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
this.damage(target.baseMaxhp / 8, target, target);
}
},
name: "Solar Power",
},

solidrock: {
onSourceModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).typeMod > 0) {
this.debug('Solid Rock neutralize');
return this.chainModify(0.75);
}
},
isBreakable: true,
name: "Solid Rock",
},

bravesoulheart: {
onAllyFaintPriority: 1.5,
onAllyFaint() {
const target = this.effectState.target;
const bestStat = target.getBestStat(false, true);
if (bestStat === 'atk') {
this.boost({ atk: 1.5 }, target);
} else if (bestStat === 'spa') {
this.boost({ spa: 1.5 }, target);
}
},
name: "Brave Soul-Heart",
},

hasteheart: {
onAllyFaintPriority: 1.5,
onAllyFaint() {
this.boost({spe: 1.5}, this.effectState.target);
},
name: "Haste-Heart",
},

heroicheart: {
onAnyFaintPriority: 1.5,
onAnyFaint() {
this.boost({atk: 1.5}, this.effectState.target);
},
name: "Heroic Heart",
},

soundproof: {
onTryHit(target, source, move) {
if (target !== source && move.flags['sound']) {
this.add('-immune', target, '[from] ability: Soundproof');
return null;
}
},
onAllyTryHitSide(target, source, move) {
if (move.flags['sound']) {
this.add('-immune', this.effectState.target, '[from] ability: Soundproof');
}
},
isBreakable: true,
name: "Soundproof",
},

speedboost: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.activeTurns) {
this.boost({spe: 1.5});
}
},
name: "Speed Boost",
},

boilingrage: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.activeTurns) {
this.boost({atk: 1.5, spe: -2, evasion: -2});
}
},
name: "Boiling Rage",
},

risingpower: {
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.activeTurns) {
this.boost({spa: 1.5, spe: -2, evasion: -2});
}
},
name: "Rising Power",
},

stakeout: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender) {
if (!defender.activeTurns) {
this.debug('Stakeout boost');
return this.chainModify(2);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender) {
if (!defender.activeTurns) {
this.debug('Stakeout boost');
return this.chainModify(2);
}
},
name: "Stakeout",
},

stall: {
onFractionalPriority: -0.1,
name: "Stall",
},

stalwart: {
onModifyMovePriority: 1.5,
onModifyMove(move) {
move.tracksTarget = move.target !== 'scripted';
},
name: "Stalwart",
},

enduringstamina: {
onDamagingHit(damage, target, source, move) {
const def = target.getStat('def', false, true);
const spd = target.getStat('spd', false, true);
const boost: SparseBoostsTable = {};
if (def >= spd) {
boost.def = 1;
} else {
boost.spd = 1;
}
this.boost(boost, target, target, this.dex.abilities.get('enduringstamina'));
},
name: "Enduring Stamina",
},

punchdrunk: {
onDamagingHit(damage, target, source, effect) {
this.boost({spe: 1.5});
},
name: "Endurance",
},

endurance: {
onDamagingHit(damage, target, source, effect) {
this.boost({spd: 1.5});
},
name: "Endurance",
},

stancechange: {
onModifyMovePriority: 1.5,
onModifyMove(move, attacker, defender) {
if (attacker.species.baseSpecies !== 'Aegislash' || attacker.transformed) return;
if (move.category === 'Status' && move.id !== 'kingsshield') return;
const targetForme = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
},
isPermanent: true,
name: "Stance Change",
},

static: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
if (this.randomChance(50, 10)) {
source.trySetStatus('par', target);
}
}
},
name: "Static",
},

steadfast: {
onFlinch(pokemon) {
this.boost({spe: 1.5});
},
name: "Steadfast",
},

steamengine: {
onDamagingHit(damage, target, source, move) {
if (['Water', 'Fire'].includes(move.type)) {
this.boost({spe: 6});
}
},
name: "Steam Engine",
},

steelworker: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Steel') {
this.debug('Steelworker boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Steel') {
this.debug('Steelworker boost');
return this.chainModify(1.5);
}
},
name: "Steelworker",
},

steelyspirit: {
onAllyBasePowerPriority: 22,
onAllyBasePower(basePower, attacker, defender, move) {
if (move.type === 'Steel') {
this.debug('Steely Spirit boost');
return this.chainModify(1.5);
}
},
name: "Steely Spirit",
},

stench: {
onModifyMovePriority: -1,
onModifyMove(move) {
if (move.category !== "Status") {
this.debug('Adding Stench flinch');
if (!move.secondaries) move.secondaries = [];
for (const secondary of move.secondaries) {
if (secondary.volatileStatus === 'flinch') return;
}
move.secondaries.push({
chance: 20,
volatileStatus: 'flinch',
});
}
},
name: "Stench",
},

stickyhold: {
onTakeItem(item, pokemon, source) {
if (!this.activeMove) throw new Error("Battle.activeMove is null");
if (!pokemon.hp || pokemon.item === 'stickybarb') return;
if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
this.add('-activate', pokemon, 'ability: Sticky Hold');
return false;
}
},
isBreakable: true,
name: "Sticky Hold",
},

stormdrain: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Water') {
if (!this.boost({atk: 1.5, spa: 1.5})) {
this.add('-immune', target, '[from] ability: Storm Drain');
}
return null;
}
},
onAnyRedirectTarget(target, source, source2, move) {
if (move.type !== 'Water' || move.flags['pledgecombo']) return;
const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
if (this.validTarget(this.effectState.target, source, redirectTarget)) {
if (move.smartTarget) move.smartTarget = false;
if (this.effectState.target !== target) {
this.add('-activate', this.effectState.target, 'ability: Storm Drain');
}
return this.effectState.target;
}
},
isBreakable: true,
name: "Storm Drain",
},

strongjaw: {
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['bite']) {
return this.chainModify([133,100]);
}
},
name: "Strong Jaw",
},

sturdy: {
onTryHit(pokemon, target, move) {
if (move.ohko) {
this.add('-immune', pokemon, '[from] ability: Sturdy');
return null;
}
},
onDamagePriority: -30,
onDamage(damage, target, source, effect) {
if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
this.add('-ability', target, 'Sturdy');
return target.hp - 1;
}
},
flags: {breakable: 1},
name: "Sturdy",
},

suctioncups: {
onDragOutPriority: 1.5,
onDragOut(pokemon) {
this.add('-activate', pokemon, 'ability: Suction Cups');
return null;
},
isBreakable: true,
name: "Suction Cups",
},

superluck: {
onModifyCritRatio(critRatio) {
return critRatio + 1;
},
name: "Super Luck",
},

supremeoverlord: {
onStart(pokemon) {
if (pokemon.side.totalFainted) {
this.add('-activate', pokemon, 'ability: Supreme Overlord');
const fallen = Math.min(pokemon.side.totalFainted, 1);
this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
this.effectState.fallen = fallen;
}
},
onEnd(pokemon) {
this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
},
onBasePowerPriority: 21,
onBasePower(basePower, attacker, defender, move) {
if (this.effectState.fallen) {
const powMod = [4096, 4710, 5120, 6144, 6144, 6144];
this.debug(`Supreme Overlord boost: ${powMod[this.effectState.fallen]}/4096`);
return this.chainModify([powMod[this.effectState.fallen], 4096]);
}
},
name: "Supreme Overlord",
},

surgesurfer: {
onModifySpe(spe) {
if (this.field.isTerrain('electricterrain')) {
return this.chainModify(2);
}
},
name: "Surge Surfer",
},

swarm: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 4) {
this.debug('Swarm boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 4) {
this.debug('Swarm boost');
return this.chainModify(1.5);
}
},
name: "Swarm",
},

sweetveil: {
name: "Sweet Veil",
onAllySetStatus(status, target, source, effect) {
if (status.id === 'slp') {
this.debug('Sweet Veil interrupts sleep');
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
return null;
}
},
onAllyTryAddVolatile(status, target) {
if (status.id === 'yawn') {
this.debug('Sweet Veil blocking yawn');
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
return null;
}
},
isBreakable: true,
},

frostveil: {
name: "Frost Veil",
onAllySetStatus(status, target, source, effect) {
if (status.id === 'frz') {
this.debug('Frost Veil interrupts freeze');
const effectHolder = this.effectState.target;
this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
return null;
}
},
isBreakable: true,
},

surfrush: {
onModifySpe(spe, pokemon) {
if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
return this.chainModify(2);
}
},
name: "Surf Rush",
},

symbiosis: {
onAllyAfterUseItem(item, pokemon) {
if (pokemon.switchFlag) return;
const source = this.effectState.target;
const myItem = source.takeItem();
if (!myItem) return;
if (
!this.singleEvent('TakeItem', myItem, source.itemState, pokemon, source, this.effect, myItem) ||
!pokemon.setItem(myItem)
) {
source.item = myItem.id;
return;
}
this.add('-activate', source, 'ability: Symbiosis', myItem, '[of] ' + pokemon);
},
name: "Symbiosis",
},

synchronize: {
onAfterSetStatus(status, target, source, effect) {
if (!source || source === target) return;
if (effect && effect.id === 'toxicspikes') return;
if (status.id === 'slp' || status.id === 'frz') return;
this.add('-activate', target, 'ability: Synchronize');
source.trySetStatus(status, target, {status: status.id, id: 'synchronize'} as Effect);
},
name: "Synchronize",
},

swordofruin: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Sword of Ruin');
},
onAnyModifyDef(def, target, source, move) {
const abilityHolder = this.effectState.target;
if (target.hasAbility('Sword of Ruin')) return;
if (!move.ruinedDef?.hasAbility('Sword of Ruin')) move.ruinedDef = abilityHolder;
if (move.ruinedDef !== abilityHolder) return;
this.debug('Sword of Ruin Def drop');
return this.chainModify(0.66);
},
name: "Sword of Ruin",
},

sheildofruin: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Sheild of Ruin');
},
onAnyModifyDef(def, target, source, move) {
const abilityHolder = this.effectState.target;
if (target.hasAbility('Sword of Ruin')) return;
if (!move.ruinedDef?.hasAbility('Sword of Ruin')) move.ruinedSpe = abilityHolder;
if (move.ruinedDef !== abilityHolder) return;
this.debug('Sheild of Ruin Spe drop');
return this.chainModify(0.66);
},
name: "Sword of Ruin",
},

tabletsofruin: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Tablets of Ruin');
},
onAnyModifyAtk(atk, source, target, move) {
const abilityHolder = this.effectState.target;
if (source.hasAbility('Tablets of Ruin')) return;
if (!move.ruinedAtk) move.ruinedAtk = abilityHolder;
if (move.ruinedAtk !== abilityHolder) return;
this.debug('Tablets of Ruin Atk drop');
return this.chainModify(0.66);
},
name: "Tablets of Ruin",
},

tangledfeet: {
onModifyAccuracyPriority: -1,
onModifyAccuracy(accuracy, target) {
if (typeof accuracy !== 'number') return;
if (target?.volatiles['confusion']) {
this.debug('Tangled Feet - decreasing accuracy');
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Tangled Feet",
},

tanglinghair: {
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target, true)) {
this.add('-ability', target, 'Tangling Hair');
this.boost({spe: -1}, source, target, null, true);
}
},
name: "Tangling Hair",
},

technician: {
onBasePowerPriority: 30,
onBasePower(basePower, attacker, defender, move) {
const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
this.debug('Base Power: ' + basePowerAfterMultiplier);
if (basePowerAfterMultiplier <= 60) {
this.debug('Technician boost');
return this.chainModify(1.5);
}
},
name: "Technician",
},

telepathy: {
onTryHit(target, source, move) {
if (target !== source && target.isAlly(source) && move.category !== 'Status') {
this.add('-activate', target, 'ability: Telepathy');
return null;
}
},
isBreakable: true,
name: "Telepathy",
},

teravolt: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Teravolt');
},
onModifyMove(move) {
move.ignoreAbility = true;
},
name: "Teravolt",
},

thermalexchange: {
onDamagingHit(damage, target, source, move) {
if (move.type === 'Fire') {
const bestStat = target.getBestStat(false, true);
if (bestStat === 'atk') {
this.boost({ atk: 1.5 });
} else if (bestStat === 'spa') {
this.boost({ spa: 1.5 });
}
}
},
onUpdate(pokemon) {
if (pokemon.status === 'brn') {
this.add('-activate', pokemon, 'ability: Thermal Exchange');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'brn') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Thermal Exchange');
}
return false;
},
name: "Thermal Exchange",
},

thickfat: {
onSourceModifyAtkPriority: 6,
onSourceModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Ice' || move.type === 'Fire') {
this.debug('Thick Fat weaken');
return this.chainModify(0.5);
}
},
onSourceModifySpAPriority: 5,
onSourceModifySpA(atk, attacker, defender, move) {
if (move.type === 'Ice' || move.type === 'Fire') {
this.debug('Thick Fat weaken');
return this.chainModify(0.5);
}
},
isBreakable: true,
name: "Thick Fat",
},

tintedlens: {
onModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).typeMod < 0) {
this.debug('Tinted Lens boost');
return this.chainModify(2);
}
},
name: "Tinted Lens",
},

torrent: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Torrent boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 2) {
this.debug('Torrent boost');
return this.chainModify(1.5);
}
},
name: "Torrent",
},

toughclaws: {
onBasePowerPriority: 21,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['contact']) {
return this.chainModify([133,100]);
}
},
name: "Tough Claws",
},

toxicboost: {
onPreStart(pokemon) {
this.add('-message', `${pokemon.name} has venom running through their veins!`);
},
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (attacker.status === 'tox') {
const bestStat = attacker.getBestStat(false, true);
if ((move.category === 'Special' && bestStat === 'spa') || (move.category === 'Physical' && bestStat === 'atk')) {
this.chainModify(1.5);
}
}
},
name: "Toxic Boost",
},

toxicdebris: {
onDamagingHit(damage, target, source, move) {
const side = source.isAlly(target) ? source.side.foe : source.side;
const toxicSpikes = side.sideConditions['toxicspikes'];
if (move.category === 'Physical' && (!toxicSpikes || toxicSpikes.layers < 2)) {
this.add('-activate', target, 'ability: Toxic Debris');
side.addSideCondition('toxicspikes', target);
}
},
name: "Toxic Debris",
},

stealthyspikedebris: {
onDamagingHit(damage, target, source, move) {
const side = source.isAlly(target) ? source.side.foe : source.side;
const stealthrock= side.sideConditions['stealthrock'];
if (move.category === 'Physical' && (!stealthrock|| stealthrock.layers < 2)) {
this.add('-activate', target, 'ability: Stealthy Spike Debris');
side.addSideCondition('stealthrock', target);
}
},
name: "Stealthy Spike Debris",
},

trace: {
onStart(pokemon) {
if (pokemon.adjacentFoes().some(foeActive => foeActive.ability === 'noability')) {
this.effectState.gaveUp = true;
}
if (pokemon.hasItem('Ability Shield')) {
this.add('-block', pokemon, 'item: Ability Shield');
this.effectState.gaveUp = true;
}
},
onUpdate(pokemon) {
if (!pokemon.isStarted || this.effectState.gaveUp) return;
const possibleTargets = pokemon.adjacentFoes().filter(target => (
!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
));
if (!possibleTargets.length) return;

const target = this.sample(possibleTargets);
const ability = target.getAbility();
if (pokemon.setAbility(ability)) {
this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
}
},
name: "Trace",
},

transistor: {
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Electric') {
this.debug('Transistor boost');
return this.chainModify([150,100]);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Electric') {
this.debug('Transistor boost');
return this.chainModify([150,100]);
}
},
name: "Transistor",
},

triage: {
onModifyPriority(priority, pokemon, target, move) {
if (move?.flags['heal']) return priority + 3;
},
name: "Triage",
},

truant: {
onStart(pokemon) {
pokemon.removeVolatile('truant');
if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.queue.willMove(pokemon))) {
pokemon.addVolatile('truant');
}
},
onBeforeMovePriority: 9,
onBeforeMove(pokemon) {
if (pokemon.removeVolatile('truant')) {
this.add('cant', pokemon, 'ability: Truant');
return false;
}
pokemon.addVolatile('truant');
},
condition: {},
name: "Truant",
},

turboblaze: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Turboblaze');
},
onModifyMove(move) {
move.ignoreAbility = true;
},
name: "Turboblaze",
},

unaware: {
name: "Unaware",
onAnyModifyBoost(boosts, pokemon) {
const unawareUser = this.effectState.target;
if (unawareUser === pokemon) return;
if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
boosts['def'] = 0;
boosts['spd'] = 0;
boosts['evasion'] = 0;
}
if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
boosts['atk'] = 0;
boosts['def'] = 0;
boosts['spa'] = 0;
boosts['accuracy'] = 0;
}
},
isBreakable: true,
},

unburden: {
onAfterUseItem(item, pokemon) {
if (pokemon !== this.effectState.target) return;
pokemon.addVolatile('unburden');
},
onTakeItem(item, pokemon) {
pokemon.addVolatile('unburden');
},
onEnd(pokemon) {
pokemon.removeVolatile('unburden');
},
condition: {
onModifySpe(spe, pokemon) {
if (!pokemon.item && !pokemon.ignoringAbility()) {
return this.chainModify(1.5);
}
},
},
name: "Unburden",
},

unnerve: {
onPreStart(pokemon) {
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onStart(pokemon) {
if (this.effectState.unnerved) return;
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onEnd() {
this.effectState.unnerved = false;
},
onFoeTryEatItem() {
return !this.effectState.unnerved;
},
name: "Unnerve",
},

unseenfist: {
onModifyMove(move) {
if (move.flags['contact']) delete move.flags['protect'];
},
name: "Unseen Fist",
},

vesselofruin: {
onStart(pokemon) {
if (this.suppressingAbility(pokemon)) return;
this.add('-ability', pokemon, 'Vessel of Ruin');
},
onAnyModifySpA(spa, source, target, move) {
const abilityHolder = this.effectState.target;
if (source.hasAbility('Vessel of Ruin')) return;
if (!move.ruinedSpA) move.ruinedSpA = abilityHolder;
if (move.ruinedSpA !== abilityHolder) return;
this.debug('Vessel of Ruin SpA drop');
return this.chainModify(0.66);
},
name: "Vessel of Ruin",
},

victorystar: {
onAnyModifyAccuracyPriority: -1,
onAnyModifyAccuracy(accuracy, target, source) {
if (source.isAlly(this.effectState.target) && typeof accuracy === 'number') {
return this.chainModify([4506, 4096]);
}
},
name: "Victory Star",
},

vitalspirit: {
onUpdate(pokemon) {
if (pokemon.status === 'slp') {
this.add('-activate', pokemon, 'ability: Vital Spirit');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'slp') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Vital Spirit');
}
return false;
},
isBreakable: true,
name: "Vital Spirit",
},

voltabsorb: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Electric') {
if (!this.heal(target.baseMaxhp / 4)) {
this.add('-immune', target, '[from] ability: Volt Absorb');
}
return null;
}
},
isBreakable: true,
name: "Volt Absorb",
},

wanderingspirit: {
name: "Wandering Spirit",
},

waterabsorb: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Water') {
if (!this.heal(target.baseMaxhp / 4)) {
this.add('-immune', target, '[from] ability: Water Absorb');
}
return null;
}
},
isBreakable: true,
name: "Water Absorb",
},

waterbubble: {
onSourceModifyAtkPriority: 5,
onSourceModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Fire') {
return this.chainModify(0.5);
}
},
onSourceModifySpAPriority: 5,
onSourceModifySpA(atk, attacker, defender, move) {
if (move.type === 'Fire') {
return this.chainModify(0.5);
}
},
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Water') {
return this.chainModify(2);
}
},
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Water') {
return this.chainModify(2);
}
},
onUpdate(pokemon) {
if (pokemon.status === 'brn') {
this.add('-activate', pokemon, 'ability: Water Bubble');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'brn') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Water Bubble');
}
return false;
},
isBreakable: true,
name: "Water Bubble",
},

watercompaction: {
onDamagingHit(damage, target, source, move) {
if (move.type === 'Water') {
this.boost({def: 1.5, spd: 1.5});
}
},
name: "Water Compaction",
},

waterveil: {
onUpdate(pokemon) {
if (pokemon.status === 'brn') {
this.add('-activate', pokemon, 'ability: Water Veil');
pokemon.cureStatus();
}
},
onSetStatus(status, target, source, effect) {
if (status.id !== 'brn') return;
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Water Veil');
}
return false;
},
isBreakable: true,
name: "Water Veil",
},

weakmagearmor: {
onDamagingHit(damage, target, source, move) {
if (move.category === 'Physical') {
this.boost({def: -1, spe: 2}, target, target);
}
if (move.category === 'Special') {
this.boost({spd: -1, spe: 2}, target, target);
}
},
name: "Weak Mage Armor",
},

wellbakedbody: {
onTryHit(target, source, move) {
if (target !== source && move.type === 'Fire') {
if (!this.boost({def: 1.5, spd: 1.5})) {
this.add('-immune', target, '[from] ability: Well-Baked Body');
}
return null;
}
},
isBreakable: true,
name: "Well-Baked Body",
},

whitesmoke: {
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
this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
}
},
isBreakable: true,
name: "White Smoke",
},

unstablepower: {
onPreStart(pokemon) {
this.add('-message', pokemon, 'glows with an unstable energy.');
},
onResidualOrder: 26,
onResidualSubOrder: 1.5,
onResidual(pokemon) {
if (!pokemon.hp) return;

const stats = ['atk', 'spa', 'spe'];
const randomStat = this.sample(stats);
this.boost({[randomStat]: 1.5}, pokemon);

if (this.randomChance(20, 100)) {
this.add('-message', `${pokemon.name}'s unstable power caused it to self-destruct!`);
const damage = pokemon.hp;
pokemon.faint();

const targets = pokemon.side.foe.active;
for (const target of targets) {
if (target && !target.fainted) {
this.damage(damage, target, pokemon, 'Unstable Power');
}
}
}
},
name: "Unstable Power",
},

wimpout: {
onEmergencyExit(target) {
if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
for (const side of this.sides) {
for (const active of side.active) {
active.switchFlag = false;
}
}
target.switchFlag = true;
this.add('-activate', target, 'ability: Wimp Out');
},
name: "Wimp Out",
},

windpower: {
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (move.flags['wind']) {
target.addVolatile('charge');
}
},
onAllySideConditionStart(target, source, sideCondition) {
const pokemon = this.effectState.target;
if (sideCondition.id === 'tailwind') {
pokemon.addVolatile('charge');
}
},
name: "Wind Power",
},

windrider: {
onStart(pokemon) {
if (pokemon.side.sideConditions['tailwind']) {
this.boost({atk: 1.5}, pokemon, pokemon);
}
},
onTryHit(target, source, move) {
if (target !== source && move.flags['wind']) {
if (!this.boost({atk: 1.5}, target, target)) {
this.add('-immune', target, '[from] ability: Wind Rider');
}
return null;
}
},
onAllySideConditionStart(target, source, sideCondition) {
const pokemon = this.effectState.target;
if (sideCondition.id === 'tailwind') {
this.boost({atk: 1.5}, pokemon, pokemon);
}
},
isBreakable: true,
name: "Wind Rider",
},

wonderguard: {
onTryHit(target, source, move) {
if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
this.debug('Wonder Guard immunity: ' + move.id);
if (target.runEffectiveness(move) <= 0) {
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-immune', target, '[from] ability: Wonder Guard');
}
return null;
}
},
isBreakable: true,
name: "Wonder Guard",
},

wonderskin: {
onModifyAccuracyPriority: 1.50,
onModifyAccuracy(accuracy, target, source, move) {
if (move.category === 'Status' && typeof accuracy === 'number') {
this.debug('Wonder Skin - setting accuracy to 50');
return 50;
}
},
isBreakable: true,
name: "Wonder Skin",
},

zenmode: {
onResidualOrder: 29,
onResidual(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
return;
}
if (pokemon.hp <= pokemon.maxhp / 2 && !['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
pokemon.addVolatile('zenmode');
} else if (pokemon.hp > pokemon.maxhp / 2 && ['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
pokemon.addVolatile('zenmode');
pokemon.removeVolatile('zenmode');
}
},
onEnd(pokemon) {
if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
pokemon.transformed = false;
delete pokemon.volatiles['zenmode'];
if (pokemon.species.baseSpecies === 'Darmanitan' && pokemon.species.battleOnly) {
pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
}
},
condition: {
onStart(pokemon) {
if (!pokemon.species.name.includes('Galar')) {
if (pokemon.species.id !== 'darmanitanzen') pokemon.formeChange('Darmanitan-Zen');
} else {
if (pokemon.species.id !== 'darmanitangalarzen') pokemon.formeChange('Darmanitan-Galar-Zen');
}
},
onEnd(pokemon) {
if (['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
pokemon.formeChange(pokemon.species.battleOnly as string);
}
},
},
isPermanent: true,
name: "Zen Mode",
},

zerotohero: {
onSwitchOut(pokemon) {
if (pokemon.baseSpecies.baseSpecies !== 'Palafin' || pokemon.transformed) return;
if (pokemon.species.forme !== 'Hero') {
pokemon.formeChange('Palafin-Hero', this.effect, true);
}
},
onSwitchIn() {
this.effectState.switchingIn = true;
},
onStart(pokemon) {
if (!this.effectState.switchingIn) return;
this.effectState.switchingIn = false;
if (pokemon.baseSpecies.baseSpecies !== 'Palafin' || pokemon.transformed) return;
if (!this.effectState.heroMessageDisplayed && pokemon.species.forme === 'Hero') {
this.add('-activate', pokemon, 'ability: Zero to Hero');
this.effectState.heroMessageDisplayed = true;
}
},
isPermanent: true,
name: "Zero to Hero",
},

mountaineer: {
onDamage(damage, target, source, effect) {
if (effect && effect.id === 'stealthrock') {
return false;
}
},
onTryHit(target, source, move) {
if (move.type === 'Rock' && !target.activeTurns) {
this.add('-immune', target, '[from] ability: Mountaineer');
return null;
}
},
isNonstandard: "CAP",
isBreakable: true,
name: "Mountaineer",
},

rebound: {
isNonstandard: "CAP",
name: "Rebound",
onTryHitPriority: 1.5,
onTryHit(target, source, move) {
if (this.effectState.target.activeTurns) return;

if (target === source || move.hasBounced || !move.flags['reflectable']) {
return;
}
const newMove = this.dex.getActiveMove(move.id);
newMove.hasBounced = true;
this.actions.useMove(newMove, target, source);
return null;
},
onAllyTryHitSide(target, source, move) {
if (this.effectState.target.activeTurns) return;

if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
return;
}
const newMove = this.dex.getActiveMove(move.id);
newMove.hasBounced = true;
this.actions.useMove(newMove, this.effectState.target, source);
return null;
},
condition: {
duration: 1.5,
},
isBreakable: true,
},

persistent: {
isNonstandard: "CAP",
name: "Persistent",
},

hospitality: {
onStart(pokemon) {
for (const ally of pokemon.adjacentAllies()) {
this.heal(ally.baseMaxhp / 4, ally, pokemon);
}
},
name: "Hospitality",
},

mindseye: {
onTryBoost(boost, target, source, effect) {
if (source && target === source) return;
if (boost.accuracy && boost.accuracy < 0) {
delete boost.accuracy;
if (!(effect as ActiveMove).secondaries) {
this.add("-fail", target, "unboost", "accuracy", "[from] ability: Mind's Eye", "[of] " + target);
}
}
},
onModifyMovePriority: -5,
onModifyMove(move) {
move.ignoreEvasion = true;
if (!move.ignoreImmunity) move.ignoreImmunity = {};
if (move.ignoreImmunity !== true) {
move.ignoreImmunity['Fighting'] = true;
move.ignoreImmunity['Normal'] = true;
}
},
flags: {breakable: 1.5},
name: "Mind's Eye",
},

supersweetsyrup: {
onStart(pokemon) {
if (pokemon.syrupTriggered) return;
pokemon.syrupTriggered = true;
this.add('-ability', pokemon, 'Supersweet Syrup');
let activated = false;
for (const target of pokemon.adjacentFoes()) {
if (!activated) {
this.add('-ability', pokemon, 'Supersweet Syrup', 'boost');
activated = true;
}
if (target.volatiles['substitute']) {
this.add('-immune', target);
} else {
this.boost({evasion: -1}, target, pokemon, null, true);
}
}
},
name: "Supersweet Syrup",
},

toxicchain: {
onSourceDamagingHit(damage, target, source, move) {
if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
if (this.randomChance(3, 10)) {
target.trySetStatus('tox', source);
}
},
name: "Toxic Chain",
},

soothingpresence: {
onStart(pokemon) {
this.add('-ability', pokemon, 'Soothing Presence');
},
onResidualOrder: 5,
onResidual(pokemon) {
const allies = pokemon.side.pokemon.filter(ally => ally !== pokemon);
for (const allyPokemon of allies) {
this.heal(allyPokemon.baseMaxhp / 20, allyPokemon, pokemon);
}
this.heal(pokemon.baseMaxhp / 20, pokemon, pokemon);
},
name: "Soothing Presence"
},

regenerative: {
onResidualOrder: 5,
onResidual(pokemon) {
if (pokemon.hp <= pokemon.maxhp / 2) {
this.heal(pokemon.baseMaxhp / 20, pokemon, pokemon);
}
},
name: "Regenerative",
},

elementalabsorption: {
onTryHit: function (target, source, move) {
if (move.type === target.types[0] || move.type === target.types[1]) {
this.boost({[target.getStat('spa') > target.getStat('atk') ? 'spa' : 'atk']: 1.5});
return;
}
return;
},
name: "Elemental Absorption"
},

destinysgambit: {
onResidualOrder: 27,
onResidualSubOrder: 1.5,
onResidual: function (pokemon) {
let stats = ['atk', 'def', 'spa', 'spd', 'spe'];
let randomStat = this.sample(stats);
let randomHP = this.random(10, 25) / 100;
this.boost({[randomStat]: 1.5}, pokemon);
this.damage(pokemon.maxhp * randomHP, pokemon, pokemon);
},
name: "Destiny's Gambit",
},

venturara: {
onPreStart(pokemon) {
this.add('-message', 'aint got time to bleed.');
},
onUpdate(pokemon) {
if (pokemon.volatiles['bleeding']) {
this.add('-activate', pokemon, 'ability: Venturara');
pokemon.removeVolatile('bleeding');
}
},
onTryAddVolatile(status, pokemon) {
if (status.id === 'bleeding') return null;
},
onHit(target, source, move) {
if (move?.volatileStatus === 'bleeding') {
this.add('-immune', target, 'bleeding', '[from] ability: Venturara');
}
},
onTryBoost(boost, target, source, effect) {
if (effect.name === 'Intimidate' && boost.atk) {
delete boost.atk;
this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Venturara', '[of] ' + target);
}
},
isBreakable: true,
name: "Venturara",
},

rotombola: {
onResidualOrder: 999,
onResidual(pokemon) {
if (!this.turn) return;
const forms = [
'Rotom',
'Rotom-Wash',
'Rotom-Heat',
'Rotom-Frost',
'Rotom-Fan',
'Rotom-Mow',
];
const currentForm = pokemon.species.name;
const possibleForms = forms.filter(f => f !== currentForm);
const targetForme = this.sample(possibleForms);
if (currentForm !== targetForme) {
pokemon.formeChange(targetForme, this.effect, true);
this.add('-formechange', pokemon, targetForme);
}
},
isPermanent: true,
name: "Rotombola",
},

slowbros: {
onModifyMovePriority: 1.5,
onModifyMove(move, attacker, defender) {
if (attacker.species.baseSpecies !== 'Slowbro' || attacker.transformed) return;
if (move.category === 'Status' && move.id !== 'slowbrotect') return;
const targetForme = (move.id === 'slowbrotect' ? 'Slowbro-Galar' : 'Slowbro');
if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
},
isPermanent: true,
name: "Slow Bros",
},

dusktodawn: {
onModifyMovePriority: 1.5,
onModifyMove(move, attacker, defender) {
if (attacker.transformed) return;
if (attacker.species.baseSpecies !== 'Lunatone' && attacker.species.baseSpecies !== 'Solrock') return;
if (move.id === 'dawn') {
if (attacker.species.baseSpecies === 'Lunatone' && attacker.species.name !== 'Solrock') {
attacker.formeChange('Solrock', this.effect, true);
}
} else if (move.id === 'dusk') {
if (attacker.species.baseSpecies === 'Solrock' && attacker.species.name !== 'Lunatone') {
attacker.formeChange('Lunatone', this.effect, true);
}
}
},
isPermanent: true,
name: "Dusk to Dawn",
},

ghostlygoodbye: {
onUpdate(pokemon) {
if (pokemon.species.name === 'Ninjask' && pokemon.hp / pokemon.maxhp <= 0.10) {
this.add('-message', `${pokemon.name} is transforming into Shedinja!`);
pokemon.formeChange('Shedinja');
pokemon.setAbility('wonderguard');
this.add('-ability', pokemon, 'Wonder Guard');
}
},
name: "Ghostly Goodbye",
},

vampirictendencies: {
name: "Vampiric Tendencies",
onResidualOrder: 26,
onResidual(pokemon) {
if (!pokemon.hp) return;
let bleedingFoes = 0;
for (const foe of pokemon.foes()) {
if (foe && foe.hp && foe.volatiles['bleeding']) {
bleedingFoes++;
}
}
if (!bleedingFoes) return;
const healFraction = Math.min(bleedingFoes * 0.1111, 0.33);
const healAmount = Math.floor(pokemon.maxhp * healFraction);
if (healAmount > 0) {
this.heal(healAmount, pokemon);
this.add('-activate', pokemon, 'ability: Vampiric Tendencies');
}
},
},

toxicblood: {
name: "Toxic Blood",
onDamagingHit(damage, target, source, move) {
if (!target.volatiles['bleeding']) return;
if (!source || source.fainted) return;
if (move.flags && move.flags['bite']) {
this.add('-ability', target, 'Toxic Blood');
this.add('-message', 'Toxic blood splashes everywhere!');
source.trySetStatus('tox', target);
return;
}
if (move.flags && move.flags['contact']) {
this.add('-ability', target, 'Toxic Blood');
this.add('-message', 'Toxic blood splashes everywhere!');
source.trySetStatus('tox', target);
}
},
},

axolargel: {
onPreStart(pokemon) {
this.add('-message', 'Axolargel is very Cold & hates Mold.');
this.add('-ability', pokemon, 'Mold Breaker');
this.add('-ability', pokemon, 'Refrigerate');
},
onModifyMove(move) {
move.ignoreAbility = true;
},
onModifyType(move, pokemon) {
const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
];
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Ice';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Axolargel",
},

ugly: {
onPreStart(pokemon) {
this.add('-message', 'UGLY is VERY angry.');
this.add('-ability', pokemon, 'Sniper');
this.add('-ability', pokemon, 'Anger Point');
},
onModifyDamage(damage, source, target, move) {
if (target.getMoveHitData(move).crit) {
this.debug('Sniper boost');
return this.chainModify(1.5);
}
},
onHit(target, source, move) {
if (!target.hp) return;
if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
this.boost({atk: 12, spa: 12}, target, target);
}
},
name: "UGLY",
},

incendiarykong: {
onPreStart(pokemon) {
this.add('-message', 'Incendiary Kong has fists of steel. *POW!*');
this.add('-ability', pokemon, 'Iron Fist');
this.add('-ability', pokemon, 'Sand Stream');
},
onBasePowerPriority: 23,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['punch']) {
this.debug('Iron Fist boost');
return this.chainModify([133,100]);
}
},
onStart(source) {
this.field.setWeather('sandstorm');
},
name: "Incendiary Kong",
},

beauty: {
onPreStart(pokemon) {
this.add('-message', 'The Toxic Queen is here!');
this.add('-ability', pokemon, 'Queenly Majesty');
this.add('-ability', pokemon, 'Toxic Boost');
},
onFoeTryMove(target, source, move) {
const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
return;
}
const dazzlingHolder = this.effectState.target;
if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
this.attrLastMove('[still]');
this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
return false;
}
},
isBreakable: true,
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (attacker.status === 'tox') {
const bestStat = attacker.getBestStat(false, true);
if ((move.category === 'Special' && bestStat === 'spa') || (move.category === 'Physical' && bestStat === 'atk')) {
this.chainModify(1.5);
}
}
},
name: "BEAUTY",
},

flicker: {
onPreStart(pokemon) {
this.add('-message', 'Flicker can do this all day.');
this.add('-ability', pokemon, 'Enduring Stamina Stamina');
this.add('-ability', pokemon, 'Steely Spirit');
},
onDamagingHit(damage, target, source, move) {
const def = target.getStat('def', false, true);
const spd = target.getStat('spd', false, true);
const boost: SparseBoostsTable = {};
if (def >= spd) {
boost.def = 1;
} else {
boost.spd = 1;
}
this.boost(boost, target, target, this.dex.abilities.get('flicker'));
},
onAllyBasePowerPriority: 22,
onAllyBasePower(basePower, attacker, defender, move) {
if (move.type === 'Steel') {
this.debug('Steely Spirit boost');
return this.chainModify(1.5);
}
},
name: "Flicker",
},

globaljones: {
onPreStart(pokemon) {
this.add('-message', 'Global Jones is here to take over the world');
this.add('-ability', pokemon, 'Unburden');
this.add('-ability', pokemon, 'Yoltoorshul');
},
onAfterUseItem(item, pokemon) {
if (pokemon !== this.effectState.target) return;
pokemon.addVolatile('unburden');
},
onTakeItem(item, pokemon) {
pokemon.addVolatile('unburden');
},
onEnd(pokemon) {
pokemon.removeVolatile('unburden');
},
condition: {
onModifySpe(spe, pokemon) {
if (!pokemon.item && !pokemon.ignoringAbility()) {
return this.chainModify(2);
}
},
},
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) { // hardcode
move.type = 'Fire';
}
},
name: "Global Jones",
},

strongbad: {
onPreStart(pokemon) {
this.add('-message', 'Strong Bad is on Fire!');
this.add('-ability', pokemon, 'Flash Fire');
this.add('-ability', pokemon, 'Umbralate');
},
onTryHit(target, source, move) {
if (target !== source && move.type === 'Fire') {
move.accuracy = true;
if (!target.addVolatile('flashfire')) {
this.add('-immune', target, '[from] ability: Flash Fire');
}
return null;
}
},
onEnd(pokemon) {
pokemon.removeVolatile('flashfire');
},
condition: {
noCopy: true,
onStart(target) {
this.add('-start', target, 'ability: Flash Fire');
},
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
this.debug('Flash Fire boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
this.debug('Flash Fire boost');
return this.chainModify(1.5);
}
},
onEnd(target) {
this.add('-end', target, 'ability: Flash Fire', '[silent]');
},
},
isBreakable: true,
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
move.type = 'Dark';
move.typeChangerBoosted = this.effect;
}
},
onBasePowerPriority: 23,
onBasePower(basePower, pokemon, target, move) {
if (move.typeChangerBoosted === this.effect) return this.chainModify([125, 100]);
},
name: "Strong Bad",
},

jonsi: {
onPreStart(pokemon) {
this.add('-message', 'The Ice Queen approaches');
this.add('-ability', pokemon, 'Ice Body');
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onStart(pokemon) {
if (this.effectState.unnerved) return;
this.add('-ability', pokemon, 'Unnerve');
this.effectState.unnerved = true;
},
onEnd() {
this.effectState.unnerved = false;
},
onFoeTryEatItem() {
return !this.effectState.unnerved;
},
onWeather(target, source, effect) {
if (effect.id === 'hail' || effect.id === 'snow') {
this.heal(target.baseMaxhp / 9);
}
},
onImmunity(type, pokemon) {
if (type === 'hail') return false;
},
name: "Jonsi",
},

knievel: {
onPreStart(pokemon) {
this.add('-message', 'Fury & focus surge through Kenivals veins!');
this.add('-ability', pokemon, 'Tough Claws');
this.add('-ability', pokemon, 'Kentaromiura');
},
onBasePowerPriority: 21,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['contact']) {
return this.chainModify([133,100]);
}
},
onDamage(damage, target, source, effect) {
if (
effect.effectType === "Move" &&
!effect.multihit &&
(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
) {
this.effectState.checkedBerserk = false;
} else {
this.effectState.checkedBerserk = true;
}
},
onAfterMoveSecondary(target, source, move) {
this.effectState.checkedkentaromiura = true;
if (!source || source === target || !target.hp || !move.totalDamage) return;
const lastAttackedBy = target.getLastAttackedBy();
if (!lastAttackedBy) return;
const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
const bestStat = target.getBestStat();
if (bestStat === 'atk' || bestStat === 'spa') {
this.boost({ [bestStat]: 1.5 }, target, target);
}
}
},
name: "Knievel",
},

rukiaryuko: {
onPreStart(pokemon) {
this.add('-message', 'B A N K A I!');
this.add('-ability', pokemon, 'Sharpness');
this.add('-ability', pokemon, 'Rough Skin');
},
onBasePowerPriority: 1.59,
onBasePower(basePower, attacker, defender, move) {
if (move.flags['slicing']) {
this.debug('Shapness boost');
return this.chainModify(1.5);
}
},
onDamagingHitOrder: 1.5,
onDamagingHit(damage, target, source, move) {
if (this.checkMoveMakesContact(move, source, target, true)) {
this.damage(source.baseMaxhp / 5, source, target);
}
},
name: "Rukia Ryuko",
},

happywol: {
onPreStart(pokemon) {
this.add('-message', 'Wol is just happy to be here!');
this.add('-ability', pokemon, 'Serene Grace');
this.add('-ability', pokemon, 'Neuroforce');
},
onModifyMovePriority: -2,
onModifyMove(move) {
if (move.secondaries) {
this.debug('doubling secondary chance');
for (const secondary of move.secondaries) {
if (secondary.chance) secondary.chance *= 2;
}
}
if (move.self?.chance) move.self.chance *= 2;
},
onModifyDamage(damage, source, target, move) {
if (move && target.getMoveHitData(move).typeMod > 0) {
return this.chainModify([133,100]);
}
},
name: "Happy Wol",
},

moira: {
onPreStart(pokemon) {
this.add('-message', 'Moira glides onto the scene!');
this.add('-ability', pokemon, 'Grassy Surge');
this.add('-ability', pokemon, 'Leaf Guard');
this.add('-message', 'pokemon','triggered Grassy Terrain! Grass moves are now more powerful! Pokémon restore HP each turn!');
},
onStart(source) {
this.field.setTerrain('grassyterrain');
},
onSetStatus(status, target, source, effect) {
if (['sandstorm','hail','snow','sunnyday','desolateland','raindance','primordialsea'].includes(target.effectiveWeather())) {
if ((effect as Move)?.status) {
this.add('-immune', target, '[from] ability: Leaf Guard');
}
return false;
}
},
onTryAddVolatile(status, target) {
if (status.id === 'yawn' && ['sandstorm','hail','snow','sunnyday','desolateland','raindance','primordialsea'].includes(target.effectiveWeather())) {
this.add('-immune', target, '[from] ability: Leaf Guard');
return null;
}
},
isBreakable: true,
name: "Moira",
},

yancha: {
onPreStart(pokemon) {
this.add('-message', 'Yancha is a lightning rod for success!');
this.add('-ability', pokemon, 'Speed Boost');
this.add('-ability', pokemon, 'Lightning Rod');
},
onResidualOrder: 28,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.activeTurns) {
this.boost({spe: 1.5});
}
},
onTryHit(target, source, move) {
if (target !== source && move.type === 'Electric') {
const bestStat = target.getBestStat(false, true);
if (!this.boost(bestStat === 'atk' ? { atk: 1.5 } : { spa: 1.5 })) {
this.add('-immune', target, '[from] ability: Lightning Rod');
}
return null;
}
},
onAnyRedirectTarget(target, source, source2, move) {
if (move.type !== 'Electric' || move.flags['pledgecombo']) return;
const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
if (this.validTarget(this.effectState.target, source, redirectTarget)) {
if (move.smartTarget) move.smartTarget = false;
if (this.effectState.target !== target) {
this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
}
return this.effectState.target;
}
},
isBreakable: true,
name: "Yancha",
},

dangdaedangdang: {
onPreStart(pokemon) {
this.add('-message', '🎵Dangdadangdang!');
this.add('-ability', pokemon, 'Multiscale');
this.add('-ability', pokemon, 'No Guard');
},
onSourceModifyDamage(damage, source, target, move) {
if (target.hp >= target.maxhp) {
this.debug('Multiscale weaken');
return this.chainModify(0.5);
}
},
onAnyInvulnerabilityPriority: 1.5,
onAnyInvulnerability(target, source, move) {
if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
},
onAnyAccuracy(accuracy, target, source, move) {
if (move && (source === this.effectState.target || target === this.effectState.target)) {
return true;
}
return accuracy;
},
name: "Dangdaedangdang",
},

tush: {
onPreStart(pokemon) {
this.add('-message', 'TUUUUUUUUSH!');
this.add('-ability', pokemon, 'Grass Pelt');
this.add('-ability', pokemon, 'Qosrodah');
},
onModifyDefPriority: 6,
onModifyDef(pokemon) {
if (this.field.isTerrain('grassyterrain')) {
return this.chainModify(1.5);
}
},
onModifySpDPriority: 6,
onModifySpD(pokemon) {
if (this.field.isTerrain('grassyterrain')) {
return this.chainModify(1.5);
}
},
onModifyTypePriority: -1,
onModifyType(move, pokemon) {
if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
move.type = 'Electric';
}
},
isBreakable: true,
name: "Tush",
},

scarface: {
onPreStart(pokemon) {
this.add('-message', 'All I have in this world is my balls and my word, and I break em for no one!');
this.add('-ability', pokemon, 'Synchronize');
this.add('-ability', pokemon, 'Elemental Absorption');
},
onAfterSetStatus(status, target, source, effect) {
if (!source || source === target) return;
if (effect && effect.id === 'toxicspikes') return;
if (status.id === 'slp' || status.id === 'frz') return;
this.add('-activate', target, 'ability: Synchronize');
source.trySetStatus(status, target, {status: status.id, id: 'synchronize'} as Effect);
},
onTryHit: function (target, source, move) {
if (move.type === target.types[0] || move.type === target.types[1]) {
this.boost({[target.getStat('spa') > target.getStat('atk') ? 'spa' : 'atk']: 1.5});
return;
}
return;
},
isBreakable: true,
name: "Scarface",
},

dre: {
onPreStart(pokemon) {
this.add('-message', 'Once again you forgot about Dre');
this.add('-ability', pokemon, 'Analytic');
this.add('-ability', pokemon, 'Unseen Fist');
},
onBasePowerPriority: 21,
onBasePower(basePower, pokemon) {
let boosted = true;
for (const target of this.getAllActive()) {
if (target === pokemon) continue;
if (this.queue.willMove(target)) {
boosted = false;
break;
}
}
if (boosted) {
this.debug('Analytic boost');
return this.chainModify([133,100]);
}
},
onModifyMove(move) {
if (move.flags['contact']) delete move.flags['protect'];
},
name: "Dre",
},

wougfrey: {
onPreStart(pokemon) {
this.add('-message', 'Wouggers wiggles into battle.');
this.add('-ability', pokemon, 'Sand Rush');
this.add('-ability', pokemon, 'Shield Dust');
},
onModifySpe(spe, pokemon) {
if (this.field.isWeather('sandstorm')) {
return this.chainModify([200,100]);
}
},
onImmunity(type, pokemon) {
if (type === 'sandstorm') return false;
},
onModifySecondaries(secondaries) {
this.debug('Shield Dust prevent secondary');
return secondaries.filter(effect => !!(effect.self || effect.dustproof));
},
isBreakable: true,
name: "Wougfrey",
},

cuntybob: {
onPreStart(pokemon) {
this.add('-message', 'This Cunty Bobbbb.');
this.add('-ability', pokemon, 'Dragons Maw');
this.add('-ability', pokemon, 'Shield Dust');
},
onModifyAtkPriority: 5,
onModifyAtk(atk, attacker, defender, move) {
if (move.type === 'Dragon') {
this.debug('Dragon\'s Maw boost');
return this.chainModify(1.5);
}
},
onModifySpAPriority: 5,
onModifySpA(atk, attacker, defender, move) {
if (move.type === 'Dragon') {
this.debug('Dragon\'s Maw boost');
return this.chainModify(1.5);
}
},
onAllyFaint(target) {
if (!this.effectState.target.hp) return;
const ability = target.getAbility();
if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
if (this.effectState.target.setAbility(ability)) {
this.add('-ability', this.effectState.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
}
},
name: "Cunty Bob",
},

jeremyirons: {
onPreStart(pokemon) {
this.add('-message', 'Wouggers wiggles into battle.');
this.add('-ability', pokemon, 'Sand Rush');
this.add('-ability', pokemon, 'Shield Dust');
},
onDamagingHit(damage, target, source, move) {
this.field.setTerrain('electricterrain');
},
isPermanent: true,
onStart(source) {
this.field.setWeather('sandstorm');
},
name: "Jeremy Irons",
},

jasonwaterfalls: {
onStart(pokemon) {
let activated = false;
for (const target of pokemon.adjacentFoes()) {
if (!activated) {
this.add('-ability', pokemon, 'Flustered', 'boost');
activated = true;
}
if (target.volatiles['substitute']) {
this.add('-immune', target);
} else {
this.boost({spe: -1}, target, pokemon, null, true);
}
}
},
onDamagingHit(damage, target, source, move) {
if (!this.checkMoveMakesContact(move, source, target)) return;
let announced = false;
for (const pokemon of [source]) {
if (pokemon.volatiles['perishsong']) continue;
if (!announced) {
this.add('-ability', target, 'Perish Body');
announced = true;
}
pokemon.addVolatile('perishsong');
}
},
name: "Jasonwater Falls",
},

};