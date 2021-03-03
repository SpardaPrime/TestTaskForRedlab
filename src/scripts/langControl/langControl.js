export default () => {
  const btns = document.querySelector(".interface").children;

  [...btns].forEach((item) => {
    item.addEventListener("click", (e) => {
      [...btns].forEach((item) => item.classList.remove("btn-active"));
      item.classList.add("btn-active");
      const elements = document.querySelectorAll("[data-lang-ru]");
      [...elements].forEach((item) => {
        let t = "lang" + e.target.dataset.lang;
        item.textContent = item.dataset[t];
      });
    });
  });
};
