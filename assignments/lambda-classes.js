console.log("———");

// CODE here for your Lambda Classes
class PersonAlt { // Had to add 'Alt' so wouldn't clash with Person in the other file!
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

const fred = new PersonAlt('Fred', 37, 'Bedrock');
console.log(fred.speak());
// Working as expected!

class Instructor extends PersonAlt {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase=catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(studentObject, subject) {
        console.log(`${studentObject.name} receives a perfect score on ${subject}.`);
    }
}

const david = new Instructor("David", 66, "Oxford", "Quantum Computers", "Java", "Problems are soluble!");
david.demo("Bad Philosophy");
david.grade(fred, "Good Explanations");
console.log(david.speak());

class Student extends PersonAlt {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects() { // I prefer 'listSubjects' to 'listsSubjets'...
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

const carnun = new Student("Carnun", 22, "London", "Philosophy", "WebEU3", ["Epistemology", "Philosophy of Science", "Philosophy of Mind"]);
carnun.listSubjects();
carnun.PRAssignment("Artificial Creativity");
carnun.sprintChallenge("Getting to Writing, Finally");
console.log(carnun.speak());

class ProjectManager extends Instructor {
    constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugCode(studentObject, subject) {
        console.log(`${this.name} debugs ${studentObject.name}'s code on ${subject}`);
    }
}

const popper = new ProjectManager("Popper", 116, "The LSE", "Philosophy of Science", "javaScript", "I am not a beleif philosopher", "WebEU1", "david");
popper.standUp("#webEU3");
popper.debugCode(fred, "Classes and Inheritance");
popper.demo("Evolutionary Epistemology");
console.log(popper.speak());