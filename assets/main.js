export const mainContainer = () => {
  // create main element
  const main = document.createElement("main");
  main.className = "main"
  document.body.appendChild(main);
  // create unordered list
  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("class", "my-details");

  /******************************* my details *********************************/

  // create an array of items to include in the unordered list
  const myDetails = [
    "My name is Sam and I started studying CS and programming starting June, 2022",
    "Before deciding to dedicate myself to this field, I graduated from UCSD as a pre-law with a sociology degree",
    "After achiving my undergraduate degree, I studied for the LSAT with the intention of applying for law schools, but after countless hours studying, I realized this was not my passion",
    "I was introduced to the field of CS by a friend, and I was immediately captivated by the idea of being able to create anything!"
  ];

  // iterate through the array and insert it into an <li> tag and append it to the list
  for (const text of myDetails) {
    const listItem = document.createElement("li");
    listItem.innerText = text;
    listItem.setAttribute("class", "detail");
    unorderedList.append(listItem);
  }

  const clock = document.createElement("li");
  clock.className = "detail current-time";

  const time = () => {
    let curr = new Date;
    clock.innerText = "I live in Buena Park, and it's currently "+ curr.toLocaleTimeString();

    setInterval(time, 1000);
  }; 

  time();

  unorderedList.append(clock);

  main.append(unorderedList);
}