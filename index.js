const button = document.getElementById("but");
button.addEventListener('click', function() {
    
    alert('Jameson Whiskey Menu | Signature Cocktails: Jameson Ginger & Lime - Jameson Irish Whiskey, ginger ale, and fresh lime juice served over ice. Garnish: Lime wedge. | Irish Coffee - Jameson Irish Whiskey, hot coffee, sugar, and topped with whipped cream. Garnish: Coffee bean. | Whiskey Sour - Jameson Irish Whiskey, fresh lemon juice, simple syrup, and a dash of bitters. Garnish: Cherry and orange slice. | Bow St. Collins - Jameson Irish Whiskey, fresh lemon juice, simple syrup, and soda water. Garnish: Lemon wheel. | Jameson & Cola - Jameson Irish Whiskey mixed with cola over ice. Garnish: Lime wedge. | Jameson Mule - Jameson Irish Whiskey, ginger beer, and fresh lime juice served in a copper mug. Garnish: Lime wedge and mint sprig.');
});

const cardsData = [
    {
        image: "allpics/pics2/Rectangle 6 (1).png",
        title: "Select Reserve",
        description: "Select Reserve is a triple distilled blend of rich pot  still and grain whiskey that is matured in a mixture of sherry casks and bourbon barrels ",
        rating: 4 
        
    },
    {
        image: "allpics/pics2/Rectangle 6 (2).png",
        title: "Limited Reserve",
        description: "Matured for 18 years in hand-selected oak casks from Europe and America, this rare whiskey is finished in first-fill bourbon barrels",
        rating: 4
    },
    {
        image: "allpics/pics2/Rectangle 6 (3).png",
        title: "Gold Reserve",
        description: "A rich and chewy entry in the Jameson range, with three styles of pot still spirit carefully so sweet and sour at the same time  balanced",
        rating: 3 
    },
    {
        image: "allpics/pics2/Rectangle 6 (4).png",
        title: "Special Reserve",
        description: "This is a smooth, spicy 12 year old blended  so sweet and sour at the same time Irish whiskey with a good content of pure potstil .",
        rating: 4 
    }
];

const cardContainer = document.getElementById('card-container');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    
    const stars = '★'.repeat(card.rating) + '☆'.repeat(5 - card.rating);

    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class="stars">${stars}</div>
        <h4>${card.title}</h4>
        <p>${card.description}</p>
        <button>Order Now</button>
        
    `;

    cardContainer.appendChild(cardElement);
});



document.getElementById("read").addEventListener("click", function() {
    var moreContent = document.getElementById("more");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "Read Less"; 
    } else {
        moreContent.style.display = "none";
        this.textContent = "Read More"; 
    }
});



const cardsData2 = [
    {
        image: "allpics/pics3/Rectangle 6 (1).png",
        title: "Caskmates",
        description: "Jameson Caskmates Stout and IPA edition- triple distilled whiskey you love finished in craft beer barrels ",
        rating: 4 
        
    },
    {
        image: "allpics/pics3/Rectangle 6 (2).png",
        title: "Blender’s Dog",
        description: "A rich, round, creamy mouthfeel, with the sweetness of butterscotch, giving way to the prickle of the pot still spices",
        rating: 4
    },
    {
        image: "allpics/pics3/Rectangle 6 (3).png",
        title: "Black Barrel",
        description: "Is our tribute to our coopers, who painstakingly give their bourbon barrels an additional charring to reveal their untold  ",
        rating: 3 
    },
    {
        image: "allpics/pics3/Rectangle 6 (4).png",
        title: "Crested",
        description: " Crested is a tribute to the first drops bottled at The Bow Street Distillery and it is Jameson's oldest distillery bottled brand",
        rating: 4 
    }
];

const cardContainer2 = document.getElementById('card-container2');

cardsData2.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    
    const stars = '★'.repeat(card.rating) + '☆'.repeat(5 - card.rating);

    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class="stars">${stars}</div>
        <h4>${card.title}</h4>
        <p>${card.description}</p>
        <button>Order Now</button>
        
    `;

    cardContainer2.appendChild(cardElement);
});
