//BACK-END
function Entry(movie, year, score){
  this.movie = movie;
  this.year = year;
  this.score = score;
}
var movies = [];

//UI
$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    var movieTitle = $('#movie-input').val();
    var movieYear = $('#year-input').val();
    var tomatoScore = parseInt($('#tomato-input').val());

    var movieArray = new Entry(movieTitle, movieYear, tomatoScore);

    movies.push(movieArray);

    $("#table").append("<tr>" + "<td>" + movieTitle + "</td>"  + "<td>" + movieYear + "</td>" + "<td>" + tomatoScore + "</td>" + "</tr>");
  });


  $('#sendSort').click(function(event) {
    event.preventDefault();

    var newSorted = movies.sort(function(a, b) {
      return b.score - a.score
    });


    newSorted.forEach(function(item){
      $("#sorted").append("<tr>" + "<td>" + item.movie + "</td>"  + "<td>" + item.year + "</td>" + "<td>" + item.score + "</td>" + "</tr>");
      console.log(newSorted);
    })

  });


});
