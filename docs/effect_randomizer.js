// EFFECT RANDOMIZER -----------------------------------------------
// When Prestige deficiencies build-up to 100%, cap deffect to 90% and
// select a random negative effect to be applied to universe or sim level
// deffect remains in tact thereafter.
// Calls via main.js Demand Curve line 3357 and function calculateCreativity
// line 2513. projects.js project200 2134 Universe Next Door prestigeU and
// project201 line 2161 "Universe Within" prestigeS
//
// POSSIBLE EFFECTS -----------------------------------------------
//  qChip deficiency - S - scalable
//  Decreased Yomi gains - S - scalable
//  Creativity Speed
//  Trust unlock levels - S - scalable
//  Trust cost for mem/proc upgrades - S - scalable
//  Operations income - S - scalable
//  probe trust/macx trust costs - S - scalable
//  d r i f t - S - scalable
//  swarm gift period
//  maxTrustCost
//
//  size of batteries
//  more/less matter - U - scalable
//  rate of hazards - U - scalable
//  Milestone Scaling - U - scalable
//  Marketing Effectiveness - U - scalable
//  Diminished returns from stocks - U - scalable
// ----------------------------------------------------------------
//
// User Prestige's, Prestige >= 10, deffect >= 100%, deffect capped to 90%,
// random effect from sim/uni effects chosen and added, remove from effect pool,
//



var randomNum = 0;
var numEffects = 16;

function chooseEffect(t){
  var n = Math.floor(Math.random()*numEffects); //generate random number
  if(effects[n].flag){
    //do stuff
  } else {
    //re-roll
  }
}


var effect1 = {
    id: "prestigeEffect1",
    type: 0,  //SIM = 0, UNIVERSE = 1
    title: "Simulation Deficiency",
    pricetag: "",
    description: "test SIM mod",
    trigger: function(){return project201.flag == 1},
    uses: 0,
    cost: function(){return operations>=1},
    flag: 0,
    effect: function(){
      if(effect1.flag==0 && effect1.uses<=0){
        displayMessage("Test effect");

        //enact changes


        //remove element
        var element = document.getElementById("prestigeEffect1");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(effect1);
        activeProjects.splice(index, 1);

        //adjust flags
        effect1.uses = (effect1.uses + 1);
        effect1.flag = 1;
      }
    }
}

projects.push(effect1);
