const iconShare = document.querySelectorAll(".icon-box");
const shareBoxDesktop = document.querySelector(".share-box");
const shareBoxMobile = document.querySelector(".share-box-mobile");

function displayShareBox() {
  if (window.innerWidth < 740) {
    iconShare[0].style.display = "grid";
    shareBoxDesktop.style.display = "none";
    iconShare[0].addEventListener("mouseover", () => {
      shareBoxDesktop.style.display = "none";
    });
    iconShare[0].addEventListener("click", () => {
      shareBoxMobile.style.display = "flex";
      iconShare[0].style.display = "none";
      iconShare[1].addEventListener("click", () => {
        shareBoxMobile.style.display = "none";
        iconShare[0].style.display = "grid";
      });
    });
  } else if (window.innerWidth >= 740) {
    iconShare[0].style.display = "grid";
    shareBoxMobile.style.display = "none";
    iconShare[0].addEventListener("mouseover", () => {
      shareBoxDesktop.style.display = "flex";
    });
    iconShare[0].addEventListener("click", () => {
      shareBoxMobile.style.display = "none";
      iconShare[0].style.display = "grid";
    });
  }
  iconShare[0].addEventListener("mouseout", () => {
    shareBoxDesktop.style.display = "none";
  });
}

displayShareBox();

window.addEventListener("resize", displayShareBox);
