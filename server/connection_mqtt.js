/*import {Message,Client} from 'paho-mqtt';

const brokerUrl ="192.168.148.12";
const port = 9001;
const clientId = "client-" + Math.random();
let setpoint = 0;

const client = new Client(brokerUrl,port,clientId);

export function connect(){

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
        subscribe();
        return true;
    }else{
        return false;
    }

    
}
export {brokerUrl};
export {client};
function onSucess(){
    console.log("Conectado com Sucesso");
}

function onFailure(){
    console.log("Falha ao conectar");
   
}

function subscribe(){
    client.subscribe("topic_mqtt_temperaturaalvo_reator");
    client.subscribe("topic_mqtt_powerOnOff_reator");
}

function onMessage(client,userdata,message){

    
    if(message.topic == "topic_mqtt_powerOnOff_reator" ){
        if(message.payload = '1'){
            console.log('sistema iniciado mediante comando');
        }else{
            console.log('sistema encerrado mediante comando');
        }
    }if(message.topic == "topic_mqtt_temperaturaalvo_reator"){
        setpoint = message.payload;
    };

}

export function pubInfos(topic,message){
    const payload = new Message(message);
    payload.destinationName = topic;
    console.log(payload.payloadString);
    client.send(payload);
}*/

