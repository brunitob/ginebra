var mensajes = [{msg:'Buenos días!', delay:500}, 
{msg:'Bienvenidos a Ginebra :) una forma nueva de enterarte de las noticias que importan', delay:1500}, 
{msg:'Te parece si empezamos?', resp:'allá vamos!', delay:500},{msg:'Excelente! empecemos.', delay:750},{msg:'Leicester logró la hazaña y gritó campeón en la Premier League', delay:500,source:'infobae'}];
//http://www.pictofit.com/

var objDiv = document.getElementById("screen");
var waitn = 0;

var q = d3.queue(1);


function start2(){
	for (i in mensajes){
			q.defer(delayedWait, mensajes[i].delay)
		    q.defer(delayedChat, mensajes[i].msg, 500)
		    if (mensajes[i].resp != null){
		    q.defer(delayedResp, mensajes[i].resp, 1000)
		    }
	};
  	q.defer(delayedOptions,'mesnaje',500)
    q.await(function(error) {
      if (error) throw error;
      console.log("Done por ahora!");
    });

};


function delayedChat(msg, delay, callback) {
  setTimeout(function() {	
    themFunction(msg);
    toBottom();
    callback(null);
  }, delay);
}

function delayedResp(msg, delay, callback) {
  setTimeout(function() {	
    meFunction(msg);
    toBottom();
    callback(null);
  }, delay);
}

function delayedWait(delay, callback) {
  setTimeout(function() {
  	waitingFun();
  	toBottom();
    callback(null);
  }, delay);
}

function delayedOptions(delay, callback) {
  setTimeout(function() {
  	optionsFunction();
  	toBottom();
    callback(null);
  }, delay);
}



function start(){
	for (i in mensajes)
		{
		  themFunction(mensajes[i].name);
		}
}

function themFunction(msg) {      
    toBottom();
    $('#screen').append('<div class="animated fadeIn"><div class="clear"></div><div class="from-them">'+msg+'</div></div>');   
}

function meFunction(msg) {
	$('#screen').append('<div class="clear"></div><div class="from-me">'+msg+'</div>') 
}

function optionsFunction(msg) {
	$('#screen').append('<div class="clear"></div><div class="options">Quiero saber más ⚽️</div>');
	$('#screen').append('<div class="clear"></div><div class="options">Próximo tema</div>')  
}

function waitingFun(){
	waitn = waitn + 1
	$('#screen').append('<div id="waiting'+waitn+'"><div class="clear"></div><div class="from-them"><img src="img/loader.gif"></div></div>');   
    hideWait(waitn);
}

function toBottom(){
	objDiv.scrollTop = objDiv.scrollHeight;
}

function hideWait(nro){
	setTimeout(function(){
    $('#waiting'+nro).hide();
	},500);
}

$( document ).ready(function() {
    start2();
});

