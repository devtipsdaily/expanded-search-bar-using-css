const likeButton = document.querySelector(".likeButton");

likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("liked");
});
