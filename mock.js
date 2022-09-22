
 const client = [
  {
    id: "0",
    img: "img/Ellipse 11user1.png",
    imgAlt: "Denny",
    description:
      "I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief",
    name: "Denny Hilguston",
    address: "@denny.hill",
  },

  {
    id: "1",
    img: "img/Ellipse 11user2.png",
    imgAlt: "Vani",
    description:
      "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
    name: "Vani Pandey",
    address: "@vani.pandey",
  },

  {
    id: "2",
    img: "img/Ellipse 11user3.png",
    imgAlt: "Milly",
    description:
      "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
    name: "Milly Singh",
    address: "@milly.singh",
  },
]


const generateClient = (defClient = client) => {
  const clientDiv = document.createElement("div") 
  clientDiv.classList.add("clients__item-fb")
  defClient.forEach((client) => {   
      const clientHTML = `
      <li class="item-fb__card">
      <h5 class="card-logo"><span class="card-logo__span">starstar</span>star</h5>
      <p class="card-text">
      ${client.description}
      </p>
      <div class="card-info">
        <img src="${client.img}" alt="Denny" />
        <div class="card-info__user">
          <p class="user-name">
             ${client.name}
          </p>
          <address class="user-mail">${client.address}</address>
        </div>
      </div>
    </li>
  `
      
      clientDiv.innerHTML += clientHTML 
      
  })
  clientsUser.appendChild(clientDiv) 
};
generateClient();



 