webpackJsonp([1],[,function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(4);let e=class{constructor(a=d.g("data"),b=d.g("quantidade"),c=d.g("valor")){Object.assign(this,{_quantidade:b,_valor:c}),this._data=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(a){return JSON.stringify(this)==JSON.stringify(a)}}},function(a,b,c){"use strict";function d(a){return a instanceof f||object.getPrototypeOf(a)instanceof f}c.d(b,"a",function(){return e}),b.b=function(a){return d(a)?a.message:(console.log(a),"N\xE3o doi poss\xEDvel realizar a opera\xE7\xE3o")};let e=class extends Error{constructor(a=""){super(a),this.name=this.constructor.name}};const f=e},,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearTimeout(f),f=setTimeout(()=>e.apply(this,b),a),console.log(c,"=> Executou o debounce")},d}}function f(...a){function b(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}const c=a.map((a)=>document.querySelector(a));return function(a){const d=a,e=function(){const a=new d(...c);return Object.getOwnPropertyNames(d.prototype).forEach((c)=>{Reflect.hasMetadata("bindEvent",a,c)&&b(a,Reflect.getMetadata("bindEvent",a,c))}),new d(...c)};return e.prototype=d.prototype,e}}function g(a){throw new Error(`${a} é um parâmetro obrigatório`)}function h(a=g("event"),b=g("selector"),c=!0){return function(d,e,f){return Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}Object.defineProperty(b,"__esModule",{value:!0});let i=class a{static create(b,c,d){return new Proxy(b,{get(b,c){return a._ehFuncao(b[c])&&["adiciona","esvazia"].includes(c)?function(){console.log(`"${c}" disparou a armadilha`),b[c].apply(b,arguments),d(b)}:b[c]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _ehFuncao(a){return typeof a==typeof Function}},j=class{constructor(a,b,...c){const d=i.create(a,c,(a)=>{b.update(a)});return b.update(a),d}};const k=["negociacoes"];let l=null,m=null,n=class a{constructor(){throw new Error("N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe")}static getConnection(){return new Promise((b,c)=>{if(l)return b(l);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{l=a.target.result,m=l.close.bind(l),l.close=()=>{throw new Error("Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o")},b(a.target.result)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static _createStores(a){k.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){l&&m()}};var o=c(5);let p=(()=>{var a=d(function*(){let a=yield n.getConnection();return new o.a(a)});return function(){return a.apply(this,arguments)}})();c.d(b,"a",function(){return j}),c.d(b,!1,function(){return n}),c.d(b,"f",function(){return p});var q=c(2);c.d(b,"e",function(){return q.b});c(6);c.d(b,!1,function(){return i}),c.d(b,"d",function(){return e}),c.d(b,"c",function(){return f}),c.d(b,"g",function(){return g}),c.d(b,"b",function(){return h})},function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(1);let e=class{constructor(a){this._connection=a,this._store="negociacoes"}adiciona(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c("N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o")}})}apagaTodos(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es")}})}listaTodos(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(e.value._data,e.value._quantidade,e.value._valor);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{console.log(a.targe.error),b("N\xE3o foi poss\xEDvel listar as negocia\xE7\xF5es")}})}}},function(a,b,c){"use strict";c.d(b,"a",function(){return d});let d=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}}},function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});let f=class{constructor(){this._negociacoes=[],Object.freeze(this)}get volumeTotal(){return this._negociacoes.reduce((a,b)=>a+b.volume,0)}adiciona(a){this._negociacoes.push(a)}paraArray(){return[].concat(this._negociacoes)}esvazia(){this._negociacoes.length=0}};var g=c(1),h=c(5);let i=class{constructor(a){this._elemento=document.querySelector(a)}update(a){this._elemento.innerHTML=this.template(a)}template(){throw new Error("Voc\xEA precisa implementar o m\xE9todo template")}},j=class extends i{template(a){return a.texto?`<p class="alert alert-info">${a.texto}</p>`:`<p></p>`}};var k=c(2);let l=class extends k.a{constructor(){super("A data deve estar no formato dd/mm/aaaa")}},m=class{constructor(){throw new Error("Esta classe n\xE3o pode ser instanciada")}static paraTexto(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static paraData(a){if(!/\d{2}\/\d{2}\/\d{4}/.test(a))throw new l;return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}},n=class extends i{template(a){return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${a.paraArray().map((a)=>`
                    <tr>
                        <td>${m.paraTexto(a.data)}</td>
                        <td>${a.quantidade}</td>
                        <td>${a.valor}</td>
                        <td>${a.volume}</td>
                    </tr>
                    `).join("")} 
                    
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${a.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `}},o=class{constructor(a=""){this._texto=a}get texto(){return this._texto}set texto(a){this._texto=a}};var p,q,r,s,t,u,v,w,x=c(4);let y=(p=x.c("#data","#quantidade","#valor"),q=x.b("click","#botao-importa"),r=x.d(1500),s=x.b("submit",".form"),t=x.d(1500),u=x.b("click","#botao-apaga"),p(v=(w=class{constructor(a,b,c){Object.assign(this,{_inputData:a,_inputQuantidade:b,_inputValor:c}),this._negociacoes=new x.a(new f(),new n("#negociacoes"),"adiciona","esvazia"),this._mensagem=new x.a(new o(),new j("#mensagemView"),"texto"),this._init()}_init(){var a=this;return d(function*(){try{const b=yield x.f(),c=yield b.listaTodos();c.forEach(function(b){return a._negociacoes.adiciona(b)})}catch(b){a._mensagem.texto=x.e(b)}})()}importaNegociacoes(){var a=this;return d(function*(){try{const{NegociacaoService:b}=yield c.e(0).then(c.bind(null,27)),d=new b,e=yield d.obtemNegociacoesDoPeriodo();console.log(e),e.filter(function(b){return!a._negociacoes.paraArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negociacoes.adiciona(b)}),a._mensagem.texto="Negocia\xE7\xF5es do per\xEDodo importadas com sucesso"}catch(b){a._mensagem.texto=x.e(b)}})()}adiciona(a){var b=this;return d(function*(){try{a.preventDefault();const c=b._criaNegociacao(),d=yield x.f();yield d.adiciona(c),b._negociacoes.adiciona(c),b._mensagem.texto="Negocia\xE7\xE3o adicionada com sucesso",b._limpaFormulario()}catch(a){b._mensagem.texto=x.e(a)}})()}apaga(){var a=this;return d(function*(){try{const b=yield x.f();yield b.apagaTodos(),a._negociacoes.esvazia(),a._mensagem.texto="Negocia\xE7\xF5es apagadas com sucesso"}catch(b){a._mensagem.texto=x.e(b)}})()}_limpaFormulario(){this._inputData.value="",this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus()}_criaNegociacao(){return new g.a(m.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}},e(w.prototype,"importaNegociacoes",[q,r],Object.getOwnPropertyDescriptor(w.prototype,"importaNegociacoes"),w.prototype),e(w.prototype,"adiciona",[s,t],Object.getOwnPropertyDescriptor(w.prototype,"adiciona"),w.prototype),e(w.prototype,"apaga",[u],Object.getOwnPropertyDescriptor(w.prototype,"apaga"),w.prototype),w))||v);(function(a){var b=c(8),d=c.n(b),e=c(9),f=c.n(e),h=c(3),i=c.n(h),j=c(10),k=c.n(j);a("h1").on("click",()=>alert("Foi clicado!")),console.log("Fun\xE7\xE3o adicionada pelo bootstrap:"),console.log(a("h1").modal);const l=new g.a(new Date(),5,250),m=new Headers;m.set("Content-Type","application/json");const n=JSON.stringify(l);fetch("http://localhost:3000/negociacoes",{method:"POST",headers:m,body:n}).then(()=>console.log("Dado enviado com sucesso"));new y}).call(b,c(0))},function(){},function(){},function(){}],[7]);