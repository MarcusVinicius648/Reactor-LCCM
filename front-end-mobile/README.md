# 🔬 Reactor Control - IoT SystemMonitoramento e controle de um reator para síntese de materiais#

## 📌 Sobre o ProjetoEste projeto tem como objetivo desenvolver um sistema de controle remoto para um reator de síntese de materiais no Laboratório de Crescimento e Caracterização de Materiais Cristalinos.A aplicação permite o monitoramento e controle do reator via protocolo MQTT, possibilitando ajustes em tempo real dos parâmetros da rota de combustão.##

# ⚙️ Principais Funcionalidades

1️⃣ Autenticação de Usuário 🔑- Sistema de login e controle de acesso.

2️⃣ Controle do Reator ⚙️- Ligar e desligar o reator remotamente.- Ajuste da temperatura de síntese conforme necessário.

3️⃣ Monitoramento em Tempo Real 📊- Exibição gráfica da temperatura e parâmetros do reator.- Atualização dinâmica dos dados via MQTT.

4️⃣ Histórico de Síntese 📜- Acompanhamento dos experimentos realizados.- Visualização de gráficos e informações úteis.- Opção para download dos dados em TXT e JSON.#

## 🏗 Tecnologias Utilizadas

🔹 Frontend: React Native

🔹 Protocolo de Comunicação: MQTT

🔹 Gerenciamento de Estados: Context API

🔹 Banco de Dados Local: AsyncStorage

🔹 Back-end & IoT: Node.js + Broker MQTT### 🚀 Como Executar o Projeto🔧 Configuração do Ambiente

1️⃣ Instalar dependências:

`npm install`

2️⃣ Iniciar o servidor MQTT:

`cd server`

`npm run dev`

3️⃣ Rodar a aplicação no Expo:

`npx expo start`📱

Escaneie o QR Code que será exibido no navegador para abrir o app no celular.
