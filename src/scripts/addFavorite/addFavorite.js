export default () => {
  const btnAll = document.getElementById("btn-show-all");
  const btnFav = document.getElementById("btn-show-fav");
  let table = document.querySelector(".table");
  let preview = document.querySelector(".preview");

  const addFavListeners = (elem, btnDelCss, action) => {
    elem.addEventListener("click", (e) => {
      btnDelCss.classList.remove("btn-active");
      elem.classList.add("btn-active");
      const elems = document.querySelectorAll(".svg-star-m");
      elems.forEach((item) => {
        if (!item.classList.contains("shine")) {
          let elem = null;
          if (
            elems[0].parentElement.parentElement.parentElement.hasAttribute(
              "data-id"
            )
          ) {
            elem = item.parentElement.parentElement.parentElement;
          }
          if (
            item.parentElement.parentElement.parentElement.parentElement.hasAttribute(
              "data-id"
            )
          ) {
            elem = item.parentElement.parentElement.parentElement.parentElement;
          }
          elem.classList[action]("block-off-all");
        }
      });

      if (action === "add") {
        let newTable = [...table.children];
        let newPreview = [...preview.children];
        [...table.children].forEach((item) => item.remove());
        [...preview.children].forEach((item) => item.remove());
        table.append(...newTable);
        newTable
          .filter((item) => !item.classList.contains("block-off-all"))
          .forEach((item, i) => {
            item.style.animationDelay = i / 10 + "s";
          });
        preview.append(...newPreview);
        newPreview
          .filter((item) => !item.classList.contains("block-off-all"))
          .forEach((item, i) => {
            item.style.animationDelay = i / 10 + "s";
          });
      } else {
        let newTable = [...table.children];
        let newPreview = [...preview.children];
        [...table.children].forEach((item) => item.remove());
        [...preview.children].forEach((item) => item.remove());
        table.append(...newTable);
        newTable.forEach(
          (item, i) => (item.style.animationDelay = i / 10 + "s")
        );
        preview.append(...newPreview);
        newPreview.forEach(
          (item, i) => (item.style.animationDelay = i / 10 + "s")
        );
      }
    });
  };

  document.addEventListener("click", (e) => {
    let targ = e.target.closest(".svg-star-m");
    if (!targ) return;
    const id =
      targ.parentElement.parentElement.parentElement.dataset.id ||
      targ.parentElement.parentElement.parentElement.parentElement.dataset.id;
    const elements = document.querySelectorAll(`[data-id="${id}"]`);
    elements.forEach((item) => {
      let elem = item.querySelector(".svg-star-m");
      elem.classList.toggle("shine");
    });
  });

  addFavListeners(btnFav, btnAll, "add");
  addFavListeners(btnAll, btnFav, "remove");
};
