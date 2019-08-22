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

    changeGrade(studentObject) { // Stretch
        let randomChange;
        if (Math.random() > 0.5) {
            randomChange = Math.round(Math.random() * 100);
        } else {
            randomChange = -Math.round(Math.random() * 100);
        }

        if (studentObject.grade + randomChange <= 0) {
            studentObject.grade = 0;
        } else if (studentObject.grade + randomChange >= 100) {
            studentObject.grade = 100;
        } else {
            studentObject.grade += randomChange;
        }
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
        this.grade = Math.round(Math.random() * 100); // Stretch
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

    graduate() { // Stretch
        if (this.grade > 70) {
            console.log(`${this.name} has graduated with a grade of ${this.grade}/100!`);
        } else {
            console.log(`${this.name} didn't pass with a grade of ${this.grade}/100.`);
            Instructor.prototype.changeGrade(this);
            console.log(`${this.name} took the exam again. New grade: ${this.grade}/100`);
            this.graduate(); // A little bit of recursion, why not? :P
        }
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

// Stretch:
for (let i = 0; i < 3; i++) { // Testing Instructor.prorotype.changeGrade(studentObject)
    console.log(`Carnun's grade before David changes it: ${carnun.grade}.`);
    david.changeGrade(carnun);
    console.log(`Carnun's grade after David changes it, and before Popper changes it: ${carnun.grade}.`);
    popper.changeGrade(carnun);
    console.log(`Carnun's grade after Popper changes it: ${carnun.grade}.`)
}

console.log("...")
carnun.grade = 60;
carnun.graduate();