const app = document.getElementById("root");

const init = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const characters = (await response.json()).results;
  const charactersContainer = document.createElement("div");
  charactersContainer.className = "characters_container";

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const characterContainer = document.createElement("div");

    const image = document.createElement("img");
    image.src = character.image;
    const name = document.createElement("div");
    name.innerHTML = character.name;

    characterContainer.appendChild(image);
    characterContainer.appendChild(name);
    charactersContainer.appendChild(characterContainer);
  }

  app.appendChild(charactersContainer);
};
[
    {
      "id": 1,
      "name": "Буженина с клюквенным соусом",
      "ingredients": [
        "запеченная буженина из свинины",
        "клюквенный соус",
        "брусника",
        "красный лук",
        "моцарелла",
        "фирменный соус альфредо"
      ],
      "img": "https://dodopizza-a.akamaihd.net/static/Img/Products/421b5f7975dd422ea59dbf1d9e1b1b95_138x138.jpeg",
      "price": {
        "price": {
          "default": 539,
          "size": {
            "small": 0,
            "medium": 100,
            "large": 200
          },
          "crust": {
            "cheesy": 150,
            "cheesySausage": 200
          }
        }
      },
      "classifications": {
        "classifications": {
          "new": true,
          "spicy": false,
          "vegetarian": true
        }
      }
    }
  ]
const btnMinus = 

init();