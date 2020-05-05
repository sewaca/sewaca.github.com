var quotes = [
  ['“All the world is made of faith, and trust, and pixie dust”', 'Pyter PEN'],
  ['“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”', 'Jon Doe'],
  ['“To love is not to look at one another, but to look together in the same direction.”', 'Antuan-Excent Exuperi'],
  ['“For each element must be itterator”', 'Web Developer Seva']
];
var num_of_quotes = quotes.length;
var i = Math.floor(num_of_quotes / 2);
function setup(){
   load_progress_of_event();
   render_quote();
   render_links();
}
function render_quote(){
  document.getElementById('quote').innerHTML = quotes[i][0];
  document.getElementById('author').innerHTML = quotes[i][1];
}
function turn_quote_right(){
  if(i == num_of_quotes - 1){
    i = 0;
  }
  else i++;
  render_quote();
}
function turn_quote_left(){
  if(i == 0){
    i = num_of_quotes - 1;
  }
  else i--;
  render_quote();
}
