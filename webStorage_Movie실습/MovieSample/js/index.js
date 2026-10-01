const video = document.querySelector("#video");
document.querySelectorAll("[name=cartinsert]").forEach((btnEle) => {
  btnEle.addEventListener("click", function () {
    localStorage.setItem(this.id, this.dataset.info);
  });
});

document.querySelectorAll("[name=vplay]").forEach((btnEle) => {
  btnEle.addEventListener("click", function () {
    video.src = btnEle.dataset.mediaSrc;
    video.play();
  });
});
