// Inicjalizacja mapy
const map = L.map('map').setView([52.237049, 21.017532], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Pokazywanie formularza
document.getElementById("reportBtn").onclick = () => {
    document.getElementById("reportForm").classList.remove("hidden");
};

// Ukrywanie formularza
document.getElementById("closeForm").onclick = () => {
    document.getElementById("reportForm").classList.add("hidden");
};

// Losowe imiona zwierząt
function randomName(species) {
    const names = {
        kot: ["Pazur", "Mgiełka", "Wąsik", "Tuptuś"],
        pies: ["Burek", "Reksio", "Luna", "Fado"],
        dzik: ["Waldi", "Ryjek", "Gruby Ogon"],
        sarna: ["Przyjaciółka", "Lilia", "Błysk"],
        lis: ["Rudy", "Chytrusek", "Płomyk"],
        jez: ["Kolczatek", "Turlaczek"],
        ptak: ["Skrzydełko", "Nutka", "Podróżnik"]
    };

    const list = names[species];
    return list[Math.floor(Math.random() * list.length)];
}

// Wysyłanie zgłoszenia
document.getElementById("sendReport").onclick = () => {
    const species = document.getElementById("species").value;
    const description = document.getElementById("description").value;

    const animalName = randomName(species);

    alert(`Dziękujemy! Nazwaliśmy to zwierzę: ${animalName}`);

    console.log({
        species,
        description,
        animalName
    });

    document.getElementById("reportForm").classList.add("hidden");
};
