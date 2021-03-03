export default () => {
  const fistSortOpt = Array.from(
    document.getElementById("sort_options_1").children
  );
  const secondSortOpt = Array.from(
    document.getElementById("sort_options_2").children
  );
  const table = document.querySelector(".table");
  const preview = document.querySelector(".preview");
  const langElems = document.querySelector(".interface").children;

  const sortedElements = () => {
    let fistParam = fistSortOpt.find((item) =>
      item.classList.contains("btn-active")
    ).name;
    let secondParam = secondSortOpt.find((item) =>
      item.classList.contains("btn-active")
    ).name;
    const lang = [...langElems].find((item) =>
      item.classList.contains("btn-active")
    ).dataset.lang;
    let newTable = null;
    let newPreview = null;
    if (secondParam === "grow_up") {
      if (fistParam === "id" || fistParam === "age") {
        newTable = [...table.children].sort(
          (a, b) => a.dataset[fistParam] - b.dataset[fistParam]
        );
        newPreview = [...preview.children].sort(
          (a, b) => a.dataset[fistParam] - b.dataset[fistParam]
        );
      } else {
        newTable = [...table.children].sort((a, b) =>
          a.dataset["name" + lang] > b.dataset["name" + lang] ? +1 : -1
        );
        newPreview = [...preview.children].sort((a, b) =>
          a.dataset["name" + lang] > b.dataset["name" + lang] ? +1 : -1
        );
      }
    } else {
      if (fistParam === "id" || fistParam === "age") {
        newTable = [...table.children].sort(
          (a, b) => b.dataset[fistParam] - a.dataset[fistParam]
        );
        newPreview = [...preview.children].sort(
          (a, b) => b.dataset[fistParam] - a.dataset[fistParam]
        );
      } else {
        newTable = [...table.children].sort((a, b) =>
          a.dataset["name" + lang] < b.dataset["name" + lang] ? +1 : -1
        );
        newPreview = [...preview.children].sort((a, b) =>
          a.dataset["name" + lang] < b.dataset["name" + lang] ? +1 : -1
        );
      }
    }
    [...table.children].forEach((item) => item.remove());
    [...preview.children].forEach((item) => item.remove());

    table.append(...newTable);
    preview.append(...newPreview);

    [...table.children]
      .filter(
        (item) =>
          !item.classList.contains("block-off") &&
          !item.classList.contains("block-off-all")
      )
      .forEach((item, i) => (item.style.animationDelay = i / 10 + "s"));
    [...preview.children]
      .filter(
        (item) =>
          !item.classList.contains("block-off") &&
          !item.classList.contains("block-off-all")
      )
      .forEach((item, i) => (item.style.animationDelay = i / 10 + "s"));

    window.location.hash = "+";
  };

  const createListenersForOptBtn = (btns) => {
    btns.forEach((item) => {
      item.addEventListener("click", (e) => {
        btns.forEach((item) => item.classList.remove("btn-active"));
        item.classList.add("btn-active");
        sortedElements();
      });
    });
  };
  [...langElems].forEach((item) => {
    item.addEventListener("click", sortedElements);
  });
  createListenersForOptBtn(fistSortOpt);
  createListenersForOptBtn(secondSortOpt);
};
