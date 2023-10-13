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
            words = response.data.response;
            
           // console.log( words);
            wordsArray.push(words," ");
            console.log(wordsArray);
            period="".concat(...wordsArray);
            console.log("".concat(...wordsArray))
         })
        .catch(function (error) {
            console.log(error);
        })
        
};

 



