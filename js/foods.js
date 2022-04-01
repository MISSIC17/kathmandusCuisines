let foods = {
    dalbhat: {
        photo: 'assets/dalbhat.jpg',
        title: 'Dal Bhat',
        price: 'NPR 600-700',
        category: "mains",
        bestPlace: 'Tip Top Khaja Ghar, Basantapur',
        desc: 'Dal-Bhat is widespread and so dear to Nepalis that it is often considered the country’s “national food”. It is also a relatively cheaper dish, on a mountainous Nepali trek, there are chances you would be served this dish twice a day.'

    },
    momo: {
        photo: 'assets/momos.jpg',
        title: 'Momo',
        price: 'NPR 150-200',
        category: "mains",
        bestPlace: 'Sandar Momo, Shree Nagar Marga',
        desc: `The first that comes in people's mind when they talk about Kathmanud's delicacies is surely Momo. While its origins are Tibetan, it has been integrated into the Nepali gastronomical journey thoroughly. They come in different shapes and sizes, but primarily you’ll find leaf-shaped or round momos being sold in street-shops and individual carts.
        Momos are meat/vegetable filled dough-balls, that are either steamed or fried, or even “kothey” - half-steamed, half-fried. A spicy, tangy tomato chutney accompanies them in most places, but depending on where you eat, these condiments may change their form and taste.`

    },
    choila: {
        photo: 'assets/choila.jpg',
        title: 'Choila',
        price: 'NPR 200-400',
        category: "mains",
        bestPlace: 'Himali Kitchen, Paryatan Marg, Kathmandu',
        desc: `Choila is a spiced, grilled meat dish, traditionally prepared with water buffalo meat. One can also find other versions made with duck, chicken or mutton. It’s packed with heat and spice, so be sure you can take it before you gorge into it. This spicy, mouth- and the eye-watering dish is typically served with Chiura or flaked rice, that complements the soft, chewy meat well with its crunch. It is also accompanied by the traditional Newari homemade liquor- Aila. Choila has become a staple street dish in all of Nepal, brought there from traditional Newari homes and festivals. `
    },

    sekuwa: {
        photo: 'assets/sekuwa.png',
        title: 'Sekuwa',
        price: 'NPR 400-600',
        category: "mains",
        bestPlace: "Himali Kitchen, Paryatan Marg, Kathmandu",
        desc: " Sekuwa is like a kebab, but for many, it’s even better than a kebab. It is a staple for the Limbu people of Nepal but has found its way to the streets of the Himalayan nation. Sekuwa is made out of any meat, be it pork, lamb, goat or chicken (or a mixture). The raw meat is lathered with traditional herbs and spices, and grilled over a natural wood fire. The smell of the smoking, charred meat fills up streets, attracting crowds in large numbers. However, sekuwa is not readily available everywhere in Nepal, and one may have to do thorough research about its availability before venturing out to try it. "
    },
    selroti: {
        photo: "assets/selroti.webp",
        title: "Sel Roti",
        price: "NPR 20",
        category: "desert",
        bestPlace: "Bakeries along Guna Kamadev Marg",
        desc: 'A doughnut of sorts, Sel Roti, is a deep-fried delight. It is made of sweetened rice flour and is deep-fried till reddish-brown. Its bread-like consistency gives it a crunchy but fluffy texture. Sel Roti has become the sweet of the streets and is available in almost all major food hubs. It is often eaten as a quick breakfast bite so that you might find these frying up in a large kadhai early in the morning. It is usually eaten on the Hindu festivals of Tihar and Dashain. '
    },
    lassi: {
        photo: "assets/lassi.jpeg",
        title: "Lassi",
        price: "NPR 100 - 200",
        category: "drink",
        bestPlace: "Janakpur Dahi Lassi Bhandar, Chandraman Singh Marg, nearby Indra Chowk",
        desc: 'Lassi is a sweet, thick drink made from yoghurt. The thick curd is mixed with water and sugar and served chilled. However, this simple lassi has many flavours now, like mango or rose, or toppings, from shaved coconut to dry fruits to a thick layer of cream. Make sure that the water used to make this sweet drink is fresh and clean, and ask for a cold glass to refresh yourself.'
    },
    yomari: {
        photo: "assets/yomari.jpg",
        title: "Yomari",
        price: "NPR 100 - 200",
        category: "desert",
        bestPlace: "Janakpur Dahi Lassi Bhandar, Chandraman Singh Marg, nearby Indra Chowk",
        desc: 'This sweet treat was initially made as an offering to Gods for a good harvest, on the festival of Yomari Punhi, the largest Newari celebration. What was once a celebratory dish is now so popular all over Nepal that it can be found all year round, in most places in Kathmandu. This sweet bun is made out of rice flour, steamed and filled with a gooey paste made of sesame seeds, coconut and molasses. This traditional harvest sweet has found itself into the 21st century, with unique spins on the dish like being filled with chocolate. These cute fish-shaped buns are often served with a sweet dip.'
    },
    tongba: {

        photo: "assets/tongba.jpg",
        title: "Tongba",
        price: "NPR 400 - 600",
        category: "beverage",
        bestPlace: "Shrestha Bhai Tongba Center, New Road",
        desc: 'Tongba is a millet-based alcoholic beverage found in the eastern mountainous region of Nepal and the neighbouring Darjeeling and Sikkim. It is the traditional and indigenous drink of the Limbu, Yakkha, Rai, Sunuwar, Lepcha, Sherpa, and many other ethnic group of eastern Nepal.'
    }


}
let foodParent = document.querySelector('.foods');
let currButton = document.querySelector('#button-all').id;
renderer("all");
document.querySelector('#button-mains').addEventListener('click', () => {
    foodParent.innerHTML = '';
    console.log("Bruh")
    renderer("mains");
});
let buttons = document.querySelectorAll('.button--section');
for (let button of buttons) {
    let category = button.id.substring(7, button.id.length);
    button.addEventListener('click', () => {
        foodParent.innerHTML = "";
        renderer(category);
    })
}
function renderer(category) {
    let neededCategory = category;
    for (let element in foods) {
        if (category == "all") neededCategory = foods[element].category;

        console.log(category)
        if (foods[element].category == neededCategory) {
            let currElement = document.createElement('div');
            currElement.setAttribute('class', 'food--wrapper');
            currElement.setAttribute('id', `food--${element}`);
            currElement.innerHTML = `
            
                     <div class="food--title"><p>${foods[element].title}</p></div>

                     <div 
                         class="food--image"
                         style="background-image:url(${foods[element].photo})">
                     </div>

                     <div class="food--misc">
                         <div class="food--info--price"> 
                         <p>Price:</p><span>${foods[element].price}</span>
                     </div>
                     <div class="food--info--place">
                         <p>Where to eat:</p><span>${foods[element].bestPlace}</span>
                     </div>
                     <div class="food--info--desc">
                         <p>Description:</p>
                         <span>${foods[element].desc}</span>
                     </div>

                     <button class="see-modes see-more"><p>See more...</p></button>

                     </div>
            `;
            foodParent.appendChild(currElement);
            let misc = currElement.lastElementChild;
            let buttonMode = misc.querySelector(':scope > .see-modes');
            buttonMode.addEventListener('click', () => {
                if (buttonMode.classList.contains('see-more')) {
                    currElement.querySelector('.food--info--desc').style.display = "grid";
                    buttonMode.classList.remove('see-more');
                    buttonMode.classList.add('see-less');
                    buttonMode.firstChild.innerHTML = "See less...";
                } else if (buttonMode.classList.contains('see-less')) {
                    currElement.querySelector('.food--info--desc').style.display = "none";
                    buttonMode.classList.add('see-more');
                    buttonMode.classList.remove('see-less');
                    buttonMode.firstChild.innerHTML = "See more...";
                }
                
            })
        }
    }

}
