const archivebtn = document.getElementById("header_Arch")
const aboutbtn = document.getElementById("header_Ab")
const about = document.getElementById("about")
const archive = document.getElementById("archive")
const items = document.querySelectorAll(".item")
const picture = document.getElementById("picture")
const market = document.getElementById("market")

// new version with hidden class

archivebtn.addEventListener("click",()  => {
    about.classList.add("hidden")
    market.classList.add("hidden")
    archive.classList.remove("hidden")
});

aboutbtn.addEventListener("click", () => {
    market.classList.add("hidden")
    archive.classList.add("hidden")
    about.classList.remove("hidden")
});
items.forEach(item => {
    item.addEventListener("click",(event) => {
        //picture copy
        let bg = window.getComputedStyle(event.target).backgroundImage;
        picture.style.backgroundImage = bg;
        picture.scrollIntoView();
//        window.scrollTo({picture});
        //market showing

        archive.classList.add("hidden");
        about.classList.add("hidden");
        market.classList.remove("hidden");
    });
});

//archivebtn.addEventListener("click", aboutbtnF())


// прописать открытие страницы через нажатие на класс с получением нажатой кнопки из функции 

//при нажатии кнопки скрываю.ться все элементы и затем проявляеться только результат возвращените кнопки
