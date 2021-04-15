
/*

Day 003 

var userName = prompt (' What is your name?');
  alert ('Welcome to my page '+ userName );


// ANOTHER ALERT
var Age = prompt ('How old are you? ' + userName);

if ( Age >= 18 )
{
  alert ('Welcome to my page');
}

else 
{
alert ("Sorry, but you can't reach this page")
}




//document.write('<img src="" >' );


var urTime = prompt ('What time is it now');

if ( urTime >= 18 )
{
  alert ('Good Evening ');
  document.write('<img src="https://www.wishesmsg.com/wp-content/uploads/Good-Evening-Message-1280x720.jpg" >' );

}

else if ( urTime >= 12 )
{
  alert ('Good Afternoon ');
  document.write('<img src="https://thumbs.dreamstime.com/b/close-up-message-good-afternoon-handwritten-whiteboard-good-afternoon-168764032.jpg" >' );
}

else if ( urTime >= 0 )
{
  alert ('Good Morning ');
  document.write('<img src="https://i.ytimg.com/vi/JsuqnzqZimQ/maxresdefault.jpg" >' );
}

*/



//Day004

var userChoose;

var charName = prompt('Hello, Please Enter The name of your best char in LCDP Series');

while (charName !== 'Berlin' && charName !== 'Rio' && charName !== 'Tokyo' && charName !== 'Nairobi' && charName !== 'Denver') {
  alert('Wrong Input, Please choose one of those names Berlin, Rio, Tokyo, Nairobi, or Denver :)    ');
  var charName = prompt('Hello, Please Enter The name of your best char in LCDP Series AGAIN.')

}


if (charName == 'Berlin') {
  userChoose = '<img src="https://www.mobtada.com/resize?src=uploads/images/2020/03/15840293210.jpg&w=750&h=450&zc=0&q=70">';
  //document.write(userChoose);
}

if (charName == 'Tokyo') {
  userChoose = '<img src="https://i.redd.it/yiyltjqtmhs41.jpg">';
  //document.write(userChoose);
}

else if (charName == 'Nairobi') {
  userChoose = '<img src="https://i.ytimg.com/vi/5pocgUmvAtA/maxresdefault.jpg" >';

  //document.write(userChoose);
}

else if (charName == 'Denver') {
  userChoose = '<img src="https://i.pinimg.com/originals/6c/9e/88/6c9e88c147469ea86d1f7e555a350a16.jpg" >';

  //document.write(userChoose);
}

else if (charName == 'Rio') {
  userChoose = '<img src="https://static.displate.com/280x392/displate/2020-03-25/2605295eb509695c5164e3e778d13e40_200feb90004fd8fd8b98f383c1e9871e.jpg" >';
  //document.write(userChoose);
}





var numOfImages = prompt('Please enter the number of times you want to repeat the image of (' + charName + ')');

for (var i = 0; i < numOfImages; i++) {
  document.write(userChoose);
}

