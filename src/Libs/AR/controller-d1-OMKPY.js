import { O as OB } from "./ui-fBadYuor.js";
var tQ = typeof self < "u" ? self : {};
function zi(A, I) {
  A: {
    for (var g = ["CLOSURE_FLAGS"], E = tQ, D = 0; D < g.length; D++)
      if ((E = E[g[D]]) == null) {
        g = null;
        break A;
      }
    g = E;
  }
  return (A = g && g[A]) != null ? A : I;
}
function Qg() {
  throw Error("Invalid UTF8");
}
function Ai(A, I) {
  return I = String.fromCharCode.apply(null, I), A == null ? I : A + I;
}
let ZC, jB;
const J0 = typeof TextDecoder < "u";
let c0;
const Y0 = typeof TextEncoder < "u";
function vi(A) {
  if (Y0)
    A = (c0 || (c0 = new TextEncoder())).encode(A);
  else {
    let g = 0;
    const E = new Uint8Array(3 * A.length);
    for (let D = 0; D < A.length; D++) {
      var I = A.charCodeAt(D);
      if (128 > I)
        E[g++] = I;
      else {
        if (2048 > I)
          E[g++] = I >> 6 | 192;
        else {
          if (55296 <= I && 57343 >= I) {
            if (56319 >= I && D < A.length) {
              const o = A.charCodeAt(++D);
              if (56320 <= o && 57343 >= o) {
                I = 1024 * (I - 55296) + o - 56320 + 65536, E[g++] = I >> 18 | 240, E[g++] = I >> 12 & 63 | 128, E[g++] = I >> 6 & 63 | 128, E[g++] = 63 & I | 128;
                continue;
              }
              D--;
            }
            I = 65533;
          }
          E[g++] = I >> 12 | 224, E[g++] = I >> 6 & 63 | 128;
        }
        E[g++] = 63 & I | 128;
      }
    }
    A = g === E.length ? E : E.subarray(0, g);
  }
  return A;
}
var AC, _i = zi(610401301, !1), HQ = zi(572417392, !0);
const Ii = tQ.navigator;
function CQ(A) {
  return !!_i && !!AC && AC.brands.some(({ brand: I }) => I && I.indexOf(A) != -1);
}
function CI(A) {
  var I;
  return (I = tQ.navigator) && (I = I.userAgent) || (I = ""), I.indexOf(A) != -1;
}
function mI() {
  return !!_i && !!AC && 0 < AC.brands.length;
}
function PB() {
  return mI() ? CQ("Chromium") : (CI("Chrome") || CI("CriOS")) && !(!mI() && CI("Edge")) || CI("Silk");
}
AC = Ii && Ii.userAgentData || null;
var L0 = !mI() && (CI("Trident") || CI("MSIE"));
!CI("Android") || PB(), PB(), CI("Safari") && (PB() || !mI() && CI("Coast") || !mI() && CI("Opera") || !mI() && CI("Edge") || (mI() ? CQ("Microsoft Edge") : CI("Edg/")) || mI() && CQ("Opera"));
var $i = {}, Og = null;
function t0(A) {
  var I = A.length, g = 3 * I / 4;
  g % 3 ? g = Math.floor(g) : "=.".indexOf(A[I - 1]) != -1 && (g = "=.".indexOf(A[I - 2]) != -1 ? g - 2 : g - 1);
  var E = new Uint8Array(g), D = 0;
  return function(o, s) {
    function N(AA) {
      for (; y < o.length; ) {
        var T = o.charAt(y++), aA = Og[T];
        if (aA != null)
          return aA;
        if (!/^[\s\xa0]*$/.test(T))
          throw Error("Unknown base64 encoding at char: " + T);
      }
      return AA;
    }
    AD();
    for (var y = 0; ; ) {
      var U = N(-1), L = N(0), d = N(64), e = N(64);
      if (e === 64 && U === -1)
        break;
      s(U << 2 | L >> 4), d != 64 && (s(L << 4 & 240 | d >> 2), e != 64 && s(d << 6 & 192 | e));
    }
  }(A, function(o) {
    E[D++] = o;
  }), D !== g ? E.subarray(0, D) : E;
}
function AD() {
  if (!Og) {
    Og = {};
    for (var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), I = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; 5 > g; g++) {
      var E = A.concat(I[g].split(""));
      $i[g] = E;
      for (var D = 0; D < E.length; D++) {
        var o = E[D];
        Og[o] === void 0 && (Og[o] = D);
      }
    }
  }
}
var ID = typeof Uint8Array < "u", gD = !L0 && typeof btoa == "function";
function gi(A) {
  if (!gD) {
    var I;
    I === void 0 && (I = 0), AD(), I = $i[I];
    var g = Array(Math.floor(A.length / 3)), E = I[64] || "";
    let y = 0, U = 0;
    for (; y < A.length - 2; y += 3) {
      var D = A[y], o = A[y + 1], s = A[y + 2], N = I[D >> 2];
      D = I[(3 & D) << 4 | o >> 4], o = I[(15 & o) << 2 | s >> 6], s = I[63 & s], g[U++] = N + D + o + s;
    }
    switch (N = 0, s = E, A.length - y) {
      case 2:
        s = I[(15 & (N = A[y + 1])) << 2] || E;
      case 1:
        A = A[y], g[U] = I[A >> 2] + I[(3 & A) << 4 | N >> 4] + s + E;
    }
    return g.join("");
  }
  for (I = "", g = 0, E = A.length - 10240; g < E; )
    I += String.fromCharCode.apply(null, A.subarray(g, g += 10240));
  return I += String.fromCharCode.apply(null, g ? A.subarray(g) : A), btoa(I);
}
const Ci = /[-_.]/g, H0 = { "-": "+", _: "/", ".": "=" };
function r0(A) {
  return H0[A] || "";
}
function CD(A) {
  if (!gD)
    return t0(A);
  Ci.test(A) && (A = A.replace(Ci, r0)), A = atob(A);
  const I = new Uint8Array(A.length);
  for (let g = 0; g < A.length; g++)
    I[g] = A.charCodeAt(g);
  return I;
}
function aB(A) {
  return ID && A != null && A instanceof Uint8Array;
}
let q0;
function RB() {
  return q0 || (q0 = new Uint8Array(0));
}
var Mg = {};
let e0;
function BD(A) {
  if (A !== Mg)
    throw Error("illegal external caller");
}
function Sg() {
  return e0 || (e0 = new TI(null, Mg));
}
function rQ(A) {
  BD(Mg);
  var I = A.Z;
  return (I = I == null || aB(I) ? I : typeof I == "string" ? CD(I) : null) == null ? I : A.Z = I;
}
var TI = class {
  constructor(A, I) {
    if (BD(I), this.Z = A, A != null && A.length === 0)
      throw Error("ByteString should be constructed with non-empty values");
  }
  wa() {
    const A = rQ(this);
    return A ? new Uint8Array(A) : RB();
  }
};
function QD(A, I) {
  return Error(`Invalid wire type: ${A} (at position ${I})`);
}
function qQ() {
  return Error("Failed to read varint, encoding is invalid.");
}
function ED(A, I) {
  return Error(`Tried to read past the end of the data ${I} > ${A}`);
}
function iD(A) {
  return A.length == 0 ? Sg() : new TI(A, Mg);
}
function eQ(A) {
  if (typeof A == "string")
    return { buffer: CD(A), L: !1 };
  if (Array.isArray(A))
    return { buffer: new Uint8Array(A), L: !1 };
  if (A.constructor === Uint8Array)
    return { buffer: A, L: !1 };
  if (A.constructor === ArrayBuffer)
    return { buffer: new Uint8Array(A), L: !1 };
  if (A.constructor === TI)
    return { buffer: rQ(A) || RB(), L: !0 };
  if (A instanceof Uint8Array)
    return { buffer: new Uint8Array(A.buffer, A.byteOffset, A.byteLength), L: !1 };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function nQ() {
  return typeof BigInt == "function";
}
var BQ = !HQ;
let Bi = !HQ;
const n0 = typeof Uint8Array.prototype.slice == "function";
let DD, BA = 0, MA = 0;
function Dg(A) {
  const I = 0 > A;
  let g = (A = Math.abs(A)) >>> 0;
  if (A = Math.floor((A - g) / 4294967296), I) {
    const [E, D] = fQ(g, A);
    A = D, g = E;
  }
  BA = g >>> 0, MA = A >>> 0;
}
function dQ(A) {
  const I = DD || (DD = new DataView(new ArrayBuffer(8)));
  I.setFloat32(0, +A, !0), MA = 0, BA = I.getUint32(0, !0);
}
function QQ(A, I) {
  return 4294967296 * I + (A >>> 0);
}
function lQ(A, I) {
  const g = 2147483648 & I;
  return g && (I = ~I >>> 0, (A = 1 + ~A >>> 0) == 0 && (I = I + 1 >>> 0)), A = QQ(A, I), g ? -A : A;
}
function gB(A, I) {
  if (A >>>= 0, 2097151 >= (I >>>= 0))
    var g = "" + (4294967296 * I + A);
  else
    nQ() ? g = "" + (BigInt(I) << BigInt(32) | BigInt(A)) : (A = (16777215 & A) + 6777216 * (g = 16777215 & (A >>> 24 | I << 8)) + 6710656 * (I = I >> 16 & 65535), g += 8147497 * I, I *= 2, 1e7 <= A && (g += Math.floor(A / 1e7), A %= 1e7), 1e7 <= g && (I += Math.floor(g / 1e7), g %= 1e7), g = I + Qi(g) + Qi(A));
  return g;
}
function Qi(A) {
  return A = String(A), "0000000".slice(A.length) + A;
}
function oD() {
  var A = BA, I = MA;
  if (2147483648 & I)
    if (nQ())
      A = "" + (BigInt(0 | I) << BigInt(32) | BigInt(A >>> 0));
    else {
      const [g, E] = fQ(A, I);
      A = "-" + gB(g, E);
    }
  else
    A = gB(A, I);
  return A;
}
function hB(A) {
  if (16 > A.length)
    Dg(Number(A));
  else if (nQ())
    A = BigInt(A), BA = Number(A & BigInt(4294967295)) >>> 0, MA = Number(A >> BigInt(32) & BigInt(4294967295));
  else {
    const I = +(A[0] === "-");
    MA = BA = 0;
    const g = A.length;
    for (let E = I, D = (g - I) % 6 + I; D <= g; E = D, D += 6) {
      const o = Number(A.slice(E, D));
      MA *= 1e6, BA = 1e6 * BA + o, 4294967296 <= BA && (MA += Math.trunc(BA / 4294967296), MA >>>= 0, BA >>>= 0);
    }
    if (I) {
      const [E, D] = fQ(BA, MA);
      BA = E, MA = D;
    }
  }
}
function fQ(A, I) {
  return I = ~I, A ? A = 1 + ~A : I += 1, [A, I];
}
function bQ(A, I) {
  let g, E = 0, D = 0, o = 0;
  const s = A.h;
  let N = A.g;
  do
    g = s[N++], E |= (127 & g) << o, o += 7;
  while (32 > o && 128 & g);
  for (32 < o && (D |= (127 & g) >> 4), o = 3; 32 > o && 128 & g; o += 7)
    g = s[N++], D |= (127 & g) << o;
  if (og(A, N), 128 > g)
    return I(E >>> 0, D >>> 0);
  throw qQ();
}
function VQ(A) {
  let I = 0, g = A.g;
  const E = g + 10, D = A.h;
  for (; g < E; ) {
    const o = D[g++];
    if (I |= o, (128 & o) == 0)
      return og(A, g), !!(127 & I);
  }
  throw qQ();
}
function pI(A) {
  const I = A.h;
  let g = A.g, E = I[g++], D = 127 & E;
  if (128 & E && (E = I[g++], D |= (127 & E) << 7, 128 & E && (E = I[g++], D |= (127 & E) << 14, 128 & E && (E = I[g++], D |= (127 & E) << 21, 128 & E && (E = I[g++], D |= E << 28, 128 & E && 128 & I[g++] && 128 & I[g++] && 128 & I[g++] && 128 & I[g++] && 128 & I[g++])))))
    throw qQ();
  return og(A, g), D;
}
function XI(A) {
  return pI(A) >>> 0;
}
function EQ(A) {
  var I = A.h;
  const g = A.g, E = I[g], D = I[g + 1], o = I[g + 2];
  return I = I[g + 3], og(A, A.g + 4), (E << 0 | D << 8 | o << 16 | I << 24) >>> 0;
}
function iQ(A) {
  var I = EQ(A);
  A = 2 * (I >> 31) + 1;
  const g = I >>> 23 & 255;
  return I &= 8388607, g == 255 ? I ? NaN : 1 / 0 * A : g == 0 ? A * Math.pow(2, -149) * I : A * Math.pow(2, g - 150) * (I + Math.pow(2, 23));
}
function d0(A) {
  return pI(A);
}
function zB(A, I, { aa: g = !1 } = {}) {
  A.aa = g, I && (I = eQ(I), A.h = I.buffer, A.m = I.L, A.j = 0, A.l = A.h.length, A.g = A.j);
}
function og(A, I) {
  if (A.g = I, I > A.l)
    throw ED(A.l, I);
}
function GD(A, I) {
  if (0 > I)
    throw Error(`Tried to read a negative byte length: ${I}`);
  const g = A.g, E = g + I;
  if (E > A.l)
    throw ED(I, A.l - g);
  return A.g = E, g;
}
function wD(A, I) {
  if (I == 0)
    return Sg();
  var g = GD(A, I);
  return A.aa && A.m ? g = A.h.subarray(g, g + I) : (A = A.h, g = g === (I = g + I) ? RB() : n0 ? A.slice(g, I) : new Uint8Array(A.subarray(g, I))), iD(g);
}
var Ei = [];
function sD(A) {
  var I = A.g;
  if (I.g == I.l)
    return !1;
  A.l = A.g.g;
  var g = XI(A.g);
  if (I = g >>> 3, !(0 <= (g &= 7) && 5 >= g))
    throw QD(g, A.l);
  if (1 > I)
    throw Error(`Invalid field number: ${I} (at position ${A.l})`);
  return A.m = I, A.h = g, !0;
}
function OC(A) {
  switch (A.h) {
    case 0:
      A.h != 0 ? OC(A) : VQ(A.g);
      break;
    case 1:
      og(A = A.g, A.g + 8);
      break;
    case 2:
      if (A.h != 2)
        OC(A);
      else {
        var I = XI(A.g);
        og(A = A.g, A.g + I);
      }
      break;
    case 5:
      og(A = A.g, A.g + 4);
      break;
    case 3:
      for (I = A.m; ; ) {
        if (!sD(A))
          throw Error("Unmatched start-group tag: stream EOF");
        if (A.h == 4) {
          if (A.m != I)
            throw Error("Unmatched end-group tag");
          break;
        }
        OC(A);
      }
      break;
    default:
      throw QD(A.h, A.l);
  }
}
function iC(A, I, g) {
  const E = A.g.l, D = XI(A.g), o = A.g.g + D;
  let s = o - E;
  if (0 >= s && (A.g.l = o, g(I, A, void 0, void 0, void 0), s = o - A.g.g), s)
    throw Error(`Message parsing ended unexpectedly. Expected to read ${D} bytes, instead read ${D - s} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return A.g.g = o, A.g.l = E, I;
}
function xQ(A) {
  var I = XI(A.g), g = GD(A = A.g, I);
  if (A = A.h, J0) {
    var E, D = A;
    (E = jB) || (E = jB = new TextDecoder("utf-8", { fatal: !0 })), I = g + I, D = g === 0 && I === D.length ? D : D.subarray(g, I);
    try {
      var o = E.decode(D);
    } catch (N) {
      if (ZC === void 0) {
        try {
          E.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          E.decode(new Uint8Array([97])), ZC = !0;
        } catch {
          ZC = !1;
        }
      }
      throw !ZC && (jB = void 0), N;
    }
  } else {
    I = (o = g) + I, g = [];
    let N, y = null;
    for (; o < I; ) {
      var s = A[o++];
      128 > s ? g.push(s) : 224 > s ? o >= I ? Qg() : (N = A[o++], 194 > s || (192 & N) != 128 ? (o--, Qg()) : g.push((31 & s) << 6 | 63 & N)) : 240 > s ? o >= I - 1 ? Qg() : (N = A[o++], (192 & N) != 128 || s === 224 && 160 > N || s === 237 && 160 <= N || (192 & (E = A[o++])) != 128 ? (o--, Qg()) : g.push((15 & s) << 12 | (63 & N) << 6 | 63 & E)) : 244 >= s ? o >= I - 2 ? Qg() : (N = A[o++], (192 & N) != 128 || N - 144 + (s << 28) >> 30 || (192 & (E = A[o++])) != 128 || (192 & (D = A[o++])) != 128 ? (o--, Qg()) : (s = (7 & s) << 18 | (63 & N) << 12 | (63 & E) << 6 | 63 & D, s -= 65536, g.push(55296 + (s >> 10 & 1023), 56320 + (1023 & s)))) : Qg(), 8192 <= g.length && (y = Ai(y, g), g.length = 0);
    }
    o = Ai(y, g);
  }
  return o;
}
function FD(A) {
  const I = XI(A.g);
  return wD(A.g, I);
}
function NB(A, I, g) {
  var E = XI(A.g);
  for (E = A.g.g + E; A.g.g < E; )
    g.push(I(A.g));
}
var mC = [];
function ii(A) {
  return A ? /^\d+$/.test(A) ? (hB(A), new Di(BA, MA)) : null : l0 || (l0 = new Di(0, 0));
}
var Di = class {
  constructor(A, I) {
    this.h = A >>> 0, this.g = I >>> 0;
  }
};
let l0;
function oi(A) {
  return A ? /^-?\d+$/.test(A) ? (hB(A), new Gi(BA, MA)) : null : f0 || (f0 = new Gi(0, 0));
}
var Gi = class {
  constructor(A, I) {
    this.h = A >>> 0, this.g = I >>> 0;
  }
};
let f0;
function CB(A, I, g) {
  for (; 0 < g || 127 < I; )
    A.g.push(127 & I | 128), I = (I >>> 7 | g << 25) >>> 0, g >>>= 7;
  A.g.push(I);
}
function DC(A, I) {
  for (; 127 < I; )
    A.g.push(127 & I | 128), I >>>= 7;
  A.g.push(I);
}
function yB(A, I) {
  if (0 <= I)
    DC(A, I);
  else {
    for (let g = 0; 9 > g; g++)
      A.g.push(127 & I | 128), I >>= 7;
    A.g.push(1);
  }
}
function IC(A, I) {
  A.g.push(I >>> 0 & 255), A.g.push(I >>> 8 & 255), A.g.push(I >>> 16 & 255), A.g.push(I >>> 24 & 255);
}
function Jg(A, I) {
  I.length !== 0 && (A.l.push(I), A.h += I.length);
}
function DI(A, I, g) {
  DC(A.g, 8 * I + g);
}
function WQ(A, I) {
  return DI(A, I, 2), I = A.g.end(), Jg(A, I), I.push(A.h), I;
}
function ZQ(A, I) {
  var g = I.pop();
  for (g = A.h + A.g.length() - g; 127 < g; )
    I.push(127 & g | 128), g >>>= 7, A.h++;
  I.push(g), A.h++;
}
function KB(A, I, g) {
  DI(A, I, 2), DC(A.g, g.length), Jg(A, A.g.end()), Jg(A, g);
}
function DQ(A, I, g, E) {
  g != null && (I = WQ(A, I), E(g, A), ZQ(A, I));
}
class rg {
  constructor(I, g, E, D) {
    this.g = I, this.h = g, this.l = E, this.qa = D;
  }
}
function WA(A) {
  return Array.prototype.slice.call(A);
}
function aD(A) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : A;
}
var JI = aD(), wi = aD("0di"), UB = JI ? (A, I) => {
  A[JI] |= I;
} : (A, I) => {
  A.D !== void 0 ? A.D |= I : Object.defineProperties(A, { D: { value: I, configurable: !0, writable: !0, enumerable: !1 } });
};
function si(A) {
  const I = FA(A);
  (1 & I) != 1 && (Object.isFrozen(A) && (A = WA(A)), NA(A, 1 | I));
}
var BB = JI ? (A, I) => {
  A[JI] &= ~I;
} : (A, I) => {
  A.D !== void 0 && (A.D &= ~I);
};
function lA(A, I, g) {
  return g ? A | I : A & ~I;
}
var FA = JI ? (A) => 0 | A[JI] : (A) => 0 | A.D, _ = JI ? (A) => A[JI] : (A) => A.D, NA = JI ? (A, I) => {
  A[JI] = I;
} : (A, I) => {
  A.D !== void 0 ? A.D = I : Object.defineProperties(A, { D: { value: I, configurable: !0, writable: !0, enumerable: !1 } });
};
function Fi() {
  var A = [];
  return UB(A, 1), A;
}
function qg(A) {
  return UB(A, 34), A;
}
function b0(A, I) {
  NA(I, -14591 & (0 | A));
}
function oQ(A, I) {
  NA(I, -14557 & (34 | A));
}
function QB(A) {
  return (A = A >> 14 & 1023) === 0 ? 536870912 : A;
}
var oC = {}, RD = {};
function ai(A) {
  return !(!A || typeof A != "object" || A.Na !== RD);
}
function zg(A) {
  return A !== null && typeof A == "object" && !Array.isArray(A) && A.constructor === Object;
}
let hD = !HQ;
function ND(A, I, g) {
  if (A != null) {
    if (typeof A == "string")
      A = A ? new TI(A, Mg) : Sg();
    else if (A.constructor !== TI)
      if (aB(A))
        A = g ? iD(A) : A.length ? new TI(new Uint8Array(A), Mg) : Sg();
      else {
        if (!I)
          throw Error();
        A = void 0;
      }
  }
  return A;
}
function GQ(A, I, g) {
  if (!Array.isArray(A) || A.length)
    return !1;
  const E = FA(A);
  return !!(1 & E) || !(!I || !(Array.isArray(I) ? I.includes(g) : I.has(g))) && (NA(A, 1 | E), !0);
}
var ig;
const Ri = [];
function tI(A) {
  if (2 & A)
    throw Error();
}
NA(Ri, 55), ig = Object.freeze(Ri);
class EB {
  constructor(I, g, E) {
    this.l = 0, this.g = I, this.h = g, this.m = E;
  }
  next() {
    if (this.l < this.g.length) {
      const I = this.g[this.l++];
      return { done: !1, value: this.h ? this.h.call(this.m, I) : I };
    }
    return { done: !0, value: void 0 };
  }
  [Symbol.iterator]() {
    return new EB(this.g, this.h, this.m);
  }
}
var V0 = {};
let uI, gC;
function yD(A, I) {
  (I = uI ? I[uI] : void 0) && (A[uI] = WA(I));
}
function wQ(A) {
  return (A = Error(A)).__closure__error__context__984382 || (A.__closure__error__context__984382 = {}), A.__closure__error__context__984382.severity = "warning", A;
}
function PI(A) {
  return A == null || typeof A == "number" ? A : A === "NaN" || A === "Infinity" || A === "-Infinity" ? Number(A) : void 0;
}
function KD(A) {
  return A == null || typeof A == "boolean" ? A : typeof A == "number" ? !!A : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
const x0 = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function kB(A) {
  const I = typeof A;
  return I === "number" ? Number.isFinite(A) : I === "string" && x0.test(A);
}
function eg(A) {
  if (A == null)
    return A;
  if (typeof A == "string") {
    if (!A)
      return;
    A = +A;
  }
  return typeof A == "number" && Number.isFinite(A) ? 0 | A : void 0;
}
function W0(A) {
  if (A == null)
    return A;
  if (typeof A == "string") {
    if (!A)
      return;
    A = +A;
  }
  return typeof A == "number" && Number.isFinite(A) ? A >>> 0 : void 0;
}
function hi(A) {
  return A[0] !== "-" && (20 > A.length || A.length === 20 && 184467 > Number(A.substring(0, 6)));
}
function UD(A) {
  return A[0] === "-" ? 20 > A.length || A.length === 20 && -922337 < Number(A.substring(0, 7)) : 19 > A.length || A.length === 19 && 922337 > Number(A.substring(0, 6));
}
function mQ(A) {
  return A = Math.trunc(A), Number.isSafeInteger(A) || (Dg(A), A = lQ(BA, MA)), A;
}
function TQ(A) {
  var I = Math.trunc(Number(A));
  return Number.isSafeInteger(I) ? String(I) : ((I = A.indexOf(".")) !== -1 && (A = A.substring(0, I)), UD(A) || (hB(A), A = oD()), A);
}
function iB(A) {
  return A == null ? A : kB(A) ? typeof A == "number" ? mQ(A) : TQ(A) : void 0;
}
function GC(A) {
  if (typeof A != "string")
    throw Error();
  return A;
}
function wC(A) {
  if (A != null && typeof A != "string")
    throw Error();
  return A;
}
function CC(A) {
  return A == null || typeof A == "string" ? A : void 0;
}
function uQ(A, I, g, E) {
  if (A != null && typeof A == "object" && A.W === oC)
    return A;
  if (!Array.isArray(A))
    return g ? 2 & E ? (A = I[wi]) ? I = A : (qg((A = new I()).s), I = I[wi] = A) : I = new I() : I = void 0, I;
  let D = g = FA(A);
  return D === 0 && (D |= 32 & E), D |= 2 & E, D !== g && NA(A, D), new I(A);
}
function Z0(A, I, g) {
  if (I) {
    var E = !!E;
    if (!kB(I = A))
      throw wQ("int64");
    typeof I == "string" ? E = TQ(I) : E ? (E = Math.trunc(I), Number.isSafeInteger(E) ? E = String(E) : UD(I = String(E)) ? E = I : (Dg(E), E = oD())) : E = mQ(I);
  } else
    E = iB(A);
  return typeof (g = (A = E) == null ? g ? 0 : void 0 : A) == "string" && (E = +g, Number.isSafeInteger(E)) ? E : g;
}
let DB, pQ, m0;
function oB(A) {
  switch (typeof A) {
    case "boolean":
      return pQ || (pQ = [0, void 0, !0]);
    case "number":
      return 0 < A ? void 0 : A === 0 ? m0 || (m0 = [0, void 0]) : [-A, void 0];
    case "string":
      return [0, A];
    case "object":
      return A;
  }
}
function Gg(A, I) {
  return kD(A, I[0], I[1]);
}
function kD(A, I, g) {
  if (A == null && (A = DB), DB = void 0, A == null) {
    var E = 96;
    g ? (A = [g], E |= 512) : A = [], I && (E = -16760833 & E | (1023 & I) << 14);
  } else {
    if (!Array.isArray(A))
      throw Error();
    if (64 & (E = FA(A)))
      return gC && delete A[gC], A;
    if (E |= 64, g && (E |= 512, g !== A[0]))
      throw Error();
    A: {
      const D = (g = A).length;
      if (D) {
        const o = D - 1;
        if (zg(g[o])) {
          if (1024 <= (I = o - (+!!(512 & (E |= 256)) - 1)))
            throw Error();
          E = -16760833 & E | (1023 & I) << 14;
          break A;
        }
      }
      if (I) {
        if (1024 < (I = Math.max(I, D - (+!!(512 & E) - 1))))
          throw Error();
        E = -16760833 & E | (1023 & I) << 14;
      }
    }
  }
  return NA(A, E), A;
}
let T0 = function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), !1;
  } catch {
    return !0;
  }
}();
class vB {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(I) {
    return this.g.get(I);
  }
  set(I, g) {
    return this.g.set(I, g), this.size = this.g.size, this;
  }
  delete(I) {
    return I = this.g.delete(I), this.size = this.g.size, I;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(I) {
    return this.g.has(I);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(I, g) {
    return this.g.forEach(I, g);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const u0 = T0 ? (Object.setPrototypeOf(vB.prototype, Map.prototype), Object.defineProperties(vB.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), vB) : class extends Map {
  constructor() {
    super();
  }
};
function TC(A) {
  return A;
}
function _B(A) {
  if (2 & A.O)
    throw Error("Cannot mutate an immutable Map");
}
var QI = class extends u0 {
  constructor(A, I, g = TC, E = TC) {
    super();
    let D = FA(A);
    D |= 64, NA(A, D), this.O = D, this.V = I, this.R = g || TC, this.Y = this.V ? p0 : E || TC;
    for (let o = 0; o < A.length; o++) {
      const s = A[o], N = g(s[0], !1, !0);
      let y = s[1];
      I ? y === void 0 && (y = null) : y = E(s[1], !1, !0, void 0, void 0, D), super.set(N, y);
    }
  }
  pa(A = Ni) {
    return this.X(A);
  }
  X(A = Ni) {
    const I = [], g = super.entries();
    for (var E; !(E = g.next()).done; )
      (E = E.value)[0] = A(E[0]), E[1] = A(E[1]), I.push(E);
    return I;
  }
  clear() {
    _B(this), super.clear();
  }
  delete(A) {
    return _B(this), super.delete(this.R(A, !0, !1));
  }
  entries() {
    var A = this.ma();
    return new EB(A, X0, this);
  }
  keys() {
    return this.Ma();
  }
  values() {
    var A = this.ma();
    return new EB(A, QI.prototype.get, this);
  }
  forEach(A, I) {
    super.forEach((g, E) => {
      A.call(I, this.get(E), E, this);
    });
  }
  set(A, I) {
    return _B(this), (A = this.R(A, !0, !1)) == null ? this : I == null ? (super.delete(A), this) : super.set(A, this.Y(I, !0, !0, this.V, !1, this.O));
  }
  Ta(A) {
    const I = this.R(A[0], !1, !0);
    A = A[1], A = this.V ? A === void 0 ? null : A : this.Y(A, !1, !0, void 0, !1, this.O), super.set(I, A);
  }
  has(A) {
    return super.has(this.R(A, !1, !1));
  }
  get(A) {
    A = this.R(A, !1, !1);
    const I = super.get(A);
    if (I !== void 0) {
      var g = this.V;
      return g ? ((g = this.Y(I, !1, !0, g, this.xa, this.O)) !== I && super.set(A, g), g) : I;
    }
  }
  ma() {
    return Array.from(super.keys());
  }
  Ma() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function p0(A, I, g, E, D, o) {
  return A = uQ(A, E, g, o), D && (A = MB(A)), A;
}
function Ni(A) {
  return A;
}
function X0(A) {
  return [A, this.get(A)];
}
function XQ(A, I, g, E, D, o) {
  if (A != null) {
    if (Array.isArray(A))
      A = D && A.length == 0 && 1 & FA(A) ? void 0 : o && 2 & FA(A) ? A : OQ(A, I, g, E !== void 0, D, o);
    else if (zg(A)) {
      const s = {};
      for (let N in A)
        s[N] = XQ(A[N], I, g, E, D, o);
      A = s;
    } else
      A = I(A, E);
    return A;
  }
}
function OQ(A, I, g, E, D, o) {
  const s = E || g ? FA(A) : 0;
  E = E ? !!(32 & s) : void 0;
  const N = WA(A);
  for (let y = 0; y < N.length; y++)
    N[y] = XQ(N[y], I, g, E, D, o);
  return g && (yD(N, A), g(s, N)), N;
}
function O0(A) {
  return XQ(A, MD, void 0, void 0, !1, !1);
}
function MD(A) {
  return A.W === oC ? A.toJSON() : A instanceof QI ? A.pa(O0) : function(I) {
    switch (typeof I) {
      case "number":
        return isFinite(I) ? I : String(I);
      case "boolean":
        return I ? 1 : 0;
      case "object":
        if (I) {
          if (Array.isArray(I))
            return hD || !GQ(I, void 0, 9999) ? I : void 0;
          if (aB(I))
            return gi(I);
          if (I instanceof TI) {
            const g = I.Z;
            return g == null ? "" : typeof g == "string" ? g : I.Z = gi(g);
          }
          if (I instanceof QI)
            return I = I.pa(), BQ || I.length !== 0 ? I : void 0;
        }
    }
    return I;
  }(A);
}
function sQ(A, I, g = oQ) {
  if (A != null) {
    if (ID && A instanceof Uint8Array)
      return I ? A : new Uint8Array(A);
    if (Array.isArray(A)) {
      var E = FA(A);
      return 2 & E ? A : (I && (I = E === 0 || !!(32 & E) && !(64 & E || !(16 & E))), I ? (NA(A, -12293 & (34 | E)), A) : OQ(A, sQ, 4 & E ? oQ : g, !0, !1, !0));
    }
    return A.W === oC ? (g = A.s, A = 2 & (E = _(g)) ? A : jQ(A, g, E, !0)) : A instanceof QI && (g = qg(A.X(sQ)), A = new QI(g, A.V, A.R, A.Y)), A;
  }
}
function jQ(A, I, g, E) {
  return A = A.constructor, DB = I = SD(I, g, E), I = new A(I), DB = void 0, I;
}
function SD(A, I, g) {
  const E = g || 2 & I ? oQ : b0, D = !!(32 & I);
  return A = function(o, s, N) {
    const y = WA(o);
    var U = y.length;
    const L = 256 & s ? y[U - 1] : void 0;
    for (U += L ? -1 : 0, s = 512 & s ? 1 : 0; s < U; s++)
      y[s] = N(y[s]);
    if (L) {
      s = y[s] = {};
      for (const d in L)
        s[d] = N(L[d]);
    }
    return yD(y, o), y;
  }(A, I, (o) => sQ(o, D, E)), UB(A, 32 | (g ? 2 : 0)), A;
}
function MB(A) {
  const I = A.s, g = _(I);
  return 2 & g ? jQ(A, I, g, !1) : A;
}
function cg(A, I) {
  return HI(A = A.s, _(A), I);
}
function HI(A, I, g, E) {
  if (g === -1)
    return null;
  if (g >= QB(I)) {
    if (256 & I)
      return A[A.length - 1][g];
  } else {
    var D = A.length;
    if (E && 256 & I && (E = A[D - 1][g]) != null)
      return E;
    if ((I = g + (+!!(512 & I) - 1)) < D)
      return A[I];
  }
}
function QA(A, I, g, E) {
  const D = A.s;
  let o = _(D);
  return tI(o), EA(D, o, I, g, E), A;
}
function EA(A, I, g, E, D) {
  var o = QB(I);
  if (g >= o || D) {
    if (D = I, 256 & I)
      o = A[A.length - 1];
    else {
      if (E == null)
        return D;
      o = A[o + (+!!(512 & I) - 1)] = {}, D |= 256;
    }
    return o[g] = E, D !== I && NA(A, D), D;
  }
  return A[g + (+!!(512 & I) - 1)] = E, 256 & I && g in (A = A[A.length - 1]) && delete A[g], I;
}
function ng(A, I, g, E, D) {
  var o = 2 & I;
  let s = HI(A, I, g, D);
  Array.isArray(s) || (s = ig);
  const N = !(2 & E);
  E = !(1 & E);
  const y = !!(32 & I);
  let U = FA(s);
  return U !== 0 || !y || o || N ? 1 & U || (U |= 1, NA(s, U)) : (U |= 33, NA(s, U)), o ? (A = !1, 2 & U || (qg(s), A = !!(4 & U)), (E || A) && Object.freeze(s)) : (o = !!(2 & U) || !!(2048 & U), E && o ? (s = WA(s), E = 1, y && !N && (E |= 32), NA(s, E), EA(A, I, g, s, D)) : N && 32 & U && !o && BB(s, 32)), s;
}
function jC(A, I) {
  A = A.s;
  let g = _(A);
  const E = HI(A, g, I), D = PI(E);
  return D != null && D !== E && EA(A, g, I, D), D;
}
function JD(A) {
  A = A.s;
  let I = _(A);
  const g = HI(A, I, 1), E = ND(g, !0, !!(34 & I));
  return E != null && E !== g && EA(A, I, 1, E), E;
}
function kg(A, I, g) {
  A = A.s;
  let E = _(A);
  const D = 2 & E ? 1 : 2;
  let o = cD(A, E, I);
  var s = FA(o);
  if (!(4 & s)) {
    (4 & s || Object.isFrozen(o)) && (o = WA(o), s = wg(s, E, !1), E = EA(A, E, I, o));
    var N = 0;
    let y = 0;
    for (; N < o.length; N++) {
      const U = g(o[N]);
      U != null && (o[y++] = U);
    }
    y < N && (o.length = y), s = lA(s = YD(s, E, !1), 20, !0), s = lA(s, 4096, !1), s = lA(s, 8192, !1), NA(o, s), 2 & s && Object.freeze(o);
  }
  return vg(s) || (g = s, (s = (N = D === 1) ? lA(s, 2, !0) : lA(s, 32, !1)) !== g && NA(o, s), N && Object.freeze(o)), D === 2 && vg(s) && (o = WA(o), s = wg(s, E, !1), NA(o, s), EA(A, E, I, o)), o;
}
function cD(A, I, g) {
  return A = HI(A, I, g), Array.isArray(A) ? A : ig;
}
function YD(A, I, g) {
  return A === 0 && (A = wg(A, I, g)), lA(A, 1, !0);
}
function vg(A) {
  return !!(2 & A) && !!(4 & A) || !!(2048 & A);
}
let j0;
function yi() {
  return j0 ?? (j0 = new QI(qg([]), void 0, void 0, void 0, V0));
}
function LD(A) {
  A = WA(A);
  for (let I = 0; I < A.length; I++) {
    const g = A[I] = WA(A[I]);
    Array.isArray(g[1]) && (g[1] = qg(g[1]));
  }
  return A;
}
function GB(A, I, g) {
  {
    const s = A.s;
    let N = _(s);
    if (tI(N), g == null)
      EA(s, N, I);
    else {
      var E, D = A = FA(g), o = !!(2 & A) || Object.isFrozen(g);
      if ((E = !o) && (E = !1), !(4 & A))
        for (A = 21, o && (g = WA(g), D = 0, A = wg(A, N, !0)), o = 0; o < g.length; o++)
          g[o] = GC(g[o]);
      E && (g = WA(g), D = 0, A = wg(A, N, !0)), A !== D && NA(g, A), EA(s, N, I, g);
    }
  }
}
function sC(A, I, g, E) {
  const D = _(A);
  tI(D), A = ng(A, D, I, 2), E = g(E, !!(4 & (I = FA(A))) && !!(4096 & I)), A.push(E);
}
function P0(A) {
  return A;
}
function $B(A, I) {
  return PQ(A = A.s, _(A), wo) === I ? I : -1;
}
function PQ(A, I, g) {
  let E = 0;
  for (let D = 0; D < g.length; D++) {
    const o = g[D];
    HI(A, I, o) != null && (E !== 0 && (I = EA(A, I, E)), E = o);
  }
  return E;
}
function zQ(A, I, g, E) {
  let D = _(A);
  tI(D);
  const o = HI(A, D, g, E);
  let s;
  if (o != null && o.W === oC)
    return (I = MB(o)) !== o && EA(A, D, g, I, E), I.s;
  if (Array.isArray(o)) {
    const N = FA(o);
    s = 2 & N ? SD(o, N, !1) : o, s = Gg(s, I);
  } else
    s = Gg(void 0, I);
  return s !== o && EA(A, D, g, s, E), s;
}
function tD(A, I, g, E) {
  A = A.s;
  let D = _(A);
  const o = HI(A, D, g, E);
  return (I = uQ(o, I, !1, D)) !== o && I != null && EA(A, D, g, I, E), I;
}
function P(A, I, g, E = !1) {
  if ((I = tD(A, I, g, E)) == null)
    return I;
  A = A.s;
  let D = _(A);
  if (!(2 & D)) {
    const o = MB(I);
    o !== I && EA(A, D, g, I = o, E);
  }
  return I;
}
function HD(A, I, g, E, D, o) {
  var s = !!(2 & I), N = s ? 1 : 2;
  const y = N === 1;
  N = N === 2, D = !!D, o && (o = !s), s = cD(A, I, E);
  var U = FA(s);
  const L = !!(4 & U);
  if (!L) {
    var d = s, e = I;
    const AA = !!(2 & (U = YD(U, I, D)));
    AA && (e = lA(e, 2, !0));
    let T = !AA, aA = !0, CA = 0, wI = 0;
    for (; CA < d.length; CA++) {
      const t = uQ(d[CA], g, !1, e);
      if (t instanceof g) {
        if (!AA) {
          const f = !!(2 & FA(t.s));
          T && (T = !f), aA && (aA = f);
        }
        d[wI++] = t;
      }
    }
    wI < CA && (d.length = wI), U = lA(U, 4, !0), U = lA(U, 16, aA), U = lA(U, 8, T), NA(d, U), AA && Object.freeze(d);
  }
  if (g = !!(8 & U) || y && !s.length, o && !g) {
    for (vg(U) && (s = WA(s), U = wg(U, I, D), I = EA(A, I, E, s)), o = s, g = U, d = 0; d < o.length; d++)
      (U = o[d]) !== (e = MB(U)) && (o[d] = e);
    g = lA(g, 8, !0), g = lA(g, 16, !o.length), NA(o, g), U = g;
  }
  return vg(U) || (o = U, y ? U = lA(U, !s.length || 16 & U && (!L || 32 & U) ? 2 : 2048, !0) : D || (U = lA(U, 32, !1)), U !== o && NA(s, U), y && Object.freeze(s)), N && vg(U) && (s = WA(s), U = wg(U, I, D), NA(s, U), EA(A, I, E, s)), s;
}
function xI(A, I, g) {
  A = A.s;
  const E = _(A);
  return HD(A, E, I, g, !1, !(2 & E));
}
function V(A, I, g, E, D) {
  return E == null && (E = void 0), QA(A, g, E, D);
}
function _g(A, I, g, E) {
  E == null && (E = void 0), A = A.s;
  let D = _(A);
  tI(D), (g = PQ(A, D, g)) && g !== I && E != null && (D = EA(A, D, g)), EA(A, D, I, E);
}
function wg(A, I, g) {
  return A = lA(A, 2, !!(2 & I)), A = lA(A, 32, !!(32 & I) && g), lA(A, 2048, !1);
}
function FQ(A, I, g) {
  A = A.s;
  const E = _(A);
  tI(E), A = HD(A, E, I, 1, !0), I = g ?? new I(), A.push(I), 2 & FA(I.s) ? BB(A, 8) : BB(A, 16);
}
function BI(A, I) {
  return eg(cg(A, I));
}
function EI(A, I) {
  return CC(cg(A, I));
}
function cI(A) {
  return A ?? 0;
}
function fA(A, I) {
  return cI(jC(A, I));
}
function BC(A, I, g) {
  if (g != null && typeof g != "boolean")
    throw A = typeof g, Error(`Expected boolean but got ${A != "object" ? A : g ? Array.isArray(g) ? "array" : A : "null"}: ${g}`);
  QA(A, I, g);
}
function YI(A, I, g) {
  if (g != null) {
    if (typeof g != "number" || !Number.isFinite(g))
      throw wQ("int32");
    g |= 0;
  }
  QA(A, I, g);
}
function x(A, I, g) {
  if (g != null && typeof g != "number")
    throw Error(`Value of float/double field must be a number, found ${typeof g}: ${g}`);
  QA(A, I, g);
}
function RI(A, I, g) {
  I.g ? I.m(A, I.g, I.h, g, !0) : I.m(A, I.h, g, !0);
}
QI.prototype.toJSON = void 0, QI.prototype.Na = RD;
var n = class {
  constructor(A, I) {
    this.s = kD(A, I);
  }
  toJSON() {
    return rD(this, OQ(this.s, MD, void 0, void 0, !1, !1), !0);
  }
  l() {
    var A = AF;
    return A.g ? A.l(this, A.g, A.h, !0) : A.l(this, A.h, A.defaultValue, !0);
  }
  clone() {
    const A = this.s;
    return jQ(this, A, _(A), !1);
  }
  L() {
    return !!(2 & FA(this.s));
  }
};
function rD(A, I, g) {
  const E = A.constructor.A;
  var D = _(g ? A.s : I), o = QB(D), s = !1;
  if (E && hD) {
    if (!g) {
      var N;
      if ((I = WA(I)).length && zg(N = I[I.length - 1])) {
        for (s = 0; s < E.length; s++)
          if (E[s] >= o) {
            Object.assign(I[I.length - 1] = {}, N);
            break;
          }
      }
      s = !0;
    }
    var y;
    o = I, g = !g, A = QB(N = _(A.s)), N = +!!(512 & N) - 1;
    for (let CA = 0; CA < E.length; CA++) {
      var U = E[CA];
      if (U < A) {
        var L = o[U += N];
        L == null ? o[U] = g ? ig : Fi() : g && L !== ig && si(L);
      } else {
        if (!y) {
          var d = void 0;
          o.length && zg(d = o[o.length - 1]) ? y = d : o.push(y = {});
        }
        L = y[U], y[U] == null ? y[U] = g ? ig : Fi() : g && L !== ig && si(L);
      }
    }
  }
  if (!(y = I.length))
    return I;
  let e, AA;
  if (zg(d = I[y - 1])) {
    A: {
      var T = d;
      for (var aA in o = {}, g = !1, T)
        A = T[aA], Array.isArray(A) && (N = A, (!Bi && GQ(A, E, +aA) || !BQ && ai(A) && A.size === 0) && (A = null), A != N && (g = !0)), A != null ? o[aA] = A : g = !0;
      if (g) {
        for (let CA in o) {
          T = o;
          break A;
        }
        T = null;
      }
    }
    T != d && (e = !0), y--;
  }
  for (D = +!!(512 & D) - 1; 0 < y && ((d = I[aA = y - 1]) == null || !Bi && GQ(d, E, aA - D) || !BQ && ai(d) && d.size === 0); y--)
    AA = !0;
  return (e || AA) && (I = s ? I : Array.prototype.slice.call(I, 0, y), s && (I.length = y), T && I.push(T)), I;
}
function qD(A) {
  return Array.isArray(A) ? A[0] instanceof rg ? A : [Es, A] : [A, void 0];
}
function dg(A, I) {
  if (Array.isArray(I)) {
    var g = FA(I);
    if (4 & g)
      return I;
    for (var E = 0, D = 0; E < I.length; E++) {
      const o = A(I[E]);
      o != null && (I[D++] = o);
    }
    return D < E && (I.length = D), NA(I, -12289 & (5 | g)), 2 & g && Object.freeze(I), I;
  }
}
n.prototype.W = oC, n.prototype.toString = function() {
  return rD(this, this.s, !1).toString();
};
const Ki = Symbol();
function vQ(A) {
  let I = A[Ki];
  if (!I) {
    const g = dD(A), E = $Q(A), D = E.g;
    I = D ? (o, s) => D(o, s, E) : (o, s) => {
      for (; sD(s) && s.h != 4; ) {
        var N = s.m, y = E[N];
        if (!y) {
          var U = E.ha;
          U && (U = U[N]) && (y = E[N] = z0(U));
        }
        y && y(s, o, N) || (N = (y = s).l, OC(y), y.ga ? y = void 0 : (U = y.g.g - N, y.g.g = N, y = wD(y.g, U)), N = o, y && (uI || (uI = Symbol()), (U = N[uI]) ? U.push(y) : N[uI] = [y]));
      }
      g === eD || g === nD || g.Oa || (o[gC || (gC = Symbol())] = g);
    }, A[Ki] = I;
  }
  return I;
}
function z0(A) {
  const I = (A = qD(A))[0].g;
  if (A = A[1]) {
    const g = vQ(A), E = $Q(A).S;
    return (D, o, s) => I(D, o, s, E, g);
  }
  return I;
}
let eD, nD;
const PC = Symbol();
function v0(A, I, g) {
  const E = g[1];
  let D;
  if (E) {
    const o = E[PC];
    D = o ? o.S : oB(E[0]), A[I] = o ?? E;
  }
  D && D === pQ ? (A.na || (A.na = [])).push(I) : g[0] && (A.oa || (A.oa = [])).push(I);
}
function Ui(A, I) {
  return [A.l, !I || 0 < I[0] ? void 0 : I];
}
function dD(A) {
  var I = A[PC];
  if (I)
    return I;
  if (!(I = _Q(A, A[PC] = {}, Ui, Ui, v0)).oa && !I.na) {
    let g = !0;
    for (let E in I) {
      isNaN(E) || (g = !1);
      break;
    }
    g ? (I = oB(A[0]) === pQ, I = A[PC] = I ? nD || (nD = { S: oB(!0) }) : eD || (eD = {})) : I.Oa = !0;
  }
  return I;
}
function _0(A, I, g) {
  A[I] = g;
}
function _Q(A, I, g, E, D = _0) {
  I.S = oB(A[0]);
  let o = 0;
  var s = A[++o];
  s && s.constructor === Object && (I.ha = s, typeof (s = A[++o]) == "function" && (I.g = s, I.h = A[++o], s = A[++o]));
  const N = {};
  for (; Array.isArray(s) && typeof s[0] == "number" && 0 < s[0]; ) {
    for (var y = 0; y < s.length; y++)
      N[s[y]] = s;
    s = A[++o];
  }
  for (y = 1; s !== void 0; ) {
    let d;
    typeof s == "number" && (y += s, s = A[++o]);
    var U = void 0;
    if (s instanceof rg ? d = s : (d = is, o--), d.qa) {
      s = A[++o], U = A;
      var L = o;
      typeof s == "function" && (s = s(), U[L] = s), U = s;
    }
    for (L = y + 1, typeof (s = A[++o]) == "number" && 0 > s && (L -= s, s = A[++o]); y < L; y++) {
      const e = N[y];
      D(I, y, U ? E(d, U, e) : g(d, e));
    }
  }
  return I;
}
const ki = Symbol();
function lD(A) {
  let I = A[ki];
  if (!I) {
    const g = SB(A);
    I = (E, D) => fD(E, D, g), A[ki] = I;
  }
  return I;
}
const zC = Symbol();
function $0(A) {
  return A.h;
}
function As(A, I) {
  let g, E;
  const D = A.h;
  return (o, s, N) => D(o, s, N, E || (E = SB(I).S), g || (g = lD(I)));
}
function SB(A) {
  let I = A[zC];
  return I || (I = _Q(A, A[zC] = {}, $0, As), vC in A && zC in A && (A.length = 0), I);
}
const vC = Symbol();
function Is(A, I) {
  const g = A.g;
  return I ? (E, D, o) => g(E, D, o, I) : g;
}
function gs(A, I, g) {
  const E = A.g;
  let D, o;
  return (s, N, y) => E(s, N, y, o || (o = $Q(I).S), D || (D = vQ(I)), g);
}
function $Q(A) {
  let I = A[vC];
  return I || (dD(A), I = _Q(A, A[vC] = {}, Is, gs), vC in A && zC in A && (A.length = 0), I);
}
function Mi(A, I) {
  var g = A[I];
  if (g)
    return g;
  if ((g = A.ha) && (g = g[I])) {
    var E = (g = qD(g))[0].h;
    if (g = g[1]) {
      const D = lD(g), o = SB(g).S;
      g = (g = A.h) ? g(o, D) : (s, N, y) => E(s, N, y, o, D);
    } else
      g = E;
    return A[I] = g;
  }
}
function fD(A, I, g) {
  for (var E = _(A), D = +!!(512 & E) - 1, o = A.length, s = 512 & E ? 1 : 0, N = o + (256 & E ? -1 : 0); s < N; s++) {
    const y = A[s];
    if (y == null)
      continue;
    const U = s - D, L = Mi(g, U);
    L && L(I, y, U);
  }
  if (256 & E) {
    E = A[o - 1];
    for (let y in E)
      D = +y, Number.isNaN(D) || (o = E[y]) != null && (N = Mi(g, D)) && N(I, o, D);
  }
  if (A = uI ? A[uI] : void 0)
    for (Jg(I, I.g.end()), g = 0; g < A.length; g++)
      Jg(I, rQ(A[g]) || RB());
}
function uA(A, I) {
  return new rg(A, I, !1, !1);
}
function lg(A, I) {
  return new rg(A, I, !0, !1);
}
function JB(A, I) {
  return new rg(A, I, !1, !0);
}
function pA(A, I, g) {
  EA(A, _(A), I, g);
}
var Cs = JB(function(A, I, g, E, D) {
  return A.h === 2 && (A = iC(A, Gg([void 0, void 0], E), D), tI(E = _(I)), (D = HI(I, E, g)) instanceof QI ? 2 & D.O ? ((D = D.X()).push(A), EA(I, E, g, D)) : D.Ta(A) : Array.isArray(D) ? (2 & FA(D) && EA(I, E, g, D = LD(D)), D.push(A)) : EA(I, E, g, [A]), !0);
}, function(A, I, g, E, D) {
  if (I instanceof QI)
    I.forEach((o, s) => {
      DQ(A, g, Gg([s, o], E), D);
    });
  else if (Array.isArray(I))
    for (let o = 0; o < I.length; o++) {
      const s = I[o];
      Array.isArray(s) && DQ(A, g, Gg(s, E), D);
    }
});
function bD(A, I, g) {
  A:
    if (I != null) {
      if (kB(I)) {
        if (typeof I == "string") {
          I = TQ(I);
          break A;
        }
        if (typeof I == "number") {
          I = mQ(I);
          break A;
        }
      }
      I = void 0;
    }
  I != null && (typeof I == "string" && oi(I), I != null && (DI(A, g, 0), typeof I == "number" ? (A = A.g, Dg(I), CB(A, BA, MA)) : (g = oi(I), CB(A.g, g.h, g.g))));
}
function VD(A, I, g) {
  (I = eg(I)) != null && I != null && (DI(A, g, 0), yB(A.g, I));
}
function xD(A, I, g) {
  (I = KD(I)) != null && (DI(A, g, 0), A.g.g.push(I ? 1 : 0));
}
function WD(A, I, g) {
  (I = CC(I)) != null && KB(A, g, vi(I));
}
function cB(A, I, g, E, D) {
  DQ(A, g, I instanceof n ? I.s : Array.isArray(I) ? Gg(I, E) : void 0, D);
}
function ZD(A, I, g) {
  (I = I == null || typeof I == "string" || aB(I) || I instanceof TI ? I : void 0) != null && KB(A, g, eQ(I).buffer);
}
function mD(A, I, g) {
  return (A.h === 5 || A.h === 2) && (I = ng(I, _(I), g, 2, !1), A.h == 2 ? NB(A, iQ, I) : I.push(iQ(A.g)), !0);
}
var JA, bI = uA(function(A, I, g) {
  if (A.h !== 1)
    return !1;
  var E = A.g;
  A = EQ(E);
  const D = EQ(E);
  E = 2 * (D >> 31) + 1;
  const o = D >>> 20 & 2047;
  return A = 4294967296 * (1048575 & D) + A, pA(I, g, o == 2047 ? A ? NaN : 1 / 0 * E : o == 0 ? E * Math.pow(2, -1074) * A : E * Math.pow(2, o - 1075) * (A + 4503599627370496)), !0;
}, function(A, I, g) {
  (I = PI(I)) != null && (DI(A, g, 1), A = A.g, (g = DD || (DD = new DataView(new ArrayBuffer(8)))).setFloat64(0, +I, !0), BA = g.getUint32(0, !0), MA = g.getUint32(4, !0), IC(A, BA), IC(A, MA));
}), cA = uA(function(A, I, g) {
  return A.h === 5 && (pA(I, g, iQ(A.g)), !0);
}, function(A, I, g) {
  (I = PI(I)) != null && (DI(A, g, 5), A = A.g, dQ(I), IC(A, BA));
}), Bs = lg(mD, function(A, I, g) {
  if ((I = dg(PI, I)) != null)
    for (let s = 0; s < I.length; s++) {
      var E = A, D = g, o = I[s];
      o != null && (DI(E, D, 5), E = E.g, dQ(o), IC(E, BA));
    }
}), AE = lg(mD, function(A, I, g) {
  if ((I = dg(PI, I)) != null && I.length) {
    DI(A, g, 2), DC(A.g, 4 * I.length);
    for (let E = 0; E < I.length; E++)
      g = A.g, dQ(I[E]), IC(g, BA);
  }
}), OI = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, bQ(A.g, lQ)), !0);
}, bD), AQ = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, (A = bQ(A.g, lQ)) === 0 ? void 0 : A), !0);
}, bD), Qs = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, bQ(A.g, QQ)), !0);
}, function(A, I, g) {
  A:
    if (I != null) {
      if (kB(I)) {
        if (typeof I == "string") {
          var E = Math.trunc(Number(I));
          Number.isSafeInteger(E) && 0 <= E ? I = String(E) : ((E = I.indexOf(".")) !== -1 && (I = I.substring(0, E)), hi(I) || (hB(I), I = gB(BA, MA)));
          break A;
        }
        if (typeof I == "number") {
          I = 0 <= (I = Math.trunc(I)) && Number.isSafeInteger(I) ? I : function(D) {
            if (0 > D) {
              Dg(D);
              const o = gB(BA, MA);
              return D = Number(o), Number.isSafeInteger(D) ? D : o;
            }
            return hi(String(D)) ? D : (Dg(D), QQ(BA, MA));
          }(I);
          break A;
        }
      }
      I = void 0;
    }
  I != null && (typeof I == "string" && ii(I), I != null && (DI(A, g, 0), typeof I == "number" ? (A = A.g, Dg(I), CB(A, BA, MA)) : (g = ii(I), CB(A.g, g.h, g.g))));
}), KA = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, pI(A.g)), !0);
}, VD), IE = lg(function(A, I, g) {
  return (A.h === 0 || A.h === 2) && (I = ng(I, _(I), g, 2, !1), A.h == 2 ? NB(A, pI, I) : I.push(pI(A.g)), !0);
}, function(A, I, g) {
  if ((I = dg(eg, I)) != null && I.length) {
    g = WQ(A, g);
    for (let E = 0; E < I.length; E++)
      yB(A.g, I[E]);
    ZQ(A, g);
  }
}), Yg = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, (A = pI(A.g)) === 0 ? void 0 : A), !0);
}, VD), SA = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, VQ(A.g)), !0);
}, xD), $g = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, (A = VQ(A.g)) === !1 ? void 0 : A), !0);
}, xD), xA = lg(function(A, I, g) {
  return A.h === 2 && (sC(I, g, P0, A = xQ(A)), !0);
}, function(A, I, g) {
  if ((I = dg(CC, I)) != null)
    for (let s = 0; s < I.length; s++) {
      var E = A, D = g, o = I[s];
      o != null && KB(E, D, vi(o));
    }
}), jI = uA(function(A, I, g) {
  return A.h === 2 && (pA(I, g, (A = xQ(A)) === "" ? void 0 : A), !0);
}, WD), DA = uA(function(A, I, g) {
  return A.h === 2 && (pA(I, g, xQ(A)), !0);
}, WD), Es = JB(function(A, I, g, E, D) {
  return A.h === 2 && (iC(A, zQ(I, E, g, !0), D), !0);
}, cB), is = JB(function(A, I, g, E, D) {
  return A.h === 2 && (iC(A, zQ(I, E, g), D), !0);
}, cB);
JA = new rg(function(A, I, g, E, D) {
  if (A.h !== 2)
    return !1;
  E = Gg(void 0, E);
  let o = _(I);
  tI(o);
  let s = ng(I, o, g, 3);
  return o = _(I), 4 & FA(s) && (s = WA(s), NA(s, -2079 & (1 | FA(s))), EA(I, o, g, s)), s.push(E), iC(A, E, D), !0;
}, function(A, I, g, E, D) {
  if (Array.isArray(I))
    for (let o = 0; o < I.length; o++)
      cB(A, I[o], g, E, D);
}, !0, !0);
var oA = JB(function(A, I, g, E, D, o) {
  if (A.h !== 2)
    return !1;
  let s = _(I);
  return tI(s), (o = PQ(I, s, o)) && g !== o && EA(I, s, o), iC(A, I = zQ(I, E, g), D), !0;
}, cB), TD = uA(function(A, I, g) {
  return A.h === 2 && (pA(I, g, FD(A)), !0);
}, ZD), Ds = lg(function(A, I, g) {
  return (A.h === 0 || A.h === 2) && (I = ng(I, _(I), g, 2, !1), A.h == 2 ? NB(A, XI, I) : I.push(XI(A.g)), !0);
}, function(A, I, g) {
  if ((I = dg(W0, I)) != null)
    for (let s = 0; s < I.length; s++) {
      var E = A, D = g, o = I[s];
      o != null && (DI(E, D, 0), DC(E.g, o));
    }
}), LI = uA(function(A, I, g) {
  return A.h === 0 && (pA(I, g, pI(A.g)), !0);
}, function(A, I, g) {
  (I = eg(I)) != null && (I = parseInt(I, 10), DI(A, g, 0), yB(A.g, I));
}), os = lg(function(A, I, g) {
  return (A.h === 0 || A.h === 2) && (I = ng(I, _(I), g, 2, !1), A.h == 2 ? NB(A, d0, I) : I.push(pI(A.g)), !0);
}, function(A, I, g) {
  if ((I = dg(eg, I)) != null && I.length) {
    g = WQ(A, g);
    for (let E = 0; E < I.length; E++)
      yB(A.g, I[E]);
    ZQ(A, g);
  }
});
class Gs {
  constructor(I, g) {
    this.h = I, this.g = g, this.l = P, this.m = V, this.defaultValue = void 0;
  }
}
function hI(A, I) {
  return new Gs(A, I);
}
function zI(A, I) {
  return (g, E) => {
    A: {
      if (mC.length) {
        const o = mC.pop();
        o.o(E), zB(o.g, g, E), g = o;
      } else
        g = new class {
          constructor(o, s) {
            if (Ei.length) {
              const N = Ei.pop();
              zB(N, o, s), o = N;
            } else
              o = new class {
                constructor(N, y) {
                  this.h = null, this.m = !1, this.g = this.l = this.j = 0, zB(this, N, y);
                }
                clear() {
                  this.h = null, this.m = !1, this.g = this.l = this.j = 0, this.aa = !1;
                }
              }(o, s);
            this.g = o, this.l = this.g.g, this.h = this.m = -1, this.o(s);
          }
          o({ ga: o = !1 } = {}) {
            this.ga = o;
          }
        }(g, E);
      try {
        const o = new A(), s = o.s;
        vQ(I)(s, g), gC && delete s[gC];
        var D = o;
        break A;
      } finally {
        g.g.clear(), g.m = -1, g.h = -1, 100 > mC.length && mC.push(g);
      }
      D = void 0;
    }
    return D;
  };
}
function gE(A) {
  return function() {
    const I = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const s = this.g;
            return this.g = [], s;
          }
        }();
      }
    }();
    fD(this.s, I, SB(A)), Jg(I, I.g.end());
    const g = new Uint8Array(I.h), E = I.l, D = E.length;
    let o = 0;
    for (let s = 0; s < D; s++) {
      const N = E[s];
      g.set(N, o), o += N.length;
    }
    return I.l = [g], g;
  };
}
var uD = [0, jI, uA(function(A, I, g) {
  return A.h === 2 && (pA(I, g, (A = FD(A)) === Sg() ? void 0 : A), !0);
}, function(A, I, g) {
  if (I != null) {
    if (I instanceof n) {
      const E = I.Va;
      return void (E && (I = E(I), I != null && KB(A, g, eQ(I).buffer)));
    }
    if (Array.isArray(I))
      return;
  }
  ZD(A, I, g);
})], ws = [0, DA], pD = [0, KA, LI, SA, -1, IE, LI, -1], ss = [0, SA, -1], XD = class extends n {
  constructor() {
    super();
  }
};
XD.A = [6];
var OD = [0, SA, DA, SA, LI, -1, os, DA, -1, ss, LI], jD = [0, DA, -2], Si = class extends n {
  constructor() {
    super();
  }
}, PD = [0], zD = [0, KA, SA, -2], iI = class extends n {
  constructor(A) {
    super(A, 2);
  }
}, wA = {}, Fs = [-2, wA, SA];
wA[336783863] = [0, DA, SA, -1, KA, [0, [1, 2, 3, 4, 5], oA, PD, oA, OD, oA, jD, oA, zD, oA, pD], ws];
var as = [0, jI, $g], vD = [0, AQ, -1, $g, -3, AQ, IE, jI, Yg, AQ, -1, $g, Yg, $g, -2, jI], FC = [-1, {}], _D = [0, DA, 1, FC], $D = [0, DA, xA, FC];
function oI(A, I) {
  I = wC(I), A = A.s;
  let g = _(A);
  tI(g), EA(A, g, 2, I === "" ? void 0 : I);
}
function iA(A, I) {
  sC(A.s, 3, GC, I);
}
function gA(A, I) {
  sC(A.s, 4, GC, I);
}
var ZA = class extends n {
  constructor(A) {
    super(A, 500);
  }
  o(A) {
    return V(this, 0, 7, A);
  }
};
ZA.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var Rs = [-500, jI, -1, xA, -3, Fs, JA, uD, Yg, -1, _D, $D, JA, as, jI, vD, Yg, xA, 987, xA], hs = [0, jI, -1, FC], Ns = [-500, DA, -1, [-1, {}], 998, DA], ys = [-500, DA, xA, -1, [-2, {}, SA], 997, xA, -1], Ks = [-500, DA, xA, FC, 998, xA];
function GI(A, I) {
  FQ(A, ZA, I);
}
function sA(A, I) {
  sC(A.s, 10, GC, I);
}
function GA(A, I) {
  sC(A.s, 15, GC, I);
}
var XA = class extends n {
  constructor(A) {
    super(A, 500);
  }
  o(A) {
    return V(this, 0, 1001, A);
  }
};
XA.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var Ao = [-500, JA, Rs, 4, JA, Ns, JA, ys, Yg, JA, Ks, xA, Yg, _D, $D, JA, hs, xA, -2, vD, jI, -1, $g, 979, FC, JA, uD], Us = zI(XA, Ao);
XA.prototype.g = gE(Ao);
var ks = [0, JA, [0, KA, -2]], Ms = class extends n {
  constructor(A) {
    super(A);
  }
}, Ss = [0, KA, cA, DA, -1], CE = class extends n {
  constructor(A) {
    super(A);
  }
  g() {
    return xI(this, Ms, 1);
  }
};
CE.A = [1];
var Io = [0, JA, Ss], BE = zI(CE, Io), Js = [0, KA, cA], cs = [0, KA, -1, ks], Ys = class extends n {
  constructor(A) {
    super(A);
  }
}, Ls = [0, KA, -3], ts = [0, cA, -3], Hs = class extends n {
  constructor(A) {
    super(A);
  }
}, rs = [0, cA, -1, DA, cA], _C = class extends n {
  constructor(A) {
    super(A);
  }
  h() {
    return P(this, Ys, 2);
  }
  g() {
    return xI(this, Hs, 5);
  }
};
_C.A = [5];
var qs = [0, LI, Ls, ts, cs, JA, rs], go = class extends n {
  constructor(A) {
    super(A);
  }
};
go.A = [1, 2, 3, 8, 9];
var Co = zI(go, [0, xA, IE, AE, qs, DA, -1, OI, JA, Js, xA, OI]), Bo = class extends n {
  constructor(A) {
    super(A);
  }
}, es = [0, cA, -4], Qo = class extends n {
  constructor(A) {
    super(A);
  }
};
Qo.A = [1];
var QE = zI(Qo, [0, JA, es]), Eo = class extends n {
  constructor(A) {
    super(A);
  }
}, ns = [0, cA, -4], io = class extends n {
  constructor(A) {
    super(A);
  }
};
io.A = [1];
var YB = zI(io, [0, JA, ns]), Do = class extends n {
  constructor(A) {
    super(A);
  }
};
Do.A = [3];
var ds = [0, KA, -1, AE, LI], oo = class extends n {
  constructor() {
    super();
  }
};
oo.prototype.g = gE([0, cA, -4, OI]);
var ls = class extends n {
  constructor(A) {
    super(A);
  }
}, fs = [0, 1, KA, DA, Io], Go = class extends n {
  constructor(A) {
    super(A);
  }
};
Go.A = [1];
var bs = zI(Go, [0, JA, fs, OI]), aQ = class extends n {
  constructor(A) {
    super(A);
  }
};
aQ.A = [1];
var Vs = class extends n {
  constructor(A) {
    super(A);
  }
  ua() {
    const A = JD(this);
    return A ?? Sg();
  }
}, xs = class extends n {
  constructor(A) {
    super(A);
  }
}, wo = [1, 2], Ws = [0, wo, oA, [0, AE], oA, [0, TD], KA, DA], so = class extends n {
  constructor(A) {
    super(A);
  }
};
so.A = [1];
var Zs = zI(so, [0, JA, Ws, OI]), LB = class extends n {
  constructor(A) {
    super(A);
  }
};
LB.A = [4, 5];
var Fo = [0, DA, KA, cA, xA, -1], Ji = class extends n {
  constructor(A) {
    super(A);
  }
}, ms = [0, SA, -1], ci = class extends n {
  constructor(A) {
    super(A);
  }
}, $C = [1, 2, 3, 4, 5], wB = class extends n {
  constructor(A) {
    super(A);
  }
  g() {
    return JD(this) != null;
  }
  h() {
    return EI(this, 2) != null;
  }
}, ao = [0, TD, DA, [0, KA, OI, -1], [0, Qs, OI]], yA = class extends n {
  constructor(A) {
    super(A);
  }
  g() {
    return KD(cg(this, 2)) ?? !1;
  }
}, YA = [0, ao, SA, [0, $C, oA, zD, oA, OD, oA, pD, oA, PD, oA, jD], LI], EE = class extends n {
  constructor(A) {
    super(A);
  }
}, Ro = [0, YA, cA, -1, KA], Ts = hI(502141897, EE);
wA[502141897] = Ro;
var ho = [0, ao];
wA[512499200] = ho;
var No = [0, ho];
wA[515723506] = No;
var us = zI(class extends n {
  constructor(A) {
    super(A);
  }
}, [0, [0, LI, -1, Bs, Ds], ds]), yo = [0, YA];
wA[508981768] = yo;
var ps = class extends n {
  constructor(A) {
    super(A);
  }
}, Ko = [0, YA, cA, yo, SA], Uo = class extends n {
  constructor(A) {
    super(A);
  }
}, ko = [0, YA, Ro, Ko, cA, No];
wA[508968149] = Ko;
var Xs = hI(508968150, Uo);
wA[508968150] = ko;
var Mo = class extends n {
  constructor(A) {
    super(A);
  }
}, Os = hI(513916220, Mo);
wA[513916220] = [0, YA, ko, KA];
var Ug = class extends n {
  constructor(A) {
    super(A);
  }
  h() {
    return P(this, LB, 2);
  }
  g() {
    QA(this, 2);
  }
}, So = [0, YA, Fo];
wA[478825465] = So;
var Jo = [0, YA];
wA[478825422] = Jo;
var js = class extends n {
  constructor(A) {
    super(A);
  }
}, co = [0, YA, Jo, So, -1], Yo = class extends n {
  constructor(A) {
    super(A);
  }
}, Lo = [0, YA, cA, KA], to = class extends n {
  constructor(A) {
    super(A);
  }
}, Ho = [0, YA, cA], iE = class extends n {
  constructor(A) {
    super(A);
  }
}, ro = [0, YA, Lo, Ho, cA], qo = class extends n {
  constructor(A) {
    super(A);
  }
}, Ps = [0, YA, ro, co];
wA[463370452] = co, wA[464864288] = Lo, wA[474472470] = Ho;
var zs = hI(462713202, iE);
wA[462713202] = ro;
var vs = hI(479097054, qo);
wA[479097054] = Ps;
var eo = class extends n {
  constructor(A) {
    super(A);
  }
}, _s = hI(456383383, eo);
wA[456383383] = [0, YA, Fo];
var no = class extends n {
  constructor(A) {
    super(A);
  }
}, $s = hI(476348187, no);
wA[476348187] = [0, YA, ms];
var lo = class extends n {
  constructor(A) {
    super(A);
  }
}, fo = [0, LI, -1], RQ = class extends n {
  constructor(A) {
    super(A);
  }
};
RQ.A = [3];
var AF = hI(458105876, class extends n {
  constructor(A) {
    super(A);
  }
  g() {
    var A = this.s;
    const I = _(A);
    var g = 2 & I;
    return A = function(E, D, o) {
      var s = RQ;
      const N = 2 & D;
      let y = !1;
      if (o == null) {
        if (N)
          return yi();
        o = [];
      } else if (o.constructor === QI) {
        if (!(2 & o.O) || N)
          return o;
        o = o.X();
      } else
        Array.isArray(o) ? y = !!(2 & FA(o)) : o = [];
      if (N) {
        if (!o.length)
          return yi();
        y || (y = !0, qg(o));
      } else
        y && (y = !1, o = LD(o));
      return y || (64 & FA(o) ? BB(o, 32) : 32 & D && UB(o, 32)), EA(E, D, 2, s = new QI(o, s, Z0, void 0), !1), s;
    }(A, I, HI(A, I, 2)), A == null || !g && RQ && (A.xa = !0), g = A;
  }
});
wA[458105876] = [0, fo, Cs, [!0, OI, [0, DA, -1, xA]]];
var DE = class extends n {
  constructor(A) {
    super(A);
  }
}, bo = hI(458105758, DE);
wA[458105758] = [0, YA, DA, fo];
var oE = class extends n {
  constructor(A) {
    super(A);
  }
};
oE.A = [5, 6];
var IF = hI(443442058, oE);
wA[443442058] = [0, YA, DA, KA, cA, xA, -1];
var gF = class extends n {
  constructor(A) {
    super(A);
  }
}, Vo = [0, YA, cA, -1, KA];
wA[514774813] = Vo;
var CF = class extends n {
  constructor(A) {
    super(A);
  }
}, xo = [0, YA, cA, SA], Wo = class extends n {
  constructor(A) {
    super(A);
  }
}, BF = [0, YA, Vo, xo, cA];
wA[518928384] = xo;
var QF = hI(516587230, Wo);
function hQ(A, I) {
  return I = I ? I.clone() : new LB(), A.displayNamesLocale !== void 0 ? QA(I, 1, wC(A.displayNamesLocale)) : A.displayNamesLocale === void 0 && QA(I, 1), A.maxResults !== void 0 ? YI(I, 2, A.maxResults) : "maxResults" in A && QA(I, 2), A.scoreThreshold !== void 0 ? x(I, 3, A.scoreThreshold) : "scoreThreshold" in A && QA(I, 3), A.categoryAllowlist !== void 0 ? GB(I, 4, A.categoryAllowlist) : "categoryAllowlist" in A && QA(I, 4), A.categoryDenylist !== void 0 ? GB(I, 5, A.categoryDenylist) : "categoryDenylist" in A && QA(I, 5), I;
}
function Zo(A, I = -1, g = "") {
  return { categories: A.map((E) => ({ index: cI(BI(E, 1)) ?? -1, score: fA(E, 2) ?? 0, categoryName: EI(E, 3) ?? "" ?? "", displayName: EI(E, 4) ?? "" ?? "" })), headIndex: I, headName: g };
}
function mo(A) {
  var s, N;
  var I = kg(A, 3, PI), g = kg(A, 2, eg), E = kg(A, 1, CC), D = kg(A, 9, CC);
  const o = { categories: [], keypoints: [] };
  for (let y = 0; y < I.length; y++)
    o.categories.push({ score: I[y], index: g[y] ?? -1, categoryName: E[y] ?? "", displayName: D[y] ?? "" });
  if ((I = (s = P(A, _C, 4)) == null ? void 0 : s.h()) && (o.boundingBox = { originX: BI(I, 1) ?? 0, originY: BI(I, 2) ?? 0, width: BI(I, 3) ?? 0, height: BI(I, 4) ?? 0, angle: 0 }), (N = P(A, _C, 4)) == null ? void 0 : N.g().length)
    for (const y of P(A, _C, 4).g())
      o.keypoints.push({ x: jC(y, 1) ?? 0, y: jC(y, 2) ?? 0, score: jC(y, 4) ?? 0, label: EI(y, 3) ?? "" });
  return o;
}
function GE(A) {
  const I = [];
  for (const g of xI(A, Eo, 1))
    I.push({ x: fA(g, 1) ?? 0, y: fA(g, 2) ?? 0, z: fA(g, 3) ?? 0 });
  return I;
}
function To(A) {
  const I = [];
  for (const g of xI(A, Bo, 1))
    I.push({ x: fA(g, 1) ?? 0, y: fA(g, 2) ?? 0, z: fA(g, 3) ?? 0 });
  return I;
}
function Yi(A) {
  return Array.from(A, (I) => 127 < I ? I - 256 : I);
}
function Li(A, I) {
  if (A.length !== I.length)
    throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${A.length} vs. ${I.length}).`);
  let g = 0, E = 0, D = 0;
  for (let o = 0; o < A.length; o++)
    g += A[o] * I[o], E += A[o] * A[o], D += I[o] * I[o];
  if (0 >= E || 0 >= D)
    throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return g / Math.sqrt(E * D);
}
let uC;
wA[516587230] = BF;
const EF = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function uo() {
  if (uC === void 0)
    try {
      await WebAssembly.instantiate(EF), uC = !0;
    } catch {
      uC = !1;
    }
  return uC;
}
async function IQ(A, I = "") {
  const g = await uo() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${I}/${A}_${g}.js`, wasmBinaryPath: `${I}/${A}_${g}.wasm` };
}
var jg = class {
};
function po() {
  const A = navigator.userAgent;
  return A.includes("Safari") && !A.includes("Chrome");
}
async function ti(A) {
  if (typeof importScripts != "function") {
    const I = document.createElement("script");
    return I.src = A.toString(), I.crossOrigin = "anonymous", new Promise((g, E) => {
      I.addEventListener("load", () => {
        g();
      }, !1), I.addEventListener("error", (D) => {
        E(D);
      }, !1), document.body.appendChild(I);
    });
  }
  importScripts(A.toString());
}
function l(A, I, g) {
  A.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), g(I = A.i.stringToNewUTF8(I)), A.i._free(I);
}
function Hi(A, I, g) {
  if (!A.i.canvas)
    throw Error("No OpenGL canvas configured.");
  if (g ? A.i._bindTextureToStream(g) : A.i._bindTextureToCanvas(), !(g = A.i.canvas.getContext("webgl2") || A.i.canvas.getContext("webgl")))
    throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return A.i.gpuOriginForWebTexturesIsBottomLeft && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !0), g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, I), A.i.gpuOriginForWebTexturesIsBottomLeft && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1), I.videoWidth ? (g = I.videoWidth, I = I.videoHeight) : I.naturalWidth ? (g = I.naturalWidth, I = I.naturalHeight) : (g = I.width, I = I.height), !A.l || g === A.i.canvas.width && I === A.i.canvas.height || (A.i.canvas.width = g, A.i.canvas.height = I), [g, I];
}
function ri(A, I, g) {
  A.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const E = new Uint32Array(I.length);
  for (let D = 0; D < I.length; D++)
    E[D] = A.i.stringToNewUTF8(I[D]);
  I = A.i._malloc(4 * E.length), A.i.HEAPU32.set(E, I >> 2), g(I);
  for (const D of E)
    A.i._free(D);
  A.i._free(I);
}
function lI(A, I, g) {
  A.i.simpleListeners = A.i.simpleListeners || {}, A.i.simpleListeners[I] = g;
}
function Eg(A, I, g) {
  let E = [];
  A.i.simpleListeners = A.i.simpleListeners || {}, A.i.simpleListeners[I] = (D, o, s) => {
    o ? (g(E, s), E = []) : E.push(D);
  };
}
jg.forVisionTasks = function(A) {
  return IQ("vision", A);
}, jg.forTextTasks = function(A) {
  return IQ("text", A);
}, jg.forAudioTasks = function(A) {
  return IQ("audio", A);
}, jg.isSimdSupported = function() {
  return uo();
};
async function iF(A, I, g, E) {
  return A = await (async (D, o, s, N, y) => {
    if (o && await ti(o), !self.ModuleFactory || s && (await ti(s), !self.ModuleFactory))
      throw Error("ModuleFactory not set.");
    return self.Module && y && ((o = self.Module).locateFile = y.locateFile, y.mainScriptUrlOrBlob && (o.mainScriptUrlOrBlob = y.mainScriptUrlOrBlob)), y = await self.ModuleFactory(self.Module || y), self.ModuleFactory = self.Module = void 0, new D(y, N);
  })(A, g.wasmLoaderPath, g.assetLoaderPath, I, { locateFile: (D) => D.endsWith(".wasm") ? g.wasmBinaryPath.toString() : g.assetBinaryPath && D.endsWith(".data") ? g.assetBinaryPath.toString() : D }), await A.o(E), A;
}
function qi(A, I) {
  const g = P(A.baseOptions, wB, 1) || new wB();
  typeof I == "string" ? (QA(g, 2, wC(I)), QA(g, 1)) : I instanceof Uint8Array && (QA(g, 1, ND(I, !1, !1)), QA(g, 2)), V(A.baseOptions, 0, 1, g);
}
function ei(A) {
  try {
    const I = A.F.length;
    if (I === 1)
      throw Error(A.F[0].message);
    if (1 < I)
      throw Error("Encountered multiple errors: " + A.F.map((g) => g.message).join(", "));
  } finally {
    A.F = [];
  }
}
function b(A, I) {
  A.I = Math.max(A.I, I);
}
function wE(A, I) {
  A.C = new ZA(), oI(A.C, "PassThroughCalculator"), iA(A.C, "free_memory"), gA(A.C, "free_memory_unused_out"), sA(I, "free_memory"), GI(I, A.C);
}
function QC(A, I) {
  iA(A.C, I), gA(A.C, I + "_unused_out");
}
function sE(A) {
  A.g.addBoolToStream(!0, "free_memory", A.I);
}
var NQ = class {
  constructor(A) {
    this.g = A, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(A, I = !0) {
    var g, E, D, o, s, N;
    if (I) {
      const y = A.baseOptions || {};
      if ((g = A.baseOptions) != null && g.modelAssetBuffer && ((E = A.baseOptions) != null && E.modelAssetPath))
        throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!((D = P(this.baseOptions, wB, 1)) != null && D.g() || (o = P(this.baseOptions, wB, 1)) != null && o.h() || (s = A.baseOptions) != null && s.modelAssetBuffer || (N = A.baseOptions) != null && N.modelAssetPath))
        throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(U, L) {
        let d = P(U.baseOptions, ci, 3);
        if (!d) {
          var e = d = new ci(), AA = new Si();
          _g(e, 4, $C, AA);
        }
        "delegate" in L && (L.delegate === "GPU" ? (L = d, e = new XD(), _g(L, 2, $C, e)) : (L = d, e = new Si(), _g(L, 4, $C, e))), V(U.baseOptions, 0, 3, d);
      }(this, y), y.modelAssetPath)
        return fetch(y.modelAssetPath.toString()).then((U) => {
          if (U.ok)
            return U.arrayBuffer();
          throw Error(`Failed to fetch model: ${y.modelAssetPath} (${U.status})`);
        }).then((U) => {
          try {
            this.g.i.FS_unlink("/model.dat");
          } catch {
          }
          this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(U), !0, !1, !1), qi(this, "/model.dat"), this.m(), this.N();
        });
      qi(this, y.modelAssetBuffer);
    }
    return this.m(), this.N(), Promise.resolve();
  }
  N() {
  }
  da() {
    let A;
    if (this.g.da((I) => {
      A = Us(I);
    }), !A)
      throw Error("Failed to retrieve CalculatorGraphConfig");
    return A;
  }
  setGraph(A, I) {
    this.g.attachErrorListener((g, E) => {
      this.F.push(Error(E));
    }), this.g.Ra(), this.g.setGraph(A, I), this.C = void 0, ei(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), ei(this);
  }
  close() {
    this.C = void 0, this.g.closeGraph();
  }
};
function VI(A, I) {
  if (A === null)
    throw Error(`Unable to obtain required WebGL resource: ${I}`);
  return A;
}
NQ.prototype.close = NQ.prototype.close;
class DF {
  constructor(I, g, E, D) {
    this.g = I, this.h = g, this.m = E, this.l = D;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function ni(A, I, g) {
  const E = A.g;
  if (g = VI(E.createShader(g), "Failed to create WebGL shader"), E.shaderSource(g, I), E.compileShader(g), !E.getShaderParameter(g, E.COMPILE_STATUS))
    throw Error(`Could not compile WebGL shader: ${E.getShaderInfoLog(g)}`);
  return E.attachShader(A.h, g), g;
}
function di(A, I) {
  const g = A.g, E = VI(g.createVertexArray(), "Failed to create vertex array");
  g.bindVertexArray(E);
  const D = VI(g.createBuffer(), "Failed to create buffer");
  g.bindBuffer(g.ARRAY_BUFFER, D), g.enableVertexAttribArray(A.N), g.vertexAttribPointer(A.N, 2, g.FLOAT, !1, 0, 0), g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), g.STATIC_DRAW);
  const o = VI(g.createBuffer(), "Failed to create buffer");
  return g.bindBuffer(g.ARRAY_BUFFER, o), g.enableVertexAttribArray(A.M), g.vertexAttribPointer(A.M, 2, g.FLOAT, !1, 0, 0), g.bufferData(g.ARRAY_BUFFER, new Float32Array(I ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), g.STATIC_DRAW), g.bindBuffer(g.ARRAY_BUFFER, null), g.bindVertexArray(null), new DF(g, E, D, o);
}
function FE(A, I) {
  if (A.g) {
    if (I !== A.g)
      throw Error("Cannot change GL context once initialized");
  } else
    A.g = I;
}
function aE(A, I, g, E) {
  return FE(A, I), A.h || (A.m(), A.F()), g ? (A.u || (A.u = di(A, !0)), g = A.u) : (A.v || (A.v = di(A, !1)), g = A.v), I.useProgram(A.h), g.bind(), A.l(), A = E(), g.g.bindVertexArray(null), A;
}
function tB(A, I, g) {
  return FE(A, I), A = VI(I.createTexture(), "Failed to create texture"), I.bindTexture(I.TEXTURE_2D, A), I.texParameteri(I.TEXTURE_2D, I.TEXTURE_WRAP_S, I.CLAMP_TO_EDGE), I.texParameteri(I.TEXTURE_2D, I.TEXTURE_WRAP_T, I.CLAMP_TO_EDGE), I.texParameteri(I.TEXTURE_2D, I.TEXTURE_MIN_FILTER, g ?? I.LINEAR), I.texParameteri(I.TEXTURE_2D, I.TEXTURE_MAG_FILTER, g ?? I.LINEAR), I.bindTexture(I.TEXTURE_2D, null), A;
}
function HB(A, I, g) {
  FE(A, I), A.C || (A.C = VI(I.createFramebuffer(), "Failed to create framebuffe.")), I.bindFramebuffer(I.FRAMEBUFFER, A.C), I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, g, 0);
}
function RE(A) {
  var I;
  (I = A.g) == null || I.bindFramebuffer(A.g.FRAMEBUFFER, null);
}
var hE = class {
  I() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const A = this.g;
    if (this.h = VI(A.createProgram(), "Failed to create WebGL program"), this.ta = ni(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, A.VERTEX_SHADER), this.sa = ni(this, this.I(), A.FRAGMENT_SHADER), A.linkProgram(this.h), !A.getProgramParameter(this.h, A.LINK_STATUS))
      throw Error(`Error during program linking: ${A.getProgramInfoLog(this.h)}`);
    this.N = A.getAttribLocation(this.h, "aVertex"), this.M = A.getAttribLocation(this.h, "aTex");
  }
  F() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const A = this.g;
      A.deleteProgram(this.h), A.deleteShader(this.ta), A.deleteShader(this.sa);
    }
    this.C && this.g.deleteFramebuffer(this.C), this.v && this.v.close(), this.u && this.u.close();
  }
};
function fI(A, I) {
  switch (I) {
    case 0:
      return A.g.find((g) => g instanceof Uint8Array);
    case 1:
      return A.g.find((g) => g instanceof Float32Array);
    case 2:
      return A.g.find((g) => typeof WebGLTexture < "u" && g instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${I}`);
  }
}
function yQ(A) {
  var I = fI(A, 1);
  if (!I) {
    if (I = fI(A, 0))
      I = new Float32Array(I).map((E) => E / 255);
    else {
      I = new Float32Array(A.width * A.height);
      const E = Lg(A);
      var g = NE(A);
      if (HB(g, E, Xo(A)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        g = new Float32Array(A.width * A.height * 4), E.readPixels(0, 0, A.width, A.height, E.RGBA, E.FLOAT, g);
        for (let D = 0, o = 0; D < I.length; ++D, o += 4)
          I[D] = g[o];
      } else
        E.readPixels(0, 0, A.width, A.height, E.RED, E.FLOAT, I);
    }
    A.g.push(I);
  }
  return I;
}
function Xo(A) {
  let I = fI(A, 2);
  if (!I) {
    const g = Lg(A);
    I = jo(A);
    const E = yQ(A), D = Oo(A);
    g.texImage2D(g.TEXTURE_2D, 0, D, A.width, A.height, 0, g.RED, g.FLOAT, E), KQ(A);
  }
  return I;
}
function Lg(A) {
  if (!A.canvas)
    throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return A.h || (A.h = VI(A.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), A.h;
}
function Oo(A) {
  if (A = Lg(A), !pC)
    if (A.getExtension("EXT_color_buffer_float") && A.getExtension("OES_texture_float_linear") && A.getExtension("EXT_float_blend"))
      pC = A.R32F;
    else {
      if (!A.getExtension("EXT_color_buffer_half_float"))
        throw Error("GPU does not fully support 4-channel float32 or float16 formats");
      pC = A.R16F;
    }
  return pC;
}
function NE(A) {
  return A.l || (A.l = new hE()), A.l;
}
function jo(A) {
  const I = Lg(A);
  I.viewport(0, 0, A.width, A.height), I.activeTexture(I.TEXTURE0);
  let g = fI(A, 2);
  return g || (g = tB(NE(A), I, A.m ? I.LINEAR : I.NEAREST), A.g.push(g), A.j = !0), I.bindTexture(I.TEXTURE_2D, g), g;
}
function KQ(A) {
  A.h.bindTexture(A.h.TEXTURE_2D, null);
}
var pC, qA = class {
  constructor(A, I, g, E, D, o, s) {
    this.g = A, this.m = I, this.j = g, this.canvas = E, this.l = D, this.width = o, this.height = s, this.j && --li === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  La() {
    return !!fI(this, 0);
  }
  ka() {
    return !!fI(this, 1);
  }
  P() {
    return !!fI(this, 2);
  }
  ja() {
    return (I = fI(A = this, 0)) || (I = yQ(A), I = new Uint8Array(I.map((g) => 255 * g)), A.g.push(I)), I;
    var A, I;
  }
  ia() {
    return yQ(this);
  }
  K() {
    return Xo(this);
  }
  clone() {
    const A = [];
    for (const I of this.g) {
      let g;
      if (I instanceof Uint8Array)
        g = new Uint8Array(I);
      else if (I instanceof Float32Array)
        g = new Float32Array(I);
      else {
        if (!(I instanceof WebGLTexture))
          throw Error(`Type is not supported: ${I}`);
        {
          const E = Lg(this), D = NE(this);
          E.activeTexture(E.TEXTURE1), g = tB(D, E, this.m ? E.LINEAR : E.NEAREST), E.bindTexture(E.TEXTURE_2D, g);
          const o = Oo(this);
          E.texImage2D(E.TEXTURE_2D, 0, o, this.width, this.height, 0, E.RED, E.FLOAT, null), E.bindTexture(E.TEXTURE_2D, null), HB(D, E, g), aE(D, E, !1, () => {
            jo(this), E.clearColor(0, 0, 0, 0), E.clear(E.COLOR_BUFFER_BIT), E.drawArrays(E.TRIANGLE_FAN, 0, 4), KQ(this);
          }), RE(D), KQ(this);
        }
      }
      A.push(g);
    }
    return new qA(A, this.m, this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Lg(this).deleteTexture(fI(this, 2)), li = -1;
  }
};
qA.prototype.close = qA.prototype.close, qA.prototype.clone = qA.prototype.clone, qA.prototype.getAsWebGLTexture = qA.prototype.K, qA.prototype.getAsFloat32Array = qA.prototype.ia, qA.prototype.getAsUint8Array = qA.prototype.ja, qA.prototype.hasWebGLTexture = qA.prototype.P, qA.prototype.hasFloat32Array = qA.prototype.ka, qA.prototype.hasUint8Array = qA.prototype.La;
var li = 250;
function MI(A, I) {
  switch (I) {
    case 0:
      return A.g.find((g) => g instanceof ImageData);
    case 1:
      return A.g.find((g) => typeof ImageBitmap < "u" && g instanceof ImageBitmap);
    case 2:
      return A.g.find((g) => typeof WebGLTexture < "u" && g instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${I}`);
  }
}
function Po(A) {
  var I = MI(A, 0);
  if (!I) {
    I = tg(A);
    const g = rB(A), E = new Uint8Array(A.width * A.height * 4);
    HB(g, I, AB(A)), I.readPixels(0, 0, A.width, A.height, I.RGBA, I.UNSIGNED_BYTE, E), RE(g), I = new ImageData(new Uint8ClampedArray(E.buffer), A.width, A.height), A.g.push(I);
  }
  return I;
}
function AB(A) {
  let I = MI(A, 2);
  if (!I) {
    const g = tg(A);
    I = IB(A);
    const E = MI(A, 1) || Po(A);
    g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, E), Pg(A);
  }
  return I;
}
function tg(A) {
  if (!A.canvas)
    throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return A.h || (A.h = VI(A.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), A.h;
}
function rB(A) {
  return A.l || (A.l = new hE()), A.l;
}
function IB(A) {
  const I = tg(A);
  I.viewport(0, 0, A.width, A.height), I.activeTexture(I.TEXTURE0);
  let g = MI(A, 2);
  return g || (g = tB(rB(A), I), A.g.push(g), A.m = !0), I.bindTexture(I.TEXTURE_2D, g), g;
}
function Pg(A) {
  A.h.bindTexture(A.h.TEXTURE_2D, null);
}
function fi(A) {
  const I = tg(A);
  return aE(rB(A), I, !0, () => function(g, E) {
    const D = g.canvas;
    if (D.width === g.width && D.height === g.height)
      return E();
    const o = D.width, s = D.height;
    return D.width = g.width, D.height = g.height, g = E(), D.width = o, D.height = s, g;
  }(A, () => {
    if (I.bindFramebuffer(I.FRAMEBUFFER, null), I.clearColor(0, 0, 0, 0), I.clear(I.COLOR_BUFFER_BIT), I.drawArrays(I.TRIANGLE_FAN, 0, 4), !(A.canvas instanceof OffscreenCanvas))
      throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return A.canvas.transferToImageBitmap();
  }));
}
var eA = class {
  constructor(A, I, g, E, D, o, s) {
    this.g = A, this.j = I, this.m = g, this.canvas = E, this.l = D, this.width = o, this.height = s, (this.j || this.m) && --bi === 0 && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
  }
  Ka() {
    return !!MI(this, 0);
  }
  la() {
    return !!MI(this, 1);
  }
  P() {
    return !!MI(this, 2);
  }
  Ia() {
    return Po(this);
  }
  Ha() {
    var A = MI(this, 1);
    return A || (AB(this), IB(this), A = fi(this), Pg(this), this.g.push(A), this.j = !0), A;
  }
  K() {
    return AB(this);
  }
  clone() {
    const A = [];
    for (const I of this.g) {
      let g;
      if (I instanceof ImageData)
        g = new ImageData(I.data, this.width, this.height);
      else if (I instanceof WebGLTexture) {
        const E = tg(this), D = rB(this);
        E.activeTexture(E.TEXTURE1), g = tB(D, E), E.bindTexture(E.TEXTURE_2D, g), E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, this.width, this.height, 0, E.RGBA, E.UNSIGNED_BYTE, null), E.bindTexture(E.TEXTURE_2D, null), HB(D, E, g), aE(D, E, !1, () => {
          IB(this), E.clearColor(0, 0, 0, 0), E.clear(E.COLOR_BUFFER_BIT), E.drawArrays(E.TRIANGLE_FAN, 0, 4), Pg(this);
        }), RE(D), Pg(this);
      } else {
        if (!(I instanceof ImageBitmap))
          throw Error(`Type is not supported: ${I}`);
        AB(this), IB(this), g = fi(this), Pg(this);
      }
      A.push(g);
    }
    return new eA(A, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && MI(this, 1).close(), this.m && tg(this).deleteTexture(MI(this, 2)), bi = -1;
  }
};
eA.prototype.close = eA.prototype.close, eA.prototype.clone = eA.prototype.clone, eA.prototype.getAsWebGLTexture = eA.prototype.K, eA.prototype.getAsImageBitmap = eA.prototype.Ha, eA.prototype.getAsImageData = eA.prototype.Ia, eA.prototype.hasWebGLTexture = eA.prototype.P, eA.prototype.hasImageBitmap = eA.prototype.la, eA.prototype.hasImageData = eA.prototype.Ka;
var bi = 250;
function NI(...A) {
  return A.map(([I, g]) => ({ start: I, end: g }));
}
const oF = /* @__PURE__ */ function(A) {
  return class extends A {
    Ra() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((Vi = class {
  constructor(A, I) {
    this.l = !0, this.i = A, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", I !== void 0 ? this.i.canvas = I : typeof OffscreenCanvas > "u" || po() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  async initializeGraph(A) {
    const I = await (await fetch(A)).arrayBuffer();
    A = !(A.endsWith(".pbtxt") || A.endsWith(".textproto")), this.setGraph(new Uint8Array(I), A);
  }
  setGraphFromString(A) {
    this.setGraph(new TextEncoder().encode(A), !1);
  }
  setGraph(A, I) {
    const g = A.length, E = this.i._malloc(g);
    this.i.HEAPU8.set(A, E), I ? this.i._changeBinaryGraph(g, E) : this.i._changeTextGraph(g, E), this.i._free(E);
  }
  configureAudio(A, I, g, E, D) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), l(this, E || "input_audio", (o) => {
      l(this, D = D || "audio_header", (s) => {
        this.i._configureAudio(o, s, A, I, g);
      });
    });
  }
  setAutoResizeCanvas(A) {
    this.l = A;
  }
  setAutoRenderToScreen(A) {
    this.i._setAutoRenderToScreen(A);
  }
  setGpuBufferVerticalFlip(A) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = A;
  }
  da(A) {
    lI(this, "__graph_config__", (I) => {
      A(I);
    }), l(this, "__graph_config__", (I) => {
      this.i._getGraphConfig(I, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(A) {
    this.i.errorListener = A;
  }
  attachEmptyPacketListener(A, I) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[A] = I;
  }
  addAudioToStream(A, I, g) {
    this.addAudioToStreamWithShape(A, 0, 0, I, g);
  }
  addAudioToStreamWithShape(A, I, g, E, D) {
    const o = 4 * A.length;
    this.h !== o && (this.g && this.i._free(this.g), this.g = this.i._malloc(o), this.h = o), this.i.HEAPF32.set(A, this.g / 4), l(this, E, (s) => {
      this.i._addAudioToInputStream(this.g, I, g, s, D);
    });
  }
  addGpuBufferToStream(A, I, g) {
    l(this, I, (E) => {
      const [D, o] = Hi(this, A, E);
      this.i._addBoundTextureToStream(E, D, o, g);
    });
  }
  addBoolToStream(A, I, g) {
    l(this, I, (E) => {
      this.i._addBoolToInputStream(A, E, g);
    });
  }
  addDoubleToStream(A, I, g) {
    l(this, I, (E) => {
      this.i._addDoubleToInputStream(A, E, g);
    });
  }
  addFloatToStream(A, I, g) {
    l(this, I, (E) => {
      this.i._addFloatToInputStream(A, E, g);
    });
  }
  addIntToStream(A, I, g) {
    l(this, I, (E) => {
      this.i._addIntToInputStream(A, E, g);
    });
  }
  addStringToStream(A, I, g) {
    l(this, I, (E) => {
      l(this, A, (D) => {
        this.i._addStringToInputStream(D, E, g);
      });
    });
  }
  addStringRecordToStream(A, I, g) {
    l(this, I, (E) => {
      ri(this, Object.keys(A), (D) => {
        ri(this, Object.values(A), (o) => {
          this.i._addFlatHashMapToInputStream(D, o, Object.keys(A).length, E, g);
        });
      });
    });
  }
  addProtoToStream(A, I, g, E) {
    l(this, g, (D) => {
      l(this, I, (o) => {
        const s = this.i._malloc(A.length);
        this.i.HEAPU8.set(A, s), this.i._addProtoToInputStream(s, A.length, o, D, E), this.i._free(s);
      });
    });
  }
  addEmptyPacketToStream(A, I) {
    l(this, A, (g) => {
      this.i._addEmptyPacketToInputStream(g, I);
    });
  }
  addBoolVectorToStream(A, I, g) {
    l(this, I, (E) => {
      const D = this.i._allocateBoolVector(A.length);
      if (!D)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const o of A)
        this.i._addBoolVectorEntry(D, o);
      this.i._addBoolVectorToInputStream(D, E, g);
    });
  }
  addDoubleVectorToStream(A, I, g) {
    l(this, I, (E) => {
      const D = this.i._allocateDoubleVector(A.length);
      if (!D)
        throw Error("Unable to allocate new double vector on heap.");
      for (const o of A)
        this.i._addDoubleVectorEntry(D, o);
      this.i._addDoubleVectorToInputStream(D, E, g);
    });
  }
  addFloatVectorToStream(A, I, g) {
    l(this, I, (E) => {
      const D = this.i._allocateFloatVector(A.length);
      if (!D)
        throw Error("Unable to allocate new float vector on heap.");
      for (const o of A)
        this.i._addFloatVectorEntry(D, o);
      this.i._addFloatVectorToInputStream(D, E, g);
    });
  }
  addIntVectorToStream(A, I, g) {
    l(this, I, (E) => {
      const D = this.i._allocateIntVector(A.length);
      if (!D)
        throw Error("Unable to allocate new int vector on heap.");
      for (const o of A)
        this.i._addIntVectorEntry(D, o);
      this.i._addIntVectorToInputStream(D, E, g);
    });
  }
  addStringVectorToStream(A, I, g) {
    l(this, I, (E) => {
      const D = this.i._allocateStringVector(A.length);
      if (!D)
        throw Error("Unable to allocate new string vector on heap.");
      for (const o of A)
        l(this, o, (s) => {
          this.i._addStringVectorEntry(D, s);
        });
      this.i._addStringVectorToInputStream(D, E, g);
    });
  }
  addBoolToInputSidePacket(A, I) {
    l(this, I, (g) => {
      this.i._addBoolToInputSidePacket(A, g);
    });
  }
  addDoubleToInputSidePacket(A, I) {
    l(this, I, (g) => {
      this.i._addDoubleToInputSidePacket(A, g);
    });
  }
  addFloatToInputSidePacket(A, I) {
    l(this, I, (g) => {
      this.i._addFloatToInputSidePacket(A, g);
    });
  }
  addIntToInputSidePacket(A, I) {
    l(this, I, (g) => {
      this.i._addIntToInputSidePacket(A, g);
    });
  }
  addStringToInputSidePacket(A, I) {
    l(this, I, (g) => {
      l(this, A, (E) => {
        this.i._addStringToInputSidePacket(E, g);
      });
    });
  }
  addProtoToInputSidePacket(A, I, g) {
    l(this, g, (E) => {
      l(this, I, (D) => {
        const o = this.i._malloc(A.length);
        this.i.HEAPU8.set(A, o), this.i._addProtoToInputSidePacket(o, A.length, D, E), this.i._free(o);
      });
    });
  }
  addBoolVectorToInputSidePacket(A, I) {
    l(this, I, (g) => {
      const E = this.i._allocateBoolVector(A.length);
      if (!E)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const D of A)
        this.i._addBoolVectorEntry(E, D);
      this.i._addBoolVectorToInputSidePacket(E, g);
    });
  }
  addDoubleVectorToInputSidePacket(A, I) {
    l(this, I, (g) => {
      const E = this.i._allocateDoubleVector(A.length);
      if (!E)
        throw Error("Unable to allocate new double vector on heap.");
      for (const D of A)
        this.i._addDoubleVectorEntry(E, D);
      this.i._addDoubleVectorToInputSidePacket(E, g);
    });
  }
  addFloatVectorToInputSidePacket(A, I) {
    l(this, I, (g) => {
      const E = this.i._allocateFloatVector(A.length);
      if (!E)
        throw Error("Unable to allocate new float vector on heap.");
      for (const D of A)
        this.i._addFloatVectorEntry(E, D);
      this.i._addFloatVectorToInputSidePacket(E, g);
    });
  }
  addIntVectorToInputSidePacket(A, I) {
    l(this, I, (g) => {
      const E = this.i._allocateIntVector(A.length);
      if (!E)
        throw Error("Unable to allocate new int vector on heap.");
      for (const D of A)
        this.i._addIntVectorEntry(E, D);
      this.i._addIntVectorToInputSidePacket(E, g);
    });
  }
  addStringVectorToInputSidePacket(A, I) {
    l(this, I, (g) => {
      const E = this.i._allocateStringVector(A.length);
      if (!E)
        throw Error("Unable to allocate new string vector on heap.");
      for (const D of A)
        l(this, D, (o) => {
          this.i._addStringVectorEntry(E, o);
        });
      this.i._addStringVectorToInputSidePacket(E, g);
    });
  }
  attachBoolListener(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.i._attachBoolListener(g);
    });
  }
  attachBoolVectorListener(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.i._attachBoolVectorListener(g);
    });
  }
  attachIntListener(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.i._attachIntListener(g);
    });
  }
  attachIntVectorListener(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.i._attachIntVectorListener(g);
    });
  }
  attachDoubleListener(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.i._attachDoubleListener(g);
    });
  }
  attachDoubleVectorListener(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.i._attachDoubleVectorListener(g);
    });
  }
  attachFloatListener(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.i._attachFloatListener(g);
    });
  }
  attachFloatVectorListener(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.i._attachFloatVectorListener(g);
    });
  }
  attachStringListener(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.i._attachStringListener(g);
    });
  }
  attachStringVectorListener(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.i._attachStringVectorListener(g);
    });
  }
  attachProtoListener(A, I, g) {
    lI(this, A, I), l(this, A, (E) => {
      this.i._attachProtoListener(E, g || !1);
    });
  }
  attachProtoVectorListener(A, I, g) {
    Eg(this, A, I), l(this, A, (E) => {
      this.i._attachProtoVectorListener(E, g || !1);
    });
  }
  attachAudioListener(A, I, g) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), lI(this, A, (E, D) => {
      E = new Float32Array(E.buffer, E.byteOffset, E.length / 4), I(E, D);
    }), l(this, A, (E) => {
      this.i._attachAudioListener(E, g || !1);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Vi {
  get fa() {
    return this.i;
  }
  va(A, I, g) {
    l(this, I, (E) => {
      const [D, o] = Hi(this, A, E);
      this.fa._addBoundTextureAsImageToStream(E, D, o, g);
    });
  }
  ba(A, I) {
    lI(this, A, I), l(this, A, (g) => {
      this.fa._attachImageListener(g);
    });
  }
  ca(A, I) {
    Eg(this, A, I), l(this, A, (g) => {
      this.fa._attachImageVectorListener(g);
    });
  }
}));
var Vi, yI = class extends oF {
};
async function j(A, I, g) {
  return async function(E, D, o, s) {
    return iF(E, D, o, s);
  }(A, g.canvas ?? (typeof OffscreenCanvas > "u" || po() ? document.createElement("canvas") : void 0), I, g);
}
function zo(A, I, g, E) {
  if (A.J) {
    const o = new oo();
    if (g != null && g.regionOfInterest) {
      if (!A.U)
        throw Error("This task doesn't support region-of-interest.");
      var D = g.regionOfInterest;
      if (D.left >= D.right || D.top >= D.bottom)
        throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > D.left || 0 > D.top || 1 < D.right || 1 < D.bottom)
        throw Error("Expected RectF values to be in [0,1].");
      x(o, 1, (D.left + D.right) / 2), x(o, 2, (D.top + D.bottom) / 2), x(o, 4, D.right - D.left), x(o, 3, D.bottom - D.top);
    } else
      x(o, 1, 0.5), x(o, 2, 0.5), x(o, 4, 1), x(o, 3, 1);
    if (g != null && g.rotationDegrees) {
      if ((g == null ? void 0 : g.rotationDegrees) % 90 != 0)
        throw Error("Expected rotation to be a multiple of 90°.");
      if (x(o, 5, -Math.PI * g.rotationDegrees / 180), (g == null ? void 0 : g.rotationDegrees) % 180 != 0) {
        const [s, N] = I.videoWidth !== void 0 ? [I.videoWidth, I.videoHeight] : I.naturalWidth !== void 0 ? [I.naturalWidth, I.naturalHeight] : [I.width, I.height];
        g = fA(o, 3) * N / s, D = fA(o, 4) * s / N, x(o, 4, g), x(o, 3, D);
      }
    }
    A.g.addProtoToStream(o.g(), "mediapipe.NormalizedRect", A.J, E);
  }
  A.g.va(I, A.T, E ?? performance.now()), A.finishProcessing();
}
function KI(A, I, g) {
  var E;
  if ((E = A.baseOptions) != null && E.g())
    throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  zo(A, I, g, A.I + 1);
}
function WI(A, I, g, E) {
  var D;
  if (!((D = A.baseOptions) != null && D.g()))
    throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  zo(A, I, g, E);
}
function EC(A, I, g, E) {
  var D = I.data;
  const o = I.width, s = o * (I = I.height);
  if ((D instanceof Uint8Array || D instanceof Float32Array) && D.length !== s)
    throw Error("Unsupported channel count: " + D.length / s);
  return A = new qA([D], g, !1, A.g.i.canvas, A.M, o, I), E ? A.clone() : A;
}
var _A = class extends NQ {
  constructor(A, I, g, E) {
    super(A), this.g = A, this.T = I, this.J = g, this.U = E, this.M = new hE();
  }
  l(A, I = !0) {
    if ("runningMode" in A && BC(this.baseOptions, 2, !!A.runningMode && A.runningMode !== "IMAGE"), A.canvas !== void 0 && this.g.i.canvas !== A.canvas)
      throw Error("You must create a new task to reset the canvas.");
    return super.l(A, I);
  }
  close() {
    this.M.close(), super.close();
  }
};
_A.prototype.close = _A.prototype.close;
var AI = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, V(A = this.h = new EE(), 0, 1, I = new yA()), x(this.h, 2, 0.5), x(this.h, 3, 0.3);
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return "minDetectionConfidence" in A && x(this.h, 2, A.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in A && x(this.h, 3, A.minSuppressionThreshold ?? 0.3), this.l(A);
  }
  G(A, I) {
    return this.j = { detections: [] }, KI(this, A, I), this.j;
  }
  H(A, I, g) {
    return this.j = { detections: [] }, WI(this, A, g, I), this.j;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect_in"), GA(A, "detections");
    const I = new iI();
    RI(I, Ts, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect_in"), gA(g, "DETECTIONS:detections"), g.o(I), GI(A, g), this.g.attachProtoVectorListener("detections", (E, D) => {
      for (const o of E)
        E = Co(o), this.j.detections.push(mo(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("detections", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
AI.prototype.detectForVideo = AI.prototype.H, AI.prototype.detect = AI.prototype.G, AI.prototype.setOptions = AI.prototype.o, AI.createFromModelPath = async function(A, I) {
  return j(AI, A, { baseOptions: { modelAssetPath: I } });
}, AI.createFromModelBuffer = function(A, I) {
  return j(AI, A, { baseOptions: { modelAssetBuffer: I } });
}, AI.createFromOptions = function(A, I) {
  return j(AI, A, I);
};
var vo = NI([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), _o = NI([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), $o = NI([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), GF = NI([474, 475], [475, 476], [476, 477], [477, 474]), AG = NI([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), IG = NI([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), wF = NI([469, 470], [470, 471], [471, 472], [472, 469]), gG = NI([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), sF = [...vo, ..._o, ...$o, ...AG, ...IG, ...gG], FF = NI([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function xi(A) {
  A.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var hA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, V(A = this.h = new Uo(), 0, 1, I = new yA()), this.v = new ps(), V(this.h, 0, 3, this.v), this.u = new EE(), V(this.h, 0, 2, this.u), YI(this.u, 4, 1), x(this.u, 2, 0.5), x(this.v, 2, 0.5), x(this.h, 4, 0.5);
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return "numFaces" in A && YI(this.u, 4, A.numFaces ?? 1), "minFaceDetectionConfidence" in A && x(this.u, 2, A.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in A && x(this.h, 4, A.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in A && x(this.v, 2, A.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in A && (this.outputFaceBlendshapes = !!A.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in A && (this.outputFacialTransformationMatrixes = !!A.outputFacialTransformationMatrixes), this.l(A);
  }
  G(A, I) {
    return xi(this), KI(this, A, I), this.j;
  }
  H(A, I, g) {
    return xi(this), WI(this, A, g, I), this.j;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "face_landmarks");
    const I = new iI();
    RI(I, Xs, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "NORM_LANDMARKS:face_landmarks"), g.o(I), GI(A, g), this.g.attachProtoVectorListener("face_landmarks", (E, D) => {
      for (const o of E)
        E = YB(o), this.j.faceLandmarks.push(GE(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("face_landmarks", (E) => {
      b(this, E);
    }), this.outputFaceBlendshapes && (GA(A, "blendshapes"), gA(g, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (E, D) => {
      if (this.outputFaceBlendshapes)
        for (const o of E)
          E = BE(o), this.j.faceBlendshapes.push(Zo(E.g() ?? []));
      b(this, D);
    }), this.g.attachEmptyPacketListener("blendshapes", (E) => {
      b(this, E);
    })), this.outputFacialTransformationMatrixes && (GA(A, "face_geometry"), gA(g, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (E, D) => {
      if (this.outputFacialTransformationMatrixes)
        for (const o of E)
          (E = P(us(o), Do, 2)) && this.j.facialTransformationMatrixes.push({ rows: cI(BI(E, 1)) ?? 0, columns: cI(BI(E, 2)) ?? 0, data: kg(E, 3, PI) ?? [] });
      b(this, D);
    }), this.g.attachEmptyPacketListener("face_geometry", (E) => {
      b(this, E);
    })), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
hA.prototype.detectForVideo = hA.prototype.H, hA.prototype.detect = hA.prototype.G, hA.prototype.setOptions = hA.prototype.o, hA.createFromModelPath = function(A, I) {
  return j(hA, A, { baseOptions: { modelAssetPath: I } });
}, hA.createFromModelBuffer = function(A, I) {
  return j(hA, A, { baseOptions: { modelAssetBuffer: I } });
}, hA.createFromOptions = function(A, I) {
  return j(hA, A, I);
}, hA.FACE_LANDMARKS_LIPS = vo, hA.FACE_LANDMARKS_LEFT_EYE = _o, hA.FACE_LANDMARKS_LEFT_EYEBROW = $o, hA.FACE_LANDMARKS_LEFT_IRIS = GF, hA.FACE_LANDMARKS_RIGHT_EYE = AG, hA.FACE_LANDMARKS_RIGHT_EYEBROW = IG, hA.FACE_LANDMARKS_RIGHT_IRIS = wF, hA.FACE_LANDMARKS_FACE_OVAL = gG, hA.FACE_LANDMARKS_CONTOURS = sF, hA.FACE_LANDMARKS_TESSELATION = FF;
var UI = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !0), V(A = this.j = new Mo(), 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.j, yA, 1);
  }
  set baseOptions(A) {
    V(this.j, 0, 1, A);
  }
  o(A) {
    return super.l(A);
  }
  Ua(A, I, g) {
    const E = typeof I != "function" ? I : {};
    if (this.h = typeof I == "function" ? I : g, KI(this, A, E ?? {}), !this.h)
      return this.u;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "stylized_image");
    const I = new iI();
    RI(I, Os, this.j);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "STYLIZED_IMAGE:stylized_image"), g.o(I), GI(A, g), this.g.ba("stylized_image", (E, D) => {
      var o = !this.h, s = E.data, N = E.width;
      const y = N * (E = E.height);
      if (s instanceof Uint8Array)
        if (s.length === 3 * y) {
          const U = new Uint8ClampedArray(4 * y);
          for (let L = 0; L < y; ++L)
            U[4 * L] = s[3 * L], U[4 * L + 1] = s[3 * L + 1], U[4 * L + 2] = s[3 * L + 2], U[4 * L + 3] = 255;
          s = new ImageData(U, N, E);
        } else {
          if (s.length !== 4 * y)
            throw Error("Unsupported channel count: " + s.length / y);
          s = new ImageData(new Uint8ClampedArray(s.buffer, s.byteOffset, s.length), N, E);
        }
      else if (!(s instanceof WebGLTexture))
        throw Error(`Unsupported format: ${s.constructor.name}`);
      N = new eA([s], !1, !1, this.g.i.canvas, this.M, N, E), this.u = o = o ? N.clone() : N, this.h && this.h(o), b(this, D);
    }), this.g.attachEmptyPacketListener("stylized_image", (E) => {
      this.u = null, this.h && this.h(null), b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
UI.prototype.stylize = UI.prototype.Ua, UI.prototype.setOptions = UI.prototype.o, UI.createFromModelPath = function(A, I) {
  return j(UI, A, { baseOptions: { modelAssetPath: I } });
}, UI.createFromModelBuffer = function(A, I) {
  return j(UI, A, { baseOptions: { modelAssetBuffer: I } });
}, UI.createFromOptions = function(A, I) {
  return j(UI, A, I);
};
var CG = NI([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function Wi(A) {
  A.gestures = [], A.landmarks = [], A.worldLandmarks = [], A.handedness = [];
}
function Zi(A) {
  return A.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: A.gestures, landmarks: A.landmarks, worldLandmarks: A.worldLandmarks, handedness: A.handedness, handednesses: A.handedness };
}
function mi(A, I = !0) {
  const g = [];
  for (const D of A) {
    var E = BE(D);
    A = [];
    for (const o of E.g())
      E = I && BI(o, 1) != null ? cI(BI(o, 1)) : -1, A.push({ score: fA(o, 2) ?? 0, index: E, categoryName: EI(o, 3) ?? "" ?? "", displayName: EI(o, 4) ?? "" ?? "" });
    g.push(A);
  }
  return g;
}
var jA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], V(A = this.v = new qo(), 0, 1, I = new yA()), this.B = new iE(), V(this.v, 0, 2, this.B), this.u = new to(), V(this.B, 0, 3, this.u), this.h = new Yo(), V(this.B, 0, 2, this.h), this.j = new js(), V(this.v, 0, 3, this.j), x(this.h, 2, 0.5), x(this.B, 4, 0.5), x(this.u, 2, 0.5);
  }
  get baseOptions() {
    return P(this.v, yA, 1);
  }
  set baseOptions(A) {
    V(this.v, 0, 1, A);
  }
  o(A) {
    var D, o, s, N;
    if (YI(this.h, 3, A.numHands ?? 1), "minHandDetectionConfidence" in A && x(this.h, 2, A.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in A && x(this.B, 4, A.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in A && x(this.u, 2, A.minHandPresenceConfidence ?? 0.5), A.cannedGesturesClassifierOptions) {
      var I = new Ug(), g = I, E = hQ(A.cannedGesturesClassifierOptions, (D = P(this.j, Ug, 3)) == null ? void 0 : D.h());
      V(g, 0, 2, E), V(this.j, 0, 3, I);
    } else
      A.cannedGesturesClassifierOptions === void 0 && ((o = P(this.j, Ug, 3)) == null || o.g());
    return A.customGesturesClassifierOptions ? (V(g = I = new Ug(), 0, 2, E = hQ(A.customGesturesClassifierOptions, (s = P(this.j, Ug, 4)) == null ? void 0 : s.h())), V(this.j, 0, 4, I)) : A.customGesturesClassifierOptions === void 0 && ((N = P(this.j, Ug, 4)) == null || N.g()), this.l(A);
  }
  Pa(A, I) {
    return Wi(this), KI(this, A, I), Zi(this);
  }
  Qa(A, I, g) {
    return Wi(this), WI(this, A, g, I), Zi(this);
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "hand_gestures"), GA(A, "hand_landmarks"), GA(A, "world_hand_landmarks"), GA(A, "handedness");
    const I = new iI();
    RI(I, vs, this.v);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "HAND_GESTURES:hand_gestures"), gA(g, "LANDMARKS:hand_landmarks"), gA(g, "WORLD_LANDMARKS:world_hand_landmarks"), gA(g, "HANDEDNESS:handedness"), g.o(I), GI(A, g), this.g.attachProtoVectorListener("hand_landmarks", (E, D) => {
      for (const o of E) {
        E = YB(o);
        const s = [];
        for (const N of xI(E, Eo, 1))
          s.push({ x: fA(N, 1) ?? 0, y: fA(N, 2) ?? 0, z: fA(N, 3) ?? 0 });
        this.landmarks.push(s);
      }
      b(this, D);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (E) => {
      b(this, E);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (E, D) => {
      for (const o of E) {
        E = QE(o);
        const s = [];
        for (const N of xI(E, Bo, 1))
          s.push({ x: fA(N, 1) ?? 0, y: fA(N, 2) ?? 0, z: fA(N, 3) ?? 0 });
        this.worldLandmarks.push(s);
      }
      b(this, D);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (E) => {
      b(this, E);
    }), this.g.attachProtoVectorListener("hand_gestures", (E, D) => {
      this.gestures.push(...mi(E, !1)), b(this, D);
    }), this.g.attachEmptyPacketListener("hand_gestures", (E) => {
      b(this, E);
    }), this.g.attachProtoVectorListener("handedness", (E, D) => {
      this.handedness.push(...mi(E)), b(this, D);
    }), this.g.attachEmptyPacketListener("handedness", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
function Ti(A) {
  return { landmarks: A.landmarks, worldLandmarks: A.worldLandmarks, handednesses: A.handedness, handedness: A.handedness };
}
jA.prototype.recognizeForVideo = jA.prototype.Qa, jA.prototype.recognize = jA.prototype.Pa, jA.prototype.setOptions = jA.prototype.o, jA.createFromModelPath = function(A, I) {
  return j(jA, A, { baseOptions: { modelAssetPath: I } });
}, jA.createFromModelBuffer = function(A, I) {
  return j(jA, A, { baseOptions: { modelAssetBuffer: I } });
}, jA.createFromOptions = function(A, I) {
  return j(jA, A, I);
}, jA.HAND_CONNECTIONS = CG;
var PA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], V(A = this.j = new iE(), 0, 1, I = new yA()), this.u = new to(), V(this.j, 0, 3, this.u), this.h = new Yo(), V(this.j, 0, 2, this.h), YI(this.h, 3, 1), x(this.h, 2, 0.5), x(this.u, 2, 0.5), x(this.j, 4, 0.5);
  }
  get baseOptions() {
    return P(this.j, yA, 1);
  }
  set baseOptions(A) {
    V(this.j, 0, 1, A);
  }
  o(A) {
    return "numHands" in A && YI(this.h, 3, A.numHands ?? 1), "minHandDetectionConfidence" in A && x(this.h, 2, A.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in A && x(this.j, 4, A.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in A && x(this.u, 2, A.minHandPresenceConfidence ?? 0.5), this.l(A);
  }
  G(A, I) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], KI(this, A, I), Ti(this);
  }
  H(A, I, g) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], WI(this, A, g, I), Ti(this);
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "hand_landmarks"), GA(A, "world_hand_landmarks"), GA(A, "handedness");
    const I = new iI();
    RI(I, zs, this.j);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "LANDMARKS:hand_landmarks"), gA(g, "WORLD_LANDMARKS:world_hand_landmarks"), gA(g, "HANDEDNESS:handedness"), g.o(I), GI(A, g), this.g.attachProtoVectorListener("hand_landmarks", (E, D) => {
      for (const o of E)
        E = YB(o), this.landmarks.push(GE(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (E) => {
      b(this, E);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (E, D) => {
      for (const o of E)
        E = QE(o), this.worldLandmarks.push(To(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (E) => {
      b(this, E);
    }), this.g.attachProtoVectorListener("handedness", (E, D) => {
      var o = this.handedness, s = o.push;
      const N = [];
      for (const y of E) {
        E = BE(y);
        const U = [];
        for (const L of E.g())
          U.push({ score: fA(L, 2) ?? 0, index: cI(BI(L, 1)) ?? -1, categoryName: EI(L, 3) ?? "" ?? "", displayName: EI(L, 4) ?? "" ?? "" });
        N.push(U);
      }
      s.call(o, ...N), b(this, D);
    }), this.g.attachEmptyPacketListener("handedness", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
PA.prototype.detectForVideo = PA.prototype.H, PA.prototype.detect = PA.prototype.G, PA.prototype.setOptions = PA.prototype.o, PA.createFromModelPath = function(A, I) {
  return j(PA, A, { baseOptions: { modelAssetPath: I } });
}, PA.createFromModelBuffer = function(A, I) {
  return j(PA, A, { baseOptions: { modelAssetBuffer: I } });
}, PA.createFromOptions = function(A, I) {
  return j(PA, A, I);
}, PA.HAND_CONNECTIONS = CG;
var II = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "input_image", "norm_rect", !0), this.j = { classifications: [] }, V(A = this.h = new eo(), 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return V(this.h, 0, 2, hQ(A, P(this.h, LB, 2))), this.l(A);
  }
  ya(A, I) {
    return this.j = { classifications: [] }, KI(this, A, I), this.j;
  }
  za(A, I, g) {
    return this.j = { classifications: [] }, WI(this, A, g, I), this.j;
  }
  m() {
    var A = new XA();
    sA(A, "input_image"), sA(A, "norm_rect"), GA(A, "classifications");
    const I = new iI();
    RI(I, _s, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), iA(g, "IMAGE:input_image"), iA(g, "NORM_RECT:norm_rect"), gA(g, "CLASSIFICATIONS:classifications"), g.o(I), GI(A, g), this.g.attachProtoListener("classifications", (E, D) => {
      this.j = function(o) {
        const s = { classifications: xI(o, ls, 1).map((N) => {
          var y;
          return Zo(((y = P(N, CE, 4)) == null ? void 0 : y.g()) ?? [], cI(BI(N, 2)), EI(N, 3) ?? "");
        }) };
        return iB(cg(o, 2)) != null && (s.timestampMs = cI(iB(cg(o, 2)))), s;
      }(bs(E)), b(this, D);
    }), this.g.attachEmptyPacketListener("classifications", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
II.prototype.classifyForVideo = II.prototype.za, II.prototype.classify = II.prototype.ya, II.prototype.setOptions = II.prototype.o, II.createFromModelPath = function(A, I) {
  return j(II, A, { baseOptions: { modelAssetPath: I } });
}, II.createFromModelBuffer = function(A, I) {
  return j(II, A, { baseOptions: { modelAssetBuffer: I } });
}, II.createFromOptions = function(A, I) {
  return j(II, A, I);
};
var zA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !0), this.h = new no(), this.embeddings = { embeddings: [] }, V(A = this.h, 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    var I = this.h, g = P(this.h, Ji, 2);
    return g = g ? g.clone() : new Ji(), A.l2Normalize !== void 0 ? BC(g, 1, A.l2Normalize) : "l2Normalize" in A && QA(g, 1), A.quantize !== void 0 ? BC(g, 2, A.quantize) : "quantize" in A && QA(g, 2), V(I, 0, 2, g), this.l(A);
  }
  Fa(A, I) {
    return KI(this, A, I), this.embeddings;
  }
  Ga(A, I, g) {
    return WI(this, A, g, I), this.embeddings;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "embeddings_out");
    const I = new iI();
    RI(I, $s, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "EMBEDDINGS:embeddings_out"), g.o(I), GI(A, g), this.g.attachProtoListener("embeddings_out", (E, D) => {
      E = Zs(E), this.embeddings = function(o) {
        return { embeddings: xI(o, xs, 1).map((s) => {
          var y, U;
          const N = { headIndex: cI(BI(s, 3)) ?? -1, headName: EI(s, 4) ?? "" ?? "" };
          if (tD(s, aQ, $B(s, 1)) !== void 0)
            s = kg(s = P(s, aQ, $B(s, 1)), 1, PI), N.floatEmbedding = s;
          else {
            const L = new Uint8Array(0);
            N.quantizedEmbedding = ((U = (y = P(s, Vs, $B(s, 2))) == null ? void 0 : y.ua()) == null ? void 0 : U.wa()) ?? L;
          }
          return N;
        }), timestampMs: cI(iB(cg(o, 2))) };
      }(E), b(this, D);
    }), this.g.attachEmptyPacketListener("embeddings_out", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
zA.cosineSimilarity = function(A, I) {
  if (A.floatEmbedding && I.floatEmbedding)
    A = Li(A.floatEmbedding, I.floatEmbedding);
  else {
    if (!A.quantizedEmbedding || !I.quantizedEmbedding)
      throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    A = Li(Yi(A.quantizedEmbedding), Yi(I.quantizedEmbedding));
  }
  return A;
}, zA.prototype.embedForVideo = zA.prototype.Ga, zA.prototype.embed = zA.prototype.Fa, zA.prototype.setOptions = zA.prototype.o, zA.createFromModelPath = function(A, I) {
  return j(zA, A, { baseOptions: { modelAssetPath: I } });
}, zA.createFromModelBuffer = function(A, I) {
  return j(zA, A, { baseOptions: { modelAssetBuffer: I } });
}, zA.createFromOptions = function(A, I) {
  return j(zA, A, I);
};
var UQ = class {
  constructor(A, I, g) {
    this.confidenceMasks = A, this.categoryMask = I, this.qualityScores = g;
  }
  close() {
    var A, I;
    (A = this.confidenceMasks) == null || A.forEach((g) => {
      g.close();
    }), (I = this.categoryMask) == null || I.close();
  }
};
function ui(A) {
  A.categoryMask = void 0, A.confidenceMasks = void 0, A.qualityScores = void 0;
}
function pi(A) {
  try {
    const I = new UQ(A.confidenceMasks, A.categoryMask, A.qualityScores);
    if (!A.j)
      return I;
    A.j(I);
  } finally {
    sE(A);
  }
}
UQ.prototype.close = UQ.prototype.close;
var TA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new DE(), this.v = new lo(), V(this.h, 0, 3, this.v), V(A = this.h, 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return A.displayNamesLocale !== void 0 ? QA(this.h, 2, wC(A.displayNamesLocale)) : "displayNamesLocale" in A && QA(this.h, 2), "outputCategoryMask" in A && (this.outputCategoryMask = A.outputCategoryMask ?? !1), "outputConfidenceMasks" in A && (this.outputConfidenceMasks = A.outputConfidenceMasks ?? !0), super.l(A);
  }
  N() {
    (function(A) {
      var g, E;
      const I = xI(A.da(), ZA, 1).filter((D) => (EI(D, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
      if (A.u = [], 1 < I.length)
        throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      I.length === 1 && (((E = (g = P(I[0], iI, 7)) == null ? void 0 : g.l()) == null ? void 0 : E.g()) ?? /* @__PURE__ */ new Map()).forEach((D, o) => {
        A.u[Number(o)] = EI(D, 1) ?? "";
      });
    })(this);
  }
  ea(A, I, g) {
    const E = typeof I != "function" ? I : {};
    return this.j = typeof I == "function" ? I : g, ui(this), KI(this, A, E), pi(this);
  }
  Sa(A, I, g, E) {
    const D = typeof g != "function" ? g : {};
    return this.j = typeof g == "function" ? g : E, ui(this), WI(this, A, D, I), pi(this);
  }
  Ja() {
    return this.u;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect");
    const I = new iI();
    RI(I, bo, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), g.o(I), GI(A, g), wE(this, A), this.outputConfidenceMasks && (GA(A, "confidence_masks"), gA(g, "CONFIDENCE_MASKS:confidence_masks"), QC(this, "confidence_masks"), this.g.ca("confidence_masks", (E, D) => {
      this.confidenceMasks = E.map((o) => EC(this, o, !0, !this.j)), b(this, D);
    }), this.g.attachEmptyPacketListener("confidence_masks", (E) => {
      this.confidenceMasks = [], b(this, E);
    })), this.outputCategoryMask && (GA(A, "category_mask"), gA(g, "CATEGORY_MASK:category_mask"), QC(this, "category_mask"), this.g.ba("category_mask", (E, D) => {
      this.categoryMask = EC(this, E, !1, !this.j), b(this, D);
    }), this.g.attachEmptyPacketListener("category_mask", (E) => {
      this.categoryMask = void 0, b(this, E);
    })), GA(A, "quality_scores"), gA(g, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (E, D) => {
      this.qualityScores = E, b(this, D);
    }), this.g.attachEmptyPacketListener("quality_scores", (E) => {
      this.categoryMask = void 0, b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
TA.prototype.getLabels = TA.prototype.Ja, TA.prototype.segmentForVideo = TA.prototype.Sa, TA.prototype.segment = TA.prototype.ea, TA.prototype.setOptions = TA.prototype.o, TA.createFromModelPath = function(A, I) {
  return j(TA, A, { baseOptions: { modelAssetPath: I } });
}, TA.createFromModelBuffer = function(A, I) {
  return j(TA, A, { baseOptions: { modelAssetBuffer: I } });
}, TA.createFromOptions = function(A, I) {
  return j(TA, A, I);
};
var kQ = class {
  constructor(A, I, g) {
    this.confidenceMasks = A, this.categoryMask = I, this.qualityScores = g;
  }
  close() {
    var A, I;
    (A = this.confidenceMasks) == null || A.forEach((g) => {
      g.close();
    }), (I = this.categoryMask) == null || I.close();
  }
};
kQ.prototype.close = kQ.prototype.close;
var aF = class extends n {
  constructor(A) {
    super(A);
  }
}, Hg = [0, KA, -2], RF = [0, bI, -3, SA], qB = [0, bI, -3, SA, bI, -1], BG = [0, qB], hF = [0, BG, Hg], NF = [0, qB, Hg], QG = [0, qB, KA, -1], yF = [0, QG, Hg], KF = [0, bI, -3, SA, Hg, -1], UF = [0, bI, -3, SA, LI], gQ = class extends n {
  constructor(A) {
    super(A);
  }
}, Xi = [0, bI, -1, SA], EG = class extends n {
  constructor() {
    super();
  }
};
EG.A = [1];
var Oi = class extends n {
  constructor(A) {
    super(A);
  }
}, MQ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15], kF = [0, MQ, oA, qB, oA, NF, oA, BG, oA, hF, oA, Xi, oA, UF, oA, RF, oA, [0, DA, bI, -2, SA, KA, SA, -1, 2, bI, Hg], oA, QG, oA, yF, bI, Hg, DA, oA, KF, oA, [0, JA, Xi]], MF = [0, DA, KA, -1, SA], SQ = class extends n {
  constructor() {
    super();
  }
};
SQ.A = [1], SQ.prototype.g = gE([0, JA, kF, DA, MF]);
var kI = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new DE(), this.v = new lo(), V(this.h, 0, 3, this.v), V(A = this.h, 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return "outputCategoryMask" in A && (this.outputCategoryMask = A.outputCategoryMask ?? !1), "outputConfidenceMasks" in A && (this.outputConfidenceMasks = A.outputConfidenceMasks ?? !0), super.l(A);
  }
  ea(A, I, g, E) {
    const D = typeof g != "function" ? g : {};
    this.j = typeof g == "function" ? g : E, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, g = this.I + 1, E = new SQ();
    const o = new Oi();
    var s = new aF();
    if (YI(s, 1, 255), V(o, 0, 12, s), I.keypoint && I.scribble)
      throw Error("Cannot provide both keypoint and scribble.");
    if (I.keypoint) {
      var N = new gQ();
      BC(N, 3, !0), x(N, 1, I.keypoint.x), x(N, 2, I.keypoint.y), _g(o, 5, MQ, N);
    } else {
      if (!I.scribble)
        throw Error("Must provide either a keypoint or a scribble.");
      for (N of (s = new EG(), I.scribble))
        BC(I = new gQ(), 3, !0), x(I, 1, N.x), x(I, 2, N.y), FQ(s, gQ, I);
      _g(o, 15, MQ, s);
    }
    FQ(E, Oi, o), this.g.addProtoToStream(E.g(), "drishti.RenderData", "roi_in", g), KI(this, A, D);
    A: {
      try {
        const U = new kQ(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var y = U;
          break A;
        }
        this.j(U);
      } finally {
        sE(this);
      }
      y = void 0;
    }
    return y;
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "roi_in"), sA(A, "norm_rect_in");
    const I = new iI();
    RI(I, bo, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), iA(g, "IMAGE:image_in"), iA(g, "ROI:roi_in"), iA(g, "NORM_RECT:norm_rect_in"), g.o(I), GI(A, g), wE(this, A), this.outputConfidenceMasks && (GA(A, "confidence_masks"), gA(g, "CONFIDENCE_MASKS:confidence_masks"), QC(this, "confidence_masks"), this.g.ca("confidence_masks", (E, D) => {
      this.confidenceMasks = E.map((o) => EC(this, o, !0, !this.j)), b(this, D);
    }), this.g.attachEmptyPacketListener("confidence_masks", (E) => {
      this.confidenceMasks = [], b(this, E);
    })), this.outputCategoryMask && (GA(A, "category_mask"), gA(g, "CATEGORY_MASK:category_mask"), QC(this, "category_mask"), this.g.ba("category_mask", (E, D) => {
      this.categoryMask = EC(this, E, !1, !this.j), b(this, D);
    }), this.g.attachEmptyPacketListener("category_mask", (E) => {
      this.categoryMask = void 0, b(this, E);
    })), GA(A, "quality_scores"), gA(g, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (E, D) => {
      this.qualityScores = E, b(this, D);
    }), this.g.attachEmptyPacketListener("quality_scores", (E) => {
      this.categoryMask = void 0, b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
kI.prototype.segment = kI.prototype.ea, kI.prototype.setOptions = kI.prototype.o, kI.createFromModelPath = function(A, I) {
  return j(kI, A, { baseOptions: { modelAssetPath: I } });
}, kI.createFromModelBuffer = function(A, I) {
  return j(kI, A, { baseOptions: { modelAssetBuffer: I } });
}, kI.createFromOptions = function(A, I) {
  return j(kI, A, I);
};
var gI = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, V(A = this.h = new oE(), 0, 1, I = new yA());
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return A.displayNamesLocale !== void 0 ? QA(this.h, 2, wC(A.displayNamesLocale)) : "displayNamesLocale" in A && QA(this.h, 2), A.maxResults !== void 0 ? YI(this.h, 3, A.maxResults) : "maxResults" in A && QA(this.h, 3), A.scoreThreshold !== void 0 ? x(this.h, 4, A.scoreThreshold) : "scoreThreshold" in A && QA(this.h, 4), A.categoryAllowlist !== void 0 ? GB(this.h, 5, A.categoryAllowlist) : "categoryAllowlist" in A && QA(this.h, 5), A.categoryDenylist !== void 0 ? GB(this.h, 6, A.categoryDenylist) : "categoryDenylist" in A && QA(this.h, 6), this.l(A);
  }
  G(A, I) {
    return this.j = { detections: [] }, KI(this, A, I), this.j;
  }
  H(A, I, g) {
    return this.j = { detections: [] }, WI(this, A, g, I), this.j;
  }
  m() {
    var A = new XA();
    sA(A, "input_frame_gpu"), sA(A, "norm_rect"), GA(A, "detections");
    const I = new iI();
    RI(I, IF, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.ObjectDetectorGraph"), iA(g, "IMAGE:input_frame_gpu"), iA(g, "NORM_RECT:norm_rect"), gA(g, "DETECTIONS:detections"), g.o(I), GI(A, g), this.g.attachProtoVectorListener("detections", (E, D) => {
      for (const o of E)
        E = Co(o), this.j.detections.push(mo(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("detections", (E) => {
      b(this, E);
    }), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
gI.prototype.detectForVideo = gI.prototype.H, gI.prototype.detect = gI.prototype.G, gI.prototype.setOptions = gI.prototype.o, gI.createFromModelPath = async function(A, I) {
  return j(gI, A, { baseOptions: { modelAssetPath: I } });
}, gI.createFromModelBuffer = function(A, I) {
  return j(gI, A, { baseOptions: { modelAssetBuffer: I } });
}, gI.createFromOptions = function(A, I) {
  return j(gI, A, I);
};
function ji(A) {
  A.landmarks = [], A.worldLandmarks = [], A.v = void 0;
}
function Pi(A) {
  try {
    const I = new class {
      constructor(g, E, D) {
        this.landmarks = g, this.worldLandmarks = E, this.g = D;
      }
      close() {
        var g;
        (g = this.g) == null || g.forEach((E) => {
          E.close();
        });
      }
    }(A.landmarks, A.worldLandmarks, A.v);
    if (!A.u)
      return I;
    A.u(I);
  } finally {
    sE(A);
  }
}
var vA = class extends _A {
  constructor(A, I) {
    super(new yI(A, I), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, V(A = this.h = new Wo(), 0, 1, I = new yA()), this.B = new CF(), V(this.h, 0, 3, this.B), this.j = new gF(), V(this.h, 0, 2, this.j), YI(this.j, 4, 1), x(this.j, 2, 0.5), x(this.B, 2, 0.5), x(this.h, 4, 0.5);
  }
  get baseOptions() {
    return P(this.h, yA, 1);
  }
  set baseOptions(A) {
    V(this.h, 0, 1, A);
  }
  o(A) {
    return "numPoses" in A && YI(this.j, 4, A.numPoses ?? 1), "minPoseDetectionConfidence" in A && x(this.j, 2, A.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in A && x(this.h, 4, A.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in A && x(this.B, 2, A.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in A && (this.outputSegmentationMasks = A.outputSegmentationMasks ?? !1), this.l(A);
  }
  G(A, I, g) {
    const E = typeof I != "function" ? I : {};
    return this.u = typeof I == "function" ? I : g, ji(this), KI(this, A, E), Pi(this);
  }
  H(A, I, g, E) {
    const D = typeof g != "function" ? g : {};
    return this.u = typeof g == "function" ? g : E, ji(this), WI(this, A, D, I), Pi(this);
  }
  m() {
    var A = new XA();
    sA(A, "image_in"), sA(A, "norm_rect"), GA(A, "normalized_landmarks"), GA(A, "world_landmarks"), GA(A, "segmentation_masks");
    const I = new iI();
    RI(I, QF, this.h);
    const g = new ZA();
    oI(g, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), iA(g, "IMAGE:image_in"), iA(g, "NORM_RECT:norm_rect"), gA(g, "NORM_LANDMARKS:normalized_landmarks"), gA(g, "WORLD_LANDMARKS:world_landmarks"), g.o(I), GI(A, g), wE(this, A), this.g.attachProtoVectorListener("normalized_landmarks", (E, D) => {
      this.landmarks = [];
      for (const o of E)
        E = YB(o), this.landmarks.push(GE(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (E) => {
      this.landmarks = [], b(this, E);
    }), this.g.attachProtoVectorListener("world_landmarks", (E, D) => {
      this.worldLandmarks = [];
      for (const o of E)
        E = QE(o), this.worldLandmarks.push(To(E));
      b(this, D);
    }), this.g.attachEmptyPacketListener("world_landmarks", (E) => {
      this.worldLandmarks = [], b(this, E);
    }), this.outputSegmentationMasks && (gA(g, "SEGMENTATION_MASK:segmentation_masks"), QC(this, "segmentation_masks"), this.g.ca("segmentation_masks", (E, D) => {
      this.v = E.map((o) => EC(this, o, !0, !this.u)), b(this, D);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (E) => {
      this.v = [], b(this, E);
    })), A = A.g(), this.setGraph(new Uint8Array(A), !0);
  }
};
vA.prototype.detectForVideo = vA.prototype.H, vA.prototype.detect = vA.prototype.G, vA.prototype.setOptions = vA.prototype.o, vA.createFromModelPath = function(A, I) {
  return j(vA, A, { baseOptions: { modelAssetPath: I } });
}, vA.createFromModelBuffer = function(A, I) {
  return j(vA, A, { baseOptions: { modelAssetBuffer: I } });
}, vA.createFromOptions = function(A, I) {
  return j(vA, A, I);
}, vA.POSE_CONNECTIONS = NI([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
class SF {
  constructor() {
  }
  async init() {
    const I = await jg.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm"
      //"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    this.faceLandmarker = await hA.createFromOptions(I, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        delegate: "GPU"
      },
      outputFaceBlendshapes: !0,
      // outputFacialTransformationMatrixes: true,
      runningMode: "IMAGE",
      numFaces: 1
    });
  }
  async detect(I) {
    return this.faceLandmarker.detect(I);
  }
}
let JF = {};
var iG = function() {
  var A = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return typeof __filename < "u" && (A = A || __filename), function(I) {
    I = I || {};
    var g = typeof I < "u" ? I : {}, E, D;
    g.ready = new Promise(function(C, B) {
      E = C, D = B;
    });
    var o = {}, s;
    for (s in g)
      g.hasOwnProperty(s) && (o[s] = g[s]);
    var N = "./this.program", y = !1, U = !1, L = !1, d = !1;
    y = typeof window == "object", U = typeof importScripts == "function", L = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", d = !y && !L && !U;
    var e = "";
    function AA(C) {
      return g.locateFile ? g.locateFile(C, e) : e + C;
    }
    var T, aA, CA, wI, t;
    L ? (U ? e = require("path").dirname(e) + "/" : e = __dirname + "/", T = function(B, Q) {
      var i = Bg(B);
      return i ? Q ? i : i.toString() : (wI || (wI = require("fs")), t || (t = require("path")), B = t.normalize(B), wI.readFileSync(B, Q ? null : "utf8"));
    }, CA = function(B) {
      var Q = T(B, !0);
      return Q.buffer || (Q = new Uint8Array(Q)), LA(Q.buffer), Q;
    }, process.argv.length > 1 && (N = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(C) {
      if (!(C instanceof $E))
        throw C;
    }), process.on("unhandledRejection", dA), g.inspect = function() {
      return "[Emscripten Module object]";
    }) : d ? (typeof read < "u" && (T = function(B) {
      var Q = Bg(B);
      return Q ? jE(Q) : read(B);
    }), CA = function(B) {
      var Q;
      return Q = Bg(B), Q || (typeof readbuffer == "function" ? new Uint8Array(readbuffer(B)) : (Q = read(B, "binary"), LA(typeof Q == "object"), Q));
    }, typeof scriptArgs < "u" && scriptArgs, typeof print < "u" && (typeof console > "u" && (console = {}), console.log = print, console.warn = console.error = typeof printErr < "u" ? printErr : print)) : (y || U) && (U ? e = self.location.href : typeof document < "u" && document.currentScript && (e = document.currentScript.src), A && (e = A), e.indexOf("blob:") !== 0 ? e = e.substr(0, e.lastIndexOf("/") + 1) : e = "", T = function(B) {
      try {
        var Q = new XMLHttpRequest();
        return Q.open("GET", B, !1), Q.send(null), Q.responseText;
      } catch (G) {
        var i = Bg(B);
        if (i)
          return jE(i);
        throw G;
      }
    }, U && (CA = function(B) {
      try {
        var Q = new XMLHttpRequest();
        return Q.open("GET", B, !1), Q.responseType = "arraybuffer", Q.send(null), new Uint8Array(Q.response);
      } catch (G) {
        var i = Bg(B);
        if (i)
          return i;
        throw G;
      }
    }), aA = function(B, Q, i) {
      var G = new XMLHttpRequest();
      G.open("GET", B, !0), G.responseType = "arraybuffer", G.onload = function() {
        if (G.status == 200 || G.status == 0 && G.response) {
          Q(G.response);
          return;
        }
        var a = Bg(B);
        if (a) {
          Q(a.buffer);
          return;
        }
        i();
      }, G.onerror = i, G.send(null);
    });
    var f = g.print || console.log.bind(console), z = g.printErr || console.warn.bind(console);
    for (s in o)
      o.hasOwnProperty(s) && (g[s] = o[s]);
    o = null, g.arguments && g.arguments, g.thisProgram && (N = g.thisProgram), g.quit && g.quit;
    var aC = 16;
    function sg(C, B) {
      return B || (B = aC), Math.ceil(C / B) * B;
    }
    function bA(C) {
      bA.shown || (bA.shown = {}), bA.shown[C] || (bA.shown[C] = 1, z(C));
    }
    var vI;
    g.wasmBinary && (vI = g.wasmBinary), g.noExitRuntime && g.noExitRuntime, typeof WebAssembly != "object" && dA("no native wasm support detected");
    var Fg, RA = !1;
    function LA(C, B) {
      C || dA("Assertion failed: " + B);
    }
    var _I = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function ag(C, B, Q) {
      for (var i = B + Q, G = B; C[G] && !(G >= i); )
        ++G;
      if (G - B > 16 && C.subarray && _I)
        return _I.decode(C.subarray(B, G));
      for (var F = ""; B < G; ) {
        var a = C[B++];
        if (!(a & 128)) {
          F += String.fromCharCode(a);
          continue;
        }
        var R = C[B++] & 63;
        if ((a & 224) == 192) {
          F += String.fromCharCode((a & 31) << 6 | R);
          continue;
        }
        var h = C[B++] & 63;
        if ((a & 240) == 224 ? a = (a & 15) << 12 | R << 6 | h : a = (a & 7) << 18 | R << 12 | h << 6 | C[B++] & 63, a < 65536)
          F += String.fromCharCode(a);
        else {
          var K = a - 65536;
          F += String.fromCharCode(55296 | K >> 10, 56320 | K & 1023);
        }
      }
      return F;
    }
    function RC(C, B) {
      return C ? ag(mA, C, B) : "";
    }
    function eB(C, B, Q, i) {
      if (!(i > 0))
        return 0;
      for (var G = Q, F = Q + i - 1, a = 0; a < C.length; ++a) {
        var R = C.charCodeAt(a);
        if (R >= 55296 && R <= 57343) {
          var h = C.charCodeAt(++a);
          R = 65536 + ((R & 1023) << 10) | h & 1023;
        }
        if (R <= 127) {
          if (Q >= F)
            break;
          B[Q++] = R;
        } else if (R <= 2047) {
          if (Q + 1 >= F)
            break;
          B[Q++] = 192 | R >> 6, B[Q++] = 128 | R & 63;
        } else if (R <= 65535) {
          if (Q + 2 >= F)
            break;
          B[Q++] = 224 | R >> 12, B[Q++] = 128 | R >> 6 & 63, B[Q++] = 128 | R & 63;
        } else {
          if (Q + 3 >= F)
            break;
          B[Q++] = 240 | R >> 18, B[Q++] = 128 | R >> 12 & 63, B[Q++] = 128 | R >> 6 & 63, B[Q++] = 128 | R & 63;
        }
      }
      return B[Q] = 0, Q - G;
    }
    function yE(C, B, Q) {
      return eB(C, mA, B, Q);
    }
    function hC(C) {
      for (var B = 0, Q = 0; Q < C.length; ++Q) {
        var i = C.charCodeAt(Q);
        i >= 55296 && i <= 57343 && (i = 65536 + ((i & 1023) << 10) | C.charCodeAt(++Q) & 1023), i <= 127 ? ++B : i <= 2047 ? B += 2 : i <= 65535 ? B += 3 : B += 4;
      }
      return B;
    }
    var KE = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function sG(C, B) {
      for (var Q = C, i = Q >> 1, G = i + B / 2; !(i >= G) && yC[i]; )
        ++i;
      if (Q = i << 1, Q - C > 32 && KE)
        return KE.decode(mA.subarray(C, Q));
      for (var F = "", a = 0; !(a >= B / 2); ++a) {
        var R = $I[C + a * 2 >> 1];
        if (R == 0)
          break;
        F += String.fromCharCode(R);
      }
      return F;
    }
    function FG(C, B, Q) {
      if (Q === void 0 && (Q = 2147483647), Q < 2)
        return 0;
      Q -= 2;
      for (var i = B, G = Q < C.length * 2 ? Q / 2 : C.length, F = 0; F < G; ++F) {
        var a = C.charCodeAt(F);
        $I[B >> 1] = a, B += 2;
      }
      return $I[B >> 1] = 0, B - i;
    }
    function aG(C) {
      return C.length * 2;
    }
    function RG(C, B) {
      for (var Q = 0, i = ""; !(Q >= B / 4); ) {
        var G = q[C + Q * 4 >> 2];
        if (G == 0)
          break;
        if (++Q, G >= 65536) {
          var F = G - 65536;
          i += String.fromCharCode(55296 | F >> 10, 56320 | F & 1023);
        } else
          i += String.fromCharCode(G);
      }
      return i;
    }
    function hG(C, B, Q) {
      if (Q === void 0 && (Q = 2147483647), Q < 4)
        return 0;
      for (var i = B, G = i + Q - 4, F = 0; F < C.length; ++F) {
        var a = C.charCodeAt(F);
        if (a >= 55296 && a <= 57343) {
          var R = C.charCodeAt(++F);
          a = 65536 + ((a & 1023) << 10) | R & 1023;
        }
        if (q[B >> 2] = a, B += 4, B + 4 > G)
          break;
      }
      return q[B >> 2] = 0, B - i;
    }
    function NG(C) {
      for (var B = 0, Q = 0; Q < C.length; ++Q) {
        var i = C.charCodeAt(Q);
        i >= 55296 && i <= 57343 && ++Q, B += 4;
      }
      return B;
    }
    function yG(C, B) {
      nA.set(C, B);
    }
    function KG(C, B, Q) {
      for (var i = 0; i < C.length; ++i)
        nA[B++ >> 0] = C.charCodeAt(i);
      Q || (nA[B >> 0] = 0);
    }
    function UG(C, B) {
      return C % B > 0 && (C += B - C % B), C;
    }
    var NC, nA, mA, $I, yC, q, sI, UE, kE;
    function ME(C) {
      NC = C, g.HEAP8 = nA = new Int8Array(C), g.HEAP16 = $I = new Int16Array(C), g.HEAP32 = q = new Int32Array(C), g.HEAPU8 = mA = new Uint8Array(C), g.HEAPU16 = yC = new Uint16Array(C), g.HEAPU32 = sI = new Uint32Array(C), g.HEAPF32 = UE = new Float32Array(C), g.HEAPF64 = kE = new Float64Array(C);
    }
    g.INITIAL_MEMORY;
    var fg, SE = [], JE = [], kG = [], cE = [];
    function MG() {
      if (g.preRun)
        for (typeof g.preRun == "function" && (g.preRun = [g.preRun]); g.preRun.length; )
          YG(g.preRun.shift());
      UC(SE);
    }
    function SG() {
      !g.noFSInit && !w.init.initialized && w.init(), UC(JE);
    }
    function JG() {
      w.ignorePermissions = !1, UC(kG);
    }
    function cG() {
      if (g.postRun)
        for (typeof g.postRun == "function" && (g.postRun = [g.postRun]); g.postRun.length; )
          LG(g.postRun.shift());
      UC(cE);
    }
    function YG(C) {
      SE.unshift(C);
    }
    function LG(C) {
      cE.unshift(C);
    }
    var Ag = 0, bg = null;
    function qF(C) {
      return C;
    }
    function KC(C) {
      Ag++, g.monitorRunDependencies && g.monitorRunDependencies(Ag);
    }
    function Vg(C) {
      if (Ag--, g.monitorRunDependencies && g.monitorRunDependencies(Ag), Ag == 0 && bg) {
        var B = bg;
        bg = null, B();
      }
    }
    g.preloadedImages = {}, g.preloadedAudios = {};
    function dA(C) {
      g.onAbort && g.onAbort(C), C += "", z(C), RA = !0, C = "abort(" + C + "). Build with -s ASSERTIONS=1 for more info.";
      var B = new WebAssembly.RuntimeError(C);
      throw D(B), B;
    }
    function YE(C, B) {
      return String.prototype.startsWith ? C.startsWith(B) : C.indexOf(B) === 0;
    }
    var LE = "data:application/octet-stream;base64,";
    function nB(C) {
      return YE(C, LE);
    }
    var tG = "file://";
    function tE(C) {
      return YE(C, tG);
    }
    nB(FI) || (FI = AA(FI));
    function HE() {
      try {
        if (vI)
          return new Uint8Array(vI);
        var C = Bg(FI);
        if (C)
          return C;
        if (CA)
          return CA(FI);
        throw "both async and sync fetching of the wasm failed";
      } catch (B) {
        dA(B);
      }
    }
    function HG() {
      return !vI && (y || U) && typeof fetch == "function" && !tE(FI) ? fetch(FI, { credentials: "same-origin" }).then(function(C) {
        if (!C.ok)
          throw "failed to load wasm binary file at '" + FI + "'";
        return C.arrayBuffer();
      }).catch(function() {
        return HE();
      }) : Promise.resolve().then(HE);
    }
    function rG() {
      var C = { env: PE, wasi_snapshot_preview1: PE };
      function B(a, R) {
        var h = a.exports;
        g.asm = h, Fg = g.asm.memory, ME(Fg.buffer), fg = g.asm.__indirect_function_table, Vg();
      }
      KC();
      function Q(a) {
        B(a.instance);
      }
      function i(a) {
        return HG().then(function(R) {
          return WebAssembly.instantiate(R, C);
        }).then(a, function(R) {
          z("failed to asynchronously prepare wasm: " + R), dA(R);
        });
      }
      function G() {
        return !vI && typeof WebAssembly.instantiateStreaming == "function" && !nB(FI) && !tE(FI) && typeof fetch == "function" ? fetch(FI, { credentials: "same-origin" }).then(function(a) {
          var R = WebAssembly.instantiateStreaming(a, C);
          return R.then(Q, function(h) {
            return z("wasm streaming compile failed: " + h), z("falling back to ArrayBuffer instantiation"), i(Q);
          });
        }) : i(Q);
      }
      if (g.instantiateWasm)
        try {
          var F = g.instantiateWasm(C, B);
          return F;
        } catch (a) {
          return z("Module.instantiateWasm callback failed with error: " + a), !1;
        }
      return G().catch(D), {};
    }
    var tA, rI;
    function dB(C, B) {
      if (k.mainLoop.timingMode = C, k.mainLoop.timingValue = B, !k.mainLoop.func)
        return 1;
      if (C == 0)
        k.mainLoop.scheduler = function() {
          var a = Math.max(0, k.mainLoop.tickStartTime + B - Rg()) | 0;
          setTimeout(k.mainLoop.runner, a);
        }, k.mainLoop.method = "timeout";
      else if (C == 1)
        k.mainLoop.scheduler = function() {
          k.requestAnimationFrame(k.mainLoop.runner);
        }, k.mainLoop.method = "rAF";
      else if (C == 2) {
        if (typeof setImmediate > "u") {
          var Q = [], i = "setimmediate", G = function(F) {
            (F.data === i || F.data.target === i) && (F.stopPropagation(), Q.shift()());
          };
          addEventListener("message", G, !0), setImmediate = function(a) {
            Q.push(a), U ? (g.setImmediates === void 0 && (g.setImmediates = []), g.setImmediates.push(a), postMessage({ target: i })) : postMessage(i, "*");
          };
        }
        k.mainLoop.scheduler = function() {
          setImmediate(k.mainLoop.runner);
        }, k.mainLoop.method = "immediate";
      }
      return 0;
    }
    var Rg;
    L ? Rg = function() {
      var C = process.hrtime();
      return C[0] * 1e3 + C[1] / 1e6;
    } : typeof dateNow < "u" ? Rg = dateNow : Rg = function() {
      return performance.now();
    };
    function qG(C, B, Q, i, G) {
      LA(!k.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), k.mainLoop.func = C, k.mainLoop.arg = i;
      var F = k.mainLoop.currentlyRunningMainloop;
      if (k.mainLoop.runner = function() {
        if (!RA) {
          if (k.mainLoop.queue.length > 0) {
            var R = Date.now(), h = k.mainLoop.queue.shift();
            if (h.func(h.arg), k.mainLoop.remainingBlockers) {
              var K = k.mainLoop.remainingBlockers, M = K % 1 == 0 ? K - 1 : Math.floor(K);
              h.counted ? k.mainLoop.remainingBlockers = M : (M = M + 0.5, k.mainLoop.remainingBlockers = (8 * K + M) / 9);
            }
            if (console.log('main loop blocker "' + h.name + '" took ' + (Date.now() - R) + " ms"), k.mainLoop.updateStatus(), F < k.mainLoop.currentlyRunningMainloop)
              return;
            setTimeout(k.mainLoop.runner, 0);
            return;
          }
          if (!(F < k.mainLoop.currentlyRunningMainloop)) {
            if (k.mainLoop.currentFrameNumber = k.mainLoop.currentFrameNumber + 1 | 0, k.mainLoop.timingMode == 1 && k.mainLoop.timingValue > 1 && k.mainLoop.currentFrameNumber % k.mainLoop.timingValue != 0) {
              k.mainLoop.scheduler();
              return;
            } else
              k.mainLoop.timingMode == 0 && (k.mainLoop.tickStartTime = Rg());
            k.mainLoop.runIter(C), !(F < k.mainLoop.currentlyRunningMainloop) && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), k.mainLoop.scheduler());
          }
        }
      }, G || (B && B > 0 ? dB(0, 1e3 / B) : dB(1, 1), k.mainLoop.scheduler()), Q)
        throw "unwind";
    }
    var k = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function() {
      k.mainLoop.scheduler = null, k.mainLoop.currentlyRunningMainloop++;
    }, resume: function() {
      k.mainLoop.currentlyRunningMainloop++;
      var C = k.mainLoop.timingMode, B = k.mainLoop.timingValue, Q = k.mainLoop.func;
      k.mainLoop.func = null, qG(Q, 0, !1, k.mainLoop.arg, !0), dB(C, B), k.mainLoop.scheduler();
    }, updateStatus: function() {
      if (g.setStatus) {
        var C = g.statusMessage || "Please wait...", B = k.mainLoop.remainingBlockers, Q = k.mainLoop.expectedBlockers;
        B ? B < Q ? g.setStatus(C + " (" + (Q - B) + "/" + Q + ")") : g.setStatus(C) : g.setStatus("");
      }
    }, runIter: function(C) {
      if (!RA) {
        if (g.preMainLoop) {
          var B = g.preMainLoop();
          if (B === !1)
            return;
        }
        try {
          C();
        } catch (Q) {
          if (Q instanceof $E)
            return;
          if (Q == "unwind")
            return;
          throw Q && typeof Q == "object" && Q.stack && z("exception thrown: " + [Q, Q.stack]), Q;
        }
        g.postMainLoop && g.postMainLoop();
      }
    } }, isFullscreen: !1, pointerLock: !1, moduleContextCreatedCallbacks: [], workers: [], init: function() {
      if (g.preloadPlugins || (g.preloadPlugins = []), k.initted)
        return;
      k.initted = !0;
      try {
        new Blob(), k.hasBlobConstructor = !0;
      } catch {
        k.hasBlobConstructor = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      k.BlobBuilder = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : k.hasBlobConstructor ? null : console.log("warning: no BlobBuilder"), k.URLObject = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : void 0, !g.noImageDecoding && typeof k.URLObject > "u" && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), g.noImageDecoding = !0);
      var C = {};
      C.canHandle = function(F) {
        return !g.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(F);
      }, C.handle = function(F, a, R, h) {
        var K = null;
        if (k.hasBlobConstructor)
          try {
            K = new Blob([F], { type: k.getMimetype(a) }), K.size !== F.length && (K = new Blob([new Uint8Array(F).buffer], { type: k.getMimetype(a) }));
          } catch (Y) {
            bA("Blob constructor present but fails: " + Y + "; falling back to blob builder");
          }
        if (!K) {
          var M = new k.BlobBuilder();
          M.append(new Uint8Array(F).buffer), K = M.getBlob();
        }
        var J = k.URLObject.createObjectURL(K), S = new Image();
        S.onload = function() {
          LA(S.complete, "Image " + a + " could not be decoded");
          var H = document.createElement("canvas");
          H.width = S.width, H.height = S.height;
          var W = H.getContext("2d");
          W.drawImage(S, 0, 0), g.preloadedImages[a] = H, k.URLObject.revokeObjectURL(J), R && R(F);
        }, S.onerror = function(H) {
          console.log("Image " + J + " could not be decoded"), h && h();
        }, S.src = J;
      }, g.preloadPlugins.push(C);
      var B = {};
      B.canHandle = function(F) {
        return !g.noAudioDecoding && F.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      }, B.handle = function(F, a, R, h) {
        var K = !1;
        function M(W) {
          K || (K = !0, g.preloadedAudios[a] = W, R && R(F));
        }
        function J() {
          K || (K = !0, g.preloadedAudios[a] = new Audio(), h && h());
        }
        if (k.hasBlobConstructor) {
          try {
            var S = new Blob([F], { type: k.getMimetype(a) });
          } catch {
            return J();
          }
          var Y = k.URLObject.createObjectURL(S), H = new Audio();
          H.addEventListener("canplaythrough", function() {
            M(H);
          }, !1), H.onerror = function($) {
            if (K)
              return;
            console.log("warning: browser could not fully decode audio " + a + ", trying slower base64 approach");
            function X(c) {
              for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", O = "=", Z = "", p = 0, rA = 0, aI = 0; aI < c.length; aI++)
                for (p = p << 8 | c[aI], rA += 8; rA >= 6; ) {
                  var S0 = p >> rA - 6 & 63;
                  rA -= 6, Z += r[S0];
                }
              return rA == 2 ? (Z += r[(p & 3) << 4], Z += O + O) : rA == 4 && (Z += r[(p & 15) << 2], Z += O), Z;
            }
            H.src = "data:audio/x-" + a.substr(-3) + ";base64," + X(F), M(H);
          }, H.src = Y, k.safeSetTimeout(function() {
            M(H);
          }, 1e4);
        } else
          return J();
      }, g.preloadPlugins.push(B);
      function Q() {
        k.pointerLock = document.pointerLockElement === g.canvas || document.mozPointerLockElement === g.canvas || document.webkitPointerLockElement === g.canvas || document.msPointerLockElement === g.canvas;
      }
      var i = g.canvas;
      i && (i.requestPointerLock = i.requestPointerLock || i.mozRequestPointerLock || i.webkitRequestPointerLock || i.msRequestPointerLock || function() {
      }, i.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
      }, i.exitPointerLock = i.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", Q, !1), document.addEventListener("mozpointerlockchange", Q, !1), document.addEventListener("webkitpointerlockchange", Q, !1), document.addEventListener("mspointerlockchange", Q, !1), g.elementPointerLock && i.addEventListener("click", function(G) {
        !k.pointerLock && g.canvas.requestPointerLock && (g.canvas.requestPointerLock(), G.preventDefault());
      }, !1));
    }, createContext: function(C, B, Q, i) {
      if (B && g.ctx && C == g.canvas)
        return g.ctx;
      var G, F;
      if (B) {
        var a = { antialias: !1, alpha: !1, majorVersion: 1 };
        if (i)
          for (var R in i)
            a[R] = i[R];
        typeof GL < "u" && (F = GL.createContext(C, a), F && (G = GL.getContext(F).GLctx));
      } else
        G = C.getContext("2d");
      return G ? (Q && (B || LA(typeof GLctx > "u", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), g.ctx = G, B && GL.makeContextCurrent(F), g.useWebGL = B, k.moduleContextCreatedCallbacks.forEach(function(h) {
        h();
      }), k.init()), G) : null;
    }, destroyContext: function(C, B, Q) {
    }, fullscreenHandlersInstalled: !1, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen: function(C, B) {
      k.lockPointer = C, k.resizeCanvas = B, typeof k.lockPointer > "u" && (k.lockPointer = !0), typeof k.resizeCanvas > "u" && (k.resizeCanvas = !1);
      var Q = g.canvas;
      function i() {
        k.isFullscreen = !1;
        var F = Q.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === F ? (Q.exitFullscreen = k.exitFullscreen, k.lockPointer && Q.requestPointerLock(), k.isFullscreen = !0, k.resizeCanvas ? k.setFullscreenCanvasSize() : k.updateCanvasDimensions(Q)) : (F.parentNode.insertBefore(Q, F), F.parentNode.removeChild(F), k.resizeCanvas ? k.setWindowedCanvasSize() : k.updateCanvasDimensions(Q)), g.onFullScreen && g.onFullScreen(k.isFullscreen), g.onFullscreen && g.onFullscreen(k.isFullscreen);
      }
      k.fullscreenHandlersInstalled || (k.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", i, !1), document.addEventListener("mozfullscreenchange", i, !1), document.addEventListener("webkitfullscreenchange", i, !1), document.addEventListener("MSFullscreenChange", i, !1));
      var G = document.createElement("div");
      Q.parentNode.insertBefore(G, Q), G.appendChild(Q), G.requestFullscreen = G.requestFullscreen || G.mozRequestFullScreen || G.msRequestFullscreen || (G.webkitRequestFullscreen ? function() {
        G.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (G.webkitRequestFullScreen ? function() {
        G.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null), G.requestFullscreen();
    }, exitFullscreen: function() {
      if (!k.isFullscreen)
        return !1;
      var C = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
      };
      return C.apply(document, []), !0;
    }, nextRAF: 0, fakeRequestAnimationFrame: function(C) {
      var B = Date.now();
      if (k.nextRAF === 0)
        k.nextRAF = B + 1e3 / 60;
      else
        for (; B + 2 >= k.nextRAF; )
          k.nextRAF += 1e3 / 60;
      var Q = Math.max(k.nextRAF - B, 0);
      setTimeout(C, Q);
    }, requestAnimationFrame: function(C) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(C);
        return;
      }
      var B = k.fakeRequestAnimationFrame;
      B(C);
    }, safeCallback: function(C) {
      return function() {
        if (!RA)
          return C.apply(null, arguments);
      };
    }, allowAsyncCallbacks: !0, queuedAsyncCallbacks: [], pauseAsyncCallbacks: function() {
      k.allowAsyncCallbacks = !1;
    }, resumeAsyncCallbacks: function() {
      if (k.allowAsyncCallbacks = !0, k.queuedAsyncCallbacks.length > 0) {
        var C = k.queuedAsyncCallbacks;
        k.queuedAsyncCallbacks = [], C.forEach(function(B) {
          B();
        });
      }
    }, safeRequestAnimationFrame: function(C) {
      return k.requestAnimationFrame(function() {
        RA || (k.allowAsyncCallbacks ? C() : k.queuedAsyncCallbacks.push(C));
      });
    }, safeSetTimeout: function(C, B) {
      return setTimeout(function() {
        RA || (k.allowAsyncCallbacks ? C() : k.queuedAsyncCallbacks.push(C));
      }, B);
    }, safeSetInterval: function(C, B) {
      return setInterval(function() {
        RA || k.allowAsyncCallbacks && C();
      }, B);
    }, getMimetype: function(C) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[C.substr(C.lastIndexOf(".") + 1)];
    }, getUserMedia: function(C) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(C);
    }, getMovementX: function(C) {
      return C.movementX || C.mozMovementX || C.webkitMovementX || 0;
    }, getMovementY: function(C) {
      return C.movementY || C.mozMovementY || C.webkitMovementY || 0;
    }, getMouseWheelDelta: function(C) {
      var B = 0;
      switch (C.type) {
        case "DOMMouseScroll":
          B = C.detail / 3;
          break;
        case "mousewheel":
          B = C.wheelDelta / 120;
          break;
        case "wheel":
          switch (B = C.deltaY, C.deltaMode) {
            case 0:
              B /= 100;
              break;
            case 1:
              B /= 3;
              break;
            case 2:
              B *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + C.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + C.type;
      }
      return B;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function(C) {
      if (k.pointerLock)
        C.type != "mousemove" && "mozMovementX" in C ? k.mouseMovementX = k.mouseMovementY = 0 : (k.mouseMovementX = k.getMovementX(C), k.mouseMovementY = k.getMovementY(C)), typeof SDL < "u" ? (k.mouseX = SDL.mouseX + k.mouseMovementX, k.mouseY = SDL.mouseY + k.mouseMovementY) : (k.mouseX += k.mouseMovementX, k.mouseY += k.mouseMovementY);
      else {
        var B = g.canvas.getBoundingClientRect(), Q = g.canvas.width, i = g.canvas.height, G = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, F = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset;
        if (C.type === "touchstart" || C.type === "touchend" || C.type === "touchmove") {
          var a = C.touch;
          if (a === void 0)
            return;
          var R = a.pageX - (G + B.left), h = a.pageY - (F + B.top);
          R = R * (Q / B.width), h = h * (i / B.height);
          var K = { x: R, y: h };
          if (C.type === "touchstart")
            k.lastTouches[a.identifier] = K, k.touches[a.identifier] = K;
          else if (C.type === "touchend" || C.type === "touchmove") {
            var M = k.touches[a.identifier];
            M || (M = K), k.lastTouches[a.identifier] = M, k.touches[a.identifier] = K;
          }
          return;
        }
        var J = C.pageX - (G + B.left), S = C.pageY - (F + B.top);
        J = J * (Q / B.width), S = S * (i / B.height), k.mouseMovementX = J - k.mouseX, k.mouseMovementY = S - k.mouseY, k.mouseX = J, k.mouseY = S;
      }
    }, asyncLoad: function(C, B, Q, i) {
      var G = i ? "" : "al " + C;
      aA(C, function(F) {
        LA(F, 'Loading data file "' + C + '" failed (no arrayBuffer).'), B(new Uint8Array(F)), G && Vg();
      }, function(F) {
        if (Q)
          Q();
        else
          throw 'Loading data file "' + C + '" failed.';
      }), G && KC();
    }, resizeListeners: [], updateResizeListeners: function() {
      var C = g.canvas;
      k.resizeListeners.forEach(function(B) {
        B(C.width, C.height);
      });
    }, setCanvasSize: function(C, B, Q) {
      var i = g.canvas;
      k.updateCanvasDimensions(i, C, B), Q || k.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function() {
      if (typeof SDL < "u") {
        var C = sI[SDL.screen >> 2];
        C = C | 8388608, q[SDL.screen >> 2] = C;
      }
      k.updateCanvasDimensions(g.canvas), k.updateResizeListeners();
    }, setWindowedCanvasSize: function() {
      if (typeof SDL < "u") {
        var C = sI[SDL.screen >> 2];
        C = C & -8388609, q[SDL.screen >> 2] = C;
      }
      k.updateCanvasDimensions(g.canvas), k.updateResizeListeners();
    }, updateCanvasDimensions: function(C, B, Q) {
      B && Q ? (C.widthNative = B, C.heightNative = Q) : (B = C.widthNative, Q = C.heightNative);
      var i = B, G = Q;
      if (g.forcedAspectRatio && g.forcedAspectRatio > 0 && (i / G < g.forcedAspectRatio ? i = Math.round(G * g.forcedAspectRatio) : G = Math.round(i / g.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === C.parentNode && typeof screen < "u") {
        var F = Math.min(screen.width / i, screen.height / G);
        i = Math.round(i * F), G = Math.round(G * F);
      }
      k.resizeCanvas ? (C.width != i && (C.width = i), C.height != G && (C.height = G), typeof C.style < "u" && (C.style.removeProperty("width"), C.style.removeProperty("height"))) : (C.width != B && (C.width = B), C.height != Q && (C.height = Q), typeof C.style < "u" && (i != B || G != Q ? (C.style.setProperty("width", i + "px", "important"), C.style.setProperty("height", G + "px", "important")) : (C.style.removeProperty("width"), C.style.removeProperty("height"))));
    }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function() {
      var C = k.nextWgetRequestHandle;
      return k.nextWgetRequestHandle++, C;
    } };
    function UC(C) {
      for (; C.length > 0; ) {
        var B = C.shift();
        if (typeof B == "function") {
          B(g);
          continue;
        }
        var Q = B.func;
        typeof Q == "number" ? B.arg === void 0 ? fg.get(Q)() : fg.get(Q)(B.arg) : Q(B.arg === void 0 ? null : B.arg);
      }
    }
    var VA = { DESTRUCTOR_OFFSET: 0, REFCOUNT_OFFSET: 4, TYPE_OFFSET: 8, CAUGHT_OFFSET: 12, RETHROWN_OFFSET: 13, SIZE: 16 };
    function eG(C) {
      return Xg(C + VA.SIZE) + VA.SIZE;
    }
    function eF(C, B) {
    }
    function nG(C, B) {
      return void 0;
    }
    function dG(C) {
      this.excPtr = C, this.ptr = C - VA.SIZE, this.set_type = function(B) {
        q[this.ptr + VA.TYPE_OFFSET >> 2] = B;
      }, this.get_type = function() {
        return q[this.ptr + VA.TYPE_OFFSET >> 2];
      }, this.set_destructor = function(B) {
        q[this.ptr + VA.DESTRUCTOR_OFFSET >> 2] = B;
      }, this.get_destructor = function() {
        return q[this.ptr + VA.DESTRUCTOR_OFFSET >> 2];
      }, this.set_refcount = function(B) {
        q[this.ptr + VA.REFCOUNT_OFFSET >> 2] = B;
      }, this.set_caught = function(B) {
        B = B ? 1 : 0, nA[this.ptr + VA.CAUGHT_OFFSET >> 0] = B;
      }, this.get_caught = function() {
        return nA[this.ptr + VA.CAUGHT_OFFSET >> 0] != 0;
      }, this.set_rethrown = function(B) {
        B = B ? 1 : 0, nA[this.ptr + VA.RETHROWN_OFFSET >> 0] = B;
      }, this.get_rethrown = function() {
        return nA[this.ptr + VA.RETHROWN_OFFSET >> 0] != 0;
      }, this.init = function(B, Q) {
        this.set_type(B), this.set_destructor(Q), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
      }, this.add_ref = function() {
        var B = q[this.ptr + VA.REFCOUNT_OFFSET >> 2];
        q[this.ptr + VA.REFCOUNT_OFFSET >> 2] = B + 1;
      }, this.release_ref = function() {
        var B = q[this.ptr + VA.REFCOUNT_OFFSET >> 2];
        return q[this.ptr + VA.REFCOUNT_OFFSET >> 2] = B - 1, B === 1;
      };
    }
    function lG(C, B, Q) {
      var i = new dG(C);
      throw i.init(B, Q), C;
    }
    function rE(C) {
      return q[vE() >> 2] = C, C;
    }
    var v = { splitPath: function(C) {
      var B = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return B.exec(C).slice(1);
    }, normalizeArray: function(C, B) {
      for (var Q = 0, i = C.length - 1; i >= 0; i--) {
        var G = C[i];
        G === "." ? C.splice(i, 1) : G === ".." ? (C.splice(i, 1), Q++) : Q && (C.splice(i, 1), Q--);
      }
      if (B)
        for (; Q; Q--)
          C.unshift("..");
      return C;
    }, normalize: function(C) {
      var B = C.charAt(0) === "/", Q = C.substr(-1) === "/";
      return C = v.normalizeArray(C.split("/").filter(function(i) {
        return !!i;
      }), !B).join("/"), !C && !B && (C = "."), C && Q && (C += "/"), (B ? "/" : "") + C;
    }, dirname: function(C) {
      var B = v.splitPath(C), Q = B[0], i = B[1];
      return !Q && !i ? "." : (i && (i = i.substr(0, i.length - 1)), Q + i);
    }, basename: function(C) {
      if (C === "/")
        return "/";
      C = v.normalize(C), C = C.replace(/\/$/, "");
      var B = C.lastIndexOf("/");
      return B === -1 ? C : C.substr(B + 1);
    }, extname: function(C) {
      return v.splitPath(C)[3];
    }, join: function() {
      var C = Array.prototype.slice.call(arguments, 0);
      return v.normalize(C.join("/"));
    }, join2: function(C, B) {
      return v.normalize(C + "/" + B);
    } };
    function fG() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var C = new Uint8Array(1);
        return function() {
          return crypto.getRandomValues(C), C[0];
        };
      } else if (L)
        try {
          var B = require("crypto");
          return function() {
            return B.randomBytes(1)[0];
          };
        } catch {
        }
      return function() {
        dA("randomDevice");
      };
    }
    var qI = { resolve: function() {
      for (var C = "", B = !1, Q = arguments.length - 1; Q >= -1 && !B; Q--) {
        var i = Q >= 0 ? arguments[Q] : w.cwd();
        if (typeof i != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!i)
          return "";
        C = i + "/" + C, B = i.charAt(0) === "/";
      }
      return C = v.normalizeArray(C.split("/").filter(function(G) {
        return !!G;
      }), !B).join("/"), (B ? "/" : "") + C || ".";
    }, relative: function(C, B) {
      C = qI.resolve(C).substr(1), B = qI.resolve(B).substr(1);
      function Q(K) {
        for (var M = 0; M < K.length && K[M] === ""; M++)
          ;
        for (var J = K.length - 1; J >= 0 && K[J] === ""; J--)
          ;
        return M > J ? [] : K.slice(M, J - M + 1);
      }
      for (var i = Q(C.split("/")), G = Q(B.split("/")), F = Math.min(i.length, G.length), a = F, R = 0; R < F; R++)
        if (i[R] !== G[R]) {
          a = R;
          break;
        }
      for (var h = [], R = a; R < i.length; R++)
        h.push("..");
      return h = h.concat(G.slice(a)), h.join("/");
    } }, Ig = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(C, B) {
      Ig.ttys[C] = { input: [], output: [], ops: B }, w.registerDevice(C, Ig.stream_ops);
    }, stream_ops: { open: function(C) {
      var B = Ig.ttys[C.node.rdev];
      if (!B)
        throw new w.ErrnoError(43);
      C.tty = B, C.seekable = !1;
    }, close: function(C) {
      C.tty.ops.flush(C.tty);
    }, flush: function(C) {
      C.tty.ops.flush(C.tty);
    }, read: function(C, B, Q, i, G) {
      if (!C.tty || !C.tty.ops.get_char)
        throw new w.ErrnoError(60);
      for (var F = 0, a = 0; a < i; a++) {
        var R;
        try {
          R = C.tty.ops.get_char(C.tty);
        } catch {
          throw new w.ErrnoError(29);
        }
        if (R === void 0 && F === 0)
          throw new w.ErrnoError(6);
        if (R == null)
          break;
        F++, B[Q + a] = R;
      }
      return F && (C.node.timestamp = Date.now()), F;
    }, write: function(C, B, Q, i, G) {
      if (!C.tty || !C.tty.ops.put_char)
        throw new w.ErrnoError(60);
      try {
        for (var F = 0; F < i; F++)
          C.tty.ops.put_char(C.tty, B[Q + F]);
      } catch {
        throw new w.ErrnoError(29);
      }
      return i && (C.node.timestamp = Date.now()), F;
    } }, default_tty_ops: { get_char: function(C) {
      if (!C.input.length) {
        var B = null;
        if (L) {
          var Q = 256, i = Buffer.alloc ? Buffer.alloc(Q) : new Buffer(Q), G = 0;
          try {
            G = wI.readSync(process.stdin.fd, i, 0, Q, null);
          } catch (F) {
            if (F.toString().indexOf("EOF") != -1)
              G = 0;
            else
              throw F;
          }
          G > 0 ? B = i.slice(0, G).toString("utf-8") : B = null;
        } else
          typeof window < "u" && typeof window.prompt == "function" ? (B = window.prompt("Input: "), B !== null && (B += `
`)) : typeof readline == "function" && (B = readline(), B !== null && (B += `
`));
        if (!B)
          return null;
        C.input = fC(B, !0);
      }
      return C.input.shift();
    }, put_char: function(C, B) {
      B === null || B === 10 ? (f(ag(C.output, 0)), C.output = []) : B != 0 && C.output.push(B);
    }, flush: function(C) {
      C.output && C.output.length > 0 && (f(ag(C.output, 0)), C.output = []);
    } }, default_tty1_ops: { put_char: function(C, B) {
      B === null || B === 10 ? (z(ag(C.output, 0)), C.output = []) : B != 0 && C.output.push(B);
    }, flush: function(C) {
      C.output && C.output.length > 0 && (z(ag(C.output, 0)), C.output = []);
    } } };
    function bG(C) {
      for (var B = sg(C, 16384), Q = Xg(B); C < B; )
        nA[Q + C++] = 0;
      return Q;
    }
    var m = { ops_table: null, mount: function(C) {
      return m.createNode(null, "/", 16895, 0);
    }, createNode: function(C, B, Q, i) {
      if (w.isBlkdev(Q) || w.isFIFO(Q))
        throw new w.ErrnoError(63);
      m.ops_table || (m.ops_table = { dir: { node: { getattr: m.node_ops.getattr, setattr: m.node_ops.setattr, lookup: m.node_ops.lookup, mknod: m.node_ops.mknod, rename: m.node_ops.rename, unlink: m.node_ops.unlink, rmdir: m.node_ops.rmdir, readdir: m.node_ops.readdir, symlink: m.node_ops.symlink }, stream: { llseek: m.stream_ops.llseek } }, file: { node: { getattr: m.node_ops.getattr, setattr: m.node_ops.setattr }, stream: { llseek: m.stream_ops.llseek, read: m.stream_ops.read, write: m.stream_ops.write, allocate: m.stream_ops.allocate, mmap: m.stream_ops.mmap, msync: m.stream_ops.msync } }, link: { node: { getattr: m.node_ops.getattr, setattr: m.node_ops.setattr, readlink: m.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: m.node_ops.getattr, setattr: m.node_ops.setattr }, stream: w.chrdev_stream_ops } });
      var G = w.createNode(C, B, Q, i);
      return w.isDir(G.mode) ? (G.node_ops = m.ops_table.dir.node, G.stream_ops = m.ops_table.dir.stream, G.contents = {}) : w.isFile(G.mode) ? (G.node_ops = m.ops_table.file.node, G.stream_ops = m.ops_table.file.stream, G.usedBytes = 0, G.contents = null) : w.isLink(G.mode) ? (G.node_ops = m.ops_table.link.node, G.stream_ops = m.ops_table.link.stream) : w.isChrdev(G.mode) && (G.node_ops = m.ops_table.chrdev.node, G.stream_ops = m.ops_table.chrdev.stream), G.timestamp = Date.now(), C && (C.contents[B] = G), G;
    }, getFileDataAsRegularArray: function(C) {
      if (C.contents && C.contents.subarray) {
        for (var B = [], Q = 0; Q < C.usedBytes; ++Q)
          B.push(C.contents[Q]);
        return B;
      }
      return C.contents;
    }, getFileDataAsTypedArray: function(C) {
      return C.contents ? C.contents.subarray ? C.contents.subarray(0, C.usedBytes) : new Uint8Array(C.contents) : new Uint8Array(0);
    }, expandFileStorage: function(C, B) {
      var Q = C.contents ? C.contents.length : 0;
      if (!(Q >= B)) {
        var i = 1024 * 1024;
        B = Math.max(B, Q * (Q < i ? 2 : 1.125) >>> 0), Q != 0 && (B = Math.max(B, 256));
        var G = C.contents;
        C.contents = new Uint8Array(B), C.usedBytes > 0 && C.contents.set(G.subarray(0, C.usedBytes), 0);
      }
    }, resizeFileStorage: function(C, B) {
      if (C.usedBytes != B) {
        if (B == 0) {
          C.contents = null, C.usedBytes = 0;
          return;
        }
        if (!C.contents || C.contents.subarray) {
          var Q = C.contents;
          C.contents = new Uint8Array(B), Q && C.contents.set(Q.subarray(0, Math.min(B, C.usedBytes))), C.usedBytes = B;
          return;
        }
        if (C.contents || (C.contents = []), C.contents.length > B)
          C.contents.length = B;
        else
          for (; C.contents.length < B; )
            C.contents.push(0);
        C.usedBytes = B;
      }
    }, node_ops: { getattr: function(C) {
      var B = {};
      return B.dev = w.isChrdev(C.mode) ? C.id : 1, B.ino = C.id, B.mode = C.mode, B.nlink = 1, B.uid = 0, B.gid = 0, B.rdev = C.rdev, w.isDir(C.mode) ? B.size = 4096 : w.isFile(C.mode) ? B.size = C.usedBytes : w.isLink(C.mode) ? B.size = C.link.length : B.size = 0, B.atime = new Date(C.timestamp), B.mtime = new Date(C.timestamp), B.ctime = new Date(C.timestamp), B.blksize = 4096, B.blocks = Math.ceil(B.size / B.blksize), B;
    }, setattr: function(C, B) {
      B.mode !== void 0 && (C.mode = B.mode), B.timestamp !== void 0 && (C.timestamp = B.timestamp), B.size !== void 0 && m.resizeFileStorage(C, B.size);
    }, lookup: function(C, B) {
      throw w.genericErrors[44];
    }, mknod: function(C, B, Q, i) {
      return m.createNode(C, B, Q, i);
    }, rename: function(C, B, Q) {
      if (w.isDir(C.mode)) {
        var i;
        try {
          i = w.lookupNode(B, Q);
        } catch {
        }
        if (i)
          for (var G in i.contents)
            throw new w.ErrnoError(55);
      }
      delete C.parent.contents[C.name], C.name = Q, B.contents[Q] = C, C.parent = B;
    }, unlink: function(C, B) {
      delete C.contents[B];
    }, rmdir: function(C, B) {
      var Q = w.lookupNode(C, B);
      for (var i in Q.contents)
        throw new w.ErrnoError(55);
      delete C.contents[B];
    }, readdir: function(C) {
      var B = [".", ".."];
      for (var Q in C.contents)
        C.contents.hasOwnProperty(Q) && B.push(Q);
      return B;
    }, symlink: function(C, B, Q) {
      var i = m.createNode(C, B, 41471, 0);
      return i.link = Q, i;
    }, readlink: function(C) {
      if (!w.isLink(C.mode))
        throw new w.ErrnoError(28);
      return C.link;
    } }, stream_ops: { read: function(C, B, Q, i, G) {
      var F = C.node.contents;
      if (G >= C.node.usedBytes)
        return 0;
      var a = Math.min(C.node.usedBytes - G, i);
      if (a > 8 && F.subarray)
        B.set(F.subarray(G, G + a), Q);
      else
        for (var R = 0; R < a; R++)
          B[Q + R] = F[G + R];
      return a;
    }, write: function(C, B, Q, i, G, F) {
      if (B.buffer === nA.buffer && (F = !1), !i)
        return 0;
      var a = C.node;
      if (a.timestamp = Date.now(), B.subarray && (!a.contents || a.contents.subarray)) {
        if (F)
          return a.contents = B.subarray(Q, Q + i), a.usedBytes = i, i;
        if (a.usedBytes === 0 && G === 0)
          return a.contents = B.slice(Q, Q + i), a.usedBytes = i, i;
        if (G + i <= a.usedBytes)
          return a.contents.set(B.subarray(Q, Q + i), G), i;
      }
      if (m.expandFileStorage(a, G + i), a.contents.subarray && B.subarray)
        a.contents.set(B.subarray(Q, Q + i), G);
      else
        for (var R = 0; R < i; R++)
          a.contents[G + R] = B[Q + R];
      return a.usedBytes = Math.max(a.usedBytes, G + i), i;
    }, llseek: function(C, B, Q) {
      var i = B;
      if (Q === 1 ? i += C.position : Q === 2 && w.isFile(C.node.mode) && (i += C.node.usedBytes), i < 0)
        throw new w.ErrnoError(28);
      return i;
    }, allocate: function(C, B, Q) {
      m.expandFileStorage(C.node, B + Q), C.node.usedBytes = Math.max(C.node.usedBytes, B + Q);
    }, mmap: function(C, B, Q, i, G, F) {
      if (LA(B === 0), !w.isFile(C.node.mode))
        throw new w.ErrnoError(43);
      var a, R, h = C.node.contents;
      if (!(F & 2) && h.buffer === NC)
        R = !1, a = h.byteOffset;
      else {
        if ((i > 0 || i + Q < h.length) && (h.subarray ? h = h.subarray(i, i + Q) : h = Array.prototype.slice.call(h, i, i + Q)), R = !0, a = bG(Q), !a)
          throw new w.ErrnoError(48);
        nA.set(h, a);
      }
      return { ptr: a, allocated: R };
    }, msync: function(C, B, Q, i, G) {
      if (!w.isFile(C.node.mode))
        throw new w.ErrnoError(43);
      return G & 2 || m.stream_ops.write(C, B, 0, i, Q, !1), 0;
    } } }, w = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, trackingDelegate: {}, tracking: { openFlags: { READ: 1, WRITE: 2 } }, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: function(C, B) {
      if (C = qI.resolve(w.cwd(), C), B = B || {}, !C)
        return { path: "", node: null };
      var Q = { follow_mount: !0, recurse_count: 0 };
      for (var i in Q)
        B[i] === void 0 && (B[i] = Q[i]);
      if (B.recurse_count > 8)
        throw new w.ErrnoError(32);
      for (var G = v.normalizeArray(C.split("/").filter(function(S) {
        return !!S;
      }), !1), F = w.root, a = "/", R = 0; R < G.length; R++) {
        var h = R === G.length - 1;
        if (h && B.parent)
          break;
        if (F = w.lookupNode(F, G[R]), a = v.join2(a, G[R]), w.isMountpoint(F) && (!h || h && B.follow_mount) && (F = F.mounted.root), !h || B.follow)
          for (var K = 0; w.isLink(F.mode); ) {
            var M = w.readlink(a);
            a = qI.resolve(v.dirname(a), M);
            var J = w.lookupPath(a, { recurse_count: B.recurse_count });
            if (F = J.node, K++ > 40)
              throw new w.ErrnoError(32);
          }
      }
      return { path: a, node: F };
    }, getPath: function(C) {
      for (var B; ; ) {
        if (w.isRoot(C)) {
          var Q = C.mount.mountpoint;
          return B ? Q[Q.length - 1] !== "/" ? Q + "/" + B : Q + B : Q;
        }
        B = B ? C.name + "/" + B : C.name, C = C.parent;
      }
    }, hashName: function(C, B) {
      for (var Q = 0, i = 0; i < B.length; i++)
        Q = (Q << 5) - Q + B.charCodeAt(i) | 0;
      return (C + Q >>> 0) % w.nameTable.length;
    }, hashAddNode: function(C) {
      var B = w.hashName(C.parent.id, C.name);
      C.name_next = w.nameTable[B], w.nameTable[B] = C;
    }, hashRemoveNode: function(C) {
      var B = w.hashName(C.parent.id, C.name);
      if (w.nameTable[B] === C)
        w.nameTable[B] = C.name_next;
      else
        for (var Q = w.nameTable[B]; Q; ) {
          if (Q.name_next === C) {
            Q.name_next = C.name_next;
            break;
          }
          Q = Q.name_next;
        }
    }, lookupNode: function(C, B) {
      var Q = w.mayLookup(C);
      if (Q)
        throw new w.ErrnoError(Q, C);
      for (var i = w.hashName(C.id, B), G = w.nameTable[i]; G; G = G.name_next) {
        var F = G.name;
        if (G.parent.id === C.id && F === B)
          return G;
      }
      return w.lookup(C, B);
    }, createNode: function(C, B, Q, i) {
      var G = new w.FSNode(C, B, Q, i);
      return w.hashAddNode(G), G;
    }, destroyNode: function(C) {
      w.hashRemoveNode(C);
    }, isRoot: function(C) {
      return C === C.parent;
    }, isMountpoint: function(C) {
      return !!C.mounted;
    }, isFile: function(C) {
      return (C & 61440) === 32768;
    }, isDir: function(C) {
      return (C & 61440) === 16384;
    }, isLink: function(C) {
      return (C & 61440) === 40960;
    }, isChrdev: function(C) {
      return (C & 61440) === 8192;
    }, isBlkdev: function(C) {
      return (C & 61440) === 24576;
    }, isFIFO: function(C) {
      return (C & 61440) === 4096;
    }, isSocket: function(C) {
      return (C & 49152) === 49152;
    }, flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: function(C) {
      var B = w.flagModes[C];
      if (typeof B > "u")
        throw new Error("Unknown file open mode: " + C);
      return B;
    }, flagsToPermissionString: function(C) {
      var B = ["r", "w", "rw"][C & 3];
      return C & 512 && (B += "w"), B;
    }, nodePermissions: function(C, B) {
      return w.ignorePermissions ? 0 : B.indexOf("r") !== -1 && !(C.mode & 292) || B.indexOf("w") !== -1 && !(C.mode & 146) || B.indexOf("x") !== -1 && !(C.mode & 73) ? 2 : 0;
    }, mayLookup: function(C) {
      var B = w.nodePermissions(C, "x");
      return B || (C.node_ops.lookup ? 0 : 2);
    }, mayCreate: function(C, B) {
      try {
        var Q = w.lookupNode(C, B);
        return 20;
      } catch {
      }
      return w.nodePermissions(C, "wx");
    }, mayDelete: function(C, B, Q) {
      var i;
      try {
        i = w.lookupNode(C, B);
      } catch (F) {
        return F.errno;
      }
      var G = w.nodePermissions(C, "wx");
      if (G)
        return G;
      if (Q) {
        if (!w.isDir(i.mode))
          return 54;
        if (w.isRoot(i) || w.getPath(i) === w.cwd())
          return 10;
      } else if (w.isDir(i.mode))
        return 31;
      return 0;
    }, mayOpen: function(C, B) {
      return C ? w.isLink(C.mode) ? 32 : w.isDir(C.mode) && (w.flagsToPermissionString(B) !== "r" || B & 512) ? 31 : w.nodePermissions(C, w.flagsToPermissionString(B)) : 44;
    }, MAX_OPEN_FDS: 4096, nextfd: function(C, B) {
      C = C || 0, B = B || w.MAX_OPEN_FDS;
      for (var Q = C; Q <= B; Q++)
        if (!w.streams[Q])
          return Q;
      throw new w.ErrnoError(33);
    }, getStream: function(C) {
      return w.streams[C];
    }, createStream: function(C, B, Q) {
      w.FSStream || (w.FSStream = function() {
      }, w.FSStream.prototype = { object: { get: function() {
        return this.node;
      }, set: function(a) {
        this.node = a;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } } });
      var i = new w.FSStream();
      for (var G in C)
        i[G] = C[G];
      C = i;
      var F = w.nextfd(B, Q);
      return C.fd = F, w.streams[F] = C, C;
    }, closeStream: function(C) {
      w.streams[C] = null;
    }, chrdev_stream_ops: { open: function(C) {
      var B = w.getDevice(C.node.rdev);
      C.stream_ops = B.stream_ops, C.stream_ops.open && C.stream_ops.open(C);
    }, llseek: function() {
      throw new w.ErrnoError(70);
    } }, major: function(C) {
      return C >> 8;
    }, minor: function(C) {
      return C & 255;
    }, makedev: function(C, B) {
      return C << 8 | B;
    }, registerDevice: function(C, B) {
      w.devices[C] = { stream_ops: B };
    }, getDevice: function(C) {
      return w.devices[C];
    }, getMounts: function(C) {
      for (var B = [], Q = [C]; Q.length; ) {
        var i = Q.pop();
        B.push(i), Q.push.apply(Q, i.mounts);
      }
      return B;
    }, syncfs: function(C, B) {
      typeof C == "function" && (B = C, C = !1), w.syncFSRequests++, w.syncFSRequests > 1 && z("warning: " + w.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      var Q = w.getMounts(w.root.mount), i = 0;
      function G(a) {
        return w.syncFSRequests--, B(a);
      }
      function F(a) {
        if (a)
          return F.errored ? void 0 : (F.errored = !0, G(a));
        ++i >= Q.length && G(null);
      }
      Q.forEach(function(a) {
        if (!a.type.syncfs)
          return F(null);
        a.type.syncfs(a, C, F);
      });
    }, mount: function(C, B, Q) {
      var i = Q === "/", G = !Q, F;
      if (i && w.root)
        throw new w.ErrnoError(10);
      if (!i && !G) {
        var a = w.lookupPath(Q, { follow_mount: !1 });
        if (Q = a.path, F = a.node, w.isMountpoint(F))
          throw new w.ErrnoError(10);
        if (!w.isDir(F.mode))
          throw new w.ErrnoError(54);
      }
      var R = { type: C, opts: B, mountpoint: Q, mounts: [] }, h = C.mount(R);
      return h.mount = R, R.root = h, i ? w.root = h : F && (F.mounted = R, F.mount && F.mount.mounts.push(R)), h;
    }, unmount: function(C) {
      var B = w.lookupPath(C, { follow_mount: !1 });
      if (!w.isMountpoint(B.node))
        throw new w.ErrnoError(28);
      var Q = B.node, i = Q.mounted, G = w.getMounts(i);
      Object.keys(w.nameTable).forEach(function(a) {
        for (var R = w.nameTable[a]; R; ) {
          var h = R.name_next;
          G.indexOf(R.mount) !== -1 && w.destroyNode(R), R = h;
        }
      }), Q.mounted = null;
      var F = Q.mount.mounts.indexOf(i);
      Q.mount.mounts.splice(F, 1);
    }, lookup: function(C, B) {
      return C.node_ops.lookup(C, B);
    }, mknod: function(C, B, Q) {
      var i = w.lookupPath(C, { parent: !0 }), G = i.node, F = v.basename(C);
      if (!F || F === "." || F === "..")
        throw new w.ErrnoError(28);
      var a = w.mayCreate(G, F);
      if (a)
        throw new w.ErrnoError(a);
      if (!G.node_ops.mknod)
        throw new w.ErrnoError(63);
      return G.node_ops.mknod(G, F, B, Q);
    }, create: function(C, B) {
      return B = B !== void 0 ? B : 438, B &= 4095, B |= 32768, w.mknod(C, B, 0);
    }, mkdir: function(C, B) {
      return B = B !== void 0 ? B : 511, B &= 1023, B |= 16384, w.mknod(C, B, 0);
    }, mkdirTree: function(C, B) {
      for (var Q = C.split("/"), i = "", G = 0; G < Q.length; ++G)
        if (Q[G]) {
          i += "/" + Q[G];
          try {
            w.mkdir(i, B);
          } catch (F) {
            if (F.errno != 20)
              throw F;
          }
        }
    }, mkdev: function(C, B, Q) {
      return typeof Q > "u" && (Q = B, B = 438), B |= 8192, w.mknod(C, B, Q);
    }, symlink: function(C, B) {
      if (!qI.resolve(C))
        throw new w.ErrnoError(44);
      var Q = w.lookupPath(B, { parent: !0 }), i = Q.node;
      if (!i)
        throw new w.ErrnoError(44);
      var G = v.basename(B), F = w.mayCreate(i, G);
      if (F)
        throw new w.ErrnoError(F);
      if (!i.node_ops.symlink)
        throw new w.ErrnoError(63);
      return i.node_ops.symlink(i, G, C);
    }, rename: function(C, B) {
      var Q = v.dirname(C), i = v.dirname(B), G = v.basename(C), F = v.basename(B), a, R, h;
      if (a = w.lookupPath(C, { parent: !0 }), R = a.node, a = w.lookupPath(B, { parent: !0 }), h = a.node, !R || !h)
        throw new w.ErrnoError(44);
      if (R.mount !== h.mount)
        throw new w.ErrnoError(75);
      var K = w.lookupNode(R, G), M = qI.relative(C, i);
      if (M.charAt(0) !== ".")
        throw new w.ErrnoError(28);
      if (M = qI.relative(B, Q), M.charAt(0) !== ".")
        throw new w.ErrnoError(55);
      var J;
      try {
        J = w.lookupNode(h, F);
      } catch {
      }
      if (K !== J) {
        var S = w.isDir(K.mode), Y = w.mayDelete(R, G, S);
        if (Y)
          throw new w.ErrnoError(Y);
        if (Y = J ? w.mayDelete(h, F, S) : w.mayCreate(h, F), Y)
          throw new w.ErrnoError(Y);
        if (!R.node_ops.rename)
          throw new w.ErrnoError(63);
        if (w.isMountpoint(K) || J && w.isMountpoint(J))
          throw new w.ErrnoError(10);
        if (h !== R && (Y = w.nodePermissions(R, "w"), Y))
          throw new w.ErrnoError(Y);
        try {
          w.trackingDelegate.willMovePath && w.trackingDelegate.willMovePath(C, B);
        } catch (H) {
          z("FS.trackingDelegate['willMovePath']('" + C + "', '" + B + "') threw an exception: " + H.message);
        }
        w.hashRemoveNode(K);
        try {
          R.node_ops.rename(K, h, F);
        } catch (H) {
          throw H;
        } finally {
          w.hashAddNode(K);
        }
        try {
          w.trackingDelegate.onMovePath && w.trackingDelegate.onMovePath(C, B);
        } catch (H) {
          z("FS.trackingDelegate['onMovePath']('" + C + "', '" + B + "') threw an exception: " + H.message);
        }
      }
    }, rmdir: function(C) {
      var B = w.lookupPath(C, { parent: !0 }), Q = B.node, i = v.basename(C), G = w.lookupNode(Q, i), F = w.mayDelete(Q, i, !0);
      if (F)
        throw new w.ErrnoError(F);
      if (!Q.node_ops.rmdir)
        throw new w.ErrnoError(63);
      if (w.isMountpoint(G))
        throw new w.ErrnoError(10);
      try {
        w.trackingDelegate.willDeletePath && w.trackingDelegate.willDeletePath(C);
      } catch (a) {
        z("FS.trackingDelegate['willDeletePath']('" + C + "') threw an exception: " + a.message);
      }
      Q.node_ops.rmdir(Q, i), w.destroyNode(G);
      try {
        w.trackingDelegate.onDeletePath && w.trackingDelegate.onDeletePath(C);
      } catch (a) {
        z("FS.trackingDelegate['onDeletePath']('" + C + "') threw an exception: " + a.message);
      }
    }, readdir: function(C) {
      var B = w.lookupPath(C, { follow: !0 }), Q = B.node;
      if (!Q.node_ops.readdir)
        throw new w.ErrnoError(54);
      return Q.node_ops.readdir(Q);
    }, unlink: function(C) {
      var B = w.lookupPath(C, { parent: !0 }), Q = B.node, i = v.basename(C), G = w.lookupNode(Q, i), F = w.mayDelete(Q, i, !1);
      if (F)
        throw new w.ErrnoError(F);
      if (!Q.node_ops.unlink)
        throw new w.ErrnoError(63);
      if (w.isMountpoint(G))
        throw new w.ErrnoError(10);
      try {
        w.trackingDelegate.willDeletePath && w.trackingDelegate.willDeletePath(C);
      } catch (a) {
        z("FS.trackingDelegate['willDeletePath']('" + C + "') threw an exception: " + a.message);
      }
      Q.node_ops.unlink(Q, i), w.destroyNode(G);
      try {
        w.trackingDelegate.onDeletePath && w.trackingDelegate.onDeletePath(C);
      } catch (a) {
        z("FS.trackingDelegate['onDeletePath']('" + C + "') threw an exception: " + a.message);
      }
    }, readlink: function(C) {
      var B = w.lookupPath(C), Q = B.node;
      if (!Q)
        throw new w.ErrnoError(44);
      if (!Q.node_ops.readlink)
        throw new w.ErrnoError(28);
      return qI.resolve(w.getPath(Q.parent), Q.node_ops.readlink(Q));
    }, stat: function(C, B) {
      var Q = w.lookupPath(C, { follow: !B }), i = Q.node;
      if (!i)
        throw new w.ErrnoError(44);
      if (!i.node_ops.getattr)
        throw new w.ErrnoError(63);
      return i.node_ops.getattr(i);
    }, lstat: function(C) {
      return w.stat(C, !0);
    }, chmod: function(C, B, Q) {
      var i;
      if (typeof C == "string") {
        var G = w.lookupPath(C, { follow: !Q });
        i = G.node;
      } else
        i = C;
      if (!i.node_ops.setattr)
        throw new w.ErrnoError(63);
      i.node_ops.setattr(i, { mode: B & 4095 | i.mode & -4096, timestamp: Date.now() });
    }, lchmod: function(C, B) {
      w.chmod(C, B, !0);
    }, fchmod: function(C, B) {
      var Q = w.getStream(C);
      if (!Q)
        throw new w.ErrnoError(8);
      w.chmod(Q.node, B);
    }, chown: function(C, B, Q, i) {
      var G;
      if (typeof C == "string") {
        var F = w.lookupPath(C, { follow: !i });
        G = F.node;
      } else
        G = C;
      if (!G.node_ops.setattr)
        throw new w.ErrnoError(63);
      G.node_ops.setattr(G, { timestamp: Date.now() });
    }, lchown: function(C, B, Q) {
      w.chown(C, B, Q, !0);
    }, fchown: function(C, B, Q) {
      var i = w.getStream(C);
      if (!i)
        throw new w.ErrnoError(8);
      w.chown(i.node, B, Q);
    }, truncate: function(C, B) {
      if (B < 0)
        throw new w.ErrnoError(28);
      var Q;
      if (typeof C == "string") {
        var i = w.lookupPath(C, { follow: !0 });
        Q = i.node;
      } else
        Q = C;
      if (!Q.node_ops.setattr)
        throw new w.ErrnoError(63);
      if (w.isDir(Q.mode))
        throw new w.ErrnoError(31);
      if (!w.isFile(Q.mode))
        throw new w.ErrnoError(28);
      var G = w.nodePermissions(Q, "w");
      if (G)
        throw new w.ErrnoError(G);
      Q.node_ops.setattr(Q, { size: B, timestamp: Date.now() });
    }, ftruncate: function(C, B) {
      var Q = w.getStream(C);
      if (!Q)
        throw new w.ErrnoError(8);
      if (!(Q.flags & 2097155))
        throw new w.ErrnoError(28);
      w.truncate(Q.node, B);
    }, utime: function(C, B, Q) {
      var i = w.lookupPath(C, { follow: !0 }), G = i.node;
      G.node_ops.setattr(G, { timestamp: Math.max(B, Q) });
    }, open: function(C, B, Q, i, G) {
      if (C === "")
        throw new w.ErrnoError(44);
      B = typeof B == "string" ? w.modeStringToFlags(B) : B, Q = typeof Q > "u" ? 438 : Q, B & 64 ? Q = Q & 4095 | 32768 : Q = 0;
      var F;
      if (typeof C == "object")
        F = C;
      else {
        C = v.normalize(C);
        try {
          var a = w.lookupPath(C, { follow: !(B & 131072) });
          F = a.node;
        } catch {
        }
      }
      var R = !1;
      if (B & 64)
        if (F) {
          if (B & 128)
            throw new w.ErrnoError(20);
        } else
          F = w.mknod(C, Q, 0), R = !0;
      if (!F)
        throw new w.ErrnoError(44);
      if (w.isChrdev(F.mode) && (B &= -513), B & 65536 && !w.isDir(F.mode))
        throw new w.ErrnoError(54);
      if (!R) {
        var h = w.mayOpen(F, B);
        if (h)
          throw new w.ErrnoError(h);
      }
      B & 512 && w.truncate(F, 0), B &= -131713;
      var K = w.createStream({ node: F, path: w.getPath(F), flags: B, seekable: !0, position: 0, stream_ops: F.stream_ops, ungotten: [], error: !1 }, i, G);
      K.stream_ops.open && K.stream_ops.open(K), g.logReadFiles && !(B & 1) && (w.readFiles || (w.readFiles = {}), C in w.readFiles || (w.readFiles[C] = 1, z("FS.trackingDelegate error on read file: " + C)));
      try {
        if (w.trackingDelegate.onOpenFile) {
          var M = 0;
          (B & 2097155) !== 1 && (M |= w.tracking.openFlags.READ), B & 2097155 && (M |= w.tracking.openFlags.WRITE), w.trackingDelegate.onOpenFile(C, M);
        }
      } catch (J) {
        z("FS.trackingDelegate['onOpenFile']('" + C + "', flags) threw an exception: " + J.message);
      }
      return K;
    }, close: function(C) {
      if (w.isClosed(C))
        throw new w.ErrnoError(8);
      C.getdents && (C.getdents = null);
      try {
        C.stream_ops.close && C.stream_ops.close(C);
      } catch (B) {
        throw B;
      } finally {
        w.closeStream(C.fd);
      }
      C.fd = null;
    }, isClosed: function(C) {
      return C.fd === null;
    }, llseek: function(C, B, Q) {
      if (w.isClosed(C))
        throw new w.ErrnoError(8);
      if (!C.seekable || !C.stream_ops.llseek)
        throw new w.ErrnoError(70);
      if (Q != 0 && Q != 1 && Q != 2)
        throw new w.ErrnoError(28);
      return C.position = C.stream_ops.llseek(C, B, Q), C.ungotten = [], C.position;
    }, read: function(C, B, Q, i, G) {
      if (i < 0 || G < 0)
        throw new w.ErrnoError(28);
      if (w.isClosed(C))
        throw new w.ErrnoError(8);
      if ((C.flags & 2097155) === 1)
        throw new w.ErrnoError(8);
      if (w.isDir(C.node.mode))
        throw new w.ErrnoError(31);
      if (!C.stream_ops.read)
        throw new w.ErrnoError(28);
      var F = typeof G < "u";
      if (!F)
        G = C.position;
      else if (!C.seekable)
        throw new w.ErrnoError(70);
      var a = C.stream_ops.read(C, B, Q, i, G);
      return F || (C.position += a), a;
    }, write: function(C, B, Q, i, G, F) {
      if (i < 0 || G < 0)
        throw new w.ErrnoError(28);
      if (w.isClosed(C))
        throw new w.ErrnoError(8);
      if (!(C.flags & 2097155))
        throw new w.ErrnoError(8);
      if (w.isDir(C.node.mode))
        throw new w.ErrnoError(31);
      if (!C.stream_ops.write)
        throw new w.ErrnoError(28);
      C.seekable && C.flags & 1024 && w.llseek(C, 0, 2);
      var a = typeof G < "u";
      if (!a)
        G = C.position;
      else if (!C.seekable)
        throw new w.ErrnoError(70);
      var R = C.stream_ops.write(C, B, Q, i, G, F);
      a || (C.position += R);
      try {
        C.path && w.trackingDelegate.onWriteToFile && w.trackingDelegate.onWriteToFile(C.path);
      } catch (h) {
        z("FS.trackingDelegate['onWriteToFile']('" + C.path + "') threw an exception: " + h.message);
      }
      return R;
    }, allocate: function(C, B, Q) {
      if (w.isClosed(C))
        throw new w.ErrnoError(8);
      if (B < 0 || Q <= 0)
        throw new w.ErrnoError(28);
      if (!(C.flags & 2097155))
        throw new w.ErrnoError(8);
      if (!w.isFile(C.node.mode) && !w.isDir(C.node.mode))
        throw new w.ErrnoError(43);
      if (!C.stream_ops.allocate)
        throw new w.ErrnoError(138);
      C.stream_ops.allocate(C, B, Q);
    }, mmap: function(C, B, Q, i, G, F) {
      if (G & 2 && !(F & 2) && (C.flags & 2097155) !== 2)
        throw new w.ErrnoError(2);
      if ((C.flags & 2097155) === 1)
        throw new w.ErrnoError(2);
      if (!C.stream_ops.mmap)
        throw new w.ErrnoError(43);
      return C.stream_ops.mmap(C, B, Q, i, G, F);
    }, msync: function(C, B, Q, i, G) {
      return !C || !C.stream_ops.msync ? 0 : C.stream_ops.msync(C, B, Q, i, G);
    }, munmap: function(C) {
      return 0;
    }, ioctl: function(C, B, Q) {
      if (!C.stream_ops.ioctl)
        throw new w.ErrnoError(59);
      return C.stream_ops.ioctl(C, B, Q);
    }, readFile: function(C, B) {
      if (B = B || {}, B.flags = B.flags || 0, B.encoding = B.encoding || "binary", B.encoding !== "utf8" && B.encoding !== "binary")
        throw new Error('Invalid encoding type "' + B.encoding + '"');
      var Q, i = w.open(C, B.flags), G = w.stat(C), F = G.size, a = new Uint8Array(F);
      return w.read(i, a, 0, F, 0), B.encoding === "utf8" ? Q = ag(a, 0) : B.encoding === "binary" && (Q = a), w.close(i), Q;
    }, writeFile: function(C, B, Q) {
      Q = Q || {}, Q.flags = Q.flags || 577;
      var i = w.open(C, Q.flags, Q.mode);
      if (typeof B == "string") {
        var G = new Uint8Array(hC(B) + 1), F = eB(B, G, 0, G.length);
        w.write(i, G, 0, F, void 0, Q.canOwn);
      } else if (ArrayBuffer.isView(B))
        w.write(i, B, 0, B.byteLength, void 0, Q.canOwn);
      else
        throw new Error("Unsupported data type");
      w.close(i);
    }, cwd: function() {
      return w.currentPath;
    }, chdir: function(C) {
      var B = w.lookupPath(C, { follow: !0 });
      if (B.node === null)
        throw new w.ErrnoError(44);
      if (!w.isDir(B.node.mode))
        throw new w.ErrnoError(54);
      var Q = w.nodePermissions(B.node, "x");
      if (Q)
        throw new w.ErrnoError(Q);
      w.currentPath = B.path;
    }, createDefaultDirectories: function() {
      w.mkdir("/tmp"), w.mkdir("/home"), w.mkdir("/home/web_user");
    }, createDefaultDevices: function() {
      w.mkdir("/dev"), w.registerDevice(w.makedev(1, 3), { read: function() {
        return 0;
      }, write: function(B, Q, i, G, F) {
        return G;
      } }), w.mkdev("/dev/null", w.makedev(1, 3)), Ig.register(w.makedev(5, 0), Ig.default_tty_ops), Ig.register(w.makedev(6, 0), Ig.default_tty1_ops), w.mkdev("/dev/tty", w.makedev(5, 0)), w.mkdev("/dev/tty1", w.makedev(6, 0));
      var C = fG();
      w.createDevice("/dev", "random", C), w.createDevice("/dev", "urandom", C), w.mkdir("/dev/shm"), w.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: function() {
      w.mkdir("/proc"), w.mkdir("/proc/self"), w.mkdir("/proc/self/fd"), w.mount({ mount: function() {
        var C = w.createNode("/proc/self", "fd", 16895, 73);
        return C.node_ops = { lookup: function(B, Q) {
          var i = +Q, G = w.getStream(i);
          if (!G)
            throw new w.ErrnoError(8);
          var F = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function() {
            return G.path;
          } } };
          return F.parent = F, F;
        } }, C;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: function() {
    }, ensureErrnoError: function() {
      w.ErrnoError || (w.ErrnoError = function(B, Q) {
        this.node = Q, this.setErrno = function(i) {
          this.errno = i;
        }, this.setErrno(B), this.message = "FS error";
      }));
    }, staticInit: function() {
    }, quit: function() {
};