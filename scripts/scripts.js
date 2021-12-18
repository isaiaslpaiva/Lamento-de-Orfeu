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
//Game over
function gameOver() {
   const can = document.getElementById('gameOverCanvas');
   can.style.zIndex = 2;
   let ctx = can.getContext('2d');
   let img = new Image();
   img.src = "./images/gameOver.jpg";
   let img2 = new Image();
   img2.src = './images/gameOver.jpg';
   //Tela do Game Over
   function deathGif() {
       ctx.drawImage(img, 0, 0);
       for (let i = 0; (can.width / 300) > i; i++){
           ctx.drawImage(img, 300 * i, Math.floor(Math.random() * can.width), can.width/5, can.height/5)
       }
       for (let i = 0; (can.height / 300) > i; i++){
           ctx.drawImage(img, Math.floor(Math.random() * can.height), 300 * i, can.width/5, can.height/5)
       }
   }
   //Reiniciando
   for (let i = 70; i > 0; i--){
       setTimeout(function(){ctx.drawImage(img2, Math.floor(Math.random() * can.height), Math.floor(Math.random() * can.width), can.width/3, can.height/3)}, i * 100);
   }
   setTimeout(function(){
       let gif = setInterval(deathGif, 50);
       setTimeout(function(){
           clearInterval(gif);
           ctx.clearRect(0, 0, can.width, can.height);
           setTimeout(function() {can.style.zIndex = -1; loading1()}, 2000);
       }, 1000);
   }, 7000);
}
 
//Ínicio prático do jogo atualizando o displayer
function loading1() {
   displayer('Iniciando...', 250, loading2);
}
function loading2() {
   displayer('Contam as histórias que Orfeu foi o músico mais talentoso que já existiu. Seu talento era tanto que até mesmo o fogo, as árvores e rios se dobravam para suas melodias. \n\nComo todo grande artista ele tinha sua musa inspiradora, Eurídice, com a qual era noivo. Porém, pouco antes do casamento, Eurídice foi levada pelos braços da morte. Ao receber a notícia, Orfeu tomou a sua lira em mãos e com algumas notas fez a terra abrir uma passagem para o inferno, determinado a resgatar a alma de sua amada. \n\n\n Ao entrar no buraco para o Mundo Inferior ele se deparou com uma escuridão absoluta...', 50, loading3)
}
 
function loading3() {
   for (const choice of input){
       choice.style.visibility = 'visible'
       choice.onclick = function(){scene1()};
   }
   input.choice1.innerText = 'Invocar chamas com a melodia da sua Lira';
   input.choice2.innerText = 'Seguir no escuro, tateando as paredes';
   input.choice3.innerText = 'Chamar por alguma alma viva...';
}
 
loading1();
 
function scene1() {
   let x = window.event.target.id;
 
   if (x == 'choice2'){
       choiceDisplayer('Parar para descansar', 'Aumentar a velocidade', 'Assoviar a música preferida de Eurídice');
       displayer('Orfeu então iniciou o árduo caminho para o mundo inferior.\n As paredes de terra eram úmidas e cheias de raízes e o chão disforme fazia ele bater com frequência em alguma pedra, mas o músico seguia determinado e cada vez mais cansado no que logo virou horas e horas de caminhada.', 50, makeVisible)
       for (const choice of input){
           choice.onclick = function(){scene2()};
       }
   }
   if (x == 'choice1'){
       choiceDisplayer('Tocar  para afastar a figura e tomar o barco para si.', 'Explicar a situação para o barqueiro e pedir para ser levado para o outro lado', 'Se afastar da figura e seguir pelas margens do rio');
       displayer('Sob o comando de sua lira um clarão logo se acendeu no ar frente ao músico. Mesmo diante do luto até a natureza continuava se curvando a suas melodias o seguindo para onde quer que ele fosse. Agora, com o local melhor iluminado, ele seguiu cada vez mais a fundo.\n\n\n\O tempo ali o confundia. Ele não sabia dizer quantas horas caminhou até começar ouvir o som de água e logo se ver em frente as margens do Rio Estige, onde uma figura humanóide permanecia estática dentro de um pequeno barco.', 50, makeVisible)
       for (const choice of input){
           choice.onclick = function(){scene3()};
       }
   }
   if (x == 'choice3'){
       choiceDisplayer('Tocar  para afastar a figura e tomar o barco para si.', 'Conversar com o barqueiro e pedir por travessia', 'Se afastar da figura e seguir pelas margens do rio');
       displayer('Orfeu seguiu calmamente caverna abaixo, assobiando o canto preferido de sua falecida noiva. A melodia o fazia lembrar a cada passo do porque havia começado aquilo o dando forças para enfrentar a escuridão no que se transformou em horas e horas de caminhada até ele chegar num rio e se deparar com uma figura obscura em cima de um pequeno barco.', 50, makeVisible)
       for (const choice of input){
           choice.onclick = function(){scene3()};
       }
   }
}
 
function scene2() {
   let x = window.event.target.id;
 
   if (x == 'choice1'){
       choiceDisplayer('Tocar  para afastar a figura e tomar o barco para si', 'Conversar com o barqueiro e pedir por travessia', 'Se afastar da figura e seguir pelas margens do rio');
       displayer('Orfeu se sentou no chão terroroso, seus olhos tentavam se adaptar à escuridão intensa enquanto ele aguardava seus pés pararem de doer, até que por um segundo ele achou ter ouvido algo. Se levantou e começou a andar em direção ao som que parecia calmo e familiar.\n\n\n\O tempo ali o confundia. Ele não sabia quanto tempo havia andado até identificar que se tratava do som de água corrente e logo se viu em frente as margens do Rio Estige, onde uma figura humanóide e estática se encontrava dentro de um pequeno barco.', 50, makeVisible)
       for (const choice of input){
           choice.onclick = function(){scene3()};
       }
   }
   if (x == 'choice2'){
       displayer('Orfeu ignorava suas dores e tropeços e cada vez ia mais rápido, tudo o que importava agora era encontrar sua amada. O breu pra ele quase não era mais uma preocupação. Ele podia sentir que estava perto de encontrá-la até que seu pé esquerdo pisou em falso e em segundos ele se via em queda livre, sendo engolido pelo vazio escuro, silencioso e infernal do submundo........................', 50, gameOver);
       }
   if (x == 'choice3'){
       choiceDisplayer('Tocar  para afastar a figura e tomar o barco para si', 'Conversar com o barqueiro e pedir por travessia', 'Se afastar da figura e seguir pelas margens do rio');
       displayer('O som do seu assovio ecoava por todo o caminho e parecia ter renovado suas forças. As paredes já não pareciam mais tão gélidas e tão pouco o chão desregular pois a melodia não permitia que ele percebesse tais incômodos e não muito demorou para ele se ver em frente as margens do Rio Estige, onde uma figura humanóide permanecia estática dentro de um pequeno barco.', 50, makeVisible)
       for (const choice of input){
           choice.onclick = function(){scene3()};
       }
   }
}
 
function scene3() {
   let x = window.event.target.id;
 
   if (x == 'choice1'){
       displayer('Sem dar oportunidade para qualquer tipo de reação da figura a sua frente, Orfeu passou seus dedos pelas cordas da lira fazendo a figura sair do barco do qual rapidamente tomou posse deixando o homem que ali estava para trás. Ele continuou tocando agora fazendo com que o barco continuasse em movimento sem se dar conta das almas que agonizavam silenciosamente no rio, puxando o barco cada vez mais para baixo. Ainda anestesiado pelo luto Orfeu não percebeu o momento exato que havia se juntado às outras almas, agora nadando eternamente em agonia junto com elas...............', 50, gameOver);
       }
   if (x == 'choice3'){
       displayer('Orfeu rapidamente se afastou da figura infernal. Estava ali atrás de sua amada e não pretendia perder seu tempo com ninguém mais e mesmo desorientado seguiu ao redor do rio a procura de uma melhor forma de chegar do outro lado sem se dar conta das almas que agonizavam em silêncio debaixo das águas. Ainda anestesiado pelo luto Orfeu não percebeu o momento exato em que havia seguido o apelo silencioso e cativante das outras almas, se juntado a elas embaixo do Rio Estige................', 50, gameOver);
   }
       if (x == 'choice2'){
       choiceDisplayer('Tirar a sua própria vida para que Caronte assim possa transportar sua alma', 'Expressar sua angústia e motivação através da lira', 'Tocar seu instrumento para obrigar Caronte a fazer a travessia.')
       displayer('O barqueiro o ouviu silenciosamente e ao término da explicação revelou que seu nome era Caronte e que ele era responsável por levar atravessar as almas dos mortos para o outro o submundo, mas não podia fazer isso com Orfeu uma vez que ele ainda estava vivo.', 50, makeVisible);
       for (const choice of input){
           choice.onclick = function(){scene4()};
       }
   }
}
 
function scene4() {
   let x = window.event.target.id;
 
   if (x == 'choice1'){
       displayer('Se esse era mesmo o preço Orfeu estava disposto a pagar e sem pensar duas vezes cortou sua própria garganta e sangrou até sua alma deixar o corpo. \n\n\nSua alma então adentrou o barco de Caronte para realizar a travessia porém o que o barqueiro não havia contado era que era necessário morrer com uma moeda embaixo da língua para pagar a passagem e um suicida sem moeda não iria de forma alguma atravessar, mas sua alma agora já agonizava junto com as demais no fundo do rio...............', 50, gameOver);
       }
   if (x == 'choice3'){
       displayer('Sem dar oportunidade para qualquer tipo de reação da figura a sua frente, Orfeu passou seus dedos pelas cordas da lira fazendo a figura sair do barco do qual rapidamente tomou posse deixando o homem que ali estava para trás. Ele continuou tocando agora fazendo com que o barco se mantivesse em movimento sem se dar conta das almas que agonizavam silenciosamente no rio, puxando o barco cada vez mais para baixo. Ainda anestesiado pelo luto Orfeu não percebeu o momento exato que havia se juntado às outras almas, agora nadando eternamente em agonia junto com elas...............', 50, gameOver);
   }
       if (x == 'choice2'){
       choiceDisplayer('Tocar sua lira para convencer o cão a saltar no rio', 'Brincar com o cão a fim de acalmá-lo', 'Tentar acalmar o cão ao som de uma melodia')
       displayer('Embriagado pela música de Orfeu, Caronte decidiu fazer a travessia, mas não sem antes alertá-lo de que ele não seria seu único obstáculo. Um guardião infeliz e raivoso iria esperar ele do outro lado do rio e mesmo se conseguisse passar por ele ainda teria que enfrentar o próprio deus do Mundo Inferior. Hades. Do qual não tinha misericórdia.\n\n\nAo fim do trajeto Orfeu saltou do barco se deparando com uma figura surpreendente do qual só havia ouvido falar em suas cantigas de ninar. Se tratava do cão gigante de três cabeças, Cérbero.', 50, makeVisible);
       for (const choice of input){
           choice.onclick = function(){scene5()};
       }
   }
}
 
function scene5() {
   let x = window.event.target.id;
 
   if (x == 'choice1'){
       displayer('Ao som da sua lira o cão salta no rio e Orfeu segue em frente rumo a morada de Hades. Ele agora estava mais perto do que nunca de reencontrar com sua amada e já se permitia de ter esperança em tê-la, porém um movimento rápido vindo das suas costas rapidamente mudou seu destino. O cão infernal, que vivia a beira do Rio Estige, não havia sido afetado pelas suas águas e agora as suas três cabeças disputavam o maior pedaço do corpo de Morfeu, que tendo sido devorado sem uma moeda no boca ficou com sua alma eternamente presa do lado de fora do inferno, afastado de sua amada eternamente no Rio Estige...............', 50, gameOver);
       }
   if (x == 'choice2'){
       displayer('Treinado para não deixar ninguém passar o cão rapidamente aceitou brincar com Orfeu e enquanto suas três cabeças dividia o corpo agora morto do músico, o monstro ficava gradualmente mais calmo................', 50, gameOver);
   }
       if (x == 'choice3'){
       choiceDisplayer('Exigir humildemente que devolvam a vida de sua noiva', 'Implorar respeitosamente para ser ouvido por Hades.', 'Começar a tocar para Perséfone a música de sua história com Eurídes')
       displayer('Uma-a-uma, as três cabeças do gigante quadrúpede se aquietaram ao som de Orfeu. E o que antes parecia uma fera monstruosa agora mais parecia um filhote babão. \n\n\nOrfeu então seguiu rumo ao castelo de Hades e ao mesmo tempo que se permitia cada vez mais sentir esperança, também cada vez temia mais não alcançar seu objetivo.\n\n\nAo chegar nos portões do castelo, Orfeu respirou fundo e entrou indo de encontro ao Rei e Rainha do inferno. Hades e Perséfone não pareciam amigáveis e pelo visto já tinham ciência da sua invasão.', 50, makeVisible);
       for (const choice of input){
           choice.onclick = function(){scene6()};
       }
   }
}
 
function scene6() {
   let x = window.event.target.id;
   if (x == 'choice1'|| x =='choice2'){
       displayer('O casal trocou um olhar cúmplice enquanto Orfeu falava até que a deusa interrompê-lo com um gesto. Ela e Hades pareciam ter se divertido com a idéia de um mortal ter conseguido chegar tão longe, mas nenhum dos dois se interessava mais do que isso pelas suas súplicas ou exigências. Orfeu não teve tempo para raciocinar o que havia acontecido quando os deuses destruíram seu corpo e alma. O privando eternamente de encontrar sua amada mesmo depois da morte............', 50, gameOver);
       }
   if (x == 'choice3'){
       displayer('A cada dedilhado em sua lira Orfeu colocava toda sua aflição pela perda da sua noiva e ao fim da música ele encarou a deusa pela primeira vez na vida se perguntando se sua música fora o suficiente.descobrir se havia sido o suficiente e após longos minutos de silêncio Hades tomou a frente parabenizando Orfeu pela sua jornada inédita e prometeu devolver a alma de sua amada, mas não sem antes impor uma cláusula ao seu contrato verbal:\n\n\nA jovem retornaria com Orfeu ao universo dos vivos, desde que o amante não olhasse para sua amada até estar novamente sob o Sol. Ele consegue resistir através de túneis sombrios e difíceis de atravessar, e já estava quase chegando à esfera iluminada quando, para ter certeza de que a noiva estava logo atrás, espia por um instante a parte final do caminho. Neste momento, Eurídice se transforma novamente em um espectro, lança um último grito e parte para a esfera dos mortos.\n\n………………', 50, loading4);
       }
   }
 
   function loading4() {
       displayer('Você "venceu".', 20);
   }