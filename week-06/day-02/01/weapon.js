// ========================= STEP 1 ============================
function Weapon(name, reach, attack, risk, reliability, uses){
  this.name = name;
  this.reach = reach;
  this.attack = attack;
  this.risk = risk;
  this.reliability = reliability;
  this.uses = uses;
  this.didDam = false;
  this.receivedDam = false;
  this.roundDamage = 0;
  this.used = function(){
    this.uses--;
  };
  this.calcDamage = function(min, max){
    var randNum = Math.random() * (max - min) + min;
    this.roundDamage = randNum;
  };
}


module.exports = Weapon;



//===========================================================
