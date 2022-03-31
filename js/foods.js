let foods = {
    dalbhat: {
        photo: 'assets/dalbhat.jpg',
        title: 'Dal Bhat',
        price: 'NPR 600-700',
        bestPlace: 'Tip Top Khaja Ghar, Basantapur',
        desc: 'Dal-Bhat is widespread and so dear to Nepalis that it is often considered the country’s “national food”. It is also a relatively cheaper dish, on a mountainous Nepali trek, there are chances you would be served this dish twice a day.'

    },
    momo: {
        photo: '',
        title: 'Momo',
        price: 'NPR 150-200',
        bestPlace: 'Sandar Momo, Shree Nagar Marga',
        desc: `The first that comes in people's mind when they talk about Kathmanud's delicacies is surely Momo. While its origins are Tibetan, it has been integrated into the Nepali gastronomical journey thoroughly. They come in different shapes and sizes, but primarily you’ll find leaf-shaped or round momos being sold in street-shops and individual carts.
        Momos are meat/vegetable filled dough-balls, that are either steamed or fried, or even “kothey” - half-steamed, half-fried. A spicy, tangy tomato chutney accompanies them in most places, but depending on where you eat, these condiments may change their form and taste.`

    }
}
console.log(foods)
const f = document.createElement('div');
f.innerHTML = `
    <div class="food--title">${foods.dalbhat.title}</div>

    <div 
        class="food-image"
        style="background-image:url(${foods.dalbhat.photo});height:10em;width:10em;">
    </div>
    <div class="food--info">
       <div class="food--info--price"> 
            <p>Price:</p><span>${foods.dalbhat.price}</span>
        </div>
        <div class="food-info-place">
            <p>Best place to eat:</p><span>${foods.dalbhat.bestPlace}</span>
        </div>
        <div class="food-info-desc">
            <p>Description</p>
            <p>${foods.dalbhat.desc}</p>
        </div>
        <button class="see-more">See more...</button>
        <button class="see-less">See less...</button>

    </div>


`
// document.body.appendChild(f);
console.log(foods["dalbhat"].price)