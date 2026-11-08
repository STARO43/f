"use strict";(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,ml=1,hh=2;var ar=1,uh=2,ds=3,fi=0,Vt=1,Rn=2,Ai=0,fs=1,or=2,gl=3,_l=4,dh=5;var Ri=100,fh=101,ph=102,mh=103,gh=104,_h=200,xh=201,vh=202,yh=203,xl=204,vl=205,bh=206,Mh=207,Sh=208,Eh=209,wh=210,Th=211,Ah=212,Rh=213,Ch=214,Jr=0,Kr=1,jr=2,ji=3,Qr=4,ea=5,ta=6,na=7,yl=0,Ph=1,Ih=2,Cn=0,bl=1,Ml=2,Sl=3,lr=4,El=5,wl=6,Tl=7;var Al=300,Ci=301,ps=302,Fa=303,Oa=304,Ei=1e3,Mn=1001,ia=1002,Rt=1003,Lh=1004;var cr=1005;var Lt=1006,Ba=1007;var Yn=1008;var qt=1009,Rl=1010,Cl=1011,ms=1012,ka=1013,gn=1014,_n=1015,xn=1016,za=1017,Ha=1018,Pi=1020,Pl=35902,Il=35899,Ll=1021,Dl=1022,vn=1023,Vn=1026,Zn=1027,Ul=1028,Ga=1029,pi=1030,Va=1031;var Wa=1033,hr=33776,ur=33777,dr=33778,fr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ja=37492,Ka=37496,ja=37488,Qa=37489,pr=37490,eo=37491,to=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,_o=36494,xo=36495,vo=36283,yo=36284,mr=36285,bo=36286;var Ds=2300,sa=2301,Zr=2302,ol=2303,ll=2400,cl=2401,hl=2402;var Dh=3200;var Mo=0,Uh=1,$n="",At="srgb",Us="srgb-linear",Ns="linear",tt="srgb";var $r=7680;var Nh=519,Fh=512,Oh=513,Bh=514,Nl=515,kh=516,zh=517,Fl=518,Ol=519,Bl=35044;var kl="300 es",on=2e3,Qi=2001;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=Fs("canvas");return i.style.display="block",i}var Ac={},es=null;function Os(...i){let e="THREE."+i.shift();es?es("log",e,...i):console.log(e,...i)}function Gh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Gh(i);let e="THREE."+i.shift();if(es)es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=Gh(i);let e="THREE."+i.shift();if(es)es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rs(...i){let e=i.join(" ");e in Ac||(Ac[e]=!0,Pe(...i))}function Vh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wh={[Jr]:Jr,[jr]:ta,[Qr]:Qr,[ji]:ea,[Kr]:Kr,[ta]:jr,[na]:na,[ea]:ji},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Cs=Math.PI/180,ts=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function zl(i,e){return(i%e+e)%e}function Ku(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ju(i,e,t){return i!==e?(t-i)/(e-i):0}function Ps(i,e,t){return(1-t)*i+t*e}function Qu(i,e,t,n){return Ps(i,e,1-Math.exp(-t*n))}function ed(i,e=1){return e-Math.abs(zl(i,e*2)-e)}function td(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function id(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sd(i,e){return i+Math.random()*(e-i)}function rd(i){return i*(.5-Math.random())}function ad(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function od(i){return i*Cs}function ld(i){return i*ts}function cd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ud(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),m=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function So(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gl(i,e){if(e.constructor===Float32Array)return i;let t=So(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Vl(i,e){if(e.constructor===Float32Array)return i;let t=So(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var gi={DEG2RAD:Cs,RAD2DEG:ts,generateUUID:mi,clamp:Ve,euclideanModulo:zl,mapLinear:Ku,inverseLerp:ju,lerp:Ps,damp:Qu,pingpong:ed,smoothstep:td,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:hd,floorPowerOfTwo:Hl,setQuaternionFromProperEuler:ud,normalize:Vl,denormalize:Gl},me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(m!==v||l!==u||c!==d||h!==g){let f=l*u+c*d+h*g+m*v;f<0&&(u=-u,d=-d,g=-g,v=-v,f=-f);let p=1-o;if(f<.9995){let M=Math.acos(f),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,m=m*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,m=m*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=M,c*=M,h*=M,m*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*m+l*d-c*u,e[t+1]=l*g+h*u+c*m-o*d,e[t+2]=c*g+h*d+o*u-l*m,e[t+3]=h*g-o*m-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*d*g,this._y=c*d*m-u*h*g,this._z=c*h*g+u*d*m,this._w=c*h*m-u*d*g;break;case"YXZ":this._x=u*h*m+c*d*g,this._y=c*d*m-u*h*g,this._z=c*h*g-u*d*m,this._w=c*h*m+u*d*g;break;case"ZXY":this._x=u*h*m-c*d*g,this._y=c*d*m+u*h*g,this._z=c*h*g+u*d*m,this._w=c*h*m-u*d*g;break;case"ZYX":this._x=u*h*m-c*d*g,this._y=c*d*m+u*h*g,this._z=c*h*g-u*d*m,this._w=c*h*m+u*d*g;break;case"YZX":this._x=u*h*m+c*d*g,this._y=c*d*m+u*h*g,this._z=c*h*g-u*d*m,this._w=c*h*m-u*d*g;break;case"XZY":this._x=u*h*m-c*d*g,this._y=c*d*m-u*h*g,this._z=c*h*g+u*d*m,this._w=c*h*m+u*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],m=t[10],u=n+o+m;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>m){let d=2*Math.sqrt(1+n-o-m);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>m){let d=2*Math.sqrt(1+o-n-m);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+m-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new C,Cc=new Kt,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],d=n[5],g=n[8],v=s[0],f=s[3],p=s[6],M=s[1],E=s[4],b=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*f+o*E+l*T,r[6]=a*p+o*b+l*_,r[1]=c*v+h*M+m*A,r[4]=c*f+h*E+m*T,r[7]=c*p+h*b+m*_,r[2]=u*v+d*M+g*A,r[5]=u*f+d*E+g*T,r[8]=u*p+d*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*m+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=m*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oo=new Fe,Pc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:e,whitePoint:n,transfer:Ns,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var $e=dd();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Fs("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var pd=0,ko=new C,Gt=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Lt,a=Yn,o=vn,l=qt,c=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=mi(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Al;Gt.DEFAULT_ANISOTROPY=1;var dt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],m=l[8],u=l[1],d=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(d+1)/2,A=(p+1)/2,T=(h+u)/4,_=(m+v)/4,S=(g+f)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(m-v)*(m-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(m-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Gt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bs=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,m,u,d,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,m,u,d,g,v,f)}set(e,t,n,s,r,a,o,l,c,h,m,u,d,g,v,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=m,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*m,g=o*h,v=o*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=d+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*m,g=c*h,v=c*m;t[0]=u+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*m,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*m,g=c*h,v=c*m;t[0]=u-v*o,t[4]=-a*m,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*m,g=o*h,v=o*m;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+v,t[1]=l*m,t[5]=v*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*m,t[8]=g*m+d,t[1]=m,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*m+g,t[10]=u-v*m}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=u*m+v,t[5]=a*h,t[9]=d*m-g,t[2]=g*m-d,t[6]=o*h,t[10]=v*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),jn.crossVectors(n,$t),jn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),jn.crossVectors(n,$t)),jn.normalize(),Sr.crossVectors($t,jn),s[0]=jn.x,s[4]=Sr.x,s[8]=$t.x,s[1]=jn.y,s[5]=Sr.y,s[9]=$t.y,s[2]=jn.z,s[6]=Sr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],d=n[13],g=n[2],v=n[6],f=n[10],p=n[14],M=n[3],E=n[7],b=n[11],A=n[15],T=s[0],_=s[4],S=s[8],N=s[12],I=s[1],U=s[5],F=s[9],W=s[13],P=s[2],G=s[6],z=s[10],H=s[14],te=s[3],X=s[7],Q=s[11],ee=s[15];return r[0]=a*T+o*I+l*P+c*te,r[4]=a*_+o*U+l*G+c*X,r[8]=a*S+o*F+l*z+c*Q,r[12]=a*N+o*W+l*H+c*ee,r[1]=h*T+m*I+u*P+d*te,r[5]=h*_+m*U+u*G+d*X,r[9]=h*S+m*F+u*z+d*Q,r[13]=h*N+m*W+u*H+d*ee,r[2]=g*T+v*I+f*P+p*te,r[6]=g*_+v*U+f*G+p*X,r[10]=g*S+v*F+f*z+p*Q,r[14]=g*N+v*W+f*H+p*ee,r[3]=M*T+E*I+b*P+A*te,r[7]=M*_+E*U+b*G+A*X,r[11]=M*S+E*F+b*z+A*Q,r[15]=M*N+E*W+b*H+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],m=e[6],u=e[10],d=e[14],g=e[3],v=e[7],f=e[11],p=e[15],M=l*d-c*u,E=o*d-c*m,b=o*u-l*m,A=a*d-c*h,T=a*u-l*h,_=a*m-o*h;return t*(v*M-f*E+p*b)-n*(g*M-f*A+p*T)+s*(g*E-v*A+p*_)-r*(g*b-v*T+f*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=e[9],u=e[10],d=e[11],g=e[12],v=e[13],f=e[14],p=e[15],M=t*o-n*a,E=t*l-s*a,b=t*c-r*a,A=n*l-s*o,T=n*c-r*o,_=s*c-r*l,S=h*v-m*g,N=h*f-u*g,I=h*p-d*g,U=m*f-u*v,F=m*p-d*v,W=u*p-d*f,P=M*W-E*F+b*U+A*I-T*N+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(o*W-l*F+c*U)*G,e[1]=(s*F-n*W-r*U)*G,e[2]=(v*_-f*T+p*A)*G,e[3]=(u*T-m*_-d*A)*G,e[4]=(l*I-a*W-c*N)*G,e[5]=(t*W-s*I+r*N)*G,e[6]=(f*b-g*_-p*E)*G,e[7]=(h*_-u*b+d*E)*G,e[8]=(a*F-o*I+c*S)*G,e[9]=(n*I-t*F-r*S)*G,e[10]=(g*T-v*b+p*M)*G,e[11]=(m*b-h*T-d*M)*G,e[12]=(o*N-a*U-l*S)*G,e[13]=(t*U-n*N+s*S)*G,e[14]=(v*E-g*A-f*M)*G,e[15]=(h*A-m*E+u*M)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,m=o+o,u=r*c,d=r*h,g=r*m,v=a*h,f=a*m,p=o*m,M=l*c,E=l*h,b=l*m,A=n.x,T=n.y,_=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(u+p))*T,s[6]=(f+M)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(f-M)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);let c=1/a,h=1/o,m=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=m,dn.elements[9]*=m,dn.elements[10]*=m,t.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=on,l=!1){let c=this.elements,h=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qi)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=on,l=!1){let c=this.elements,h=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===on)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qi)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new C,dn=new nt,md=new C(0,0,0),gd=new C(1,1,1),jn=new C,Sr=new C,$t=new C,Lc=new nt,Dc=new Kt,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Uc=new C,Fi=new Kt,Fn=new nt,Er=new C,ys=new C,xd=new C,vd=new Kt,Nc=new C(1,0,0),Fc=new C(0,1,0),Oc=new C(0,0,1),Bc={type:"added"},yd={type:"removed"},Oi={type:"childadded",child:null},zo={type:"childremoved",child:null},Ct=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Wn,n=new Kt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Fe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ys,Er,this.up):Fn.lookAt(Er,ys,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),m=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new C(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=zl(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ho(a,r,e+1/3),this.g=Ho(a,r,e),this.b=Ho(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return $e.workingToColorSpace(Ft.copy(this),e),Math.round(Ve(Ft.r*255,0,255))*65536+Math.round(Ve(Ft.g*255,0,255))*256+Math.round(Ve(Ft.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=At){$e.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(wr);let n=Ps(Qn.h,wr.h,t),s=Ps(Qn.s,wr.s,t),r=Ps(Qn.l,wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new De;De.NAMES=Xh;var ks=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new C,On=new C,Go=new C,Bn=new C,Bi=new C,ki=new C,kc=new C,Vo=new C,Wo=new C,Xo=new C,qo=new dt,Yo=new dt,Zo=new dt,Hn=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),On.subVectors(n,t),Go.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(On),l=fn.dot(Go),c=On.dot(On),h=On.dot(Go),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qo.setScalar(0),Yo.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),Zo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),On.subVectors(e,t),fn.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),ki.subVectors(r,n),Vo.subVectors(e,n);let l=Bi.dot(Vo),c=ki.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,s);let h=Bi.dot(Wo),m=ki.dot(Wo);if(h>=0&&m<=h)return t.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);Xo.subVectors(e,r);let d=Bi.dot(Xo),g=ki.dot(Xo);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);let f=h*g-d*m;if(f<=0&&m-h>=0&&d-g>=0)return kc.subVectors(r,s),o=(m-h)/(m-h+(d-g)),t.copy(s).addScaledVector(kc,o);let p=1/(f+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Ar.subVectors(this.max,bs),zi.subVectors(e.a,bs),Hi.subVectors(e.b,bs),Gi.subVectors(e.c,bs),ei.subVectors(Hi,zi),ti.subVectors(Gi,Hi),yi.subVectors(zi,Gi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-yi.z,yi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!$o(t,zi,Hi,Gi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,zi,Hi,Gi,Ar))?!1:(Rr.crossVectors(ei,ti),t=[Rr.x,Rr.y,Rr.z],$o(t,zi,Hi,Gi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new C,new C,new C,new C,new C,new C,new C,new C],pn=new C,Tr=new Xt,zi=new C,Hi=new C,Gi=new C,ei=new C,ti=new C,yi=new C,bs=new C,Ar=new C,Rr=new C,bi=new C;function $o(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _t=new C,Cr=new me,Md=0,ln=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?So(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vl(e,this.array)}};var Hs=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sd=new Xt,Ms=new C,Jo=new C,wi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);let t=Ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Jo)),this.expandByPoint(Ms.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ed=0,an=new nt,Ko=new Ct,Vi=new C,Jt=new Xt,Ss=new Xt,Tt=new C,Pt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?Gs:Hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Jt.min,Ss.min),Jt.expandByPoint(Tt),Tt.addVectors(Jt.max,Ss.max),Jt.expandByPoint(Tt)):(Jt.expandByPoint(Ss.min),Jt.expandByPoint(Ss.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Tt.add(Vi)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new C,l[N]=new C;let h=new C,m=new C,u=new C,d=new me,g=new me,v=new me,f=new C,p=new C;function M(N,I,U){c[N]=c[I]=c[U]=1,h.fromBufferAttribute(n,N),m.fromBufferAttribute(n,I),u.fromBufferAttribute(n,U),d.fromBufferAttribute(r,N),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,U),m.sub(h),u.sub(h),g.sub(d),v.sub(d);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(f.copy(m).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(F),p.copy(u).multiplyScalar(g.x).addScaledVector(m,-v.x).multiplyScalar(F),o[N].add(f),o[I].add(f),o[U].add(f),l[N].add(p),l[I].add(p),l[U].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,I=E.length;N<I;++N){let U=E[N],F=U.start,W=U.count;for(let P=F,G=F+W;P<G;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new C,A=new C,T=new C,_=new C;function S(N){T.fromBufferAttribute(s,N),_.copy(T);let I=o[N];b.copy(I),b.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(_,I);let F=A.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,F)}for(let N=0,I=n.count;N<I;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,m=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new ln(u,h,m)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let d=c[m];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,d=m.length;u<d;u++)h.push(m[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},la=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function zc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var kt=new C,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?So(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vl(e,this.data.array)}},jo=new C,wd=new C,Td=new Fe,zt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jo.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Td.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ad=0,Sn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=fs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wi,Es=new C,Xi=new C,qi=new C,Yi=new me,ws=new me,qh=new nt,Pr=new C,Ts=new C,Ir=new C,Hc=new me,Qo=new me,Gc=new me,Ws=class extends Ct{constructor(e=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new la(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Vs(n,3,0,!1)),Wi.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Lr(Pr.set(-.5,-.5,0),qi,a,Xi,s,r),Lr(Ts.set(.5,-.5,0),qi,a,Xi,s,r),Lr(Ir.set(.5,.5,0),qi,a,Xi,s,r),Hc.set(0,0),Qo.set(1,0),Gc.set(1,1);let o=e.ray.intersectTriangle(Pr,Ts,Ir,!1,Es);if(o===null&&(Lr(Ts.set(-.5,.5,0),qi,a,Xi,s,r),Qo.set(0,1),o=e.ray.intersectTriangle(Pr,Ir,Ts,!1,Es),o===null))return;let l=e.ray.origin.distanceTo(Es);l<e.near||l>e.far||t.push({distance:l,point:Es.clone(),uv:Hn.getInterpolation(Es,Pr,Ts,Ir,Hc,Qo,Gc,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Lr(i,e,t,n,s,r){Yi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ws.x=r*Yi.x-s*Yi.y,ws.y=s*Yi.x+r*Yi.y):ws.copy(Yi),i.copy(e),i.x+=ws.x,i.y+=ws.y,i.applyMatrix4(qh)}var zn=new C,el=new C,Dr=new C,Ur=new C,ii=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Ur.dot(this.direction),l=-Ur.dot(Dr),c=Ur.lengthSq(),h=Math.abs(1-a*a),m,u,d,g;if(h>0)if(m=a*l-o,u=a*o-l,g=r*h,m>=0)if(u>=-g)if(u<=g){let v=1/h;m*=v,u*=v,d=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),d=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),d=-m*m+u*(u+2*l)+c;else u<=-g?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),d=-m*m+u*(u+2*l)+c):u<=g?(m=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),d=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),d=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(el).addScaledVector(Dr,u),d}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,f=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,b=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,S,N,I,U,F,W,P,G,z,H,te;if(b>=A&&b>=T?(N=l,F=m,G=g,te=p,l>=0?(_=c,S=h,I=u,U=d,W=v,P=f,z=M,H=E):(_=h,S=c,I=d,U=u,W=f,P=v,z=E,H=M)):A>=T?(N=c,F=u,G=v,te=M,c>=0?(_=h,S=l,I=d,U=m,W=f,P=g,z=E,H=p):(_=l,S=h,I=m,U=d,W=g,P=f,z=p,H=E)):(N=h,F=d,G=f,te=E,h>=0?(_=l,S=c,I=m,U=u,W=g,P=v,z=p,H=M):(_=c,S=l,I=u,U=m,W=v,P=g,z=M,H=p)),N===0)return null;let X=_/N,Q=S/N,ee=1/N,Se=I-X*F,Ne=U-Q*F,Z=W-X*G,pe=P-Q*G,be=z-X*te,Re=H-Q*te,ge=be*pe-Re*Z,Oe=Se*Re-Ne*be,pt=Z*Ne-pe*Se;if(s){if(ge<0||Oe<0||pt<0)return null}else if((ge<0||Oe<0||pt<0)&&(ge>0||Oe>0||pt>0))return null;let Ie=ge+Oe+pt;if(Ie===0)return null;let je=ee*(ge*F+Oe*G+pt*te);return(Ie>0?je<0:je>0)?null:this.at(je/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vc=new nt,Mi=new ii,Nr=new wi,Wc=new C,Fr=new C,Or=new C,Br=new C,tl=new C,kr=new C,Xc=new C,zr=new C,ze=class extends Ct{constructor(e=new Pt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(tl.fromBufferAttribute(m,e),a?kr.addScaledVector(tl,h):kr.addScaledVector(tl.sub(t),h))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Nr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Nr,Wc)===null||Mi.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=a[f.materialIndex],M=Math.max(f.start,d.start),E=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let b=M,A=E;b<A;b+=3){let T=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=Hr(this,p,e,n,c,h,m,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){let M=o.getX(f),E=o.getX(f+1),b=o.getX(f+2);s=Hr(this,a,e,n,c,h,m,M,E,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=a[f.materialIndex],M=Math.max(f.start,d.start),E=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let b=M,A=E;b<A;b+=3){let T=b,_=b+1,S=b+2;s=Hr(this,p,e,n,c,h,m,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){let M=f,E=f+1,b=f+2;s=Hr(this,a,e,n,c,h,m,M,E,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Rd(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===fi,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fr),i.getVertexPosition(l,Or),i.getVertexPosition(c,Br);let h=Rd(i,e,t,n,Fr,Or,Br,Xc);if(h){let m=new C;Hn.getBarycoord(Xc,Fr,Or,Br,m),s&&(h.uv=Hn.getInterpolatedAttribute(s,o,l,c,m,new me)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,o,l,c,m,new me)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,m,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Hn.getNormal(Fr,Or,Br,u.normal),h.face=u,h.barycoord=m}return h}var ca=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rt,h=Rt,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new wi,Cd=new me(.5,.5),Gr=new C,si=class{constructor(e=new zt,t=new zt,n=new zt,s=new zt,r=new zt,a=new zt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],d=r[7],g=r[8],v=r[9],f=r[10],p=r[11],M=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-g,A-M).normalize(),s[1].setComponents(c+a,d+h,p+g,A+M).normalize(),s[2].setComponents(c+o,d+m,p+v,A+E).normalize(),s[3].setComponents(c-o,d-m,p-v,A-E).normalize(),n)s[4].setComponents(l,u,f,b).normalize(),s[5].setComponents(c-l,d-u,p-f,A-b).normalize();else if(s[4].setComponents(c-l,d-u,p-f,A-b).normalize(),t===on)s[5].setComponents(c+l,d+u,p+f,A+b).normalize();else if(t===Qi)s[5].setComponents(l,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=Cd.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qc=new nt,ha=class i{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];qc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new si),n[s].setFromProjectionMatrix(qc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new si),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var as=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ua=new C,da=new C,Yc=new nt,As=new ii,Vr=new wi,nl=new C,Zc=new C,os=class extends Ct{constructor(e=new Pt,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ua.fromBufferAttribute(t,s-1),da.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ua.distanceTo(da);e.setAttribute("lineDistance",new it(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Yc.copy(s).invert(),As.copy(e.ray).applyMatrix4(Yc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,f=g-1;v<f;v+=c){let p=h.getX(v),M=h.getX(v+1),E=Wr(this,e,As,l,p,M,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(g-1),f=h.getX(d),p=Wr(this,e,As,l,v,f,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,f=g-1;v<f;v+=c){let p=Wr(this,e,As,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Wr(this,e,As,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),t.distanceSqToSegment(ua,da,nl,Zc)>n)return;nl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(nl);if(!(c<e.near||c>e.far))return{distance:c,point:Zc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $c=new C,Jc=new C,fa=class extends os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$c.fromBufferAttribute(t,s),Jc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$c.distanceTo(Jc);e.setAttribute("lineDistance",new it(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xs=class extends Gt{constructor(e=[],t=Ci,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends Gt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Gt{constructor(e,t,n=gn,s,r,a,o=Rt,l=Rt,c,h=Vn,m=1){if(h!==Vn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qs=class extends Xn{constructor(e,t=gn,n=Ci,s,r,a=Rt,o=Rt,l,c=Vn){let h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ai=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(m,2));function g(v,f,p,M,E,b,A,T,_,S,N){let I=b/_,U=A/S,F=b/2,W=A/2,P=T/2,G=_+1,z=S+1,H=0,te=0,X=new C;for(let Q=0;Q<z;Q++){let ee=Q*U-W;for(let Se=0;Se<G;Se++){let Ne=Se*I-F;X[v]=Ne*M,X[f]=ee*E,X[p]=P,c.push(X.x,X.y,X.z),X[v]=0,X[f]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),m.push(Se/_),m.push(1-Q/S),H+=1}}for(let Q=0;Q<S;Q++)for(let ee=0;ee<_;ee++){let Se=u+ee+G*Q,Ne=u+ee+G*(Q+1),Z=u+(ee+1)+G*(Q+1),pe=u+(ee+1)+G*Q;l.push(Se,Ne,pe),l.push(Ne,Z,pe),te+=6}o.addGroup(d,te,N),d+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ls=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,u=3;m<=t;m++,u+=3){let d=n+m/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],d=[],g=0,v=[],f=n/2,p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(d,2));function M(){let b=new C,A=new C,T=0,_=(t-e)/n;for(let S=0;S<=r;S++){let N=[],I=S/r,U=I*(t-e)+e;for(let F=0;F<=s;F++){let W=F/s,P=W*l+o,G=Math.sin(P),z=Math.cos(P);A.x=U*G,A.y=-I*n+f,A.z=U*z,m.push(A.x,A.y,A.z),b.set(G,_,z).normalize(),u.push(b.x,b.y,b.z),d.push(W,1-I),N.push(g++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let I=v[N][S],U=v[N+1][S],F=v[N+1][S+1],W=v[N][S+1];(e>0||N!==0)&&(h.push(I,U,W),T+=3),(t>0||N!==r-1)&&(h.push(U,F,W),T+=3)}c.addGroup(p,T,0),p+=T}function E(b){let A=g,T=new me,_=new C,S=0,N=b===!0?e:t,I=b===!0?1:-1;for(let F=1;F<=s;F++)m.push(0,f*I,0),u.push(0,I,0),d.push(.5,.5),g++;let U=g;for(let F=0;F<=s;F++){let P=F/s*l+o,G=Math.cos(P),z=Math.sin(P);_.x=N*z,_.y=f*I,_.z=N*G,m.push(_.x,_.y,_.z),u.push(0,I,0),T.x=G*.5+.5,T.y=z*.5*I+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){let W=A+F,P=U+F;b===!0?h.push(P,P+1,W):h.push(P+1,P,W),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oi=class i extends cn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new nt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Zs=class extends hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*m+this.aX,c=u*m+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pa=class extends Zs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+m)+(l-o)/m;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Kc=new C,jc=new C,il=new Wl,sl=new Wl,rl=new Wl,En=class extends hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(jc.subVectors(s[0],s[1]).add(s[0]),c=jc);let m=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Kc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(m),d),v=Math.pow(m.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),il.initNonuniformCatmullRom(c.x,m.x,u.x,h.x,g,v,f),sl.initNonuniformCatmullRom(c.y,m.y,u.y,h.y,g,v,f),rl.initNonuniformCatmullRom(c.z,m.z,u.z,h.z,g,v,f)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,m.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,m.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,m.z,u.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pd(i,e){let t=1-i;return t*t*e}function Id(i,e){return 2*(1-i)*i*e}function Ld(i,e){return i*i*e}function Is(i,e,t,n){return Pd(i,e)+Id(i,t)+Ld(i,n)}function Dd(i,e){let t=1-i;return t*t*t*e}function Ud(i,e){let t=1-i;return 3*t*t*i*e}function Nd(i,e){return 3*(1-i)*i*i*e}function Fd(i,e){return i*i*i*e}function Ls(i,e,t,n,s){return Dd(i,e)+Ud(i,t)+Nd(i,n)+Fd(i,s)}var ma=class extends hn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(e,s.x,r.x,a.x,o.x),Ls(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends hn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(e,s.x,r.x,a.x,o.x),Ls(e,s.y,r.y,a.y,o.y),Ls(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends hn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends hn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends hn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends hn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y),Is(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Qc(o,l.x,c.x,h.x,m.x),Qc(o,l.y,c.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Od=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:En,CubicBezierCurve:ma,CubicBezierCurve3:ga,EllipseCurve:Zs,LineCurve:_a,LineCurve3:xa,QuadraticBezierCurve:va,QuadraticBezierCurve3:$s,SplineCurve:ya});var Ti=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=e/o,u=t/l,d=[],g=[],v=[],f=[];for(let p=0;p<h;p++){let M=p*u-a;for(let E=0;E<c;E++){let b=E*m-r;g.push(b,-M,0),v.push(0,0,1),f.push(E/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let E=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;d.push(E,b,T),d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var wn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],m=new C,u=new C,d=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){let M=[],E=p/n,b=a+E*o,A=e*Math.cos(b),T=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let N=S/t,I=s+N*r;m.x=-T*Math.cos(I),m.y=A,m.z=T*Math.sin(I),g.push(m.x,m.y,m.z),u.copy(m).normalize(),v.push(u.x,u.y,u.z),f.push(N+_,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let E=h[p][M+1],b=h[p][M],A=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&d.push(E,b,T),(p!==n-1||l<Math.PI)&&d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],m=[],u=new C,d=new C,g=new C;for(let v=0;v<=n;v++){let f=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(e+t*Math.cos(f))*Math.cos(M),d.y=(e+t*Math.cos(f))*Math.sin(M),d.z=t*Math.sin(f),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),m.push(p/s),m.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){let p=(s+1)*v+f-1,M=(s+1)*(v-1)+f-1,E=(s+1)*(v-1)+f,b=(s+1)*v+f;l.push(p,M,b),l.push(M,E,b)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var qn=class i extends Pt{constructor(e=new $s(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new me,h=new C,m=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(d,2));function v(){for(let E=0;E<t;E++)f(E);f(r===!1?t:0),M(),p()}function f(E){h=e.getPointAt(E/t,h);let b=a.normals[E],A=a.binormals[E];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,S=Math.sin(_),N=-Math.cos(_);l.x=N*b.x+S*A.x,l.y=N*b.y+S*A.y,l.z=N*b.z+S*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,m.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let A=(s+1)*(E-1)+(b-1),T=(s+1)*E+(b-1),_=(s+1)*E+b,S=(s+1)*(E-1)+b;g.push(A,T,S),g.push(T,_,S)}}function M(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)c.x=E/t,c.y=b/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Od[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ii(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(eh(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(eh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=Ii(i[t]);for(let s in n)e[s]=n[s]}return e}function eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Yh={clone:Ii,merge:Ot},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ma=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Js=class extends as{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ea=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=e,o=2*t-n;break;case hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:a=e,l=2*n-t;break;case hl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,f=v*g,p=-u*f+2*u*v-u*g,M=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-d)*f+(1.5+d)*v+.5*g,b=d*f-d*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[c+A]+E*a[l+A]+b*a[m+A];return r}},wa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},Ta=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let g=(n-t)/(s-t),v=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*v+a[l+f]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],f=a[l+g],p=d*u+g*2,M=m[p],E=m[p+1],b=e*u+g*2,A=h[b],T=h[b+1],_=Gd(n,t,M,A,s);r[g]=Zh(_,v,E,T,f)}return r}};function Zh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Hd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var en=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xr(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case Zr:t=this.InterpolantFactoryMethodSmooth;break;case ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Zr;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Xr(this.settings)&&(th(this.settings.inTangents,e),th(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xr(this.settings)&&(nh(this.settings.inTangents,e),nh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ju(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,u=m-n,d=m+n;for(let g=0;g!==n;++g){let v=t[m+g];if(v!==t[u+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[m+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function nh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=sa;var ci=class extends en{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ds;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="color";var Ca=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ca.prototype.ValueTypeName="number";var Pa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends en{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends en{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ds;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let d=c[m],g=c[m+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$h=new La,Da=class{constructor(e){this.manager=e!==void 0?e:$h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qs=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},al=new nt,ih=new C,sh=new C,Ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qr=new C,Yr=new Kt,bn=new C,er=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qr,Yr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Yr,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qr,Yr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Yr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new C,rh=new me,ah=new me,Ht=class extends er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,rh,ah),t.subVectors(ah,rh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tr=class extends er{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends Ua{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=-90,Ji=1,hs=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht($i,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Ht($i,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Ht($i,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Ht($i,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Ht($i,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Ht($i,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ql="\\[\\]\\.:\\/",Vd=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Wd="[^"+ql.replace("\\.","")+"]",Xd=/((?:WC+[\/:])*)/.source.replace("WC",Yl),qd=/(WCOD+)?/.source.replace("WCOD",Wd),Yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Zd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),$d=new RegExp("^"+Xd+qd+Yd+Zd+"$"),Jd=["material","materials","bones","map"],dl=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vd,"")}static parseTrackName(e){let t=$d.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=dl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I_=new Float32Array(1);var oh=new nt,nr=class{constructor(e,t,n=0,s=1/0){this.ray=new ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(lh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fl(e[s],this,n,t);return n.sort(lh),n}};function lh(i,e){return i.distance-e.distance}function fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],e,t,!0)}}var ir=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},us=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var sr=class extends fa{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Pt;r.setIndex(new ln(n,1)),r.setAttribute("position",new it(s,3)),super(r,new as({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var rr=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Zl(i,e,t,n){let s=Kd(n);switch(t){case Ll:return i*e;case Ul:return i*e/s.components*s.byteLength;case Ga:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Va:return i*e*2/s.components*s.byteLength;case Dl:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Wa:return i*e*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Ja:case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case pr:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case go:case _o:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mr:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kd(i){switch(i){case qt:case Rl:return{byteLength:1,components:1};case ms:case Cl:case xn:return{byteLength:2,components:1};case za:case Ha:return{byteLength:2,components:4};case gn:case ka:case _n:return{byteLength:4,components:1};case Pl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<m.length;d++){let g=m[u],v=m[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,m[u]=v)}m.length=u+1;for(let d=0,g=m.length;d<g;d++){let v=m[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:vf,color_fragment:yf,color_pars_fragment:bf,color_pars_vertex:Mf,color_vertex:Sf,common:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:If,envmap_fragment:Lf,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:qf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:kf,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:Zf,lights_phong_fragment:$f,lights_phong_pars_fragment:Jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:jf,lights_fragment_begin:Qf,lights_fragment_maps:ep,lights_fragment_end:tp,lightprobes_pars_fragment:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:xp,normal_fragment_maps:vp,normal_pars_fragment:yp,normal_pars_vertex:bp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Ip,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:kp,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:Zp,transmission_pars_fragment:$p,uv_pars_fragment:Jp,uv_pars_vertex:Kp,uv_vertex:jp,worldpos_vertex:Qp,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distance_vert:lm,distance_frag:cm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:_m,meshmatcap_vert:xm,meshmatcap_frag:vm,meshnormal_vert:ym,meshnormal_frag:bm,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Im,sprite_vert:Lm,sprite_frag:Dm},xe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},In={basic:{uniforms:Ot([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Ot([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Ot([xe.lights,xe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};In.physical={uniforms:Ot([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Eo={r:0,b:0,g:0},Um=new nt,xu=new Fe;xu.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let b=M.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(M){let E=!1,b=d(M);b===null?f(a,o):b&&b.isColor&&(f(b,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,E){let b=d(E);b&&b.isCubeTexture?(c===void 0&&(c=new ze(new ai(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ii(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xu),c.material.toneMapped=$e.getTransfer(b.colorSpace)!==tt,(h!==b||m!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,m=b.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ze(new Ti(2,2),new An({name:"BackgroundMaterial",uniforms:Ii(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||m!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,m=b.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,E){M.getRGB(Eo,Xl(i)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:g,addToRenderList:v,dispose:p}}function Fm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,F,W,P,G){let z=!1,H=m(U,P,W,F);r!==H&&(r=H,c(r.object)),z=d(U,P,W,G),z&&g(U,P,W,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(U,F,W,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function m(U,F,W,P){let G=P.wireframe===!0,z=n[F.id];z===void 0&&(z={},n[F.id]=z);let H=U.isInstancedMesh===!0?U.id:0,te=z[H];te===void 0&&(te={},z[H]=te);let X=te[W.id];X===void 0&&(X={},te[W.id]=X);let Q=X[G];return Q===void 0&&(Q=u(l()),X[G]=Q),Q}function u(U){let F=[],W=[],P=[];for(let G=0;G<t;G++)F[G]=0,W[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:P,object:U,attributes:{},index:null}}function d(U,F,W,P){let G=r.attributes,z=F.attributes,H=0,te=W.getAttributes();for(let X in te)if(te[X].location>=0){let ee=G[X],Se=z[X];if(Se===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),ee===void 0||ee.attribute!==Se||Se&&ee.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(U,F,W,P){let G={},z=F.attributes,H=0,te=W.getAttributes();for(let X in te)if(te[X].location>=0){let ee=z[X];ee===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));let Se={};Se.attribute=ee,ee&&ee.data&&(Se.data=ee.data),G[X]=Se,H++}r.attributes=G,r.attributesNum=H,r.index=P}function v(){let U=r.newAttributes;for(let F=0,W=U.length;F<W;F++)U[F]=0}function f(U){p(U,0)}function p(U,F){let W=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;W[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),G[U]!==F&&(i.vertexAttribDivisor(U,F),G[U]=F)}function M(){let U=r.newAttributes,F=r.enabledAttributes;for(let W=0,P=F.length;W<P;W++)F[W]!==U[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function E(U,F,W,P,G,z,H){H===!0?i.vertexAttribIPointer(U,F,W,G,z):i.vertexAttribPointer(U,F,W,P,G,z)}function b(U,F,W,P){v();let G=P.attributes,z=W.getAttributes(),H=F.defaultAttributeValues;for(let te in z){let X=z[te];if(X.location>=0){let Q=G[te];if(Q===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let ee=Q.normalized,Se=Q.itemSize,Ne=e.get(Q);if(Ne===void 0)continue;let Z=Ne.buffer,pe=Ne.type,be=Ne.bytesPerElement,Re=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===ka;if(Q.isInterleavedBufferAttribute){let ge=Q.data,Oe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,pt=Q.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)p(X.location+Ie,ge.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)f(X.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ie=0;Ie<X.locationSize;Ie++)E(X.location+Ie,Se/X.locationSize,pe,ee,Oe*be,(pt+Se/X.locationSize*Ie)*be,Re)}else{if(Q.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,Q.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<X.locationSize;ge++)f(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ge=0;ge<X.locationSize;ge++)E(X.location+ge,Se/X.locationSize,pe,ee,Se*be,Se/X.locationSize*ge*be,Re)}}else if(H!==void 0){let ee=H[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}M()}function A(){N();for(let U in n){let F=n[U];for(let W in F){let P=F[W];for(let G in P){let z=P[G];for(let H in z)h(z[H].object),delete z[H];delete P[G]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let W in F){let P=F[W];for(let G in P){let z=P[G];for(let H in z)h(z[H].object),delete z[H];delete P[G]}}delete n[U.id]}function _(U){for(let F in n){let W=n[F];for(let P in W){let G=W[P];if(G[U.id]===void 0)continue;let z=G[U.id];for(let H in z)h(z[H].object),delete z[H];delete G[U.id]}}}function S(U){for(let F in n){let W=n[F],P=U.isInstancedMesh===!0?U.id:0,G=W[P];if(G!==void 0){for(let z in G){let H=G[z];for(let te in H)h(H[te].object),delete H[te];delete G[z]}delete W[P],Object.keys(W).length===0&&delete n[F]}}}function N(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:f,disableUnusedAttributes:M}}function Om(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==qt&&_!==_n&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:T}}function km(i){let e=this,t=null,n=0,s=!1,r=!1,a=new zt,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let d=m.length!==0||u||n!==0||s;return s=u,n=m.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=h(m,u,0)},this.setState=function(m,u,d){let g=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,p=i.get(m);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let M=r?0:n,E=M*4,b=p.clippingState||null;l.value=b,b=h(g,u,E,d);for(let A=0;A!==E;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,u,d,g){let v=m!==null?m.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let E=0,b=d;E!==v;++E,b+=4)a.copy(m[E]).applyMatrix4(M,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}var xr=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Ai});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Lt),new hs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Jh=256,zm=3,Hm=20,vu=256,yu=16,Gm=3,Vm=new C,Wm=new De,To=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new ze(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Wm));let f=new hs(n,s,h);return f.position.copy(o),f.update(l,e),l.autoClear=m,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jh,Hl(e))}_fromTexture(e,t){e.mapping===Ci||e.mapping===ps?this._setSize(e.image.length===0?Jh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-zm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ci||e.mapping===ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Xm(),this._integrationMaterial=qm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Gm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(vu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ym());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Kh(i,e,t){return new xr(i,{minFilter:Yn,generateMipmaps:e,type:xn,colorSpace:Us,depthBuffer:t})}function vr(i,e,t){return new An({name:i,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Vt,blending:Ai,depthTest:!1,depthWrite:!1})}function Xm(){return vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qm(){return vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ym(){return vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jh(){return vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qh(){return vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Fa||d===Oa)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new xr(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===Fa||d===Oa,v=d===Ci||d===ps;if(g||v){let f=t.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new To(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new To(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,d){return d===Fa?u.mapping=Ci:d===Oa&&(u.mapping=ps),u}function l(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function $m(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let f in g.attributes)e.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let f in v)e.update(v[f],i.ARRAY_BUFFER)}function m(g){let v=g.index,f=g.attributes.position,p=0;if(f===void 0)return;let M=v!==null?v.array.length:f.array.length/3-1,E=f.count>=65535?Gs:Hs,b=new E(Math.ceil(M/3)*6,1),A=b.array;if(v!==null){let _=v.array;p=v.version;for(let S=0,N=0;S<M;S+=3){let I=_[S+0],U=_[S+1],F=_[S+2];A[N++]=I,A[N++]=U,A[N++]=U,A[N++]=F,A[N++]=F,A[N++]=I}}else{p=f.version;for(let _=0,S=0;_<M;_+=3){let N=_+0,I=_+1,U=_+2;A[S++]=N,A[S++]=I,A[S++]=I,A[S++]=U,A[S++]=U,A[S++]=N}}b.version=p;let T=r.get(g);T&&e.remove(T),r.set(g,b)}function u(g){let v=r.get(g);if(v){let f=g.index;f!==null&&v.version<f.version&&m(g)}else m(g);return r.get(g)}function d(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Km(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),t.update(u,n,1)}function c(m,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,m*a,d),t.update(u,n,d))}function h(m,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,d);let v=0;for(let f=0;f<d;f++)v+=u[f];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*m),_=new Bs(T,b,A,m);_.type=_n,_.needsUpdate=!0;let S=E*4;for(let I=0;I<m;I++){let U=f[I],F=p[I],W=M[I],P=b*A*4*I;for(let G=0;G<U.count;G++){let z=G*S;d===!0&&(s.fromBufferAttribute(U,G),T[P+z+0]=s.x,T[P+z+1]=s.y,T[P+z+2]=s.z,T[P+z+3]=0),g===!0&&(s.fromBufferAttribute(F,G),T[P+z+4]=s.x,T[P+z+5]=s.y,T[P+z+6]=s.z,T[P+z+7]=0),v===!0&&(s.fromBufferAttribute(W,G),T[P+z+8]=s.x,T[P+z+9]=s.y,T[P+z+10]=s.z,T[P+z+11]=W.itemSize===4?s.w:1)}}u={count:m,texture:_,size:new me(b,A)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=e.get(c,m);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var t0={[bl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[lr]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Tl]:"NEUTRAL_TONE_MAPPING",[El]:"CUSTOM_TONE_MAPPING"};function n0(i,e,t,n,s,r){let a=new jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));let m=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ze(h,m),d=new tr(-1,1,1,-1,0,1),g=null,v=null,f=!1,p,M=null,E=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(A,T)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new jt(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new jt(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Xn(T,_),r===!0&&(c.format=Zn,c.type=Pi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<E.length;N++){let I=E[N];I.setSize&&I.setSize(T,_),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,T){if(f||A.toneMapping===Cn&&E.length===0)return!1;if(M=T,T!==null){let _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Cn,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=p,f=!0;let _=a,S=o;for(let N=0;N<E.length;N++){let I=E[N];I.enabled!==!1&&(I.render(A,S,_,T),I.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,m.defines={},$e.getTransfer(g)===tt&&(m.defines.SRGB_TRANSFER="");let N=t0[v];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(u,d),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),m.dispose()}}var bu=new Gt,Mu=new Xn(1,1),Su=new qs(1),Eu=new Bs,wu=new oa,Tu=new Xs,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function _s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ro(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function o0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Mt(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Mt(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Mt(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Co(i){return i.version===0&&(i.compareFunction=Ol,i.needsUpdate=!0),i}function x0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Co(Mu):r=bu,t.setTexture2D(e||r,s)}function v0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Co(Su):r=Tu,t.setTextureCube(e||r,s)}function b0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eu,s)}function M0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return b0}}function S0(i,e){i.uniform1fv(this.addr,e)}function E0(i,e){let t=_s(e,this.size,2);i.uniform2fv(this.addr,t)}function w0(i,e){let t=_s(e,this.size,3);i.uniform3fv(this.addr,t)}function T0(i,e){let t=_s(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){let t=_s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){let t=_s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){let t=_s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P0(i,e){i.uniform1iv(this.addr,e)}function I0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function D0(i,e){i.uniform4iv(this.addr,e)}function U0(i,e){i.uniform1uiv(this.addr,e)}function N0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function B0(i,e,t){let n=this.cache,s=e.length,r=Ro(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Co(Mu):a=bu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=Ro(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wu,r[a])}function z0(i,e,t){let n=this.cache,s=e.length,r=Ro(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Co(Su):a=Tu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function H0(i,e,t){let n=this.cache,s=e.length,r=Ro(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eu,r[a])}function G0(i){switch(i){case 5126:return S0;case 35664:return E0;case 35665:return w0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return I0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}var Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}},jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}},Ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function V0(i,e,t){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ru(t,c===void 0?new Kl(o,i,e):new jl(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Ql(o),ru(t,m)),t=m}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);V0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W0=37297,X0=0;function q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ou=new Fe;function Y0(i){$e._getMatrix(ou,$e.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Ns:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q0(i.getShaderSource(e),o)}else return r}function Z0(i,e){let t=Y0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $0={[bl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[lr]:"ACESFilmic",[wl]:"AgX",[Tl]:"Neutral",[El]:"Custom"};function J0(i,e){let t=$0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wo=new C;function K0(){$e.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Q0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(tg,ng)}function ng(i,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ec(t)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(ig,sg)}function sg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var rg={[ar]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function ag(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[ps]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cg={[yl]:"ENVMAP_BLENDING_MULTIPLY",[Ph]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ag(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lg(t),m=hg(t),u=j0(t),d=Q0(r),g=s.createProgram(),v,f,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(_r).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(v=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?We.tonemapping_pars_fragment:"",t.toneMapping!==Cn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=ec(a),a=cu(a,t),a=hu(a,t),o=ec(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=p+v+a,E=p+f+o,b=au(s,s.VERTEX_SHADER,M),A=au(s,s.FRAGMENT_SHADER,E);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(b)||"",W=s.getShaderInfoLog(A)||"",P=U.trim(),G=F.trim(),z=W.trim(),H=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,A);else{let X=lu(s,b,"vertex"),Q=lu(s,A,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?Pe("WebGLProgram: Program Info Log:",P):(G===""||z==="")&&(te=!1);te&&(I.diagnostics={runnable:H,programLog:P,vertexShader:{log:G,prefix:v},fragmentShader:{log:z,prefix:f}})}s.deleteShader(b),s.deleteShader(A),_=new gs(s,g),S=eg(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,W0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}var dg=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nc(e),t.set(e,n)),n}},nc=class{constructor(e){this.id=dg++,this.code=e,this.usedTimes=0}};function fg(i){return i===pi||i===pr||i===mr}function pg(i,e,t,n,s,r){let a=new is,o=new tc,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,N,I,U,F){let W=I.fog,P=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||G,z),te=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0,Se=0;P.morphAttributes.position!==void 0&&(Se=1),P.morphAttributes.normal!==void 0&&(Se=2),P.morphAttributes.color!==void 0&&(Se=3);let Ne,Z,pe,be;if(te){let _e=In[te];Ne=_e.vertexShader,Z=_e.fragmentShader}else{Ne=_.vertexShader,Z=_.fragmentShader;let _e=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,_e,rt),pe=_e.id,be=rt.id}let Re=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,Ie=!!_.map,je=!!_.matcap,st=!!H,Xe=st&&H.isPMREMTexture===!0,xt=!!_.aoMap,mt=!!_.lightMap,re=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,qe=!!_.displacementMap,Je=!!_.emissiveMap,tn=!!_.metalnessMap,nn=!!_.roughnessMap,sn=_.anisotropy>0,D=_.clearcoat>0,rn=_.diffuseRoughness>0,ht=_.dispersion>0,ut=_.retroreflectivity>0,fe=_.iridescence>0,vt=_.sheen>0,Le=_.transmission>0,Be=sn&&!!_.anisotropyMap,w=D&&!!_.clearcoatMap,x=D&&!!_.clearcoatNormalMap,B=D&&!!_.clearcoatRoughnessMap,ne=rn&&!!_.diffuseRoughnessMap,j=fe&&!!_.iridescenceMap,ae=fe&&!!_.iridescenceThicknessMap,ue=vt&&!!_.sheenColorMap,Y=vt&&!!_.sheenRoughnessMap,$=!!_.specularMap,le=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Le&&!!_.transmissionMap,q=Le&&!!_.thicknessMap,ce=!!_.gradientMap,se=!!_.alphaMap,oe=_.alphaTest>0,Ae=!!_.alphaHash,Ge=!!_.extensions,ie=Cn;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=Xe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,He={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:Z,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:je,envMap:st,envMapMode:st&&H.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ce.length-1:null,envMapSize:Xe?Ce[0].width:null,aoMap:xt,lightMap:mt,bumpMap:re,normalMap:ve,displacementMap:qe,emissiveMap:Je,normalMapObjectSpace:ve&&_.normalMapType===Uh,normalMapTangentSpace:ve&&_.normalMapType===Mo,packedNormalMap:ve&&_.normalMapType===Mo&&fg(_.normalMap.format),metalnessMap:tn,roughnessMap:nn,anisotropy:sn,anisotropyMap:Be,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:rn,diffuseRoughnessMap:ne,dispersion:ht,retroreflection:ut,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:vt,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:$,specularColorMap:le,specularIntensityMap:R,transmission:Le,transmissionMap:J,thicknessMap:q,gradientMap:ce,opaque:_.transparent===!1&&_.blending===fs&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Ae,combine:_.combine,mapUv:Ie&&d(_.map.channel),aoMapUv:xt&&d(_.aoMap.channel),lightMapUv:mt&&d(_.lightMap.channel),bumpMapUv:re&&d(_.bumpMap.channel),normalMapUv:ve&&d(_.normalMap.channel),displacementMapUv:qe&&d(_.displacementMap.channel),emissiveMapUv:Je&&d(_.emissiveMap.channel),metalnessMapUv:tn&&d(_.metalnessMap.channel),roughnessMapUv:nn&&d(_.roughnessMap.channel),anisotropyMapUv:Be&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(_.sheenRoughnessMap.channel),specularMapUv:$&&d(_.specularMap.channel),specularColorMapUv:le&&d(_.specularColorMap.channel),specularIntensityMapUv:R&&d(_.specularIntensityMap.channel),transmissionMapUv:J&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:se&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||sn),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Ie||se),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(S,_),p(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=u[_.type],N;if(S){let I=In[S];N=Yh.clone(I.uniforms)}else N=_.uniforms;return N}function E(_,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new ug(i,S,_,s),c.push(N),h.set(S,N)),N}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function mg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function gg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,f,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:f,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=f,M.group=p),e++,M}function l(u,d,g,v,f,p,M){M.reversedDepth===!0&&(f=-f);let E=o(u,d,g,v,f,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,d,g,v,f,p){let M=o(u,d,g,v,f,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||gg),n.length>1&&n.sort(d||fu),s.length>1&&s.sort(d||fu)}function m(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function _g(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new De};break;case"SpotLight":t={position:new C,direction:new C,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yg=0;function bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mg(i){let e=new xg,t=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new nt,a=new nt;function o(c){let h=0,m=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,f=0,p=0,M=0,E=0,b=0,A=0,T=0,_=0,S=0,N=0,I=0;c.sort(bg);for(let F=0,W=c.length;F<W;F++){let P=c[F],G=P.color,z=P.intensity,H=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pi?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*z,m+=G.g*z,u+=G.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);I++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=te;let Se=Q.getViewportCount();for(let Ne=0;Ne<Se;Ne++)n.sunShadowMatrix[v+Ne]=Q.getMatrix(Ne),n.sunShadowCascade[v+Ne]=Q._cascadeData[Ne];v+=Se,g++}n.sun[d]=X,d++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;let Q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Q.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=te,_++}M++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=X,E++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[b]=X,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==f||U.pointLength!==p||U.spotLength!==M||U.rectAreaLength!==E||U.hemiLength!==b||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==_||U.numSpotMaps!==S||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=f,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,U.sunLength=d,U.directionalLength=f,U.pointLength=p,U.spotLength=M,U.rectAreaLength=E,U.hemiLength=b,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=_,U.numSpotMaps=S,U.numLightProbes=I,n.version=yg++)}function l(c,h){let m=0,u=0,d=0,g=0,v=0,f=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let b=c[M];if(b.isSunLight){let A=n.sun[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(b.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let A=n.hemi[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function mu(i){let e=new Mg(i),t=[],n=[],s=[];function r(m){h.camera=m,t.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):t.push(m)}function o(m){n.push(m)}function l(){e.setup(t),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function c(m){e.setupView(t,m)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tg=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Ag=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],gu=new nt,gr=new C,Jl=new C;function Rg(i,e,t){let n=new si,s=new me,r=new me,a=new dt,o=new Ma,l=new Sa,c={},h=t.maxTextureSize,m={[fi]:Vt,[Vt]:fi,[Rn]:Rn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Eg,fragmentShader:wg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let p=this.type;this.render=function(T,_,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===uh&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);let N=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=p!==this.type;W&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=T.length;P<G;P++){let z=T[P],H=z.shadow;if(H===void 0){Pe("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ds){if(z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new jt(s.x,s.y,{format:pi,type:xn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Xn(s.x,s.y,_n),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt}else z.isPointLight?(H.map=new xr(s.x),H.map.depthTexture=new qs(s.x,gn)):(H.map=new jt(s.x,s.y),H.map.depthTexture=new Xn(s.x,s.y,gn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===ar?(H.map.depthTexture.compareFunction=X?Fl:Nl,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,S);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Se=0;Se<Q;Se++){let Ne=H.getCamera(Se);if(z.isPointLight){let Z=H.camera,pe=H.matrix,be=z.distance||Z.far;be!==Z.far&&(Z.far=be,Z.updateProjectionMatrix()),gr.setFromMatrixPosition(z.matrixWorld),Z.position.copy(gr),Jl.copy(Z.position),Jl.add(Tg[Se]),Z.up.copy(Ag[Se]),Z.lookAt(Jl),Z.updateMatrixWorld(),pe.makeTranslation(-gr.x,-gr.y,-gr.z),gu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gu,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(H.map),i.clear());let Z=H.getViewport(Se);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}n=H.getFrustum(Se),b(_,S,Ne,z,ee,this.type)}H.isPointLightShadow!==!0&&this.type===ds&&M(H,S),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(N,I,U)};function M(T,_){let S=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new jt(s.x,s.y,{format:pi,type:xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,S,d,v,null)}function E(T,_,S,N){let I=null,U=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)I=U;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=I.uuid,W=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let G=P[W];G===void 0&&(G=I.clone(),P[W]=G,_.addEventListener("dispose",A)),I=G}if(I.visible=_.visible,I.wireframe=_.wireframe,N===ds?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:m[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=S}return I}function b(T,_,S,N,I,U){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ds)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=e.update(T),G=T.material;if(Array.isArray(G)){let z=P.groups;for(let H=0,te=z.length;H<te;H++){let X=z[H],Q=G[X.materialIndex];if(Q&&Q.visible){let ee=E(T,Q,N,U);T.onBeforeShadow(i,T,_,S,P,ee,X),i.renderBufferDirect(S,null,P,ee,T,X),T.onAfterShadow(i,T,_,S,P,ee,X)}}}else if(G.visible){let z=E(T,G,N,U);T.onBeforeShadow(i,T,_,S,P,z,null),i.renderBufferDirect(S,null,P,z,T,null),T.onAfterShadow(i,T,_,S,P,z,null)}}let W=T.children;for(let P=0,G=W.length;P<G;P++)b(W[P],_,S,N,I,U)}function A(T){T.target.removeEventListener("dispose",A);for(let S in c){let N=c[S],I=T.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function Cg(i,e){function t(){let R=!1,J=new dt,q=null,ce=new dt(0,0,0,0);return{setMask:function(se){q!==se&&!R&&(i.colorMask(se,se,se,se),q=se)},setLocked:function(se){R=se},setClear:function(se,oe,Ae,Ge,ie){ie===!0&&(se*=Ge,oe*=Ge,Ae*=Ge),J.set(se,oe,Ae,Ge),ce.equals(J)===!1&&(i.clearColor(se,oe,Ae,Ge),ce.copy(J))},reset:function(){R=!1,q=null,ce.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,q=null,ce=null,se=null;return{setReversed:function(oe){if(J!==oe){let Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),J=oe;let Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return J},setTest:function(oe){oe?ge(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(oe){q!==oe&&!R&&(i.depthMask(oe),q=oe)},setFunc:function(oe){if(J&&(oe=Wh[oe]),ce!==oe){switch(oe){case Jr:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=oe}},setLocked:function(oe){R=oe},setClear:function(oe){se!==oe&&(se=oe,J&&(oe=1-oe),i.clearDepth(oe))},reset:function(){R=!1,q=null,ce=null,se=null,J=!1}}}function s(){let R=!1,J=null,q=null,ce=null,se=null,oe=null,Ae=null,Ge=null,ie=null;return{setTest:function(Ce){R||(Ce?ge(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!R&&(i.stencilMask(Ce),J=Ce)},setFunc:function(Ce,He,_e){(q!==Ce||ce!==He||se!==_e)&&(i.stencilFunc(Ce,He,_e),q=Ce,ce=He,se=_e)},setOp:function(Ce,He,_e){(oe!==Ce||Ae!==He||Ge!==_e)&&(i.stencilOp(Ce,He,_e),oe=Ce,Ae=He,Ge=_e)},setLocked:function(Ce){R=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){R=!1,J=null,q=null,ce=null,se=null,oe=null,Ae=null,Ge=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},m={},u={},d=new WeakMap,g=[],v=null,f=!1,p=null,M=null,E=null,b=null,A=null,T=null,_=null,S=new De(0,0,0),N=0,I=!1,U=null,F=null,W=null,P=null,G=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let Q=null,ee={},Se=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Z=new dt().fromArray(Se),pe=new dt().fromArray(Ne);function be(R,J,q,ce){let se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(R,oe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<q;Ae++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(J+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return oe}let Re={};Re[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(ji),re(!1),ve(ml),ge(i.CULL_FACE),xt(Ai);function ge(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Oe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function pt(R,J){return u[R]!==J?(i.bindFramebuffer(R,J),u[R]=J,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(R,J){let q=g,ce=!1;if(R){q=d.get(J),q===void 0&&(q=[],d.set(J,q));let se=R.textures;if(q.length!==se.length||q[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ae=se.length;oe<Ae;oe++)q[oe]=i.COLOR_ATTACHMENT0+oe;q.length=se.length,ce=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(q)}function je(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let st={[Ri]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};st[mh]=i.MIN,st[gh]=i.MAX;let Xe={[_h]:i.ZERO,[xh]:i.ONE,[vh]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[bh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(R,J,q,ce,se,oe,Ae,Ge,ie,Ce){if(R===Ai){f===!0&&(Oe(i.BLEND),f=!1);return}if(f===!1&&(ge(i.BLEND),f=!0),R!==dh){if(R!==p||Ce!==I){if((M!==Ri||A!==Ri)&&(i.blendEquation(i.FUNC_ADD),M=Ri,A=Ri),Ce)switch(R){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case or:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",R);break}else switch(R){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",R);break}E=null,b=null,T=null,_=null,S.set(0,0,0),N=0,p=R,I=Ce}return}se=se||J,oe=oe||q,Ae=Ae||ce,(J!==M||se!==A)&&(i.blendEquationSeparate(st[J],st[se]),M=J,A=se),(q!==E||ce!==b||oe!==T||Ae!==_)&&(i.blendFuncSeparate(Xe[q],Xe[ce],Xe[oe],Xe[Ae]),E=q,b=ce,T=oe,_=Ae),(Ge.equals(S)===!1||ie!==N)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ie),S.copy(Ge),N=ie),p=R,I=!1}function mt(R,J){R.side===Rn?Oe(i.CULL_FACE):ge(i.CULL_FACE);let q=R.side===Vt;J&&(q=!q),re(q),R.blending===fs&&R.transparent===!1?xt(Ai):xt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ce=R.stencilWrite;o.setTest(ce),ce&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function ve(R){R!==ch?(ge(i.CULL_FACE),R!==F&&(R===ml?i.cullFace(i.BACK):R===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),F=R}function qe(R){R!==W&&(H&&i.lineWidth(R),W=R)}function Je(R,J,q){R?(ge(i.POLYGON_OFFSET_FILL),(P!==J||G!==q)&&(P=J,G=q,a.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):Oe(i.POLYGON_OFFSET_FILL)}function tn(R){R?ge(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function nn(R){R===void 0&&(R=i.TEXTURE0+z-1),Q!==R&&(i.activeTexture(R),Q=R)}function sn(R,J,q){q===void 0&&(Q===null?q=i.TEXTURE0+z-1:q=Q);let ce=ee[q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[q]=ce),(ce.type!==R||ce.texture!==J)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(R,J||Re[R]),ce.type=R,ce.texture=J)}function D(){let R=ee[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function rn(){try{i.compressedTexImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ut(){try{i.texSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function fe(){try{i.texSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Be(){try{i.texStorage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ne(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function j(R,J){m[R]!==J&&(i.pixelStorei(R,J),m[R]=J)}function ae(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ue(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function Y(R,J){let q=c.get(J);q===void 0&&(q=new WeakMap,c.set(J,q));let ce=q.get(R);ce===void 0&&(ce=i.getUniformBlockIndex(J,R.name),i.uniformBlockBinding(J,ce,ce),q.set(R,ce))}function $(R,J,q){let se=c.get(J).get(R);l[se]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,q),l[se]=q)}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},Q=null,ee={},u={},l={},d=new WeakMap,g=[],v=null,f=!1,p=null,M=null,E=null,b=null,A=null,T=null,_=null,S=new De(0,0,0),N=0,I=!1,U=null,F=null,W=null,P=null,G=null,Z.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Oe,bindFramebuffer:pt,drawBuffers:Ie,useProgram:je,setBlending:xt,setMaterial:mt,setFlipSided:re,setCullFace:ve,setLineWidth:qe,setPolygonOffset:Je,setScissorTest:tn,activeTexture:nn,bindTexture:sn,unbindTexture:D,compressedTexImage2D:rn,compressedTexImage3D:ht,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Be,texStorage3D:w,texSubImage2D:ut,texSubImage3D:fe,compressedTexSubImage2D:vt,compressedTexSubImage3D:Le,scissor:ae,viewport:ue,reset:le}}function Pg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,m=new Set,u,d=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,x){return f?new OffscreenCanvas(w,x):Fs("canvas")}function M(w,x,B){let ne=1,j=Be(w);if((j.width>B||j.height>B)&&(ne=B/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ae=Math.floor(ne*j.width),ue=Math.floor(ne*j.height);u===void 0&&(u=p(ae,ue));let Y=x?p(ae,ue):u;return Y.width=ae,Y.height=ue,Y.getContext("2d").drawImage(w,0,0,ae,ue),Pe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ue+")."),Y}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,B,ne,j,ae=!1){if(w!==null){if(i[w]!==void 0)return i[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),B===i.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),B===i.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),B===i.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let $=ae?Ns:$e.getTransfer(j);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=$===tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),B===i.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,x){let B;return w?x===null||x===gn||x===Pi?B=i.DEPTH24_STENCIL8:x===_n?B=i.DEPTH32F_STENCIL8:x===ms&&(B=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gn||x===Pi?B=i.DEPTH_COMPONENT24:x===_n?B=i.DEPTH_COMPONENT32F:x===ms&&(B=i.DEPTH_COMPONENT16),B}function S(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){let x=new WeakRef(w);n.get(w).__ref=x,g.add(x),v.register(w,x,x)}function I(w){let x=n.get(w).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function U(w){W(w.target)}function F(w){P(w.target)}function W(w){w.removeEventListener("dispose",U),I(w),z(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&m.delete(w)}function P(w){w.removeEventListener("dispose",F),I(w),te(w)}function G(){for(let w of g){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):W(x))}g.clear(),m.clear()}function z(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,ne=d.get(B);if(ne){let j=ne[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(w),Object.keys(ne).length===0&&d.delete(B)}n.remove(w)}function H(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,ne=d.get(B);delete ne[x.__cacheKey],a.memory.textures--}function te(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&W(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ae=0;ae<x.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ne=w.textures;for(let j=0,ae=ne.length;j<ae;j++){let ue=n.get(ne[j]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(w)}let X=0;function Q(){X=0}function ee(){return X}function Se(w){X=w}function Ne(){let w=X;return w>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Z(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function pe(w,x){let B=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let ne=w.image;if(ne===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function be(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){mt(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Re(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){mt(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function ge(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){re(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Oe={[Ei]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},pt={[Rt]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ie={[Fh]:i.NEVER,[Ol]:i.ALWAYS,[Oh]:i.LESS,[Nl]:i.LEQUAL,[Bh]:i.EQUAL,[Fl]:i.GEQUAL,[kh]:i.GREATER,[zh]:i.NOTEQUAL};function je(w,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===Ba||x.magFilter===cr||x.magFilter===Yn||x.minFilter===Lt||x.minFilter===Ba||x.minFilter===cr||x.minFilter===Yn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Oe[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Oe[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Oe[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==cr&&x.minFilter!==Yn||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",U),N(x));let ne=x.source,j=d.get(ne);j===void 0&&(j={},d.set(ne,j));let ae=Z(x);if(ae!==w.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ae].usedTimes++;let ue=j[w.__cacheKey];ue!==void 0&&(j[w.__cacheKey].usedTimes--,ue.usedTimes===0&&H(x)),w.__cacheKey=ae,w.__webglTexture=j[ae].texture}return B}function Xe(w,x,B){return Math.floor(Math.floor(w/B)/x)}function xt(w,x,B,ne){let ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ne,x.data);else{ae.sort((R,J)=>R.start-J.start);let ue=0;for(let R=1;R<ae.length;R++){let J=ae[ue],q=ae[R],ce=J.start+J.count,se=Xe(q.start,x.width,4),oe=Xe(J.start,x.width,4);q.start<=ce+1&&se===oe&&Xe(q.start+q.count-1,x.width,4)===se?J.count=Math.max(J.count,q.start+q.count-J.start):(++ue,ae[ue]=q)}ae.length=ue+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=ae.length;R<J;R++){let q=ae[R],ce=Math.floor(q.start/4),se=Math.ceil(q.count/4),oe=ce%x.width,Ae=Math.floor(ce/x.width),Ge=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,oe,Ae,Ge,ie,B,ne,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function mt(w,x,B){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);let j=st(w,x),ae=x.source;t.bindTexture(ne,w.__webglTexture,i.TEXTURE0+B);let ue=n.get(ae);if(ae.version!==ue.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=$e.getPrimaries($e.workingColorSpace),Ce=x.colorSpace===$n?null:$e.getPrimaries(x.colorSpace),He=x.colorSpace===$n||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=M(x.image,!1,s.maxTextureSize);$=Le(x,$);let le=r.convert(x.format,x.colorSpace),R=r.convert(x.type),J=T(x.internalFormat,le,R,x.normalized,x.colorSpace,x.isVideoTexture);je(ne,x);let q,ce=x.mipmaps,se=x.isVideoTexture!==!0,oe=ue.__version===void 0||j===!0,Ae=ae.dataReady,Ge=S(x,$);if(x.isDepthTexture)J=_(x.format===Zn,x.type),oe&&(se?t.texStorage2D(i.TEXTURE_2D,1,J,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,J,$.width,$.height,0,le,R,null));else if(x.isDataTexture)if(ce.length>0){se&&oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)q=ce[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,R,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,le,R,q.data);x.generateMipmaps=!1}else se?(oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,$.width,$.height),Ae&&xt(x,$,le,R)):t.texImage2D(i.TEXTURE_2D,0,J,$.width,$.height,0,le,R,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,ce[0].width,ce[0].height,$.depth);for(let ie=0,Ce=ce.length;ie<Ce;ie++)if(q=ce[ie],x.format!==vn)if(le!==null)if(se){if(Ae)if(x.layerUpdates.size>0){let He=Zl(q.width,q.height,x.format,x.type);for(let _e of x.layerUpdates){let rt=q.data.subarray(_e*He/q.data.BYTES_PER_ELEMENT,(_e+1)*He/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,_e,q.width,q.height,1,le,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,$.depth,le,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,$.depth,0,q.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,$.depth,le,R,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,$.depth,0,le,R,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)q=ce[ie],x.format!==vn?le!==null?se?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,q.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,R,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,le,R,q.data)}else if(x.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,$.width,$.height,$.depth),Ae)if(x.layerUpdates.size>0){let ie=Zl($.width,$.height,x.format,x.type);for(let Ce of x.layerUpdates){let He=$.data.subarray(Ce*ie/$.data.BYTES_PER_ELEMENT,(Ce+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,le,R,He)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,R,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,$.width,$.height,$.depth,0,le,R,$.data);else if(x.isData3DTexture)se?(oe&&t.texStorage3D(i.TEXTURE_3D,Ge,J,$.width,$.height,$.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,R,$.data)):t.texImage3D(i.TEXTURE_3D,0,J,$.width,$.height,$.depth,0,le,R,$.data);else if(x.isFramebufferTexture){if(oe)if(se)t.texStorage2D(i.TEXTURE_2D,Ge,J,$.width,$.height);else{let ie=$.width,Ce=$.height;for(let He=0;He<Ge;He++)t.texImage2D(i.TEXTURE_2D,He,J,ie,Ce,0,le,R,null),ie>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),m.add(x),ie.onpaint=Ce=>{let He=Ce.changedElements;for(let _e of m)He.includes(_e.image)&&(_e.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let He=i.RGBA,_e=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,_e,rt,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&oe){let ie=Be(ce[0]);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}for(let ie=0,Ce=ce.length;ie<Ce;ie++)q=ce[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,le,R,q):t.texImage2D(i.TEXTURE_2D,ie,J,le,R,q);x.generateMipmaps=!1}else if(se){if(oe){let ie=Be($);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,R,$)}else t.texImage2D(i.TEXTURE_2D,0,J,le,R,$);E(x)&&x.mipmapsAutoUpdate===!0&&b(ne),ue.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function re(w,x,B){if(x.image.length!==6)return;let ne=st(w,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let ae=n.get(j);if(j.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);let ue=$e.getPrimaries($e.workingColorSpace),Y=x.colorSpace===$n?null:$e.getPrimaries(x.colorSpace),$=x.colorSpace===$n||ue===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let _e=0;_e<6;_e++)!le&&!R?J[_e]=M(x.image[_e],!0,s.maxCubemapSize):J[_e]=R?x.image[_e].image:x.image[_e],J[_e]=Le(x,J[_e]);let q=J[0],ce=r.convert(x.format,x.colorSpace),se=r.convert(x.type),oe=T(x.internalFormat,ce,se,x.normalized,x.colorSpace),Ae=x.isVideoTexture!==!0,Ge=ae.__version===void 0||ne===!0,ie=j.dataReady,Ce=S(x,q);je(i.TEXTURE_CUBE_MAP,x);let He;if(x.isDepthTexture){if(oe=_(x.format===Zn,x.type),Ge)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,q.width,q.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,q.width,q.height,0,ce,se,null)}else if(le){Ae&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,oe,q.width,q.height);for(let _e=0;_e<6;_e++){He=J[_e].mipmaps;for(let rt=0;rt<He.length;rt++){let Et=He[rt];x.format!==vn?ce!==null?Ae?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,Et.width,Et.height,ce,Et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,oe,Et.width,Et.height,0,Et.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,Et.width,Et.height,ce,se,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,oe,Et.width,Et.height,0,ce,se,Et.data)}}}else{if(He=x.mipmaps,Ae&&Ge){He.length>0&&Ce++;let _e=Be(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(R){Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,J[_e].width,J[_e].height,ce,se,J[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,J[_e].width,J[_e].height,0,ce,se,J[_e].data);for(let rt=0;rt<He.length;rt++){let Jn=He[rt].image[_e].image;Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,Jn.width,Jn.height,ce,se,Jn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,oe,Jn.width,Jn.height,0,ce,se,Jn.data)}}else{Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ce,se,J[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,ce,se,J[_e]);for(let rt=0;rt<He.length;rt++){let Et=He[rt];Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,ce,se,Et.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,oe,ce,se,Et.image[_e])}}}E(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ae.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ve(w,x,B,ne,j,ae){let ue=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),$=T(B.internalFormat,ue,Y,B.normalized,B.colorSpace),le=n.get(x),R=n.get(B);if(R.__renderTarget=x,!le.__hasExternalTextures){let J=Math.max(1,x.width>>ae),q=Math.max(1,x.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,$,J,q,x.depth,0,ue,Y,null):t.texImage2D(j,ae,$,J,q,0,ue,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,R.__webglTexture,0,ut(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,R.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let ne=x.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,ae=_(x.stencilBuffer,j),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(x),ae,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,w)}else{let ne=x.textures;for(let j=0;j<ne.length;j++){let ae=ne[j],ue=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),$=T(ae.internalFormat,ue,Y,ae.normalized,ae.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(x),$,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(w,x,B){let ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);j.__renderTarget=x;let ae=ne?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ne?ge(x.depthTexture,0):pe(x.depthTexture,0);let ue=j.__webglTexture,Y=ut(x),$=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,le=x.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vn)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,$,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,le,$,ue,0);else if(x.depthTexture.format===Zn)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,$,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,le,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tn(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let ne=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ne}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Je(x.__webglFramebuffer[ne],w,ne);else w.texture.mipmaps.length>0?Je(x.__webglFramebuffer[0],w,0):Je(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=i.createRenderbuffer(),qe(x.__webglDepthbuffer[ne],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qe(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nn(w,x,B){let ne=n.get(w);x!==void 0&&ve(ne.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&tn(w)}function sn(w){let x=w.texture,B=n.get(w),ne=n.get(x);w.addEventListener("dispose",F),N(w);let j=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[Y][$]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Y=0,$=j.length;Y<$;Y++){let le=n.get(j[Y]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&fe(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let $=j[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let le=r.convert($.format,$.colorSpace),R=r.convert($.type),J=T($.internalFormat,le,R,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),q=ut(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ve(B.__webglFramebuffer[Y][$],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ve(B.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Y=0,$=j.length;Y<$;Y++){let le=j[Y],R=n.get(le),J=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),je(J,le),ve(B.__webglFramebuffer,w,le,i.COLOR_ATTACHMENT0+Y,J,0),E(le)&&b(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ne.__webglTexture),je(Y,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ve(B.__webglFramebuffer[$],w,x,i.COLOR_ATTACHMENT0,Y,$);else ve(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Y,0);E(x)?b(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&tn(w)}function D(w){let x=w.textures;for(let B=0,ne=x.length;B<ne;B++){let j=x[B];if(E(j)&&j.mipmapsAutoUpdate===!0){let ae=A(w),ue=n.get(j).__webglTexture;t.bindTexture(ae,ue),b(ae),t.unbindTexture()}}}let rn=[];function ht(w){if(w.samples>0){if(fe(w)===!1){let x=w.textures,B=w.width,ne=w.height,j=i.COLOR_BUFFER_BIT,ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(w),Y=x.length>1;if(Y)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<x.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let R=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,j,i.NEAREST),l===!0&&(rn.length=0,rn.push(i.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&rn.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let R=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ut(w){return Math.min(s.maxSamples,w.samples)}function fe(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Le(w,x){let B=w.colorSpace,ne=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Us&&B!==$n&&($e.getTransfer(B)===tt?(ne!==vn||j!==qt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),x}function Be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=be,this.setTexture3D=Re,this.setTextureCube=ge,this.rebindTextures=nn,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=tn,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=fe,this.dispose=G}function Ig(i,e){function t(n,s=$n){let r,a=$e.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===vn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===pr||n===eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ja)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return r.COMPRESSED_RG11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===_o||n===xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===yo||n===mr||n===bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ys(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",f=new ic,p={},M=t.getContextAttributes(),E=null,b=null,A=[],T=[],_=new me,S=null,N=null,I=new Ht;I.viewport=new dt;let U=new Ht;U.viewport=new dt;let F=[I,U],W=new Na,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=A[Z];return pe===void 0&&(pe=new ss,A[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=A[Z];return pe===void 0&&(pe=new ss,A[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=A[Z];return pe===void 0&&(pe=new ss,A[Z]=pe),pe.getHandSpace()};function z(Z){let pe=T.indexOf(Z.inputSource);if(pe===-1)return;let be=A[pe];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<A.length;Z++){let pe=T[Z];pe!==null&&(T[Z]=null,A[Z].disconnect(pe))}P=null,G=null,f.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(E),d=null,u=null,m=null,s=null,b=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Re=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?Zn:Vn,Re=M.stencil?Pi:gn);let Oe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new jt(u.textureWidth,u.textureHeight,{format:vn,type:qt,depthTexture:new Xn(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new jt(d.framebufferWidth,d.framebufferHeight,{format:vn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function te(Z){for(let pe=0;pe<Z.removed.length;pe++){let be=Z.removed[pe],Re=T.indexOf(be);Re>=0&&(T[Re]=null,A[Re].disconnect(be))}for(let pe=0;pe<Z.added.length;pe++){let be=Z.added[pe],Re=T.indexOf(be);if(Re===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(be),Re=Oe;break}else if(T[Oe]===null){T[Oe]=be,Re=Oe;break}if(Re===-1)break}let ge=A[Re];ge&&ge.connect(be)}}function X(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,be=Z.far;f.texture!==null&&(f.depthNear>0&&(pe=f.depthNear),f.depthFar>0&&(be=f.depthFar)),W.near=U.near=I.near=pe,W.far=U.far=I.far=be,(P!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,G=W.far),W.layers.mask=Z.layers.mask|6,I.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let Re=Z.parent,ge=W.cameras;X(W,Re);for(let Oe=0;Oe<ge.length;Oe++)X(ge[Oe],Re);W.projectionMatrix.copy(I.projectionMatrix),W.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,W,Re)};function Q(Z,pe,be){be===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(Z){return p[Z]};let ee=null;function Se(Z,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Re=!1;be.length!==W.cameras.length&&(W.cameras.length=0,Re=!0);for(let Ie=0;Ie<be.length;Ie++){let je=be[Ie],st=null;if(d!==null)st=d.getViewport(je);else{let xt=m.getViewSubImage(u,je);st=xt.viewport,Ie===0&&(e.setRenderTargetTextures(b,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(b))}let Xe=F[Ie];Xe===void 0&&(Xe=new Ht,Xe.layers.enable(Ie),Xe.viewport=new dt,F[Ie]=Xe),Xe.matrix.fromArray(je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(st.x,st.y,st.width,st.height),Ie===0&&(W.matrix.copy(Xe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Re===!0&&W.cameras.push(Xe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){m=n.getBinding();let Ie=m.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&f.init(Ie,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let Ie=0;Ie<be.length;Ie++){let je=be[Ie].camera;if(je){let st=p[je];st||(st=new Ys,p[je]=st);let Xe=m.getCameraImage(je);st.sourceTexture=Xe}}}}for(let be=0;be<A.length;be++){let Re=T[be],ge=A[be];Re!==null&&ge!==void 0&&ge.update(Re,pe,c||a)}ee&&ee(Z,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Ne=new _u;Ne.setAnimationLoop(Se),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},Ug=new nt,Au=new Fe;Au.set(-1,0,0,0,1,0,0,0,1);function Ng(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Xl(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),m(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,E):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Vt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Vt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,b=M.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Au),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,E){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=E*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,M){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){let M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,e,t,n){let s={},r={};function a(M,E){let b=E.program;n.uniformBlockBinding(M,b,s[M.id])}function o(M,E){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",f));let A=E.program;n.updateUBOMapping(M,A);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let E=i.createBuffer(),b=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=b.length;T<_;T++){let S=b[T];if(Array.isArray(S))for(let N=0,I=S.length;N<I;N++)h(S[N],T,N,A);else h(S,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,b,A){if(u(M,E,b,A)===!0){let T=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let N=0;N<_.length;N++){let I=_[N],U=v(I,!0);m(I,M.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function m(M,E,b){typeof M=="number"||typeof M=="boolean"?E[b]=M:M.isMatrix3?(E[b]=M.elements[0],E[b+1]=M.elements[1],E[b+2]=M.elements[2],E[b+3]=0,E[b+4]=M.elements[3],E[b+5]=M.elements[4],E[b+6]=M.elements[5],E[b+7]=0,E[b+8]=M.elements[6],E[b+9]=M.elements[7],E[b+10]=M.elements[8],E[b+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-b),b):M.toArray(E,b)}function u(M,E,b,A){let T=M.value,_=E+"_"+b;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let S=A[_],N=!1;for(let I=0;I<T.length;I++)d(T[I],S,I)===!0&&(N=!0);return N}return d(T,A,_)}function d(M,E,b){if(E[b]===void 0)return typeof M=="number"||typeof M=="boolean"?E[b]=M:ArrayBuffer.isView(M)?E[b]=M.slice():E[b]=M.clone(),!0;{let A=E[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return E[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let E=M.uniforms,b=0,A=16;for(let _=0,S=E.length;_<S;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,U=N.length;I<U;I++){let F=N[I],W=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(E[_])||Array.isArray(F.value),G=b;for(let H=0,te=W.length;H<te;H++){let X=W[H],Q=v(X,P),ee=b%A,Se=ee%Q.boundary,Ne=ee+Se;b+=Se,Ne!==0&&A-Ne<Q.storage&&(b+=A-Ne),H===0&&(G=b),b+=Q.storage}let z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new z((b-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let T=b%A;return T>0&&(b+=A-T),M.__size=b,M.__cache={},this}function v(M,E){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function f(M){let E=M.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Bg(){return Pn===null&&(Pn=new ca(Og,16,16,pi,xn),Pn.name="DFG_LUT",Pn.minFilter=Lt,Pn.magFilter=Lt,Pn.wrapS=Mn,Pn.wrapT=Mn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var Ao=class{constructor(e={}){let{canvas:t=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,f=new Set([Wa,Va,Ga]),p=new Set([qt,gn,ms,Pi,za,Ha]),M=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,W=null,P=null,G=null;this._outputColorSpace=At;let z=0,H=0,te=null,X=-1,Q=null,ee=new dt,Se=new dt,Ne=null,Z=new De(0),pe=0,be=t.width,Re=t.height,ge=1,Oe=null,pt=null,Ie=new dt(0,0,be,Re),je=new dt(0,0,be,Re),st=!1,Xe=new si,xt=new ha,mt=!1,re=!1,ve=new nt,qe=new C,Je=new dt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function sn(){return te===null?ge:1}let D=n;function rn(y,L){return t.getContext(y,L)}let ht,ut,fe,vt,Le,Be,w,x,B,ne,j,ae,ue,Y,$,le,R,J,q,ce,se,oe,Ae;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){let L="webgl2";if(D=rn(L,y),D===null)throw rn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(y){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ue("WebGLRenderer: "+y.message),y}function Ge(){ht=new $m(D),ht.init(),se=new Ig(D,ht),ut=new Bm(D,ht,e,se),fe=new Cg(D,ht),ut.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),W=D.createFramebuffer(),P=D.createFramebuffer(),G=D.createFramebuffer(),vt=new jm(D),Le=new mg,Be=new Pg(D,ht,fe,Le,ut,se,vt),w=new Zm(I),x=new Qd(D),oe=new Fm(D,x),B=new Jm(D,x,vt,oe),ne=new e0(D,B,x,oe,vt),J=new Qm(D,ut,Be),$=new km(Le),j=new pg(I,w,ht,ut,oe,$),ae=new Ng(I,Le),ue=new _g,Y=new Sg(ht),R=new Nm(I,w,fe,ne,g,l),le=new Rg(I,ne,ut),Ae=new Fg(D,vt,ut,fe),q=new Om(D,ht,vt),ce=new Km(D,ht,vt),vt.programs=j.programs,I.capabilities=ut,I.extensions=ht,I.properties=Le,I.renderLists=ue,I.shadowMap=le,I.state=fe,I.info=vt}v!==qt&&(N=new n0(v,t.width,t.height,o,s,r));let ie=new sc(I,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ht.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ht.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(y){y!==void 0&&(ge=y,this.setSize(be,Re,!1))},this.getSize=function(y){return y.set(be,Re)},this.setSize=function(y,L,V=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=y,Re=L,t.width=Math.floor(y*ge),t.height=Math.floor(L*ge),V===!0&&(t.style.width=y+"px",t.style.height=L+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(be*ge,Re*ge).floor()},this.setDrawingBufferSize=function(y,L,V){be=y,Re=L,ge=V,t.width=Math.floor(y*V),t.height=Math.floor(L*V),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===qt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,L,V,O){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,L,V,O),fe.viewport(ee.copy(Ie).multiplyScalar(sn()).round())},this.getScissor=function(y){return y.copy(je)},this.setScissor=function(y,L,V,O){y.isVector4?je.set(y.x,y.y,y.z,y.w):je.set(y,L,V,O),fe.scissor(Se.copy(je).multiplyScalar(sn()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){fe.setScissorTest(st=y)},this.setOpaqueSort=function(y){Oe=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,V=!0){let O=0;if(y){let k=!1;if(te!==null){let de=te.texture.format;k=f.has(de)}if(k){let de=te.texture.type,Me=p.has(de),he=R.getClearColor(),ye=R.getClearAlpha(),Te=he.r,ke=he.g,Ye=he.b;Me?(M[0]=Te,M[1]=ke,M[2]=Ye,M[3]=ye,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=Te,E[1]=ke,E[2]=Ye,E[3]=ye,D.clearBufferiv(D.COLOR,0,E))}else O|=D.COLOR_BUFFER_BIT}L&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),R.dispose(),ue.dispose(),Y.dispose(),Be.dispose(),Le.dispose(),w.dispose(),ne.dispose(),B.dispose(),oe.dispose(),Ae.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",_c),ie.removeEventListener("sessionend",xc),_i.stop()};function Ce(y){y.preventDefault(),Os("WebGLRenderer: Context Lost."),U=!0}function He(){Os("WebGLRenderer: Context Restored."),U=!1;let y=vt.autoReset,L=le.enabled,V=le.autoUpdate,O=le.needsUpdate,k=le.type;Ge(),vt.autoReset=y,le.enabled=L,le.autoUpdate=V,le.needsUpdate=O,le.type=k}function _e(y){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){let L=y.target;L.removeEventListener("dispose",rt),Et(L)}function Et(y){Jn(y),Le.remove(y)}function Jn(y){let L=Le.get(y).programs;L!==void 0&&(L.forEach(function(V){j.releaseProgram(V)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,V,O,k,de){L===null&&(L=tn);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,he=qu(y,L,V,O,k);fe.setMaterial(O,Me);let ye=V.index,Te=1;if(O.wireframe===!0){if(ye=B.getWireframeAttribute(V),ye===void 0)return;Te=2}let ke=V.drawRange,Ye=V.attributes.position,Ee=ke.start*Te,Ze=(ke.start+ke.count)*Te;de!==null&&(Ee=Math.max(Ee,de.start*Te),Ze=Math.min(Ze,(de.start+de.count)*Te)),ye!==null?(Ee=Math.max(Ee,0),Ze=Math.min(Ze,ye.count)):Ye!=null&&(Ee=Math.max(Ee,0),Ze=Math.min(Ze,Ye.count));let gt=Ze-Ee;if(gt<0||gt===1/0)return;oe.setup(k,O,he,V,ye);let ot,at=q;if(ye!==null&&(ot=x.get(ye),at=ce,at.setIndex(ot)),k.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*sn()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(k.isLine){let Dt=O.linewidth;Dt===void 0&&(Dt=1),fe.setLineWidth(Dt*sn()),k.isLineSegments?at.setMode(D.LINES):k.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else k.isPoints?at.setMode(D.POINTS):k.isSprite&&at.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Dt=k._multiDrawStarts,we=k._multiDrawCounts,Bt=k._multiDrawCount,Qe=ye?x.get(ye).bytesPerElement:1,xi=Le.get(O).currentProgram.getUniforms();for(let Ut=0;Ut<Bt;Ut++)xi.setValue(D,"_gl_DrawID",Ut),at.render(Dt[Ut]/Qe,we[Ut])}else if(k.isInstancedMesh)at.renderInstances(Ee,gt,k.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,we=Math.min(V.instanceCount,Dt);at.renderInstances(Ee,gt,we)}else at.render(Ee,gt)};function gc(y,L,V,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),mt===!0&&$.setState(y,V,!1),y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,vs(y,L,O),y.side=fi,y.needsUpdate=!0,vs(y,L,O),y.side=Rn):vs(y,L,O)}this.compile=function(y,L,V=null){V===null&&(V=y),F!==null&&F.renderStart(y,L,V),T=Y.get(V),T.init(L),S.push(T),V.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),y!==V&&y.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),re=this.localClippingEnabled,mt=$.init(this.clippingPlanes,re),mt===!0&&$.setGlobalState(this.clippingPlanes,L),F!==null&&le.render(T.state.shadowsArray,V,L);let O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let he=de[Me];gc(he,V,L,k),O.add(he)}else gc(de,V,L,k),O.add(de)}),T=S.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,L,V=null){let O=this.compile(y,L,V);return new Promise(k=>{function de(){if(O.forEach(function(Me){let ye=Le.get(Me).currentProgram;(ye===void 0||ye.isReady())&&O.delete(Me)}),O.size===0){k(y);return}setTimeout(de,10)}ht.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Uo=null;function Wu(y){Uo&&Uo(y)}function _c(){_i.stop()}function xc(){_i.start()}let _i=new _u;_i.setAnimationLoop(Wu),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(y){Uo=y,ie.setAnimationLoop(y),y===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",_c),ie.addEventListener("sessionend",xc),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(y,L);let V=ie.enabled===!0&&ie.isPresenting===!0,O=N!==null&&(te===null||V)&&N.begin(I,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,L,te),T=Y.get(y,S.length),T.init(L),T.state.textureUnits=Be.getTextureUnits(),S.push(T),ve.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?xt.setFromArrayCamera(L):Xe.setFromProjectionMatrix(ve,on,L.reversedDepth),re=this.localClippingEnabled,mt=$.init(this.clippingPlanes,re),A=ue.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&No(Me,L,-1/0,I.sortObjects)}No(y,L,0,I.sortObjects),A.finish(),F!==null&&F.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(Oe,pt),nn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,nn&&R.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),mt===!0&&$.beginShadows();let k=T.state.shadowsArray;if(le.render(k,y,L),mt===!0&&$.endShadows(),(O&&N.hasRenderPass())===!1){let Me=A.opaque,he=A.transmissive;if(T.setupLights(),L.isArrayCamera){let ye=L.cameras;if(he.length>0)for(let Te=0,ke=ye.length;Te<ke;Te++){let Ye=ye[Te];yc(Me,he,y,Ye)}nn&&R.render(y);for(let Te=0,ke=ye.length;Te<ke;Te++){let Ye=ye[Te];vc(A,y,Ye,Ye.viewport)}}else he.length>0&&yc(Me,he,y,L),nn&&R.render(y),vc(A,y,L)}te!==null&&H===0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te)),O&&N.end(I),y.isScene===!0&&y.onAfterRender(I,y,L),oe.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(T=S[S.length-1],Be.setTextureUnits(T.state.textureUnits),mt===!0&&$.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function No(y,L,V,O){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let Me=L.isArrayCamera?xt:Xe;if(!y.frustumCulled||y.intersectsFrustum(Me)){O&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);let he=ne.update(y),ye=y.material;ye.visible&&A.push(y,he,ye,V,Je.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let Me=L.isArrayCamera?xt:Xe;if(!y.frustumCulled||y.intersectsFrustum(Me)){let he=ne.update(y),ye=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Je.copy(he.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(ye)){let Te=he.groups;for(let ke=0,Ye=Te.length;ke<Ye;ke++){let Ee=Te[ke],Ze=ye[Ee.materialIndex];Ze&&Ze.visible&&A.push(y,he,Ze,V,Je.z,Ee,L)}}else ye.visible&&A.push(y,he,ye,V,Je.z,null,L)}}}let de=y.children;for(let Me=0,he=de.length;Me<he;Me++)No(de[Me],L,V,O)}function vc(y,L,V,O){let{opaque:k,transmissive:de,transparent:Me}=y;T.setupLightsView(V),mt===!0&&$.setGlobalState(I.clippingPlanes,V),O&&fe.viewport(ee.copy(O)),k.length>0&&br(k,L,V),de.length>0&&br(de,L,V),Me.length>0&&br(Me,L,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function yc(y,L,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Ee=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new jt(1,1,{generateMipmaps:!0,type:Ee?xn:qt,minFilter:Yn,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let de=T.state.transmissionRenderTarget[O.id],Me=O.viewport||ee;de.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),ye=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(Z),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),nn&&R.render(V);let ke=I.toneMapping;I.toneMapping=Cn;let Ye=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),mt===!0&&$.setGlobalState(I.clippingPlanes,O),br(y,V,O),Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ze=0,gt=L.length;Ze<gt;Ze++){let ot=L[Ze],{object:at,geometry:Dt,material:we,group:Bt}=ot;if(we.side===Rn&&at.layers.test(O.layers)){let Qe=we.side;we.side=Vt,we.needsUpdate=!0,bc(at,V,O,Dt,we,Bt),we.side=Qe,we.needsUpdate=!0,Ee=!0}}Ee===!0&&(Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de))}I.setRenderTarget(he,ye,Te),I.setClearColor(Z,pe),Ye!==void 0&&(O.viewport=Ye),I.toneMapping=ke}function br(y,L,V){let O=L.isScene===!0?L.overrideMaterial:null;for(let k=0,de=y.length;k<de;k++){let Me=y[k],{object:he,geometry:ye,group:Te}=Me,ke=Me.material;ke.allowOverride===!0&&O!==null&&(ke=O),he.layers.test(V.layers)&&bc(he,L,V,ye,ke,Te)}}function bc(y,L,V,O,k,de){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(I,L,V,O,k,de),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(I,L,V,O,y,de),k.transparent===!0&&k.side===Rn&&k.forceSinglePass===!1?(k.side=Vt,k.needsUpdate=!0,I.renderBufferDirect(V,L,O,k,y,de),k.side=fi,k.needsUpdate=!0,I.renderBufferDirect(V,L,O,k,y,de),k.side=Rn):I.renderBufferDirect(V,L,O,k,y,de),y.onAfterRender(I,L,V,O,k,de)}function Mc(y){let L=0;for(let V of y)V.texture!==null&&L++;return L}function vs(y,L,V){L.isScene!==!0&&(L=tn);let O=Le.get(y),k=T.state.lights,de=T.state.shadowsArray,Me=k.state.version,he=j.getParameters(y,k.state,de,L,V,T.state.lightProbeGridArray),ye=j.getProgramCacheKey(he),Te=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;let ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=w.get(y.envMap||O.environment,ke),O.envMapRotation=O.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",rt),Te=new Map,O.programs=Te,O.programVariants=new Map);let Ye=Te.get(ye);if(Ye!==void 0){if(O.currentProgram===Ye&&O.lightsStateVersion===Me)return Ec(y,he),Ye}else he.uniforms=j.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,V,he),y.onBeforeCompile(he,I),Ye=j.acquireProgram(he,ye),Te.set(ye,Ye),O.uniforms=he.uniforms;let Ee=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=$.uniform),Ec(y,he),O.needsLights=Zu(y),O.lightsStateVersion=Me,O.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.sunLights.value=k.state.sun,Ee.sunLightShadows.value=k.state.sunShadow,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.sunShadowMatrix.value=k.state.sunShadowMatrix,Ee.sunShadowCascade.value=k.state.sunShadowCascade,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=Mc(T.state.lightProbeGridArray),O.currentProgram=Ye,O.uniformsList=null,Ye}function Xu(y,L,V,O,k){let de=Le.get(y),Me=de.currentProgram.id+","+O+","+k,he=de.programVariants.get(Me);return he===void 0?(he=vs(y,L,V),de.programVariants.set(Me,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=k),he}function Sc(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=gs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Ec(y,L){let V=Le.get(y);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function qu(y,L,V,O,k){L.isScene!==!0&&(L=tn),Be.resetTextureUnits();let de=L.fog,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,he=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=w.get(O.envMap||Me,ye),ke=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ye=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ee=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color,ot=Cn;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ot=I.toneMapping);let at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Dt=at!==void 0?at.length:0,we=Le.get(O),Bt=T.state.lights;if(mt===!0&&(re===!0||y!==Q)){let ft=y===Q&&O.id===X;$.setState(O,y,ft)}let Qe=!1,xi=!1;O.version===we.__version?we.needsLights&&we.lightsStateVersion!==Bt.state.version||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Te||O.fog===!0&&we.fog!==de||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==$.numPlanes||we.numIntersection!==$.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Ye||we.morphTargets!==Ee||we.morphNormals!==Ze||we.morphColors!==gt||we.morphTargetsCount!==Dt||we.numLightProbeGrids!==Mc(T.state.lightProbeGridArray)?Qe=!0:(we.outputColorSpace!==he||we.toneMapping!==ot)&&(xi=!0):(Qe=!0,we.__version=O.version);let Ut=we.currentProgram;(Qe===!0||xi===!0)&&(Ut=xi===!0?Xu(O,L,k,he,ot):vs(O,L,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ut,we));let Mr=!1,Kn=!1,vi=!1,Ke=Ut.getUniforms(),It=we.uniforms;if(fe.useProgram(Ut.program)&&(Mr=!0,Kn=!0,vi=!0),O.id!==X&&(X=O.id,Kn=!0),Mr||Q!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ke.setValue(D,"projectionMatrix",y.projectionMatrix),Ke.setValue(D,"viewMatrix",y.matrixWorldInverse);let wt=Ke.map.cameraPosition;wt!==void 0&&wt.setValue(D,qe.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&Ke.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ke.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Kn=!0,vi=!0)}if(we.needsLights&&(Bt.state.sunShadowMap.length>0&&Ke.setValue(D,"sunShadowMap",Bt.state.sunShadowMap,Be),Bt.state.directionalShadowMap.length>0&&Ke.setValue(D,"directionalShadowMap",Bt.state.directionalShadowMap,Be),Bt.state.spotShadowMap.length>0&&Ke.setValue(D,"spotShadowMap",Bt.state.spotShadowMap,Be),Bt.state.pointShadowMap.length>0&&Ke.setValue(D,"pointShadowMap",Bt.state.pointShadowMap,Be)),k.isSkinnedMesh){Ke.setOptional(D,k,"bindMatrix"),Ke.setOptional(D,k,"bindMatrixInverse");let ft=k.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ke.setValue(D,"boneTexture",ft.boneTexture,Be))}k.isBatchedMesh&&(Ke.setOptional(D,k,"batchingTexture"),Ke.setValue(D,"batchingTexture",k._matricesTexture,Be),Ke.setOptional(D,k,"batchingIdTexture"),Ke.setValue(D,"batchingIdTexture",k._indirectTexture,Be),Ke.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ke.setValue(D,"batchingColorTexture",k._colorsTexture,Be));let un=V.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&J.update(k,V,Ut),(Kn||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,Ke.setValue(D,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(It.envMapIntensity.value=L.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Bg()),Kn){if(Ke.setValue(D,"toneMappingExposure",I.toneMappingExposure),we.needsLights&&Yu(It,vi),de&&O.fog===!0&&ae.refreshFogUniforms(It,de),ae.refreshMaterialUniforms(It,O,ge,Re,T.state.transmissionRenderTarget[y.id]),we.needsLights&&we.numLightProbeGrids>0){let ft=b,wt=0;for(let Nn of T.state.lightProbeGridArray)Nn.texture!==null&&(ft.textures[wt]=Nn.texture,ft.min[wt]=Nn.boundingBox.min,ft.max[wt]=Nn.boundingBox.max,ft.resolution[wt]=Nn.resolution,wt++);for(let Nn in ft)ft[Nn].length=wt;It.probesSH.value=ft.textures,It.probesMin.value=ft.min,It.probesMax.value=ft.max,It.probesResolution.value=ft.resolution}gs.upload(D,Sc(we),It,Be)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(gs.upload(D,Sc(we),It,Be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ke.setValue(D,"center",k.center),Ke.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ke.setValue(D,"normalMatrix",k.normalMatrix),Ke.setValue(D,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let ft=O.uniformsGroups;for(let wt=0,Nn=ft.length;wt<Nn;wt++){let Tc=ft[wt];Ae.update(Tc,Ut),Ae.bind(Tc,Ut)}}return Ut}function Yu(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Zu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,L,V){let O=Le.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Le.get(y.texture).__webglTexture=L,Le.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let V=Le.get(y);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,V=0){te=y,z=L,H=V;let O=null,k=!1,de=!1;if(y){let he=Le.get(y);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(y.viewport),Se.copy(y.scissor),Ne=y.scissorTest,fe.viewport(ee),fe.scissor(Se),fe.setScissorTest(Ne),X=-1;return}else if(he.__webglFramebuffer===void 0)Be.setupRenderTarget(y);else if(he.__hasExternalTextures)Be.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ke=y.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Te=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?O=Te[L][V]:O=Te[L],k=!0):y.samples>0&&Be.useMultisampledRTT(y)===!1?O=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[V]:O=Te,ee.copy(y.viewport),Se.copy(y.scissor),Ne=y.scissorTest}else ee.copy(Ie).multiplyScalar(ge).floor(),Se.copy(je).multiplyScalar(ge).floor(),Ne=st;if(V!==0&&(O=W),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(y,O),fe.viewport(ee),fe.scissor(Se),fe.setScissorTest(Ne),k){let he=Le.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,V)}else if(de){let he=L;for(let ye=0;ye<y.textures.length;ye++){let Te=Le.get(y.textures[ye]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ye,Te.__webglTexture,V,he)}}else if(y!==null&&V!==0){let he=Le.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}X=-1};function wc(y){let L=Le.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=ut.textureFormatReadable(y.format),L.__typeReadable=ut.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,V,O,k,de,Me,he=0){if(!(y&&y.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye){fe.bindFramebuffer(D.FRAMEBUFFER,ye);try{let Te=y.textures[he],ke=Te.format,Ye=Te.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Ee=wc(Te);if(Ee.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-O&&V>=0&&V<=y.height-k&&D.readPixels(L,V,O,k,se.convert(ke),se.convert(Ye),de)}finally{let Te=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,L,V,O,k,de,Me,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye)if(L>=0&&L<=y.width-O&&V>=0&&V<=y.height-k){fe.bindFramebuffer(D.FRAMEBUFFER,ye);let Te=y.textures[he],ke=Te.format,Ye=Te.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Ee=wc(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(L,V,O,k,se.convert(ke),se.convert(Ye),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let gt=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,gt);let ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Vh(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ze),D.deleteSync(ot),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,V=0){let O=Math.pow(2,-V),k=Math.floor(y.image.width*O),de=Math.floor(y.image.height*O),Me=L!==null?L.x:0,he=L!==null?L.y:0;Be.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Me,he,k,de),fe.unbindTexture()},this.copyTextureToTexture=function(y,L,V=null,O=null,k=0,de=0){let Me,he,ye,Te,ke,Ye,Ee,Ze,gt,ot=y.isCompressedTexture?y.mipmaps[de]:y.image;if(V!==null)Me=V.max.x-V.min.x,he=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,ke=V.min.y,Ye=V.isBox3?V.min.z:0;else{let Ke=Math.pow(2,-k);Me=Math.floor(ot.width*Ke),he=Math.floor(ot.height*Ke),y.isDataArrayTexture?ye=ot.depth:y.isData3DTexture?ye=Math.floor(ot.depth*Ke):ye=1,Te=0,ke=0,Ye=0}O!==null?(Ee=O.x,Ze=O.y,gt=O.z):(Ee=0,Ze=0,gt=0);let at=se.convert(L.format),Dt=se.convert(L.type),we;L.isData3DTexture?(Be.setTexture3D(L,0),we=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Be.setTexture2DArray(L,0),we=D.TEXTURE_2D_ARRAY):(Be.setTexture2D(L,0),we=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let Bt=fe.getParameter(D.UNPACK_ROW_LENGTH),Qe=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=fe.getParameter(D.UNPACK_SKIP_PIXELS),Ut=fe.getParameter(D.UNPACK_SKIP_ROWS),Mr=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(D.UNPACK_SKIP_ROWS,ke),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye);let Kn=y.isDataArrayTexture||y.isData3DTexture,vi=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let Ke=Le.get(y),It=Le.get(L),un=Le.get(Ke.__renderTarget),ft=Le.get(It.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,un.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let wt=0;wt<ye;wt++)Kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(y).__webglTexture,k,Ye+wt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(L).__webglTexture,de,gt+wt)),D.blitFramebuffer(Te,ke,Te+Me,ke+he,Ee,Ze,Ee+Me,Ze+he,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Le.has(y)){let Ke=Le.get(y),It=Le.get(L);fe.bindFramebuffer(D.READ_FRAMEBUFFER,P),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let un=0;un<ye;un++)Kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,k,Ye+un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,k),vi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,de,gt+un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,de),k!==0?D.blitFramebuffer(Te,ke,Te+Me,ke+he,Ee,Ze,Ee+Me,Ze+he,D.COLOR_BUFFER_BIT,D.NEAREST):vi?D.copyTexSubImage3D(we,de,Ee,Ze,gt+un,Te,ke,Me,he):D.copyTexSubImage2D(we,de,Ee,Ze,Te,ke,Me,he);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vi?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(we,de,Ee,Ze,gt,Me,he,ye,at,Dt,ot.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(we,de,Ee,Ze,gt,Me,he,ye,at,ot.data):D.texSubImage3D(we,de,Ee,Ze,gt,Me,he,ye,at,Dt,ot):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Ee,Ze,Me,he,at,Dt,ot.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Ee,Ze,ot.width,ot.height,at,ot.data):D.texSubImage2D(D.TEXTURE_2D,de,Ee,Ze,Me,he,at,Dt,ot);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Mr),de===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&D.generateMipmap(we),fe.unbindTexture()},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&Be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Be.setTextureCube(y,0):y.isData3DTexture?Be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Be.setTexture2DArray(y,0):Be.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){z=0,H=0,te=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Ru={type:"change"},oc={type:"start"},Pu={type:"end"},Po=new ii,Cu=new zt,kg=Math.cos(70*gi.DEG2RAD),St=new C,Yt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ac=1e-6,Io=class extends rr{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Kt,this._lastTargetPosition=new C,this._quat=new Kt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new us,this._sphericalDelta=new us,this._scale=1,this._panOffset=new C,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new C,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hg.bind(this),this._onPointerDown=zg.bind(this),this._onPointerUp=Gg.bind(this),this._onContextMenu=$g.bind(this),this._onMouseWheel=Xg.bind(this),this._onKeyDown=qg.bind(this),this._onTouchStart=Yg.bind(this),this._onTouchMove=Zg.bind(this),this._onMouseDown=Vg.bind(this),this._onMouseMove=Wg.bind(this),this._interceptControlDown=Jg.bind(this),this._interceptControlUp=Kg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Yt:n>Math.PI&&(n-=Yt),s<-Math.PI?s+=Yt:s>Math.PI&&(s-=Yt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=St.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Po.origin.copy(this.object.position),Po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Po.direction))<kg?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Po.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ac||this._lastTargetPosition.distanceToSquared(this.target)>ac?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Hg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pu),this.state=et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=et.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(oc)}function Wg(i){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xg(i){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(i.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pu))}function qg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1){this.state=et.NONE;break}this._handleTouchStartRotate(i),this.state=et.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1){this.state=et.NONE;break}this._handleTouchStartPan(i),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=et.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(oc)}function Zg(i){switch(this._trackPointer(i),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=et.NONE}}function $g(i){this.enabled!==!1&&i.preventDefault()}function Jg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Li=[{id:1,title:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",subtitle:"\u0414\u0430\u0439\u0442\u0435 \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043C\u0435\u0441\u0442\u043E, \u043A\u0443\u0434\u0430 \u0443\u0439\u0442\u0438",intro:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u2014 \u043D\u0435 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u044C, \u043D\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043D\u0430\u043C \u0435\u0451 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C. \u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430, \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0438 \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430 \u2014 \u0440\u0430\u0437\u043D\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438. \u041F\u0440\u043E\u0441\u043B\u0435\u0434\u0438\u0442\u0435, \u043A\u0443\u0434\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0448\u0430\u0440\u0430.",formula:"E\u209A = mgh",question:"\u0428\u0430\u0440 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0442 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u043D\u0430 2 \u043C. \u0412 \u043A\u0430\u043A\u043E\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0431\u043E\u0301\u043B\u044C\u0448\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438?",options:["\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438"],answer:1,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u0448\u0430\u0440\u0430",min:.5,max:3,step:.5,value:1,unit:"\u043A\u0433",decimals:1},result:i=>[["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442\u044B","2.0 \u043C"],["\u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",`${(i*9.8*2).toFixed(1)} \u0414\u0436`],["\u0423\u0431\u044B\u043B\u044C \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 (\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*9.8*2).toFixed(1)} \u0414\u0436`],["\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",`${(i*9.8*2).toFixed(1)} \u0414\u0436`]],explanation:"\u041F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0448\u0430\u0440\u0430 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0435\u0433\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u043D\u0435 \u0440\u0430\u0441\u0442\u0451\u0442. \u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u0438\u043B\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043D\u0430\u0434 \u0448\u0430\u0440\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u0443 mgh, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438\u0437 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0432 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \xAB\u0448\u0430\u0440 \u2014 \u0417\u0435\u043C\u043B\u044F\xBB.",teacher:{focus:"\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u2014 \u044D\u0442\u043E \u0443\u0447\u0451\u0442\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u0430 \u043D\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u0432 \u0448\u0430\u0440 \u0438\u043B\u0438 \u0432\u044B\u043B\u0438\u0432\u0430\u044E\u0442 \u0438\u0437 \u043D\u0435\u0433\u043E.",steps:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0443, \u043F\u0440\u0443\u0436\u0438\u043D\u0443, \u0441\u0442\u0430\u043A\u0430\u043D \u0441 \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0432\u043E\u0434\u043E\u0439 \u0438 \u0448\u0430\u0440, \u0430 \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0437\u043E\u0432\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 mgh \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u043C\u0430\u0441\u0441, \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u044F \u0441\u043B\u043E\u0432\u0430 \xAB\u0441\u0438\u0441\u0442\u0435\u043C\u0430\xBB \u0438 \xAB\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430\xBB."],misconception:"\u041F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435 \u0432\u0441\u044E \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043A \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439. \u0415\u0441\u043B\u0438 \u0443\u0447\u0435\u0441\u0442\u044C \u041A\u041F\u0414 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C mgh."}},{id:2,title:"\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",subtitle:"\u041A\u0430\u043A \u0432\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",intro:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0448\u0430\u0440 \u0441 \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u043D\u0430\u043A\u043B\u043E\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438. \u0415\u0441\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0447\u044C \u0442\u0440\u0435\u043D\u0438\u0435\u043C, \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E. \u0427\u0435\u043C \u0432\u044B\u0448\u0435 \u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0440\u0442\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043D\u0438\u0437\u0443.",formula:"\xBDmv\xB2 = mgh",question:"\u0415\u0441\u043B\u0438 \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u043F\u0443\u0441\u043A\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0432 4 \u0440\u0430\u0437\u0430, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0451\u0442 \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0448\u0430\u0440\u0430 \u0432\u043D\u0438\u0437\u0443?",options:["\u041E\u043D\u0430 \u0441\u0442\u0430\u043D\u0435\u0442 \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u041E\u043D\u0430 \u0441\u0442\u0430\u043D\u0435\u0442 \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u041E\u043D\u0430 \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F"],answer:0,param:{label:"\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u043F\u0443\u0441\u043A\u0430",min:1,max:5,step:.5,value:3,unit:"\u043C",decimals:1},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(9.8*i).toFixed(1)} \u0414\u0436`],["\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u043D\u0438\u0437\u0443",`${(9.8*i).toFixed(1)} \u0414\u0436`],["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043D\u0438\u0437\u0443",`${Math.sqrt(19.6*i).toFixed(2)} \u043C/\u0441`],["\u041C\u0430\u0441\u0441\u0430 (\u043C\u043E\u0434\u0435\u043B\u044C)","1.0 \u043A\u0433"]],explanation:"\u0418\u0437 \u0444\u043E\u0440\u043C\u0443\u043B\u044B v = \u221A(2gh) \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u0447\u0442\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u0440\u043D\u044E \u0438\u0437 \u0432\u044B\u0441\u043E\u0442\u044B. \u0412 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u0434\u0430\u0451\u0442 \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u0420\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0442\u0435\u043F\u043B\u0430.",teacher:{focus:"\u0420\u0430\u0437\u043B\u0438\u0447\u0430\u0439\u0442\u0435 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438: \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0432\u044B\u0441\u043E\u0442\u044B \u0441\u043F\u0443\u0441\u043A\u0430 1 \u043C \u0438 4 \u043C.","\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0435\u0439 \u0434\u043E \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0437\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F\u043C\u0438."],misconception:"\u0424\u043E\u0440\u043C\u0443\u043B\u0430 \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0431\u0435\u0437 \u0442\u0440\u0435\u043D\u0438\u044F; \u0434\u043B\u044F \u043A\u0430\u0442\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u0442\u0435\u043B\u0430 \u043D\u0443\u0436\u043D\u043E \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F."}},{id:3,title:"\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",subtitle:"\u0417\u0430\u043F\u0430\u0441\u0430\u0435\u043C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",intro:"\u0421\u0436\u0430\u0442\u0438\u0435 \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u0443\u043F\u0440\u0443\u0433\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u041A\u043E\u0433\u0434\u0430 \u0443\u043F\u043E\u0440 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u044E\u0442, \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0442\u043E\u043B\u043A\u0430\u0435\u0442 \u0442\u0435\u043B\u0435\u0436\u043A\u0443, \u0438 \u0443\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E.",formula:"E\u2091 = \xBDkx\xB2",question:"\u0415\u0441\u043B\u0438 \u0441\u0436\u0430\u0442\u0438\u0435 \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0443\u0434\u0432\u043E\u0438\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0451\u0442 \u0441 \u0437\u0430\u043F\u0430\u0441\u0451\u043D\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439?",options:["\u0412 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u0412 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u0412 8 \u0440\u0430\u0437 \u0431\u043E\u043B\u044C\u0448\u0435"],answer:1,param:{label:"\u0421\u0436\u0430\u0442\u0438\u0435",min:.1,max:.5,step:.05,value:.3,unit:"\u043C",decimals:2},result:i=>[["\u0416\u0451\u0441\u0442\u043A\u043E\u0441\u0442\u044C \u043F\u0440\u0443\u0436\u0438\u043D\u044B","200 \u041D/\u043C"],["\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(100*i*i).toFixed(2)} \u0414\u0436`],["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0442\u0435\u043B\u0435\u0436\u043A\u0438",`${Math.sqrt(200*i*i/.5).toFixed(2)} \u043C/\u0441`],["\u041C\u0430\u0441\u0441\u0430 \u0442\u0435\u043B\u0435\u0436\u043A\u0438","0.50 \u043A\u0433"]],explanation:"\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u0436\u0430\u0442\u0438\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u0441\u0436\u0430\u0442\u0438\u044F \u0434\u0430\u0451\u0442 \u0432\u0447\u0435\u0442\u0432\u0435\u0440\u043E \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0438 \u0440\u0430\u0432\u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.",teacher:{focus:"\u0421\u0443\u0434\u0438\u0442\u0435 \u043E \u0437\u0430\u043F\u0430\u0441\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u0434\u043B\u0438\u043D\u044B \u043F\u0440\u0443\u0436\u0438\u043D\u044B, \u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0441\u0438\u043B\u0435.",steps:["\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0441\u0436\u0430\u0442\u0438\u044F 0.10 \u043C, 0.20 \u043C \u0438 0.40 \u043C \u0438 \u0437\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0439.","\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u0442\u0435\u043B\u0435\u0436\u043A\u0430 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043A \u043D\u0435\u0434\u0435\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0434\u043B\u0438\u043D\u0435."],misconception:"E\u2091 = \xBDkx\xB2 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u0430 \u043B\u0438\u0448\u044C \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0441\u0442\u0438; \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u043E\u0435 \u0441\u0436\u0430\u0442\u0438\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0443\u044E \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."}},{id:4,title:"\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044F\u0447 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0451\u0442 \u043F\u043E\u0434\u043F\u0440\u044B\u0433\u0438\u0432\u0430\u0442\u044C",subtitle:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043D\u0435 \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u2014 \u043E\u043D\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0434\u0440\u0443\u0433\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",intro:"\u041F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0438 \u043C\u044F\u0447 \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0435\u043C\u043B\u044E \u0438 \u0432\u043E\u0437\u0434\u0443\u0445 \u0432\u0438\u0431\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0441\u043A\u043E\u043A \u043D\u0438\u0436\u0435.",formula:"h\u2099\u208A\u2081 = e\xB2h\u2099",question:"\u041A\u043E\u0433\u0434\u0430 \u043C\u044F\u0447 \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0437\u0430\u043C\u0438\u0440\u0430\u0435\u0442 \u043D\u0430 \u0437\u0435\u043C\u043B\u0435, \u043A\u0443\u0434\u0430 \u0443\u0448\u043B\u0430 \u0435\u0433\u043E \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F?",options:["\u041E\u043D\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0441\u0447\u0435\u0437\u043B\u0430","\u041F\u043E \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0448\u043B\u0430 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438","\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0448\u043B\u0430 \u0432 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E"],answer:1,param:{label:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F e",min:.4,max:.9,step:.05,value:.75,unit:"",decimals:2},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430","4.0 \u043C"],["\u0412\u044B\u0441\u043E\u0442\u0430 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043E\u0442\u0441\u043A\u043E\u043A\u0430",`${(4*i**6).toFixed(2)} \u043C`],["\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0442\u0440\u0451\u0445 \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0439",`${(100*i**6).toFixed(1)}%`],["\u0414\u043E\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",`${(100*(1-i**6)).toFixed(1)}%`]],explanation:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F e \u2014 \u044D\u0442\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043A \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0434\u0430\u0440\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u0436\u0434\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432 e\xB2 \u0440\u0430\u0437 \u043C\u0435\u043D\u044C\u0448\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439. \u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438: \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F, \u0437\u0432\u0443\u043A \u0438 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u0438\u0442\u043E\u0433\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438.",teacher:{focus:"\u041E\u0431\u044A\u044F\u0441\u043D\u044F\u0439\u0442\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0430 \u043D\u0435 \u043A\u0430\u043A \u0435\u0451 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432\u0430\u043D\u0438\u0435.",steps:["\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0437\u0430\u0442\u0443\u0445\u0430\u043D\u0438\u044F \u043F\u0440\u0438 e = 0.40 \u0438 e = 0.90.","\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043D\u0430\u0439\u0442\u0438 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0435 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u0432\u043E\u043B\u043D\u044B \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438."],misconception:"\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442 e\xB2 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F; \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u044F\u0447\u0438 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D\u044B \u0442\u0430\u043A\u0436\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044E \u0438 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u043E\u0437\u0434\u0443\u0445\u0430."}},{id:5,title:"\u0423\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044F",subtitle:"\u041E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432 \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",intro:"\u0412 \u043E\u0431\u043E\u0438\u0445 \u0441\u0442\u0430\u043A\u0430\u043D\u0430\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043C\u0430\u0441\u0441\u044B \u0432\u043E\u0434\u044B \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432\u0430. \u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0430 \u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u0435\u0433\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435.",formula:"Q = mc\u0394T",question:"\u041F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0430\u0441\u0441\u0430\u0445 \u0432\u043E\u0434\u044B \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u043A\u0430\u043A\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0431\u043E\u043B\u044C\u0448\u0435?",options:["\u0422\u0435\u0440\u043C\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u0412\u0441\u0435\u0433\u0434\u0430 \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439"],answer:0,param:{label:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432\u0430",min:200,max:1e3,step:100,value:600,unit:"\u0412\u0442",decimals:0},result:i=>{let e=i*20/840;return[["\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430","20 \u0441"],["\u041F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(i*20/1e3).toFixed(1)} \u043A\u0414\u0436`],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0432\u043E\u0434\u0430 \u0432 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(e*.9).toFixed(1)} \xB0C`],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0432\u043E\u0434\u0430 \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(e*.65).toFixed(1)} \xB0C`]]},explanation:"\u0423 \u0432\u043E\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0443\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u043B\u044F \u0435\u0451 \u043D\u0430\u0433\u0440\u0435\u0432\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u043D\u043E\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041E\u0431\u0430 \u0441\u0442\u0430\u043A\u0430\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u0434\u0430\u0451\u0442 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E. \u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043E\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 90% \u0438 65% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435.",teacher:{focus:"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0443\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u0435\u0440\u0438: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0432 \u0432\u043E\u0434\u0435.",steps:["\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F, \u043C\u0435\u043D\u044F\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C, \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0439\u0442\u0435 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.","\u041E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u0435, \u0447\u0442\u043E 90% \u0438 65% \u2014 \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043B\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E\u0441\u0442\u0438, \u0430 \u043D\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F."],misconception:"\u0412 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435 \u0441\u0442\u0430\u043A\u0430\u043D, \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440 \u0438 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u0442\u043E\u0436\u0435 \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u044E\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043E\u0441\u0442\u044B\u0432\u0430\u043D\u0438\u044F \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u0440\u0430\u0437\u043D\u0438\u0446\u0435\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440."}},{id:6,title:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",subtitle:"\u041E\u0434\u043D\u0430 \u0438 \u0442\u0430 \u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430 \u2014 \u0440\u0430\u0437\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",intro:"\u0414\u0432\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u0445 \u043C\u043E\u0442\u043E\u0440\u0430 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0433\u0440\u0443\u0437\u044B \u043D\u0430 \u043E\u0434\u043D\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0432\u044B\u0441\u043E\u0442\u0443. \u0420\u0430\u0431\u043E\u0442\u0430 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0437\u043D\u043E\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F.",formula:"P = W / t",question:"\u0414\u0432\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443. \u0423 \u043A\u0430\u043A\u043E\u0439 \u0438\u0437 \u043D\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435?",options:["\u0423 \u0442\u043E\u0439, \u0447\u0442\u043E \u0442\u0440\u0430\u0442\u0438\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438","\u0423 \u0442\u043E\u0439, \u0447\u0442\u043E \u0442\u0440\u0430\u0442\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438","\u0418\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u044B"],answer:0,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430",min:20,max:100,step:10,value:50,unit:"\u043A\u0433",decimals:0},result:i=>{let e=i*9.8*2;return[["\u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u0430","2.0 \u043C"],["\u0420\u0430\u0431\u043E\u0442\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B",`${e.toFixed(0)} \u0414\u0436`],["\u041C\u043E\u0442\u043E\u0440 A: 4 \u0441",`${(e/4).toFixed(1)} \u0412\u0442`],["\u041C\u043E\u0442\u043E\u0440 B: 8 \u0441",`${(e/8).toFixed(1)} \u0412\u0442`]]},explanation:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F. \u041E\u0431\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 mgh, \u043D\u043E \u043C\u043E\u0442\u043E\u0440 A \u0442\u0440\u0430\u0442\u0438\u0442 \u0432\u0434\u0432\u043E\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0435\u0433\u043E \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0432\u0434\u0432\u043E\u0435 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0443 \u043C\u043E\u0442\u043E\u0440\u0430 B.",teacher:{focus:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u2014 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0434\u0435\u043B\u0430\u043D\u043E, \u0430 \u0442\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0443 \u043C\u043E\u0442\u043E\u0440\u043E\u0432.","\u0417\u0430\u0442\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435, \u043A\u0430\u043A \u0432\u043C\u0435\u0441\u0442\u0435 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0438\u0445 \u043C\u043E\u0442\u043E\u0440\u043E\u0432."],misconception:"\u0417\u0434\u0435\u0441\u044C \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u0432\u044B\u0445\u043E\u0434\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C; \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F, \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C\u0430\u044F \u0438 \u043F\u0438\u043A\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043C\u043E\u0442\u043E\u0440\u0430 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C."}},{id:7,title:"\u041A\u041F\u0414",subtitle:"\u041A\u0443\u0434\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F?",intro:"\u041C\u043E\u0442\u043E\u0440 \u0434\u0435\u043B\u0438\u0442 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043D\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A. \u041A\u041F\u0414 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A\u0430\u044F \u0434\u043E\u043B\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u0430.",formula:"\u03B7 = A_\u043F\u043E\u043B\u0435\u0437\u043D / E_\u043F\u043E\u0434\u0432",question:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0441 \u041A\u041F\u0414 80% \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 500 \u0414\u0436 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041A\u0430\u043A\u043E\u0432\u0430 \u0435\u0433\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430?",options:["80 \u0414\u0436","400 \u0414\u0436","625 \u0414\u0436"],answer:1,param:{label:"\u041F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",min:200,max:1e3,step:100,value:500,unit:"\u0414\u0436",decimals:0},result:i=>[["\u041A\u041F\u0414 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430","80%"],["\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430",`${(i*.8).toFixed(0)} \u0414\u0436`],["\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0432 \u0442\u0435\u043F\u043B\u043E, \u0437\u0432\u0443\u043A \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",`${(i*.2).toFixed(0)} \u0414\u0436`],["\u041F\u043E\u043B\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430",`${i.toFixed(0)} \u0414\u0436`]],explanation:"\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 = \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \xD7 \u041A\u041F\u0414, \u0437\u043D\u0430\u0447\u0438\u0442 500 \u0414\u0436 \xD7 80% = 400 \u0414\u0436. \u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F 100 \u0414\u0436 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0442\u0435\u043F\u043B\u043E, \u0437\u0432\u0443\u043A \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041A\u041F\u0414 \u043D\u0438\u0436\u0435 100% \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0437\u0430\u043A\u043E\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438.",teacher:{focus:"\u041A\u041F\u0414 \u2014 \u044D\u0442\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435; \u043E\u043D \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \xAB\u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u0430\u044F\xBB \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0438\u0441\u0447\u0435\u0437\u043B\u0430.",steps:["\u041C\u0435\u043D\u044F\u0439\u0442\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043E\u0442 200 \u0414\u0436 \u0434\u043E 1000 \u0414\u0436, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044F \u041A\u041F\u0414 80%.","\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435, \u0447\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430, \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0431\u0430\u043B\u0430\u043D\u0441."],misconception:"\u041F\u043E\u043B\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u0440\u0430\u0432\u043D\u0430 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u041A\u041F\u0414 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0434\u043E\u043B\u044E, \u0430 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E."}},{id:8,title:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0435\u0442\u044C",subtitle:"\u041A\u0430\u043A \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u0440\u043E\u0434",intro:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E \u0438\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u043E\u0434\u0430 \u043F\u0440\u0438\u0432\u043E\u0434\u044F\u0442 \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0438\u0434\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u0442\u0443\u0440\u0431\u0438\u043D\u044B, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0438 \u0441\u0435\u0442\u044C \u043A \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u043C. \u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440\u044B \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0443 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u043C\u0435\u043D\u044C\u0448\u0435\u043C \u0442\u043E\u043A\u0435.",formula:"P = UI",question:"\u041A\u0430\u043A\u043E\u0432\u0430 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F?",options:["\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0442\u043E\u043A \u0438 \u043F\u043E\u0442\u0435\u0440\u0438 \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0439","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438\u0437 \u043D\u0438\u0447\u0435\u0433\u043E","\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438"],answer:0,param:{label:"\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",min:100,max:500,step:50,value:250,unit:"\u041C\u0412\u0442",decimals:0},result:i=>[["\u0422\u043E\u043A \u043F\u0440\u0438 400 \u043A\u0412 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*1e6/4e5).toFixed(0)} \u0410`],["\u0422\u043E\u043A \u043F\u0440\u0438 25 \u043A\u0412 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*1e6/25e3).toFixed(0)} \u0410`],["\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438",`${16 .toFixed(0)}\xD7`],["\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",`${i.toFixed(0)} \u041C\u0412\u0442`]],explanation:"\u041F\u0440\u0438 \u0442\u043E\u0439 \u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0430 P = UI \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442: \u0447\u0435\u043C \u0432\u044B\u0448\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435, \u0442\u0435\u043C \u043C\u0435\u043D\u044C\u0448\u0435 \u0442\u043E\u043A. \u041F\u043E\u0442\u0435\u0440\u0438 \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B I\xB2R, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438 \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u0438. \u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440 \u043C\u0435\u043D\u044F\u0435\u0442 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u0438 \u0442\u043E\u043A\u0430, \u043D\u043E \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E.",teacher:{focus:"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0442\u043E\u043A\u0438 \u043F\u0440\u0438 \u0434\u0432\u0443\u0445 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F\u0445 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0439 \u0438 \u0442\u043E\u0439 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C, \u0437\u0430\u0447\u0435\u043C \u043D\u0443\u0436\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043D\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438.",steps:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u0451\u043B, \u0442\u0443\u0440\u0431\u0438\u043D\u0443, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440, \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440 \u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u0439, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0446\u0435\u043F\u043E\u0447\u043A\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0442\u043E\u043A\u0430 \u043F\u0440\u0438 400 \u043A\u0412 \u0438 25 \u043A\u0412 \u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435 \u0438\u0445 \u0441 \u0444\u043E\u0440\u043C\u0443\u043B\u043E\u0439 I\xB2R."],misconception:"\u0412 \u044D\u0442\u043E\u0439 \u0433\u043B\u0430\u0432\u0435 \u0442\u0440\u0451\u0445\u0444\u0430\u0437\u043D\u0430\u044F \u0441\u0435\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u043E\u043A\u0430 \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0430 \u0434\u043E \u043E\u0434\u043D\u043E\u043F\u0443\u0442\u0435\u0432\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 P = UI. \u0412 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0438\u0438 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u0430\u043A\u0436\u0435 \u0444\u0430\u0437\u044B, \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043B\u0438\u043D\u0438\u0439."}},{id:9,title:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u043F\u0438\u0449\u0435",subtitle:"\u041E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0438\u0449\u0438 \u043F\u043E \u0440\u043E\u0441\u0442\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",intro:"\u0421\u043E\u0436\u0436\u0451\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0440\u0430\u0437\u0435\u0446 \u043F\u0438\u0449\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0434\u0438\u043C \u0432\u044B\u0434\u0435\u043B\u0438\u0432\u0448\u0443\u044E\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432\u043E\u0434\u0435 \u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0435. \u041C\u0430\u0441\u0441\u0430 \u0432\u043E\u0434\u044B, \u0435\u0451 \u0443\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u043F\u0438\u0449\u0435\u0439.",formula:"Q = mc\u0394T",question:"\u041F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0430\u0441\u0441\u0430\u0445 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043A\u0430\u043A\u043E\u0439 \u0442\u0438\u043F \u043E\u0431\u044B\u0447\u043D\u043E \u0434\u0430\u0451\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438?",options:["\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435\u043C \u0436\u0438\u0440\u043E\u0432","\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435\u043C \u0432\u043E\u0434\u044B","\u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0443\u0434\u0438\u0442\u044C \u043F\u043E \u0446\u0432\u0435\u0442\u0443"],answer:0,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430",min:1,max:5,step:.5,value:2,unit:"\u0433",decimals:1},result:i=>{let e=i*17,t=e*1e3*.2/(.2*4200);return[["\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${e.toFixed(1)} \u043A\u0414\u0436`],["\u0414\u043E\u043B\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439","20%"],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B 200 \u0433 \u0432\u043E\u0434\u044B",`${t.toFixed(1)} \xB0C`],["\u042D\u043D\u0435\u0440\u0433\u0438\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439",`${(e*.2).toFixed(1)} \u043A\u0414\u0436`]]},explanation:"\u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0430 \u0440\u0430\u0432\u043D\u043E\u0439 17 \u043A\u0414\u0436/\u0433 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043B\u0438\u0448\u044C 20% \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439. \u0424\u043E\u0440\u043C\u0443\u043B\u0430 Q = mc\u0394T \u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E \u0432\u043E\u0434\u043E\u0439, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0438\u0449\u0438. \u0416\u0438\u0440\u044B \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C\u044E, \u0447\u0435\u043C \u0443\u0433\u043B\u0435\u0432\u043E\u0434\u044B \u0438\u043B\u0438 \u0431\u0435\u043B\u043A\u0438.",teacher:{focus:"\u041A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u0440\u044F\u0435\u0442 \u0434\u043E\u043B\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E \u0432\u043E\u0434\u043E\u0439; \u043F\u043E\u043B\u043D\u0443\u044E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044E\u0442 \u0447\u0435\u0440\u0435\u0437 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C.",steps:["\u041C\u0435\u043D\u044F\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435, \u043A\u0430\u043A \u0432 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u043C\u0430\u0441\u0441\u043E\u0439.","\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u0435, \u043F\u043E\u0447\u0435\u043C\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0432\u043E\u0437\u0434\u0443\u0445\u0443, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E."],misconception:"\u0418 17 \u043A\u0414\u0436/\u0433, \u0438 20% \u2014 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0430 \u043D\u0435 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u043E\u0432; \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432 \u043F\u0438\u0449\u0438 \u0441\u0438\u043B\u044C\u043D\u043E \u0432\u0430\u0440\u044C\u0438\u0440\u0443\u0435\u0442\u0441\u044F."}},{id:10,title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",subtitle:"\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F",intro:"\u0428\u0430\u0440 \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0442\u0443\u0434\u0430-\u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043F\u043E U-\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u043C\u0443 \u0436\u0451\u043B\u043E\u0431\u0443. \u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F, \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F, \u043D\u043E \u0438\u0445 \u0441\u0443\u043C\u043C\u0430 \u043F\u043E \u0432\u0441\u0435\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044F\u043C \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439.",formula:"E_\u043F\u043E\u043B\u043D = E\u209A + E\u2096 + E_\u0442\u0435\u043F\u043B",question:"\u0418\u0437-\u0437\u0430 \u0442\u0440\u0435\u043D\u0438\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0448\u0430\u0440\u0430 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0431\u044B\u0432\u0430\u0435\u0442. \u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441 \u043F\u043E\u043B\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439?",options:["\u041F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0431\u044B\u0432\u0430\u0435\u0442","\u041E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439","\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0438\u0437 \u043D\u0438\u0447\u0435\u0433\u043E"],answer:1,param:{label:"\u0414\u043E\u043B\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u0442\u0440\u0435\u043D\u0438\u0435\u043C",min:0,max:.4,step:.05,value:.15,unit:"",decimals:2},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F","100.0 \u0414\u0436"],["\u041E\u0441\u0442\u0430\u0432\u0448\u0430\u044F\u0441\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(100*(1-i)).toFixed(1)} \u0414\u0436`],["\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",`${(100*i).toFixed(1)} \u0414\u0436`],["\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F","100.0 \u0414\u0436"]],explanation:"\u0422\u0440\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043D\u043E \u0435\u0441\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0436\u0451\u043B\u043E\u0431, \u0448\u0430\u0440, \u0432\u043E\u0437\u0434\u0443\u0445 \u0438 \u0437\u0435\u043C\u043B\u044E, \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u043E\u0439 100 \u0414\u0436. \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u0435\u043D; \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0438\u0445 \u0441\u0443\u043C\u043C\u0430.",teacher:{focus:"\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C, \u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043B\u0438 \u0431\u0430\u043B\u0430\u043D\u0441, \u0438 \u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0448\u0438\u0440\u043E\u043A\u0443\u044E \u0433\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0442\u0440\u0435\u043D\u0438\u0435 0 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0432\u0437\u0430\u0438\u043C\u043D\u044B\u0435 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0417\u0430\u0442\u0435\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0442\u0440\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043E\u0441\u0442\u0430\u0432\u0448\u0435\u0439\u0441\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."],misconception:"\u0415\u0441\u043B\u0438 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0448\u0430\u0440, \u0435\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0431\u0443\u0434\u0442\u043E \u0431\u044B \u0443\u0431\u044B\u0432\u0430\u0435\u0442. \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u2014 \u0438 \u0431\u0430\u043B\u0430\u043D\u0441 \u0441\u043D\u043E\u0432\u0430 \u0441\u043E\u0439\u0434\u0451\u0442\u0441\u044F."}}],Iu="\u0415\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043D\u043E\u0435, \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u044B\u043C 9,8 \u043C/\u0441\xB2. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0438\u0440\u0443\u044E\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u0438 \u0438 \u0443\u043F\u0440\u043E\u0449\u0430\u044E\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0438\u0440\u0430.";var Ln={ink:3817290,paper:15922159,metal:11120820,darkMetal:7305086,wood:12625027,orange:13994832,blue:5672903,green:8231034,yellow:14070607,red:12147821,purple:8414644,water:8629697,white:16316919,bg:15659505},lc=null;function Lu(){return lc||(lc=new Qt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),lc}function Du(i=20261026){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var cc=null;function jg(){if(cc)return cc;let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=Du(711);e.fillStyle="#f7f4ed",e.fillRect(0,0,256,256);for(let s=0;s<1400;s+=1){let r=t()>.5?60:120;e.fillStyle=`rgba(${r},${r-4},${r-9},${.016+t()*.022})`,e.fillRect(t()*256,t()*256,.5+t()*1.4,.5+t())}let n=new ri(i);return n.colorSpace=At,n.wrapS=n.wrapT=Ei,n.repeat.set(1.6,1.6),cc=n,n}var hc=null;function Qg(){if(hc)return hc;let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=Du(9127);e.clearRect(0,0,256,256);for(let s=0;s<2;s+=1)for(let r=-18;r<38;r+=1){let a=r*11+t()*3;e.strokeStyle=`rgba(38,41,51,${.07+t()*.07})`,e.lineWidth=.45+t()*.45,e.beginPath(),s===0?(e.moveTo(a,256),e.lineTo(a+256,0)):(e.moveTo(a,0),e.lineTo(a+256,256)),e.stroke()}let n=new ri(i);return n.wrapS=n.wrapT=Ei,n.repeat.set(2.4,2.4),hc=n,n}var Lo=null;function e_(){if(Lo)return Lo;let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);return t.addColorStop(0,"rgba(64,54,40,0.34)"),t.addColorStop(.55,"rgba(64,54,40,0.16)"),t.addColorStop(1,"rgba(64,54,40,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Lo=new ri(i),Lo}function Uu(i){let e=new Qt({map:e_(),transparent:!0,depthWrite:!1,toneMapped:!1}),t=new ze(new ls(i,28),e);return t.rotation.x=-Math.PI/2,t.renderOrder=2,t}function Nu(){let i=jg();return{ink:new yt({color:Ln.ink,roughness:.96,map:i}),paper:new yt({color:Ln.paper,roughness:.98,map:i}),metal:new yt({color:Ln.metal,roughness:.86,metalness:.08,map:i}),darkMetal:new yt({color:Ln.darkMetal,roughness:.9,metalness:.1,map:i}),wood:new yt({color:Ln.wood,roughness:.96,map:i}),white:new yt({color:Ln.white,roughness:.96,map:i}),glass:new yt({color:15001829,roughness:.5,metalness:0,transparent:!0,opacity:.18,depthWrite:!1}),water:new yt({color:Ln.water,roughness:.62,transparent:!0,opacity:.64,depthWrite:!1,map:i}),orange:new yt({color:14131311,roughness:.94,map:i}),blue:new yt({color:8824772,roughness:.94,map:i}),green:new yt({color:9676166,roughness:.94,map:i}),yellow:new yt({color:14072691,roughness:.94,map:i}),red:new yt({color:13143167,roughness:.94,map:i}),purple:new yt({color:10127035,roughness:.94,map:i}),hatch:new Qt({map:Qg(),transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1})}}var Zt={box:new ai(1,1,1),sphere:new wn(1,26,18),cylinder:new cn(1,1,1,26,1,!1),cylinderOpen:new cn(1,1,1,26,1,!0),circle:new ls(1,30),cone:new oi(1,1,14),torus:new Tn(1,.09,8,40)};function Di(i,e=1){return new Qt({color:i,transparent:e<1,opacity:e,toneMapped:!1,depthWrite:e>=1})}function yr(i,e={}){let t=e.fontSize??48,n=e.weight??500,s=e.mono?'"JetBrains Mono", Consolas, monospace':'"Manrope", "Segoe UI", Arial, sans-serif',r=[];if(e.maxWidthChars){let p=e.maxWidthChars,M=i.split(/\s+/),E="";for(let b of M){let A=E?`${E} ${b}`:b;A.length>p&&E?(r.push(E),E=b):E=A}E&&r.push(E)}else r.push(i);let a=Math.round(t*1.28),o=Math.round(t*.5),l=document.createElement("canvas"),c=l.getContext("2d");c.font=`${n} ${t}px ${s}`;let h=r.map(p=>c.measureText(p).width),m=Math.max(8,...h);l.width=Math.min(2048,Math.ceil(m+o*2)),l.height=a*r.length+o;let u=l.getContext("2d");u.font=`${n} ${t}px ${s}`,u.textAlign="center",u.textBaseline="middle",u.fillStyle=e.color??"#262933",r.forEach((p,M)=>u.fillText(p,l.width/2,o/2+a*(M+.5)));let d=new ri(l);d.colorSpace=At,d.minFilter=Lt;let g=new rs({map:d,transparent:!0,depthWrite:!1,toneMapped:!1}),v=new Ws(g),f=e.width??Math.max(1.1,Math.min(3.8,i.length*.2+.5));return v.scale.set(f,f*l.height/l.width,1),v.renderOrder=8,v}function Fu(i,e,t,n={},s){let r=new ct,a=1.7,o=.5,l=new ze(Zt.box,t_());l.scale.set(o,a,o),l.position.y=a/2;let c=s(new Qt({color:e,transparent:!0,opacity:.85,toneMapped:!1})),h=new ze(Zt.box,c);h.scale.set(o*.74,a,o*.74),h.position.y=a/2;let m=s(yr(i,{width:1.42,fontSize:34,maxWidthChars:15}));return m.position.set(0,a+.42,0),r.add(l,h,m),r.position.set(...t),r.userData.set=(u,d)=>{let g=gi.clamp(u,.015,1);if(h.scale.y=a*g,h.position.y=a*g/2,d&&r.userData.valueText!==d){r.userData.valueText=d,r.userData.valueLabel&&(r.remove(r.userData.valueLabel),r.userData.valueLabel.material.map?.dispose(),r.userData.valueLabel.material.dispose());let v=s(yr(d,{width:1.15,fontSize:40,color:"#262933"}));v.position.set(0,-.3,0),r.add(v),r.userData.valueLabel=v}},r.userData.set(n.initial??1),r}var uc=null;function t_(){return uc||(uc=new yt({color:15001829,roughness:.5,transparent:!0,opacity:.3,depthWrite:!1})),uc}function Ou(i,e,t={},n){let s=new ct,r=new En(i.map(v=>new C(...v))),a=t.radius??.1,o=n(new Qt({color:e,transparent:!0,opacity:.08,blending:or,depthWrite:!1})),l=n(new Qt({color:e,transparent:!0,opacity:.4,depthWrite:!1})),c=new ze(new qn(r,60,a,8,!1),o),h=new ze(new qn(r,60,a*.32,6,!1),l);s.add(c,h);let m=n(new Qt({color:e,transparent:!0,opacity:.95,toneMapped:!1})),u=new wn(t.particleSize??.095,10,8),d=t.count??7,g=[];for(let v=0;v<d;v+=1){let f=new ze(u,m);f.renderOrder=7,g.push(f),s.add(f)}return s.userData.update=(v,f=0,p=!1,M=!0)=>{if(s.visible=M,!M)return;let E=p?f*2:v/6;g.forEach((b,A)=>{let T=(A/d+E)%1;r.getPointAt(T,b.position);let _=.78+.22*Math.sin((T+A/d)*Math.PI*2);b.scale.setScalar(_)}),l.opacity=p?.7:.3},n(c.geometry),n(h.geometry),n(u),s}var Wt=gi.clamp,ku=gi.lerp,xs=i=>1-Math.pow(1-Wt(i,0,1),3),pc=class{constructor(){this.group=new ct;this.infos=[];this.clickables=[];this.interaction=null;this.trash=[];this.materials=Nu()}track(e){let t=e;return typeof t?.dispose=="function"&&this.trash.push({dispose:()=>{t.dispose?.()}}),e}add(e,t){return this.group.add(e),t&&(this.infos.push({title:t[0],description:t[1]}),this.clickables.push({root:e,title:t[0],description:t[1],hit:null,localBox:null})),e}label(e,t,n={}){let s=this.track(yr(e,n));return s.position.set(...t),this.add(s)}base(e=6.4,t=5.2){let n=new ze(Zt.box,this.materials.paper);n.scale.set(e,.12,t),n.position.y=-.02,this.add(n);let s=new ze(new Ti(e*.965,t*.965),this.materials.hatch);s.rotation.x=-Math.PI/2,s.position.y=.047,this.track(s.geometry),this.add(s)}box(e,t,n){let s=new ze(Zt.box,n);return s.scale.set(...e),s.position.set(...t),this.add(s)}sphere(e,t,n,s=26){let r=new ze(s===26?Zt.sphere:new wn(1,s,Math.max(8,s-8)),n);return s!==26&&this.track(r.geometry),r.scale.setScalar(e),r.position.set(...t),this.add(r)}cylinder(e,t,n,s,r={}){let a=r.segments??24,o=a===24&&!r.openEnded&&(r.radiusTop??e)===e?Zt.cylinder:this.track(new cn(r.radiusTop??e,e,1,a,1,r.openEnded??!1)),l=new ze(o,s);return l.scale.set(e,t,e),l.position.set(...n),this.add(l)}rodBetween(e,t,n=.045,s){let r=new C(...e),a=new C(...t),o=a.clone().sub(r),l=this.cylinder(n,o.length(),r.clone().add(a).multiplyScalar(.5).toArray(),s??this.materials.darkMetal,{segments:10});return l.quaternion.setFromUnitVectors(new C(0,1,0),o.normalize()),l}tube(e,t,n,s={}){let r=new En(e.map(o=>new C(...o))),a=this.track(new qn(r,Math.max(48,e.length*14),t,s.radialSegments??9,!1));return this.add(new ze(a,n))}coil(e={}){let t=e.turns??9,n=e.length??2.2,s=e.radius??.34,r=e.wire??.055,a=[],o=t*16;for(let u=0;u<=o;u+=1){let d=u/o,g=d*t*Math.PI*2;a.push(new C(d*n,Math.cos(g)*s,Math.sin(g)*s))}let l=new En(a),c=this.track(new qn(l,o,r,6,!1)),h=new ze(c,this.materials.darkMetal),m=new ct;return m.add(h),this.add(m)}battery(e=[0,0,0]){let t=new ct,n=new ze(Zt.box,this.materials.darkMetal);n.scale.set(1.05,1.45,.65),n.position.y=.725;let s=new ze(Zt.box,this.materials.green);s.scale.set(.82,.72,.67),s.position.y=.85;let r=this.cylinder(.1,.16,[-.25,1.53,0],this.materials.metal,{segments:14}),a=this.cylinder(.1,.16,[.25,1.53,0],this.materials.metal,{segments:14}),o=this.track(yr("+",{width:.38,fontSize:76,color:"#f5f0e5"}));return o.position.set(0,.85,.37),t.add(n,s,r,a,o),t.position.set(...e),this.add(t)}mug(e=[0,0,0],t){let n=t??this.materials.paper,s=new ct,r=new ze(this.track(new cn(.53,.48,1.05,24,1,!0)),n);r.position.y=.55;let a=this.cylinder(.45,.08,[0,.08,0],n),o=this.cylinder(.43,.06,[0,.9,0],this.materials.orange,{segments:24}),l=new ze(this.track(new Tn(.38,.09,10,24,Math.PI*1.65)),n);return l.position.set(.54,.57,0),l.rotation.y=Math.PI/2,l.rotation.z=-Math.PI*.82,s.add(r,a,o,l),s.position.set(...e),s.userData.liquid=o,this.add(s)}beaker(e={}){let t=e.radius??.58,n=e.height??1.65,s=new ct,r=new ze(this.track(new cn(t,t,n,26,1,!0)),this.materials.glass);r.position.y=n/2;let a=this.cylinder(t,.06,[0,.03,0],this.materials.glass,{segments:26}),o=new ze(this.track(new Tn(t,.025,8,40)),this.materials.darkMetal);o.rotation.x=Math.PI/2,o.position.y=n;let l=e.liquidHeight??n*.55,c=this.track(this.materials.water.clone()),h=this.cylinder(t*.91,l,[0,.07+l/2,0],c,{segments:26});if(s.add(r,a,o,h),e.insulated){let m=new ze(this.track(new cn(t*1.1,t*1.1,n*.75,26,1,!0)),this.materials.metal);m.position.y=n*.39,s.add(m),h.position.y+=.02}return s.userData.liquid=h,s.userData.height=n,this.add(s)}pylon(e,t=3.2){let n=new ct,s=t*.22;[[[-s,0,0],[-s*.25,t,0]],[[s,0,0],[s*.25,t,0]],[[-s,0,0],[s,0,0]],[[-s*.25,t,0],[s*.25,t,0]],[[-s*.75,t*.45,0],[s*.75,t*.45,0]],[[-s*.52,t*.72,0],[s*.52,t*.72,0]],[[-s,t*.58,0],[s,t*.58,0]]].forEach(([a,o])=>n.add(this.rodBetween(a,o,.035)));for(let a=1;a<=4;a+=1){let o=t*a/5,l=t*(a+1)/5;n.add(this.rodBetween([-s*.6,o,0],[s*.45,l,0],.022)),n.add(this.rodBetween([s*.6,o,0],[-s*.45,l,0],.022))}return n.position.set(...e),this.add(n)}house(e,t=1){let n=new ct,s=new ze(Zt.box,this.materials.paper);s.scale.set(1.35,1.1,1.1),s.position.y=.55;let r=new ze(new oi(1.05,.72,4),this.materials.red);this.track(r.geometry),r.position.y=1.45,r.rotation.y=Math.PI/4;let a=new ze(Zt.box,this.materials.wood);a.scale.set(.28,.58,.05),a.position.set(0,.3,.575);let o=Di(14070607,.9);this.track(o);let l=new ze(Zt.box,o);l.scale.set(.27,.28,.04),l.position.set(-.38,.69,.58);let c=l.clone();return c.position.x=.38,n.add(s,r,a,l,c),n.position.set(...e),n.scale.setScalar(t),this.add(n)}flow(e,t,n={}){return this.add(Ou(e,t,n,s=>this.track(s)))}bar(e,t,n,s=1){return this.add(Fu(e,t,n,{initial:s},r=>this.track(r)))}blob(e,t,n,s=.055){let r=Uu(e);return r.position.set(t,s,n),this.add(r)}guideLine(e){let t=this.track(new Pt().setFromPoints(e.map(r=>new C(...r)))),n=this.track(new Js({color:4539715,dashSize:.18,gapSize:.11,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1})),s=new os(t,n);return s.computeLineDistances(),s.renderOrder=20,s.visible=!1,this.add(s)}makeInteraction(e){return this.interaction={object:e.object,planeZ:e.planeZ,guide:e.guidePoints?this.guideLine(e.guidePoints):null,fromObject:e.fromObject,valueFromPoint:e.valueFromPoint,restValue:e.restValue,releaseDuration:e.releaseDuration},this.interaction}dispose(){this.trash.forEach(e=>{try{e.dispose()}catch{}}),this.trash=[],this.materials.water.dispose(),Object.values(this.materials).forEach(e=>e.dispose())}};function Dn(i,e){return i.update=e,i}function n_(i){i.base();let e=i.battery([-2.25,.05,.8]);e.scale.setScalar(.78);let t=i.coil({length:1.5,radius:.28});t.position.set(1.1,.55,1.8),t.rotation.y=-.25;let n=i.mug([2.15,.04,.25]);n.scale.setScalar(.72),i.box([1.3,.55,1.3],[0,.28,.7],i.materials.wood);let s=i.sphere(.47,[0,1.03,.7],i.materials.blue);i.add(s,["\u0428\u0430\u0440 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041F\u043E\u0434\u044A\u0451\u043C \u0448\u0430\u0440\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u044B \xAB\u0448\u0430\u0440 \u2014 \u0417\u0435\u043C\u043B\u044F\xBB. \u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 mgh."]),i.add(e,["\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430 \xB7 \u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0445\u043E\u0434\u0435 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0430\u043A\u0446\u0438\u0439. \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0446\u0435\u043F\u044C \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438."]),i.add(t,["\u041F\u0440\u0443\u0436\u0438\u043D\u0430 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041F\u0440\u0443\u0436\u0438\u043D\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u0443\u043F\u0440\u0443\u0433\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0438 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044F\u0441\u044C \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435."]),i.add(n,["\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0423 \u0431\u043E\u043B\u0435\u0435 \u0433\u043E\u0440\u044F\u0447\u0435\u0433\u043E \u0442\u0435\u043B\u0430 \u043E\u0431\u044B\u0447\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435; \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u043C\u0443 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E."]);let r=i.bar("\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[-2.15,.06,-1.65],1),a=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[0,.06,-1.65],.05),o=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[2.15,.06,-1.65],.08);i.flow([[-2.1,1.15,.7],[-1.5,2.4,.3],[-.2,2.2,.6],[0,1.4,.7]],13994832),i.label("\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043A \u0448\u0430\u0440\u0443",[0,4.15,0],{width:4.6,fontSize:40}),i.blob(.62,0,.7);let l=i.makeInteraction({object:s,planeZ:.7,guidePoints:[[0,1.03,.7],[0,3.03,.7]],fromObject:()=>Wt((s.position.y-1.03)/2,0,1),valueFromPoint:c=>Wt((c.y-1.03)/2,0,1),restValue:0,releaseDuration:1.5});return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:l,update:()=>{},dispose:()=>i.dispose()},({t:c,progress:h,param:m,manual:u})=>{let d=!!u?.active,g=d?u.releasing?ku(u.from,0,u.releaseProgress*u.releaseProgress):u.value:xs(h);s.position.y=1.03+2*g,s.rotation.z=-g*Math.PI*2,r.userData.set(d?1:1-.55*g),a.userData.set(.05+.95*g),o.userData.set(d?.08+.2*u.releaseProgress*(1-g):.08+.025*(1-Math.cos(c*Math.PI/3))),n.rotation.y=.08*(1-Math.cos(c*Math.PI/6)),t.scale.x=.92+.08*Math.sin(c*Math.PI/3),e.position.y=.05+.04*(1-Math.cos(c*Math.PI/6)),s.userData.mass=m})}function i_(i){i.base();let e=new C(-2.65,3.65,.2),t=new C(2.45,.48,.2),n=i.box([5.95,.16,1.35],[0,0,0],i.materials.wood);n.position.copy(e.clone().add(t).multiplyScalar(.5)),n.rotation.z=Math.atan2(t.y-e.y,t.x-e.x),i.add(n,["\u041D\u0430\u043A\u043B\u043E\u043D\u043D\u044B\u0439 \u0436\u0451\u043B\u043E\u0431","\u0415\u0441\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0447\u044C \u0442\u0440\u0435\u043D\u0438\u0435\u043C, \u0436\u0451\u043B\u043E\u0431 \u043C\u0435\u043D\u044F\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u043D\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u0443\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E."]),i.add(i.rodBetween([-2.55,.1,.2],[-2.55,3.45,.2],.08),["\u0428\u0442\u0430\u0442\u0438\u0432","\u0428\u0442\u0430\u0442\u0438\u0432 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u043B\u0435\u0433\u043A\u043E \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441 \u0440\u0430\u0437\u043D\u044B\u0445 \u0432\u044B\u0441\u043E\u0442."]);let s=i.sphere(.42,e.toArray(),i.materials.orange);i.add(s,["\u041A\u0430\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u0448\u0430\u0440","\u041A\u043E\u0433\u0434\u0430 \u0448\u0430\u0440 \u0441\u043A\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u0430\u0441\u0441\u0430 \u0448\u0430\u0440\u0430 1 \u043A\u0433."]);let r=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-1.55,.05,-1.75],1),a=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[0,.05,-1.75],.04),o=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F (\u0432 \u0438\u0434\u0435\u0430\u043B\u0435 0)",12939106,[1.55,.05,-1.75],.02);i.flow([[-2.3,3.4,.2],[-1.1,2.7,.2],[.6,1.25,.2],[2.35,.65,.2]],13994832,{count:9}),i.label("v = \u221A(2gh)",[0,4.45,0],{width:2.8,fontSize:54});let l=i.blob(.55,e.x,e.z),c=t.clone().sub(e),h=c.lengthSq(),m=g=>Wt(g.clone().sub(e).dot(c)/h,0,1),u=[];for(let g=0;g<=20;g+=1){let v=e.clone().lerp(t,g/20);u.push([v.x,v.y+.42,v.z])}let d=i.makeInteraction({object:s,planeZ:.2,guidePoints:u,fromObject:()=>m(s.position),valueFromPoint:g=>m(g),restValue:1,releaseDuration:1.8});return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:d,update:()=>{},dispose:()=>i.dispose()},({progress:g,param:v,manual:f})=>{let p=(v-1)/4,M=t.clone().lerp(e,.32+.68*p),E=!!f?.active,b=E?f.releasing?ku(f.from,1,f.releaseProgress*f.releaseProgress):f.value:Wt(g,0,1);E?s.position.copy(e.clone().lerp(t,Wt(b,0,1))):s.position.copy(M.lerp(t,b*b)),s.position.y+=.42,s.rotation.z=-b*14,r.userData.set(1-b),a.userData.set(Math.max(.04,f?.dragging?.04:b)),o.userData.set(.02),l.position.x=s.position.x,l.position.z=s.position.z})}function s_(i){i.base(),i.add(i.box([.28,2.15,2.1],[-2.8,1.08,.2],i.materials.wood),["\u041D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u044B\u0439 \u0443\u043F\u043E\u0440","\u0423\u043F\u043E\u0440 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043E\u0434\u0438\u043D \u043A\u043E\u043D\u0435\u0446 \u043F\u0440\u0443\u0436\u0438\u043D\u044B, \u0447\u0442\u043E\u0431\u044B \u0441\u0436\u0430\u0442\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0438\u0437\u043C\u0435\u0440\u044F\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u043E."]);let e=i.box([5.8,.15,1.6],[0,.12,.2],i.materials.metal);i.add(e,["\u0416\u0451\u043B\u043E\u0431 \u0441 \u043C\u0430\u043B\u044B\u043C \u0442\u0440\u0435\u043D\u0438\u0435\u043C","\u0416\u0451\u043B\u043E\u0431 \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u0435\u043B\u0435\u0436\u043A\u0435 \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435; \u0442\u0440\u0435\u043D\u0438\u0435\u043C \u0432 \u044D\u0442\u043E\u0439 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0433\u0430\u044E\u0442."]);let t=i.coil({length:2.4,radius:.42,turns:10});t.position.set(-2.62,.86,.2),i.add(t,["\u0421\u0436\u0438\u043C\u0430\u0435\u043C\u0430\u044F \u043F\u0440\u0443\u0436\u0438\u043D\u0430","\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0441\u0442\u0438 \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \xBDkx\xB2. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 k = 200 \u041D/\u043C."]);let n=new ct,s=new ze(Zt.box,i.materials.blue);s.scale.set(1.05,.72,1.05),s.position.y=.62,n.add(s),[-.36,.36].forEach(l=>[-.43,.43].forEach(c=>{let h=i.cylinder(.17,.12,[l,.22,c],i.materials.darkMetal,{segments:16});h.rotation.x=Math.PI/2,h.position.set(l,.22,c),n.add(h)})),i.add(n,["\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0430","\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u044F \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0443\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0442\u0435\u043B\u0435\u0436\u043A\u0438. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u0430\u0441\u0441\u0430 \u0442\u0435\u043B\u0435\u0436\u043A\u0438 0.50 \u043A\u0433."]);let r=i.bar("\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",8414644,[-1.3,.05,-1.85],1),a=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0438",13994832,[1.1,.05,-1.85],.03);i.flow([[-1.6,1.25,.2],[-.5,2.25,.2],[.8,1.55,.2],[1.5,.9,.2]],8414644),i.label("\u0421\u0436\u0430\u0442\u0438\u0435 \xD72 \u2192 \u0423\u043F\u0440\u0443\u0433\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \xD74",[0,3.4,0],{width:4.3,fontSize:42});let o=i.blob(.7,-.25,.2);return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({progress:l,param:c})=>{let h=xs(l),m=.35+c*1.15;t.scale.x=m+(1-m)*h,n.position.set(-.25+h*4.25,.05,.2),n.children.forEach((u,d)=>{d>0&&(u.rotation.z=-h*18)}),r.userData.set(1-h),a.userData.set(Math.max(.03,h)),o.position.x=n.position.x})}function r_(i){i.base();let e=i.box([4.6,.32,3.5],[0,.17,.25],i.materials.darkMetal);i.add(e,["\u0423\u0434\u0430\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430","\u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0435\u0442 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0451, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0447\u0435\u0440\u0435\u0437 \u0437\u0432\u0443\u043A \u0438 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044E."]);let t=i.sphere(.55,[0,4.55,.25],i.materials.orange);i.add(t,["\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043C\u044F\u0447","\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u2014 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043A \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0434\u0430\u0440\u0430. \u0412\u044B\u0441\u043E\u0442\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0441\u043A\u043E\u043A\u043E\u0432 \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432 e\xB2 \u0440\u0430\u0437."]);let n=i.bar("\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-2.15,.05,-1.65],1),s=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[2.15,.05,-1.65],.02),r=[];for(let o=0;o<3;o+=1){let l=i.track(Di(13994832,.6)),c=new ze(new Tn(.7+o*.35,.035,8,48),l);c.rotation.x=Math.PI/2,c.position.set(0,.38+o*.025,.25),i.add(c),r.push(c)}i.flow([[0,.7,.25],[.8,1.4,0],[1.6,1.8,-.8],[2.1,1.4,-1.6]],13994832),i.label("\u041A\u0430\u0436\u0434\u043E\u0435 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E",[0,5.5,0],{width:5.4,fontSize:38,wrap:34}),i.blob(.7,0,.25);let a=i.makeInteraction({object:t,planeZ:.25,guidePoints:[[0,.9,.25],[0,4.9,.25]],fromObject:()=>Wt((t.position.y-.9)/4,0,1),valueFromPoint:o=>Wt((o.y-.9)/4,0,1),restValue:0,releaseDuration:3.8});return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:a,update:()=>{},dispose:()=>i.dispose()},({t:o,progress:l,param:c,manual:h})=>{let m=!!h?.active,u=m?h.releaseProgress*5:Wt(l,0,1)*5,d=Math.min(4,Math.floor(u)),g=u>=5?1:u-d,v=m?4*h.from:4,f=0;m&&!h.releasing?f=4*h.value:!m&&l<=0?f=4:d===0?f=v*(1-g)*(1-g):d<4&&(f=v*Math.pow(c,2*(d-1))*4*g*(1-g)),t.position.y=.9+f;let p=d>0&&(g<.12||g>.88)?1:0;r.forEach((E,b)=>{let A=.85+p*(.3+b*.2);E.scale.setScalar(A),E.material.opacity=.1+p*(.55-b*.12)});let M=m?h.releaseProgress*(1-Math.pow(c,4)):l<=0?0:Wt((d+g)/4,0,1)*(1-Math.pow(c,6));n.userData.set(1-M),s.userData.set(Math.max(.02,M)),(!m&&l>=1||m&&!h.releasing&&h.releaseProgress>=1)&&(t.position.y=.9),t.rotation.z=o*Math.PI/6})}function a_(i){i.base();let e=i.beaker({insulated:!0,liquidHeight:.95});e.position.set(-1.45,.15,.35),i.add(e,["\u0422\u0435\u0440\u043C\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u0418\u0437\u043E\u043B\u044F\u0446\u0438\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0435\u043F\u043B\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u043E\u0441\u0442\u044C\u044E, \u043A\u043E\u043D\u0432\u0435\u043A\u0446\u0438\u0435\u0439 \u0438 \u0438\u0441\u043F\u0430\u0440\u0435\u043D\u0438\u0435\u043C. \u041C\u043E\u0434\u0435\u043B\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 90% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let t=i.beaker({liquidHeight:.95});t.position.set(1.45,.15,.35),i.add(t,["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041C\u043E\u0434\u0435\u043B\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 65% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let n=[];[e,t].forEach(d=>{let g=i.cylinder(.07,1.3,[0,1.25,0],i.materials.darkMetal,{segments:12});n.push(g),d.add(g)}),i.add(i.box([3.9,.18,.75],[0,2.18,.35],i.materials.metal),["\u041D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438","\u041E\u0431\u0430 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430, \u0432\u044B\u0434\u0435\u043B\u044F\u044F \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0445 \u043F\u043E\u0442\u0435\u0440\u044C."]);let s=i.bar("\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D",13994832,[-1.4,.05,-1.65],.05),r=i.bar("\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D",12939106,[1.4,.05,-1.65],.05);i.flow([[0,2.3,.35],[-.8,2.8,.35],[-1.45,2.2,.35],[-1.45,1.2,.35]],13994832),i.flow([[0,2.3,.35],[.8,2.8,.35],[1.45,2.2,.35],[1.45,1.2,.35]],13994832);let a=[],o=i.track(new wn(.1,12,8));for(let d=0;d<8;d+=1){let g=i.track(Di(16315884,.4)),v=new ze(o,g);i.add(v),a.push(v)}let l=i.track(Di(13994832,1)),c=i.materials.darkMetal,h=new De(8629697),m=new De(13994832),u=new De;return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:d,progress:g,param:v})=>{let f=xs(g),p=v/1e3;s.userData.set(.05+.9*f*p),r.userData.set(.05+.62*f*p),[e,t].forEach((M,E)=>{let b=M.userData.liquid;u.copy(h).lerp(E===0?m:new De(12939106),f*.5),b.material.color.copy(u)}),n.forEach(M=>{M.material=f>0&&f<1?l:c}),a.forEach((M,E)=>{let b=(E/a.length+d/3)%1;M.position.set(1.45+Math.sin(b*Math.PI*2+E)*.2,1.75+b*1.35,.35+Math.cos(E)*.12),M.scale.setScalar((.5+b*1.2)*(.8+E%3*.25)),M.material.opacity=(.12+.35*f)*(1-b)})})}function o_(i){i.base();let e=[];return[-1.55,1.55].forEach((t,n)=>{let s=new ct;s.add(i.rodBetween([-.65,0,0],[-.65,3.8,0],.07)),s.add(i.rodBetween([.65,0,0],[.65,3.8,0],.07)),s.add(i.rodBetween([-.7,3.8,0],[.7,3.8,0],.09));let r=i.cylinder(.27,.07,[0,3.55,0],i.materials.metal,{segments:24});r.rotation.x=Math.PI/2,r.position.set(0,3.55,0),s.add(r);let a=i.box([.95,.8,.95],[0,.48,0],n===0?i.materials.orange:i.materials.blue),o=i.cylinder(.025,2.5,[0,2.2,0],i.materials.darkMetal,{segments:8});s.add(a,o),s.position.set(t,.1,.3),i.add(s,[`\u041F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u0439 \u043C\u043E\u0442\u043E\u0440 ${n===0?"A":"B"}`,`\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u044F \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0433\u0440\u0443\u0437 \u043D\u0430 2 \u043C, \u043C\u043E\u0442\u043E\u0440 ${n===0?"A \u0442\u0440\u0430\u0442\u0438\u0442 4 \u0441":"B \u0442\u0440\u0430\u0442\u0438\u0442 8 \u0441"}. \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 P = W/t.`]),e.push({crate:a,cable:o,pulley:r})}),i.flow([[-2.7,.6,.2],[-2.4,2.8,.2],[-1.55,3.6,.2]],13994832),i.flow([[2.7,.6,.2],[2.4,2.8,.2],[1.55,3.6,.2]],5672903),i.label("A: 4 \u0441\u3000\u3000B: 8 \u0441",[0,4.55,0],{width:3.6,fontSize:48}),i.blob(.62,-1.55,.3),i.blob(.62,1.55,.3),Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({progress:t})=>{e.forEach(({crate:n,cable:s,pulley:r},a)=>{let o=Wt(a===0?t*2:t,0,1),l=2*xs(o);n.position.y=.48+l;let c=3.35-n.position.y;s.scale.y=Math.max(.1,c/2.5),s.position.y=n.position.y+c/2+.4,r.rotation.z=-o*Math.PI*8})})}function l_(i){i.base();let e=new ct,t=i.cylinder(.72,1.55,[0,.85,0],i.materials.darkMetal);e.add(t);let n=new ct;n.position.set(0,.9,.83);let s=new ze(i.track(new Tn(.66,.12,10,32)),i.materials.orange);n.add(s);for(let l=0;l<6;l+=1){let c=l*Math.PI/3,h=i.rodBetween([0,0,0],[Math.cos(c)*.57,Math.sin(c)*.57,0],.035,i.materials.orange);n.add(h)}e.add(n),e.position.set(-1.6,.1,.2),i.add(e,["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440","\u041C\u043E\u0442\u043E\u0440 \u0434\u0435\u043B\u0438\u0442 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043D\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u041A\u041F\u0414 80%."]);let r=i.box([1.15,1.05,1.15],[1.75,.65,.2],i.materials.blue);i.add(r,["\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0439 \u0433\u0440\u0443\u0437","\u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0433\u0440\u0443\u0437\u0430 \u2014 \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0433\u043B\u0430\u0432\u044B."]),i.add(i.rodBetween([1.75,0,.2],[1.75,3.4,.2],.06),["\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F","\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u0432\u0435\u0434\u0451\u0442 \u0433\u0440\u0443\u0437 \u0441\u0442\u0440\u043E\u0433\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u0432\u0432\u0435\u0440\u0445."]);let a=i.bar("\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 80%",5672903,[0,.05,-1.7],.8),o=i.bar("\u0422\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A 20%",12939106,[2.25,.05,-1.7],.2);return i.flow([[-3,.9,.2],[-2.5,1.9,.2],[-1.6,1.4,.2]],14070607),i.flow([[-1.2,1.1,.2],[-.2,2.4,.2],[1.75,2.5,.2],[1.75,1.2,.2]],5672903),i.flow([[-1.5,1.5,.2],[-1.3,2.5,.2],[-.7,3.2,.2]],13994832),i.blob(.75,1.75,.2),Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:l,progress:c})=>{let h=xs(c);n.rotation.z=-(l*Math.PI/3+h*Math.PI*6),r.position.y=.65+1.7*h,a.userData.set(c>0?.8:.05),o.userData.set(c>0?.2:.02)})}function c_(i){i.base(6.7,5.4);let e=new ct;e.add(i.cylinder(.65,1.8,[-1.6,1,0],i.materials.darkMetal));let t=new ct;t.add(i.cylinder(.48,1.1,[0,0,0],i.materials.metal));for(let c=0;c<8;c+=1){let h=i.box([.16,.8,.07],[0,.62,.58],i.materials.orange);h.rotation.z=c*Math.PI/4,h.position.set(Math.cos(c*Math.PI/4)*.55,Math.sin(c*Math.PI/4)*.55,.58),t.add(h)}t.position.set(.1,1.2,0),e.add(t);let n=i.box([1.1,1.1,1.1],[1.35,.65,0],i.materials.blue);e.add(n),e.position.set(-1.25,.08,.4),i.add(e,["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F \xB7 \u041A\u043E\u0442\u0451\u043B, \u0442\u0443\u0440\u0431\u0438\u043D\u0430 \u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440","\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u0442 \u0442\u043E\u043F\u043B\u0438\u0432\u0430 \u0438\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043E\u0434\u044B \u043A \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0443\u0440\u0431\u0438\u043D\u044B, \u0430 \u0437\u0430\u0442\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u2014 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."]);let s=i.pylon([1.65,.05,-.3],3.5);i.add(s,["\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440\u044B \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0432\u043E\u043B\u044C\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u044C","\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0442\u043E\u043A \u043F\u0440\u0438 \u0442\u043E\u0439 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u044F \u043F\u043E\u0442\u0435\u0440\u0438 I\xB2R \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438."]);let r=i.house([2.7,.05,1.6],.8);i.add(r,["\u0411\u044B\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438","\u0421\u0435\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u043C, \u0433\u0434\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044E\u0442 \u0435\u0451 \u0432 \u0441\u0432\u0435\u0442, \u0442\u0435\u043F\u043B\u043E, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B."]),i.flow([[-2.6,1.2,.4],[-1.8,2.5,.4],[-1.15,1.4,.4]],13994832),i.flow([[-1.1,1.3,.4],[-.4,2.2,.4],[.1,1.25,.4]],14070607),i.flow([[.2,1.3,.4],[.9,3.2,-.3],[1.65,3.2,-.3],[2.4,2.7,.5],[2.7,1.1,1.6]],5672903,{count:10});let a=[],o=i.track(new wn(.15,12,8)),l=i.track(Di(16315884,.3));for(let c=0;c<6;c+=1){let h=new ze(o,l);i.add(h),a.push(h)}return i.label("\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u2192 \u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u2192 \u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u2192 \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",[0,4.35,0],{width:5.2,fontSize:42,wrap:26}),Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:c,progress:h})=>{t.rotation.z=-(c*Math.PI/3+h*Math.PI*8),r.rotation.y=.03*Math.sin(c*Math.PI/6),n.rotation.y=0,a.forEach((m,u)=>{let d=(u/a.length+c/6)%1;m.position.set(-3.85+Math.sin(u+d*3)*.18,1.8+d*1.8,.6),m.scale.setScalar(.6+d*1.5),m.material.opacity=(.12+h*.25)*(1-d)})})}function h_(i){i.base();let e=new ct;[-.75,.75].forEach(h=>e.add(i.rodBetween([h,0,0],[h*.6,2.3,0],.055))),e.add(i.rodBetween([-.9,2.15,0],[.9,2.15,0],.07)),e.position.z=.4,i.add(e,["\u0428\u0442\u0430\u0442\u0438\u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0430","\u0428\u0442\u0430\u0442\u0438\u0432 \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0430\u043A\u0430\u043D \u043D\u0430\u0434 \u043F\u043B\u0430\u043C\u0435\u043D\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u044B\u0434\u0435\u043B\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0434\u0435."]);let t=i.beaker({radius:.72,height:1.45,liquidHeight:.9});t.position.set(0,2.05,.4),i.add(t,["\u0412\u043E\u0434\u0430 \u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0435","\u042D\u043D\u0435\u0440\u0433\u0438\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E 200 \u0433 \u0432\u043E\u0434\u044B, \u043C\u043E\u0436\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 Q = mc\u0394T. \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u043E\u0434\u0430 \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442 20% \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0438\u0449\u0438."]);let n=i.sphere(.4,[0,.55,.4],i.materials.wood);n.scale.set(1.35,.55,.85),i.add(n,["\u041E\u0431\u0440\u0430\u0437\u0435\u0446 \u043F\u0438\u0449\u0438","\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u0438. \u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u043D\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0430 \u0440\u0430\u0432\u043D\u043E\u0439 17 \u043A\u0414\u0436/\u0433."]);let s=[];for(let h=0;h<7;h+=1){let m=i.track(Di(h%2?14070607:13994832,.82)),u=new ze(new oi(.12+h%2*.05,.75,12),m);u.position.set((h-3)*.16,1.15,.4),i.add(u),s.push(u)}let r=i.cylinder(.055,1.8,[.35,3.2,.4],i.materials.red,{segments:12});i.add(r,["\u0422\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440","\u0421\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432\u043E\u0434\u044B. \u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let a=i.bar("\u042D\u043D\u0435\u0440\u0433\u0438\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439",13994832,[-2.05,.05,-1.5],.03),o=i.bar("\u0422\u0435\u043F\u043B\u043E, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E",12939106,[2.05,.05,-1.5],.03);i.flow([[0,.8,.4],[-.6,1.7,.4],[-.25,2.4,.4],[0,2.8,.4]],13994832),i.flow([[.2,1.2,.4],[1.2,1.9,.2],[2.05,1.3,-1.5]],12939106);let l=new De(8629697),c=new De;return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:h,progress:m,param:u})=>{let d=xs(m);s.forEach((v,f)=>{v.scale.y=(.2+d*.8)*(.8+.2*Math.sin(h*Math.PI*2+f)),v.visible=m>0}),n.scale.y=.55*(1-d*.45),a.userData.set(.03+d*u/5),o.userData.set(.03+d*u/5*.8),r.scale.y=1+d*.08;let g=t.userData.liquid;c.copy(l).lerp(new De(13994832),d*.35),g.material.color.copy(c)})}function u_(i){i.base();let e=[[-3,3.1,.2],[-2.2,1.35,.2],[-1,.55,.2],[0,.35,.2],[1,.55,.2],[2.2,1.35,.2],[3,3.1,.2]];[-.32,.32].forEach((u,d)=>{let g=e.map(([f,p,M])=>[f,p,M+u]),v=i.tube(g,.075,i.materials.darkMetal);i.add(v,d===0?["U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0436\u0451\u043B\u043E\u0431","\u0416\u0451\u043B\u043E\u0431 \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0448\u0430\u0440\u0430. \u0422\u0440\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439."]:void 0)});let t=new En(e.map(u=>new C(...u))),n=i.sphere(.38,[-3,3.48,.2],i.materials.blue);i.add(n,["\u0428\u0430\u0440 \u043E\u043F\u044B\u0442\u0430 \u043F\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0421\u0443\u043C\u043C\u0430 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0448\u0430\u0440\u0430, \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C 100 \u0414\u0436."]);let s=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-2.25,.05,-1.75],1),r=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[-.75,.05,-1.75],.03),a=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[.75,.05,-1.75],.02),o=i.bar("\u041F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",8231034,[2.25,.05,-1.75],1);i.flow([[0,.8,.2],[.3,1.8,-.3],[.75,1.2,-1.75]],12939106),i.label("\u041F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 100 \u0414\u0436",[0,4.25,0],{width:3.8,fontSize:48});let l=i.blob(.5,-3,.2),c=u=>{let d=0,g=1/0;for(let v=0;v<=60;v+=1){let f=v/60,M=t.getPointAt(f).distanceToSquared(u);M<g&&(g=M,d=f)}return d},h=[];for(let u=0;u<=32;u+=1){let d=t.getPointAt(u/32);h.push([d.x,d.y+.38,d.z])}let m=i.makeInteraction({object:n,planeZ:.2,guidePoints:h,fromObject:()=>c(n.position),valueFromPoint:u=>c(u),restValue:.5,releaseDuration:4.8});return Dn({group:i.group,infos:i.infos,clickables:i.clickables,interaction:m,update:()=>{},dispose:()=>i.dispose()},({t:u,progress:d,param:g,manual:v})=>{let f=!!v?.active,p=d*Math.PI*2,M=d<=0?0:(1-Math.cos(p))/2;f&&(M=v.releasing?.5+(v.from-.5)*Math.cos(v.releaseProgress*Math.PI*4)*Math.pow(1-v.releaseProgress,1.15):v.value);let E=t.getPointAt(Wt(M,0,1));n.position.copy(E),n.position.y+=.38,n.rotation.z=-M*Math.PI*10;let b=f?.02+v.releaseProgress*g*.45:d*g,A=f?Wt(E.y/3.1,.03,1)*(1-b):d<=0?1:Wt(E.y/3.1,.05,1)*(1-b),T=v?.dragging?.02:Math.max(.02,1-b-A);s.userData.set(A),r.userData.set(T),a.userData.set(Math.max(.02,b)),o.userData.set(1),!f&&d===0&&(n.rotation.z=u*Math.PI/6),l.position.x=n.position.x,l.position.z=n.position.z})}var Bu=[n_,i_,s_,r_,a_,o_,l_,c_,h_,u_],dc=1.18,fc=.66;function d_(i){let e=new Xt,t=new nt,n=new C,s=new C;i.clickables.forEach(r=>{e.setFromObject(r.root),t.copy(r.root.matrixWorld).invert(),e.applyMatrix4(t),e.getSize(n),e.getCenter(s);let a=Math.max(n.x*dc,fc),o=Math.max(n.y*dc,fc),l=Math.max(n.z*dc,fc),c=new ze(Zt.box,Lu());c.scale.set(a,o,l),c.position.copy(s),r.root.add(c),r.hit=c,r.localBox=new Xt(new C(s.x-a/2,s.y-o/2,s.z-l/2),new C(s.x+a/2,s.y+o/2,s.z+l/2))})}function mc(i){let e=new pc,n=(Bu[i-1]??Bu[0])(e);return d_(n),n}var f_=["\u0410","\u0411","\u0412"];function K(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t&&t.append(n),n}function Un(i,e="0 0 24 24"){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("viewBox",e),t.setAttribute("aria-hidden","true"),t.innerHTML=`<path d="${i}"></path>`,t}var yn={book:"M4 5.5c5-1.4 10-.6 16 2.5v11c-6-3.1-11-3.9-16-2.5zM8 9.5l7 2M8 13l5 1.5",prev:"m15 5-7 7 7 7",next:"m9 5 7 7-7 7",reset:"M4 4v6h6M5.5 15a7 7 0 1 0 .5-7.8L4 10",home:"M4 11.5 12 4l8 7.5M6.5 10v9h11v-9",pause:"M9 5v14M15 5v14",play:"M8 5.5v13l10-6.5z",close:"m6 6 12 12M18 6 6 18",arrow:"M5 12h13m-5-6 6 6-6 6"},Do=class{constructor(e,t){this.chapter=null;this.prediction=null;this.toastTimer=null;this.explanationShown=!1;this.lastDescriptions=[];this.handlers=t,this.els={},e.innerHTML="";let n=K("div","en-deck",e),s=K("header","en-topbar",n),r=K("div","en-brand",s);K("span","en-brand-mark",r);let a=K("span","en-brand-text",r);a.textContent="\u042D\u043D\u0435\u0440\u0433\u0438\u044F";let o=K("span","en-brand-sub",r);o.textContent="\u041C\u0435\u0440\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0438";let l=K("nav","en-decknav",s);l.setAttribute("aria-label","\u0413\u043B\u0430\u0432\u044B"),this.els.nav=l;let c=K("div","en-topbar-right",s);this.els.progress=K("span","en-progress",c),this.els.progress.title="\u0413\u043B\u0430\u0432 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D\u043E",this.els.prev=K("button","en-ctlbtn",c),this.els.prev.type="button",this.els.prev.setAttribute("aria-label","\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"),this.els.prev.title="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",this.els.prev.append(Un(yn.prev)),this.els.prev.addEventListener("click",()=>this.chapter&&this.handlers.onChapter(this.chapter.id-1)),this.els.next=K("button","en-ctlbtn",c),this.els.next.type="button",this.els.next.setAttribute("aria-label","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"),this.els.next.title="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",this.els.next.append(Un(yn.next)),this.els.next.addEventListener("click",()=>this.chapter&&this.handlers.onChapter(this.chapter.id+1));let h=K("div","en-work",n),m=K("div","en-section",h),u=K("div","en-section-head",m),d=K("div","en-rulerow",u);this.els.kicker=K("span","en-kicker",d),K("span","en-rule",d),this.els.kickerFormula=K("span","en-kicker en-kicker-formula",d),this.els.title=K("h1","en-section-title",u),this.els.subtitle=K("p","en-section-subtitle",u);let g=K("div","en-layout",m),v=K("aside","en-panel en-library",g),f=K("div","en-paneltitle",v);K("span","",f).textContent="\u0413\u043B\u0430\u0432\u044B",K("span","en-titlerule",f),this.els.chapterList=K("div","en-chapter-list",v),this.els.textLink=K("button","en-textlink",v),this.els.textLink.type="button",K("span","",this.els.textLink).textContent="\u0422\u0435\u043A\u0441\u0442 \u0433\u043B\u0430\u0432\u044B \u0438 \u0441\u043F\u0440\u0430\u0432\u043A\u0430",this.els.textLink.append(Un(yn.arrow)),this.els.textLink.addEventListener("click",()=>this.openDialog("lesson"));let p=K("div","en-stage-col",g),M=K("div","en-stage-frame",p);this.els.canvasHost=K("div","en-stage",M),this.els.canvasHost.id="e-canvas-host";let E=K("div","en-stage-controls",M);this.els.viewBtn=K("button","en-ctlbtn",E),this.els.viewBtn.type="button",this.els.viewBtn.setAttribute("aria-label","\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043A\u0430\u043C\u0435\u0440\u0443"),this.els.viewBtn.title="\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043A\u0430\u043C\u0435\u0440\u0443",this.els.viewBtn.append(Un(yn.home)),this.els.viewBtn.addEventListener("click",()=>this.handlers.onResetView()),this.els.motionBtn=K("button","en-ctlbtn",E),this.els.motionBtn.type="button",this.els.motionBtn.setAttribute("aria-label","\u041F\u0430\u0443\u0437\u0430 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438"),this.els.motionBtn.setAttribute("aria-pressed","false"),this.els.motionBtn.title="\u041F\u0430\u0443\u0437\u0430 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438",this.els.motionBtn.append(Un(yn.pause)),this.els.motionBtn.addEventListener("click",()=>{let z=this.els.motionBtn.getAttribute("aria-pressed")!=="true";this.els.motionBtn.setAttribute("aria-pressed",String(z)),this.els.motionBtn.replaceChildren(Un(z?yn.play:yn.pause)),this.handlers.onToggleMotion(z)}),this.els.textBtn=K("button","en-ctlbtn en-ctlbtn-accent",E),this.els.textBtn.type="button",this.els.textBtn.setAttribute("aria-label","\u0422\u0435\u043A\u0441\u0442 \u0433\u043B\u0430\u0432\u044B"),this.els.textBtn.title="\u0422\u0435\u043A\u0441\u0442 \u0433\u043B\u0430\u0432\u044B",this.els.textBtn.append(Un(yn.book)),this.els.textBtn.addEventListener("click",()=>this.openDialog("lesson")),this.els.plate=K("div","en-partplate",M),this.els.plate.hidden=!0,this.els.plateName=K("span","en-partplate-name",this.els.plate),this.els.loader=K("div","en-loader",M),this.els.loader.innerHTML='<div class="en-loader-card"><span class="en-loader-label">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0446\u0435\u043D\u044B<small>\u0442\u0440\u0438 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \xB7 \u0432\u0435\u0431\u0433\u043B</small></span><span class="en-loader-bar"><span class="en-loader-fill"></span></span></div>',this.els.fatal=K("div","en-fatal",M),this.els.fatal.hidden=!0,this.els.fatal.innerHTML="<strong>3D-\u0441\u0446\u0435\u043D\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F</strong><p>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u0422\u0435\u043A\u0441\u0442 \u0433\u043B\u0430\u0432\u044B \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 \xAB\u0422\u0435\u043A\u0441\u0442 \u0433\u043B\u0430\u0432\u044B\xBB.</p>";let b=K("aside","en-panel en-info",g);K("div","en-paneltitle",b).append(Object.assign(document.createElement("span"),{textContent:"\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442"}),K("span","en-titlerule")),this.els.intro=K("p","en-intro",b);let A=K("div","en-quote",b);K("span","en-quote-label",A).textContent="\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435",this.els.formula=K("strong","en-quote-formula",A),K("hr","en-divider",b),K("div","en-factstitle",b).textContent="01 \xB7 \u041F\u0440\u043E\u0433\u043D\u043E\u0437",this.els.question=K("p","en-question",b),this.els.options=K("div","en-options",b),this.els.options.setAttribute("role","radiogroup"),this.els.options.setAttribute("aria-label","\u041F\u0440\u043E\u0433\u043D\u043E\u0437"),K("hr","en-divider",b),K("div","en-factstitle",b).textContent="\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438";let T=K("div","en-param-head",b);this.els.paramLabel=K("label","en-param-label",T),this.els.paramValue=K("output","en-param-value",T),this.els.slider=K("input","en-slider",b),this.els.slider.type="range",this.els.slider.id="en-param-slider",this.els.paramLabel.htmlFor="en-param-slider",this.els.slider.addEventListener("input",()=>this.handlers.onParam());let _=K("div","en-runrow",b);this.els.run=K("button","en-run",_),this.els.run.type="button",this.els.run.addEventListener("click",()=>this.handlers.onRun()),this.els.reset=K("button","en-ctlbtn",_),this.els.reset.type="button",this.els.reset.setAttribute("aria-label","\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442"),this.els.reset.title="\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442",this.els.reset.append(Un(yn.reset)),this.els.reset.addEventListener("click",()=>this.handlers.onReset()),this.els.results=K("div","en-results",b),this.els.results.hidden=!0,K("div","en-factstitle",this.els.results).textContent="02 \xB7 \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",this.els.resultsTable=K("table","en-facts",this.els.results),this.els.feedback=K("p","en-feedback",this.els.results),this.els.explainLink=K("button","en-explain-link",this.els.results),this.els.explainLink.type="button",K("span","",this.els.explainLink).textContent="\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435 \u0433\u043B\u0430\u0432\u044B",this.els.explainLink.append(Un(yn.arrow)),this.els.explainLink.disabled=!0,this.els.explainLink.addEventListener("click",()=>this.openExplanation()),K("hr","en-divider",b),K("div","en-factstitle",b).textContent="\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438",this.els.equipList=K("div","en-equip-list",b),this.els.equipDetail=K("div","en-equip-detail",b),this.els.equipDetail.hidden=!0,this.els.dialog=K("dialog","en-lightbox",n);let S=K("div","en-dialog-card",this.els.dialog),N=K("div","en-dialog-head",S),I=K("div","en-tabs",N);this.els.tabLesson=K("button","en-tab is-active",I),this.els.tabLesson.type="button",this.els.tabLesson.textContent="\u0413\u043B\u0430\u0432\u0430",this.els.tabHelp=K("button","en-tab",I),this.els.tabHelp.type="button",this.els.tabHelp.textContent="\u0421\u043F\u0440\u0430\u0432\u043A\u0430";let U=K("button","en-ctlbtn",N);U.type="button",U.setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E"),U.append(Un(yn.close)),U.addEventListener("click",()=>this.els.dialog.close());let F=K("div","en-dialog-body",S);this.els.paneLesson=K("div","en-pane is-visible",F),this.els.paneLesson.dataset.pane="lesson";let W=K("div","en-rulerow",this.els.paneLesson);this.els.dKicker=K("span","en-kicker",W),K("span","en-rule",W),this.els.dTitle=K("h2","en-dialog-title",this.els.paneLesson),this.els.dSubtitle=K("p","en-dialog-subtitle",this.els.paneLesson),this.els.dIntro=K("p","en-dialog-intro",this.els.paneLesson);let P=K("div","en-quote",this.els.paneLesson);K("span","en-quote-label",P).textContent="\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435",this.els.dFormula=K("strong","en-quote-formula",P);let G=K("div","en-explain",this.els.paneLesson);K("div","en-factstitle",G).textContent="\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0433\u043B\u0430\u0432\u044B",this.els.explainBody=K("div","en-explain-body",G),this.els.explainBody.hidden=!0,this.els.explainBtn=K("button","en-explain-btn",G),this.els.explainBtn.type="button",this.els.explainBtn.textContent="\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430",this.els.explainBtn.disabled=!0,this.els.explainBtn.addEventListener("click",()=>this.revealExplanation()),this.els.paneHelp=K("div","en-pane",F),this.els.paneHelp.dataset.pane="help",this.els.helpBody=K("div","en-help",this.els.paneHelp),this.els.tabLesson.addEventListener("click",()=>this.setTab("lesson")),this.els.tabHelp.addEventListener("click",()=>this.setTab("help")),this.els.dialog.addEventListener("click",z=>{z.target===this.els.dialog&&this.els.dialog.close()}),this.els.dialog.addEventListener("close",()=>this.handlers.onDialogToggle(!1)),this.els.toast=K("div","en-toast",n),this.els.toast.setAttribute("role","status"),this.els.toast.hidden=!0;for(let z=1;z<=10;z+=1){let H=K("button","en-navitem",l);H.type="button",H.dataset.chapter=String(z),H.innerHTML=`<span class="en-navnum">${String(z).padStart(2,"0")}</span>`,H.addEventListener("click",()=>this.handlers.onChapter(z))}document.addEventListener("keydown",z=>{z.target instanceof HTMLInputElement||this.els.dialog.open||(z.key==="PageDown"?(z.preventDefault(),this.chapter&&this.chapter.id<10&&this.handlers.onChapter(this.chapter.id+1)):z.key==="PageUp"&&(z.preventDefault(),this.chapter&&this.chapter.id>1&&this.handlers.onChapter(this.chapter.id-1)))})}get canvasHost(){return this.els.canvasHost}setChapter(e,t=[]){this.chapter=e;let n=String(e.id).padStart(2,"0");this.els.kicker.textContent=`\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C ${n}`,this.els.kickerFormula.textContent=e.formula,this.els.title.textContent=e.title,this.els.subtitle.textContent=e.subtitle,this.els.intro.textContent=e.intro,this.els.formula.textContent=e.formula,this.els.question.textContent=e.question,this.els.options.replaceChildren(),e.options.forEach((r,a)=>{let o=K("button","en-option",this.els.options);o.type="button",o.setAttribute("role","radio"),o.setAttribute("aria-checked","false"),o.innerHTML=`<span class="en-option-letter">${f_[a]}</span><span class="en-option-text">${r}</span><span class="en-option-mark" aria-hidden="true"></span>`,o.addEventListener("click",()=>this.handlers.onPrediction(a))}),this.setParam(e.param),this.setPrediction(null),this.hideResults(),this.lockExplanation(),this.els.explainBody.replaceChildren(),K("p","",this.els.explainBody).textContent=e.explanation,this.els.dKicker.textContent=`\u0413\u043B\u0430\u0432\u0430 ${n}`,this.els.dTitle.textContent=e.title,this.els.dSubtitle.textContent=e.subtitle,this.els.dIntro.textContent=e.intro,this.els.dFormula.textContent=e.formula,this.renderHelp(e,t),this.els.nav.querySelectorAll(".en-navitem").forEach(r=>{let a=r,o=Number(a.dataset.chapter);a.classList.toggle("is-active",o===e.id),a.title=Li[o-1]?.title??""});let s=this.els.nav.querySelector(".en-navitem.is-active");if(s){let r=this.els.nav;r.scrollTo({left:Math.max(0,s.offsetLeft-r.clientWidth/2+s.clientWidth/2),behavior:"smooth"})}this.els.prev.disabled=e.id===1,this.els.next.disabled=e.id===10,this.els.equipList.replaceChildren(),this.lastDescriptions=t.map(r=>r.description),t.forEach((r,a)=>{let o=K("button","en-equip-row");o.type="button",o.innerHTML=`<span class="en-equip-num">${String(a+1).padStart(2,"0")}</span><span class="en-equip-name">${r.title}</span>`,o.addEventListener("click",()=>this.selectEntry(a)),o.addEventListener("mouseenter",()=>this.handlers.onHoverEntry(a)),o.addEventListener("mouseleave",()=>this.handlers.onHoverEntry(null)),o.addEventListener("focus",()=>this.handlers.onHoverEntry(a)),o.addEventListener("blur",()=>this.handlers.onHoverEntry(null)),this.els.equipList.append(o)}),this.selectEntry(-1)}appendChapterEntry(e,t,n,s){let r=K("button",`en-chapter-entry${t?" is-current":""}`);r.type="button",r.innerHTML=`<span class="en-chapter-num">${String(e.id).padStart(2,"0")}</span><span class="en-chapter-copy"><strong>${e.title}</strong><small>${e.subtitle}</small></span><span class="en-chapter-stamp${n?" earned":""}" aria-hidden="true">${n?"\u2713":""}</span>`,r.addEventListener("click",s),this.els.chapterList.append(r)}markChapterListCurrent(e,t){[...this.els.chapterList.children].forEach((n,s)=>{let r=n;r.classList.toggle("is-current",s+1===e),r.querySelector(".en-chapter-stamp")?.classList.toggle("earned",t.has(s+1))})}setTab(e){this.els.tabLesson.classList.toggle("is-active",e==="lesson"),this.els.tabHelp.classList.toggle("is-active",e==="help"),this.els.paneLesson.classList.toggle("is-visible",e==="lesson"),this.els.paneHelp.classList.toggle("is-visible",e==="help")}openDialog(e="lesson"){this.setTab(e),this.showDialog()}openExplanation(){this.setTab("lesson"),this.revealExplanation(),this.showDialog(),this.els.explainBody.scrollIntoView({block:"nearest",behavior:"smooth"})}showDialog(){this.els.dialog.open||(this.els.dialog.showModal(),this.handlers.onDialogToggle(!0))}isDialogOpen(){return this.els.dialog.open}hideLoader(){this.els.loader.classList.add("is-done"),window.setTimeout(()=>{this.els.loader.hidden=!0},300)}showFatal(){this.els.fatal.hidden=!1,this.hideLoader()}toast(e){this.toastTimer&&window.clearTimeout(this.toastTimer),this.els.toast.textContent=e,this.els.toast.hidden=!1,this.toastTimer=window.setTimeout(()=>{this.els.toast.hidden=!0},3e3)}setHover(e){if(e===null||e<0){this.els.plate.hidden=!0;return}let t=this.els.equipList.children;e<t.length&&(this.els.plateName.textContent=t[e].querySelector(".en-equip-name")?.textContent??"",this.els.plate.hidden=!1)}selectEntry(e){let t=[...this.els.equipList.children];if(t.forEach((n,s)=>n.classList.toggle("is-active",s===e)),e>=0&&e<t.length){let n=t[e].querySelector(".en-equip-name")?.textContent??"";this.els.equipDetail.innerHTML="";let s=K("strong","",this.els.equipDetail);s.textContent=n;let r=K("p","",this.els.equipDetail);r.textContent=this.lastDescriptions[e]??"",this.els.equipDetail.hidden=!1,t[e].scrollIntoView({block:"nearest"})}else this.els.equipDetail.hidden=!0}setParam(e){this.els.paramLabel.textContent=e.label,this.els.slider.min=String(e.min),this.els.slider.max=String(e.max),this.els.slider.step=String(e.step),this.els.slider.value=String(e.value),this.updateParamValue()}updateParamValue(){if(!this.chapter)return;let e=this.chapter.param;this.els.paramValue.textContent=`${Number(this.els.slider.value).toFixed(e.decimals)}${e.unit?` ${e.unit}`:""}`}get paramValue(){return Number(this.els.slider.value)}setPrediction(e){this.prediction=e,this.els.options.querySelectorAll(".en-option").forEach((t,n)=>{t.classList.toggle("is-selected",n===e),t.setAttribute("aria-checked",String(n===e)),t.classList.remove("is-correct")})}markCorrect(){this.chapter&&this.els.options.querySelectorAll(".en-option").forEach((e,t)=>{e.classList.toggle("is-correct",t===this.chapter.answer)})}setRunState(e){let{running:t,ran:n}=e;this.els.slider.disabled=t,this.els.options.querySelectorAll("button").forEach(s=>s.disabled=t),t?(this.els.run.disabled=!0,this.els.run.textContent=`\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \xB7 ${Math.round((e.progress??0)*100)}%`,this.els.run.classList.add("is-running")):(this.els.run.disabled=this.prediction===null,this.els.run.textContent=n?"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430":this.prediction===null?"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437":"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442",this.els.run.classList.remove("is-running"))}showResults(e){this.els.resultsTable.replaceChildren();let t=K("tbody","",this.els.resultsTable);e.forEach(([n,s])=>{let r=K("tr","",t);K("th","",r).textContent=n,K("td","",r).textContent=s}),this.els.results.hidden=!1}hideResults(){this.els.results.hidden=!0}setFeedback(e,t,n){this.els.feedback.textContent=e?"\u2713 \u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u0441\u043E\u0432\u043F\u0430\u043B \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430":`\u2717 \u041F\u0440\u043E\u0433\u043D\u043E\u0437 \xAB${t}\xBB \xB7 \u0442\u043E\u0447\u043D\u044B\u0439 \u0432\u044B\u0432\u043E\u0434: \xAB${n}\xBB`,this.els.feedback.classList.toggle("is-ok",e),this.els.feedback.classList.toggle("is-no",!e)}unlockAnswer(){this.els.explainLink.disabled=!1,this.els.explainBtn.disabled=!1,this.els.explainBtn.textContent="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435"}unlockAnswerReset(){this.lockExplanation()}setProgressText(e){this.els.progress.textContent=`${e}/10`}lockExplanation(){this.explanationShown=!1,this.els.explainBody.hidden=!0,this.els.explainBtn.hidden=!1,this.els.explainBtn.disabled=!0,this.els.explainBtn.textContent="\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430",this.els.explainLink.disabled=!0}revealExplanation(){!this.els.explainBtn.disabled&&this.els.explainBody.hidden&&(this.els.explainBody.hidden=!1,this.els.explainBtn.hidden=!0,this.explanationShown||(this.explanationShown=!0,this.handlers.onAnswerOpened()))}renderHelp(e,t){let n=this.els.helpBody;n.replaceChildren();let s=K("div","en-factstitle",n);s.textContent="\u0426\u0435\u043B\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",K("p","en-help-p",n).textContent=e.teacher.focus;let r=K("div","en-factstitle",n);r.textContent="\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F";let a=K("ul","en-help-ul",n);e.teacher.steps.forEach(h=>{K("li","",a).textContent=h});let o=K("div","en-factstitle",n);if(o.textContent="\u0413\u0440\u0430\u043D\u0438\u0446\u044B \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0435 \u0437\u0430\u0431\u043B\u0443\u0436\u0434\u0435\u043D\u0438\u044F",K("p","en-help-p",n).textContent=e.teacher.misconception,t.length){let h=K("div","en-factstitle",n);h.textContent="\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438",t.forEach(m=>{let u=K("div","en-equip",n);K("strong","",u).textContent=m.title,K("p","",u).textContent=m.description})}let l=K("div","en-calc-note",n),c=K("div","en-factstitle",l);c.textContent="\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u0430",K("p","en-help-p",l).textContent=Iu}};var p_=6,zu="joule-energy-progress-v3",Hu=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Gu(i){let e=new Do(i,{onChapter:re=>Ie(re),onParam:()=>Oe(),onRun:()=>be(),onReset:()=>Re(!0),onPrediction:re=>pe(re),onAnswerOpened:()=>pt(),onToggleMotion:re=>{m=re},onResetView:()=>{d=!1,G()},onHoverEntry:re=>{_=re===null?-1:re},onDialogToggle:re=>{u=re,e.canvasHost.classList.toggle("blurred",re),re||v.getDelta()}}),t=!1,n=null,s=null,r=null,a=null,o=null,l=null,c=Li[0],h=0,m=!1,u=!1,d=!1,g=-1,v=new ir,f={running:!1,ran:!1,startedAt:0,progress:0},p={active:!1,dragging:!1,releasing:!1,value:0,from:0,releaseProgress:0},M=0,E=null,b=new Set,A=null,T=-1,_=-1,S=new nr,N=new me,I=new zt(new C(0,0,1),0),U=new C,F=new Xt;try{let re=localStorage.getItem(zu);re&&JSON.parse(re).forEach(ve=>Number.isInteger(ve)&&Number(ve)>=1&&Number(ve)<=10&&b.add(Number(ve)))}catch{}let W=()=>{try{localStorage.setItem(zu,JSON.stringify([...b]))}catch{}},P=()=>{n=new Ao({antialias:!0,powerPreference:"high-performance"}),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.outputColorSpace=At,n.toneMapping=lr,n.toneMappingExposure=1.04,s=new zs,s.background=new De(Ln.bg),s.fog=new ks(Ln.bg,34,105),r=new Ht(44,1,.1,220),a=new Io(r,n.domElement),a.enableDamping=!0,a.dampingFactor=.09,a.enablePan=!1,a.rotateSpeed=.55,a.minDistance=7,a.maxDistance=22,a.minPolarAngle=.3,a.maxPolarAngle=1.26,a.addEventListener("start",()=>{d=!0}),G(),s.add(new Qs(15922943,10134696,1.55));let re=new cs(16774114,2);re.position.set(-11,21,13),s.add(re);let ve=new cs(14477567,.65);ve.position.set(14,9,-12),s.add(ve),l=new sr(new Xt,new De(9509446)),l.visible=!1,l.renderOrder=30;let qe=l.material;qe.transparent=!0,qe.opacity=.95,qe.depthTest=!1,qe.toneMapped=!1,s.add(l),e.canvasHost.appendChild(n.domElement),n.domElement.style.width="100%",n.domElement.style.height="100%",n.domElement.style.display="block",Ne(),z()},G=()=>{if(!r||!a)return;let re=window.innerWidth<=760&&window.innerHeight>500,ve=window.innerHeight<=500;r.fov=re||ve?50:46,re?(r.position.set(.4,12.6,15.6),a.target.set(0,1.15,0)):ve?(r.position.set(.7,10.2,11.8),a.target.set(0,1.15,0)):(r.position.set(.3,7.7,10.1),a.target.set(0,1.3,.05)),r.updateProjectionMatrix(),a.update()},z=()=>{if(!n||!r)return;let re=e.canvasHost,ve=Math.max(1,re.clientWidth),qe=Math.max(1,re.clientHeight);r.aspect=ve/qe,d?r.updateProjectionMatrix():G(),n.setSize(ve,qe,!1)},H=re=>{let ve=n.domElement.getBoundingClientRect();N.x=(re.clientX-ve.left)/ve.width*2-1,N.y=-((re.clientY-ve.top)/ve.height)*2+1,S.setFromCamera(N,r)},te=()=>o?o.clickables.map(re=>re.hit).filter(re=>!!re):[],X=re=>{if(!o||!o.clickables.length)return-1;H(re);let ve=S.intersectObjects(te(),!1);return ve.length?ve[0].object.userData.entryIndex??-1:-1},Q=re=>!o?.interaction||re<0?!1:o.clickables[re]?.root===o.interaction.object,ee=()=>{p.active=!1,p.dragging=!1,p.releasing=!1,p.value=0,p.from=0,p.releaseProgress=0,a&&(a.enabled=!0),n&&(n.domElement.style.cursor="")},Se=()=>{p.dragging=!1,p.from=p.value,p.releaseProgress=0,a&&(a.enabled=!0),n&&(n.domElement.style.cursor=""),p.releasing=!0,M=performance.now()},Ne=()=>{let re=n.domElement;re.addEventListener("pointerdown",ve=>{if(ve.button!==0)return;A={x:ve.clientX,y:ve.clientY};let qe=X(ve);if(qe>=0&&Q(qe)&&o?.interaction){ve.preventDefault(),ve.stopImmediatePropagation(),f.running&&(f.running=!1,f.progress=0,e.setRunState({running:!1,ran:f.ran})),p.active=!0,p.dragging=!0,p.releasing=!1,p.value=o.interaction.fromObject(),p.from=p.value,p.releaseProgress=0,a.enabled=!1,re.style.cursor="grabbing";try{re.setPointerCapture(ve.pointerId)}catch{}}},{capture:!0}),re.addEventListener("pointermove",ve=>{if(p.dragging&&o?.interaction){ve.preventDefault(),ve.stopImmediatePropagation(),H(ve),I.constant=-o.interaction.planeZ,S.ray.intersectPlane(I,U)&&(p.value=o.interaction.valueFromPoint(U));return}if(ve.buttons===0){let qe=X(ve);qe!==T&&(T=qe,e.setHover(qe>=0?qe:null)),re.style.cursor=qe<0?"":Q(qe)?"grab":"pointer"}},{capture:!0}),re.addEventListener("pointerup",ve=>{if(p.dragging&&o?.interaction){ve.preventDefault(),ve.stopImmediatePropagation(),Se();return}let qe=A;if(A=null,!qe||Math.hypot(ve.clientX-qe.x,ve.clientY-qe.y)>8)return;let Je=X(ve);Je>=0&&Z(Je)},{capture:!0}),re.addEventListener("pointercancel",ve=>{A=null,p.dragging&&(ve.preventDefault(),Se())},{capture:!0}),re.addEventListener("pointerleave",()=>{T!==-1&&(T=-1,e.setHover(null))},{capture:!0})},Z=re=>{e.selectEntry(re)},pe=re=>{E=re,e.setPrediction(re),(f.ran||f.running)&&Re(!1),e.setRunState({running:!1,ran:!1})},be=()=>{E===null||f.running||(f.ran&&Re(!1),ee(),f.running=!0,f.startedAt=performance.now(),f.progress=0,g=-1,e.setRunState({running:!0,ran:!1,progress:0}))},Re=re=>{f.running=!1,f.ran=!1,f.progress=0,e.hideResults(),e.unlockAnswerReset(),e.setRunState({running:!1,ran:!1}),re&&e.toast("\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D \u2014 \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B")},ge=()=>{f.running=!1,f.ran=!0,f.progress=1,e.markCorrect(),e.showResults(c.result(e.paramValue)),e.unlockAnswer(),E!==null&&e.setFeedback(E===c.answer,c.options[E],c.options[c.answer]),e.setRunState({running:!1,ran:!0})},Oe=()=>{e.updateParamValue(),(f.ran||f.running)&&Re(!1)},pt=()=>{b.has(c.id)||(b.add(c.id),W(),e.setProgressText(b.size),e.markChapterListCurrent(c.id,b),e.toast(`\u0413\u043B\u0430\u0432\u0430 ${String(c.id).padStart(2,"0")} \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D\u0430 \xB7 ${b.size}/10`))},Ie=re=>{let ve=Math.min(10,Math.max(1,Math.round(re)));if(!(!s||ve===c.id)){c=Li[ve-1],o&&(s.remove(o.group),o.dispose()),ee(),o=mc(c.id),o.clickables.forEach((qe,Je)=>{qe.hit&&(qe.hit.userData.entryIndex=Je)}),s.add(o.group),E=null,f.running=!1,f.ran=!1,f.progress=0,T=-1,_=-1,e.setHover(null),e.setChapter(c,o.clickables),e.setProgressText(b.size),e.markChapterListCurrent(c.id,b),e.setRunState({running:!1,ran:!1}),document.title=`${c.title} \xB7 \u042D\u043D\u0435\u0440\u0433\u0438\u044F`;try{history.replaceState(null,"",`#chapter-${c.id}`)}catch{}}},je=()=>{Li.forEach(re=>{e.appendChapterEntry(re,re.id===c.id,b.has(re.id),()=>Ie(re.id))})},st=()=>{if(t||!n||!s||!r||!o||u)return;let re=Math.min(v.getDelta(),.1);if(m||(h+=re),f.running){f.progress=Math.min(1,(performance.now()-f.startedAt)/(Hu?1200:p_*1e3));let Je=Math.floor(f.progress*100);Je!==g&&(g=Je,e.setRunState({running:!0,ran:!1,progress:f.progress}))}if(p.releasing&&o.interaction){let Je=(Hu?.35:o.interaction.releaseDuration)*1e3;p.releaseProgress=Math.min(1,(performance.now()-M)/Je),p.releaseProgress>=1&&(p.releasing=!1,p.value=o.interaction.restValue)}o.interaction?.guide&&(o.interaction.guide.visible=p.active&&(p.dragging||p.releasing));let ve={t:h,progress:f.progress,running:f.running,param:e.paramValue,manual:p.active?{...p}:null};o.update(ve);let qe=T>=0?T:_;if(l){let Je=o.clickables[qe];Je?.localBox&&Je.root.parent?(Je.root.updateWorldMatrix(!0,!1),F.copy(Je.localBox).applyMatrix4(Je.root.matrixWorld),l.box.copy(F),l.visible=!0):l.visible=!1}a.update(),n.render(s,r),f.running&&f.progress>=1&&ge()},Xe=()=>{z()};window.addEventListener("resize",Xe);let xt=Math.min(10,Math.max(1,Number(location.hash.match(/chapter-(\d+)/)?.[1])||1));return c=Li[xt-1],Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(re=>window.setTimeout(re,2500))]).then(()=>{if(!t)try{P(),o=mc(c.id),o.clickables.forEach((re,ve)=>{re.hit&&(re.hit.userData.entryIndex=ve)}),s.add(o.group),e.setChapter(c,o.clickables),e.setProgressText(b.size),e.setRunState({running:!1,ran:!1}),je(),document.title=`${c.title} \xB7 \u042D\u043D\u0435\u0440\u0433\u0438\u044F`,n.setAnimationLoop(st),e.hideLoader()}catch(re){console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3D-\u0441\u0446\u0435\u043D\u0443:",re),e.showFatal()}}),window.__ENERGY_TEST__={goTo:re=>Ie(re),openChapter:()=>e.openDialog("lesson"),openHelp:()=>e.openDialog("help"),state:()=>({chapter:c.id,running:f.running,progress:f.progress,prediction:E,stamps:[...b],clickables:o?.clickables.length??0})},()=>{t=!0,window.removeEventListener("resize",Xe),n?.setAnimationLoop(null),a?.dispose(),o?.dispose(),n?.dispose(),i.innerHTML=""}}function Vu(){let i=document.getElementById("app");i&&Gu(i)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vu,{once:!0}):Vu();})();
