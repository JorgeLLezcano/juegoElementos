const sectionEleccion=document.getElementById("elige-ataque")
const sectionReiniciar=document.getElementById("reiniciar")
const botonAvatar=document.getElementById("boton-avatar")

const botonReiniciar=document.getElementById("boton-reiniciar")
const sectionEleccionAvatar=document.getElementById("seleccion-avatar")


const spanAvatarElement = document.getElementById("avatar-element")
const spanRival = document.getElementById("rival")

const spanVidasAvatar= document.getElementById("vidas-avatar")
const spanVidasRival= document.getElementById("vidas-rival")

const sectionMensajes=document.getElementById("resultados")
const mensajeAtaqueAvatar=document.getElementById("mensajeAtaqueAvatar")
const mensajeAtaqueRival=document.getElementById("mensajeAtaqueRival")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques= document.getElementById("contenedorAtaques")
const sectionVerMapa=document.getElementById("ver-mapa")
const mapa=document.getElementById("mapa")

let avatares = []
let ataqueAvatar =[]
let ataqueRival= []
let opcionDeAvatares
let avatarObjeto
let inputElquemado 
let inputElAguado 
let inputElTerroso 
let avatarJugador
let ataqueDeAvatares
let ataquesRivales
let botonFuego 
let botonAgua 
let botonTierra 
let botones =[]
let indexAtaqueAvatar
let indexAtaqueRival
let victoriasAvatar=0;
let victoriasRival=0;
let vidasAvatar=3;
let vidasRival=3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground= new Image()
mapaBackground.src ="./mapa.webp"
let alturaBuscada
let anchoDeMapa=window.innerWidth-20
const anchoMaximo=350

if(anchoDeMapa> anchoMaximo){
    anchoDeMapa=anchoMaximo-20
}

alturaBuscada=anchoDeMapa*600/800

mapa.width=anchoDeMapa
mapa.height=alturaBuscada

class Avatars{
    constructor(nombre, foto, vida,fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vida
        this.ataques = []
        this.ancho =40
        this.alto= 40
        this.x =aleatorio(0, mapa.width-this.ancho)
        this.y = aleatorio(0, mapa.height-this.alto)
        this.mapafoto= new Image()
        this.mapafoto.src= fotoMapa
        this.velocidadx=0
        this.velocidadY=0
    }
    pintarAvatar(){
        lienzo.drawImage(
            this.mapafoto, 
            this.x,
            this.y,
            this.alto, 
            this.ancho
            )
    }
}

let el_quemado = new Avatars("El quemado🔥", "./elquemado.png", 5, "./cabezadragon.jfif")
let el_aguado = new Avatars("El aguado💧", "./kraken_water_moster.png", 5,"./kraken.jfif")
let el_terroso = new Avatars("El terroso🌵", "./terroso.png", 5, "./ogro.jfif")
let darckangel = new Avatars("Darck", "./darkangel (2).png", 5, "./Darckangl.jfif")

let el_quemadoEnemigo  = new Avatars("El quemado🔥", "./elquemado.png", 5, "./cabezadragon.jfif")
let el_aguadoEnemigo = new Avatars("El aguado💧", "./kraken_water_moster.png", 5,"./kraken.jfif")
let el_terrosoEnemigo = new Avatars("El terroso🌵", "./terroso.png", 5, "./ogro.jfif")
let darckangelEnemigo = new Avatars("Darck", "./darkangel (2).png", 5, "./Darckangl.jfif")


el_aguado.ataques.push(
{ nombre: '💧', id: 'boton-agua' },
{ nombre: '💧', id: 'boton-agua' },
{ nombre: '💧', id: 'boton-agua' },
{ nombre: '🔥', id: 'boton-fuego' },
{ nombre: '🌵', id: 'boton-tierra' },
)
el_aguadoEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌵', id: 'boton-tierra' },
    )
el_terroso.ataques.push(
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
el_terrosoEnemigo.ataques.push(
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '🌵', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
el_quemado.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌵', id: 'boton-tierra'},
)
el_quemadoEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌵', id: 'boton-tierra'},
)
darckangel.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌵', id: 'boton-tierra'},

)
darckangelEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌵', id: 'boton-tierra'},

)


avatares.push(el_quemado,el_aguado,el_terroso, darckangel)



function iniciarJuego(){
    
    sectionEleccion.style.display="none"
    sectionVerMapa.style.display="none"

    avatares.forEach((avatars)=>{
        opcionDeAvatares =  `<input type="radio" name="avatar" id="${avatars.nombre}" />
        <label class="tarjeta-avatar"for="${avatars.nombre}">
        <p class="card-title">"${avatars.nombre}"</p>
        <img src="${avatars.foto}" alt="${avatars.nombre}">
        </label> `
        contenedorTarjetas.innerHTML+=opcionDeAvatares 

        inputElquemado = document.getElementById("El quemado🔥")
        inputElAguado = document.getElementById("El aguado💧")
        inputElTerroso = document.getElementById("El terroso🌵")
        inputDarck= document.getElementById("Darck")

})


    sectionReiniciar.style.display="none"

    botonAvatar.addEventListener("click",seleccionarAvatar)
    
    botonReiniciar.addEventListener("click",reiniciarJuego)

    unirseAlJuego()
}


function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        console.log(res)
    })
}

function seleccionarAvatar() {
    
    sectionEleccionAvatar.style.display="none"    
    
    
    if (inputElquemado.checked)
    {spanAvatarElement.innerHTML =inputElquemado.id
        avatarJugador= inputElquemado.id
    }else if (inputElAguado.checked){
        spanAvatarElement.innerHTML =inputElAguado.id
        avatarJugador=inputElAguado.id
    }else if (inputElTerroso.checked){
        spanAvatarElement.innerHTML =inputElTerroso.id
        avatarJugador=inputElTerroso.id
    }   else if (inputDarck.checked){
        spanAvatarElement.innerHTML =inputDarck.id
        avatarJugador=inputDarck.id
    }   
    else { alert("debes elegir un avatar 🔥💧🌵")
   }
   extraerAtaques(avatarJugador)

   sectionVerMapa.style.display="flex"
    iniciarMapa()
  
}
function extraerAtaques(avatarJugador){
    let ataques 
    for (let i= 0; i< avatares.length; i ++ ){

        if(avatarJugador === avatares[i].nombre){
            ataques= avatares[i].ataques
        }
        
        }
    mostrarAtaques(ataques)

}
function mostrarAtaques(ataques){
       ataques.forEach((ataque)=>{
        ataqueDeAvatares= `<button id= ${ataque.id} class="boton-ataque BtAtaques">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML+=ataqueDeAvatares
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones= document.querySelectorAll('.BtAtaques')
    
    
}
function secuenciaAtaques(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            if (e.target.textContent === '🔥'){
                ataqueAvatar.push("Fuego")
                boton.style.background= '#112f58'
                boton.disabled=true
                
            }
            else if  (e.target.textContent === '💧'){
                ataqueAvatar.push("AGUA")
                boton.style.background= '#112f58'
                boton.disabled=true
                
            }
            else  {
                ataqueAvatar.push("TIERRA")
                boton.style.background= '#112f58'
                boton.disabled=true
            
        }
            ataqueAleatorioRival()

        })
        
    })
    
}

function seleccionRival(enemigo){
    
    // let rivalAleatorio= aleatorio(0,avatares.length -1)
    spanRival.innerHTML =enemigo.nombre
    ataquesRivales=enemigo.ataques
    // [rivalAleatorio].nombre
    // // ataquesRivales= avatares[rivalAleatorio].ataques 
    secuenciaAtaques()
}

function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(0,ataquesRivales.length-1)

    if (ataqueAleatorio== 0 || ataqueAleatorio== 1 ){
        ataqueRival.push("FUEGO")
} else if(ataqueAleatorio== 3|| ataqueAleatorio== 4) {
       ataqueRival.push("AGUA")
} else{
       ataqueRival.push("TIERRA")
}
iniciarCombate()

}
function iniciarCombate(){
    if (ataqueAvatar.length === 5){
        combate()
    }
}
function indexOponentes(jugador, enemigo){
    indexAtaqueAvatar=ataqueAvatar[jugador]
    indexAtaqueRival=ataqueRival[enemigo]
}
function combate(){
    for (let index = 0; index < ataqueAvatar.length; index++) {
        if (ataqueAvatar[index]===ataqueRival[index]){
            indexOponentes(index, index)
            crearMensaje("EMPATE");
        }
        else if (ataqueAvatar[index]==="FUEGO"&& ataqueRival[index]=="TIERRA"){
        indexOponentes(index, index);
        crearMensaje("GANASTE");
        victoriasAvatar++;
        spanVidasAvatar.innerHTML=victoriasAvatar
        } else if (ataqueAvatar[index]==="AGUA"&& ataqueRival[index]==="FUEGO"){
            indexOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasAvatar++;
            spanVidasAvatar.innerHTML=victoriasAvatar
        }else{
            indexOponentes(index, index);
            crearMensaje("PERDISTE", mensaje.style.background="red");
            victoriasRival++;
            spanVidasRival.innerHTML=victoriasRival;
        }
    }
revisarVidas()
}
function revisarVidas() {
        if(victoriasAvatar == victoriasRival){
        crearMensajeFinal("EMPATE")
    }
        else if(victoriasAvatar>victoriasRival){
            crearMensajeFinal("GANASTEE!!")
    }
        else{
            crearMensajeFinal("TU PIERDES")
        }
    }   
function crearMensaje(resultados)
{
    
    let nuevoAtaqueAvatar=document.createElement("p")
    let nuevoAtaqueRival=document.createElement("p")
    
    sectionMensajes.innerHTML= resultados
    nuevoAtaqueAvatar.innerHTML=indexAtaqueAvatar
    nuevoAtaqueRival.innerHTML=indexAtaqueRival
    
    mensajeAtaqueAvatar.appendChild(nuevoAtaqueAvatar)
    mensajeAtaqueRival.appendChild(nuevoAtaqueRival)
}

function crearMensajeFinal(resultadoFinal){
        
        sectionMensajes.innerHTML=resultadoFinal 
        
         sectionReiniciar.style.display="block"
        
        
        }
function reiniciarJuego(){
    location.reload()

}

function aleatorio(min, max){ 
    return Math.floor( Math.random() * (max - min + 1) + min)
}

function pintarCanva(){

    avatarObjeto.x = avatarObjeto.x + avatarObjeto.velocidadx
    avatarObjeto.y = avatarObjeto.y + avatarObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height  )
    lienzo.drawImage(mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
        )
    avatarObjeto.pintarAvatar()
    el_aguadoEnemigo.pintarAvatar()
    el_quemadoEnemigo.pintarAvatar()
    el_terrosoEnemigo.pintarAvatar()
    darckangelEnemigo.pintarAvatar()
    if (avatarObjeto.velocidadx !==0 || avatarObjeto.velocidadY !== 0)
    {revisarColision(el_quemadoEnemigo)
    revisarColision(el_aguadoEnemigo)
    revisarColision(el_terrosoEnemigo)
    revisarColision(darckangelEnemigo)
}
}
function moverDerecha(){
   
    avatarObjeto.velocidadx= 5
}
function moverIzquierda(){
    
   avatarObjeto.velocidadx= - 5
    
}
function moverAbajo(){
    
   avatarObjeto.velocidadY=  5
    
}
function moverArriba(){
   
    avatarObjeto.velocidadY= - 5
    
}
function detenerMovimiento(){
    
    avatarObjeto.velocidadx=0
    avatarObjeto.velocidadY=0

}
function sePresionoTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break  
        default:
            break;
    }

    console.log(event.key);
}
function iniciarMapa(){
    avatarObjeto=obtenerObjAvatar(opcionDeAvatares)
    intervalo= setInterval(pintarCanva, 50)
    
    window.addEventListener("keydown", sePresionoTecla)

    window.addEventListener("keyup", detenerMovimiento)

}

function obtenerObjAvatar(){
    for (let i= 0; i< avatares.length; i ++ ){

        if(avatarJugador === avatares[i].nombre){
            return avatares[i]
        }
        
        }
}

function revisarColision(enemigo){
    const arribaEnemigo=enemigo.x
    const abajoEnemigo=enemigo.y + enemigo.alto
    const derechaEnemigo= enemigo.x + enemigo.ancho
    const izquierdaEnemigo=enemigo.x

    const arribaAvatar= avatarObjeto.x
    const abajoAvatar= avatarObjeto.y + avatarObjeto.alto
    const derechaAvatar= avatarObjeto.x + avatarObjeto.ancho
    const izquierdaAvatar=avatarObjeto.x
    
    if (
        abajoAvatar< arribaEnemigo  ||
        arribaAvatar>abajoEnemigo   ||
        derechaAvatar< izquierdaEnemigo ||
        izquierdaAvatar>derechaEnemigo
    ){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionEleccion.style.display="flex"
    sectionVerMapa.style.display="none"
    seleccionRival(enemigo)

    // alert("hay colicion!!" +enemigo.nombre)
}

window.addEventListener("load", iniciarJuego)