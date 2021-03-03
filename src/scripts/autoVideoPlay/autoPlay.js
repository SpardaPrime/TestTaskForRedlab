export default () => {
  const elem = document.querySelector(".preview");
  const videoElem = elem.querySelectorAll("video");
  let video = null;

  const autoplay = () => {
    if (elem.classList.contains("block-off")) return;
    try {
      let X = document.documentElement.clientWidth / 2;
      let Y = document.documentElement.clientHeight / 2;
      let el = document.elementFromPoint(X, Y).querySelector("video");
      if (!el) return;
      if (video) {
        video !== el && video.pause();
      }
      video = el;
      el.dataset.play = "true";
      el.play();
    } catch (e) {}
  };

  const removeAutoplay = (event) => {
    if (event.target.dataset.play) return;

    window.removeEventListener("scroll", autoplay);
    [...videoElem].forEach((item) => {
      item !== event.target && item.pause();
      item.removeEventListener("click", removeAutoplay);
      item.removeEventListener("play", removeAutoplay);
      item.removeEventListener("pause", deletingListeners);
    });
  };

  const deletingListeners = (event) => {
    event.target.dataset.play = "";
  };

  window.addEventListener("scroll", autoplay);

  [...videoElem].forEach((item) => {
    item.addEventListener("click", removeAutoplay);
    item.addEventListener("play", removeAutoplay);
    item.addEventListener("pause", deletingListeners);
  });
};
