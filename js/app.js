document.addEventListener("DOMContentLoaded", () => {
    
    const cursor = document.getElementById("customCursor");
    const cursorText = document.getElementById("text_cursor");
    const netflix = document.getElementById("netflix");
    const btnHeader = document.getElementById("btnHeader");
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
    })


    encogeAgranda(cerrarHeader, false)
    encogeAgranda(netflix, true)

    liHeader.forEach(el => {
        encogeAgranda(el, true)
    })

    function encogeAgranda(el, muestra){
        el.addEventListener("mouseenter", () => {
            agrandarMouse(el, muestra)
        })
        el.addEventListener("mouseleave", () => {
            encogerMouse(el, muestra)
        })
    }

    // Agrandar mouse cuando me interese
    function agrandarMouse(el, muestra){
        cursor.classList.add("animate-scaleCircle")
        cursor.classList.add("h-20")
        cursor.classList.add("w-20")
        let text = el.textContent
        console.log(text)
        if(muestra) cursorText.text=`${text}`
    }

    // Encoger mouse cuando me interese
    function encogerMouse(el, muestra){
        cursor.classList.remove("animate-scaleCircle")
        cursor.classList.add("animate-descaleCircle")
        cursor.classList.remove("h-20")
        cursor.classList.remove("w-20")
        if(muestra) cursorText.text=``
    }

})