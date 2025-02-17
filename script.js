//your code here
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    let draggedItem = null;

    images.forEach(image => {
        image.addEventListener("dragstart", function (e) {
            draggedItem = this;
            e.dataTransfer.setData("text/plain", "");
        });

        image.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        image.addEventListener("drop", function (e) {
            e.preventDefault();
            if (draggedItem !== this) {
                let temp = this.innerHTML;
                this.innerHTML = draggedItem.innerHTML;
                draggedItem.innerHTML = temp;
            }
        });
    });
});