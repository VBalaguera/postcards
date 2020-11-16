console.log("test"); 

// from the top
const main = document.querySelector("#container");
const divs = [...container.children];
divs.sort((a, b) => a.id - b.id);
divs.forEach(divs => main.appendChild(divs));


// clickable from the top
function descendingOrder() {
    const main = document.querySelector("#container");
    const divs = [...container.children];
    divs.sort((a, b) => a.id - b.id);
    divs.forEach(divs => main.appendChild(divs));
}

// newest updates first here 
function updatesFirst() {
    const main = document.querySelector("#container");
    const divs = [...container.children];
    divs.sort((a, b) => b.id - a.id);
    divs.forEach(divs => main.appendChild(divs));
}