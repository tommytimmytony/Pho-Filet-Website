const itemContainer = document.getElementsByClassName("item_container");
const mainContainer = document.querySelector(".main_container");
const link = document.querySelector(".link");

const Appetizers = {
  title: "Appetizers",
  position: 0,
  items: {
    item1: {
      name: "A1 - Spring Rolls (2pcs)",
      price: 8.5,
      description:
        "Grilled pork, shrimp, lettuce, carrots, cilantro, & rice noodles wrapped in rice paper",
    },
    item2: {
      name: "A2 - Fried Egg-Roll (2pcs)",
      price: 8.5,
      description:
        "Pork, carrots, onions,taro & cellophane noodles wrapped in crispy fried wheat paper",
    },
    item3: {
      name: "A3 - Crab Rangoon (6pcs)",
      price: 8.5,
      description:
        "Wonton filled with crab, green onion & cream cheese spread. Pinched into little purses, and deep fried",
    },
    item4: {
      name: "A9 - Pot Stickers - Steamed or Fried (6pcs)",
      price: 8.5,
      description: "Wonton filled with pork & vegetables",
    },
    item5: {
      name: "E1 - Edamame",
      price: 8.5,
      description: "Boiled soybeans in the pod",
    },
  },
};

const Pho = {
  title: "Pho",
  position: 1,
  items: {
    item1: {
      name: "P1 - Beef Pho (with or without Beef Ball)",
      price: 16.95,
      description: "",
    },
    item2: {
      name: "P10 - Chicken Pho",
      price: 15.95,
      description: "",
    },
    item3: {
      name: "P11 - Vegetable Pho",
      price: 15.95,
      description: "- with Tofu (+ 1.00) <br> - without Tofu",
    },
    item4: {
      name: "P12 - Shrimp Pho",
      price: 16.95,
      description: "",
    },
  },
};

const Vermicelli = {
  title: "Vermicelli",
  position: 2,
  items: {
    item1: {
      name: "B1 - Combination Vermicelli",
      price: 16.95,
      description: "",
    },
    item2: {
      name: "B2 - Egg Roll Vermicelli",
      price: 15.95,
      description: "",
    },
    item3: {
      name: "B4 - Char-grilled Pork Vermicelli",
      price: 15.95,
      description: "",
    },
    item4: {
      name: "B5 - Char-grilled Shrimp Vermicelli",
      price: 15.95,
      description: "",
    },
    item5: {
      name: "B6 - Stir-fried Beef Vermicelli",
      price: 15.95,
      description: "",
    },
    item6: {
      name: "B7 - Stir-fried Chicken Vermicelli",
      price: 15.95,
      description: "",
    },
    item7: {
      name: "B8 - Stir-fried Tofu Vermicelli",
      price: 15.95,
      description: "",
    },
  },
};

const Plates = {
  title: "Plates",
  position: 3,
  items: {
    item1: {
      name: "C1 - Combination with Steamed Rice",
      price: 16.95,
      description: "",
    },
    item2: {
      name: "C4 - Char-grilled Pork with Steamed Rice",
      price: 15.95,
      description: "",
    },
    item3: {
      name: "C5 - Char-grilled Shrimp with Steamed Rice",
      price: 15.95,
      description: "",
    },
    item4: {
      name: "C6 - Stir-fried Beef with Steamed Rice",
      price: 15.95,
      description: "",
    },
    item5: {
      name: "C7 - Stir-fried Chicken with Steamed Rice",
      price: 15.95,
      description: "",
    },
    item6: {
      name: "C8 - Stir-fried Tofu with Steamed Rice",
      price: 15.95,
      description: "",
    },
  },
};

const Fried_Rice = {
  title: "Fried Rice",
  position: 4,
  items: {
    item1: {
      name: "F1 - Combination Fried Rice",
      price: 16.95,
      description: "",
    },
    item2: {
      name: "F2 - Chicken Fried Rice",
      price: 15.95,
      description: "",
    },
    item3: {
      name: "F3 - Beef Fried Rice",
      price: 15.95,
      description: "",
    },
    item4: {
      name: "F4 - Shrimp Fried Rice",
      price: 15.95,
      description: "",
    },
  },
};

const Lo_Mein = {
  title: "Lo Mein",
  position: 5,
  items: {
    item1: {
      name: "Combination Lo Mein",
      price: 16.95,
      description: "",
    },
    item2: {
      name: "Chicken Lo Mein",
      price: 15.95,
      description: "",
    },
    item3: {
      name: "Beef Lo Mein",
      price: 15.95,
      description: "",
    },
    item4: {
      name: "Shrimp Lo Mein",
      price: 15.95,
      description: "",
    },
  },
};

const Vietnamese_Sandwiches = {
  title: "Vietnamese Sandwiches",
  position: 6,
  items: {
    item1: {
      name: "S4 - Char-grilled Pork",
      price: 9.5,
      description: "",
    },
    item2: {
      name: "S6 - Stir-fried Beef",
      price: 9.5,
      description: "",
    },
    item3: {
      name: "S7 - Stir-fried Chicken",
      price: 9.5,
      description: "",
    },
    item4: {
      name: "S8 - Stir-fried Tofu",
      price: 9.5,
      description: "",
    },
  },
};

const Vegetarian_Items = {
  title: "Vegetarian Items",
  position: 7,
  items: {
    item1: {
      name: "ATofu - Vegetable Spring Rolls (2pcs)",
      price: 8.5,
      description:
        "Tofu, lettuce, pickled carrots, cilantro & rice vermicelli noodles wrapped in rice paper",
    },
    item2: {
      name: "Vegetable Lo Mein",
      price: 15.95,
      description: "- with Tofu (+ 1.00) <br> - without Tofu",
    },
    item3: {
      name: "Vegetable Pho",
      price: 15.95,
      description: "- with Tofu (+ 2.00) <br> - without Tofu",
    },
  },
};

const Drinks = {
  title: "Drinks",
  position: 8,
  items: {
    item1: {
      name: "Boba Drinks",
      price: 6.99,
      description:
        "Strawberry, Watermelon, Mango, Coconut, PassionFruit, Peach, Taro",
    },
    item2: {
      name: "Vietnamese Coffee",
      price: 4.99,
      description: "",
    },
    item3: {
      name: "Hot Jasmine Tea",
      price: 4.99,
      description: "",
    },
    item4: {
      name: "Soda / Tea / Bottled Water",
      price: 2.75,
      description: "",
    },
  },
};
addSection(Appetizers);
addSection(Pho);
addSection(Vermicelli);
addSection(Plates);
addSection(Fried_Rice);
addSection(Lo_Mein);
addSection(Vietnamese_Sandwiches);
addSection(Vegetarian_Items);
addSection(Drinks);

function addSection(section) {
  addLine(section.position);
  addTitle(section.title);
  for (const item in section.items) {
    addNameAndPrice(section.items[item], section.position);
    addDescription(section.items[item].description, section.position);
  }
}
function addLine(position) {
  if (position === 0) return;

  mainContainer.insertAdjacentHTML("beforeend", `<hr class="break_line">`);
}
function addTitle(title) {
  const html = `<span class="item_Title">${title}</span>
  
  <div class="item_container row d-flex justify-content-between
            align-items-baseline mx-auto gx-6">
  </div>`;
  mainContainer.insertAdjacentHTML("beforeend", html);
}
function addNameAndPrice(item, position) {
  const html = `
        <div class="col-md-7">
               <h1 class="item_name">${item.name}</h1>
            </div>
             <div class="item_price col-md-5">
                ${item.price.toFixed(2)}
    `;
  itemContainer[position].insertAdjacentHTML("beforeend", html);
}

function addDescription(description, position) {
  let html = "";
  if (description === "") {
    html = `</div>`;
  } else {
    html = ` </div>
             <span class="item_description" style="max-width: 70%">${description}</span >`;
  }
  itemContainer[position].insertAdjacentHTML("beforeend", html);
}

//sticky for nagivation bar
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// dropdown for Opening hours
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button");
  if (!isDropdownButton && e.target.closest("[data-dropdown]" != null)) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
});

// time system && down-triangle

let date = new Date();
openingHours(date);
function openingHours(date) {
  if ((date.getDay() != 0 && date.getHours() >= 21) || date.getHours() < 11) {
    link.textContent = "Closed ";
    return;
  } else if (
    (date.getDay() == 0 && date.getHours() >= 20 && date.getMinutes() > 30) ||
    date.getHours() < 11
  ) {
    link.textContent = "Closed";
    return;
  }
  switch (date.getDay()) {
    case 1:
      link.textContent = "Closed Today ";
      break;
    case 2:
      link.textContent = "Open Today 11am-9pm ";
      break;
    case 3:
      link.textContent = "Open Today 11am-9pm ";
      break;
    case 4:
      link.textContent = "Open Today 11am-9pm ";
      break;
    case 5:
      link.textContent = "Open Today 11am-9pm ";
      break;
    case 6:
      link.textContent = "Open Today 11am-9pm ";
      break;
    case 0:
      link.textContent = "Open Today 11am-8:30pm ";
      break;
  }
}
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.get);
console.log(date);
console.log(link.textContent);
