console.log("hola que tal");
const app = document.getElementById("root");

app.innerHTML = "<picture><img src='https://randomuser.me/api/portraits/women/5.jpg' alt='Usuario2'/> Usuario 2</picture>";

const Avatar = () =>{
    return `
    <picture>
        <img src ="img/31.jpg" alt="Mujer" />
        Usuario 1
    </picture>
    `
}

app.innerHTML = Avatar();