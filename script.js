//import axios from 'axios';

let periodLenght=10;
let wordsArray=[];
let period='';
const url='https://flynn.boolean.careers/exercises/api/random/word';

for(let i=0;i<periodLenght;i++){
    axios.get(url, {
        params: {
        }
    })
        .then( (response) => {
            let words = response.data.response;
            console.log( words);
            wordsArray.push(words);
            console.log(wordsArray);
            period=period+" ".concat(wordsArray[i]);
            console.log(period);
         })
        .catch(function (error) {
            console.log(error);
        })
       
};




