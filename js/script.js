
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

    if (screenWidth <= 670) {
        // navigation bar dropdown

        let dropdown = document.querySelectorAll(".dropdown-parent")
        let dropdownContent = document.querySelectorAll(".dropdown-content")
        let innerDropdown = document.querySelectorAll(".inner-dropdown-parent")
        let innerDropdownContent = document.querySelectorAll(".inner-dropdown-content")

        let ind, j, prev;

        function handleDropdownClick(index) {
            if (j !== "true") {
                dropdownContent[index].style.display = dropdownContent[index].style.display === "block" ? "none" : "block"
                ind = index
            }
        }

        function handleInnerDropdownClick(index) {
            for (let i = 0; i < innerDropdownContent.length; i++) {
                innerDropdownContent[i].style.display = "none"
            }
            if (prev === index) {
                if (innerDropdownContent[index].style.display === "none") j = "false"
                else if (innerDropdownContent[index].style.display === "block") j = "true"
                return;
            }
            innerDropdownContent[index].style.display = "block"
            dropdownContent[ind].style.display = "block"
            if (prev !== index) {
                if (innerDropdownContent[index].style.display === "block") j = "true"
            }
            prev = index
        }

        dropdown.forEach((elem, index) => {
            elem.addEventListener("click", function () { handleDropdownClick(index) })
        })

        innerDropdown.forEach((elem, index) => {
            elem.addEventListener("click", function () { handleInnerDropdownClick(index) })
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

// document.addEventListener('DOMContentLoaded', function () {
//     const heading = document.getElementById('logo-text-cde');

//     const text = heading.textContent;

//     heading.textContent = '';

//     const characters = text.split('');

//     characters.forEach((char, index) => {
//         setTimeout(() => {
//             heading.textContent += char;
//         }, index * 100);
//     });

// });

//study centre

let studyCentre = [
    [["Dr.P.Nirmal Kumar", "Associate Professor", "Department of Electronics and Communication", "22357203"], ["Dr.K. Venkatalakshmi", "Associate Professor", "Department of Management Studies", "9282101154, 044-22358775", "rajamagesh65@hotmail.com"]],
    [["Dr. Meenakumari", "Assistant Professor", "Dept of Management Studies", "Anna University, Chennai - 25", "smeenasankar@yahoo.com"]],
    [["Dr. S. Renganathan", "Professor", "Dept of Bio Technology", "Alagappa College of Technology", "Anna University, Chennai - 25", "2235 9145"], ["Dr.P.Vivekanandan", "Professor of Mathematics", "Department of Chemical Engineering", '9444729501, 044-22203509', 'actechcenter@rediffmail.com'], ['Dr. S. Renganathan', 'Professor', 'Dept of Bio Technology', 'Alagappa College of Technology', 'Anna University, Chennai - 25', '2235 9145']],
    [['Dr. V Natarajan', 'Associate Professor', 'Dept of Instrumentation Engineering', 'MIT, Anna University, Chrompet, Chennai', '91-44-22516322', 'natraj@mitindia.edu, natraj_mit@rediffmail.com, mitcde@yahoo.com']],
    [['Dr. M.V. Subha', 'Associate Professor', 'Dept of Management Studies', 'Anna University Regional Centre', 'Maruthamalai Road, Navavoor, Coimbatore - 641 046', '0422 - 2694433 / 9488482287']],
    [['Dean i/c', 'University College of Engineering Nagercoil', 'Konam, Nagercoil - 629 004', '0465 - 2260511']],
    [['Dr.P. Jothimurugan', 'Coordinator', '0452-2092612,6382825275', 'Fax : 0452-2698280', 'dr.tjmba@gmail.com']],
    [['Dr. S. Sujatha', 'Assistant Professor', 'Dept of MCA', 'University College of Engineering', 'Trichy - 620 024', 'BIT Campus, Mandaiyur', '0431 - 2407979 / 43']],
    [['Dr. R. Senthil', 'Dean i/c', 'University College of Engineering Villupuram', 'Kakuppam,Opp to Armed Reserve Police, Villupuram-605103', '04146-224500']]
]

function handleStudyCentreClick(val) {
    const studyWrapper = document.createElement("div");
    studyWrapper.id = "study";

    const xMark = document.createElement("i")
    xMark.id = "into-mark";
    xMark.classList.add("fa-regular", "fa-circle-xmark", "into-mark")
    studyWrapper.appendChild(xMark)
    xMark.addEventListener("click", handleIntoClick)

    const wrapper = document.createElement("div");
    wrapper.id = "study-centre";

    for (let i = 0; i < studyCentre[val].length; i++) {
        for (let j = 0; j < studyCentre[val][i].length; j++) {
            const para = document.createElement("p")
            para.innerHTML = studyCentre[val][i][j];
            wrapper.appendChild(para)
            if (j === 0) para.classList.add("study-name")
        }
        if (i !== studyCentre[val].length - 1) wrapper.appendChild(document.createElement("hr"));
    }

    document.getElementById("study-wrapper").style.display = "flex"
    document.getElementById("study-wrapper").appendChild(studyWrapper)
    studyWrapper.appendChild(wrapper)

    document.getElementById("whole-wrapper").style.display = "none"
}

function handleIntoClick() {
    document.getElementById("study").remove();
    document.getElementById("study-wrapper").style.display = "none"
    document.getElementById("whole-wrapper").style.display = "block"

}




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












// scrolling

// const scrollableElement = document.querySelector('.listitem');
// let scrollPosition = 0;

// function scrollSlowly() {
//     if (scrollPosition >= 100) {
//         scrollPosition = 0;
//     } else {
//         scrollPosition += 1;
//     }

//     scrollableElement.style.transform = `translateY(-${scrollPosition}%)`;
//     requestAnimationFrame(scrollSlowly);
// }

// scrollSlowly();








