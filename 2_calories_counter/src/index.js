import "tachyons";

const { app } = require("./app.js");

const meals = [
  {
    name: "Breakfast",
    calories: 400,
  },
  {
    name: "Lunch",
    calories: 600,
  },
  {
    name: "Dinner",
    calories: 200,
  },
];

let components = app(meals);

components.render("#content").then(() => {
  console.log("Elements rendered!");
});
