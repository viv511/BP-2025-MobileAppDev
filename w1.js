const printStuff = () => {
  console.log("woah");
};

const printThing = (thing) => {
  console.log(thing);
};

const jeremy = {
  name: "Jeremy",
  aura: 10000000,
};

printStuff();
printThing(jeremy.aura);

const a = 1;
const b = 2;
console.log(`a * b = ${a * b}`);

class robot {
  constructor(n, s) {
    this.name = n;
    this.skill = s;
  }

  getSkill() {
    return this.skill;
  };

  getName = () => {
    console.log("Name: " + this.name + " Skill: " + this.skill); 
  };
}

const r = new robot("Vexington", 10000);
r.getName();

let nums = [3, 1, 4, 13, 7, 9, 2, 6, 5, 32, 10];
for (const num of nums.filter(num => num > 5)) {
  setTimeout(() => console.log(num), num);
}
