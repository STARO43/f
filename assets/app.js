"use strict";(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nh=0,fl=1,ih=2;var sr=1,sh=2,hs=3,fi=0,Ht=1,Rn=2,Ri=0,us=1,rr=2,pl=3,ml=4,rh=5;var Ci=100,ah=101,oh=102,lh=103,ch=104,hh=200,uh=201,dh=202,fh=203,gl=204,_l=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=211,yh=212,Mh=213,bh=214,$r=0,Jr=1,Kr=2,ji=3,jr=4,Qr=5,ea=6,ta=7,xl=0,Sh=1,Eh=2,Cn=0,vl=1,yl=2,Ml=3,ar=4,bl=5,Sl=6,El=7;var wl=300,Pi=301,ds=302,Ua=303,Na=304,Ei=1e3,Sn=1001,na=1002,Tt=1003,wh=1004;var or=1005;var At=1006,Fa=1007;var Yn=1008;var Wt=1009,Tl=1010,Al=1011,fs=1012,Oa=1013,gn=1014,_n=1015,xn=1016,Ba=1017,ka=1018,Ii=1020,Rl=35902,Cl=35899,Pl=1021,Il=1022,vn=1023,Gn=1026,Zn=1027,Ll=1028,za=1029,pi=1030,Ha=1031;var Ga=1033,lr=33776,cr=33777,hr=33778,ur=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,$a=37496,Ja=37488,Ka=37489,dr=37490,ja=37491,Qa=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,xo=36284,fr=36285,vo=36286;var Is=2300,ia=2301,Yr=2302,rl=2303,al=2400,ol=2401,ll=2402;var Th=3200;var yo=0,Ah=1,$n="",_t="srgb",Ls="srgb-linear",Ds="linear",Qe="srgb";var Zr=7680;var Rh=519,Ch=512,Ph=513,Ih=514,Dl=515,Lh=516,Dh=517,Ul=518,Nl=519,Fl=35044;var Ol="300 es",rn=2e3,Qi=2001;function Wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){let i=Us("canvas");return i.style.display="block",i}var bc={},es=null;function Ns(...i){let e="THREE."+i.shift();es?es("log",e,...i):console.log(e,...i)}function Nh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Nh(i);let e="THREE."+i.shift();if(es)es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=Nh(i);let e="THREE."+i.shift();if(es)es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ts(...i){let e=i.join(" ");e in bc||(bc[e]=!0,Pe(...i))}function Fh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Oh={[$r]:$r,[Kr]:ea,[jr]:jr,[ji]:Qr,[Jr]:Jr,[ea]:Kr,[ta]:ta,[Qr]:ji},pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=1234567,As=Math.PI/180,ts=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function qu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yu(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function Zu(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function $u(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ju(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qu(i,e){return i+Math.random()*(e-i)}function ed(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(Sc=i);let e=Sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(i){return i*As}function id(i){return i*ts}function sd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zl(i,e){if(e.constructor===Float32Array)return i;let t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hl(i,e){if(e.constructor===Float32Array)return i;let t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var gi={DEG2RAD:As,RAD2DEG:ts,generateUUID:mi,clamp:Ve,euclideanModulo:Bl,mapLinear:qu,inverseLerp:Yu,lerp:Rs,damp:Zu,pingpong:$u,smoothstep:Ju,smootherstep:Ku,randInt:ju,randFloat:Qu,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:kl,setQuaternionFromProperEuler:ad,normalize:Hl,denormalize:zl},ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(p!==v||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+p*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);f=Math.sin(f*y)/E,o=Math.sin(o*y)/E,l=l*f+u*o,c=c*f+d*o,h=h*f+g*o,p=p*f+v*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+g*o,p=p*f+v*o;let y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*p+l*d-c*u,e[t+1]=l*g+h*u+c*p-o*d,e[t+2]=c*g+h*d+o*u-l*p,e[t+3]=h*g-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"YXZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"ZXY":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"ZYX":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"YZX":this._x=u*h*p+c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p-u*d*g;break;case"XZY":this._x=u*h*p-c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p+u*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new P,Ec=new Zt,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],g=n[8],v=s[0],m=s[3],f=s[6],y=s[1],E=s[4],b=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*v+o*y+l*A,r[3]=a*m+o*E+l*T,r[6]=a*f+o*b+l*_,r[1]=c*v+h*y+p*A,r[4]=c*m+h*E+p*T,r[7]=c*f+h*b+p*_,r[2]=u*v+d*y+g*A,r[5]=u*m+d*E+g*T,r[8]=u*f+d*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*p+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=p*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Fe,wc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var Ye=od();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Us("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ld=0,ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var cd=0,Oo=new P,zt=class i extends pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Sn,s=Sn,r=At,a=Yn,o=vn,l=Wt,c=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=mi(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=wl;zt.DEFAULT_ANISOTROPY=1;var ht=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(d+1)/2,A=(f+1)/2,T=(h+u)/4,_=(p+v)/4,S=(g+m)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(p-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new zt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends ra{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,p,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,u,d,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,p,u,d,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,g=o*h,v=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,g=c*h,v=c*p;t[0]=u+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,g=c*h,v=c*p;t[0]=u-v*o,t[4]=-a*p,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*p,g=o*h,v=o*p;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+v,t[1]=l*p,t[5]=v*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*p,t[8]=g*p+d,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+g,t[10]=u-v*p}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+v,t[5]=a*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=o*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,ud)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),jn.crossVectors(n,qt),jn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),jn.crossVectors(n,qt)),jn.normalize(),br.crossVectors(qt,jn),s[0]=jn.x,s[4]=br.x,s[8]=qt.x,s[1]=jn.y,s[5]=br.y,s[9]=qt.y,s[2]=jn.z,s[6]=br.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],g=n[2],v=n[6],m=n[10],f=n[14],y=n[3],E=n[7],b=n[11],A=n[15],T=s[0],_=s[4],S=s[8],N=s[12],I=s[1],U=s[5],F=s[9],V=s[13],C=s[2],G=s[6],q=s[10],O=s[14],Q=s[3],W=s[7],j=s[11],ee=s[15];return r[0]=a*T+o*I+l*C+c*Q,r[4]=a*_+o*U+l*G+c*W,r[8]=a*S+o*F+l*q+c*j,r[12]=a*N+o*V+l*O+c*ee,r[1]=h*T+p*I+u*C+d*Q,r[5]=h*_+p*U+u*G+d*W,r[9]=h*S+p*F+u*q+d*j,r[13]=h*N+p*V+u*O+d*ee,r[2]=g*T+v*I+m*C+f*Q,r[6]=g*_+v*U+m*G+f*W,r[10]=g*S+v*F+m*q+f*j,r[14]=g*N+v*V+m*O+f*ee,r[3]=y*T+E*I+b*C+A*Q,r[7]=y*_+E*U+b*G+A*W,r[11]=y*S+E*F+b*q+A*j,r[15]=y*N+E*V+b*O+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15],y=l*d-c*u,E=o*d-c*p,b=o*u-l*p,A=a*d-c*h,T=a*u-l*h,_=a*p-o*h;return t*(v*y-m*E+f*b)-n*(g*y-m*A+f*T)+s*(g*E-v*A+f*_)-r*(g*b-v*T+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=t*o-n*a,E=t*l-s*a,b=t*c-r*a,A=n*l-s*o,T=n*c-r*o,_=s*c-r*l,S=h*v-p*g,N=h*m-u*g,I=h*f-d*g,U=p*m-u*v,F=p*f-d*v,V=u*f-d*m,C=y*V-E*F+b*U+A*I-T*N+_*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return e[0]=(o*V-l*F+c*U)*G,e[1]=(s*F-n*V-r*U)*G,e[2]=(v*_-m*T+f*A)*G,e[3]=(u*T-p*_-d*A)*G,e[4]=(l*I-a*V-c*N)*G,e[5]=(t*V-s*I+r*N)*G,e[6]=(m*b-g*_-f*E)*G,e[7]=(h*_-u*b+d*E)*G,e[8]=(a*F-o*I+c*S)*G,e[9]=(n*I-t*F-r*S)*G,e[10]=(g*T-v*b+f*y)*G,e[11]=(p*b-h*T-d*y)*G,e[12]=(o*N-a*U-l*S)*G,e[13]=(t*U-n*N+s*S)*G,e[14]=(v*E-g*A-m*y)*G,e[15]=(h*A-p*E+u*y)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,g=r*p,v=a*h,m=a*p,f=o*p,y=l*c,E=l*h,b=l*p,A=n.x,T=n.y,_=n.z;return s[0]=(1-(v+f))*A,s[1]=(d+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(u+f))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(m-y)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let c=1/a,h=1/o,p=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=p,hn.elements[9]*=p,hn.elements[10]*=p,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=rn,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===rn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qi)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=rn,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===rn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qi)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new P,hn=new tt,hd=new P(0,0,0),ud=new P(1,1,1),jn=new P,br=new P,qt=new P,Ac=new tt,Rc=new Zt,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dd=0,Cc=new P,Fi=new Zt,Nn=new tt,Sr=new P,xs=new P,fd=new P,pd=new Zt,Pc=new P(1,0,0),Ic=new P(0,1,0),Lc=new P(0,0,1),Dc={type:"added"},md={type:"removed"},Oi={type:"childadded",child:null},Bo={type:"childremoved",child:null},Rt=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Vn,n=new Zt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Fe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xs,Sr,this.up):Nn.lookAt(Sr,xs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ot=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gd={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Bl(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ko(a,r,e+1/3),this.g=ko(a,r,e),this.b=ko(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ye.workingToColorSpace(Ut.copy(this),e),Math.round(Ve(Ut.r*255,0,255))*65536+Math.round(Ve(Ut.g*255,0,255))*256+Math.round(Ve(Ut.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=_t){Ye.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Er);let n=Rs(Qn.h,Er.h,t),s=Rs(Qn.s,Er.s,t),r=Rs(Qn.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new De;De.NAMES=Bh;var Os=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bs=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new P,Fn=new P,zo=new P,On=new P,Bi=new P,ki=new P,Uc=new P,Ho=new P,Go=new P,Vo=new P,Wo=new ht,Xo=new ht,qo=new ht,zn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Fn.subVectors(n,t),zo.subVectors(e,t);let a=un.dot(un),o=un.dot(Fn),l=un.dot(zo),c=Fn.dot(Fn),h=Fn.dot(zo),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Fn.subVectors(e,t),un.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),un.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),ki.subVectors(r,n),Ho.subVectors(e,n);let l=Bi.dot(Ho),c=ki.dot(Ho);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,s);let h=Bi.dot(Go),p=ki.dot(Go);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);Vo.subVectors(e,r);let d=Bi.dot(Vo),g=ki.dot(Vo);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Uc.subVectors(r,s),o=(p-h)/(p-h+(d-g)),t.copy(s).addScaledVector(Uc,o);let f=1/(m+v+u);return a=v*f,o=u*f,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Tr.subVectors(this.max,vs),zi.subVectors(e.a,vs),Hi.subVectors(e.b,vs),Gi.subVectors(e.c,vs),ei.subVectors(Hi,zi),ti.subVectors(Gi,Hi),yi.subVectors(zi,Gi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-yi.z,yi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!Yo(t,zi,Hi,Gi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,zi,Hi,Gi,Tr))?!1:(Ar.crossVectors(ei,ti),t=[Ar.x,Ar.y,Ar.z],Yo(t,zi,Hi,Gi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,wr=new ii,zi=new P,Hi=new P,Gi=new P,ei=new P,ti=new P,yi=new P,vs=new P,Tr=new P,Ar=new P,Mi=new P;function Yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mt=new P,Rr=new ge,_d=0,fn=class extends pn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?Mo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hl(e,this.array)}};var ks=class extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zs=class extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}},xd=new ii,ys=new P,Zo=new P,wi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Zo)),this.expandByPoint(ys.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vd=0,sn=new tt,$o=new Rt,Vi=new P,Yt=new ii,Ms=new ii,wt=new P,Pt=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?zs:ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,Ms.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,Ms.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(Ms.min),Yt.expandByPoint(Ms.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),wt.add(Vi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;let h=new P,p=new P,u=new P,d=new ge,g=new ge,v=new ge,m=new P,f=new P;function y(N,I,U){c[N]=c[I]=c[U]=1,h.fromBufferAttribute(n,N),p.fromBufferAttribute(n,I),u.fromBufferAttribute(n,U),d.fromBufferAttribute(r,N),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,U),p.sub(h),u.sub(h),g.sub(d),v.sub(d);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(m.copy(p).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(F),f.copy(u).multiplyScalar(g.x).addScaledVector(p,-v.x).multiplyScalar(F),o[N].add(m),o[I].add(m),o[U].add(m),l[N].add(f),l[I].add(f),l[U].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,I=E.length;N<I;++N){let U=E[N],F=U.start,V=U.count;for(let C=F,G=F+V;C<G;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let b=new P,A=new P,T=new P,_=new P;function S(N){T.fromBufferAttribute(s,N),_.copy(T);let I=o[N];b.copy(I),b.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(_,I);let F=A.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,F)}for(let N=0,I=n.count;N<I;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,p=new P;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[d++]}return new fn(u,h,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Nc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ot=new P,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Mo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ns("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ns("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hl(e,this.data.array)}},Jo=new P,yd=new P,Md=new Fe,Bt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Jo.subVectors(n,t).cross(yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Md.getNormalMatrix(e),s=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bd=0,En=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=us,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ti=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wi,bs=new P,Xi=new P,qi=new P,Yi=new ge,Ss=new ge,kh=new tt,Cr=new P,Es=new P,Pr=new P,Fc=new ge,Ko=new ge,Oc=new ge,rs=class extends Rt{constructor(e=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oa(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Hs(n,3,0,!1)),Wi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ir(Cr.set(-.5,-.5,0),qi,a,Xi,s,r),Ir(Es.set(.5,-.5,0),qi,a,Xi,s,r),Ir(Pr.set(.5,.5,0),qi,a,Xi,s,r),Fc.set(0,0),Ko.set(1,0),Oc.set(1,1);let o=e.ray.intersectTriangle(Cr,Es,Pr,!1,bs);if(o===null&&(Ir(Es.set(-.5,.5,0),qi,a,Xi,s,r),Ko.set(0,1),o=e.ray.intersectTriangle(Cr,Pr,Es,!1,bs),o===null))return;let l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||t.push({distance:l,point:bs.clone(),uv:zn.getInterpolation(bs,Cr,Es,Pr,Fc,Ko,Oc,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ir(i,e,t,n,s,r){Yi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Yi.x-s*Yi.y,Ss.y=s*Yi.x+r*Yi.y):Ss.copy(Yi),i.copy(e),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(kh)}var kn=new P,jo=new P,Lr=new P,Dr=new P,si=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jo.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Dr.dot(this.direction),l=-Dr.dot(Lr),c=Dr.lengthSq(),h=Math.abs(1-a*a),p,u,d,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let v=1/h;p*=v,u*=v,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(jo).addScaledVector(Lr,u),d}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,f=n.x-a.x,y=n.y-a.y,E=n.z-a.z,b=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,S,N,I,U,F,V,C,G,q,O,Q;if(b>=A&&b>=T?(N=l,F=p,G=g,Q=f,l>=0?(_=c,S=h,I=u,U=d,V=v,C=m,q=y,O=E):(_=h,S=c,I=d,U=u,V=m,C=v,q=E,O=y)):A>=T?(N=c,F=u,G=v,Q=y,c>=0?(_=h,S=l,I=d,U=p,V=m,C=g,q=E,O=f):(_=l,S=h,I=p,U=d,V=g,C=m,q=f,O=E)):(N=h,F=d,G=m,Q=E,h>=0?(_=l,S=c,I=p,U=u,V=g,C=v,q=f,O=y):(_=c,S=l,I=u,U=p,V=v,C=g,q=y,O=f)),N===0)return null;let W=_/N,j=S/N,ee=1/N,we=I-W*F,Ue=U-j*F,Z=V-W*G,me=C-j*G,Me=q-W*Q,Re=O-j*Q,_e=Me*me-Re*Z,Oe=we*Re-Ue*Me,ut=Z*Ue-me*we;if(s){if(_e<0||Oe<0||ut<0)return null}else if((_e<0||Oe<0||ut<0)&&(_e>0||Oe>0||ut>0))return null;let Ie=_e+Oe+ut;if(Ie===0)return null;let je=ee*(_e*F+Oe*G+ut*Q);return(Ie>0?je<0:je>0)?null:this.at(je/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bc=new tt,bi=new si,Ur=new wi,kc=new P,Nr=new P,Fr=new P,Or=new P,Qo=new P,Br=new P,zc=new P,kr=new P,ze=class extends Rt{constructor(e=new Pt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Qo.fromBufferAttribute(p,e),a?Br.addScaledVector(Qo,h):Br.addScaledVector(Qo.sub(t),h))}t.add(Br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Ur.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ur,kc)===null||bi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,A=E;b<A;b+=3){let T=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=zr(this,f,e,n,c,h,p,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){let y=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=zr(this,a,e,n,c,h,p,y,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,A=E;b<A;b+=3){let T=b,_=b+1,S=b+2;s=zr(this,f,e,n,c,h,p,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){let y=m,E=m+1,b=m+2;s=zr(this,a,e,n,c,h,p,y,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sd(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===fi,o),l===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function zr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Nr),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);let h=Sd(i,e,t,n,Nr,Fr,Or,zc);if(h){let p=new P;zn.getBarycoord(zc,Nr,Fr,Or,p),s&&(h.uv=zn.getInterpolatedAttribute(s,o,l,c,p,new ge)),r&&(h.uv1=zn.getInterpolatedAttribute(r,o,l,c,p,new ge)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,l,c,p,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};zn.getNormal(Nr,Fr,Or,u.normal),h.face=u,h.barycoord=p}return h}var la=class extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new wi,Ed=new ge(.5,.5),Hr=new P,ri=class{constructor(e=new Bt,t=new Bt,n=new Bt,s=new Bt,r=new Bt,a=new Bt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],f=r[11],y=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,f-g,A-y).normalize(),s[1].setComponents(c+a,d+h,f+g,A+y).normalize(),s[2].setComponents(c+o,d+p,f+v,A+E).normalize(),s[3].setComponents(c-o,d-p,f-v,A-E).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,d-u,f-m,A-b).normalize();else if(s[4].setComponents(c-l,d-u,f-m,A-b).normalize(),t===rn)s[5].setComponents(c+l,d+u,f+m,A+b).normalize();else if(t===Qi)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=Ed.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hc=new tt,ca=class i{constructor(){this.coordinateSystem=rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Hc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(Hc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ri),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Gs=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new P,ua=new P,Gc=new tt,ws=new si,Gr=new wi,el=new P,Vc=new P,Vs=class extends Rt{constructor(e=new Pt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ha.fromBufferAttribute(t,s-1),ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new nt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;Gc.copy(s).invert(),ws.copy(e.ray).applyMatrix4(Gc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let f=h.getX(v),y=h.getX(v+1),E=Vr(this,e,ws,l,f,y,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),f=Vr(this,e,ws,l,v,m,g-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let f=Vr(this,e,ws,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=Vr(this,e,ws,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),ua.fromBufferAttribute(o,r),t.distanceSqToSegment(ha,ua,el,Vc)>n)return;el.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:Vc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ws=class extends zt{constructor(e=[],t=Pi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wn=class extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends zt{constructor(e,t,n=gn,s,r,a,o=Tt,l=Tt,c,h=Gn,p=1){if(h!==Gn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xs=class extends Xn{constructor(e,t=gn,n=Pi,s,r,a=Tt,o=Tt,l,c=Gn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qs=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ai=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2));function g(v,m,f,y,E,b,A,T,_,S,N){let I=b/_,U=A/S,F=b/2,V=A/2,C=T/2,G=_+1,q=S+1,O=0,Q=0,W=new P;for(let j=0;j<q;j++){let ee=j*U-V;for(let we=0;we<G;we++){let Ue=we*I-F;W[v]=Ue*y,W[m]=ee*E,W[f]=C,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),p.push(we/_),p.push(1-j/S),O+=1}}for(let j=0;j<S;j++)for(let ee=0;ee<_;ee++){let we=u+ee+G*j,Ue=u+ee+G*(j+1),Z=u+(ee+1)+G*(j+1),me=u+(ee+1)+G*j;l.push(we,Ue,me),l.push(Ue,Z,me),Q+=6}o.addGroup(d,Q,N),d+=Q,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var as=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let d=n+p/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],g=0,v=[],m=n/2,f=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function y(){let b=new P,A=new P,T=0,_=(t-e)/n;for(let S=0;S<=r;S++){let N=[],I=S/r,U=I*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,C=V*l+o,G=Math.sin(C),q=Math.cos(C);A.x=U*G,A.y=-I*n+m,A.z=U*q,p.push(A.x,A.y,A.z),b.set(G,_,q).normalize(),u.push(b.x,b.y,b.z),d.push(V,1-I),N.push(g++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let I=v[N][S],U=v[N+1][S],F=v[N+1][S+1],V=v[N][S+1];(e>0||N!==0)&&(h.push(I,U,V),T+=3),(t>0||N!==r-1)&&(h.push(U,F,V),T+=3)}c.addGroup(f,T,0),f+=T}function E(b){let A=g,T=new ge,_=new P,S=0,N=b===!0?e:t,I=b===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),g++;let U=g;for(let F=0;F<=s;F++){let C=F/s*l+o,G=Math.cos(C),q=Math.sin(C);_.x=N*q,_.y=m*I,_.z=N*G,p.push(_.x,_.y,_.z),u.push(0,I,0),T.x=G*.5+.5,T.y=q*.5*I+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){let V=A+F,C=U+F;b===!0?h.push(C,C+1,V):h.push(C+1,C,V),S+=3}c.addGroup(f,S,b===!0?1:2),f+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oi=class i extends an{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new tt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ys=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},da=class extends Ys{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wc=new P,Xc=new P,tl=new Gl,nl=new Gl,il=new Gl,wn=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xc.subVectors(s[0],s[1]).add(s[0]),c=Xc);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),tl.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,v,m),nl.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,v,m),il.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),nl.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),il.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(tl.calc(l),nl.calc(l),il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function wd(i,e){let t=1-i;return t*t*e}function Td(i,e){return 2*(1-i)*i*e}function Ad(i,e){return i*i*e}function Cs(i,e,t,n){return wd(i,e)+Td(i,t)+Ad(i,n)}function Rd(i,e){let t=1-i;return t*t*t*e}function Cd(i,e){let t=1-i;return 3*t*t*i*e}function Pd(i,e){return 3*(1-i)*i*i*e}function Id(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return Rd(i,e)+Cd(i,t)+Pd(i,n)+Id(i,s)}var fa=class extends on{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends on{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y),Ps(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends on{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends on{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends on{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cs(e,s.x,r.x,a.x),Cs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zs=class extends on{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cs(e,s.x,r.x,a.x),Cs(e,s.y,r.y,a.y),Cs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,l.x,c.x,h.x,p.x),qc(o,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Ld=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:wn,CubicBezierCurve:fa,CubicBezierCurve3:pa,EllipseCurve:Ys,LineCurve:ma,LineCurve3:ga,QuadraticBezierCurve:_a,QuadraticBezierCurve3:Zs,SplineCurve:xa});var Ai=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,d=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let y=f*u-a;for(let E=0;E<c;E++){let b=E*p-r;g.push(b,-y,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let E=y+c*f,b=y+c*(f+1),A=y+1+c*(f+1),T=y+1+c*f;d.push(E,b,T),d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new P,u=new P,d=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){let y=[],E=f/n,b=a+E*o,A=e*Math.cos(b),T=Math.sqrt(e*e-A*A),_=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let N=S/t,I=s+N*r;p.x=-T*Math.cos(I),p.y=A,p.z=T*Math.sin(I),g.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),m.push(N+_,1-E),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let E=h[f][y+1],b=h[f][y],A=h[f+1][y],T=h[f+1][y+1];(f!==0||a>0)&&d.push(E,b,T),(f!==n-1||l<Math.PI)&&d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new P,d=new P,g=new P;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let f=0;f<=s;f++){let y=f/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),p.push(f/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let f=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,b=(s+1)*v+m;l.push(f,y,b),l.push(y,E,b)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var qn=class i extends Pt{constructor(e=new Zs(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ge,h=new P,p=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),y(),f()}function m(E){h=e.getPointAt(E/t,h);let b=a.normals[E],A=a.binormals[E];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,S=Math.sin(_),N=-Math.cos(_);l.x=N*b.x+S*A.x,l.y=N*b.y+S*A.y,l.z=N*b.z+S*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let A=(s+1)*(E-1)+(b-1),T=(s+1)*E+(b-1),_=(s+1)*E+b,S=(s+1)*(E-1)+b;g.push(A,T,S),g.push(T,_,S)}}function y(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)c.x=E/t,c.y=b/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ld[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Yc(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Yc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=Li(i[t]);for(let s in n)e[s]=n[s]}return e}function Yc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var zh={clone:Li,merge:Nt},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},va=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ya=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var $s=class extends Gs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ba=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:r=e,o=2*t-n;break;case ll:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ol:a=e,l=2*n-t;break;case ll:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,f=-u*m+2*u*v-u*g,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*v+.5*g,b=d*m-d*v;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+y*a[c+A]+E*a[l+A]+b*a[p+A];return r}},Sa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Ea=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wa=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],f=d*u+g*2,y=p[f],E=p[f+1],b=e*u+g*2,A=h[b],T=h[b+1],_=Od(n,t,y,A,s);r[g]=Hh(_,v,E,T,m)}return r}};function Hh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Fd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Od(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Hh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Fd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wr(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Yr:t=this.InterpolantFactoryMethodSmooth;break;case rl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Yr;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wr(this.settings)&&(Zc(this.settings.inTangents,e),Zc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wr(this.settings)&&($c(this.settings.inTangents,e),$c(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Xu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,d=p+n;for(let g=0;g!==n;++g){let v=t[p+g];if(v!==t[u+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function $c(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=ia;var ci=class extends Kt{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Is;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Ta.prototype.ValueTypeName="color";var Aa=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Js=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Kt{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Is;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Ca.prototype.ValueTypeName="vector";var Pa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gh=new Pa,Ia=class{constructor(e){this.manager=e!==void 0?e:Gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},js=class extends Ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sl=new tt,Jc=new P,Kc=new P,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(sl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xr=new P,qr=new Zt,bn=new P,Qs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xr,qr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new P,jc=new ge,Qc=new ge,kt=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Qc),t.subVectors(Qc,jc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var er=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cl=class extends La{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=-90,Ji=1,ls=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt($i,Ji,e,t);s.layers=this.layers,this.add(s);let r=new kt($i,Ji,e,t);r.layers=this.layers,this.add(r);let a=new kt($i,Ji,e,t);a.layers=this.layers,this.add(a);let o=new kt($i,Ji,e,t);o.layers=this.layers,this.add(o);let l=new kt($i,Ji,e,t);l.layers=this.layers,this.add(l);let c=new kt($i,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Da=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wl="\\[\\]\\.:\\/",Bd=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",kd="[^"+Wl.replace("\\.","")+"]",zd=/((?:WC+[\/:])*)/.source.replace("WC",Xl),Hd=/(WCOD+)?/.source.replace("WCOD",kd),Gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Wd=new RegExp("^"+zd+Hd+Gd+Vd+"$"),Xd=["material","materials","bones","map"],hl=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bd,"")}static parseTrackName(e){let t=Wd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=hl;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var eh=new tt,tr=class{constructor(e,t,n=0,s=1/0){this.ray=new si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(th),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ul(e[s],this,n,t);return n.sort(th),n}};function th(i,e){return i.distance-e.distance}function ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ul(r[a],e,t,!0)}}var nr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},cs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var ir=class extends pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ql(i,e,t,n){let s=qd(n);switch(t){case Pl:return i*e;case Ll:return i*e/s.components*s.byteLength;case za:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Ha:return i*e*2/s.components*s.byteLength;case Il:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Ga:return i*e*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(i,16)*Math.max(e,8)/4;case Va:case Xa:return Math.max(i,8)*Math.max(e,8)/2;case Ya:case Za:case Ja:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case dr:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _o:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fr:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qd(i){switch(i){case Wt:case Tl:return{byteLength:1,components:1};case fs:case Al:case xn:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case gn:case Oa:case _n:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function hu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<p.length;d++){let g=p[u],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,p[u]=v)}p.length=u+1;for(let d=0,g=p.length;d<g;d++){let v=p[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vf=`#define PI 3.141592653589793
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
} // validated`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Yf=`uniform sampler2D dfgLUT;
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
}`,Zf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
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
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform float backgroundBlurriness;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,bm=`#define TOON
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
}`,Sm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:$d,alphahash_pars_fragment:Jd,alphamap_fragment:Kd,alphamap_pars_fragment:jd,alphatest_fragment:Qd,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Mf,displacementmap_vertex:bf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Ef,colorspace_fragment:wf,colorspace_pars_fragment:Tf,envmap_fragment:Af,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Cf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Hf,envmap_vertex:If,fog_vertex:Lf,fog_pars_vertex:Df,fog_fragment:Uf,fog_pars_fragment:Nf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:kf,lights_pars_begin:zf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Wf,lights_phong_pars_fragment:Xf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:Zf,lights_fragment_maps:$f,lights_fragment_end:Jf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,opaque_fragment:Sp,packing:Ep,premultiplied_alpha_fragment:wp,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:zp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Zp,background_vert:$p,background_frag:Jp,backgroundCube_vert:Kp,backgroundCube_frag:jp,cube_vert:Qp,cube_frag:em,depth_vert:tm,depth_frag:nm,distance_vert:im,distance_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:xm,meshphysical_vert:vm,meshphysical_frag:ym,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:Sm,points_frag:Em,shadow_vert:wm,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},ve={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},In={basic:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Nt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Nt([ve.lights,ve.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};In.physical={uniforms:Nt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var bo={r:0,b:0,g:0},Cm=new tt,uu=new Fe;uu.set(-1,0,0,0,1,0,0,0,1);function Pm(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let b=y.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(y){let E=!1,b=d(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,E){let b=d(E);b&&b.isCubeTexture?(c===void 0&&(c=new ze(new ai(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Li(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uu),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Qe,(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ze(new Ai(2,2),new An({name:"BackgroundMaterial",uniforms:Li(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(bo,Vl(i)),t.buffers.color.setClear(bo.r,bo.g,bo.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:f}}function Im(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,F,V,C,G){let q=!1,O=p(U,C,V,F);r!==O&&(r=O,c(r.object)),q=d(U,C,V,G),q&&g(U,C,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(U,F,V,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function p(U,F,V,C){let G=C.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let O=U.isInstancedMesh===!0?U.id:0,Q=q[O];Q===void 0&&(Q={},q[O]=Q);let W=Q[V.id];W===void 0&&(W={},Q[V.id]=W);let j=W[G];return j===void 0&&(j=u(l()),W[G]=j),j}function u(U){let F=[],V=[],C=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:C,object:U,attributes:{},index:null}}function d(U,F,V,C){let G=r.attributes,q=F.attributes,O=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let ee=G[W],we=q[W];if(we===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(we=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(we=U.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(U,F,V,C){let G={},q=F.attributes,O=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),G[W]=we,O++}r.attributes=G,r.attributesNum=O,r.index=C}function v(){let U=r.newAttributes;for(let F=0,V=U.length;F<V;F++)U[F]=0}function m(U){f(U,0)}function f(U,F){let V=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;V[U]=1,C[U]===0&&(i.enableVertexAttribArray(U),C[U]=1),G[U]!==F&&(i.vertexAttribDivisor(U,F),G[U]=F)}function y(){let U=r.newAttributes,F=r.enabledAttributes;for(let V=0,C=F.length;V<C;V++)F[V]!==U[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function E(U,F,V,C,G,q,O){O===!0?i.vertexAttribIPointer(U,F,V,G,q):i.vertexAttribPointer(U,F,V,C,G,q)}function b(U,F,V,C){v();let G=C.attributes,q=V.getAttributes(),O=F.defaultAttributeValues;for(let Q in q){let W=q[Q];if(W.location>=0){let j=G[Q];if(j===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let ee=j.normalized,we=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;let Z=Ue.buffer,me=Ue.type,Me=Ue.bytesPerElement,Re=me===i.INT||me===i.UNSIGNED_INT||j.gpuType===Oa;if(j.isInterleavedBufferAttribute){let _e=j.data,Oe=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,ut=j.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ie=0;Ie<W.locationSize;Ie++)f(W.location+Ie,_e.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)m(W.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ie=0;Ie<W.locationSize;Ie++)E(W.location+Ie,we/W.locationSize,me,ee,Oe*Me,(ut+we/W.locationSize*Ie)*Me,Re)}else{if(j.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)f(W.location+_e,j.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let _e=0;_e<W.locationSize;_e++)E(W.location+_e,we/W.locationSize,me,ee,we*Me,we/W.locationSize*_e*Me,Re)}}else if(O!==void 0){let ee=O[Q];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}y()}function A(){N();for(let U in n){let F=n[U];for(let V in F){let C=F[V];for(let G in C){let q=C[G];for(let O in q)h(q[O].object),delete q[O];delete C[G]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let V in F){let C=F[V];for(let G in C){let q=C[G];for(let O in q)h(q[O].object),delete q[O];delete C[G]}}delete n[U.id]}function _(U){for(let F in n){let V=n[F];for(let C in V){let G=V[C];if(G[U.id]===void 0)continue;let q=G[U.id];for(let O in q)h(q[O].object),delete q[O];delete G[U.id]}}}function S(U){for(let F in n){let V=n[F],C=U.isInstancedMesh===!0?U.id:0,G=V[C];if(G!==void 0){for(let q in G){let O=G[q];for(let Q in O)h(O[Q].object),delete O[Q];delete G[q]}delete V[C],Object.keys(V).length===0&&delete n[F]}}}function N(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Lm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Wt&&_!==_n&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:T}}function Um(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bt,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,b=f.clippingState||null;l.value=b,b=h(g,u,E,d);for(let A=0;A!==E;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=d+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=d;E!==v;++E,b+=4)a.copy(p[E]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var gr=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Ri});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=At),new ls(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Vh=256,Nm=3,Fm=20,du=256,fu=16,Om=3,Bm=new P,km=new De,Eo=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ls(1,10,null),this._boxMesh=new ze(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Bm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(km));let m=new ls(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vh,kl(e))}_fromTexture(e,t){e.mapping===Pi||e.mapping===ds?this._setSize(e.image.length===0?Vh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Wh(e,!1,!1),n=Math.log2(e)-Nm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Wh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Pi||e.mapping===ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zm(),this._integrationMaterial=Hm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/fu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Om)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(du*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Gm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Wh(i,e,t){return new gr(i,{minFilter:Yn,generateMipmaps:e,type:xn,colorSpace:Ls,depthBuffer:t})}function _r(i,e,t){return new An({name:i,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Ht,blending:Ri,depthTest:!1,depthWrite:!1})}function zm(){return _r("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${du}u

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
	`)}function Hm(){return _r("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fu}},`

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
	`)}function Gm(){return _r("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fm}
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
	`)}function Xh(){return _r("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qh(){return _r("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ua||d===Na)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new gr(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===Ua||d===Na,v=d===Pi||d===ds;if(g||v){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Eo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Eo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Ua?u.mapping=Pi:d===Na&&(u.mapping=ds),u}function l(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Wm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ts("WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function p(g){let v=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let y=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?zs:ks,b=new E(Math.ceil(y/3)*6,1),A=b.array;if(v!==null){let _=v.array;f=v.version;for(let S=0,N=0;S<y;S+=3){let I=_[S+0],U=_[S+1],F=_[S+2];A[N++]=I,A[N++]=U,A[N++]=U,A[N++]=F,A[N++]=F,A[N++]=I}}else{f=m.version;for(let _=0,S=0;_<y;_+=3){let N=_+0,I=_+1,U=_+2;A[S++]=N,A[S++]=I,A[S++]=I,A[S++]=U,A[S++]=U,A[S++]=N}}b.version=f;let T=r.get(g);T&&e.remove(T),r.set(g,b)}function u(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&p(g)}else p(g);return r.get(g)}function d(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function qm(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*a,d),t.update(u,n,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ym(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*p),_=new Fs(T,b,A,p);_.type=_n,_.needsUpdate=!0;let S=E*4;for(let I=0;I<p;I++){let U=m[I],F=f[I],V=y[I],C=b*A*4*I;for(let G=0;G<U.count;G++){let q=G*S;d===!0&&(s.fromBufferAttribute(U,G),T[C+q+0]=s.x,T[C+q+1]=s.y,T[C+q+2]=s.z,T[C+q+3]=0),g===!0&&(s.fromBufferAttribute(F,G),T[C+q+4]=s.x,T[C+q+5]=s.y,T[C+q+6]=s.z,T[C+q+7]=0),v===!0&&(s.fromBufferAttribute(V,G),T[C+q+8]=s.x,T[C+q+9]=s.y,T[C+q+10]=s.z,T[C+q+11]=V.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new ge(b,A)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $m(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Jm={[vl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[ar]:"ACES_FILMIC_TONE_MAPPING",[Sl]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Km(i,e,t,n,s,r){let a=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let p=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ze(h,p),d=new er(-1,1,1,-1,0,1),g=null,v=null,m=!1,f,y=null,E=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(A,T)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new $t(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new $t(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Xn(T,_),r===!0&&(c.format=Zn,c.type=Ii)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<E.length;N++){let I=E[N];I.setSize&&I.setSize(T,_),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Cn&&E.length===0)return!1;if(y=T,T!==null){let _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Cn,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=f,m=!0;let _=a,S=o;for(let N=0;N<E.length;N++){let I=E[N];I.enabled!==!1&&(I.render(A,S,_,T),I.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,p.defines={},Ye.getTransfer(g)===Qe&&(p.defines.SRGB_TRANSFER="");let N=Jm[v];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(u,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var pu=new zt,mu=new Xn(1,1),gu=new Xs(1),_u=new Fs,xu=new aa,vu=new Ws,Yh=[],Zh=[],$h=new Float32Array(16),Jh=new Float32Array(9),Kh=new Float32Array(4);function ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function To(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function n0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),yt(t,n)}}function i0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Jh.set(n),i.uniformMatrix3fv(this.addr,!1,Jh),yt(t,n)}}function s0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),yt(t,n)}}function r0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function c0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Ao(i){return i.version===0&&(i.compareFunction=Nl,i.needsUpdate=!0),i}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ao(mu):r=pu,t.setTexture2D(e||r,s)}function p0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function m0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ao(gu):r=vu,t.setTextureCube(e||r,s)}function g0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function _0(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,e){i.uniform1fv(this.addr,e)}function v0(i,e){let t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function y0(i,e){let t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){let t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function b0(i,e){let t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S0(i,e){let t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){let t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w0(i,e){i.uniform1iv(this.addr,e)}function T0(i,e){i.uniform2iv(this.addr,e)}function A0(i,e){i.uniform3iv(this.addr,e)}function R0(i,e){i.uniform4iv(this.addr,e)}function C0(i,e){i.uniform1uiv(this.addr,e)}function P0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function L0(i,e){i.uniform4uiv(this.addr,e)}function D0(i,e,t){let n=this.cache,s=e.length,r=To(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ao(mu):a=pu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function U0(i,e,t){let n=this.cache,s=e.length,r=To(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function N0(i,e,t){let n=this.cache,s=e.length,r=To(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ao(gu):a=vu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function F0(i,e,t){let n=this.cache,s=e.length,r=To(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_u,r[a])}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return I0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var $l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},Kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function jh(i,e){i.seq.push(e),i.map[e.id]=e}function B0(i,e,t){let n=i.name,s=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),a=Yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(t,c===void 0?new $l(o,i,e):new Jl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Kl(o),jh(t,p)),t=p}}}var ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);B0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var k0=37297,z0=0;function H0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var eu=new Fe;function G0(i){Ye._getMatrix(eu,Ye.workingColorSpace,i);let e=`mat3( ${eu.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+H0(i.getShaderSource(e),o)}else return r}function V0(i,e){let t=G0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W0={[vl]:"Linear",[yl]:"Reinhard",[Ml]:"Cineon",[ar]:"ACESFilmic",[Sl]:"AgX",[El]:"Neutral",[bl]:"Custom"};function X0(i,e){let t=W0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var So=new P;function q0(){Ye.getLuminanceCoefficients(So);let i=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Z0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mr(i){return i!==""}function nu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(J0,K0)}function K0(i,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jl(t)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(j0,Q0)}function Q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var eg={[sr]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function tg(i){return eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ng={[ds]:"ENVMAP_MODE_REFRACTION"};function ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sg={[xl]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sg[i.combine]||"ENVMAP_BLENDING_NONE"}function ag(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ig(t),p=rg(t),u=Y0(t),d=Z0(r),g=s.createProgram(),v,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(v=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?We.tonemapping_pars_fragment:"",t.toneMapping!==Cn?X0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=jl(a),a=nu(a,t),a=iu(a,t),o=jl(o),o=nu(o,t),o=iu(o,t),a=su(a),o=su(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=f+v+a,E=f+m+o,b=Qh(s,s.VERTEX_SHADER,y),A=Qh(s,s.FRAGMENT_SHADER,E);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(A)||"",C=U.trim(),G=F.trim(),q=V.trim(),O=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,A);else{let W=tu(s,b,"vertex"),j=tu(s,A,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+W+`
`+j)}else C!==""?Pe("WebGLProgram: Program Info Log:",C):(G===""||q==="")&&(Q=!1);Q&&(I.diagnostics={runnable:O,programLog:C,vertexShader:{log:G,prefix:v},fragmentShader:{log:q,prefix:m}})}s.deleteShader(b),s.deleteShader(A),_=new ps(s,g),S=$0(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,k0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}var og=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ec(e),t.set(e,n)),n}},ec=class{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}};function lg(i){return i===pi||i===dr||i===fr}function cg(i,e,t,n,s,r){let a=new is,o=new Ql,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,N,I,U,F){let V=I.fog,C=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||G,q),Q=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=j!==void 0?j.length:0,we=0;C.morphAttributes.position!==void 0&&(we=1),C.morphAttributes.normal!==void 0&&(we=2),C.morphAttributes.color!==void 0&&(we=3);let Ue,Z,me,Me;if(Q){let xe=In[Q];Ue=xe.vertexShader,Z=xe.fragmentShader}else{Ue=_.vertexShader,Z=_.fragmentShader;let xe=o.getVertexShaderStage(_),et=o.getFragmentShaderStage(_);o.update(_,xe,et),me=xe.id,Me=et.id}let Re=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,ut=U.isBatchedMesh===!0,Ie=!!_.map,je=!!_.matcap,ce=!!O,fe=ce&&O.isPMREMTexture===!0,$e=!!_.aoMap,rt=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Mn=!!_.displacementMap,bt=!!_.emissiveMap,Qt=!!_.metalnessMap,en=!!_.roughnessMap,tn=_.anisotropy>0,D=_.clearcoat>0,nn=_.diffuseRoughness>0,lt=_.dispersion>0,ct=_.retroreflectivity>0,pe=_.iridescence>0,gt=_.sheen>0,Le=_.transmission>0,Be=tn&&!!_.anisotropyMap,w=D&&!!_.clearcoatMap,x=D&&!!_.clearcoatNormalMap,k=D&&!!_.clearcoatRoughnessMap,ne=nn&&!!_.diffuseRoughnessMap,K=pe&&!!_.iridescenceMap,re=pe&&!!_.iridescenceThicknessMap,ue=gt&&!!_.sheenColorMap,Y=gt&&!!_.sheenRoughnessMap,$=!!_.specularMap,oe=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Le&&!!_.transmissionMap,X=Le&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,ae=_.alphaTest>0,Ae=!!_.alphaHash,Ge=!!_.extensions,ie=Cn;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=fe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,He={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Z,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ut,batchingColor:ut&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:je,envMap:ce,envMapMode:ce&&O.mapping,envMapPMREM:fe,envMapMaxLod:fe?Ce.length-1:null,envMapSize:fe?Ce[0].width:null,aoMap:$e,lightMap:rt,bumpMap:Vt,normalMap:dt,displacementMap:Mn,emissiveMap:bt,normalMapObjectSpace:dt&&_.normalMapType===Ah,normalMapTangentSpace:dt&&_.normalMapType===yo,packedNormalMap:dt&&_.normalMapType===yo&&lg(_.normalMap.format),metalnessMap:Qt,roughnessMap:en,anisotropy:tn,anisotropyMap:Be,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:nn,diffuseRoughnessMap:ne,dispersion:lt,retroreflection:ct,iridescence:pe,iridescenceMap:K,iridescenceThicknessMap:re,sheen:gt,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:$,specularColorMap:oe,specularIntensityMap:R,transmission:Le,transmissionMap:J,thicknessMap:X,gradientMap:le,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ae,combine:_.combine,mapUv:Ie&&d(_.map.channel),aoMapUv:$e&&d(_.aoMap.channel),lightMapUv:rt&&d(_.lightMap.channel),bumpMapUv:Vt&&d(_.bumpMap.channel),normalMapUv:dt&&d(_.normalMap.channel),displacementMapUv:Mn&&d(_.displacementMap.channel),emissiveMapUv:bt&&d(_.emissiveMap.channel),metalnessMapUv:Qt&&d(_.metalnessMap.channel),roughnessMapUv:en&&d(_.roughnessMap.channel),anisotropyMapUv:Be&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(_.sheenRoughnessMap.channel),specularMapUv:$&&d(_.specularMap.channel),specularColorMapUv:oe&&d(_.specularColorMap.channel),specularIntensityMapUv:R&&d(_.specularIntensityMap.channel),transmissionMapUv:J&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:se&&d(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(dt||tn),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!C.attributes.uv&&(Ie||se),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:we,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(S,_),f(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function f(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let S=u[_.type],N;if(S){let I=In[S];N=zh.clone(I.uniforms)}else N=_.uniforms;return N}function E(_,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new ag(i,S,_,s),c.push(N),h.set(S,N)),N}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function hg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,m,f){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:f},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=g,y.materialVariant=a(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=f),e++,y}function l(u,d,g,v,m,f,y){y.reversedDepth===!0&&(m=-m);let E=o(u,d,g,v,m,f);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,d,g,v,m,f){let y=o(u,d,g,v,m,f);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||ug),n.length>1&&n.sort(d||au),s.length>1&&s.sort(d||au)}function p(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function dg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ou,i.set(n,[a])):s>=r.length?(a=new ou,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mg=0;function gg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _g(i){let e=new fg,t=pg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new tt,a=new tt;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,y=0,E=0,b=0,A=0,T=0,_=0,S=0,N=0,I=0;c.sort(gg);for(let F=0,V=c.length;F<V;F++){let C=c[F],G=C.color,q=C.intensity,O=C.distance,Q=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pi?Q=C.shadow.map.texture:Q=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*q,p+=G.g*q,u+=G.b*q;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],q);I++}else if(C.isSunLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,ee=t.get(C);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=Q;let we=j.getViewportCount();for(let Ue=0;Ue<we;Ue++)n.sunShadowMatrix[v+Ue]=j.getMatrix(Ue),n.sunShadowCascade[v+Ue]=j._cascadeData[Ue];v+=we,g++}n.sun[d]=W,d++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,ee=t.get(C);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=W,m++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=O,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[y]=W;let j=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,j.updateMatrices(C),C.castShadow&&N++),n.spotLightMatrix[y]=j.matrix,C.castShadow){let ee=t.get(C);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=Q,_++}y++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=W,E++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let j=C.shadow,ee=t.get(C);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=Q,n.pointShadowMatrix[f]=C.shadow.matrix,T++}n.point[f]=W,f++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(q),W.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[b]=W,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==y||U.rectAreaLength!==E||U.hemiLength!==b||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==_||U.numSpotMaps!==S||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,U.sunLength=d,U.directionalLength=m,U.pointLength=f,U.spotLength=y,U.rectAreaLength=E,U.hemiLength=b,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=_,U.numSpotMaps=S,U.numLightProbes=I,n.version=mg++)}function l(c,h){let p=0,u=0,d=0,g=0,v=0,m=0,f=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let b=c[y];if(b.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),p++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),u++}else if(b.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),d++}else if(b.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function lu(i){let e=new _g(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new lu(i),e.set(s,[o])):r>=a.length?(o=new lu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`,Mg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],bg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],cu=new tt,pr=new P,Zl=new P;function Sg(i,e,t){let n=new ri,s=new ge,r=new ge,a=new ht,o=new ya,l=new Ma,c={},h=t.maxTextureSize,p={[fi]:Ht,[Ht]:fi,[Rn]:Rn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:vg,fragmentShader:yg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let f=this.type;this.render=function(T,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===sh&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let N=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ri),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=f!==this.type;V&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=T.length;C<G;C++){let q=T[C],O=q.shadow;if(O===void 0){Pe("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Q=O.getFrameExtents();s.multiply(Q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===hs){if(q.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $t(s.x,s.y,{format:pi,type:xn,minFilter:At,magFilter:At,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new Xn(s.x,s.y,_n),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=Gn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt}else q.isPointLight?(O.map=new gr(s.x),O.map.depthTexture=new Xs(s.x,gn)):(O.map=new $t(s.x,s.y),O.map.depthTexture=new Xn(s.x,s.y,gn)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=Gn,this.type===sr?(O.map.depthTexture.compareFunction=W?Ul:Dl,O.map.depthTexture.minFilter=At,O.map.depthTexture.magFilter=At):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let j=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,S);let ee=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let we=0;we<j;we++){let Ue=O.getCamera(we);if(q.isPointLight){let Z=O.camera,me=O.matrix,Me=q.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),pr.setFromMatrixPosition(q.matrixWorld),Z.position.copy(pr),Zl.copy(Z.position),Zl.add(Mg[we]),Z.up.copy(bg[we]),Z.lookAt(Zl),Z.updateMatrixWorld(),me.makeTranslation(-pr.x,-pr.y,-pr.z),cu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(cu,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,we),i.clear();else{we===0&&(i.setRenderTarget(O.map),i.clear());let Z=O.getViewport(we);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}n=O.getFrustum(we),b(_,S,Ue,q,ee,this.type)}O.isPointLightShadow!==!0&&this.type===hs&&y(O,S),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(N,I,U)};function y(T,_){let S=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(s.x,s.y,{format:pi,type:xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,S,d,v,null)}function E(T,_,S,N){let I=null,U=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)I=U;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=I.uuid,V=_.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let G=C[V];G===void 0&&(G=I.clone(),C[V]=G,_.addEventListener("dispose",A)),I=G}if(I.visible=_.visible,I.wireframe=_.wireframe,N===hs?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:p[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=S}return I}function b(T,_,S,N,I,U){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===hs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let C=e.update(T),G=T.material;if(Array.isArray(G)){let q=C.groups;for(let O=0,Q=q.length;O<Q;O++){let W=q[O],j=G[W.materialIndex];if(j&&j.visible){let ee=E(T,j,N,U);T.onBeforeShadow(i,T,_,S,C,ee,W),i.renderBufferDirect(S,null,C,ee,T,W),T.onAfterShadow(i,T,_,S,C,ee,W)}}}else if(G.visible){let q=E(T,G,N,U);T.onBeforeShadow(i,T,_,S,C,q,null),i.renderBufferDirect(S,null,C,q,T,null),T.onAfterShadow(i,T,_,S,C,q,null)}}let V=T.children;for(let C=0,G=V.length;C<G;C++)b(V[C],_,S,N,I,U)}function A(T){T.target.removeEventListener("dispose",A);for(let S in c){let N=c[S],I=T.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function Eg(i,e){function t(){let R=!1,J=new ht,X=null,le=new ht(0,0,0,0);return{setMask:function(se){X!==se&&!R&&(i.colorMask(se,se,se,se),X=se)},setLocked:function(se){R=se},setClear:function(se,ae,Ae,Ge,ie){ie===!0&&(se*=Ge,ae*=Ge,Ae*=Ge),J.set(se,ae,Ae,Ge),le.equals(J)===!1&&(i.clearColor(se,ae,Ae,Ge),le.copy(J))},reset:function(){R=!1,X=null,le.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,X=null,le=null,se=null;return{setReversed:function(ae){if(J!==ae){let Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),J=ae;let Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return J},setTest:function(ae){ae?_e(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(ae){X!==ae&&!R&&(i.depthMask(ae),X=ae)},setFunc:function(ae){if(J&&(ae=Oh[ae]),le!==ae){switch(ae){case $r:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){R=ae},setClear:function(ae){se!==ae&&(se=ae,J&&(ae=1-ae),i.clearDepth(ae))},reset:function(){R=!1,X=null,le=null,se=null,J=!1}}}function s(){let R=!1,J=null,X=null,le=null,se=null,ae=null,Ae=null,Ge=null,ie=null;return{setTest:function(Ce){R||(Ce?_e(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!R&&(i.stencilMask(Ce),J=Ce)},setFunc:function(Ce,He,xe){(X!==Ce||le!==He||se!==xe)&&(i.stencilFunc(Ce,He,xe),X=Ce,le=He,se=xe)},setOp:function(Ce,He,xe){(ae!==Ce||Ae!==He||Ge!==xe)&&(i.stencilOp(Ce,He,xe),ae=Ce,Ae=He,Ge=xe)},setLocked:function(Ce){R=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){R=!1,J=null,X=null,le=null,se=null,ae=null,Ae=null,Ge=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,g=[],v=null,m=!1,f=null,y=null,E=null,b=null,A=null,T=null,_=null,S=new De(0,0,0),N=0,I=!1,U=null,F=null,V=null,C=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let j=null,ee={},we=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Z=new ht().fromArray(we),me=new ht().fromArray(Ue);function Me(R,J,X,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(R,ae),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<X;Ae++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(J+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Re={};Re[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(ji),Vt(!1),dt(fl),_e(i.CULL_FACE),$e(Ri);function _e(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Oe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ut(R,J){return u[R]!==J?(i.bindFramebuffer(R,J),u[R]=J,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(R,J){let X=g,le=!1;if(R){X=d.get(J),X===void 0&&(X=[],d.set(J,X));let se=R.textures;if(X.length!==se.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ae=se.length;ae<Ae;ae++)X[ae]=i.COLOR_ATTACHMENT0+ae;X.length=se.length,le=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,le=!0);le&&i.drawBuffers(X)}function je(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let ce={[Ci]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};ce[lh]=i.MIN,ce[ch]=i.MAX;let fe={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(R,J,X,le,se,ae,Ae,Ge,ie,Ce){if(R===Ri){m===!0&&(Oe(i.BLEND),m=!1);return}if(m===!1&&(_e(i.BLEND),m=!0),R!==rh){if(R!==f||Ce!==I){if((y!==Ci||A!==Ci)&&(i.blendEquation(i.FUNC_ADD),y=Ci,A=Ci),Ce)switch(R){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",R);break}else switch(R){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pl:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",R);break}E=null,b=null,T=null,_=null,S.set(0,0,0),N=0,f=R,I=Ce}return}se=se||J,ae=ae||X,Ae=Ae||le,(J!==y||se!==A)&&(i.blendEquationSeparate(ce[J],ce[se]),y=J,A=se),(X!==E||le!==b||ae!==T||Ae!==_)&&(i.blendFuncSeparate(fe[X],fe[le],fe[ae],fe[Ae]),E=X,b=le,T=ae,_=Ae),(Ge.equals(S)===!1||ie!==N)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ie),S.copy(Ge),N=ie),f=R,I=!1}function rt(R,J){R.side===Rn?Oe(i.CULL_FACE):_e(i.CULL_FACE);let X=R.side===Ht;J&&(X=!X),Vt(X),R.blending===us&&R.transparent===!1?$e(Ri):$e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let le=R.stencilWrite;o.setTest(le),le&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),bt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function dt(R){R!==nh?(_e(i.CULL_FACE),R!==F&&(R===fl?i.cullFace(i.BACK):R===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),F=R}function Mn(R){R!==V&&(O&&i.lineWidth(R),V=R)}function bt(R,J,X){R?(_e(i.POLYGON_OFFSET_FILL),(C!==J||G!==X)&&(C=J,G=X,a.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Oe(i.POLYGON_OFFSET_FILL)}function Qt(R){R?_e(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function en(R){R===void 0&&(R=i.TEXTURE0+q-1),j!==R&&(i.activeTexture(R),j=R)}function tn(R,J,X){X===void 0&&(j===null?X=i.TEXTURE0+q-1:X=j);let le=ee[X];le===void 0&&(le={type:void 0,texture:void 0},ee[X]=le),(le.type!==R||le.texture!==J)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(R,J||Re[R]),le.type=R,le.texture=J)}function D(){let R=ee[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function nn(){try{i.compressedTexImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function lt(){try{i.compressedTexImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function ct(){try{i.texSubImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function pe(){try{i.texSubImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function Be(){try{i.texStorage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function k(){try{i.texImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function ne(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function K(R,J){p[R]!==J&&(i.pixelStorei(R,J),p[R]=J)}function re(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ue(R){me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Y(R,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let le=X.get(R);le===void 0&&(le=i.getUniformBlockIndex(J,R.name),i.uniformBlockBinding(J,le,le),X.set(R,le))}function $(R,J,X){let se=c.get(J).get(R);l[se]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,X),l[se]=X)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,ee={},u={},l={},d=new WeakMap,g=[],v=null,m=!1,f=null,y=null,E=null,b=null,A=null,T=null,_=null,S=new De(0,0,0),N=0,I=!1,U=null,F=null,V=null,C=null,G=null,Z.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Oe,bindFramebuffer:ut,drawBuffers:Ie,useProgram:je,setBlending:$e,setMaterial:rt,setFlipSided:Vt,setCullFace:dt,setLineWidth:Mn,setPolygonOffset:bt,setScissorTest:Qt,activeTexture:en,bindTexture:tn,unbindTexture:D,compressedTexImage2D:nn,compressedTexImage3D:lt,texImage2D:x,texImage3D:k,pixelStorei:K,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Be,texStorage3D:w,texSubImage2D:ct,texSubImage3D:pe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Le,scissor:re,viewport:ue,reset:oe}}function wg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,p=new Set,u,d=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,x){return m?new OffscreenCanvas(w,x):Us("canvas")}function y(w,x,k){let ne=1,K=Be(w);if((K.width>k||K.height>k)&&(ne=k/Math.max(K.width,K.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let re=Math.floor(ne*K.width),ue=Math.floor(ne*K.height);u===void 0&&(u=f(re,ue));let Y=x?f(re,ue):u;return Y.width=re,Y.height=ue,Y.getContext("2d").drawImage(w,0,0,re,ue),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+re+"x"+ue+")."),Y}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function E(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,k,ne,K,re=!1){if(w!==null){if(i[w]!==void 0)return i[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),k===i.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),k===i.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),k===i.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let $=re?Ds:Ye.getTransfer(K);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=$===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),k===i.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,x){let k;return w?x===null||x===gn||x===Ii?k=i.DEPTH24_STENCIL8:x===_n?k=i.DEPTH32F_STENCIL8:x===fs&&(k=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gn||x===Ii?k=i.DEPTH_COMPONENT24:x===_n?k=i.DEPTH_COMPONENT32F:x===fs&&(k=i.DEPTH_COMPONENT16),k}function S(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){let x=new WeakRef(w);n.get(w).__ref=x,g.add(x),v.register(w,x,x)}function I(w){let x=n.get(w).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function U(w){V(w.target)}function F(w){C(w.target)}function V(w){w.removeEventListener("dispose",U),I(w),q(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&p.delete(w)}function C(w){w.removeEventListener("dispose",F),I(w),Q(w)}function G(){for(let w of g){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):V(x))}g.clear(),p.clear()}function q(w){let x=n.get(w);if(x.__webglInit===void 0)return;let k=w.source,ne=d.get(k);if(ne){let K=ne[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&O(w),Object.keys(ne).length===0&&d.delete(k)}n.remove(w)}function O(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let k=w.source,ne=d.get(k);delete ne[x.__cacheKey],a.memory.textures--}function Q(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let k=w.depthTexture;if(k&&k.renderTarget===w&&V(k),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let re=0;re<x.__webglFramebuffer[K].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[K][re]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ne=w.textures;for(let K=0,re=ne.length;K<re;K++){let ue=n.get(ne[K]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[K])}n.remove(w)}let W=0;function j(){W=0}function ee(){return W}function we(w){W=w}function Ue(){let w=W;return w>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function Z(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function me(w,x){let k=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){let ne=w.image;if(ne===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(k,w,x);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Me(w,x){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){rt(k,w,x);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function Re(w,x){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){rt(k,w,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function _e(w,x){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Vt(k,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let Oe={[Ei]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ut={[Tt]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ie={[Ch]:i.NEVER,[Nl]:i.ALWAYS,[Ph]:i.LESS,[Dl]:i.LEQUAL,[Ih]:i.EQUAL,[Ul]:i.GEQUAL,[Lh]:i.GREATER,[Dh]:i.NOTEQUAL};function je(w,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===Fa||x.magFilter===or||x.magFilter===Yn||x.minFilter===At||x.minFilter===Fa||x.minFilter===or||x.minFilter===Yn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Oe[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Oe[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Oe[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==or&&x.minFilter!==Yn||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ce(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",U),N(x));let ne=x.source,K=d.get(ne);K===void 0&&(K={},d.set(ne,K));let re=Z(x);if(re!==w.__cacheKey){K[re]===void 0&&(K[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[re].usedTimes++;let ue=K[w.__cacheKey];ue!==void 0&&(K[w.__cacheKey].usedTimes--,ue.usedTimes===0&&O(x)),w.__cacheKey=re,w.__webglTexture=K[re].texture}return k}function fe(w,x,k){return Math.floor(Math.floor(w/k)/x)}function $e(w,x,k,ne){let re=w.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,ne,x.data);else{re.sort((R,J)=>R.start-J.start);let ue=0;for(let R=1;R<re.length;R++){let J=re[ue],X=re[R],le=J.start+J.count,se=fe(X.start,x.width,4),ae=fe(J.start,x.width,4);X.start<=le+1&&se===ae&&fe(X.start+X.count-1,x.width,4)===se?J.count=Math.max(J.count,X.start+X.count-J.start):(++ue,re[ue]=X)}re.length=ue+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=re.length;R<J;R++){let X=re[R],le=Math.floor(X.start/4),se=Math.ceil(X.count/4),ae=le%x.width,Ae=Math.floor(le/x.width),Ge=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,ae,Ae,Ge,ie,k,ne,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function rt(w,x,k){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);let K=ce(w,x),re=x.source;t.bindTexture(ne,w.__webglTexture,i.TEXTURE0+k);let ue=n.get(re);if(re.version!==ue.__version||K===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=Ye.getPrimaries(Ye.workingColorSpace),Ce=x.colorSpace===$n?null:Ye.getPrimaries(x.colorSpace),He=x.colorSpace===$n||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=y(x.image,!1,s.maxTextureSize);$=Le(x,$);let oe=r.convert(x.format,x.colorSpace),R=r.convert(x.type),J=T(x.internalFormat,oe,R,x.normalized,x.colorSpace,x.isVideoTexture);je(ne,x);let X,le=x.mipmaps,se=x.isVideoTexture!==!0,ae=ue.__version===void 0||K===!0,Ae=re.dataReady,Ge=S(x,$);if(x.isDepthTexture)J=_(x.format===Zn,x.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,J,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,J,$.width,$.height,0,oe,R,null));else if(x.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,Ge,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,R,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,R,X.data);x.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,Ge,J,$.width,$.height),Ae&&$e(x,$,oe,R)):t.texImage2D(i.TEXTURE_2D,0,J,$.width,$.height,0,oe,R,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,le[0].width,le[0].height,$.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(X=le[ie],x.format!==vn)if(oe!==null)if(se){if(Ae)if(x.layerUpdates.size>0){let He=ql(X.width,X.height,x.format,x.type);for(let xe of x.layerUpdates){let et=X.data.subarray(xe*He/X.data.BYTES_PER_ELEMENT,(xe+1)*He/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,xe,X.width,X.height,1,oe,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,$.depth,oe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,$.depth,0,X.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,$.depth,oe,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,$.depth,0,oe,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,Ge,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],x.format!==vn?oe!==null?se?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,X.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,R,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,R,X.data)}else if(x.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,$.width,$.height,$.depth),Ae)if(x.layerUpdates.size>0){let ie=ql($.width,$.height,x.format,x.type);for(let Ce of x.layerUpdates){let He=$.data.subarray(Ce*ie/$.data.BYTES_PER_ELEMENT,(Ce+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,oe,R,He)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,R,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,$.width,$.height,$.depth,0,oe,R,$.data);else if(x.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,Ge,J,$.width,$.height,$.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,R,$.data)):t.texImage3D(i.TEXTURE_3D,0,J,$.width,$.height,$.depth,0,oe,R,$.data);else if(x.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,Ge,J,$.width,$.height);else{let ie=$.width,Ce=$.height;for(let He=0;He<Ge;He++)t.texImage2D(i.TEXTURE_2D,He,J,ie,Ce,0,oe,R,null),ie>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),p.add(x),ie.onpaint=Ce=>{let He=Ce.changedElements;for(let xe of p)He.includes(xe.image)&&(xe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let He=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,xe,et,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=Be(le[0]);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,R,X):t.texImage2D(i.TEXTURE_2D,ie,J,oe,R,X);x.generateMipmaps=!1}else if(se){if(ae){let ie=Be($);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,R,$)}else t.texImage2D(i.TEXTURE_2D,0,J,oe,R,$);E(x)&&x.mipmapsAutoUpdate===!0&&b(ne),ue.__version=re.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Vt(w,x,k){if(x.image.length!==6)return;let ne=ce(w,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let re=n.get(K);if(K.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+k);let ue=Ye.getPrimaries(Ye.workingColorSpace),Y=x.colorSpace===$n?null:Ye.getPrimaries(x.colorSpace),$=x.colorSpace===$n||ue===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let xe=0;xe<6;xe++)!oe&&!R?J[xe]=y(x.image[xe],!0,s.maxCubemapSize):J[xe]=R?x.image[xe].image:x.image[xe],J[xe]=Le(x,J[xe]);let X=J[0],le=r.convert(x.format,x.colorSpace),se=r.convert(x.type),ae=T(x.internalFormat,le,se,x.normalized,x.colorSpace),Ae=x.isVideoTexture!==!0,Ge=re.__version===void 0||ne===!0,ie=K.dataReady,Ce=S(x,X);je(i.TEXTURE_CUBE_MAP,x);let He;if(x.isDepthTexture){if(ae=_(x.format===Zn,x.type),Ge)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,X.width,X.height,0,le,se,null)}else if(oe){Ae&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,X.width,X.height);for(let xe=0;xe<6;xe++){He=J[xe].mipmaps;for(let et=0;et<He.length;et++){let St=He[et];x.format!==vn?le!==null?Ae?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,St.width,St.height,le,St.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,ae,St.width,St.height,0,St.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,St.width,St.height,le,se,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,ae,St.width,St.height,0,le,se,St.data)}}}else{if(He=x.mipmaps,Ae&&Ge){He.length>0&&Ce++;let xe=Be(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(R){Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,J[xe].width,J[xe].height,le,se,J[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,J[xe].width,J[xe].height,0,le,se,J[xe].data);for(let et=0;et<He.length;et++){let Jn=He[et].image[xe].image;Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Jn.width,Jn.height,le,se,Jn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,ae,Jn.width,Jn.height,0,le,se,Jn.data)}}else{Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,le,se,J[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,le,se,J[xe]);for(let et=0;et<He.length;et++){let St=He[et];Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,le,se,St.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,ae,le,se,St.image[xe])}}}E(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),re.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function dt(w,x,k,ne,K,re){let ue=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),$=T(k.internalFormat,ue,Y,k.normalized,k.colorSpace),oe=n.get(x),R=n.get(k);if(R.__renderTarget=x,!oe.__hasExternalTextures){let J=Math.max(1,x.width>>re),X=Math.max(1,x.height>>re);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,re,$,J,X,x.depth,0,ue,Y,null):t.texImage2D(K,re,$,J,X,0,ue,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,K,R.__webglTexture,0,ct(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,K,R.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mn(w,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let ne=x.depthTexture,K=ne&&ne.isDepthTexture?ne.type:null,re=_(x.stencilBuffer,K),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),re,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,w)}else{let ne=x.textures;for(let K=0;K<ne.length;K++){let re=ne[K],ue=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),$=T(re.internalFormat,ue,Y,re.normalized,re.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),$,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(w,x,k){let ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let re=ne?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),ne?_e(x.depthTexture,0):me(x.depthTexture,0);let ue=K.__webglTexture,Y=ct(x),$=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,oe=x.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,ue,0);else if(x.depthTexture.format===Zn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(w){let x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let ne=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",K)};ne.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=ne}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)bt(x.__webglFramebuffer[ne],w,ne);else w.texture.mipmaps.length>0?bt(x.__webglFramebuffer[0],w,0):bt(x.__webglFramebuffer,w,0);else if(k){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=i.createRenderbuffer(),Mn(x.__webglDepthbuffer[ne],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,re)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Mn(x.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function en(w,x,k){let ne=n.get(w);x!==void 0&&dt(ne.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Qt(w)}function tn(w){let x=w.texture,k=n.get(w),ne=n.get(x);w.addEventListener("dispose",F),N(w);let K=w.textures,re=w.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[Y][$]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Y=0,$=K.length;Y<$;Y++){let oe=n.get(K[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let $=K[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);let oe=r.convert($.format,$.colorSpace),R=r.convert($.type),J=T($.internalFormat,oe,R,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),X=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Mn(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)dt(k.__webglFramebuffer[Y][$],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else dt(k.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Y=0,$=K.length;Y<$;Y++){let oe=K[Y],R=n.get(oe),J=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),je(J,oe),dt(k.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+Y,J,0),E(oe)&&b(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ne.__webglTexture),je(Y,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)dt(k.__webglFramebuffer[$],w,x,i.COLOR_ATTACHMENT0,Y,$);else dt(k.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Y,0);E(x)?b(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Qt(w)}function D(w){let x=w.textures;for(let k=0,ne=x.length;k<ne;k++){let K=x[k];if(E(K)&&K.mipmapsAutoUpdate===!0){let re=A(w),ue=n.get(K).__webglTexture;t.bindTexture(re,ue),b(re),t.unbindTexture()}}}let nn=[];function lt(w){if(w.samples>0){if(pe(w)===!1){let x=w.textures,k=w.width,ne=w.height,K=i.COLOR_BUFFER_BIT,re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(w),Y=x.length>1;if(Y)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let R=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,k,ne,0,0,k,ne,K,i.NEAREST),l===!0&&(nn.length=0,nn.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&nn.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let R=n.get(x[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(w){return Math.min(s.maxSamples,w.samples)}function pe(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function gt(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Le(w,x){let k=w.colorSpace,ne=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Ls&&k!==$n&&(Ye.getTransfer(k)===Qe?(ne!==vn||K!==Wt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",k)),x}function Be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=we,this.setTexture2D=me,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=_e,this.rebindTextures=en,this.setupRenderTarget=tn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=pe,this.dispose=G}function Tg(i,e){function t(n,s=$n){let r,a=Ye.getTransfer(s);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Il)return i.RGB;if(n===vn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===za)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===dr||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===xo||n===fr||n===vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:Ag,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nc=class extends pn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new tc,f={},y=t.getContextAttributes(),E=null,b=null,A=[],T=[],_=new ge,S=null,N=null,I=new kt;I.viewport=new ht;let U=new kt;U.viewport=new ht;let F=[I,U],V=new Da,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=A[Z];return me===void 0&&(me=new ss,A[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=A[Z];return me===void 0&&(me=new ss,A[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=A[Z];return me===void 0&&(me=new ss,A[Z]=me),me.getHandSpace()};function q(Z){let me=T.indexOf(Z.inputSource);if(me===-1)return;let Me=A[me];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<A.length;Z++){let me=T[Z];me!==null&&(T[Z]=null,A[Z].disconnect(me))}C=null,G=null,m.reset();for(let Z in f)delete f[Z];if(e.setRenderTarget(E),d=null,u=null,p=null,s=null,b=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?Zn:Gn,Re=y.stencil?Ii:gn);let Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new $t(u.textureWidth,u.textureHeight,{format:vn,type:Wt,depthTexture:new Xn(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $t(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let me=0;me<Z.removed.length;me++){let Me=Z.removed[me],Re=T.indexOf(Me);Re>=0&&(T[Re]=null,A[Re].disconnect(Me))}for(let me=0;me<Z.added.length;me++){let Me=Z.added[me],Re=T.indexOf(Me);if(Re===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(Me),Re=Oe;break}else if(T[Oe]===null){T[Oe]=Me,Re=Oe;break}if(Re===-1)break}let _e=A[Re];_e&&_e.connect(Me)}}function W(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let me=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),V.near=U.near=I.near=me,V.far=U.far=I.far=Me,(C!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,G=V.far),V.layers.mask=Z.layers.mask|6,I.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Re=Z.parent,_e=V.cameras;W(V,Re);for(let Oe=0;Oe<_e.length;Oe++)W(_e[Oe],Re);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,V,Re)};function j(Z,me,Me){Me===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return f[Z]};let ee=null;function we(Z,me){if(h=me.getViewerPose(c||a),g=me,h!==null){let Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Re=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Re=!0);for(let Ie=0;Ie<Me.length;Ie++){let je=Me[Ie],ce=null;if(d!==null)ce=d.getViewport(je);else{let $e=p.getViewSubImage(u,je);ce=$e.viewport,Ie===0&&(e.setRenderTargetTextures(b,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(b))}let fe=F[Ie];fe===void 0&&(fe=new kt,fe.layers.enable(Ie),fe.viewport=new ht,F[Ie]=fe),fe.matrix.fromArray(je.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(je.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ce.x,ce.y,ce.width,ce.height),Ie===0&&(V.matrix.copy(fe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Re===!0&&V.cameras.push(fe)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let Ie=p.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,s.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let Ie=0;Ie<Me.length;Ie++){let je=Me[Ie].camera;if(je){let ce=f[je];ce||(ce=new qs,f[je]=ce);let fe=p.getCameraImage(je);ce.sourceTexture=fe}}}}for(let Me=0;Me<A.length;Me++){let Re=T[Me],_e=A[Me];Re!==null&&_e!==void 0&&_e.update(Re,me,c||a)}ee&&ee(Z,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Ue=new hu;Ue.setAnimationLoop(we),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},Cg=new tt,yu=new Fe;yu.set(-1,0,0,0,1,0,0,0,1);function Pg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,E,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),E=y.envMap,b=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ig(i,e,t,n){let s={},r={};function a(y,E){let b=E.program;n.uniformBlockBinding(y,b,s[y.id])}function o(y,E){let b=s[y.id];b===void 0&&(g(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(y,A);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let E=i.createBuffer(),b=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],b=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=b.length;T<_;T++){let S=b[T];if(Array.isArray(S))for(let N=0,I=S.length;N<I;N++)h(S[N],T,N,A);else h(S,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,b,A){if(u(y,E,b,A)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let N=0;N<_.length;N++){let I=_[N],U=v(I,!0);p(I,y.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function p(y,E,b){typeof y=="number"||typeof y=="boolean"?E[b]=y:y.isMatrix3?(E[b]=y.elements[0],E[b+1]=y.elements[1],E[b+2]=y.elements[2],E[b+3]=0,E[b+4]=y.elements[3],E[b+5]=y.elements[4],E[b+6]=y.elements[5],E[b+7]=0,E[b+8]=y.elements[6],E[b+9]=y.elements[7],E[b+10]=y.elements[8],E[b+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-b),b):y.toArray(E,b)}function u(y,E,b,A){let T=y.value,_=E+"_"+b;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let S=A[_],N=!1;for(let I=0;I<T.length;I++)d(T[I],S,I)===!0&&(N=!0);return N}return d(T,A,_)}function d(y,E,b){if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let A=E[b];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(y){let E=y.uniforms,b=0,A=16;for(let _=0,S=E.length;_<S;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,U=N.length;I<U;I++){let F=N[I],V=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(E[_])||Array.isArray(F.value),G=b;for(let O=0,Q=V.length;O<Q;O++){let W=V[O],j=v(W,C),ee=b%A,we=ee%j.boundary,Ue=ee+we;b+=we,Ue!==0&&A-Ue<j.storage&&(b+=A-Ue),O===0&&(G=b),b+=j.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((b-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let T=b%A;return T>0&&(b+=A-T),y.__size=b,y.__cache={},this}function v(y,E){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let E=y.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:f}}var Lg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Dg(){return Pn===null&&(Pn=new la(Lg,16,16,pi,xn),Pn.name="DFG_LUT",Pn.minFilter=At,Pn.magFilter=At,Pn.wrapS=Sn,Pn.wrapT=Sn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var wo=class{constructor(e={}){let{canvas:t=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Wt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,m=new Set([Ga,Ha,za]),f=new Set([Wt,gn,fs,Ii,Ba,ka]),y=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,V=null,C=null,G=null;this._outputColorSpace=_t;let q=0,O=0,Q=null,W=-1,j=null,ee=new ht,we=new ht,Ue=null,Z=new De(0),me=0,Me=t.width,Re=t.height,_e=1,Oe=null,ut=null,Ie=new ht(0,0,Me,Re),je=new ht(0,0,Me,Re),ce=!1,fe=new ri,$e=new ca,rt=!1,Vt=!1,dt=new tt,Mn=new P,bt=new ht,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},en=!1;function tn(){return Q===null?_e:1}let D=n;function nn(M,L){return t.getContext(M,L)}let lt,ct,pe,gt,Le,Be,w,x,k,ne,K,re,ue,Y,$,oe,R,J,X,le,se,ae,Ae;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){let L="webgl2";if(D=nn(L,M),D===null)throw nn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(M){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ne("WebGLRenderer: "+M.message),M}function Ge(){lt=new Wm(D),lt.init(),se=new Tg(D,lt),ct=new Dm(D,lt,e,se),pe=new Eg(D,lt),ct.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),V=D.createFramebuffer(),C=D.createFramebuffer(),G=D.createFramebuffer(),gt=new Ym(D),Le=new hg,Be=new wg(D,lt,pe,Le,ct,se,gt),w=new Vm(I),x=new Zd(D),ae=new Im(D,x),k=new Xm(D,x,gt,ae),ne=new $m(D,k,x,ae,gt),J=new Zm(D,ct,Be),$=new Um(Le),K=new cg(I,w,lt,ct,ae,$),re=new Pg(I,Le),ue=new dg,Y=new xg(lt),R=new Pm(I,w,pe,ne,g,l),oe=new Sg(I,ne,ct),Ae=new Ig(D,gt,ct,pe),X=new Lm(D,lt,gt),le=new qm(D,lt,gt),gt.programs=K.programs,I.capabilities=ct,I.extensions=lt,I.properties=Le,I.renderLists=ue,I.shadowMap=oe,I.state=pe,I.info=gt}v!==Wt&&(N=new Km(v,t.width,t.height,o,s,r));let ie=new nc(I,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(M){M!==void 0&&(_e=M,this.setSize(Me,Re,!1))},this.getSize=function(M){return M.set(Me,Re)},this.setSize=function(M,L,H=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Re=L,t.width=Math.floor(M*_e),t.height=Math.floor(L*_e),H===!0&&(t.style.width=M+"px",t.style.height=L+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Me*_e,Re*_e).floor()},this.setDrawingBufferSize=function(M,L,H){Me=M,Re=L,_e=H,t.width=Math.floor(M*H),t.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(v===Wt){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,L,H,B){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,L,H,B),pe.viewport(ee.copy(Ie).multiplyScalar(tn()).round())},this.getScissor=function(M){return M.copy(je)},this.setScissor=function(M,L,H,B){M.isVector4?je.set(M.x,M.y,M.z,M.w):je.set(M,L,H,B),pe.scissor(we.copy(je).multiplyScalar(tn()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){pe.setScissorTest(ce=M)},this.setOpaqueSort=function(M){Oe=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,H=!0){let B=0;if(M){let z=!1;if(Q!==null){let de=Q.texture.format;z=m.has(de)}if(z){let de=Q.texture.type,be=f.has(de),he=R.getClearColor(),ye=R.getClearAlpha(),Te=he.r,ke=he.g,Xe=he.b;be?(y[0]=Te,y[1]=ke,y[2]=Xe,y[3]=ye,D.clearBufferuiv(D.COLOR,0,y)):(E[0]=Te,E[1]=ke,E[2]=Xe,E[3]=ye,D.clearBufferiv(D.COLOR,0,E))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),R.dispose(),ue.dispose(),Y.dispose(),Be.dispose(),Le.dispose(),w.dispose(),ne.dispose(),k.dispose(),ae.dispose(),Ae.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",dc),ie.removeEventListener("sessionend",fc),_i.stop()};function Ce(M){M.preventDefault(),Ns("WebGLRenderer: Context Lost."),U=!0}function He(){Ns("WebGLRenderer: Context Restored."),U=!1;let M=gt.autoReset,L=oe.enabled,H=oe.autoUpdate,B=oe.needsUpdate,z=oe.type;Ge(),gt.autoReset=M,oe.enabled=L,oe.autoUpdate=H,oe.needsUpdate=B,oe.type=z}function xe(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function et(M){let L=M.target;L.removeEventListener("dispose",et),St(L)}function St(M){Jn(M),Le.remove(M)}function Jn(M){let L=Le.get(M).programs;L!==void 0&&(L.forEach(function(H){K.releaseProgram(H)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,B,z,de){L===null&&(L=Qt);let be=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=Hu(M,L,H,B,z);pe.setMaterial(B,be);let ye=H.index,Te=1;if(B.wireframe===!0){if(ye=k.getWireframeAttribute(H),ye===void 0)return;Te=2}let ke=H.drawRange,Xe=H.attributes.position,Se=ke.start*Te,qe=(ke.start+ke.count)*Te;de!==null&&(Se=Math.max(Se,de.start*Te),qe=Math.min(qe,(de.start+de.count)*Te)),ye!==null?(Se=Math.max(Se,0),qe=Math.min(qe,ye.count)):Xe!=null&&(Se=Math.max(Se,0),qe=Math.min(qe,Xe.count));let pt=qe-Se;if(pt<0||pt===1/0)return;ae.setup(z,B,he,H,ye);let st,it=X;if(ye!==null&&(st=x.get(ye),it=le,it.setIndex(st)),z.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*tn()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(z.isLine){let It=B.linewidth;It===void 0&&(It=1),pe.setLineWidth(It*tn()),z.isLineSegments?it.setMode(D.LINES):z.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else z.isPoints?it.setMode(D.POINTS):z.isSprite&&it.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let It=z._multiDrawStarts,Ee=z._multiDrawCounts,Ft=z._multiDrawCount,Je=ye?x.get(ye).bytesPerElement:1,xi=Le.get(B).currentProgram.getUniforms();for(let Lt=0;Lt<Ft;Lt++)xi.setValue(D,"_gl_DrawID",Lt),it.render(It[Lt]/Je,Ee[Lt])}else if(z.isInstancedMesh)it.renderInstances(Se,pt,z.count);else if(H.isInstancedBufferGeometry){let It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,It);it.renderInstances(Se,pt,Ee)}else it.render(Se,pt)};function uc(M,L,H,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),rt===!0&&$.setState(M,H,!1),M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,_s(M,L,B),M.side=fi,M.needsUpdate=!0,_s(M,L,B),M.side=Rn):_s(M,L,B)}this.compile=function(M,L,H=null){H===null&&(H=M),F!==null&&F.renderStart(M,L,H),T=Y.get(H),T.init(L),S.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Vt=this.localClippingEnabled,rt=$.init(this.clippingPlanes,Vt),rt===!0&&$.setGlobalState(this.clippingPlanes,L),F!==null&&oe.render(T.state.shadowsArray,H,L);let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){let he=de[be];uc(he,H,L,z),B.add(he)}else uc(de,H,L,z),B.add(de)}),T=S.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,L,H=null){let B=this.compile(M,L,H);return new Promise(z=>{function de(){if(B.forEach(function(be){let ye=Le.get(be).currentProgram;(ye===void 0||ye.isReady())&&B.delete(be)}),B.size===0){z(M);return}setTimeout(de,10)}lt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Lo=null;function ku(M){Lo&&Lo(M)}function dc(){_i.stop()}function fc(){_i.start()}let _i=new hu;_i.setAnimationLoop(ku),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(M){Lo=M,ie.setAnimationLoop(M),M===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",dc),ie.addEventListener("sessionend",fc),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,L);let H=ie.enabled===!0&&ie.isPresenting===!0,B=N!==null&&(Q===null||H)&&N.begin(I,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,L,Q),T=Y.get(M,S.length),T.init(L),T.state.textureUnits=Be.getTextureUnits(),S.push(T),dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?$e.setFromArrayCamera(L):fe.setFromProjectionMatrix(dt,rn,L.reversedDepth),Vt=this.localClippingEnabled,rt=$.init(this.clippingPlanes,Vt),A=ue.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let be=I.xr.getDepthSensingMesh();be!==null&&Do(be,L,-1/0,I.sortObjects)}Do(M,L,0,I.sortObjects),A.finish(),F!==null&&F.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(Oe,ut),en=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,en&&R.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),rt===!0&&$.beginShadows();let z=T.state.shadowsArray;if(oe.render(z,M,L),rt===!0&&$.endShadows(),(B&&N.hasRenderPass())===!1){let be=A.opaque,he=A.transmissive;if(T.setupLights(),L.isArrayCamera){let ye=L.cameras;if(he.length>0)for(let Te=0,ke=ye.length;Te<ke;Te++){let Xe=ye[Te];mc(be,he,M,Xe)}en&&R.render(M);for(let Te=0,ke=ye.length;Te<ke;Te++){let Xe=ye[Te];pc(A,M,Xe,Xe.viewport)}}else he.length>0&&mc(be,he,M,L),en&&R.render(M),pc(A,M,L)}Q!==null&&O===0&&(Be.updateMultisampleRenderTarget(Q),Be.updateRenderTargetMipmap(Q)),B&&N.end(I),M.isScene===!0&&M.onAfterRender(I,M,L),ae.resetDefaultState(),W=-1,j=null,S.pop(),S.length>0?(T=S[S.length-1],Be.setTextureUnits(T.state.textureUnits),rt===!0&&$.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function Do(M,L,H,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let be=L.isArrayCamera?$e:fe;if(!M.frustumCulled||M.intersectsFrustum(be)){B&&bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);let he=ne.update(M),ye=M.material;ye.visible&&A.push(M,he,ye,H,bt.z,null,L)}}else if(M.isMesh||M.isLine||M.isPoints){let be=L.isArrayCamera?$e:fe;if(!M.frustumCulled||M.intersectsFrustum(be)){let he=ne.update(M),ye=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),bt.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),bt.copy(he.boundingSphere.center)),bt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(ye)){let Te=he.groups;for(let ke=0,Xe=Te.length;ke<Xe;ke++){let Se=Te[ke],qe=ye[Se.materialIndex];qe&&qe.visible&&A.push(M,he,qe,H,bt.z,Se,L)}}else ye.visible&&A.push(M,he,ye,H,bt.z,null,L)}}}let de=M.children;for(let be=0,he=de.length;be<he;be++)Do(de[be],L,H,B)}function pc(M,L,H,B){let{opaque:z,transmissive:de,transparent:be}=M;T.setupLightsView(H),rt===!0&&$.setGlobalState(I.clippingPlanes,H),B&&pe.viewport(ee.copy(B)),z.length>0&&yr(z,L,H),de.length>0&&yr(de,L,H),be.length>0&&yr(be,L,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function mc(M,L,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Se=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new $t(1,1,{generateMipmaps:!0,type:Se?xn:Wt,minFilter:Yn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let de=T.state.transmissionRenderTarget[B.id],be=B.viewport||ee;de.setSize(be.z*I.transmissionResolutionScale,be.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),ye=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(Z),me=I.getClearAlpha(),me<1&&I.setClearColor(16777215,.5),I.clear(),en&&R.render(H);let ke=I.toneMapping;I.toneMapping=Cn;let Xe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),rt===!0&&$.setGlobalState(I.clippingPlanes,B),yr(M,H,B),Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let qe=0,pt=L.length;qe<pt;qe++){let st=L[qe],{object:it,geometry:It,material:Ee,group:Ft}=st;if(Ee.side===Rn&&it.layers.test(B.layers)){let Je=Ee.side;Ee.side=Ht,Ee.needsUpdate=!0,gc(it,H,B,It,Ee,Ft),Ee.side=Je,Ee.needsUpdate=!0,Se=!0}}Se===!0&&(Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de))}I.setRenderTarget(he,ye,Te),I.setClearColor(Z,me),Xe!==void 0&&(B.viewport=Xe),I.toneMapping=ke}function yr(M,L,H){let B=L.isScene===!0?L.overrideMaterial:null;for(let z=0,de=M.length;z<de;z++){let be=M[z],{object:he,geometry:ye,group:Te}=be,ke=be.material;ke.allowOverride===!0&&B!==null&&(ke=B),he.layers.test(H.layers)&&gc(he,L,H,ye,ke,Te)}}function gc(M,L,H,B,z,de){F!==null&&z.isNodeMaterial&&F.setObject(M,z),M.onBeforeRender(I,L,H,B,z,de),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(I,L,H,B,M,de),z.transparent===!0&&z.side===Rn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,I.renderBufferDirect(H,L,B,z,M,de),z.side=fi,z.needsUpdate=!0,I.renderBufferDirect(H,L,B,z,M,de),z.side=Rn):I.renderBufferDirect(H,L,B,z,M,de),M.onAfterRender(I,L,H,B,z,de)}function _c(M){let L=0;for(let H of M)H.texture!==null&&L++;return L}function _s(M,L,H){L.isScene!==!0&&(L=Qt);let B=Le.get(M),z=T.state.lights,de=T.state.shadowsArray,be=z.state.version,he=K.getParameters(M,z.state,de,L,H,T.state.lightProbeGridArray),ye=K.getProgramCacheKey(he),Te=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=w.get(M.envMap||B.environment,ke),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",et),Te=new Map,B.programs=Te,B.programVariants=new Map);let Xe=Te.get(ye);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===be)return vc(M,he),Xe}else he.uniforms=K.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,H,he),M.onBeforeCompile(he,I),Xe=K.acquireProgram(he,ye),Te.set(ye,Xe),B.uniforms=he.uniforms;let Se=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=$.uniform),vc(M,he),B.needsLights=Vu(M),B.lightsStateVersion=be,B.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=_c(T.state.lightProbeGridArray),B.currentProgram=Xe,B.uniformsList=null,Xe}function zu(M,L,H,B,z){let de=Le.get(M),be=de.currentProgram.id+","+B+","+z,he=de.programVariants.get(be);return he===void 0?(he=_s(M,L,H),de.programVariants.set(be,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=B,de.toneMapping=z),he}function xc(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=ps.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function vc(M,L){let H=Le.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Hu(M,L,H,B,z){L.isScene!==!0&&(L=Qt),Be.resetTextureUnits();let de=L.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,he=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ye.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=w.get(B.envMap||be,ye),ke=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color,st=Cn;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(st=I.toneMapping);let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,It=it!==void 0?it.length:0,Ee=Le.get(B),Ft=T.state.lights;if(rt===!0&&(Vt===!0||M!==j)){let ft=M===j&&B.id===W;$.setState(B,M,ft)}let Je=!1,xi=!1;B.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Te||B.fog===!0&&Ee.fog!==de||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==$.numPlanes||Ee.numIntersection!==$.numIntersection)||Ee.vertexAlphas!==ke||Ee.vertexTangents!==Xe||Ee.morphTargets!==Se||Ee.morphNormals!==qe||Ee.morphColors!==pt||Ee.morphTargetsCount!==It||Ee.numLightProbeGrids!==_c(T.state.lightProbeGridArray)?Je=!0:(Ee.outputColorSpace!==he||Ee.toneMapping!==st)&&(xi=!0):(Je=!0,Ee.__version=B.version);let Lt=Ee.currentProgram;(Je===!0||xi===!0)&&(Lt=xi===!0?zu(B,L,z,he,st):_s(B,L,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Lt,Ee));let Mr=!1,Kn=!1,vi=!1,Ze=Lt.getUniforms(),Ct=Ee.uniforms;if(pe.useProgram(Lt.program)&&(Mr=!0,Kn=!0,vi=!0),B.id!==W&&(W=B.id,Kn=!0),Mr||j!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ze.setValue(D,"projectionMatrix",M.projectionMatrix),Ze.setValue(D,"viewMatrix",M.matrixWorldInverse);let Et=Ze.map.cameraPosition;Et!==void 0&&Et.setValue(D,Mn.setFromMatrixPosition(M.matrixWorld)),ct.logarithmicDepthBuffer&&Ze.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ze.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Kn=!0,vi=!0)}if(Ee.needsLights&&(Ft.state.sunShadowMap.length>0&&Ze.setValue(D,"sunShadowMap",Ft.state.sunShadowMap,Be),Ft.state.directionalShadowMap.length>0&&Ze.setValue(D,"directionalShadowMap",Ft.state.directionalShadowMap,Be),Ft.state.spotShadowMap.length>0&&Ze.setValue(D,"spotShadowMap",Ft.state.spotShadowMap,Be),Ft.state.pointShadowMap.length>0&&Ze.setValue(D,"pointShadowMap",Ft.state.pointShadowMap,Be)),z.isSkinnedMesh){Ze.setOptional(D,z,"bindMatrix"),Ze.setOptional(D,z,"bindMatrixInverse");let ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ze.setValue(D,"boneTexture",ft.boneTexture,Be))}z.isBatchedMesh&&(Ze.setOptional(D,z,"batchingTexture"),Ze.setValue(D,"batchingTexture",z._matricesTexture,Be),Ze.setOptional(D,z,"batchingIdTexture"),Ze.setValue(D,"batchingIdTexture",z._indirectTexture,Be),Ze.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ze.setValue(D,"batchingColorTexture",z._colorsTexture,Be));let cn=H.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&J.update(z,H,Lt),(Kn||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Ze.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Ct.envMapIntensity.value=L.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Dg()),Kn){if(Ze.setValue(D,"toneMappingExposure",I.toneMappingExposure),Ee.needsLights&&Gu(Ct,vi),de&&B.fog===!0&&re.refreshFogUniforms(Ct,de),re.refreshMaterialUniforms(Ct,B,_e,Re,T.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let ft=b,Et=0;for(let Un of T.state.lightProbeGridArray)Un.texture!==null&&(ft.textures[Et]=Un.texture,ft.min[Et]=Un.boundingBox.min,ft.max[Et]=Un.boundingBox.max,ft.resolution[Et]=Un.resolution,Et++);for(let Un in ft)ft[Un].length=Et;Ct.probesSH.value=ft.textures,Ct.probesMin.value=ft.min,Ct.probesMax.value=ft.max,Ct.probesResolution.value=ft.resolution}ps.upload(D,xc(Ee),Ct,Be)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ps.upload(D,xc(Ee),Ct,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ze.setValue(D,"center",z.center),Ze.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ze.setValue(D,"normalMatrix",z.normalMatrix),Ze.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ft=B.uniformsGroups;for(let Et=0,Un=ft.length;Et<Un;Et++){let Mc=ft[Et];Ae.update(Mc,Lt),Ae.bind(Mc,Lt)}}return Lt}function Gu(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Vu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,L,H){let B=Le.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Le.get(M.texture).__webglTexture=L,Le.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let H=Le.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){Q=M,q=L,O=H;let B=null,z=!1,de=!1;if(M){let he=Le.get(M);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(M.viewport),we.copy(M.scissor),Ue=M.scissorTest,pe.viewport(ee),pe.scissor(we),pe.setScissorTest(Ue),W=-1;return}else if(he.__webglFramebuffer===void 0)Be.setupRenderTarget(M);else if(he.__hasExternalTextures)Be.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Te=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?B=Te[L][H]:B=Te[L],z=!0):M.samples>0&&Be.useMultisampledRTT(M)===!1?B=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[H]:B=Te,ee.copy(M.viewport),we.copy(M.scissor),Ue=M.scissorTest}else ee.copy(Ie).multiplyScalar(_e).floor(),we.copy(je).multiplyScalar(_e).floor(),Ue=ce;if(H!==0&&(B=V),pe.bindFramebuffer(D.FRAMEBUFFER,B)&&pe.drawBuffers(M,B),pe.viewport(ee),pe.scissor(we),pe.setScissorTest(Ue),z){let he=Le.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,H)}else if(de){let he=L;for(let ye=0;ye<M.textures.length;ye++){let Te=Le.get(M.textures[ye]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ye,Te.__webglTexture,H,he)}}else if(M!==null&&H!==0){let he=Le.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,H)}W=-1};function yc(M){let L=Le.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=ct.textureFormatReadable(M.format),L.__typeReadable=ct.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,H,B,z,de,be,he=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye){pe.bindFramebuffer(D.FRAMEBUFFER,ye);try{let Te=M.textures[he],ke=Te.format,Xe=Te.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Se=yc(Te);if(Se.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&H>=0&&H<=M.height-z&&D.readPixels(L,H,B,z,se.convert(ke),se.convert(Xe),de)}finally{let Te=Q!==null?Le.get(Q).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,L,H,B,z,de,be,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye)if(L>=0&&L<=M.width-B&&H>=0&&H<=M.height-z){pe.bindFramebuffer(D.FRAMEBUFFER,ye);let Te=M.textures[he],ke=Te.format,Xe=Te.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Se=yc(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(L,H,B,z,se.convert(ke),se.convert(Xe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let pt=Q!==null?Le.get(Q).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,pt);let st=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fh(D,st,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(qe),D.deleteSync(st),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,H=0){let B=Math.pow(2,-H),z=Math.floor(M.image.width*B),de=Math.floor(M.image.height*B),be=L!==null?L.x:0,he=L!==null?L.y:0;Be.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,be,he,z,de),pe.unbindTexture()},this.copyTextureToTexture=function(M,L,H=null,B=null,z=0,de=0){let be,he,ye,Te,ke,Xe,Se,qe,pt,st=M.isCompressedTexture?M.mipmaps[de]:M.image;if(H!==null)be=H.max.x-H.min.x,he=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,ke=H.min.y,Xe=H.isBox3?H.min.z:0;else{let Ze=Math.pow(2,-z);be=Math.floor(st.width*Ze),he=Math.floor(st.height*Ze),M.isDataArrayTexture?ye=st.depth:M.isData3DTexture?ye=Math.floor(st.depth*Ze):ye=1,Te=0,ke=0,Xe=0}B!==null?(Se=B.x,qe=B.y,pt=B.z):(Se=0,qe=0,pt=0);let it=se.convert(L.format),It=se.convert(L.type),Ee;L.isData3DTexture?(Be.setTexture3D(L,0),Ee=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Be.setTexture2DArray(L,0),Ee=D.TEXTURE_2D_ARRAY):(Be.setTexture2D(L,0),Ee=D.TEXTURE_2D),pe.activeTexture(D.TEXTURE0),pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),pe.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let Ft=pe.getParameter(D.UNPACK_ROW_LENGTH),Je=pe.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=pe.getParameter(D.UNPACK_SKIP_PIXELS),Lt=pe.getParameter(D.UNPACK_SKIP_ROWS),Mr=pe.getParameter(D.UNPACK_SKIP_IMAGES);pe.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),pe.pixelStorei(D.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let Kn=M.isDataArrayTexture||M.isData3DTexture,vi=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Ze=Le.get(M),Ct=Le.get(L),cn=Le.get(Ze.__renderTarget),ft=Le.get(Ct.__renderTarget);pe.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Et=0;Et<ye;Et++)Kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(M).__webglTexture,z,Xe+Et),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(L).__webglTexture,de,pt+Et)),D.blitFramebuffer(Te,ke,Te+be,ke+he,Se,qe,Se+be,qe+he,D.DEPTH_BUFFER_BIT,D.NEAREST);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Le.has(M)){let Ze=Le.get(M),Ct=Le.get(L);pe.bindFramebuffer(D.READ_FRAMEBUFFER,C),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let cn=0;cn<ye;cn++)Kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,z,Xe+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,z),vi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,de,pt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,de),z!==0?D.blitFramebuffer(Te,ke,Te+be,ke+he,Se,qe,Se+be,qe+he,D.COLOR_BUFFER_BIT,D.NEAREST):vi?D.copyTexSubImage3D(Ee,de,Se,qe,pt+cn,Te,ke,be,he):D.copyTexSubImage2D(Ee,de,Se,qe,Te,ke,be,he);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vi?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ee,de,Se,qe,pt,be,he,ye,it,It,st.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,de,Se,qe,pt,be,he,ye,it,st.data):D.texSubImage3D(Ee,de,Se,qe,pt,be,he,ye,it,It,st):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Se,qe,be,he,it,It,st.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Se,qe,st.width,st.height,it,st.data):D.texSubImage2D(D.TEXTURE_2D,de,Se,qe,be,he,it,It,st);pe.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),pe.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,Mr),de===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(M){Le.get(M).__webglFramebuffer===void 0&&Be.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Be.setTextureCube(M,0):M.isData3DTexture?Be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Be.setTexture2DArray(M,0):Be.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){q=0,O=0,Q=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Mu={type:"change"},rc={type:"start"},Su={type:"end"},Ro=new si,bu=new Bt,Ug=Math.cos(70*gi.DEG2RAD),Mt=new P,Xt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6,Co=class extends ir{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Zt,this._lastTargetPosition=new P,this._quat=new Zt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new P,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new P,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fg.bind(this),this._onPointerDown=Ng.bind(this),this._onPointerUp=Og.bind(this),this._onContextMenu=Wg.bind(this),this._onMouseWheel=zg.bind(this),this._onKeyDown=Hg.bind(this),this._onTouchStart=Gg.bind(this),this._onTouchMove=Vg.bind(this),this._onMouseDown=Bg.bind(this),this._onMouseMove=kg.bind(this),this._interceptControlDown=Xg.bind(this),this._interceptControlUp=qg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mu),this.update(),this.state=Ke.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Mt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<Ug?this.object.lookAt(this.target):(bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(bu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(Mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ng(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Og(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Su),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ke.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(rc)}function kg(i){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function zg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(i.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Su))}function Hg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1){this.state=Ke.NONE;break}this._handleTouchStartRotate(i),this.state=Ke.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1){this.state=Ke.NONE;break}this._handleTouchStartPan(i),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ke.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(rc)}function Vg(i){switch(this._trackPointer(i),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ke.NONE}}function Wg(i){this.enabled!==!1&&i.preventDefault()}function Xg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xr=[{id:1,title:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",subtitle:"\u0414\u0430\u0439\u0442\u0435 \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043C\u0435\u0441\u0442\u043E, \u043A\u0443\u0434\u0430 \u0443\u0439\u0442\u0438",intro:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u2014 \u043D\u0435 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u044C, \u043D\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043D\u0430\u043C \u0435\u0451 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C. \u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430, \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0438 \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430 \u2014 \u0440\u0430\u0437\u043D\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438. \u041F\u0440\u043E\u0441\u043B\u0435\u0434\u0438\u0442\u0435, \u043A\u0443\u0434\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0448\u0430\u0440\u0430.",formula:"E\u209A = mgh",question:"\u0428\u0430\u0440 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0442 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u043D\u0430 2 \u043C. \u0412 \u043A\u0430\u043A\u043E\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0431\u043E\u0301\u043B\u044C\u0448\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438?",options:["\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438"],answer:1,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u0448\u0430\u0440\u0430",min:.5,max:3,step:.5,value:1,unit:"\u043A\u0433",decimals:1},result:i=>[["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442\u044B","2.0 \u043C"],["\u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",`${(i*9.8*2).toFixed(1)} \u0414\u0436`],["\u0423\u0431\u044B\u043B\u044C \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 (\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*9.8*2).toFixed(1)} \u0414\u0436`],["\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",`${(i*9.8*2).toFixed(1)} \u0414\u0436`]],explanation:"\u041F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0448\u0430\u0440\u0430 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0435\u0433\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u043D\u0435 \u0440\u0430\u0441\u0442\u0451\u0442. \u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u0438\u043B\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043D\u0430\u0434 \u0448\u0430\u0440\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u0443 mgh, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438\u0437 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0432 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \xAB\u0448\u0430\u0440 \u2014 \u0417\u0435\u043C\u043B\u044F\xBB.",teacher:{focus:"\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u2014 \u044D\u0442\u043E \u0443\u0447\u0451\u0442\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u0430 \u043D\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u0432 \u0448\u0430\u0440 \u0438\u043B\u0438 \u0432\u044B\u043B\u0438\u0432\u0430\u044E\u0442 \u0438\u0437 \u043D\u0435\u0433\u043E.",steps:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0443, \u043F\u0440\u0443\u0436\u0438\u043D\u0443, \u0441\u0442\u0430\u043A\u0430\u043D \u0441 \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0432\u043E\u0434\u043E\u0439 \u0438 \u0448\u0430\u0440, \u0430 \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0437\u043E\u0432\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 mgh \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u043C\u0430\u0441\u0441, \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u044F \u0441\u043B\u043E\u0432\u0430 \xAB\u0441\u0438\u0441\u0442\u0435\u043C\u0430\xBB \u0438 \xAB\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430\xBB."],misconception:"\u041F\u0440\u0438 \u043F\u043E\u0434\u044A\u0451\u043C\u0435 \u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435 \u0432\u0441\u044E \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043A \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439. \u0415\u0441\u043B\u0438 \u0443\u0447\u0435\u0441\u0442\u044C \u041A\u041F\u0414 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C mgh."}},{id:2,title:"\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",subtitle:"\u041A\u0430\u043A \u0432\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",intro:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0448\u0430\u0440 \u0441 \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u043D\u0430\u043A\u043B\u043E\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438. \u0415\u0441\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0447\u044C \u0442\u0440\u0435\u043D\u0438\u0435\u043C, \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E. \u0427\u0435\u043C \u0432\u044B\u0448\u0435 \u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0440\u0442\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043D\u0438\u0437\u0443.",formula:"\xBDmv\xB2 = mgh",question:"\u0415\u0441\u043B\u0438 \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u043F\u0443\u0441\u043A\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0432 4 \u0440\u0430\u0437\u0430, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0451\u0442 \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0448\u0430\u0440\u0430 \u0432\u043D\u0438\u0437\u0443?",options:["\u041E\u043D\u0430 \u0441\u0442\u0430\u043D\u0435\u0442 \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u041E\u043D\u0430 \u0441\u0442\u0430\u043D\u0435\u0442 \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u041E\u043D\u0430 \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F"],answer:0,param:{label:"\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u043F\u0443\u0441\u043A\u0430",min:1,max:5,step:.5,value:3,unit:"\u043C",decimals:1},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(9.8*i).toFixed(1)} \u0414\u0436`],["\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u043D\u0438\u0437\u0443",`${(9.8*i).toFixed(1)} \u0414\u0436`],["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043D\u0438\u0437\u0443",`${Math.sqrt(19.6*i).toFixed(2)} \u043C/\u0441`],["\u041C\u0430\u0441\u0441\u0430 (\u043C\u043E\u0434\u0435\u043B\u044C)","1.0 \u043A\u0433"]],explanation:"\u0418\u0437 \u0444\u043E\u0440\u043C\u0443\u043B\u044B v = \u221A(2gh) \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u0447\u0442\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u0440\u043D\u044E \u0438\u0437 \u0432\u044B\u0441\u043E\u0442\u044B. \u0412 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u0434\u0430\u0451\u0442 \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u0420\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0442\u0435\u043F\u043B\u0430.",teacher:{focus:"\u0420\u0430\u0437\u043B\u0438\u0447\u0430\u0439\u0442\u0435 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438: \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0432\u044B\u0441\u043E\u0442\u044B \u0441\u043F\u0443\u0441\u043A\u0430 1 \u043C \u0438 4 \u043C.","\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0435\u0439 \u0434\u043E \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0437\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F\u043C\u0438."],misconception:"\u0424\u043E\u0440\u043C\u0443\u043B\u0430 \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0431\u0435\u0437 \u0442\u0440\u0435\u043D\u0438\u044F; \u0434\u043B\u044F \u043A\u0430\u0442\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u0442\u0435\u043B\u0430 \u043D\u0443\u0436\u043D\u043E \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F."}},{id:3,title:"\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",subtitle:"\u0417\u0430\u043F\u0430\u0441\u0430\u0435\u043C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",intro:"\u0421\u0436\u0430\u0442\u0438\u0435 \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u0443\u043F\u0440\u0443\u0433\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u041A\u043E\u0433\u0434\u0430 \u0443\u043F\u043E\u0440 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u044E\u0442, \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0442\u043E\u043B\u043A\u0430\u0435\u0442 \u0442\u0435\u043B\u0435\u0436\u043A\u0443, \u0438 \u0443\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E.",formula:"E\u2091 = \xBDkx\xB2",question:"\u0415\u0441\u043B\u0438 \u0441\u0436\u0430\u0442\u0438\u0435 \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0443\u0434\u0432\u043E\u0438\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0451\u0442 \u0441 \u0437\u0430\u043F\u0430\u0441\u0451\u043D\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439?",options:["\u0412 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u0412 4 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435","\u0412 8 \u0440\u0430\u0437 \u0431\u043E\u043B\u044C\u0448\u0435"],answer:1,param:{label:"\u0421\u0436\u0430\u0442\u0438\u0435",min:.1,max:.5,step:.05,value:.3,unit:"\u043C",decimals:2},result:i=>[["\u0416\u0451\u0441\u0442\u043A\u043E\u0441\u0442\u044C \u043F\u0440\u0443\u0436\u0438\u043D\u044B","200 \u041D/\u043C"],["\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(100*i*i).toFixed(2)} \u0414\u0436`],["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0442\u0435\u043B\u0435\u0436\u043A\u0438",`${Math.sqrt(200*i*i/.5).toFixed(2)} \u043C/\u0441`],["\u041C\u0430\u0441\u0441\u0430 \u0442\u0435\u043B\u0435\u0436\u043A\u0438","0.50 \u043A\u0433"]],explanation:"\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u0436\u0430\u0442\u0438\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u0434\u0432\u043E\u0435\u043D\u0438\u0435 \u0441\u0436\u0430\u0442\u0438\u044F \u0434\u0430\u0451\u0442 \u0432\u0447\u0435\u0442\u0432\u0435\u0440\u043E \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0438 \u0440\u0430\u0432\u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.",teacher:{focus:"\u0421\u0443\u0434\u0438\u0442\u0435 \u043E \u0437\u0430\u043F\u0430\u0441\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u0434\u043B\u0438\u043D\u044B \u043F\u0440\u0443\u0436\u0438\u043D\u044B, \u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0441\u0438\u043B\u0435.",steps:["\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0441\u0436\u0430\u0442\u0438\u044F 0.10 \u043C, 0.20 \u043C \u0438 0.40 \u043C \u0438 \u0437\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0439.","\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u0442\u0435\u043B\u0435\u0436\u043A\u0430 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043A \u043D\u0435\u0434\u0435\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0434\u043B\u0438\u043D\u0435."],misconception:"E\u2091 = \xBDkx\xB2 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u0430 \u043B\u0438\u0448\u044C \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0441\u0442\u0438; \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u043E\u0435 \u0441\u0436\u0430\u0442\u0438\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0443\u044E \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."}},{id:4,title:"\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044F\u0447 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0451\u0442 \u043F\u043E\u0434\u043F\u0440\u044B\u0433\u0438\u0432\u0430\u0442\u044C",subtitle:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043D\u0435 \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u2014 \u043E\u043D\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0434\u0440\u0443\u0433\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",intro:"\u041F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0438 \u043C\u044F\u0447 \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0435\u043C\u043B\u044E \u0438 \u0432\u043E\u0437\u0434\u0443\u0445 \u0432\u0438\u0431\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0441\u043A\u043E\u043A \u043D\u0438\u0436\u0435.",formula:"h\u2099\u208A\u2081 = e\xB2h\u2099",question:"\u041A\u043E\u0433\u0434\u0430 \u043C\u044F\u0447 \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0437\u0430\u043C\u0438\u0440\u0430\u0435\u0442 \u043D\u0430 \u0437\u0435\u043C\u043B\u0435, \u043A\u0443\u0434\u0430 \u0443\u0448\u043B\u0430 \u0435\u0433\u043E \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F?",options:["\u041E\u043D\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0441\u0447\u0435\u0437\u043B\u0430","\u041F\u043E \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0448\u043B\u0430 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438","\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0448\u043B\u0430 \u0432 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E"],answer:1,param:{label:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F e",min:.4,max:.9,step:.05,value:.75,unit:"",decimals:2},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430","4.0 \u043C"],["\u0412\u044B\u0441\u043E\u0442\u0430 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043E\u0442\u0441\u043A\u043E\u043A\u0430",`${(4*i**6).toFixed(2)} \u043C`],["\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0442\u0440\u0451\u0445 \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0439",`${(100*i**6).toFixed(1)}%`],["\u0414\u043E\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",`${(100*(1-i**6)).toFixed(1)}%`]],explanation:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F e \u2014 \u044D\u0442\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043A \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0434\u0430\u0440\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u0436\u0434\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432 e\xB2 \u0440\u0430\u0437 \u043C\u0435\u043D\u044C\u0448\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439. \u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438: \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F, \u0437\u0432\u0443\u043A \u0438 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u0438\u0442\u043E\u0433\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438.",teacher:{focus:"\u041E\u0431\u044A\u044F\u0441\u043D\u044F\u0439\u0442\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0430 \u043D\u0435 \u043A\u0430\u043A \u0435\u0451 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432\u0430\u043D\u0438\u0435.",steps:["\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0437\u0430\u0442\u0443\u0445\u0430\u043D\u0438\u044F \u043F\u0440\u0438 e = 0.40 \u0438 e = 0.90.","\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043D\u0430\u0439\u0442\u0438 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0435 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u0432\u043E\u043B\u043D\u044B \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438."],misconception:"\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442 e\xB2 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F; \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u044F\u0447\u0438 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D\u044B \u0442\u0430\u043A\u0436\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044E \u0438 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u043E\u0437\u0434\u0443\u0445\u0430."}},{id:5,title:"\u0423\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044F",subtitle:"\u041E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432 \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",intro:"\u0412 \u043E\u0431\u043E\u0438\u0445 \u0441\u0442\u0430\u043A\u0430\u043D\u0430\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043C\u0430\u0441\u0441\u044B \u0432\u043E\u0434\u044B \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432\u0430. \u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0430 \u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u0435\u0433\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435.",formula:"Q = mc\u0394T",question:"\u041F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0430\u0441\u0441\u0430\u0445 \u0432\u043E\u0434\u044B \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u043A\u0430\u043A\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0431\u043E\u043B\u044C\u0448\u0435?",options:["\u0422\u0435\u0440\u043C\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u0412\u0441\u0435\u0433\u0434\u0430 \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439"],answer:0,param:{label:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432\u0430",min:200,max:1e3,step:100,value:600,unit:"\u0412\u0442",decimals:0},result:i=>{let e=i*20/840;return[["\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430","20 \u0441"],["\u041F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(i*20/1e3).toFixed(1)} \u043A\u0414\u0436`],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0432\u043E\u0434\u0430 \u0432 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(e*.9).toFixed(1)} \xB0C`],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0432\u043E\u0434\u0430 \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(e*.65).toFixed(1)} \xB0C`]]},explanation:"\u0423 \u0432\u043E\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0443\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u043B\u044F \u0435\u0451 \u043D\u0430\u0433\u0440\u0435\u0432\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u043D\u043E\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041E\u0431\u0430 \u0441\u0442\u0430\u043A\u0430\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u0434\u0430\u0451\u0442 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E. \u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043E\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 90% \u0438 65% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435.",teacher:{focus:"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0443\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u0435\u0440\u0438: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0432 \u0432\u043E\u0434\u0435.",steps:["\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F, \u043C\u0435\u043D\u044F\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C, \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0439\u0442\u0435 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.","\u041E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u0435, \u0447\u0442\u043E 90% \u0438 65% \u2014 \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043B\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E\u0441\u0442\u0438, \u0430 \u043D\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F."],misconception:"\u0412 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435 \u0441\u0442\u0430\u043A\u0430\u043D, \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440 \u0438 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u0442\u043E\u0436\u0435 \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u044E\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043E\u0441\u0442\u044B\u0432\u0430\u043D\u0438\u044F \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u0440\u0430\u0437\u043D\u0438\u0446\u0435\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440."}},{id:6,title:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",subtitle:"\u041E\u0434\u043D\u0430 \u0438 \u0442\u0430 \u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430 \u2014 \u0440\u0430\u0437\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",intro:"\u0414\u0432\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u0445 \u043C\u043E\u0442\u043E\u0440\u0430 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0433\u0440\u0443\u0437\u044B \u043D\u0430 \u043E\u0434\u043D\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0432\u044B\u0441\u043E\u0442\u0443. \u0420\u0430\u0431\u043E\u0442\u0430 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0437\u043D\u043E\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F.",formula:"P = W / t",question:"\u0414\u0432\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443. \u0423 \u043A\u0430\u043A\u043E\u0439 \u0438\u0437 \u043D\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435?",options:["\u0423 \u0442\u043E\u0439, \u0447\u0442\u043E \u0442\u0440\u0430\u0442\u0438\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438","\u0423 \u0442\u043E\u0439, \u0447\u0442\u043E \u0442\u0440\u0430\u0442\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438","\u0418\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u044B"],answer:0,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430",min:20,max:100,step:10,value:50,unit:"\u043A\u0433",decimals:0},result:i=>{let e=i*9.8*2;return[["\u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u0430","2.0 \u043C"],["\u0420\u0430\u0431\u043E\u0442\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B",`${e.toFixed(0)} \u0414\u0436`],["\u041C\u043E\u0442\u043E\u0440 A: 4 \u0441",`${(e/4).toFixed(1)} \u0412\u0442`],["\u041C\u043E\u0442\u043E\u0440 B: 8 \u0441",`${(e/8).toFixed(1)} \u0412\u0442`]]},explanation:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F. \u041E\u0431\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 mgh, \u043D\u043E \u043C\u043E\u0442\u043E\u0440 A \u0442\u0440\u0430\u0442\u0438\u0442 \u0432\u0434\u0432\u043E\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0435\u0433\u043E \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0432\u0434\u0432\u043E\u0435 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0443 \u043C\u043E\u0442\u043E\u0440\u0430 B.",teacher:{focus:"\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u2014 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0434\u0435\u043B\u0430\u043D\u043E, \u0430 \u0442\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0443 \u043C\u043E\u0442\u043E\u0440\u043E\u0432.","\u0417\u0430\u0442\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435, \u043A\u0430\u043A \u0432\u043C\u0435\u0441\u0442\u0435 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0438\u0445 \u043C\u043E\u0442\u043E\u0440\u043E\u0432."],misconception:"\u0417\u0434\u0435\u0441\u044C \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u0432\u044B\u0445\u043E\u0434\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C; \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F, \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C\u0430\u044F \u0438 \u043F\u0438\u043A\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043C\u043E\u0442\u043E\u0440\u0430 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C."}},{id:7,title:"\u041A\u041F\u0414",subtitle:"\u041A\u0443\u0434\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F?",intro:"\u041C\u043E\u0442\u043E\u0440 \u0434\u0435\u043B\u0438\u0442 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043D\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A. \u041A\u041F\u0414 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A\u0430\u044F \u0434\u043E\u043B\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u0430.",formula:"\u03B7 = A_\u043F\u043E\u043B\u0435\u0437\u043D / E_\u043F\u043E\u0434\u0432",question:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0441 \u041A\u041F\u0414 80% \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 500 \u0414\u0436 \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041A\u0430\u043A\u043E\u0432\u0430 \u0435\u0433\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430?",options:["80 \u0414\u0436","400 \u0414\u0436","625 \u0414\u0436"],answer:1,param:{label:"\u041F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",min:200,max:1e3,step:100,value:500,unit:"\u0414\u0436",decimals:0},result:i=>[["\u041A\u041F\u0414 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430","80%"],["\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430",`${(i*.8).toFixed(0)} \u0414\u0436`],["\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0432 \u0442\u0435\u043F\u043B\u043E, \u0437\u0432\u0443\u043A \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",`${(i*.2).toFixed(0)} \u0414\u0436`],["\u041F\u043E\u043B\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430",`${i.toFixed(0)} \u0414\u0436`]],explanation:"\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 = \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \xD7 \u041A\u041F\u0414, \u0437\u043D\u0430\u0447\u0438\u0442 500 \u0414\u0436 \xD7 80% = 400 \u0414\u0436. \u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F 100 \u0414\u0436 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0442\u0435\u043F\u043B\u043E, \u0437\u0432\u0443\u043A \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041A\u041F\u0414 \u043D\u0438\u0436\u0435 100% \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0437\u0430\u043A\u043E\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438.",teacher:{focus:"\u041A\u041F\u0414 \u2014 \u044D\u0442\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435; \u043E\u043D \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \xAB\u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u0430\u044F\xBB \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0438\u0441\u0447\u0435\u0437\u043B\u0430.",steps:["\u041C\u0435\u043D\u044F\u0439\u0442\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043E\u0442 200 \u0414\u0436 \u0434\u043E 1000 \u0414\u0436, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044F \u041A\u041F\u0414 80%.","\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435, \u0447\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430, \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0431\u0430\u043B\u0430\u043D\u0441."],misconception:"\u041F\u043E\u043B\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u0440\u0430\u0432\u043D\u0430 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u041A\u041F\u0414 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0434\u043E\u043B\u044E, \u0430 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E."}},{id:8,title:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0435\u0442\u044C",subtitle:"\u041A\u0430\u043A \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u0440\u043E\u0434",intro:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E \u0438\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u043E\u0434\u0430 \u043F\u0440\u0438\u0432\u043E\u0434\u044F\u0442 \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0438\u0434\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u0442\u0443\u0440\u0431\u0438\u043D\u044B, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0438 \u0441\u0435\u0442\u044C \u043A \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u043C. \u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440\u044B \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0443 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u043C\u0435\u043D\u044C\u0448\u0435\u043C \u0442\u043E\u043A\u0435.",formula:"P = UI",question:"\u041A\u0430\u043A\u043E\u0432\u0430 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F?",options:["\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0442\u043E\u043A \u0438 \u043F\u043E\u0442\u0435\u0440\u0438 \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0439","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438\u0437 \u043D\u0438\u0447\u0435\u0433\u043E","\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438"],answer:0,param:{label:"\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",min:100,max:500,step:50,value:250,unit:"\u041C\u0412\u0442",decimals:0},result:i=>[["\u0422\u043E\u043A \u043F\u0440\u0438 400 \u043A\u0412 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*1e6/4e5).toFixed(0)} \u0410`],["\u0422\u043E\u043A \u043F\u0440\u0438 25 \u043A\u0412 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${(i*1e6/25e3).toFixed(0)} \u0410`],["\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438",`${16 .toFixed(0)}\xD7`],["\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",`${i.toFixed(0)} \u041C\u0412\u0442`]],explanation:"\u041F\u0440\u0438 \u0442\u043E\u0439 \u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0430 P = UI \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442: \u0447\u0435\u043C \u0432\u044B\u0448\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435, \u0442\u0435\u043C \u043C\u0435\u043D\u044C\u0448\u0435 \u0442\u043E\u043A. \u041F\u043E\u0442\u0435\u0440\u0438 \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B I\xB2R, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438 \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u0438. \u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440 \u043C\u0435\u043D\u044F\u0435\u0442 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u0438 \u0442\u043E\u043A\u0430, \u043D\u043E \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E.",teacher:{focus:"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0442\u043E\u043A\u0438 \u043F\u0440\u0438 \u0434\u0432\u0443\u0445 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F\u0445 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0439 \u0438 \u0442\u043E\u0439 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C, \u0437\u0430\u0447\u0435\u043C \u043D\u0443\u0436\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043D\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0438.",steps:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u0451\u043B, \u0442\u0443\u0440\u0431\u0438\u043D\u0443, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440, \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440 \u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u0439, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0446\u0435\u043F\u043E\u0447\u043A\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0442\u043E\u043A\u0430 \u043F\u0440\u0438 400 \u043A\u0412 \u0438 25 \u043A\u0412 \u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435 \u0438\u0445 \u0441 \u0444\u043E\u0440\u043C\u0443\u043B\u043E\u0439 I\xB2R."],misconception:"\u0412 \u044D\u0442\u043E\u0439 \u0433\u043B\u0430\u0432\u0435 \u0442\u0440\u0451\u0445\u0444\u0430\u0437\u043D\u0430\u044F \u0441\u0435\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u043E\u043A\u0430 \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0430 \u0434\u043E \u043E\u0434\u043D\u043E\u043F\u0443\u0442\u0435\u0432\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 P = UI. \u0412 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0438\u0438 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u0430\u043A\u0436\u0435 \u0444\u0430\u0437\u044B, \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043B\u0438\u043D\u0438\u0439."}},{id:9,title:"\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u043F\u0438\u0449\u0435",subtitle:"\u041E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0438\u0449\u0438 \u043F\u043E \u0440\u043E\u0441\u0442\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",intro:"\u0421\u043E\u0436\u0436\u0451\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0440\u0430\u0437\u0435\u0446 \u043F\u0438\u0449\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0434\u0438\u043C \u0432\u044B\u0434\u0435\u043B\u0438\u0432\u0448\u0443\u044E\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432\u043E\u0434\u0435 \u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0435. \u041C\u0430\u0441\u0441\u0430 \u0432\u043E\u0434\u044B, \u0435\u0451 \u0443\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0438 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u043F\u0438\u0449\u0435\u0439.",formula:"Q = mc\u0394T",question:"\u041F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0430\u0441\u0441\u0430\u0445 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043A\u0430\u043A\u043E\u0439 \u0442\u0438\u043F \u043E\u0431\u044B\u0447\u043D\u043E \u0434\u0430\u0451\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438?",options:["\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435\u043C \u0436\u0438\u0440\u043E\u0432","\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435\u043C \u0432\u043E\u0434\u044B","\u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0443\u0434\u0438\u0442\u044C \u043F\u043E \u0446\u0432\u0435\u0442\u0443"],answer:0,param:{label:"\u041C\u0430\u0441\u0441\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430",min:1,max:5,step:.5,value:2,unit:"\u0433",decimals:1},result:i=>{let e=i*17,t=e*1e3*.2/(.2*4200);return[["\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 (\u043C\u043E\u0434\u0435\u043B\u044C)",`${e.toFixed(1)} \u043A\u0414\u0436`],["\u0414\u043E\u043B\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439","20%"],["\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B 200 \u0433 \u0432\u043E\u0434\u044B",`${t.toFixed(1)} \xB0C`],["\u042D\u043D\u0435\u0440\u0433\u0438\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439",`${(e*.2).toFixed(1)} \u043A\u0414\u0436`]]},explanation:"\u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0430 \u0440\u0430\u0432\u043D\u043E\u0439 17 \u043A\u0414\u0436/\u0433 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043B\u0438\u0448\u044C 20% \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439. \u0424\u043E\u0440\u043C\u0443\u043B\u0430 Q = mc\u0394T \u0434\u0430\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E \u0432\u043E\u0434\u043E\u0439, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0438\u0449\u0438. \u0416\u0438\u0440\u044B \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C\u044E, \u0447\u0435\u043C \u0443\u0433\u043B\u0435\u0432\u043E\u0434\u044B \u0438\u043B\u0438 \u0431\u0435\u043B\u043A\u0438.",teacher:{focus:"\u041A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u0440\u044F\u0435\u0442 \u0434\u043E\u043B\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E \u0432\u043E\u0434\u043E\u0439; \u043F\u043E\u043B\u043D\u0443\u044E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044E\u0442 \u0447\u0435\u0440\u0435\u0437 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C.",steps:["\u041C\u0435\u043D\u044F\u0439\u0442\u0435 \u043C\u0430\u0441\u0441\u0443 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435, \u043A\u0430\u043A \u0432 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0440\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u043C\u0430\u0441\u0441\u043E\u0439.","\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u0435, \u043F\u043E\u0447\u0435\u043C\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0432\u043E\u0437\u0434\u0443\u0445\u0443, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E."],misconception:"\u0418 17 \u043A\u0414\u0436/\u0433, \u0438 20% \u2014 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0430 \u043D\u0435 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u043E\u0432; \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432 \u043F\u0438\u0449\u0438 \u0441\u0438\u043B\u044C\u043D\u043E \u0432\u0430\u0440\u044C\u0438\u0440\u0443\u0435\u0442\u0441\u044F."}},{id:10,title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",subtitle:"\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F",intro:"\u0428\u0430\u0440 \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0442\u0443\u0434\u0430-\u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043F\u043E U-\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u043C\u0443 \u0436\u0451\u043B\u043E\u0431\u0443. \u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F, \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F, \u043D\u043E \u0438\u0445 \u0441\u0443\u043C\u043C\u0430 \u043F\u043E \u0432\u0441\u0435\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044F\u043C \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439.",formula:"E_\u043F\u043E\u043B\u043D = E\u209A + E\u2096 + E_\u0442\u0435\u043F\u043B",question:"\u0418\u0437-\u0437\u0430 \u0442\u0440\u0435\u043D\u0438\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0448\u0430\u0440\u0430 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0431\u044B\u0432\u0430\u0435\u0442. \u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441 \u043F\u043E\u043B\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439?",options:["\u041F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0431\u044B\u0432\u0430\u0435\u0442","\u041E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439","\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0438\u0437 \u043D\u0438\u0447\u0435\u0433\u043E"],answer:1,param:{label:"\u0414\u043E\u043B\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u0442\u0440\u0435\u043D\u0438\u0435\u043C",min:0,max:.4,step:.05,value:.15,unit:"",decimals:2},result:i=>[["\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F","100.0 \u0414\u0436"],["\u041E\u0441\u0442\u0430\u0432\u0448\u0430\u044F\u0441\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",`${(100*(1-i)).toFixed(1)} \u0414\u0436`],["\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",`${(100*i).toFixed(1)} \u0414\u0436`],["\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F","100.0 \u0414\u0436"]],explanation:"\u0422\u0440\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043D\u043E \u0435\u0441\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0436\u0451\u043B\u043E\u0431, \u0448\u0430\u0440, \u0432\u043E\u0437\u0434\u0443\u0445 \u0438 \u0437\u0435\u043C\u043B\u044E, \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u043E\u0439 100 \u0414\u0436. \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u0435\u043D; \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0438\u0445 \u0441\u0443\u043C\u043C\u0430.",teacher:{focus:"\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C, \u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043B\u0438 \u0431\u0430\u043B\u0430\u043D\u0441, \u0438 \u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0448\u0438\u0440\u043E\u043A\u0443\u044E \u0433\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.",steps:["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0442\u0440\u0435\u043D\u0438\u0435 0 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0432\u0437\u0430\u0438\u043C\u043D\u044B\u0435 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438.","\u0417\u0430\u0442\u0435\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0442\u0440\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043E\u0441\u0442\u0430\u0432\u0448\u0435\u0439\u0441\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."],misconception:"\u0415\u0441\u043B\u0438 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0448\u0430\u0440, \u0435\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0431\u0443\u0434\u0442\u043E \u0431\u044B \u0443\u0431\u044B\u0432\u0430\u0435\u0442. \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u2014 \u0438 \u0431\u0430\u043B\u0430\u043D\u0441 \u0441\u043D\u043E\u0432\u0430 \u0441\u043E\u0439\u0434\u0451\u0442\u0441\u044F."}}],Eu="\u0415\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043D\u043E\u0435, \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u044B\u043C 9,8 \u043C/\u0441\xB2. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0438\u0440\u0443\u044E\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u0438 \u0438 \u0443\u043F\u0440\u043E\u0449\u0430\u044E\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0438\u0440\u0430.";var Ln={ink:4539715,paper:15986403,metal:11907238,darkMetal:8486519,wood:12953725,orange:13994832,blue:5672903,green:8231034,yellow:14070607,red:12939106,purple:8414644,water:8629697,white:16315884,bg:15787730};function Tu(i=20261026){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ac=null;function Yg(){if(ac)return ac;let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=Tu(711);e.fillStyle="#f7f4ed",e.fillRect(0,0,256,256);for(let s=0;s<1400;s+=1){let r=t()>.5?60:120;e.fillStyle=`rgba(${r},${r-4},${r-9},${.016+t()*.022})`,e.fillRect(t()*256,t()*256,.5+t()*1.4,.5+t())}let n=new Wn(i);return n.colorSpace=_t,n.wrapS=n.wrapT=Ei,n.repeat.set(1.6,1.6),ac=n,n}var oc=null;function Zg(){if(oc)return oc;let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=Tu(9127);e.clearRect(0,0,256,256);for(let s=0;s<2;s+=1)for(let r=-18;r<38;r+=1){let a=r*11+t()*3;e.strokeStyle=`rgba(52,49,45,${.09+t()*.09})`,e.lineWidth=.45+t()*.45,e.beginPath(),s===0?(e.moveTo(a,256),e.lineTo(a+256,0)):(e.moveTo(a,0),e.lineTo(a+256,256)),e.stroke()}let n=new Wn(i);return n.wrapS=n.wrapT=Ei,n.repeat.set(2.4,2.4),oc=n,n}var Po=null;function $g(){if(Po)return Po;let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);return t.addColorStop(0,"rgba(64,54,40,0.34)"),t.addColorStop(.55,"rgba(64,54,40,0.16)"),t.addColorStop(1,"rgba(64,54,40,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Po=new Wn(i),Po}function Au(i){let e=new Jt({map:$g(),transparent:!0,depthWrite:!1,toneMapped:!1}),t=new ze(new as(i,28),e);return t.rotation.x=-Math.PI/2,t.renderOrder=2,t}function Ru(){let i=Yg();return{ink:new xt({color:Ln.ink,roughness:.96,map:i}),paper:new xt({color:Ln.paper,roughness:.98,map:i}),metal:new xt({color:Ln.metal,roughness:.86,metalness:.08,map:i}),darkMetal:new xt({color:Ln.darkMetal,roughness:.9,metalness:.1,map:i}),wood:new xt({color:Ln.wood,roughness:.96,map:i}),white:new xt({color:Ln.white,roughness:.96,map:i}),glass:new xt({color:15001829,roughness:.5,metalness:0,transparent:!0,opacity:.18,depthWrite:!1}),water:new xt({color:Ln.water,roughness:.62,transparent:!0,opacity:.64,depthWrite:!1,map:i}),orange:new xt({color:14131311,roughness:.94,map:i}),blue:new xt({color:8824772,roughness:.94,map:i}),green:new xt({color:9676166,roughness:.94,map:i}),yellow:new xt({color:14072691,roughness:.94,map:i}),red:new xt({color:13143167,roughness:.94,map:i}),purple:new xt({color:10127035,roughness:.94,map:i}),hatch:new Jt({map:Zg(),transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1})}}var jt={box:new ai(1,1,1),sphere:new mn(1,26,18),cylinder:new an(1,1,1,26,1,!1),cylinderOpen:new an(1,1,1,26,1,!0),circle:new as(1,30),cone:new oi(1,1,14),torus:new Tn(1,.09,8,40)};function Di(i,e=1){return new Jt({color:i,transparent:e<1,opacity:e,toneMapped:!1,depthWrite:e>=1})}function vr(i,e={}){let t=e.fontSize??48,n=e.weight??500,s=e.mono?'"JetBrains Mono", Consolas, monospace':'"Manrope", "Segoe UI", Arial, sans-serif',r=[];if(e.maxWidthChars){let f=e.maxWidthChars,y=i.split(/\s+/),E="";for(let b of y){let A=E?`${E} ${b}`:b;A.length>f&&E?(r.push(E),E=b):E=A}E&&r.push(E)}else r.push(i);let a=Math.round(t*1.28),o=Math.round(t*.5),l=document.createElement("canvas"),c=l.getContext("2d");c.font=`${n} ${t}px ${s}`;let h=r.map(f=>c.measureText(f).width),p=Math.max(8,...h);l.width=Math.min(2048,Math.ceil(p+o*2)),l.height=a*r.length+o;let u=l.getContext("2d");u.font=`${n} ${t}px ${s}`,u.textAlign="center",u.textBaseline="middle",u.fillStyle=e.color??"#2a2318",r.forEach((f,y)=>u.fillText(f,l.width/2,o/2+a*(y+.5)));let d=new Wn(l);d.colorSpace=_t,d.minFilter=At;let g=new Ti({map:d,transparent:!0,depthWrite:!1,toneMapped:!1}),v=new rs(g),m=e.width??Math.max(1.1,Math.min(3.8,i.length*.2+.5));return v.scale.set(m,m*l.height/l.width,1),v.renderOrder=8,v}function Cu(i,e,t,n={},s){let r=new ot,a=1.7,o=.5,l=new ze(jt.box,Jg());l.scale.set(o,a,o),l.position.y=a/2;let c=s(new Jt({color:e,transparent:!0,opacity:.85,toneMapped:!1})),h=new ze(jt.box,c);h.scale.set(o*.74,a,o*.74),h.position.y=a/2;let p=s(vr(i,{width:1.42,fontSize:34,maxWidthChars:15}));return p.position.set(0,a+.42,0),r.add(l,h,p),r.position.set(...t),r.userData.set=(u,d)=>{let g=gi.clamp(u,.015,1);if(h.scale.y=a*g,h.position.y=a*g/2,d&&r.userData.valueText!==d){r.userData.valueText=d,r.userData.valueLabel&&(r.remove(r.userData.valueLabel),r.userData.valueLabel.material.map?.dispose(),r.userData.valueLabel.material.dispose());let v=s(vr(d,{width:1.15,fontSize:40,color:"#2a2318"}));v.position.set(0,-.3,0),r.add(v),r.userData.valueLabel=v}},r.userData.set(n.initial??1),r}var lc=null;function Jg(){return lc||(lc=new xt({color:15001829,roughness:.5,transparent:!0,opacity:.3,depthWrite:!1})),lc}function Pu(i,e,t={},n){let s=new ot,r=new wn(i.map(v=>new P(...v))),a=t.radius??.1,o=n(new Jt({color:e,transparent:!0,opacity:.08,blending:rr,depthWrite:!1})),l=n(new Jt({color:e,transparent:!0,opacity:.4,depthWrite:!1})),c=new ze(new qn(r,60,a,8,!1),o),h=new ze(new qn(r,60,a*.32,6,!1),l);s.add(c,h);let p=n(new Jt({color:e,transparent:!0,opacity:.95,toneMapped:!1})),u=new mn(t.particleSize??.095,10,8),d=t.count??7,g=[];for(let v=0;v<d;v+=1){let m=new ze(u,p);m.renderOrder=7,g.push(m),s.add(m)}return s.userData.update=(v,m=0,f=!1,y=!0)=>{if(s.visible=y,!y)return;let E=f?m*2:v/6;g.forEach((b,A)=>{let T=(A/d+E)%1;r.getPointAt(T,b.position);let _=.78+.22*Math.sin((T+A/d)*Math.PI*2);b.scale.setScalar(_)}),l.opacity=f?.7:.3},n(c.geometry),n(h.geometry),n(u),s}function Iu(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=56;t.save(),t.shadowColor="rgba(74,56,26,0.35)",t.shadowBlur=26,t.shadowOffsetY=10,wu(t,18,22,220,212,n),t.fillStyle="#faf5ea",t.fill(),t.restore(),wu(t,18,22,220,212,n),t.strokeStyle="rgba(42,35,24,0.55)",t.lineWidth=4,t.stroke(),t.strokeStyle="#2a2318",t.lineWidth=11,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(128,96),t.bezierCurveTo(100,78,66,78,52,88),t.lineTo(52,158),t.bezierCurveTo(66,148,100,148,128,166),t.bezierCurveTo(156,148,190,148,204,158),t.lineTo(204,88),t.bezierCurveTo(190,78,156,78,128,96),t.closePath(),t.stroke(),t.beginPath(),t.moveTo(128,96),t.lineTo(128,166),t.stroke(),t.fillStyle="#c1512f",t.beginPath(),t.arc(196,56,15,0,Math.PI*2),t.fill();let s=new Wn(e);s.colorSpace=_t,s.minFilter=At;let r=new Ti({map:s,transparent:!0,depthWrite:!1,toneMapped:!1}),a=new rs(r);a.scale.set(.86,.86,1),a.renderOrder=12;let o=new ze(new mn(.55,10,8),new Jt({transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,colorWrite:!1}));return o.add(a),a.position.y=0,{sprite:a,hitbox:o}}function wu(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var Gt=gi.clamp,Du=gi.lerp,gs=i=>1-Math.pow(1-Gt(i,0,1),3),cc=class{constructor(){this.group=new ot;this.infos=[];this.interaction=null;this.trash=[];this.materials=Ru()}track(e){let t=e;return typeof t?.dispose=="function"&&this.trash.push({dispose:()=>{t.dispose?.()}}),e}add(e,t){return this.group.add(e),t&&this.infos.push({title:t[0],description:t[1]}),e}label(e,t,n={}){let s=this.track(vr(e,n));return s.position.set(...t),this.add(s)}base(e=6.4,t=5.2){let n=new ze(jt.box,this.materials.paper);n.scale.set(e,.12,t),n.position.y=-.02,this.add(n);let s=new ze(new Ai(e*.965,t*.965),this.materials.hatch);s.rotation.x=-Math.PI/2,s.position.y=.047,this.track(s.geometry),this.add(s)}box(e,t,n){let s=new ze(jt.box,n);return s.scale.set(...e),s.position.set(...t),this.add(s)}sphere(e,t,n,s=26){let r=new ze(s===26?jt.sphere:new mn(1,s,Math.max(8,s-8)),n);return s!==26&&this.track(r.geometry),r.scale.setScalar(e),r.position.set(...t),this.add(r)}cylinder(e,t,n,s,r={}){let a=r.segments??24,o=a===24&&!r.openEnded&&(r.radiusTop??e)===e?jt.cylinder:this.track(new an(r.radiusTop??e,e,1,a,1,r.openEnded??!1)),l=new ze(o,s);return l.scale.set(e,t,e),l.position.set(...n),this.add(l)}rodBetween(e,t,n=.045,s){let r=new P(...e),a=new P(...t),o=a.clone().sub(r),l=this.cylinder(n,o.length(),r.clone().add(a).multiplyScalar(.5).toArray(),s??this.materials.darkMetal,{segments:10});return l.quaternion.setFromUnitVectors(new P(0,1,0),o.normalize()),l}tube(e,t,n,s={}){let r=new wn(e.map(o=>new P(...o))),a=this.track(new qn(r,Math.max(48,e.length*14),t,s.radialSegments??9,!1));return this.add(new ze(a,n))}coil(e={}){let t=e.turns??9,n=e.length??2.2,s=e.radius??.34,r=e.wire??.055,a=[],o=t*16;for(let u=0;u<=o;u+=1){let d=u/o,g=d*t*Math.PI*2;a.push(new P(d*n,Math.cos(g)*s,Math.sin(g)*s))}let l=new wn(a),c=this.track(new qn(l,o,r,6,!1)),h=new ze(c,this.materials.darkMetal),p=new ot;return p.add(h),this.add(p)}battery(e=[0,0,0]){let t=new ot,n=new ze(jt.box,this.materials.darkMetal);n.scale.set(1.05,1.45,.65),n.position.y=.725;let s=new ze(jt.box,this.materials.green);s.scale.set(.82,.72,.67),s.position.y=.85;let r=this.cylinder(.1,.16,[-.25,1.53,0],this.materials.metal,{segments:14}),a=this.cylinder(.1,.16,[.25,1.53,0],this.materials.metal,{segments:14}),o=this.track(vr("+",{width:.38,fontSize:76,color:"#f5f0e5"}));return o.position.set(0,.85,.37),t.add(n,s,r,a,o),t.position.set(...e),this.add(t)}mug(e=[0,0,0],t){let n=t??this.materials.paper,s=new ot,r=new ze(this.track(new an(.53,.48,1.05,24,1,!0)),n);r.position.y=.55;let a=this.cylinder(.45,.08,[0,.08,0],n),o=this.cylinder(.43,.06,[0,.9,0],this.materials.orange,{segments:24}),l=new ze(this.track(new Tn(.38,.09,10,24,Math.PI*1.65)),n);return l.position.set(.54,.57,0),l.rotation.y=Math.PI/2,l.rotation.z=-Math.PI*.82,s.add(r,a,o,l),s.position.set(...e),s.userData.liquid=o,this.add(s)}beaker(e={}){let t=e.radius??.58,n=e.height??1.65,s=new ot,r=new ze(this.track(new an(t,t,n,26,1,!0)),this.materials.glass);r.position.y=n/2;let a=this.cylinder(t,.06,[0,.03,0],this.materials.glass,{segments:26}),o=new ze(this.track(new Tn(t,.025,8,40)),this.materials.darkMetal);o.rotation.x=Math.PI/2,o.position.y=n;let l=e.liquidHeight??n*.55,c=this.track(this.materials.water.clone()),h=this.cylinder(t*.91,l,[0,.07+l/2,0],c,{segments:26});if(s.add(r,a,o,h),e.insulated){let p=new ze(this.track(new an(t*1.1,t*1.1,n*.75,26,1,!0)),this.materials.metal);p.position.y=n*.39,s.add(p),h.position.y+=.02}return s.userData.liquid=h,s.userData.height=n,this.add(s)}pylon(e,t=3.2){let n=new ot,s=t*.22;[[[-s,0,0],[-s*.25,t,0]],[[s,0,0],[s*.25,t,0]],[[-s,0,0],[s,0,0]],[[-s*.25,t,0],[s*.25,t,0]],[[-s*.75,t*.45,0],[s*.75,t*.45,0]],[[-s*.52,t*.72,0],[s*.52,t*.72,0]],[[-s,t*.58,0],[s,t*.58,0]]].forEach(([a,o])=>n.add(this.rodBetween(a,o,.035)));for(let a=1;a<=4;a+=1){let o=t*a/5,l=t*(a+1)/5;n.add(this.rodBetween([-s*.6,o,0],[s*.45,l,0],.022)),n.add(this.rodBetween([s*.6,o,0],[-s*.45,l,0],.022))}return n.position.set(...e),this.add(n)}house(e,t=1){let n=new ot,s=new ze(jt.box,this.materials.paper);s.scale.set(1.35,1.1,1.1),s.position.y=.55;let r=new ze(new oi(1.05,.72,4),this.materials.red);this.track(r.geometry),r.position.y=1.45,r.rotation.y=Math.PI/4;let a=new ze(jt.box,this.materials.wood);a.scale.set(.28,.58,.05),a.position.set(0,.3,.575);let o=Di(14070607,.9);this.track(o);let l=new ze(jt.box,o);l.scale.set(.27,.28,.04),l.position.set(-.38,.69,.58);let c=l.clone();return c.position.x=.38,n.add(s,r,a,l,c),n.position.set(...e),n.scale.setScalar(t),this.add(n)}flow(e,t,n={}){return this.add(Pu(e,t,n,s=>this.track(s)))}bar(e,t,n,s=1){return this.add(Cu(e,t,n,{initial:s},r=>this.track(r)))}blob(e,t,n,s=.055){let r=Au(e);return r.position.set(t,s,n),this.add(r)}guideLine(e){let t=this.track(new Pt().setFromPoints(e.map(r=>new P(...r)))),n=this.track(new $s({color:4539715,dashSize:.18,gapSize:.11,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1})),s=new Vs(t,n);return s.computeLineDistances(),s.renderOrder=20,s.visible=!1,this.add(s)}makeInteraction(e){return this.interaction={object:e.object,planeZ:e.planeZ,guide:e.guidePoints?this.guideLine(e.guidePoints):null,fromObject:e.fromObject,valueFromPoint:e.valueFromPoint,restValue:e.restValue,releaseDuration:e.releaseDuration},this.interaction}dispose(){this.trash.forEach(e=>{try{e.dispose()}catch{}}),this.trash=[],this.materials.water.dispose(),Object.values(this.materials).forEach(e=>e.dispose())}};function Dn(i,e){return i.update=e,i}function Kg(i){i.base();let e=i.battery([-2.25,.05,.8]);e.scale.setScalar(.78);let t=i.coil({length:1.5,radius:.28});t.position.set(1.1,.55,1.8),t.rotation.y=-.25;let n=i.mug([2.15,.04,.25]);n.scale.setScalar(.72),i.box([1.3,.55,1.3],[0,.28,.7],i.materials.wood);let s=i.sphere(.47,[0,1.03,.7],i.materials.blue);i.add(s,["\u0428\u0430\u0440 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041F\u043E\u0434\u044A\u0451\u043C \u0448\u0430\u0440\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u044B \xAB\u0448\u0430\u0440 \u2014 \u0417\u0435\u043C\u043B\u044F\xBB. \u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 mgh."]),i.add(e,["\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430 \xB7 \u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0445\u043E\u0434\u0435 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0430\u043A\u0446\u0438\u0439. \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0446\u0435\u043F\u044C \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438."]),i.add(t,["\u041F\u0440\u0443\u0436\u0438\u043D\u0430 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0443\u043F\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u041F\u0440\u0443\u0436\u0438\u043D\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u0443\u043F\u0440\u0443\u0433\u0443\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0438 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044F\u0441\u044C \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435."]),i.add(n,["\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430 \xB7 \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0423 \u0431\u043E\u043B\u0435\u0435 \u0433\u043E\u0440\u044F\u0447\u0435\u0433\u043E \u0442\u0435\u043B\u0430 \u043E\u0431\u044B\u0447\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u043C \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435; \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u043C\u0443 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E."]);let r=i.bar("\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[-2.15,.06,-1.65],1),a=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[0,.06,-1.65],.05),o=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[2.15,.06,-1.65],.08);i.flow([[-2.1,1.15,.7],[-1.5,2.4,.3],[-.2,2.2,.6],[0,1.4,.7]],13994832),i.label("\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043A \u0448\u0430\u0440\u0443",[0,4.15,0],{width:4.6,fontSize:40}),i.blob(.62,0,.7);let l=i.makeInteraction({object:s,planeZ:.7,guidePoints:[[0,1.03,.7],[0,3.03,.7]],fromObject:()=>Gt((s.position.y-1.03)/2,0,1),valueFromPoint:c=>Gt((c.y-1.03)/2,0,1),restValue:0,releaseDuration:1.5});return Dn({group:i.group,infos:i.infos,interaction:l,update:()=>{},dispose:()=>i.dispose()},({t:c,progress:h,param:p,manual:u})=>{let d=!!u?.active,g=d?u.releasing?Du(u.from,0,u.releaseProgress*u.releaseProgress):u.value:gs(h);s.position.y=1.03+2*g,s.rotation.z=-g*Math.PI*2,r.userData.set(d?1:1-.55*g),a.userData.set(.05+.95*g),o.userData.set(d?.08+.2*u.releaseProgress*(1-g):.08+.025*(1-Math.cos(c*Math.PI/3))),n.rotation.y=.08*(1-Math.cos(c*Math.PI/6)),t.scale.x=.92+.08*Math.sin(c*Math.PI/3),e.position.y=.05+.04*(1-Math.cos(c*Math.PI/6)),s.userData.mass=p})}function jg(i){i.base();let e=new P(-2.65,3.65,.2),t=new P(2.45,.48,.2),n=i.box([5.95,.16,1.35],[0,0,0],i.materials.wood);n.position.copy(e.clone().add(t).multiplyScalar(.5)),n.rotation.z=Math.atan2(t.y-e.y,t.x-e.x),i.add(n,["\u041D\u0430\u043A\u043B\u043E\u043D\u043D\u044B\u0439 \u0436\u0451\u043B\u043E\u0431","\u0415\u0441\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0447\u044C \u0442\u0440\u0435\u043D\u0438\u0435\u043C, \u0436\u0451\u043B\u043E\u0431 \u043C\u0435\u043D\u044F\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u043D\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u0443\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E."]),i.add(i.rodBetween([-2.55,.1,.2],[-2.55,3.45,.2],.08),["\u0428\u0442\u0430\u0442\u0438\u0432","\u0428\u0442\u0430\u0442\u0438\u0432 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u043B\u0435\u0433\u043A\u043E \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441 \u0440\u0430\u0437\u043D\u044B\u0445 \u0432\u044B\u0441\u043E\u0442."]);let s=i.sphere(.42,e.toArray(),i.materials.orange);i.add(s,["\u041A\u0430\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u0448\u0430\u0440","\u041A\u043E\u0433\u0434\u0430 \u0448\u0430\u0440 \u0441\u043A\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u0430\u0441\u0441\u0430 \u0448\u0430\u0440\u0430 1 \u043A\u0433."]);let r=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-1.55,.05,-1.75],1),a=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[0,.05,-1.75],.04),o=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F (\u0432 \u0438\u0434\u0435\u0430\u043B\u0435 0)",12939106,[1.55,.05,-1.75],.02);i.flow([[-2.3,3.4,.2],[-1.1,2.7,.2],[.6,1.25,.2],[2.35,.65,.2]],13994832,{count:9}),i.label("v = \u221A(2gh)",[0,4.45,0],{width:2.8,fontSize:54});let l=i.blob(.55,e.x,e.z),c=t.clone().sub(e),h=c.lengthSq(),p=g=>Gt(g.clone().sub(e).dot(c)/h,0,1),u=[];for(let g=0;g<=20;g+=1){let v=e.clone().lerp(t,g/20);u.push([v.x,v.y+.42,v.z])}let d=i.makeInteraction({object:s,planeZ:.2,guidePoints:u,fromObject:()=>p(s.position),valueFromPoint:g=>p(g),restValue:1,releaseDuration:1.8});return Dn({group:i.group,infos:i.infos,interaction:d,update:()=>{},dispose:()=>i.dispose()},({progress:g,param:v,manual:m})=>{let f=(v-1)/4,y=t.clone().lerp(e,.32+.68*f),E=!!m?.active,b=E?m.releasing?Du(m.from,1,m.releaseProgress*m.releaseProgress):m.value:Gt(g,0,1);E?s.position.copy(e.clone().lerp(t,Gt(b,0,1))):s.position.copy(y.lerp(t,b*b)),s.position.y+=.42,s.rotation.z=-b*14,r.userData.set(1-b),a.userData.set(Math.max(.04,m?.dragging?.04:b)),o.userData.set(.02),l.position.x=s.position.x,l.position.z=s.position.z})}function Qg(i){i.base(),i.add(i.box([.28,2.15,2.1],[-2.8,1.08,.2],i.materials.wood),["\u041D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u044B\u0439 \u0443\u043F\u043E\u0440","\u0423\u043F\u043E\u0440 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043E\u0434\u0438\u043D \u043A\u043E\u043D\u0435\u0446 \u043F\u0440\u0443\u0436\u0438\u043D\u044B, \u0447\u0442\u043E\u0431\u044B \u0441\u0436\u0430\u0442\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0438\u0437\u043C\u0435\u0440\u044F\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u043E."]);let e=i.box([5.8,.15,1.6],[0,.12,.2],i.materials.metal);i.add(e,["\u0416\u0451\u043B\u043E\u0431 \u0441 \u043C\u0430\u043B\u044B\u043C \u0442\u0440\u0435\u043D\u0438\u0435\u043C","\u0416\u0451\u043B\u043E\u0431 \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u0435\u043B\u0435\u0436\u043A\u0435 \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435; \u0442\u0440\u0435\u043D\u0438\u0435\u043C \u0432 \u044D\u0442\u043E\u0439 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0433\u0430\u044E\u0442."]);let t=i.coil({length:2.4,radius:.42,turns:10});t.position.set(-2.62,.86,.2),i.add(t,["\u0421\u0436\u0438\u043C\u0430\u0435\u043C\u0430\u044F \u043F\u0440\u0443\u0436\u0438\u043D\u0430","\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0439 \u0443\u043F\u0440\u0443\u0433\u043E\u0441\u0442\u0438 \u043F\u0440\u0443\u0436\u0438\u043D\u0430 \u0437\u0430\u043F\u0430\u0441\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E \xBDkx\xB2. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 k = 200 \u041D/\u043C."]);let n=new ot,s=new ze(jt.box,i.materials.blue);s.scale.set(1.05,.72,1.05),s.position.y=.62,n.add(s),[-.36,.36].forEach(l=>[-.43,.43].forEach(c=>{let h=i.cylinder(.17,.12,[l,.22,c],i.materials.darkMetal,{segments:16});h.rotation.x=Math.PI/2,h.position.set(l,.22,c),n.add(h)})),i.add(n,["\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0430","\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u044F \u043F\u0440\u0443\u0436\u0438\u043D\u044B \u0443\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0442\u0435\u043B\u0435\u0436\u043A\u0438. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u0430\u0441\u0441\u0430 \u0442\u0435\u043B\u0435\u0436\u043A\u0438 0.50 \u043A\u0433."]);let r=i.bar("\u0423\u043F\u0440\u0443\u0433\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",8414644,[-1.3,.05,-1.85],1),a=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0442\u0435\u043B\u0435\u0436\u043A\u0438",13994832,[1.1,.05,-1.85],.03);i.flow([[-1.6,1.25,.2],[-.5,2.25,.2],[.8,1.55,.2],[1.5,.9,.2]],8414644),i.label("\u0421\u0436\u0430\u0442\u0438\u0435 \xD72 \u2192 \u0423\u043F\u0440\u0443\u0433\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \xD74",[0,3.4,0],{width:4.3,fontSize:42});let o=i.blob(.7,-.25,.2);return Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({progress:l,param:c})=>{let h=gs(l),p=.35+c*1.15;t.scale.x=p+(1-p)*h,n.position.set(-.25+h*4.25,.05,.2),n.children.forEach((u,d)=>{d>0&&(u.rotation.z=-h*18)}),r.userData.set(1-h),a.userData.set(Math.max(.03,h)),o.position.x=n.position.x})}function e_(i){i.base();let e=i.box([4.6,.32,3.5],[0,.17,.25],i.materials.darkMetal);i.add(e,["\u0423\u0434\u0430\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430","\u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0435\u0442 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0451, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0447\u0435\u0440\u0435\u0437 \u0437\u0432\u0443\u043A \u0438 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044E."]);let t=i.sphere(.55,[0,4.55,.25],i.materials.orange);i.add(t,["\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043C\u044F\u0447","\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u2014 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u043A \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0434\u0430\u0440\u0430. \u0412\u044B\u0441\u043E\u0442\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0441\u043A\u043E\u043A\u043E\u0432 \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432 e\xB2 \u0440\u0430\u0437."]);let n=i.bar("\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-2.15,.05,-1.65],1),s=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[2.15,.05,-1.65],.02),r=[];for(let o=0;o<3;o+=1){let l=i.track(Di(13994832,.6)),c=new ze(new Tn(.7+o*.35,.035,8,48),l);c.rotation.x=Math.PI/2,c.position.set(0,.38+o*.025,.25),i.add(c),r.push(c)}i.flow([[0,.7,.25],[.8,1.4,0],[1.6,1.8,-.8],[2.1,1.4,-1.6]],13994832),i.label("\u041A\u0430\u0436\u0434\u043E\u0435 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E",[0,5.5,0],{width:5.4,fontSize:38,wrap:34}),i.blob(.7,0,.25);let a=i.makeInteraction({object:t,planeZ:.25,guidePoints:[[0,.9,.25],[0,4.9,.25]],fromObject:()=>Gt((t.position.y-.9)/4,0,1),valueFromPoint:o=>Gt((o.y-.9)/4,0,1),restValue:0,releaseDuration:3.8});return Dn({group:i.group,infos:i.infos,interaction:a,update:()=>{},dispose:()=>i.dispose()},({t:o,progress:l,param:c,manual:h})=>{let p=!!h?.active,u=p?h.releaseProgress*5:Gt(l,0,1)*5,d=Math.min(4,Math.floor(u)),g=u>=5?1:u-d,v=p?4*h.from:4,m=0;p&&!h.releasing?m=4*h.value:!p&&l<=0?m=4:d===0?m=v*(1-g)*(1-g):d<4&&(m=v*Math.pow(c,2*(d-1))*4*g*(1-g)),t.position.y=.9+m;let f=d>0&&(g<.12||g>.88)?1:0;r.forEach((E,b)=>{let A=.85+f*(.3+b*.2);E.scale.setScalar(A),E.material.opacity=.1+f*(.55-b*.12)});let y=p?h.releaseProgress*(1-Math.pow(c,4)):l<=0?0:Gt((d+g)/4,0,1)*(1-Math.pow(c,6));n.userData.set(1-y),s.userData.set(Math.max(.02,y)),(!p&&l>=1||p&&!h.releasing&&h.releaseProgress>=1)&&(t.position.y=.9),t.rotation.z=o*Math.PI/6})}function t_(i){i.base();let e=i.beaker({insulated:!0,liquidHeight:.95});e.position.set(-1.45,.15,.35),i.add(e,["\u0422\u0435\u0440\u043C\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u0418\u0437\u043E\u043B\u044F\u0446\u0438\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0435\u043F\u043B\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u043E\u0441\u0442\u044C\u044E, \u043A\u043E\u043D\u0432\u0435\u043A\u0446\u0438\u0435\u0439 \u0438 \u0438\u0441\u043F\u0430\u0440\u0435\u043D\u0438\u0435\u043C. \u041C\u043E\u0434\u0435\u043B\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 90% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let t=i.beaker({liquidHeight:.95});t.position.set(1.45,.15,.35),i.add(t,["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D","\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041C\u043E\u0434\u0435\u043B\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 65% \u043F\u043E\u0434\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let n=[];[e,t].forEach(d=>{let g=i.cylinder(.07,1.3,[0,1.25,0],i.materials.darkMetal,{segments:12});n.push(g),d.add(g)}),i.add(i.box([3.9,.18,.75],[0,2.18,.35],i.materials.metal),["\u041D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438","\u041E\u0431\u0430 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430, \u0432\u044B\u0434\u0435\u043B\u044F\u044F \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0445 \u043F\u043E\u0442\u0435\u0440\u044C."]);let s=i.bar("\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D",13994832,[-1.4,.05,-1.65],.05),r=i.bar("\u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B: \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D",12939106,[1.4,.05,-1.65],.05);i.flow([[0,2.3,.35],[-.8,2.8,.35],[-1.45,2.2,.35],[-1.45,1.2,.35]],13994832),i.flow([[0,2.3,.35],[.8,2.8,.35],[1.45,2.2,.35],[1.45,1.2,.35]],13994832);let a=[],o=i.track(new mn(.1,12,8));for(let d=0;d<8;d+=1){let g=i.track(Di(16315884,.4)),v=new ze(o,g);i.add(v),a.push(v)}let l=i.track(Di(13994832,1)),c=i.materials.darkMetal,h=new De(8629697),p=new De(13994832),u=new De;return Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:d,progress:g,param:v})=>{let m=gs(g),f=v/1e3;s.userData.set(.05+.9*m*f),r.userData.set(.05+.62*m*f),[e,t].forEach((y,E)=>{let b=y.userData.liquid;u.copy(h).lerp(E===0?p:new De(12939106),m*.5),b.material.color.copy(u)}),n.forEach(y=>{y.material=m>0&&m<1?l:c}),a.forEach((y,E)=>{let b=(E/a.length+d/3)%1;y.position.set(1.45+Math.sin(b*Math.PI*2+E)*.2,1.75+b*1.35,.35+Math.cos(E)*.12),y.scale.setScalar((.5+b*1.2)*(.8+E%3*.25)),y.material.opacity=(.12+.35*m)*(1-b)})})}function n_(i){i.base();let e=[];return[-1.55,1.55].forEach((t,n)=>{let s=new ot;s.add(i.rodBetween([-.65,0,0],[-.65,3.8,0],.07)),s.add(i.rodBetween([.65,0,0],[.65,3.8,0],.07)),s.add(i.rodBetween([-.7,3.8,0],[.7,3.8,0],.09));let r=i.cylinder(.27,.07,[0,3.55,0],i.materials.metal,{segments:24});r.rotation.x=Math.PI/2,r.position.set(0,3.55,0),s.add(r);let a=i.box([.95,.8,.95],[0,.48,0],n===0?i.materials.orange:i.materials.blue),o=i.cylinder(.025,2.5,[0,2.2,0],i.materials.darkMetal,{segments:8});s.add(a,o),s.position.set(t,.1,.3),i.add(s,[`\u041F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u0439 \u043C\u043E\u0442\u043E\u0440 ${n===0?"A":"B"}`,`\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u044F \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0433\u0440\u0443\u0437 \u043D\u0430 2 \u043C, \u043C\u043E\u0442\u043E\u0440 ${n===0?"A \u0442\u0440\u0430\u0442\u0438\u0442 4 \u0441":"B \u0442\u0440\u0430\u0442\u0438\u0442 8 \u0441"}. \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 P = W/t.`]),e.push({crate:a,cable:o,pulley:r})}),i.flow([[-2.7,.6,.2],[-2.4,2.8,.2],[-1.55,3.6,.2]],13994832),i.flow([[2.7,.6,.2],[2.4,2.8,.2],[1.55,3.6,.2]],5672903),i.label("A: 4 \u0441\u3000\u3000B: 8 \u0441",[0,4.55,0],{width:3.6,fontSize:48}),i.blob(.62,-1.55,.3),i.blob(.62,1.55,.3),Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({progress:t})=>{e.forEach(({crate:n,cable:s,pulley:r},a)=>{let o=Gt(a===0?t*2:t,0,1),l=2*gs(o);n.position.y=.48+l;let c=3.35-n.position.y;s.scale.y=Math.max(.1,c/2.5),s.position.y=n.position.y+c/2+.4,r.rotation.z=-o*Math.PI*8})})}function i_(i){i.base();let e=new ot,t=i.cylinder(.72,1.55,[0,.85,0],i.materials.darkMetal);e.add(t);let n=new ot;n.position.set(0,.9,.83);let s=new ze(i.track(new Tn(.66,.12,10,32)),i.materials.orange);n.add(s);for(let l=0;l<6;l+=1){let c=l*Math.PI/3,h=i.rodBetween([0,0,0],[Math.cos(c)*.57,Math.sin(c)*.57,0],.035,i.materials.orange);n.add(h)}e.add(n),e.position.set(-1.6,.1,.2),i.add(e,["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440","\u041C\u043E\u0442\u043E\u0440 \u0434\u0435\u043B\u0438\u0442 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C\u0443\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043D\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A. \u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u041A\u041F\u0414 80%."]);let r=i.box([1.15,1.05,1.15],[1.75,.65,.2],i.materials.blue);i.add(r,["\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0439 \u0433\u0440\u0443\u0437","\u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0433\u0440\u0443\u0437\u0430 \u2014 \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0433\u043B\u0430\u0432\u044B."]),i.add(i.rodBetween([1.75,0,.2],[1.75,3.4,.2],.06),["\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F","\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u0432\u0435\u0434\u0451\u0442 \u0433\u0440\u0443\u0437 \u0441\u0442\u0440\u043E\u0433\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u0432\u0432\u0435\u0440\u0445."]);let a=i.bar("\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u0442\u0434\u0430\u0447\u0430 80%",5672903,[0,.05,-1.7],.8),o=i.bar("\u0422\u0435\u043F\u043B\u043E \u0438 \u0437\u0432\u0443\u043A 20%",12939106,[2.25,.05,-1.7],.2);return i.flow([[-3,.9,.2],[-2.5,1.9,.2],[-1.6,1.4,.2]],14070607),i.flow([[-1.2,1.1,.2],[-.2,2.4,.2],[1.75,2.5,.2],[1.75,1.2,.2]],5672903),i.flow([[-1.5,1.5,.2],[-1.3,2.5,.2],[-.7,3.2,.2]],13994832),i.blob(.75,1.75,.2),Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:l,progress:c})=>{let h=gs(c);n.rotation.z=-(l*Math.PI/3+h*Math.PI*6),r.position.y=.65+1.7*h,a.userData.set(c>0?.8:.05),o.userData.set(c>0?.2:.02)})}function s_(i){i.base(6.7,5.4);let e=new ot;e.add(i.cylinder(.65,1.8,[-1.6,1,0],i.materials.darkMetal));let t=new ot;t.add(i.cylinder(.48,1.1,[0,0,0],i.materials.metal));for(let c=0;c<8;c+=1){let h=i.box([.16,.8,.07],[0,.62,.58],i.materials.orange);h.rotation.z=c*Math.PI/4,h.position.set(Math.cos(c*Math.PI/4)*.55,Math.sin(c*Math.PI/4)*.55,.58),t.add(h)}t.position.set(.1,1.2,0),e.add(t);let n=i.box([1.1,1.1,1.1],[1.35,.65,0],i.materials.blue);e.add(n),e.position.set(-1.25,.08,.4),i.add(e,["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F \xB7 \u041A\u043E\u0442\u0451\u043B, \u0442\u0443\u0440\u0431\u0438\u043D\u0430 \u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440","\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u0442 \u0442\u043E\u043F\u043B\u0438\u0432\u0430 \u0438\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043E\u0434\u044B \u043A \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0442\u0443\u0440\u0431\u0438\u043D\u044B, \u0430 \u0437\u0430\u0442\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u2014 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."]);let s=i.pylon([1.65,.05,-.3],3.5);i.add(s,["\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440\u044B \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0432\u043E\u043B\u044C\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u044C","\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0442\u043E\u043A \u043F\u0440\u0438 \u0442\u043E\u0439 \u0436\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u044F \u043F\u043E\u0442\u0435\u0440\u0438 I\xB2R \u043D\u0430 \u043D\u0430\u0433\u0440\u0435\u0432 \u043B\u0438\u043D\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438."]);let r=i.house([2.7,.05,1.6],.8);i.add(r,["\u0411\u044B\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438","\u0421\u0435\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u043C, \u0433\u0434\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044E\u0442 \u0435\u0451 \u0432 \u0441\u0432\u0435\u0442, \u0442\u0435\u043F\u043B\u043E, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B."]),i.flow([[-2.6,1.2,.4],[-1.8,2.5,.4],[-1.15,1.4,.4]],13994832),i.flow([[-1.1,1.3,.4],[-.4,2.2,.4],[.1,1.25,.4]],14070607),i.flow([[.2,1.3,.4],[.9,3.2,-.3],[1.65,3.2,-.3],[2.4,2.7,.5],[2.7,1.1,1.6]],5672903,{count:10});let a=[],o=i.track(new mn(.15,12,8)),l=i.track(Di(16315884,.3));for(let c=0;c<6;c+=1){let h=new ze(o,l);i.add(h),a.push(h)}return i.label("\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u2192 \u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u2192 \u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u2192 \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",[0,4.35,0],{width:5.2,fontSize:42,wrap:26}),Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:c,progress:h})=>{t.rotation.z=-(c*Math.PI/3+h*Math.PI*8),r.rotation.y=.03*Math.sin(c*Math.PI/6),n.rotation.y=0,a.forEach((p,u)=>{let d=(u/a.length+c/6)%1;p.position.set(-3.85+Math.sin(u+d*3)*.18,1.8+d*1.8,.6),p.scale.setScalar(.6+d*1.5),p.material.opacity=(.12+h*.25)*(1-d)})})}function r_(i){i.base();let e=new ot;[-.75,.75].forEach(h=>e.add(i.rodBetween([h,0,0],[h*.6,2.3,0],.055))),e.add(i.rodBetween([-.9,2.15,0],[.9,2.15,0],.07)),e.position.z=.4,i.add(e,["\u0428\u0442\u0430\u0442\u0438\u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0430","\u0428\u0442\u0430\u0442\u0438\u0432 \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0430\u043A\u0430\u043D \u043D\u0430\u0434 \u043F\u043B\u0430\u043C\u0435\u043D\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u044B\u0434\u0435\u043B\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0434\u0435."]);let t=i.beaker({radius:.72,height:1.45,liquidHeight:.9});t.position.set(0,2.05,.4),i.add(t,["\u0412\u043E\u0434\u0430 \u0432 \u043A\u0430\u043B\u043E\u0440\u0438\u043C\u0435\u0442\u0440\u0435","\u042D\u043D\u0435\u0440\u0433\u0438\u044E, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0443\u044E 200 \u0433 \u0432\u043E\u0434\u044B, \u043C\u043E\u0436\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 Q = mc\u0394T. \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u043E\u0434\u0430 \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442 20% \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043F\u0438\u0449\u0438."]);let n=i.sphere(.4,[0,.55,.4],i.materials.wood);n.scale.set(1.35,.55,.85),i.add(n,["\u041E\u0431\u0440\u0430\u0437\u0435\u0446 \u043F\u0438\u0449\u0438","\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0438\u0449\u0438 \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u0438. \u0412 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u043D\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0430 \u0440\u0430\u0432\u043D\u043E\u0439 17 \u043A\u0414\u0436/\u0433."]);let s=[];for(let h=0;h<7;h+=1){let p=i.track(Di(h%2?14070607:13994832,.82)),u=new ze(new oi(.12+h%2*.05,.75,12),p);u.position.set((h-3)*.16,1.15,.4),i.add(u),s.push(u)}let r=i.cylinder(.055,1.8,[.35,3.2,.4],i.materials.red,{segments:12});i.add(r,["\u0422\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440","\u0421\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432\u043E\u0434\u044B. \u0420\u043E\u0441\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438."]);let a=i.bar("\u042D\u043D\u0435\u0440\u0433\u0438\u044F, \u043F\u043E\u0433\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u043E\u0439",13994832,[-2.05,.05,-1.5],.03),o=i.bar("\u0422\u0435\u043F\u043B\u043E, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044E",12939106,[2.05,.05,-1.5],.03);i.flow([[0,.8,.4],[-.6,1.7,.4],[-.25,2.4,.4],[0,2.8,.4]],13994832),i.flow([[.2,1.2,.4],[1.2,1.9,.2],[2.05,1.3,-1.5]],12939106);let l=new De(8629697),c=new De;return Dn({group:i.group,infos:i.infos,interaction:null,update:()=>{},dispose:()=>i.dispose()},({t:h,progress:p,param:u})=>{let d=gs(p);s.forEach((v,m)=>{v.scale.y=(.2+d*.8)*(.8+.2*Math.sin(h*Math.PI*2+m)),v.visible=p>0}),n.scale.y=.55*(1-d*.45),a.userData.set(.03+d*u/5),o.userData.set(.03+d*u/5*.8),r.scale.y=1+d*.08;let g=t.userData.liquid;c.copy(l).lerp(new De(13994832),d*.35),g.material.color.copy(c)})}function a_(i){i.base();let e=[[-3,3.1,.2],[-2.2,1.35,.2],[-1,.55,.2],[0,.35,.2],[1,.55,.2],[2.2,1.35,.2],[3,3.1,.2]];[-.32,.32].forEach((u,d)=>{let g=e.map(([m,f,y])=>[m,f,y+u]),v=i.tube(g,.075,i.materials.darkMetal);i.add(v,d===0?["U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0436\u0451\u043B\u043E\u0431","\u0416\u0451\u043B\u043E\u0431 \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0448\u0430\u0440\u0430. \u0422\u0440\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0447\u0430\u0441\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0442\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439."]:void 0)});let t=new wn(e.map(u=>new P(...u))),n=i.sphere(.38,[-3,3.48,.2],i.materials.blue);i.add(n,["\u0428\u0430\u0440 \u043E\u043F\u044B\u0442\u0430 \u043F\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u0438","\u0421\u0443\u043C\u043C\u0430 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0448\u0430\u0440\u0430, \u043A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C 100 \u0414\u0436."]);let s=i.bar("\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",5672903,[-2.25,.05,-1.75],1),r=i.bar("\u041A\u0438\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",13994832,[-.75,.05,-1.75],.03),a=i.bar("\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",12939106,[.75,.05,-1.75],.02),o=i.bar("\u041F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",8231034,[2.25,.05,-1.75],1);i.flow([[0,.8,.2],[.3,1.8,-.3],[.75,1.2,-1.75]],12939106),i.label("\u041F\u043E\u043B\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 100 \u0414\u0436",[0,4.25,0],{width:3.8,fontSize:48});let l=i.blob(.5,-3,.2),c=u=>{let d=0,g=1/0;for(let v=0;v<=60;v+=1){let m=v/60,y=t.getPointAt(m).distanceToSquared(u);y<g&&(g=y,d=m)}return d},h=[];for(let u=0;u<=32;u+=1){let d=t.getPointAt(u/32);h.push([d.x,d.y+.38,d.z])}let p=i.makeInteraction({object:n,planeZ:.2,guidePoints:h,fromObject:()=>c(n.position),valueFromPoint:u=>c(u),restValue:.5,releaseDuration:4.8});return Dn({group:i.group,infos:i.infos,interaction:p,update:()=>{},dispose:()=>i.dispose()},({t:u,progress:d,param:g,manual:v})=>{let m=!!v?.active,f=d*Math.PI*2,y=d<=0?0:(1-Math.cos(f))/2;m&&(y=v.releasing?.5+(v.from-.5)*Math.cos(v.releaseProgress*Math.PI*4)*Math.pow(1-v.releaseProgress,1.15):v.value);let E=t.getPointAt(Gt(y,0,1));n.position.copy(E),n.position.y+=.38,n.rotation.z=-y*Math.PI*10;let b=m?.02+v.releaseProgress*g*.45:d*g,A=m?Gt(E.y/3.1,.03,1)*(1-b):d<=0?1:Gt(E.y/3.1,.05,1)*(1-b),T=v?.dragging?.02:Math.max(.02,1-b-A);s.userData.set(A),r.userData.set(T),a.userData.set(Math.max(.02,b)),o.userData.set(1),!m&&d===0&&(n.rotation.z=u*Math.PI/6),l.position.x=n.position.x,l.position.z=n.position.z})}var Lu=[Kg,jg,Qg,e_,t_,n_,i_,s_,r_,a_];function hc(i){let e=new cc;return(Lu[i-1]??Lu[0])(e)}var Uu=["\u0410","\u0411","\u0412"];function te(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t&&t.append(n),n}function yn(i,e="0 0 24 24"){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("viewBox",e),t.setAttribute("aria-hidden","true"),t.innerHTML=`<path d="${i}"></path>`,t}var ln={book:"M4 5.5c5-1.4 10-.6 16 2.5v11c-6-3.1-11-3.9-16-2.5zM8 9.5l7 2M8 13l5 1.5",contents:"M5 6h14M5 12h14M5 18h14",prev:"m15 5-7 7 7 7",next:"m9 5 7 7-7 7",reset:"M4 4v6h6M5.5 15a7 7 0 1 0 .5-7.8L4 10",pause:"M9 5v14M15 5v14",play:"M8 5.5v13l10-6.5z",close:"m6 6 12 12M18 6 6 18"},Io=class{constructor(e,t){this.chapter=null;this.prediction=null;this.toastTimer=null;this.handlers=t,this.els={},e.innerHTML="";let n=te("div","e-app",e),s=te("div","e-canvas-host",n);s.id="e-canvas-host";let r=te("header","e-top",n),a=te("div","e-brand",r),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 40 40"),o.setAttribute("aria-hidden","true"),o.innerHTML='<circle cx="20" cy="20" r="15" stroke-width="1.4"></circle><circle cx="20" cy="5" r="3.4" fill="#C1512F" stroke="none"></circle>',a.append(o);let l=te("div","e-brand-text",a);te("strong","",l).textContent="\u042D\u043D\u0435\u0440\u0433\u0438\u044F",te("span","",l).textContent="\u041C\u0435\u0440\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0438";let c=te("div","e-top-actions",r);this.els.progress=te("span","e-progress",c),this.els.bookBtn=te("button","e-icon-btn e-book-btn",c),this.els.bookBtn.type="button",this.els.bookBtn.setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E \u0433\u043B\u0430\u0432\u044B"),this.els.bookBtn.title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E \u0433\u043B\u0430\u0432\u044B",this.els.bookBtn.append(yn(ln.book));let h=te("div","e-bottom",n);this.els.status=te("div","e-status",h),this.els.status.setAttribute("role","status"),this.els.results=te("section","e-results",h),this.els.results.hidden=!0,this.els.resultsGrid=te("div","e-results-grid",this.els.results),this.els.explainBtn=te("button","e-explain-btn",this.els.results),this.els.explainBtn.type="button",this.els.explainBtn.append(yn(ln.book)),te("span","",this.els.explainBtn).textContent="\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435",this.els.explainBtn.addEventListener("click",()=>this.openDialog("lesson"));let p=te("div","e-controls",h),u=te("div","e-prediction",p);u.setAttribute("role","radiogroup"),u.setAttribute("aria-label","\u041F\u0440\u043E\u0433\u043D\u043E\u0437"),te("span","e-controls-label",u).textContent="\u041F\u0440\u043E\u0433\u043D\u043E\u0437",this.els.predBtns=[];for(let O=0;O<3;O+=1){let Q=te("button","e-pred-btn",u);Q.type="button",Q.textContent=Uu[O],Q.setAttribute("role","radio"),Q.setAttribute("aria-checked","false"),Q.addEventListener("click",()=>this.handlers.onPrediction(O)),this.els.predBtns.push(Q)}let d=te("div","e-param",p),g=te("div","e-param-head",d);this.els.paramLabel=te("label","",g),this.els.paramValue=te("output","",g),this.els.slider=te("input","",d),this.els.slider.type="range",this.els.slider.addEventListener("input",()=>this.handlers.onParam(Number(this.els.slider.value))),this.els.paramLabel.htmlFor="e-param-slider",this.els.slider.id="e-param-slider";let v=te("div","e-actions",p);this.els.run=te("button","e-run",v),this.els.run.type="button",this.els.run.addEventListener("click",()=>this.handlers.onRun()),this.els.reset=te("button","e-icon-btn",v),this.els.reset.type="button",this.els.reset.setAttribute("aria-label","\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442"),this.els.reset.title="\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442",this.els.reset.append(yn(ln.reset)),this.els.reset.addEventListener("click",()=>this.handlers.onReset());let m=te("nav","e-dock",h);m.setAttribute("aria-label","\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0433\u043B\u0430\u0432\u0430\u043C");let f=te("button","e-icon-btn",m);f.type="button",f.setAttribute("aria-label","\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),f.title="\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435",f.append(yn(ln.contents)),f.addEventListener("click",()=>this.openContents()),te("span","e-divider",m),this.els.prev=te("button","e-icon-btn",m),this.els.prev.type="button",this.els.prev.setAttribute("aria-label","\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"),this.els.prev.title="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",this.els.prev.append(yn(ln.prev)),this.els.prev.addEventListener("click",()=>this.chapter&&this.handlers.onChapter(this.chapter.id-1)),this.els.indicator=te("button","e-indicator",m),this.els.indicator.type="button",this.els.indicator.addEventListener("click",()=>this.openContents()),this.els.next=te("button","e-icon-btn",m),this.els.next.type="button",this.els.next.setAttribute("aria-label","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"),this.els.next.title="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",this.els.next.append(yn(ln.next)),this.els.next.addEventListener("click",()=>this.chapter&&this.handlers.onChapter(this.chapter.id+1)),te("span","e-divider",m),this.els.motion=te("button","e-icon-btn",m),this.els.motion.type="button",this.els.motion.setAttribute("aria-label","\u041F\u0430\u0443\u0437\u0430 \u0444\u043E\u043D\u043E\u0432\u043E\u0439 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438"),this.els.motion.setAttribute("aria-pressed","false"),this.els.motion.title="\u041F\u0430\u0443\u0437\u0430 \u0444\u043E\u043D\u043E\u0432\u043E\u0439 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438",this.els.motion.append(yn(ln.pause)),this.els.motion.addEventListener("click",()=>{let O=this.els.motion.getAttribute("aria-pressed")!=="true";this.els.motion.setAttribute("aria-pressed",String(O)),this.els.motion.replaceChildren(yn(O?ln.play:ln.pause)),this.handlers.onToggleMotion(O)}),this.els.dialog=te("dialog","e-dialog",n),this.els.dialog.setAttribute("aria-labelledby","e-dialog-title");let y=te("div","e-dialog-head",this.els.dialog),E=te("div","e-tabs",y);this.els.tabLesson=te("button","e-tab active",E),this.els.tabLesson.type="button",this.els.tabLesson.textContent="\u0413\u043B\u0430\u0432\u0430",this.els.tabHelp=te("button","e-tab",E),this.els.tabHelp.type="button",this.els.tabHelp.textContent="\u0421\u043F\u0440\u0430\u0432\u043A\u0430";let b=te("button","e-icon-btn e-close",y);b.type="button",b.setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E"),b.append(yn(ln.close)),b.addEventListener("click",()=>this.els.dialog.close()),this.els.paneLesson=te("div","e-pane",this.els.dialog),this.els.paneLesson.dataset.pane="lesson";let A=te("div","e-lesson-head",this.els.paneLesson);this.els.kicker=te("span","e-kicker",A),this.els.title=te("h2","e-lesson-title",A),this.els.title.id="e-dialog-title",this.els.subtitle=te("p","e-lesson-subtitle",A),this.els.intro=te("p","e-lesson-intro",this.els.paneLesson);let T=te("div","e-formula-row",this.els.paneLesson);te("span","",T).textContent="\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435",this.els.formula=te("strong","",T);let _=te("section","e-predict",this.els.paneLesson),S=te("div","e-section-label",_);te("span","",S).textContent="01",te("h3","",S).textContent="\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437",this.els.question=te("p","e-question",_),this.els.options=te("div","e-options",_);let N=te("section","e-answer",this.els.paneLesson),I=te("div","e-section-label",N);te("span","",I).textContent="02",te("h3","",I).textContent="\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435",this.els.answerBtn=te("button","e-answer-btn",N),this.els.answerBtn.type="button",te("span","",this.els.answerBtn).textContent="\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430",this.els.answerBtn.append(yn(ln.book)),this.els.answerContent=te("div","e-answer-content",N),this.els.answerContent.hidden=!0,this.els.answerText=te("p","",this.els.answerContent),this.els.feedback=te("p","e-feedback",this.els.answerContent),this.els.answerBtn.addEventListener("click",()=>{let O=!this.els.answerContent.hidden;this.els.answerContent.hidden=O,this.els.answerBtn.firstChild.textContent=O?"\u0421\u043D\u043E\u0432\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435":"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435",O||this.handlers.onAnswerOpened()}),this.els.paneHelp=te("div","e-pane",this.els.dialog),this.els.paneHelp.dataset.pane="help",this.els.helpBody=te("div","e-help",this.els.paneHelp),this.els.tabLesson.addEventListener("click",()=>this.setTab("lesson")),this.els.tabHelp.addEventListener("click",()=>this.setTab("help")),this.els.dialog.addEventListener("click",O=>{O.target===this.els.dialog&&this.els.dialog.close()}),this.els.dialog.addEventListener("close",()=>this.handlers.onDialogToggle(!1)),this.els.dialog.addEventListener("open",()=>this.handlers.onDialogToggle(!0)),this.els.contents=te("dialog","e-dialog e-contents-dialog",n);let U=te("div","e-dialog-head",this.els.contents),F=te("div","",U);te("span","e-dialog-kicker",F).textContent="\u042D\u043D\u0435\u0440\u0433\u0438\u044F";let V=te("h2","e-dialog-title",F);V.textContent="\u0414\u0435\u0441\u044F\u0442\u044C \u0433\u043B\u0430\u0432";let C=te("button","e-icon-btn e-close",U);C.type="button",C.setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),C.append(yn(ln.close)),C.addEventListener("click",()=>this.els.contents.close());let G=te("p","e-dialog-intro",this.els.contents);G.textContent="\u041A\u0430\u0436\u0434\u0430\u044F \u0433\u043B\u0430\u0432\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0430. \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0438 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u043E \u0433\u043B\u0430\u0432\u0435.",this.els.chapterList=te("div","e-chapter-list",this.els.contents);let q=te("p","e-local-note",this.els.contents);q.textContent="\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.",this.els.contents.addEventListener("click",O=>{O.target===this.els.contents&&this.els.contents.close()}),this.els.toast=te("div","e-toast",n),this.els.toast.setAttribute("role","status"),this.els.toast.hidden=!0,this.els.fatal=te("div","e-fatal",n),this.els.fatal.hidden=!0,this.els.fatal.innerHTML="<strong>3D-\u0441\u0446\u0435\u043D\u0443 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044C</strong><p>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430. \u0422\u0435\u043A\u0441\u0442\u044B \u0433\u043B\u0430\u0432 \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 \u043E\u043A\u043D\u0435 \u0433\u043B\u0430\u0432\u044B.</p>",this.els.poster=te("div","e-poster",n),this.els.poster.innerHTML='<div class="e-poster-orbit"></div><div class="e-poster-ball"></div><small>\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u0446\u0435\u043D\u0443\u2026</small>',this.els.bookBtn.addEventListener("click",()=>this.openDialog("lesson")),document.addEventListener("keydown",O=>{O.target instanceof HTMLInputElement||this.els.dialog.open||this.els.contents.open||(O.key==="PageDown"?(O.preventDefault(),this.chapter&&this.chapter.id<10&&this.handlers.onChapter(this.chapter.id+1)):O.key==="PageUp"&&(O.preventDefault(),this.chapter&&this.chapter.id>1&&this.handlers.onChapter(this.chapter.id-1)))})}get canvasHost(){return document.getElementById("e-canvas-host")}setTab(e){this.els.tabLesson.classList.toggle("active",e==="lesson"),this.els.tabHelp.classList.toggle("active",e==="help"),this.els.paneLesson.classList.toggle("visible",e==="lesson"),this.els.paneHelp.classList.toggle("visible",e==="help")}openDialog(e="lesson"){this.setTab(e),this.els.dialog.open||this.els.dialog.showModal()}openContents(){this.els.contents.open||this.els.contents.showModal()}isDialogOpen(){return this.els.dialog.open||this.els.contents.open}hidePoster(){this.els.poster.classList.add("ready"),window.setTimeout(()=>{this.els.poster.hidden=!0},380)}showFatal(){this.els.fatal.hidden=!1,this.hidePoster()}toast(e){this.toastTimer&&window.clearTimeout(this.toastTimer),this.els.toast.textContent=e,this.els.toast.hidden=!1,this.toastTimer=window.setTimeout(()=>{this.els.toast.hidden=!0},2800)}setChapter(e,t=[]){this.chapter=e,this.els.kicker.textContent=`\u0413\u043B\u0430\u0432\u0430 ${String(e.id).padStart(2,"0")}`,this.els.title.textContent=e.title,this.els.subtitle.textContent=e.subtitle,this.els.intro.textContent=e.intro,this.els.formula.textContent=e.formula,this.els.question.textContent=e.question,this.els.options.replaceChildren(),e.options.forEach((n,s)=>{let r=te("button","e-option",this.els.options);r.type="button",r.innerHTML=`<span class="e-option-letter">${Uu[s]}</span><span>${n}</span>`,r.addEventListener("click",()=>this.handlers.onPrediction(s))}),this.els.answerContent.hidden=!0,this.els.answerBtn.firstChild.textContent="\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430",this.els.answerBtn.disabled=!0,this.els.feedback.textContent="",this.els.answerText.textContent=e.explanation,this.renderHelp(e,t),this.setPrediction(null),this.els.indicator.textContent=`${String(e.id).padStart(2,"0")} / 10`,this.els.prev.disabled=e.id===1,this.els.next.disabled=e.id===10,this.setParam(e.param),this.hideResults()}renderHelp(e,t){let n=this.els.helpBody;n.replaceChildren();let s=te("h3","e-help-title",n);s.textContent=`${e.title} \xB7 \u0446\u0435\u043B\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F`,te("p","",n).textContent=e.teacher.focus;let r=te("h3","e-help-title",n);r.textContent="\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F";let a=te("ul","",n);e.teacher.steps.forEach(h=>{te("li","",a).textContent=h});let o=te("h3","e-help-title",n);if(o.textContent="\u0413\u0440\u0430\u043D\u0438\u0446\u044B \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0435 \u0437\u0430\u0431\u043B\u0443\u0436\u0434\u0435\u043D\u0438\u044F",te("p","",n).textContent=e.teacher.misconception,t.length){let h=te("h3","e-help-title",n);h.textContent="\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u044D\u0442\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438",t.forEach(p=>{if(!p.title)return;let u=te("div","e-equip",n);te("strong","",u).textContent=p.title,te("p","",u).textContent=p.description})}let l=te("div","e-calc-note",n),c=te("h3","e-help-title",l);c.textContent="\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u0430",te("p","",l).textContent=Eu}setParam(e){this.els.paramLabel.textContent=e.label,this.els.slider.min=String(e.min),this.els.slider.max=String(e.max),this.els.slider.step=String(e.step),this.els.slider.value=String(e.value),this.updateParamValue()}updateParamValue(){if(!this.chapter)return;let e=this.chapter.param;this.els.paramValue.textContent=`${Number(this.els.slider.value).toFixed(e.decimals)}${e.unit?` ${e.unit}`:""}`}get paramValue(){return Number(this.els.slider.value)}setPrediction(e){this.prediction=e,this.els.predBtns.forEach((t,n)=>{t.classList.toggle("selected",n===e),t.setAttribute("aria-checked",String(n===e))}),this.els.options.querySelectorAll(".e-option").forEach((t,n)=>{t.classList.toggle("selected",n===e)}),this.els.predBtns.forEach(t=>t.classList.remove("correct"))}get predictionValue(){return this.prediction}markCorrect(){this.chapter&&(this.els.predBtns[this.chapter.answer]?.classList.add("correct"),this.els.options.querySelectorAll(".e-option").forEach((e,t)=>{e.classList.toggle("correct",t===this.chapter.answer)}))}setRunState(e){let{running:t,ran:n}=e;this.els.slider.disabled=t,this.els.predBtns.forEach(s=>s.disabled=t),t?(this.els.run.disabled=!0,this.els.run.textContent=`\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u2026 ${Math.round((e.progress??0)*100)}%`,this.setStatus("\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0437\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430\u043C\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",!0)):(this.els.run.disabled=this.prediction===null,this.els.run.textContent=n?"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430":this.prediction===null?"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437":"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442")}setStatus(e,t=!1){this.els.status.textContent=e,this.els.status.classList.toggle("running",t)}showResults(e){this.els.resultsGrid.replaceChildren(),e.forEach(([t,n])=>{let s=te("div","e-result-item",this.els.resultsGrid);te("span","",s).textContent=t,te("strong","",s).textContent=n}),this.els.results.hidden=!1,this.els.results.classList.add("visible")}hideResults(){this.els.results.hidden=!0,this.els.results.classList.remove("visible")}setFeedback(e,t,n){this.els.feedback.textContent=e?"\u2713 \u0412\u0430\u0448 \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u0441\u043E\u0432\u043F\u0430\u043B \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430.":`\u0412\u0430\u0448 \u043F\u0440\u043E\u0433\u043D\u043E\u0437: \xAB${t}\xBB. \u0422\u043E\u0447\u043D\u044B\u0439 \u0432\u044B\u0432\u043E\u0434: \xAB${n}\xBB.`}unlockAnswer(){this.els.answerBtn.disabled=!1,this.els.answerBtn.firstChild.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u0433\u043B\u0430\u0432\u044B"}unlockAnswerReset(){this.els.answerBtn.disabled=!0,this.els.answerBtn.firstChild.textContent="\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430",this.els.answerContent.hidden=!0}setProgressText(e){this.els.progress.textContent=`${e} / 10 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D\u043E`}appendChapterEntry(e,t,n,s){let r=te("button",`e-chapter-entry${t?" current":""}`);r.type="button",r.innerHTML=`<span class="e-chapter-number">${String(e.id).padStart(2,"0")}</span><span class="e-chapter-copy"><strong>${e.title}</strong><small>${e.subtitle}</small></span><span class="e-chapter-stamp${n?" earned":""}" aria-hidden="true">${n?"\u2713":"\xB7"}</span>`,r.addEventListener("click",()=>{this.els.contents.close(),s()}),this.els.chapterList.append(r)}};var o_=6,Nu="joule-book-progress-v2",Fu=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Ou(i){let e=new Io(i,{onChapter:ce=>Re(ce),onParam:()=>me(),onRun:()=>we(),onReset:()=>Ue(!0),onPrediction:ce=>ee(ce),onAnswerOpened:()=>Me(),onToggleMotion:ce=>{u=ce},onDialogToggle:ce=>{d=ce,document.getElementById("e-canvas-host")?.classList.toggle("blurred",ce),ce||m.getDelta()}}),t=!1,n=null,s=null,r=null,a=null,o=null,l=null,c=new P(3.5,1.5,1.9),h=xr[0],p=0,u=!1,d=!1,g=!1,v=-1,m=new nr,f={running:!1,ran:!1,startedAt:0,progress:0},y={active:!1,dragging:!1,releasing:!1,value:0,from:0,releaseProgress:0},E=0,b=null,A=new Set,T=null,_=!1,S=new tr,N=new ge,I=new Bt(new P(0,0,1),0),U=new P;try{let ce=localStorage.getItem(Nu);ce&&JSON.parse(ce).forEach(fe=>Number.isInteger(fe)&&Number(fe)>=1&&Number(fe)<=10&&A.add(Number(fe)))}catch{}let F=()=>{try{localStorage.setItem(Nu,JSON.stringify([...A]))}catch{}},V=()=>{n=new wo({antialias:!0,powerPreference:"high-performance"}),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=_t,n.toneMapping=ar,n.toneMappingExposure=1.06,s=new Bs,s.background=new De(Ln.bg),s.fog=new Os(Ln.bg,30,95),r=new kt(44,window.innerWidth/window.innerHeight,.1,220),a=new Co(r,n.domElement),a.enableDamping=!0,a.dampingFactor=.08,a.enablePan=!1,a.rotateSpeed=.55,a.minDistance=7,a.maxDistance=22,a.minPolarAngle=.3,a.maxPolarAngle=1.26,a.addEventListener("start",()=>{g=!0}),C(),s.add(new js(16774368,9073752,1.5));let ce=new os(16772564,2.1);ce.position.set(-11,21,13),s.add(ce);let fe=new os(14280191,.6);fe.position.set(14,9,-12),s.add(fe),l=Iu(),l.hitbox.position.set(3.5,1.5,1.9),c.set(3.5,1.5,1.9),s.add(l.hitbox),e.canvasHost.appendChild(n.domElement),j()},C=()=>{if(!r||!a)return;let ce=window.innerWidth<=760&&window.innerHeight>500,fe=window.innerHeight<=500;r.fov=ce||fe?50:46,ce?(r.position.set(.4,12.6,15.6),a.target.set(0,1.15,0)):fe?(r.position.set(.7,10.2,11.8),a.target.set(0,1.15,0)):(r.position.set(.3,7.7,10.1),a.target.set(0,1.3,.05)),r.updateProjectionMatrix(),l&&(ce?c.set(2.75,1.3,1.5):c.set(3.5,1.5,1.9),l.hitbox.position.copy(c)),a.update()},G=ce=>{let fe=n.domElement.getBoundingClientRect();N.x=(ce.clientX-fe.left)/fe.width*2-1,N.y=-((ce.clientY-fe.top)/fe.height)*2+1,S.setFromCamera(N,r)},q=ce=>o?.interaction?(G(ce),S.intersectObject(o.interaction.object,!0).length>0):!1,O=ce=>l?(G(ce),S.intersectObject(l.hitbox,!0).length>0):!1,Q=()=>{y.active=!1,y.dragging=!1,y.releasing=!1,y.value=0,y.from=0,y.releaseProgress=0,a&&(a.enabled=!0),n&&(n.domElement.style.cursor="")},W=()=>{y.dragging=!1,y.from=y.value,y.releaseProgress=0,a&&(a.enabled=!0),n&&(n.domElement.style.cursor=""),y.releasing=!0,E=performance.now()},j=()=>{let ce=n.domElement;ce.addEventListener("pointerdown",fe=>{if(fe.button===0&&(T={x:fe.clientX,y:fe.clientY},q(fe))){fe.preventDefault(),fe.stopImmediatePropagation(),f.running&&(f.running=!1,f.progress=0,e.setRunState({running:!1,ran:f.ran}),e.setStatus("\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u043F\u043E\u043A\u0430\u0437\u0430.")),y.active=!0,y.dragging=!0,y.releasing=!1,y.value=o.interaction.fromObject(),y.from=y.value,y.releaseProgress=0,a.enabled=!1,ce.style.cursor="grabbing";try{ce.setPointerCapture(fe.pointerId)}catch{}}},{capture:!0}),ce.addEventListener("pointermove",fe=>{if(y.dragging&&o?.interaction){fe.preventDefault(),fe.stopImmediatePropagation(),G(fe),I.constant=-o.interaction.planeZ,S.ray.intersectPlane(I,U)&&(y.value=o.interaction.valueFromPoint(U));return}if(fe.buttons===0){let $e=q(fe),rt=$e?!1:O(fe);ce.style.cursor=$e?"grab":rt?"pointer":"",_=rt}},{capture:!0}),ce.addEventListener("pointerup",fe=>{if(y.dragging&&o?.interaction){fe.preventDefault(),fe.stopImmediatePropagation(),W();return}let $e=T;T=null,!(!$e||Math.hypot(fe.clientX-$e.x,fe.clientY-$e.y)>8)&&O(fe)&&e.openDialog("lesson")},{capture:!0}),ce.addEventListener("pointercancel",fe=>{T=null,y.dragging&&(fe.preventDefault(),W())},{capture:!0})},ee=ce=>{b=ce,e.setPrediction(ce),(f.ran||f.running)&&Ue(!1),e.setRunState({running:!1,ran:!1}),e.setStatus("\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043F\u0440\u0438\u043D\u044F\u0442. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442.")},we=()=>{b===null||f.running||(f.ran&&Ue(!1),Q(),f.running=!0,f.startedAt=performance.now(),f.progress=0,v=-1,e.setRunState({running:!0,ran:!1,progress:0}))},Ue=ce=>{f.running=!1,f.ran=!1,f.progress=0,e.hideResults(),e.unlockAnswerReset(),e.setRunState({running:!1,ran:!1}),e.setStatus(b===null?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442.":"\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043F\u0440\u0438\u043D\u044F\u0442. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442."),ce&&e.toast("\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D. \u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B.")},Z=()=>{f.running=!1,f.ran=!0,f.progress=1,e.markCorrect(),e.showResults(h.result(e.paramValue)),e.unlockAnswer(),b!==null&&e.setFeedback(b===h.answer,h.options[b],h.options[h.answer]),e.setRunState({running:!1,ran:!0}),e.setStatus("\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u2014 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435, \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u2014 \u0432 \u043E\u043A\u043D\u0435 \u0433\u043B\u0430\u0432\u044B.")},me=()=>{e.updateParamValue(),(f.ran||f.running)&&Ue(!1)},Me=()=>{A.has(h.id)||(A.add(h.id),F(),e.setProgressText(A.size),e.toast(`\u0413\u043B\u0430\u0432\u0430 ${String(h.id).padStart(2,"0")} \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430`))},Re=ce=>{let fe=Math.min(10,Math.max(1,Math.round(ce)));if(!(!s||fe===h.id)){h=xr[fe-1],o&&(s.remove(o.group),o.dispose()),Q(),o=hc(h.id),s.add(o.group),b=null,f.running=!1,f.ran=!1,f.progress=0,e.setChapter(h,o.infos),e.setProgressText(A.size),e.setRunState({running:!1,ran:!1}),e.setStatus("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442."),document.title=`${h.title} \xB7 \u042D\u043D\u0435\u0440\u0433\u0438\u044F`;try{history.replaceState(null,"",`#chapter-${h.id}`)}catch{}}},_e=()=>{xr.forEach(ce=>{e.appendChapterEntry(ce,ce.id===h.id,A.has(ce.id),()=>Re(ce.id))})},Oe=()=>{if(t||!n||!s||!r||!o||d)return;let ce=Math.min(m.getDelta(),.1);if(u||(p+=ce),f.running){f.progress=Math.min(1,(performance.now()-f.startedAt)/(Fu?1200:o_*1e3));let $e=Math.floor(f.progress*100);$e!==v&&(v=$e,e.setRunState({running:!0,ran:!1,progress:f.progress}))}if(y.releasing&&o.interaction){let $e=(Fu?.35:o.interaction.releaseDuration)*1e3;y.releaseProgress=Math.min(1,(performance.now()-E)/$e),y.releaseProgress>=1&&(y.releasing=!1,y.value=o.interaction.restValue)}o.interaction?.guide&&(o.interaction.guide.visible=y.active&&(y.dragging||y.releasing));let fe={t:p,progress:f.progress,running:f.running,param:e.paramValue,manual:y.active?{...y}:null};if(o.update(fe),l){l.hitbox.position.set(c.x,c.y+Math.sin(p*1.6)*.07,c.z);let $e=_?1:.86,rt=l.sprite.scale.x+($e-l.sprite.scale.x)*.18;l.sprite.scale.set(rt,rt,1)}a.update(),n.render(s,r),f.running&&f.progress>=1&&Z()},ut=()=>{!n||!r||(r.aspect=window.innerWidth/window.innerHeight,g?r.updateProjectionMatrix():C(),n.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",ut);let Ie=Math.min(10,Math.max(1,Number(location.hash.match(/chapter-(\d+)/)?.[1])||1));return h=xr[Ie-1],Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(ce=>window.setTimeout(ce,2500))]).then(()=>{if(!t)try{V(),o=hc(h.id),s.add(o.group),e.setChapter(h,o.infos),e.setProgressText(A.size),e.setRunState({running:!1,ran:!1}),e.setStatus("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442."),_e(),document.title=`${h.title} \xB7 \u042D\u043D\u0435\u0440\u0433\u0438\u044F`,n.setAnimationLoop(Oe),n.render(s,r),e.hidePoster()}catch(ce){console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3D-\u0441\u0446\u0435\u043D\u0443:",ce),e.showFatal()}}),window.__ENERGY_TEST__={goTo:ce=>Re(ce),openBook:()=>e.openDialog("lesson"),openHelp:()=>e.openDialog("help"),state:()=>({chapter:h.id,running:f.running,progress:f.progress,prediction:b,stamps:[...A]})},()=>{t=!0,window.removeEventListener("resize",ut),n?.setAnimationLoop(null),a?.dispose(),o?.dispose(),n?.dispose(),i.innerHTML=""}}function Bu(){let i=document.getElementById("app");i&&Ou(i)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bu,{once:!0}):Bu();})();
