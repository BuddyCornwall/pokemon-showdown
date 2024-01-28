export const Moves: {[moveid: string]: MoveData} = {
absorb: {
accuracy: 95,
basePower: 10,
category: "Special",
name: "Absorb",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
onHit(target, source) {
if (target.boosts.spa === -6) return false;
const spa = target.getStat('spa', false, true);
const success = this.boost({spa: -1}, target, source, null, false, true);
return !!(this.heal(spa, source, target) || success);
},
secondary: null,
target: "any",
type: "Grass",
},

accelerock: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Accelerock",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Rock",
},

acid: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Acid",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 33,
boosts: {
spd: -1,
},
},
target: "allAdjacentFoes",
type: "Poison",
},

acidarmor: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Acid Armor",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
def: 2,
},
secondary: null,
target: "self",
type: "Poison",
},

aciddownpour: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Acid Downpour",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
weather: 'RainDance',
secondary: {
chance: 50,
status: 'tox',
},
target: "allAdjacent",
type: "Poison",
},

acidspray: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Acid Spray",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 75,
boosts: {
spd: -2,
},
},
target: "any",
type: "Poison",
},

acrobatics: {
accuracy: 95,
basePower: 20,
basePowerCallback(pokemon, target, move) {
if (!pokemon.item) {
this.debug("BP doubled for no item");
return move.basePower * 5.5;
}
return move.basePower;
},
category: "Physical",
name: "Acrobatics",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
secondary: null,
target: "any",
type: "Flying",
},

acupressure: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Acupressure",
pp: 1.25,
priority: 0,
flags: {},
onHit(target) {
const stats: BoostID[] = [];
let stat: BoostID;
for (stat in target.boosts) {
if (target.boosts[stat] < 6) {
stats.push(stat);
}
}
if (stats.length) {
const randomStat = this.sample(stats);
const boost: SparseBoostsTable = {};
boost[randomStat] = 2;
this.boost(boost);
} else {
return false;
}
},
secondary: null,
target: "adjacentAllyOrSelf",
type: "Normal",
},

aerialace: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Aerial Ace",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1, slicing: 1},
secondary: null,
target: "any",
type: "Flying",
},

aeroblast: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Aeroblast",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, distance: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Flying",
},

afteryou: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "After You",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1, allyanim: 1},
onHit(target) {
if (target.side.active.length < 2) return false; // fails in singles
const action = this.queue.willMove(target);
if (action) {
this.queue.prioritizeAction(action);
this.add('-activate', target, 'move: After You');
} else {
return false;
}
},
secondary: null,
target: "any",
type: "Normal",
},

agility: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Agility",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spe: 2,
},
secondary: null,
target: "self",
type: "Psychic",
},

aircutter: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Air Cutter",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1, wind: 1},
critRatio: 2,
secondary: null,
target: "allAdjacentFoes",
type: "Flying",
},

airslash: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Air Slash",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, distance: 1, slicing: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Flying",
},

alloutpummeling: {
accuracy: 85,
basePower: 20,
category: "Physical",
name: "All Out Pummeling",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
multihit: [1, 15],
multiaccuracy: 75,
secondary: null,
target: "randomNormal",
type: "Fighting",
},

allyswitch: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Ally Switch",
pp: 0.625,
priority: 5,
flags: {},
stallingMove: true,
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onTryHit(source) {
if (source.side.active.length === 1) return false;
if (source.side.active.length === 3 && source.position === 1) return false;
},
onHit(pokemon) {
pokemon.addVolatile('stall');
const newPosition = (pokemon.position === 0 ? pokemon.side.active.length - 1 : 0);
if (!pokemon.side.active[newPosition]) return false;
if (pokemon.side.active[newPosition].fainted) return false;
this.swapPosition(pokemon, newPosition, '[from] move: Ally Switch');
},
secondary: null,
target: "self",
type: "Psychic",
},

amnesia: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Amnesia",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 2,
def: 2,
},
secondary: null,
target: "self",
type: "Psychic",
},

anchorshot: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Anchor Shot",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Steel",
},

ancientpower: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Ancient Power",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
self: {
boosts: {
atk: 1,
def: 1,
spa: 1,
spd: 1,
spe: 1,
},
},
},
target: "any",
type: "Rock",
},

appleacid: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Apple Acid",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spd: -1,
def: -1,
},
},
target: "any",
type: "Grass",
},

aquacutter: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Aqua Cutter",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Grass') return 1;
},
critRatio: 2,
secondary: null,
target: "any",
type: "Water",
},

aquajet: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Aqua Jet",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Water",
},

aquaring: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Aqua Ring",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'aquaring',
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'Aqua Ring');
},
onResidualOrder: 6,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 6.666);
},
},
secondary: null,
target: "self",
type: "Water",
},

aquastep: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Aqua Step",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Water",
},

aquatail: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Aqua Tail",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "allAdjacentFoes",
type: "Water",
},

armorcannon: {
accuracy: 85,
basePower: 115,
category: "Special",
name: "Armor Cannon",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
self: {
boosts: {
def: -1,
spd: -1,
},
},
secondary: null,
target: "any",
type: "Fire",
},

armthrust: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Arm Thrust",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Fighting",
},

aromatherapy: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Aromatherapy",
pp: 1.25,
priority: 0,
flags: {snatch: 1, distance: 1},
onHit(target, source, move) {
this.add('-activate', source, 'move: Aromatherapy');
let success = false;
const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
for (const ally of allies) {
if (ally !== source && ((ally.hasAbility('sapsipper')) ||
(ally.volatiles['substitute'] && !move.infiltrates))) {
continue;
}
if (ally.cureStatus()) success = true;
}
return success;
},
target: "allyTeam",
type: "Grass",
},

aromaticmist: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Aromatic Mist",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
boosts: {
spd: 1,
def: 1,
},
secondary: null,
target: "adjacentAlly",
type: "Fairy",
},

assist: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Assist",
pp: 1.25,
priority: 0,
flags: {},
onHit(target) {
const moves = [];
for (const pokemon of target.side.pokemon) {
if (pokemon === target) continue;
for (const moveSlot of pokemon.moveSlots) {
const moveid = moveSlot.id;
const move = this.dex.moves.get(moveid);
if (move.flags['noassist'] || move.isZ || move.isMax) {
continue;
}
moves.push(moveid);
}
}
let randomMove = '';
if (moves.length) randomMove = this.sample(moves);
if (!randomMove) {
return false;
}
this.actions.useMove(randomMove, target);
},
secondary: null,
target: "self",
type: "Normal",
},

assurance: {
accuracy: 95,
basePower: 60,
basePowerCallback(pokemon, target, move) {
if (target.hurtThisTurn) {
this.debug('BP doubled on damaged target');
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Assurance",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dark",
},

astonish: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Astonish",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Dark') return 1;
},
secondary: {
chance: 50,
volatileStatus: 'flinch',
},
target: "any",
type: "Ghost",
},

astralbarrage: {
accuracy: 85,
basePower: 120,
category: "Special",
name: "Astral Barrage",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Ghost",
},

attackorder: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Attack Order",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Bug",
},

attract: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Attract",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
volatileStatus: 'attract',
condition: {
noCopy: true, // doesn't get copied by Baton Pass
onStart(pokemon, source, effect) {
if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
this.debug('incompatible gender');
return false;
}
if (!this.runEvent('Attract', pokemon, source)) {
this.debug('Attract event failed');
return false;
}
if (effect.name === 'Cute Charm') {
this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
} else if (effect.name === 'Destiny Knot') {
this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
} else {
this.add('-start', pokemon, 'Attract');
}
},
onUpdate(pokemon) {
if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
this.debug('Removing Attract volatile on ' + pokemon);
pokemon.removeVolatile('attract');
}
},
onBeforeMovePriority: 2,
onBeforeMove(pokemon, target, move) {
this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
if (this.randomChance(1, 2)) {
this.add('cant', pokemon, 'Attract');
return false;
}
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Attract', '[silent]');
},
},
onTryImmunity(target, source) {
return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
},
secondary: null,
target: "any",
type: "Normal",
},

aurasphere: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Aura Sphere",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
secondary: null,
selfBoost: {
accuracy: 1,
},
target: "any",
type: "Fighting",
},

aurawheel: {
accuracy: 85,
basePower: 110,
category: "Physical",
name: "Aura Wheel",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
onTry(source) {
if (source.species.baseSpecies === 'Morpeko') {
return;
}
this.attrLastMove('[still]');
this.add('-fail', source, 'move: Aura Wheel');
this.hint("Only a Pokemon whose form is Morpeko or Morpeko-Hangry can use this move.");
return null;
},
onModifyType(move, pokemon) {
if (pokemon.species.name === 'Morpeko-Hangry') {
move.type = 'Dark';
} else {
move.type = 'Electric';
}
},
target: "any",
type: "Electric",
},

aurorabeam: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Aurora Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
atk: -1,
},
},
target: "any",
type: "Ice",
},

auroraveil: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Aurora Veil",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'auroraveil',
onTry() {
return this.field.isWeather(['hail', 'snow']);
},
condition: {
duration: 5,
durationCallback(target, source, effect) {
if (source?.hasItem('lightclay')) {
return 8;
}
return 5;
},
onAnyModifyDamage(damage, source, target, move) {
if (target !== source && this.effectState.target.hasAlly(target)) {
if ((target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') ||
(target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special')) {
return;
}
if (!target.getMoveHitData(move).crit && !move.infiltrates) {
this.debug('Aurora Veil weaken');
if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
return this.chainModify(0.5);
}
}
},
onSideStart(side) {
this.add('-sidestart', side, 'move: Aurora Veil');
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 10,
onSideEnd(side) {
this.add('-sideend', side, 'move: Aurora Veil');
},
},
secondary: null,
target: "allySide",
type: "Ice",
},

autotomize: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Autotomize",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onTryHit(pokemon) {
const hasContrary = pokemon.hasAbility('contrary');
if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
return false;
}
},
boosts: {
spe: 2,
},
onHit(pokemon) {
if (pokemon.weighthg > 1) {
pokemon.weighthg = Math.max(1, pokemon.weighthg - 1000);
this.add('-start', pokemon, 'Autotomize');
}
},
secondary: null,
target: "self",
type: "Steel",
},

avalanche: {
accuracy: 95,
basePower: 60,
basePowerCallback(pokemon, target, move) {
const damagedByTarget = pokemon.attackedBy.some(
p => p.source === target && p.damage > 0 && p.thisTurn
);
if (damagedByTarget) {
this.debug('BP doubled for getting hit by ' + target);
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Avalanche",
pp: 1.25,
priority: -4,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ice",
},

axekick: {
accuracy: 75,
basePower: 120,
category: "Physical",
name: "Axe Kick",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Fighting",
},

babydolleyes: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Baby Doll Eyes",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
volatileStatus: 'attract',
boosts: {
spa: -1,
atk: -1,
},
secondary: null,
target: "any",
type: "Fairy",
},

banefulbunker: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Baneful Bunker",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'banefulbunker',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'move: Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect']) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
if (this.checkMoveMakesContact(move, source, target)) {
source.trySetStatus('tox', target);
}
return this.NOT_FAIL;
},
onHit(target, source, move) {
if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
source.trySetStatus('tox', target);
}
},
},
secondary: null,
target: "self",
type: "Poison",
},

barbbarrage: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Barb Barrage",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower, pokemon, target) {
if (target.status === 'tox' || target.status === 'tox') {
return this.chainModify(2);
}
},
secondary: {
chance: 50,
status: 'tox',
},
target: "any",
type: "Poison",
},

barrage: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Barrage",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
multihit: [1, 7],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

barrier: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Barrier",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
def: 2,
},
secondary: null,
target: "self",
type: "Psychic",
},

batonpass: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Baton Pass",
pp: 1.25,
priority: -2,
flags: {},
onTryHit(target) {
if (!this.canSwitch(target.side) || target.volatiles['commanded']) {
this.attrLastMove('[still]');
this.add('-fail', target);
return this.NOT_FAIL;
}
},
self: {
onHit(source) {
source.skipBeforeSwitchOutEventFlag = true;
},
},
selfSwitch: 'copyvolatile',
secondary: null,
target: "self",
type: "Normal",
},

beakblast: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Beak Blast",
pp: 0.625,
priority: -3,
flags: {bullet: 1, protect: 1},
priorityChargeCallback(pokemon) {
pokemon.addVolatile('beakblast');
},
condition: {
duration: 1,
onStart(pokemon) {
this.add('-singleturn', pokemon, 'move: Beak Blast');
},
onHit(target, source, move) {
if (this.checkMoveMakesContact(move, source, target)) {
source.trySetStatus('brn', target);
}
},
},
// FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('beakblast')},
onAfterMove(pokemon) {
pokemon.removeVolatile('beakblast');
},
secondary: null,
target: "any",
type: "Flying",
},

beatup: {
accuracy: 95,
basePower: 40,
basePowerCallback(pokemon, target, move) {
const currentSpecies = move.allies!.shift()!.species;
const bp = 10 + Math.floor(currentSpecies.baseStats.atk / 10);
this.debug('BP for ' + currentSpecies.name + ' hit: ' + bp);
return bp;
},
category: "Physical",
name: "Beat Up",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, allyanim: 1},
onModifyMove(move, pokemon) {
move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted && !ally.status);
move.multihit = move.allies.length;
},
secondary: null,
target: "any",
type: "Dark",
},

behemothbash: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Behemoth Bash",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
atk: -1,
},
},
target: "any",
type: "Steel",
},

behemothblade: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Behemoth Blade",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
secondary: {
chance: 50,
boosts: {
def: -1,
},
},
target: "any",
type: "Steel",
},

belch: {
accuracy: 85,
basePower: 120,
category: "Special",
name: "Belch",
pp: 0.625,
priority: 0,
flags: {protect: 1},
onDisableMove(pokemon) {
if (!pokemon.ateBerry) pokemon.disableMove('belch');
},
secondary: null,
target: "allAdjacent",
type: "Poison",
},

bellydrum: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Belly Drum",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onHit(target) {
if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
return false;
}
this.directDamage(target.maxhp / 2);
this.boost({atk: 12}, target);
},
secondary: null,
target: "self",
type: "Normal",
},

bide: {
accuracy: 95,
basePower: 0,
category: "Physical",
name: "Bide",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1},
volatileStatus: 'bide',
ignoreImmunity: true,
beforeMoveCallback(pokemon) {
if (pokemon.volatiles['bide']) return true;
},
condition: {
duration: 2,
onLockMove: 'bide',
onStart(pokemon) {
this.effectState.totalDamage = 0;
this.add('-start', pokemon, 'move: Bide');
},
onDamagePriority: -101,
onDamage(damage, target, source, move) {
if (!move || move.effectType !== 'Move' || !source) return;
this.effectState.totalDamage += damage;
this.effectState.lastDamageSource = source;
},
onBeforeMove(pokemon, target, move) {
if (this.effectState.duration === 1) {
this.add('-end', pokemon, 'move: Bide');
target = this.effectState.lastDamageSource;
if (!target || !this.effectState.totalDamage) {
this.attrLastMove('[still]');
this.add('-fail', pokemon);
return false;
}
if (!target.isActive) {
const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
if (!possibleTarget) {
this.add('-miss', pokemon);
return false;
}
target = possibleTarget;
}
const moveData: Partial<ActiveMove> = {
id: 'bide' as ID,
name: "Bide",
accuracy: 95,
damage: this.effectState.totalDamage * 2,
category: "Physical",
priority: 1,
flags: {contact: 1, protect: 1},
effectType: 'Move',
type: 'Normal',
};
this.actions.tryMoveHit(target, pokemon, moveData as ActiveMove);
pokemon.removeVolatile('bide');
return false;
}
this.add('-activate', pokemon, 'move: Bide');
},
onMoveAborted(pokemon) {
pokemon.removeVolatile('bide');
},
onEnd(pokemon) {
this.add('-end', pokemon, 'move: Bide', '[silent]');
},
},
secondary: null,
target: "self",
type: "Normal",
},

bind: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Bind",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Normal",
},

bite: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Bite",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Dark",
},

bitterblade: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Bitter Blade",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, heal: 1},
drain: [45, 100],
secondary: null,
target: "any",
type: "Fire",
},

bittermalice: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Bitter Malice",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'frz',
},
target: "any",
type: "Ghost",
},

blackholeeclipse: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Black Hole Eclipse",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Dark",
},

blastburn: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Blast Burn",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Fire",
},

blazekick: {
accuracy: 85,
basePower: 85,
category: "Physical",
name: "Blaze Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

blazingtorque: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Blazing Torque",
pp: 0.625,
priority: 0,
flags: {protect: 1},
secondary: {
chance: 33,
status: 'brn',
},
target: "any",
type: "Fire",
},

bleakwindstorm: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Bleakwind Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
weather: 'RainDance',
secondary: {
chance: 25,
boosts: {
spe: -1,
},
},
target: "allAdjacentFoes",
type: "Flying",
},

blizzard: {
accuracy: 75,
basePower: 115,
category: "Special",
name: "Blizzard",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
onModifyMove(move) {
if (this.field.isWeather(['hail', 'snow'])) move.accuracy = true;
},
secondary: {
chance: 33,
status: 'frz',
},
target: "allAdjacentFoes",
type: "Ice",
},

block: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Block",
pp: 1.25,
priority: -8,
flags: {reflectable: 1, mirror: 1},
onHit(target, source, move) {
return target.addVolatile('trapped', source, move, 'trapper');
},
secondary: null,
target: "any",
type: "Normal",
},

blueflare: {
accuracy: 85,
basePower: 110,
category: "Special",
name: "Blue Flare",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
status: 'brn',
},
target: "any",
type: "Fire",
},

bodypress: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Body Press",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
overrideOffensiveStat: 'def',
secondary: null,
target: "any",
type: "Fighting",
},

bodyslam: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Body Slam",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Normal",
},

boltbeak: {
accuracy: 95,
basePower: 85,
basePowerCallback(pokemon, target, move) {
if (target.newlySwitched || this.queue.willMove(target)) {
this.debug('Bolt Beak damage boost');
return move.basePower * 1.25;
}
this.debug('Bolt Beak NOT boosted');
return move.basePower;
},
category: "Physical",
name: "Bolt Beak",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [50, 100],
secondary: null,
target: "any",
type: "Electric",
},

boltstrike: {
accuracy: 85,
basePower: 110,
category: "Physical",
name: "Bolt Strike",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Electric",
},

boneclub: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Bone Club",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Ground",
},

bonemerang: {
accuracy: 95,
basePower: 45,
category: "Physical",
name: "Bonemerang",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [2, 4],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Ground",
},

bonerush: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Bone Rush",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Ground",
},

boomburst: {
accuracy: 85,
basePower: 140,
category: "Special",
name: "Boomburst",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: null,
target: "allAdjacent",
type: "Normal",
},

bounce: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Bounce",
pp: 1.25,
priority: 0,
flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
recoil: [25, 100],
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onInvulnerability(target, source, move) {
if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
return;
}
return false;
},
onSourceBasePower(basePower, target, source, move) {
if (move.id === 'gust' || move.id === 'twister') {
return this.chainModify(2);
}
},
},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Flying",
},

branchpoke: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Branch Poke",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Bug') return 1;
},
critRatio: 2,
secondary: null,
target: "any",
type: "Grass",
},

bravebird: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
let bp;
if (ratio < 2) {
bp = 160;
} else if (ratio < 5) {
bp = 140;
} else if (ratio < 10) {
bp = 120;
} else if (ratio < 17) {
bp = 100;
} else if (ratio < 33) {
bp = 80;
} else {
bp = 60;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Brave Bird",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [60, 100],
secondary: null,
target: "any",
type: "Flying",
},

breakingswipe: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Breaking Swipe",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Ice') return 1;
},
secondary: {
chance: 75,
boosts: {
atk: -1,
spa: -1,
},
},
target: "allAdjacentFoes",
type: "Dragon",
},

breakneckblitz: {
accuracy: 75,
basePower: 130,
category: "Physical",
name: "Breakneck Blitz",
pp: 0.625,
priority: 7,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [25, 100],
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "randomNormal",
type: "Normal",
},

brickbreak: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Brick Break",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
onTryHit(pokemon) {
// will shatter screens through sub, before you hit
pokemon.side.removeSideCondition('reflect');
pokemon.side.removeSideCondition('lightscreen');
pokemon.side.removeSideCondition('auroraveil');
},
secondary: null,
target: "any",
type: "Fighting",
},

brine: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Brine",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower, pokemon, target) {
if (target.hp * 2 <= target.maxhp) {
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Water",
},

brutalswing: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Brutal Swing",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "allAdjacent",
type: "Dark",
},

bubble: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Bubble",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 33,
boosts: {
spe: -1,
},
},
target: "allAdjacentFoes",
type: "Water",
},

bubblebeam: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Bubble Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
spe: -1,
},
},
target: "any",
type: "Water",
},

bugbite: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Bug Bite",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onHit(target, source) {
const item = target.getItem();
if (source.hp && item.isBerry && target.takeItem(source)) {
this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
if (this.singleEvent('Eat', item, null, source, null, null)) {
this.runEvent('EatItem', source, null, null, item);
if (item.id === 'leppaberry') target.staleness = 'external';
}
if (item.onEat) source.ateBerry = true;
}
},
secondary: null,
target: "any",
type: "Bug",
},

bugbuzz: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Bug Buzz",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Bug",
},

bulkup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Bulk Up",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 1,
def: 1,
evasion: -1,
},
secondary: null,
target: "self",
type: "Fighting",
},

bulldoze: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Bulldoze",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "allAdjacent",
type: "Ground",
},

bulletpunch: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Bullet Punch",
pp: 0.625,
priority: 8,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 4, source, source, this.dex.conditions.get('High Jump Kick'));
},
critRatio: 2,
secondary: null,
target: "any",
type: "Steel",
},

bulletseed: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Bullet Seed",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Grass",
},

burningjealousy: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Burning Jealousy",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (target?.statsRaisedThisTurn) {
target.trySetStatus('brn', source, move);
}
},
},
target: "allAdjacentFoes",
type: "Fire",
},

burnup: {
accuracy: 85,
basePower: 130,
category: "Special",
name: "Burn Up",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
onTryMove(pokemon, target, move) {
if (pokemon.hasType('Fire')) return;
this.add('-fail', pokemon, 'move: Burn Up');
this.attrLastMove('[still]');
return null;
},
self: {
onHit(pokemon) {
pokemon.setType(pokemon.getTypes(true).map(type => type === "Fire" ? "???" : type));
this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Burn Up');
},
},
secondary: null,
target: "any",
type: "Fire",
},

calmmind: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Calm Mind",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: -1,
spa: 1,
spd: 1,
def: -1,
},
secondary: null,
target: "self",
type: "Psychic",
},

camouflage: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Camouflage",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onHit(target) {
let newType = 'Normal';
if (this.field.isTerrain('electricterrain')) {
newType = 'Electric';
} else if (this.field.isTerrain('grassyterrain')) {
newType = 'Grass';
} else if (this.field.isTerrain('mistyterrain')) {
newType = 'Fairy';
} else if (this.field.isTerrain('psychicterrain')) {
newType = 'Psychic';
}

if (target.getTypes().join() === newType || !target.setType(newType)) return false;
this.add('-start', target, 'typechange', newType);
},
secondary: null,
target: "self",
type: "Normal",
},

captivate: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Captivate",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
onTryImmunity(pokemon, source) {
return (pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M');
},
boosts: {
spa: -2,
atk: -2
},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

ceaselessedge: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Ceaseless Edge",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
self: {
onHit(source) {
for (const side of source.side.foeSidesWithConditions()) {
side.addSideCondition('spikes');
}
},
},
secondary: {}, // allows sheer force to trigger
target: "any",
type: "Dark",
},

charge: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Charge",
pp: 0.625,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'charge',
condition: {
onStart(pokemon, source, effect) {
if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
} else {
this.add('-start', pokemon, 'Charge');
}
},
onRestart(pokemon, source, effect) {
if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
} else {
this.add('-start', pokemon, 'Charge');
}
},
onBasePowerPriority: 9,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Electric') {
this.debug('charge boost');
return this.chainModify(2);
}
},
onMoveAborted(pokemon, target, move) {
if (move.type === 'Electric' && move.id !== 'charge') {
pokemon.removeVolatile('charge');
}
},
onAfterMove(pokemon, target, move) {
if (move.type === 'Electric' && move.id !== 'charge') {
pokemon.removeVolatile('charge');
}
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Charge', '[silent]');
},
},
boosts: {
spd: 1,
},
secondary: null,
target: "self",
type: "Electric",
},

chargebeam: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Charge Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spa: 1,
},
},
},
target: "any",
type: "Electric",
},

charm: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Charm",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
boosts: {
atk: -2,
spa: -2,
},
secondary: null,
target: "any",
type: "Fairy",
},

chatter: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Chatter",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, distance: 1, bypasssub: 1},
noSketch: true,
secondary: {
chance: 75,
volatileStatus: 'confusion',
},
target: "any",
type: "Flying",
},

chillingwater: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Chilling Water",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
atk: -1,
spa: -1,
},
},
target: "any",
type: "Water",
},

chillyreception: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Chilly Reception",
pp: 0.625,
priority: 1,
flags: {},
// TODO show prepare message before the "POKEMON used MOVE!" message
// This happens even before sleep shows its "POKEMON is fast asleep." message
weather: 'snow',
selfSwitch: true,
secondary: null,
target: "all",
type: "Ice",
},

chipaway: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Chip Away",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Rock') return 1;
},
ignoreDefensive: true,
ignoreEvasion: true,
secondary: null,
target: "any",
type: "Normal",
},

chloroblast: {
accuracy: 95,
basePower: 135,
category: "Special",
name: "Chloroblast",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
mindBlownRecoil: true,
onAfterMove(pokemon, target, move) {
if (move.mindBlownRecoil && !move.multihit) {
const hpBeforeRecoil = pokemon.hp;
this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Chloroblast'), true);
if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
this.runEvent('EmergencyExit', pokemon, pokemon);
}
}
},
secondary: null,
target: "any",
type: "Grass",
},

circlethrow: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Circle Throw",
pp: 1.25,
priority: -6,
flags: {contact: 1, protect: 1, mirror: 1},
forceSwitch: true,
target: "any",
type: "Fighting",
},

clamp: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Clamp",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Water",
},

clangingscales: {
accuracy: 85,
basePower: 110,
category: "Special",
name: "Clanging Scales",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
selfBoost: {
boosts: {
def: -1,
},
},
secondary: null,
target: "allAdjacentFoes",
type: "Dragon",
},

clangoroussoul: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Clangorous Soul",
pp: 0.625,
priority: 1,
flags: {snatch: 1, sound: 1, dance: 1},
onTry(source) {
if (source.hp <= (source.maxhp * 50 / 100) || source.maxhp === 1) return false;
},
onTryHit(pokemon, target, move) {
if (!this.boost(move.boosts as SparseBoostsTable)) return null;
delete move.boosts;
},
onHit(pokemon) {
this.directDamage(pokemon.maxhp * 33 / 100);
},
boosts: {
atk: 1,
def: 1,
spa: 1,
spd: 1,
spe: 1,
evasion: -4,
},
secondary: null,
target: "self",
type: "Dragon",
},

clangoroussoulblaze: {
accuracy: 85,
basePower: 120,
category: "Special",
name: "Clangorous Soulblaze",
pp: 0.625,
priority: 1,
flags: {sound: 1, bypasssub: 1},
chance: 75,
selfBoost: {
boosts: {
atk: 1,
spa: 1,
},
},
secondary: {
// Sheer Force negates the selfBoost even though it is not secondary
},
target: "allAdjacentFoes",
type: "Dragon",
},

clearsmog: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Clear Smog",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onHit(target) {
target.clearBoosts();
this.add('-clearboost', target);
},
secondary: null,
target: "any",
type: "Poison",
},

closecombat: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Close Combat",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
boosts: {
def: -1,
spd: -1,
evasion: -1,
},
},
secondary: null,
target: "any",
type: "Fighting",
},

coaching: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Coaching",
pp: 0.625,
priority: 0,
flags: {bypasssub: 1, allyanim: 1},
secondary: null,
boosts: {
atk: 1,
spa: 1,
spe: -1,
spd: 1,
def: 1,
evasion: -1,
},
target: "adjacentAlly",
type: "Fighting",
},

coil: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Coil",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 1,
def: 1,
accuracy: 1,
},
secondary: null,
target: "self",
type: "Poison",
},

collisioncourse: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Collision Course",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, source, target, move) {
if (target.runEffectiveness(move) > 0) {
// Placeholder
this.debug(`collision course super effective buff`);
return this.chainModify([5461, 4096]);
}
},
secondary: null,
target: "any",
type: "Fighting",
},

combattorque: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Combat Torque",
pp: 0.625,
priority: 0,
flags: {protect: 1},
secondary: {
chance: 33,
status: 'par',
},
target: "any",
type: "Fighting",
},

cometpunch: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Comet Punch",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
weather: 'sunnyday',
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

comeuppance: {
accuracy: 95,
basePower: 15,
damageCallback(pokemon) {
const lastDamagedBy = pokemon.getLastDamagedBy(true);
if (lastDamagedBy !== undefined) {
return (lastDamagedBy.damage * 1.75) || 1;
}
return 0;
},
category: "Physical",
name: "Comeuppance",
pp: 0.625,
priority: -1,
flags: {contact: 1, protect: 1, mirror: 1},
onTry(source) {
const lastDamagedBy = source.getLastDamagedBy(true);
if (lastDamagedBy === undefined || !lastDamagedBy.thisTurn) return false;
},
onModifyTarget(targetRelayVar, source, target, move) {
const lastDamagedBy = source.getLastDamagedBy(true);
if (lastDamagedBy) {
targetRelayVar.target = this.getAtSlot(lastDamagedBy.slot);
}
},
secondary: null,
target: "scripted",
type: "Dark",
},

confide: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Confide",
pp: 0.625,
priority: 1,
flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
boosts: {
spa: -1,
},
secondary: null,
target: "any",
type: "Normal",
},

confuseray: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Confuse Ray",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'confusion',
secondary: null,
target: "any",
type: "Ghost",
},

confusion: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Confusion",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
volatileStatus: 'confusion',
},
target: "any",
type: "Psychic",
},

constrict: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Constrict",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spe: -1,
},
},
target: "any",
type: "Normal",
},

continentalcrush: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Continental Crush",
pp: 0.625,
priority: -5,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
type: "Rock",
},

conversion: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Conversion",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onHit(target) {
const type = this.dex.moves.get(target.moveSlots[0].id).type;
if (target.hasType(type) || !target.setType(type)) return false;
this.add('-start', target, 'typechange', type);
},
secondary: null,
target: "self",
type: "Normal",
},

conversion2: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Conversion 2",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
onHit(target, source) {
if (!target.lastMoveUsed) {
return false;
}
const possibleTypes = [];
const attackType = target.lastMoveUsed.type;
for (const type of this.dex.types.names()) {
if (source.hasType(type)) continue;
const typeCheck = this.dex.types.get(type).damageTaken[attackType];
if (typeCheck === 2 || typeCheck === 3) {
possibleTypes.push(type);
}
}
if (!possibleTypes.length) {
return false;
}
const randomType = this.sample(possibleTypes);
if (!source.setType(randomType)) return false;
this.add('-start', source, 'typechange', randomType);
},
secondary: null,
target: "any",
type: "Normal",
},

copycat: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Copycat",
pp: 1.25,
priority: 0,
flags: {},
onHit(pokemon) {
let move: Move | ActiveMove | null = this.lastMove;
if (!move) return;

if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
if (move.flags['failcopycat'] || move.isZ || move.isMax) {
return false;
}
this.actions.useMove(move.id, pokemon);
},
secondary: null,
target: "self",
type: "Normal",
},

coreenforcer: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Core Enforcer",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onHit(target) {
if (target.getAbility().isPermanent) return;
if (target.newlySwitched || this.queue.willMove(target)) return;
target.addVolatile('gastroacid');
},
onAfterSubDamage(damage, target) {
if (target.getAbility().isPermanent) return;
if (target.newlySwitched || this.queue.willMove(target)) return;
target.addVolatile('gastroacid');
},
secondary: null,
target: "allAdjacentFoes",
type: "Dragon",
},

corkscrewcrash: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Corkscrew Crash",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Steel",
},

corrosivegas: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Corrosive Gas",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target, source) {
const item = target.takeItem(source);
if (item) {
this.add('-enditem', target, item.name, '[from] move: Corrosive Gas', '[of] ' + source);
} else {
this.add('-fail', target, 'move: Corrosive Gas');
}
},
secondary: null,
target: "allAdjacent",
type: "Poison",
},

cosmicpower: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Cosmic Power",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
def: 1,
spd: 1,
},
secondary: null,
target: "self",
type: "Psychic",
},

cottonguard: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Cotton Guard",
pp: 0.625,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 3,
def: 3,
evasion: -3,
},
secondary: null,
target: "self",
type: "Grass",
},

cottonspore: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Cotton Spore",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
boosts: {
spe: -2,
},
secondary: null,
target: "allAdjacentFoes",
type: "Grass",
},

counter: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
if (!pokemon.volatiles['counter']) return 0;
return pokemon.volatiles['counter'].damage || 1;
},
category: "Physical",
name: "Counter",
pp: 1.25,
priority: -9,
flags: {contact: 1, protect: 1},
beforeTurnCallback(pokemon) {
pokemon.addVolatile('counter');
},
onTry(source) {
if (!source.volatiles['counter']) return false;
if (source.volatiles['counter'].slot === null) return false;
},
condition: {
duration: 1,
noCopy: true,
onStart(target, source, move) {
this.effectState.slot = null;
this.effectState.damage = 0;
},
onRedirectTargetPriority: -9,
onRedirectTarget(target, source, source2, move) {
if (move.id !== 'counter') return;
if (source !== this.effectState.target || !this.effectState.slot) return;
return this.getAtSlot(this.effectState.slot);
},
onDamagingHit(damage, target, source, move) {
if (!source.isAlly(target) && this.getCategory(move) === 'Physical') {
this.effectState.slot = source.getSlot();
this.effectState.damage = 2 * damage;
}
},
},
secondary: null,
target: "scripted",
type: "Fighting",
},

courtchange: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Court Change",
pp: 1.25,
priority: 0,
flags: {mirror: 1},
onHitField(target, source) {
const sideConditions = [
'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
];
let success = false;
if (this.gameType === "freeforall") {
// random integer from 1-3 inclusive
const offset = this.random(3) + 1;
// the list of all sides in counterclockwise order
const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
const temp: {[k: number]: typeof source.side.sideConditions} = {0: {}, 1: {}, 2: {}, 3: {}};
for (const side of sides) {
for (const id in side.sideConditions) {
if (!sideConditions.includes(id)) continue;
temp[side.n][id] = side.sideConditions[id];
delete side.sideConditions[id];
const effectName = this.dex.conditions.get(id).name;
this.add('-sideend', side, effectName, '[silent]');
success = true;
}
}
for (let i = 0; i < 4; i++) {
const sourceSideConditions = temp[sides[i].n];
const targetSide = sides[(i + offset) % 4]; // the next side in rotation
for (const id in sourceSideConditions) {
targetSide.sideConditions[id] = sourceSideConditions[id];
const effectName = this.dex.conditions.get(id).name;
let layers = sourceSideConditions[id].layers || 1;
for (; layers > 0; layers--) this.add('-sidestart', targetSide, effectName, '[silent]');
}
}
} else {
const sourceSideConditions = source.side.sideConditions;
const targetSideConditions = source.side.foe.sideConditions;
const sourceTemp: typeof sourceSideConditions = {};
const targetTemp: typeof targetSideConditions = {};
for (const id in sourceSideConditions) {
if (!sideConditions.includes(id)) continue;
sourceTemp[id] = sourceSideConditions[id];
delete sourceSideConditions[id];
success = true;
}
for (const id in targetSideConditions) {
if (!sideConditions.includes(id)) continue;
targetTemp[id] = targetSideConditions[id];
delete targetSideConditions[id];
success = true;
}
for (const id in sourceTemp) {
targetSideConditions[id] = sourceTemp[id];
}
for (const id in targetTemp) {
sourceSideConditions[id] = targetTemp[id];
}
this.add('-swapsideconditions');
}
if (!success) return false;
this.add('-activate', source, 'move: Court Change');
},
secondary: null,
target: "all",
type: "Normal",
},

covet: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Covet",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'attract',
onBeforeMovePriority: 2,
onBeforeMove(pokemon, target, move) {
this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
if (this.randomChance(1, 2)) {
this.add('cant', pokemon, 'Attract');
return false;
}
},
critRatio: 0,
secondary: null,
target: "any",
type: "Normal",
},

crabhammer: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Crabhammer",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Water",
},

craftyshield: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Crafty Shield",
pp: 0.625,
priority: 3,
flags: {},
sideCondition: 'craftyshield',
onTry() {
return !!this.queue.willAct();
},
condition: {
duration: 1,
onSideStart(target, source) {
this.add('-singleturn', source, 'Crafty Shield');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (['self', 'all'].includes(move.target) || move.category !== 'Status') return;
this.add('-activate', target, 'move: Crafty Shield');
return this.NOT_FAIL;
},
},
secondary: null,
target: "allySide",
type: "Fairy",
},

crosschop: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Cross Chop",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Fighting",
},

crosspoison: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Cross Poison",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
secondary: {
chance: 25,
status: 'tox',
},
critRatio: 2,
target: "any",
type: "Poison",
},

crunch: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Crunch",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
def: -1,
},
},
target: "any",
type: "Dark",
},

crushclaw: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Crush Claw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 33,
boosts: {
def: -1,
},
},
target: "any",
type: "Normal",
},

crushgrip: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const hp = target.hp;
const maxHP = target.maxhp;
const bp = Math.floor(Math.floor((120 * (100 * Math.floor(hp * 4096 / maxHP)) + 2048 - 1) / 4096) / 100) || 1;
this.debug('BP for ' + hp + '/' + maxHP + " HP: " + bp);
return bp;
},
category: "Physical",
name: "Crush Grip",
pp: 1.25,
priority: -2,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Normal",
},

curse: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Curse",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
volatileStatus: 'curse',
onModifyMove(move, source, target) {
if (!source.hasType('Ghost')) {
move.target = move.nonGhostTarget as MoveTarget;
} else if (source.isAlly(target)) {
move.target = 'randomNormal';
}
},
onTryHit(target, source, move) {
if (!source.hasType('Ghost')) {
delete move.volatileStatus;
delete move.onHit;
move.self = {boosts: {spe: -1, atk: 1, def: 1}};
} else if (move.volatileStatus && target.volatiles['curse']) {
return false;
}
},
onHit(target, source) {
this.directDamage(source.maxhp / 2, source, source);
},
condition: {
onStart(pokemon, source) {
this.add('-start', pokemon, 'Curse', '[of] ' + source);
},
onResidualOrder: 12,
onResidual(pokemon) {
this.damage(pokemon.baseMaxhp / 4);
},
},
secondary: null,
target: "any",
nonGhostTarget: "self",
type: "Ghost",
},

cut: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Cut",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

darkestlariat: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Darkest Lariat",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
ignoreEvasion: true,
ignoreDefensive: true,
secondary: null,
target: "any",
type: "Dark",
},

darkpulse: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Dark Pulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Dark",
},

darkvoid: {
accuracy: 75,
basePower: 40,
category: "Special",
name: "Dark Void",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'slp',
secondary: null,
target: "allAdjacentFoes",
type: "Dark",
},

dazzlinggleam: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Dazzling Gleam",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Fairy",
},

decorate: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Decorate",
pp: 1.25,
priority: 0,
flags: {allyanim: 1},
secondary: null,
boosts: {
atk: 2,
spa: 2,
},
target: "any",
type: "Fairy",
},

defendorder: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Defend Order",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
def: 1,
spd: 1,
},
secondary: null,
target: "self",
type: "Bug",
},

defensecurl: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Defense Curl",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 1,
def: 1,
evasion: -1,
},
volatileStatus: 'defensecurl',
condition: {
noCopy: true,
onRestart: () => null,
},
secondary: null,
target: "self",
type: "Normal",
},

defog: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Defog",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
onHit(target, source, move) {
let success = false;
if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
const removeTarget = [
'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
];
const removeAll = [
'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
];
for (const targetCondition of removeTarget) {
if (target.side.removeSideCondition(targetCondition)) {
if (!removeAll.includes(targetCondition)) continue;
this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
success = true;
}
}
for (const sideCondition of removeAll) {
if (source.side.removeSideCondition(sideCondition)) {
this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
success = true;
}
}
this.field.clearTerrain();
return success;
},
secondary: null,
target: "any",
type: "Flying",
},

destinybond: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Destiny Bond",
pp: 0.625,
priority: 5,
flags: {bypasssub: 1},
volatileStatus: 'destinybond',
onPrepareHit(pokemon) {
return !pokemon.removeVolatile('destinybond');
},
condition: {
onStart(pokemon) {
this.add('-singlemove', pokemon, 'Destiny Bond');
},
onFaint(target, source, effect) {
if (!source || !effect || target.isAlly(source)) return;
if (effect.effectType === 'Move' && !effect.flags['futuremove']) {
if (source.volatiles['dynamax']) {
this.add('-hint', "Dynamaxed Pokémon are immune to Destiny Bond.");
return;
}
this.add('-activate', target, 'move: Destiny Bond');
source.faint();
}
},
onBeforeMovePriority: 1,
onBeforeMove(pokemon, target, move) {
if (move.id === 'destinybond') return;
this.debug('removing Destiny Bond before attack');
pokemon.removeVolatile('destinybond');
},
onMoveAborted(pokemon, target, move) {
pokemon.removeVolatile('destinybond');
},
},
secondary: null,
target: "self",
type: "Ghost",
},

devastatingdrake: {
accuracy: 75,
basePower: 140,
category: "Physical",
name: "Devastating Drake",
pp: 0.625,
priority: 2,
flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "any",
type: "Dragon",
},

diamondstorm: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Diamond Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
weather: 'hail',
self: {
chance: 50,
boosts: {
def: 2,
},
},
secondary: {
// Sheer Force negates the self even though it is not secondary
},
target: "allAdjacentFoes",
type: "Rock",
},

dig: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Dig",
pp: 0.625,
priority: 1,
flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onImmunity(type, pokemon) {
if (type === 'sandstorm' || type === 'hail') return false;
},
onInvulnerability(target, source, move) {
if (['earthquake', 'magnitude'].includes(move.id)) {
return;
}
return false;
},
onSourceModifyDamage(damage, source, target, move) {
if (move.id === 'earthquake' || move.id === 'magnitude') {
return this.chainModify(2);
}
},
},
secondary: null,
target: "any",
type: "Ground",
},


disarmingvoice: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Disarming Voice",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
critRatio: 2,
secondary: null,
target: "allAdjacentFoes",
type: "Fairy",
},

discharge: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Discharge",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "allAdjacent",
type: "Electric",
},

direclaw: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Dire Claw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, slicing: 1, mirror: 1},
secondary: {
chance: 30,
onHit(target, source) {
const result = this.random(3);
if (result === 0) {
target.trySetStatus('tox', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else {
target.trySetStatus('slp', source);
}
},
},
target: "any",
type: "Poison",
},

dive: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Dive",
pp: 0.625,
priority: 1,
flags: {contact: 1, charge: 1, protect: 1, mirror: 1, allyanim: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
const forme = attacker.hp <= attacker.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
attacker.formeChange(forme, move);
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onImmunity(type, pokemon) {
if (type === 'sandstorm' || type === 'hail') return false;
},
onInvulnerability(target, source, move) {
if (['surf', 'whirlpool'].includes(move.id)) {
return;
}
return false;
},
onSourceModifyDamage(damage, source, target, move) {
if (move.id === 'surf' || move.id === 'whirlpool') {
return this.chainModify(2);
}
},
},
secondary: null,
target: "any",
type: "Water",
},

dizzypunch: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Dizzy Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondaries: [
{
chance: 33,
status: 'flinch',
}, {
chance: 33,
volatileStatus: 'confusion',
},
],
target: "any",
type: "Normal",
},

doodle: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Doodle",
pp: 1.25,
priority: 0,
flags: {},
onHit(target, source, move) {
let success: boolean | null = false;
for (const pokemon of source.alliesAndSelf()) {
if (pokemon.ability === target.ability) continue;
const oldAbility = pokemon.setAbility(target.ability);
if (oldAbility) {
this.add('-ability', pokemon, target.getAbility().name, '[from] move: Doodle');
success = true;
} else if (!success && oldAbility === null) {
success = null;
}
}
if (!success) {
if (success === false) {
this.add('-fail', source);
}
this.attrLastMove('[still]');
return this.NOT_FAIL;
}
},
secondary: null,
target: "adjacentFoe",
type: "Normal",
},

doomdesire: {
accuracy: 95,
basePower: 140,
category: "Special",
name: "Doom Desire",
pp: 0.625,
priority: 0,
flags: {futuremove: 1},
onTry(source, target) {
if (!target.side.addSlotCondition(target, 'futuremove')) return false;
Object.assign(target.side.slotConditions[target.position]['futuremove'], {
move: 'doomdesire',
source: source,
moveData: {
id: 'doomdesire',
name: "Doom Desire",
accuracy: 95,
basePower: 140,
category: "Special",
priority: 0,
flags: {futuremove: 1},
effectType: 'Move',
type: 'Steel',
},
});
this.add('-start', source, 'Doom Desire');
return this.NOT_FAIL;
},
secondary: null,
target: "any",
type: "Steel",
},

doubleedge: {
accuracy: 95,
basePower: 120,
category: "Physical",
name: "Double Edge",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Normal",
},

doublehit: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Double Hit",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

doubleironbash: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Double Iron Bash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
multihit: [1, 2],
multiaccuracy: 85,
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Steel",
},

doublekick: {
accuracy: 95,
basePower: 45,
category: "Physical",
name: "Double Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: {
chance: 10,
volatileStatus: 'flinch',
},
target: "any",
type: "Fighting",
},

doubleshock: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Double Shock",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onTryMove(pokemon, target, move) {
if (pokemon.hasType('Electric')) return;
this.add('-fail', pokemon, 'move: Double Shock');
this.attrLastMove('[still]');
return null;
},
self: {
onHit(pokemon) {
pokemon.setType(pokemon.getTypes(true).map(type => type === "Electric" ? "???" : type));
this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Double Shock');
},
},
secondary: null,
target: "any",
type: "Electric",
},

doubleslap: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Double Slap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 4],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

doubleteam: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Double Team",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spe: 2,
},
secondary: null,
target: "allies",
type: "Normal",
},

dracometeor: {
accuracy: 75,
basePower: 130,
category: "Special",
name: "Draco Meteor",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
self: {
boosts: {
spa: -2,
},
},
secondary: null,
target: "allAdjacent",
type: "Dragon",
},

dragonascent: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Dragon Ascent",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
self: {
boosts: {
def: -1,
spd: -1,
},
},
target: "any",
type: "Flying",
},

dragonbreath: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Dragon Breath",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Dragon",
},

dragonclaw: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Dragon Claw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 33,
boosts: {
spe: -1,
},
},
target: "any",
type: "Dragon",
},

dragondance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Dragon Dance",
pp: 1.25,
priority: 0,
flags: {snatch: 1, dance: 1},
boosts: {
atk: 1,
spa: 1,
spe: 1,
spd: -1,
def: -1,
},
secondary: null,
target: "self",
type: "Dragon",
},

dragondarts: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Dragon Darts",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [1, 3],
multiaccuracy: 85,
smartTarget: true,
secondary: null,
target: "any",
type: "Dragon",
},

dragonenergy: {
accuracy: 75,
basePower: 145,
basePowerCallback(pokemon, target, move) {
const bp = move.basePower * pokemon.hp / pokemon.maxhp;
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Dragon Energy",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Dragon",
},

dragonhammer: {
accuracy: 95,
basePower: 120,
category: "Physical",
name: "Dragon Hammer",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Dragon",
},

dragonpulse: {
accuracy: 95,
basePower: 85,
category: "Special",
name: "Dragon Pulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Dragon",
},

dragonrage: {
accuracy: 95,
basePower: 55,
category: "Special",
name: "Dragon Rage",
pp: 0.625,
priority: 3,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dragon",
},

dragonrush: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Dragon Rush",
pp: 0.625,
priority: 5,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 3, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [25, 100],
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Dragon",
},

dragontail: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Dragon Tail",
pp: 1.25,
priority: -6,
flags: {contact: 1, protect: 1, mirror: 1},
forceSwitch: true,
target: "allAdjacentFoes",
type: "Dragon",
},

drainingkiss: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Draining Kiss",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
drain: [75, 100],
secondary: null,
target: "any",
type: "Fairy",
},

drainpunch: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Drain Punch",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
drain: [50, 100],
secondary: null,
target: "any",
type: "Fighting",
},

dreameater: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Dream Eater",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, heal: 1},
drain: [50, 100],
onTryImmunity(target) {
return target.status === 'slp' || target.hasAbility('comatose');
},
secondary: null,
target: "any",
type: "Psychic",
},

drillpeck: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Drill Peck",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1, heal: 1},
drain: [70, 100],
secondary: null,
target: "any",
type: "Flying",
},

drillrun: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Drill Run",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Ground",
},

drumbeating: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Drum Beating",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "any",
type: "Grass",
},

dualchop: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Dual Chop",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Dragon",
},

dualwingbeat: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Dual Wingbeat",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Flying",
},

dynamicpunch: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Dynamic Punch",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondary: {
chance: 75,
volatileStatus: 'confusion',
},
target: "any",
type: "Fighting",
},

earthpower: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Earth Power",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Ground",
},

earthquake: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Earthquake",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacent",
type: "Ground",
},

echoedvoice: {
accuracy: 95,
basePower: 15,
category: "Special",
name: "Echoed Voice",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
multihit: [1, 10],
multiaccuracy: 75,
secondary: null,
target: "any",
type: "Normal",
},

eerieimpulse: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Eerie Impulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
atk: -2,
spa: -2,
},
secondary: null,
target: "any",
type: "Electric",
},

eeriespell: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Eerie Spell",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 100,
onHit(target, source) {
const result = this.random(4);
if (result === 0) {
target.trySetStatus('brn', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else if (result === 2) {
target.trySetStatus('tox', source);
} else if (result === 3) {
target.trySetStatus('slp', source);
} else {
target.trySetStatus('frz', source);
}
},
},
target: "any",
type: "Psychic",
},

eggbomb: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Egg Bomb",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
weather: 'Sandstorm',
secondary: null,
target: "any",
type: "Normal",
},

electricterrain: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Electric Terrain",
pp: 0.625,
priority: 0,
flags: {},
terrain: 'electricterrain',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 8;
}
return 5;
},
onSetStatus(status, target, source, effect) {
if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
this.add('-activate', target, 'move: Electric Terrain');
}
return false;
}
},
onTryAddVolatile(status, target) {
if (!target.isGrounded() || target.isSemiInvulnerable()) return;
if (status.id === 'yawn') {
this.add('-activate', target, 'move: Electric Terrain');
return null;
}
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
this.debug('electric terrain boost');
return this.chainModify([5325, 4096]);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Electric Terrain');
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'move: Electric Terrain');
},
},
secondary: null,
target: "all",
type: "Electric",
},

electrify: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Electrify",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, allyanim: 1},
volatileStatus: 'electrify',
onTryHit(target) {
if (!this.queue.willMove(target) && target.activeTurns) return false;
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'move: Electrify');
},
onModifyTypePriority: -2,
onModifyType(move) {
if (move.id !== 'struggle') {
this.debug('Electrify making move type electric');
move.type = 'Electric';
}
},
},
secondary: null,
target: "any",
type: "Electric",
},

electroball: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
let ratio = Math.floor(pokemon.getStat('spe') / target.getStat('spe'));
if (!isFinite(ratio)) ratio = 0;
const bp = [40, 60, 80, 120, 150][Math.min(ratio, 4)];
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Electro Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Electric",
},

electrodrift: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Electro Drift",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, source, target, move) {
if (target.runEffectiveness(move) > 0) {
// Placeholder
this.debug(`electro drift super effective buff`);
return this.chainModify([5461, 4096]);
}
},
secondary: null,
target: "any",
type: "Electric",
},

electroweb: {
accuracy: 95,
basePower: 55,
category: "Special",
name: "Electroweb",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Grass') return 1;
},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "allAdjacentFoes",
type: "Electric",
},

embargo: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Embargo",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'embargo',
condition: {
duration: 5,
onStart(pokemon) {
this.add('-start', pokemon, 'Embargo');
this.singleEvent('End', pokemon.getItem(), pokemon.itemState, pokemon);
},
// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
onResidualOrder: 21,
onEnd(pokemon) {
this.add('-end', pokemon, 'Embargo');
},
},
secondary: null,
target: "any",
type: "Dark",
},

ember: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Ember",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 33,
status: 'brn',
},
target: "any",
type: "Fire",
},

encore: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Encore",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
volatileStatus: 'encore',
condition: {
duration: 3,
noCopy: true, // doesn't get copied by Z-Baton Pass
onStart(target) {
let move: Move | ActiveMove | null = target.lastMove;
if (!move || target.volatiles['dynamax']) return false;

if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
const moveIndex = target.moves.indexOf(move.id);
if (move.isZ || move.flags['failencore'] || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
// it failed
return false;
}
this.effectState.move = move.id;
this.add('-start', target, 'Encore');
if (!this.queue.willMove(target)) {
this.effectState.duration++;
}
},
onOverrideAction(pokemon, target, move) {
if (move.id !== this.effectState.move) return this.effectState.move;
},
onResidualOrder: 16,
onResidual(target) {
if (target.moves.includes(this.effectState.move) &&
target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
// early termination if you run out of PP
target.removeVolatile('encore');
}
},
onEnd(target) {
this.add('-end', target, 'Encore');
},
onDisableMove(pokemon) {
if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
return;
}
for (const moveSlot of pokemon.moveSlots) {
if (moveSlot.id !== this.effectState.move) {
pokemon.disableMove(moveSlot.id);
}
}
},
},
secondary: null,
target: "any",
type: "Normal",
},

endeavor: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon, target) {
return target.getUndynamaxedHP() - pokemon.hp;
},
category: "Physical",
name: "Endeavor",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onTryImmunity(target, pokemon) {
return pokemon.hp < target.hp;
},
secondary: null,
target: "any",
type: "Normal",
},

endure: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Endure",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'endure',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'move: Endure');
},
onDamagePriority: -10,
onDamage(damage, target, source, effect) {
if (effect?.effectType === 'Move' && damage >= target.hp) {
this.add('-activate', target, 'move: Endure');
return target.hp - 1;
}
},
},
secondary: null,
target: "self",
type: "Normal",
},

energyball: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Energy Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Grass",
},

entrainment: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Entrainment",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onTryHit(target, source) {
if (target === source || target.volatiles['dynamax']) return false;

const additionalBannedSourceAbilities = [
// Zen Mode included here for compatability with Gen 5-6
'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
];
if (
target.ability === source.ability ||
target.getAbility().isPermanent || target.ability === 'truant' ||
source.getAbility().isPermanent || additionalBannedSourceAbilities.includes(source.ability)
) {
return false;
}
},
onHit(target, source) {
const oldAbility = target.setAbility(source.ability);
if (oldAbility) {
this.add('-ability', target, target.getAbility().name, '[from] move: Entrainment');
if (!target.isAlly(source)) target.volatileStaleness = 'external';
return;
}
return oldAbility as false | null;
},
secondary: null,
target: "any",
type: "Normal",
},

eruption: {
accuracy: 85,
basePower: 145,
basePowerCallback(pokemon, target, move) {
const bp = move.basePower * pokemon.hp / pokemon.maxhp;
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Eruption",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Fire",
},

esperwing: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Esper Wing",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Psychic",
},

eternabeam: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Eternabeam",
pp: 0.625,
flags: {recharge: 1, protect: 1, mirror: 1, beam: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Dragon",
},

expandingforce: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Expanding Force",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower, source) {
if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
this.debug('terrain buff');
return this.chainModify(1.5);
}
},
onModifyMove(move, source, target) {
if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
move.target = 'allAdjacentFoes';
}
},
secondary: null,
target: "any",
type: "Psychic",
},

explosion: {
accuracy: 95,
basePower: 250,
category: "Special",
name: "Explosion",
pp: 0.625,
priority: -7,
flags: {protect: 1, mirror: 1},
selfdestruct: "always",
secondary: null,
target: "allAdjacent",
type: "Normal",
},

extrasensory: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Extrasensory",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Psychic",
},

extremespeed: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Extreme Speed",
pp: 0.625,
priority: 5,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 3, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [25, 100],
target: "any",
type: "Normal",
},

facade: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Facade",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, pokemon) {
if (pokemon.status && pokemon.status !== 'slp') {
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Normal",
},

fairylock: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Fairy Lock",
pp: 0.625,
priority: 0,
flags: {mirror: 1, bypasssub: 1},
pseudoWeather: 'fairylock',
condition: {
duration: 5,
onFieldStart(target) {
this.add('-fieldactivate', 'move: Fairy Lock');
},
onTrapPokemon(pokemon) {
pokemon.tryTrap();
},
},
secondary: null,
target: "all",
type: "Fairy",
},

fairywind: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Fairy Wind",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Fairy",
},

fakeout: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Fake Out",
pp: 0.625,
priority: 3,
flags: {contact: 1, protect: 1, mirror: 1},
onTry(source) {
if (source.activeMoveActions > 1) {
this.hint("Fake Out only works on your first turn out.");
return false;
}
},
secondary: {
chance: 75,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

faketears: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Fake Tears",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
volatileStatus: 'attract',
boosts: {
spd: -2,
def: -2,
},
secondary: null,
target: "any",
type: "Dark",
},

falsesurrender: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "False Surrender",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
selfBoost: {
accuracy: 1,
},
target: "any",
type: "Dark",
},

featherdance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Feather Dance",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, dance: 1},
boosts: {
atk: -2,
spa: -2,
},
secondary: null,
target: "any",
type: "Flying",
},

feint: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Feint",
pp: 0.625,
priority: 2,
flags: {mirror: 1},
breaksProtect: true,
// Breaking protection implemented in scripts.js
secondary: null,
target: "any",
type: "Normal",
},

feintattack: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Feint Attack",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
boosts: {
accuracy: 1,
},
target: "any",
type: "Dark",
},

fellstinger: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Fell Stinger",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (!target || target.fainted || target.hp <= 0) this.boost({atk: 2}, pokemon, pokemon, move);
},
secondary: null,
target: "any",
type: "Bug",
},

fierydance: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Fiery Dance",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, dance: 1},
secondary: {
chance: 50,
self: {
boosts: {
spa: 1,
},
},
},
target: "any",
type: "Fire",
},

fierywrath: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Fiery Wrath",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "allAdjacentFoes",
type: "Dark",
},

filletaway: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Fillet Away",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onTry(source) {
if (source.hp <= source.maxhp / 2 || source.maxhp === 1) return false;
},
onTryHit(pokemon, target, move) {
if (!this.boost(move.boosts as SparseBoostsTable)) return null;
delete move.boosts;
},
onHit(pokemon) {
this.directDamage(pokemon.maxhp / 2);
},
boosts: {
atk: 2,
spa: 2,
spe: 2,
},
secondary: null,
target: "self",
type: "Normal",
},

finalgambit: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
const damage = pokemon.hp;
pokemon.faint();
return damage;
},
category: "Special",
name: "Final Gambit",
pp: 1.25,
priority: 0,
flags: {protect: 1},
secondary: null,
target: "any",
type: "Fighting",
},

fireblast: {
accuracy: 85,
basePower: 110,
category: "Special",
name: "Fire Blast",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

firefang: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Fire Fang",
pp: 0.625,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondaries: [
{
chance: 33,
status: 'brn',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Fire",
},

firelash: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Fire Lash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
def: -1,
},
},
target: "any",
type: "Fire",
},

firepledge: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Fire Pledge",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
terrain: 'grassyterrain',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 8;
}
return 5;
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
this.debug('move weakened by grassy terrain');
return this.chainModify(0.5);
}
if (move.type === 'Grass' && attacker.isGrounded()) {
this.debug('grassy terrain boost');
return this.chainModify([5325, 4096]);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Grassy Terrain');
}
},
onResidualOrder: 5,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
} else {
this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'move: Grassy Terrain');
},
},
secondary: null,
target: "any",
type: "Fire",
},


firepunch: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Fire Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondaries: [
{
chance: 33,
status: 'brn',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Fire",
},

firespin: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Fire Spin",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Fire",
},

firstimpression: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "First Impression",
pp: 0.625,
priority: 2,
flags: {contact: 1, protect: 1, mirror: 1},
onTry(source) {
if (source.activeMoveActions > 1) {
this.hint("First Impression only works on your first turn out.");
return false;
}
},
secondary: null,
target: "any",
type: "Bug",
},

fishiousrend: {
accuracy: 85,
basePower: 85,
basePowerCallback(pokemon, target, move) {
if (target.newlySwitched || this.queue.willMove(target)) {
this.debug('Fishious Rend damage boost');
return move.basePower * 1.25;
}
this.debug('Fishious Rend NOT boosted');
return move.basePower;
},
category: "Physical",
name: "Fishious Rend",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [50, 100],
secondary: null,
target: "any",
type: "Water",
},

fissure: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target, move) {
const hp = target.hp;
const maxHP = target.maxhp;
const bp = Math.floor(Math.floor((120 * (100 * Math.floor(hp * 4096 / maxHP)) + 2048 - 1) / 4096) / 100) || 1;
this.debug('BP for ' + hp + '/' + maxHP + " HP: " + bp);
return bp;
},
category: "Physical",
name: "Fissure",
pp: 1.25,
priority: -2,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ground",
},

flail: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
let bp;
if (ratio < 2) {
bp = 200;
} else if (ratio < 5) {
bp = 150;
} else if (ratio < 10) {
bp = 100;
} else if (ratio < 17) {
bp = 80;
} else if (ratio < 33) {
bp = 40;
} else {
bp = 20;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Flail",
pp: 0.625,
priority: -2,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Normal",
},

flameburst: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Flame Burst",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onHit(target, source, move) {
for (const ally of target.adjacentAllies()) {
this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
}
},
onAfterSubDamage(damage, target, source, move) {
for (const ally of target.adjacentAllies()) {
this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
}
},
secondary: null,
target: "any",
type: "Fire",
},

flamecharge: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Flame Charge",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Fire",
},

flamewheel: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Flame Wheel",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

flamethrower: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Flamethrower",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

flareblitz: {
accuracy: 95,
basePower: 120,
category: "Physical",
name: "Flare Blitz",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
recoil: [33, 100],
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

flash: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Flash",
pp: 0.625,
priority: 4,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
evasion: -1,
},
secondary: null,
target: "allAdjacent",
type: "Normal",
},

flashcannon: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Flash Cannon",
pp: 0.625,
priority: 4,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Steel",
},

flatter: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Flatter",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
volatileStatus: 'confusion',
boosts: {
atk: 1,
spa: 2,
},
secondary: null,
target: "any",
type: "Dark",
},

fleurcannon: {
accuracy: 75,
basePower: 125,
category: "Special",
name: "Fleur Cannon",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
self: {
boosts: {
spa: -2,
},
},
secondary: null,
target: "any",
type: "Fairy",
},

fling: {
accuracy: 85,
basePower: 85,
category: "Physical",
name: "Fling",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 100,
onHit(target, source) {
const result = this.random(3);
if (result === 0) {
target.trySetStatus('tox', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else {
target.trySetStatus('slp', source);
}
},
},
volatileStatus: 'confusion',
target: "any",
type: "Dark",
},

flipturn: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Flip Turn",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
selfSwitch: true,
secondary: null,
target: "any",
type: "Water",
},

floralhealing: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Floral Healing",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, heal: 1, allyanim: 1},
onHit(target, source) {
let success = false;
if (this.field.isTerrain('grassyterrain')) {
success = !!this.heal(this.modify(target.baseMaxhp, 0.667));
} else {
success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
}
if (success && !target.isAlly(source)) {
target.staleness = 'external';
}
if (!success) {
this.add('-fail', target, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "any",
type: "Fairy",
},

flowershield: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Flower Shield",
pp: 1.25,
priority: 0,
flags: {distance: 1},
onHitField(t, source, move) {
const targets: Pokemon[] = [];
for (const pokemon of this.getAllActive()) {
if (
pokemon.hasType('Grass') &&
(!pokemon.volatiles['maxguard'] ||
this.runEvent('TryHit', pokemon, source, move))
) {
// This move affects every Grass-type Pokemon in play.
targets.push(pokemon);
}
}
let success = false;
for (const target of targets) {
success = this.boost({def: 1}, target, source, move) || success;
}
return success;
},
secondary: null,
target: "all",
type: "Fairy",
},

flowertrick: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Flower Trick",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Grass",
},

fly: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Fly",
pp: 1.25,
priority: 0,
flags: {charge: 1, contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onInvulnerability(target, source, move) {
if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
return;
}
return false;
},
onSourceModifyDamage(damage, source, target, move) {
if (move.id === 'gust' || move.id === 'twister') {
return this.chainModify(2);
}
},
},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "any",
type: "Flying",
},

flyingpress: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Flying Press",
pp: 0.625,
flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
onEffectiveness(typeMod, target, type, move) {
return typeMod + this.dex.getEffectiveness('Flying', type);
},
priority: 0,
secondary: null,
target: "any",
type: "Fighting",
},

focusblast: {
accuracy: 75,
basePower: 120,
category: "Special",
name: "Focus Blast",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Fighting",
},

focusenergy: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Focus Energy",
pp: 0.625,
priority: -1,
flags: {snatch: 1},
volatileStatus: 'focusenergy',
condition: {
onStart(target, source, effect) {
if (effect?.id === 'zpower') {
this.add('-start', target, 'move: Focus Energy', '[zeffect]');
} else if (effect && (['costar', 'imposter', 'psychup', 'transform'].includes(effect.id))) {
this.add('-start', target, 'move: Focus Energy', '[silent]');
} else {
this.add('-start', target, 'move: Focus Energy');
}
},
onModifyCritRatio(critRatio) {
return critRatio + 4;
},
},
boosts: {
chance: 100,
evasion: -2,
atk: 1.5,
spa: 1.5,
def: -1,
spd: -1,
},
secondary: null,
target: "self",
type: "Normal",
},

focuspunch: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Focus Punch",
pp: 1.25,
priority: -3,
flags: {contact: 1, protect: 1, punch: 1},
boosts: {
chance: 75,
accuracy: 1,
},
secondary: null,
target: "any",
type: "Fighting",
},

followme: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Follow Me",
pp: 0.625,
priority: 2,
flags: {},
volatileStatus: 'followme',
onTry(source) {
return this.activePerHalf > 1;
},
condition: {
duration: 1,
onStart(target, source, effect) {
if (effect?.id === 'zpower') {
this.add('-singleturn', target, 'move: Follow Me', '[zeffect]');
} else {
this.add('-singleturn', target, 'move: Follow Me');
}
},
onFoeRedirectTargetPriority: 1,
onFoeRedirectTarget(target, source, source2, move) {
if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
if (move.smartTarget) move.smartTarget = false;
this.debug("Follow Me redirected target of move");
return this.effectState.target;
}
},
},
secondary: null,
target: "self",
type: "Normal",
},

forcepalm: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Force Palm",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Fighting",
},

foresight: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Foresight",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
volatileStatus: 'foresight',
onTryHit(target) {
if (target.volatiles['miracleeye']) return false;
},
condition: {
noCopy: true,
onStart(pokemon) {
this.add('-start', pokemon, 'Foresight');
},
onNegateImmunity(pokemon, type) {
if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
},
onModifyBoost(boosts) {
if (boosts.evasion && boosts.evasion > 0) {
boosts.evasion = 0;
}
},
},
secondary: null,
target: "any",
type: "Normal",
},

forestscurse: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Forest's Curse",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target) {
if (target.hasType('Grass')) return false;
if (!target.addType('Grass')) return false;
this.add('-start', target, 'typeadd', 'Grass', '[from] move: Forest\'s Curse');
},
secondary: null,
target: "any",
type: "Grass",
},

foulplay: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Foul Play",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
overrideOffensivePokemon: 'target',
secondary: null,
target: "any",
type: "Dark",
},

freezedry: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Freeze Dry",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Water') return 1;
},
secondary: {
chance: 25,
status: 'frz',
},
target: "any",
type: "Ice",
},

freezeshock: {
accuracy: 95,
basePower: 140,
category: "Physical",
name: "Freeze Shock",
pp: 0.625,
priority: 0,
flags: {charge: 1, protect: 1, mirror: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: {
chance: 33,
status: 'frz',
},
target: "any",
type: "Ice",
},

freezingglare: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Freezing Glare",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'frz',
},
target: "any",
type: "Psychic",
},

frenzyplant: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Frenzy Plant",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Grass",
},

frostbreath: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Frost Breath",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Ice",
},

furyattack: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Fury Attack",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

furycutter: {
accuracy: 95,
basePower: 15,
basePowerCallback(pokemon, target, move) {
return 15 * move.hit;
},
category: "Physical",
name: "Fury Cutter",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
recoil: [33, 100],
multihit: [1, 10],
multiaccuracy: 75,
secondary: null,
target: "any",
type: "Bug",
},

furyswipes: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Fury Swipes",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 95,
secondary: null,
target: "any",
type: "Normal",
},

fusionbolt: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Fusion Bolt",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower, pokemon) {
if (this.lastSuccessfulMoveThisTurn === 'fusionflare') {
this.debug('double power');
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Electric",
},

fusionflare: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Fusion Flare",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
onBasePower(basePower, pokemon) {
if (this.lastSuccessfulMoveThisTurn === 'fusionbolt') {
this.debug('double power');
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Fire",
},

futuresight: {
accuracy: 95,
basePower: 120,
category: "Special",
name: "Future Sight",
pp: 0.625,
priority: 0,
flags: {allyanim: 1, futuremove: 1},
ignoreImmunity: true,
onTry(source, target) {
if (!target.side.addSlotCondition(target, 'futuremove')) return false;
Object.assign(target.side.slotConditions[target.position]['futuremove'], {
duration: 3,
move: 'futuresight',
source: source,
moveData: {
id: 'futuresight',
name: "Future Sight",
accuracy: 95,
basePower: 120,
category: "Special",
priority: 0,
flags: {allyanim: 1, futuremove: 1},
ignoreImmunity: false,
effectType: 'Move',
type: 'Psychic',
},
});
this.add('-start', source, 'move: Future Sight');
return this.NOT_FAIL;
},
secondary: null,
target: "any",
type: "Psychic",
},

gastroacid: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Gastro Acid",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
volatileStatus: 'gastroacid',
onTryHit(target) {
if (target.getAbility().isPermanent) {
return false;
}
if (target.hasItem('Ability Shield')) {
this.add('-block', target, 'item: Ability Shield');
return null;
}
},
condition: {
// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
onStart(pokemon) {
if (pokemon.hasItem('Ability Shield')) return false;
this.add('-endability', pokemon);
this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon, pokemon, 'gastroacid');
},
onCopy(pokemon) {
if (pokemon.getAbility().isPermanent) pokemon.removeVolatile('gastroacid');
},
},
secondary: null,
target: "any",
type: "Poison",
},

geargrind: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Gear Grind",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Steel",
},

gearup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Gear Up",
pp: 1.25,
priority: 0,
flags: {snatch: 1, bypasssub: 1},
onHitSide(side, source, move) {
const targets = side.allies().filter(target => (
target.hasAbility(['plus', 'minus']) &&
(!target.volatiles['maxguard'] || this.runEvent('TryHit', target, source, move))
));
if (!targets.length) return false;
let didSomething = false;
for (const target of targets) {
didSomething = this.boost({atk: 1, spa: 1}, target, source, move, false, true) || didSomething;
}
return didSomething;
},
secondary: null,
target: "allySide",
type: "Steel",
},

genesissupernova: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Genesis Supernova",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
onHit() {
this.field.setTerrain('psychicterrain');
},
},
},
target: "any",
type: "Psychic",
},

geomancy: {
accuracy: 95,
basePower: 120,
category: "Physical",
name: "Geomancy",
pp: 0.625,
priority: 0,
flags: {charge: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: -1, spd: -2, evasion: 2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: null,
target: "any",
type: "Fairy",
},

gigadrain: {
accuracy: 95,
basePower: 95,
category: "Special",
name: "Giga Drain",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, heal: 1},
drain: [33, 100],
secondary: null,
target: "any",
type: "Grass",
},

gigaimpact: {
accuracy: 85,
basePower: 150,
category: "Physical",
name: "Giga Impact",
pp: 0.625,
priority: 0,
flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Normal",
},

gigatonhammer: {
accuracy: 95,
basePower: 115,
category: "Physical",
name: "Gigaton Hammer",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onTry(source) {
if (source.activeMoveActions < 2) {
this.hint("First Impression only works on your first turn out.");
return false;
}
},
onDisableMove(pokemon) {
if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.disableMove('gigatonhammer');
},
beforeMoveCallback(pokemon) {
if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.addVolatile('gigatonhammer');
},
onAfterMove(pokemon) {
if (pokemon.removeVolatile('gigatonhammer')) {
this.add('-hint', "Some effects can force a Pokemon to use Gigaton Hammer again in a row.");
}
},
condition: {},
secondary: null,
target: "any",
type: "Steel",
},

gigavolthavoc: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Gigavolt Havoc",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
status: 'par',
},
target: "randomNormal",
type: "Electric",
},

glaciallance: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Glacial Lance",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Ice",
},

glaciate: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Glaciate",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "allAdjacentFoes",
type: "Ice",
},

glaiverush: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Glaive Rush",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'glaiverush',
},
condition: {
noCopy: true,
onStart(pokemon) {
this.add('-singlemove', pokemon, 'Glaive Rush', '[silent]');
},
onAccuracy() {
return true;
},
onSourceModifyDamage() {
return this.chainModify(2);
},
onBeforeMovePriority: 100,
onBeforeMove(pokemon) {
this.debug('removing Glaive Rush drawback before attack');
pokemon.removeVolatile('glaiverush');
},
},
secondary: null,
target: "any",
type: "Dragon",
},

glare: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Glare",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'par',
secondary: null,
target: "any",
type: "Normal",
},

grassknot: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const targetWeight = target.getWeight();
let bp;
if (targetWeight >= 2000) {
bp = 150;
} else if (targetWeight >= 1000) {
bp = 120;
} else if (targetWeight >= 500) {
bp = 100;
} else if (targetWeight >= 250) {
bp = 80;
} else if (targetWeight >= 100) {
bp = 40;
} else {
bp = 20;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Grass Knot",
pp: 1.25,
priority: -10,
flags: {contact: 1, protect: 1, mirror: 1},
onTryHit(target, source, move) {
if (target.volatiles['dynamax']) {
this.add('-fail', source, 'move: Grass Knot', '[from] Dynamax');
this.attrLastMove('[still]');
return null;
}
},
secondary: null,
target: "any",
type: "Grass",
},

grasspledge: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Grass Pledge",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
weather: 'RainDance',
secondary: null,
target: "any",
type: "Grass",
},

grasswhistle: {
accuracy: 75,
basePower: 40,
category: "Special",
name: "Grass Whistle",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 80,
status: 'slp',
},
target: "any",
type: "Grass",
},

grassyglide: {
accuracy: 87,
basePower: 60,
category: "Physical",
name: "Grassy Glide",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onModifyPriority(priority, source, target, move) {
if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
return priority + 2;
}
},
secondary: null,
target: "any",
type: "Grass",
},

grassyterrain: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Grassy Terrain",
pp: 0.625,
priority: 0,
flags: {},
terrain: 'grassyterrain',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 8;
}
return 5;
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
this.debug('move weakened by grassy terrain');
return this.chainModify(0.5);
}
if (move.type === 'Grass' && attacker.isGrounded()) {
this.debug('grassy terrain boost');
return this.chainModify([5325, 4096]);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Grassy Terrain');
}
},
onResidualOrder: 5,
onResidualSubOrder: 2,
onResidual(pokemon) {
if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
} else {
this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'move: Grassy Terrain');
},
},
secondary: null,
target: "all",
type: "Grass",
},

gravapple: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Grav Apple",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower) {
if (this.field.getPseudoWeather('gravity')) {
return this.chainModify(1.5);
}
},
secondary: {
chance: 75,
boosts: {
def: -1,
},
},
target: "any",
type: "Grass",
},

gravity: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Gravity",
pp: 0.625,
priority: 0,
flags: {},
pseudoWeather: 'gravity',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Gravity');
return 7;
}
return 5;
},
onFieldStart(target, source) {
if (source?.hasAbility('persistent')) {
this.add('-fieldstart', 'move: Gravity', '[persistent]');
} else {
this.add('-fieldstart', 'move: Gravity');
}
for (const pokemon of this.getAllActive()) {
let applies = false;
if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly')) {
applies = true;
this.queue.cancelMove(pokemon);
pokemon.removeVolatile('twoturnmove');
}
if (pokemon.volatiles['skydrop']) {
applies = true;
this.queue.cancelMove(pokemon);

if (pokemon.volatiles['skydrop'].source) {
this.add('-end', pokemon.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
}
pokemon.removeVolatile('skydrop');
pokemon.removeVolatile('twoturnmove');
}
if (pokemon.volatiles['magnetrise']) {
applies = true;
delete pokemon.volatiles['magnetrise'];
}
if (pokemon.volatiles['telekinesis']) {
applies = true;
delete pokemon.volatiles['telekinesis'];
}
if (applies) this.add('-activate', pokemon, 'move: Gravity');
}
},
onModifyAccuracy(accuracy) {
if (typeof accuracy !== 'number') return;
return this.chainModify([6840, 4096]);
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
if (this.dex.moves.get(moveSlot.id).flags['gravity']) {
pokemon.disableMove(moveSlot.id);
}
}
},
// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
onBeforeMovePriority: 6,
onBeforeMove(pokemon, target, move) {
if (move.flags['gravity'] && !move.isZ) {
this.add('cant', pokemon, 'move: Gravity', move);
return false;
}
},
onModifyMove(move, pokemon, target) {
if (move.flags['gravity'] && !move.isZ) {
this.add('cant', pokemon, 'move: Gravity', move);
return false;
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 2,
onFieldEnd() {
this.add('-fieldend', 'move: Gravity');
},
},
secondary: null,
target: "all",
type: "Psychic",
},

growl: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Growl",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
boosts: {
atk: -1,
spa: -1,
},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

growth: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Growth",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onModifyMove(move, pokemon) {
if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
},
boosts: {
atk: 1,
spa: 1,
spe: -2,
spd: 1,
def: 1,
evasion: -2,
},
secondary: null,
target: "self",
type: "Normal",
},

grudge: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Grudge",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
pseudoWeather: 'fairylock',
secondary: null,
target: "any",
type: "Ghost",
},

guardianofalola: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon, target) {
const hp75 = Math.floor(target.getUndynamaxedHP() * 2 / 3);
if (
target.volatiles['protect'] || target.volatiles['banefulbunker'] || target.volatiles['kingsshield'] ||
target.volatiles['spikyshield'] || target.side.getSideCondition('matblock')
) {
this.add('-zbroken', target);
return this.clampIntRange(Math.ceil(hp75 / 4 - 0.5), 1);
}
return this.clampIntRange(hp75, 1);
},
category: "Special",
name: "Guardian of Alola",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: null,
target: "any",
type: "Fairy",
},

guardsplit: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Guard Split",
pp: 1.25,
priority: 0,
flags: {protect: 1, allyanim: 1},
onHit(target, source) {
const newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
target.storedStats.def = newdef;
source.storedStats.def = newdef;
const newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
target.storedStats.spd = newspd;
source.storedStats.spd = newspd;
this.add('-activate', source, 'move: Guard Split', '[of] ' + target);
},
secondary: null,
target: "any",
type: "Psychic",
},

guardswap: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Guard Swap",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
const targetBoosts: SparseBoostsTable = {};
const sourceBoosts: SparseBoostsTable = {};

const defSpd: BoostID[] = ['def', 'spd'];
for (const stat of defSpd) {
targetBoosts[stat] = target.boosts[stat];
sourceBoosts[stat] = source.boosts[stat];
}

source.setBoost(targetBoosts);
target.setBoost(sourceBoosts);

this.add('-swapboost', source, target, 'def, spd', '[from] move: Guard Swap');
},
secondary: null,
target: "any",
type: "Psychic",
},

gunkshot: {
accuracy: 75,
basePower: 115,
category: "Physical",
name: "Gunk Shot",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'tox',
},
target: "any",
type: "Poison",
},

gust: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Gust",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Flying",
},

gyroball: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
let power = Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) + 1;
if (!isFinite(power)) power = 1;
if (power > 150) power = 150;
this.debug('BP: ' + power);
return power;
},
category: "Physical",
name: "Gyro Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Steel",
},

hail: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Hail",
pp: 0.625,
priority: 0,
flags: {},
weather: 'hail',
secondary: null,
target: "allAdjacentFoes",
type: "Ice",
},

hammerarm: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Hammer Arm",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
self: {
boosts: {
spe: -1,
},
},
secondary: null,
target: "any",
type: "Fighting",
},

harden: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Harden",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spe: -1,
spd: 1,
def: 1,
evasion: -1,
},
secondary: null,
target: "self",
type: "Normal",
},

haze: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Haze",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
onHitField() {
this.add('-clearallboost');
for (const pokemon of this.getAllActive()) {
pokemon.clearBoosts();
}
},
secondary: null,
target: "all",
type: "Ice",
},

headbutt: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Headbutt",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

headcharge: {
accuracy: 95,
basePower: 115,
category: "Physical",
name: "Head Charge",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [25, 100],
secondary: null,
target: "any",
type: "Normal",
},

headlongrush: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Headlong Rush",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
self: {
boosts: {
def: -1,
},
},
secondary: null,
target: "any",
type: "Ground",
},

headsmash: {
accuracy: 75,
basePower: 135,
category: "Physical",
name: "Head Smash",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [50, 100],
secondary: null,
target: "any",
type: "Rock",
},

healbell: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Heal Bell",
pp: 0.625,
priority: 1,
flags: {snatch: 1, sound: 1, distance: 1, bypasssub: 1},
onHit(target, source) {
this.add('-activate', source, 'move: Heal Bell');
let success = false;
const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
for (const ally of allies) {
if (ally !== source && ally.hasAbility('soundproof')) continue;
if (ally.cureStatus()) success = true;
}
return success;
},
target: "allyTeam",
type: "Normal",
},

healblock: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Heal Block",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'healblock',
condition: {
duration: 5,
durationCallback(target, source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
return 7;
}
return 5;
},
onStart(pokemon, source) {
this.add('-start', pokemon, 'move: Heal Block');
source.moveThisTurnResult = true;
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
if (this.dex.moves.get(moveSlot.id).flags['heal']) {
pokemon.disableMove(moveSlot.id);
}
}
},
onBeforeMovePriority: 6,
onBeforeMove(pokemon, target, move) {
if (move.flags['heal'] && !move.isZ && !move.isMax) {
this.add('cant', pokemon, 'move: Heal Block', move);
return false;
}
},
onModifyMove(move, pokemon, target) {
if (move.flags['heal'] && !move.isZ && !move.isMax) {
this.add('cant', pokemon, 'move: Heal Block', move);
return false;
}
},
onResidualOrder: 20,
onEnd(pokemon) {
this.add('-end', pokemon, 'move: Heal Block');
},
onTryHeal(damage, target, source, effect) {
if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
return false;
},
onRestart(target, source) {
this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
if (!source.moveThisTurnResult) {
source.moveThisTurnResult = false;
}
},
},
secondary: null,
target: "allAdjacentFoes",
type: "Psychic",
},

healingwish: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Healing Wish",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1},
onTryHit(source) {
if (!this.canSwitch(source.side)) {
this.attrLastMove('[still]');
this.add('-fail', source);
return this.NOT_FAIL;
}
},
selfdestruct: "ifHit",
slotCondition: 'healingwish',
condition: {
onSwap(target) {
if (!target.fainted && (target.hp < target.maxhp || target.status)) {
target.heal(target.maxhp);
target.clearStatus();
this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
target.side.removeSlotCondition(target, 'healingwish');
}
},
},
secondary: null,
target: "self",
type: "Psychic",
},

healorder: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Heal Order",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
heal: [50, 100],
secondary: null,
target: "self",
type: "Bug",
},

healpulse: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Heal Pulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, pulse: 1, reflectable: 1, distance: 1, heal: 1, allyanim: 1},
onHit(target, source) {
let success = false;
if (source.hasAbility('megalauncher')) {
success = !!this.heal(this.modify(target.baseMaxhp, 0.75));
} else {
success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
}
if (success && !target.isAlly(source)) {
target.staleness = 'external';
}
if (!success) {
this.add('-fail', target, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "any",
type: "Psychic",
},

heartstamp: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Heart Stamp",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Psychic",
},

heartswap: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Heart Swap",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
const targetBoosts: SparseBoostsTable = {};
const sourceBoosts: SparseBoostsTable = {};

let i: BoostID;
for (i in target.boosts) {
targetBoosts[i] = target.boosts[i];
sourceBoosts[i] = source.boosts[i];
}

target.setBoost(sourceBoosts);
source.setBoost(targetBoosts);

this.add('-swapboost', source, target, '[from] move: Heart Swap');
},
secondary: null,
target: "any",
type: "Psychic",
},

heatcrash: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const targetWeight = target.getWeight();
const pokemonWeight = pokemon.getWeight();
let bp;
if (pokemonWeight >= targetWeight * 5) {
bp = 150;
} else if (pokemonWeight >= targetWeight * 4) {
bp = 120;
} else if (pokemonWeight >= targetWeight * 3) {
bp = 100;
} else if (pokemonWeight >= targetWeight * 2) {
bp = 80;
} else {
bp = 60;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Heat Crash",
pp: 0.625,
priority: -10,
flags: {contact: 1, protect: 1, mirror: 1},
onTryHit(target, pokemon, move) {
if (target.volatiles['dynamax']) {
this.add('-fail', pokemon, 'Dynamax');
this.attrLastMove('[still]');
return null;
}
},
secondary: null,
target: "any",
type: "Fire",
},

heatwave: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Heat Wave",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 33,
status: 'brn',
},
target: "allAdjacentFoes",
type: "Fire",
},

heavyslam: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const targetWeight = target.getWeight();
const pokemonWeight = pokemon.getWeight();
let bp;
if (pokemonWeight >= targetWeight * 5) {
bp = 150;
} else if (pokemonWeight >= targetWeight * 4) {
bp = 120;
} else if (pokemonWeight >= targetWeight * 3) {
bp = 100;
} else if (pokemonWeight >= targetWeight * 2) {
bp = 80;
} else {
bp = 60;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Heavy Slam",
pp: 0.625,
priority: -10,
flags: {contact: 1, protect: 1, mirror: 1},
onTryHit(target, pokemon, move) {
if (target.volatiles['dynamax']) {
this.add('-fail', pokemon, 'Dynamax');
this.attrLastMove('[still]');
return null;
}
},
secondary: null,
target: "any",
type: "Steel",
},

helpinghand: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Helping Hand",
pp: 0.625,
priority: 5,
flags: {bypasssub: 1},
volatileStatus: 'helpinghand',
onTryHit(target) {
if (!target.newlySwitched && !this.queue.willMove(target)) return false;
},
condition: {
duration: 1,
onStart(target, source) {
this.effectState.multiplier = 1.55;
this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
},
onRestart(target, source) {
this.effectState.multiplier *= 1.55;
this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
},
onBasePowerPriority: 10,
onBasePower(basePower) {
this.debug('Boosting from Helping Hand: ' + this.effectState.multiplier);
return this.chainModify(this.effectState.multiplier);
},
},
secondary: null,
target: "adjacentAlly",
type: "Normal",
},

hex: {
accuracy: 95,
basePower: 65,
basePowerCallback(pokemon, target, move) {
if (target.status || target.hasAbility('comatose')) {
this.debug('BP doubled from status condition');
return move.basePower * 2;
}
return move.basePower;
},
category: "Special",
name: "Hex",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ghost",
},

highhorsepower: {
accuracy: 75,
basePower: 140,
category: "Physical",
name: "High Horsepower",
pp: 0.625,
priority: 3,
flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "randomNormal",
type: "Ground",
},

highjumpkick: {
accuracy: 75,
basePower: 130,
category: "Physical",
name: "High Jump Kick",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "any",
type: "Fighting",
},

holdback: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Hold Back",
pp: 1.25,
priority: 0,
flags: {},
boosts: {
atk: 1,
spa: 1,
spe: -1,
eva: -1,
},
target: "allies",
type: "Normal",
},

honeclaws: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Hone Claws",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 2,
accuracy: 2,
evasion: -2,
},
secondary: null,
target: "self",
type: "Dark",
},

hornattack: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Horn Attack",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Normal",
},

horndrill: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Horn Drill",
pp: 0.625,
priority: 0,
flags: {charge: 1, contact: 1, protect: 1, mirror: 1},
weather: 'Sandstorm',



onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 2, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onImmunity(type, pokemon) {
if (type === 'sandstorm' || type === 'hail') return false;
},
onInvulnerability(target, source, move) {
if (['earthquake', 'magnitude'].includes(move.id)) {
return;
}
return false;
},
onSourceModifyDamage(damage, source, target, move) {
if (move.id === 'earthquake' || move.id === 'magnitude') {
return this.chainModify(2);
}
},
},
secondary: null,
target: "any",
type: "Normal",
},

hornleech: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Horn Leech",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
drain: [40, 100],
secondary: null,
target: "any",
type: "Grass",
},

howl: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Howl",
pp: 0.625,
priority: 1,
flags: {snatch: 1, sound: 1},
boosts: {
atk: 1,
spa: 1,
},
secondary: null,
target: "allies",
type: "Normal",
},

hurricane: {
accuracy: 75,
basePower: 115,
category: "Special",
name: "Hurricane",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
onModifyMove(move, pokemon, target) {
switch (target?.effectiveWeather()) {
case 'raindance':
case 'primordialsea':
move.accuracy = true;
break;
case 'sunnyday':
case 'desolateland':
move.accuracy = 50;
break;
}
},
secondary: {
chance: 33,
volatileStatus: 'confusion',
},
target: "any",
type: "Flying",
},

hydrocannon: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Hydro Cannon",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Water",
},

hydropump: {
accuracy: 75,
basePower: 115,
category: "Special",
name: "Hydro Pump",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Water",
},

hydrosteam: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Hydro Steam",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
// Damage boost in Sun applied in conditions.ts
thawsTarget: true,
secondary: null,
target: "any",
type: "Water",
},

hydrovortex: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Hydro Vortex",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Water",
},

hyperbeam: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Hyper Beam",
pp: 0.625,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Normal",
},

hyperdrill: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Hyper Drill",
pp: 0.625,
priority: 0,
flags: {contact: 1, mirror: 1},
secondary: null,
target: "any",
type: "Normal",
},

hyperfang: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Hyper Fang",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

hyperspacefury: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Hyperspace Fury",
pp: 0.625,
priority: 0,
flags: {mirror: 1, bypasssub: 1},
breaksProtect: true,
onTry(source) {
if (source.species.name === 'Hoopa-Unbound') {
return;
}
this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
if (source.species.name === 'Hoopa') {
this.attrLastMove('[still]');
this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
return null;
}
this.attrLastMove('[still]');
this.add('-fail', source, 'move: Hyperspace Fury');
return null;
},
self: {
boosts: {
def: -1,
},
},
secondary: null,
target: "any",
type: "Dark",
},

hyperspacehole: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Hyperspace Hole",
pp: 1.25,
priority: 0,
flags: {mirror: 1, bypasssub: 1},
breaksProtect: true,
secondary: null,
target: "any",
type: "Psychic",
},

hypervoice: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Hyper Voice",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

hypnosis: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Hypnosis",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'slp',
secondary: null,
target: "allAdjacent",
type: "Psychic",
},

iceball: {
accuracy: 95,
basePower: 15,
basePowerCallback(pokemon, target, move) {
return 15 * move.hit;
},
category: "Physical",
name: "Ice Ball",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
multihit: [1, 10],
multiaccuracy: 75,
secondary: null,
target: "any",
type: "Ice",
},


icebeam: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Ice Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'frz',
},
target: "any",
type: "Ice",
},

iceburn: {
accuracy: 95,
basePower: 140,
category: "Special",
name: "Ice Burn",
pp: 0.625,
priority: 0,
flags: {charge: 1, protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Ice') return 1;
},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({spa: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: {
chance: 33,
status: 'brn',
},
target: "any",
type: "Ice",
},

icefang: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Ice Fang",
pp: 0.625,
priority: 1,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondaries: [
{
chance: 33,
status: 'frz',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Ice",
},

icehammer: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Ice Hammer",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
self: {
boosts: {
spe: -1,
},
},
secondary: null,
target: "any",
type: "Ice",
},

icepunch: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Ice Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondaries: [
{
chance: 33,
status: 'frz',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Ice",
},

iceshard: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Ice Shard",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Ice",
},

icespinner: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Ice Spinner",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onHit() {
this.field.clearTerrain();
},
onAfterSubDamage() {
this.field.clearTerrain();
},
secondary: null,
target: "any",
type: "Ice",
},

iciclecrash: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Icicle Crash",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Ice",
},

iciclespear: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Icicle Spear",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
secondary: null,
target: "any",
type: "Ice",
},

icywind: {
accuracy: 95,
basePower: 55,
category: "Special",
name: "Icy Wind",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "allAdjacentFoes",
type: "Ice",
},

imprison: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Imprison",
pp: 1.25,
priority: 0,
flags: {snatch: 1, bypasssub: 1},
volatileStatus: 'imprison',
condition: {
noCopy: true,
onStart(target) {
this.add('-start', target, 'move: Imprison');
},
onFoeDisableMove(pokemon) {
for (const moveSlot of this.effectState.source.moveSlots) {
if (moveSlot.id === 'struggle') continue;
pokemon.disableMove(moveSlot.id, 'hidden');
}
pokemon.maybeDisabled = true;
},
onFoeBeforeMovePriority: 4,
onFoeBeforeMove(attacker, defender, move) {
if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
this.add('cant', attacker, 'move: Imprison', move);
return false;
}
},
},
secondary: null,
target: "self",
type: "Psychic",
},

incinerate: {
accuracy: 85,
basePower: 40,
category: "Special",
name: "Incinerate",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 1,
onBasePower(basePower, source, target, move) {
const item = target.getItem();
if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
if (item.id) {
return this.chainModify(1.5);
}
},
onAfterHit(target, source) {
if (source.hp) {
const item = target.takeItem();
if (item) {
this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
}
}
},
secondary: {
chance: 50,
status: 'brn',
},
target: "allAdjacentFoes",
type: "Fire",
},

infernalparade: {
accuracy: 95,
basePower: 60,
basePowerCallback(pokemon, target, move) {
if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
return move.basePower;
},
category: "Special",
name: "Infernal Parade",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Ghost",
},

inferno: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Inferno",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
status: 'brn',
},
target: "any",
type: "Fire",
},

infernooverdrive: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Inferno Overdrive",
pp: 0.625,
priority: 3,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 50,
status: 'brn',
},
target: "any",
type: "Fire",
},

infestation: {
accuracy: 85,
basePower: 40,
category: "Special",
name: "Infestation",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Bug",
},

ingrain: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Ingrain",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'ingrain',
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'move: Ingrain');
},
onResidualOrder: 7,
onResidual(pokemon) {
this.heal(pokemon.baseMaxhp / 10);
},
onTrapPokemon(pokemon) {
pokemon.tryTrap();
},
// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
onDragOut(pokemon) {
this.add('-activate', pokemon, 'move: Ingrain');
return null;
},
},
secondary: null,
target: "self",
type: "Grass",
},

instruct: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Instruct",
pp: 1.25,
priority: 0,
flags: {protect: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
if (!target.lastMove || target.volatiles['dynamax']) return false;
const lastMove = target.lastMove;
const moveIndex = target.moves.indexOf(lastMove.id);
if (
lastMove.flags['failinstruct'] || lastMove.isZ || lastMove.isMax ||
lastMove.flags['charge'] || lastMove.flags['recharge'] ||
target.volatiles['beakblast'] || target.volatiles['focuspunch'] || target.volatiles['shelltrap'] ||
(target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)
) {
return false;
}
this.add('-singleturn', target, 'move: Instruct', '[of] ' + source);
this.queue.prioritizeAction(this.queue.resolveAction({
choice: 'move',
pokemon: target,
moveid: target.lastMove.id,
targetLoc: target.lastMoveTargetLoc!,
})[0] as MoveAction);
},
secondary: null,
target: "any",
type: "Psychic",
},

iondeluge: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Ion Deluge",
pp: 0.625,
flags: {},
pseudoWeather: 'iondeluge',
condition: {
duration: 1,
onFieldStart(target, source, sourceEffect) {
this.add('-fieldactivate', 'move: Ion Deluge');
this.hint(`Normal-type moves become Electric-type after using ${sourceEffect}.`);
},
onModifyTypePriority: -2,
onModifyType(move) {
if (move.type === 'Normal') {
move.type = 'Electric';
this.debug(move.name + "'s type changed to Electric");
}
},
},
secondary: null,
target: "all",
type: "Electric",
},

irondefense: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Iron Defense",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 2,
def: 2,
evasion: -2,
},
secondary: null,
target: "self",
type: "Steel",
},

ironhead: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Iron Head",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Steel",
},

irontail: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Iron Tail",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
def: -1,
},
},
target: "any",
type: "Steel",
},

jawlock: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Jaw Lock",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
onHit(target, source, move) {
source.addVolatile('trapped', target, move, 'trapper');
target.addVolatile('trapped', source, move, 'trapper');
},
secondary: null,
target: "any",
type: "Dark",
},

jetpunch: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Jet Punch",
pp: 0.625,
priority: 6,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 5, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
hasSheerForce: true,
target: "any",
type: "Water",
},

jumpkick: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Jump Kick",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('Jump Kick'));
},
secondary: null,
target: "any",
type: "Fighting",
},

junglehealing: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Jungle Healing",
pp: 1.25,
priority: 0,
flags: {heal: 1, bypasssub: 1, allyanim: 1},
onHit(pokemon) {
const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
return pokemon.cureStatus() || success;
},
secondary: null,
target: "allies",
type: "Grass",
},

karatechop: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Karate Chop",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Fighting",
},

kinesis: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Kinesis",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (!target || target.fainted || target.hp <= 0) this.boost({spa: 2}, pokemon, pokemon, move);
},
secondary: null,
target: "any",
type: "Psychic",
},

kingsshield: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "King's Shield",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'kingsshield',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect'] || move.category === 'Status') {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
if (this.checkMoveMakesContact(move, source, target)) {
this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
}
return this.NOT_FAIL;
},
onHit(target, source, move) {
if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
}
},
},
secondary: null,
target: "self",
type: "Steel",
},

knockoff: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Knock Off",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, source, target, move) {
const item = target.getItem();
if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
if (item.id) {
return this.chainModify(1.5);
}
},
onAfterHit(target, source) {
if (source.hp) {
const item = target.takeItem();
if (item) {
this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
}
}
},
secondary: null,
target: "any",
type: "Dark",
},

kowtowcleave: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Kowtow Cleave",
pp: 1.25,
priority: -5,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Dark",
},

landswrath: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Land's Wrath",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Ground",
},

lashout: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Lash Out",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, source) {
if (source.statsLoweredThisTurn) {
this.debug('lashout buff');
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Dark",
},

lastresort: {
accuracy: 75,
basePower: 80,
Damage: 50,
category: "Physical",
name: "Last Resort",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 3,
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 1, source, source, this.dex.conditions.get('High Jump Kick'));
},
drain: [100, 100],
secondary: null,
target: "any",
type: "Normal",
},

lastrespects: {
accuracy: 95,
basePower: 50,
basePowerCallback(pokemon, target, move) {
return 50 + 50 * pokemon.side.totalFainted;
},
category: "Physical",
name: "Last Respects",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ghost",
},

lavaplume: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Lava Plume",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "allAdjacent",
type: "Fire",
},

leafage: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Leafage",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Grass",
},

leafblade: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Leaf Blade",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Grass",
},

leafstorm: {
accuracy: 85,
basePower: 130,
category: "Special",
name: "Leaf Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
self: {
boosts: {
spa: -2,
},
},
secondary: null,
target: "any",
type: "Grass",
},

leaftornado: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Leaf Tornado",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
evasion: -1,
},
},
target: "any",
type: "Grass",
},

leechlife: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Leech Life",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
drain: [50, 100],
secondary: null,
target: "any",
type: "Bug",
},

leechseed: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Leech Seed",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'leechseed',
condition: {
onStart(target) {
this.add('-start', target, 'move: Leech Seed');
},
onResidualOrder: 8,
onResidual(pokemon) {
const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
if (!target || target.fainted || target.hp <= 0) {
this.debug('Nothing to leech into');
return;
}
const damage = this.damage(pokemon.baseMaxhp / 6.666, pokemon, target);
if (damage) {
this.heal(damage, target, pokemon);
}
},
},
onTryImmunity(target) {
return !target.hasType('Grass');
},
secondary: null,
target: "any",
type: "Grass",
},

leer: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Leer",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
spd: -1,
def: -1,
},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

letssnuggleforever: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Let's Snuggle Forever",
pp: 1.25,
priority: 0,
flags: {contact: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Fairy",
},

lick: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Lick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
status: 'par',
},
target: "any",
type: "Ghost",
},

lifedew: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Life Dew",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1, bypasssub: 1},
heal: [33, 100],
secondary: null,
target: "allies",
type: "Water",
},

lightofruin: {
accuracy: 85,
basePower: 140,
category: "Special",
name: "Light of Ruin",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
recoil: [50, 100],
secondary: null,
target: "any",
type: "Fairy",
},

lightscreen: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Light Screen",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'lightscreen',
condition: {
duration: 5,
durationCallback(target, source, effect) {
if (source?.hasItem('lightclay')) {
return 8;
}
return 5;
},
onAnyModifyDamage(damage, source, target, move) {
if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
if (!target.getMoveHitData(move).crit && !move.infiltrates) {
this.debug('Light Screen weaken');
if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
return this.chainModify(0.5);
}
}
},
onSideStart(side) {
this.add('-sidestart', side, 'move: Light Screen');
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 2,
onSideEnd(side) {
this.add('-sideend', side, 'move: Light Screen');
},
},
secondary: null,
target: "allySide",
type: "Psychic",
},

lightthatburnsthesky: {
accuracy: 85,
basePower: 125,
category: "Special",
name: "Light That Burns the Sky",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1,},
onModifyMove(move, pokemon) {
if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
},
ignoreAbility: true,
secondary: null,
target: "any",
type: "Psychic",
},

liquidation: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Liquidation",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
def: -1,
},
},
target: "any",
type: "Water",
},

lockon: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Lock On",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onTryHit(target, source) {
if (source.volatiles['lockon']) return false;
},
onHit(target, source) {
source.addVolatile('lockon', target);
this.add('-activate', source, 'move: Lock On', '[of] ' + target);
},
condition: {
noCopy: true, // doesn't get copied by Baton Pass
duration: 2,
onSourceInvulnerabilityPriority: 1,
onSourceInvulnerability(target, source, move) {
if (move && source === this.effectState.target && target === this.effectState.source) return 0;
},
onSourceAccuracy(accuracy, target, source, move) {
if (move && source === this.effectState.target && target === this.effectState.source) return true;
},
},
secondary: null,
target: "any",
type: "Normal",
},

lovelykiss: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Lovely Kiss",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
secondary: {
chance: 90,
status: 'slp',
},
target: "any",
type: "Normal",
},

lowkick: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const targetWeight = target.getWeight();
let bp;
if (targetWeight >= 2000) {
bp = 150;
} else if (targetWeight >= 1000) {
bp = 120;
} else if (targetWeight >= 500) {
bp = 100;
} else if (targetWeight >= 250) {
bp = 80;
} else if (targetWeight >= 100) {
bp = 40;
} else {
bp = 20;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Low Kick",
pp: 0.625,
priority: -10,
flags: {contact: 1, protect: 1, mirror: 1},
onTryHit(target, pokemon, move) {
if (target.volatiles['dynamax']) {
this.add('-fail', pokemon, 'Dynamax');
this.attrLastMove('[still]');
return null;
}
},
secondary: null,
target: "any",
type: "Fighting",
},

lowsweep: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Low Sweep",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "any",
type: "Fighting",
},

luminacrash: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Lumina Crash",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spd: -2,
},
},
target: "any",
type: "Psychic",
},

lunarblessing: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Lunar Blessing",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1},
onHit(pokemon) {
const success = !!this.heal(this.modify(pokemon.maxhp, 0.33));
return pokemon.cureStatus() || success;
},
secondary: null,
target: "allies",
type: "Psychic",
},

lunardance: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Lunar Dance",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
terrain: 'mistyterrain',
selfSwitch: true,
critRatio: 0,
secondary: null,
target: "any",
type: "Psychic",
},

lunge: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Lunge",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
atk: -1,
},
},
target: "any",
type: "Bug",
},

lusterpurge: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Luster Purge",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
spd: -1,
},
},
target: "any",
type: "Psychic",
},

machpunch: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Mach Punch",
pp: 0.625,
priority: 9,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 3, source, source, this.dex.conditions.get('High Jump Kick'));
},
critRatio: 2,
secondary: null,
target: "any",
type: "Fighting",
},

magicalleaf: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Magical Leaf",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
boosts: {
accuracy: 1,
},
target: "any",
type: "Grass",
},

magicaltorque: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Magical Torque",
pp: 0.625,
priority: 0,
flags: {protect: 1},
secondary: {
chance: 33,
volatileStatus: 'confusion',
},
target: "any",
type: "Fairy",
},

magiccoat: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Magic Coat",
pp: 0.625,
priority: 4,
flags: {},
volatileStatus: 'magiccoat',
condition: {
duration: 1,
onStart(target, source, effect) {
this.add('-singleturn', target, 'move: Magic Coat');
if (effect?.effectType === 'Move') {
this.effectState.pranksterBoosted = effect.pranksterBoosted;
}
},
onTryHitPriority: 2,
onTryHit(target, source, move) {
if (target === source || move.hasBounced || !move.flags['reflectable']) {
return;
}
const newMove = this.dex.getActiveMove(move.id);
newMove.hasBounced = true;
newMove.pranksterBoosted = this.effectState.pranksterBoosted;
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
},
secondary: null,
target: "self",
type: "Psychic",
},

magicpowder: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Magic Powder",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target) {
if (target.getTypes().join() === 'Psychic' || !target.setType('Psychic')) return false;
this.add('-start', target, 'typechange', 'Psychic');
},
secondary: null,
target: "any",
type: "Psychic",
},

magicroom: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Magic Room",
pp: 0.625,
priority: 0,
flags: {mirror: 1},
pseudoWeather: 'magicroom',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Magic Room');
return 7;
}
return 5;
},
onFieldStart(target, source) {
if (source?.hasAbility('persistent')) {
this.add('-fieldstart', 'move: Magic Room', '[of] ' + source, '[persistent]');
} else {
this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
}
for (const mon of this.getAllActive()) {
this.singleEvent('End', mon.getItem(), mon.itemState, mon);
}
},
onFieldRestart(target, source) {
this.field.removePseudoWeather('magicroom');
},
// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 6,
onFieldEnd() {
this.add('-fieldend', 'move: Magic Room', '[of] ' + this.effectState.source);
},
},
secondary: null,
target: "all",
type: "Psychic",
},

magmastorm: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Magma Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
weather: 'sunnyday',
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Fire",
},

magnetbomb: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Magnet Bomb",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
weather: 'Sandstorm',
secondary: null,
target: "any",
type: "Steel",
},

magnetrise: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Magnet Rise",
pp: 1.25,
priority: 0,
flags: {snatch: 1, gravity: 1},
volatileStatus: 'magnetrise',
onTry(source, target, move) {
if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;

// Additional Gravity check for Z-move variant
if (this.field.getPseudoWeather('Gravity')) {
this.add('cant', source, 'move: Gravity', move);
return null;
}
},
condition: {
duration: 5,
onStart(target) {
this.add('-start', target, 'Magnet Rise');
},
onImmunity(type) {
if (type === 'Ground') return false;
},
onResidualOrder: 18,
onEnd(target) {
this.add('-end', target, 'Magnet Rise');
},
},
secondary: null,
target: "self",
type: "Electric",
},

magnitude: {
accuracy: 95,
basePower: 0,
category: "Physical",
name: "Magnitude",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyMove(move, pokemon) {
const i = this.random(100);
if (i < 5) {
move.magnitude = 4;
move.basePower = 10;
} else if (i < 15) {
move.magnitude = 5;
move.basePower = 30;
} else if (i < 35) {
move.magnitude = 6;
move.basePower = 50;
} else if (i < 65) {
move.magnitude = 7;
move.basePower = 70;
} else if (i < 85) {
move.magnitude = 8;
move.basePower = 90;
} else if (i < 95) {
move.magnitude = 9;
move.basePower = 110;
} else {
move.magnitude = 10;
move.basePower = 150;
}
},
onUseMoveMessage(pokemon, target, move) {
this.add('-activate', pokemon, 'move: Magnitude', move.magnitude);
},
secondary: null,
target: "allAdjacent",
type: "Ground",
},

makeitrain: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Make It Rain",
pp: 0.625,
priority: 0,
flags: {distance: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Fire') return 1;
},
weather: 'RainDance',
secondary: null,
target: "allAdjacentFoes",
type: "Steel",
},

maliciousmoonsault: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Malicious Moonsault",
pp: 0.625,
priority: 0,
flags: {contact: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Fighting') return 1;
},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Dark",
},

matblock: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Mat Block",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
stallingMove: true,
sideCondition: 'matblock',
onTry(source) {
if (source.activeMoveActions > 2) {
this.hint("Mat Block only works on your first turn out.");
return false;
}
return !!this.queue.willAct();
},
condition: {
duration: 1,
onSideStart(target, source) {
this.add('-singleturn', source, 'Mat Block');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect']) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move && (move.target === 'self' || move.category === 'Status')) return;
this.add('-activate', target, 'move: Mat Block', move.name);
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
return this.NOT_FAIL;
},
},
secondary: null,
target: "allySide",
type: "Fighting",
},

meanlook: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Mean Look",
pp: 1.25,
priority: 0,
flags: {reflectable: 1, mirror: 1},
onHit(target, source, move) {
return target.addVolatile('trapped', source, move, 'trapper');
},
secondary: null,
target: "any",
type: "Normal",
},

meditate: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Meditate",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 1,
spa: 1,
},
secondary: null,
target: "self",
type: "Psychic",
},

megadrain: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Mega Drain",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, heal: 1},
critRatio: 2,
drain: [75, 100],
secondary: null,
target: "any",
type: "Grass",
},

megahorn: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Megahorn",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Bug",
},

megakick: {
accuracy: 75,
basePower: 120,
category: "Physical",
name: "Mega Kick",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [50, 100],
forceSwitch: true,
secondary: null,
target: "any",
type: "Normal",
},

megapunch: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Mega Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
recoil: [25, 100],
forceSwitch: true,
secondary: null,
target: "any",
type: "Normal",
},

memento: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Memento",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
boosts: {
atk: -2,
spa: -2,
},
selfdestruct: "ifHit",
secondary: null,
target: "any",
type: "Dark",
},

menacingmoonrazemaelstrom: {
accuracy: 85,
basePower: 125,
category: "Special",
name: "Menacing Moonraze Maelstrom",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1,},
pseudoWeather: 'fairylock',
condition: {
duration: 5,
onFieldStart(target) {
this.add('-fieldactivate', 'move: Fairy Lock');
},
onTrapPokemon(pokemon) {
pokemon.tryTrap();
},
},
ignoreAbility: true,
secondary: null,
target: "any",
type: "Ghost",
},

metalburst: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
const lastDamagedBy = pokemon.getLastDamagedBy(true);
if (lastDamagedBy !== undefined) {
return (lastDamagedBy.damage * 1.5) || 1;
}
return 0;
},
category: "Physical",
name: "Metal Burst",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Steel') return 1;
},
onTry(source) {
const lastDamagedBy = source.getLastDamagedBy(true);
if (lastDamagedBy === undefined || !lastDamagedBy.thisTurn) return false;
},
onModifyTarget(targetRelayVar, source, target, move) {
const lastDamagedBy = source.getLastDamagedBy(true);
if (lastDamagedBy) {
targetRelayVar.target = this.getAtSlot(lastDamagedBy.slot);
}
},
secondary: null,
target: "scripted",
type: "Steel",
},

metalclaw: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Metal Claw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 33,
self: {
boosts: {
atk: 1,
},
},
},
target: "any",
type: "Steel",
},

metalsound: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Metal Sound",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
boosts: {
spd: -2,
def: -2,
},
secondary: null,
target: "any",
type: "Steel",
},

meteorassault: {
accuracy: 85,
basePower: 150,
category: "Physical",
name: "Meteor Assault",
pp: 0.625,
priority: 0,
flags: {protect: 1, recharge: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Fighting",
},

meteorbeam: {
accuracy: 95,
basePower: 120,
category: "Special",
name: "Meteor Beam",
pp: 0.625,
flags: {charge: 1, protect: 1, mirror: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({spa: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: null,
target: "any",
type: "Rock",
},

meteormash: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Meteor Mash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondary: {
chance: 25,
self: {
boosts: {
atk: 1,
},
},
},
target: "any",
type: "Steel",
},

milkdrink: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Milk Drink",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
heal: [33, 100],
secondary: null,
target: "self",
type: "Normal",
},

mimic: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Mimic",
pp: 1.25,
priority: 0,
flags: {protect: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
const move = target.lastMove;
if (source.transformed || !move || move.flags['failmimic'] || source.moves.includes(move.id)) {
return false;
}
if (move.isZ || move.isMax) return false;
const mimicIndex = source.moves.indexOf('mimic');
if (mimicIndex < 0) return false;
source.moveSlots[mimicIndex] = {
move: move.name,
id: move.id,
pp: move.pp,
maxpp: move.pp,
target: move.target,
disabled: false,
used: false,
virtual: true,
};
this.add('-start', source, 'Mimic', move.name);
},
secondary: null,
target: "any",
type: "Normal",
},

mindblown: {
accuracy: 95,
basePower: 135,
category: "Special",
name: "Mind Blown",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
mindBlownRecoil: true,
onAfterMove(pokemon, target, move) {
if (move.mindBlownRecoil && !move.multihit) {
const hpBeforeRecoil = pokemon.hp;
this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Mind Blown'), true);
if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
this.runEvent('EmergencyExit', pokemon, pokemon);
}
}
},
secondary: null,
target: "any",
type: "Fire",
},

minimize: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Minimize",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'minimize',
condition: {
noCopy: true,
onRestart: () => null,
onSourceModifyDamage(damage, source, target, move) {
const boostedMoves = [
'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
];
if (boostedMoves.includes(move.id)) {
return this.chainModify(2);
}
},
onAccuracy(accuracy, target, source, move) {
const boostedMoves = [
'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
];
if (boostedMoves.includes(move.id)) {
return true;
}
return accuracy;
},
},
boosts: {
atk: -2,
spa: -2,
spe: 4,
},
secondary: null,
target: "self",
type: "Normal",
},

miracleeye: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Miracle Eye",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
volatileStatus: 'miracleeye',
onTryHit(target) {
if (target.volatiles['foresight']) return false;
},
condition: {
noCopy: true,
onStart(pokemon) {
this.add('-start', pokemon, 'Miracle Eye');
},
onNegateImmunity(pokemon, type) {
if (pokemon.hasType('Dark') && type === 'Psychic') return false;
},
onModifyBoost(boosts) {
if (boosts.evasion && boosts.evasion > 0) {
boosts.evasion = 0;
}
},
},
secondary: null,
target: "any",
type: "Psychic",
},

mirrorcoat: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
if (!pokemon.volatiles['mirrorcoat']) return 0;
return pokemon.volatiles['mirrorcoat'].damage || 1;
},
category: "Special",
name: "Mirror Coat",
pp: 1.25,
priority: -9,
flags: {protect: 1},
beforeTurnCallback(pokemon) {
pokemon.addVolatile('mirrorcoat');
},
onTry(source) {
if (!source.volatiles['mirrorcoat']) return false;
if (source.volatiles['mirrorcoat'].slot === null) return false;
},
condition: {
duration: 1,
noCopy: true,
onStart(target, source, move) {
this.effectState.slot = null;
this.effectState.damage = 0;
},
onRedirectTargetPriority: -9,
onRedirectTarget(target, source, source2, move) {
if (move.id !== 'mirrorcoat') return;
if (source !== this.effectState.target || !this.effectState.slot) return;
return this.getAtSlot(this.effectState.slot);
},
onDamagingHit(damage, target, source, move) {
if (!source.isAlly(target) && this.getCategory(move) === 'Special') {
this.effectState.slot = source.getSlot();
this.effectState.damage = 2 * damage;
}
},
},
secondary: null,
target: "scripted",
type: "Psychic",
},

mirrormove: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Mirror Move",
pp: 1.25,
priority: 0,
flags: {},
onTryHit(target, pokemon) {
const move = target.lastMove;
if (!move?.flags['mirror'] || move.isZ || move.isMax) {
return false;
}
this.actions.useMove(move.id, pokemon, target);
return null;
},
secondary: null,
target: "any",
type: "Flying",
},

mirrorshot: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Mirror Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
evasion: -1,
},
},
target: "any",
type: "Steel",
},

mist: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Mist",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'mist',
condition: {
duration: 5,
onTryBoost(boost, target, source, effect) {
if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
if (source && target !== source) {
let showMsg = false;
let i: BoostID;
for (i in boost) {
if (boost[i]! < 0) {
delete boost[i];
showMsg = true;
}
}
if (showMsg && !(effect as ActiveMove).secondaries) {
this.add('-activate', target, 'move: Mist');
}
}
},
onSideStart(side) {
this.add('-sidestart', side, 'Mist');
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 4,
onSideEnd(side) {
this.add('-sideend', side, 'Mist');
},
},
secondary: null,
target: "allySide",
type: "Ice",
},

mistball: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Mist Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
spa: -1,
},
},
target: "any",
type: "Psychic",
},

mistyexplosion: {
accuracy: 95,
basePower: 250,
category: "Special",
name: "Misty Explosion",
pp: 0.625,
priority: -7,
flags: {protect: 1, mirror: 1},
selfdestruct: "always",
onBasePower(basePower, source) {
if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
this.debug('misty terrain boost');
return this.chainModify(1.5);
}
},
secondary: null,
target: "allAdjacent",
type: "Fairy",
},

mistyterrain: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Misty Terrain",
pp: 0.625,
priority: 0,
flags: {},
terrain: 'mistyterrain',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 8;
}
return 5;
},
onSetStatus(status, target, source, effect) {
if (!target.isGrounded() || target.isSemiInvulnerable()) return;
if (effect && ((effect as Move).status || effect.id === 'yawn')) {
this.add('-activate', target, 'move: Misty Terrain');
}
return false;
},
onTryAddVolatile(status, target, source, effect) {
if (!target.isGrounded() || target.isSemiInvulnerable()) return;
if (status.id === 'confusion') {
if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
return null;
}
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
this.debug('misty terrain weaken');
return this.chainModify(0.5);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Misty Terrain');
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'Misty Terrain');
},
},
secondary: null,
target: "all",
type: "Fairy",
},

moonblast: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Moonblast",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Fairy",
},

moongeistbeam: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Moongeist Beam",
pp: 0.625,
flags: {protect: 1, mirror: 1},
ignoreAbility: true,
secondary: null,
target: "any",
type: "Ghost",
},

moonlight: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Moonlight",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
onHit(pokemon) {
let factor = 0.5;
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
factor = 0.667;
break;
case 'raindance':
case 'primordialsea':
case 'sandstorm':
case 'hail':
case 'snow':
factor = 0.25;
break;
}
const success = !!this.heal(this.modify(pokemon.maxhp, factor));
if (!success) {
this.add('-fail', pokemon, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "self",
type: "Fairy",
},

morningsun: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Morning Sun",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
onHit(pokemon) {
let factor = 0.5;
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
factor = 0.667;
break;
case 'raindance':
case 'primordialsea':
case 'sandstorm':
case 'hail':
case 'snow':
factor = 0.25;
break;
}
const success = !!this.heal(this.modify(pokemon.maxhp, factor));
if (!success) {
this.add('-fail', pokemon, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "self",
type: "Normal",
},

mortalspin: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Mortal Spin",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterHit(target, pokemon) {
if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
}
const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
for (const condition of sideConditions) {
if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
}
}
if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
pokemon.removeVolatile('partiallytrapped');
}
},
onAfterSubDamage(damage, target, pokemon) {
if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
}
const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
for (const condition of sideConditions) {
if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
}
}
if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
pokemon.removeVolatile('partiallytrapped');
}
},
secondary: {
chance: 75,
status: 'tox',
},
target: "allAdjacentFoes",
type: "Poison",
},

mountaingale: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Mountain Gale",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
weather: 'hail',
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Ice",
},

mudbomb: {
accuracy: 85,
basePower: 65,
category: "Special",
name: "Mud Bomb",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
pseudoWeather: 'mudsport',
condition: {
duration: 5,
onFieldStart(field, source) {
this.add('-fieldstart', 'move: Mud Sport', '[of] ' + source);
},
onBasePowerPriority: 1,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Electric') {
this.debug('mud sport weaken');
return this.chainModify([1352, 4096]);
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 4,
onFieldEnd() {
this.add('-fieldend', 'move: Mud Sport');
},
},
secondary: {
chance: 25,
boosts: {
evasion: -1,
},
},
target: "any",
type: "Ground",
},

mudshot: {
accuracy: 95,
basePower: 55,
category: "Special",
name: "Mud Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -2,
},
},
target: "any",
type: "Ground",
},

mudslap: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Mud Slap",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
evasion: -2,
},
},
target: "any",
type: "Ground",
},

muddywater: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Muddy Water",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 33,
boosts: {
evasion: -1,
},
},
target: "allAdjacentFoes",
type: "Water",
},

mysticalfire: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Mystical Fire",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
weather: 'sunnyday',
secondary: {
chance: 75,
boosts: {
spa: -1,
},
},
target: "any",
type: "Fire",
},

mysticalpower: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Mystical Power",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spa: 1,
},
},
},
target: "any",
type: "Psychic",
},

nastyplot: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Nasty Plot",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 2,
spa: 2,
evasion: -2,
},
secondary: null,
target: "self",
type: "Dark",
},


naturepower: {
accuracy: 95,
basePower: 0,
category: "Special",
name: "Nature Power",
pp: 1.25,
priority: 0,
flags: {},
onTryHit(target, pokemon) {
let move = 'triattack';
if (this.field.isTerrain('electricterrain')) {
move = 'thunderbolt';
} else if (this.field.isTerrain('grassyterrain')) {
move = 'energyball';
} else if (this.field.isTerrain('mistyterrain')) {
move = 'moonblast';
} else if (this.field.isTerrain('psychicterrain')) {
move = 'psychic';
}
this.actions.useMove(move, pokemon, target);
return null;
},
secondary: null,
target: "any",
type: "Normal",
},

naturesmadness: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon, target) {
return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
},
category: "Special",
name: "Nature's Madness",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Fairy",
},

needlearm: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Needle Arm",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Grass",
},

neverendingnightmare: {
accuracy: 95,
basePower: 45,
category: "Special",
name: "Never Ending Nightmare",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
status: 'slp',
},
target: "allAdjacentFoes",
type: "Ghost",
},

nightdaze: {
accuracy: 95,
basePower: 85,
category: "Special",
name: "Night Daze",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
evasion: -1,
},
},
target: "any",
type: "Dark",
},

nightmare: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Nightmare",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'nightmare',
condition: {
noCopy: true,
onStart(pokemon) {
if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) {
return false;
}
this.add('-start', pokemon, 'Nightmare');
},
onResidualOrder: 11,
onResidual(pokemon) {
this.damage(pokemon.baseMaxhp / 4);
},
},
secondary: null,
target: "any",
type: "Ghost",
},

nightshade: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
return (this.random(50, 150) * pokemon.level) / 100;
},
category: "Special",
name: "Night Shade",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ghost",
},

nightslash: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Night Slash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Dark",
},

nobleroar: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Noble Roar",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
boosts: {
atk: -1,
spa: -1,
},
secondary: null,
target: "any",
type: "Normal",
},

noretreat: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "No Retreat",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'noretreat',
onTry(source, target, move) {
if (source.volatiles['noretreat']) return false;
if (source.volatiles['trapped']) {
delete move.volatileStatus;
}
},
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'move: No Retreat');
},
onTrapPokemon(pokemon) {
pokemon.tryTrap();
},
},
boosts: {
atk: 1,
def: 1,
spa: 1,
spd: 1,
spe: 1,
evasion: -2,
},
secondary: null,
target: "self",
type: "Fighting",
},

noxioustorque: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Noxious Torque",
pp: 0.625,
priority: 0,
flags: {protect: 1},
secondary: {
chance: 33,
status: 'tox',
},
target: "any",
type: "Poison",
},

nuzzle: {
accuracy: 95,
basePower: 20,
category: "Physical",
name: "Nuzzle",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
status: 'par',
},
target: "any",
type: "Electric",
},

oblivionwing: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Oblivion Wing",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, distance: 1, heal: 1},
drain: [75, 100],
secondary: null,
target: "any",
type: "Flying",
},

obstruct: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Obstruct",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'obstruct',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect'] || move.category === 'Status') {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
if (this.checkMoveMakesContact(move, source, target)) {
this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
}
return this.NOT_FAIL;
},
onHit(target, source, move) {
if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
}
},
},
secondary: null,
target: "self",
type: "Dark",
},

oceanicoperetta: {
accuracy: 75,
basePower: 50,
category: "Special",
name: "Oceanic Operetta",
pp: 1.25,
priority: 0,
flags: {sound: 1, protect: 1, mirror: 1,},
secondary: {
chance: 90,
status: 'slp',
},
target: "allAdjacentFoes",
type: "Water",
},

octazooka: {
accuracy: 95,
basePower: 15,
category: "Special",
name: "Octazooka",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
multihit: [1, 8],
multiaccuracy: 75,
secondary: {
chance: 15,
boosts: {
evasion: -1,
},
},
target: "any",
type: "Water",
},

octolock: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Octolock",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onTryImmunity(target) {
return this.dex.getImmunity('trapped', target);
},
volatileStatus: 'octolock',
condition: {
onStart(pokemon, source) {
this.add('-start', pokemon, 'move: Octolock', '[of] ' + source);
},
onResidualOrder: 14,
onResidual(pokemon) {
const source = this.effectState.source;
if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns)) {
delete pokemon.volatiles['octolock'];
this.add('-end', pokemon, 'Octolock', '[partiallytrapped]', '[silent]');
return;
}
this.boost({def: -1, spd: -1}, pokemon, source, this.dex.getActiveMove('octolock'));
},
onTrapPokemon(pokemon) {
if (this.effectState.source && this.effectState.source.isActive) pokemon.tryTrap();
},
},
secondary: null,
target: "any",
type: "Fighting",
},

odorsleuth: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Odor Sleuth",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1},
volatileStatus: 'foresight',
onTryHit(target) {
if (target.volatiles['miracleeye']) return false;
},
secondary: null,
target: "any",
type: "Normal",
},

ominouswind: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Ominous Wind",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
self: {
boosts: {
atk: 1,
def: 1,
spa: 1,
spd: 1,
spe: 1,
},
},
},
target: "any",
type: "Ghost",
},

orderup: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Order Up",
pp: 1.25,
priority: 0,
flags: {protect: 1},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (!pokemon.volatiles['commanded']) return;
const tatsugiri = pokemon.volatiles['commanded'].source;
if (tatsugiri.baseSpecies.baseSpecies !== 'Tatsugiri') return; // Should never happen
switch (tatsugiri.baseSpecies.forme) {
case 'Droopy':
this.boost({def: 1}, pokemon, pokemon);
break;
case 'Stretchy':
this.boost({spe: 1}, pokemon, pokemon);
break;
default:
this.boost({atk: 1}, pokemon, pokemon);
break;
}
},
secondary: null,
hasSheerForce: true,
target: "any",
type: "Dragon",
},

originpulse: {
accuracy: 85,
basePower: 110,
category: "Special",
name: "Origin Pulse",
pp: 0.625,
priority: 0,
flags: {protect: 1, pulse: 1, mirror: 1},
target: "allAdjacentFoes",
type: "Water",
},

outrage: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Outrage",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'lockedmove',
},
onAfterMove(pokemon) {
if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
pokemon.removeVolatile('lockedmove');
}
},
secondary: null,
target: "randomNormal",
type: "Dragon",
},

overdrive: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Overdrive",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Electric",
},

overheat: {
accuracy: 85,
basePower: 130,
category: "Special",
name: "Overheat",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
self: {
boosts: {
spa: -2,
},
},
secondary: null,
target: "any",
type: "Fire",
},

painsplit: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Pain Split",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, allyanim: 1},
onHit(target, pokemon) {
const targetHP = target.getUndynamaxedHP();
const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
const targetChange = targetHP - averagehp;
target.sethp(target.hp - targetChange);
this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
pokemon.sethp(averagehp);
this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
},
secondary: null,
target: "any",
type: "Normal",
},

paraboliccharge: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Parabolic Charge",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, heal: 1},
drain: [50, 100],
secondary: null,
target: "allAdjacent",
type: "Electric",
},

partingshot: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Parting Shot",
pp: 0.625,
priority: 3,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
onHit(target, source, move) {
const success = this.boost({atk: -1, spa: -1}, target, source);
if (!success && !target.hasAbility('mirrorarmor')) {
delete move.selfSwitch;
}
},
selfSwitch: true,
secondary: null,
target: "any",
type: "Dark",
},

payback: {
accuracy: 95,
basePower: 50,
basePowerCallback(pokemon, target, move) {
if (target.newlySwitched || this.queue.willMove(target)) {
this.debug('Payback NOT boosted');
return move.basePower;
}
this.debug('Payback damage boost');
return move.basePower * 2;
},
category: "Physical",
name: "Payback",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dark",
},

payday: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Pay Day",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 75,
volatileStatus: 'confusion',
},
target: "any",
type: "Normal",
},

peck: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Peck",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
critRatio: 2,
drain: [100, 100],
secondary: null,
target: "any",
type: "Flying",
},

perishsong: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Perish Song",
pp: 0.625,
priority: 1,
flags: {sound: 1, distance: 1, bypasssub: 1},
onHitField(target, source, move) {
let result = false;
let message = false;
for (const pokemon of this.getAllActive()) {
if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
this.add('-miss', source, pokemon);
result = true;
} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
result = true;
} else if (!pokemon.volatiles['perishsong']) {
pokemon.addVolatile('perishsong');
this.add('-start', pokemon, 'perish3', '[silent]');
result = true;
message = true;
}
}
if (!result) return false;
if (message) this.add('-fieldactivate', 'move: Perish Song');
},
condition: {
duration: 2,
onEnd(target) {
this.add('-start', target, 'perish0');
target.faint();
},
onResidualOrder: 24,
onResidual(pokemon) {
const duration = pokemon.volatiles['perishsong'].duration;
this.add('-start', pokemon, 'perish' + duration);
},
},
secondary: null,
target: "all",
type: "Normal",
},

petalblizzard: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Petal Blizzard",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 25,
status: 'frz',
},
target: "allAdjacent",
type: "Grass",
},

petaldance: {
accuracy: 85,
basePower: 115,
category: "Special",
name: "Petal Dance",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
self: {
volatileStatus: 'lockedmove',
},
onAfterMove(pokemon) {
if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
pokemon.removeVolatile('lockedmove');
}
},
secondary: null,
target: "randomNormal",
type: "Grass",
},

phantomforce: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Phantom Force",
pp: 1.25,
priority: 0,
flags: {contact: 1, charge: 1, mirror: 1},
breaksProtect: true,
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
condition: {
duration: 2,
onInvulnerability: false,
},
secondary: null,
target: "any",
type: "Ghost",
},

photongeyser: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Photon Geyser",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyMove(move, pokemon) {
if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
},
ignoreAbility: true,
secondary: null,
target: "any",
type: "Psychic",
},

pinmissile: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Pin Missile",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Bug",
},

plasmafists: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Plasma Fists",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Steel') return 1;
},
pseudoWeather: 'iondeluge',
secondary: null,
target: "any",
type: "Electric",
},

playnice: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Play Nice",
pp: 1.25,
priority: 0,
flags: {reflectable: 1, mirror: 1, bypasssub: 1},
boosts: {
atk: -1,
spa: -1,
},
secondary: null,
target: "any",
type: "Normal",
},

playrough: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Play Rough",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
atk: -1,
},
},
target: "any",
type: "Fairy",
},

pluck: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Pluck",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
onHit(target, source) {
const item = target.getItem();
if (source.hp && item.isBerry && target.takeItem(source)) {
this.add('-enditem', target, item.name, '[from] stealeat', '[move] Pluck', '[of] ' + source);
if (this.singleEvent('Eat', item, null, source, null, null)) {
this.runEvent('EatItem', source, null, null, item);
if (item.id === 'leppaberry') target.staleness = 'external';
}
if (item.onEat) source.ateBerry = true;
}
},
secondary: null,
target: "any",
type: "Flying",
},

poisonfang: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Poison Fang",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondaries: [
{
chance: 33,
status: 'tox',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Poison",
},

poisonjab: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Poison Jab",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'tox',
},
target: "any",
type: "Poison",
},

poisonpowder: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Poison Powder",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
status: 'tox',
secondary: null,
target: "allAdjacent",
type: "Poison",
},

poisonsting: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Poison Sting",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 50,
status: 'tox',
},
target: "any",
type: "Poison",
},

poisontail: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Poison Tail",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 75,
status: 'tox',
},
target: "any",
type: "Poison",
},

pollenpuff: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Pollen Puff",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1, allyanim: 1},
onTryHit(target, source, move) {
if (source.isAlly(target)) {
move.basePower = 0;
move.infiltrates = true;
}
},
onHit(target, source) {
if (source.isAlly(target)) {
if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
this.add('-immune', target);
return this.NOT_FAIL;
}
}
},
secondary: null,
target: "any",
type: "Bug",
},

poltergeist: {
accuracy: 85,
basePower: 110,
category: "Physical",
name: "Poltergeist",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onTry(source, target) {
return !!target.item;
},
onTryHit(target, source, move) {
this.add('-activate', target, 'move: Poltergeist', this.dex.items.get(target.item).name);
},
secondary: null,
target: "any",
type: "Ghost",
},

populationbomb: {
accuracy: 95,
basePower: 10,
category: "Physical",
name: "Population Bomb",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 15],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

pounce: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Pounce",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "any",
type: "Bug",
},

pound: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Pound",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

powder: {
accuracy: 75,
basePower: 40,
category: "Special",
name: "Powder",
pp: 0.625,
priority: 4,
flags: {bullet: 1, protect: 1, mirror: 1, allyanim: 1},
critRatio: 2,
secondary: {
chance: 100,
onHit(target, source) {
const result = this.random(3);
if (result === 0) {
target.trySetStatus('tox', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else {
target.trySetStatus('slp', source);
}
},
},
target: "allAdjacent",
type: "Bug",
},

powdersnow: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Powder Snow",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 33,
status: 'frz',
},
target: "allAdjacentFoes",
type: "Ice",
},

powergem: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Power Gem",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 33,
status: 'par',
},
target: "any",
type: "Rock",
},

powershift: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Power Shift",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'powershift',
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'Power Shift');
[pokemon.storedStats.atk, pokemon.storedStats.spa,
pokemon.storedStats.def, pokemon.storedStats.spd] =
[pokemon.storedStats.def, pokemon.storedStats.spd,
pokemon.storedStats.atk, pokemon.storedStats.spa];
},
onCopy(pokemon) {
[pokemon.storedStats.atk, pokemon.storedStats.spa,
pokemon.storedStats.def, pokemon.storedStats.spd] =
[pokemon.storedStats.def, pokemon.storedStats.spd,
pokemon.storedStats.atk, pokemon.storedStats.spa];
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Power Shift');
[pokemon.storedStats.atk, pokemon.storedStats.spa,
pokemon.storedStats.def, pokemon.storedStats.spd] =
[pokemon.storedStats.def, pokemon.storedStats.spd,
pokemon.storedStats.atk, pokemon.storedStats.spa];
},
onRestart(pokemon) {
pokemon.removeVolatile('Power Shift');
},
},
secondary: null,
target: "self",
type: "Normal",
},

powersplit: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Power Split",
pp: 1.25,
priority: 0,
flags: {protect: 1, allyanim: 1},
onHit(target, source) {
const newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
target.storedStats.atk = newatk;
source.storedStats.atk = newatk;
const newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
target.storedStats.spa = newspa;
source.storedStats.spa = newspa;
this.add('-activate', source, 'move: Power Split', '[of] ' + target);
},
secondary: null,
target: "any",
type: "Psychic",
},

powerswap: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Power Swap",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
const targetBoosts: SparseBoostsTable = {};
const sourceBoosts: SparseBoostsTable = {};

const atkSpa: BoostID[] = ['atk', 'spa'];
for (const stat of atkSpa) {
targetBoosts[stat] = target.boosts[stat];
sourceBoosts[stat] = source.boosts[stat];
}

source.setBoost(targetBoosts);
target.setBoost(sourceBoosts);

this.add('-swapboost', source, target, 'atk, spa', '[from] move: Power Swap');
},
secondary: null,
target: "any",
type: "Psychic",
},

powertrick: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Power Trick",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'powertrick',
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'Power Trick');
const newatk = pokemon.storedStats.def;
const newdef = pokemon.storedStats.atk;
pokemon.storedStats.atk = newatk;
pokemon.storedStats.def = newdef;
},
onCopy(pokemon) {
const newatk = pokemon.storedStats.def;
const newdef = pokemon.storedStats.atk;
pokemon.storedStats.atk = newatk;
pokemon.storedStats.def = newdef;
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Power Trick');
const newatk = pokemon.storedStats.def;
const newdef = pokemon.storedStats.atk;
pokemon.storedStats.atk = newatk;
pokemon.storedStats.def = newdef;
},
onRestart(pokemon) {
pokemon.removeVolatile('Power Trick');
},
},
secondary: null,
target: "self",
type: "Psychic",
},

powertrip: {
accuracy: 95,
basePower: 20,
basePowerCallback(pokemon, target, move) {
const bp = move.basePower + 25 * pokemon.positiveBoosts();
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Power Trip",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dark",
},

poweruppunch: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Power Up Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (!target || target.fainted || target.hp <= 0) this.boost({atk: 2}, pokemon, pokemon, move);
},
secondary: {
chance: 75,
self: {
boosts: {
atk: 1,
evasion: -1,
},
},
},
target: "any",
type: "Fighting",
},

powerwhip: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Power Whip",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 33,
status: 'par',
},
target: "any",
type: "Grass",
},

precipiceblades: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Precipice Blades",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Ice') return 1;
},
target: "allAdjacentFoes",
type: "Ground",
},

present: {
accuracy: 95,
basePower: 0,
category: "Physical",
name: "Present",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyMove(move, pokemon, target) {
const rand = this.random(10);
if (rand < 2) {
move.heal = [25, 100];
move.infiltrates = true;
} else if (rand < 6) {
move.basePower = 40;
} else if (rand < 9) {
move.basePower = 80;
} else {
move.basePower = 120;
}
},
secondary: null,
target: "any",
type: "Normal",
},

prismaticlaser: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Prismatic Laser",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Psychic",
},

protect: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Protect",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'protect',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect']) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
return this.NOT_FAIL;
},
},
secondary: null,
target: "self",
type: "Normal",
},

psybeam: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Psybeam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Psychic",
},

psyblade: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Psyblade",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
secondary: null,
onBasePower(basePower, source) {
if (this.field.isTerrain('electricterrain')) {
this.debug('psyblade electric terrain boost');
return this.chainModify(1.5);
}
},
target: "any",
type: "Psychic",
},

psychup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Psych Up",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1, allyanim: 1},
onHit(target, source) {
let i: BoostID;
for (i in target.boosts) {
source.boosts[i] = target.boosts[i];
}
const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
for (const volatile of volatilesToCopy) {
if (target.volatiles[volatile]) {
source.addVolatile(volatile);
if (volatile === 'gmaxchistrike') source.volatiles[volatile].layers = target.volatiles[volatile].layers;
} else {
source.removeVolatile(volatile);
}
}
this.add('-copyboost', source, target, '[from] move: Psych Up');
},
secondary: null,
target: "any",
type: "Normal",
},

psychic: {
accuracy: 95,
basePower: 95,
category: "Special",
name: "Psychic",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Psychic",
},

psychicfangs: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Psychic Fangs",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
onTryHit(pokemon) {
// will shatter screens through sub, before you hit
pokemon.side.removeSideCondition('reflect');
pokemon.side.removeSideCondition('lightscreen');
pokemon.side.removeSideCondition('auroraveil');
},
secondaries: [
{
chance: 33,
status: 'flinch',
}, {
chance: 33,
volatileStatus: 'confusion',
},
],
target: "any",
type: "Psychic",
},

psychicterrain: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Psychic Terrain",
pp: 0.625,
priority: 0,
flags: {},
terrain: 'psychicterrain',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 8;
}
return 5;
},
onTryHitPriority: 4,
onTryHit(target, source, effect) {
if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
return;
}
if (target.isSemiInvulnerable() || target.isAlly(source)) return;
if (!target.isGrounded()) {
const baseMove = this.dex.moves.get(effect.id);
if (baseMove.priority > 0) {
this.hint("Psychic Terrain doesn't affect Pokémon immune to Ground.");
}
return;
}
this.add('-activate', target, 'move: Psychic Terrain');
return null;
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
this.debug('psychic terrain boost');
return this.chainModify([5325, 4096]);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Psychic Terrain');
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'move: Psychic Terrain');
},
},
secondary: null,
target: "all",
type: "Psychic",
},

psychoboost: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Psycho Boost",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (!target || target.fainted || target.hp <= 0) this.boost({spa: 2}, pokemon, pokemon, move);
},
secondary: {
chance: 75,
self: {
boosts: {
spa: 1,
evasion: -1,
},
},
},
target: "any",
type: "Psychic",
},

psychocut: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Psycho Cut",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Psychic",
},

psychoshift: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Psycho Shift",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onTryHit(target, source, move) {
if (!source.status) return false;
move.status = source.status;
},
self: {
onHit(pokemon) {
pokemon.cureStatus();
},
},
secondary: null,
target: "any",
type: "Psychic",
},

psyshieldbash: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Psyshield Bash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spd: 1,
def: 1,
},
},
},
target: "any",
type: "Psychic",
},

psyshock: {
accuracy: 95,
basePower: 80,
category: "Special",
overrideDefensiveStat: 'def',
name: "Psyshock",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Psychic",
},

psystrike: {
accuracy: 85,
basePower: 105,
category: "Special",
overrideDefensiveStat: 'def',
name: "Psystrike",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Psychic",
},

psywave: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
return (this.random(50, 150) * pokemon.level) / 100;
},
category: "Special",
name: "Psywave",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Psychic",
},

pulverizingpancake: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Pulverizing Pancake",
pp: 1.25,
priority: -2,
flags: {contact: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Normal",
},

punishment: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
let power = 60 + 20 * target.positiveBoosts();
if (power > 200) power = 200;
this.debug('BP: ' + power);
return power;
},
category: "Physical",
name: "Punishment",
pp: 1.25,
priority: -2,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dark",
},

purify: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Purify",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, heal: 1},
onHit(target, source) {
if (!target.cureStatus()) {
this.add('-fail', source);
this.attrLastMove('[still]');
return this.NOT_FAIL;
}
this.heal(Math.ceil(source.maxhp * 0.5), source);
},
secondary: null,
target: "any",
type: "Poison",
},

pursuit: {
accuracy: 95,
basePower: 40,
basePowerCallback(pokemon, target, move) {
// You can't get here unless the pursuit succeeds
if (target.beingCalledBack || target.switchFlag) {
this.debug('Pursuit damage boost');
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Pursuit",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
beforeTurnCallback(pokemon) {
for (const side of this.sides) {
if (side.hasAlly(pokemon)) continue;
side.addSideCondition('pursuit', pokemon);
const data = side.getSideConditionData('pursuit');
if (!data.sources) {
data.sources = [];
}
data.sources.push(pokemon);
}
},
onModifyMove(move, source, target) {
if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
},
onTryHit(target, pokemon) {
target.side.removeSideCondition('pursuit');
},
condition: {
duration: 1,
onBeforeSwitchOut(pokemon) {
this.debug('Pursuit start');
let alreadyAdded = false;
pokemon.removeVolatile('destinybond');
for (const source of this.effectState.sources) {
if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
if (!alreadyAdded) {
this.add('-activate', pokemon, 'move: Pursuit');
alreadyAdded = true;
}
// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
// If it is, then Mega Evolve before moving.
if (source.canMegaEvo || source.canUltraBurst) {
for (const [actionIndex, action] of this.queue.entries()) {
if (action.pokemon === source && action.choice === 'megaEvo') {
this.actions.runMegaEvo(source);
this.queue.list.splice(actionIndex, 1);
break;
}
}
}
this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
}
},
},
secondary: null,
target: "any",
type: "Dark",
},

pyroball: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Pyro Ball",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Fire",
},

quash: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Quash",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onHit(target) {
if (this.activePerHalf === 1) return false; // fails in singles
const action = this.queue.willMove(target);
if (!action) return false;
action.order = 201;
this.add('-activate', target, 'move: Quash');
},
secondary: null,
target: "any",
type: "Dark",
},

quickattack: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Quick Attack",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
overrideOffensiveStat: 'spe',
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 4, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [20, 100],
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

quickguard: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Quick Guard",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'quickguard',
onTry() {
return !!this.queue.willAct();
},
onHitSide(side, source) {
source.addVolatile('stall');
},
condition: {
duration: 3,
onSideStart(target, source) {
this.add('-singleturn', source, 'Quick Guard');
},
onTryHitPriority: 4,
onTryHit(target, source, move) {
// Quick Guard blocks moves with positive priority, even those given increased priority by Prankster or Gale Wings.
// (e.g. it blocks 0 priority moves boosted by Prankster or Gale Wings; Quick Claw/Custap Berry do not count)
if (move.priority <= 0.1) return;
if (!move.flags['protect']) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
this.add('-activate', target, 'move: Quick Guard');
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
return this.NOT_FAIL;
},
},
secondary: null,
target: "allySide",
type: "Fighting",
},

quiverdance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Quiver Dance",
pp: 1.25,
priority: 0,
flags: {snatch: 1, dance: 1},
boosts: {
spa: 1,
spd: 1,
spe: 1,
},
secondary: null,
target: "self",
type: "Bug",
},

rage: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Rage",
pp: 0.625,
priority: 3,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'rage',
},
condition: {
onStart(pokemon) {
this.add('-singlemove', pokemon, 'Rage');
},
onHit(target, source, move) {
if (target !== source && move.category !== 'Status') {
this.boost({atk: 2});
}
},
onBeforeMovePriority: 100,
onBeforeMove(pokemon) {
this.debug('removing Rage before attack');
pokemon.removeVolatile('rage');
},
},
secondary: null,
target: "any",
type: "Normal",
},

ragefist: {
accuracy: 95,
basePower: 50,
basePowerCallback(pokemon) {
return Math.min(400, 50 + 50 * pokemon.timesAttacked);
},
category: "Physical",
name: "Rage Fist",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondary: null,
target: "any",
type: "Ghost",
},

ragepowder: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Rage Powder",
pp: 0.625,
priority: 2,
flags: {powder: 1},
volatileStatus: 'ragepowder',
onTry(source) {
return this.activePerHalf > 1;
},
condition: {
duration: 1,
onStart(pokemon) {
this.add('-singleturn', pokemon, 'move: Rage Powder');
},
onFoeRedirectTargetPriority: 1,
onFoeRedirectTarget(target, source, source2, move) {
const ragePowderUser = this.effectState.target;
if (ragePowderUser.isSkyDropped()) return;
if (source.runStatusImmunity('powder') && this.validTarget(ragePowderUser, source, move.target)) {
if (move.smartTarget) move.smartTarget = false;
this.debug("Rage Powder redirected target of move");
return ragePowderUser;
}
},
},
secondary: null,
target: "self",
type: "Bug",
},

ragingbull: {
accuracy: 85,
basePower: 90,
category: "Physical",
name: "Raging Bull",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'rage',
},
condition: {
onStart(pokemon) {
this.add('-singlemove', pokemon, 'Rage');
},
onHit(target, source, move) {
if (target !== source && move.category !== 'Status') {
this.boost({atk: 2});
}
},
onBeforeMovePriority: 100,
onBeforeMove(pokemon) {
this.debug('removing Rage before attack');
pokemon.removeVolatile('rage');
},
},
onTryHit(pokemon) {
// will shatter screens through sub, before you hit
pokemon.side.removeSideCondition('reflect');
pokemon.side.removeSideCondition('lightscreen');
pokemon.side.removeSideCondition('auroraveil');
},
secondary: null,
recoil: [33, 100],
target: "any",
type: "Normal",
},

ragingfury: {
accuracy: 85,
basePower: 115,
category: "Physical",
name: "Raging Fury",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'lockedmove',
},
onAfterMove(pokemon) {
if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
pokemon.removeVolatile('lockedmove');
}
},
secondary: null,
target: "randomNormal",
type: "Fire",
},

raindance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Rain Dance",
pp: 0.625,
priority: 0,
flags: {dance: 1},
weather: 'RainDance',
secondary: null,
target: "all",
type: "Water",
},

rapidspin: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Rapid Spin",
pp: 0.625,
priority: 2,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterHit(target, pokemon) {
if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
}
const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
for (const condition of sideConditions) {
if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
}
}
if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
pokemon.removeVolatile('partiallytrapped');
}
},
onAfterSubDamage(damage, target, pokemon) {
if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
}
const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
for (const condition of sideConditions) {
if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
}
}
if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
pokemon.removeVolatile('partiallytrapped');
}
},
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Normal",
},

razorleaf: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Razor Leaf",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "allAdjacentFoes",
type: "Grass",
},

razorshell: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Razor Shell",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
secondary: {
chance: 50,
boosts: {
def: -1,
},
},
target: "any",
type: "Water",
},

razorwind: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Razor Wind",
pp: 0.625,
priority: 0,
flags: {charge: 1, protect: 1, mirror: 1},
weather: 'snow',
critRatio: 2,
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

recover: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Recover",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
heal: [55, 100],
secondary: null,
target: "self",
type: "Normal",
},

recycle: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Recycle",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onHit(pokemon) {
if (pokemon.item || !pokemon.lastItem) return false;
const item = pokemon.lastItem;
pokemon.lastItem = '';
this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Recycle');
pokemon.setItem(item);
},
secondary: null,
target: "self",
type: "Normal",
},

reflect: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Reflect",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'reflect',
condition: {
duration: 5,
durationCallback(target, source, effect) {
if (source?.hasItem('lightclay')) {
return 8;
}
return 5;
},
onAnyModifyDamage(damage, source, target, move) {
if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
if (!target.getMoveHitData(move).crit && !move.infiltrates) {
this.debug('Reflect weaken');
if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
return this.chainModify(0.5);
}
}
},
onSideStart(side) {
this.add('-sidestart', side, 'Reflect');
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 1,
onSideEnd(side) {
this.add('-sideend', side, 'Reflect');
},
},
secondary: null,
target: "allySide",
type: "Psychic",
},

reflecttype: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Reflect Type",
pp: 1.25,
priority: 0,
flags: {protect: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
if (source.species && (source.species.num === 493 || source.species.num === 773)) return false;
if (source.terastallized) return false;
const oldApparentType = source.apparentType;
let newBaseTypes = target.getTypes(true).filter(type => type !== '???');
if (!newBaseTypes.length) {
if (target.addedType) {
newBaseTypes = ['Normal'];
} else {
return false;
}
}
this.add('-start', source, 'typechange', '[from] move: Reflect Type', '[of] ' + target);
source.setType(newBaseTypes);
source.addedType = target.addedType;
source.knownType = target.isAlly(source) && target.knownType;
if (!source.knownType) source.apparentType = oldApparentType;
},
secondary: null,
target: "any",
type: "Normal",
},

refresh: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Refresh",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 0,
onModifyMove(move, pokemon, target) {
const rand = this.random(10);
if (rand < 3) {
move.heal = [1, 100];
move.infiltrates = true;
} else if (rand < 6) {
move.heal = [50, 100];
} else if (rand < 9) {
move.heal = [75, 100];
} else {
move.heal = [100, 100];
}
},
secondary: null,
target: "all",
type: "Normal",
},

relicsong: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Relic Song",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 25,
status: 'slp',
},
onHit(target, pokemon, move) {
if (pokemon.baseSpecies.baseSpecies === 'Meloetta' && !pokemon.transformed) {
move.willChangeForme = true;
}
},
onAfterMoveSecondarySelf(pokemon, target, move) {
if (move.willChangeForme) {
const meloettaForme = pokemon.species.id === 'meloettapirouette' ? '' : '-Pirouette';
pokemon.formeChange('Meloetta' + meloettaForme, this.effect, false, '[msg]');
}
},
target: "allAdjacentFoes",
type: "Normal",
},

rest: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Rest",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1},
onTry(source) {
if (source.status === 'slp' || source.hasAbility('comatose')) return false;
if (source.hp === source.maxhp) {
this.add('-fail', source, 'heal');
return null;
}
if (source.hasAbility(['insomnia', 'vitalspirit'])) {
this.add('-fail', source, '[from] ability: ' + source.getAbility().name, '[of] ' + source);
return null;
}
},
onHit(target, source, move) {
const result = target.setStatus('slp', source, move);
if (!result) return result;
target.statusState.time = 3;
target.statusState.startTime = 3;
this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
},
secondary: null,
target: "self",
type: "Psychic",
},

retaliate: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Retaliate",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onBasePower(basePower, pokemon) {
if (pokemon.side.faintedLastTurn) {
this.debug('Boosted for a faint last turn');
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Normal",
},

revelationdance: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Revelation Dance",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, dance: 1},
onModifyType(move, pokemon) {
let type = pokemon.getTypes()[0];
if (type === "Bird") type = "???";
move.type = type;
},
secondary: null,
target: "any",
type: "Normal",
},

revenge: {
accuracy: 95,
basePower: 60,
basePowerCallback(pokemon, target, move) {
const damagedByTarget = pokemon.attackedBy.some(
p => p.source === target && p.damage > 0 && p.thisTurn
);
if (damagedByTarget) {
this.debug('BP doubled for getting hit by ' + target);
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Revenge",
pp: 1.25,
priority: -8,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Fighting",
},

reversal: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target) {
const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
let bp;
if (ratio < 2) {
bp = 200;
} else if (ratio < 5) {
bp = 150;
} else if (ratio < 10) {
bp = 100;
} else if (ratio < 17) {
bp = 80;
} else if (ratio < 33) {
bp = 40;
} else {
bp = 20;
}
this.debug('BP: ' + bp);
return bp;
},
category: "Physical",
name: "Reversal",
pp: 0.625,
priority: -8,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Fighting",
},

revivalblessing: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Revival Blessing",
pp: 0.625,
noPPBoosts: true,
priority: 2,
flags: {},
onTryHit(source) {
if (!source.side.pokemon.filter(ally => ally.fainted).length) {
return false;
}
},
slotCondition: 'revivalblessing',
// No this not a real switchout move
// This is needed to trigger a switch protocol to choose a fainted party member
// Feel free to refactor
selfSwitch: true,
condition: {
duration: 1,
// reviving implemented in side.ts, kind of
},
secondary: null,
target: "self",
type: "Normal",
},

risingvoltage: {
accuracy: 95,
basePower: 70,
basePowerCallback(source, target, move) {
if (this.field.isTerrain('electricterrain') && target.isGrounded()) {
if (!source.isAlly(target)) this.hint(`${move.name}'s BP doubled on grounded target.`);
return move.basePower * 2;
}
return move.basePower;
},
category: "Special",
name: "Rising Voltage",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Electric",
},

roar: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Roar",
pp: 0.625,
priority: 1,
flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
forceSwitch: true,
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

roaroftime: {
accuracy: 85,
basePower: 150,
category: "Special",
name: "Roar of Time",
pp: 0.625,
priority: 0,
flags: {recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Dragon",
},

rockblast: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Rock Blast",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Rock",
},

rockclimb: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Rock Climb",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Normal",
},

rockpolish: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Rock Polish",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spe: 2,
},
secondary: null,
target: "self",
type: "Rock",
},

rockslide: {
accuracy: 85,
basePower: 75,
category: "Physical",
name: "Rock Slide",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "allAdjacentFoes",
type: "Rock",
},

rocksmash: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Rock Smash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 50,
boosts: {
def: -1,
},
},
target: "any",
type: "Fighting",
},

rockthrow: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
return (this.random(10, 200) * pokemon.level) / 100;
},
category: "Physical",
name: "Rock Throw",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "randomNormal",
type: "Rock",
},

rocktomb: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Rock Tomb",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spe: -1,
},
},
target: "any",
type: "Rock",
},

rockwrecker: {
accuracy: 85,
basePower: 150,
category: "Physical",
name: "Rock Wrecker",
pp: 0.625,
priority: 0,
flags: {bullet: 1, recharge: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'mustrecharge',
},
secondary: null,
target: "any",
type: "Rock",
},

roleplay: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Role Play",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1, allyanim: 1},
onTryHit(target, source) {
if (target.ability === source.ability) return false;

const additionalBannedTargetAbilities = [
// Zen Mode included here for compatability with Gen 5-6
'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard', 'zenmode',
];

if (target.getAbility().isPermanent || additionalBannedTargetAbilities.includes(target.ability) ||
source.getAbility().isPermanent) {
return false;
}
},
onHit(target, source) {
const oldAbility = source.setAbility(target.ability);
if (oldAbility) {
this.add('-ability', source, source.getAbility().name, '[from] move: Role Play', '[of] ' + target);
return;
}
return oldAbility as false | null;
},
secondary: null,
target: "any",
type: "Psychic",
},

rollingkick: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Rolling Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Fighting",
},

rollout: {
accuracy: 95,
basePower: 15,
basePowerCallback(pokemon, target, move) {
return 15 * move.hit;
},
category: "Physical",
name: "Rollout",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
multihit: [1, 10],
multiaccuracy: 75,
secondary: null,
target: "any",
type: "Rock",
},

roost: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Roost",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
heal: [60, 100],
self: {
volatileStatus: 'roost',
},
condition: {
duration: 4,
onResidualOrder: 25,
onStart(target) {
if (!target.terastallized) {
this.add('-singleturn', target, 'move: Roost');
} else if (target.terastallized === "Flying") {
this.add('-hint', "If a Flying Terastallized Pokemon uses Roost, it remains Flying-type.");
}
},
onTypePriority: -1,
onType(types, pokemon) {
this.effectState.typeWas = types;
return types.filter(type => type !== 'Flying');
},
},
secondary: null,
target: "self",
type: "Flying",
},

rototiller: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Rototiller",
pp: 1.25,
priority: 0,
flags: {distance: 1},
onHitField(target, source) {
const targets: Pokemon[] = [];
let anyAirborne = false;
for (const pokemon of this.getAllActive()) {
if (!pokemon.runImmunity('Ground')) {
this.add('-immune', pokemon);
anyAirborne = true;
continue;
}
if (pokemon.hasType('Grass')) {
// This move affects every grounded Grass-type Pokemon in play.
targets.push(pokemon);
}
}
if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
for (const pokemon of targets) {
this.boost({atk: 1, spa: 1}, pokemon, source);
}
},
secondary: null,
target: "all",
type: "Ground",
},

round: {
accuracy: 95,
basePower: 60,
basePowerCallback(target, source, move) {
if (move.sourceEffect === 'round') {
this.debug('BP doubled');
return move.basePower * 2;
}
return move.basePower;
},
category: "Special",
name: "Round",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
onTry(source, target, move) {
for (const action of this.queue.list as MoveAction[]) {
if (!action.pokemon || !action.move || action.maxMove || action.zmove) continue;
if (action.move.id === 'round') {
this.queue.prioritizeAction(action, move);
return;
}
}
},
secondary: null,
target: "any",
type: "Normal",
},

ruination: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon, target) {
return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
},
category: "Special",
name: "Ruination",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Dark",
},

sacredfire: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Sacred Fire",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
secondary: {
chance: 50,
status: 'brn',
},
target: "any",
type: "Fire",
},

sacredsword: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Sacred Sword",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
ignoreEvasion: true,
ignoreDefensive: true,
secondary: null,
target: "any",
type: "Fighting",
},

safeguard: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Safeguard",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
sideCondition: 'safeguard',
condition: {
duration: 5,
durationCallback(target, source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Safeguard');
return 7;
}
return 5;
},
onSetStatus(status, target, source, effect) {
if (!effect || !source) return;
if (effect.id === 'yawn') return;
if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
if (target !== source) {
this.debug('interrupting setStatus');
if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
this.add('-activate', target, 'move: Safeguard');
}
return null;
}
},
onTryAddVolatile(status, target, source, effect) {
if (!effect || !source) return;
if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
return null;
}
},
onSideStart(side, source) {
if (source?.hasAbility('persistent')) {
this.add('-sidestart', side, 'Safeguard', '[persistent]');
} else {
this.add('-sidestart', side, 'Safeguard');
}
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 3,
onSideEnd(side) {
this.add('-sideend', side, 'Safeguard');
},
},
secondary: null,
target: "allySide",
type: "Normal",
},

saltcure: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Salt Cure",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
condition: {
noCopy: true,
onStart(pokemon) {
this.add('-start', pokemon, 'Salt Cure');
},
onResidualOrder: 13,
onResidual(pokemon) {
this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Water', 'Steel']) ? 4 : 8));
},
onEnd(pokemon) {
this.add('-end', pokemon, 'Salt Cure');
},
},
secondary: {
chance: 75,
volatileStatus: 'saltcure',
},
target: "any",
type: "Rock",
},

sandattack: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Sand Attack",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
weather: 'Sandstorm',
secondary: {
chance: 100,
evasion: -1,
},
target: "allAdjacentFoes",
type: "Ground",
},

sandsearstorm: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Sandsear Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "allAdjacentFoes",
type: "Ground",
},

sandstorm: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sandstorm",
pp: 0.625,
priority: 0,
flags: {wind: 1},
weather: 'Sandstorm',
secondary: null,
target: "allAdjacentFoes",
type: "Rock",
},

sandtomb: {
accuracy: 85,
basePower: 40,
category: "Physical",
name: "Sand Tomb",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Ground",
},

sappyseed: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Sappy Seed",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
onHit(target, source) {
if (target.hasType('Grass')) return null;
target.addVolatile('leechseed', source);
},
secondary: null,
target: "any",
type: "Grass",
},

savagespinout: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Savage Spin Out",
pp: 0.625,
priority: 5,
flags: {protect: 1, reflectable: 1, mirror: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 3, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [25, 100],
secondary: null,
target: "any",
type: "Bug",
},

scald: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Scald",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
thawsTarget: true,
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Water",
},

scaleshot: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Scale Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
selfBoost: {
boosts: {
def: -1,
spd: +1,
},
},
secondary: null,
target: "any",
type: "Dragon",
},

scaryface: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Scary Face",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
boosts: {
spe: -2,
},
secondary: null,
target: "allAdjacent",
type: "Normal",
},

scorchingsands: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Scorching Sands",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
thawsTarget: true,
secondary: {
chance: 25,
status: 'brn',
},
target: "any",
type: "Ground",
},

scratch: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Scratch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

screech: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Screech",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
boosts: {
spd: -2,
def: -2,
},
secondary: null,
target: "any",
type: "Normal",
},

searingshot: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Searing Shot",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'brn',
},
target: "allAdjacent",
type: "Fire",
},

searingsunrazesmash: {
accuracy: 85,
basePower: 125,
category: "Physical",
name: "Searing Sunraze Smash",
pp: 0.625,
priority: 0,
flags: {contact: 1},
weather: 'sunnyday',
secondary: null,
target: "any",
type: "Steel",
},

secretpower: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Secret Power",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyMove(move, pokemon) {
if (this.field.isTerrain('')) return;
move.secondaries = [];
if (this.field.isTerrain('electricterrain')) {
move.secondaries.push({
chance: 25,
status: 'par',
});
} else if (this.field.isTerrain('grassyterrain')) {
move.secondaries.push({
chance: 25,
status: 'slp',
});
} else if (this.field.isTerrain('mistyterrain')) {
move.secondaries.push({
chance: 25,
boosts: {
spa: -1,
},
});
} else if (this.field.isTerrain('psychicterrain')) {
move.secondaries.push({
chance: 25,
boosts: {
spe: -1,
},
});
}
},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Normal",
},

secretsword: {
accuracy: 95,
basePower: 85,
category: "Special",
overrideDefensiveStat: 'def',
name: "Secret Sword",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, slicing: 1},
secondary: null,
target: "any",
type: "Fighting",
},

seedbomb: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Seed Bomb",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
weather: 'Sandstorm',
secondary: null,
target: "any",
type: "Grass",
},

seedflare: {
accuracy: 85,
basePower: 120,
category: "Special",
name: "Seed Flare",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
weather: 'sunnyday',
secondary: {
chance: 50,
boosts: {
spd: -2,
},
},
target: "any",
type: "Grass",
},

seismictoss: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon) {
return (this.random(50, 150) * pokemon.level) / 100;
},
category: "Physical",
name: "Seismic Toss",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Fighting",
},

selfdestruct: {
accuracy: 95,
basePower: 250,
category: "Physical",
name: "Self Destruct",
pp: 0.625,
priority: -7,
flags: {protect: 1, mirror: 1},
selfdestruct: "always",
secondary: null,
target: "allAdjacent",
type: "Normal",
},

shadowball: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Shadow Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
spd: -1,
},
},
target: "any",
type: "Ghost",
},

shadowbone: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Shadow Bone",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
boosts: {
def: -1,
},
},
target: "any",
type: "Ghost",
},

shadowclaw: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Shadow Claw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Ghost",
},

shadowforce: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Shadow Force",
pp: 1.25,
priority: 0,
flags: {contact: 1, charge: 1, mirror: 1},
breaksProtect: true,
secondary: null,
target: "any",
type: "Ghost",
},

shadowpunch: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Shadow Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondaries: [
{
chance: 33,
status: 'tox',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Ghost",
},

shadowsneak: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Shadow Sneak",
pp: 0.625,
priority: 1,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Ghost",
},

shadowstrike: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Shadow Strike",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 50,
boosts: {
def: -1,
},
},
target: "any",
type: "Ghost",
},

sharpen: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sharpen",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 1,
spa: 1,
accuracy: 1,
},
secondary: null,
target: "self",
type: "Normal",
},

shatteredpsyche: {
accuracy: 95,
basePower: 45,
category: "Physical",
name: "Shattered Psyche",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
volatileStatus: 'confusion',
secondary: null,
target: "any",
type: "Psychic",
},

shedtail: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Shed Tail",
pp: 0.625,
priority: 0,
flags: {},
volatileStatus: 'substitute',
onTryHit(source) {
if (!this.canSwitch(source.side)) {
this.add('-fail', source);
return this.NOT_FAIL;
}
if (source.volatiles['substitute']) {
this.add('-fail', source, 'move: Shed Tail');
return this.NOT_FAIL;
}
if (source.hp <= Math.ceil(source.maxhp / 2)) {
this.add('-fail', source, 'move: Shed Tail', '[weak]');
return this.NOT_FAIL;
}
},
onHit(target) {
this.directDamage(Math.ceil(target.maxhp / 2));
},
self: {
onHit(source) {
source.skipBeforeSwitchOutEventFlag = true;
},
},
selfSwitch: 'shedtail',
secondary: null,
target: "self",
type: "Normal",
},

sheercold: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Sheer Cold",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
secondaries: [
{
chance: 25,
status: 'frz',
}, {
chance: 25,
weather: 'hail',
}, {
chance: 25,
weather: 'snow',
},
],
target: "any",
type: "Ice",
},

shellsidearm: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Shell Side Arm",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onPrepareHit(target, source, move) {
if (!source.isAlly(target)) {
this.attrLastMove('[anim] Shell Side Arm ' + move.category);
}
},
onModifyMove(move, pokemon, target) {
if (!target) return;
const atk = pokemon.getStat('atk', false, true);
const spa = pokemon.getStat('spa', false, true);
const def = target.getStat('def', false, true);
const spd = target.getStat('spd', false, true);
const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
if (physical > special || (physical === special && this.random(2) === 0)) {
move.category = 'Physical';
move.flags.contact = 1;
}
},
onHit(target, source, move) {
// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
},
onAfterSubDamage(damage, target, source, move) {
if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
},
secondary: {
chance: 25,
status: 'tox',
},
target: "any",
type: "Poison",
},

shellsmash: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Shell Smash",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
def: -2,
spd: -2,
atk: 2,
spa: 2,
spe: 2,
evasion: -3,
},
secondary: null,
target: "self",
type: "Normal",
},

shelltrap: {
accuracy: 95,
basePower: 150,
category: "Special",
name: "Shell Trap",
pp: 0.625,
priority: -3,
flags: {protect: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Water') return 1;
},
priorityChargeCallback(pokemon) {
pokemon.addVolatile('shelltrap');
},
onTryMove(pokemon) {
if (!pokemon.volatiles['shelltrap']?.gotHit) {
this.attrLastMove('[still]');
this.add('cant', pokemon, 'Shell Trap', 'Shell Trap');
return null;
}
},
condition: {
duration: 1,
onStart(pokemon) {
this.add('-singleturn', pokemon, 'move: Shell Trap');
},
onHit(pokemon, source, move) {
if (!pokemon.isAlly(source) && move.category === 'Physical') {
this.effectState.gotHit = true;
const action = this.queue.willMove(pokemon);
if (action) {
this.queue.prioritizeAction(action);
}
}
},
},
secondary: null,
target: "allAdjacentFoes",
type: "Fire",
},

shelter: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Shelter",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 2,
def: 2,
evasion: -2,
},
secondary: null,
target: "self",
type: "Steel",
},

shiftgear: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Shift Gear",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spe: 2,
atk: 1,
spa: 1,
spd: -2,
def: -2,
},
secondary: null,
target: "self",
type: "Steel",
},

shockwave: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Shock Wave",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
terrain: 'electricterrain',
condition: {
duration: 3,
durationCallback(source, effect) {
if (source?.hasItem('terrainextender')) {
return 5;
}
return 3;
},
onSetStatus(status, target, source, effect) {
if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
this.add('-activate', target, 'move: Electric Terrain');
}
return false;
}
},
onTryAddVolatile(status, target) {
if (!target.isGrounded() || target.isSemiInvulnerable()) return;
if (status.id === 'yawn') {
this.add('-activate', target, 'move: Electric Terrain');
return null;
}
},
onBasePowerPriority: 6,
onBasePower(basePower, attacker, defender, move) {
if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
this.debug('electric terrain boost');
return this.chainModify([5325, 4096]);
}
},
onFieldStart(field, source, effect) {
if (effect?.effectType === 'Ability') {
this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
} else {
this.add('-fieldstart', 'move: Electric Terrain');
}
},
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 7,
onFieldEnd() {
this.add('-fieldend', 'move: Electric Terrain');
},
},
secondary: null,
target: "any",
type: "Electric",
},

shoreup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Shore Up",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1},
onHit(pokemon) {
let factor = 0.5;
if (this.field.isWeather('sandstorm')) {
factor = 0.667;
}
const success = !!this.heal(this.modify(pokemon.maxhp, factor));
if (!success) {
this.add('-fail', pokemon, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "self",
type: "Ground",
},

signalbeam: {
accuracy: 95,
basePower: 75,
category: "Special",
name: "Signal Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Bug",
},

silktrap: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Silk Trap",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'silktrap',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 3,
onStart(target) {
this.add('-singleturn', target, 'Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect'] || move.category === 'Status') {
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
if (this.checkMoveMakesContact(move, source, target)) {
this.boost({spe: -1}, source, target, this.dex.getActiveMove("Silk Trap"));
}
return this.NOT_FAIL;
},
onHit(target, source, move) {
if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
this.boost({spe: -1}, source, target, this.dex.getActiveMove("Silk Trap"));
}
},
},
target: "self",
type: "Bug",
},

silverwind: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Silver Wind",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Flying') return 1;
},
secondary: {
chance: 25,
self: {
boosts: {
atk: 1,
def: 1,
spa: 1,
spd: 1,
spe: 1,
},
},
},
target: "any",
type: "Bug",
},

simplebeam: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Simple Beam",
pp: 1.25,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onTryHit(target) {
if (target.getAbility().isPermanent || target.ability === 'simple' || target.ability === 'truant') {
return false;
}
},
onHit(pokemon) {
const oldAbility = pokemon.setAbility('simple');
if (oldAbility) {
this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
return;
}
return oldAbility as false | null;
},
secondary: null,
target: "any",
type: "Normal",
},

sing: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Sing",
pp: 0.625,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 95,
status: 'slp',
},
target: "allAdjacent",
type: "Normal",
},

sinisterarrowraid: {
accuracy: 95,
basePower: 20,
category: "Physical",
name: "Sinister Arrow Raid",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 7],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Ghost",
},

sizzlyslide: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Sizzly Slide",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
secondary: {
chance: 75,
status: 'brn',
},
target: "any",
type: "Fire",
},

skittersmack: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Skitter Smack",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
atk: -1,
},
},
target: "any",
type: "Bug",
},

skullbash: {
accuracy: 95,
basePower: 125,
category: "Physical",
name: "Skull Bash",
pp: 0.625,
priority: 0,
flags: {charge: 1, contact: 1, protect: 1, mirror: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({def: 2, atk: 1, evasion: -2, spe: -1,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: null,
target: "any",
type: "Normal",
},

skyattack: {
accuracy: 95,
basePower: 140,
category: "Physical",
name: "Sky Attack",
pp: 0.625,
priority: 0,
flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
critRatio: 1,
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Flying",
},

skydrop: {
accuracy: 85,
basePower: 90,
category: "Physical",
name: "Sky Drop",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
onEffectiveness(typeMod, target, type) {
if (type === 'Rock') return 1;
},
secondary: null,
target: "any",
type: "Flying",
},

skyuppercut: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Sky Uppercut",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondary: null,
target: "any",
type: "Fighting",
},

slackoff: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Slack Off",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
heal: [50, 100],
secondary: null,
target: "self",
type: "Normal",
},

slam: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Slam",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

slash: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Slash",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

sleeppowder: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Sleep Powder",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
status: 'slp',
secondary: null,
target: "allAdjacent",
type: "Grass",
},

sleeptalk: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sleep Talk",
pp: 1.25,
priority: 0,
flags: {},
sleepUsable: true,
onTry(source) {
return source.status === 'slp' || source.hasAbility('comatose');
},
onHit(pokemon) {
const moves = [];
for (const moveSlot of pokemon.moveSlots) {
const moveid = moveSlot.id;
if (!moveid) continue;
const move = this.dex.moves.get(moveid);
if (move.flags['nosleeptalk'] || move.flags['charge'] || (move.isZ && move.basePower !== 1) || move.isMax) {
continue;
}
moves.push(moveid);
}
let randomMove = '';
if (moves.length) randomMove = this.sample(moves);
if (!randomMove) {
return false;
}
this.actions.useMove(randomMove, pokemon);
},
secondary: null,
target: "self",
type: "Normal",
},

sludge: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Sludge",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'tox',
},
target: "any",
type: "Poison",
},

sludgebomb: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Sludge Bomb",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'tox',
},
target: "any",
type: "Poison",
},

sludgewave: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Sludge Wave",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'tox',
},
target: "allAdjacent",
type: "Poison",
},

smackdown: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Smack Down",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'smackdown',
condition: {
noCopy: true,
onStart(pokemon) {
let applies = false;
if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
this.field.getPseudoWeather('gravity')) applies = false;
if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
applies = true;
this.queue.cancelMove(pokemon);
pokemon.removeVolatile('twoturnmove');
}
if (pokemon.volatiles['magnetrise']) {
applies = true;
delete pokemon.volatiles['magnetrise'];
}
if (pokemon.volatiles['telekinesis']) {
applies = true;
delete pokemon.volatiles['telekinesis'];
}
if (!applies) return false;
this.add('-start', pokemon, 'Smack Down');
},
onRestart(pokemon) {
if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
this.queue.cancelMove(pokemon);
pokemon.removeVolatile('twoturnmove');
this.add('-start', pokemon, 'Smack Down');
}
},
// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
},
secondary: null,
target: "any",
type: "Rock",
},

smartstrike: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Smart Strike",
pp: 0.625,
priority: 1,
flags: {punch: 1,protect: 1, mirror: 1},
onPrepareHit(target, source, move) {
if (!source.isAlly(target)) {
this.attrLastMove('[anim] Shell Side Arm ' + move.category);
}
},
onModifyMove(move, pokemon, target) {
if (!target) return;
const atk = pokemon.getStat('atk', false, true);
const spa = pokemon.getStat('spa', false, true);
const def = target.getStat('def', false, true);
const spd = target.getStat('spd', false, true);
const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
if (physical > special || (physical === special && this.random(2) === 0)) {
move.category = 'Physical';
move.flags.contact = 1;
}
},
onHit(target, source, move) {
// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
},
onAfterSubDamage(damage, target, source, move) {
if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
},
secondary: null,
target: "any",
type: "Steel",
},

smellingsalts: {
accuracy: 95,
basePower: 70,
basePowerCallback(pokemon, target, move) {
if (target.status === 'par') {
this.debug('BP doubled on paralyzed target');
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Smelling Salts",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onHit(target) {
if (target.status === 'par') target.cureStatus();
},
secondary: null,
target: "any",
type: "Normal",
},

smog: {
accuracy: 75,
basePower: 40,
category: "Special",
name: "Smog",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 66,
status: 'tox',
},
target: "allAdjacent",
type: "Poison",
},

smokescreen: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Smokescreen",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
evasion: -1,
},
secondary: null,
target: "allAdjacent",
type: "Normal",
},

snaptrap: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Snap Trap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Grass",
},

snarl: {
accuracy: 95,
basePower: 55,
category: "Special",
name: "Snarl",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 75,
boosts: {
atk: -1,
spa: -1,
},
},
target: "allAdjacentFoes",
type: "Dark",
},

snatch: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Snatch",
pp: 0.625,
priority: 5,
flags: {bypasssub: 1},
volatileStatus: 'snatch',
condition: {
duration: 1,
onStart(pokemon) {
this.add('-singleturn', pokemon, 'Snatch');
},
onAnyPrepareHitPriority: -1,
onAnyPrepareHit(source, target, move) {
const snatchUser = this.effectState.source;
if (snatchUser.isSkyDropped()) return;
if (!move || move.isZ || move.isMax || !move.flags['snatch'] || move.sourceEffect === 'snatch') {
return;
}
snatchUser.removeVolatile('snatch');
this.add('-activate', snatchUser, 'move: Snatch', '[of] ' + source);
this.actions.useMove(move.id, snatchUser);
return null;
},
},
secondary: null,
target: "self",
type: "Dark",
},

snipeshot: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Snipe Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
tracksTarget: true,
secondary: null,
target: "any",
type: "Water",
},

snore: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Snore",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
sleepUsable: true,
onTry(source) {
return source.status === 'slp' || source.hasAbility('comatose');
},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

snowscape: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Snowscape",
pp: 0.625,
priority: 0,
flags: {},
weather: 'snow',
secondary: null,
target: "all",
type: "Ice",
},

soak: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Soak",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target) {
if (target.getTypes().join() === 'Water' || !target.setType('Water')) {
// Soak should animate even when it fails.
// Returning false would suppress the animation.
this.add('-fail', target);
return null;
}
this.add('-start', target, 'typechange', 'Water');
},
secondary: null,
target: "any",
type: "Water",
},

softboiled: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Soft Boiled",
pp: 0.625,
priority: 3,
flags: {snatch: 1, heal: 1},
heal: [33, 100],
secondary: null,
target: "self",
type: "Normal",
},

solarbeam: {
accuracy: 95,
basePower: 120,
category: "Special",
name: "Solar Beam",
pp: 0.625,
priority: 0,
flags: {charge: 1, protect: 1, mirror: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({spa: 1, spd: 1, evasion: -2,}, attacker, attacker, move);
if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
this.attrLastMove('[still]');
this.addMove('-anim', attacker, move.name, defender);
return;
}
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
onBasePower(basePower, pokemon, target) {
const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow'];
if (weakWeathers.includes(pokemon.effectiveWeather())) {
this.debug('weakened by weather');
return this.chainModify(0.5);
}
},
secondary: null,
target: "any",
type: "Grass",
},

solarblade: {
accuracy: 95,
basePower: 125,
category: "Physical",
name: "Solar Blade",
pp: 0.625,
priority: 0,
flags: {charge: 1, contact: 1, protect: 1, mirror: 1, slicing: 1},
onTryMove(attacker, defender, move) {
if (attacker.removeVolatile(move.id)) {
return;
}
this.add('-prepare', attacker, move.name);
this.boost({atk: 1, spe: 1, evasion: -2,}, attacker, attacker, move);
if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
this.attrLastMove('[still]');
this.addMove('-anim', attacker, move.name, defender);
return;
}
if (!this.runEvent('ChargeMove', attacker, defender, move)) {
return;
}
attacker.addVolatile('twoturnmove', defender);
return null;
},
onBasePower(basePower, pokemon, target) {
const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow'];
if (weakWeathers.includes(pokemon.effectiveWeather())) {
this.debug('weakened by weather');
return this.chainModify(0.5);
}
},
secondary: null,
target: "any",
type: "Grass",
},

sonicboom: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Sonic Boom",
pp: 0.625,
priority: 10,
flags: {protect: 1, mirror: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [33, 100],
secondary: null,
target: "randomNormal",
type: "Normal",
},

soulstealing7starstrike: {
accuracy: 95,
basePower: 85,
category: "Physical",
name: "Soul Stealing 7 Star Strike",
pp: 0.625,
priority: 0,
flags: {punch: 1, protect: 1, mirror: 1, heal: 1},
drain: [75, 100],
secondary: null,
target: "any",
type: "Ghost",
},

spacialrend: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Spacial Rend",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Dragon",
},

spark: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Spark",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Electric",
},

sparklingaria: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Sparkling Aria",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
dustproof: true,
chance: 75,
volatileStatus: 'sparklingaria',
},
onAfterMove(source, target, move) {
for (const pokemon of this.getAllActive()) {
if (pokemon !== source && pokemon.removeVolatile('sparklingaria') && pokemon.status === 'brn' && !source.fainted) {
pokemon.cureStatus();
}
}
},
target: "allAdjacent",
type: "Water",
},

spectralthief: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Spectral Thief",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, bypasssub: 1},
stealsBoosts: true,
// Boost stealing implemented in scripts.js
secondary: null,
target: "any",
type: "Ghost",
},

speedswap: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Speed Swap",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
onHit(target, source) {
const targetSpe = target.storedStats.spe;
target.storedStats.spe = source.storedStats.spe;
source.storedStats.spe = targetSpe;
this.add('-activate', source, 'move: Speed Swap', '[of] ' + target);
},
secondary: null,
target: "any",
type: "Psychic",
},

spicyextract: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Spicy Extract",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
chance: 75,
atk: 2,
spa: 2,
spe: 1,
spd: -2,
def: -2,
evasion: -2
},
secondary: {
chance: 75,
status: 'brn',
},
target: "self",
type: "Grass",
},

spiderweb: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Spider Web",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
onHit(target, source, move) {
return target.addVolatile('trapped', source, move, 'trapper');
},
secondary: null,
target: "any",
type: "Bug",
},

spikecannon: {
accuracy: 95,
basePower: 20,
category: "Physical",
name: "Spike Cannon",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

spikes: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Spikes",
pp: 1.25,
priority: 0,
flags: {reflectable: 1},
sideCondition: 'spikes',
condition: {
// this is a side condition
onSideStart(side) {
this.add('-sidestart', side, 'Spikes');
this.effectState.layers = 1;
},
onSideRestart(side) {
if (this.effectState.layers >= 3) return false;
this.add('-sidestart', side, 'Spikes');
this.effectState.layers++;
},
onEntryHazard(pokemon) {
if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
},
},
secondary: null,
target: "foeSide",
type: "Ground",
},

spikyshield: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Spiky Shield",
pp: 0.625,
priority: 4,
flags: {},
stallingMove: true,
volatileStatus: 'spikyshield',
onPrepareHit(pokemon) {
return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
},
onHit(pokemon) {
pokemon.addVolatile('stall');
},
condition: {
duration: 1,
onStart(target) {
this.add('-singleturn', target, 'move: Protect');
},
onTryHitPriority: 3,
onTryHit(target, source, move) {
if (!move.flags['protect']) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
return;
}
if (move.smartTarget) {
move.smartTarget = false;
} else {
this.add('-activate', target, 'move: Protect');
}
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
if (this.checkMoveMakesContact(move, source, target)) {
this.damage(source.baseMaxhp / 8, source, target);
}
return this.NOT_FAIL;
},
onHit(target, source, move) {
if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
this.damage(source.baseMaxhp / 8, source, target);
}
},
},
secondary: null,
target: "self",
type: "Grass",
},

spinout: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Spin Out",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
boosts: {
spe: -2,
},
},
secondary: null,
target: "any",
type: "Steel",
},

spiritbreak: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Spirit Break",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
spa: -1,
},
},
target: "any",
type: "Fairy",
},

spiritshackle: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Spirit Shackle",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Ghost",
},

spite: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Spite",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
pseudoWeather: 'fairylock',
onHitField(target, source, move) {
let result = false;
let message = false;
for (const pokemon of this.getAllActive()) {
if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
this.add('-miss', source, pokemon);
result = true;
} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
result = true;
} else if (!pokemon.volatiles['perishsong']) {
pokemon.addVolatile('perishsong');
this.add('-start', pokemon, 'perish3', '[silent]');
result = true;
message = true;
}
}
if (!result) return false;
if (message) this.add('-fieldactivate', 'move: Perish Song');
},
condition: {
duration: 2,
onEnd(target) {
this.add('-start', target, 'perish0');
target.faint();
},
onResidualOrder: 24,
onResidual(pokemon) {
const duration = pokemon.volatiles['perishsong'].duration;
this.add('-start', pokemon, 'perish' + duration);
},
},
secondary: null,
target: "any",
type: "Ghost",
},

splash: {
accuracy: 75,
basePower: 0,
category: "Special",
name: "Splash",
pp: 0.625,
priority: 3,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'confusion',
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

splinteredstormshards: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Splintered Stormshards",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
onHit() {
this.field.clearTerrain();
},
onAfterSubDamage() {
this.field.clearTerrain();
},
secondary: null,
target: "any",
type: "Rock",
},

spore: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Spore",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
secondary: {
chance: 100,
onHit(target, source) {
const result = this.random(3);
if (result === 0) {
target.trySetStatus('tox', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else {
target.trySetStatus('slp', source);
}
},
},
target: "allAdjacent",
type: "Grass",
},

springtidestorm: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Springtide Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 25,
boosts: {
spa: -1,
},
},
target: "allAdjacentFoes",
type: "Fairy",
},

stealthrock: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Stealth Rock",
pp: 1.25,
priority: 0,
flags: {reflectable: 1},
sideCondition: 'stealthrock',
condition: {
// this is a side condition
onSideStart(side) {
this.add('-sidestart', side, 'move: Stealth Rock');
},
onEntryHazard(pokemon) {
if (pokemon.hasItem('heavydutyboots')) return;
const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
},
},
secondary: null,
target: "foeSide",
type: "Rock",
},

steameruption: {
accuracy: 85,
basePower: 110,
category: "Special",
name: "Steam Eruption",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, defrost: 1},
weather: 'RainDance',
thawsTarget: true,
secondary: {
chance: 25,
status: 'brn',
},
target: "allAdjacent",
type: "Water",
},

steamroller: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Steamroller",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Bug",
},

steelbeam: {
accuracy: 95,
basePower: 135,
category: "Special",
name: "Steel Beam",
pp: 0.625,
flags: {protect: 1, mirror: 1},
mindBlownRecoil: true,
onAfterMove(pokemon, target, move) {
if (move.mindBlownRecoil && !move.multihit) {
const hpBeforeRecoil = pokemon.hp;
this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Steel Beam'), true);
if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
this.runEvent('EmergencyExit', pokemon, pokemon);
}
}
},
secondary: null,
target: "any",
type: "Steel",
},

steelroller: {
accuracy: 85,
basePower: 130,
category: "Physical",
name: "Steel Roller",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onTry() {
return !this.field.isTerrain('');
},
onHit() {
this.field.clearTerrain();
},
onAfterSubDamage() {
this.field.clearTerrain();
},
secondary: null,
target: "any",
type: "Steel",
},

steelwing: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Steel Wing",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
self: {
boosts: {
spd: 1,
def: 1,
},
},
},
target: "any",
type: "Steel",
},

stickyweb: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sticky Web",
pp: 1.25,
priority: 0,
flags: {reflectable: 1},
sideCondition: 'stickyweb',
condition: {
onSideStart(side) {
this.add('-sidestart', side, 'move: Sticky Web');
},
onEntryHazard(pokemon) {
if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
this.add('-activate', pokemon, 'move: Sticky Web');
this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
},
},
secondary: null,
target: "foeSide",
type: "Bug",
},

stokedsparksurfer: {
accuracy: 85,
basePower: 115,
category: "Special",
name: "Stoked Sparksurfer",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 50,
status: 'par',
},
target: "any",
type: "Electric",
},

stomp: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Stomp",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Normal",
},

stompingtantrum: {
accuracy: 95,
basePower: 75,
basePowerCallback(pokemon, target, move) {
if (pokemon.moveLastTurnResult === false) {
this.debug('doubling Stomping Tantrum BP due to previous move failure');
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Stomping Tantrum",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Ground",
},

stoneaxe: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Stone Axe",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
self: {
onHit(source) {
for (const side of source.side.foeSidesWithConditions()) {
side.addSideCondition('stealthrock');
}
},
},
secondary: {}, // allows sheer force to trigger
target: "any",
type: "Rock",
},

stoneedge: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Stone Edge",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Rock",
},

storedpower: {
accuracy: 95,
basePower: 20,
basePowerCallback(pokemon, target, move) {
const bp = move.basePower + 20 * pokemon.positiveBoosts();
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Stored Power",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Psychic",
},

stormthrow: {
accuracy: 95,
basePower: 45,
category: "Physical",
name: "Storm Throw",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
weather: 'RainDance',
critRatio: 2,
secondary: null,
target: "any",
type: "Fighting",
},

strangesteam: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Strange Steam",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Poison') return 1;
},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Fairy",
},

strength: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Strength",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 33,
boosts: {
atk: 1,
},
},
target: "any",
type: "Normal",
},

strengthsap: {
accuracy: 95,
basePower: 10,
category: "Status",
name: "Strength Sap",
pp: 0.625,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
onHit(target, source) {
if (target.boosts.atk === -6) return false;
const atk = target.getStat('atk', false, true);
const success = this.boost({atk: -1}, target, source, null, false, true);
return !!(this.heal(atk, source, target) || success);
},
secondary: null,
target: "any",
type: "Grass",
},

stringshot: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "String Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
spe: -2,
},
secondary: null,
target: "allAdjacentFoes",
type: "Bug",
},

struggle: {
accuracy: 25,
basePower: 90,
category: "Physical",
name: "Struggle",
pp: 50,
noPPBoosts: true,
priority: 0,
flags: {contact: 1, protect: 1},
noSketch: true,
onModifyMove(move, pokemon, target) {
move.type = '???';
this.add('-activate', pokemon, 'move: Struggle');
},
struggleRecoil: true,
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
secondary: null,
target: "randomNormal",
type: "Normal",
},

strugglebug: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Struggle Bug",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
target: "allAdjacentFoes",
type: "Bug",
},

stuffcheeks: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Stuff Cheeks",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onDisableMove(pokemon) {
if (!pokemon.getItem().isBerry) pokemon.disableMove('stuffcheeks');
},
onTry(source) {
return source.getItem().isBerry;
},
onHit(pokemon) {
if (!this.boost({def: 2})) return null;
pokemon.eatItem(true);
},
secondary: null,
target: "self",
type: "Normal",
},

stunspore: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Stun Spore",
pp: 1.25,
priority: 0,
flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
status: 'par',
secondary: null,
target: "allAdjacent",
type: "Grass",
},

submission: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Submission",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Fighting",
},

substitute: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Substitute",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
volatileStatus: 'substitute',
onTryHit(source) {
if (source.volatiles['substitute']) {
this.add('-fail', source, 'move: Substitute');
return this.NOT_FAIL;
}
if (source.hp <= source.maxhp / 4 || source.maxhp === 1) { // Shedinja clause
this.add('-fail', source, 'move: Substitute', '[weak]');
return this.NOT_FAIL;
}
},
onHit(target) {
this.directDamage(target.maxhp / 3);
},
condition: {
onStart(target, source, effect) {
if (effect?.id === 'shedtail') {
this.add('-start', target, 'Substitute', '[from] move: Shed Tail');
} else {
this.add('-start', target, 'Substitute');
}
this.effectState.hp = Math.floor(target.maxhp / 4);
if (target.volatiles['partiallytrapped']) {
this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
delete target.volatiles['partiallytrapped'];
}
},
onTryPrimaryHitPriority: -1,
onTryPrimaryHit(target, source, move) {
if (target === source || move.flags['bypasssub'] || move.infiltrates) {
return;
}
let damage = this.actions.getDamage(source, target, move);
if (!damage && damage !== 0) {
this.add('-fail', source);
this.attrLastMove('[still]');
return null;
}
damage = this.runEvent('SubDamage', target, source, move, damage);
if (!damage) {
return damage;
}
if (damage > target.volatiles['substitute'].hp) {
damage = target.volatiles['substitute'].hp as number;
}
target.volatiles['substitute'].hp -= damage;
source.lastDamage = damage;
if (target.volatiles['substitute'].hp <= 0) {
if (move.ohko) this.add('-ohko');
target.removeVolatile('substitute');
} else {
this.add('-activate', target, 'move: Substitute', '[damage]');
}
if (move.recoil) {
this.damage(this.actions.calcRecoilDamage(damage, move), source, target, 'recoil');
}
if (move.drain) {
this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
}
this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
this.runEvent('AfterSubDamage', target, source, move, damage);
return this.HIT_SUBSTITUTE;
},
onEnd(target) {
this.add('-end', target, 'Substitute');
},
},
secondary: null,
target: "self",
type: "Normal",
},

subzeroslammer: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Subzero Slammer",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 50,
status: 'frz',
},
target: "any",
type: "Ice",
},

suckerpunch: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Sucker Punch",
pp: 0.625,
priority: 10,
flags: {punch: 1, contact: 1, protect: 1, mirror: 1},
onTry(source, target) {
const action = this.queue.willMove(target);
const move = action?.choice === 'move' ? action.move : null;
if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
return false;
}
},
secondary: null,
target: "any",
type: "Dark",
},

sunnyday: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sunny Day",
pp: 0.625,
priority: 0,
flags: {},
weather: 'sunnyday',
secondary: null,
target: "allAdjacentFoes",
type: "Fire",
},

sunsteelstrike: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Sunsteel Strike",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
ignoreAbility: true,
secondary: {
chance: 50,
status: 'brn',
},
target: "any",
type: "Steel",
},

superfang: {
accuracy: 95,
basePower: 0,
damageCallback(pokemon, target) {
return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
},
category: "Physical",
name: "Super Fang",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Normal",
},

superpower: {
accuracy: 85,
basePower: 120,
category: "Physical",
name: "Superpower",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
boosts: {
atk: -1,
def: -1,
evasion: -1,
},
},
secondary: null,
target: "any",
type: "Fighting",
},

supersonic: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Supersonic",
pp: 1.25,
priority: 1,
flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
volatileStatus: 'confusion',
secondary: null,
target: "allAdjacent",
type: "Normal",
},

supersonicskystrike: {
accuracy: 75,
basePower: 120,
category: "Physical",
name: "Supersonic Skystrike",
pp: 0.625,
priority: 10,
flags: {protect: 1, mirror: 1},
hasCrashDamage: true,
onMoveFail(target, source, move) {
this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
},
recoil: [33, 100],
secondary: null,
target: "randomNormal",
type: "Flying",
},

surf: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Surf",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacent",
type: "Water",
},

surgingstrikes: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Surging Strikes",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
critRatio: 2,
multihit: [1, 4],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Water",
},

swagger: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Swagger",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
volatileStatus: 'confusion',
boosts: {
atk: 2,
spa: 1,
},
secondary: null,
target: "any",
type: "Normal",
},

sweetkiss: {
accuracy: 85,
basePower: 50,
category: "Physical",
name: "Sweet Kiss",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'confusion',
secondary: null,
target: "any",
type: "Fairy",
},

sweetscent: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Sweet Scent",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
evasion: -2,
},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

swift: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Swift",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
chance: 75,
selfBoost: {
accuracy: 2,
},
target: "allAdjacentFoes",
type: "Normal",
},

switcheroo: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Switcheroo",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, allyanim: 1},
onTryImmunity(target) {
return !target.hasAbility('stickyhold');
},
onHit(target, source, move) {
const yourItem = target.takeItem(source);
const myItem = source.takeItem();
if (target.item || source.item || (!yourItem && !myItem)) {
if (yourItem) target.item = yourItem.id;
if (myItem) source.item = myItem.id;
return false;
}
if (
(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
) {
if (yourItem) target.item = yourItem.id;
if (myItem) source.item = myItem.id;
return false;
}
this.add('-activate', source, 'move: Trick', '[of] ' + target);
if (myItem) {
target.setItem(myItem);
this.add('-item', target, myItem, '[from] move: Switcheroo');
} else {
this.add('-enditem', target, yourItem, '[silent]', '[from] move: Switcheroo');
}
if (yourItem) {
source.setItem(yourItem);
this.add('-item', source, yourItem, '[from] move: Switcheroo');
} else {
this.add('-enditem', source, myItem, '[silent]', '[from] move: Switcheroo');
}
},
secondary: null,
target: "any",
type: "Dark",
},

swordsdance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Swords Dance",
pp: 1.25,
priority: 0,
flags: {snatch: 1, dance: 1},
boosts: {
atk: 3,
evasion: -3,
},
secondary: null,
target: "self",
type: "Normal",
},

synchronoise: {
accuracy: 95,
basePower: 115,
category: "Special",
name: "Synchronoise",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onTryImmunity(target, source) {
return target.hasType(source.getTypes());
},
secondary: null,
target: "allAdjacent",
type: "Psychic",
},

synthesis: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Synthesis",
pp: 0.625,
priority: 0,
flags: {snatch: 1, heal: 1},
onHit(pokemon) {
let factor = 0.5;
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
factor = 0.667;
break;
case 'raindance':
case 'primordialsea':
case 'sandstorm':
case 'hail':
case 'snow':
factor = 0.25;
break;
}
const success = !!this.heal(this.modify(pokemon.maxhp, factor));
if (!success) {
this.add('-fail', pokemon, 'heal');
return this.NOT_FAIL;
}
return success;
},
secondary: null,
target: "self",
type: "Grass",
},

tackle: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Tackle",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Normal",
},

tailglow: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tail Glow",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spa: 3,
evasion: -3,
},
secondary: null,
target: "self",
type: "Bug",
},

tailslap: {
accuracy: 95,
basePower: 25,
category: "Physical",
name: "Tail Slap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Normal",
},

tailwhip: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tail Whip",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
boosts: {
spd: -1,
def: -1,
evasion: -1,
},
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

tailwind: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tailwind",
pp: 1.25,
priority: 0,
flags: {snatch: 1, wind: 1},
sideCondition: 'tailwind',
condition: {
duration: 4,
durationCallback(target, source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Tailwind');
return 6;
}
return 4;
},
onSideStart(side, source) {
if (source?.hasAbility('persistent')) {
this.add('-sidestart', side, 'move: Tailwind', '[persistent]');
} else {
this.add('-sidestart', side, 'move: Tailwind');
}
},
onModifySpe(spe, pokemon) {
return this.chainModify(2);
},
onSideResidualOrder: 26,
onSideResidualSubOrder: 5,
onSideEnd(side) {
this.add('-sideend', side, 'move: Tailwind');
},
},
secondary: null,
target: "allySide",
type: "Flying",
},

takedown: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Take Down",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [25, 100],
secondary: null,
target: "any",
type: "Normal",
},

takeheart: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Take Heart",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
onHit(pokemon) {
const success = !!this.boost({atk: 1, spa: 1});
return pokemon.cureStatus() || success;
},
secondary: null,
target: "self",
type: "Psychic",
},

tarshot: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tar Shot",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'tarshot',
condition: {
onStart(pokemon) {
this.add('-start', pokemon, 'Tar Shot');
},
onEffectivenessPriority: -2,
onEffectiveness(typeMod, target, type, move) {
if (move.type !== 'Fire') return;
if (!target) return;
if (type !== target.getTypes()[0]) return;
return typeMod + 1;
},
},
boosts: {
spe: -1,
},
secondary: null,
target: "allAdjacent",
type: "Rock",
},

taunt: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Taunt",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
volatileStatus: 'taunt',
condition: {
duration: 3,
onStart(target) {
if (target.activeTurns && !this.queue.willMove(target)) {
this.effectState.duration++;
}
this.add('-start', target, 'move: Taunt');
},
onResidualOrder: 15,
onEnd(target) {
this.add('-end', target, 'move: Taunt');
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
const move = this.dex.moves.get(moveSlot.id);
if (move.category === 'Status' && move.id !== 'mefirst') {
pokemon.disableMove(moveSlot.id);
}
}
},
onBeforeMovePriority: 5,
onBeforeMove(attacker, defender, move) {
if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
this.add('cant', attacker, 'move: Taunt', move);
return false;
}
},
},
secondary: null,
target: "any",
type: "Dark",
},

tearfullook: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tearful Look",
pp: 1.25,
priority: 0,
flags: {reflectable: 1, mirror: 1},
volatileStatus: 'attract',
boosts: {
atk: -1,
spa: -1,
},
secondary: null,
target: "any",
type: "Normal",
},

teatime: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Teatime",
pp: 1.25,
priority: 0,
flags: {bypasssub: 1},
onHitField(target, source, move) {
const targets: Pokemon[] = [];
for (const pokemon of this.getAllActive()) {
if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
this.add('-miss', source, pokemon);
} else if (this.runEvent('TryHit', pokemon, source, move) && pokemon.getItem().isBerry) {
targets.push(pokemon);
}
}
this.add('-fieldactivate', 'move: Teatime');
if (!targets.length) {
this.add('-fail', source, 'move: Teatime');
this.attrLastMove('[still]');
return this.NOT_FAIL;
}
for (const pokemon of targets) {
pokemon.eatItem(true);
}
},
secondary: null,
target: "all",
type: "Normal",
},

tectonicrage: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Tectonic Rage",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 75,
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
},
target: "any",
type: "Ground",
},

teeterdance: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Teeter Dance",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, dance: 1},
volatileStatus: 'confusion',
secondary: null,
target: "allAdjacent",
type: "Normal",
},

telekinesis: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Telekinesis",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, gravity: 1, allyanim: 1},
volatileStatus: 'telekinesis',
onTry(source, target, move) {
// Additional Gravity check for Z-move variant
if (this.field.getPseudoWeather('Gravity')) {
this.attrLastMove('[still]');
this.add('cant', source, 'move: Gravity', move);
return null;
}
},
condition: {
duration: 3,
onStart(target) {
if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast'].includes(target.baseSpecies.baseSpecies) ||
target.baseSpecies.name === 'Gengar-Mega') {
this.add('-immune', target);
return null;
}
if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
this.add('-start', target, 'Telekinesis');
},
onAccuracyPriority: -1,
onAccuracy(accuracy, target, source, move) {
if (move && !move.ohko) return true;
},
onImmunity(type) {
if (type === 'Ground') return false;
},
onUpdate(pokemon) {
if (pokemon.baseSpecies.name === 'Gengar-Mega') {
delete pokemon.volatiles['telekinesis'];
this.add('-end', pokemon, 'Telekinesis', '[silent]');
}
},
onResidualOrder: 19,
onEnd(target) {
this.add('-end', target, 'Telekinesis');
},
},
secondary: null,
target: "any",
type: "Psychic",
},

teleport: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Teleport",
pp: 0.625,
priority: 11,
flags: {protect: 1},
onTry(source) {
return !!this.canSwitch(source.side);
},
selfSwitch: true,
forceSwitch: true,
secondary: null,
target: "randomNormal",
type: "Psychic",
},

terablast: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Tera Blast",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyType(move, pokemon, target) {
if (pokemon.terastallized) {
move.type = pokemon.teraType;
}
},
onModifyMove(move, pokemon) {
if (pokemon.terastallized && pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
move.category = 'Physical';
}
},
secondary: null,
target: "any",
type: "Normal",
},

terrainpulse: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Terrain Pulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1, pulse: 1},
onModifyType(move, pokemon) {
if (!pokemon.isGrounded()) return;
switch (this.field.terrain) {
case 'electricterrain':
move.type = 'Electric';
break;
case 'grassyterrain':
move.type = 'Grass';
break;
case 'mistyterrain':
move.type = 'Fairy';
break;
case 'psychicterrain':
move.type = 'Psychic';
break;
}
},
onModifyMove(move, pokemon) {
if (this.field.terrain && pokemon.isGrounded()) {
move.basePower *= 2;
this.debug('BP doubled in Terrain');
}
},
secondary: null,
target: "any",
type: "Normal",
},

thief: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Thief",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onAfterHit(target, source, move) {
if (source.item || source.volatiles['gem']) {
return;
}
const yourItem = target.takeItem(source);
if (!yourItem) {
return;
}
if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
!source.setItem(yourItem)) {
target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
return;
}
this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
},
secondary: null,
target: "any",
type: "Dark",
},

thousandarrows: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Thousand Arrows",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type, move) {
if (move.type !== 'Ground') return;
if (!target) return; // avoid crashing when called from a chat plugin
// ignore effectiveness if the target is Flying type and immune to Ground
if (!target.runImmunity('Ground')) {
if (target.hasType('Flying')) return 0;
}
},
volatileStatus: 'smackdown',
ignoreImmunity: {'Ground': true},
secondary: null,
target: "allAdjacentFoes",
type: "Ground",
},

thousandwaves: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Thousand Waves",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onHit(target, source, move) {
if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
},
secondary: null,
target: "allAdjacentFoes",
type: "Ground",
},

thrash: {
accuracy: 95,
basePower: 115,
category: "Physical",
name: "Thrash",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
volatileStatus: 'lockedmove',
},
onAfterMove(pokemon) {
if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
pokemon.removeVolatile('lockedmove');
}
},
secondary: null,
target: "randomNormal",
type: "Normal",
},

throatchop: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Throat Chop",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
condition: {
duration: 2,
onStart(target) {
this.add('-start', target, 'Throat Chop', '[silent]');
},
onDisableMove(pokemon) {
for (const moveSlot of pokemon.moveSlots) {
if (this.dex.moves.get(moveSlot.id).flags['sound']) {
pokemon.disableMove(moveSlot.id);
}
}
},
onBeforeMovePriority: 6,
onBeforeMove(pokemon, target, move) {
if (!move.isZ && !move.isMax && move.flags['sound']) {
this.add('cant', pokemon, 'move: Throat Chop');
return false;
}
},
onModifyMove(move, pokemon, target) {
if (!move.isZ && !move.isMax && move.flags['sound']) {
this.add('cant', pokemon, 'move: Throat Chop');
return false;
}
},
onResidualOrder: 22,
onEnd(target) {
this.add('-end', target, 'Throat Chop', '[silent]');
},
},
secondary: {
chance: 75,
onHit(target) {
target.addVolatile('throatchop');
},
},
target: "any",
type: "Dark",
},

thunder: {
accuracy: 75,
basePower: 115,
category: "Special",
name: "Thunder",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
onModifyMove(move, pokemon, target) {
switch (target?.effectiveWeather()) {
case 'raindance':
case 'primordialsea':
move.accuracy = true;
break;
case 'sunnyday':
case 'desolateland':
move.accuracy = 50;
break;
}
},
secondary: {
chance: 33,
status: 'par',
},
target: "any",
type: "Electric",
},

thunderbolt: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Thunderbolt",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Electric",
},

thundercage: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Thunder Cage",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Electric",
},

thunderfang: {
accuracy: 95,
basePower: 65,
category: "Physical",
name: "Thunder Fang",
pp: 1.25,
priority: 0,
flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
secondaries: [
{
chance: 33,
status: 'par',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Electric",
},

thunderouskick: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Thunderous Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
def: -1,
},
},
target: "any",
type: "Fighting",
},

thunderpunch: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Thunder Punch",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
secondaries: [
{
chance: 33,
status: 'par',
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Electric",
},

thundershock: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Thunder Shock",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: {
chance: 33,
status: 'par',
},
target: "any",
type: "Electric",
},

thunderwave: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Thunder Wave",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'par',
ignoreImmunity: false,
secondary: null,
target: "any",
type: "Electric",
},

tickle: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tickle",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
boosts: {
atk: -1,
spa: -1,
spe: 2,
spd: -1,
def: -1,
},
secondary: null,
target: "any",
type: "Normal",
},

tidyup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Tidy Up",
pp: 1.25,
priority: 0,
flags: {},
onHit(pokemon) {
let success = false;
for (const active of this.getAllActive()) {
if (active.removeVolatile('substitute')) success = true;
}
const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
for (const side of sides) {
for (const sideCondition of removeAll) {
if (side.removeSideCondition(sideCondition)) {
this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
success = true;
}
}
}
if (success) this.add('-activate', pokemon, 'move: Tidy Up');
return !!this.boost({atk: 1, spe: 1}, pokemon, pokemon, null, false, true) || success;
},
secondary: null,
target: "self",
type: "Normal",
},

topsyturvy: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Topsy Turvy",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target) {
let success = false;
let i: BoostID;
for (i in target.boosts) {
if (target.boosts[i] === 0) continue;
target.boosts[i] = -target.boosts[i];
success = true;
}
if (!success) return false;
this.add('-invertboost', target, '[from] move: Topsy Turvy');
},
secondary: null,
target: "any",
type: "Dark",
},

torchsong: {
accuracy: 95,
basePower: 80,
category: "Special",
name: "Torch Song",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
secondary: {
chance: 75,
self: {
boosts: {
spa: 1,
},
},
},
target: "any",
type: "Fire",
},

toxic: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Toxic",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
// No Guard-like effect for Poison-type user's implemented in Scripts#tryMoveHit
status: 'tox',
secondary: null,
target: "any",
type: "Poison",
},

toxicspikes: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Toxic Spikes",
pp: 1.25,
priority: 0,
flags: {reflectable: 1},
sideCondition: 'toxicspikes',
condition: {
// this is a side condition
onSideStart(side) {
this.add('-sidestart', side, 'move: Toxic Spikes');
this.effectState.layers = 1;
},
onSideRestart(side) {
if (this.effectState.layers >= 2) return false;
this.add('-sidestart', side, 'move: Toxic Spikes');
this.effectState.layers++;
},
onEntryHazard(pokemon) {
if (!pokemon.isGrounded()) return;
if (pokemon.hasType('Poison')) {
this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
pokemon.side.removeSideCondition('toxicspikes');
} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
return;
} else if (this.effectState.layers >= 2) {
pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
} else {
pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
}
},
},
secondary: null,
target: "foeSide",
type: "Poison",
},

toxicthread: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Toxic Thread",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'tox',
boosts: {
spe: -1,
},
secondary: null,
target: "any",
type: "Poison",
},

trailblaze: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Trailblaze",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Grass",
},

transform: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Transform",
pp: 0.625,
priority: 5,
flags: {allyanim: 1},
onHit(target, pokemon) {
if (!pokemon.transformInto(target)) {
return false;
}
},
secondary: null,
target: "any",
type: "Normal",
},

triattack: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Tri Attack",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: {
chance: 66,
onHit(target, source) {
const result = this.random(3);
if (result === 0) {
target.trySetStatus('brn', source);
} else if (result === 1) {
target.trySetStatus('par', source);
} else {
target.trySetStatus('frz', source);
}
},
},
target: "any",
type: "Normal",
},

trickortreat: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Trick or Treat",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onHit(target) {
if (target.hasType('Ghost')) return false;
if (!target.addType('Ghost')) return false;
this.add('-start', target, 'typeadd', 'Ghost', '[from] move: Trick or Treat');

if (target.side.active.length === 2 && target.position === 1) {
// Curse Glitch
const action = this.queue.willMove(target);
if (action && action.move.id === 'curse') {
action.targetLoc = -1;
}
}
},
secondary: null,
target: "any",
type: "Ghost",
},

trickroom: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Trick Room",
pp: 0.625,
priority: -11,
flags: {mirror: 1},
pseudoWeather: 'trickroom',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Trick Room');
return 7;
}
return 5;
},
onFieldStart(target, source) {
if (source?.hasAbility('persistent')) {
this.add('-fieldstart', 'move: Trick Room', '[of] ' + source, '[persistent]');
} else {
this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
}
},
onFieldRestart(target, source) {
this.field.removePseudoWeather('trickroom');
},
// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 1,
onFieldEnd() {
this.add('-fieldend', 'move: Trick Room');
},
},
secondary: null,
target: "all",
type: "Psychic",
},

triplearrows: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Triple Arrows",
pp: 1.25,
priority: 1,
flags: {protect: 1, mirror: 1},
onEffectiveness(typeMod, target, type) {
if (type === 'Flying') return 1;
},
critRatio: 2,
secondaries: [
{
chance: 33,
boosts: {
def: -1,
},
}, {
chance: 33,
volatileStatus: 'flinch',
},
],
target: "any",
type: "Fighting",
},

tripleaxel: {
accuracy: 95,
basePower: 20,
basePowerCallback(pokemon, target, move) {
return 20 * move.hit;
},
category: "Physical",
name: "Triple Axel",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 3],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Ice",
},

tripledive: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Triple Dive",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 3],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Water",
},

triplekick: {
accuracy: 95,
basePower: 15,
basePowerCallback(pokemon, target, move) {
return 10 * move.hit;
},
category: "Physical",
name: "Triple Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
multihit: [1, 3],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Fighting",
},

tropkick: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Trop Kick",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
boosts: {
atk: -1,
},
},
target: "any",
type: "Grass",
},

twinbeam: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Twin Beam",
pp: 1.25,
flags: {protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Psychic",
},

twineedle: {
accuracy: 95,
basePower: 40,
category: "Physical",
name: "Twineedle",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: {
chance: 50,
status: 'tox',
},
target: "any",
type: "Bug",
},

twinkletackle: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Twinkle Tackle",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
secondary: null,
forceSwitch: true,
target: "any",
type: "Fairy",
},

twister: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Twister",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, wind: 1},
critRatio: 2,
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "allAdjacentFoes",
type: "Dragon",
},

uturn: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "U turn",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
selfSwitch: true,
secondary: null,
target: "any",
type: "Bug",
},

uproar: {
accuracy: 95,
basePower: 90,
category: "Special",
name: "Uproar",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
self: {
volatileStatus: 'uproar',
},
onTryHit(target) {
const activeTeam = target.side.activeTeam();
const foeActiveTeam = target.side.foe.activeTeam();
for (const [i, allyActive] of activeTeam.entries()) {
if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
const foeActive = foeActiveTeam[i];
if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
}
},
condition: {
duration: 3,
onStart(target) {
this.add('-start', target, 'Uproar');
},
onResidual(target) {
if (target.volatiles['throatchop']) {
target.removeVolatile('uproar');
return;
}
if (target.lastMove && target.lastMove.id === 'struggle') {
// don't lock
delete target.volatiles['uproar'];
}
this.add('-start', target, 'Uproar', '[upkeep]');
},
onResidualOrder: 28,
onResidualSubOrder: 1,
onEnd(target) {
this.add('-end', target, 'Uproar');
},
onLockMove: 'uproar',
onAnySetStatus(status, pokemon) {
if (status.id === 'slp') {
if (pokemon === this.effectState.target) {
this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
} else {
this.add('-fail', pokemon, 'slp', '[from] Uproar');
}
return null;
}
},
},
secondary: null,
target: "randomNormal",
type: "Normal",
},

vacuumwave: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Vacuum Wave",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Fighting",
},

vcreate: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "V create",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
self: {
boosts: {
spe: -1,
def: -1,
spd: -1,
},
},
secondary: null,
target: "any",
type: "Fire",
},

venomdrench: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Venom Drench",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
onHit(target, source, move) {
if (target.status === 'tox' || target.status === 'tox') {
return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
}
return false;
},
secondary: null,
target: "allAdjacentFoes",
type: "Poison",
},

venoshock: {
accuracy: 95,
basePower: 65,
category: "Special",
name: "Venoshock",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
onBasePower(basePower, pokemon, target) {
if (target.status === 'tox' || target.status === 'tox') {
return this.chainModify(2);
}
},
secondary: null,
target: "any",
type: "Poison",
},

vinewhip: {
accuracy: 95,
basePower: 50,
category: "Physical",
name: "Vine Whip",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "allAdjacentFoes",
type: "Grass",
},

visegrip: {
accuracy: 95,
basePower: 55,
category: "Physical",
name: "Vise Grip",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
pseudoWeather: 'fairylock',
condition: {
duration: 5,
onFieldStart(target) {
this.add('-fieldactivate', 'move: Fairy Lock');
},
onTrapPokemon(pokemon) {
pokemon.tryTrap();
},
},
secondary: null,
target: "any",
type: "Normal",
},

vitalthrow: {
accuracy: 95,
basePower: 70,
category: "Physical",
name: "Vital Throw",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
forceSwitch: true,
target: "any",
type: "Fighting",
},

voltswitch: {
accuracy: 95,
basePower: 70,
category: "Special",
name: "Volt Switch",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
selfSwitch: true,
secondary: null,
target: "any",
type: "Electric",
},

volttackle: {
accuracy: 95,
basePower: 115,
category: "Physical",
name: "Volt Tackle",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: {
chance: 25,
status: 'par',
},
target: "any",
type: "Electric",
},

wakeupslap: {
accuracy: 95,
basePower: 70,
basePowerCallback(pokemon, target, move) {
if (target.status === 'slp' || target.hasAbility('comatose')) {
this.debug('BP doubled on sleeping target');
return move.basePower * 2;
}
return move.basePower;
},
category: "Physical",
name: "Wake Up Slap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
onHit(target) {
if (target.status === 'slp') target.cureStatus();
},
secondary: null,
target: "any",
type: "Fighting",
},

waterfall: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Waterfall",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Water",
},

watergun: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Water Gun",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Water",
},

waterpledge: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Water Pledge",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
critRatio: 2,
weather: 'sunnyday',
secondary: null,
target: "any",
type: "Water",
},

waterpulse: {
accuracy: 95,
basePower: 60,
category: "Special",
name: "Water Pulse",
pp: 1.25,
priority: 0,
flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
secondary: {
chance: 25,
volatileStatus: 'confusion',
},
target: "any",
type: "Water",
},

watershuriken: {
accuracy: 95,
basePower: 15,
category: "Special",
name: "Water Shuriken",
pp: 0.625,
priority: 1,
flags: {protect: 1, mirror: 1},
multihit: [1, 5],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Water",
},

waterspout: {
accuracy: 75,
basePower: 145,
basePowerCallback(pokemon, target, move) {
const bp = move.basePower * pokemon.hp / pokemon.maxhp;
this.debug('BP: ' + bp);
return bp;
},
category: "Special",
name: "Water Spout",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1},
secondary: null,
target: "allAdjacentFoes",
type: "Water",
},

wavecrash: {
accuracy: 95,
basePower: 115,
category: "Physical",
name: "Wave Crash",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "allAdjacent",
type: "Water",
},

weatherball: {
accuracy: 95,
basePower: 50,
category: "Special",
name: "Weather Ball",
pp: 1.25,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
onModifyType(move, pokemon) {
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
move.type = 'Fire';
break;
case 'raindance':
case 'primordialsea':
move.type = 'Water';
break;
case 'sandstorm':
move.type = 'Rock';
break;
case 'hail':
case 'snow':
move.type = 'Ice';
break;
}
},
onModifyMove(move, pokemon) {
switch (pokemon.effectiveWeather()) {
case 'sunnyday':
case 'desolateland':
move.basePower *= 2;
break;
case 'raindance':
case 'primordialsea':
move.basePower *= 2;
break;
case 'sandstorm':
move.basePower *= 2;
break;
case 'hail':
case 'snow':
move.basePower *= 2;
break;
}
this.debug('BP: ' + move.basePower);
},
secondary: null,
target: "any",
type: "Normal",
},

whirlpool: {
accuracy: 95,
basePower: 40,
category: "Special",
name: "Whirlpool",
pp: 1.25,
priority: 0,
flags: {protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Water",
},

whirlwind: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Whirlwind",
pp: 0.625,
priority: -6,
flags: {reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, wind: 1},
forceSwitch: true,
secondary: null,
target: "allAdjacentFoes",
type: "Normal",
},

wickedblow: {
accuracy: 95,
basePower: 75,
category: "Physical",
name: "Wicked Blow",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
critRatio: 2,
secondary: null,
target: "any",
type: "Dark",
},

wickedtorque: {
accuracy: 85,
basePower: 105,
category: "Physical",
name: "Wicked Torque",
pp: 0.625,
priority: 0,
flags: {protect: 1},
secondary: {
chance: 33,
status: 'slp',
},
target: "any",
type: "Dark",
},

wideguard: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Wide Guard",
pp: 0.625,
priority: 5,
flags: {snatch: 1},
sideCondition: 'wideguard',
onTry() {
return !!this.queue.willAct();
},
onHitSide(side, source) {
source.addVolatile('stall');
},
condition: {
duration: 3,
onSideStart(target, source) {
this.add('-singleturn', source, 'Wide Guard');
},
onTryHitPriority: 4,
onTryHit(target, source, move) {
// Wide Guard blocks all spread moves
if (move?.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
return;
}
if (move.isZ || move.isMax) {
if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
target.getMoveHitData(move).zBrokeProtect = true;
return;
}
this.add('-activate', target, 'move: Wide Guard');
const lockedmove = source.getVolatile('lockedmove');
if (lockedmove) {
// Outrage counter is reset
if (source.volatiles['lockedmove'].duration === 2) {
delete source.volatiles['lockedmove'];
}
}
return this.NOT_FAIL;
},
},
secondary: null,
target: "allySide",
type: "Rock",
},

wildboltstorm: {
accuracy: 85,
basePower: 105,
category: "Special",
name: "Wildbolt Storm",
pp: 0.625,
priority: 0,
flags: {protect: 1, mirror: 1, wind: 1},
secondary: {
chance: 25,
status: 'par',
},
target: "allAdjacentFoes",
type: "Electric",
},

wildcharge: {
accuracy: 95,
basePower: 90,
category: "Physical",
name: "Wild Charge",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [25, 100],
secondary: null,
target: "any",
type: "Electric",
},

willowisp: {
accuracy: 85,
basePower: 0,
category: "Status",
name: "Will O Wisp",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
status: 'brn',
secondary: null,
target: "any",
type: "Fire",
},

wingattack: {
accuracy: 95,
basePower: 60,
category: "Physical",
name: "Wing Attack",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
secondary: {
chance: 50,
self: {
boosts: {
spe: 1,
},
},
},
target: "any",
type: "Flying",
},

wish: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Wish",
pp: 1.25,
priority: 0,
flags: {snatch: 1, heal: 1},
slotCondition: 'Wish',
condition: {
duration: 2,
onStart(pokemon, source) {
this.effectState.hp = source.maxhp / 2;
},
onResidualOrder: 4,
onEnd(target) {
if (target && !target.fainted) {
const damage = this.heal(this.effectState.hp, target, target);
if (damage) {
this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
}
}
},
},
secondary: null,
target: "self",
type: "Normal",
},

withdraw: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Withdraw",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
spd: 1,
def: 1,
evasion: -1,
},
secondary: null,
target: "self",
type: "Water",
},

wonderroom: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Wonder Room",
pp: 0.625,
priority: 0,
flags: {mirror: 1},
pseudoWeather: 'wonderroom',
condition: {
duration: 5,
durationCallback(source, effect) {
if (source?.hasAbility('persistent')) {
this.add('-activate', source, 'ability: Persistent', '[move] Wonder Room');
return 7;
}
return 5;
},
onModifyMove(move, source, target) {
// This code is for moves that use defensive stats as the attacking stat; see below for most of the implementation
if (!move.overrideOffensiveStat) return;
const statAndBoosts = move.overrideOffensiveStat;
if (!['def', 'spd'].includes(statAndBoosts)) return;
move.overrideOffensiveStat = statAndBoosts === 'def' ? 'spd' : 'def';
this.hint(`${move.name} uses ${statAndBoosts === 'def' ? '' : 'Sp. '}Def boosts when Wonder Room is active.`);
},
onFieldStart(field, source) {
if (source?.hasAbility('persistent')) {
this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source, '[persistent]');
} else {
this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
}
},
onFieldRestart(target, source) {
this.field.removePseudoWeather('wonderroom');
},
// Swapping defenses partially implemented in sim/pokemon.js:Pokemon#calculateStat and Pokemon#getStat
onFieldResidualOrder: 27,
onFieldResidualSubOrder: 5,
onFieldEnd() {
this.add('-fieldend', 'move: Wonder Room');
},
},
secondary: null,
target: "all",
type: "Psychic",
},

woodhammer: {
accuracy: 95,
basePower: 120,
category: "Physical",
name: "Wood Hammer",
pp: 0.625,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [33, 100],
secondary: null,
target: "any",
type: "Grass",
},

workup: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Work Up",
pp: 1.25,
priority: 0,
flags: {snatch: 1},
boosts: {
atk: 1,
spa: 1,
evasion: -2,
},
secondary: null,
target: "allySide",
type: "Normal",
},

worryseed: {
accuracy: 95,
basePower: 0,
category: "Status",
name: "Worry Seed",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
onTryImmunity(target) {
// Truant and Insomnia have special treatment; they fail before
// checking accuracy and will double Stomping Tantrum's BP
if (target.ability === 'truant' || target.ability === 'insomnia') {
return false;
}
},
onTryHit(target) {
if (target.getAbility().isPermanent) {
return false;
}
},
onHit(pokemon) {
const oldAbility = pokemon.setAbility('insomnia');
if (oldAbility) {
this.add('-ability', pokemon, 'Insomnia', '[from] move: Worry Seed');
if (pokemon.status === 'slp') {
pokemon.cureStatus();
}
return;
}
return oldAbility as false | null;
},
secondary: null,
target: "any",
type: "Grass",
},

wrap: {
accuracy: 95,
basePower: 15,
category: "Physical",
name: "Wrap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
volatileStatus: 'partiallytrapped',
secondary: null,
target: "any",
type: "Normal",
},

wringout: {
accuracy: 95,
basePower: 0,
basePowerCallback(pokemon, target, move) {
const hp = target.hp;
const maxHP = target.maxhp;
const bp = Math.floor(Math.floor((120 * (100 * Math.floor(hp * 4096 / maxHP)) + 2048 - 1) / 4096) / 100) || 1;
this.debug('BP for ' + hp + '/' + maxHP + " HP: " + bp);
return bp;
},
category: "Special",
name: "Wring Out",
pp: 1.25,
priority: -2,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: null,
target: "any",
type: "Normal",
},

xscissor: {
accuracy: 95,
basePower: 45,
category: "Physical",
name: "X Scissor",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
critRatio: 2,
multihit: [1, 2],
multiaccuracy: 85,
secondary: null,
target: "any",
type: "Bug",
},

yawn: {
accuracy: 75,
basePower: 0,
category: "Status",
name: "Yawn",
pp: 1.25,
priority: 0,
flags: {protect: 1, reflectable: 1, mirror: 1},
volatileStatus: 'yawn',
onTryHit(target) {
if (target.status || !target.runStatusImmunity('slp')) {
return false;
}
},
condition: {
noCopy: true, // doesn't get copied by Baton Pass
duration: 2,
onStart(target, source) {
this.add('-start', target, 'move: Yawn', '[of] ' + source);
},
onResidualOrder: 23,
onEnd(target) {
this.add('-end', target, 'move: Yawn', '[silent]');
target.trySetStatus('slp', this.effectState.source);
},
},
secondary: null,
target: "any",
type: "Normal",
},

zapcannon: {
accuracy: 75,
basePower: 115,
category: "Special",
name: "Zap Cannon",
pp: 0.625,
priority: 0,
flags: {bullet: 1, protect: 1, mirror: 1},
secondary: {
chance: 75,
status: 'par',
},
target: "any",
type: "Electric",
},

zenheadbutt: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Zen Headbutt",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
recoil: [25, 100],
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Psychic",
},

zingzap: {
accuracy: 95,
basePower: 80,
category: "Physical",
name: "Zing Zap",
pp: 1.25,
priority: 0,
flags: {contact: 1, protect: 1, mirror: 1},
secondary: {
chance: 25,
volatileStatus: 'flinch',
},
target: "any",
type: "Electric",
},


};