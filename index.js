function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}

const titulo = document.getElementById('efeito-maquina'); 
typeWriter(titulo)

/* AnimaÃ§ÃĢo Scroll */
AOS.init({
    duration: 1000,
});
