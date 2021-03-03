export default () => {
  const seting1 = Array.from(
    document.getElementById("sort_options_1").children
  );
  const seting2 = Array.from(
    document.getElementById("sort_options_2").children
  );
  const views = Array.from(document.querySelector(".view").children);
  const interfase = Array.from(document.querySelector(".interface").children);
  const input = document.getElementById("search-panel");
  const searchBtn = document.getElementById("search-btn");

  const start = () => {
    const one = seting1.find((item) => item.classList.contains("btn-active"))
      .name;
    const two = seting2.find((item) => item.classList.contains("btn-active"))
      .name;
    const three = views.find((item) => item.classList.contains("btn-active"))
      .dataset.block;
    const four = interfase.find((item) => item.classList.contains("btn-active"))
      .dataset.lang;
    const five = input.value;
    if (!window.location.hash) return;
    let options = decodeURI(window.location.hash).split("/");

    if ("#" + options[0] !== one) {
      let btn = seting1.find((item) => "#" + item.name === options[0]);
      btn.click();
    }
    if (options[1] !== two) {
      let btn = seting2.find((item) => item.name === options[1]);
      btn.click();
    }
    if (options[2] !== three) {
      let btn = views.find((item) => item.dataset.block === options[2]);
      btn.click();
    }
    if (options[3] !== four) {
      let btn = interfase.find((item) => item.dataset.lang === options[3]);
      btn.click();
    }
    if (options[4] !== five) {
      input.value = options[4];

      searchBtn.click();
    }
  };

  const pushToUrl = () => {
    const one = seting1.find((item) => item.classList.contains("btn-active"))
      .name;
    const two = seting2.find((item) => item.classList.contains("btn-active"))
      .name;
    const three = views.find((item) => item.classList.contains("btn-active"))
      .dataset.block;
    const four = interfase.find((item) => item.classList.contains("btn-active"))
      .dataset.lang;
    const five = input.value;
    const params = encodeURI(
      one + "/" + two + "/" + three + "/" + four + "/" + five
    );
    window.location.hash = params;
  };

  start();
  window.addEventListener("hashchange", pushToUrl);
};
