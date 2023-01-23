// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log("hellow world")
function getAllDirectors(moviesArray) {
    let directorMovies = moviesArray.map(eachElemnt => {
        return eachElemnt.director;
    });

    return directorMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let newArry = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama") && eachMovie.director === "Steven Spielberg"
        
    });
    return newArry.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
     let totalMovies = moviesArray.reduce((acc, elem) => {
        if (elem.score === undefined) {
            return acc;
        } else {return acc + elem.score}
     }, 0)

     return Number((totalMovies / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let newArry = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
        
    });

    if (newArry.length === 0) {
        return 0;
    }
    
    let totalDramaMovies = newArry.reduce((acc, elem) => {
        if (elem.score === undefined) {
            return acc;
        } else {return acc + elem.score}
     }, 0)

     return Number((totalDramaMovies / newArry.length).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let cloneMoviesArray = structuredClone(moviesArray)
    cloneMoviesArray.sort((elem2, elem1) => {
        if (elem2.year < elem1.year) {
            return -1;
        }else if (elem2.year > elem1.year){
            return 1;
        }else if (elem2.year === elem1.year) {
            if (elem2.title < elem1.title) {
                return -1;
            }else if (elem2.title > elem1.title) {
                return 1;
            }else return 0;
        }
    })
    return cloneMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneMoviesArray = structuredClone(moviesArray)
    cloneMoviesArray.sort((elem2, elem1) => {
        if (elem2.title < elem1.title) {
            return -1;
        }else if (elem2.title > elem1.title){
            return 1;
        }else return 0;
    })

    let titleMovies = cloneMoviesArray.map(eachElemnt => {
       return eachElemnt.title; 
    });
    
    return titleMovies.slice(0,20); 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
