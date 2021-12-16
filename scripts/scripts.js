let textshown = document.getElementById('display');
let input = document.getElementsByClassName('choices')

//tornar visível as mensagens.
function makeVisible() {
    for (const choice of input){
        choice.style.visibility = 'visible'
    }
}
//Função que vai atualizar as mensagens, a velocidade e para qual próxima função ela precisa carregar
function displayer(text, speed, callback = ''){
    textshown.innerText = '';
    for (const choice of input){
        choice.style.visibility = 'hidden';
        choice.onclick = '';
    }
    function update(text, speed, callback) {
        setTimeout(function(){textshown.innerText += text[0]; text = text.substring(1); if (text == ''){ if (callback == ''){return} else { callback() }} else {update(text, speed, callback)}}, speed);
    }
    update(text, speed, callback);
}
//Função que vai atualizar o texto das 3 opções de escolhas
function choiceDisplayer(a, b, c){
    input.choice1.innerText = a;
    input.choice2.innerText = b;
    input.choice3.innerText = c;
}
//Game over a finalizar
function gameOver() {
    const can = document.getElementById('gameOverCanvas');
}

//Ínicio prático do jogo atualizando o displayer
function loading1() {
    displayer('Iniciando...', 250, loading2);
}
function loading2() {
    displayer('Contam as histórias que Orfeu era o músico mais talentoso de toda existência. Seu talento era tanto que qualquer pessoa, árvore ou rio se dobrava a suas melodias. Como todo grande artista ele tinha sua musa e até então noiva, Eurídice. Porém um pouco antes do seu casamento ela foi levada à morte por uma cobra. Ao receber a notícia, Orfeu tomou a sua lira em mãos e com uma melodia fez a terra abrir uma passagem para o inferno, determinado a resgatar sua amada dos braços da morte. \n\n\n Ao entrar no buraco para o Mundo Inferior ele se deparou com uma escuridão abosulta...', 50, loading3)
}

function loading3() {
    for (const choice of input){
        choice.style.visibility = 'visible'
        choice.onclick = function(){scene1()};
    }
    input.choice1.innerText = 'Invocar chamas com a melodia da sua Lira';
    input.choice2.innerText = 'Seguir em silêncio no escuro, tateando as paredes quando necessário';
    input.choice3.innerText = 'Chamar por alguma alma viva...';
}

loading1();

function scene1() {
    let x = window.event.target.id;

    if (x == 'choice2'){
        choiceDisplayer('Parar para descansar', 'Aumentar a velocidade', 'Assoviar no caminho a música preferida de Eurídice');
        displayer('Orfeu então prosseguiu sua árdua descida para o mundo inferior.\n As paredes de terra eram húmidas e cheias de raízes e o chão desforme fazia ele bater com frenquência em alguma pedra, mas o músico seguia determinado e cada vez mais cansado.', 50, makeVisible)
        for (const choice of input){
            choice.onclick = function(){scene2()};
        }
    }

    if (x == 'choice3' || x == 'choice1'){
        choiceDisplayer('"Quem é você?"', '"..."', '"Eurídice?"');
        displayer('Um clarão logo se ascedeu frente ao músico, mas não se tratava do que ele esperava... Ele agora se via em frente a uma figura tremula e etéria que lembrava vagamente a humano. Ele se via em frente de um fantasma.', 50, makeVisible)
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
}

function scene2() {
    let x = window.event.target.id;

    if (x == 'choice1'){
        choiceDisplayer('"Quem é você?"', '"..."', '"Eurídice?"')
        displayer('Orfeu se sentou no chão terroroso, seus olhos tentavam se adaptar a escuridão intensa enquanto ele aguardava seus pés pararem de doer, até que por um segundo ele achou ter visto algo. Forçou a sua vista até aos poucos ela ir relevando uma figura trêmula que cada vez se aproximava mais e mais.', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
    if (x == 'choice2'){
        displayer('Orfeu ignorava suas dores e tropeços e cada vez ia mais rápido, tudo o que importava agora era encontrar sua amada. O breu pra ele quase não era mais uma preocupação. Ele podia sentir que estava perto de encontrá-la até que seu pé esquerdo pisou em falso e em segundos ele se via em queda livre, sendo engolido pelo vazio escuro, silencioso e infernal do submundo.', 50, gameOver);
        }
    if (x == 'choice3'){
        choiceDisplayer('"Quem é você?"', '"..."', '"Eurídice?"')
        displayer('O som do seu assovio ecoava por todo o caminho e parecia ter renovado suas forças. As paredes já não pareciam mais tão gélidas e tão pouco o chão desregular pois a melodia não permitia que ele percebesse tais incomodos e não muito demorou para do meio da escuridão uma figura trêmula surgir, atraída pelo som.', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
}

function scene3() {}

