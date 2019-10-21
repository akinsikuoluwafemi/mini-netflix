// // select the input;
// let searchInput = document.querySelector(`.search`);
// let searchBtn = document.querySelector(`.btn`);



// class Movies {
//     constructor(image, title, yearOfProduction, Rated, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards){
//         this.image = image;
//         this.title = title;
//         this.yearOfProduction = yearOfProduction;
//         this.Rated = Rated;
//         this.Runtime = Runtime;
//         this.Genre = Genre;
//         this.Director = Director;
//         this.Writer = Writer;
//         this.Actors = Actors;
//         this.Plot = Plot;
//         this.Language = Language;
//         this.Country = Country;
//         this.Awards = Awards;

//     }
   
// }



// let m1 = new Movies('./images/Alubarika.jpeg', 'Alubarika', 2010, 16, '180min', 'Comedy', 'Papi-chulo', 'Steven-Segal', ['Sola', 'Bisi', 'Kehinde', 'Tony', 'Stallon', 'Tope', 'Nickolas'], 'ALUBARIKA is the conflicting story of fate involving a young politician Oyelade, a role played by (Femi Adebayo) who determined to succeed in his political pursuit.....','English', 'Nigeria', 2);
// let m2 = new Movies('./images/gemini.jpeg', 'Gemini Man', 2019, 15, '120min', 'Action', 'Will-Smith', 'Pablo-Andersen', ['Will-Smith', 'Jaden-Smith', 'Bow wow', 'Cosby'], 'An over-the-hill hitman faces off against a younger clone of himself', 'English', 'USA', 7);
// let m3 = new Movies('./images/people.jpeg', 'My People, My Country', 2015, '154min', 'Drama', 'Laravel-Susso', 'Femuyi', ['Charles-Slow', 'Octopus Pual', 'Ejike Asiegbu', 'Mr Ibu'], 'An anthology film consist of 7 short stories directed by several different directors, which are based on 7 moments since the founding of People\'s Republic of China.', 'Mandarin','China',1);

// let movieArr = [m1, m2, m3]; 

// // show movie titles
// function getAllTitle() {
//     for(let movie in movieArr){
//         console.log(movieArr[movie].title);
//     }
//  }

// // getAllTitle();  


  



// // search for movie
// function searchMovie(str) {
//     for(let movie in movieArr){
//     if(movieArr[movie].title.includes(str)){
//         console.log(movieArr[movie].title)
//     };
//  }
// }

// // searchMovie('Peo');
// // event listeners
// searchBtn.addEventListener('click', getAllTitle);









// Api key from mdb;

// fetch('https://api.themoviedb.org/3/search/movie?query=die%20hard&api_key=50a17f32107089ebeb0783b5fb1e947b').then(data => {
//     return data.json()
// }).then(response => console.log(response)); 



// const api = "&api_key=50a17f32107089ebeb0783b5fb1e947b";
// const endpoint = `https://api.themoviedb.org/3/search/movie?query=${search}${api}`;
// const poster = `https://image.tmdb.org/t/p/w600${poster_path}`;


// const endpoint = `https://api.themoviedb.org/3/search/movie?query=avatar&api_key=50a17f32107089ebeb0783b5fb1e947b`;


let slid = document.querySelector('.slid');
let noneText = document.querySelector('.none-text');
let slider = document.querySelector('slider');
let body = document.querySelector('body');

function hide(e) {
    slider.classList.toggle('hide');
}

body.addEventListener('click', hide);

body.addEventListener('click', function(){
    noneText.classList.toggle('show-text');
    slid.classList.toggle('slider');
    
});
 

    