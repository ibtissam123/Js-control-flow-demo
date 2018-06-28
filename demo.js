let userName = '' ;
userName ? console.log('Hello${userName}' ) : console.log('Hello!');
let userQuestion ='';
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall ='';
switch (randomNumber)
{
case 0:
eightBall = 'My sources say no';
break;
case 1:
eightBall = 'Do not count on it';
break;

case 2:
eightBall = 'Reply hazy try again';
break;
case 3:
eightBall = 'It is decidedly so';
break;
case 4:
eightBall = 'Outlook not so good';
break;
case 5:
eightBall = 'Signs point to yes';
break;
case 6:
eightBall = 'Cannot predict now';
break;
case 0:
eightBall = 'It is certain';
break;

}
console.log(`The eight ball answered: ${eightBall}`);
