//Código que toma info de una API con una promesa, si lo consigue, llenará un html con la información requerida dentro de unas cards

let divData = document.getElementById('divData')

function getData(){
    //Inicializo la promesa, fetch(fuente de donde quiero obtener mis productos con el método GET)
    const promesa = fetch('https://freetestapi.com/api/v1/products', 
    {method: 'GET'});
    //inicializo el then. y el catch.
    promesa.then((response) => {
        //En el then, volvemos a crear otra promesa por el JSON, donde en el then guardamos toda la información en "data"
        response.json().then(
            (data)=>{
                //Llamo a mi función, con la que manipulare todos los datos traidos del API 
                createCards(data);
            //Si llega a esta parte es porque si pudo obtener respuesta del API pero hubo problema con el JSON
            }).catch((error)=> console.log('Problema con JSON',error));
    //El catch nos mostrará un error desde el inicio si no se puede obtener los datos del fetch
    }).catch((err)=>console.log('Exisitió un problema con la solicitud',err));
}//getData


function createCards(products){
    console.log(products.length);
    //Creo un foreach para ir creando una carta por cada elemento dentro de mi arreglo 
    products.forEach(element => {
        //con el id divData me pongo dentro del div principal de mi html, con insertAdjacentHTML voy agregando html desde el js, el beforeend es para que vaya de abajo hacia arriba
        divData.insertAdjacentHTML ("beforeend",
        //inserto el código html desde bootstrap con las backtics y voy insertando la información que necesito en cada parte del html
            `<div class="card col-sm" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="${element.description}">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}<br/>${element.price}</p>
            </div>
            </div>`)
    });
    //Crear una Card por cada producto con sus datos esenciales
}//createCards

//name,description,image, price


getData();