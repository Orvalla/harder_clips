// EFFECT RANDOMIZER -----------------------------------------------
// When Prestige deficiencies build-up to 100%, cap deffect to 90% and
// select a random negative effect to be applied to universe or sim level
// deffect remains in tact thereafter.
// Calls via main.js Demand Curve line 3357 and function calculateCreativity
// line 2513. projects.js project200 2134 Universe Next Door prestigeU and
// project201 line 2161 "Universe Within" prestigeS
//
// ----------------------------------------------------------------
//
// User Prestige's,
//  Prestige >= 10,
//  pDeffect >= 100%,
//  pDeffect capped to 90%,
//  random effect chosen and displayed,
//  ,
//
//  reset
//

var randomNum = 0;
var numEffects = 2;

var effects = [];
var activeEffects = [];
var c = 0;

function chooseEffect(){

  var okay = 0;
  var r = 0;

  if(c < effects.length){
    while(!okay){
      r = Math.floor(Math.random()*effects.length); //generate random number
      if(effects[r].flag<2){
        effects[r].flag = 1;
        effects[r].uses = effects[r].uses + 1;
        if(effects[r].uses==10){
          effects[r].flag=2;
          c++;
        }
        okay = 1;
      }
    }
    displayMessage(effects[r].message + (effects[r].uses));
  }
}

function manageEffects(){

    for(var i = 0; i < effects.length; i++){
        if (effects[i].flag > 0){
            displayEffects(effects[i]);
            activeEffects.push(effects[i]);
        }
    }

    for(var i = 0; i < activeEffects.length; i++){
        if (activeEffects[i].cost()){
            document.getElementById(activeEffects[i].id).disabled = false;
        } else {
            document.getElementById(activeEffects[i].id).disabled = true;
        }
    }
}


// POSSIBLE EFFECTS -----------------------------------------------
//  * qChip deficiency
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

var effect1 = {
    id: "prestigeEffect1",
    title: "Quantum Deficiency" + effect1.uses,
    message: "Delay causes Quantum computation capabilities to be further reduced.",
    uses: 0,
    flag: 0,
    effect: function(){
      //enact changes
      for(i = 0 ; i < qChips.length ; i++){
        qChips[i].waveSeed -= (qChips[i].waveSeed*(effect1.uses*0.1))
      }
    }
}

effects.push(effect1);

var effect = {
    id: "prestigeEffect",
    title: "" + effect.uses,
    message: "",
    uses: 0,
    flag: 0,
    effect: function(){
      if(true){
        //enact changes
      }
    }
}

effects.push(effect);
