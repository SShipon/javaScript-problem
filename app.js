let names =['shipon', 'Jhankar', 'Mir hossian', 'kamal']
let index = -1
let name =names[index++];


setInterval(() => {
   
    name = names[index++];
    console.log(name, name.length);
    if (index == names.length) {
        index = 0;
    }
},1000)



let myName = ['shipon', 'jams', 'lemon', 'limes', 'tom clem']

let index1 = -1

let name1 = myName[index1++]

setInterval(() => {
    name1 = myName[index1++]
    console.log(name1, name1.length);
    if (index1 == myName.length) {
        index1 = 0;
    }
}, 1000)


const number = [1,2,3,7,9,6,]