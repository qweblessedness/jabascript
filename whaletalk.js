let input='turpentine and turtles'
const vowels=['a','e','i','o','u'];
let resultArray=[];
for(let i = 0 ;i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i]===vowels[j]){
      resultArray.push(input[i]);
      if(input[i]==='e'&& vowels[j]==='e'){
        resultArray.push(input[i]);
      }
      else if(input[i]==='u'&& vowels[j]==='u'){
        resultArray.push(input[i]);
      }
    }
  }
}
let resultString=resultArray.join('').toUpperCase();
console.log(resultString);
