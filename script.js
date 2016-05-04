$(document).ready(function () {

  //array to store color variables, followed by another variable to store the result of randomly generating one of the colors from the array
  var directions = ['red', 'orange', 'blue', 'green'];
  var randomizer = directions[Math.floor(Math.random() * directions.length)];

  //function to create a new h1 element stating the randomized color variable
  function randomColor() {
    $('h1').after('<p class = randomizer>' + randomizer + '</p>');
  }

  randomColor();

  //generates 4 colored box divs
  $('.result').after('<div class="red"></div>');

  $('.result').after('<div class="orange"></div>');

  $('.result').after('<div class="blue"></div>');

  $('.result').after('<div class="green"></div>');

  //click event functions --> notifies the user if the color they clicked on is correct, and, if so, generates a new random color to pick
  $('.red').on('click', function () {
    var red = 'red';
    if (red == randomizer) {
      $('.result').text('Awesome!');
      randomizer = directions[Math.floor(Math.random() * directions.length)];
      $('.randomizer').text(randomizer);
    } else {
      $('.result').text('Try again.');
    }

  });

  $('.orange').on('click', function () {
    var orange = 'orange';
    if (orange == randomizer) {
      $('.result').text('Awesome!');
      randomizer = directions[Math.floor(Math.random() * directions.length)];
      $('.randomizer').text(randomizer);
    } else {
      $('.result').text('Try again.');
    }

  });

  $('.blue').on('click', function () {
    var blue = 'blue';
    if (blue == randomizer) {
      $('.result').text('Awesome!');
      randomizer = directions[Math.floor(Math.random() * directions.length)];
      $('.randomizer').text(randomizer);
    } else {
      $('.result').text('Try again.');
    }

  });

  $('.green').on('click', function () {
    var green = 'green';
    if (green == randomizer) {
      $('.result').text('Awesome!');
      randomizer = directions[Math.floor(Math.random() * directions.length)];
      $('.randomizer').text(randomizer);
    } else {
      $('.result').text('Try again.');
    }

  });

});
