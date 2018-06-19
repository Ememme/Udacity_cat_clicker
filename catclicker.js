const cats = [
  {name: 'Boruc',
  image: 'assets/cat.jpg',
  clicks: 0
  },
  {
  name: 'Calka',
  image: 'assets/calka.jpg',
  clicks: 0
  }]
console.log(cats.length);

const catList = document.querySelector('ul.cats');
cats.forEach(function(cat){
  let catLi = document.createElement('li');
  let catContainer = document.createElement('div');
  catContainer.classList.add('cat')
  let catName = document.createElement('p');
  let catImg = document.createElement('img');
  let  catClick = document.createElement('p');
  catClick.classList.add('clicker-counter');


  catName.innerText = cat.name;
  catImg.src = cat.image;
  catClick.innerText = cat.clicks;

  catLi.append(catContainer);
  catContainer.append(catName);
  catContainer.append(catImg);
  catContainer.append(catClick);
  catList.append(catLi);
});

let catsDisplay = document.getElementsByClassName('cat');

for(i = 0; i < catsDisplay.length; i++){
  catsDisplay[i].addEventListener('click', function(event){
    let counter = event.target.parentElement.querySelector(".clicker-counter").innerText;
    counter++;
    event.target.parentElement.querySelector(".clicker-counter").innerHTML = counter;
  });
}
