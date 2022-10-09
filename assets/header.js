export const headerContainer = () => {
  const headerEl = document.createElement("header");
  headerEl.setAttribute("class", "header");
  const h1El = document.createElement('h1');
  h1El.setAttribute("class", "name");
  h1El.innerText = "Samuel Park";
  headerEl.append(h1El);
  document.body.prepend(headerEl);

  const navBar = document.createElement("nav");
  navBar.className = "header-nav-container";
  const navList = document.createElement("ul");
  navList.className = "header-nav-bar";

  const navItems = [
    "my socials",
    "my hobbies",
    "my friends",
    "my family",
    "my photos"
  ];

  for (const i in navItems) {
    const li = document.createElement("li");
    li.className = "header-nav-item";
    const anchor = document.createElement("a");
    anchor.className = "header-nav-bar-link";
    anchor.href = "#";
    anchor.innerText = navItems[i];
    li.appendChild(anchor);
    navList.appendChild(li);
  }

  navBar.append(navList);
  headerEl.append(navBar);
}