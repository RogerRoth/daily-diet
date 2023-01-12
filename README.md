<h1 align="center">Dayly Diet</h1>

<p align="center">
<img src="/src/assets/logo@2x.png" alt="Dayly Diet logo"/>
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/rogerroth/ignite-teams"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/>
</p>

## ▶️ Projeto

Este App tem como objetivo realizar o cadastro de refeições, que contém as seguintes funcionalidades:
- Adicionar uma nova refeição
- Editar uma refeição
- Remover uma refeição da listagem
- Mostrar as estatísticas do progresso da dieta
- Navegação entre telas em pilha
- Armazenamento local das refeições

## Tecnologias e Estrutura

- `styled components` para a estilização dos componentes, foi criado um arquivo `theme` a fim de centralizar cores, fontes e tamanhos.
- `expo google fonts` utilização do expo para instalar e gerenciar o carregamento das fontes.
- `componentes` foram criados diversos componentes, com o objetivo de padronizar a aplicação e também ganhar tempo no desenvolvimento.
- `propriedades` criação de propriedades para os componentes bem como extender o uso das já existentes.
- `hooks` utilização do `useState`, `useEffect`, `useTheme`.
- `navegação` adotado o `stack navigator` como estratégia de navegação entre as telas do app.
- `babel plugin module resolver` para fazer o mapeamento das pastas mais utilizadas no projeto.
- `async storage` informações salvas utilizando o armazenamento interno do dispositivo.
- `tratamento de exceções` criação de uma classe `AppError` para filtrar os erros da aplicação gerados pela aplicação ou por inserção de dados indevida.
- `useRef` criação de referências para componentes específicos, possibilitando acessar propriedades e alterá-las sem a necessidade de renderizar novamente a interface.

##📱 Layout do Projeto
<h2 align="center">
    <img alt="tela_mobile_0" title="#mobile_0" src="/images/mobile_0.png" width="250px" />
    <img alt="tela_mobile_1" title="#mobile_1" src="/images/mobile_1.png" width="250px" />
    <img alt="tela_mobile_2" title="#mobile_2" src="/images/mobile_2.png" width="250px" />
    <img alt="tela_mobile_3" title="#mobile_3" src="/images/mobile_3.png" width="250px" />
    <img alt="tela_mobile_4" title="#mobile_4" src="/images/mobile_4.png" width="250px" />
    <img alt="tela_mobile_5" title="#mobile_5" src="/images/mobile_5.png" width="250px" />
    <img alt="tela_mobile_6" title="#mobile_6" src="/images/mobile_6.png" width="250px" />
    <img alt="tela_mobile_7" title="#mobile_7" src="/images/mobile_7.png" width="250px" />
</h2>

## 📲 Executando o projeto

### ✔️ Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `npm`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;

Se quiser testar as instalações, rodar os comandos abaixo separadamente deve mostrar as respectivas versões.

```bash
git --version
node --version
npm --version
```

Então com o `npm` instalado podemos instalar o `expo` e checar a versão:
```bash
npm install --global expo-cli
expo --version
```

### 🐙 Clonando o projet
Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:
```bash
git clone https://github.com/RogerRoth/daily-diet.git
```

### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```bash
npm install
```

Então podemos rodar o projeto:
```bash
expo start
```
Pronto, agora o app você deve ver o app rodando.

## License

[MIT](LICENSE.md)