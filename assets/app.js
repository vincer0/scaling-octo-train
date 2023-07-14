import "./styles/app.css";

console.log("started!");

document.querySelectorAll(".add_item_link.outer").forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", addFormToCollectionOuter);
});

document.querySelectorAll(".add_item_link.inner").forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", addFormToCollectionInner);
});

function addFormToCollectionOuter(e) {
  console.log("clicked: ", e);
  const collectionHolder = document.querySelector(
    "." + e.target.dataset.collectionHolderClass
  );

  /*   const addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.setAttribute("class", "add_item_link");
  addButton.setAttribute(
    "data-collection-holder-class",
    `${e.target.dataset.collectionHolderClass}`
  );
  addButton.append("Add");
  addButton.addEventListener("click", addFormToCollection); */

  const item = document.createElement("div");
  item.setAttribute("class", "email");

  /* item.innerHTML = collectionHolder.dataset.prototype.replace(
    /__name__label__/g,
    `${collectionHolder.dataset.index} Email`
  ); */

  item.innerHTML = collectionHolder.dataset.prototype.replace(
    /__name__/g,
    collectionHolder.dataset.index
  );

  const innerCollection = item.querySelector("div[data-prototype]");

  console.log("inner: ", innerCollection);

  innerCollection.innerHTML = innerCollection.dataset.prototype.replace(
    /__name__/g,
    innerCollection.dataset.index
  );

  collectionHolder.appendChild(item);

  collectionHolder.dataset.index++;
}

function addFormToCollectionInner(e) {
  console.log("clicked: ", e);
  const collectionHolder = document.querySelector(
    "." + e.target.dataset.collectionHolderClass
  );

  /*   const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("class", "add_item_link");
    addButton.setAttribute(
      "data-collection-holder-class",
      `${e.target.dataset.collectionHolderClass}`
    );
    addButton.append("Add");
    addButton.addEventListener("click", addFormToCollection); */

  const item = document.createElement("div");

  item.innerHTML = collectionHolder.dataset.prototype.replace(
    /__name__/g,
    collectionHolder.dataset.index
  );

  //item.appendChild(addButton);

  collectionHolder.appendChild(item);

  collectionHolder.dataset.index++;
}
