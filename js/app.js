document.addEventListener("DOMContentLoaded", () => {
    
    const cursor = document.getElementById("customCursor");
    const cursorText = document.getElementById("text_cursor");
    const netflix = document.getElementById("netflix");
    const btnHeader = document.getElementById("btnHeader");
    const videoYT = document.getElementById("videoYT");
    const nav = document.getElementById("header");
    const cerrarHeader = document.getElementById("cerrarHeader");
    const actRiv = document.getElementById("actRiv");
    const womenPow = document.getElementById("womenPow");
    const michaelShelbi = document.getElementById("michaelShelbi");
    const putos = document.getElementById("putos");
    const disparos = document.getElementById("disparos");
    const pBlinder = document.getElementById("pBlinder");
    const liHeader = document.querySelectorAll(".cursorHover");

    const textPutos = ["P****","*U***","**T**","***O*","****S"]

    animatePutos();
    
    // Al mover el mouse, actualizamos la posición del cursor
    window.addEventListener("mousemove", (e) => {
        // Mostramos el cursor (por si estaba oculto)
        cursor.style.opacity = 1;
        
        // Posicionamos el div en la posición del mouse
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    const overlay = document.querySelector(".overlay");
    let x = 0
    let y = 0
    let tam = 200;
    let finTam = 0;

    function efectoAntorcha(tam){
        setTimeout(() => {
            finTam = Math.floor(Math.random() * (tam - (tam-200) + 1)) + (tam-100);
        }, 2000);
    }

    function luzEffect(x,y,overlay,tam){
        efectoAntorcha(tam)
        let maskStyle = `radial-gradient(circle ${finTam}px at ${x}px ${y}px, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 70%)`;

        overlay.style.maskImage = maskStyle;
        overlay.style.webkitMaskImage = maskStyle;
    }

    pBlinder.addEventListener("mouseenter", () => {
        console.log(pBlinder.offsetWidth)
        document.addEventListener("mousemove", (e) => {
                x = e.clientX;
                y = e.clientY-500;
            if(pBlinder.offsetWidth>1024 && pBlinder.offsetWidth<1280){
                x = e.clientX;
                y = e.clientY-200;
                tam = 400;
            }else if(pBlinder.offsetWidth>1280){
                x = e.clientX;
                y = e.clientY;
                tam = 1000;
            }
            luzEffect(x,y,overlay,tam)
        });

    })
    
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
    
    disparos.addEventListener("click", (e) => {
        let bullet = document.createElement("img");
        bullet.src = "img/bullet.png";
        bullet.style.position = "absolute";
        bullet.style.width = "5%";

        console.log(e.clientX)
        let x = e.clientX-47;
        let y = e.clientY-43;

        bullet.style.top = `${y}px`;
        bullet.style.left = `${x}px`;

        disparos.append(bullet);

        setTimeout(() => {
            bullet.remove();
        }, 2000);
    })
    
    
    actRiv.addEventListener("mouseenter", () => {
        document.querySelector("#actRiv > div:first-child").style.transform = "translate(0px, -100%)"
        document.querySelector("#actRiv > div:nth-child(2)").style.transform = "translate(0%, 100%)"
    })
    actRiv.addEventListener("mouseleave", () => {
        document.querySelector("#actRiv > div:first-child").style.transform = "translate(0px, 0%)"
        document.querySelector("#actRiv > div:nth-child(2)").style.transform = "translate(0px, 0%)"
    })
    
    womenPow.addEventListener("mouseenter", () => {
        document.querySelector("#womenPow > div:first-child").style.transform = "translate(0px, -100%)"
        document.querySelector("#womenPow > div:nth-child(2)").style.transform = "translate(0%, 100%)"
    })
    womenPow.addEventListener("mouseleave", () => {
        document.querySelector("#womenPow > div:first-child").style.transform = "translate(0px, 0%)"
        document.querySelector("#womenPow > div:nth-child(2)").style.transform = "translate(0px, 0%)"
    })
    
    michaelShelbi.addEventListener("mouseenter", () => {
        document.querySelector("#michaelShelbi > div:first-child").style.transform = "translate(0px, -100%)"
        document.querySelector("#michaelShelbi > div:nth-child(2)").style.transform = "translate(0%, 100%)"
    })
    michaelShelbi.addEventListener("mouseleave", () => {
        document.querySelector("#michaelShelbi > div:first-child").style.transform = "translate(0px, 0%)"
        document.querySelector("#michaelShelbi > div:nth-child(2)").style.transform = "translate(0px, 0%)"
    })
    
    // ENCONGER AGRANDAR 
    encogeAgranda(btnHeader, false, "")
    encogeAgranda(womenPow, true, "Hover")
    encogeAgranda(michaelShelbi, true, "Hover")
    encogeAgranda(actRiv, true, "Hover")
    encogeAgranda(cerrarHeader, false, "Cerrar")
    encogeAgranda(netflix, true, "Click")
    encogeAgranda(videoYT, true, "Play")
    
    liHeader.forEach(el => {
        encogeAgranda(el, true, "")
    })

    let pos = 0;
    function animatePutos(){
        setInterval(() => {
            putos.innerText = `${textPutos[pos]}`;
            pos++;
            if(pos == 5) pos = 0
        }, 800);
    }
    
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