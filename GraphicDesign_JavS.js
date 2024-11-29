document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const boxes = document.querySelectorAll(".box");
  
    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all filters and add to the clicked one
            filterItems.forEach(filter => filter.classList.remove("active"));
            this.classList.add("active");
  
            // Get the filter value
            const filterValue = this.getAttribute("data-filter");
  
            // Show or hide boxes based on the filter
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