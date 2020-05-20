---
next: false
prev: ../../

meta:
  - name: description
    content: Instalação do Flutter no Linux.
---

# Instalação no Linux

## Requisitos do sistema

Para instalar e executar o Flutter, seu ambiente de desenvolvimento deve cumprir os seguintes requisitos mínimos:

- **Sistema Operacional**: Linux (64-bit).
- **Espaço em disco**: 600 MB (não incluí o espaço em disco necessário para IDE/ferramentas).
- **Ferramentas**: O Flutter depende das seguintes ferramentas de linha de comando estarem disponíveis no seu ambiente.
  - bash
  - curl
  - git 2.x
  - mkdir
  - rm
  - unzip
  - which
  - xz-utils
  - zip
- **Bibliotecas compartilhadas**: O comando <code>test</code> do Flutter depende da seguinte biblioteca estar disponível no seu ambiente:
  - libGLU.so.1 - Provido pelos pacotes mesa como libglu1-mesa no Ubuntu/Debian

## Obtenha o SDK do Flutter

1. Baixe o seguinte pacote de instalação para obter a última release de versão estável do SDK do Flutter:

<link-button link="https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_1.17.1-stable.tar.xz">flutter_linux_1.17.1-stable.tar.xz</link-button>

Para outros canais de release, e versões mais antigas, veja o [arquivo de SDK](https://flutter.dev/docs/development/tools/sdk/releases).

2. Extraia o arquivo na localização desejada, por exemplo:

<copyable-code-block dir="$" :contents="['cd ~/development', 'tar xf ~/Downloads/flutter_linux_1.17.1-stable.tar.xz']"></copyable-code-block>

Se você não deseja instalar a versão fixa do pacote de instalação, você pode pular os passos 1 e 2. Em vez disso, obtenha o código fonte do [repositório do Flutter](https://github.com/flutter/flutter) no GitHub, e mude as branches ou tags conforme necessário. Por exemplo:

<copyable-code-block content="git clone https://github.com/flutter/flutter.git -b stable"></copyable-code-block>

3. Adicione o <code>flutter</code> no seu path:

<copyable-code-block dir="$" content='export PATH="$PATH:`pwd`/flutter/bin"'></copyable-code-block>

Esse comando configura a variável <code>PATH</code> apenas para a janela do terminal **atual**. Para permanentemente adicionar o Flutter ao seu path, veja [Atualizando seu path](#atualizando-seu-path)

4. Opcionalmente, faça o pré-download dos binários de desenvolvimento:

O <code>flutter</code> baixa binários de desenvolvimento específicos da plataforma conforme necessário. Para cenários onde o pré-download desses artefatos são preferíveis (como por exemplo, em ambientes fechados de build, ou com disponibilidade de rede intermitente), os binários do iOS e Android podem ser baixados antecipadamente executando:

<copyable-code-block dir="$" content="flutter precache"></copyable-code-block>

Para opções de downloads adicionais, veja <code>flutter help precache</code>.

Você agora está pronto para executar os comandos do Flutter!

::: tip Nota

Para atualizar uma versão existente do Flutter, veja [Atualizando o flutter](https://flutter.dev/docs/development/tools/sdk/upgrading)

:::

## Execute flutter doctor

Execute o seguinte comando para verificar se ainda existe alguma dependência que você precisará instalar para completar o processo de instalação (para informações mais detalhadas, adicione a flag <code>-v</code>):

<copyable-code-block dir="$" content="flutter doctor"></copyable-code-block>

Esse comando verifica o seu ambiente e mostra um relatório no terminal. O SDK do Dart já vem empacotado com o Flutter; não é necessário instalar o Dart separadamente. Verifique cuidadosamente as informações para identificar outros programas que você precise instalar ou tarefas adicionais que você precise realizar.

Por exemplo:

```
[-] Android toolchain - develop for Android devices
  • Android SDK at D:\Android\sdk
  ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
  • Try re-installing or updating your Android SDK,
    visit https://flutter.dev/setup/#android-setup for detailed instructions.
```

As seções seguintes descrevem como realizar essas tarefas e finalizar o processo de instalação.

Uma vez que você tenha instalado qualquer uma das dependências ausentes, você pode executar novamente o comando <code>flutter doctor</code> para verificar se tudo foi feito corretamente.

::: warning Aviso
A ferramenta <code>flutter</code> usa o Google Analytics para anonimamente reportar estatísticas de uso e [relatórios de falha](https://github.com/flutter/flutter/wiki/Flutter-CLI-crash-reporting). Esses dados são usados para ajudar a melhorar as ferramentas do Flutter com o decorrer do tempo.

O Flutter não envia esses dados na sua primeira execução. Para desabilitar esse envio, digite <code>flutter config --no-analytics</code>. Para exibir a configuração atual, digite <code>flutter config</code>. Se você optar por desabilitar a análise, um evento de saída será enviado, e então nenhuma informação será mais enviada pela ferramenta do Flutter.

Ao baixar o SDK do Flutter, você concorda com os Termos de Serviço do Google.

Nota: A [Política de Privacidade](https://policies.google.com/privacy) do Google descreve como os dados são controlados nesse serviço.

Além disso, o Flutter incluí o SDK do Dart, que pode enviar métricas de utilização e relatórios de falha.
:::

## Atualizando seu path

Você pode atualizar sua variável PATH para a sessão atual no terminal, como mostrado em [Obtenha o SDK do Flutter](#obtenha-o-sdk-do-flutter). Você provavelmente irá querer atualizar essa variável permanentemente, para que você possa executar os comandos do <code>flutter</code> em qualquer sessão do terminal.

Os passos para modificar essa variável permanentemente para todas as sessões do terminal são específicas da máquina. Tipicamente você adiciona uma linha para um arquivo que é executado toda vez que você abre um novo terminal. Por exemplo:

1. Determine qual diretório você colocou o SDK do Flutter. Você precisará disso no Passo 3.

2. Abra (ou crie) o arquivo <code>rc</code> para o seu terminal. Por exemplo, o Linux utiliza o Bash por padrão, então edite <code>\$HOME/.bashrc</code>. Se você estiver usando um terminal diferente, o arquivo e caminho podem ser diferentes.

3. Adicione a seguinte linha e mude <code>[CAMINHO_PARA_FLUTTER]</code> para o local onde você instalou o Flutter:

<copyable-code-block dir="$" content='export PATH="$PATH:[CAMINHO_PARA_FLUTTER]/flutter/bin"'></copyable-code-block>

4. Execute <code>source \$HOME/.[rc file]</code> para atualizar a sessão atual do terminal, ou abra uma nova janela do terminal para atualizar automaticamente.

5. Verifique que o diretório <code>flutter/bin</code> está agora no seu PATH executando:

<copyable-code-block dir="$" content='echo $PATH'></copyable-code-block>

Verifique que o <code>flutter</code> está disponível executando:

<copyable-code-block dir="$" content='which flutter'></copyable-code-block>

## Atualizando o path diretamente

Em alguns casos, sua distribuição pode não obter o path permanentemente usando os passos descritos acima. Quando isso ocorre, você pode mudar o arquivo de variáveis de ambiente diretamente. Essas instruções requerem privilégio de administrador:

1. Determine o diretório onde você colocou o SDK do Flutter.

2. Localize o diretório <code>etc</code> na raiz do sistema, e abra o arquivo <code>profile</code> com privilégio de administrador.

<copyable-code-block dir="$" content='sudo nano /etc/profile'></copyable-code-block>

3. Atualize a string PATH com a localização do diretório onde está o SDK do Flutter.

```
if [ "`id -u`" -eq 0 ]; then
   PATH="..."
else
   PATH="/usr/local/bin:...:[CAMINHO_PARA_FLUTTER]/flutter/bin"
fi
export PATH

```

4. Encerre a sua sessão atual ou reinicie o sistema.

5. Uma vez que você inicie uma nova sessão, verifique que o comando do <code>flutter</code> está disponível executando:

<copyable-code-block dir="$" content='which flutter'></copyable-code-block>

Para mais detalhes sobre a configuração do path no Bash, veja [essa questão no StackExchange](https://unix.stackexchange.com/questions/26047/how-to-correctly-add-a-path-to-path). Para informações sobre configurar o path no terminal Z, veja [essa questão no StackOverflow](https://stackoverflow.com/questions/11530090/adding-a-new-entry-to-the-path-variable-in-zsh).

## Configuração do Android

::: tip Nota

O Flutter depende de uma instalação completa do Android Studio para fornecer todas as dependências da plataforma Android. Entretanto, você pode escrever seus aplicativos em vários editores diferentes; um passo mais a frente irá discutir isso.

:::

## Instalação do Android Studio

1. Baixe e instale o [Android Studio](https://developer.android.com/studio).
2. Inicie o Android Studio, e siga o "Assistente de Instalação do Android Studio". Ele irá instalar o SDK do Android mais recente, as ferramentas de linha de comando do Android SDK, e as ferramentas de construção do Android Studio, que são necessárias pelo Flutter ao desenvolver para Android.

::: warning Aviso

No Android Studio 3.6 ou mais recente, você irá precisar adicionar manualmente a versão antiga das ferramentas de SDK do Android para o Flutter funcionar. Para fazer isso:

1. Abra o **Gerenciador de SDK do Android Studio**
2. Na aba Android SDK, desmarque a opção **Esconder pacotes obsoletos**
3. Marque **Android SDK Tools (Obsoleto)**

A imagem abaixo mostra as configurações adequadas:

<base-path-image src="/instalacao/android-sdk-tools-config.png" />

Esse é um [problema conhecido](https://github.com/flutter/flutter/issues/51712) que será tratado em versões futuras do Flutter.
:::

1. Habilite as **Opções de desenvolvedor** e a **Depuração USB** no seu dispositivo. Instruções detalhadas estão disponíveis na [Documentação do Android](https://developer.android.com/studio/debug/dev-options).
2. Apenas para Windows: Instale o [Driver USB do Google](https://developer.android.com/studio/run/win-usb).
3. Usando um cabo USB, plugue seu celular no computador. Se solicitado no seu dispositivo, autorize o computador a acessar seu dispositivo.
4. No terminal, execute o comando <code>flutter devices</code> para verificar se o Flutter reconhece o seu dispositivo Android conectado. Por padrão, o Flutter utiliza a versão do SDK do Android onde a sua ferramenta <code>adb</code> está baseada. Se você deseja que o Flutter use uma instalação diferente da SDK do Android, você deve configurar a variável de ambiente <code>ANDROID_HOME</code> para esse diretório de instalação.

## Configuração de um emulador Android

Para se preparar para executar e testar seus aplicativos Flutter em um emulador Android, siga esses passos:

1. Habilite a [Aceleração de Hardware](https://developer.android.com/studio/run/emulator-acceleration) na sua máquina.
2. Execute **Android Studio > Ferramentas > Android > AVD Manager** e selecione **Criar um Dispositivo Virtual**. (O submenu **Android** só está presente dentro de um projeto Android.)
3. Escolha um dispositivo e selecione **Próximo**
4. Escolha uma ou mais imagens de sistema para as versões do Android que você quer emular, e selecione **Próximo** Uma imagem _x86_ ou _x86_64_ é recomendada.
5. Em **Performance Emulada**, selecione **Hardware - GLES 2.0** para habilitar a [aceleração por hardware](https://developer.android.com/studio/run/emulator-acceleration).
6. Verifique se a configuração do AVD está correta, e selecione **Finalizar**.
   Para detalhes dos passos acima, veja [Gerenciando AVDs](https://developer.android.com/studio/run/managing-avds)
7. No Gerenciador de Dispositivos Virtuais do Android, clique **Executar** na barra de ferramentas. O emulador irá iniciar e mostrar a tela inicial para a versão e dispositivo selecionado.

## Configuração Web

O Flutter tem um suporte antecipado para construção de aplicações web usando o canal <code>beta</code> do Flutter. Para adicionar suporte ao desenvolvimento web, siga [essas instruções](https://flutter.dev/docs/get-started/web) quando você tiver completado as configurações acima.

### Próximo passo

Configurar o seu editor preferido.
