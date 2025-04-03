const heroes = {
    ironman: { name: "Homem de Ferro", description: "Tony Stark, um bilionário gênio.", image: "img/ironman.jpg" },
    spiderman: { name: "Homem-Aranha", description: "Peter Parker, um jovem com superpoderes.", image: "img/aranha.jpg" },
    thor: { name: "Thor", description: "O Deus do Trovão de Asgard.", image: "img/thor.jpg" },
    hulk: { name: "Hulk", description: "Bruce Banner se transforma no Hulk quando fica com raiva.", image: "img/hulk.jpg" },
    captainamerica: { name: "Capitão América", description: "Steve Rogers, o supersoldado da Segunda Guerra.", image: "img/america.jpg" },
    blackwidow: { name: "Viúva Negra", description: "Natasha Romanoff, uma espiã letal.", image: "img/viuva.jpg" },
    blackpanther: { name: "Pantera Negra", description: "T'Challa, rei de Wakanda e seu protetor.", image: "img/pantera.jpg" },
    doctorstrange: { name: "Doutor Estranho", description: "Mestre das Artes Místicas.", image: "img/dcestranho.jpg" },
    wolverine: { name: "Wolverine", description: "Mutante com garras de adamantium.", image: "img/wolverine.jpg" },
    deadpool: { name: "Deadpool", description: "O mercenário tagarela.", image: "img/deadpool.jpg" },
    scarletwitch: { name: "Feiticeira Escarlate", description: "Uma das mais poderosas mutantes.", image: "img/escarlate.jpg" },
    antman: { name: "Homem-Formiga", description: "Scott Lang, o herói que pode encolher.", image: "img/formiga.jpg" },
    hawkeye: { name: "Gavião Arqueiro", description: "Clint Barton, mestre arqueiro.", image: "img/gaviao.jpg" },
    venom: { name: "Venom", description: "Simbionte alienígena ligado a Eddie Brock.", image: "img/venom.jpg" },
    silver_surfer: { name: "Surfista Prateado", description: "O arauto de Galactus.", image: "img/surfista.jpg" }
};

// Função para carregar a lista de heróis
function loadHeroes() {
    const heroList = document.getElementById("hero-list");
    heroList.innerHTML = "";
    for (const key in heroes) {
        let li = document.createElement("li");
        li.textContent = heroes[key].name;
        li.onclick = () => showHero(key);
        heroList.appendChild(li);
    }
}

function showHero(heroKey) {
    const hero = heroes[heroKey];
    document.getElementById("hero-name").textContent = hero.name;
    document.getElementById("hero-description").textContent = hero.description;
    document.getElementById("hero-image").src = hero.image;
    document.getElementById("hero-image").alt = hero.name;
}
function searchHero() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    const heroList = document.getElementById("hero-list");
    heroList.innerHTML = "";
    
    for (const key in heroes) {
        if (heroes[key].name.toLowerCase().includes(input)) {
            let li = document.createElement("li");
            li.textContent = heroes[key].name;
            li.onclick = () => showHero(key);
            heroList.appendChild(li);
        }
    }
}


window.onload = loadHeroes;
