/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// Code from yesterday, refactored:

/*
  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.stomach = [];
    }
    
    greet() {
        return `Hello! My name is ${this.name} and I am ${this.age} years old.`;
    }

    eat(edible) {
        this.stomach.push(edible);
    }

    poop() {
        this.stomach = [];
    }
}
  
// I did my testing in the console! :)

/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
*/  
class Car {
    constructor(model, name, make) {
        this.model = model;
        this.name = name;
        this.make = make;
    
        this.odometer = 0;
        this.isFunctional = true;
    }

    drive(distance) {
        if (!this.isFunctional) { return `I crashed at ${this.odometer} miles!` }
        this.odometer += distance;
    }

    crash() {
        this.isFunctional = false;
    }

    repair() {
        this.isFunctional = true;
    }
}

/*
TASK 3

- Build a Baby constructor that subclasses the Person built earlier.
- Babies of course inherit the ability to greet, which can be strange.
- Babies should have the ability to play, which persons don't.
- By playing, a string is returned with some text of your choosing.
*/
class Baby extends Person {
    constructor(name, age) {
        super(name, age);
    }

    play() {
        return `I'm better than you at this game, and I'm only ${this.age}...`
    }
}

/*
TASK 4

Use your imagination and come up with constructors that allow to build objects
With amazing and original capabilities. Build 3 small ones, or a very
complicated one with lots of state. Surprise us!
*/
class Enemy {
    constructor(id, positionXY, hitboxXY, hp, speed, strength) {
        this.id = id;
        this.positionXY = positionXY;
        this.hitboxXY = hitboxXY;
        this.hp = hp;
        this.speed = speed;
        this.strength = strength;

        this.type;
    }

    takeDamage(amount) {
        this.hp -= amount;
        this.isDead(); // This evaluation is just getting thrown away, at present... but you can see where it might come in handy!
    }

    isDead() {
        if (this.hp <= 0) {
            console.log(`Enemy #${this.id} is dead`);
            return true;
        } else {
            return false;
        }
    }
}


// function Slime(id, positionXY, hitboxXY = [10, 10], hp = 5, speed = 1, strength = 1, type = "basic") {
// Enemy.call(this, id, positionXY, hitboxXY, hp, speed, strength);

// this.type = type;
// }
// Slime.prototype = Object.create(Enemy.prototype);
// Slime.prototype.jump = function(unitDirectionXY) {
// this.positionXY[0] += (unitDirectionXY[0] * this.speed);
// this.positionXY[1] += (unitDirectionXY[1] * this.speed);

// if (this.type === "leaky") { 
//     this.hp -= 1;
// }
// }

// function BombBeetle(id, positionXY, hitboxXY, hp = 7, speed = 1, strength = 2, type = "basic", range = 25) {
// Enemy.call(this, id, positionXY, hitboxXY, hp, speed, strength);

// this.type = type;
// this.range = range;
// }
// BombBeetle.prototype = Object.create(Enemy.prototype);
// BombBeetle.prototype.spit = function(unitDirectionXY) {
// if (playerIsInRange(this.positionXY, playerPosition, this.range)) {
//     console.log(`Enemy ${this.id} has spit a projectile in the direction of [${unitDirectionXY}]!`);
// } else {
//     console.log(`Enemy ${this.id} is too far away from the player to spit!`);
// }
// }
// let playerPosition = [100, 100]; // Hardcoding for now.
// let playerIsInRange = function(mobPositionXY, playerPositionXY, range) {
// let xDiff = Math.abs(mobPositionXY[0] - playerPositionXY[0]);
// let yDiff = Math.abs(mobPositionXY[1] - playerPositionXY[1]);

// console.log(Math.sqrt( (xDiff * xDiff) + (yDiff * yDiff)));
// return Math.sqrt( (xDiff * xDiff) + (yDiff * yDiff) ) <= range;
// }


// Some tests for Task 4 (also used console):
// var slime1 = new Slime(1, [100, 100]); // Q: Any way around ordering these args like the parent orders them?
// console.log(slime1);

// var slime2 = new Slime(2, [120, 150], undefined, undefined, undefined, undefined, "leaky");
// console.log(slime2);

// var bombBeetle1 = new BombBeetle(3, [110, 110], [15, 10]);
// console.log(bombBeetle1);

// console.log("———")

/*

STRETCH TASK

Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(createdAt, name, dimensions) {
this.createdAt = createdAt;
this.name = name;
this.dimensions = dimensions;
}
GameObject.prototype.destroy = function() {
return `${this.name} was removed from the game.`;
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
function CharacterStats(createdAt, name, dimensions, healthPoints) {
GameObject.call(this, createdAt, name, dimensions);
this.healthPoints = healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
return `${this.name} took damage.`;
}

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
function Humanoid(gameObj) {
CharacterStats.call(this, gameObj.createdAt, gameObj.name, gameObj.dimensions, gameObj.healthPoints);
this.team = gameObj.team;
this.weapons = gameObj.weapons;
this.language = gameObj.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
return `${this.name} offers a greeting in ${this.language}.`;
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.