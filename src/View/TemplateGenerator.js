import '../style.css';
import toDoIcon from "../Assets/list-check-solid.svg";
import searchIcon from "../Assets/magnifying-glass-solid.svg";

export function generateHeader() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');
    body.appendChild(header);


    const logo = new Image();
    logo.classList.add('icon');
    logo.src = toDoIcon;
    logo.alt = "To do list";
    header.appendChild(logo);

    header.appendChild(generateSearchBar());

}

function generateSearchBar() {

    const searchBar = document.createElement('div');
    searchBar.classList.add('search');
    const searchForm = document.createElement('form');
    searchForm.classList.add('search-form');
    searchBar.appendChild(searchForm);

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Search..";
    input.name = "search";
    searchForm.appendChild(input);

    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    const searchLogo = new Image();
    searchLogo.classList.add('icon');
    searchLogo.src = searchIcon;
    searchLogo.alt = "Search";
    searchButton.appendChild(searchLogo);

    searchForm.appendChild(searchButton);

    return searchBar;
}

export function generateSideBar() {

}

export function generateList() {

}

export function generateFooter() {

}
