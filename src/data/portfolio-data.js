import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reduxTodolist from "../assets/portfolio/redux-todolist.png";
import starwars from "../assets/portfolio/starwars.png";
import memoryGame from "../assets/portfolio/memory-game.png";
import foodDashboard from "../assets/portfolio/foodDashboard.png";
import socialDashboard from "../assets/portfolio/socialDashboard.png";

const portfolio_data = [
  {
    id: 1,
    title: "Weather Forcast App",
    imgSrc: reactWeather,
    url: "weather-forcast",
    demo: "https://maxjn-weather-forcast.pages.dev/",
    repo: "https://github.com/maxjn/weather-forcast",
    description: "Weather Forcast app using React and OpenWeather API.",
  },
  {
    id: 2,
    title: "Redux Todolist",
    imgSrc: reduxTodolist,
    url: "redux-todolist",
    demo: "https://maxjn-todolist-redux.pages.dev/",
    repo: "https://github.com/maxjn/todolist-redux",
    description:
      "Todo List app using React,Redux and ReactRouter. This project was bootstrapped using Vite",
  },
  {
    id: 3,
    title: "Starwars Info App",
    imgSrc: starwars,
    url: "starwars-info",
    demo: "https://maxjn-starwars.pages.dev/people",
    repo: "https://github.com/maxjn/starwars-react",
    description:
      "This is a simple practical application for practicing React Router and Ract-Query.",
  },
  {
    id: 4,
    title: "Memmory Game App",
    imgSrc: memoryGame,
    url: "memory-game",
    demo: "https://maxjn-memory-game.pages.dev/",
    repo: "https://github.com/maxjn/todolist-redux",
    description:
      "Memmory Game app using React.This project was bootstrapped using Vite",
  },

  {
    id: 5,
    title: "Food dashboard",
    imgSrc: foodDashboard,
    url: "food-dashboard",
    demo: "https://maxjn-fooddashboard.pages.dev/",
    repo: "https://github.com/maxjn/foodDashboard",
    description:
      "Features: Fully responsive, Mobile first ,Dashboard sticky menu,  Toggle menu, Cards with badge",
  },
  {
    id: 6,
    title: "Social Dashboard",
    imgSrc: socialDashboard,
    url: "social-dashboard",
    demo: "https://maxjn-dashboardtemplate.pages.dev/",
    repo: "https://github.com/maxjn/dashboardTemplate",
    description:
      "This is my solution to the Social media dashboard with theme switcher challenge on Frontend Mentor. ;)",
  },
];

module.exports = portfolio_data;
