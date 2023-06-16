const R = require("ramda");
const declarativ = require("declarativ");

const { div, h1, table, thead, tbody, tr, td, th } = declarativ;

const headCell = (text) => th(text).attr("class", "pa2 tl");

const header = () => thead(headCell("Meal"), headCell("Calories"));

const footer = (total) => tr(
    th('Total').attr("class", "pa2 tr"),
    th(total.toString()).attr("class", "pa2 tr"),
).attr("class", "bt b");

const mealComponent = (m) => {
    return tr(
        td(m.name).attr("class", "pa2"),
        td(m.calories.toString()).attr("class", "pa2 tr"),
    ).attr("class", "stripe-dark");
}

const total = R.compose(R.sum, R.map((m) => m.calories));

const body = (meals) => {
    return tbody(
        meals.map(mealComponent),
        footer(
            total(meals)
        ),
    );
}

const app = (meals) => div(
    h1("Calories Counter").attr("class", "tc"),
    table([
        header(),
        body(meals),
    ]).attr(
        "class",
        "mw7 center w-100 collapse ba b--light-gray"
    )
).attr('class', 'sans-serif bg-white pa3');

module.exports = { app };


