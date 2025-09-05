let amigos = []

//comprueba los datos y los agrega a la lista
function agregarAmigo(){
    let nombreAmigo = (document.getElementById("amigo").value)
    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre")
    } else{
        amigos.push(nombreAmigo);
    }
    listaAmigo()
    document.getElementById("amigo").value = ""
    }

//muestra los datos de la lista en pantalla
function listaAmigo(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    //bucle que recorre la lista y añade los datos a la pantalla
    for (let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//realiza el sorteo de los datos
function sortearAmigo(){
    let resultado = document.getElementById("resultado") 
    resultado.innerHTML = ""
    
    //condicion que comprueba si hay datos en la lista antes de sortear
    if (amigos.length === 0){
        alert("Necesitas agregar amigos antes de sortear")
        return;
    } 

    //genera un numero aleatorio, busca el elemento de la lista con ese numero y lo asigna a una variable para mostrarla en pantalla
    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[numeroAleatorio] 
    resultado.innerHTML += `El amigo secreto sorteado es: ${amigoSorteado}`
}

