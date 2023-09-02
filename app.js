//practicanto, switch y template strings

let numeroMaquina = Math.floor((Math.random() * 10) + 1);
console.log(numeroMaquina);


//volverJugar = prompt('Desea jugar debnuevo').toUpperCase;

let seleccionarJuego = prompt(`
Seleccione el juego que desea jugar:
1: adivinar el numero
2: adivinar la palabra
3: otro 
`);

switch(seleccionarJuego) {

    case "1":
        
        let numeroUsuario = parseInt(prompt('Adivine el numero, solo tiene 3 vidas'));
        let vidas = 3;
        console.log(numeroUsuario);

        while(numeroUsuario !== numeroMaquina && vidas > 1) {
            let mensaje = (numeroMaquina > numeroUsuario ? "el numero es mayor.":"el numero es menor."); //operador ternario
            numeroUsuario = parseInt(prompt('Vuelva a intentarlo, ' + mensaje));
            vidas --;
        }

        if (numeroMaquina === numeroUsuario){
            console.log("Ganaste 😃");
        }else{
            console.log("Perdiste 😬");
        }
        //volverJugar = prompt('Desea jugar debnuevo').toUpperCase;

    break;

    case "2":
        alert("proximamente");
        location.reload();
    break;

    case "3":
        alert("proximamente");
        location.reload();
    break;
};