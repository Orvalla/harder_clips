var effects = [];
var activeEffects = [];

var effect1 = {
    id: "prestigeEffect1",
    title: "Simulation Deficiency",
    pricetag: "",
    description: "test SIM mod",
    trigger: function(){return project201.flag == 1},
    uses: 0,
    cost: function(){return operations>=1},
    flag: 0,
    effect: function(){
      if(true){
        //adjust flags
        effect1.uses = (effect1.uses + 1);
        effect1.flag = 1;

        //enact changes
        //var change = effect1.uses*variable
        displayMessage("Test effect 1");

        //remove element
        var element = document.getElementById("prestigeEffect1");
        element.parentNode.removeChild(element);
        var index = activeEffects.indexOf(effect1);
        activeEffects.splice(index, 1);

      }
    }
}

effects.push(effect1);
