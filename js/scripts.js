//BACK-END
function Entry(movie, year, score){
  this.movie = movie;
  this.year = year;
  this.score = score;
}


//UI
$(document).ready(function() {

  var movies = [];

  $('form').submit(function(event) {
    event.preventDefault();




    var movieTitle = $('#movie-input').val();
    var movieYear = $('#year-input').val();
    var tomatoScore = parseInt($('#tomato-input').val());

    var movieArray = new Entry(movieTitle, movieYear, tomatoScore);

    movies.push(movieArray);

    if((movieArray.year === "") || (movieArray.movie === "") || (movieArray.score === NaN)) {
      alert("Please Enter");
      return false;
    }
    console.log(movieArray);

    $("#table").append("<tr>" + "<td>" + movieTitle + "</td>"  + "<td>" + movieYear + "</td>" + "<td>" + tomatoScore + "</td>" + "</tr>");
      $(this).closest('form').find("input[type=input]").val("");

      $('#sendSort').show();
  });


  $('#sendSort').click(function(event) {
    event.preventDefault();
    var newSorted = movies.sort(function(a, b) {
      return b.score - a.score
    });
    $("#table").hide();
    $("#sorted").show();
    newSorted.forEach(function(item){
      $("#sorted").append("<tr>" + "<td>" + item.movie + "</td>"  + "<td>" + item.year + "</td>" + "<td>" + item.score + "</td>" + "</tr>");
      console.log(newSorted);

    })
    $("#sendSort").hide();
    movies = [];
  });


});
