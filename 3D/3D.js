document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const boxes = document.querySelectorAll(".box");

    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            filterItems.forEach(filter => filter.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            boxes.forEach(box => {
                if (filterValue === "all" || box.classList.contains(filterValue)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const modalElements = document.querySelectorAll(".box");
    const modals = document.querySelectorAll(".modal");

    modalElements.forEach((box, index) => {
        const img = box.querySelector("img");
        const modal = modals[index];
        const close = modal.querySelector(".close");

        img.addEventListener("click", () => {
            modal.style.display = "block";
        });

        close.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}