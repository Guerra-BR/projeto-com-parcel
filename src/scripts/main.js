/*AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual

    const diasEmMS = 1000 * 60 * 60 * 24
    const horasEmMS = 1000 * 60 * 60
    const minutosEmMS = 1000 * 60

    const diasAteOEvento =  Math.floor(distanciaDoEvento/ diasEmMS)
    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMS) / horasEmMS)
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMS) / minutosEmMS)
    const segundosAteOEvento = Math.floor((diasAteOEvento % minutosEmMS / 1000))

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaDoEvento < 0){
        clearInterval(contaHoras)
        document.getElementById('contador').innerHTML = `... ops, ele ja expirou`

    }
}, 1000)*/

AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);