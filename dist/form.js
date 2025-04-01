
"use strict";
function _typeof(t) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _typeof(t)
  );
}
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function () {
      return t;
    };
  var t = {},
    e = Object.prototype,
    r = e.hasOwnProperty,
    n =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    o = "function" == typeof Symbol ? Symbol : {},
    i = o.iterator || "@@iterator",
    a = o.asyncIterator || "@@asyncIterator",
    c = o.toStringTag || "@@toStringTag";
  function u(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    u({}, "");
  } catch (t) {
    u = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function l(t, e, r, o) {
    var i = e && e.prototype instanceof h ? e : h,
      a = Object.create(i.prototype),
      c = new S(o || []);
    return n(a, "_invoke", { value: w(t, r, c) }), a;
  }
  function s(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  t.wrap = l;
  var f = {};
  function h() {}
  function m() {}
  function p() {}
  var d = {};
  u(d, i, function () {
    return this;
  });
  var v = Object.getPrototypeOf,
    y = v && v(v(T([])));
  y && y !== e && r.call(y, i) && (d = y);
  var g = (p.prototype = h.prototype = Object.create(d));
  function b(t) {
    ["next", "throw", "return"].forEach(function (e) {
      u(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function L(t, e) {
    function o(n, i, a, c) {
      var u = s(t[n], t, i);
      if ("throw" !== u.type) {
        var l = u.arg,
          f = l.value;
        return f && "object" == _typeof(f) && r.call(f, "__await")
          ? e.resolve(f.__await).then(
              function (t) {
                o("next", t, a, c);
              },
              function (t) {
                o("throw", t, a, c);
              }
            )
          : e.resolve(f).then(
              function (t) {
                (l.value = t), a(l);
              },
              function (t) {
                return o("throw", t, a, c);
              }
            );
      }
      c(u.arg);
    }
    var i;
    n(this, "_invoke", {
      value: function (t, r) {
        function n() {
          return new e(function (e, n) {
            o(t, r, e, n);
          });
        }
        return (i = i ? i.then(n, n) : n());
      },
    });
  }
  function w(t, e, r) {
    var n = "suspendedStart";
    return function (o, i) {
      if ("executing" === n) throw new Error("Generator is already running");
      if ("completed" === n) {
        if ("throw" === o) throw i;
        return O();
      }
      for (r.method = o, r.arg = i; ; ) {
        var a = r.delegate;
        if (a) {
          var c = x(a, r);
          if (c) {
            if (c === f) continue;
            return c;
          }
        }
        if ("next" === r.method) r.sent = r._sent = r.arg;
        else if ("throw" === r.method) {
          if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
          r.dispatchException(r.arg);
        } else "return" === r.method && r.abrupt("return", r.arg);
        n = "executing";
        var u = s(t, e, r);
        if ("normal" === u.type) {
          if (((n = r.done ? "completed" : "suspendedYield"), u.arg === f))
            continue;
          return { value: u.arg, done: r.done };
        }
        "throw" === u.type &&
          ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
      }
    };
  }
  function x(t, e) {
    var r = e.method,
      n = t.iterator[r];
    if (void 0 === n)
      return (
        (e.delegate = null),
        ("throw" === r &&
          t.iterator.return &&
          ((e.method = "return"),
          (e.arg = void 0),
          x(t, e),
          "throw" === e.method)) ||
          ("return" !== r &&
            ((e.method = "throw"),
            (e.arg = new TypeError(
              "The iterator does not provide a '" + r + "' method"
            )))),
        f
      );
    var o = s(n, t.iterator, e.arg);
    if ("throw" === o.type)
      return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), f;
    var i = o.arg;
    return i
      ? i.done
        ? ((e[t.resultName] = i.value),
          (e.next = t.nextLoc),
          "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
          (e.delegate = null),
          f)
        : i
      : ((e.method = "throw"),
        (e.arg = new TypeError("iterator result is not an object")),
        (e.delegate = null),
        f);
  }
  function _(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function E(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function S(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(_, this),
      this.reset(!0);
  }
  function T(t) {
    if (t) {
      var e = t[i];
      if (e) return e.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var n = -1,
          o = function e() {
            for (; ++n < t.length; )
              if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
            return (e.value = void 0), (e.done = !0), e;
          };
        return (o.next = o);
      }
    }
    return { next: O };
  }
  function O() {
    return { value: void 0, done: !0 };
  }
  return (
    (m.prototype = p),
    n(g, "constructor", { value: p, configurable: !0 }),
    n(p, "constructor", { value: m, configurable: !0 }),
    (m.displayName = u(p, c, "GeneratorFunction")),
    (t.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, p)
          : ((t.__proto__ = p), u(t, c, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    b(L.prototype),
    u(L.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = L),
    (t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new L(l(e, r, n, o), i);
      return t.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    b(g),
    u(g, c, "Generator"),
    u(g, i, function () {
      return this;
    }),
    u(g, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function t() {
          for (; r.length; ) {
            var n = r.pop();
            if (n in e) return (t.value = n), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (t.values = T),
    (S.prototype = {
      constructor: S,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(E),
          !t)
        )
          for (var e in this)
            "t" === e.charAt(0) &&
              r.call(this, e) &&
              !isNaN(+e.slice(1)) &&
              (this[e] = void 0);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var e = this;
        function n(r, n) {
          return (
            (a.type = "throw"),
            (a.arg = t),
            (e.next = r),
            n && ((e.method = "next"), (e.arg = void 0)),
            !!n
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return n("end");
          if (i.tryLoc <= this.prev) {
            var c = r.call(i, "catchLoc"),
              u = r.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return n(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return n(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n];
          if (
            o.tryLoc <= this.prev &&
            r.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), f)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          f
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), E(r), f;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              E(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, e, r) {
        return (
          (this.delegate = { iterator: T(t), resultName: e, nextLoc: r }),
          "next" === this.method && (this.arg = void 0),
          f
        );
      },
    }),
    t
  );
}
function asyncGeneratorStep(t, e, r, n, o, i, a) {
  try {
    var c = t[i](a),
      u = c.value;
  } catch (t) {
    return void r(t);
  }
  c.done ? e(u) : Promise.resolve(u).then(n, o);
}
function _asyncToGenerator(t) {
  return function () {
    var e = this,
      r = arguments;
    return new Promise(function (n, o) {
      var i = t.apply(e, r);
      function a(t) {
        asyncGeneratorStep(i, n, o, a, c, "next", t);
      }
      function c(t) {
        asyncGeneratorStep(i, n, o, a, c, "throw", t);
      }
      a(void 0);
    });
  };
}
var formControls = document.querySelectorAll(".form__control"),
  contactForm = document.getElementById("contactForm"),
  submitForm = function (t) {
    t.preventDefault();
    for (var e = "", r = 0; r < formControls.length; r++)
      e += validate(formControls[r]);
    e || sendEmail(t);
  },
  sendEmail = (function () {
    var t = _asyncToGenerator(
      _regeneratorRuntime().mark(function t(e) {
        var r;
        return _regeneratorRuntime().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                (r = new FormData(e.target)),
                  fetch(e.target.action, {
                    method: contactForm.method,
                    body: r,
                    headers: { Accept: "application/json" },
                  })
                    .then(function (t) {
                      console.log(t),
                        200 === t.status &&
                          (showToaster(), contactForm.reset());
                    })
                    .catch(function (t) {
                      console.log(
                        t,
                        "Oops! There was a problem submitting your form"
                      );
                    });
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
    return function (e) {
      return t.apply(this, arguments);
    };
  })(),
  validate = function (t) {
    var e = t.value.trim(),
      r = "";
    return (
      e ||
        (t.classList.add("form__error"),
        (t.nextElementSibling.innerHTML = "This field is required"),
        (r += t.nextElementSibling.innerHTML)),
      e &&
        e.length <= 6 &&
        (t.classList.add("form__error"),
        (t.nextElementSibling.innerHTML = "Give at least 7 characters"),
        (r += t.nextElementSibling.innerHTML)),
      "email" === t.id &&
        e &&
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
          ? (t.classList.remove("form__error"),
            (t.nextElementSibling.innerHTML = ""),
            (r += t.nextElementSibling.innerHTML))
          : (alert("Not a valid form control"),
            t.classList.add("form__error"),
            (t.nextElementSibling.innerHTML =
              "Please use a valid email address"),
            (r += t.nextElementSibling.innerHTML))),
      "phoneNumber" === t.id &&
        e &&
        (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g.test(e)
          ? (t.classList.remove("form__error"),
            (t.nextElementSibling.innerHTML = ""),
            (r += t.nextElementSibling.innerHTML))
          : (t.classList.add("form__error"),
            (t.nextElementSibling.innerHTML = "Invalid Phone Number Format"),
            (r += t.nextElementSibling.innerHTML))),
      "" === r &&
        (t.classList.remove("form__error"),
        (t.nextElementSibling.innerHTML = ""),
        (r += t.nextElementSibling.innerHTML)),
      r
    );
  },
  showToaster = function () {
    var t = document.getElementById("toaster");
    t.classList.add("fade-in"),
      setTimeout(function () {
        t.classList.remove("fade-in"), t.classList.add("fade-out");
      }, 7e3);
  };
//# sourceMappingURL=form.js.map
// API Key for Freepik API
const options = {method: 'GET', headers: {'x-freepik-api-key': '<FPSX255b50fdd5174bd38544b61dc6efcf67>'}};

fetch('https://api.freepik.com/v1/resources', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));