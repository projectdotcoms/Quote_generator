let a =1;
const button = document.querySelector('.btn');
const quote = document.querySelector('.quote1');
const writer = document.querySelector('.writer');
function tap(){
 if(a==1){
    quote.innerText = "Money and success don’t change people; they merely amplify what is already there";
    writer.innerText ="Vikash1";
    a++;
 }
 else if(a==2){
    quote.innerText = "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.";
    writer.innerText ="Vikash2";
    a++;
 }
 else if(a==3){
    quote.innerText = "The big lesson in life, baby, is never be scared of anyone or anythinghbjhbjhbhbjhbjhbjhbjhbjbjbjhhbhjbj.";
    writer.innerText ="Vikash3";
    a++;
 }
 else if(a==4){
    quote.innerText = "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.";
    writer.innerText ="Vikash4";
    a=0;
 }
 else{
    quote.innerText = "Many of life’s failures are people who did not realize how close they were to success when they gave up";
    writer.innerText ="Vikash5";
    a=1;
 }
}
button.addEventListener('click',tap);