import Navigo from "navigo";

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');
const backBtn = document.querySelectorAll('.header__btn_back');
const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');

const closeSearch = ({target}) => {
  if (!target.closest('.search, .header__btn_search')) {
    search.classList.remove('search_active');
    document.body.removeEventListener('click', closeSearch)
  }
};

const router = new Navigo('/', {
  hash: true,
});

const closeAllPage = () => {
  library.classList.add('hidden');
  book.classList.add('hidden');
  add.classList.add('hidden');
}

router.on({
  '/' : () => {
    closeAllPage();
    library.classList.remove('hidden');
    search.classList.remove('search_active');
  },
  'book' : () => {
    closeAllPage();
    book.classList.remove('hidden');
    search.classList.remove('search_active');
  },
  'add' : () => {
    closeAllPage();
    add.classList.remove('hidden');
    search.classList.remove('search_active');
  }
}).resolve();

addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    router.navigate('add');
  });
});

backBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    router.navigate('/');
  });
});



btnSearch.forEach(btn => {
  btn.addEventListener('click', () => {
    search.classList.add('search_active');
    document.body.addEventListener('click', closeSearch)
  });
});
