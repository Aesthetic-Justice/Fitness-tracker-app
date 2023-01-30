import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";

const projectCardData = [
  {
    imgsrc: pro1,
    title: "Ecommerce Backend",
    text: "This is a simple backend for an ecommerce site using Node.js, MySQL, and Sequelize to perform CRUD operations on the database using an Express server and its associated routes.",
    view: "https://github.com/bannywalia/ecommerceBackend",
    source: "https://github.com/bannywalia/ecommerceBackend",
  },
  {
    imgsrc: pro2,
    title: "Employee Tracker",
    text: "A complex SQL Database which stores employee, manager, and department/role information. allows you to add or remove employees. An employeemanagement system for workplaces.",
    view: "https://github.com/bannywalia/employeeTracker",
    source: "https://github.com/bannywalia/employeeTracker",
  },
  {
    imgsrc: pro3,
    title: "Weather Dashboard",
    text: "A simple web application that allows users to search for a city to get the current weather and 5 day forecast. Cities that users previously looked up will be saved in their local storage.",
    view: "https://bannywalia.github.io/weatherDashboard/",
    source: "https://github.com/bannywalia/weatherDashboard",
  },
];

export default projectCardData;
