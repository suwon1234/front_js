
// 옵셔널 채이닝
const movie={
  name : "오펜하이머",
  detail : {
    price : "50000",
    date : "20240920"
  }
}

const movie2={
  name : "마블",
  detail : {
    price : "100000"
  }
}

function printMoviePrice(movie){
  console.log(movie.detail)
}

printMoviePrice(movie)
printMoviePrice(movie2)

function printMovieDate(movie){
  return movie?.detail?.date;
}
console.log(printMovieDate(movie))
console.log(printMovieDate(movie2))


