webpackJsonp([0],{27:function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"NegociacaoService",function(){return h});var e=c(6),f=c(1),g=c(2);let h=class{constructor(){this._http=new e.a}obtemNegociacoesDaSemana(){return this._http.get("http://localhost:3000/negociacoes/semana").then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es")})}obtemNegociacoesDaSemanaAnterior(){return this._http.get("http://localhost:3000/negociacoes/anterior").then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana anterior")})}obtemNegociacoesDaSemanaRetrasada(){return this._http.get("http://localhost:3000/negociacoes/retrasada").then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana retrasada")})}obtemNegociacoesDoPeriodo(){var a=this;return d(function*(){try{let b=yield Promise.all([a.obtemNegociacoesDaSemana(),a.obtemNegociacoesDaSemanaAnterior(),a.obtemNegociacoesDaSemanaRetrasada()]);return b.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.data.getTime()-c.data.getTime()})}catch(a){throw console.log(a),new g.a("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es do per\xEDodo")}})()}}}});