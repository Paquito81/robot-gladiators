var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Tumbler"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.lenght);
console.log(enemyNames[0]);
console.log(enemyName[3]);

//fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0){
    //Ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      //if yes (true), leave fight 
      if (confirmSkip) {
        window.alert(playerName + "has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      } 
    }
    // if player choses to fight, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT") { 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + " health remaining." 
    );

    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.  
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
      enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + "has died!");
      //leave while() loop if player is dead
      break;
    } else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
    }
  }  
};  




