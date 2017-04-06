function writeTweet()
{
  intro = ["If Star Wars taught me anyting it'", "Following the words of a wise man",
   "Great power begins with", "Warren Buffet once said",];
  randIndex = randomUpTo(intro.length);
  sentence = intro[randIndex];

   body = ["Every great story begins with", "Accreditted success comes from",
 "Disney wouldn't be what it is without", "I never leave my house without my",
 "Courage is when you have"];
  randIndex = randomUpTo(body.length);
  sentence = sentence + body[randIndex];

   ending = ["Rick and Morty seasons 1 and 2.", "Walter Whites pizza throwing ability.",
 "Lobsters to brush your teeth.","my plumbus."];
  randIndex = randomUpTo(ending.length);
  sentence = sentence + ending[randIndex];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
