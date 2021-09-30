var readline=require('readline-sync')
var chalk=require('chalk')
var userName=readline.question("what's your name?")
console.log(chalk.italic.blue("Hi "+userName+"!"+"\nwelcome to Fun Food Trivia quiz!!"))
console.log("choose the correct answer a/b/c")
var score=0;
var options=[{
a:"fruits",
b:"milk",
c:"yoghurt"
 },{
a:"because it's mostly milk",
b:"because it doesn't contain cocoa solids",
c:"because the colour will be bleached"
 },{
a:"I’m lovin’it",
b:"Have it your way",
c:"It’s the real thing"
 },{
a:"8",
b:"9",
c:"10"
 },{
a:"macchiato",
b:"lemonade",
c:"espresso"
 },{
a:"baking powder",
b:"yeast",
c:"buttermilk"
 },{
a:"pizza",
b:"cheese",
c:"french fries"
 },{
a:"saffron",
b:"vanilla",
c:"cardamom"
 }]
function quiz(question,options,answer){
 console.log(chalk.yellow(question))
console.log("a)"+options.a+"\n"+"b)"+options.b+"\n"+"c)"+options.c)
var ans=readline.question("Give ur answer:")
   
 if(ans===answer)
 {
   console.log(chalk.green("You are absolutely right!!"))
   score=score+1;
   console.log("Your current score is:"+score)
   console.log(chalk.cyan("---------------------------"))
  }
   else{
     console.log(chalk.red("Oops! You are wrong"))
     score=score-1
     console.log("Your current score is:"+score)
     console.log(chalk.bold.cyan("---------------------------"))
   }
 }
 var questions=[{
   question:" which of these was considered as the 'food of gods' in ancient India?",
   answer:"c"
 },{
   question:" why is white chocolate white?",
   answer:"b"
 },{
   question:" what is the advertising slogan for McDonald’s?",
   answer:"a"
 },{
   question:" how many segments are inside most oranges?",
   answer:"c"
 },{
   question:" which of the following is not a type of coffee?",
   answer:"a"
 },{
   question:" what ingredient makes bread rise?",
   answer:"b"
 },{
   question:" what is the most popular food in the world?",
   answer:"a"
 },{
   question:" What is the most expensive spice in the world by weight??",
   answer:"a"
 }]

for(var i=0;i<questions.length;i++)
{
  quiz(questions[i].question,options[i],questions[i].answer)
}
console.log(chalk.yellow("Your final score is:"+score))
var highScores=[{
  name: "Rajitha",
  score:"8"
},
{
  name:"kumaran",
  score:"7"
}]
console.log(chalk.magenta("check out the High Scores below"))
for(var i=0;i<highScores.length;i++){
if(score>highScores[i].score){
  console.log(chalk.blue("Hurray! You made it to the High Scores list"))
}
}
for(var i=0;i<highScores.length;i++){
if(score>highScores[i].score){
  highScores[i].score=score
  highScores[i].name=userName
  console.log(highScores[i].name+"\t"+"\t"+"\t"+highScores[i].score)
}
else
{
  console.log(highScores[i].name+"\t"+"\t"+"\t"+highScores[i].score)
}
}