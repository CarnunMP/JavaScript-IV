// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase=catchPhrase;
    }

    demo(subjectString) {
        console.log(`Today we are learning about ${subjectString}.`);
    }

    grade(studentObject, subjectString) {
        console.log(`${studentObject.name} receives a perfect score on ${subjectString}`);
    }
}