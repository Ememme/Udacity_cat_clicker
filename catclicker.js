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
console.log(cats.length);


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
    reset();
    createCatDisplay();
    document.querySelector('.js-cat-name').innerText = result[0].name;
    document.querySelector('.js-cat-image').src = result[0].image;
    document.querySelector('.js-clicker-counter').innerText = result[0].clicks;
    counter();
  });
}

function createCatDisplay() {
  const catDisplayWindow = document.querySelector('.js-cat-display');
  let catContainer = document.createElement('div');
  let catName = document.createElement('p');
  let catImg = document.createElement('img');
  let  catClick = document.createElement('p');

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

  console.log(children);
  if (parent.children.length !== 0){
    for(let child of children){
      child.remove();
    }
  }
}

function counter() {
  let catImg = document.querySelector('img.js-cat-image');

  catImg.addEventListener('click', function(event){
    let counter = event.target.parentElement.querySelector(".js-clicker-counter").innerText;
      counter++;
      event.target.parentElement.querySelector(".js-clicker-counter").innerHTML = counter;
  });
}
