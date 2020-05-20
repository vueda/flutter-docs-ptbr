---
next: false
prev: ../../

meta:
  - name: description
    content: Instalação do Flutter no macOS.
---

# Instalação no macOS

## Requisitos do sistema

Para instalar e executar o Flutter, seu ambiente de desenvolvimento deve cumprir os seguintes requisitos mínimos:

- **Sistema Operacional**: macOS (64-bit).
- **Espaço em disco**: 2.8 GB (não incluí o espaço em disco necessário para IDE/ferramentas).
- **Ferramentas**: O Flutter depende das seguintes ferramentas de linha de comando estarem disponíveis no seu ambiente.
  - bash
  - curl
  - git 2.x
  - mkdir
  - rm
  - unzip
  - which
  - zip

## Obtenha o SDK do Flutter

1. Baixe o seguinte pacote de instalação para obter a última release de versão estável do SDK do Flutter:

<link-button link="https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.17.1-stable.zip">flutter_macos_1.17.1-stable.zip</link-button>

Para outros canais de release, e versões mais antigas, veja o [arquivo de SDK](https://flutter.dev/docs/development/tools/sdk/releases).

2. Extraia o arquivo na localização desejada, por exemplo:

<copyable-code-block dir="$" :contents="['cd ~/development', 'unzip ~/Downloads/flutter_macos_1.17.0-stable.zip']"></copyable-code-block>

Se você não deseja instalar a versão fixa do pacote de instalação, você pode pular os passos 1 e 2. Em vez disso, obtenha o código fonte do [repositório do Flutter](https://github.com/flutter/flutter) no GitHub, e mude as branches ou tags conforme necessário. Por exemplo:

<copyable-code-block dir="$" content="git clone https://github.com/flutter/flutter.git -b stable"></copyable-code-block>

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

2. Abra (ou crie) o arquivo <code>rc</code> para o seu terminal. Digitando <code>echo $SHELL</code> no seu terminal irá demonstrar qual tipo de terminal você está usando. Se for o Bash, edite <code>$HOME/.bash_profile</code> ou <code>$HOME/.bashrc</code>. Se você estiver usando o terminal Z, edite <code>$HOME/.zshrc</code>. Se estiver usando um terminal diferente, o caminho e nome do arquivo serão diferentes.

3. Adicione a seguinte linha e mude <code>[CAMINHO_PARA_FLUTTER]</code> para o local onde você instalou o Flutter:

<copyable-code-block dir="$" content='export PATH="$PATH:[CAMINHO_PARA_FLUTTER]/flutter/bin"'></copyable-code-block>

4. Execute <code>source \$HOME/.[rc file]</code> para atualizar a sessão atual do terminal, ou abra uma nova janela do terminal para atualizar automaticamente.

5. Verifique que o diretório <code>flutter/bin</code> está agora no seu PATH executando:

<copyable-code-block dir="$" content='echo $PATH'></copyable-code-block>

Verifique que o <code>flutter</code> está disponível executando:

<copyable-code-block dir="$" content='which flutter'></copyable-code-block>

## Configurações da plataforma

O macOS suporta o desenvolvimento de aplicativos com Flutter em iOS, Android e Web (versão de preview técnico). Complete pelo menos a configuração de uma das plataformas agora, para conseguir construir e executar seu primeiro aplicativo em Flutter.

## Configuração do iOS

## Instale o Xcode

Para desenvolver aplicativos Flutter para iOS, você precisa de um Mac com Xcode instalado.

1. Instale a versão estável mais recente do Xcode (usando o [download web](https://developer.apple.com/xcode/) ou a[App Store do Mac](https://apps.apple.com/us/app/xcode/id497799835))

2. Configure o as ferramentas de linha de comando do Xcode para usar a nova versão instalada do Xcode executando o seguinte comando:

<copyable-code-block dir="$" :contents="['sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer', 'sudo xcodebuild -runFirstLaunch']"></copyable-code-block>

Esse é o caminho correto na maioria dos casos, quando você quiser usar a versão mais atual do Xcode. Se você precisa utilizar uma versão diferente, informe o caminho desejado.

3. Certifique-se que contrato de licença do Xcode está assinado abrindo o Xcode uma vez e confirmando ou executando o comando <code>sudo xcodebuild -license</code>

Versões mais antigas que a última estável ainda podem funcionar, mas não são recomendadas para o desenvolvimento com Flutter.

Com o Xcode, você poderá executar os aplicativos Flutter em um dispositivo iOS ou em um simulador.

## Configure o simulador do iOS

Para se preparar para executar e testar seus aplicativos Flutter em um simulador do iOS, siga esses passos:

1. No seu Mac, encontre o Simulador pelo Spotlight ou usando o seguinte comando:

<copyable-code-block dir="$" content='open -a Simulator'></copyable-code-block>

2. Certifique-se que o seu simulador está usando um dispositivo 64-bits (iPhone 5s ou mais atual) verificandos as configurações no menu **Hardware > Dispositivo** do simulador.

3. Dependendo do tamanho da tela do seu computador, a tela de alta densidade simulada do dispositivo iOS pode transbordar da sua tela. Configure a escala do dispositivo no menu **Janela > Escala** do simulador.

## Crie e execute um aplicativo Flutter simples

Para criar seu primeiro aplicativo Flutter e testar suas configurações, siga os seguintes passos:

1. Crie um novo aplicativo Flutter executando o seguinte comando:

<copyable-code-block dir="$" content='flutter create my_app'></copyable-code-block>

2. O diretório <code>my_app</code> será criado, contendo o aplicativo inicial do Flutter. Entre nesse diretório:

<copyable-code-block dir="$" content='cd my_app'></copyable-code-block>

3. Para executar o aplicativo no Simulador, certifique-se que o simulador está rodando e faça:

<copyable-code-block dir="$" content='flutter run'></copyable-code-block>

## Executando em dispositivos iOS

Para executar seu aplicativo Flutter em um dispositivo físico com iOS você precisará do gerenciador de dependências CocoaPods e uma conta de Desenvolvedor da Apple. Você também precisará configurar o Xcode para executar no dispositivo físico.

1. Instale e configure o CocoaPods executando os seguintes comandos:

<copyable-code-block dir="$" :contents="['sudo gem install cocoapods', 'pod setup']"></copyable-code-block>

2. Siga o fluxo de assinatura do Xcode para provisionar o seu projeto:

   a. Abre a área de trabalho padrão do Xcode no seu projeto executando <code>open ios/Runner.xcworkspace</code> em uma janela do terminal dentro do diretório do seu projeto Flutter.

   b. Selecione o dispositivo no qual você quer executar seu aplicativo no seletor de dispositivos próximo ao botão de executar.

   c. Selecione o projeto <code>Runner</code> no painel de navegação esquerdo.

   d. Na página de configurações, certifique-se que o seu Time de Desenvolvimento está selecionado. A tela pode mudar dependendo de qual a sua versão do Xcode.

   - Para o Xcode 10, procure em **Geral > Assinatura > Time**
   - Para o Xcode 11 e mais recente, procure em **Assinatura & Recursos > Time**

   Quando você seleciona um time, o Xcode cria e baixa os Certificados de Desenvolvimento, registra seu dispositivo na sua conta, criando e baixando o perfil de provisionamento (se necessário).

   - Para iniciar o seu primeiro projeto de desenvolvimento do iOS, você pode precisar se autenticar no Xcode com o seu Apple ID.

    <base-path-image src="/instalacao/xcode-account.png" />

   Desenvolvimento e teste é suportado para qualquer Apple ID. Registrar-se no Programa de Desenvolvedor da Apple é obrigatório para distribuir seus aplicativos na App Store. Para detalhes sobre os tipos de afiliação, veja [Escolhendo uma afiliação](https://developer.apple.com/support/compare-memberships).

   - A primeira vez que você conecta um dispositivo físico iOS para desenvolvimento, você precisa confirmar que confia tanto no Mac quanto no Certificado de Desenvolvedor nesse dispositivo. Selecione <code>Confiar</code> na janela exibida na primeira vez que conectar o dispositivo iOS no seu Mac.

    <base-path-image src="/instalacao/trust-computer.png" />

Depois, vá até o aplicativo de Configurações no seu dispositivo iOS, selecione **Geral > Gerenciamento do Dispositivo** e confie no seu Certificado.

- Se a autenticação automática falhar no Xcode, verifique se o valor em **Geral > Identidade > Identificador do Pacote** é unico.

  <base-path-image src="/instalacao/xcode-unique-bundle-id.png" />

3. Inicie seu aplicativo executando <code>flutter run</code>

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

## Configuração do seu dispositivo Android

Para se preparar para executar e testar seus aplicativos Flutter em um dispositivo Android, você irá precisar de um dispositivo rodando o Android 4.1 (API level 16) ou mais recente.

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
5. Em Performance Emulada, selecione **Hardware - GLES 2.0** para habilitar a [aceleração por hardware](https://developer.android.com/studio/run/emulator-acceleration).
6. Verifique se a configuração do AVD está correta, e selecione **Finalizar**.
   Para detalhes dos passos acima, veja [Gerenciando AVDs](https://developer.android.com/studio/run/managing-avds)
7. No Gerenciador de Dispositivos Virtuais do Android, clique **Executar** na barra de ferramentas. O emulador irá iniciar e mostrar a tela inicial para a versão e dispositivo selecionado.

## Configuração Web

O Flutter tem um suporte antecipado para construção de aplicações web usando o canal <code>beta</code> do Flutter. Para adicionar suporte ao desenvolvimento web, siga [essas instruções](https://flutter.dev/docs/get-started/web) quando você tiver completado as configurações acima.

## Próximo passo

Configurar o seu editor preferido.
