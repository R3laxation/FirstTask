// // let randomPartsOfBody = ["нос", "рот", "член", "рука", "нога"];
// // let randomPartOfBody =
// //   randomPartsOfBody[Math.floor(Math.random() * randomPartsOfBody.length)];
// // let randomAdjectives = ["страшнее", "уродливее", "вонючее"];
// // let randomAdjective =
// //   randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// // let randomPartsOfAnimal = ["хобот", "хвост", "жало"];
// // let randomParOfAnimal =
// //   randomPartsOfAnimal[Math.floor(Math.random() * randomPartsOfAnimal.length)];
// // let randomAnimals = ["слона", "бегемота", "пчелы"];
// // let randomAnimal =
// //   randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// // let randomInsult =
// //   "У тебя " +
// //   randomPartOfBody +
// //   " ещё более " +
// //   randomAdjective +
// //   " чем " +
// //   randomParOfAnimal +
// //   " у " +
// //   randomAnimal;

// // let randomInsult2 = [
// //   "У тебя",
// //   randomPartOfBody,
// //   "ещё более",
// //   randomAdjective,
// //   "чем",
// //   randomParOfAnimal,
// //   "у",
// //   randomAnimal,
// // ].join(" ");

// // randomInsult2;

// // let massive = [3, 2, 1];
// // let massiveString = [
// //   massive[0],
// //   "больше",
// //   "чем",
// //   massive[1],
// //   "больше",
// //   "чем",
// //   massive[2],
// // ].join(" ");

// // let scores = {
// //   Ruslan: 5,
// //   Kapar: 3,
// //   Kolya: 2,
// // };

// // scores.Ruslan += 3;

// // scores;

// // let name = "Kolyan";
// // console.log("Hi " + name);
// // if (name.length > 6) {
// //   console.log("Your name is so long");
// // } else {
// //   console.log("So short name");
// // }

// // УСЛОВИЯ

// // let Konstantin = true;
// // let Victor = true;
// // if (Konstantin) {
// //   console.log("Шикарное имя");
// // } else if (Victor) {
// //   console.log("Ну и отстой");
// // }

// // let name = "Konstantin";
// // if (name === "Konstantin") {
// //   console.log("Hello!");
// // } else if (name === "Nikolay") {
// //   console.log("Hello daddy!");
// // } else if (name === "Nazygul") {
// //   console.log("Hello mum!");
// // } else {
// //   console.log("GoodBye, stranger!");
// // }

// // ЦИКЛЫ

// // let sheepCounted = 0;
// // while (sheepCounted < 100) {
// //   console.log("Посчитано овец " + sheepCounted + "!");
// //   sheepCounted++;
// // }
// // console.log("Xpppppp");

// // for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
// //   console.log("Посчитано овец " + sheepCounted + "!");
// // }
// // console.log("Xpppppp");

// // let timesToSayHello = 3;
// // for (let i = 0; i < timesToSayHello; i++) {
// //   console.log("Hello!");
// // }

// // For массивы, строки
// // let animals = ["Elephant", "Lion", "Tiger", "Dog", "Bear"];
// // for (let i = 0; i < animals.length; i++) {
// //   console.log("There is a " + animals[i] + ".");
// // }

// // for (let x = 3; x < 10000; x = x * 3) {
// //   console.log(x);
// // }

// // let x = 3;
// // while (x < 10000) {
// //   console.log(x);
// //   x = x * 3;
// // }
// var abc = "abcdefghijklmnopqrstuvwxyz";
// var rs = "";
// while (rs.length < 6) {
//   rs += abc[Math.floor(Math.random() * abc.length)];
// }
// console.log(rs);

let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  a2 = prompt("Во сколько обойдется?", ""),
  a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(app.budget / 30);
