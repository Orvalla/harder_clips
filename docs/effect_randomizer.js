// EFFECT RANDOMIZER -----------------------------------------------
// When Prestige deficiencies build-up to 100%, cap deffect to 90% and
// select a random negative effect to be applied to universe or sim level
// deffect remains in tact thereafter.
// Calls via main.js Demand Curve line 3357 and function calculateCreativity
// line 2513. projects.js project200 2134 Universe Next Door prestigeU and
// project201 line 2161 "Universe Within" prestigeS
//
// POSSIBLE EFFECTS -----------------------------------------------
//  qChip deficiency
//  Decreased Yomi gains
//  Creativity Speed
//  Trust unlock levels
//  Trust cost for mem/proc upgrades
//  Operations income
//  probe trust/macx trust costs
//  d r i f t
//  swarm gift period
//  maxTrustCost
//  size of batteries
//  more/less matter
//  rate of hazards
//  Milestone Scaling
//  Marketing Effectiveness
//  Diminished returns from stocks
// ----------------------------------------------------------------
//
// User Prestige's,
//  Prestige >= 10,
//  deffect >= 100%,
//  deffect capped to 90%,
//  random effect from sim/uni effects chosen and added,
//  remove from effect pool,
//
//  reset
//

var randomNum = 0;
var numEffects = 2;

function chooseEffect(t){
  var i = Math.floor(Math.random()*numEffects); //generate random number
    effects[i].flag = 1;
    effects[i].uses = effects[i].uses + 1;
    }
