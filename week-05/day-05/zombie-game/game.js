var inq = require("inquirer");

var hero = {
  health: 100,
  agility: 40
};

weapons = {
  bearHands : {
   //number of zombies affected
   reach: 1,
   //Range of possible damage
   attack: [5,5],
   //Chance of taking damge back (%)
   risk: 95,
   //chance of landing damage (%)
   reliability: 90,
   //"health" of gun
   uses: 1000000000000000
  },

  machete : {
   //number of zombies affected
   reach: 1,
   //Range of possible damage
   attack: [40,60],
   //Chance of taking damge back (%)
   risk: 80,
   //chance of landing damage (%)
   reliability: 90,
   //"health" of gun
   uses: 5
  },

  shotgun : {
   //number of zombies affected
   reach: 2,
   //Range of possible damage
   attack: [30,50],
   //Chance of taking damge back (%)
   risk: 65,
   reliability: 80,
   //"health" of gun
   uses: 5
  },

  pistol : {
   //number of zombies affected
   reach: 2,
   //Range of possible damage
   attack: [25,40],
   //Chance of taking damge back (%)
   risk: 50,
   reliability: 75,
   //"health" of gun
   uses: 5
  },

  machineGun : {
   //number of zombies affected
   reach: 3,
   //Range of possible damage
   attack: [15,30],
   //Chance of taking damge back (%)
   risk: 30,
   reliability: 65,
   //"health" of gun
   uses: 5
  },

  sniper : {
   //number of zombies affected
   reach: 1,
   //Range of possible damage
   attack: [40,60],
   //Chance of taking damge back (%)
   risk: 50,
   reliability: 10,
   //"health" of gun
   uses: 5
  },

  rpg : {
   //number of zombies affected
   reach: 4,
   //Range of possible damage
   attack: [40,60],
   //Chance of taking damge back (%)
   risk: 95,
   reliability: 40,
   //"health" of gun
   uses: 5
  }
};

zombies = {
  zombie1: {
   health: 100,
   attack: [0, 5],
   //Chance of dodging (%)
   agility: 15
  },

  zombie2: {
   health: 90,
   attack: [1, 6],
   //Chance of dodging (%)
   agility: 18
  },

  zombie3: {
   health: 85,
   attack: [2, 4],
   //Chance of dodging (%)
   agility: 20
  },

  zombie4: {
   health: 80,
   attack: [2, 5],
   //Chance of dodging (%)
   agility: 22
  },

  zombie5: {
   health: 60,
   attack: [7, 10],
   //Chance of dodging (%)
   agility: 10
  }
};


//------- Start Game Logic --------//

//initialize game
  //reset variables
  //run round function
//start round function
  // ask user to select weapon
  //loop zombies and apply damages/calculations to each

function initialize(){
  hero.health = 100;
  zombie1.health = 100;
  zombie2.health = 90;
  zombie3.health = 85;
  zombie4.health = 80;
  zombie5.health = 60;

  gameRound();
}

function randNum(min, max){
  return Math.floor((Math.random() * (max - min) + 1)) + min;
}

function selectZombies(num) {

}

function fightZombies(weapon) {
  var weaponAttack = weapons[weapon].attack;
  var weaponReach = weapons[weapon].reach;

  weaponAttack = randNum(weaponAttack[0], weaponAttack[1]);

  selectedZombies = selectZombies(weaponReach);

}

function gameRound() {
  inq.prompt([
    {
      type: "list",
      message: "Select Your Weapon!",
      choices: ["pistol", "rpg"],
      name: "weaponChoice"
    }
  ]).then(function(res){
    var weapon = res.weaponChoice;
    fightZombies(weapon);
  });
}






initialize();
