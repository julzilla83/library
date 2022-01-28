let myLibrary = [
    {
      title:  "In Defense of the Constitution",
      author: "George W. Carey",
      pages: 501,
      wasRead: false,
      imgsrc: "./images/CareyDefense_9780865971387_800h_72.jpg"
    },
    {
    title:  "Liberty, Order, and Justice",
    author: "James McClellan",
    pages: 1089,
    wasRead: true,
    imgsrc: "./images/McClellan_9780865972568_800h_72-2.jpg"
    },
    {
    title:  "Valley of the Dolls",
    author: "Jacqueline Susann",
    pages: 442,
    wasRead: false,
    imgsrc: "./images/0802135196.01._SCLZZZZZZZ_SX500_.jpg"
    },
    {
    title:  "The Bell Jar (Modern Classics)",
    author: "Sylvia Plath",
    pages: 224,
    wasRead: true,
    imgsrc: "./images/41QpOCMRItL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
    title:  "The Collected Poems",
    author: "Sylvia Plath",
    pages: 224,
    wasRead: false,
    imgsrc: "./images/41xMaMpqAxL._SX328_BO1,204,203,200_.jpg"
    },
    {
    title:  "Choose Your Story, Change Your Life",
    author: "Kindra Hall",
    pages: 272,
    wasRead: true,
    imgsrc: "./images/41yQhyKtJKS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    }
    
];

function Book(title, author, pages, wasRead, imgsrc){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
    this.imgsrc = imgsrc;
}

Book.prototype.toggle = function (){
    return !this.wasRead;
}

Book.prototype.alt = () => this.title + " by " + this.author;

function addBookToLibrary(){

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked? true : false;

    if (validateForm()){
        const imgurl = document.getElementById('imgurl').value;
        const book = new Book (title, author, pages, read, imgurl);
        myLibrary.push(book);
        createCard(book,myLibrary.length-1); // should use index not length
        clearPopUp();
    } else {
        container_div.style.display = 'flex';
        shade.style.display = 'block';
    }
}

// const book1 = new Book('In Defense of the Constitution', 'George W. Carey', 501, false,
//     'https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/678/CareyDefense_9780865971387_800h_72.jpg');

//     addBookToLibrary(book1);
//     console.log(myLibrary);

function setupPage(){
    const header_div = document.createElement('div');
    header_div.classList.add('header', 'container');
    const page = document.querySelector('.page');
    page.appendChild(header_div);

    const site_title = document.createElement('h1');
    site_title.innerText = "Books That I Will Never Read"
    header_div.appendChild(site_title);

    const main_div = document.createElement('div');
    main_div.classList.add('main', 'container');
    page.appendChild(main_div);

    const add_btn_div = document.createElement('div');
    const add_btn = document.createElement('button');
    add_btn.innerText = 'Add A Book';
    add_btn.classList.add('add','btn');
    add_btn_div.appendChild(add_btn);
    main_div.appendChild(add_btn_div);

    const footer_div = document.createElement('div');
    footer_div.classList.add('footer', 'container');
    footer_div.innerHTML = "(C) Julius Palon <br> The Odin Project Exercise"
    page.appendChild(footer_div);

    //popup shade
    const bg_shade = document.createElement('div');
    bg_shade.classList.add('shade');
    page.appendChild(bg_shade);
}

function popUpForm(){
    
    //invoke a popup div asking for the 4 details.
    //container div:
    const container_div = document.createElement('div');
    container_div.classList.add('popup', 'container');
    
    const page = document.querySelector('.page')
    page.appendChild(container_div);

    const popupTitle = document.createElement('h1');
    popupTitle.innerText = 'Enroll A Book';
    popupTitle.classList.add('popup', 'heading');
    container_div.appendChild(popupTitle);

    //input fields:
    //title
    const title_div = document.createElement('div')
    const title = document.createElement('input');
    const title_label = document.createElement('label');
    title.classList.add('inputbox');
    title.setAttribute('type','text');
    title.setAttribute('id','title');
    title_label.textContent = 'Title: ';
    title_label.appendChild(title);
    title_div.appendChild(title_label);
    container_div.appendChild(title_div);

    //author:
    const author_div = document.createElement('div')
    const author = document.createElement('input');
    const author_label = document.createElement('label');
    author.classList.add('inputbox');
    author.setAttribute('type','text');
    author.setAttribute('id','author');
    author_label.textContent = 'Author: ';
    author_label.appendChild(author);
    author_div.appendChild(author_label);
    container_div.appendChild(author_div);

    //pages:
    const pages_div = document.createElement('div')
    const pages = document.createElement('input');
    const pages_label = document.createElement('label');
    pages.classList.add('inputbox');
    pages.setAttribute('type','text');
    pages.setAttribute('id','pages');
    pages_label.textContent = 'Pages: ';
    pages_label.appendChild(pages);
    pages_div.appendChild(pages_label);
    container_div.appendChild(pages_div);

    //Book Cover Image:
    const cover_div = document.createElement('div')
    const cover = document.createElement('input');
    const cover_label = document.createElement('label');
    cover.classList.add('inputbox');
    cover.setAttribute('type','text');
    cover.setAttribute('id','imgurl');
    cover_label.textContent = 'Cover URL: ';
    cover_label.appendChild(cover);
    cover_div.appendChild(cover_label);
    container_div.appendChild(cover_div);

    //was Read?:
    const read_div = document.createElement('div')
    const yes = document.createElement('input');
    const yes_label = document.createElement('label');
    yes.classList.add('checkbox');
    yes.setAttribute('type','checkbox');
    yes.setAttribute('id','read');
    yes_label.textContent = 'Yes ';
    yes_label.classList.add('yes');
    p = document.createElement('p');
    p.innerText = "Done Reading?: "
    read_div.appendChild(p);
    read_div.appendChild(yes);
    read_div.appendChild(yes_label);
    container_div.appendChild(read_div);

    //Add and Cancel Button
    const btn_div = document.createElement('div');
    const add = document.createElement('button')
    add.innerText = "Add to Library";
    add.classList.add('popup', 'add');
    btn_div.appendChild(add)

    const cancel = document.createElement('button')
    cancel.innerText = "Cancel";
    cancel.classList.add('popup','cancel');
    btn_div.appendChild(cancel);
    container_div.appendChild(btn_div);
    btn_div.classList.add('btn-container');

    container_div.style.display = 'none'; // init

}

function clearPopUp(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('imgurl').value = "";
    document.getElementById('read').checked = false;
}

function createCards(library){
    for(let i=0; i<library.length; i++){
        createCard(library[i], i);
    }
}

// Creates individual cards from Library listing
function createCard(book, counter){
    const main = document.querySelector('.main');
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-booknum',counter);

    const delwrap =  document.createElement('div');
    delwrap.classList.add('delwrap');
    const del_btn = document.createElement('button');
    del_btn.innerText = "Delete";
    del_btn.setAttribute('data-booknum', counter);
    del_btn.classList.add('btn','delete');
    delwrap.appendChild(del_btn);
    card.appendChild(delwrap);

    // bind click event on delete
    del_btn.addEventListener('click', (e)=>{
        let card = document.querySelector(`.card[data-booknum="${counter}"]`);
        main.removeChild(card);
        delete myLibrary[counter];
        e.stopPropagation();
    })

    let readStatus;
    book.wasRead? readStatus = "Reading Done" : readStatus = "To Read";
    const toggle_btn_wrap =  document.createElement('div');
    toggle_btn_wrap.classList.add('togglewrap');
    const read_toggle = document.createElement('button');
    read_toggle.innerText = readStatus;
    read_toggle.setAttribute('data-booknum', counter);
    read_toggle.classList.add('btn','toggle');
    toggle_btn_wrap.appendChild(read_toggle);
    card.appendChild(toggle_btn_wrap);
    book.wasRead? read_toggle.classList.add('done') : read_toggle.classList.remove('done');

    // bind click event on toggle
    read_toggle.addEventListener('click', (e)=>{
        if (myLibrary[counter].wasRead === false){
            myLibrary[counter].wasRead = true;
            read_toggle.innerText = 'Reading Done';
            read_toggle.classList.add('done');
        } else {
            myLibrary[counter].wasRead = false
            read_toggle.innerText = 'To Read'
            read_toggle.classList.remove('done');
        }
        // myLibrary[counter].wasRead = !myLibrary[counter].wasRead;
        e.stopPropagation();        
    })

    //insert the book cover
    const img = document.createElement('img');
    img.classList.add('book', 'cover');
    img.setAttribute('src', book.imgsrc)
    // img.setAttribute('alt', book.alt); undefined
    card.appendChild(img);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = '"'+ book.title + '"';
    card.appendChild(title);

    const author = document.createElement('div');
    author.innerText = 'by ' + book.author;
    card.appendChild(author);

    const pages = document.createElement('div');
    pages.innerText = 'Pages: ' + book.pages;
    card.appendChild(pages);

    let page = document.querySelector('.page');
    main.appendChild(card);

    // bind_clicks();
}

setupPage();
popUpForm(); // init vars
createCards(myLibrary);

// ADD Book to Library Button, opens popup ang greys out page
const add_book_btn = document.querySelector('.add');
const container_div = document.querySelector('.popup.container');
const shade = document.querySelector('.shade');
add_book_btn.addEventListener('click', () => {
    container_div.style.display = 'flex';
    shade.style.display = 'block';
})

// Closes pop-up
const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', ()=> {
    container_div.style.display = 'none';
    shade.style.display = 'none';
    clearPopUp();
})

// Enrolls new book to the library and creates a card
const add = document.querySelector('.popup.add');
add.addEventListener('click', () =>{
    // clearPopUp();
    container_div.style.display = 'none';
    shade.style.display = 'none';
    addBookToLibrary();
})

// Not used. Gives a plethora of problems due to dynamically added elements
function bind_clicks(){
    let delete_btns = document.getElementsByClassName('delete');
    let del_btns =  Array.from(delete_btns);
    let main = document.querySelector('.main');
    del_btns.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            let btn_num = btn.dataset.booknum;
            let card = document.querySelector(`.card[data-booknum="${btn_num}"]`);
            if (card !== null) main.removeChild(card); // null when called during new card addition
            delete myLibrary[btn_num];
            // console.log(myLibrary);
            e.stopPropagation();
        })    
    });

    let read_toggle = document.getElementsByClassName('toggle');
    let toggle_btns = Array.from(read_toggle);
    toggle_btns.forEach(toggle => {
        toggle.addEventListener('click', (e)=>{
            let book_num = toggle.dataset.booknum;
            let toggle_btn = document.querySelector(`.toggle[data-booknum="${book_num}"]`);
            // console.log(myLibrary[book_num].wasRead);
            if (book_num !== undefined){ // undefined when called during new card addition
                if (myLibrary[book_num].wasRead === false){
                    myLibrary[book_num].wasRead = true;
                    toggle_btn.innerText = 'Reading Done';
                } else {
                    myLibrary[book_num].wasRead = false
                    toggle_btn.innerText = 'To Read'
                }
            }
            e.stopPropagation();
        })
    });
}

function validateForm(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const imgurl = document.getElementById('imgurl');

    if (imgurl.value.length < 4) {
        imgurl.value = './images/generic.jpg';
        console.log(imgurl.value)
    }
    if (title.length === 0 || author.length === 0 || isNaN(pages) || pages.length ===0){
        alert('Please complete the required fields.')
        return false;
    } else {
        return true
    }

}