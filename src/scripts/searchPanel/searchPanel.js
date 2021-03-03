export default () => {
  const input = document.getElementById("search-panel");
  const langElements = document.querySelector(".interface").children;
  const table = document.querySelector(".table");
  const preview = document.querySelector(".preview");
  const errBlock = document.querySelector(".search-err");
  const searchBtn = document.getElementById("search-btn");
  const resetBtn = document.getElementById("reset-search-btn");

  const seraching = (elem, value, lang) => {
    [...elem.children].forEach((item) => item.classList.remove("block-off"));
    if (!value) {
      [...elem.children].forEach(
        (item, i) => (item.style.animationDelay = i / 10 + "s")
      );
      let newArr = [...elem.children];
      [...elem.children].forEach((item) => item.remove());
      elem.append(...newArr);
      return;
    }
    let sec = 0;
    [...elem.children].forEach((item) => {
      try {
        let text = "name" + lang;
        let altItem = (altItem = item.dataset[text]
          .split(" ")
          .reverse()
          .join(" "));
        if (
          item.dataset["name" + lang]
            .toUpperCase()
            .indexOf(value.toUpperCase()) === -1 &&
          altItem.toUpperCase().indexOf(value.toUpperCase()) === -1
        ) {
          item.classList.add("block-off");
        } else {
          item.style.animationDelay = sec / 10 + "s";
          sec += 1;
        }
      } catch (e) {}
    });
    let newArr = [...elem.children];
    [...elem.children].forEach((item) => item.remove());
    elem.append(...newArr);
  };

  const logicToDo = () => {
    const value = input.value;
    const lang = [...langElements].find((item) =>
      item.classList.contains("btn-active")
    ).dataset.lang;
    errBlock.classList.add("block-off");
    seraching(table, value, lang);
    seraching(preview, value, lang);
    const empty = [...table.children].findIndex(
      (item) =>
        !item.classList.contains("block-off") &&
        !item.classList.contains("block-off-all")
    );
    window.location.hash = "+";
    if (empty === -1) {
      errBlock.classList.remove("block-off");
    }
  };

  const resetSetting = () => {
    input.value = null;
    window.location.hash = "+";
    errBlock.classList.add("block-off");
    [...table.children].forEach((item, i) => {
      item.classList.remove("block-off");
      item.style.animationDelay = i / 10 + "s";
    });
    [...preview.children].forEach((item, i) => {
      item.classList.remove("block-off");
      item.style.animationDelay = i / 10 + "s";
    });
  };

  input.addEventListener("change", logicToDo);

  searchBtn.addEventListener("click", logicToDo);

  resetBtn.addEventListener("click", resetSetting);
};
