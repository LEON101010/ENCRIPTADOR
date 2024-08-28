const texArea = document.querySelector(".text-area");
cons mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
}

function encriptar(stringEncriptada){
    let matrizCodigo= [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
}
for(let i = 0; i < matrizCodigo; i++){
    if(stringEncriptada.includes(matrizCodigo)[i][0]){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo)[i][0],matrizCodigo[i][1]
    }

}
return stringEncriptada