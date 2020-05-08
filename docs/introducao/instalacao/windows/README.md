---
next: false
prev: ../../

meta:
  - name: description
    content: Instalação do Flutter no Windows.
---

# Instalação no Windows

## Requisitos do sistema

Para instalar e executar o Flutter, seu ambiente de desenvolvimento deve cumprir os seguintes requisitos mínimos:

- **Sistema Operacional**: Windows 7 SP1 ou mais atual (64-bit).
- **Espaço em disco**: 400 MB (não incluí o espaço em disco necessário para IDE/ferramentas).
- **Ferramentas**: O Flutter depende das seguintes ferramentas estarem disponíveis no seu ambiente.

  - [Windows PowerShell 5.0](https://docs.microsoft.com/pt-br/powershell/scripting/install/installing-windows-powershell?view=powershell-7) ou mais recente (já vem pré-instalado com o Windows 10)
  - [Git para Windows](https://git-scm.com/download/win) 2.x, com a opção **Usar Git do Prompt de Comandos do Windows**

    Se o Git para Windows já estiver instalado, certifique-se que você pode executar comandos do <code>git</code> pelo prompt ou PowerShell.

## Obtenha o SDK do Flutter

1. Baixe o seguinte pacote de instalação para obter a última release de versão estável do SDK do Flutter:

<link-button link="https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.17.0-stable.zip">flutter_windows_1.17.0-stable.zip</link-button>

Para outros canais de release, e versões mais antigas, veja o [arquivo de SDK](https://flutter.dev/docs/development/tools/sdk/releases).

2. Extraia o arquivo zip e coloque o <code>flutter</code> na localização desejada para o SDK do Flutter (por exemplo, <code>C:\src\flutter</code>; não instale o Flutter em um diretório como <code>C:\Arquivos de Programas</code> que requer privilégios elevados).

Se você não deseja instalar a versão fixa do pacote de instalação, você pode pular os passos 1 e 2. Em vez disso, obtenha o código fonte do [repositório do Flutter](https://github.com/flutter/flutter) no GitHub, e mude as branches ou tags conforme necessário. Por exemplo:

<copyable-code-block content="git clone https://github.com/flutter/flutter.git -b stable"></copyable-code-block>

Agora você está pronto para executar os comandos do Flutter no Console do Flutter!

## Atualize o path

Se você deseja executar os comandos do Flutter em no console comum do Windows, siga esses passos para adicionar o Flutter na a variável de ambiente <code>PATH</code>:

- Na barra de busca do menu Iniciar, digite <code>env</code> e selecione **Editar as varáveis de ambiente para sua conta**.
- Em **Variáveis do usuário** verifique se existe um registro chamado **Path**:
  - Se o registro existir, acrescente o caminho completo até <code>flutter\bin</code> usando <code>;</code> como separador dos valores existentes
  - Se o registro não existir, crie uma nova variável de usuário chamada <code>Path</code> com o caminho completo para <code>flutter\bin</code> como seu valor.

Note que você precisa fechar e reabrir qualquer console do Windows para que as mudanças tenham efeito.

## Execute flutter doctor

De uma janela do console que tenha o diretório do Flutter no path (veja acima), execute o seguinte comando para verificar se existe alguma dependência para a plataforma que você necessita para completar a configuração:

<copyable-code-block dir="C:\src\flutter" content="flutter doctor"></copyable-code-block>

Esse comando verifica seu ambiente e mostra um relatório do estado da sua instalação do Flutter. Verifique cuidadosamente as informações para identificar outros programas que você precise instalar ou tarefas adicionais que você precise realizar.

Por exemplo:

```
[-] Android toolchain - develop for Android devices
  • Android SDK at D:\Android\sdk
  ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
  • Try re-installing or updating your Android SDK,
    visit https://flutter.dev/setup/#android-setup for detailed instructions.
```

As seções seguintes descrevem como realizar essas tarefas e finalizar o processo de instação. Uma vez que você tenha instalado qualquer uma das dependências ausentes, você pode executar novamente o comando <code>flutter doctor</code> para verificar se tudo foi feito corretamente.

::: warning Aviso
A ferramenta <code>flutter</code> usa o Google Analytics para anonimamente reportar estatísticas de uso e [relatórios de falha](https://github.com/flutter/flutter/wiki/Flutter-CLI-crash-reporting). Esses dados são usados para ajudar a melhorar as ferramentas do Flutter com o decorrer do tempo.

O Flutter não envia esses dados na sua primeira execução. Para desabilitar esse envio, digite <code>flutter config --no-analytics</code>. Para exibir a configuração atual, digite <code>flutter config</code>. Se você optar por desabilitar a análise, um evento de saída será enviado, e então nenhuma informação será mais enviada pela ferramenta do Flutter.

Ao baixar o SDK do Flutter, você concorda com os Termos de Serviço do Google.

Nota: A [Política de Privacidade](https://policies.google.com/privacy) do Google descreve como os dados são controlados nesse serviço.

Além disso, o Flutter incluí o SDK do Dart, que pode enviar metricas de utilização e relatórios de falha.
:::

## Configuração do Android

::: tip Nota

O Flutter depende de uma instalação completa do Android Studio para fornecer todas as dependências da plataforma Android. Entretanto, você pode escrever seus aplicativos em vários editores diferentes; um passo mais a frente irá discutir isso.

:::

### Instalação do Android Studio

1. Baixe e instale o [Android Studio](https://developer.android.com/studio).
2. Inicie o Android Studio, e siga o "Assistente de Instalação do Android Studio". Ele irá instalar o SDK do Android mais recente, as ferramentas de linha de comando do Android SDK, e as ferramentas de construção do Android Studio, que são necessárias pelo Flutter ao desenvolver para Android.

::: warning Aviso

No Android Studio 3.6 ou mais recente, você irá precisar adicionar manualmente a versão antiga das ferramentas de SDK do Android para o Flutter funcionar. Para fazer isso:

1. Abra o **Gerenciador de SDK do Android Studio**
2. Na aba Android SDK, desmarque a opção **Esconder pacotes obsoletos**
3. Marque **Android SDK Tools (Obsoleto)**

A imagem abaixo mostra as configurações adequadas:

<img src="/instalacao/android-sdk-tools-config.png" />

Esse é um [problema conhecido](https://github.com/flutter/flutter/issues/51712) que será tratado em versões futuras do Flutter.
:::

### Configuração do seu dispositivo Android

Para se preparar para executar e testar seus aplicativos Flutter em um dispositivo Android, você irá precisar de um dispositivo rodando o Android 4.1 (API level 16) ou mais recente.

1. Habilite as **Opções de desenvolvedor** e a **Depuração USB** no seu dispositivo. Instruções detalhadas estão disponíveis na [Documentação do Android](https://developer.android.com/studio/debug/dev-options).
2. Apenas para Windows: Instale o [Driver USB do Google](https://developer.android.com/studio/run/win-usb).
3. Usando um cabo USB, plugue seu celular no computador. Se solicitado no seu dispositivo, autorize o computador a acessar seu dispositivo.
4. No terminal, execute o comando <code>flutter devices</code> para verificar se o Flutter reconhece o seu dispositivo Android conectado. Por padrão, o Flutter utiliza a versão do SDK do Android onde a sua ferramenta <code>adb</code> está baseada. Se você deseja que o Flutter use uma instalação diferente da SDK do Android, você deve configurar a variável de ambiente <code>ANDROID_HOME</code> para esse diretório de instalação.

### Configuração de um emulador Android

Para se preparar para executar e testar seus aplicativos Flutter em um emulador Android, siga esses passos:

1. Habilite a [Aceleração de Hardware](https://developer.android.com/studio/run/emulator-acceleration) na sua máquina.
2. Execute **Android Studio > Ferramentas > Android > AVD Manager** e selecione **Criar um Dispositivo Virtual**. (O submenu **Android** só está presente dentro de um projeto Android.)
3. Selecione um dispositivo e selecione **Próximo**
4. Selecione uma ou mais imagens de sistema para as versões do Android que você quer emular, e selecione **Próximo** Uma image _x86_ ou _x86_64_ é recomendada.
5. Em **Performance Emulada**, selecione **Hardware - GLES 2.0** para habilitar a [aceleração por hardware](https://developer.android.com/studio/run/emulator-acceleration).
6. Verifique se a configuração do AVD está correta, e selecione **Finalizar**.
   Para detalhes dos passos acima, veja [Gerenciando AVDs](https://developer.android.com/studio/run/managing-avds)
7. No Gerenciador de Dispositivos Virtuais do Android, clique **Executar** na barra de ferramentas. O emulador irá iniciar e mostrar a tela inicial para a versão e dispositivo selecionado.

### Configuração Web

O Flutter tem um suporte antecipado para construção de aplicações web usando o canal <code>beta</code> do Flutter. Para adicionar suporte ao desenvolvimento web, siga [essas instruções](https://flutter.dev/docs/get-started/web) quando você tiver completado as configurações acima.

### Próximo passo

Configurar o seu editor preferido.
