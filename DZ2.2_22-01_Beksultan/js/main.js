const tabContent = document.querySelectorAll(".tabcontent");
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");

console.log(tabContent);
let timeout;

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

const changeTab = (i = 0) => {
    hideTabContent();
    showTabContent(i)
};

let currentTab = 0;
changeTab(currentTab)

let interval = setInterval(() => {
    currentTab++;
    if (currentTab === tabs.length) {
        currentTab = 0;
    }
    changeTab(currentTab);
}, 1000);


document.addEventListener("click", () => {
    clearInterval(interval);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        interval = setInterval(() => {
            changeTab(currentTab);
            currentTab++;
            if (currentTab === tabs.length) {
                currentTab = 0;
            }
        }, 1000);
    }, 3000);
})

tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, index) => {
            if(target === item) {
                changeTab(index)

                currentTab = index

                timeout = setTimeout(() => {
                    interval = setInterval(() => {
                        currentTab++;
                        if (currentTab === tabs.length) {
                            currentTab = 0;
                        }
                        changeTab(currentTab);
                    }, 1000);
                }, 3000);
            }
        })
    }
})

const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

openModalBtn.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

closeModalBtn.addEventListener("click", closeModal)
document.addEventListener("click",closeModal)


let options = {
    root: document.querySelector('#header'),
    rootMargin: '0px',
    threshold: 1.0
}
let callback = function(entries, observer) {
};
let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.promotion__timer');
observer.observe(target);


window.addEventListener("scroll", () => {
    var height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    const position = window.scrollY + document.documentElement.clientHeight;

    if (height - position === 0) {
        openModal();
    }
});