
// const moblie = document.querySelector('#moblie')

const items = document.querySelector('.list-1')
let btns = document.querySelectorAll('.item')

let ItemsDy = [
    {
        names: 'jarden',
        img: "./img/2.jpg",
        catogory: "Adides",
        prices: '$19'

    },
    {
        names: 'jarden',
        img: "./img/3.jpg",
        catogory: "Adides",
        prices: '$19'

    },
    {
        names: 'jarden',
        img: "./img/4.jpg",
        catogory: "Adides",
        prices: '$19'

    },
    {
        names: 'jarden',
        img: "./img/5.jpg",
        catogory: "jorden",
        prices: '$19'

    },
    {
        names: 'jarden',
        img: "./img/6.jpg",
        catogory: "jorden",
        prices: '$19'

    },
    {
        names: 'jarden',
        img: "./img/7.jpg",
        catogory: "jorden",
        prices: '$19'

    },



]
window.addEventListener('DOMContentLoaded', function () {
    displayingitems(ItemsDy)
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let targetID = e.currentTarget.dataset.id;
            let targetcatgory = ItemsDy.filter(function (item) {
                if (item.catogory === targetID) {
                    return item;
                }
            })
            if (targetID === 'all') {
                displayingitems(items)
            } else {
                displayingitems(targetcatgory)
            }
        })
    })
    

})
function displayingitems(Items) {

    let displaydyitems = ItemsDy.map(function (e) {
        return `
        <div class="box" id="item-1">
        <div class="images">
            <img src="${e.img}" alt="">
            
         </div>
         <h3>NIKE Jardon 5 </h3>
         <p>prices:$799</p>
         <button >order now</button>
     </div>
        `
    })
    let newdisplay = displaydyitems.join('');
    items.innerHTML = newdisplay
 let number = 0;
 let images = document.querySelectorAll('.images>img')
 
 
    let changeButton = document.querySelectorAll('.font img')
    changeButton.forEach(function (changeButto) {
        changeButto.addEventListener('click', function (e) {
            number++;
        images.src = ItemsDy[number].img
        

     
        })
    })
    
}


// // Responsive nav bar
// const cancle = document.querySelector('.cancle')
// const bar = document.querySelector('#bar');
// const nav = document.querySelector('#nav-bar ')
// const window1 = document.querySelector('window')
// console.log(nav);




// bar.addEventListener('click', function () {
//     // nav.style.right = '0px';
//     nav.classList.toggle('active')
//     // nav.style.transition = '0.3s'
//     cancle.style.display = 'block'

//     console.log('ckixk')
// })
// cancle.addEventListener('click', function () {
//     cancle.style.display = 'none';
//     nav.classList.remove('active')
// })

// //                         dark mood 
// const cssRoot = document.querySelector(":root")
// const darkMood  = document.querySelector('.dark');

// darkMood.addEventListener('click', function(){
//     cssRoot.classList.toggle('active')
// })
