import "./style.css";

const generarNumeroAleatorio = () : number => Math.floor(Math.random() * 100);

const numeroParaAcertar : number = generarNumeroAleatorio();
console.log(numeroParaAcertar);

type Estado =
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_SECRETO_ES_MENOR"
  | "EL_NUMERO_SECRETO_ES_MAYOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER";

var intentos = 0;
const MAX_INTENTOS = 5;

const muestraMensajeDeComprobacion = (texto : string, estado: Estado) => {
  let mensaje = "";

  switch (estado) {
    case "NO_ES_UN_NUMERO":
      mensaje = `${texto} no es un número, intenta nuevamente`;
      break;
    case "EL_NUMERO_SECRETO_ES_MENOR":
      mensaje = `Lo siento, ${texto} no es el número correcto. Intenta con un número MENOR`;
      break;
    case "EL_NUMERO_SECRETO_ES_MAYOR":
      mensaje = `Lo siento, ${texto} no es el número correcto. Intenta con un número MAYOR`;
      break;
    case "ES_EL_NUMERO_SECRETO":
      mensaje = `Felicitacione!! Has adivinado, ${texto} era el número secreto!`;
      break;
    case "GAME_OVER":
      mensaje = `Lo siento, has perdido porque alcanzaste el máximo de intentos.`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no debería estar aquí";
      break;
  }
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = mensaje;
  }
};


const comprobarNumero = (texto : string) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if(intentos < MAX_INTENTOS) {
    if(!esUnNumero) {
      return "NO_ES_UN_NUMERO";
    };

    if(numero < numeroParaAcertar) {
      return "EL_NUMERO_SECRETO_ES_MAYOR";
    } else if (numero > numeroParaAcertar) {
      return "EL_NUMERO_SECRETO_ES_MENOR";
    } else {
      return "ES_EL_NUMERO_SECRETO";
    }
  }else{
    return "GAME_OVER";
  };
};

const muestraCantidadDeIntentos = (intentos : number) => {
  const mostrarIntentos = document.getElementById("intentos");

  if (mostrarIntentos) {
    mostrarIntentos.innerHTML = `Intentos: ${intentos} de ${MAX_INTENTOS}`;
  }

};

const sumaIntentos = () => {
  intentos++;
  return intentos;
};

const gestionarGameOver = (estado : Estado) => {
  const boton = document.getElementById("comprobar");
  if (estado === "GAME_OVER") {
    if (boton && boton instanceof HTMLButtonElement) {
      boton.disabled = true;
    }
  }
};

const handleCompruebaClick = () => {
  muestraCantidadDeIntentos(sumaIntentos());
  const elemento = document.getElementById("numero")
  if (elemento && elemento instanceof HTMLInputElement) {
    const texto = elemento.value;
    const estado = comprobarNumero(texto);
    muestraMensajeDeComprobacion(texto, estado);
    gestionarGameOver(estado);
  };
};

const boton = document.getElementById("comprobar");
if (boton) {
  boton.addEventListener("click", handleCompruebaClick);
};
