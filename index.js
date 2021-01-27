"use strict";
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)

function sumFun(n) {
  let resultN = 0;
  for (let i = 1; i <= n; ++i) {
    resultN += i;
  }
  return resultN;
}
const f = 5;
console.log(sumFun(f));


// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.

const student = {
  name: "Вася",
  surname: "Иванов",
  isMale: true,
  email: "vanyaI@mail.com",
  phoneNum: "+380675741812",
};

// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
const university = {
  nameUni: "Национальный политехнический университет",
  faculty: "Экономический факультет",
  chair: "Кафедра Экономической кибернетики",
};

// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента

student.getUniInfo = university;

// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

console.log(student);

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел

const array = new Array(25);
const newarr = array.fill().map(() => (Math.ceil(Math.random() * 100)));
console.log(newarr);

// 3.2 Вывести элементы с четными индексами

const evenArrInd = newarr.filter((value, index) => index % 2 === 0);
console.log(evenArrInd);

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

const evenArrVal = newarr.filter((value, index) => value % 2 === 0);
console.log(evenArrVal);

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)

const nullArr = [2, 4, 5, 0, 2, 0, 35, 0, 13, 0];
const nullIndex = [];
for (let i = 0; i <= nullArr.length; ++i) {
  if (nullArr[i] === 0) { nullIndex.push(i); }
};
console.log(nullIndex);

// 3.5 Подсчитать количество нулевых элементов

const nullVal = nullArr.filter((value) => value === 0);
console.log(nullVal.length);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(author, title, yearOfPub, publishHouse) {
    this._author = author;
    this._title = title;
    this._yearOfPub = yearOfPub;
    this._publisHouse = publishHouse;
  }
}

class Ebook extends Book {
  constructor(author, title, yearOfPub, publishHouse, publishFormat, eNumber) {
    super(author, title, yearOfPub, publishHouse);
    this._publishFormat = publishFormat;
    this.eNumber = eNumber;
  }
}
// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function printNumbers2(n) {
  new Array(n).fill(0).map((e, i) => e = i).map((e) => console.log(compare(e)));
  function compare(e) {
    if ((e % 3 === 0) && (e % 5 === 0)) {
      return ('fizzbuzz');
    } else if (e % 5 === 0) {
      return ('buzz');
    } else if (e % 3 === 0) {
      return ('fizz');
    } else {
      return e;
    }
  }
}