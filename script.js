/* Задание на урок:

1) Создать переменную numberOfFilms 
и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

 ' use strict';

// let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "2"),
//     a = prompt('Один из последних просмотренных фильмов' ),
//     a1 = prompt('На сколько оцените его?'),
//     b = prompt('Один из последних просмотренных фильмов'), 
//     b2 = prompt('На сколько оцените его?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// personalMovieDB.movies[a] = a1;
// personalMovieDB.movies[b] = b2;

// console.log(personalMovieDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, 
и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", 
если от 10 до 30 - "Вы классический зритель",
а если больше - "Вы киноман". 
А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 3; i++) {
//     if (i == 2) {
//         // break;
//         // continue;     Skip step if (i=6) '4 5  7'
//     }
//     do something
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);



let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "2");





const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


// for (let i=0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', '' ),
//           a1 = prompt('На сколько оцените его?', ''); 

//     if (a != null && a1 != null && a != '' && 
//     a1 != '' && a.length < 50 && a1.length < 2) {
//         personalMovieDB.movies[a] = a1;
//         console.log("OK");
//     }else {
//         console.log('error');
//         i--;
//     }
// } 

for (let i=0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', '' ),
          a1 = prompt('На сколько оцените его?', ''); 

    if (a && a1 && a.length < 50 && a1.length < 2) {
        personalMovieDB.movies[a] = a1;
        console.log("OK");
    }else {
        console.log('error');
        i--;
    }
} 

// const a = prompt('Один из последних просмотренных фильмов', '' ),
//       a1 = prompt('На сколько оцените его?', ''); 
// let i = 0;
// while (a != null && a1 != null && a != '' && 
//       a1 != '' && a.length < 50 && a1.length < 2 && i < 2){
//         personalMovieDB.movies[a] = a1;
//         console.log("OK");
//         i++;
//       } if (a == null && a1 == null && a == '' && 
//       a1 == '' && a.length > 50 && a1.length > 2) {
//         i--;
//       }

//       const a = prompt('Один из последних просмотренных фильмов', '' ),
//       a1 = prompt('На сколько оцените его?', ''); 
// let i = 0;
//  do {
//     personalMovieDB.movies[a] = a1;
//     console.log("OK");
//     i++;
// } while (a != null && a1 != null && a != '' && 
//       a1 != '' && a.length < 50 && a1.length < 2 && i < 2);
      

if (personalMovieDB.count <= 10) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 ) {
    console.log ("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log ("Вы киноман");
} else {
    console.log ("Произошла ошибка");
}

console.log(personalMovieDB);