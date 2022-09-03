let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

let enemyNames = ["Roborto", "Amy Android", "Robo Tumbler"];
let enemyHealth = 50;
let enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.lenght);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function (now with parameter for enemy's name)
let fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0){
    //Ask player if they'd like to fight or run
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");
      //if yes (true), leave fight 
      if (confirmSkip) {
        window.alert(playerName + "has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      } 
    }
    
    // remove enemy's health by subtracting the amount set in the playerAttack letiable
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

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' letiable.  
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

//fight each enemy-robot by looping over them and fighting them one at a time
for (let i = 0; i< enemyNames.lenght; i++) {
  // if player is still alive, keep fighting
  if (playerHealth >0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round" + (i+1));

    //pick new enemy to fight based on the index of the enemyNames array
    let pickedEnemyName = enemyNames[1];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check what's going on at the moment in the code
    //debugger;
    
    //pass the pickedEnemyName letiable's value into the fight functio, where it will assumed
    fight(pickedEnemyName);
  }
  //if player isn't alive, stop the game
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}