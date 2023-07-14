console.log("started!");

document.querySelectorAll(".add_item_link").forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", addFormToCollection);
});

function addFormToCollection(e) {
  console.log("clicked: ", e);
  const collectionHolder = document.querySelector(
    "." + e.target.dataset.collectionHolderClass
  );

  console.log("." + e.target.dataset.collectionHolderClass);

  const item = document.createElement("div");

  item.innerHTML = collectionHolder.dataset.prototype.replace(
    /__name__/g,
    collectionHolder.dataset.index
  );

  collectionHolder.appendChild(item);

  collectionHolder.dataset.index++;
}
