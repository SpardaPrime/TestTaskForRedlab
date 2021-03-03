import viewControl from "./scripts/viewControl";
import injectData from "./scripts/injectData";
import sortControl from "./scripts/sortControl";
import langControl from "./scripts/langControl";
import searchPanel from "./scripts/searchPanel";
import addFavorite from "./scripts/addFavorite";
import autoPlay from "./scripts/autoVideoPlay";
import urlListener from "./scripts/urlListener";
import "./main.scss";

const start = async () => {
  const data = await fetch("https://data-base-red.herokuapp.com/data");
  return await data.json();
};

document.addEventListener("DOMContentLoaded", () => {
  viewControl();
  langControl();
  start().then((res) => {
    injectData(res);
    sortControl();
    searchPanel();
    addFavorite();
    urlListener();
    autoPlay();
  });
});
