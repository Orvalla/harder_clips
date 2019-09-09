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


function chooseEffect(){
  var r = Math.floor(Math.random()*activeEffects.length); //generate random number
  effects[i].flag = 1;
  effects[i].uses = effects[i].uses + 1;
}


function manageProjects(){

    for(var i = 0; i < projects.length; i++){
        if (projects[i].trigger() && (projects[i].uses > 0)){
            displayProjects(projects[i]);
            projects[i].uses = projects[i].uses - 1;
            activeProjects.push(projects[i]);
        }
    }

    for(var i = 0; i < activeProjects.length; i++){
        if (activeProjects[i].cost()){
            document.getElementById(activeProjects[i].id).disabled = false;
        } else {
            document.getElementById(activeProjects[i].id).disabled = true;
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
    trigger: function(){return project201.flag == 1 && },
    uses: 0,
    flag: 0,
    effect: function(){
      //enact changes
      for(i = 0 ; i < effect1.uses ; i++){
        qChips[i].waveSeed = 0
      }
    }
}

effects.push(effect1);

var effect = {
    id: "prestigeEffect",
    title: "" + effect.uses,
    message: "",
    trigger: function(){return project201.flag == 1 && },
    uses: 0,
    flag: 0,
    effect: function(){
      if(true){
        //enact changes
      }
    }
}

effects.push(effect);

var effect = {
    id: "prestigeEffect",
    title: "" + effect.uses,
    message: "",
    trigger: function(){return project201.flag == 1 && },
    uses: 0,
    flag: 0,
    effect: function(){
      if(true){
        //enact changes
      }
    }
}

effects.push(effect);
