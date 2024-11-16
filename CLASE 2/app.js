let container = document.getElementById('container')
let boton = document.getElementById('boton')
//boton.addEventListener('click',mostrarApiRamdon)
boton.addEventListener('click',mostrarApiAsync)

// function mostrarApiRamdon(){
//     const url = 'https://randomuser.me/api/'
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data,'data');
//         container.innerHTML = `    
//         <img src='${data.results[0].picture.large}'></img>
//         <p>Celular: ${data?.results[0].cell}</p>
//         <p>Email: ${data?.results[0].email}</p>
//         <p>Genero: ${data?.results[0].gender}</p>
//         <p>Nombre Completo: ${data?.results[0].name.first} ${data.results[0].name.last}</p>
//         `
//     })

async function mostrarApiAsync() {   
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json()
    console.log(data,'data async');  
    container.innerHTML = `
        <img src='${data.results[0].picture.large}'></img>
        <p>Celular: ${data?.results[0].cell}</p>
        <p>Email: ${data?.results[0].email}</p>
        <p>Genero: ${data?.results[0].gender}</p>
        <p>Nombre Completo: ${data?.results[0].name.first} ${data.results[0].name.last}</p>
        `
    }