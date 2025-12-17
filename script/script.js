// 1.load category
const loadCategory = () => {
    const uri = "https://openapi.programming-hero.com/api/categories";

    fetch(uri)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

//2. get plants by id
const loadPlants = (id) => {
    // loading spinner
    document.getElementById("plant-container").classList.add("hidden")
    document.getElementById("loading-spinner").classList.remove("hidden")

    const url = `https://openapi.programming-hero.com/api/category/${id}`

    // remove active
    const catBtns=document.querySelectorAll(".btn-category");
    catBtns.forEach(btn=>btn.classList?.remove("active"))

    // add active class
    const currentBtn=document.getElementById(`cat-btn-${id}`)
    // console.log(currentBtn)
    currentBtn.classList?.add("active")

    fetch(url)
        .then(res => res.json())
        .then(data => displayPlants(data.plants))
}

// 3.Load all plants
const loadAllPlants = () => {
    const uri = `https://openapi.programming-hero.com/api/plants`
    // console.log(uri)
    fetch(uri)
        .then(res => res.json())
        .then(data => displayPlants(data.plants))
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
// 2+3.display plants by id
const displayPlants = (plants) => {
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";
    plants.forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.innerHTML = `
            <div class="card bg-base-100 shadow-md border border-gray-300 rounded-xl w-full">
                <figure class="bg-gray-100 h-48 w-full overflow-hidden rounded-t-xl">
                    <img src="${plant.image}" alt="${plant.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                </figure>
                <div class="p-4 space-y-3">
                    <div>
                        <h2 onclick="loadPlantDetails(${plant.id})" class="text-lg font-bold text-gray-800 line-clamp-1">${plant.name}</h2>
                        <p class="text-sm text-gray-600 line-clamp-2 mt-1">${plant.description}</p>
                    </div>
                    <div class="flex items-center justify-between pt-2">
                        <span class="badge badge-success badge-outline bg-green-50 text-green-700 border-green-200 px-3 py-1 text-xs font-medium">${plant.category}</span>
                        <span class="font-bold text-lg text-gray-900">৳${plant.price}</span>
                    </div>
                    <button class="btn bg-green-600 hover:bg-green-700 text-white border-0 rounded-xl w-full mt-4 py-3 font-medium transition-all duration-200 hover:shadow-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        `
        plantContainer.append(plantCard)

        // loading spinner
    document.getElementById("plant-container").classList.remove("hidden")
    document.getElementById("loading-spinner").classList.add("hidden")
    })
}
// category
loadCategory();