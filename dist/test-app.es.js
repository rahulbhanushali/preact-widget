var I, p, p_, H, __, d_, R, E = {}, K = [], $_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Q = Array.isArray;
function C(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function h_(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function v_(e, _, t) {
  var n, o, i, u = {};
  for (i in _)
    i == "key" ? n = _[i] : i == "ref" ? o = _[i] : u[i] = _[i];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? I.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      u[i] === void 0 && (u[i] = e.defaultProps[i]);
  return A(e, u, n, o, null);
}
function A(e, _, t, n, o) {
  var i = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++p_, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function V(e) {
  return e.children;
}
function F(e, _) {
  this.props = e, this.context = _;
}
function S(e, _) {
  if (_ == null)
    return e.__ ? S(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? S(e) : null;
}
function w_(e, _, t) {
  var n, o = e.__v, i = o.__e, u = e.__P;
  if (u)
    return (n = C({}, o)).__v = o.__v + 1, p.vnode && p.vnode(n), X(u, n, o, e.__n, u.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, _, i ?? S(o), !!(32 & o.__u), t), n.__v = o.__v, n.__.__k[n.__i] = n, n.__d = void 0, n.__e != i && y_(n), n;
}
function y_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return y_(e);
  }
}
function e_(e) {
  (!e.__d && (e.__d = !0) && H.push(e) && !M.__r++ || __ !== p.debounceRendering) && ((__ = p.debounceRendering) || d_)(M);
}
function M() {
  var e, _, t, n = [], o = [];
  for (H.sort(R); e = H.shift(); )
    e.__d && (t = H.length, _ = w_(e, n, o) || _, t === 0 || H.length > t ? (j(n, _, o), o.length = n.length = 0, _ = void 0, H.sort(R)) : _ && p.__c && p.__c(_, K));
  _ && j(n, _, o), M.__r = 0;
}
function m_(e, _, t, n, o, i, u, c, f, l, a) {
  var r, d, s, m, $, g = n && n.__k || K, h = _.length;
  for (t.__d = f, C_(t, _, g), f = t.__d, r = 0; r < h; r++)
    (s = t.__k[r]) != null && typeof s != "boolean" && typeof s != "function" && (d = s.__i === -1 ? E : g[s.__i] || E, s.__i = r, X(e, s, d, o, i, u, c, f, l, a), m = s.__e, s.ref && d.ref != s.ref && (d.ref && Y(d.ref, null, s), a.push(s.ref, s.__c || m, s)), $ == null && m != null && ($ = m), 65536 & s.__u || d.__k === s.__k ? f = g_(s, f, e) : typeof s.type == "function" && s.__d !== void 0 ? f = s.__d : m && (f = m.nextSibling), s.__d = void 0, s.__u &= -196609);
  t.__d = f, t.__e = $;
}
function C_(e, _, t) {
  var n, o, i, u, c, f = _.length, l = t.length, a = l, r = 0;
  for (e.__k = [], n = 0; n < f; n++)
    u = n + r, (o = e.__k[n] = (o = _[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? A(null, o, null, null, null) : Q(o) ? A(V, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? A(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, c = H_(o, t, u, a), o.__i = c, i = null, c !== -1 && (a--, (i = t[c]) && (i.__u |= 131072)), i == null || i.__v === null ? (c == -1 && r--, typeof o.type != "function" && (o.__u |= 65536)) : c !== u && (c === u + 1 ? r++ : c > u ? a > f - u ? r += c - u : r-- : c < u ? c == u - 1 && (r = c - u) : r = 0, c !== n + r && (o.__u |= 65536))) : (i = t[u]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = S(i)), z(i, i, !1), t[u] = null, a--);
  if (a)
    for (n = 0; n < l; n++)
      (i = t[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = S(i)), z(i, i));
}
function g_(e, _, t) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = e, _ = g_(n[o], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function H_(e, _, t, n) {
  var o = e.key, i = e.type, u = t - 1, c = t + 1, f = _[t];
  if (f === null || f && o == f.key && i === f.type && !(131072 & f.__u))
    return t;
  if (n > (f != null && !(131072 & f.__u) ? 1 : 0))
    for (; u >= 0 || c < _.length; ) {
      if (u >= 0) {
        if ((f = _[u]) && !(131072 & f.__u) && o == f.key && i === f.type)
          return u;
        u--;
      }
      if (c < _.length) {
        if ((f = _[c]) && !(131072 & f.__u) && o == f.key && i === f.type)
          return c;
        c++;
      }
    }
  return -1;
}
function t_(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || $_.test(_) ? t : t + "px";
}
function T(e, _, t, n, o) {
  var i;
  _:
    if (_ === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (_ in n)
            t && _ in t || t_(e.style, _, "");
        if (t)
          for (_ in t)
            n && t[_] === n[_] || t_(e.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      i = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + i] = t, t ? n ? t.u = n.u : (t.u = Date.now(), e.addEventListener(_, i ? o_ : n_, i)) : e.removeEventListener(_, i ? o_ : n_, i);
    else {
      if (o)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e)
        try {
          e[_] = t ?? "";
          break _;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function n_(e) {
  if (this.l) {
    var _ = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= _.u)
        return;
    } else
      e.t = Date.now();
    return _(p.event ? p.event(e) : e);
  }
}
function o_(e) {
  if (this.l)
    return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function X(e, _, t, n, o, i, u, c, f, l) {
  var a, r, d, s, m, $, g, h, k, w, P, x, Z, N, B, b = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (f = !!(32 & t.__u), i = [c = _.__e = t.__e]), (a = p.__b) && a(_);
  _:
    if (typeof b == "function")
      try {
        if (h = _.props, k = (a = b.contextType) && n[a.__c], w = a ? k ? k.props.value : a.__ : n, t.__c ? g = (r = _.__c = t.__c).__ = r.__E : ("prototype" in b && b.prototype.render ? _.__c = r = new b(h, w) : (_.__c = r = new F(h, w), r.constructor = b, r.render = x_), k && k.sub(r), r.props = h, r.state || (r.state = {}), r.context = w, r.__n = n, d = r.__d = !0, r.__h = [], r._sb = []), r.__s == null && (r.__s = r.state), b.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = C({}, r.__s)), C(r.__s, b.getDerivedStateFromProps(h, r.__s))), s = r.props, m = r.state, r.__v = _, d)
          b.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== s && r.componentWillReceiveProps != null && r.componentWillReceiveProps(h, w), !r.__e && (r.shouldComponentUpdate != null && r.shouldComponentUpdate(h, r.__s, w) === !1 || _.__v === t.__v)) {
            for (_.__v !== t.__v && (r.props = h, r.state = r.__s, r.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(D) {
              D && (D.__ = _);
            }), P = 0; P < r._sb.length; P++)
              r.__h.push(r._sb[P]);
            r._sb = [], r.__h.length && u.push(r);
            break _;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(h, r.__s, w), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(s, m, $);
          });
        }
        if (r.context = w, r.props = h, r.__P = e, r.__e = !1, x = p.__r, Z = 0, "prototype" in b && b.prototype.render) {
          for (r.state = r.__s, r.__d = !1, x && x(_), a = r.render(r.props, r.state, r.context), N = 0; N < r._sb.length; N++)
            r.__h.push(r._sb[N]);
          r._sb = [];
        } else
          do
            r.__d = !1, x && x(_), a = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++Z < 25);
        r.state = r.__s, r.getChildContext != null && (n = C(C({}, n), r.getChildContext())), d || r.getSnapshotBeforeUpdate == null || ($ = r.getSnapshotBeforeUpdate(s, m)), m_(e, Q(B = a != null && a.type === V && a.key == null ? a.props.children : a) ? B : [B], _, t, n, o, i, u, c, f, l), r.base = _.__e, _.__u &= -161, r.__h.length && u.push(r), g && (r.__E = r.__ = null);
      } catch (D) {
        _.__v = null, f || i != null ? (_.__e = c, _.__u |= f ? 160 : 32, i[i.indexOf(c)] = null) : (_.__e = t.__e, _.__k = t.__k), p.__e(D, _, t);
      }
    else
      i == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = S_(t.__e, _, t, n, o, i, u, f, l);
  (a = p.diffed) && a(_);
}
function j(e, _, t) {
  for (var n = 0; n < t.length; n++)
    Y(t[n], t[++n], t[++n]);
  p.__c && p.__c(_, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      p.__e(i, o.__v);
    }
  });
}
function S_(e, _, t, n, o, i, u, c, f) {
  var l, a, r, d, s, m, $, g = t.props, h = _.props, k = _.type;
  if (k === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((s = i[l]) && "setAttribute" in s == !!k && (k ? s.localName === k : s.nodeType === 3)) {
        e = s, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (k === null)
      return document.createTextNode(h);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, h.is && h), i = null, c = !1;
  }
  if (k === null)
    g === h || c && e.data === h || (e.data = h);
  else {
    if (i = i && I.call(e.childNodes), g = t.props || E, !c && i != null)
      for (g = {}, l = 0; l < e.attributes.length; l++)
        g[(s = e.attributes[l]).name] = s.value;
    for (l in g)
      s = g[l], l == "children" || (l == "dangerouslySetInnerHTML" ? r = s : l === "key" || l in h || T(e, l, null, s, o));
    for (l in h)
      s = h[l], l == "children" ? d = s : l == "dangerouslySetInnerHTML" ? a = s : l == "value" ? m = s : l == "checked" ? $ = s : l === "key" || c && typeof s != "function" || g[l] === s || T(e, l, s, g[l], o);
    if (a)
      c || r && (a.__html === r.__html || a.__html === e.innerHTML) || (e.innerHTML = a.__html), _.__k = [];
    else if (r && (e.innerHTML = ""), m_(e, Q(d) ? d : [d], _, t, n, o && k !== "foreignObject", i, u, i ? i[0] : t.__k && S(t, 0), c, f), i != null)
      for (l = i.length; l--; )
        i[l] != null && h_(i[l]);
    c || (l = "value", m !== void 0 && (m !== e[l] || k === "progress" && !m || k === "option" && m !== g[l]) && T(e, l, m, g[l], !1), l = "checked", $ !== void 0 && $ !== e[l] && T(e, l, $, g[l], !1));
  }
  return e;
}
function Y(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (n) {
    p.__e(n, t);
  }
}
function z(e, _, t) {
  var n, o;
  if (p.unmount && p.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Y(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        p.__e(i, _);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (o = 0; o < n.length; o++)
      n[o] && z(n[o], _, t || typeof e.type != "function");
  t || e.__e == null || h_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function x_(e, _, t) {
  return this.constructor(e, t);
}
function E_(e, _, t) {
  var n, o, i, u;
  p.__ && p.__(e, _), o = (n = typeof t == "function") ? null : t && t.__k || _.__k, i = [], u = [], X(_, e = (!n && t || _).__k = v_(V, null, [e]), o || E, E, _.ownerSVGElement !== void 0, !n && t ? [t] : o ? null : _.firstChild ? I.call(_.childNodes) : null, i, !n && t ? t : o ? o.__e : _.firstChild, n, u), e.__d = void 0, j(i, e, u);
}
I = K.slice, p = { __e: function(e, _, t, n) {
  for (var o, i, u; _ = _.__; )
    if ((o = _.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), u = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), u = o.__d), u)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, p_ = 0, F.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), typeof e == "function" && (e = e(C({}, t), this.props)), e && C(t, e), e != null && this.__v && (_ && this._sb.push(_), e_(this));
}, F.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), e_(this));
}, F.prototype.render = V, H = [], d_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, M.__r = 0;
var O, v, q, r_, G = 0, k_ = [], W = [], y = p, i_ = y.__b, l_ = y.__r, u_ = y.diffed, c_ = y.__c, f_ = y.unmount, s_ = y.__;
function P_(e, _) {
  y.__h && y.__h(v, e, G || _), G = 0;
  var t = v.__H || (v.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: W }), t.__[e];
}
function N_(e) {
  return G = 1, D_(b_, e);
}
function D_(e, _, t) {
  var n = P_(O++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : b_(void 0, _), function(c) {
    var f = n.__N ? n.__N[0] : n.__[0], l = n.t(f, c);
    f !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = v, !v.u)) {
    var o = function(c, f, l) {
      if (!n.__c.__H)
        return !0;
      var a = n.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (a.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, c, f, l);
      var r = !1;
      return a.forEach(function(d) {
        if (d.__N) {
          var s = d.__[0];
          d.__ = d.__N, d.__N = void 0, s !== d.__[0] && (r = !0);
        }
      }), !(!r && n.__c.props === c) && (!i || i.call(this, c, f, l));
    };
    v.u = !0;
    var i = v.shouldComponentUpdate, u = v.componentWillUpdate;
    v.componentWillUpdate = function(c, f, l) {
      if (this.__e) {
        var a = i;
        i = void 0, o(c, f, l), i = a;
      }
      u && u.call(this, c, f, l);
    }, v.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function T_() {
  for (var e; e = k_.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(L), e.__H.__h.forEach(J), e.__H.__h = [];
      } catch (_) {
        e.__H.__h = [], y.__e(_, e.__v);
      }
}
y.__b = function(e) {
  v = null, i_ && i_(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), s_ && s_(e, _);
}, y.__r = function(e) {
  l_ && l_(e), O = 0;
  var _ = (v = e.__c).__H;
  _ && (q === v ? (_.__h = [], v.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = W, t.__N = t.i = void 0;
  })) : (_.__h.forEach(L), _.__h.forEach(J), _.__h = [], O = 0)), q = v;
}, y.diffed = function(e) {
  u_ && u_(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (k_.push(_) !== 1 && r_ === y.requestAnimationFrame || ((r_ = y.requestAnimationFrame) || U_)(T_)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== W && (t.__ = t.__V), t.i = void 0, t.__V = W;
  })), q = v = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(L), t.__h = t.__h.filter(function(n) {
        return !n.__ || J(n);
      });
    } catch (n) {
      _.some(function(o) {
        o.__h && (o.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), c_ && c_(e, _);
}, y.unmount = function(e) {
  f_ && f_(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      L(n);
    } catch (o) {
      _ = o;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var a_ = typeof requestAnimationFrame == "function";
function U_(e) {
  var _, t = function() {
    clearTimeout(n), a_ && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  a_ && (_ = requestAnimationFrame(t));
}
function L(e) {
  var _ = v, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), v = _;
}
function J(e) {
  var _ = v;
  e.__c = e.__(), v = _;
}
function b_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
var A_ = 0;
function U(e, _, t, n, o, i) {
  var u, c, f = {};
  for (c in _)
    c == "ref" ? u = _[c] : f[c] = _[c];
  var l = { type: e, props: f, key: t, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --A_, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (u = e.defaultProps))
    for (c in u)
      f[c] === void 0 && (f[c] = u[c]);
  return p.vnode && p.vnode(l), l;
}
const F_ = () => {
  const [e, _] = N_(0), t = () => _(e + 1), n = () => _((o) => o - 1);
  return U("div", {
    children: [U("p", {
      children: ["Count: ", e]
    }), U("button", {
      onClick: t,
      children: "Increment"
    }), U("button", {
      onClick: n,
      children: "Decrement"
    })]
  });
};
function W_(e) {
  const _ = document.getElementById(e);
  return E_(v_(F_, _), _);
}
export {
  W_ as Widget
};
