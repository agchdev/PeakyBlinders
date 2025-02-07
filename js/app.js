document.addEventListener("DOMContentLoaded", () => {
    
    const cursor = document.getElementById("customCursor");
    const cursorText = document.getElementById("text_cursor");
    const netflix = document.getElementById("netflix");
    const btnHeader = document.getElementById("btnHeader");
    const videoYT = document.getElementById("videoYT");
    const nav = document.getElementById("header");
    const cerrarHeader = document.getElementById("cerrarHeader");
    const liHeader = document.querySelectorAll(".cursorHover")

    // Al mover el mouse, actualizamos la posición del cursor
    window.addEventListener("mousemove", (e) => {
        // Mostramos el cursor (por si estaba oculto)
        cursor.style.opacity = 1;

        // Posicionamos el div en la posición del mouse
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Si el mouse sale de la ventana, ocultamos el cursor
    window.addEventListener("mouseleave", () => {
        cursor.style.opacity = 0;
    });

    cerrarHeader.addEventListener("click", () => {
        nav.classList.add("animate-closeHeader")
        nav.classList.remove("animate-openHeader")
    })

    btnHeader.addEventListener("click", () => {
        nav.classList.add("animate-openHeader")
        nav.classList.remove("animate-closeHeader")
        nav.classList.remove("hidden")
    })

    encogeAgranda(btnHeader, false, "")
    encogeAgranda(cerrarHeader, false, "Cerrar")
    encogeAgranda(netflix, true, "Click")
    encogeAgranda(videoYT, true, "Play")

    liHeader.forEach(el => {
        encogeAgranda(el, true, "")
    })

    function encogeAgranda(el, muestra, text){
        el.addEventListener("mouseenter", () => {
            agrandarMouse(el, muestra, text)
        })
        el.addEventListener("mouseleave", () => {
            encogerMouse(el, muestra)
        })
    }

    // Agrandar mouse cuando me interese
    function agrandarMouse(el, muestra, texto){
        cursor.classList.add("animate-scaleCircle")
        cursor.classList.add("h-20")
        cursor.classList.add("w-20")
        let text = el.textContent
        if(muestra) cursorText.text=`${texto}`
        cursor.style.color = "white";
        if(texto != "") cursor.innerText = `${texto}`
    }

    // Encoger mouse cuando me interese
    function encogerMouse(el, muestra){
        cursor.classList.remove("animate-scaleCircle")
        cursor.classList.add("animate-descaleCircle")
        cursor.classList.remove("h-20")
        cursor.classList.remove("w-20")
        cursor.innerText = ``
        if(muestra) cursorText.text=``
    }

})