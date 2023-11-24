
const nodeList = document.getElementById("navigation-section").children;

function toggleMobileNavigation() {
    const hiddenNav = document.getElementById("hidden-nav");
    const navButtons = document.getElementById("nav-buttons");

    hiddenNav.style.display = hiddenNav.style.display === "block" ? "none" : "block";
}

function handleWindowResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 875) {
        for (let i = nodeList.length - 2; i > 3; i--) {
            nodeList[i].style.display = "none";
        }
    } else {
        for (let i = nodeList.length - 2; i > 3; i--) {
            nodeList[i].style.display = "flex";
        }
    }

    if (screenWidth <= 470) {
        // navigation bar dropdown

        let dropdown = document.querySelectorAll(".dropdown-parent")
        let dropdownContent = document.querySelectorAll(".dropdown-content")
        let innerDropdown = document.querySelectorAll(".inner-dropdown-parent")
        let innerDropdownContent = document.querySelectorAll(".inner-dropdown-content")

        function handleDropdownClick(index) {
            dropdownContent[index].style.display = dropdownContent[index].style.display === "block" ? "none" : "block"
            innerDropdownContent[index].style.display = dropdownContent[index].style.display === "block" ? "none" : "block"
        }

        dropdown.forEach((elem, index) => {
            elem.addEventListener("click", function () { handleDropdownClick(index) })
        })

        innerDropdown.forEach((elem, index) => {
            elem.addEventListener("click", function () { handleDropdownClick(index) })
        })
    }
}


document.getElementById("mobile-menu-icon").addEventListener("click", toggleMobileNavigation);

let imageCount = 0, time = 0, fullImg = null;

document.getElementById("main-logo").addEventListener("click", () => {
    let currentTime = new Date().getTime();
    if (currentTime - time > 2000) imageCount = 0

    imageCount++;
    time = currentTime;

    if (imageCount >= 7) {
        fullImg = document.createElement("img");
        fullImg.src = "https://muraliac.github.io/ourimage/mainImg.png";
        fullImg.alt = "Image";
        fullImg.id = "ourImage"
        document.body.appendChild(fullImg);
        imageCount = 0;
    } else if (fullImg !== null) document.body.removeChild(fullImg);

})

handleWindowResize();

window.addEventListener("resize", handleWindowResize);

const wrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    // if (currentIndex > 0) {
    currentIndex--;
    if (currentIndex === -1) currentIndex = items.length - 1
    updateCarousel();
    // }
});

nextBtn.addEventListener('click', () => {
    // if (currentIndex < items.length - 1) {
    currentIndex++;
    currentIndex %= items.length
    updateCarousel();
    // }
});

updateCarousel();

//administration page


function handleAdministrationClick(identity) {
    let tags = document.querySelectorAll(".administration-section-left")

    for (let tag of tags) {
        if (tag === document.getElementById(identity)) tag.style.display = "block"
        else tag.style.display = "none"
    }

}

// search functionality

let suggestions = ["Home", "MCA", "MBA", "MSC CS", "Administration", "Controller of Examination", "Project - MCA", "Project - MBA", "Project - MSC CS", "Student - login", "Study centre - login", "Staff - login", "Online - MBA", "Question Bank", "FAQ", "Gallery", "Fee Structure", "Important/Entrance exam dates", "Entrance test syllabus"]

let suggest = {
    "Home": "index.html",
    "MCA": "mca.html",
    "MBA": "mba.html",
    "MSC CS": "msc.html",
    "Administration": "administration.html",
    "Gallery": "gallery.html",
    "Fee Structure": "fee-structure.html",
    "Important/Entrance exam dates": "entrance-exam-date.html",
    "Entrance test syllabus": "entrance-test-syllabus.html",
    "Controller of Examination": "mca.html",
    "Project - MCA": "mca.html",
    "Project - MBA": "mca.html",
    "Project - MSC CS": "mca.html",
    "Student - login": "mca.html",
    "Study centre - login": "mca.html",
    "Staff - login": "mca.html",
    "Online - MBA": "mca.html",
    "Question Bank": "mca.html",
    "FAQ": "mca.html"
}

const searchBox = document.getElementById('search-box');
const suggestionList = document.getElementById('suggestions');

function autocomplete() {
    const list = document.getElementById("suggestions").children;
    if (searchBox.value === "") {
        for (let i = list.length - 1; i >= 0; i--) list[i].remove()
    } else {
        const input = searchBox.value.toLowerCase();
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(input));

        displaySuggestions(filteredSuggestions);
    }
}

function displaySuggestions(suggestionsArray) {
    suggestionList.innerHTML = '';
    suggestionsArray.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionList.appendChild(li);

        li.addEventListener('click', () => {
            searchBox.value = suggestion;
            suggestionList.innerHTML = '';
        });
    });
}

document.getElementById("search").addEventListener("click", function () {
    window.location.href = suggest[searchBox.value]
})

searchBox.addEventListener('focus', autocomplete);
searchBox.addEventListener('input', autocomplete);


// main logo and name animation

document.addEventListener('DOMContentLoaded', function () {
    const heading = document.getElementById('logo-text-cde');

    const text = heading.textContent;

    heading.textContent = '';

    const characters = text.split('');

    characters.forEach((char, index) => {
        setTimeout(() => {
            heading.textContent += char;
        }, index * 100);
    });

});


