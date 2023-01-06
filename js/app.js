//animation for left screen side entry 
//was attempting to create right and left side entries but when I used anchors google chrome has massive bug
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
        }
        else {
            entry.target.classList.remove('show-left');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

//animation for right screen side entry 
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
        }
        else {
            entry.target.classList.remove('show-right');
        }
    });
});

const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

let foodItem = [
    {
        id: 1,
        name: "baja burrito",
        category: "burrito",
        description: "Steak or chicken sautéed, peppers, onions, zucchini, and tomato sauce.",
        price: 10.49,
    },

    {
        id: 2,
        name: "baja taco",
        category: "taco",
        description: "Steak or chicken sautéed, peppers, onions, zucchini, and tomato sauce.",
        price: 8.49,
    }
];

//generating items



function createCards() {
    let shop = document.getElementById("shop")
    for (let i = 0; i < foodItem.length; i++) { 

        let heading = document.createElement("h1");
        heading.setAttribute("id","food-id-${foodItem[i].id}");
        shop.appendChild(heading);

        console.log(foodItem[i].id);
      }

}

createCards();

