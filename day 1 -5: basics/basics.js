// declaring a constant variable using const
const threeSome = 'me, ' + 'you ||' + ' your friend(s)'
const gangBang = '..14 insertions is quite a lot, Love'
console.log(threeSome, gangBang);
//→ me, you || your friend(s)
//→ ..14 insertions is quite a lot, Love

// reassigning a variable using const
// threeSome = gangBang
// console.log(threeSome);
//→ TypeError: Assignment to constant variable.

// declaring and reassigning a variable using let
let today = 'Tuesday'
console.log(`Today is ${today}`);
//→ Today is Tuesday
today = 'a good day'
console.log(`Today is also ${today}`);
//→ Today is also a good day

// using an array to declare multiple variables
const guys = ['somtuzy', 'moses']
console.log(guys);
//→ ['somtuzy', 'moses']

// accessing each variable using array indexing
console.log(guys[0]);
//→ somtuzy
console.log(guys[1]);
//→ moses

// reassigning the variables in an array
guys[0] = '$omtuzy Onyeka'
guys[1] = guys[1].toUpperCase()
guys[1] += ' Njoku'
console.log(guys);
//→ $omtuzy Onyeka, MOSES Njoku

// creating a new variable from outside the array
guys[2] = 'victor'
console.log(guys[2]);
//→ victor
console.log(guys);
//→ ['$omtuzy Onyeka', 'MOSES Njoku', 'victor']

// using an object to store multiple properties or details
const girls = {
    firstGirl: 'julie',
    secondGirl: 'princess',
    thirdGirl: 'adaobi'
}
console.log(girls);
//→ {firstGirl: 'julie', secondGirl: 'princess', thirdGirl: 'adaobi'}

// accessing each property of the object
console.log(girls.firstGirl);
//→ julie
console.log(girls.secondGirl);
//→ princess
console.log(girls.thirdGirl);
//→ adaobi

// reassigning the properties in an object
girls.thirdGirl = 'onyinyechi'
console.log(girls.thirdGirl);
//→ onyinyechi

// creating a new property 
girls.fourthGirl = 'jessie'
console.log(girls.fourthGirl);
//→ jessie
console.log(girls);
//→ {firstGirl: 'julie', secondGirl: 'princess', thirdGirl: 'onyinyechi', fourthGirl: 'jessie'}

// Looping through an array
guys.forEach((guy, i) => {
    if(guys.indexOf(guy) === 0){
        console.log(`${guy} is an alcohol and women loving guy`);
    } 
    if (guys.indexOf(guy) === 1){
        console.log(`${guy} is an anime loving guy`);
    }
    if (guys.indexOf(guy) === 2){
        console.log(`${guy} is a tech loving guy`);
    }
    
})
//→ $omtuzy Onyeka is an alcohol and women loving guy
//→ MOSES Njoku is an anime loving guy
//→ victor is a tech loving guy