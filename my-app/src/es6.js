// ====== const =========
const pi = 3.14

// wrong
pi = 4

// =======template string =========
const name = 1
const age = 12

const str = name + '' + age
console.log(str) // 112

const str1 = name + age
console.log(str1) //13

const str2 = `${name}${age}` // ES6新寫法, 保證是兩個string拼接
console.log(str2) //112

// ======= let ======
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i) //3
// var變數值出了{}還會繼續存在, functional scope

for (let j = 0; j < 3; j++) {
    console.log(j);
}
console.log(j); // not defined error
// let變數值離開{}便消失
// react中, 能用let就不要用var, 能用const就不要用let

// ========= arrow function ============
function sayHello(name) {
    console.log('*****', this)
    console.log(`hello, ${name}!`);
}
const sayHello1 = (name) => {
    console.log('=====',this)
    console.log(`hello, ${name}!`);
}

sayHello('foo')
sayHello1('bar')


// ======= destructuring ===========
const student = { school: 'UNSW', gender: 'F'}
const school = student.school;
const gender = student.gender;

const { school, gender } = student;
console.log(school, gender)

// student是一個object(物件), 帶有兩個property(屬性)

// ========== spread ============
const computerScienceStudent = {
    major: 'Computer Science',
    language: 'English',
    university: 'UNSW'
};
const mary = {
    ...computerScienceStudent,
    language: 'Chinese',
    age: 25
};
console.log(mary) // mary = { major: 'Computer Science', language: Chinese, age: 25}

// ========= class =============
class Student {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.university = 'UNSW';
    }
    greeting() {
        console.log(`Hello, I'm ${this.name} from ${this.university}`)
    }
}
const jane = new Student('Jane', 'F');
jane.greeting(); // Hello, I'm Jane from UNSW