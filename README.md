# Descrição

- Seu segundo projeto usando React será a implementação de um app de flashcards chamado *Zap Recall*!
- Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias Active Recall e Spaced Repetition. A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. Ao se deparar com a mesma, dependendo do esforço necessário para responder ou não o flashcard, você fica consciente de quais conteúdos estão frescos na memória e quais não estão, então, pode praticar com frequência os conteúdos que não estão.
- Quando lembramos instantaneamente de um flashcard, tivemos um *"Zap!"*⚡
- Conjuntos de flashcards são chamados de decks. Este app deverá possuir por padrão pelo menos um deck com 8 flashcards.

# DrivenTime

- Nomeie a pasta do seu projeto com: `projeto9-zaprecall`

# Requisitos

- Geral
    - [ ]  Manipule o HTML usando somente React (sem usar o document, nem o localStorage, **nem bibliotecas React, JavaScript e/ou CSS).
    - [ ]  *Todo o armazenamento de informações deve ser feito via estados*
    - [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
    - [ ]  *A cada requisito implementado* faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit.
    - [ ]  Nesse projeto, a estilização *deve ser feita com styled-components obrigatoriamente*
    - [ ]  O deploy da aplicação utilizando vercel também é obrigatório
    - [ ]  PROIBIDO O USO DE CONTEXT NEM ROUTER
    
- Layout
    
    [https://www.figma.com/file/PNYkKkFBAE1jRctvHoh7ix/ZapRecall?node-id=0%3A1&t=DbGCUwOpM5pvrakS-1](https://www.figma.com/file/PNYkKkFBAE1jRctvHoh7ix/ZapRecall?node-id=0%3A1&t=DbGCUwOpM5pvrakS-1)
    
    - [ ]  Aplicar layout para seguindo o Figma.
    - [ ]  Você pode usar o deck que desejar, temos aqui o exemplo de um deck sobre React:
        1. *Q:* O que é JSX? *R:* Uma extensão de linguagem do JavaScript
        2. *Q:* O React é __ *R:* uma biblioteca JavaScript para construção de interfaces
        3. *Q:* Componentes devem iniciar com __ *R:* letra maiúscula
        4.  *Q:* Podemos colocar __ dentro do JSX *R:* expressões
        5. *Q:* O ReactDOM nos ajuda __ *R:* interagindo com a DOM para colocar componentes React na mesma
        6. *Q:* Usamos o npm para __ *R:* gerenciar os pacotes necessários e suas dependências
        7. *Q:* Usamos props para __ *R:* passar diferentes informações para componentes 
        8. *Q:* Usamos estado (state) para __ *R:* dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
        - Em formato de objeto
            
            jsx
            const cards = [
            	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
            	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
            	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
            	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
            	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
            	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
            	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
            	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
            ]
            
            
    - [ ]  Use as fontes indicadas no Layout do Figma
- Componentização e dadossagem com resultado
    - [ ]  Os elementos da página devem ser componentizados com React em arquivos separados.
    - [ ]  Os dados dinâmicos da página (como o deck, flashcards, etc) devem ser representados como arrays ou objetos no JavaScript e renderizados na tela.
- Flashcards
    - [ ]  Todos os flashcards devem aparecer na tela virados e indexados por números (ex: Pergunta 1, Pergunta 2), de modo a “esconder” o termo ou pergunta que ele contém.
    - [ ]  Ao clicar na setinha de “play” de um flashcard, a pergunta ou termo correspondente ao flashcard deve aparecer (não é necessária nenhuma animação).
    - [ ]  Para ver a resposta do flashcard, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu layout adaptado).
        - Ao virar um flashcard...
            - [ ]  O usuário deve visualizar a resposta correta para a perguta e os três botões (Não lembrei, Quase não lembrei ou Zap)
            - [ ]  Ao clicar em qualquer um dos botões, o flashcard deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
                - Flashcard incorreto (Não lembrei)
                - Flashcard correto com esforço (Quase esqueci)
                - Flashcard correto imediatamente (Zap!)
            - [ ]  Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone. Ela não poderá ser aberta novamente
- Contador de Conclusão
    - [ ]  O contador deve mostrar quantas perguntas o usuário ja respondeu e quantas pergutas há no total
    - [ ]  Sempre que uma carta for respondida (clique nos botões), o número de flashcards respondidos deve ser atualizado
    - [ ]  O número de flashcards respondidos nunca pode ser maior do que o número total!
- *Para correção automática ⚠️*
    
    [](https://www.figma.com/file/hSSUKHcsWb5wqbI6p9B7F1/ZapRecall-Seletores?node-id=0%3A1&t=EjEXHsOj4lFSfBWC-1)
    
    ⚠️ *Atenção: NÃO* coloque o data-identifier nas tags dos componentes React e sim nas tags HTML. Exemplo:
    
    jsx
    ERRADO: <MeuLindoBotaoComponentizado data-test="blabla" />
    CERTO: <button data-test="blabla" />
    
    
    🤔 *Por quê?* Porque atributos colocados nas tags dos componentes não são inseridos no HTML final gerado pelo React, somente atributos explicitamente colocados nas tags HTML.
    
    - 💡 Para saber se realmente o seletor está inserido, você pode inspecionar o elemento na tela
        
        ![indefier.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdcf05dd-c3ca-4a2f-94d5-4be335ea9275/indefier.gif)
        
    - *E se eu estiver usando Styled Components?*
        
        Nesse caso, você pode sim colocar o data-identifier na tag do componente! Isso porque o styled components automaticamente repassa todos os atributos pra tag HTML final:
        
        jsx
        const MeuLindoBotao = styled.button`...`;
        
        <MeuLindoBotao data-identifier="blabla" /> (CORRETO!)
        
        
    - *E se eu quiser componentizar um botão pra ser usado em vários lugares com data-test diferentes?*
        
        Nesse caso, você pode repassar todas as props pra tag HTML final de uma forma bem prática:
        
        jsx
        // No componente do botão:
        function BotaoCustomizado({ props }) {
        	return <button {...props}>...</button>
        }
        
        // Onde for usar o componente:
        <BotaoCustomizado data-identifier="blabla" />
        <BotaoCustomizado data-identifier="blublu" />
        
        
    

# Bônus (opcional)

- Tela boas vindas
    - [ ]  Antes de apresentar os cards deverá ser exibido uma tela de boas vindas
- Fila de Respostas
    - [ ]  No rodapé adicionar um fila de resposta. Note que a ordem é de respostas, ou seja, a ordem em que a pessoa respondeu os flashcards e não a ordem numérica deles.
- Mensagem com resultado
    - [ ]  Exibir, no rodapé, uma mensagem de parabéns ou de incentivo:
        - [ ]  Caso a pessoa responda às perguntas apenas com amarelos e verdes, mostrar mesagem “Parabéns!”
        - [ ]  Caso a pessoa responda pelo menos uma pergunta com vermelho, mostrar mensagem “Putz…”