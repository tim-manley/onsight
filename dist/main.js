(()=>{"use strict";const e={1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G"};window.AudioContext=window.AudioContext||window.webkitAudioContext;var t,n,o,r,l,i,c=null,d=null,s=null,u=null;var m=new Float32Array(2048),f=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function g(e){new Array,d.getFloatTimeDomainData(m);var u,h,v=function(e,t){for(var n=e.length,o=0,r=0;r<n;r++){var l=e[r];o+=l*l}if((o=Math.sqrt(o/n))<.01)return-1;var i=0,c=n-1;for(r=0;r<n/2;r++)if(Math.abs(e[r])<.2){i=r;break}for(r=1;r<n/2;r++)if(Math.abs(e[n-r])<.2){c=n-r;break}n=(e=e.slice(i,c)).length;var d=new Array(n).fill(0);for(r=0;r<n;r++)for(var s=0;s<n-r;s++)d[r]=d[r]+e[s]*e[s+r];for(var u=0;d[u]>d[u+1];)u++;var m=-1,f=-1;for(r=u;r<n;r++)d[r]>m&&(m=d[r],f=r);var g=f,h=d[g-1],v=d[g],w=d[g+1];return a=(h+w-2*v)/2,b=(w-h)/2,a&&(g-=b/(2*a)),t/g}(m,c.sampleRate);if(s){n.clearRect(0,0,512,256),n.strokeStyle="red",n.beginPath(),n.moveTo(0,0),n.lineTo(0,256),n.moveTo(128,0),n.lineTo(128,256),n.moveTo(256,0),n.lineTo(256,256),n.moveTo(384,0),n.lineTo(384,256),n.moveTo(512,0),n.lineTo(512,256),n.stroke(),n.strokeStyle="black",n.beginPath(),n.moveTo(0,m[0]);for(var w=1;w<512;w++)n.lineTo(w,128+128*m[w]);n.stroke()}if(-1==v)t.className="vague",o.innerText="--",r.innerText="-",l.className="",i.innerText="--";else{t.className="confident",pitch=v,o.innerText=Math.round(pitch);var T=(u=pitch,h=Math.log(u/440)/Math.log(2)*12,Math.round(h)+69);r.innerHTML=f[T%12];var A=function(e,t){return Math.floor(1200*Math.log(e/function(e){return 440*Math.pow(2,(e-69)/12)}(t))/Math.log(2))}(pitch,T);Math.abs(A)<15?(l.className="",i.innerHTML="--"):(l.className=A<0?"flat":"sharp",i.innerHTML=Math.abs(A))}window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),window.requestAnimationFrame(g)}let h,v;function w(e){return"^"==e[0]?e[1]+"#":"="==e[0]?e[1]:e[0]}function T(e){let t=$("#target").find(`[data-index='${e}']`);if(null==t)return null;console.log(t);let n=t.children()[1];return console.log(n),n}function A(e){return T(e).getAttribute("data-name")}function M(e,t){let n=T(e);null!=n&&(n.style.color=t)}function p(){var t=function(t){let n="X:1\nT:Random Notes\nK:C\n";for(let t=0;t<8;t++)n+=Math.random()<.3?"^":"=",n=n+e[1+Math.floor(7*Math.random())]+"0 ";return n}();console.log(t),console.log(ABCJS),ABCJS.renderAbc("target",t),M(0,"red"),h=0,v=w(A(h))}window.onload=()=>{p(),h=0,document.getElementById("newExample").addEventListener("click",(()=>{p()})),document.getElementById("pitchDetect").addEventListener("click",(()=>{t=document.getElementById("detector"),document.getElementById("output"),(s=document.getElementById("waveform"))&&((n=s.getContext("2d")).strokeStyle="black",n.lineWidth=1),o=document.getElementById("pitch"),r=document.getElementById("note"),l=document.getElementById("detune"),i=document.getElementById("detune_amt"),t.ondragenter=function(){return this.classList.add("droptarget"),!1},t.ondragleave=function(){return this.classList.remove("droptarget"),!1},t.ondrop=function(e){this.classList.remove("droptarget"),e.preventDefault();var t=new FileReader;return t.onload=function(e){c.decodeAudioData(e.target.result,(function(e){}),(function(){alert("error loading!")}))},t.onerror=function(e){alert("Error: "+t.error)},t.readAsArrayBuffer(e.dataTransfer.files[0]),!1},c=new AudioContext,navigator.mediaDevices.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}}).then((e=>{u=c.createMediaStreamSource(e),console.log(u),console.log(c),d=c.createAnalyser(),console.log(d),d.fftSize=2048,u.connect(d),g()})).catch((e=>{console.error(`${e.name}: ${e.message}`),alert("Stream generation failed.")}))}))};let y=0;setInterval((function(){document.getElementById("note").innerHTML==v?(y+=100,y>=600&&(console.log("CORRECT!"),function(){M(h,"green"),h++,M(h,"red");let e=A(h);v=w(e)}(),y=0)):y=0}),100)})();