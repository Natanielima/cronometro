const form = document.getElementById("adicionarRetroativo")
const alterandoHoras = document.getElementById("display-horas")
const alterandoMinutos = document.getElementById("display-minutos")
const alterandoSegundos = document.getElementById("display-segundos")
const alterandoHoras2 = document.getElementById("display-horas-2")
const alterandoMinutos2 = document.getElementById("display-minutos-2")
const alterandoSegundos2 = document.getElementById("display-segundos-2")
const btnIniciar = document.getElementById("Iniciar");
const btnIniciarTemporizador = document.getElementById("IniciarTemporizador")
const btnPausar = document.getElementById("Parar")
const btnReiniciar = document.getElementById("Reiniciar")
const btnReiniciarTemporizador = document.getElementById("ReiniciarTemporizador")
const btnGravar = document.getElementById("gravar")
const btnGravarTemporizador = document.getElementById("gravarTemporizador")
let timer;
let timerNegativo;


form.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const valorHorasAlteradas2 = ((evento).target.elements['horas'].value)
    const valorMinutosAlterados2 = ((evento).target.elements['minutos'].value)
    const valorSegundosAlterados2 = ((evento).target.elements['segundos'].value)

    if(valorHorasAlteradas2<10){
        alterandoHoras2.innerHTML= "0"+valorHorasAlteradas2;
    } else{
        alterandoHoras2.innerHTML=valorHorasAlteradas2
    }
    if(valorHorasAlteradas2===""){
        alterandoHoras2.innerHTML= "00";
    }

    if(valorMinutosAlterados2<10){
        alterandoMinutos2.innerHTML= "0"+valorMinutosAlterados2;
    } else{
        alterandoMinutos2.innerHTML=valorMinutosAlterados2;
    }

    if(valorMinutosAlterados2===""){
        alterandoMinutos2.innerHTML= "00";
    }


    if(valorSegundosAlterados2<10){
        alterandoSegundos2.innerHTML= "0"+valorSegundosAlterados2;
    } else{
        alterandoSegundos2.innerHTML=valorSegundosAlterados2;
    }

    if(valorSegundosAlterados2===""){
        alterandoSegundos2.innerHTML= "00";
    }
    ((evento).target.elements['horas'].value)="";
    ((evento).target.elements['minutos'].value)="";
    ((evento).target.elements['segundos'].value)="";

    
})



btnIniciar.addEventListener("click", (iniciar)=>{
    iniciar.preventDefault()
    timer = setInterval(cronometropositivo, 1000);
    btnIniciar.setAttribute("disabled","disabled")
});

const h = alterandoHoras;
const m = alterandoMinutos;
const s = alterandoSegundos;



function cronometropositivo() {     
                    s.innerHTML++;
                    if (s.innerHTML<10){
                        s.innerHTML="0"+s.innerHTML
                        }
                    if (s.innerHTML == 60) {
                    m.innerHTML++;
                    if (m.innerHTML<10){
                        m.innerHTML="0"+m.innerHTML
                        }
                    s.innerHTML = 0;

                    }
                    if (m.innerHTML == 60) {
                    h.innerHTML++;
                    if (h.innerHTML<10){
                        h.innerHTML="0"+h.innerHTML
                        }
                    s.innerHTML = 0;
                    m.innerHTML = 0;
                    }
                    if(h.innerHTML==99){
                        clearInterval(timer);
                        btnIniciar.removeAttribute("disabled");
                        s.innerText = '00';
                        m.innerText = '00';
                        h.innerText = '00';
                    }    
}


btnPausar.addEventListener("click",(pausando)=>{
    pausando.preventDefault()
    clearInterval(timer);
    btnIniciar.removeAttribute("disabled");
})

btnReiniciar.addEventListener("click", (outroteste)=>{
        outroteste.preventDefault()
        clearInterval(timer);
        btnIniciar.removeAttribute("disabled");
        s.innerText = '00';
        m.innerText = '00';
        h.innerText = '00';
})


btnGravar.addEventListener("click", (gravando)=> {
    gravando.preventDefault();
    criaElemento(alterandoHoras.innerHTML,alterandoMinutos.innerHTML,alterandoSegundos.innerHTML)
})

function criaElemento(horas, minutos,segundos){
   const novoItem = document.createElement("tr");
   novoItem.classList.add("tabela-cal-negrito");

   const novoSegundo = document.createElement("td");
   novoSegundo.innerHTML=segundos

   const novoMinuto = document.createElement("td");
   novoMinuto.innerHTML=minutos

   const novoHora = document.createElement("td");
   novoHora.innerHTML=horas
   
   
   novoItem.appendChild(novoHora);
   novoItem.appendChild(novoMinuto);
   novoItem.appendChild(novoSegundo);
   
    

   const lista = document.getElementById("lista");
   lista.appendChild(novoItem)
}

btnGravarTemporizador.addEventListener("click", (gravandoTemporizador)=> {
    gravandoTemporizador.preventDefault();
    criaElementoTemporizador(alterandoHoras2.innerHTML,alterandoMinutos2.innerHTML,alterandoSegundos2.innerHTML)
})

function criaElementoTemporizador(horas, minutos,segundos){
    const novoItem = document.createElement("tr");
    novoItem.classList.add("tabela-cal-negrito");
 
    const novoSegundo = document.createElement("td");
    novoSegundo.innerHTML=segundos
 
    const novoMinuto = document.createElement("td");
    novoMinuto.innerHTML=minutos
 
    const novoHora = document.createElement("td");
    novoHora.innerHTML=horas
    
    
    novoItem.appendChild(novoHora);
    novoItem.appendChild(novoMinuto);
    novoItem.appendChild(novoSegundo);
    
     
 
    const lista = document.getElementById("listaTemporizador");
    lista.appendChild(novoItem)
 }

 btnIniciarTemporizador.addEventListener("click", (iniciarTemporizador)=>{
    iniciarTemporizador.preventDefault()
    timerNegativo = setInterval(cronometroNegativo, 1000);
    btnIniciarTemporizador.setAttribute("disabled","disabled")
});
btnReiniciarTemporizador.addEventListener("click", (ReiniciarTemporizador)=>{
    ReiniciarTemporizador.preventDefault()
    clearInterval(timerNegativo);
    btnIniciarTemporizador.removeAttribute("disabled");
    st.innerText = '00';
    mt.innerText = '00';
    ht.innerText = '00';
})

const ht = alterandoHoras2;
const mt = alterandoMinutos2;
const st = alterandoSegundos2;



function cronometroNegativo() { 
    if(st.innerHTML>0 && mt.innerHTML==0 && ht.innerHTML==0){
        st.innerHTML--;
        if (st.innerHTML<10){
            st.innerHTML="0"+st.innerHTML
            }
        if(st.innerHTML==0){
            return true
        }
    }
    if(st.innerHTML>0 || mt.innerHTML>0 && ht.innerHTML==0){
        if(mt.innerHTML>0){
            if(st.innerHTML==0){
                st.innerHTML="59"
                mt.innerHTML--;
                if (st.innerHTML<10){
                    st.innerHTML="0"+st.innerHTML
                    }
                if (mt.innerHTML<10){
                    mt.innerHTML="0"+mt.innerHTML
                    }    
            }
            st.innerHTML--;                            
        }    
    }
    if(st.innerHTML>0 || mt.innerHTML>0 || ht.innerHTML>0){
        if(ht.innerHTML>0){
            if(mt.innerHTML>=0){
                if(st.innerHTML==0){
                    st.innerHTML="59"
                }
                if(mt.innerHTML==0){
                    mt.innerHTML="59"
                    ht.innerHTML--;
                    if (ht.innerHTML<10){
                        ht.innerHTML="0"+ht.innerHTML
                    }
                    } 
            }            


                
        }                                                  
    }

}


 




