import "./style.css";
import { dropDown } from "./js-modules/createDropDown.js";
import { carousel } from "./js-modules/carousel.js";

const log = console.log;

const dropDownButton = document.querySelector(".drop-down .button");
const dropDownMenu = document.querySelector(".drop-down .menu");

//adds event listener
dropDown(dropDownButton, dropDownMenu);

const frame = document.querySelector(".frame");
const carouselItems = document.querySelector(".carousel-items");

carousel(frame, carouselItems);