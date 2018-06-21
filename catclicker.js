const cats = [{
    id: 1,
    name: 'Boruc',
    image: 'assets/cat.jpg',
    clicks: 0
  },
  {
    id: 2,
    name: 'Calka',
    image: 'assets/calka.jpg',
    clicks: 0
  },
  {
    id: 3,
    name: 'Blackie',
    image: 'assets/blackie.jpg',
    clicks: 0
  },
  {
    id: 4,
    name: 'Greenie',
    image: 'assets/greenie.jpg',
    clicks: 0
  },
  {
    id: 5,
    name: 'Grumpy',
    image: 'assets/grumpy.jpg',
    clicks: 0
  }
]


const catWrapper = document.querySelector('.cats');
// A list of cats' names:
const nameList = document.createElement('ul')
nameList.classList.add('js-cat-names');

catWrapper.appendChild(nameList);

for (let cat of cats) {
  let catLi = document.createElement('li');
  let catName = document.createElement('button');
  catName.innerText = cat.name;
  catName.setAttribute('data-id', cat.id);
  catLi.append(catName);
  nameList.append(catLi);
}

// Selected cat info display area
const catDisplayWindow = document.createElement('div');
catDisplayWindow.classList.add('js-cat-display');
catWrapper.appendChild(catDisplayWindow);


// Display buttons
const catButtons = document.getElementsByTagName('button');
console.log(catButtons);

for(let button of catButtons){

  button.addEventListener('click', function(){
    // finding a cat with id equal to button id
    let attr = button.getAttribute('data-id');
    let result = cats.filter(cat => cat.id == attr);
    let catWrapper = document.querySelector('.js-cat');
    reset();
    createCatDisplay();
    document.querySelector('.js-cat-name').innerText = result[0].name;
    document.querySelector('.js-cat-image').src = result[0].image;
    document.querySelector('.js-clicker-counter').innerText = result[0].clicks;
    document.querySelector('.js-cat').classList.add(result[0].id);
    counter();
  });
}

function createCatDisplay() {
  const catDisplayWindow = document.querySelector('.js-cat-display');
  let catContainer = document.createElement('div');
  let catName = document.createElement('p');
  let catImg = document.createElement('img');
  let  catClick = document.createElement('p');

  catContainer.classList.add('js-cat');

  catClick.classList.add('js-clicker-counter');
  catName.classList.add('js-cat-name');
  catImg.classList.add('js-cat-image');

  catContainer.append(catName);
  catContainer.append(catImg);
  catContainer.append(catClick);
  catDisplayWindow.appendChild(catContainer);
}



function reset(){
  const parent = document.querySelector('.js-cat-display');
  let children = parent.children;

  if (parent.children.length !== 0){
    for(let child of children){
      child.remove();
    }
  }
}

function counter() {
  catIdFinder();
  let catImg = document.querySelector('img.js-cat-image');

  catImg.addEventListener('click', function(event){
    let counter = event.target.parentElement.querySelector(".js-clicker-counter").innerText;
    let catId = document.querySelector('.js-cat').classList[1];
    let cat = cats.filter(cat => cat.id == catId)[0]


      counter++;
      event.target.parentElement.querySelector(".js-clicker-counter").innerHTML = counter;
      cat.clicks = counter;

  });
}

var catIdFinder = function () {
  let catId = document.querySelector('.js-cat').classList[1];
  let cat = cats.filter(cat => cat.id == catId)[0].clicks;
  return cat;
}
