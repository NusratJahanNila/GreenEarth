// 1.load category
const loadCategory = () => {
    const uri = "https://openapi.programming-hero.com/api/categories";

    fetch(uri)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}
//1. display categories
const displayCategories = (categories) => {
    const catContainer = document.getElementById("category-container");
    catContainer.innerHTML = "";
    // loop data
    for (let cat of categories) {
        const categoryCard = document.createElement("div");
        categoryCard.innerHTML = `
            <li id="cat-btn-${cat.id}" onclick="loadPlants(${cat.id})" class="btn-category">
                <a class="hover:bg-[#15803D] p-2 rounded-md hover:text-white">${cat.category_name}
                </a>
            </li>
        `
        catContainer.append(categoryCard);
    }
}

// category
loadCategory();