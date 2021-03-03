export default () => {
  const createListenerForView = (btn, elem) => {
    document.getElementById(btn).addEventListener("click", (e) => {
      document.getElementById("view-table-btn").classList.remove("btn-active");
      document
        .getElementById("view-preview-btn")
        .classList.remove("btn-active");
      e.target.classList.add("btn-active");
      document.querySelector(".table").classList.add("block-off");
      document.querySelector(".preview").classList.add("block-off");
      document.querySelector(elem).classList.remove("block-off");
      window.location.hash = "+";
    });
  };
  createListenerForView("view-table-btn", ".table");
  createListenerForView("view-preview-btn", ".preview");
};
