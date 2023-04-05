const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const lancamento = "01 dec 2023"

function countdown(){
    const dataLanc =  new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24) + 'D';
    const finalHora = Math.floor(segTotal / 60 / 60) % 24 + 'H';
    const finalMinutos = Math.floor(segTotal / 60) % 60 + 'M';
    const finalSegundos = Math.floor(segTotal) % 60 + 'S';

    dia.innerHTML = finalDias 
    hora.innerHTML = formatoTempo(finalHora)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)


}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}
countdown();
setInterval(countdown, 1000)

var quinta = document.getElementById('quinta');
quinta.addEventListener("mouseover" , function(){
    this.style.boxShadow = "10px 10px #514988";
}
);
quinta.addEventListener("mouseout", function(){
    this.style.boxShadow = "";
}
);

var sexta = document.getElementById('sexta');
sexta.addEventListener("mouseover" , function(){
    this.style.boxShadow = "10px 10px #514988";
}
);
sexta.addEventListener("mouseout", function(){
    this.style.boxShadow = "";
}
);

var sabado = document.getElementById('sabado');
sabado.addEventListener("mouseover" , function(){
    this.style.boxShadow = "10px 10px red";
}
);
sabado.addEventListener("mouseout", function(){
    this.style.boxShadow = "";
}
);
var domingo = document.getElementById('domingo');
domingo.addEventListener("mouseover" , function(){
    this.style.boxShadow = "10px 10px #514988";
}
);
domingo.addEventListener("mouseout", function(){
    this.style.boxShadow = "";
}
);