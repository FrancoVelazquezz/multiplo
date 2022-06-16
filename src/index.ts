import "./styles.css";

function esMultiplo(n1:number, n2:number):boolean {
  if(n1 / n2 === 0){
    return true
  } else {
    return false
  }
}
let n1 = Number(prompt("Ingrese primer numero: "));
let n2 = Number(prompt("Ingrese segundo numero: "));

console.log(esMultiplo(n1, n2));