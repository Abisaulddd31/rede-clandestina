var Quotes = [
  "Its groundbreaking!", 
  "Undfeated!", 
  "Woo, tigsource!", 
  "Bees, bees, bees, bees!", 
  "Hobo humping slobo babe!", 
  "Minecraft!", 
  "Hotter than the sun!", 
  "Casual gaming!",
 "Dungeon!",
 "Also try terraria!",
 "Indie!",
 "Best in Class!",
 "Don't bother with the clones!",
 "Ryan also has amazing hair!",
 "Joe is neat!",
 "Indev!"
];

function displayQuote(){

  var num = Math.floor(Math.random() * 16);

  document.getElementById("quote").innerHTML = Quotes[num];

}

