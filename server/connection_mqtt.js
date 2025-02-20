import {Client} from 'paho-mqtt';

const brokerUrl ="192.168.148.12";
const port = 9001;
const clientId = "client-" + Math.random();

export function connect(){

    const client = new Client(brokerUrl,port,clientId);

    if (client.isConnected()) {
        console.log("Já conectado, desconectando...");
        client.disconnect();
    }

    console.log('Conectando no broker: '+brokerUrl+" na porta: "+port)
    client.connect({
        onSuccess:onSucess,
        onFailure:onFailure,

    });
    
    if(client.isConnected()){
        return true;
    }else{
        return false;
    }

    
}
export {brokerUrl}
function onSucess(){
    console.log("Conectado com Sucesso");
    
}

function onFailure(){
    console.log("Falha ao conectar");
   
}


