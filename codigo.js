function aleatorio(min, max){ return Math.floor( Math.random() * (max - min + 1) + min)}  

function eleccion(jugada) {
let resultado = ""
if(jugada ==1) { resultado = "PIEDRA ✊"} 
else if(jugada ==2){ resultado = "PAPEL 🤚"} 
else if(jugada == 3) {resultado ="TIJERA ✌"}
else { resultdo ="NO"}
return resultado  }

let jugador = 0
let  pc = 0
let  triunfos = 0
let  perdidas = 0

while (triunfos < 3 && perdidas < 3 ) { 
pc = aleatorio(1,3)
jugador = prompt("elige: 1 piedra, 2 papel , 3 tijeras")
alert("tu eliges." + eleccion(jugador))
 alert("pc elige. " + eleccion(pc))


 if(pc == jugador){ 
   alert("empate")
}  else if( jugador ==1 && pc== 3) {
   alert("ganaste")
   triunfos = triunfos + 1
}  else if (jugador ==2 && pc== 1) {
   alert("ganaste") 
   triunfos = triunfos + 1
} else if (jugador ==3 && pc ==2) {
   alert("ganaste")
   triunfos = triunfos + 1
}
 else {
   alert("perdiste"); 
   perdidas + perdidas + 1 }
}
   alert (" ganaste " + triunfos + " veces. perdiste " + perdidas + " veces.")
