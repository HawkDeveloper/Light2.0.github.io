const Card = [
    {
        id: "0",
        img: "img/vr1.jpeg",
        title: "Metaverse",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-02"),
        databtn:'3',
      },

      {
        id: "1",
        img: "img/vr2.jpeg",
        title: "New technologies",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-14"),
        databtn:'3',

      },

      {
        id: "2",
        img: "img/vr3.jpeg",
        title: "People and VR",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-20"),
        databtn: '3',

      },

      {
        id: "3",
        img: "img/vr4.jpeg",
        title: "Virtual tour",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-24"),
        databtn:'3',
      },

      {
        id: "4",
        img: "img/vr5.jpeg",
        title: "Education wiht VR",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-04"),
        databtn:'3',
        
      },

      {
        id: "5",
        img: "img/vr6.jpeg",
        title: "VR and medicine",
        description: "A Network of 3D virtual worlds focused on social connection.",
        date: new Date ("2022-07-01"),
        databtn:'3',

      },


]
const toHTML = Card => `
  
    <li class="btn btn--headsets__item-set" ${Card.date}>
    <img src="${Card.img}" class="item-set__photo" alt="photo" data-btn="mod" data-id="${Card.id}"/>
        <div class="item-set__dscr">
            <h5 class="item-set__dscr-name">${Card.title}</h5>
                <p class="item-set__dscr-text">
                    ${Card.description}
                </p>
        </div>
    </li>

`
function render (){
    const html = Card.map(toHTML).join('')
    document.querySelector('#listitemContent').innerHTML = html
}

render()


const cardModal = $.modal({
    title: 'Metaverse',
    closable: true,
    with: 'max-content'
})

document.addEventListener( 'click', event =>{
    const btnType = event.target.dataset.btn
    const id = event.target.dataset.id
    

    if (btnType === 'mod') {
        const card = Card.find(f => f.id === id)
        cardModal.setContent(`
        <img class="item__page__photo" src="${card.img}">
        <h3 class="item__page__title">${card.title}</h3>
        <p class="item__page__text">${card.description}</p>
      `)
        cardModal.open()
    }
})


// Сортуваня
const sortSelect = document.getElementById("sortSelect"); 
const handleSortSelectChange = (e) => {
    console.log()
    listitemContent.innerHTML = ""; 
    switch (e.target.value) {
        case 'New first':
            const sortCardNew = Card.sort((a, b) => a.date - b.date);
            render(sortCardNew)
            brack;
        case 'Last first':
            const sortCardLast = Card.sort((a, b) => b.date - a.date);
            render(sortCardLast);
            brack;
        default: render
        (Card)
            break;
    }

    
};
sortSelect.addEventListener("change", handleSortSelectChange);
