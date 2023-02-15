"use strict";

!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define("pdfjs-dist/build/pdf", [], t) :
        "object" == typeof exports ?
        (exports["pdfjs-dist/build/pdf"] = t()) :
        (e["pdfjs-dist/build/pdf"] = e.pdfjsDistBuildPdf = t());
})("undefined" != typeof self ? self : void 0, function () {
    return (function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = {
                i: n,
                l: !1,
                exports: {}
            });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }

        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) ||
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    });
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule ?
                    function () {
                        return e.default;
                    } :
                    function () {
                        return e;
                    };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 64))
        );
    })([
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.unreachable = t.warn = t.utf8StringToString = t.stringToUTF8String = t.stringToPDFString = t.stringToBytes = t.string32 = t.shadow = t.setVerbosityLevel = t.ReadableStream = t.removeNullCharacters = t.readUint32 = t.readUint16 = t.readInt8 = t.log2 = t.isEvalSupported = t.isLittleEndian = t.createValidAbsoluteUrl = t.isSameOrigin = t.isSpace = t.isString = t.isNum = t.isEmptyObj = t.isBool = t.isArrayBuffer = t.info = t.getVerbosityLevel = t.getLookupTableFactory = t.deprecated = t.createObjectURL = t.createPromiseCapability = t.createBlob = t.bytesToString = t.assert = t.arraysToBytes = t.arrayByteLength = t.FormatError = t.XRefParseException = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.PasswordResponses = t.PasswordException = t.PageViewport = t.NotImplementedException = t.NativeImageDecoding = t.MissingPDFException = t.MissingDataException = t.MessageHandler = t.InvalidPDFException = t.AbortException = t.CMapCompressionType = t.ImageKind = t.FontType = t.AnnotationType = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.UNSUPPORTED_FEATURES = t.VerbosityLevel = t.OPS = t.IDENTITY_MATRIX = t.FONT_IDENTITY_MATRIX = void 0);
            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                };
            r(65);
            var i = r(119),
                a = {
                    ERRORS: 0,
                    WARNINGS: 1,
                    INFOS: 5
                },
                s = a.WARNINGS;

            function o(e) {
                s >= a.WARNINGS && console.log("Warning: " + e);
            }

            function l(e) {
                throw new Error(e);
            }

            function u(e, t) {
                e || l(t);
            }

            var c = (function () {
                    function e(e, t) {
                        (this.name = "PasswordException"),
                        (this.message = e),
                        (this.code = t);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                h = (function () {
                    function e(e, t) {
                        (this.name = "UnknownErrorException"),
                        (this.message = e),
                        (this.details = t);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                d = (function () {
                    function e(e) {
                        (this.name = "InvalidPDFException"), (this.message = e);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                f = (function () {
                    function e(e) {
                        (this.name = "MissingPDFException"), (this.message = e);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                p = (function () {
                    function e(e, t) {
                        (this.name = "UnexpectedResponseException"),
                        (this.message = e),
                        (this.status = t);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                m = (function () {
                    function e(e) {
                        this.message = e;
                    }

                    return (
                        (e.prototype = new Error()),
                        (e.prototype.name = "NotImplementedException"),
                        (e.constructor = e),
                        e
                    );
                })(),
                v = (function () {
                    function e(e, t) {
                        (this.begin = e),
                        (this.end = t),
                        (this.message = "Missing data [" + e + ", " + t + ")");
                    }

                    return (
                        (e.prototype = new Error()),
                        (e.prototype.name = "MissingDataException"),
                        (e.constructor = e),
                        e
                    );
                })(),
                g = (function () {
                    function e(e) {
                        this.message = e;
                    }

                    return (
                        (e.prototype = new Error()),
                        (e.prototype.name = "XRefParseException"),
                        (e.constructor = e),
                        e
                    );
                })(),
                _ = (function () {
                    function e(e) {
                        this.message = e;
                    }

                    return (
                        (e.prototype = new Error()),
                        (e.prototype.name = "FormatError"),
                        (e.constructor = e),
                        e
                    );
                })(),
                b = (function () {
                    function e(e) {
                        (this.name = "AbortException"), (this.message = e);
                    }

                    return (e.prototype = new Error()), (e.constructor = e), e;
                })(),
                y = /\x00/g;

            function A(e) {
                u("string" == typeof e, "Invalid argument for stringToBytes");

                for (var t = e.length, r = new Uint8Array(t), n = 0; n < t; ++n)
                    r[n] = 255 & e.charCodeAt(n);

                return r;
            }

            function S(e) {
                return void 0 !== e.length ?
                    e.length :
                    (u(void 0 !== e.byteLength), e.byteLength);
            }

            var w = (function () {
                    function e() {}

                    var t = ["rgb(", 0, ",", 0, ",", 0, ")"];
                    (e.makeCssRgb = function (e, r, n) {
                        return (t[1] = e), (t[3] = r), (t[5] = n), t.join("");
                    }),
                    (e.transform = function (e, t) {
                        return [
                            e[0] * t[0] + e[2] * t[1],
                            e[1] * t[0] + e[3] * t[1],
                            e[0] * t[2] + e[2] * t[3],
                            e[1] * t[2] + e[3] * t[3],
                            e[0] * t[4] + e[2] * t[5] + e[4],
                            e[1] * t[4] + e[3] * t[5] + e[5]
                        ];
                    }),
                    (e.applyTransform = function (e, t) {
                        return [
                            e[0] * t[0] + e[1] * t[2] + t[4],
                            e[0] * t[1] + e[1] * t[3] + t[5]
                        ];
                    }),
                    (e.applyInverseTransform = function (e, t) {
                        var r = t[0] * t[3] - t[1] * t[2];
                        return [
                            (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r,
                            (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r
                        ];
                    }),
                    (e.getAxialAlignedBoundingBox = function (t, r) {
                        var n = e.applyTransform(t, r),
                            i = e.applyTransform(t.slice(2, 4), r),
                            a = e.applyTransform([t[0], t[3]], r),
                            s = e.applyTransform([t[2], t[1]], r);
                        return [
                            Math.min(n[0], i[0], a[0], s[0]),
                            Math.min(n[1], i[1], a[1], s[1]),
                            Math.max(n[0], i[0], a[0], s[0]),
                            Math.max(n[1], i[1], a[1], s[1])
                        ];
                    }),
                    (e.inverseTransform = function (e) {
                        var t = e[0] * e[3] - e[1] * e[2];
                        return [
                            e[3] / t,
                            -e[1] / t,
                            -e[2] / t,
                            e[0] / t,
                            (e[2] * e[5] - e[4] * e[3]) / t,
                            (e[4] * e[1] - e[5] * e[0]) / t
                        ];
                    }),
                    (e.apply3dTransform = function (e, t) {
                        return [
                            e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
                            e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
                            e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
                        ];
                    }),
                    (e.singularValueDecompose2dScale = function (e) {
                        var t = [e[0], e[2], e[1], e[3]],
                            r = e[0] * t[0] + e[1] * t[2],
                            n = e[0] * t[1] + e[1] * t[3],
                            i = e[2] * t[0] + e[3] * t[2],
                            a = e[2] * t[1] + e[3] * t[3],
                            s = (r + a) / 2,
                            o = Math.sqrt((r + a) * (r + a) - 4 * (r * a - i * n)) / 2,
                            l = s + o || 1,
                            u = s - o || 1;
                        return [Math.sqrt(l), Math.sqrt(u)];
                    }),
                    (e.normalizeRect = function (e) {
                        var t = e.slice(0);
                        return (
                            e[0] > e[2] && ((t[0] = e[2]), (t[2] = e[0])),
                            e[1] > e[3] && ((t[1] = e[3]), (t[3] = e[1])),
                            t
                        );
                    }),
                    (e.intersect = function (t, r) {
                        function n(e, t) {
                            return e - t;
                        }

                        var i = [t[0], t[2], r[0], r[2]].sort(n),
                            a = [t[1], t[3], r[1], r[3]].sort(n),
                            s = [];
                        return (
                            (t = e.normalizeRect(t)),
                            (r = e.normalizeRect(r)),
                            ((i[0] === t[0] && i[1] === r[0]) ||
                                (i[0] === r[0] && i[1] === t[0])) &&
                            ((s[0] = i[1]),
                                (s[2] = i[2]),
                                ((a[0] === t[1] && a[1] === r[1]) ||
                                    (a[0] === r[1] && a[1] === t[1])) &&
                                ((s[1] = a[1]), (s[3] = a[2]), s))
                        );
                    });
                    var r = [
                        "",
                        "C",
                        "CC",
                        "CCC",
                        "CD",
                        "D",
                        "DC",
                        "DCC",
                        "DCCC",
                        "CM",
                        "",
                        "X",
                        "XX",
                        "XXX",
                        "XL",
                        "L",
                        "LX",
                        "LXX",
                        "LXXX",
                        "XC",
                        "",
                        "I",
                        "II",
                        "III",
                        "IV",
                        "V",
                        "VI",
                        "VII",
                        "VIII",
                        "IX"
                    ];
                    return (
                        (e.toRoman = function (e, t) {
                            u(
                                Number.isInteger(e) && e > 0,
                                "The number should be a positive integer."
                            );

                            for (var n, i = []; e >= 1e3;)(e -= 1e3), i.push("M");

                            (n = (e / 100) | 0),
                            (e %= 100),
                            i.push(r[n]),
                                (n = (e / 10) | 0),
                                (e %= 10),
                                i.push(r[10 + n]),
                                i.push(r[20 + e]);
                            var a = i.join("");
                            return t ? a.toLowerCase() : a;
                        }),
                        (e.appendToArray = function (e, t) {
                            Array.prototype.push.apply(e, t);
                        }),
                        (e.prependToArray = function (e, t) {
                            Array.prototype.unshift.apply(e, t);
                        }),
                        (e.extendObj = function (e, t) {
                            for (var r in t) e[r] = t[r];
                        }),
                        (e.getInheritableProperty = function (e, t, r) {
                            for (; e && !e.has(t);) e = e.get("Parent");

                            return e ? (r ? e.getArray(t) : e.get(t)) : null;
                        }),
                        (e.inherit = function (e, t, r) {
                            for (var n in ((e.prototype = Object.create(t.prototype)),
                                    (e.prototype.constructor = e),
                                    r))
                                e.prototype[n] = r[n];
                        }),
                        (e.loadScript = function (e, t) {
                            var r = document.createElement("script"),
                                n = !1;
                            r.setAttribute("src", e),
                                t &&
                                (r.onload = function () {
                                    n || t(), (n = !0);
                                }),
                                document.getElementsByTagName("head")[0].appendChild(r);
                        }),
                        e
                    );
                })(),
                P = (function () {
                    function e(e, t, r, n, i, a) {
                        (this.viewBox = e),
                        (this.scale = t),
                        (this.rotation = r),
                        (this.offsetX = n),
                        (this.offsetY = i);
                        var s,
                            o,
                            l,
                            u,
                            c,
                            h,
                            d,
                            f,
                            p = (e[2] + e[0]) / 2,
                            m = (e[3] + e[1]) / 2;

                        switch ((r = (r %= 360) < 0 ? r + 360 : r)) {
                            case 180:
                                (s = -1), (o = 0), (l = 0), (u = 1);
                                break;

                            case 90:
                                (s = 0), (o = 1), (l = 1), (u = 0);
                                break;

                            case 270:
                                (s = 0), (o = -1), (l = -1), (u = 0);
                                break;

                            default:
                                (s = 1), (o = 0), (l = 0), (u = -1);
                        }

                        a && ((l = -l), (u = -u)),
                            0 === s ?
                            ((c = Math.abs(m - e[1]) * t + n),
                                (h = Math.abs(p - e[0]) * t + i),
                                (d = Math.abs(e[3] - e[1]) * t),
                                (f = Math.abs(e[2] - e[0]) * t)) :
                            ((c = Math.abs(p - e[0]) * t + n),
                                (h = Math.abs(m - e[1]) * t + i),
                                (d = Math.abs(e[2] - e[0]) * t),
                                (f = Math.abs(e[3] - e[1]) * t)),
                            (this.transform = [
                                s * t,
                                o * t,
                                l * t,
                                u * t,
                                c - s * t * p - l * t * m,
                                h - o * t * p - u * t * m
                            ]),
                            (this.width = d),
                            (this.height = f),
                            (this.fontScale = t);
                    }

                    return (
                        (e.prototype = {
                            clone: function (t) {
                                var r = "scale" in (t = t || {}) ? t.scale : this.scale,
                                    n = "rotation" in t ? t.rotation : this.rotation;
                                return new e(
                                    this.viewBox.slice(),
                                    r,
                                    n,
                                    this.offsetX,
                                    this.offsetY,
                                    t.dontFlip
                                );
                            },
                            convertToViewportPoint: function (e, t) {
                                return w.applyTransform([e, t], this.transform);
                            },
                            convertToViewportRectangle: function (e) {
                                var t = w.applyTransform([e[0], e[1]], this.transform),
                                    r = w.applyTransform([e[2], e[3]], this.transform);
                                return [t[0], t[1], r[0], r[1]];
                            },
                            convertToPdfPoint: function (e, t) {
                                return w.applyInverseTransform([e, t], this.transform);
                            }
                        }),
                        e
                    );
                })(),
                k = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    728,
                    711,
                    710,
                    729,
                    733,
                    731,
                    730,
                    732,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    8226,
                    8224,
                    8225,
                    8230,
                    8212,
                    8211,
                    402,
                    8260,
                    8249,
                    8250,
                    8722,
                    8240,
                    8222,
                    8220,
                    8221,
                    8216,
                    8217,
                    8218,
                    8482,
                    64257,
                    64258,
                    321,
                    338,
                    352,
                    376,
                    381,
                    305,
                    322,
                    339,
                    353,
                    382,
                    0,
                    8364
                ];

            function C() {
                var e = {};
                return (
                    (e.promise = new Promise(function (t, r) {
                        (e.resolve = t), (e.reject = r);
                    })),
                    e
                );
            }

            var R,
                x = function x(e, t) {
                    if ("undefined" != typeof Blob)
                        return new Blob([e], {
                            type: t
                        });
                    throw new Error('The "Blob" constructor is not supported.');
                },
                T =
                ((R =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
                    function (e, t) {
                        if (
                            !(
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2]
                            ) &&
                            URL.createObjectURL
                        ) {
                            var r = x(e, t);
                            return URL.createObjectURL(r);
                        }

                        for (
                            var n = "data:" + t + ";base64,", i = 0, a = e.length; i < a; i += 3
                        ) {
                            var s = 255 & e[i],
                                o = 255 & e[i + 1],
                                l = 255 & e[i + 2];
                            n +=
                                R[s >> 2] +
                                R[((3 & s) << 4) | (o >> 4)] +
                                R[i + 1 < a ? ((15 & o) << 2) | (l >> 6) : 64] +
                                R[i + 2 < a ? 63 & l : 64];
                        }

                        return n;
                    });

            function E(e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return e ?
                    new Promise(function (n, i) {
                        n(e.apply(r, t));
                    }) :
                    Promise.resolve(void 0);
            }

            function O(e) {
                if ("object" !== (void 0 === e ? "undefined" : n(e))) return e;

                switch (e.name) {
                    case "AbortException":
                        return new b(e.message);

                    case "MissingPDFException":
                        return new f(e.message);

                    case "UnexpectedResponseException":
                        return new p(e.message, e.status);

                    default:
                        return new h(e.message, e.details);
                }
            }

            function I(e, t, r) {
                t ? e.resolve() : e.reject(r);
            }

            function F(e, t, r) {
                var n = this;
                (this.sourceName = e),
                (this.targetName = t),
                (this.comObj = r),
                (this.callbackId = 1),
                (this.streamId = 1),
                (this.postMessageTransfers = !0),
                (this.streamSinks = Object.create(null)),
                (this.streamControllers = Object.create(null));
                var i = (this.callbacksCapabilities = Object.create(null)),
                    a = (this.actionHandler = Object.create(null));
                (this._onComObjOnMessage = function (e) {
                    var t = e.data;
                    if (t.targetName === n.sourceName)
                        if (t.stream) n._processStreamMessage(t);
                        else if (t.isReply) {
                        var s = t.callbackId;
                        if (!(t.callbackId in i))
                            throw new Error("Cannot resolve callback " + s);
                        var o = i[s];
                        delete i[s],
                            "error" in t ? o.reject(O(t.error)) : o.resolve(t.data);
                    } else {
                        if (!(t.action in a))
                            throw new Error("Unknown action from worker: " + t.action);
                        var l = a[t.action];

                        if (t.callbackId) {
                            var u = n.sourceName,
                                c = t.sourceName;
                            Promise.resolve()
                                .then(function () {
                                    return l[0].call(l[1], t.data);
                                })
                                .then(
                                    function (e) {
                                        r.postMessage({
                                            sourceName: u,
                                            targetName: c,
                                            isReply: !0,
                                            callbackId: t.callbackId,
                                            data: e
                                        });
                                    },
                                    function (e) {
                                        r.postMessage({
                                            sourceName: u,
                                            targetName: c,
                                            isReply: !0,
                                            callbackId: t.callbackId,
                                            error: (function (e) {
                                                return !(e instanceof Error) ||
                                                    e instanceof b ||
                                                    e instanceof f ||
                                                    e instanceof p ||
                                                    e instanceof h ?
                                                    e :
                                                    new h(e.message, e.toString());
                                            })(e)
                                        });
                                    }
                                );
                        } else
                            t.streamId ? n._createStreamSink(t) : l[0].call(l[1], t.data);
                    }
                }),
                r.addEventListener("message", this._onComObjOnMessage);
            }

            (F.prototype = {
                on: function (e, t, r) {
                    var n = this.actionHandler;
                    if (n[e])
                        throw new Error(
                            'There is already an actionName called "' + e + '"'
                        );
                    n[e] = [t, r];
                },
                send: function (e, t, r) {
                    var n = {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: e,
                        data: t
                    };
                    this.postMessage(n, r);
                },
                sendWithPromise: function (e, t, r) {
                    var n = this.callbackId++,
                        i = {
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: e,
                            data: t,
                            callbackId: n
                        },
                        a = C();
                    this.callbacksCapabilities[n] = a;

                    try {
                        this.postMessage(i, r);
                    } catch (e) {
                        a.reject(e);
                    }

                    return a.promise;
                },
                sendWithStream: function (e, t, r, n) {
                    var a = this,
                        s = this.streamId++,
                        o = this.sourceName,
                        l = this.targetName;
                    return new i.ReadableStream({
                            start: function (r) {
                                var n = C();
                                return (
                                    (a.streamControllers[s] = {
                                        controller: r,
                                        startCall: n,
                                        isClosed: !1
                                    }),
                                    a.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        action: e,
                                        streamId: s,
                                        data: t,
                                        desiredSize: r.desiredSize
                                    }),
                                    n.promise
                                );
                            },
                            pull: function (e) {
                                var t = C();
                                return (
                                    (a.streamControllers[s].pullCall = t),
                                    a.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        stream: "pull",
                                        streamId: s,
                                        desiredSize: e.desiredSize
                                    }),
                                    t.promise
                                );
                            },
                            cancel: function (e) {
                                var t = C();
                                return (
                                    (a.streamControllers[s].cancelCall = t),
                                    (a.streamControllers[s].isClosed = !0),
                                    a.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        stream: "cancel",
                                        reason: e,
                                        streamId: s
                                    }),
                                    t.promise
                                );
                            }
                        },
                        r
                    );
                },
                _createStreamSink: function (e) {
                    var t = this,
                        r = this,
                        n = this.actionHandler[e.action],
                        i = e.streamId,
                        a = e.desiredSize,
                        s = this.sourceName,
                        o = e.sourceName,
                        l = function l(e) {
                            var r = e.stream,
                                n = e.chunk,
                                a = e.transfers,
                                l = e.success,
                                u = e.reason;
                            t.postMessage({
                                    sourceName: s,
                                    targetName: o,
                                    stream: r,
                                    streamId: i,
                                    chunk: n,
                                    success: l,
                                    reason: u
                                },
                                a
                            );
                        },
                        u = {
                            enqueue: function (e) {
                                var t =
                                    arguments.length > 1 && void 0 !== arguments[1] ?
                                    arguments[1] :
                                    1,
                                    r = arguments[2];

                                if (!this.isCancelled) {
                                    var n = this.desiredSize;
                                    (this.desiredSize -= t),
                                    n > 0 &&
                                        this.desiredSize <= 0 &&
                                        ((this.sinkCapability = C()),
                                            (this.ready = this.sinkCapability.promise)),
                                        l({
                                            stream: "enqueue",
                                            chunk: e,
                                            transfers: r
                                        });
                                }
                            },
                            close: function () {
                                this.isCancelled ||
                                    ((this.isCancelled = !0),
                                        l({
                                            stream: "close"
                                        }),
                                        delete r.streamSinks[i]);
                            },
                            error: function (e) {
                                this.isCancelled ||
                                    ((this.isCancelled = !0),
                                        l({
                                            stream: "error",
                                            reason: e
                                        }));
                            },
                            sinkCapability: C(),
                            onPull: null,
                            onCancel: null,
                            isCancelled: !1,
                            desiredSize: a,
                            ready: null
                        };

                    u.sinkCapability.resolve(),
                        (u.ready = u.sinkCapability.promise),
                        (this.streamSinks[i] = u),
                        E(n[0], [e.data, u], n[1]).then(
                            function () {
                                l({
                                    stream: "start_complete",
                                    success: !0
                                });
                            },
                            function (e) {
                                l({
                                    stream: "start_complete",
                                    success: !1,
                                    reason: e
                                });
                            }
                        );
                },
                _processStreamMessage: function (e) {
                    var t = this,
                        r = this.sourceName,
                        n = e.sourceName,
                        i = e.streamId,
                        a = function a(e) {
                            var a = e.stream,
                                s = e.success,
                                o = e.reason;
                            t.comObj.postMessage({
                                sourceName: r,
                                targetName: n,
                                stream: a,
                                success: s,
                                streamId: i,
                                reason: o
                            });
                        },
                        s = function s() {
                            Promise.all(
                                [
                                    t.streamControllers[e.streamId].startCall,
                                    t.streamControllers[e.streamId].pullCall,
                                    t.streamControllers[e.streamId].cancelCall
                                ].map(function (e) {
                                    return (
                                        e &&
                                        ((t = e.promise), Promise.resolve(t).catch(function () {}))
                                    );
                                    var t;
                                })
                            ).then(function () {
                                delete t.streamControllers[e.streamId];
                            });
                        };

                    switch (e.stream) {
                        case "start_complete":
                            I(
                                this.streamControllers[e.streamId].startCall,
                                e.success,
                                O(e.reason)
                            );
                            break;

                        case "pull_complete":
                            I(
                                this.streamControllers[e.streamId].pullCall,
                                e.success,
                                O(e.reason)
                            );
                            break;

                        case "pull":
                            if (!this.streamSinks[e.streamId]) {
                                a({
                                    stream: "pull_complete",
                                    success: !0
                                });
                                break;
                            }

                            this.streamSinks[e.streamId].desiredSize <= 0 &&
                                e.desiredSize > 0 &&
                                this.streamSinks[e.streamId].sinkCapability.resolve(),
                                (this.streamSinks[e.streamId].desiredSize = e.desiredSize),
                                E(this.streamSinks[e.streamId].onPull).then(
                                    function () {
                                        a({
                                            stream: "pull_complete",
                                            success: !0
                                        });
                                    },
                                    function (e) {
                                        a({
                                            stream: "pull_complete",
                                            success: !1,
                                            reason: e
                                        });
                                    }
                                );
                            break;

                        case "enqueue":
                            u(
                                    this.streamControllers[e.streamId],
                                    "enqueue should have stream controller"
                                ),
                                this.streamControllers[e.streamId].isClosed ||
                                this.streamControllers[e.streamId].controller.enqueue(
                                    e.chunk
                                );
                            break;

                        case "close":
                            if (
                                (u(
                                        this.streamControllers[e.streamId],
                                        "close should have stream controller"
                                    ),
                                    this.streamControllers[e.streamId].isClosed)
                            )
                                break;
                            (this.streamControllers[e.streamId].isClosed = !0),
                            this.streamControllers[e.streamId].controller.close(),
                                s();
                            break;

                        case "error":
                            u(
                                    this.streamControllers[e.streamId],
                                    "error should have stream controller"
                                ),
                                this.streamControllers[e.streamId].controller.error(
                                    O(e.reason)
                                ),
                                s();
                            break;

                        case "cancel_complete":
                            I(
                                    this.streamControllers[e.streamId].cancelCall,
                                    e.success,
                                    O(e.reason)
                                ),
                                s();
                            break;

                        case "cancel":
                            if (!this.streamSinks[e.streamId]) break;
                            E(this.streamSinks[e.streamId].onCancel, [O(e.reason)]).then(
                                    function () {
                                        a({
                                            stream: "cancel_complete",
                                            success: !0
                                        });
                                    },
                                    function (e) {
                                        a({
                                            stream: "cancel_complete",
                                            success: !1,
                                            reason: e
                                        });
                                    }
                                ),
                                this.streamSinks[e.streamId].sinkCapability.reject(O(e.reason)),
                                (this.streamSinks[e.streamId].isCancelled = !0),
                                delete this.streamSinks[e.streamId];
                            break;

                        default:
                            throw new Error("Unexpected stream case");
                    }
                },
                postMessage: function (e, t) {
                    t && this.postMessageTransfers ?
                        this.comObj.postMessage(e, t) :
                        this.comObj.postMessage(e);
                },
                destroy: function () {
                    this.comObj.removeEventListener("message", this._onComObjOnMessage);
                }
            }),
            (t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]),
            (t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]),
            (t.OPS = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotations: 78,
                endAnnotations: 79,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintJpegXObject: 82,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
            }),
            (t.VerbosityLevel = a),
            (t.UNSUPPORTED_FEATURES = {
                unknown: "unknown",
                forms: "forms",
                javaScript: "javaScript",
                smask: "smask",
                shadingPattern: "shadingPattern",
                font: "font"
            }),
            (t.AnnotationBorderStyleType = {
                SOLID: 1,
                DASHED: 2,
                BEVELED: 3,
                INSET: 4,
                UNDERLINE: 5
            }),
            (t.AnnotationFieldFlag = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
            }),
            (t.AnnotationFlag = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
            }),
            (t.AnnotationType = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
            }),
            (t.FontType = {
                UNKNOWN: 0,
                TYPE1: 1,
                TYPE1C: 2,
                CIDFONTTYPE0: 3,
                CIDFONTTYPE0C: 4,
                TRUETYPE: 5,
                CIDFONTTYPE2: 6,
                TYPE3: 7,
                OPENTYPE: 8,
                TYPE0: 9,
                MMTYPE1: 10
            }),
            (t.ImageKind = {
                GRAYSCALE_1BPP: 1,
                RGB_24BPP: 2,
                RGBA_32BPP: 3
            }),
            (t.CMapCompressionType = {
                NONE: 0,
                BINARY: 1,
                STREAM: 2
            }),
            (t.AbortException = b),
            (t.InvalidPDFException = d),
            (t.MessageHandler = F),
            (t.MissingDataException = v),
            (t.MissingPDFException = f),
            (t.NativeImageDecoding = {
                NONE: "none",
                DECODE: "decode",
                DISPLAY: "display"
            }),
            (t.NotImplementedException = m),
            (t.PageViewport = P),
            (t.PasswordException = c),
            (t.PasswordResponses = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
            }),
            (t.StreamType = {
                UNKNOWN: 0,
                FLATE: 1,
                LZW: 2,
                DCT: 3,
                JPX: 4,
                JBIG: 5,
                A85: 6,
                AHX: 7,
                CCF: 8,
                RL: 9
            }),
            (t.TextRenderingMode = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
            }),
            (t.UnexpectedResponseException = p),
            (t.UnknownErrorException = h),
            (t.Util = w),
            (t.XRefParseException = g),
            (t.FormatError = _),
            (t.arrayByteLength = S),
            (t.arraysToBytes = function (e) {
                if (1 === e.length && e[0] instanceof Uint8Array) return e[0];
                var t,
                    r,
                    n,
                    i = 0,
                    a = e.length;

                for (t = 0; t < a; t++) i += n = S((r = e[t]));

                var s = 0,
                    o = new Uint8Array(i);

                for (t = 0; t < a; t++)
                    (r = e[t]) instanceof Uint8Array ||
                    (r = "string" == typeof r ? A(r) : new Uint8Array(r)),
                    (n = r.byteLength),
                    o.set(r, s),
                    (s += n);

                return o;
            }),
            (t.assert = u),
            (t.bytesToString = function (e) {
                u(
                    null !== e &&
                    "object" === (void 0 === e ? "undefined" : n(e)) &&
                    void 0 !== e.length,
                    "Invalid argument for bytesToString"
                );
                var t = e.length;
                if (t < 8192) return String.fromCharCode.apply(null, e);

                for (var r = [], i = 0; i < t; i += 8192) {
                    var a = Math.min(i + 8192, t),
                        s = e.subarray(i, a);
                    r.push(String.fromCharCode.apply(null, s));
                }

                return r.join("");
            }),
            (t.createBlob = x),
            (t.createPromiseCapability = C),
            (t.createObjectURL = T),
            (t.deprecated = function (e) {
                console.log("Deprecated API usage: " + e);
            }),
            (t.getLookupTableFactory = function (e) {
                var t;
                return function () {
                    return e && ((t = Object.create(null)), e(t), (e = null)), t;
                };
            }),
            (t.getVerbosityLevel = function () {
                return s;
            }),
            (t.info = function (e) {
                s >= a.INFOS && console.log("Info: " + e);
            }),
            (t.isArrayBuffer = function (e) {
                return (
                    "object" === (void 0 === e ? "undefined" : n(e)) &&
                    null !== e &&
                    void 0 !== e.byteLength
                );
            }),
            (t.isBool = function (e) {
                return "boolean" == typeof e;
            }),
            (t.isEmptyObj = function (e) {
                for (var t in e) return !1;

                return !0;
            }),
            (t.isNum = function (e) {
                return "number" == typeof e;
            }),
            (t.isString = function (e) {
                return "string" == typeof e;
            }),
            (t.isSpace = function (e) {
                return 32 === e || 9 === e || 13 === e || 10 === e;
            }),
            (t.isSameOrigin = function (e, t) {
                try {
                    var r = new URL(e);
                    if (!r.origin || "null" === r.origin) return !1;
                } catch (e) {
                    return !1;
                }

                var n = new URL(t, r);
                return r.origin === n.origin;
            }),
            (t.createValidAbsoluteUrl = function (e, t) {
                if (!e) return null;

                try {
                    var r = t ? new URL(e, t) : new URL(e);
                    if (
                        (function (e) {
                            if (!e) return !1;

                            switch (e.protocol) {
                                case "http:":
                                case "https:":
                                case "ftp:":
                                case "mailto:":
                                case "tel:":
                                    return !0;

                                default:
                                    return !1;
                            }
                        })(r)
                    )
                        return r;
                } catch (e) {}

                return null;
            }),
            (t.isLittleEndian = function () {
                var e = new Uint8Array(4);
                return (e[0] = 1), 1 === new Uint32Array(e.buffer, 0, 1)[0];
            }),
            (t.isEvalSupported = function () {
                try {
                    return new Function(""), !0;
                } catch (e) {
                    return !1;
                }
            }),
            (t.log2 = function (e) {
                return e <= 0 ? 0 : Math.ceil(Math.log2(e));
            }),
            (t.readInt8 = function (e, t) {
                return (e[t] << 24) >> 24;
            }),
            (t.readUint16 = function (e, t) {
                return (e[t] << 8) | e[t + 1];
            }),
            (t.readUint32 = function (e, t) {
                return (
                    ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
                );
            }),
            (t.removeNullCharacters = function (e) {
                return "string" != typeof e ?
                    (o("The argument for removeNullCharacters must be a string."), e) :
                    e.replace(y, "");
            }),
            (t.ReadableStream = i.ReadableStream),
            (t.setVerbosityLevel = function (e) {
                Number.isInteger(e) && (s = e);
            }),
            (t.shadow = function (e, t, r) {
                return (
                    Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !1
                    }),
                    r
                );
            }),
            (t.string32 = function (e) {
                return String.fromCharCode(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    255 & e
                );
            }),
            (t.stringToBytes = A),
            (t.stringToPDFString = function (e) {
                var t,
                    r = e.length,
                    n = [];
                if ("þ" === e[0] && "ÿ" === e[1])
                    for (t = 2; t < r; t += 2)
                        n.push(
                            String.fromCharCode(
                                (e.charCodeAt(t) << 8) | e.charCodeAt(t + 1)
                            )
                        );
                else
                    for (t = 0; t < r; ++t) {
                        var i = k[e.charCodeAt(t)];
                        n.push(i ? String.fromCharCode(i) : e.charAt(t));
                    }
                return n.join("");
            }),
            (t.stringToUTF8String = function (e) {
                return decodeURIComponent(escape(e));
            }),
            (t.utf8StringToString = function (e) {
                return unescape(encodeURIComponent(e));
            }),
            (t.warn = o),
            (t.unreachable = l);
        },
        function (e, t, r) {
            "use strict";

            var n = r(43)("wks"),
                i = r(20),
                a = r(4).Symbol,
                s = "function" == typeof a;
            (e.exports = function (e) {
                return n[e] || (n[e] = (s && a[e]) || (s ? a : i)("Symbol." + e));
            }).store = n;
        },
        function (e, t, r) {
            "use strict";

            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                };

            e.exports = function (e) {
                return "object" === (void 0 === e ? "undefined" : n(e)) ?
                    null !== e :
                    "function" == typeof e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = r(5),
                a = r(11),
                s = r(8),
                o = r(9),
                l = function e(t, r, l) {
                    var u,
                        c,
                        h,
                        d,
                        f = t & e.F,
                        p = t & e.G,
                        m = t & e.P,
                        v = t & e.B,
                        g = p ? n : t & e.S ? n[r] || (n[r] = {}) : (n[r] || {}).prototype,
                        _ = p ? i : i[r] || (i[r] = {}),
                        b = _.prototype || (_.prototype = {});

                    for (u in (p && (l = r), l))
                        (h = ((c = !f && g && void 0 !== g[u]) ? g : l)[u]),
                        (d =
                            v && c ?
                            o(h, n) :
                            m && "function" == typeof h ?
                            o(Function.call, h) :
                            h),
                        g && s(g, u, h, t & e.U),
                        _[u] != h && a(_, u, d),
                        m && b[u] != h && (b[u] = h);
                };

            (n.core = i),
            (l.F = 1),
            (l.G = 2),
            (l.S = 4),
            (l.P = 8),
            (l.B = 16),
            (l.W = 32),
            (l.U = 64),
            (l.R = 128),
            (e.exports = l);
        },
        function (e, t, r) {
            "use strict";

            var n = (e.exports =
                "undefined" != typeof window && window.Math == Math ?
                window :
                "undefined" != typeof self && self.Math == Math ?
                self :
                Function("return this")());
            "number" == typeof __g && (__g = n);
        },
        function (e, t, r) {
            "use strict";

            var n = (e.exports = {
                version: "2.5.3"
            });
            "number" == typeof __e && (__e = n);
        },
        function (e, t, r) {
            "use strict";

            var n = r(2);

            e.exports = function (e) {
                if (!n(e)) throw TypeError(e + " is not an object!");
                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = {}.hasOwnProperty;

            e.exports = function (e, t) {
                return n.call(e, t);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = r(11),
                a = r(7),
                s = r(20)("src"),
                o = Function.toString,
                l = ("" + o).split("toString");
            (r(5).inspectSource = function (e) {
                return o.call(e);
            }),
            (e.exports = function (e, t, r, o) {
                var u = "function" == typeof r;
                u && (a(r, "name") || i(r, "name", t)),
                    e[t] !== r &&
                    (u && (a(r, s) || i(r, s, e[t] ? "" + e[t] : l.join(String(t)))),
                        e === n ?
                        (e[t] = r) :
                        o ?
                        e[t] ?
                        (e[t] = r) :
                        i(e, t, r) :
                        (delete e[t], i(e, t, r)));
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && this[s]) || o.call(this);
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(17);

            e.exports = function (e, t, r) {
                if ((n(e), void 0 === t)) return e;

                switch (r) {
                    case 1:
                        return function (r) {
                            return e.call(t, r);
                        };

                    case 2:
                        return function (r, n) {
                            return e.call(t, r, n);
                        };

                    case 3:
                        return function (r, n, i) {
                            return e.call(t, r, n, i);
                        };
                }

                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.DummyStatTimer = t.StatTimer = t.SimpleXMLParser = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.getDefaultSetting = t.LinkTarget = t.getFilenameFromUrl = t.addLinkAttributes = t.RenderingCancelledException = void 0);

            var n,
                i = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                a = r(0),
                s = r(15),
                o =
                (n = s) && n.__esModule ?
                n :
                {
                    default: n
                };

            function l(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }

            var u = "noopener noreferrer nofollow",
                c = "http://www.w3.org/2000/svg",
                h = (function () {
                    function e() {
                        l(this, e);
                    }

                    return (
                        i(e, [{
                                key: "create",
                                value: function (e, t) {
                                    if (e <= 0 || t <= 0) throw new Error("invalid canvas size");
                                    var r = document.createElement("canvas"),
                                        n = r.getContext("2d");
                                    return (
                                        (r.width = e),
                                        (r.height = t), {
                                            canvas: r,
                                            context: n
                                        }
                                    );
                                }
                            },
                            {
                                key: "reset",
                                value: function (e, t, r) {
                                    if (!e.canvas) throw new Error("canvas is not specified");
                                    if (t <= 0 || r <= 0) throw new Error("invalid canvas size");
                                    (e.canvas.width = t), (e.canvas.height = r);
                                }
                            },
                            {
                                key: "destroy",
                                value: function (e) {
                                    if (!e.canvas) throw new Error("canvas is not specified");
                                    (e.canvas.width = 0),
                                    (e.canvas.height = 0),
                                    (e.canvas = null),
                                    (e.context = null);
                                }
                            }
                        ]),
                        e
                    );
                })(),
                d = (function () {
                    function e(t) {
                        var r = t.baseUrl,
                            n = void 0 === r ? null : r,
                            i = t.isCompressed,
                            a = void 0 !== i && i;
                        l(this, e), (this.baseUrl = n), (this.isCompressed = a);
                    }

                    return (
                        i(e, [{
                            key: "fetch",
                            value: function (e) {
                                var t = this,
                                    r = e.name;
                                return this.baseUrl ?
                                    r ?
                                    new Promise(function (e, n) {
                                        var i =
                                            t.baseUrl + r + (t.isCompressed ? ".bcmap" : ""),
                                            s = new XMLHttpRequest();
                                        s.open("GET", i, !0),
                                            t.isCompressed && (s.responseType = "arraybuffer"),
                                            (s.onreadystatechange = function () {
                                                if (s.readyState === XMLHttpRequest.DONE) {
                                                    if (200 === s.status || 0 === s.status) {
                                                        var r = void 0;
                                                        if (
                                                            (t.isCompressed && s.response ?
                                                                (r = new Uint8Array(s.response)) :
                                                                !t.isCompressed &&
                                                                s.responseText &&
                                                                (r = (0, a.stringToBytes)(
                                                                    s.responseText
                                                                )),
                                                                r)
                                                        )
                                                            return void e({
                                                                cMapData: r,
                                                                compressionType: t.isCompressed ?
                                                                    a.CMapCompressionType.BINARY :
                                                                    a.CMapCompressionType.NONE
                                                            });
                                                    }

                                                    n(
                                                        new Error(
                                                            "Unable to load " +
                                                            (t.isCompressed ? "binary " : "") +
                                                            "CMap at: " +
                                                            i
                                                        )
                                                    );
                                                }
                                            }),
                                            s.send(null);
                                    }) :
                                    Promise.reject(
                                        new Error("CMap name must be specified.")
                                    ) :
                                    Promise.reject(
                                        new Error(
                                            'CMap baseUrl must be specified, see "PDFJS.cMapUrl" (and also "PDFJS.cMapPacked").'
                                        )
                                    );
                            }
                        }]),
                        e
                    );
                })(),
                f = (function () {
                    function e() {
                        l(this, e);
                    }

                    return (
                        i(e, [{
                                key: "create",
                                value: function (e, t) {
                                    (0, a.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
                                    var r = document.createElementNS(c, "svg:svg");
                                    return (
                                        r.setAttribute("version", "1.1"),
                                        r.setAttribute("width", e + "px"),
                                        r.setAttribute("height", t + "px"),
                                        r.setAttribute("preserveAspectRatio", "none"),
                                        r.setAttribute("viewBox", "0 0 " + e + " " + t),
                                        r
                                    );
                                }
                            },
                            {
                                key: "createElement",
                                value: function (e) {
                                    return (
                                        (0, a.assert)(
                                            "string" == typeof e,
                                            "Invalid SVG element type"
                                        ),
                                        document.createElementNS(c, e)
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(),
                p = (function () {
                    function e(t, r) {
                        l(this, e),
                            (this.nodeName = t),
                            (this.nodeValue = r),
                            Object.defineProperty(this, "parentNode", {
                                value: null,
                                writable: !0
                            });
                    }

                    return (
                        i(e, [{
                                key: "hasChildNodes",
                                value: function () {
                                    return this.childNodes && this.childNodes.length > 0;
                                }
                            },
                            {
                                key: "firstChild",
                                get: function () {
                                    return this.childNodes[0];
                                }
                            },
                            {
                                key: "nextSibling",
                                get: function () {
                                    var e = this.parentNode.childNodes.indexOf(this);
                                    return this.parentNode.childNodes[e + 1];
                                }
                            },
                            {
                                key: "textContent",
                                get: function () {
                                    return this.childNodes ?
                                        this.childNodes
                                        .map(function (e) {
                                            return e.textContent;
                                        })
                                        .join("") :
                                        this.nodeValue || "";
                                }
                            }
                        ]),
                        e
                    );
                })(),
                m = (function () {
                    function e() {
                        l(this, e);
                    }

                    return (
                        i(e, [{
                                key: "parseFromString",
                                value: function (e) {
                                    var t = this,
                                        r = [];
                                    e = (e = (e = (e = e
                                            .replace(/<\?[\s\S]*?\?>|<!--[\s\S]*?-->/g, "")
                                            .trim())
                                        .replace(/<!DOCTYPE[^>\[]+(\[[^\]]+)?[^>]+>/g, "")
                                        .trim()).replace(/>([^<][\s\S]*?)</g, function (e, n) {
                                        var i = r.length,
                                            a = new p("#text", t._decodeXML(n));
                                        return (
                                            r.push(a),
                                            0 === a.textContent.trim().length ? "><" : ">" + i + ",<"
                                        );
                                    })).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, function (e, t) {
                                        var n = r.length,
                                            i = new p("#text", t);
                                        return r.push(i), n + ",";
                                    });
                                    var n = /<([\w\:]+)((?:[\s\w:=]|'[^']*'|"[^"]*")*)(?:\/>|>([\d,]*)<\/[^>]+>)/g,
                                        i = void 0;

                                    do {
                                        (i = r.length),
                                        (e = e.replace(n, function (e, t, n, i) {
                                            var a = r.length,
                                                s = new p(t),
                                                o = [];
                                            return (
                                                i &&
                                                ((i = i.split(",")).pop(),
                                                    i.forEach(function (e) {
                                                        var t = r[+e];
                                                        (t.parentNode = s), o.push(t);
                                                    })),
                                                (s.childNodes = o),
                                                r.push(s),
                                                a + ","
                                            );
                                        }));
                                    } while (i < r.length);

                                    return {
                                        documentElement: r.pop()
                                    };
                                }
                            },
                            {
                                key: "_decodeXML",
                                value: function (e) {
                                    return e.includes("&") ?
                                        e.replace(/&(#(x[0-9a-f]+|\d+)|\w+);/gi, function (
                                            e,
                                            t,
                                            r
                                        ) {
                                            if (r)
                                                return (
                                                    (r =
                                                        "x" === r[0] ? parseInt(r.substring(1), 16) : +r),
                                                    String.fromCharCode(r)
                                                );

                                            switch (t) {
                                                case "amp":
                                                    return "&";

                                                case "lt":
                                                    return "<";

                                                case "gt":
                                                    return ">";

                                                case "quot":
                                                    return '"';

                                                case "apos":
                                                    return "'";
                                            }

                                            return "&" + t + ";";
                                        }) :
                                        e;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                v = (function () {
                    function e(e, t) {
                        (this.message = e), (this.type = t);
                    }

                    return (
                        (e.prototype = new Error()),
                        (e.prototype.name = "RenderingCancelledException"),
                        (e.constructor = e),
                        e
                    );
                })(),
                g = {
                    NONE: 0,
                    SELF: 1,
                    BLANK: 2,
                    PARENT: 3,
                    TOP: 4
                },
                _ = ["", "_self", "_blank", "_parent", "_top"];

            var b = (function () {
                    function e() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                            arguments[0];
                        l(this, e),
                            (this.enabled = !!t),
                            (this.started = Object.create(null)),
                            (this.times = []);
                    }

                    return (
                        i(e, [{
                                key: "time",
                                value: function (e) {
                                    this.enabled &&
                                        (e in this.started &&
                                            (0, a.warn)("Timer is already running for " + e),
                                            (this.started[e] = Date.now()));
                                }
                            },
                            {
                                key: "timeEnd",
                                value: function (e) {
                                    this.enabled &&
                                        (e in this.started ||
                                            (0, a.warn)("Timer has not been started for " + e),
                                            this.times.push({
                                                name: e,
                                                start: this.started[e],
                                                end: Date.now()
                                            }),
                                            delete this.started[e]);
                                }
                            },
                            {
                                key: "toString",
                                value: function () {
                                    for (
                                        var e = this.times, t = "", r = 0, n = 0, i = e.length; n < i;
                                        ++n
                                    ) {
                                        var a = e[n].name;
                                        a.length > r && (r = a.length);
                                    }

                                    for (var s = 0, o = e.length; s < o; ++s) {
                                        var l = e[s],
                                            u = l.end - l.start;
                                        t += l.name.padEnd(r) + " " + u + "ms\n";
                                    }

                                    return t;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                y = (function () {
                    function e() {
                        l(this, e), (0, a.unreachable)("Cannot initialize DummyStatTimer.");
                    }

                    return (
                        i(e, null, [{
                                key: "time",
                                value: function (e) {}
                            },
                            {
                                key: "timeEnd",
                                value: function (e) {}
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return "";
                                }
                            }
                        ]),
                        e
                    );
                })();

            (t.RenderingCancelledException = v),
            (t.addLinkAttributes = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1] ?
                    arguments[1] :
                    {},
                    r = t.url,
                    n = t.target,
                    i = t.rel;

                if (
                    ((e.href = e.title = r ? (0, a.removeNullCharacters)(r) : ""), r)
                ) {
                    var s = Object.values(g).includes(n) ? n : g.NONE;
                    (e.target = _[s]), (e.rel = "string" == typeof i ? i : u);
                }
            }),
            (t.getFilenameFromUrl = function (e) {
                var t = e.indexOf("#"),
                    r = e.indexOf("?"),
                    n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
                return e.substring(e.lastIndexOf("/", n) + 1, n);
            }),
            (t.LinkTarget = g),
            (t.getDefaultSetting = function (e) {
                var t = o.default.PDFJS;

                switch (e) {
                    case "pdfBug":
                        return !!t && t.pdfBug;

                    case "disableAutoFetch":
                        return !!t && t.disableAutoFetch;

                    case "disableStream":
                        return !!t && t.disableStream;

                    case "disableRange":
                        return !!t && t.disableRange;

                    case "disableFontFace":
                        return !!t && t.disableFontFace;

                    case "disableCreateObjectURL":
                        return !!t && t.disableCreateObjectURL;

                    case "cMapUrl":
                        return t ? t.cMapUrl : null;

                    case "cMapPacked":
                        return !!t && t.cMapPacked;

                    case "maxImageSize":
                        return t ? t.maxImageSize : -1;

                    case "isEvalSupported":
                        return !t || t.isEvalSupported;

                    default:
                        throw new Error("Unknown default setting: " + e);
                }
            }),
            (t.DEFAULT_LINK_REL = u),
            (t.DOMCanvasFactory = h),
            (t.DOMCMapReaderFactory = d),
            (t.DOMSVGFactory = f),
            (t.SimpleXMLParser = m),
            (t.StatTimer = b),
            (t.DummyStatTimer = y);
        },
        function (e, t, r) {
            "use strict";

            var n = r(16),
                i = r(27);
            e.exports = r(12) ?
                function (e, t, r) {
                    return n.f(e, t, i(1, r));
                } :
                function (e, t, r) {
                    return (e[t] = r), e;
                };
        },
        function (e, t, r) {
            "use strict";

            e.exports = !r(13)(function () {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function () {
                            return 7;
                        }
                    }).a
                );
            });
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function (e, t, r) {
            "use strict";

            var n = {}.toString;

            e.exports = function (e) {
                return n.call(e).slice(8, -1);
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports =
                "undefined" != typeof window && window.Math === Math ?
                window :
                "undefined" != typeof global && global.Math === Math ?
                global :
                "undefined" != typeof self && self.Math === Math ?
                self :
                {};
        },
        function (e, t, r) {
            "use strict";

            var n = r(6),
                i = r(41),
                a = r(42),
                s = Object.defineProperty;
            t.f = r(12) ?
                Object.defineProperty :
                function (e, t, r) {
                    if ((n(e), (t = a(t, !0)), n(r), i))
                        try {
                            return s(e, t, r);
                        } catch (e) {}
                    if ("get" in r || "set" in r)
                        throw TypeError("Accessors not supported!");
                    return "value" in r && (e[t] = r.value), e;
                };
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(28),
                i = r(21);

            e.exports = function (e) {
                return n(i(e));
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = {};
        },
        function (e, t, r) {
            "use strict";

            var n = 0,
                i = Math.random();

            e.exports = function (e) {
                return "Symbol(".concat(
                    void 0 === e ? "" : e,
                    ")_",
                    (++n + i).toString(36)
                );
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(87),
                i = r(49);

            e.exports =
                Object.keys ||
                function (e) {
                    return n(e, i);
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(16).f,
                i = r(7),
                a = r(1)("toStringTag");

            e.exports = function (e, t, r) {
                e &&
                    !i((e = r ? e : e.prototype), a) &&
                    n(e, a, {
                        configurable: !0,
                        value: t
                    });
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(9),
                i = r(92),
                a = r(93),
                s = r(6),
                o = r(29),
                l = r(94),
                u = {},
                c = {},
                h = (e.exports = function (e, t, r, h, d) {
                    var f,
                        p,
                        m,
                        v,
                        g = d ?
                        function () {
                            return e;
                        } :
                        l(e),
                        _ = n(r, h, t ? 2 : 1),
                        b = 0;

                    if ("function" != typeof g) throw TypeError(e + " is not iterable!");

                    if (a(g)) {
                        for (f = o(e.length); f > b; b++)
                            if (
                                (v = t ? _(s((p = e[b]))[0], p[1]) : _(e[b])) === u ||
                                v === c
                            )
                                return v;
                    } else
                        for (m = g.call(e); !(p = m.next()).done;)
                            if ((v = i(m, _, p.value, t)) === u || v === c) return v;
                });

            (h.BREAK = u), (h.RETURN = c);
        },
        function (e, t, r) {
            "use strict";

            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                };

            e.exports = function () {
                return (
                    "object" ===
                    ("undefined" == typeof process ? "undefined" : n(process)) &&
                    process + "" == "[object process]"
                );
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = r(4).document,
                a = n(i) && n(i.createElement);

            e.exports = function (e) {
                return a ? i.createElement(e) : {};
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(14);
            e.exports = Object("z").propertyIsEnumerable(0) ?
                Object :
                function (e) {
                    return "String" == n(e) ? e.split("") : Object(e);
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(30),
                i = Math.min;

            e.exports = function (e) {
                return e > 0 ? i(n(e), 9007199254740991) : 0;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = Math.ceil,
                i = Math.floor;

            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(14),
                i = r(1)("toStringTag"),
                a =
                "Arguments" ==
                n(
                    (function () {
                        return arguments;
                    })()
                );

            e.exports = function (e) {
                var t, r, s;
                return void 0 === e ?
                    "Undefined" :
                    null === e ?
                    "Null" :
                    "string" ==
                    typeof (r = (function (e, t) {
                        try {
                            return e[t];
                        } catch (e) {}
                    })((t = Object(e)), i)) ?
                    r :
                    a ?
                    n(t) :
                    "Object" == (s = n(t)) && "function" == typeof t.callee ?
                    "Arguments" :
                    s;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(43)("keys"),
                i = r(20);

            e.exports = function (e) {
                return n[e] || (n[e] = i(e));
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(21);

            e.exports = function (e) {
                return Object(n(e));
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e, t, r, n) {
                if (!(e instanceof t) || (void 0 !== n && n in e))
                    throw TypeError(r + ": incorrect invocation!");
                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(17);

            e.exports.f = function (e) {
                return new(function (e) {
                    var t, r;
                    (this.promise = new e(function (e, n) {
                        if (void 0 !== t || void 0 !== r)
                            throw TypeError("Bad Promise constructor");
                        (t = e), (r = n);
                    })),
                    (this.resolve = n(t)),
                    (this.reject = n(r));
                })(e);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(8);

            e.exports = function (e, t, r) {
                for (var i in t) n(e, i, t[i], r);

                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                },
                i = r(20)("meta"),
                a = r(2),
                s = r(7),
                o = r(16).f,
                l = 0,
                u =
                Object.isExtensible ||
                function () {
                    return !0;
                },
                c = !r(13)(function () {
                    return u(Object.preventExtensions({}));
                }),
                h = function h(e) {
                    o(e, i, {
                        value: {
                            i: "O" + ++l,
                            w: {}
                        }
                    });
                },
                d = (e.exports = {
                    KEY: i,
                    NEED: !1,
                    fastKey: function (e, t) {
                        if (!a(e))
                            return "symbol" == (void 0 === e ? "undefined" : n(e)) ?
                                e :
                                ("string" == typeof e ? "S" : "P") + e;

                        if (!s(e, i)) {
                            if (!u(e)) return "F";
                            if (!t) return "E";
                            h(e);
                        }

                        return e[i].i;
                    },
                    getWeak: function (e, t) {
                        if (!s(e, i)) {
                            if (!u(e)) return !0;
                            if (!t) return !1;
                            h(e);
                        }

                        return e[i].w;
                    },
                    onFreeze: function (e) {
                        return c && d.NEED && u(e) && !s(e, i) && h(e), e;
                    }
                });
        },
        function (e, t, r) {
            "use strict";

            t.f = {}.propertyIsEnumerable;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.create(null);
            (n.workerPort = void 0 === n.workerPort ? null : n.workerPort),
            (n.workerSrc = void 0 === n.workerSrc ? "" : n.workerSrc),
            (t.GlobalWorkerOptions = n);
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.validateResponseStatus = t.validateRangeRequestCapabilities = t.extractFilenameFromHeader = t.createResponseStatusError = void 0);
            var n = r(0),
                i = r(128);
            (t.createResponseStatusError = function (e, t) {
                return 404 === e || (0 === e && /^file:/.test(t)) ?
                    new n.MissingPDFException('Missing PDF "' + t + '".') :
                    new n.UnexpectedResponseException(
                        "Unexpected server response (" +
                        e +
                        ') while retrieving PDF "' +
                        t +
                        '".',
                        e
                    );
            }),
            (t.extractFilenameFromHeader = function (e) {
                var t = e("Content-Disposition");

                if (t) {
                    var r = (0, i.getFilenameFromContentDispositionHeader)(t);
                    if (/\.pdf$/i.test(r)) return r;
                }

                return null;
            }),
            (t.validateRangeRequestCapabilities = function (e) {
                var t = e.getResponseHeader,
                    r = e.isHttp,
                    i = e.rangeChunkSize,
                    a = e.disableRange;
                (0, n.assert)(i > 0, "Range chunk size must be larger than zero");
                var s = {
                    allowRangeRequests: !1,
                    suggestedLength: void 0
                };
                if (a || !r) return s;
                if ("bytes" !== t("Accept-Ranges")) return s;
                if ("identity" !== (t("Content-Encoding") || "identity")) return s;
                var o = parseInt(t("Content-Length"), 10);
                return Number.isInteger(o) ?
                    ((s.suggestedLength = o),
                        o <= 2 * i ? s : ((s.allowRangeRequests = !0), s)) :
                    s;
            }),
            (t.validateResponseStatus = function (e) {
                return 200 === e || 206 === e;
            });
        },
        function (e, t, r) {
            "use strict";

            e.exports = !r(12) &&
                !r(13)(function () {
                    return (
                        7 !=
                        Object.defineProperty(r(26)("div"), "a", {
                            get: function () {
                                return 7;
                            }
                        }).a
                    );
                });
        },
        function (e, t, r) {
            "use strict";

            var n = r(2);

            e.exports = function (e, t) {
                if (!n(e)) return e;
                var r, i;
                if (t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
                    return i;
                if ("function" == typeof (r = e.valueOf) && !n((i = r.call(e))))
                    return i;
                if (!t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
                    return i;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});

            e.exports = function (e) {
                return i[e] || (i[e] = {});
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(18),
                i = r(29),
                a = r(73);

            e.exports = function (e) {
                return function (t, r, s) {
                    var o,
                        l = n(t),
                        u = i(l.length),
                        c = a(s, u);

                    if (e && r != r) {
                        for (; u > c;)
                            if ((o = l[c++]) != o) return !0;
                    } else
                        for (; u > c; c++)
                            if ((e || c in l) && l[c] === r) return e || c || 0;

                    return !e && -1;
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(1)("unscopables"),
                i = Array.prototype;
            void 0 == i[n] && r(11)(i, n, {}),
                (e.exports = function (e) {
                    i[n][e] = !0;
                });
        },
        function (e, t, r) {
            "use strict";

            var n = r(31),
                i = {};
            (i[r(1)("toStringTag")] = "z"),
            i + "" != "[object z]" &&
                r(8)(
                    Object.prototype,
                    "toString",
                    function () {
                        return "[object " + n(this) + "]";
                    },
                    !0
                );
        },
        function (e, t, r) {
            "use strict";

            var n = r(48),
                i = r(3),
                a = r(8),
                s = r(11),
                o = r(7),
                l = r(19),
                u = r(84),
                c = r(23),
                h = r(88),
                d = r(1)("iterator"),
                f = !([].keys && "next" in [].keys()),
                p = function p() {
                    return this;
                };

            e.exports = function (e, t, r, m, v, g, _) {
                u(r, t, m);

                var b,
                    y,
                    A,
                    S = function S(e) {
                        if (!f && e in C) return C[e];

                        switch (e) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new r(this, e);
                                };
                        }

                        return function () {
                            return new r(this, e);
                        };
                    },
                    w = t + " Iterator",
                    P = "values" == v,
                    k = !1,
                    C = e.prototype,
                    R = C[d] || C["@@iterator"] || (v && C[v]),
                    x = (!f && R) || S(v),
                    T = v ? (P ? S("entries") : x) : void 0,
                    E = ("Array" == t && C.entries) || R;

                if (
                    (E &&
                        (A = h(E.call(new e()))) !== Object.prototype &&
                        A.next &&
                        (c(A, w, !0), n || o(A, d) || s(A, d, p)),
                        P &&
                        R &&
                        "values" !== R.name &&
                        ((k = !0),
                            (x = function () {
                                return R.call(this);
                            })),
                        (n && !_) || (!f && !k && C[d]) || s(C, d, x),
                        (l[t] = x),
                        (l[w] = p),
                        v)
                )
                    if (
                        ((b = {
                                values: P ? x : S("values"),
                                keys: g ? x : S("keys"),
                                entries: T
                            }),
                            _)
                    )
                        for (y in b) y in C || a(C, y, b[y]);
                    else i(i.P + i.F * (f || k), t, b);
                return b;
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = !1;
        },
        function (e, t, r) {
            "use strict";

            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                ","
            );
        },
        function (e, t, r) {
            "use strict";

            var n = r(4).document;
            e.exports = n && n.documentElement;
        },
        function (e, t, r) {
            "use strict";

            for (
                var n = r(89),
                    i = r(22),
                    a = r(8),
                    s = r(4),
                    o = r(11),
                    l = r(19),
                    u = r(1),
                    c = u("iterator"),
                    h = u("toStringTag"),
                    d = l.Array,
                    f = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1
                    },
                    p = i(f),
                    m = 0; m < p.length; m++
            ) {
                var v,
                    g = p[m],
                    _ = f[g],
                    b = s[g],
                    y = b && b.prototype;
                if (y && (y[c] || o(y, c, d), y[h] || o(y, h, g), (l[g] = d), _))
                    for (v in n) y[v] || a(y, v, n[v], !0);
            }
        },
        function (e, t, r) {
            "use strict";

            var n = r(6),
                i = r(17),
                a = r(1)("species");

            e.exports = function (e, t) {
                var r,
                    s = n(e).constructor;
                return void 0 === s || void 0 == (r = n(s)[a]) ? t : i(r);
            };
        },
        function (e, t, r) {
            "use strict";

            var n,
                i,
                a,
                s = r(9),
                o = r(95),
                l = r(50),
                u = r(26),
                c = r(4),
                h = c.process,
                d = c.setImmediate,
                f = c.clearImmediate,
                p = c.MessageChannel,
                m = c.Dispatch,
                v = 0,
                g = {},
                _ = function _() {
                    var e = +this;

                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t();
                    }
                },
                b = function b(e) {
                    _.call(e.data);
                };

            (d && f) ||
            ((d = function (e) {
                    for (var t = [], r = 1; arguments.length > r;)
                        t.push(arguments[r++]);

                    return (
                        (g[++v] = function () {
                            o("function" == typeof e ? e : Function(e), t);
                        }),
                        n(v),
                        v
                    );
                }),
                (f = function (e) {
                    delete g[e];
                }),
                "process" == r(14)(h) ?
                (n = function (e) {
                    h.nextTick(s(_, e, 1));
                }) :
                m && m.now ?
                (n = function (e) {
                    m.now(s(_, e, 1));
                }) :
                p ?
                ((a = (i = new p()).port2),
                    (i.port1.onmessage = b),
                    (n = s(a.postMessage, a, 1))) :
                c.addEventListener &&
                "function" == typeof postMessage &&
                !c.importScripts ?
                ((n = function (e) {
                        c.postMessage(e + "", "*");
                    }),
                    c.addEventListener("message", b, !1)) :
                (n =
                    "onreadystatechange" in u("script") ?
                    function (e) {
                        l.appendChild(
                            u("script")
                        ).onreadystatechange = function () {
                            l.removeChild(this), _.call(e);
                        };
                    } :
                    function (e) {
                        setTimeout(s(_, e, 1), 0);
                    })),
            (e.exports = {
                set: d,
                clear: f
            });
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    };
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    };
                }
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(6),
                i = r(2),
                a = r(35);

            e.exports = function (e, t) {
                if ((n(e), i(t) && t.constructor === e)) return t;
                var r = a.f(e);
                return (0, r.resolve)(t), r.promise;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(1)("iterator"),
                i = !1;

            try {
                var a = [7][n]();
                (a.return = function () {
                    i = !0;
                }),
                Array.from(a, function () {
                    throw 2;
                });
            } catch (e) {}

            e.exports = function (e, t) {
                if (!t && !i) return !1;
                var r = !1;

                try {
                    var a = [7],
                        s = a[n]();
                    (s.next = function () {
                        return {
                            done: (r = !0)
                        };
                    }),
                    (a[n] = function () {
                        return s;
                    }),
                    e(a);
                } catch (e) {}

                return r;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(9),
                i = r(28),
                a = r(33),
                s = r(29),
                o = r(102);

            e.exports = function (e, t) {
                var r = 1 == e,
                    l = 2 == e,
                    u = 3 == e,
                    c = 4 == e,
                    h = 6 == e,
                    d = 5 == e || h,
                    f = t || o;
                return function (t, o, p) {
                    for (
                        var m,
                            v,
                            g = a(t),
                            _ = i(g),
                            b = n(o, p, 3),
                            y = s(_.length),
                            A = 0,
                            S = r ? f(t, y) : l ? f(t, 0) : void 0; y > A; A++
                    )
                        if ((d || A in _) && ((v = b((m = _[A]), A, g)), e))
                            if (r) S[A] = v;
                            else if (v)
                        switch (e) {
                            case 3:
                                return !0;

                            case 5:
                                return m;

                            case 6:
                                return A;

                            case 2:
                                S.push(m);
                        }
                    else if (c) return !1;

                    return h ? -1 : u || c ? c : S;
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2);

            e.exports = function (e, t) {
                if (!n(e) || e._t !== t)
                    throw TypeError("Incompatible receiver, " + t + " required!");
                return e;
            };
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.build = t.version = t.setPDFNetworkStreamFactory = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.LoopbackPort = t.getDocument = void 0);

            var n,
                i = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                },
                s = r(0),
                o = r(10),
                l = r(122),
                u = r(123),
                c = r(15),
                h =
                (n = c) && n.__esModule ?
                n :
                {
                    default: n
                },
                d = r(39),
                f = r(60),
                p = r(125),
                m = r(126);

            var v = 65536,
                g = !1,
                _ = void 0,
                b =
                "undefined" != typeof document && document.currentScript ?
                document.currentScript.src :
                null,
                y = null,
                A = !1;

            "undefined" == typeof window
                ?
                ((g = !0),
                    void 0 === require.ensure &&
                    (require.ensure = require("node-ensure")),
                    (A = !0)) :
                "undefined" != typeof require &&
                "function" == typeof require.ensure &&
                (A = !0),
                "undefined" != typeof requirejs &&
                requirejs.toUrl &&
                (_ = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
            var S,
                w = "undefined" != typeof requirejs && requirejs.load;
            y = A ?
                function (e) {
                    require.ensure([], function () {
                        var t;
                        (t = require("./pdf.worker.js")), e(t.WorkerMessageHandler);
                    });
                } :
                w ?
                function (e) {
                    requirejs(["pdfjs-dist/build/pdf.worker"], function (t) {
                        e(t.WorkerMessageHandler);
                    });
                } :
                null;

            var P = (function () {
                    var e = 0;

                    function t() {
                        (this._capability = (0, s.createPromiseCapability)()),
                        (this._transport = null),
                        (this._worker = null),
                        (this.docId = "d" + e++),
                        (this.destroyed = !1),
                        (this.onPassword = null),
                        (this.onProgress = null),
                        (this.onUnsupportedFeature = null);
                    }

                    return (
                        (t.prototype = {
                            get promise() {
                                return this._capability.promise;
                            },

                            destroy: function () {
                                var e = this;
                                return (
                                    (this.destroyed = !0),
                                    (this._transport ?
                                        this._transport.destroy() :
                                        Promise.resolve()
                                    ).then(function () {
                                        (e._transport = null),
                                        e._worker && (e._worker.destroy(), (e._worker = null));
                                    })
                                );
                            },
                            then: function (e, t) {
                                return this.promise.then.apply(this.promise, arguments);
                            }
                        }),
                        t
                    );
                })(),
                k = (function () {
                    function e(e, t) {
                        (this.length = e),
                        (this.initialData = t),
                        (this._rangeListeners = []),
                        (this._progressListeners = []),
                        (this._progressiveReadListeners = []),
                        (this._readyCapability = (0, s.createPromiseCapability)());
                    }

                    return (
                        (e.prototype = {
                            addRangeListener: function (e) {
                                this._rangeListeners.push(e);
                            },
                            addProgressListener: function (e) {
                                this._progressListeners.push(e);
                            },
                            addProgressiveReadListener: function (e) {
                                this._progressiveReadListeners.push(e);
                            },
                            onDataRange: function (e, t) {
                                for (
                                    var r = this._rangeListeners, n = 0, i = r.length; n < i;
                                    ++n
                                )
                                    r[n](e, t);
                            },
                            onDataProgress: function (e) {
                                var t = this;

                                this._readyCapability.promise.then(function () {
                                    for (
                                        var r = t._progressListeners, n = 0, i = r.length; n < i;
                                        ++n
                                    )
                                        r[n](e);
                                });
                            },
                            onDataProgressiveRead: function (e) {
                                var t = this;

                                this._readyCapability.promise.then(function () {
                                    for (
                                        var r = t._progressiveReadListeners, n = 0, i = r.length; n < i;
                                        ++n
                                    )
                                        r[n](e);
                                });
                            },
                            transportReady: function () {
                                this._readyCapability.resolve();
                            },
                            requestDataRange: function (e, t) {
                                (0, s.unreachable)(
                                    "Abstract method PDFDataRangeTransport.requestDataRange"
                                );
                            },
                            abort: function () {}
                        }),
                        e
                    );
                })(),
                C = (function () {
                    function e(e, t, r) {
                        (this.pdfInfo = e), (this.transport = t), (this.loadingTask = r);
                    }

                    return (
                        (e.prototype = {
                            get numPages() {
                                return this.pdfInfo.numPages;
                            },

                            get fingerprint() {
                                return this.pdfInfo.fingerprint;
                            },

                            getPage: function (e) {
                                return this.transport.getPage(e);
                            },
                            getPageIndex: function (e) {
                                return this.transport.getPageIndex(e);
                            },
                            getDestinations: function () {
                                return this.transport.getDestinations();
                            },
                            getDestination: function (e) {
                                return this.transport.getDestination(e);
                            },
                            getPageLabels: function () {
                                return this.transport.getPageLabels();
                            },
                            getPageMode: function () {
                                return this.transport.getPageMode();
                            },
                            getAttachments: function () {
                                return this.transport.getAttachments();
                            },
                            getJavaScript: function () {
                                return this.transport.getJavaScript();
                            },
                            getOutline: function () {
                                return this.transport.getOutline();
                            },
                            getMetadata: function () {
                                return this.transport.getMetadata();
                            },
                            getData: function () {
                                return this.transport.getData();
                            },
                            getDownloadInfo: function () {
                                return this.transport.downloadInfoCapability.promise;
                            },
                            getStats: function () {
                                return this.transport.getStats();
                            },
                            cleanup: function () {
                                this.transport.startCleanup();
                            },
                            destroy: function () {
                                return this.loadingTask.destroy();
                            }
                        }),
                        e
                    );
                })(),
                R = (function () {
                    function e(e, t, r) {
                        (this.pageIndex = e),
                        (this.pageInfo = t),
                        (this.transport = r),
                        (this._stats = (0, o.getDefaultSetting)("pdfBug") ?
                            new o.StatTimer() :
                            o.DummyStatTimer),
                        (this.commonObjs = r.commonObjs),
                        (this.objs = new O()),
                        (this.cleanupAfterRender = !1),
                        (this.pendingCleanup = !1),
                        (this.intentStates = Object.create(null)),
                        (this.destroyed = !1);
                    }

                    return (
                        (e.prototype = {
                            get pageNumber() {
                                return this.pageIndex + 1;
                            },

                            get rotate() {
                                return this.pageInfo.rotate;
                            },

                            get ref() {
                                return this.pageInfo.ref;
                            },

                            get userUnit() {
                                return this.pageInfo.userUnit;
                            },

                            get view() {
                                return this.pageInfo.view;
                            },

                            getViewport: function (e) {
                                var t =
                                    arguments.length > 1 && void 0 !== arguments[1] ?
                                    arguments[1] :
                                    this.rotate,
                                    r =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                return new s.PageViewport(this.view, e, t, 0, 0, r);
                            },
                            getAnnotations: function (e) {
                                var t = (e && e.intent) || null;
                                return (
                                    (this.annotationsPromise && this.annotationsIntent === t) ||
                                    ((this.annotationsPromise = this.transport.getAnnotations(
                                            this.pageIndex,
                                            t
                                        )),
                                        (this.annotationsIntent = t)),
                                    this.annotationsPromise
                                );
                            },
                            render: function (e) {
                                var t = this,
                                    r = this._stats;
                                r.time("Overall"), (this.pendingCleanup = !1);
                                var n = "print" === e.intent ? "print" : "display",
                                    i = e.canvasFactory || new o.DOMCanvasFactory(),
                                    a = new m.WebGLContext({
                                        enable: e.enableWebGL
                                    });
                                this.intentStates[n] ||
                                    (this.intentStates[n] = Object.create(null));
                                var l = this.intentStates[n];
                                l.displayReadyCapability ||
                                    ((l.receivingOperatorList = !0),
                                        (l.displayReadyCapability = (0, s.createPromiseCapability)()),
                                        (l.operatorList = {
                                            fnArray: [],
                                            argsArray: [],
                                            lastChunk: !1
                                        }),
                                        r.time("Page Request"),
                                        this.transport.messageHandler.send("RenderPageRequest", {
                                            pageIndex: this.pageNumber - 1,
                                            intent: n,
                                            renderInteractiveForms: !0 === e.renderInteractiveForms
                                        }));

                                var u = function u(e) {
                                        var n = l.renderTasks.indexOf(c);
                                        n >= 0 && l.renderTasks.splice(n, 1),
                                            t.cleanupAfterRender && (t.pendingCleanup = !0),
                                            t._tryCleanup(),
                                            e ? c.capability.reject(e) : c.capability.resolve(),
                                            r.timeEnd("Rendering"),
                                            r.timeEnd("Overall");
                                    },
                                    c = new F(
                                        u,
                                        e,
                                        this.objs,
                                        this.commonObjs,
                                        l.operatorList,
                                        this.pageNumber,
                                        i,
                                        a
                                    );

                                (c.useRequestAnimationFrame = "print" !== n),
                                l.renderTasks || (l.renderTasks = []),
                                    l.renderTasks.push(c);
                                var h = c.task;
                                return (
                                    l.displayReadyCapability.promise
                                    .then(function (e) {
                                        t.pendingCleanup ?
                                            u() :
                                            (r.time("Rendering"),
                                                c.initializeGraphics(e),
                                                c.operatorListChanged());
                                    })
                                    .catch(u),
                                    h
                                );
                            },
                            getOperatorList: function () {
                                this.intentStates.oplist ||
                                    (this.intentStates.oplist = Object.create(null));
                                var e,
                                    t = this.intentStates.oplist;
                                return (
                                    t.opListReadCapability ||
                                    (((e = {}).operatorListChanged = function () {
                                            if (t.operatorList.lastChunk) {
                                                t.opListReadCapability.resolve(t.operatorList);
                                                var r = t.renderTasks.indexOf(e);
                                                r >= 0 && t.renderTasks.splice(r, 1);
                                            }
                                        }),
                                        (t.receivingOperatorList = !0),
                                        (t.opListReadCapability = (0, s.createPromiseCapability)()),
                                        (t.renderTasks = []),
                                        t.renderTasks.push(e),
                                        (t.operatorList = {
                                            fnArray: [],
                                            argsArray: [],
                                            lastChunk: !1
                                        }),
                                        this.transport.messageHandler.send("RenderPageRequest", {
                                            pageIndex: this.pageIndex,
                                            intent: "oplist"
                                        })),
                                    t.opListReadCapability.promise
                                );
                            },
                            streamTextContent: function () {
                                var e =
                                    arguments.length > 0 && void 0 !== arguments[0] ?
                                    arguments[0] :
                                    {};
                                return this.transport.messageHandler.sendWithStream(
                                    "GetTextContent", {
                                        pageIndex: this.pageNumber - 1,
                                        normalizeWhitespace: !0 === e.normalizeWhitespace,
                                        combineTextItems: !0 !== e.disableCombineTextItems
                                    }, {
                                        highWaterMark: 100,
                                        size: function (e) {
                                            return e.items.length;
                                        }
                                    }
                                );
                            },
                            getTextContent: function (e) {
                                e = e || {};
                                var t = this.streamTextContent(e);
                                return new Promise(function (e, r) {
                                    var n = t.getReader(),
                                        i = {
                                            items: [],
                                            styles: Object.create(null)
                                        };
                                    !(function t() {
                                        n.read().then(function (r) {
                                            var n = r.value;
                                            r.done ?
                                                e(i) :
                                                (s.Util.extendObj(i.styles, n.styles),
                                                    s.Util.appendToArray(i.items, n.items),
                                                    t());
                                        }, r);
                                    })();
                                });
                            },
                            _destroy: function () {
                                (this.destroyed = !0),
                                (this.transport.pageCache[this.pageIndex] = null);
                                var e = [];
                                return (
                                    Object.keys(this.intentStates).forEach(function (t) {
                                        "oplist" !== t &&
                                            this.intentStates[t].renderTasks.forEach(function (t) {
                                                var r = t.capability.promise.catch(function () {});
                                                e.push(r), t.cancel();
                                            });
                                    }, this),
                                    this.objs.clear(),
                                    (this.annotationsPromise = null),
                                    (this.pendingCleanup = !1),
                                    Promise.all(e)
                                );
                            },
                            cleanup: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0];
                                (this.pendingCleanup = !0), this._tryCleanup(e);
                            },
                            _tryCleanup: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0];
                                this.pendingCleanup &&
                                    !Object.keys(this.intentStates).some(function (e) {
                                        var t = this.intentStates[e];
                                        return (
                                            0 !== t.renderTasks.length || t.receivingOperatorList
                                        );
                                    }, this) &&
                                    (Object.keys(this.intentStates).forEach(function (e) {
                                            delete this.intentStates[e];
                                        }, this),
                                        this.objs.clear(),
                                        (this.annotationsPromise = null),
                                        e &&
                                        this._stats instanceof o.StatTimer &&
                                        (this._stats = new o.StatTimer()),
                                        (this.pendingCleanup = !1));
                            },
                            _startRenderPage: function (e, t) {
                                var r = this.intentStates[t];
                                r.displayReadyCapability && r.displayReadyCapability.resolve(e);
                            },
                            _renderPageChunk: function (e, t) {
                                var r,
                                    n,
                                    i = this.intentStates[t];

                                for (r = 0, n = e.length; r < n; r++)
                                    i.operatorList.fnArray.push(e.fnArray[r]),
                                    i.operatorList.argsArray.push(e.argsArray[r]);

                                for (
                                    i.operatorList.lastChunk = e.lastChunk, r = 0; r < i.renderTasks.length; r++
                                )
                                    i.renderTasks[r].operatorListChanged();

                                e.lastChunk &&
                                    ((i.receivingOperatorList = !1), this._tryCleanup());
                            },

                            get stats() {
                                return this._stats instanceof o.StatTimer ? this._stats : null;
                            }
                        }),
                        e
                    );
                })(),
                x = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (this._listeners = []),
                        (this._defer = t),
                        (this._deferred = Promise.resolve(void 0));
                    }

                    return (
                        i(e, [{
                                key: "postMessage",
                                value: function (e, t) {
                                    var r = this;

                                    if (this._defer) {
                                        var n = new WeakMap(),
                                            i = {
                                                data: (function e(r) {
                                                    if (
                                                        "object" !== (void 0 === r ? "undefined" : a(r)) ||
                                                        null === r
                                                    )
                                                        return r;
                                                    if (n.has(r)) return n.get(r);
                                                    var i, o;

                                                    if ((o = r.buffer) && (0, s.isArrayBuffer)(o)) {
                                                        var l = t && t.includes(o);
                                                        return (
                                                            (i =
                                                                r === o ?
                                                                r :
                                                                l ?
                                                                new r.constructor(
                                                                    o,
                                                                    r.byteOffset,
                                                                    r.byteLength
                                                                ) :
                                                                new r.constructor(r)),
                                                            n.set(r, i),
                                                            i
                                                        );
                                                    }

                                                    for (var u in ((i = Array.isArray(r) ? [] : {}),
                                                            n.set(r, i),
                                                            r)) {
                                                        for (
                                                            var c, h = r; !(c = Object.getOwnPropertyDescriptor(h, u));

                                                        )
                                                            h = Object.getPrototypeOf(h);

                                                        void 0 !== c.value &&
                                                            "function" != typeof c.value &&
                                                            (i[u] = e(c.value));
                                                    }

                                                    return i;
                                                })(e)
                                            };

                                        this._deferred.then(function () {
                                            r._listeners.forEach(function (e) {
                                                e.call(this, i);
                                            }, r);
                                        });
                                    } else
                                        this._listeners.forEach(function (t) {
                                            t.call(this, {
                                                data: e
                                            });
                                        }, this);
                                }
                            },
                            {
                                key: "addEventListener",
                                value: function (e, t) {
                                    this._listeners.push(t);
                                }
                            },
                            {
                                key: "removeEventListener",
                                value: function (e, t) {
                                    var r = this._listeners.indexOf(t);

                                    this._listeners.splice(r, 1);
                                }
                            },
                            {
                                key: "terminate",
                                value: function () {
                                    this._listeners = [];
                                }
                            }
                        ]),
                        e
                    );
                })(),
                T = (function () {
                    var e = 0;

                    function t() {
                        if (d.GlobalWorkerOptions.workerSrc)
                            return d.GlobalWorkerOptions.workerSrc;
                        if (void 0 !== _) return _;
                        if (b) return b.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
                        throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
                    }

                    function r() {
                        return "undefined" == typeof window ?
                            null :
                            window.pdfjsDistBuildPdfWorker &&
                            window.pdfjsDistBuildPdfWorker.WorkerMessageHandler;
                    }

                    var n = void 0;
                    var i = new WeakMap();

                    function a() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ?
                            arguments[0] :
                            {},
                            t = e.name,
                            r = void 0 === t ? null : t,
                            n = e.port,
                            a = void 0 === n ? null : n,
                            o = e.postMessageTransfers,
                            l = void 0 === o || o,
                            u = e.verbosity,
                            c = void 0 === u ? null : u;
                        if (a && i.has(a))
                            throw new Error("Cannot use more than one PDFWorker per port");
                        if (
                            ((this.name = r),
                                (this.destroyed = !1),
                                (this.postMessageTransfers = !1 !== l),
                                (this.verbosity = (0, s.isNum)(c) ?
                                    c :
                                    (0, s.getVerbosityLevel)()),
                                (this._readyCapability = (0, s.createPromiseCapability)()),
                                (this._port = null),
                                (this._webWorker = null),
                                (this._messageHandler = null),
                                a)
                        )
                            return i.set(a, this), void this._initializeFromPort(a);

                        this._initialize();
                    }

                    return (
                        (a.prototype = {
                            get promise() {
                                return this._readyCapability.promise;
                            },

                            get port() {
                                return this._port;
                            },

                            get messageHandler() {
                                return this._messageHandler;
                            },

                            _initializeFromPort: function (e) {
                                (this._port = e),
                                (this._messageHandler = new s.MessageHandler(
                                    "main",
                                    "worker",
                                    e
                                )),
                                this._messageHandler.on("ready", function () {}),
                                    this._readyCapability.resolve();
                            },
                            _initialize: function () {
                                var e,
                                    n,
                                    i = this;

                                if ("undefined" != typeof Worker && !g && !r()) {
                                    var a = t();

                                    try {
                                        (0, s.isSameOrigin)(window.location.href, a) ||
                                        ((e = new URL(a, window.location).href),
                                            (n = "importScripts('" + e + "');"),
                                            (a = URL.createObjectURL(new Blob([n]))));

                                        var o = new Worker(a),
                                            l = new s.MessageHandler("main", "worker", o),
                                            u = function u() {
                                                o.removeEventListener("error", c),
                                                    l.destroy(),
                                                    o.terminate(),
                                                    i.destroyed ?
                                                    i._readyCapability.reject(
                                                        new Error("Worker was destroyed")
                                                    ) :
                                                    i._setupFakeWorker();
                                            },
                                            c = function c() {
                                                i._webWorker || u();
                                            };

                                        o.addEventListener("error", c),
                                            l.on("test", function (e) {
                                                (o.removeEventListener("error", c), i.destroyed) ?
                                                u(): e && e.supportTypedArray ?
                                                    ((i._messageHandler = l),
                                                        (i._port = o),
                                                        (i._webWorker = o),
                                                        e.supportTransfers || (i.postMessageTransfers = !1),
                                                        i._readyCapability.resolve(),
                                                        l.send("configure", {
                                                            verbosity: i.verbosity
                                                        })) :
                                                    (i._setupFakeWorker(), l.destroy(), o.terminate());
                                            }),
                                            l.on("ready", function (e) {
                                                if ((o.removeEventListener("error", c), i.destroyed))
                                                    u();
                                                else
                                                    try {
                                                        h();
                                                    } catch (e) {
                                                        i._setupFakeWorker();
                                                    }
                                            });

                                        var h = function h() {
                                            var e = new Uint8Array([
                                                i.postMessageTransfers ? 255 : 0
                                            ]);

                                            try {
                                                l.send("test", e, [e.buffer]);
                                            } catch (t) {
                                                (0, s.info)("Cannot use postMessage transfers"),
                                                (e[0] = 0),
                                                l.send("test", e);
                                            }
                                        };

                                        return void h();
                                    } catch (e) {
                                        (0, s.info)("The worker has been disabled.");
                                    }
                                }

                                this._setupFakeWorker();
                            },
                            _setupFakeWorker: function () {
                                var i = this;
                                g || ((0, s.warn)("Setting up fake worker."), (g = !0)),
                                    (function () {
                                        if (n) return n.promise;
                                        n = (0, s.createPromiseCapability)();
                                        var e = r();
                                        return e ?
                                            (n.resolve(e), n.promise) :
                                            ((
                                                    y ||
                                                    function (e) {
                                                        s.Util.loadScript(t(), function () {
                                                            e(
                                                                window.pdfjsDistBuildPdfWorker
                                                                .WorkerMessageHandler
                                                            );
                                                        });
                                                    }
                                                )(n.resolve),
                                                n.promise);
                                    })().then(function (t) {
                                        if (i.destroyed)
                                            i._readyCapability.reject(
                                                new Error("Worker was destroyed")
                                            );
                                        else {
                                            var r = Uint8Array !== Float32Array,
                                                n = new x(r);
                                            i._port = n;
                                            var a = "fake" + e++,
                                                o = new s.MessageHandler(a + "_worker", a, n);
                                            t.setup(o, n);
                                            var l = new s.MessageHandler(a, a + "_worker", n);
                                            (i._messageHandler = l), i._readyCapability.resolve();
                                        }
                                    });
                            },
                            destroy: function () {
                                (this.destroyed = !0),
                                this._webWorker &&
                                    (this._webWorker.terminate(), (this._webWorker = null)),
                                    i.delete(this._port),
                                    (this._port = null),
                                    this._messageHandler &&
                                    (this._messageHandler.destroy(),
                                        (this._messageHandler = null));
                            }
                        }),
                        (a.fromPort = function (e) {
                            return i.has(e.port) ? i.get(e.port) : new a(e);
                        }),
                        (a.getWorkerSrc = function () {
                            return t();
                        }),
                        a
                    );
                })(),
                E = (function () {
                    function e(e, t, r, n) {
                        (this.messageHandler = e),
                        (this.loadingTask = t),
                        (this.commonObjs = new O()),
                        (this.fontLoader = new l.FontLoader(t.docId)),
                        (this.CMapReaderFactory = new n({
                            baseUrl: (0, o.getDefaultSetting)("cMapUrl"),
                            isCompressed: (0, o.getDefaultSetting)("cMapPacked")
                        })),
                        (this.destroyed = !1),
                        (this.destroyCapability = null),
                        (this._passwordCapability = null),
                        (this._networkStream = r),
                        (this._fullReader = null),
                        (this._lastProgress = null),
                        (this.pageCache = []),
                        (this.pagePromises = []),
                        (this.downloadInfoCapability = (0, s.createPromiseCapability)()),
                        this.setupMessageHandler();
                    }

                    return (
                        (e.prototype = {
                            destroy: function () {
                                var e = this;
                                if (this.destroyCapability)
                                    return this.destroyCapability.promise;
                                (this.destroyed = !0),
                                (this.destroyCapability = (0, s.createPromiseCapability)()),
                                this._passwordCapability &&
                                    this._passwordCapability.reject(
                                        new Error(
                                            "Worker was destroyed during onPassword callback"
                                        )
                                    );
                                var t = [];
                                this.pageCache.forEach(function (e) {
                                        e && t.push(e._destroy());
                                    }),
                                    (this.pageCache = []),
                                    (this.pagePromises = []);
                                var r = this.messageHandler.sendWithPromise("Terminate", null);
                                return (
                                    t.push(r),
                                    Promise.all(t).then(function () {
                                        e.fontLoader.clear(),
                                            e._networkStream && e._networkStream.cancelAllRequests(),
                                            e.messageHandler &&
                                            (e.messageHandler.destroy(), (e.messageHandler = null)),
                                            e.destroyCapability.resolve();
                                    }, this.destroyCapability.reject),
                                    this.destroyCapability.promise
                                );
                            },
                            setupMessageHandler: function () {
                                var e = this.messageHandler,
                                    t = this.loadingTask;
                                e.on(
                                        "GetReader",
                                        function (e, t) {
                                            var r = this;
                                            (0, s.assert)(this._networkStream),
                                            (this._fullReader = this._networkStream.getFullReader()),
                                            (this._fullReader.onProgress = function (e) {
                                                r._lastProgress = {
                                                    loaded: e.loaded,
                                                    total: e.total
                                                };
                                            }),
                                            (t.onPull = function () {
                                                r._fullReader
                                                    .read()
                                                    .then(function (e) {
                                                        var r = e.value;
                                                        e.done ?
                                                            t.close() :
                                                            ((0, s.assert)((0, s.isArrayBuffer)(r)),
                                                                t.enqueue(new Uint8Array(r), 1, [r]));
                                                    })
                                                    .catch(function (e) {
                                                        t.error(e);
                                                    });
                                            }),
                                            (t.onCancel = function (e) {
                                                r._fullReader.cancel(e);
                                            });
                                        },
                                        this
                                    ),
                                    e.on(
                                        "ReaderHeadersReady",
                                        function (e) {
                                            var t = this,
                                                r = (0, s.createPromiseCapability)(),
                                                n = this._fullReader;
                                            return (
                                                n.headersReady.then(function () {
                                                    if (!n.isStreamingSupported || !n.isRangeSupported) {
                                                        if (t._lastProgress) {
                                                            var e = t.loadingTask;
                                                            e.onProgress && e.onProgress(t._lastProgress);
                                                        }

                                                        n.onProgress = function (e) {
                                                            var r = t.loadingTask;
                                                            r.onProgress &&
                                                                r.onProgress({
                                                                    loaded: e.loaded,
                                                                    total: e.total
                                                                });
                                                        };
                                                    }

                                                    r.resolve({
                                                        isStreamingSupported: n.isStreamingSupported,
                                                        isRangeSupported: n.isRangeSupported,
                                                        contentLength: n.contentLength
                                                    });
                                                }, r.reject),
                                                r.promise
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "GetRangeReader",
                                        function (e, t) {
                                            (0, s.assert)(this._networkStream);

                                            var r = this._networkStream.getRangeReader(
                                                e.begin,
                                                e.end
                                            );

                                            (t.onPull = function () {
                                                r.read()
                                                    .then(function (e) {
                                                        var r = e.value;
                                                        e.done ?
                                                            t.close() :
                                                            ((0, s.assert)((0, s.isArrayBuffer)(r)),
                                                                t.enqueue(new Uint8Array(r), 1, [r]));
                                                    })
                                                    .catch(function (e) {
                                                        t.error(e);
                                                    });
                                            }),
                                            (t.onCancel = function (e) {
                                                r.cancel(e);
                                            });
                                        },
                                        this
                                    ),
                                    e.on(
                                        "GetDoc",
                                        function (e) {
                                            var t = e.pdfInfo;
                                            this.numPages = t.numPages;
                                            var r = this.loadingTask,
                                                n = new C(t, this, r);
                                            (this.pdfDocument = n), r._capability.resolve(n);
                                        },
                                        this
                                    ),
                                    e.on(
                                        "PasswordRequest",
                                        function (e) {
                                            var r = this;

                                            if (
                                                ((this._passwordCapability = (0,
                                                        s.createPromiseCapability)()),
                                                    t.onPassword)
                                            ) {
                                                t.onPassword(function (e) {
                                                    r._passwordCapability.resolve({
                                                        password: e
                                                    });
                                                }, e.code);
                                            } else
                                                this._passwordCapability.reject(
                                                    new s.PasswordException(e.message, e.code)
                                                );

                                            return this._passwordCapability.promise;
                                        },
                                        this
                                    ),
                                    e.on(
                                        "PasswordException",
                                        function (e) {
                                            t._capability.reject(
                                                new s.PasswordException(e.message, e.code)
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "InvalidPDF",
                                        function (e) {
                                            this.loadingTask._capability.reject(
                                                new s.InvalidPDFException(e.message)
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "MissingPDF",
                                        function (e) {
                                            this.loadingTask._capability.reject(
                                                new s.MissingPDFException(e.message)
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "UnexpectedResponse",
                                        function (e) {
                                            this.loadingTask._capability.reject(
                                                new s.UnexpectedResponseException(e.message, e.status)
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "UnknownError",
                                        function (e) {
                                            this.loadingTask._capability.reject(
                                                new s.UnknownErrorException(e.message, e.details)
                                            );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "DataLoaded",
                                        function (e) {
                                            this.downloadInfoCapability.resolve(e);
                                        },
                                        this
                                    ),
                                    e.on("PDFManagerReady", function (e) {}, this),
                                    e.on(
                                        "StartRenderPage",
                                        function (e) {
                                            if (!this.destroyed) {
                                                var t = this.pageCache[e.pageIndex];
                                                t._stats.timeEnd("Page Request"),
                                                    t._startRenderPage(e.transparency, e.intent);
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "RenderPageChunk",
                                        function (e) {
                                            this.destroyed ||
                                                this.pageCache[e.pageIndex]._renderPageChunk(
                                                    e.operatorList,
                                                    e.intent
                                                );
                                        },
                                        this
                                    ),
                                    e.on(
                                        "commonobj",
                                        function (e) {
                                            var t = this;

                                            if (!this.destroyed) {
                                                var r = e[0],
                                                    n = e[1];
                                                if (!this.commonObjs.hasData(r))
                                                    switch (n) {
                                                        case "Font":
                                                            var i = e[2];

                                                            if ("error" in i) {
                                                                var a = i.error;
                                                                (0, s.warn)("Error during font loading: " + a),
                                                                this.commonObjs.resolve(r, a);
                                                                break;
                                                            }

                                                            var u = null;
                                                            (0, o.getDefaultSetting)("pdfBug") &&
                                                            h.default.FontInspector &&
                                                                h.default.FontInspector.enabled &&
                                                                (u = {
                                                                    registerFont: function (e, t) {
                                                                        h.default.FontInspector.fontAdded(e, t);
                                                                    }
                                                                });
                                                            var c = new l.FontFaceObject(i, {
                                                                isEvalSupported: (0, o.getDefaultSetting)(
                                                                    "isEvalSupported"
                                                                ),
                                                                disableFontFace: (0, o.getDefaultSetting)(
                                                                    "disableFontFace"
                                                                ),
                                                                fontRegistry: u
                                                            });
                                                            this.fontLoader.bind([c], function (e) {
                                                                t.commonObjs.resolve(r, c);
                                                            });
                                                            break;

                                                        case "FontPath":
                                                            this.commonObjs.resolve(r, e[2]);
                                                            break;

                                                        default:
                                                            throw new Error(
                                                                "Got unknown common object type " + n
                                                            );
                                                    }
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "obj",
                                        function (e) {
                                            if (!this.destroyed) {
                                                var t,
                                                    r = e[0],
                                                    n = e[1],
                                                    i = e[2],
                                                    a = this.pageCache[n];
                                                if (!a.objs.hasData(r))
                                                    switch (i) {
                                                        case "JpegStream":
                                                            return (
                                                                (t = e[3]),
                                                                new Promise(function (e, r) {
                                                                    var n = new Image();
                                                                    (n.onload = function () {
                                                                        e(n);
                                                                    }),
                                                                    (n.onerror = function () {
                                                                        r(
                                                                            new Error(
                                                                                "Error during JPEG image loading"
                                                                            )
                                                                        );
                                                                    }),
                                                                    (n.src = t);
                                                                }).then(function (e) {
                                                                    a.objs.resolve(r, e);
                                                                })
                                                            );

                                                        case "Image":
                                                            (t = e[3]), a.objs.resolve(r, t);
                                                            t &&
                                                                "data" in t &&
                                                                t.data.length > 8e6 &&
                                                                (a.cleanupAfterRender = !0);
                                                            break;

                                                        default:
                                                            throw new Error("Got unknown object type " + i);
                                                    }
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "DocProgress",
                                        function (e) {
                                            if (!this.destroyed) {
                                                var t = this.loadingTask;
                                                t.onProgress &&
                                                    t.onProgress({
                                                        loaded: e.loaded,
                                                        total: e.total
                                                    });
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "PageError",
                                        function (e) {
                                            if (!this.destroyed) {
                                                var t = this.pageCache[e.pageNum - 1].intentStates[
                                                    e.intent
                                                ];
                                                if (!t.displayReadyCapability) throw new Error(e.error);

                                                if (
                                                    (t.displayReadyCapability.reject(e.error),
                                                        t.operatorList)
                                                ) {
                                                    t.operatorList.lastChunk = !0;

                                                    for (var r = 0; r < t.renderTasks.length; r++)
                                                        t.renderTasks[r].operatorListChanged();
                                                }
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "UnsupportedFeature",
                                        function (e) {
                                            if (!this.destroyed) {
                                                var t = this.loadingTask;
                                                t.onUnsupportedFeature &&
                                                    t.onUnsupportedFeature(e.featureId);
                                            }
                                        },
                                        this
                                    ),
                                    e.on(
                                        "JpegDecode",
                                        function (e) {
                                            if (this.destroyed)
                                                return Promise.reject(
                                                    new Error("Worker was destroyed")
                                                );
                                            if ("undefined" == typeof document)
                                                return Promise.reject(
                                                    new Error('"document" is not defined.')
                                                );
                                            var t = e[0],
                                                r = e[1];
                                            return 3 !== r && 1 !== r ?
                                                Promise.reject(
                                                    new Error(
                                                        "Only 3 components or 1 component can be returned"
                                                    )
                                                ) :
                                                new Promise(function (e, n) {
                                                    var i = new Image();
                                                    (i.onload = function () {
                                                        var t = i.width,
                                                            n = i.height,
                                                            a = t * n,
                                                            s = 4 * a,
                                                            o = new Uint8Array(a * r),
                                                            l = document.createElement("canvas");
                                                        (l.width = t), (l.height = n);
                                                        var u = l.getContext("2d");
                                                        u.drawImage(i, 0, 0);
                                                        var c,
                                                            h,
                                                            d = u.getImageData(0, 0, t, n).data;
                                                        if (3 === r)
                                                            for (c = 0, h = 0; c < s; c += 4, h += 3)
                                                                (o[h] = d[c]),
                                                                (o[h + 1] = d[c + 1]),
                                                                (o[h + 2] = d[c + 2]);
                                                        else if (1 === r)
                                                            for (c = 0, h = 0; c < s; c += 4, h++)
                                                                o[h] = d[c];
                                                        e({
                                                            data: o,
                                                            width: t,
                                                            height: n
                                                        });
                                                    }),
                                                    (i.onerror = function () {
                                                        n(new Error("JpegDecode failed to load image"));
                                                    }),
                                                    (i.src = t);
                                                });
                                        },
                                        this
                                    ),
                                    e.on(
                                        "FetchBuiltInCMap",
                                        function (e) {
                                            return this.destroyed ?
                                                Promise.reject(new Error("Worker was destroyed")) :
                                                this.CMapReaderFactory.fetch({
                                                    name: e.name
                                                });
                                        },
                                        this
                                    );
                            },
                            getData: function () {
                                return this.messageHandler.sendWithPromise("GetData", null);
                            },
                            getPage: function (e) {
                                var t = this;
                                if (!Number.isInteger(e) || e <= 0 || e > this.numPages)
                                    return Promise.reject(new Error("Invalid page request"));
                                var r = e - 1;
                                if (r in this.pagePromises) return this.pagePromises[r];
                                var n = this.messageHandler
                                    .sendWithPromise("GetPage", {
                                        pageIndex: r
                                    })
                                    .then(function (e) {
                                        if (t.destroyed) throw new Error("Transport destroyed");
                                        var n = new R(r, e, t);
                                        return (t.pageCache[r] = n), n;
                                    });
                                return (this.pagePromises[r] = n), n;
                            },
                            getPageIndex: function (e) {
                                return this.messageHandler
                                    .sendWithPromise("GetPageIndex", {
                                        ref: e
                                    })
                                    .catch(function (e) {
                                        return Promise.reject(new Error(e));
                                    });
                            },
                            getAnnotations: function (e, t) {
                                return this.messageHandler.sendWithPromise("GetAnnotations", {
                                    pageIndex: e,
                                    intent: t
                                });
                            },
                            getDestinations: function () {
                                return this.messageHandler.sendWithPromise(
                                    "GetDestinations",
                                    null
                                );
                            },
                            getDestination: function (e) {
                                return this.messageHandler.sendWithPromise("GetDestination", {
                                    id: e
                                });
                            },
                            getPageLabels: function () {
                                return this.messageHandler.sendWithPromise(
                                    "GetPageLabels",
                                    null
                                );
                            },
                            getPageMode: function () {
                                return this.messageHandler.sendWithPromise("GetPageMode", null);
                            },
                            getAttachments: function () {
                                return this.messageHandler.sendWithPromise(
                                    "GetAttachments",
                                    null
                                );
                            },
                            getJavaScript: function () {
                                return this.messageHandler.sendWithPromise(
                                    "GetJavaScript",
                                    null
                                );
                            },
                            getOutline: function () {
                                return this.messageHandler.sendWithPromise("GetOutline", null);
                            },
                            getMetadata: function () {
                                var e = this;
                                return this.messageHandler
                                    .sendWithPromise("GetMetadata", null)
                                    .then(function (t) {
                                        return {
                                            info: t[0],
                                            metadata: t[1] ? new f.Metadata(t[1]) : null,
                                            contentDispositionFilename: e._fullReader ?
                                                e._fullReader.filename :
                                                null
                                        };
                                    });
                            },
                            getStats: function () {
                                return this.messageHandler.sendWithPromise("GetStats", null);
                            },
                            startCleanup: function () {
                                var e = this;
                                this.messageHandler
                                    .sendWithPromise("Cleanup", null)
                                    .then(function () {
                                        for (var t = 0, r = e.pageCache.length; t < r; t++) {
                                            var n = e.pageCache[t];
                                            n && n.cleanup();
                                        }

                                        e.commonObjs.clear(), e.fontLoader.clear();
                                    });
                            }
                        }),
                        e
                    );
                })(),
                O = (function () {
                    function e() {
                        this.objs = Object.create(null);
                    }

                    return (
                        (e.prototype = {
                            ensureObj: function (e) {
                                if (this.objs[e]) return this.objs[e];
                                var t = {
                                    capability: (0, s.createPromiseCapability)(),
                                    data: null,
                                    resolved: !1
                                };
                                return (this.objs[e] = t), t;
                            },
                            get: function (e, t) {
                                if (t)
                                    return this.ensureObj(e).capability.promise.then(t), null;
                                var r = this.objs[e];
                                if (!r || !r.resolved)
                                    throw new Error(
                                        "Requesting object that isn't resolved yet " + e
                                    );
                                return r.data;
                            },
                            resolve: function (e, t) {
                                var r = this.ensureObj(e);
                                (r.resolved = !0), (r.data = t), r.capability.resolve(t);
                            },
                            isResolved: function (e) {
                                var t = this.objs;
                                return !!t[e] && t[e].resolved;
                            },
                            hasData: function (e) {
                                return this.isResolved(e);
                            },
                            getData: function (e) {
                                var t = this.objs;
                                return t[e] && t[e].resolved ? t[e].data : null;
                            },
                            clear: function () {
                                this.objs = Object.create(null);
                            }
                        }),
                        e
                    );
                })(),
                I = (function () {
                    function e(e) {
                        (this._internalRenderTask = e), (this.onContinue = null);
                    }

                    return (
                        (e.prototype = {
                            get promise() {
                                return this._internalRenderTask.capability.promise;
                            },

                            cancel: function () {
                                this._internalRenderTask.cancel();
                            },
                            then: function (e, t) {
                                return this.promise.then.apply(this.promise, arguments);
                            }
                        }),
                        e
                    );
                })(),
                F = (function () {
                    var e = new WeakMap();

                    function t(e, t, r, n, i, a, o, l) {
                        (this.callback = e),
                        (this.params = t),
                        (this.objs = r),
                        (this.commonObjs = n),
                        (this.operatorListIdx = null),
                        (this.operatorList = i),
                        (this.pageNumber = a),
                        (this.canvasFactory = o),
                        (this.webGLContext = l),
                        (this.running = !1),
                        (this.graphicsReadyCallback = null),
                        (this.graphicsReady = !1),
                        (this.useRequestAnimationFrame = !1),
                        (this.cancelled = !1),
                        (this.capability = (0, s.createPromiseCapability)()),
                        (this.task = new I(this)),
                        (this._continueBound = this._continue.bind(this)),
                        (this._scheduleNextBound = this._scheduleNext.bind(this)),
                        (this._nextBound = this._next.bind(this)),
                        (this._canvas = t.canvasContext.canvas);
                    }

                    return (
                        (t.prototype = {
                            initializeGraphics: function (t) {
                                if (this._canvas) {
                                    if (e.has(this._canvas))
                                        throw new Error(
                                            "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                                        );
                                    e.set(this._canvas, this);
                                }

                                if (!this.cancelled) {
                                    (0, o.getDefaultSetting)("pdfBug") &&
                                    h.default.StepperManager &&
                                        h.default.StepperManager.enabled &&
                                        ((this.stepper = h.default.StepperManager.create(
                                                this.pageNumber - 1
                                            )),
                                            this.stepper.init(this.operatorList),
                                            (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
                                    var r = this.params;
                                    (this.gfx = new u.CanvasGraphics(
                                        r.canvasContext,
                                        this.commonObjs,
                                        this.objs,
                                        this.canvasFactory,
                                        this.webGLContext,
                                        r.imageLayer
                                    )),
                                    this.gfx.beginDrawing({
                                            transform: r.transform,
                                            viewport: r.viewport,
                                            transparency: t,
                                            background: r.background
                                        }),
                                        (this.operatorListIdx = 0),
                                        (this.graphicsReady = !0),
                                        this.graphicsReadyCallback && this.graphicsReadyCallback();
                                }
                            },
                            cancel: function () {
                                (this.running = !1),
                                (this.cancelled = !0),
                                this._canvas && e.delete(this._canvas),
                                    this.callback(
                                        new o.RenderingCancelledException(
                                            "Rendering cancelled, page " + this.pageNumber,
                                            "canvas"
                                        )
                                    );
                            },
                            operatorListChanged: function () {
                                this.graphicsReady ?
                                    (this.stepper &&
                                        this.stepper.updateOperatorList(this.operatorList),
                                        this.running || this._continue()) :
                                    this.graphicsReadyCallback ||
                                    (this.graphicsReadyCallback = this._continueBound);
                            },
                            _continue: function () {
                                (this.running = !0),
                                this.cancelled ||
                                    (this.task.onContinue ?
                                        this.task.onContinue(this._scheduleNextBound) :
                                        this._scheduleNext());
                            },
                            _scheduleNext: function () {
                                this.useRequestAnimationFrame && "undefined" != typeof window ?
                                    window.requestAnimationFrame(this._nextBound) :
                                    Promise.resolve(void 0).then(this._nextBound);
                            },
                            _next: function () {
                                this.cancelled ||
                                    ((this.operatorListIdx = this.gfx.executeOperatorList(
                                            this.operatorList,
                                            this.operatorListIdx,
                                            this._continueBound,
                                            this.stepper
                                        )),
                                        this.operatorListIdx === this.operatorList.argsArray.length &&
                                        ((this.running = !1),
                                            this.operatorList.lastChunk &&
                                            (this.gfx.endDrawing(),
                                                this._canvas && e.delete(this._canvas),
                                                this.callback())));
                            }
                        }),
                        t
                    );
                })();

            (t.version = "2.0.400"),
            (t.build = "f893bcd4"),
            (t.getDocument = function (e) {
                var t,
                    r = new P();
                if ("string" == typeof e)
                    t = {
                        url: e
                    };
                else if ((0, s.isArrayBuffer)(e))
                    t = {
                        data: e
                    };
                else if (e instanceof k)
                    t = {
                        range: e
                    };
                else {
                    if ("object" !== (void 0 === e ? "undefined" : a(e)))
                        throw new Error(
                            "Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"
                        );
                    if (!e.url && !e.data && !e.range)
                        throw new Error(
                            "Invalid parameter object: need either .data, .range or .url"
                        );
                    t = e;
                }
                var n = {},
                    i = null,
                    l = null,
                    u = o.DOMCMapReaderFactory;

                for (var c in t)
                    if ("url" !== c || "undefined" == typeof window) {
                        if ("range" !== c) {
                            if ("worker" !== c) {
                                if ("data" !== c || t[c] instanceof Uint8Array)
                                    "CMapReaderFactory" !== c ? (n[c] = t[c]) : (u = t[c]);
                                else {
                                    var h = t[c];
                                    if ("string" == typeof h) n[c] = (0, s.stringToBytes)(h);
                                    else if (
                                        "object" !== (void 0 === h ? "undefined" : a(h)) ||
                                        null === h ||
                                        isNaN(h.length)
                                    ) {
                                        if (!(0, s.isArrayBuffer)(h))
                                            throw new Error(
                                                "Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."
                                            );
                                        n[c] = new Uint8Array(h);
                                    } else n[c] = new Uint8Array(h);
                                }
                            } else l = t[c];
                        } else i = t[c];
                    } else n[c] = new URL(t[c], window.location).href;

                (n.rangeChunkSize = n.rangeChunkSize || v),
                (n.ignoreErrors = !0 !== n.stopAtErrors);
                var f = Object.values(s.NativeImageDecoding);

                if (
                    ((void 0 !== n.nativeImageDecoderSupport &&
                            f.includes(n.nativeImageDecoderSupport)) ||
                        (n.nativeImageDecoderSupport = s.NativeImageDecoding.DECODE),
                        (0, s.setVerbosityLevel)(n.verbosity),
                        !l)
                ) {
                    var m = {
                            postMessageTransfers: n.postMessageTransfers,
                            verbosity: n.verbosity
                        },
                        g = d.GlobalWorkerOptions.workerPort;
                    g ? ((m.port = g), (l = T.fromPort(m))) : (l = new T(m)),
                        (r._worker = l);
                }

                var _ = r.docId;
                return (
                    l.promise
                    .then(function () {
                        if (r.destroyed) throw new Error("Loading aborted");
                        return (function (e, t, r, n) {
                            return e.destroyed ?
                                Promise.reject(new Error("Worker was destroyed")) :
                                ((t.disableRange = (0, o.getDefaultSetting)(
                                        "disableRange"
                                    )),
                                    (t.disableAutoFetch = (0, o.getDefaultSetting)(
                                        "disableAutoFetch"
                                    )),
                                    (t.disableStream = (0, o.getDefaultSetting)(
                                        "disableStream"
                                    )),
                                    r &&
                                    ((t.length = r.length),
                                        (t.initialData = r.initialData)),
                                    e.messageHandler
                                    .sendWithPromise("GetDocRequest", {
                                        docId: n,
                                        apiVersion: "2.0.400",
                                        source: {
                                            data: t.data,
                                            url: t.url,
                                            password: t.password,
                                            disableAutoFetch: t.disableAutoFetch,
                                            rangeChunkSize: t.rangeChunkSize,
                                            length: t.length
                                        },
                                        maxImageSize: (0, o.getDefaultSetting)(
                                            "maxImageSize"
                                        ),
                                        disableFontFace: (0, o.getDefaultSetting)(
                                            "disableFontFace"
                                        ),
                                        disableCreateObjectURL: (0, o.getDefaultSetting)(
                                            "disableCreateObjectURL"
                                        ),
                                        postMessageTransfers: e.postMessageTransfers,
                                        docBaseUrl: t.docBaseUrl,
                                        nativeImageDecoderSupport: t.nativeImageDecoderSupport,
                                        ignoreErrors: t.ignoreErrors,
                                        isEvalSupported: (0, o.getDefaultSetting)(
                                            "isEvalSupported"
                                        )
                                    })
                                    .then(function (t) {
                                        if (e.destroyed)
                                            throw new Error("Worker was destroyed");
                                        return t;
                                    }));
                        })(l, n, i, _).then(function (e) {
                            if (r.destroyed) throw new Error("Loading aborted");
                            var t = void 0;
                            i
                                ?
                                (t = new p.PDFDataTransportStream(n, i)) :
                                n.data || (t = S(n));
                            var a = new s.MessageHandler(_, e, l.port);
                            a.postMessageTransfers = l.postMessageTransfers;
                            var o = new E(a, r, t, u);
                            (r._transport = o), a.send("Ready", null);
                        });
                    })
                    .catch(r._capability.reject),
                    r
                );
            }),
            (t.LoopbackPort = x),
            (t.PDFDataRangeTransport = k),
            (t.PDFWorker = T),
            (t.PDFDocumentProxy = C),
            (t.PDFPageProxy = R),
            (t.setPDFNetworkStreamFactory = function (e) {
                S = e;
            }),
            (t.version = "2.0.400"),
            (t.build = "f893bcd4");
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.Metadata = void 0);

            var n = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(0),
                a = r(10);

            var s = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (0, i.assert)(
                        "string" == typeof t,
                        "Metadata: input is not a string"
                    ),
                    (t = this._repair(t)),
                    (t = new a.SimpleXMLParser().parseFromString(t)),
                    (this._metadata = Object.create(null)),
                    this._parse(t);
                }

                return (
                    n(e, [{
                            key: "_repair",
                            value: function (e) {
                                return e.replace(/>\\376\\377([^<]+)/g, function (e, t) {
                                    for (
                                        var r = t
                                            .replace(/\\([0-3])([0-7])([0-7])/g, function (
                                                e,
                                                t,
                                                r,
                                                n
                                            ) {
                                                return String.fromCharCode(64 * t + 8 * r + 1 * n);
                                            })
                                            .replace(/&(amp|apos|gt|lt|quot);/g, function (e, t) {
                                                switch (t) {
                                                    case "amp":
                                                        return "&";

                                                    case "apos":
                                                        return "'";

                                                    case "gt":
                                                        return ">";

                                                    case "lt":
                                                        return "<";

                                                    case "quot":
                                                        return '"';
                                                }

                                                throw new Error("_repair: " + t + " isn't defined.");
                                            }),
                                            n = "",
                                            i = 0,
                                            a = r.length; i < a; i += 2
                                    ) {
                                        var s = 256 * r.charCodeAt(i) + r.charCodeAt(i + 1);
                                        n +=
                                            s >= 32 && s < 127 && 60 !== s && 62 !== s && 38 !== s ?
                                            String.fromCharCode(s) :
                                            "&#x" + (65536 + s).toString(16).substring(1) + ";";
                                    }

                                    return ">" + n;
                                });
                            }
                        },
                        {
                            key: "_parse",
                            value: function (e) {
                                var t = e.documentElement;
                                if ("rdf:rdf" !== t.nodeName.toLowerCase())
                                    for (
                                        t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase();

                                    )
                                        t = t.nextSibling;
                                var r = t ? t.nodeName.toLowerCase() : null;
                                if (t && "rdf:rdf" === r && t.hasChildNodes())
                                    for (var n = t.childNodes, i = 0, a = n.length; i < a; i++) {
                                        var s = n[i];
                                        if ("rdf:description" === s.nodeName.toLowerCase())
                                            for (var o = 0, l = s.childNodes.length; o < l; o++)
                                                if (
                                                    "#text" !== s.childNodes[o].nodeName.toLowerCase()
                                                ) {
                                                    var u = s.childNodes[o],
                                                        c = u.nodeName.toLowerCase();
                                                    this._metadata[c] = u.textContent.trim();
                                                }
                                    }
                            }
                        },
                        {
                            key: "get",
                            value: function (e) {
                                return this._metadata[e] || null;
                            }
                        },
                        {
                            key: "getAll",
                            value: function () {
                                return this._metadata;
                            }
                        },
                        {
                            key: "has",
                            value: function (e) {
                                return void 0 !== this._metadata[e];
                            }
                        }
                    ]),
                    e
                );
            })();

            t.Metadata = s;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.AnnotationLayer = void 0);

            var n = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(10),
                a = r(0);

            function s(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                t &&
                    (Object.setPrototypeOf ?
                        Object.setPrototypeOf(e, t) :
                        (e.__proto__ = t));
            }

            function l(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }

            var u = (function () {
                    function e() {
                        l(this, e);
                    }

                    return (
                        n(e, null, [{
                            key: "create",
                            value: function (e) {
                                switch (e.data.annotationType) {
                                    case a.AnnotationType.LINK:
                                        return new h(e);

                                    case a.AnnotationType.TEXT:
                                        return new d(e);

                                    case a.AnnotationType.WIDGET:
                                        switch (e.data.fieldType) {
                                            case "Tx":
                                                return new p(e);

                                            case "Btn":
                                                return e.data.radioButton ?
                                                    new v(e) :
                                                    e.data.checkBox ?
                                                    new m(e) :
                                                    new g(e);

                                            case "Ch":
                                                return new _(e);
                                        }

                                        return new f(e);

                                    case a.AnnotationType.POPUP:
                                        return new b(e);

                                    case a.AnnotationType.LINE:
                                        return new A(e);

                                    case a.AnnotationType.SQUARE:
                                        return new S(e);

                                    case a.AnnotationType.CIRCLE:
                                        return new w(e);

                                    case a.AnnotationType.POLYLINE:
                                        return new P(e);

                                    case a.AnnotationType.POLYGON:
                                        return new k(e);

                                    case a.AnnotationType.HIGHLIGHT:
                                        return new C(e);

                                    case a.AnnotationType.UNDERLINE:
                                        return new R(e);

                                    case a.AnnotationType.SQUIGGLY:
                                        return new x(e);

                                    case a.AnnotationType.STRIKEOUT:
                                        return new T(e);

                                    case a.AnnotationType.STAMP:
                                        return new E(e);

                                    case a.AnnotationType.FILEATTACHMENT:
                                        return new O(e);

                                    default:
                                        return new c(e);
                                }
                            }
                        }]),
                        e
                    );
                })(),
                c = (function () {
                    function e(t) {
                        var r =
                            arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n =
                            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        l(this, e),
                            (this.isRenderable = r),
                            (this.data = t.data),
                            (this.layer = t.layer),
                            (this.page = t.page),
                            (this.viewport = t.viewport),
                            (this.linkService = t.linkService),
                            (this.downloadManager = t.downloadManager),
                            (this.imageResourcesPath = t.imageResourcesPath),
                            (this.renderInteractiveForms = t.renderInteractiveForms),
                            (this.svgFactory = t.svgFactory),
                            r && (this.container = this._createContainer(n));
                    }

                    return (
                        n(e, [{
                                key: "_createContainer",
                                value: function () {
                                    var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0],
                                        t = this.data,
                                        r = this.page,
                                        n = this.viewport,
                                        i = document.createElement("section"),
                                        s = t.rect[2] - t.rect[0],
                                        o = t.rect[3] - t.rect[1];
                                    i.setAttribute("data-annotation-id", t.id);
                                    var l = a.Util.normalizeRect([
                                        t.rect[0],
                                        r.view[3] - t.rect[1] + r.view[1],
                                        t.rect[2],
                                        r.view[3] - t.rect[3] + r.view[1]
                                    ]);

                                    if (
                                        ((i.style.transform =
                                                "matrix(" + n.transform.join(",") + ")"),
                                            (i.style.transformOrigin = -l[0] + "px " + -l[1] + "px"),
                                            !e && t.borderStyle.width > 0)
                                    ) {
                                        (i.style.borderWidth = t.borderStyle.width + "px"),
                                        t.borderStyle.style !==
                                            a.AnnotationBorderStyleType.UNDERLINE &&
                                            ((s -= 2 * t.borderStyle.width),
                                                (o -= 2 * t.borderStyle.width));
                                        var u = t.borderStyle.horizontalCornerRadius,
                                            c = t.borderStyle.verticalCornerRadius;

                                        if (u > 0 || c > 0) {
                                            var h = u + "px / " + c + "px";
                                            i.style.borderRadius = h;
                                        }

                                        switch (t.borderStyle.style) {
                                            case a.AnnotationBorderStyleType.SOLID:
                                                i.style.borderStyle = "solid";
                                                break;

                                            case a.AnnotationBorderStyleType.DASHED:
                                                i.style.borderStyle = "dashed";
                                                break;

                                            case a.AnnotationBorderStyleType.BEVELED:
                                                (0, a.warn)("Unimplemented border style: beveled");
                                                break;

                                            case a.AnnotationBorderStyleType.INSET:
                                                (0, a.warn)("Unimplemented border style: inset");
                                                break;

                                            case a.AnnotationBorderStyleType.UNDERLINE:
                                                i.style.borderBottomStyle = "solid";
                                        }

                                        t.color ?
                                            (i.style.borderColor = a.Util.makeCssRgb(
                                                0 | t.color[0],
                                                0 | t.color[1],
                                                0 | t.color[2]
                                            )) :
                                            (i.style.borderWidth = 0);
                                    }

                                    return (
                                        (i.style.left = l[0] + "px"),
                                        (i.style.top = l[1] + "px"),
                                        (i.style.width = s + "px"),
                                        (i.style.height = o + "px"),
                                        i
                                    );
                                }
                            },
                            {
                                key: "_createPopup",
                                value: function (e, t, r) {
                                    t ||
                                        (((t = document.createElement("div")).style.height =
                                                e.style.height),
                                            (t.style.width = e.style.width),
                                            e.appendChild(t));
                                    var n = new y({
                                        container: e,
                                        trigger: t,
                                        color: r.color,
                                        title: r.title,
                                        contents: r.contents,
                                        hideWrapper: !0
                                    }).render();
                                    (n.style.left = e.style.width), e.appendChild(n);
                                }
                            },
                            {
                                key: "render",
                                value: function () {
                                    (0, a.unreachable)(
                                        "Abstract method `AnnotationElement.render` called"
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(),
                h = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.url || e.data.dest || e.data.action);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                                key: "render",
                                value: function () {
                                    this.container.className = "linkAnnotation";
                                    var e = this.data,
                                        t = this.linkService,
                                        r = document.createElement("a");
                                    return (
                                        (0, i.addLinkAttributes)(r, {
                                            url: e.url,
                                            target: e.newWindow ?
                                                i.LinkTarget.BLANK :
                                                t.externalLinkTarget,
                                            rel: t.externalLinkRel
                                        }),
                                        e.url ||
                                        (e.action ?
                                            this._bindNamedAction(r, e.action) :
                                            this._bindLink(r, e.dest)),
                                        this.container.appendChild(r),
                                        this.container
                                    );
                                }
                            },
                            {
                                key: "_bindLink",
                                value: function (e, t) {
                                    var r = this;
                                    (e.href = this.linkService.getDestinationHash(t)),
                                    (e.onclick = function () {
                                        return t && r.linkService.navigateTo(t), !1;
                                    }),
                                    t && (e.className = "internalLink");
                                }
                            },
                            {
                                key: "_bindNamedAction",
                                value: function (e, t) {
                                    var r = this;
                                    (e.href = this.linkService.getAnchorUrl("")),
                                    (e.onclick = function () {
                                        return r.linkService.executeNamedAction(t), !1;
                                    }),
                                    (e.className = "internalLink");
                                }
                            }
                        ]),
                        t
                    );
                })(),
                d = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "textAnnotation";
                                var e = document.createElement("img");
                                return (
                                    (e.style.height = this.container.style.height),
                                    (e.style.width = this.container.style.width),
                                    (e.src =
                                        this.imageResourcesPath +
                                        "annotation-" +
                                        this.data.name.toLowerCase() +
                                        ".svg"),
                                    (e.alt = "[{{type}} Annotation]"),
                                    (e.dataset.l10nId = "text_annotation_type"),
                                    (e.dataset.l10nArgs = JSON.stringify({
                                        type: this.data.name
                                    })),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, e, this.data),
                                    this.container.appendChild(e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                f = (function (e) {
                    function t() {
                        return (
                            l(this, t),
                            s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
                            )
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return this.container;
                            }
                        }]),
                        t
                    );
                })(),
                p = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r =
                            e.renderInteractiveForms ||
                            (!e.data.hasAppearance && !!e.data.fieldValue);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
                        );
                    }

                    return (
                        o(t, f),
                        n(t, [{
                                key: "render",
                                value: function () {
                                    this.container.className = "textWidgetAnnotation";
                                    var e = null;

                                    if (this.renderInteractiveForms) {
                                        if (
                                            (this.data.multiLine ?
                                                ((e = document.createElement(
                                                    "textarea"
                                                )).textContent = this.data.fieldValue) :
                                                (((e = document.createElement("input")).type =
                                                        "text"),
                                                    e.setAttribute("value", this.data.fieldValue)),
                                                (e.disabled = this.data.readOnly),
                                                null !== this.data.maxLen &&
                                                (e.maxLength = this.data.maxLen),
                                                this.data.comb)
                                        ) {
                                            var t =
                                                (this.data.rect[2] - this.data.rect[0]) /
                                                this.data.maxLen;
                                            e.classList.add("comb"),
                                                (e.style.letterSpacing = "calc(" + t + "px - 1ch)");
                                        }
                                    } else {
                                        ((e = document.createElement(
                                            "div"
                                        )).textContent = this.data.fieldValue),
                                        (e.style.verticalAlign = "middle"),
                                        (e.style.display = "table-cell");
                                        var r = null;
                                        this.data.fontRefName &&
                                            (r = this.page.commonObjs.getData(this.data.fontRefName)),
                                            this._setTextStyle(e, r);
                                    }

                                    return (
                                        null !== this.data.textAlignment &&
                                        (e.style.textAlign = ["left", "center", "right"][
                                            this.data.textAlignment
                                        ]),
                                        this.container.appendChild(e),
                                        this.container
                                    );
                                }
                            },
                            {
                                key: "_setTextStyle",
                                value: function (e, t) {
                                    var r = e.style;

                                    if (
                                        ((r.fontSize = this.data.fontSize + "px"),
                                            (r.direction = this.data.fontDirection < 0 ? "rtl" : "ltr"),
                                            t)
                                    ) {
                                        (r.fontWeight = t.black ?
                                            t.bold ?
                                            "900" :
                                            "bold" :
                                            t.bold ?
                                            "bold" :
                                            "normal"),
                                        (r.fontStyle = t.italic ? "italic" : "normal");
                                        var n = t.loadedName ? '"' + t.loadedName + '", ' : "",
                                            i = t.fallbackName || "Helvetica, sans-serif";
                                        r.fontFamily = n + i;
                                    }
                                }
                            }
                        ]),
                        t
                    );
                })(),
                m = (function (e) {
                    function t(e) {
                        return (
                            l(this, t),
                            s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e,
                                    e.renderInteractiveForms
                                )
                            )
                        );
                    }

                    return (
                        o(t, f),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "buttonWidgetAnnotation checkBox";
                                var e = document.createElement("input");
                                return (
                                    (e.disabled = this.data.readOnly),
                                    (e.type = "checkbox"),
                                    this.data.fieldValue &&
                                    "Off" !== this.data.fieldValue &&
                                    e.setAttribute("checked", !0),
                                    this.container.appendChild(e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                v = (function (e) {
                    function t(e) {
                        return (
                            l(this, t),
                            s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e,
                                    e.renderInteractiveForms
                                )
                            )
                        );
                    }

                    return (
                        o(t, f),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className =
                                    "buttonWidgetAnnotation radioButton";
                                var e = document.createElement("input");
                                return (
                                    (e.disabled = this.data.readOnly),
                                    (e.type = "radio"),
                                    (e.name = this.data.fieldName),
                                    this.data.fieldValue === this.data.buttonValue &&
                                    e.setAttribute("checked", !0),
                                    this.container.appendChild(e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                g = (function (e) {
                    function t() {
                        return (
                            l(this, t),
                            s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
                            )
                        );
                    }

                    return (
                        o(t, h),
                        n(t, [{
                            key: "render",
                            value: function () {
                                var e = (function e(t, r, n) {
                                    null === t && (t = Function.prototype);
                                    var i = Object.getOwnPropertyDescriptor(t, r);

                                    if (void 0 === i) {
                                        var a = Object.getPrototypeOf(t);
                                        return null === a ? void 0 : e(a, r, n);
                                    }

                                    if ("value" in i) return i.value;
                                    var s = i.get;
                                    return void 0 !== s ? s.call(n) : void 0;
                                })(
                                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                    "render",
                                    this
                                ).call(this);

                                return (e.className = "buttonWidgetAnnotation pushButton"), e;
                            }
                        }]),
                        t
                    );
                })(),
                _ = (function (e) {
                    function t(e) {
                        return (
                            l(this, t),
                            s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e,
                                    e.renderInteractiveForms
                                )
                            )
                        );
                    }

                    return (
                        o(t, f),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "choiceWidgetAnnotation";
                                var e = document.createElement("select");
                                (e.disabled = this.data.readOnly),
                                this.data.combo ||
                                    ((e.size = this.data.options.length),
                                        this.data.multiSelect && (e.multiple = !0));

                                for (var t = 0, r = this.data.options.length; t < r; t++) {
                                    var n = this.data.options[t],
                                        i = document.createElement("option");
                                    (i.textContent = n.displayValue),
                                    (i.value = n.exportValue),
                                    this.data.fieldValue.includes(n.displayValue) &&
                                        i.setAttribute("selected", !0),
                                        e.appendChild(i);
                                }

                                return this.container.appendChild(e), this.container;
                            }
                        }]),
                        t
                    );
                })(),
                b = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !(!e.data.title && !e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                if (
                                    ((this.container.className = "popupAnnotation"),
                                        [
                                            "Line",
                                            "Square",
                                            "Circle",
                                            "PolyLine",
                                            "Polygon"
                                        ].includes(this.data.parentType))
                                )
                                    return this.container;
                                var e = '[data-annotation-id="' + this.data.parentId + '"]',
                                    t = this.layer.querySelector(e);
                                if (!t) return this.container;
                                var r = new y({
                                        container: this.container,
                                        trigger: t,
                                        color: this.data.color,
                                        title: this.data.title,
                                        contents: this.data.contents
                                    }),
                                    n = parseFloat(t.style.left),
                                    i = parseFloat(t.style.width);
                                return (
                                    (this.container.style.transformOrigin = -(n + i) + "px -" + t.style.top),
                                    (this.container.style.left = n + i + "px"),
                                    this.container.appendChild(r.render()),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                y = (function () {
                    function e(t) {
                        l(this, e),
                            (this.container = t.container),
                            (this.trigger = t.trigger),
                            (this.color = t.color),
                            (this.title = t.title),
                            (this.contents = t.contents),
                            (this.hideWrapper = t.hideWrapper || !1),
                            (this.pinned = !1);
                    }

                    return (
                        n(e, [{
                                key: "render",
                                value: function () {
                                    var e = document.createElement("div");
                                    (e.className = "popupWrapper"),
                                    (this.hideElement = this.hideWrapper ? e : this.container),
                                    this.hideElement.setAttribute("hidden", !0);
                                    var t = document.createElement("div");
                                    t.className = "popup";
                                    var r = this.color;

                                    if (r) {
                                        var n = 0.7 * (255 - r[0]) + r[0],
                                            i = 0.7 * (255 - r[1]) + r[1],
                                            s = 0.7 * (255 - r[2]) + r[2];
                                        t.style.backgroundColor = a.Util.makeCssRgb(
                                            0 | n,
                                            0 | i,
                                            0 | s
                                        );
                                    }

                                    var o = this._formatContents(this.contents),
                                        l = document.createElement("h1");

                                    return (
                                        (l.textContent = this.title),
                                        this.trigger.addEventListener(
                                            "click",
                                            this._toggle.bind(this)
                                        ),
                                        this.trigger.addEventListener(
                                            "mouseover",
                                            this._show.bind(this, !1)
                                        ),
                                        this.trigger.addEventListener(
                                            "mouseout",
                                            this._hide.bind(this, !1)
                                        ),
                                        t.addEventListener("click", this._hide.bind(this, !0)),
                                        t.appendChild(l),
                                        t.appendChild(o),
                                        e.appendChild(t),
                                        e
                                    );
                                }
                            },
                            {
                                key: "_formatContents",
                                value: function (e) {
                                    for (
                                        var t = document.createElement("p"),
                                            r = e.split(/(?:\r\n?|\n)/),
                                            n = 0,
                                            i = r.length; n < i;
                                        ++n
                                    ) {
                                        var a = r[n];
                                        t.appendChild(document.createTextNode(a)),
                                            n < i - 1 && t.appendChild(document.createElement("br"));
                                    }

                                    return t;
                                }
                            },
                            {
                                key: "_toggle",
                                value: function () {
                                    this.pinned ? this._hide(!0) : this._show(!0);
                                }
                            },
                            {
                                key: "_show",
                                value: function () {
                                    arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0] &&
                                        (this.pinned = !0),
                                        this.hideElement.hasAttribute("hidden") &&
                                        (this.hideElement.removeAttribute("hidden"),
                                            (this.container.style.zIndex += 1));
                                }
                            },
                            {
                                key: "_hide",
                                value: function () {
                                    (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                                        arguments[0]) &&
                                    (this.pinned = !1),
                                    this.hideElement.hasAttribute("hidden") ||
                                        this.pinned ||
                                        (this.hideElement.setAttribute("hidden", !0),
                                            (this.container.style.zIndex -= 1));
                                }
                            }
                        ]),
                        e
                    );
                })(),
                A = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "lineAnnotation";
                                var e = this.data,
                                    t = e.rect[2] - e.rect[0],
                                    r = e.rect[3] - e.rect[1],
                                    n = this.svgFactory.create(t, r),
                                    i = this.svgFactory.createElement("svg:line");
                                return (
                                    i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                                    i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                                    i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                                    i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                                    i.setAttribute("stroke-width", e.borderStyle.width),
                                    i.setAttribute("stroke", "transparent"),
                                    n.appendChild(i),
                                    this.container.append(n),
                                    this._createPopup(this.container, i, e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                S = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "squareAnnotation";
                                var e = this.data,
                                    t = e.rect[2] - e.rect[0],
                                    r = e.rect[3] - e.rect[1],
                                    n = this.svgFactory.create(t, r),
                                    i = e.borderStyle.width,
                                    a = this.svgFactory.createElement("svg:rect");
                                return (
                                    a.setAttribute("x", i / 2),
                                    a.setAttribute("y", i / 2),
                                    a.setAttribute("width", t - i),
                                    a.setAttribute("height", r - i),
                                    a.setAttribute("stroke-width", i),
                                    a.setAttribute("stroke", "transparent"),
                                    a.setAttribute("fill", "none"),
                                    n.appendChild(a),
                                    this.container.append(n),
                                    this._createPopup(this.container, a, e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                w = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = "circleAnnotation";
                                var e = this.data,
                                    t = e.rect[2] - e.rect[0],
                                    r = e.rect[3] - e.rect[1],
                                    n = this.svgFactory.create(t, r),
                                    i = e.borderStyle.width,
                                    a = this.svgFactory.createElement("svg:ellipse");
                                return (
                                    a.setAttribute("cx", t / 2),
                                    a.setAttribute("cy", r / 2),
                                    a.setAttribute("rx", t / 2 - i / 2),
                                    a.setAttribute("ry", r / 2 - i / 2),
                                    a.setAttribute("stroke-width", i),
                                    a.setAttribute("stroke", "transparent"),
                                    a.setAttribute("fill", "none"),
                                    n.appendChild(a),
                                    this.container.append(n),
                                    this._createPopup(this.container, a, e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                P = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents),
                            n = s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                            );
                        return (
                            (n.containerClassName = "polylineAnnotation"),
                            (n.svgElementName = "svg:polyline"),
                            n
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                this.container.className = this.containerClassName;

                                for (
                                    var e = this.data,
                                        t = e.rect[2] - e.rect[0],
                                        r = e.rect[3] - e.rect[1],
                                        n = this.svgFactory.create(t, r),
                                        i = e.vertices,
                                        a = [],
                                        s = 0,
                                        o = i.length; s < o; s++
                                ) {
                                    var l = i[s].x - e.rect[0],
                                        u = e.rect[3] - i[s].y;
                                    a.push(l + "," + u);
                                }

                                a = a.join(" ");
                                var c = e.borderStyle.width,
                                    h = this.svgFactory.createElement(this.svgElementName);
                                return (
                                    h.setAttribute("points", a),
                                    h.setAttribute("stroke-width", c),
                                    h.setAttribute("stroke", "transparent"),
                                    h.setAttribute("fill", "none"),
                                    n.appendChild(h),
                                    this.container.append(n),
                                    this._createPopup(this.container, h, e),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                k = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                        );
                        return (
                            (r.containerClassName = "polygonAnnotation"),
                            (r.svgElementName = "svg:polygon"),
                            r
                        );
                    }

                    return o(t, P), t;
                })(),
                C = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return (
                                    (this.container.className = "highlightAnnotation"),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, null, this.data),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                R = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return (
                                    (this.container.className = "underlineAnnotation"),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, null, this.data),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                x = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return (
                                    (this.container.className = "squigglyAnnotation"),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, null, this.data),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                T = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return (
                                    (this.container.className = "strikeoutAnnotation"),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, null, this.data),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                E = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        return s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                            key: "render",
                            value: function () {
                                return (
                                    (this.container.className = "stampAnnotation"),
                                    this.data.hasPopup ||
                                    this._createPopup(this.container, null, this.data),
                                    this.container
                                );
                            }
                        }]),
                        t
                    );
                })(),
                O = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, !0)
                            ),
                            n = r.data.file;
                        return (
                            (r.filename = (0, i.getFilenameFromUrl)(n.filename)),
                            (r.content = n.content),
                            r.linkService.onFileAttachmentAnnotation({
                                id: (0, a.stringToPDFString)(n.filename),
                                filename: n.filename,
                                content: n.content
                            }),
                            r
                        );
                    }

                    return (
                        o(t, c),
                        n(t, [{
                                key: "render",
                                value: function () {
                                    this.container.className = "fileAttachmentAnnotation";
                                    var e = document.createElement("div");
                                    return (
                                        (e.style.height = this.container.style.height),
                                        (e.style.width = this.container.style.width),
                                        e.addEventListener("dblclick", this._download.bind(this)),
                                        this.data.hasPopup ||
                                        (!this.data.title && !this.data.contents) ||
                                        this._createPopup(this.container, e, this.data),
                                        this.container.appendChild(e),
                                        this.container
                                    );
                                }
                            },
                            {
                                key: "_download",
                                value: function () {
                                    this.downloadManager ?
                                        this.downloadManager.downloadData(
                                            this.content,
                                            this.filename,
                                            ""
                                        ) :
                                        (0, a.warn)(
                                            "Download cannot be started due to unavailable download manager"
                                        );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                I = (function () {
                    function e() {
                        l(this, e);
                    }

                    return (
                        n(e, null, [{
                                key: "render",
                                value: function (e) {
                                    for (var t = 0, r = e.annotations.length; t < r; t++) {
                                        var n = e.annotations[t];

                                        if (n) {
                                            var a = u.create({
                                                data: n,
                                                layer: e.div,
                                                page: e.page,
                                                viewport: e.viewport,
                                                linkService: e.linkService,
                                                downloadManager: e.downloadManager,
                                                imageResourcesPath: e.imageResourcesPath || "",
                                                renderInteractiveForms: e.renderInteractiveForms || !1,
                                                svgFactory: new i.DOMSVGFactory()
                                            });
                                            a.isRenderable && e.div.appendChild(a.render());
                                        }
                                    }
                                }
                            },
                            {
                                key: "update",
                                value: function (e) {
                                    for (var t = 0, r = e.annotations.length; t < r; t++) {
                                        var n = e.annotations[t],
                                            i = e.div.querySelector(
                                                '[data-annotation-id="' + n.id + '"]'
                                            );
                                        i &&
                                            (i.style.transform =
                                                "matrix(" + e.viewport.transform.join(",") + ")");
                                    }

                                    e.div.removeAttribute("hidden");
                                }
                            }
                        ]),
                        e
                    );
                })();

            t.AnnotationLayer = I;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.renderTextLayer = void 0);

            var n = r(0),
                i = r(10),
                a = (function () {
                    var e = 1e5,
                        t = /\S/;
                    var r = [
                        "left: ",
                        0,
                        "px; top: ",
                        0,
                        "px; font-size: ",
                        0,
                        "px; font-family: ",
                        "",
                        ";"
                    ];

                    function a(e, a, s) {
                        var o,
                            l = document.createElement("div"),
                            u = {
                                style: null,
                                angle: 0,
                                canvasWidth: 0,
                                isWhitespace: !1,
                                originalTransform: null,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                scale: 1
                            };
                        if ((e._textDivs.push(l), (o = a.str), !t.test(o)))
                            return (u.isWhitespace = !0), void e._textDivProperties.set(l, u);
                        var c = n.Util.transform(e._viewport.transform, a.transform),
                            h = Math.atan2(c[1], c[0]),
                            d = s[a.fontName];
                        d.vertical && (h += Math.PI / 2);
                        var f,
                            p,
                            m = Math.sqrt(c[2] * c[2] + c[3] * c[3]),
                            v = m;

                        if (
                            (d.ascent ?
                                (v = d.ascent * v) :
                                d.descent && (v = (1 + d.descent) * v),
                                0 === h ?
                                ((f = c[4]), (p = c[5] - v)) :
                                ((f = c[4] + v * Math.sin(h)), (p = c[5] - v * Math.cos(h))),
                                (r[1] = f),
                                (r[3] = p),
                                (r[5] = m),
                                (r[7] = d.fontFamily),
                                (u.style = r.join("")),
                                l.setAttribute("style", u.style),
                                (l.textContent = a.str),
                                (0, i.getDefaultSetting)("pdfBug") &&
                                (l.dataset.fontName = a.fontName),
                                0 !== h && (u.angle = h * (180 / Math.PI)),
                                a.str.length > 1 &&
                                (d.vertical ?
                                    (u.canvasWidth = a.height * e._viewport.scale) :
                                    (u.canvasWidth = a.width * e._viewport.scale)),
                                e._textDivProperties.set(l, u),
                                e._textContentStream && e._layoutText(l),
                                e._enhanceTextSelection)
                        ) {
                            var g = 1,
                                _ = 0;
                            0 !== h && ((g = Math.cos(h)), (_ = Math.sin(h)));
                            var b,
                                y,
                                A = (d.vertical ? a.height : a.width) * e._viewport.scale,
                                S = m;
                            0 !== h ?
                                ((b = [g, _, -_, g, f, p]),
                                    (y = n.Util.getAxialAlignedBoundingBox([0, 0, A, S], b))) :
                                (y = [f, p, f + A, p + S]),
                                e._bounds.push({
                                    left: y[0],
                                    top: y[1],
                                    right: y[2],
                                    bottom: y[3],
                                    div: l,
                                    size: [A, S],
                                    m: b
                                });
                        }
                    }

                    function s(t) {
                        if (!t._canceled) {
                            var r = t._textDivs,
                                n = t._capability,
                                i = r.length;
                            if (i > e) return (t._renderingDone = !0), void n.resolve();
                            if (!t._textContentStream)
                                for (var a = 0; a < i; a++) t._layoutText(r[a]);
                            (t._renderingDone = !0), n.resolve();
                        }
                    }

                    function o(e) {
                        for (
                            var t = e._bounds,
                                r = e._viewport,
                                i = (function (e, t, r) {
                                    var n = r.map(function (e, t) {
                                        return {
                                            x1: e.left,
                                            y1: e.top,
                                            x2: e.right,
                                            y2: e.bottom,
                                            index: t,
                                            x1New: void 0,
                                            x2New: void 0
                                        };
                                    });
                                    l(e, n);
                                    var i = new Array(r.length);
                                    return (
                                        n.forEach(function (e) {
                                            var t = e.index;
                                            i[t] = {
                                                left: e.x1New,
                                                top: 0,
                                                right: e.x2New,
                                                bottom: 0
                                            };
                                        }),
                                        r.map(function (t, r) {
                                            var a = i[r],
                                                s = n[r];
                                            (s.x1 = t.top),
                                            (s.y1 = e - a.right),
                                            (s.x2 = t.bottom),
                                            (s.y2 = e - a.left),
                                            (s.index = r),
                                            (s.x1New = void 0),
                                            (s.x2New = void 0);
                                        }),
                                        l(t, n),
                                        n.forEach(function (e) {
                                            var t = e.index;
                                            (i[t].top = e.x1New), (i[t].bottom = e.x2New);
                                        }),
                                        i
                                    );
                                })(r.width, r.height, t),
                                a = 0; a < i.length; a++
                        ) {
                            var s = t[a].div,
                                o = e._textDivProperties.get(s);

                            if (0 !== o.angle) {
                                var u = i[a],
                                    c = t[a],
                                    h = c.m,
                                    d = h[0],
                                    f = h[1],
                                    p = [
                                        [0, 0],
                                        [0, c.size[1]],
                                        [c.size[0], 0], c.size
                                    ],
                                    m = new Float64Array(64);
                                p.forEach(function (e, t) {
                                    var r = n.Util.applyTransform(e, h);
                                    (m[t + 0] = d && (u.left - r[0]) / d),
                                    (m[t + 4] = f && (u.top - r[1]) / f),
                                    (m[t + 8] = d && (u.right - r[0]) / d),
                                    (m[t + 12] = f && (u.bottom - r[1]) / f),
                                    (m[t + 16] = f && (u.left - r[0]) / -f),
                                    (m[t + 20] = d && (u.top - r[1]) / d),
                                    (m[t + 24] = f && (u.right - r[0]) / -f),
                                    (m[t + 28] = d && (u.bottom - r[1]) / d),
                                    (m[t + 32] = d && (u.left - r[0]) / -d),
                                    (m[t + 36] = f && (u.top - r[1]) / -f),
                                    (m[t + 40] = d && (u.right - r[0]) / -d),
                                    (m[t + 44] = f && (u.bottom - r[1]) / -f),
                                    (m[t + 48] = f && (u.left - r[0]) / f),
                                    (m[t + 52] = d && (u.top - r[1]) / -d),
                                    (m[t + 56] = f && (u.right - r[0]) / f),
                                    (m[t + 60] = d && (u.bottom - r[1]) / -d);
                                });

                                var v = function v(e, t, r) {
                                        for (var n = 0, i = 0; i < r; i++) {
                                            var a = e[t++];
                                            a > 0 && (n = n ? Math.min(a, n) : a);
                                        }

                                        return n;
                                    },
                                    g = 1 + Math.min(Math.abs(d), Math.abs(f));

                                (o.paddingLeft = v(m, 32, 16) / g),
                                (o.paddingTop = v(m, 48, 16) / g),
                                (o.paddingRight = v(m, 0, 16) / g),
                                (o.paddingBottom = v(m, 16, 16) / g),
                                e._textDivProperties.set(s, o);
                            } else
                                (o.paddingLeft = t[a].left - i[a].left),
                                (o.paddingTop = t[a].top - i[a].top),
                                (o.paddingRight = i[a].right - t[a].right),
                                (o.paddingBottom = i[a].bottom - t[a].bottom),
                                e._textDivProperties.set(s, o);
                        }
                    }

                    function l(e, t) {
                        t.sort(function (e, t) {
                            return e.x1 - t.x1 || e.index - t.index;
                        });
                        var r = [{
                            start: -1 / 0,
                            end: 1 / 0,
                            boundary: {
                                x1: -1 / 0,
                                y1: -1 / 0,
                                x2: 0,
                                y2: 1 / 0,
                                index: -1,
                                x1New: 0,
                                x2New: 0
                            }
                        }];
                        t.forEach(function (e) {
                                for (var t = 0; t < r.length && r[t].end <= e.y1;) t++;

                                for (var n, i, a = r.length - 1; a >= 0 && r[a].start >= e.y2;)
                                    a--;

                                var s,
                                    o,
                                    l = -1 / 0;

                                for (s = t; s <= a; s++) {
                                    var u;
                                    (u =
                                        (i = (n = r[s]).boundary).x2 > e.x1 ?
                                        i.index > e.index ?
                                        i.x1New :
                                        e.x1 :
                                        void 0 === i.x2New ?
                                        (i.x2 + e.x1) / 2 :
                                        i.x2New) > l && (l = u);
                                }

                                for (e.x1New = l, s = t; s <= a; s++)
                                    void 0 === (i = (n = r[s]).boundary).x2New ?
                                    i.x2 > e.x1 ?
                                    i.index > e.index && (i.x2New = i.x2) :
                                    (i.x2New = l) :
                                    i.x2New > l && (i.x2New = Math.max(l, i.x2));

                                var c = [],
                                    h = null;

                                for (s = t; s <= a; s++) {
                                    var d = (i = (n = r[s]).boundary).x2 > e.x2 ? i : e;
                                    h === d ?
                                        (c[c.length - 1].end = n.end) :
                                        (c.push({
                                                start: n.start,
                                                end: n.end,
                                                boundary: d
                                            }),
                                            (h = d));
                                }

                                for (
                                    r[t].start < e.y1 &&
                                    ((c[0].start = e.y1),
                                        c.unshift({
                                            start: r[t].start,
                                            end: e.y1,
                                            boundary: r[t].boundary
                                        })),
                                    e.y2 < r[a].end &&
                                    ((c[c.length - 1].end = e.y2),
                                        c.push({
                                            start: e.y2,
                                            end: r[a].end,
                                            boundary: r[a].boundary
                                        })),
                                    s = t; s <= a; s++
                                )
                                    if (void 0 === (i = (n = r[s]).boundary).x2New) {
                                        var f = !1;

                                        for (o = t - 1; !f && o >= 0 && r[o].start >= i.y1; o--)
                                            f = r[o].boundary === i;

                                        for (o = a + 1; !f && o < r.length && r[o].end <= i.y2; o++)
                                            f = r[o].boundary === i;

                                        for (o = 0; !f && o < c.length; o++) f = c[o].boundary === i;

                                        f || (i.x2New = l);
                                    }

                                Array.prototype.splice.apply(r, [t, a - t + 1].concat(c));
                            }),
                            r.forEach(function (t) {
                                var r = t.boundary;
                                void 0 === r.x2New && (r.x2New = Math.max(e, r.x2));
                            });
                    }

                    function u(e) {
                        var t = e.textContent,
                            r = e.textContentStream,
                            i = e.container,
                            a = e.viewport,
                            s = e.textDivs,
                            o = e.textContentItemsStr,
                            l = e.enhanceTextSelection;
                        (this._textContent = t),
                        (this._textContentStream = r),
                        (this._container = i),
                        (this._viewport = a),
                        (this._textDivs = s || []),
                        (this._textContentItemsStr = o || []),
                        (this._enhanceTextSelection = !!l),
                        (this._reader = null),
                        (this._layoutTextLastFontSize = null),
                        (this._layoutTextLastFontFamily = null),
                        (this._layoutTextCtx = null),
                        (this._textDivProperties = new WeakMap()),
                        (this._renderingDone = !1),
                        (this._canceled = !1),
                        (this._capability = (0, n.createPromiseCapability)()),
                        (this._renderTimer = null),
                        (this._bounds = []);
                    }

                    return (
                        (u.prototype = {
                            get promise() {
                                return this._capability.promise;
                            },

                            cancel: function () {
                                this._reader &&
                                    (this._reader.cancel(
                                            new n.AbortException("text layer task cancelled")
                                        ),
                                        (this._reader = null)),
                                    (this._canceled = !0),
                                    null !== this._renderTimer &&
                                    (clearTimeout(this._renderTimer),
                                        (this._renderTimer = null)),
                                    this._capability.reject("canceled");
                            },
                            _processItems: function (e, t) {
                                for (var r = 0, n = e.length; r < n; r++)
                                    this._textContentItemsStr.push(e[r].str), a(this, e[r], t);
                            },
                            _layoutText: function (e) {
                                var t = this._container,
                                    r = this._textDivProperties.get(e);

                                if (!r.isWhitespace) {
                                    var n = e.style.fontSize,
                                        i = e.style.fontFamily;
                                    (n === this._layoutTextLastFontSize &&
                                        i === this._layoutTextLastFontFamily) ||
                                    ((this._layoutTextCtx.font = n + " " + i),
                                        (this._lastFontSize = n),
                                        (this._lastFontFamily = i));

                                    var a = this._layoutTextCtx.measureText(e.textContent).width,
                                        s = "";

                                    0 !== r.canvasWidth &&
                                        a > 0 &&
                                        ((r.scale = r.canvasWidth / a),
                                            (s = "scaleX(" + r.scale + ")")),
                                        0 !== r.angle && (s = "rotate(" + r.angle + "deg) " + s),
                                        "" !== s &&
                                        ((r.originalTransform = s), (e.style.transform = s)),
                                        this._textDivProperties.set(e, r),
                                        t.appendChild(e);
                                }
                            },
                            _render: function (e) {
                                var t = this,
                                    r = (0, n.createPromiseCapability)(),
                                    i = Object.create(null),
                                    a = document.createElement("canvas");

                                if (
                                    ((a.mozOpaque = !0),
                                        (this._layoutTextCtx = a.getContext("2d", {
                                            alpha: !1
                                        })),
                                        this._textContent)
                                ) {
                                    var o = this._textContent.items,
                                        l = this._textContent.styles;
                                    this._processItems(o, l), r.resolve();
                                } else {
                                    if (!this._textContentStream)
                                        throw new Error(
                                            'Neither "textContent" nor "textContentStream" parameters specified.'
                                        );
                                    (this._reader = this._textContentStream.getReader()),
                                    (function e() {
                                        t._reader.read().then(function (a) {
                                            var s = a.value;
                                            a.done ?
                                                r.resolve() :
                                                (n.Util.extendObj(i, s.styles),
                                                    t._processItems(s.items, i),
                                                    e());
                                        }, r.reject);
                                    })();
                                }

                                r.promise.then(function () {
                                    (i = null),
                                    e
                                        ?
                                        (t._renderTimer = setTimeout(function () {
                                            s(t), (t._renderTimer = null);
                                        }, e)) :
                                        s(t);
                                }, this._capability.reject);
                            },
                            expandTextDivs: function (e) {
                                if (this._enhanceTextSelection && this._renderingDone) {
                                    null !== this._bounds && (o(this), (this._bounds = null));

                                    for (var t = 0, r = this._textDivs.length; t < r; t++) {
                                        var n = this._textDivs[t],
                                            i = this._textDivProperties.get(n);

                                        if (!i.isWhitespace)
                                            if (e) {
                                                var a = "",
                                                    s = "";
                                                1 !== i.scale && (a = "scaleX(" + i.scale + ")"),
                                                    0 !== i.angle &&
                                                    (a = "rotate(" + i.angle + "deg) " + a),
                                                    0 !== i.paddingLeft &&
                                                    ((s +=
                                                            " padding-left: " +
                                                            i.paddingLeft / i.scale +
                                                            "px;"),
                                                        (a +=
                                                            " translateX(" +
                                                            -i.paddingLeft / i.scale +
                                                            "px)")),
                                                    0 !== i.paddingTop &&
                                                    ((s += " padding-top: " + i.paddingTop + "px;"),
                                                        (a += " translateY(" + -i.paddingTop + "px)")),
                                                    0 !== i.paddingRight &&
                                                    (s +=
                                                        " padding-right: " +
                                                        i.paddingRight / i.scale +
                                                        "px;"),
                                                    0 !== i.paddingBottom &&
                                                    (s +=
                                                        " padding-bottom: " + i.paddingBottom + "px;"),
                                                    "" !== s && n.setAttribute("style", i.style + s),
                                                    "" !== a && (n.style.transform = a);
                                            } else
                                                (n.style.padding = 0),
                                                (n.style.transform = i.originalTransform || "");
                                    }
                                }
                            }
                        }),
                        function (e) {
                            var t = new u({
                                textContent: e.textContent,
                                textContentStream: e.textContentStream,
                                container: e.container,
                                viewport: e.viewport,
                                textDivs: e.textDivs,
                                textContentItemsStr: e.textContentItemsStr,
                                enhanceTextSelection: e.enhanceTextSelection
                            });
                            return t._render(e.timeout), t;
                        }
                    );
                })();

            t.renderTextLayer = a;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.SVGGraphics = void 0);
            var n,
                i = r(0),
                a = r(10),
                s = r(25),
                o =
                (n = s) && n.__esModule ?
                n :
                {
                    default: n
                };

            var l,
                u = {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fillColor: "#000000"
                },
                c = (function () {
                    for (
                        var e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                            t = 12,
                            r = new Int32Array(256),
                            n = 0; n < 256; n++
                    ) {
                        for (var a = n, s = 0; s < 8; s++)
                            a =
                            1 & a ?
                            3988292384 ^ ((a >> 1) & 2147483647) :
                            (a >> 1) & 2147483647;

                        r[n] = a;
                    }

                    function l(e, t, n, i) {
                        var a = i,
                            s = t.length;
                        (n[a] = (s >> 24) & 255),
                        (n[a + 1] = (s >> 16) & 255),
                        (n[a + 2] = (s >> 8) & 255),
                        (n[a + 3] = 255 & s),
                        (n[(a += 4)] = 255 & e.charCodeAt(0)),
                        (n[a + 1] = 255 & e.charCodeAt(1)),
                        (n[a + 2] = 255 & e.charCodeAt(2)),
                        (n[a + 3] = 255 & e.charCodeAt(3)),
                        (a += 4),
                        n.set(t, a);

                        var o = (function (e, t, n) {
                            for (var i = -1, a = t; a < n; a++) {
                                var s = 255 & (i ^ e[a]);
                                i = (i >>> 8) ^ r[s];
                            }

                            return -1 ^ i;
                        })(n, i + 4, (a += t.length));

                        (n[a] = (o >> 24) & 255),
                        (n[a + 1] = (o >> 16) & 255),
                        (n[a + 2] = (o >> 8) & 255),
                        (n[a + 3] = 255 & o);
                    }

                    function u(e) {
                        var t = e.length,
                            r = Math.ceil(t / 65535),
                            n = new Uint8Array(2 + t + 5 * r + 4),
                            i = 0;
                        (n[i++] = 120), (n[i++] = 156);

                        for (var a = 0; t > 65535;)
                            (n[i++] = 0),
                            (n[i++] = 255),
                            (n[i++] = 255),
                            (n[i++] = 0),
                            (n[i++] = 0),
                            n.set(e.subarray(a, a + 65535), i),
                            (i += 65535),
                            (a += 65535),
                            (t -= 65535);

                        (n[i++] = 1),
                        (n[i++] = 255 & t),
                        (n[i++] = (t >> 8) & 255),
                        (n[i++] = 255 & ~t),
                        (n[i++] = ((65535 & ~t) >> 8) & 255),
                        n.set(e.subarray(a), i),
                            (i += e.length - a);

                        var s = (function (e, t, r) {
                            for (var n = 1, i = 0, a = t; a < r; ++a)
                                i = (i + (n = (n + (255 & e[a])) % 65521)) % 65521;

                            return (i << 16) | n;
                        })(e, 0, e.length);

                        return (
                            (n[i++] = (s >> 24) & 255),
                            (n[i++] = (s >> 16) & 255),
                            (n[i++] = (s >> 8) & 255),
                            (n[i++] = 255 & s),
                            n
                        );
                    }

                    function c(r, n, a, s) {
                        var c,
                            h,
                            d,
                            f = r.width,
                            p = r.height,
                            m = r.data;

                        switch (n) {
                            case i.ImageKind.GRAYSCALE_1BPP:
                                (h = 0), (c = 1), (d = (f + 7) >> 3);
                                break;

                            case i.ImageKind.RGB_24BPP:
                                (h = 2), (c = 8), (d = 3 * f);
                                break;

                            case i.ImageKind.RGBA_32BPP:
                                (h = 6), (c = 8), (d = 4 * f);
                                break;

                            default:
                                throw new Error("invalid format");
                        }

                        var v,
                            g,
                            _ = new Uint8Array((1 + d) * p),
                            b = 0,
                            y = 0;

                        for (v = 0; v < p; ++v)
                            (_[b++] = 0), _.set(m.subarray(y, y + d), b), (y += d), (b += d);

                        if (n === i.ImageKind.GRAYSCALE_1BPP && s)
                            for (b = 0, v = 0; v < p; v++)
                                for (b++, g = 0; g < d; g++) _[b++] ^= 255;

                        var A = new Uint8Array([
                                (f >> 24) & 255,
                                (f >> 16) & 255,
                                (f >> 8) & 255,
                                255 & f,
                                (p >> 24) & 255,
                                (p >> 16) & 255,
                                (p >> 8) & 255,
                                255 & p,
                                c,
                                h,
                                0,
                                0,
                                0
                            ]),
                            S = (function (e) {
                                if (!(0, o.default)()) return u(e);

                                try {
                                    var t;
                                    t = parseInt(process.versions.node) >= 8 ? e : new Buffer(e);

                                    var r = require("zlib").deflateSync(t, {
                                        level: 9
                                    });

                                    return r instanceof Uint8Array ? r : new Uint8Array(r);
                                } catch (e) {
                                    (0, i.warn)(
                                        "Not compressing PNG because zlib.deflateSync is unavailable: " +
                                        e
                                    );
                                }

                                return u(e);
                            })(_),
                            w = e.length + 3 * t + A.length + S.length,
                            P = new Uint8Array(w),
                            k = 0;

                        return (
                            P.set(e, k),
                            l("IHDR", A, P, (k += e.length)),
                            l("IDATA", S, P, (k += t + A.length)),
                            (k += t + S.length),
                            l("IEND", new Uint8Array(0), P, k),
                            (0, i.createObjectURL)(P, "image/png", a)
                        );
                    }

                    return function (e, t, r) {
                        return c(
                            e,
                            void 0 === e.kind ? i.ImageKind.GRAYSCALE_1BPP : e.kind,
                            t,
                            r
                        );
                    };
                })(),
                h = (function () {
                    function e() {
                        (this.fontSizeScale = 1),
                        (this.fontWeight = u.fontWeight),
                        (this.fontSize = 0),
                        (this.textMatrix = i.IDENTITY_MATRIX),
                        (this.fontMatrix = i.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRise = 0),
                        (this.fillColor = u.fillColor),
                        (this.strokeColor = "#000000"),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.lineJoin = ""),
                        (this.lineCap = ""),
                        (this.miterLimit = 0),
                        (this.dashArray = []),
                        (this.dashPhase = 0),
                        (this.dependencies = []),
                        (this.activeClipUrl = null),
                        (this.clipGroup = null),
                        (this.maskId = "");
                    }

                    return (
                        (e.prototype = {
                            clone: function () {
                                return Object.create(this);
                            },
                            setCurrentPoint: function (e, t) {
                                (this.x = e), (this.y = t);
                            }
                        }),
                        e
                    );
                })();

            (t.SVGGraphics = l = (function () {
                function e(e) {
                    if (Number.isInteger(e)) return e.toString();
                    var t = e.toFixed(10),
                        r = t.length - 1;
                    if ("0" !== t[r]) return t;

                    do {
                        r--;
                    } while ("0" === t[r]);

                    return t.substr(0, "." === t[r] ? r : r + 1);
                }

                function t(t) {
                    if (0 === t[4] && 0 === t[5]) {
                        if (0 === t[1] && 0 === t[2])
                            return 1 === t[0] && 1 === t[3] ?
                                "" :
                                "scale(" + e(t[0]) + " " + e(t[3]) + ")";
                        if (t[0] === t[3] && t[1] === -t[2])
                            return "rotate(" + e((180 * Math.acos(t[0])) / Math.PI) + ")";
                    } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3])
                        return "translate(" + e(t[4]) + " " + e(t[5]) + ")";

                    return (
                        "matrix(" +
                        e(t[0]) +
                        " " +
                        e(t[1]) +
                        " " +
                        e(t[2]) +
                        " " +
                        e(t[3]) +
                        " " +
                        e(t[4]) +
                        " " +
                        e(t[5]) +
                        ")"
                    );
                }

                function r(e, t, r) {
                    (this.svgFactory = new a.DOMSVGFactory()),
                    (this.current = new h()),
                    (this.transformMatrix = i.IDENTITY_MATRIX),
                    (this.transformStack = []),
                    (this.extraStack = []),
                    (this.commonObjs = e),
                    (this.objs = t),
                    (this.pendingClip = null),
                    (this.pendingEOFill = !1),
                    (this.embedFonts = !1),
                    (this.embeddedFonts = Object.create(null)),
                    (this.cssStyle = null),
                    (this.forceDataSchema = !!r);
                }

                var n = "http://www.w3.org/1999/xlink",
                    s = ["butt", "round", "square"],
                    o = ["miter", "round", "bevel"],
                    l = 0,
                    d = 0;
                return (
                    (r.prototype = {
                        save: function () {
                            this.transformStack.push(this.transformMatrix);
                            var e = this.current;
                            this.extraStack.push(e), (this.current = e.clone());
                        },
                        restore: function () {
                            (this.transformMatrix = this.transformStack.pop()),
                            (this.current = this.extraStack.pop()),
                            (this.pendingClip = null),
                            (this.tgrp = null);
                        },
                        group: function (e) {
                            this.save(), this.executeOpTree(e), this.restore();
                        },
                        loadDependencies: function (e) {
                            for (
                                var t = this,
                                    r = e.fnArray,
                                    n = r.length,
                                    a = e.argsArray,
                                    s = 0; s < n; s++
                            )
                                if (i.OPS.dependency === r[s])
                                    for (var o = a[s], l = 0, u = o.length; l < u; l++) {
                                        var c,
                                            h = o[l];
                                        (c =
                                            "g_" === h.substring(0, 2) ?
                                            new Promise(function (e) {
                                                t.commonObjs.get(h, e);
                                            }) :
                                            new Promise(function (e) {
                                                t.objs.get(h, e);
                                            })),
                                        this.current.dependencies.push(c);
                                    }

                            return Promise.all(this.current.dependencies);
                        },
                        transform: function (e, t, r, n, a, s) {
                            var o = [e, t, r, n, a, s];
                            (this.transformMatrix = i.Util.transform(
                                this.transformMatrix,
                                o
                            )),
                            (this.tgrp = null);
                        },
                        getSVG: function (e, t) {
                            var r = this;
                            this.viewport = t;

                            var n = this._initialize(t);

                            return this.loadDependencies(e).then(function () {
                                r.transformMatrix = i.IDENTITY_MATRIX;
                                var t = r.convertOpList(e);
                                return r.executeOpTree(t), n;
                            });
                        },
                        convertOpList: function (e) {
                            var t = e.argsArray,
                                r = e.fnArray,
                                n = r.length,
                                a = [],
                                s = [];

                            for (var o in i.OPS) a[i.OPS[o]] = o;

                            for (var l = 0; l < n; l++) {
                                var u = r[l];
                                s.push({
                                    fnId: u,
                                    fn: a[u],
                                    args: t[l]
                                });
                            }

                            return (function (e) {
                                for (var t = [], r = [], n = e.length, i = 0; i < n; i++)
                                    "save" !== e[i].fn ?
                                    "restore" === e[i].fn ?
                                    (t = r.pop()) :
                                    t.push(e[i]) :
                                    (t.push({
                                            fnId: 92,
                                            fn: "group",
                                            items: []
                                        }),
                                        r.push(t),
                                        (t = t[t.length - 1].items));

                                return t;
                            })(s);
                        },
                        executeOpTree: function (e) {
                            for (var t = e.length, r = 0; r < t; r++) {
                                var n = e[r].fn,
                                    a = e[r].fnId,
                                    s = e[r].args;

                                switch (0 | a) {
                                    case i.OPS.beginText:
                                        this.beginText();
                                        break;

                                    case i.OPS.setLeading:
                                        this.setLeading(s);
                                        break;

                                    case i.OPS.setLeadingMoveText:
                                        this.setLeadingMoveText(s[0], s[1]);
                                        break;

                                    case i.OPS.setFont:
                                        this.setFont(s);
                                        break;

                                    case i.OPS.showText:
                                    case i.OPS.showSpacedText:
                                        this.showText(s[0]);
                                        break;

                                    case i.OPS.endText:
                                        this.endText();
                                        break;

                                    case i.OPS.moveText:
                                        this.moveText(s[0], s[1]);
                                        break;

                                    case i.OPS.setCharSpacing:
                                        this.setCharSpacing(s[0]);
                                        break;

                                    case i.OPS.setWordSpacing:
                                        this.setWordSpacing(s[0]);
                                        break;

                                    case i.OPS.setHScale:
                                        this.setHScale(s[0]);
                                        break;

                                    case i.OPS.setTextMatrix:
                                        this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                        break;

                                    case i.OPS.setTextRise:
                                        this.setTextRise(s[0]);
                                        break;

                                    case i.OPS.setLineWidth:
                                        this.setLineWidth(s[0]);
                                        break;

                                    case i.OPS.setLineJoin:
                                        this.setLineJoin(s[0]);
                                        break;

                                    case i.OPS.setLineCap:
                                        this.setLineCap(s[0]);
                                        break;

                                    case i.OPS.setMiterLimit:
                                        this.setMiterLimit(s[0]);
                                        break;

                                    case i.OPS.setFillRGBColor:
                                        this.setFillRGBColor(s[0], s[1], s[2]);
                                        break;

                                    case i.OPS.setStrokeRGBColor:
                                        this.setStrokeRGBColor(s[0], s[1], s[2]);
                                        break;

                                    case i.OPS.setDash:
                                        this.setDash(s[0], s[1]);
                                        break;

                                    case i.OPS.setGState:
                                        this.setGState(s[0]);
                                        break;

                                    case i.OPS.fill:
                                        this.fill();
                                        break;

                                    case i.OPS.eoFill:
                                        this.eoFill();
                                        break;

                                    case i.OPS.stroke:
                                        this.stroke();
                                        break;

                                    case i.OPS.fillStroke:
                                        this.fillStroke();
                                        break;

                                    case i.OPS.eoFillStroke:
                                        this.eoFillStroke();
                                        break;

                                    case i.OPS.clip:
                                        this.clip("nonzero");
                                        break;

                                    case i.OPS.eoClip:
                                        this.clip("evenodd");
                                        break;

                                    case i.OPS.paintSolidColorImageMask:
                                        this.paintSolidColorImageMask();
                                        break;

                                    case i.OPS.paintJpegXObject:
                                        this.paintJpegXObject(s[0], s[1], s[2]);
                                        break;

                                    case i.OPS.paintImageXObject:
                                        this.paintImageXObject(s[0]);
                                        break;

                                    case i.OPS.paintInlineImageXObject:
                                        this.paintInlineImageXObject(s[0]);
                                        break;

                                    case i.OPS.paintImageMaskXObject:
                                        this.paintImageMaskXObject(s[0]);
                                        break;

                                    case i.OPS.paintFormXObjectBegin:
                                        this.paintFormXObjectBegin(s[0], s[1]);
                                        break;

                                    case i.OPS.paintFormXObjectEnd:
                                        this.paintFormXObjectEnd();
                                        break;

                                    case i.OPS.closePath:
                                        this.closePath();
                                        break;

                                    case i.OPS.closeStroke:
                                        this.closeStroke();
                                        break;

                                    case i.OPS.closeFillStroke:
                                        this.closeFillStroke();
                                        break;

                                    case i.OPS.closeEOFillStroke:
                                        this.closeEOFillStroke();
                                        break;

                                    case i.OPS.nextLine:
                                        this.nextLine();
                                        break;

                                    case i.OPS.transform:
                                        this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                        break;

                                    case i.OPS.constructPath:
                                        this.constructPath(s[0], s[1]);
                                        break;

                                    case i.OPS.endPath:
                                        this.endPath();
                                        break;

                                    case 92:
                                        this.group(e[r].items);
                                        break;

                                    default:
                                        (0, i.warn)("Unimplemented operator " + n);
                                }
                            }
                        },
                        setWordSpacing: function (e) {
                            this.current.wordSpacing = e;
                        },
                        setCharSpacing: function (e) {
                            this.current.charSpacing = e;
                        },
                        nextLine: function () {
                            this.moveText(0, this.current.leading);
                        },
                        setTextMatrix: function (t, r, n, i, a, s) {
                            var o = this.current;
                            (this.current.textMatrix = this.current.lineMatrix = [
                                t,
                                r,
                                n,
                                i,
                                a,
                                s
                            ]),
                            (this.current.x = this.current.lineX = 0),
                            (this.current.y = this.current.lineY = 0),
                            (o.xcoords = []),
                            (o.tspan = this.svgFactory.createElement("svg:tspan")),
                            o.tspan.setAttributeNS(null, "font-family", o.fontFamily),
                                o.tspan.setAttributeNS(null, "font-size", e(o.fontSize) + "px"),
                                o.tspan.setAttributeNS(null, "y", e(-o.y)),
                                (o.txtElement = this.svgFactory.createElement("svg:text")),
                                o.txtElement.appendChild(o.tspan);
                        },
                        beginText: function () {
                            (this.current.x = this.current.lineX = 0),
                            (this.current.y = this.current.lineY = 0),
                            (this.current.textMatrix = i.IDENTITY_MATRIX),
                            (this.current.lineMatrix = i.IDENTITY_MATRIX),
                            (this.current.tspan = this.svgFactory.createElement(
                                "svg:tspan"
                            )),
                            (this.current.txtElement = this.svgFactory.createElement(
                                "svg:text"
                            )),
                            (this.current.txtgrp = this.svgFactory.createElement("svg:g")),
                            (this.current.xcoords = []);
                        },
                        moveText: function (t, r) {
                            var n = this.current;
                            (this.current.x = this.current.lineX += t),
                            (this.current.y = this.current.lineY += r),
                            (n.xcoords = []),
                            (n.tspan = this.svgFactory.createElement("svg:tspan")),
                            n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                                n.tspan.setAttributeNS(null, "font-size", e(n.fontSize) + "px"),
                                n.tspan.setAttributeNS(null, "y", e(-n.y));
                        },
                        showText: function (r) {
                            var n = this.current,
                                a = n.font,
                                s = n.fontSize;

                            if (0 !== s) {
                                var o,
                                    l = n.charSpacing,
                                    c = n.wordSpacing,
                                    h = n.fontDirection,
                                    d = n.textHScale * h,
                                    f = r.length,
                                    p = a.vertical,
                                    m = s * n.fontMatrix[0],
                                    v = 0;

                                for (o = 0; o < f; ++o) {
                                    var g = r[o];
                                    if (null !== g) {
                                        if ((0, i.isNum)(g)) v += -g * s * 0.001;
                                        else {
                                            var _ = g.width,
                                                b = g.fontChar,
                                                y = _ * m + ((g.isSpace ? c : 0) + l) * h;
                                            g.isInFont || a.missingFile ?
                                                (n.xcoords.push(n.x + v * d),
                                                    (n.tspan.textContent += b),
                                                    (v += y)) :
                                                (v += y);
                                        }
                                    } else v += h * c;
                                }

                                p ? (n.y -= v * d) : (n.x += v * d),
                                    n.tspan.setAttributeNS(null, "x", n.xcoords.map(e).join(" ")),
                                    n.tspan.setAttributeNS(null, "y", e(-n.y)),
                                    n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                                    n.tspan.setAttributeNS(
                                        null,
                                        "font-size",
                                        e(n.fontSize) + "px"
                                    ),
                                    n.fontStyle !== u.fontStyle &&
                                    n.tspan.setAttributeNS(null, "font-style", n.fontStyle),
                                    n.fontWeight !== u.fontWeight &&
                                    n.tspan.setAttributeNS(null, "font-weight", n.fontWeight),
                                    n.fillColor !== u.fillColor &&
                                    n.tspan.setAttributeNS(null, "fill", n.fillColor);
                                var A = n.textMatrix;
                                0 !== n.textRise && ((A = A.slice())[5] += n.textRise),
                                    n.txtElement.setAttributeNS(
                                        null,
                                        "transform",
                                        t(A) + " scale(1, -1)"
                                    ),
                                    n.txtElement.setAttributeNS(
                                        "http://www.w3.org/XML/1998/namespace",
                                        "xml:space",
                                        "preserve"
                                    ),
                                    n.txtElement.appendChild(n.tspan),
                                    n.txtgrp.appendChild(n.txtElement),
                                    this._ensureTransformGroup().appendChild(n.txtElement);
                            }
                        },
                        setLeadingMoveText: function (e, t) {
                            this.setLeading(-t), this.moveText(e, t);
                        },
                        addFontStyle: function (e) {
                            this.cssStyle ||
                                ((this.cssStyle = this.svgFactory.createElement("svg:style")),
                                    this.cssStyle.setAttributeNS(null, "type", "text/css"),
                                    this.defs.appendChild(this.cssStyle));
                            var t = (0, i.createObjectURL)(
                                e.data,
                                e.mimetype,
                                this.forceDataSchema
                            );
                            this.cssStyle.textContent +=
                                '@font-face { font-family: "' +
                                e.loadedName +
                                '"; src: url(' +
                                t +
                                "); }\n";
                        },
                        setFont: function (t) {
                            var r = this.current,
                                n = this.commonObjs.get(t[0]),
                                a = t[1];
                            (this.current.font = n),
                            this.embedFonts &&
                                n.data &&
                                !this.embeddedFonts[n.loadedName] &&
                                (this.addFontStyle(n),
                                    (this.embeddedFonts[n.loadedName] = n)),
                                (r.fontMatrix = n.fontMatrix ?
                                    n.fontMatrix :
                                    i.FONT_IDENTITY_MATRIX);
                            var s = n.black ?
                                n.bold ?
                                "bolder" :
                                "bold" :
                                n.bold ?
                                "bold" :
                                "normal",
                                o = n.italic ? "italic" : "normal";
                            a < 0 ?
                                ((a = -a), (r.fontDirection = -1)) :
                                (r.fontDirection = 1),
                                (r.fontSize = a),
                                (r.fontFamily = n.loadedName),
                                (r.fontWeight = s),
                                (r.fontStyle = o),
                                (r.tspan = this.svgFactory.createElement("svg:tspan")),
                                r.tspan.setAttributeNS(null, "y", e(-r.y)),
                                (r.xcoords = []);
                        },
                        endText: function () {},
                        setLineWidth: function (e) {
                            this.current.lineWidth = e;
                        },
                        setLineCap: function (e) {
                            this.current.lineCap = s[e];
                        },
                        setLineJoin: function (e) {
                            this.current.lineJoin = o[e];
                        },
                        setMiterLimit: function (e) {
                            this.current.miterLimit = e;
                        },
                        setStrokeAlpha: function (e) {
                            this.current.strokeAlpha = e;
                        },
                        setStrokeRGBColor: function (e, t, r) {
                            var n = i.Util.makeCssRgb(e, t, r);
                            this.current.strokeColor = n;
                        },
                        setFillAlpha: function (e) {
                            this.current.fillAlpha = e;
                        },
                        setFillRGBColor: function (e, t, r) {
                            var n = i.Util.makeCssRgb(e, t, r);
                            (this.current.fillColor = n),
                            (this.current.tspan = this.svgFactory.createElement(
                                "svg:tspan"
                            )),
                            (this.current.xcoords = []);
                        },
                        setDash: function (e, t) {
                            (this.current.dashArray = e), (this.current.dashPhase = t);
                        },
                        constructPath: function (t, r) {
                            var n = this.current,
                                a = n.x,
                                s = n.y;
                            n.path = this.svgFactory.createElement("svg:path");

                            for (var o = [], l = t.length, u = 0, c = 0; u < l; u++)
                                switch (0 | t[u]) {
                                    case i.OPS.rectangle:
                                        (a = r[c++]), (s = r[c++]);
                                        var h = a + r[c++],
                                            d = s + r[c++];
                                        o.push(
                                            "M",
                                            e(a),
                                            e(s),
                                            "L",
                                            e(h),
                                            e(s),
                                            "L",
                                            e(h),
                                            e(d),
                                            "L",
                                            e(a),
                                            e(d),
                                            "Z"
                                        );
                                        break;

                                    case i.OPS.moveTo:
                                        (a = r[c++]), (s = r[c++]), o.push("M", e(a), e(s));
                                        break;

                                    case i.OPS.lineTo:
                                        (a = r[c++]), (s = r[c++]), o.push("L", e(a), e(s));
                                        break;

                                    case i.OPS.curveTo:
                                        (a = r[c + 4]),
                                        (s = r[c + 5]),
                                        o.push(
                                                "C",
                                                e(r[c]),
                                                e(r[c + 1]),
                                                e(r[c + 2]),
                                                e(r[c + 3]),
                                                e(a),
                                                e(s)
                                            ),
                                            (c += 6);
                                        break;

                                    case i.OPS.curveTo2:
                                        (a = r[c + 2]),
                                        (s = r[c + 3]),
                                        o.push(
                                                "C",
                                                e(a),
                                                e(s),
                                                e(r[c]),
                                                e(r[c + 1]),
                                                e(r[c + 2]),
                                                e(r[c + 3])
                                            ),
                                            (c += 4);
                                        break;

                                    case i.OPS.curveTo3:
                                        (a = r[c + 2]),
                                        (s = r[c + 3]),
                                        o.push("C", e(r[c]), e(r[c + 1]), e(a), e(s), e(a), e(s)),
                                            (c += 4);
                                        break;

                                    case i.OPS.closePath:
                                        o.push("Z");
                                }

                            n.path.setAttributeNS(null, "d", o.join(" ")),
                                n.path.setAttributeNS(null, "fill", "none"),
                                this._ensureTransformGroup().appendChild(n.path),
                                (n.element = n.path),
                                n.setCurrentPoint(a, s);
                        },
                        endPath: function () {
                            if (this.pendingClip) {
                                var e = this.current,
                                    r = "clippath" + l;
                                l++;
                                var n = this.svgFactory.createElement("svg:clipPath");
                                n.setAttributeNS(null, "id", r),
                                    n.setAttributeNS(null, "transform", t(this.transformMatrix));
                                var i = e.element.cloneNode();
                                "evenodd" === this.pendingClip ?
                                    i.setAttributeNS(null, "clip-rule", "evenodd") :
                                    i.setAttributeNS(null, "clip-rule", "nonzero"),
                                    (this.pendingClip = null),
                                    n.appendChild(i),
                                    this.defs.appendChild(n),
                                    e.activeClipUrl &&
                                    ((e.clipGroup = null),
                                        this.extraStack.forEach(function (e) {
                                            e.clipGroup = null;
                                        })),
                                    (e.activeClipUrl = "url(#" + r + ")"),
                                    (this.tgrp = null);
                            }
                        },
                        clip: function (e) {
                            this.pendingClip = e;
                        },
                        closePath: function () {
                            var e = this.current;

                            if (e.path) {
                                var t = e.path.getAttributeNS(null, "d");
                                (t += "Z"), e.path.setAttributeNS(null, "d", t);
                            }
                        },
                        setLeading: function (e) {
                            this.current.leading = -e;
                        },
                        setTextRise: function (e) {
                            this.current.textRise = e;
                        },
                        setHScale: function (e) {
                            this.current.textHScale = e / 100;
                        },
                        setGState: function (e) {
                            for (var t = 0, r = e.length; t < r; t++) {
                                var n = e[t],
                                    a = n[0],
                                    s = n[1];

                                switch (a) {
                                    case "LW":
                                        this.setLineWidth(s);
                                        break;

                                    case "LC":
                                        this.setLineCap(s);
                                        break;

                                    case "LJ":
                                        this.setLineJoin(s);
                                        break;

                                    case "ML":
                                        this.setMiterLimit(s);
                                        break;

                                    case "D":
                                        this.setDash(s[0], s[1]);
                                        break;

                                    case "Font":
                                        this.setFont(s);
                                        break;

                                    case "CA":
                                        this.setStrokeAlpha(s);
                                        break;

                                    case "ca":
                                        this.setFillAlpha(s);
                                        break;

                                    default:
                                        (0, i.warn)("Unimplemented graphic state " + a);
                                }
                            }
                        },
                        fill: function () {
                            var e = this.current;
                            e.element &&
                                (e.element.setAttributeNS(null, "fill", e.fillColor),
                                    e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha));
                        },
                        stroke: function () {
                            var t = this.current;
                            t.element &&
                                (t.element.setAttributeNS(null, "stroke", t.strokeColor),
                                    t.element.setAttributeNS(null, "stroke-opacity", t.strokeAlpha),
                                    t.element.setAttributeNS(
                                        null,
                                        "stroke-miterlimit",
                                        e(t.miterLimit)
                                    ),
                                    t.element.setAttributeNS(null, "stroke-linecap", t.lineCap),
                                    t.element.setAttributeNS(null, "stroke-linejoin", t.lineJoin),
                                    t.element.setAttributeNS(
                                        null,
                                        "stroke-width",
                                        e(t.lineWidth) + "px"
                                    ),
                                    t.element.setAttributeNS(
                                        null,
                                        "stroke-dasharray",
                                        t.dashArray.map(e).join(" ")
                                    ),
                                    t.element.setAttributeNS(
                                        null,
                                        "stroke-dashoffset",
                                        e(t.dashPhase) + "px"
                                    ),
                                    t.element.setAttributeNS(null, "fill", "none"));
                        },
                        eoFill: function () {
                            this.current.element &&
                                this.current.element.setAttributeNS(
                                    null,
                                    "fill-rule",
                                    "evenodd"
                                ),
                                this.fill();
                        },
                        fillStroke: function () {
                            this.stroke(), this.fill();
                        },
                        eoFillStroke: function () {
                            this.current.element &&
                                this.current.element.setAttributeNS(
                                    null,
                                    "fill-rule",
                                    "evenodd"
                                ),
                                this.fillStroke();
                        },
                        closeStroke: function () {
                            this.closePath(), this.stroke();
                        },
                        closeFillStroke: function () {
                            this.closePath(), this.fillStroke();
                        },
                        closeEOFillStroke: function () {
                            this.closePath(), this.eoFillStroke();
                        },
                        paintSolidColorImageMask: function () {
                            var e = this.current,
                                t = this.svgFactory.createElement("svg:rect");
                            t.setAttributeNS(null, "x", "0"),
                                t.setAttributeNS(null, "y", "0"),
                                t.setAttributeNS(null, "width", "1px"),
                                t.setAttributeNS(null, "height", "1px"),
                                t.setAttributeNS(null, "fill", e.fillColor),
                                this._ensureTransformGroup().appendChild(t);
                        },
                        paintJpegXObject: function (t, r, i) {
                            var a = this.objs.get(t),
                                s = this.svgFactory.createElement("svg:image");
                            s.setAttributeNS(n, "xlink:href", a.src),
                                s.setAttributeNS(null, "width", e(r)),
                                s.setAttributeNS(null, "height", e(i)),
                                s.setAttributeNS(null, "x", "0"),
                                s.setAttributeNS(null, "y", e(-i)),
                                s.setAttributeNS(
                                    null,
                                    "transform",
                                    "scale(" + e(1 / r) + " " + e(-1 / i) + ")"
                                ),
                                this._ensureTransformGroup().appendChild(s);
                        },
                        paintImageXObject: function (e) {
                            var t = this.objs.get(e);
                            t
                                ?
                                this.paintInlineImageXObject(t) :
                                (0, i.warn)("Dependent image isn't ready yet");
                        },
                        paintInlineImageXObject: function (t, r) {
                            var i = t.width,
                                a = t.height,
                                s = c(t, this.forceDataSchema, !!r),
                                o = this.svgFactory.createElement("svg:rect");
                            o.setAttributeNS(null, "x", "0"),
                                o.setAttributeNS(null, "y", "0"),
                                o.setAttributeNS(null, "width", e(i)),
                                o.setAttributeNS(null, "height", e(a)),
                                (this.current.element = o),
                                this.clip("nonzero");
                            var l = this.svgFactory.createElement("svg:image");
                            l.setAttributeNS(n, "xlink:href", s),
                                l.setAttributeNS(null, "x", "0"),
                                l.setAttributeNS(null, "y", e(-a)),
                                l.setAttributeNS(null, "width", e(i) + "px"),
                                l.setAttributeNS(null, "height", e(a) + "px"),
                                l.setAttributeNS(
                                    null,
                                    "transform",
                                    "scale(" + e(1 / i) + " " + e(-1 / a) + ")"
                                ),
                                r ?
                                r.appendChild(l) :
                                this._ensureTransformGroup().appendChild(l);
                        },
                        paintImageMaskXObject: function (t) {
                            var r = this.current,
                                n = t.width,
                                i = t.height,
                                a = r.fillColor;
                            r.maskId = "mask" + d++;
                            var s = this.svgFactory.createElement("svg:mask");
                            s.setAttributeNS(null, "id", r.maskId);
                            var o = this.svgFactory.createElement("svg:rect");
                            o.setAttributeNS(null, "x", "0"),
                                o.setAttributeNS(null, "y", "0"),
                                o.setAttributeNS(null, "width", e(n)),
                                o.setAttributeNS(null, "height", e(i)),
                                o.setAttributeNS(null, "fill", a),
                                o.setAttributeNS(null, "mask", "url(#" + r.maskId + ")"),
                                this.defs.appendChild(s),
                                this._ensureTransformGroup().appendChild(o),
                                this.paintInlineImageXObject(t, s);
                        },
                        paintFormXObjectBegin: function (t, r) {
                            if (
                                (Array.isArray(t) &&
                                    6 === t.length &&
                                    this.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                                    Array.isArray(r) && 4 === r.length)
                            ) {
                                var n = r[2] - r[0],
                                    i = r[3] - r[1],
                                    a = this.svgFactory.createElement("svg:rect");
                                a.setAttributeNS(null, "x", r[0]),
                                    a.setAttributeNS(null, "y", r[1]),
                                    a.setAttributeNS(null, "width", e(n)),
                                    a.setAttributeNS(null, "height", e(i)),
                                    (this.current.element = a),
                                    this.clip("nonzero"),
                                    this.endPath();
                            }
                        },
                        paintFormXObjectEnd: function () {},
                        _initialize: function (e) {
                            var r = this.svgFactory.create(e.width, e.height),
                                n = this.svgFactory.createElement("svg:defs");
                            r.appendChild(n), (this.defs = n);
                            var i = this.svgFactory.createElement("svg:g");
                            return (
                                i.setAttributeNS(null, "transform", t(e.transform)),
                                r.appendChild(i),
                                (this.svg = i),
                                r
                            );
                        },
                        _ensureClipGroup: function () {
                            if (!this.current.clipGroup) {
                                var e = this.svgFactory.createElement("svg:g");
                                e.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
                                    this.svg.appendChild(e),
                                    (this.current.clipGroup = e);
                            }

                            return this.current.clipGroup;
                        },
                        _ensureTransformGroup: function () {
                            return (
                                this.tgrp ||
                                ((this.tgrp = this.svgFactory.createElement("svg:g")),
                                    this.tgrp.setAttributeNS(
                                        null,
                                        "transform",
                                        t(this.transformMatrix)
                                    ),
                                    this.current.activeClipUrl ?
                                    this._ensureClipGroup().appendChild(this.tgrp) :
                                    this.svg.appendChild(this.tgrp)),
                                this.tgrp
                            );
                        }
                    }),
                    r
                );
            })()),
            (t.SVGGraphics = l);
        },
        function (e, t, r) {
            "use strict";

            var n = r(0),
                i = r(121),
                a = r(59),
                s = r(62),
                o = r(61),
                l = r(10),
                u = r(63),
                c = r(39);

            if (r(25)()) {
                var h = r(127).PDFNodeStream;
                a.setPDFNetworkStreamFactory(function (e) {
                    return new h(e);
                });
            } else if (
                "undefined" != typeof Response &&
                "body" in Response.prototype &&
                "undefined" != typeof ReadableStream
            ) {
                var d = r(129).PDFFetchStream;
                a.setPDFNetworkStreamFactory(function (e) {
                    return new d(e);
                });
            } else {
                var f = r(130).PDFNetworkStream;
                a.setPDFNetworkStreamFactory(function (e) {
                    return new f(e);
                });
            }

            (t.PDFJS = i.PDFJS),
            (t.build = a.build),
            (t.version = a.version),
            (t.getDocument = a.getDocument),
            (t.LoopbackPort = a.LoopbackPort),
            (t.PDFDataRangeTransport = a.PDFDataRangeTransport),
            (t.PDFWorker = a.PDFWorker),
            (t.renderTextLayer = s.renderTextLayer),
            (t.AnnotationLayer = o.AnnotationLayer),
            (t.createPromiseCapability = n.createPromiseCapability),
            (t.PasswordResponses = n.PasswordResponses),
            (t.InvalidPDFException = n.InvalidPDFException),
            (t.MissingPDFException = n.MissingPDFException),
            (t.SVGGraphics = u.SVGGraphics),
            (t.NativeImageDecoding = n.NativeImageDecoding),
            (t.UnexpectedResponseException = n.UnexpectedResponseException),
            (t.OPS = n.OPS),
            (t.VerbosityLevel = n.VerbosityLevel),
            (t.UNSUPPORTED_FEATURES = n.UNSUPPORTED_FEATURES),
            (t.createValidAbsoluteUrl = n.createValidAbsoluteUrl),
            (t.createObjectURL = n.createObjectURL),
            (t.removeNullCharacters = n.removeNullCharacters),
            (t.shadow = n.shadow),
            (t.createBlob = n.createBlob),
            (t.RenderingCancelledException = l.RenderingCancelledException),
            (t.getFilenameFromUrl = l.getFilenameFromUrl),
            (t.LinkTarget = l.LinkTarget),
            (t.addLinkAttributes = l.addLinkAttributes),
            (t.GlobalWorkerOptions = c.GlobalWorkerOptions);
        },
        function (e, t, r) {
            "use strict";

            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                };

            if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
                var i = r(15),
                    a = r(25),
                    s = ("undefined" != typeof navigator && navigator.userAgent) || "",
                    o = s.indexOf("CriOS") >= 0,
                    l = s.indexOf("Trident") >= 0,
                    u = /\b(iPad|iPhone|iPod)(?=;)/.test(s),
                    c = /Safari\//.test(s) && !/(Chrome\/|Android\s)/.test(s),
                    h =
                    "object" ===
                    ("undefined" == typeof window ? "undefined" : n(window)) &&
                    "object" ===
                    ("undefined" == typeof document ? "undefined" : n(document));
                "undefined" == typeof PDFJS && (i.PDFJS = {}),
                    (PDFJS.compatibilityChecked = !0),
                    !i.btoa &&
                    a() &&
                    (i.btoa = function (e) {
                        return Buffer.from(e, "binary").toString("base64");
                    }),
                    !i.atob &&
                    a() &&
                    (i.atob = function (e) {
                        return Buffer.from(e, "base64").toString("binary");
                    }),
                    (l || o) && (PDFJS.disableCreateObjectURL = !0),
                    (c || u) && ((PDFJS.disableRange = !0), (PDFJS.disableStream = !0)),
                    h &&
                    ("currentScript" in document ||
                        Object.defineProperty(document, "currentScript", {
                            get: function () {
                                var e = document.getElementsByTagName("script");
                                return e[e.length - 1];
                            },
                            enumerable: !0,
                            configurable: !0
                        })),
                    h &&
                    void 0 === Element.prototype.remove &&
                    (Element.prototype.remove = function () {
                        this.parentNode && this.parentNode.removeChild(this);
                    }),
                    String.prototype.includes || (String.prototype.includes = r(66)),
                    Array.prototype.includes || (Array.prototype.includes = r(71)),
                    Math.log2 || (Math.log2 = r(74)),
                    Number.isNaN || (Number.isNaN = r(76)),
                    Number.isInteger || (Number.isInteger = r(78)),
                    i.Promise || (i.Promise = r(81)),
                    i.WeakMap || (i.WeakMap = r(100)),
                    (function () {
                        var e = !1;

                        try {
                            if (
                                "function" == typeof URL &&
                                "object" === n(URL.prototype) &&
                                "origin" in URL.prototype
                            ) {
                                var t = new URL("b", "http://a");
                                (t.pathname = "c%20d"), (e = "http://a/c%20d" === t.href);
                            }
                        } catch (e) {}

                        if (!e) {
                            var r = Object.create(null);
                            (r.ftp = 21),
                            (r.file = 0),
                            (r.gopher = 70),
                            (r.http = 80),
                            (r.https = 443),
                            (r.ws = 80),
                            (r.wss = 443);
                            var a = Object.create(null);
                            (a["%2e"] = "."),
                            (a[".%2e"] = ".."),
                            (a["%2e."] = ".."),
                            (a["%2e%2e"] = "..");
                            var s,
                                o = /[a-zA-Z]/,
                                l = /[a-zA-Z0-9\+\-\.]/;
                            g.prototype = {
                                toString: function () {
                                    return this.href;
                                },

                                get href() {
                                    if (this._isInvalid) return this._url;
                                    var e = "";
                                    return (
                                        ("" === this._username && null === this._password) ||
                                        (e =
                                            this._username +
                                            (null !== this._password ? ":" + this._password : "") +
                                            "@"),
                                        this.protocol +
                                        (this._isRelative ? "//" + e + this.host : "") +
                                        this.pathname +
                                        this._query +
                                        this._fragment
                                    );
                                },

                                set href(e) {
                                    v.call(this), m.call(this, e);
                                },

                                get protocol() {
                                    return this._scheme + ":";
                                },

                                set protocol(e) {
                                    this._isInvalid || m.call(this, e + ":", "scheme start");
                                },

                                get host() {
                                    return this._isInvalid ?
                                        "" :
                                        this._port ?
                                        this._host + ":" + this._port :
                                        this._host;
                                },

                                set host(e) {
                                    !this._isInvalid &&
                                        this._isRelative &&
                                        m.call(this, e, "host");
                                },

                                get hostname() {
                                    return this._host;
                                },

                                set hostname(e) {
                                    !this._isInvalid &&
                                        this._isRelative &&
                                        m.call(this, e, "hostname");
                                },

                                get port() {
                                    return this._port;
                                },

                                set port(e) {
                                    !this._isInvalid &&
                                        this._isRelative &&
                                        m.call(this, e, "port");
                                },

                                get pathname() {
                                    return this._isInvalid ?
                                        "" :
                                        this._isRelative ?
                                        "/" + this._path.join("/") :
                                        this._schemeData;
                                },

                                set pathname(e) {
                                    !this._isInvalid &&
                                        this._isRelative &&
                                        ((this._path = []), m.call(this, e, "relative path start"));
                                },

                                get search() {
                                    return this._isInvalid || !this._query || "?" === this._query ?
                                        "" :
                                        this._query;
                                },

                                set search(e) {
                                    !this._isInvalid &&
                                        this._isRelative &&
                                        ((this._query = "?"),
                                            "?" === e[0] && (e = e.slice(1)),
                                            m.call(this, e, "query"));
                                },

                                get hash() {
                                    return this._isInvalid ||
                                        !this._fragment ||
                                        "#" === this._fragment ?
                                        "" :
                                        this._fragment;
                                },

                                set hash(e) {
                                    this._isInvalid ||
                                        ((this._fragment = "#"),
                                            "#" === e[0] && (e = e.slice(1)),
                                            m.call(this, e, "fragment"));
                                },

                                get origin() {
                                    var e;
                                    if (this._isInvalid || !this._scheme) return "";

                                    switch (this._scheme) {
                                        case "data":
                                        case "file":
                                        case "javascript":
                                        case "mailto":
                                            return "null";

                                        case "blob":
                                            try {
                                                return new g(this._schemeData).origin || "null";
                                            } catch (e) {}

                                            return "null";
                                    }

                                    return (e = this.host) ? this._scheme + "://" + e : "";
                                }
                            };
                            var u = i.URL;
                            u &&
                                ((g.createObjectURL = function (e) {
                                        return u.createObjectURL.apply(u, arguments);
                                    }),
                                    (g.revokeObjectURL = function (e) {
                                        u.revokeObjectURL(e);
                                    })),
                                (i.URL = g);
                        }

                        function c(e) {
                            return void 0 !== r[e];
                        }

                        function h() {
                            v.call(this), (this._isInvalid = !0);
                        }

                        function d(e) {
                            return "" === e && h.call(this), e.toLowerCase();
                        }

                        function f(e) {
                            var t = e.charCodeAt(0);
                            return t > 32 &&
                                t < 127 &&
                                -1 === [34, 35, 60, 62, 63, 96].indexOf(t) ?
                                e :
                                encodeURIComponent(e);
                        }

                        function p(e) {
                            var t = e.charCodeAt(0);
                            return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 96].indexOf(t) ?
                                e :
                                encodeURIComponent(e);
                        }

                        function m(e, t, n) {
                            function i(e) {
                                b.push(e);
                            }

                            var u = t || "scheme start",
                                m = 0,
                                v = "",
                                g = !1,
                                _ = !1,
                                b = [];

                            e: for (;
                                (e[m - 1] !== s || 0 === m) && !this._isInvalid;) {
                                var y = e[m];

                                switch (u) {
                                    case "scheme start":
                                        if (!y || !o.test(y)) {
                                            if (t) {
                                                i("Invalid scheme.");
                                                break e;
                                            }

                                            (v = ""), (u = "no scheme");
                                            continue;
                                        }

                                        (v += y.toLowerCase()), (u = "scheme");
                                        break;

                                    case "scheme":
                                        if (y && l.test(y)) v += y.toLowerCase();
                                        else {
                                            if (":" !== y) {
                                                if (t) {
                                                    if (y === s) break e;
                                                    i("Code point not allowed in scheme: " + y);
                                                    break e;
                                                }

                                                (v = ""), (m = 0), (u = "no scheme");
                                                continue;
                                            }

                                            if (((this._scheme = v), (v = ""), t)) break e;
                                            c(this._scheme) && (this._isRelative = !0),
                                                (u =
                                                    "file" === this._scheme ?
                                                    "relative" :
                                                    this._isRelative &&
                                                    n &&
                                                    n._scheme === this._scheme ?
                                                    "relative or authority" :
                                                    this._isRelative ?
                                                    "authority first slash" :
                                                    "scheme data");
                                        }
                                        break;

                                    case "scheme data":
                                        "?" === y
                                            ?
                                            ((this._query = "?"), (u = "query")) :
                                            "#" === y ?
                                            ((this._fragment = "#"), (u = "fragment")) :
                                            y !== s &&
                                            "\t" !== y &&
                                            "\n" !== y &&
                                            "\r" !== y &&
                                            (this._schemeData += f(y));
                                        break;

                                    case "no scheme":
                                        if (n && c(n._scheme)) {
                                            u = "relative";
                                            continue;
                                        }

                                        i("Missing scheme."), h.call(this);
                                        break;

                                    case "relative or authority":
                                        if ("/" !== y || "/" !== e[m + 1]) {
                                            i("Expected /, got: " + y), (u = "relative");
                                            continue;
                                        }

                                        u = "authority ignore slashes";
                                        break;

                                    case "relative":
                                        if (
                                            ((this._isRelative = !0),
                                                "file" !== this._scheme && (this._scheme = n._scheme),
                                                y === s)
                                        ) {
                                            (this._host = n._host),
                                            (this._port = n._port),
                                            (this._path = n._path.slice()),
                                            (this._query = n._query),
                                            (this._username = n._username),
                                            (this._password = n._password);
                                            break e;
                                        }

                                        if ("/" === y || "\\" === y)
                                            "\\" === y && i("\\ is an invalid code point."),
                                            (u = "relative slash");
                                        else if ("?" === y)
                                            (this._host = n._host),
                                            (this._port = n._port),
                                            (this._path = n._path.slice()),
                                            (this._query = "?"),
                                            (this._username = n._username),
                                            (this._password = n._password),
                                            (u = "query");
                                        else {
                                            if ("#" !== y) {
                                                var A = e[m + 1],
                                                    S = e[m + 2];
                                                ("file" !== this._scheme ||
                                                    !o.test(y) ||
                                                    (":" !== A && "|" !== A) ||
                                                    (S !== s &&
                                                        "/" !== S &&
                                                        "\\" !== S &&
                                                        "?" !== S &&
                                                        "#" !== S)) &&
                                                ((this._host = n._host),
                                                    (this._port = n._port),
                                                    (this._username = n._username),
                                                    (this._password = n._password),
                                                    (this._path = n._path.slice()),
                                                    this._path.pop()),
                                                (u = "relative path");
                                                continue;
                                            }

                                            (this._host = n._host),
                                            (this._port = n._port),
                                            (this._path = n._path.slice()),
                                            (this._query = n._query),
                                            (this._fragment = "#"),
                                            (this._username = n._username),
                                            (this._password = n._password),
                                            (u = "fragment");
                                        }
                                        break;

                                    case "relative slash":
                                        if ("/" !== y && "\\" !== y) {
                                            "file" !== this._scheme &&
                                                ((this._host = n._host),
                                                    (this._port = n._port),
                                                    (this._username = n._username),
                                                    (this._password = n._password)),
                                                (u = "relative path");
                                            continue;
                                        }

                                        "\\" === y && i("\\ is an invalid code point."),
                                            (u =
                                                "file" === this._scheme ?
                                                "file host" :
                                                "authority ignore slashes");
                                        break;

                                    case "authority first slash":
                                        if ("/" !== y) {
                                            i("Expected '/', got: " + y),
                                                (u = "authority ignore slashes");
                                            continue;
                                        }

                                        u = "authority second slash";
                                        break;

                                    case "authority second slash":
                                        if (((u = "authority ignore slashes"), "/" !== y)) {
                                            i("Expected '/', got: " + y);
                                            continue;
                                        }

                                        break;

                                    case "authority ignore slashes":
                                        if ("/" !== y && "\\" !== y) {
                                            u = "authority";
                                            continue;
                                        }

                                        i("Expected authority, got: " + y);
                                        break;

                                    case "authority":
                                        if ("@" === y) {
                                            g && (i("@ already seen."), (v += "%40")), (g = !0);

                                            for (var w = 0; w < v.length; w++) {
                                                var P = v[w];
                                                if ("\t" !== P && "\n" !== P && "\r" !== P) {
                                                    if (":" !== P || null !== this._password) {
                                                        var k = f(P);
                                                        null !== this._password ?
                                                            (this._password += k) :
                                                            (this._username += k);
                                                    } else this._password = "";
                                                } else i("Invalid whitespace in authority.");
                                            }

                                            v = "";
                                        } else {
                                            if (
                                                y === s ||
                                                "/" === y ||
                                                "\\" === y ||
                                                "?" === y ||
                                                "#" === y
                                            ) {
                                                (m -= v.length), (v = ""), (u = "host");
                                                continue;
                                            }

                                            v += y;
                                        }

                                        break;

                                    case "file host":
                                        if (
                                            y === s ||
                                            "/" === y ||
                                            "\\" === y ||
                                            "?" === y ||
                                            "#" === y
                                        ) {
                                            2 !== v.length ||
                                                !o.test(v[0]) ||
                                                (":" !== v[1] && "|" !== v[1]) ?
                                                0 === v.length ?
                                                (u = "relative path start") :
                                                ((this._host = d.call(this, v)),
                                                    (v = ""),
                                                    (u = "relative path start")) :
                                                (u = "relative path");
                                            continue;
                                        }

                                        "\t" === y || "\n" === y || "\r" === y ?
                                            i("Invalid whitespace in file host.") :
                                            (v += y);
                                        break;

                                    case "host":
                                    case "hostname":
                                        if (":" !== y || _) {
                                            if (
                                                y === s ||
                                                "/" === y ||
                                                "\\" === y ||
                                                "?" === y ||
                                                "#" === y
                                            ) {
                                                if (
                                                    ((this._host = d.call(this, v)),
                                                        (v = ""),
                                                        (u = "relative path start"),
                                                        t)
                                                )
                                                    break e;
                                                continue;
                                            }

                                            "\t" !== y && "\n" !== y && "\r" !== y ?
                                                ("[" === y ? (_ = !0) : "]" === y && (_ = !1),
                                                    (v += y)) :
                                                i("Invalid code point in host/hostname: " + y);
                                        } else if (
                                            ((this._host = d.call(this, v)),
                                                (v = ""),
                                                (u = "port"),
                                                "hostname" === t)
                                        )
                                            break e;

                                        break;

                                    case "port":
                                        if (/[0-9]/.test(y)) v += y;
                                        else {
                                            if (
                                                y === s ||
                                                "/" === y ||
                                                "\\" === y ||
                                                "?" === y ||
                                                "#" === y ||
                                                t
                                            ) {
                                                if ("" !== v) {
                                                    var C = parseInt(v, 10);
                                                    C !== r[this._scheme] && (this._port = C + ""),
                                                        (v = "");
                                                }

                                                if (t) break e;
                                                u = "relative path start";
                                                continue;
                                            }

                                            "\t" === y || "\n" === y || "\r" === y ?
                                                i("Invalid code point in port: " + y) :
                                                h.call(this);
                                        }
                                        break;

                                    case "relative path start":
                                        if (
                                            ("\\" === y && i("'\\' not allowed in path."),
                                                (u = "relative path"),
                                                "/" !== y && "\\" !== y)
                                        )
                                            continue;
                                        break;

                                    case "relative path":
                                        var R;
                                        if (
                                            y !== s &&
                                            "/" !== y &&
                                            "\\" !== y &&
                                            (t || ("?" !== y && "#" !== y))
                                        )
                                            "\t" !== y && "\n" !== y && "\r" !== y && (v += f(y));
                                        else
                                            "\\" === y && i("\\ not allowed in relative path."),
                                            (R = a[v.toLowerCase()]) && (v = R),
                                            ".." === v ?
                                            (this._path.pop(),
                                                "/" !== y && "\\" !== y && this._path.push("")) :
                                            "." === v && "/" !== y && "\\" !== y ?
                                            this._path.push("") :
                                            "." !== v &&
                                            ("file" === this._scheme &&
                                                0 === this._path.length &&
                                                2 === v.length &&
                                                o.test(v[0]) &&
                                                "|" === v[1] &&
                                                (v = v[0] + ":"),
                                                this._path.push(v)),
                                            (v = ""),
                                            "?" === y ?
                                            ((this._query = "?"), (u = "query")) :
                                            "#" === y &&
                                            ((this._fragment = "#"), (u = "fragment"));
                                        break;

                                    case "query":
                                        t || "#" !== y ?
                                            y !== s &&
                                            "\t" !== y &&
                                            "\n" !== y &&
                                            "\r" !== y &&
                                            (this._query += p(y)) :
                                            ((this._fragment = "#"), (u = "fragment"));
                                        break;

                                    case "fragment":
                                        y !== s &&
                                            "\t" !== y &&
                                            "\n" !== y &&
                                            "\r" !== y &&
                                            (this._fragment += y);
                                }

                                m++;
                            }
                        }

                        function v() {
                            (this._scheme = ""),
                            (this._schemeData = ""),
                            (this._username = ""),
                            (this._password = null),
                            (this._host = ""),
                            (this._port = ""),
                            (this._path = []),
                            (this._query = ""),
                            (this._fragment = ""),
                            (this._isInvalid = !1),
                            (this._isRelative = !1);
                        }

                        function g(e, t) {
                            void 0 === t || t instanceof g || (t = new g(String(t))),
                                (this._url = e),
                                v.call(this);
                            var r = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                            m.call(this, r, null, t);
                        }
                    })(),
                    Object.values || (Object.values = r(116));
            }
        },
        function (e, t, r) {
            "use strict";

            r(67), (e.exports = r(5).String.includes);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(68);
            n(n.P + n.F * r(70)("includes"), "String", {
                includes: function (e) {
                    return !!~i(this, e, "includes").indexOf(
                        e,
                        arguments.length > 1 ? arguments[1] : void 0
                    );
                }
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(69),
                i = r(21);

            e.exports = function (e, t, r) {
                if (n(t)) throw TypeError("String#" + r + " doesn't accept regex!");
                return String(i(e));
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = r(14),
                a = r(1)("match");

            e.exports = function (e) {
                var t;
                return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e));
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(1)("match");

            e.exports = function (e) {
                var t = /./;

                try {
                    "/./" [e](t);
                } catch (r) {
                    try {
                        return (t[n] = !1), !"/./" [e](t);
                    } catch (e) {}
                }

                return !0;
            };
        },
        function (e, t, r) {
            "use strict";

            r(72), (e.exports = r(5).Array.includes);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(44)(!0);
            n(n.P, "Array", {
                    includes: function (e) {
                        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }),
                r(45)("includes");
        },
        function (e, t, r) {
            "use strict";

            var n = r(30),
                i = Math.max,
                a = Math.min;

            e.exports = function (e, t) {
                return (e = n(e)) < 0 ? i(e + t, 0) : a(e, t);
            };
        },
        function (e, t, r) {
            "use strict";

            r(75), (e.exports = r(5).Math.log2);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3);
            n(n.S, "Math", {
                log2: function (e) {
                    return Math.log(e) / Math.LN2;
                }
            });
        },
        function (e, t, r) {
            "use strict";

            r(77), (e.exports = r(5).Number.isNaN);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3);
            n(n.S, "Number", {
                isNaN: function (e) {
                    return e != e;
                }
            });
        },
        function (e, t, r) {
            "use strict";

            r(79), (e.exports = r(5).Number.isInteger);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3);
            n(n.S, "Number", {
                isInteger: r(80)
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = Math.floor;

            e.exports = function (e) {
                return !n(e) && isFinite(e) && i(e) === e;
            };
        },
        function (e, t, r) {
            "use strict";

            r(46), r(82), r(51), r(91), r(98), r(99), (e.exports = r(5).Promise);
        },
        function (e, t, r) {
            "use strict";

            var n = r(83)(!0);
            r(47)(
                String,
                "String",
                function (e) {
                    (this._t = String(e)), (this._i = 0);
                },
                function () {
                    var e,
                        t = this._t,
                        r = this._i;
                    return r >= t.length ?
                        {
                            value: void 0,
                            done: !0
                        } :
                        ((e = n(t, r)),
                            (this._i += e.length), {
                                value: e,
                                done: !1
                            });
                }
            );
        },
        function (e, t, r) {
            "use strict";

            var n = r(30),
                i = r(21);

            e.exports = function (e) {
                return function (t, r) {
                    var a,
                        s,
                        o = String(i(t)),
                        l = n(r),
                        u = o.length;
                    return l < 0 || l >= u ?
                        e ?
                        "" :
                        void 0 :
                        (a = o.charCodeAt(l)) < 55296 ||
                        a > 56319 ||
                        l + 1 === u ||
                        (s = o.charCodeAt(l + 1)) < 56320 ||
                        s > 57343 ?
                        e ?
                        o.charAt(l) :
                        a :
                        e ?
                        o.slice(l, l + 2) :
                        s - 56320 + ((a - 55296) << 10) + 65536;
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(85),
                i = r(27),
                a = r(23),
                s = {};
            r(11)(s, r(1)("iterator"), function () {
                    return this;
                }),
                (e.exports = function (e, t, r) {
                    (e.prototype = n(s, {
                        next: i(1, r)
                    })),
                    a(e, t + " Iterator");
                });
        },
        function (e, t, r) {
            "use strict";

            var n = r(6),
                i = r(86),
                a = r(49),
                s = r(32)("IE_PROTO"),
                o = function o() {},
                _l = function l() {
                    var e,
                        t = r(26)("iframe"),
                        n = a.length;

                    for (
                        t.style.display = "none",
                        r(50).appendChild(t),
                        t.src = "javascript:",
                        (e = t.contentWindow.document).open(),
                        e.write("<script>document.F=Object</script>"),
                        e.close(),
                        _l = e.F; n--;

                    )
                        delete _l.prototype[a[n]];

                    return _l();
                };

            e.exports =
                Object.create ||
                function (e, t) {
                    var r;
                    return (
                        null !== e ?
                        ((o.prototype = n(e)),
                            (r = new o()),
                            (o.prototype = null),
                            (r[s] = e)) :
                        (r = _l()),
                        void 0 === t ? r : i(r, t)
                    );
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(16),
                i = r(6),
                a = r(22);
            e.exports = r(12) ?
                Object.defineProperties :
                function (e, t) {
                    i(e);

                    for (var r, s = a(t), o = s.length, l = 0; o > l;)
                        n.f(e, (r = s[l++]), t[r]);

                    return e;
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(7),
                i = r(18),
                a = r(44)(!1),
                s = r(32)("IE_PROTO");

            e.exports = function (e, t) {
                var r,
                    o = i(e),
                    l = 0,
                    u = [];

                for (r in o) r != s && n(o, r) && u.push(r);

                for (; t.length > l;) n(o, (r = t[l++])) && (~a(u, r) || u.push(r));

                return u;
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(7),
                i = r(33),
                a = r(32)("IE_PROTO"),
                s = Object.prototype;

            e.exports =
                Object.getPrototypeOf ||
                function (e) {
                    return (
                        (e = i(e)),
                        n(e, a) ?
                        e[a] :
                        "function" == typeof e.constructor && e instanceof e.constructor ?
                        e.constructor.prototype :
                        e instanceof Object ?
                        s :
                        null
                    );
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(45),
                i = r(90),
                a = r(19),
                s = r(18);
            (e.exports = r(47)(
                Array,
                "Array",
                function (e, t) {
                    (this._t = s(e)), (this._i = 0), (this._k = t);
                },
                function () {
                    var e = this._t,
                        t = this._k,
                        r = this._i++;
                    return !e || r >= e.length ?
                        ((this._t = void 0), i(1)) :
                        i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
                },
                "values"
            )),
            (a.Arguments = a.Array),
            n("keys"),
                n("values"),
                n("entries");
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e, t) {
                return {
                    value: t,
                    done: !!e
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n,
                i,
                a,
                s,
                o = r(48),
                l = r(4),
                u = r(9),
                c = r(31),
                h = r(3),
                d = r(2),
                f = r(17),
                p = r(34),
                m = r(24),
                v = r(52),
                g = r(53).set,
                _ = r(96)(),
                b = r(35),
                y = r(54),
                A = r(55),
                S = l.TypeError,
                w = l.process,
                P = l.Promise,
                k = "process" == c(w),
                C = function C() {},
                R = (i = b.f),
                x = !!(function () {
                    try {
                        var e = P.resolve(1),
                            t = ((e.constructor = {})[r(1)("species")] = function (e) {
                                e(C, C);
                            });

                        return (
                            (k || "function" == typeof PromiseRejectionEvent) &&
                            e.then(C) instanceof t
                        );
                    } catch (e) {}
                })(),
                T = function T(e) {
                    var t;
                    return !(!d(e) || "function" != typeof (t = e.then)) && t;
                },
                E = function E(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var r = e._c;

                        _(function () {
                            for (
                                var n = e._v,
                                    i = 1 == e._s,
                                    a = 0,
                                    s = function s(t) {
                                        var r,
                                            a,
                                            s = i ? t.ok : t.fail,
                                            o = t.resolve,
                                            l = t.reject,
                                            u = t.domain;

                                        try {
                                            s
                                                ?
                                                (i || (2 == e._h && F(e), (e._h = 1)),
                                                    !0 === s ?
                                                    (r = n) :
                                                    (u && u.enter(), (r = s(n)), u && u.exit()),
                                                    r === t.promise ?
                                                    l(S("Promise-chain cycle")) :
                                                    (a = T(r)) ?
                                                    a.call(r, o, l) :
                                                    o(r)) :
                                                l(n);
                                        } catch (e) {
                                            l(e);
                                        }
                                    }; r.length > a;

                            )
                                s(r[a++]);

                            (e._c = []), (e._n = !1), t && !e._h && O(e);
                        });
                    }
                },
                O = function O(e) {
                    g.call(l, function () {
                        var t,
                            r,
                            n,
                            i = e._v,
                            a = I(e);
                        if (
                            (a &&
                                ((t = y(function () {
                                        k
                                            ?
                                            w.emit("unhandledRejection", i, e) :
                                            (r = l.onunhandledrejection) ?
                                            r({
                                                promise: e,
                                                reason: i
                                            }) :
                                            (n = l.console) &&
                                            n.error &&
                                            n.error("Unhandled promise rejection", i);
                                    })),
                                    (e._h = k || I(e) ? 2 : 1)),
                                (e._a = void 0),
                                a && t.e)
                        )
                            throw t.v;
                    });
                },
                I = function I(e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length;
                },
                F = function F(e) {
                    g.call(l, function () {
                        var t;
                        k
                            ?
                            w.emit("rejectionHandled", e) :
                            (t = l.onrejectionhandled) &&
                            t({
                                promise: e,
                                reason: e._v
                            });
                    });
                },
                L = function L(e) {
                    var t = this;
                    t._d ||
                        ((t._d = !0),
                            ((t = t._w || t)._v = e),
                            (t._s = 2),
                            t._a || (t._a = t._c.slice()),
                            E(t, !0));
                },
                D = function e(t) {
                    var r,
                        n = this;

                    if (!n._d) {
                        (n._d = !0), (n = n._w || n);

                        try {
                            if (n === t) throw S("Promise can't be resolved itself");
                            (r = T(t)) ?
                            _(function () {
                                var i = {
                                    _w: n,
                                    _d: !1
                                };

                                try {
                                    r.call(t, u(e, i, 1), u(L, i, 1));
                                } catch (e) {
                                    L.call(i, e);
                                }
                            }): ((n._v = t), (n._s = 1), E(n, !1));
                        } catch (e) {
                            L.call({
                                    _w: n,
                                    _d: !1
                                },
                                e
                            );
                        }
                    }
                };

            x ||
                ((P = function (e) {
                        p(this, P, "Promise", "_h"), f(e), n.call(this);

                        try {
                            e(u(D, this, 1), u(L, this, 1));
                        } catch (e) {
                            L.call(this, e);
                        }
                    }),
                    ((n = function (e) {
                        (this._c = []),
                        (this._a = void 0),
                        (this._s = 0),
                        (this._d = !1),
                        (this._v = void 0),
                        (this._h = 0),
                        (this._n = !1);
                    }).prototype = r(36)(P.prototype, {
                        then: function (e, t) {
                            var r = R(v(this, P));
                            return (
                                (r.ok = "function" != typeof e || e),
                                (r.fail = "function" == typeof t && t),
                                (r.domain = k ? w.domain : void 0),
                                this._c.push(r),
                                this._a && this._a.push(r),
                                this._s && E(this, !1),
                                r.promise
                            );
                        },
                        catch: function (e) {
                            return this.then(void 0, e);
                        }
                    })),
                    (a = function () {
                        var e = new n();
                        (this.promise = e),
                        (this.resolve = u(D, e, 1)),
                        (this.reject = u(L, e, 1));
                    }),
                    (b.f = R = function (e) {
                        return e === P || e === s ? new a(e) : i(e);
                    })),
                h(h.G + h.W + h.F * !x, {
                    Promise: P
                }),
                r(23)(P, "Promise"),
                r(97)("Promise"),
                (s = r(5).Promise),
                h(h.S + h.F * !x, "Promise", {
                    reject: function (e) {
                        var t = R(this);
                        return (0, t.reject)(e), t.promise;
                    }
                }),
                h(h.S + h.F * (o || !x), "Promise", {
                    resolve: function (e) {
                        return A(o && this === s ? P : this, e);
                    }
                }),
                h(
                    h.S +
                    h.F *
                    !(
                        x &&
                        r(56)(function (e) {
                            P.all(e).catch(C);
                        })
                    ),
                    "Promise", {
                        all: function (e) {
                            var t = this,
                                r = R(t),
                                n = r.resolve,
                                i = r.reject,
                                a = y(function () {
                                    var r = [],
                                        a = 0,
                                        s = 1;
                                    m(e, !1, function (e) {
                                            var o = a++,
                                                l = !1;
                                            r.push(void 0),
                                                s++,
                                                t.resolve(e).then(function (e) {
                                                    l || ((l = !0), (r[o] = e), --s || n(r));
                                                }, i);
                                        }),
                                        --s || n(r);
                                });
                            return a.e && i(a.v), r.promise;
                        },
                        race: function (e) {
                            var t = this,
                                r = R(t),
                                n = r.reject,
                                i = y(function () {
                                    m(e, !1, function (e) {
                                        t.resolve(e).then(r.resolve, n);
                                    });
                                });
                            return i.e && n(i.v), r.promise;
                        }
                    }
                );
        },
        function (e, t, r) {
            "use strict";

            var n = r(6);

            e.exports = function (e, t, r, i) {
                try {
                    return i ? t(n(r)[0], r[1]) : t(r);
                } catch (t) {
                    var a = e.return;
                    throw (void 0 !== a && n(a.call(e)), t);
                }
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(19),
                i = r(1)("iterator"),
                a = Array.prototype;

            e.exports = function (e) {
                return void 0 !== e && (n.Array === e || a[i] === e);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(31),
                i = r(1)("iterator"),
                a = r(19);

            e.exports = r(5).getIteratorMethod = function (e) {
                if (void 0 != e) return e[i] || e["@@iterator"] || a[n(e)];
            };
        },
        function (e, t, r) {
            "use strict";

            e.exports = function (e, t, r) {
                var n = void 0 === r;

                switch (t.length) {
                    case 0:
                        return n ? e() : e.call(r);

                    case 1:
                        return n ? e(t[0]) : e.call(r, t[0]);

                    case 2:
                        return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);

                    case 3:
                        return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);

                    case 4:
                        return n ?
                            e(t[0], t[1], t[2], t[3]) :
                            e.call(r, t[0], t[1], t[2], t[3]);
                }

                return e.apply(r, t);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = r(53).set,
                a = n.MutationObserver || n.WebKitMutationObserver,
                s = n.process,
                o = n.Promise,
                l = "process" == r(14)(s);

            e.exports = function () {
                var e,
                    t,
                    r,
                    u = function u() {
                        var n, i;

                        for (l && (n = s.domain) && n.exit(); e;) {
                            (i = e.fn), (e = e.next);

                            try {
                                i();
                            } catch (n) {
                                throw (e ? r() : (t = void 0), n);
                            }
                        }

                        (t = void 0), n && n.enter();
                    };

                if (l)
                    r = function () {
                        s.nextTick(u);
                    };
                else if (!a || (n.navigator && n.navigator.standalone)) {
                    if (o && o.resolve) {
                        var c = o.resolve();

                        r = function () {
                            c.then(u);
                        };
                    } else
                        r = function () {
                            i.call(n, u);
                        };
                } else {
                    var h = !0,
                        d = document.createTextNode("");
                    new a(u).observe(d, {
                            characterData: !0
                        }),
                        (r = function () {
                            d.data = h = !h;
                        });
                }
                return function (n) {
                    var i = {
                        fn: n,
                        next: void 0
                    };
                    t && (t.next = i), e || ((e = i), r()), (t = i);
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = r(16),
                a = r(12),
                s = r(1)("species");

            e.exports = function (e) {
                var t = n[e];
                a &&
                    t &&
                    !t[s] &&
                    i.f(t, s, {
                        configurable: !0,
                        get: function () {
                            return this;
                        }
                    });
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(5),
                a = r(4),
                s = r(52),
                o = r(55);
            n(n.P + n.R, "Promise", {
                finally: function (e) {
                    var t = s(this, i.Promise || a.Promise),
                        r = "function" == typeof e;
                    return this.then(
                        r ?
                        function (r) {
                            return o(t, e()).then(function () {
                                return r;
                            });
                        } :
                        e,
                        r ?
                        function (r) {
                            return o(t, e()).then(function () {
                                throw r;
                            });
                        } :
                        e
                    );
                }
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(35),
                a = r(54);
            n(n.S, "Promise", {
                try: function (e) {
                    var t = i.f(this),
                        r = a(e);
                    return (r.e ? t.reject : t.resolve)(r.v), t.promise;
                }
            });
        },
        function (e, t, r) {
            "use strict";

            r(46), r(51), r(101), r(112), r(114), (e.exports = r(5).WeakMap);
        },
        function (e, t, r) {
            "use strict";

            var n,
                i = r(57)(0),
                a = r(8),
                s = r(37),
                o = r(105),
                l = r(107),
                u = r(2),
                c = r(13),
                h = r(58),
                d = s.getWeak,
                f = Object.isExtensible,
                p = l.ufstore,
                m = {},
                v = function v(e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                g = {
                    get: function (e) {
                        if (u(e)) {
                            var t = d(e);
                            return !0 === t ?
                                p(h(this, "WeakMap")).get(e) :
                                t ?
                                t[this._i] :
                                void 0;
                        }
                    },
                    set: function (e, t) {
                        return l.def(h(this, "WeakMap"), e, t);
                    }
                },
                _ = (e.exports = r(108)("WeakMap", v, g, l, !0, !0));

            c(function () {
                    return 7 != new _().set((Object.freeze || Object)(m), 7).get(m);
                }) &&
                (o((n = l.getConstructor(v, "WeakMap")).prototype, g),
                    (s.NEED = !0),
                    i(["delete", "has", "get", "set"], function (e) {
                        var t = _.prototype,
                            r = t[e];
                        a(t, e, function (t, i) {
                            if (u(t) && !f(t)) {
                                this._f || (this._f = new n());

                                var a = this._f[e](t, i);

                                return "set" == e ? this : a;
                            }

                            return r.call(this, t, i);
                        });
                    }));
        },
        function (e, t, r) {
            "use strict";

            var n = r(103);

            e.exports = function (e, t) {
                return new(n(e))(t);
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = r(104),
                a = r(1)("species");

            e.exports = function (e) {
                var t;
                return (
                    i(e) &&
                    ("function" != typeof (t = e.constructor) ||
                        (t !== Array && !i(t.prototype)) ||
                        (t = void 0),
                        n(t) && null === (t = t[a]) && (t = void 0)),
                    void 0 === t ? Array : t
                );
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(14);

            e.exports =
                Array.isArray ||
                function (e) {
                    return "Array" == n(e);
                };
        },
        function (e, t, r) {
            "use strict";

            var n = r(22),
                i = r(106),
                a = r(38),
                s = r(33),
                o = r(28),
                l = Object.assign;
            e.exports = !l ||
                r(13)(function () {
                    var e = {},
                        t = {},
                        r = Symbol(),
                        n = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        n.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n
                    );
                }) ?
                function (e, t) {
                    for (
                        var r = s(e), l = arguments.length, u = 1, c = i.f, h = a.f; l > u;

                    )
                        for (
                            var d,
                                f = o(arguments[u++]),
                                p = c ? n(f).concat(c(f)) : n(f),
                                m = p.length,
                                v = 0; m > v;

                        )
                            h.call(f, (d = p[v++])) && (r[d] = f[d]);

                    return r;
                } :
                l;
        },
        function (e, t, r) {
            "use strict";

            t.f = Object.getOwnPropertySymbols;
        },
        function (e, t, r) {
            "use strict";

            var n = r(36),
                i = r(37).getWeak,
                a = r(6),
                s = r(2),
                o = r(34),
                l = r(24),
                u = r(57),
                c = r(7),
                h = r(58),
                d = u(5),
                f = u(6),
                p = 0,
                m = function m(e) {
                    return e._l || (e._l = new v());
                },
                v = function v() {
                    this.a = [];
                },
                g = function g(e, t) {
                    return d(e.a, function (e) {
                        return e[0] === t;
                    });
                };

            (v.prototype = {
                get: function (e) {
                    var t = g(this, e);
                    if (t) return t[1];
                },
                has: function (e) {
                    return !!g(this, e);
                },
                set: function (e, t) {
                    var r = g(this, e);
                    r ? (r[1] = t) : this.a.push([e, t]);
                },
                delete: function (e) {
                    var t = f(this.a, function (t) {
                        return t[0] === e;
                    });
                    return ~t && this.a.splice(t, 1), !!~t;
                }
            }),
            (e.exports = {
                getConstructor: function (e, t, r, a) {
                    var u = e(function (e, n) {
                        o(e, u, t, "_i"),
                            (e._t = t),
                            (e._i = p++),
                            (e._l = void 0),
                            void 0 != n && l(n, r, e[a], e);
                    });
                    return (
                        n(u.prototype, {
                            delete: function (e) {
                                if (!s(e)) return !1;
                                var r = i(e);
                                return !0 === r ?
                                    m(h(this, t)).delete(e) :
                                    r && c(r, this._i) && delete r[this._i];
                            },
                            has: function (e) {
                                if (!s(e)) return !1;
                                var r = i(e);
                                return !0 === r ? m(h(this, t)).has(e) : r && c(r, this._i);
                            }
                        }),
                        u
                    );
                },
                def: function (e, t, r) {
                    var n = i(a(t), !0);
                    return !0 === n ? m(e).set(t, r) : (n[e._i] = r), e;
                },
                ufstore: m
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(4),
                i = r(3),
                a = r(8),
                s = r(36),
                o = r(37),
                l = r(24),
                u = r(34),
                c = r(2),
                h = r(13),
                d = r(56),
                f = r(23),
                p = r(109);

            e.exports = function (e, t, r, m, v, g) {
                var _ = n[e],
                    b = _,
                    y = v ? "set" : "add",
                    A = b && b.prototype,
                    S = {},
                    w = function w(e) {
                        var t = A[e];
                        a(
                            A,
                            e,
                            "delete" == e ?
                            function (e) {
                                return !(g && !c(e)) && t.call(this, 0 === e ? 0 : e);
                            } :
                            "has" == e ?
                            function (e) {
                                return !(g && !c(e)) && t.call(this, 0 === e ? 0 : e);
                            } :
                            "get" == e ?
                            function (e) {
                                return g && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                            } :
                            "add" == e ?
                            function (e) {
                                return t.call(this, 0 === e ? 0 : e), this;
                            } :
                            function (e, r) {
                                return t.call(this, 0 === e ? 0 : e, r), this;
                            }
                        );
                    };

                if (
                    "function" == typeof b &&
                    (g ||
                        (A.forEach &&
                            !h(function () {
                                new b().entries().next();
                            })))
                ) {
                    var P = new b(),
                        k = P[y](g ? {} : -0, 1) != P,
                        C = h(function () {
                            P.has(1);
                        }),
                        R = d(function (e) {
                            new b(e);
                        }),
                        x = !g &&
                        h(function () {
                            for (var e = new b(), t = 5; t--;) e[y](t, t);

                            return !e.has(-0);
                        });
                    R ||
                        (((b = t(function (t, r) {
                                u(t, b, e);
                                var n = p(new _(), t, b);
                                return void 0 != r && l(r, v, n[y], n), n;
                            })).prototype = A),
                            (A.constructor = b)),
                        (C || x) && (w("delete"), w("has"), v && w("get")),
                        (x || k) && w(y),
                        g && A.clear && delete A.clear;
                } else
                    (b = m.getConstructor(t, e, v, y)), s(b.prototype, r), (o.NEED = !0);

                return (
                    f(b, e),
                    (S[e] = b),
                    i(i.G + i.W + i.F * (b != _), S),
                    g || m.setStrong(b, e, v),
                    b
                );
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = r(110).set;

            e.exports = function (e, t, r) {
                var a,
                    s = t.constructor;
                return (
                    s !== r &&
                    "function" == typeof s &&
                    (a = s.prototype) !== r.prototype &&
                    n(a) &&
                    i &&
                    i(e, a),
                    e
                );
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(2),
                i = r(6),
                a = function a(e, t) {
                    if ((i(e), !n(t) && null !== t))
                        throw TypeError(t + ": can't set as prototype!");
                };

            e.exports = {
                set: Object.setPrototypeOf ||
                    ("__proto__" in {} ?
                        (function (e, t, n) {
                            try {
                                (n = r(9)(
                                    Function.call,
                                    r(111).f(Object.prototype, "__proto__").set,
                                    2
                                ))(e, []),
                                (t = !(e instanceof Array));
                            } catch (e) {
                                t = !0;
                            }

                            return function (e, r) {
                                return a(e, r), t ? (e.__proto__ = r) : n(e, r), e;
                            };
                        })({}, !1) :
                        void 0),
                check: a
            };
        },
        function (e, t, r) {
            "use strict";

            var n = r(38),
                i = r(27),
                a = r(18),
                s = r(42),
                o = r(7),
                l = r(41),
                u = Object.getOwnPropertyDescriptor;
            t.f = r(12) ?
                u :
                function (e, t) {
                    if (((e = a(e)), (t = s(t, !0)), l))
                        try {
                            return u(e, t);
                        } catch (e) {}
                    if (o(e, t)) return i(!n.f.call(e, t), e[t]);
                };
        },
        function (e, t, r) {
            "use strict";

            r(113)("WeakMap");
        },
        function (e, t, r) {
            "use strict";

            var n = r(3);

            e.exports = function (e) {
                n(n.S, e, {
                    of: function () {
                        for (var e = arguments.length, t = new Array(e); e--;)
                            t[e] = arguments[e];

                        return new this(t);
                    }
                });
            };
        },
        function (e, t, r) {
            "use strict";

            r(115)("WeakMap");
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(17),
                a = r(9),
                s = r(24);

            e.exports = function (e) {
                n(n.S, e, {
                    from: function (e) {
                        var t,
                            r,
                            n,
                            o,
                            l = arguments[1];
                        return (
                            i(this),
                            (t = void 0 !== l) && i(l),
                            void 0 == e ?
                            new this() :
                            ((r = []),
                                t ?
                                ((n = 0),
                                    (o = a(l, arguments[2], 2)),
                                    s(e, !1, function (e) {
                                        r.push(o(e, n++));
                                    })) :
                                s(e, !1, r.push, r),
                                new this(r))
                        );
                    }
                });
            };
        },
        function (e, t, r) {
            "use strict";

            r(117), (e.exports = r(5).Object.values);
        },
        function (e, t, r) {
            "use strict";

            var n = r(3),
                i = r(118)(!1);
            n(n.S, "Object", {
                values: function (e) {
                    return i(e);
                }
            });
        },
        function (e, t, r) {
            "use strict";

            var n = r(22),
                i = r(18),
                a = r(38).f;

            e.exports = function (e) {
                return function (t) {
                    for (var r, s = i(t), o = n(s), l = o.length, u = 0, c = []; l > u;)
                        a.call(s, (r = o[u++])) && c.push(e ? [r, s[r]] : s[r]);

                    return c;
                };
            };
        },
        function (e, t, r) {
            "use strict";

            var n = !1;
            if ("undefined" != typeof ReadableStream)
                try {
                    new ReadableStream({
                            start: function (e) {
                                e.close();
                            }
                        }),
                        (n = !0);
                } catch (e) {}
            t.ReadableStream = n ? ReadableStream : r(120).ReadableStream;
        },
        function (e, t, r) {
            "use strict";

            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                };
            !(function (e, t) {
                for (var r in t) e[r] = t[r];
            })(
                t,
                (function (e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var i = (t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        });
                        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
                    }

                    return (
                        (r.m = e),
                        (r.c = t),
                        (r.i = function (e) {
                            return e;
                        }),
                        (r.d = function (e, t, n) {
                            r.o(e, t) ||
                                Object.defineProperty(e, t, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: n
                                });
                        }),
                        (r.n = function (e) {
                            var t =
                                e && e.__esModule ?
                                function () {
                                    return e.default;
                                } :
                                function () {
                                    return e;
                                };
                            return r.d(t, "a", t), t;
                        }),
                        (r.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (r.p = ""),
                        r((r.s = 7))
                    );
                })([
                    function (e, t, r) {
                        var i =
                            "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ?
                            function (e) {
                                return void 0 === e ? "undefined" : n(e);
                            } :
                            function (e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype ?
                                    "symbol" :
                                    void 0 === e ?
                                    "undefined" :
                                    n(e);
                            },
                            a = r(1).assert;

                        function s(e) {
                            return (
                                "string" == typeof e ||
                                "symbol" === (void 0 === e ? "undefined" : i(e))
                            );
                        }

                        function o(e, t, r) {
                            if ("function" != typeof e)
                                throw new TypeError("Argument is not a function");
                            return Function.prototype.apply.call(e, t, r);
                        }

                        (t.typeIsObject = function (e) {
                            return (
                                ("object" === (void 0 === e ? "undefined" : i(e)) &&
                                    null !== e) ||
                                "function" == typeof e
                            );
                        }),
                        (t.createDataProperty = function (e, r, n) {
                            a(t.typeIsObject(e)),
                                Object.defineProperty(e, r, {
                                    value: n,
                                    writable: !0,
                                    enumerable: !0,
                                    configurable: !0
                                });
                        }),
                        (t.createArrayFromList = function (e) {
                            return e.slice();
                        }),
                        (t.ArrayBufferCopy = function (e, t, r, n, i) {
                            new Uint8Array(e).set(new Uint8Array(r, n, i), t);
                        }),
                        (t.CreateIterResultObject = function (e, t) {
                            a("boolean" == typeof t);
                            var r = {};
                            return (
                                Object.defineProperty(r, "value", {
                                    value: e,
                                    enumerable: !0,
                                    writable: !0,
                                    configurable: !0
                                }),
                                Object.defineProperty(r, "done", {
                                    value: t,
                                    enumerable: !0,
                                    writable: !0,
                                    configurable: !0
                                }),
                                r
                            );
                        }),
                        (t.IsFiniteNonNegativeNumber = function (e) {
                            return !Number.isNaN(e) && e !== 1 / 0 && !(e < 0);
                        }),
                        (t.InvokeOrNoop = function (e, t, r) {
                            a(void 0 !== e), a(s(t)), a(Array.isArray(r));
                            var n = e[t];
                            if (void 0 !== n) return o(n, e, r);
                        }),
                        (t.PromiseInvokeOrNoop = function (e, r, n) {
                            a(void 0 !== e), a(s(r)), a(Array.isArray(n));

                            try {
                                return Promise.resolve(t.InvokeOrNoop(e, r, n));
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        }),
                        (t.PromiseInvokeOrPerformFallback = function (e, t, r, n, i) {
                            a(void 0 !== e),
                                a(s(t)),
                                a(Array.isArray(r)),
                                a(Array.isArray(i));
                            var l = void 0;

                            try {
                                l = e[t];
                            } catch (e) {
                                return Promise.reject(e);
                            }

                            if (void 0 === l) return n.apply(null, i);

                            try {
                                return Promise.resolve(o(l, e, r));
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        }),
                        (t.TransferArrayBuffer = function (e) {
                            return e.slice();
                        }),
                        (t.ValidateAndNormalizeHighWaterMark = function (e) {
                            if (((e = Number(e)), Number.isNaN(e) || e < 0))
                                throw new RangeError(
                                    "highWaterMark property of a queuing strategy must be non-negative and non-NaN"
                                );
                            return e;
                        }),
                        (t.ValidateAndNormalizeQueuingStrategy = function (e, r) {
                            if (void 0 !== e && "function" != typeof e)
                                throw new TypeError(
                                    "size property of a queuing strategy must be a function"
                                );
                            return {
                                size: e,
                                highWaterMark: (r = t.ValidateAndNormalizeHighWaterMark(r))
                            };
                        });
                    },
                    function (e, t, r) {
                        function n(e) {
                            (this.name = "AssertionError"),
                            (this.message = e || ""),
                            (this.stack = new Error().stack);
                        }

                        (n.prototype = Object.create(Error.prototype)),
                        (n.prototype.constructor = n),
                        (e.exports = {
                            rethrowAssertionErrorRejection: function (e) {
                                e &&
                                    e.constructor === n &&
                                    setTimeout(function () {
                                        throw e;
                                    }, 0);
                            },
                            AssertionError: n,
                            assert: function (e, t) {
                                if (!e) throw new n(t);
                            }
                        });
                    },
                    function (e, t, r) {
                        var n = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                        Object.defineProperty(e, n.key, n);
                                }
                            }

                            return function (t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t;
                            };
                        })();

                        function i(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }

                        var a = r(0),
                            s = a.InvokeOrNoop,
                            o = a.PromiseInvokeOrNoop,
                            l = a.ValidateAndNormalizeQueuingStrategy,
                            u = a.typeIsObject,
                            c = r(1),
                            h = c.assert,
                            d = c.rethrowAssertionErrorRejection,
                            f = r(3),
                            p = f.DequeueValue,
                            m = f.EnqueueValueWithSize,
                            v = f.PeekQueueValue,
                            g = f.ResetQueue,
                            _ = (function () {
                                function e() {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] :
                                        {},
                                        r =
                                        arguments.length > 1 && void 0 !== arguments[1] ?
                                        arguments[1] :
                                        {},
                                        n = r.size,
                                        a = r.highWaterMark,
                                        s = void 0 === a ? 1 : a;
                                    if (
                                        (i(this, e),
                                            (this._state = "writable"),
                                            (this._storedError = void 0),
                                            (this._writer = void 0),
                                            (this._writableStreamController = void 0),
                                            (this._writeRequests = []),
                                            (this._inFlightWriteRequest = void 0),
                                            (this._closeRequest = void 0),
                                            (this._inFlightCloseRequest = void 0),
                                            (this._pendingAbortRequest = void 0),
                                            (this._backpressure = !1),
                                            void 0 !== t.type)
                                    )
                                        throw new RangeError("Invalid type is specified");
                                    (this._writableStreamController = new N(this, t, n, s)),
                                    this._writableStreamController.__startSteps();
                                }

                                return (
                                    n(e, [{
                                            key: "abort",
                                            value: function (e) {
                                                return !1 === y(this) ?
                                                    Promise.reject(G("abort")) :
                                                    !0 === A(this) ?
                                                    Promise.reject(
                                                        new TypeError(
                                                            "Cannot abort a stream that already has a writer"
                                                        )
                                                    ) :
                                                    S(this, e);
                                            }
                                        },
                                        {
                                            key: "getWriter",
                                            value: function () {
                                                if (!1 === y(this)) throw G("getWriter");
                                                return b(this);
                                            }
                                        },
                                        {
                                            key: "locked",
                                            get: function () {
                                                if (!1 === y(this)) throw G("locked");
                                                return A(this);
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();

                        function b(e) {
                            return new O(e);
                        }

                        function y(e) {
                            return (
                                !!u(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_writableStreamController"
                                )
                            );
                        }

                        function A(e) {
                            return (
                                h(
                                    !0 === y(e),
                                    "IsWritableStreamLocked should only be used on known writable streams"
                                ),
                                void 0 !== e._writer
                            );
                        }

                        function S(e, t) {
                            var r = e._state;
                            if ("closed" === r) return Promise.resolve(void 0);
                            if ("errored" === r) return Promise.reject(e._storedError);
                            var n = new TypeError("Requested to abort");
                            if (void 0 !== e._pendingAbortRequest) return Promise.reject(n);
                            h(
                                "writable" === r || "erroring" === r,
                                "state must be writable or erroring"
                            );
                            var i = !1;
                            "erroring" === r && ((i = !0), (t = void 0));
                            var a = new Promise(function (r, n) {
                                e._pendingAbortRequest = {
                                    _resolve: r,
                                    _reject: n,
                                    _reason: t,
                                    _wasAlreadyErroring: i
                                };
                            });
                            return !1 === i && P(e, n), a;
                        }

                        function w(e, t) {
                            var r = e._state;
                            "writable" !== r ? (h("erroring" === r), k(e)) : P(e, t);
                        }

                        function P(e, t) {
                            h(void 0 === e._storedError, "stream._storedError === undefined"),
                                h("writable" === e._state, "state must be writable");
                            var r = e._writableStreamController;
                            h(void 0 !== r, "controller must not be undefined"),
                                (e._state = "erroring"),
                                (e._storedError = t);
                            var n = e._writer;
                            void 0 !== n && D(n, t), !1 === x(e) && !0 === r._started && k(e);
                        }

                        function k(e) {
                            h("erroring" === e._state, "stream._state === erroring"),
                                h(
                                    !1 === x(e),
                                    "WritableStreamHasOperationMarkedInFlight(stream) === false"
                                ),
                                (e._state = "errored"),
                                e._writableStreamController.__errorSteps();

                            for (
                                var t = e._storedError, r = 0; r < e._writeRequests.length; r++
                            ) {
                                e._writeRequests[r]._reject(t);
                            }

                            if (
                                ((e._writeRequests = []), void 0 !== e._pendingAbortRequest)
                            ) {
                                var n = e._pendingAbortRequest;
                                if (
                                    ((e._pendingAbortRequest = void 0),
                                        !0 === n._wasAlreadyErroring)
                                )
                                    return n._reject(t), void T(e);

                                e._writableStreamController.__abortSteps(n._reason).then(
                                    function () {
                                        n._resolve(), T(e);
                                    },
                                    function (t) {
                                        n._reject(t), T(e);
                                    }
                                );
                            } else T(e);
                        }

                        function C(e) {
                            h(void 0 !== e._inFlightCloseRequest),
                                e._inFlightCloseRequest._resolve(void 0),
                                (e._inFlightCloseRequest = void 0);
                            var t = e._state;
                            h("writable" === t || "erroring" === t),
                                "erroring" === t &&
                                ((e._storedError = void 0),
                                    void 0 !== e._pendingAbortRequest &&
                                    (e._pendingAbortRequest._resolve(),
                                        (e._pendingAbortRequest = void 0))),
                                (e._state = "closed");
                            var r = e._writer;
                            void 0 !== r &&
                                (function (e) {
                                    h(
                                            void 0 !== e._closedPromise_resolve,
                                            "writer._closedPromise_resolve !== undefined"
                                        ),
                                        h(
                                            void 0 !== e._closedPromise_reject,
                                            "writer._closedPromise_reject !== undefined"
                                        ),
                                        h(
                                            "pending" === e._closedPromiseState,
                                            "writer._closedPromiseState is pending"
                                        ),
                                        e._closedPromise_resolve(void 0),
                                        (e._closedPromise_resolve = void 0),
                                        (e._closedPromise_reject = void 0),
                                        (e._closedPromiseState = "resolved");
                                })(r),
                                h(
                                    void 0 === e._pendingAbortRequest,
                                    "stream._pendingAbortRequest === undefined"
                                ),
                                h(
                                    void 0 === e._storedError,
                                    "stream._storedError === undefined"
                                );
                        }

                        function R(e) {
                            return (
                                void 0 !== e._closeRequest || void 0 !== e._inFlightCloseRequest
                            );
                        }

                        function x(e) {
                            return (
                                void 0 !== e._inFlightWriteRequest ||
                                void 0 !== e._inFlightCloseRequest
                            );
                        }

                        function T(e) {
                            h("errored" === e._state, '_stream_.[[state]] is `"errored"`'),
                                void 0 !== e._closeRequest &&
                                (h(void 0 === e._inFlightCloseRequest),
                                    e._closeRequest._reject(e._storedError),
                                    (e._closeRequest = void 0));
                            var t = e._writer;
                            void 0 !== t &&
                                (V(t, e._storedError), t._closedPromise.catch(function () {}));
                        }

                        function E(e, t) {
                            h("writable" === e._state), h(!1 === R(e));
                            var r = e._writer;
                            void 0 !== r &&
                                t !== e._backpressure &&
                                (!0 === t ?
                                    (function (e) {
                                        h(
                                                void 0 === e._readyPromise_resolve,
                                                "writer._readyPromise_resolve === undefined"
                                            ),
                                            h(
                                                void 0 === e._readyPromise_reject,
                                                "writer._readyPromise_reject === undefined"
                                            ),
                                            (e._readyPromise = new Promise(function (t, r) {
                                                (e._readyPromise_resolve = t),
                                                (e._readyPromise_reject = r);
                                            })),
                                            (e._readyPromiseState = "pending");
                                    })(r) :
                                    (h(!1 === t), K(r))),
                                (e._backpressure = t);
                        }

                        e.exports = {
                            AcquireWritableStreamDefaultWriter: b,
                            IsWritableStream: y,
                            IsWritableStreamLocked: A,
                            WritableStream: _,
                            WritableStreamAbort: S,
                            WritableStreamDefaultControllerError: z,
                            WritableStreamDefaultWriterCloseWithErrorPropagation: function (
                                e
                            ) {
                                var t = e._ownerWritableStream;
                                h(void 0 !== t);
                                var r = t._state;
                                if (!0 === R(t) || "closed" === r) return Promise.resolve();
                                if ("errored" === r) return Promise.reject(t._storedError);
                                return h("writable" === r || "erroring" === r), F(e);
                            },
                            WritableStreamDefaultWriterRelease: M,
                            WritableStreamDefaultWriterWrite: j,
                            WritableStreamCloseQueuedOrInFlight: R
                        };

                        var O = (function () {
                            function e(t) {
                                if ((i(this, e), !1 === y(t)))
                                    throw new TypeError(
                                        "WritableStreamDefaultWriter can only be constructed with a WritableStream instance"
                                    );
                                if (!0 === A(t))
                                    throw new TypeError(
                                        "This stream has already been locked for exclusive writing by another writer"
                                    );
                                (this._ownerWritableStream = t), (t._writer = this);
                                var r,
                                    n = t._state;
                                if ("writable" === n)
                                    !1 === R(t) && !0 === t._backpressure ?
                                    (((r = this)._readyPromise = new Promise(function (e, t) {
                                            (r._readyPromise_resolve = e),
                                            (r._readyPromise_reject = t);
                                        })),
                                        (r._readyPromiseState = "pending")) :
                                    J(this),
                                    Y(this);
                                else if ("erroring" === n)
                                    Q(this, t._storedError),
                                    this._readyPromise.catch(function () {}),
                                    Y(this);
                                else if ("closed" === n)
                                    J(this),
                                    (function (e) {
                                        (e._closedPromise = Promise.resolve(void 0)),
                                        (e._closedPromise_resolve = void 0),
                                        (e._closedPromise_reject = void 0),
                                        (e._closedPromiseState = "resolved");
                                    })(this);
                                else {
                                    h("errored" === n, "state must be errored");
                                    var a = t._storedError;
                                    Q(this, a),
                                        this._readyPromise.catch(function () {}),
                                        (function (e, t) {
                                            (e._closedPromise = Promise.reject(t)),
                                            (e._closedPromise_resolve = void 0),
                                            (e._closedPromise_reject = void 0),
                                            (e._closedPromiseState = "rejected");
                                        })(this, a),
                                        this._closedPromise.catch(function () {});
                                }
                            }

                            return (
                                n(e, [{
                                        key: "abort",
                                        value: function (e) {
                                            return !1 === I(this) ?
                                                Promise.reject(H("abort")) :
                                                void 0 === this._ownerWritableStream ?
                                                Promise.reject(X("abort")) :
                                                (function (e, t) {
                                                    var r = e._ownerWritableStream;
                                                    return h(void 0 !== r), S(r, t);
                                                })(this, e);
                                        }
                                    },
                                    {
                                        key: "close",
                                        value: function () {
                                            if (!1 === I(this)) return Promise.reject(H("close"));
                                            var e = this._ownerWritableStream;
                                            return void 0 === e ?
                                                Promise.reject(X("close")) :
                                                !0 === R(e) ?
                                                Promise.reject(
                                                    new TypeError(
                                                        "cannot close an already-closing stream"
                                                    )
                                                ) :
                                                F(this);
                                        }
                                    },
                                    {
                                        key: "releaseLock",
                                        value: function () {
                                            if (!1 === I(this)) throw H("releaseLock");
                                            var e = this._ownerWritableStream;
                                            void 0 !== e && (h(void 0 !== e._writer), M(this));
                                        }
                                    },
                                    {
                                        key: "write",
                                        value: function (e) {
                                            return !1 === I(this) ?
                                                Promise.reject(H("write")) :
                                                void 0 === this._ownerWritableStream ?
                                                Promise.reject(X("write to")) :
                                                j(this, e);
                                        }
                                    },
                                    {
                                        key: "closed",
                                        get: function () {
                                            return !1 === I(this) ?
                                                Promise.reject(H("closed")) :
                                                this._closedPromise;
                                        }
                                    },
                                    {
                                        key: "desiredSize",
                                        get: function () {
                                            if (!1 === I(this)) throw H("desiredSize");
                                            if (void 0 === this._ownerWritableStream)
                                                throw X("desiredSize");
                                            return (function (e) {
                                                var t = e._ownerWritableStream,
                                                    r = t._state;
                                                if ("errored" === r || "erroring" === r) return null;
                                                if ("closed" === r) return 0;
                                                return q(t._writableStreamController);
                                            })(this);
                                        }
                                    },
                                    {
                                        key: "ready",
                                        get: function () {
                                            return !1 === I(this) ?
                                                Promise.reject(H("ready")) :
                                                this._readyPromise;
                                        }
                                    }
                                ]),
                                e
                            );
                        })();

                        function I(e) {
                            return (
                                !!u(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_ownerWritableStream"
                                )
                            );
                        }

                        function F(e) {
                            var t = e._ownerWritableStream;
                            h(void 0 !== t);
                            var r = t._state;
                            if ("closed" === r || "errored" === r)
                                return Promise.reject(
                                    new TypeError(
                                        "The stream (in " +
                                        r +
                                        " state) is not in the writable state and cannot be closed"
                                    )
                                );
                            h("writable" === r || "erroring" === r), h(!1 === R(t));
                            var n,
                                i = new Promise(function (e, r) {
                                    var n = {
                                        _resolve: e,
                                        _reject: r
                                    };
                                    t._closeRequest = n;
                                });
                            return (
                                !0 === t._backpressure && "writable" === r && K(e),
                                (n = t._writableStreamController),
                                m(n, "close", 0),
                                W(n),
                                i
                            );
                        }

                        function L(e, t) {
                            "pending" === e._closedPromiseState ?
                                V(e, t) :
                                (function (e, t) {
                                    h(
                                            void 0 === e._closedPromise_resolve,
                                            "writer._closedPromise_resolve === undefined"
                                        ),
                                        h(
                                            void 0 === e._closedPromise_reject,
                                            "writer._closedPromise_reject === undefined"
                                        ),
                                        h(
                                            "pending" !== e._closedPromiseState,
                                            "writer._closedPromiseState is not pending"
                                        ),
                                        (e._closedPromise = Promise.reject(t)),
                                        (e._closedPromiseState = "rejected");
                                })(e, t),
                                e._closedPromise.catch(function () {});
                        }

                        function D(e, t) {
                            "pending" === e._readyPromiseState ?
                                (function (e, t) {
                                    h(
                                            void 0 !== e._readyPromise_resolve,
                                            "writer._readyPromise_resolve !== undefined"
                                        ),
                                        h(
                                            void 0 !== e._readyPromise_reject,
                                            "writer._readyPromise_reject !== undefined"
                                        ),
                                        e._readyPromise_reject(t),
                                        (e._readyPromise_resolve = void 0),
                                        (e._readyPromise_reject = void 0),
                                        (e._readyPromiseState = "rejected");
                                })(e, t) :
                                (function (e, t) {
                                    h(
                                            void 0 === e._readyPromise_resolve,
                                            "writer._readyPromise_resolve === undefined"
                                        ),
                                        h(
                                            void 0 === e._readyPromise_reject,
                                            "writer._readyPromise_reject === undefined"
                                        ),
                                        (e._readyPromise = Promise.reject(t)),
                                        (e._readyPromiseState = "rejected");
                                })(e, t),
                                e._readyPromise.catch(function () {});
                        }

                        function M(e) {
                            var t = e._ownerWritableStream;
                            h(void 0 !== t), h(t._writer === e);
                            var r = new TypeError(
                                "Writer was released and can no longer be used to monitor the stream's closedness"
                            );
                            D(e, r),
                                L(e, r),
                                (t._writer = void 0),
                                (e._ownerWritableStream = void 0);
                        }

                        function j(e, t) {
                            var r = e._ownerWritableStream;
                            h(void 0 !== r);

                            var n = r._writableStreamController,
                                i = (function (e, t) {
                                    var r = e._strategySize;
                                    if (void 0 === r) return 1;

                                    try {
                                        return r(t);
                                    } catch (t) {
                                        return U(e, t), 1;
                                    }
                                })(n, t);

                            if (r !== e._ownerWritableStream)
                                return Promise.reject(X("write to"));
                            var a = r._state;
                            if ("errored" === a) return Promise.reject(r._storedError);
                            if (!0 === R(r) || "closed" === a)
                                return Promise.reject(
                                    new TypeError(
                                        "The stream is closing or closed and cannot be written to"
                                    )
                                );
                            if ("erroring" === a) return Promise.reject(r._storedError);
                            h("writable" === a);

                            var s = (function (e) {
                                return (
                                    h(!0 === A(e)),
                                    h("writable" === e._state),
                                    new Promise(function (t, r) {
                                        var n = {
                                            _resolve: t,
                                            _reject: r
                                        };

                                        e._writeRequests.push(n);
                                    })
                                );
                            })(r);

                            return (
                                (function (e, t, r) {
                                    var n = {
                                        chunk: t
                                    };

                                    try {
                                        m(e, n, r);
                                    } catch (t) {
                                        return void U(e, t);
                                    }

                                    var i = e._controlledWritableStream;

                                    if (!1 === R(i) && "writable" === i._state) {
                                        var a = B(e);
                                        E(i, a);
                                    }

                                    W(e);
                                })(n, t, i),
                                s
                            );
                        }

                        var N = (function () {
                            function e(t, r, n, a) {
                                if ((i(this, e), !1 === y(t)))
                                    throw new TypeError(
                                        "WritableStreamDefaultController can only be constructed with a WritableStream instance"
                                    );
                                if (void 0 !== t._writableStreamController)
                                    throw new TypeError(
                                        "WritableStreamDefaultController instances can only be created by the WritableStream constructor"
                                    );
                                (this._controlledWritableStream = t),
                                (this._underlyingSink = r),
                                (this._queue = void 0),
                                (this._queueTotalSize = void 0),
                                g(this),
                                    (this._started = !1);
                                var s = l(n, a);
                                (this._strategySize = s.size),
                                (this._strategyHWM = s.highWaterMark),
                                E(t, B(this));
                            }

                            return (
                                n(e, [{
                                        key: "error",
                                        value: function (e) {
                                            if (
                                                !1 ===
                                                (function (e) {
                                                    if (!u(e)) return !1;
                                                    if (
                                                        !Object.prototype.hasOwnProperty.call(
                                                            e,
                                                            "_underlyingSink"
                                                        )
                                                    )
                                                        return !1;
                                                    return !0;
                                                })(this)
                                            )
                                                throw new TypeError(
                                                    "WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController"
                                                );
                                            "writable" === this._controlledWritableStream._state &&
                                                z(this, e);
                                        }
                                    },
                                    {
                                        key: "__abortSteps",
                                        value: function (e) {
                                            return o(this._underlyingSink, "abort", [e]);
                                        }
                                    },
                                    {
                                        key: "__errorSteps",
                                        value: function () {
                                            g(this);
                                        }
                                    },
                                    {
                                        key: "__startSteps",
                                        value: function () {
                                            var e = this,
                                                t = s(this._underlyingSink, "start", [this]),
                                                r = this._controlledWritableStream;
                                            Promise.resolve(t)
                                                .then(
                                                    function () {
                                                        h(
                                                                "writable" === r._state || "erroring" === r._state
                                                            ),
                                                            (e._started = !0),
                                                            W(e);
                                                    },
                                                    function (t) {
                                                        h(
                                                                "writable" === r._state || "erroring" === r._state
                                                            ),
                                                            (e._started = !0),
                                                            w(r, t);
                                                    }
                                                )
                                                .catch(d);
                                        }
                                    }
                                ]),
                                e
                            );
                        })();

                        function q(e) {
                            return e._strategyHWM - e._queueTotalSize;
                        }

                        function W(e) {
                            var t = e._controlledWritableStream;

                            if (!1 !== e._started && void 0 === t._inFlightWriteRequest) {
                                var r = t._state;
                                if ("closed" !== r && "errored" !== r)
                                    if ("erroring" !== r) {
                                        if (0 !== e._queue.length) {
                                            var n = v(e);
                                            "close" === n
                                                ?
                                                (function (e) {
                                                    var t = e._controlledWritableStream;
                                                    (function (e) {
                                                        h(void 0 === e._inFlightCloseRequest),
                                                            h(void 0 !== e._closeRequest),
                                                            (e._inFlightCloseRequest = e._closeRequest),
                                                            (e._closeRequest = void 0);
                                                    })(t),
                                                    p(e),
                                                        h(
                                                            0 === e._queue.length,
                                                            "queue must be empty once the final write record is dequeued"
                                                        ),
                                                        o(e._underlyingSink, "close", [])
                                                        .then(
                                                            function () {
                                                                C(t);
                                                            },
                                                            function (e) {
                                                                !(function (e, t) {
                                                                    h(void 0 !== e._inFlightCloseRequest),
                                                                        e._inFlightCloseRequest._reject(t),
                                                                        (e._inFlightCloseRequest = void 0),
                                                                        h(
                                                                            "writable" === e._state ||
                                                                            "erroring" === e._state
                                                                        ),
                                                                        void 0 !== e._pendingAbortRequest &&
                                                                        (e._pendingAbortRequest._reject(t),
                                                                            (e._pendingAbortRequest = void 0)),
                                                                        w(e, t);
                                                                })(t, e);
                                                            }
                                                        )
                                                        .catch(d);
                                                })(e) :
                                                (function (e, t) {
                                                    var r = e._controlledWritableStream;
                                                    (function (e) {
                                                        h(
                                                                void 0 === e._inFlightWriteRequest,
                                                                "there must be no pending write request"
                                                            ),
                                                            h(
                                                                0 !== e._writeRequests.length,
                                                                "writeRequests must not be empty"
                                                            ),
                                                            (e._inFlightWriteRequest = e._writeRequests.shift());
                                                    })(r),
                                                    o(e._underlyingSink, "write", [t, e])
                                                        .then(
                                                            function () {
                                                                !(function (e) {
                                                                    h(void 0 !== e._inFlightWriteRequest),
                                                                        e._inFlightWriteRequest._resolve(
                                                                            void 0
                                                                        ),
                                                                        (e._inFlightWriteRequest = void 0);
                                                                })(r);
                                                                var t = r._state;

                                                                if (
                                                                    (h("writable" === t || "erroring" === t),
                                                                        p(e),
                                                                        !1 === R(r) && "writable" === t)
                                                                ) {
                                                                    var n = B(e);
                                                                    E(r, n);
                                                                }

                                                                W(e);
                                                            },
                                                            function (e) {
                                                                !(function (e, t) {
                                                                    h(void 0 !== e._inFlightWriteRequest),
                                                                        e._inFlightWriteRequest._reject(t),
                                                                        (e._inFlightWriteRequest = void 0),
                                                                        h(
                                                                            "writable" === e._state ||
                                                                            "erroring" === e._state
                                                                        ),
                                                                        w(e, t);
                                                                })(r, e);
                                                            }
                                                        )
                                                        .catch(d);
                                                })(e, n.chunk);
                                        }
                                    } else k(t);
                            }
                        }

                        function U(e, t) {
                            "writable" === e._controlledWritableStream._state && z(e, t);
                        }

                        function B(e) {
                            return q(e) <= 0;
                        }

                        function z(e, t) {
                            var r = e._controlledWritableStream;
                            h("writable" === r._state), P(r, t);
                        }

                        function G(e) {
                            return new TypeError(
                                "WritableStream.prototype." +
                                e +
                                " can only be used on a WritableStream"
                            );
                        }

                        function H(e) {
                            return new TypeError(
                                "WritableStreamDefaultWriter.prototype." +
                                e +
                                " can only be used on a WritableStreamDefaultWriter"
                            );
                        }

                        function X(e) {
                            return new TypeError(
                                "Cannot " + e + " a stream using a released writer"
                            );
                        }

                        function Y(e) {
                            e._closedPromise = new Promise(function (t, r) {
                                (e._closedPromise_resolve = t),
                                (e._closedPromise_reject = r),
                                (e._closedPromiseState = "pending");
                            });
                        }

                        function V(e, t) {
                            h(
                                    void 0 !== e._closedPromise_resolve,
                                    "writer._closedPromise_resolve !== undefined"
                                ),
                                h(
                                    void 0 !== e._closedPromise_reject,
                                    "writer._closedPromise_reject !== undefined"
                                ),
                                h(
                                    "pending" === e._closedPromiseState,
                                    "writer._closedPromiseState is pending"
                                ),
                                e._closedPromise_reject(t),
                                (e._closedPromise_resolve = void 0),
                                (e._closedPromise_reject = void 0),
                                (e._closedPromiseState = "rejected");
                        }

                        function Q(e, t) {
                            (e._readyPromise = Promise.reject(t)),
                            (e._readyPromise_resolve = void 0),
                            (e._readyPromise_reject = void 0),
                            (e._readyPromiseState = "rejected");
                        }

                        function J(e) {
                            (e._readyPromise = Promise.resolve(void 0)),
                            (e._readyPromise_resolve = void 0),
                            (e._readyPromise_reject = void 0),
                            (e._readyPromiseState = "fulfilled");
                        }

                        function K(e) {
                            h(
                                    void 0 !== e._readyPromise_resolve,
                                    "writer._readyPromise_resolve !== undefined"
                                ),
                                h(
                                    void 0 !== e._readyPromise_reject,
                                    "writer._readyPromise_reject !== undefined"
                                ),
                                e._readyPromise_resolve(void 0),
                                (e._readyPromise_resolve = void 0),
                                (e._readyPromise_reject = void 0),
                                (e._readyPromiseState = "fulfilled");
                        }
                    },
                    function (e, t, r) {
                        var n = r(0).IsFiniteNonNegativeNumber,
                            i = r(1).assert;
                        (t.DequeueValue = function (e) {
                            i(
                                    "_queue" in e && "_queueTotalSize" in e,
                                    "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
                                ),
                                i(
                                    e._queue.length > 0,
                                    "Spec-level failure: should never dequeue from an empty queue."
                                );

                            var t = e._queue.shift();

                            return (
                                (e._queueTotalSize -= t.size),
                                e._queueTotalSize < 0 && (e._queueTotalSize = 0),
                                t.value
                            );
                        }),
                        (t.EnqueueValueWithSize = function (e, t, r) {
                            if (
                                (i(
                                        "_queue" in e && "_queueTotalSize" in e,
                                        "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."
                                    ),
                                    (r = Number(r)),
                                    !n(r))
                            )
                                throw new RangeError(
                                    "Size must be a finite, non-NaN, non-negative number."
                                );
                            e._queue.push({
                                    value: t,
                                    size: r
                                }),
                                (e._queueTotalSize += r);
                        }),
                        (t.PeekQueueValue = function (e) {
                            return (
                                i(
                                    "_queue" in e && "_queueTotalSize" in e,
                                    "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
                                ),
                                i(
                                    e._queue.length > 0,
                                    "Spec-level failure: should never peek at an empty queue."
                                ),
                                e._queue[0].value
                            );
                        }),
                        (t.ResetQueue = function (e) {
                            i(
                                    "_queue" in e && "_queueTotalSize" in e,
                                    "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."
                                ),
                                (e._queue = []),
                                (e._queueTotalSize = 0);
                        });
                    },
                    function (e, t, r) {
                        var n = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                        Object.defineProperty(e, n.key, n);
                                }
                            }

                            return function (t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t;
                            };
                        })();

                        function i(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }

                        var a = r(0),
                            s = a.ArrayBufferCopy,
                            o = a.CreateIterResultObject,
                            l = a.IsFiniteNonNegativeNumber,
                            u = a.InvokeOrNoop,
                            c = a.PromiseInvokeOrNoop,
                            h = a.TransferArrayBuffer,
                            d = a.ValidateAndNormalizeQueuingStrategy,
                            f = a.ValidateAndNormalizeHighWaterMark,
                            p = r(0),
                            m = p.createArrayFromList,
                            v = p.createDataProperty,
                            g = p.typeIsObject,
                            _ = r(1),
                            b = _.assert,
                            y = _.rethrowAssertionErrorRejection,
                            A = r(3),
                            S = A.DequeueValue,
                            w = A.EnqueueValueWithSize,
                            P = A.ResetQueue,
                            k = r(2),
                            C = k.AcquireWritableStreamDefaultWriter,
                            R = k.IsWritableStream,
                            x = k.IsWritableStreamLocked,
                            T = k.WritableStreamAbort,
                            E = k.WritableStreamDefaultWriterCloseWithErrorPropagation,
                            O = k.WritableStreamDefaultWriterRelease,
                            I = k.WritableStreamDefaultWriterWrite,
                            F = k.WritableStreamCloseQueuedOrInFlight,
                            L = (function () {
                                function e() {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] :
                                        {},
                                        r =
                                        arguments.length > 1 && void 0 !== arguments[1] ?
                                        arguments[1] :
                                        {},
                                        n = r.size,
                                        a = r.highWaterMark;
                                    i(this, e),
                                        (this._state = "readable"),
                                        (this._reader = void 0),
                                        (this._storedError = void 0),
                                        (this._disturbed = !1),
                                        (this._readableStreamController = void 0);
                                    var s = t.type;
                                    if ("bytes" === String(s))
                                        void 0 === a && (a = 0),
                                        (this._readableStreamController = new de(this, t, a));
                                    else {
                                        if (void 0 !== s)
                                            throw new RangeError("Invalid type is specified");
                                        void 0 === a && (a = 1),
                                            (this._readableStreamController = new ne(this, t, n, a));
                                    }
                                }

                                return (
                                    n(e, [{
                                            key: "cancel",
                                            value: function (e) {
                                                return !1 === M(this) ?
                                                    Promise.reject(Te("cancel")) :
                                                    !0 === j(this) ?
                                                    Promise.reject(
                                                        new TypeError(
                                                            "Cannot cancel a stream that already has a reader"
                                                        )
                                                    ) :
                                                    U(this, e);
                                            }
                                        },
                                        {
                                            key: "getReader",
                                            value: function () {
                                                var e = (arguments.length > 0 && void 0 !== arguments[0] ?
                                                    arguments[0] :
                                                    {}
                                                ).mode;
                                                if (!1 === M(this)) throw Te("getReader");
                                                if (void 0 === e) return D(this);
                                                if ("byob" === (e = String(e))) return new J(this);
                                                throw new RangeError("Invalid mode is specified");
                                            }
                                        },
                                        {
                                            key: "pipeThrough",
                                            value: function (e, t) {
                                                var r = e.writable,
                                                    n = e.readable;
                                                return (
                                                    (function (e) {
                                                        try {
                                                            Promise.prototype.then.call(
                                                                e,
                                                                void 0,
                                                                function () {}
                                                            );
                                                        } catch (e) {}
                                                    })(this.pipeTo(r, t)),
                                                    n
                                                );
                                            }
                                        },
                                        {
                                            key: "pipeTo",
                                            value: function (e) {
                                                var t = this,
                                                    r =
                                                    arguments.length > 1 && void 0 !== arguments[1] ?
                                                    arguments[1] :
                                                    {},
                                                    n = r.preventClose,
                                                    i = r.preventAbort,
                                                    a = r.preventCancel;
                                                if (!1 === M(this)) return Promise.reject(Te("pipeTo"));
                                                if (!1 === R(e))
                                                    return Promise.reject(
                                                        new TypeError(
                                                            "ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
                                                        )
                                                    );
                                                if (
                                                    ((n = Boolean(n)),
                                                        (i = Boolean(i)),
                                                        (a = Boolean(a)),
                                                        !0 === j(this))
                                                )
                                                    return Promise.reject(
                                                        new TypeError(
                                                            "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
                                                        )
                                                    );
                                                if (!0 === x(e))
                                                    return Promise.reject(
                                                        new TypeError(
                                                            "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
                                                        )
                                                    );
                                                var s = D(this),
                                                    o = C(e),
                                                    l = !1,
                                                    u = Promise.resolve();
                                                return new Promise(function (r, c) {
                                                    var h, d, f;

                                                    if (
                                                        (v(t, s._closedPromise, function (t) {
                                                                !1 === i ?
                                                                    g(
                                                                        function () {
                                                                            return T(e, t);
                                                                        },
                                                                        !0,
                                                                        t
                                                                    ) :
                                                                    _(!0, t);
                                                            }),
                                                            v(e, o._closedPromise, function (e) {
                                                                !1 === a ?
                                                                    g(
                                                                        function () {
                                                                            return U(t, e);
                                                                        },
                                                                        !0,
                                                                        e
                                                                    ) :
                                                                    _(!0, e);
                                                            }),
                                                            (h = t),
                                                            (d = s._closedPromise),
                                                            (f = function () {
                                                                !1 === n ?
                                                                    g(function () {
                                                                        return E(o);
                                                                    }) :
                                                                    _();
                                                            }),
                                                            "closed" === h._state ? f() : d.then(f).catch(y),
                                                            !0 === F(e) || "closed" === e._state)
                                                    ) {
                                                        var p = new TypeError(
                                                            "the destination writable stream closed before all data could be piped to it"
                                                        );
                                                        !1 === a ?
                                                            g(
                                                                function () {
                                                                    return U(t, p);
                                                                },
                                                                !0,
                                                                p
                                                            ) :
                                                            _(!0, p);
                                                    }

                                                    function m() {
                                                        var e = u;
                                                        return u.then(function () {
                                                            return e !== u ? m() : void 0;
                                                        });
                                                    }

                                                    function v(e, t, r) {
                                                        "errored" === e._state ?
                                                            r(e._storedError) :
                                                            t.catch(r).catch(y);
                                                    }

                                                    function g(t, r, n) {
                                                        function i() {
                                                            t()
                                                                .then(
                                                                    function () {
                                                                        return b(r, n);
                                                                    },
                                                                    function (e) {
                                                                        return b(!0, e);
                                                                    }
                                                                )
                                                                .catch(y);
                                                        }

                                                        !0 !== l &&
                                                            ((l = !0),
                                                                "writable" === e._state && !1 === F(e) ?
                                                                m().then(i) :
                                                                i());
                                                    }

                                                    function _(t, r) {
                                                        !0 !== l &&
                                                            ((l = !0),
                                                                "writable" === e._state && !1 === F(e) ?
                                                                m()
                                                                .then(function () {
                                                                    return b(t, r);
                                                                })
                                                                .catch(y) :
                                                                b(t, r));
                                                    }

                                                    function b(e, t) {
                                                        O(o), te(s), e ? c(t) : r(void 0);
                                                    }

                                                    (function e() {
                                                        return (
                                                            (u = Promise.resolve()),
                                                            !0 === l ?
                                                            Promise.resolve() :
                                                            o._readyPromise
                                                            .then(function () {
                                                                return re(s).then(function (e) {
                                                                    var t = e.value;
                                                                    !0 !== e.done &&
                                                                        (u = I(o, t).catch(function () {}));
                                                                });
                                                            })
                                                            .then(e)
                                                        );
                                                    })().catch(function (e) {
                                                        (u = Promise.resolve()), y(e);
                                                    });
                                                });
                                            }
                                        },
                                        {
                                            key: "tee",
                                            value: function () {
                                                if (!1 === M(this)) throw Te("tee");
                                                var e = N(this, !1);
                                                return m(e);
                                            }
                                        },
                                        {
                                            key: "locked",
                                            get: function () {
                                                if (!1 === M(this)) throw Te("locked");
                                                return j(this);
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();

                        function D(e) {
                            return new Q(e);
                        }

                        function M(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_readableStreamController"
                                )
                            );
                        }

                        function j(e) {
                            return (
                                b(
                                    !0 === M(e),
                                    "IsReadableStreamLocked should only be used on known readable streams"
                                ),
                                void 0 !== e._reader
                            );
                        }

                        function N(e, t) {
                            b(!0 === M(e)), b("boolean" == typeof t);
                            var r = D(e),
                                n = {
                                    closedOrErrored: !1,
                                    canceled1: !1,
                                    canceled2: !1,
                                    reason1: void 0,
                                    reason2: void 0
                                };
                            n.promise = new Promise(function (e) {
                                n._resolve = e;
                            });

                            var i = (function () {
                                return function e() {
                                    var t = e._reader,
                                        r = e._branch1,
                                        n = e._branch2,
                                        i = e._teeState;
                                    return re(t).then(function (e) {
                                        b(g(e));
                                        var t = e.value,
                                            a = e.done;

                                        if (
                                            (b("boolean" == typeof a),
                                                !0 === a &&
                                                !1 === i.closedOrErrored &&
                                                (!1 === i.canceled1 && se(r),
                                                    !1 === i.canceled2 && se(n),
                                                    (i.closedOrErrored = !0)),
                                                !0 !== i.closedOrErrored)
                                        ) {
                                            var s = t,
                                                o = t;
                                            !1 === i.canceled1 && oe(r, s),
                                                !1 === i.canceled2 && oe(n, o);
                                        }
                                    });
                                };
                            })();

                            (i._reader = r), (i._teeState = n), (i._cloneForBranch2 = t);

                            var a = (function () {
                                return function e(t) {
                                    var r = e._stream,
                                        n = e._teeState;
                                    n.canceled1 = !0;
                                    n.reason1 = t;

                                    if (!0 === n.canceled2) {
                                        var i = m([n.reason1, n.reason2]),
                                            a = U(r, i);

                                        n._resolve(a);
                                    }

                                    return n.promise;
                                };
                            })();

                            (a._stream = e), (a._teeState = n);

                            var s = (function () {
                                return function e(t) {
                                    var r = e._stream,
                                        n = e._teeState;
                                    n.canceled2 = !0;
                                    n.reason2 = t;

                                    if (!0 === n.canceled1) {
                                        var i = m([n.reason1, n.reason2]),
                                            a = U(r, i);

                                        n._resolve(a);
                                    }

                                    return n.promise;
                                };
                            })();

                            (s._stream = e), (s._teeState = n);
                            var o = Object.create(Object.prototype);
                            v(o, "pull", i), v(o, "cancel", a);
                            var l = new L(o),
                                u = Object.create(Object.prototype);
                            v(u, "pull", i), v(u, "cancel", s);
                            var c = new L(u);
                            return (
                                (i._branch1 = l._readableStreamController),
                                (i._branch2 = c._readableStreamController),
                                r._closedPromise.catch(function (e) {
                                    !0 !== n.closedOrErrored &&
                                        (le(i._branch1, e),
                                            le(i._branch2, e),
                                            (n.closedOrErrored = !0));
                                }),
                                [l, c]
                            );
                        }

                        function q(e) {
                            return (
                                b(!0 === K(e._reader)),
                                b("readable" === e._state || "closed" === e._state),
                                new Promise(function (t, r) {
                                    var n = {
                                        _resolve: t,
                                        _reject: r
                                    };

                                    e._reader._readIntoRequests.push(n);
                                })
                            );
                        }

                        function W(e) {
                            return (
                                b(!0 === Z(e._reader)),
                                b("readable" === e._state),
                                new Promise(function (t, r) {
                                    var n = {
                                        _resolve: t,
                                        _reject: r
                                    };

                                    e._reader._readRequests.push(n);
                                })
                            );
                        }

                        function U(e, t) {
                            return (
                                (e._disturbed = !0),
                                "closed" === e._state ?
                                Promise.resolve(void 0) :
                                "errored" === e._state ?
                                Promise.reject(e._storedError) :
                                (B(e),
                                    e._readableStreamController
                                    .__cancelSteps(t)
                                    .then(function () {}))
                            );
                        }

                        function B(e) {
                            b("readable" === e._state), (e._state = "closed");
                            var t = e._reader;

                            if (void 0 !== t) {
                                if (!0 === Z(t)) {
                                    for (var r = 0; r < t._readRequests.length; r++) {
                                        (0, t._readRequests[r]._resolve)(o(void 0, !0));
                                    }

                                    t._readRequests = [];
                                }

                                !(function (e) {
                                    b(void 0 !== e._closedPromise_resolve),
                                        b(void 0 !== e._closedPromise_reject),
                                        e._closedPromise_resolve(void 0),
                                        (e._closedPromise_resolve = void 0),
                                        (e._closedPromise_reject = void 0);
                                })(t);
                            }
                        }

                        function z(e, t) {
                            b(!0 === M(e), "stream must be ReadableStream"),
                                b("readable" === e._state, "state must be readable"),
                                (e._state = "errored"),
                                (e._storedError = t);
                            var r = e._reader;

                            if (void 0 !== r) {
                                if (!0 === Z(r)) {
                                    for (var n = 0; n < r._readRequests.length; n++) {
                                        r._readRequests[n]._reject(t);
                                    }

                                    r._readRequests = [];
                                } else {
                                    b(K(r), "reader must be ReadableStreamBYOBReader");

                                    for (var i = 0; i < r._readIntoRequests.length; i++) {
                                        r._readIntoRequests[i]._reject(t);
                                    }

                                    r._readIntoRequests = [];
                                }

                                Ie(r, t), r._closedPromise.catch(function () {});
                            }
                        }

                        function G(e, t, r) {
                            var n = e._reader;
                            b(n._readRequests.length > 0),
                                n._readRequests.shift()._resolve(o(t, r));
                        }

                        function H(e) {
                            return e._reader._readIntoRequests.length;
                        }

                        function X(e) {
                            return e._reader._readRequests.length;
                        }

                        function Y(e) {
                            var t = e._reader;
                            return void 0 !== t && !1 !== K(t);
                        }

                        function V(e) {
                            var t = e._reader;
                            return void 0 !== t && !1 !== Z(t);
                        }

                        e.exports = {
                            ReadableStream: L,
                            IsReadableStreamDisturbed: function (e) {
                                return (
                                    b(
                                        !0 === M(e),
                                        "IsReadableStreamDisturbed should only be used on known readable streams"
                                    ),
                                    e._disturbed
                                );
                            },
                            ReadableStreamDefaultControllerClose: se,
                            ReadableStreamDefaultControllerEnqueue: oe,
                            ReadableStreamDefaultControllerError: le,
                            ReadableStreamDefaultControllerGetDesiredSize: ce
                        };

                        var Q = (function () {
                                function e(t) {
                                    if ((i(this, e), !1 === M(t)))
                                        throw new TypeError(
                                            "ReadableStreamDefaultReader can only be constructed with a ReadableStream instance"
                                        );
                                    if (!0 === j(t))
                                        throw new TypeError(
                                            "This stream has already been locked for exclusive reading by another reader"
                                        );
                                    $(this, t), (this._readRequests = []);
                                }

                                return (
                                    n(e, [{
                                            key: "cancel",
                                            value: function (e) {
                                                return !1 === Z(this) ?
                                                    Promise.reject(Oe("cancel")) :
                                                    void 0 === this._ownerReadableStream ?
                                                    Promise.reject(Ee("cancel")) :
                                                    ee(this, e);
                                            }
                                        },
                                        {
                                            key: "read",
                                            value: function () {
                                                return !1 === Z(this) ?
                                                    Promise.reject(Oe("read")) :
                                                    void 0 === this._ownerReadableStream ?
                                                    Promise.reject(Ee("read from")) :
                                                    re(this);
                                            }
                                        },
                                        {
                                            key: "releaseLock",
                                            value: function () {
                                                if (!1 === Z(this)) throw Oe("releaseLock");

                                                if (void 0 !== this._ownerReadableStream) {
                                                    if (this._readRequests.length > 0)
                                                        throw new TypeError(
                                                            "Tried to release a reader lock when that reader has pending read() calls un-settled"
                                                        );
                                                    te(this);
                                                }
                                            }
                                        },
                                        {
                                            key: "closed",
                                            get: function () {
                                                return !1 === Z(this) ?
                                                    Promise.reject(Oe("closed")) :
                                                    this._closedPromise;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(),
                            J = (function () {
                                function e(t) {
                                    if ((i(this, e), !M(t)))
                                        throw new TypeError(
                                            "ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source"
                                        );
                                    if (!1 === fe(t._readableStreamController))
                                        throw new TypeError(
                                            "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
                                        );
                                    if (j(t))
                                        throw new TypeError(
                                            "This stream has already been locked for exclusive reading by another reader"
                                        );
                                    $(this, t), (this._readIntoRequests = []);
                                }

                                return (
                                    n(e, [{
                                            key: "cancel",
                                            value: function (e) {
                                                return K(this) ?
                                                    void 0 === this._ownerReadableStream ?
                                                    Promise.reject(Ee("cancel")) :
                                                    ee(this, e) :
                                                    Promise.reject(Fe("cancel"));
                                            }
                                        },
                                        {
                                            key: "read",
                                            value: function (e) {
                                                return K(this) ?
                                                    void 0 === this._ownerReadableStream ?
                                                    Promise.reject(Ee("read from")) :
                                                    ArrayBuffer.isView(e) ?
                                                    0 === e.byteLength ?
                                                    Promise.reject(
                                                        new TypeError(
                                                            "view must have non-zero byteLength"
                                                        )
                                                    ) :
                                                    (function (e, t) {
                                                        var r = e._ownerReadableStream;
                                                        if (
                                                            (b(void 0 !== r),
                                                                (r._disturbed = !0),
                                                                "errored" === r._state)
                                                        )
                                                            return Promise.reject(r._storedError);
                                                        return (function (e, t) {
                                                            var r = e._controlledReadableStream,
                                                                n = 1;
                                                            t.constructor !== DataView &&
                                                                (n = t.constructor.BYTES_PER_ELEMENT);
                                                            var i = t.constructor,
                                                                a = {
                                                                    buffer: t.buffer,
                                                                    byteOffset: t.byteOffset,
                                                                    byteLength: t.byteLength,
                                                                    bytesFilled: 0,
                                                                    elementSize: n,
                                                                    ctor: i,
                                                                    readerType: "byob"
                                                                };
                                                            if (e._pendingPullIntos.length > 0)
                                                                return (
                                                                    (a.buffer = h(a.buffer)),
                                                                    e._pendingPullIntos.push(a),
                                                                    q(r)
                                                                );

                                                            if ("closed" === r._state) {
                                                                var s = new t.constructor(
                                                                    a.buffer,
                                                                    a.byteOffset,
                                                                    0
                                                                );
                                                                return Promise.resolve(o(s, !0));
                                                            }

                                                            if (e._queueTotalSize > 0) {
                                                                if (!0 === ye(e, a)) {
                                                                    var l = _e(a);

                                                                    return Se(e), Promise.resolve(o(l, !1));
                                                                }

                                                                if (!0 === e._closeRequested) {
                                                                    var u = new TypeError(
                                                                        "Insufficient bytes to fill elements in the given buffer"
                                                                    );
                                                                    return Re(e, u), Promise.reject(u);
                                                                }
                                                            }

                                                            (a.buffer = h(a.buffer)),
                                                            e._pendingPullIntos.push(a);
                                                            var c = q(r);
                                                            return me(e), c;
                                                        })(r._readableStreamController, t);
                                                    })(this, e) :
                                                    Promise.reject(
                                                        new TypeError(
                                                            "view must be an array buffer view"
                                                        )
                                                    ) :
                                                    Promise.reject(Fe("read"));
                                            }
                                        },
                                        {
                                            key: "releaseLock",
                                            value: function () {
                                                if (!K(this)) throw Fe("releaseLock");

                                                if (void 0 !== this._ownerReadableStream) {
                                                    if (this._readIntoRequests.length > 0)
                                                        throw new TypeError(
                                                            "Tried to release a reader lock when that reader has pending read() calls un-settled"
                                                        );
                                                    te(this);
                                                }
                                            }
                                        },
                                        {
                                            key: "closed",
                                            get: function () {
                                                return K(this) ?
                                                    this._closedPromise :
                                                    Promise.reject(Fe("closed"));
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();

                        function K(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests")
                            );
                        }

                        function Z(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(e, "_readRequests")
                            );
                        }

                        function $(e, t) {
                            (e._ownerReadableStream = t),
                            (t._reader = e),
                            "readable" === t._state ?
                                (function (e) {
                                    e._closedPromise = new Promise(function (t, r) {
                                        (e._closedPromise_resolve = t),
                                        (e._closedPromise_reject = r);
                                    });
                                })(e) :
                                "closed" === t._state ?
                                (function (e) {
                                    (e._closedPromise = Promise.resolve(void 0)),
                                    (e._closedPromise_resolve = void 0),
                                    (e._closedPromise_reject = void 0);
                                })(e) :
                                (b("errored" === t._state, "state must be errored"),
                                    (function (e, t) {
                                        (e._closedPromise = Promise.reject(t)),
                                        (e._closedPromise_resolve = void 0),
                                        (e._closedPromise_reject = void 0);
                                    })(e, t._storedError),
                                    e._closedPromise.catch(function () {}));
                        }

                        function ee(e, t) {
                            var r = e._ownerReadableStream;
                            return b(void 0 !== r), U(r, t);
                        }

                        function te(e) {
                            b(void 0 !== e._ownerReadableStream),
                                b(e._ownerReadableStream._reader === e),
                                "readable" === e._ownerReadableStream._state ?
                                Ie(
                                    e,
                                    new TypeError(
                                        "Reader was released and can no longer be used to monitor the stream's closedness"
                                    )
                                ) :
                                (function (e, t) {
                                    b(void 0 === e._closedPromise_resolve),
                                        b(void 0 === e._closedPromise_reject),
                                        (e._closedPromise = Promise.reject(t));
                                })(
                                    e,
                                    new TypeError(
                                        "Reader was released and can no longer be used to monitor the stream's closedness"
                                    )
                                ),
                                e._closedPromise.catch(function () {}),
                                (e._ownerReadableStream._reader = void 0),
                                (e._ownerReadableStream = void 0);
                        }

                        function re(e) {
                            var t = e._ownerReadableStream;
                            return (
                                b(void 0 !== t),
                                (t._disturbed = !0),
                                "closed" === t._state ?
                                Promise.resolve(o(void 0, !0)) :
                                "errored" === t._state ?
                                Promise.reject(t._storedError) :
                                (b("readable" === t._state),
                                    t._readableStreamController.__pullSteps())
                            );
                        }

                        var ne = (function () {
                            function e(t, r, n, a) {
                                if ((i(this, e), !1 === M(t)))
                                    throw new TypeError(
                                        "ReadableStreamDefaultController can only be constructed with a ReadableStream instance"
                                    );
                                if (void 0 !== t._readableStreamController)
                                    throw new TypeError(
                                        "ReadableStreamDefaultController instances can only be created by the ReadableStream constructor"
                                    );
                                (this._controlledReadableStream = t),
                                (this._underlyingSource = r),
                                (this._queue = void 0),
                                (this._queueTotalSize = void 0),
                                P(this),
                                    (this._started = !1),
                                    (this._closeRequested = !1),
                                    (this._pullAgain = !1),
                                    (this._pulling = !1);
                                var s = d(n, a);
                                (this._strategySize = s.size),
                                (this._strategyHWM = s.highWaterMark);
                                var o = this,
                                    l = u(r, "start", [this]);
                                Promise.resolve(l)
                                    .then(
                                        function () {
                                            (o._started = !0),
                                            b(!1 === o._pulling),
                                                b(!1 === o._pullAgain),
                                                ae(o);
                                        },
                                        function (e) {
                                            ue(o, e);
                                        }
                                    )
                                    .catch(y);
                            }

                            return (
                                n(e, [{
                                        key: "close",
                                        value: function () {
                                            if (!1 === ie(this)) throw Le("close");
                                            if (!0 === this._closeRequested)
                                                throw new TypeError(
                                                    "The stream has already been closed; do not close it again!"
                                                );
                                            var e = this._controlledReadableStream._state;
                                            if ("readable" !== e)
                                                throw new TypeError(
                                                    "The stream (in " +
                                                    e +
                                                    " state) is not in the readable state and cannot be closed"
                                                );
                                            se(this);
                                        }
                                    },
                                    {
                                        key: "enqueue",
                                        value: function (e) {
                                            if (!1 === ie(this)) throw Le("enqueue");
                                            if (!0 === this._closeRequested)
                                                throw new TypeError("stream is closed or draining");
                                            var t = this._controlledReadableStream._state;
                                            if ("readable" !== t)
                                                throw new TypeError(
                                                    "The stream (in " +
                                                    t +
                                                    " state) is not in the readable state and cannot be enqueued to"
                                                );
                                            return oe(this, e);
                                        }
                                    },
                                    {
                                        key: "error",
                                        value: function (e) {
                                            if (!1 === ie(this)) throw Le("error");
                                            var t = this._controlledReadableStream;
                                            if ("readable" !== t._state)
                                                throw new TypeError(
                                                    "The stream is " +
                                                    t._state +
                                                    " and so cannot be errored"
                                                );
                                            le(this, e);
                                        }
                                    },
                                    {
                                        key: "__cancelSteps",
                                        value: function (e) {
                                            return P(this), c(this._underlyingSource, "cancel", [e]);
                                        }
                                    },
                                    {
                                        key: "__pullSteps",
                                        value: function () {
                                            var e = this._controlledReadableStream;

                                            if (this._queue.length > 0) {
                                                var t = S(this);
                                                return (
                                                    !0 === this._closeRequested &&
                                                    0 === this._queue.length ?
                                                    B(e) :
                                                    ae(this),
                                                    Promise.resolve(o(t, !1))
                                                );
                                            }

                                            var r = W(e);
                                            return ae(this), r;
                                        }
                                    },
                                    {
                                        key: "desiredSize",
                                        get: function () {
                                            if (!1 === ie(this)) throw Le("desiredSize");
                                            return ce(this);
                                        }
                                    }
                                ]),
                                e
                            );
                        })();

                        function ie(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(e, "_underlyingSource")
                            );
                        }

                        function ae(e) {
                            !1 !==
                                (function (e) {
                                    var t = e._controlledReadableStream;
                                    if ("closed" === t._state || "errored" === t._state)
                                        return !1;
                                    if (!0 === e._closeRequested) return !1;
                                    if (!1 === e._started) return !1;
                                    if (!0 === j(t) && X(t) > 0) return !0;
                                    if (ce(e) > 0) return !0;
                                    return !1;
                                })(e) &&
                                (!0 !== e._pulling ?
                                    (b(!1 === e._pullAgain),
                                        (e._pulling = !0),
                                        c(e._underlyingSource, "pull", [e])
                                        .then(
                                            function () {
                                                if (((e._pulling = !1), !0 === e._pullAgain))
                                                    return (e._pullAgain = !1), ae(e);
                                            },
                                            function (t) {
                                                ue(e, t);
                                            }
                                        )
                                        .catch(y)) :
                                    (e._pullAgain = !0));
                        }

                        function se(e) {
                            var t = e._controlledReadableStream;
                            b(!1 === e._closeRequested),
                                b("readable" === t._state),
                                (e._closeRequested = !0),
                                0 === e._queue.length && B(t);
                        }

                        function oe(e, t) {
                            var r = e._controlledReadableStream;
                            if (
                                (b(!1 === e._closeRequested),
                                    b("readable" === r._state),
                                    !0 === j(r) && X(r) > 0)
                            )
                                G(r, t, !1);
                            else {
                                var n = 1;

                                if (void 0 !== e._strategySize) {
                                    var i = e._strategySize;

                                    try {
                                        n = i(t);
                                    } catch (t) {
                                        throw (ue(e, t), t);
                                    }
                                }

                                try {
                                    w(e, t, n);
                                } catch (t) {
                                    throw (ue(e, t), t);
                                }
                            }
                            ae(e);
                        }

                        function le(e, t) {
                            var r = e._controlledReadableStream;
                            b("readable" === r._state), P(e), z(r, t);
                        }

                        function ue(e, t) {
                            "readable" === e._controlledReadableStream._state && le(e, t);
                        }

                        function ce(e) {
                            var t = e._controlledReadableStream._state;
                            return "errored" === t ?
                                null :
                                "closed" === t ?
                                0 :
                                e._strategyHWM - e._queueTotalSize;
                        }

                        var he = (function () {
                                function e(t, r) {
                                    i(this, e),
                                        (this._associatedReadableByteStreamController = t),
                                        (this._view = r);
                                }

                                return (
                                    n(e, [{
                                            key: "respond",
                                            value: function (e) {
                                                if (!1 === pe(this)) throw De("respond");
                                                if (
                                                    void 0 ===
                                                    this._associatedReadableByteStreamController
                                                )
                                                    throw new TypeError(
                                                        "This BYOB request has been invalidated"
                                                    );
                                                !(function (e, t) {
                                                    if (((t = Number(t)), !1 === l(t)))
                                                        throw new RangeError(
                                                            "bytesWritten must be a finite"
                                                        );
                                                    b(e._pendingPullIntos.length > 0), ke(e, t);
                                                })(this._associatedReadableByteStreamController, e);
                                            }
                                        },
                                        {
                                            key: "respondWithNewView",
                                            value: function (e) {
                                                if (!1 === pe(this)) throw De("respond");
                                                if (
                                                    void 0 ===
                                                    this._associatedReadableByteStreamController
                                                )
                                                    throw new TypeError(
                                                        "This BYOB request has been invalidated"
                                                    );
                                                if (!ArrayBuffer.isView(e))
                                                    throw new TypeError(
                                                        "You can only respond with array buffer views"
                                                    );
                                                !(function (e, t) {
                                                    b(e._pendingPullIntos.length > 0);
                                                    var r = e._pendingPullIntos[0];
                                                    if (r.byteOffset + r.bytesFilled !== t.byteOffset)
                                                        throw new RangeError(
                                                            "The region specified by view does not match byobRequest"
                                                        );
                                                    if (r.byteLength !== t.byteLength)
                                                        throw new RangeError(
                                                            "The buffer of view has different capacity than byobRequest"
                                                        );
                                                    (r.buffer = t.buffer), ke(e, t.byteLength);
                                                })(this._associatedReadableByteStreamController, e);
                                            }
                                        },
                                        {
                                            key: "view",
                                            get: function () {
                                                return this._view;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(),
                            de = (function () {
                                function e(t, r, n) {
                                    if ((i(this, e), !1 === M(t)))
                                        throw new TypeError(
                                            "ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source"
                                        );
                                    if (void 0 !== t._readableStreamController)
                                        throw new TypeError(
                                            "ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source"
                                        );
                                    (this._controlledReadableStream = t),
                                    (this._underlyingByteSource = r),
                                    (this._pullAgain = !1),
                                    (this._pulling = !1),
                                    ve(this),
                                        (this._queue = this._queueTotalSize = void 0),
                                        P(this),
                                        (this._closeRequested = !1),
                                        (this._started = !1),
                                        (this._strategyHWM = f(n));
                                    var a = r.autoAllocateChunkSize;
                                    if (void 0 !== a && (!1 === Number.isInteger(a) || a <= 0))
                                        throw new RangeError(
                                            "autoAllocateChunkSize must be a positive integer"
                                        );
                                    (this._autoAllocateChunkSize = a),
                                    (this._pendingPullIntos = []);
                                    var s = this,
                                        o = u(r, "start", [this]);
                                    Promise.resolve(o)
                                        .then(
                                            function () {
                                                (s._started = !0),
                                                b(!1 === s._pulling),
                                                    b(!1 === s._pullAgain),
                                                    me(s);
                                            },
                                            function (e) {
                                                "readable" === t._state && Re(s, e);
                                            }
                                        )
                                        .catch(y);
                                }

                                return (
                                    n(e, [{
                                            key: "close",
                                            value: function () {
                                                if (!1 === fe(this)) throw Me("close");
                                                if (!0 === this._closeRequested)
                                                    throw new TypeError(
                                                        "The stream has already been closed; do not close it again!"
                                                    );
                                                var e = this._controlledReadableStream._state;
                                                if ("readable" !== e)
                                                    throw new TypeError(
                                                        "The stream (in " +
                                                        e +
                                                        " state) is not in the readable state and cannot be closed"
                                                    );
                                                !(function (e) {
                                                    var t = e._controlledReadableStream;
                                                    if (
                                                        (b(!1 === e._closeRequested),
                                                            b("readable" === t._state),
                                                            e._queueTotalSize > 0)
                                                    )
                                                        return void(e._closeRequested = !0);

                                                    if (e._pendingPullIntos.length > 0) {
                                                        var r = e._pendingPullIntos[0];

                                                        if (r.bytesFilled > 0) {
                                                            var n = new TypeError(
                                                                "Insufficient bytes to fill elements in the given buffer"
                                                            );
                                                            throw (Re(e, n), n);
                                                        }
                                                    }

                                                    B(t);
                                                })(this);
                                            }
                                        },
                                        {
                                            key: "enqueue",
                                            value: function (e) {
                                                if (!1 === fe(this)) throw Me("enqueue");
                                                if (!0 === this._closeRequested)
                                                    throw new TypeError("stream is closed or draining");
                                                var t = this._controlledReadableStream._state;
                                                if ("readable" !== t)
                                                    throw new TypeError(
                                                        "The stream (in " +
                                                        t +
                                                        " state) is not in the readable state and cannot be enqueued to"
                                                    );
                                                if (!ArrayBuffer.isView(e))
                                                    throw new TypeError(
                                                        "You can only enqueue array buffer views when using a ReadableByteStreamController"
                                                    );
                                                !(function (e, t) {
                                                    var r = e._controlledReadableStream;
                                                    b(!1 === e._closeRequested),
                                                        b("readable" === r._state);
                                                    var n = t.buffer,
                                                        i = t.byteOffset,
                                                        a = t.byteLength,
                                                        s = h(n);
                                                    if (!0 === V(r)) {
                                                        if (0 === X(r)) be(e, s, i, a);
                                                        else {
                                                            b(0 === e._queue.length);
                                                            var o = new Uint8Array(s, i, a);
                                                            G(r, o, !1);
                                                        }
                                                    } else
                                                        !0 === Y(r) ?
                                                        (be(e, s, i, a), Pe(e)) :
                                                        (b(!1 === j(r), "stream must not be locked"),
                                                            be(e, s, i, a));
                                                })(this, e);
                                            }
                                        },
                                        {
                                            key: "error",
                                            value: function (e) {
                                                if (!1 === fe(this)) throw Me("error");
                                                var t = this._controlledReadableStream;
                                                if ("readable" !== t._state)
                                                    throw new TypeError(
                                                        "The stream is " +
                                                        t._state +
                                                        " and so cannot be errored"
                                                    );
                                                Re(this, e);
                                            }
                                        },
                                        {
                                            key: "__cancelSteps",
                                            value: function (e) {
                                                this._pendingPullIntos.length > 0 &&
                                                    (this._pendingPullIntos[0].bytesFilled = 0);
                                                return (
                                                    P(this), c(this._underlyingByteSource, "cancel", [e])
                                                );
                                            }
                                        },
                                        {
                                            key: "__pullSteps",
                                            value: function () {
                                                var e = this._controlledReadableStream;

                                                if ((b(!0 === V(e)), this._queueTotalSize > 0)) {
                                                    b(0 === X(e));

                                                    var t = this._queue.shift();

                                                    (this._queueTotalSize -= t.byteLength), Se(this);
                                                    var r = void 0;

                                                    try {
                                                        r = new Uint8Array(
                                                            t.buffer,
                                                            t.byteOffset,
                                                            t.byteLength
                                                        );
                                                    } catch (e) {
                                                        return Promise.reject(e);
                                                    }

                                                    return Promise.resolve(o(r, !1));
                                                }

                                                var n = this._autoAllocateChunkSize;

                                                if (void 0 !== n) {
                                                    var i = void 0;

                                                    try {
                                                        i = new ArrayBuffer(n);
                                                    } catch (e) {
                                                        return Promise.reject(e);
                                                    }

                                                    var a = {
                                                        buffer: i,
                                                        byteOffset: 0,
                                                        byteLength: n,
                                                        bytesFilled: 0,
                                                        elementSize: 1,
                                                        ctor: Uint8Array,
                                                        readerType: "default"
                                                    };

                                                    this._pendingPullIntos.push(a);
                                                }

                                                var s = W(e);
                                                return me(this), s;
                                            }
                                        },
                                        {
                                            key: "byobRequest",
                                            get: function () {
                                                if (!1 === fe(this)) throw Me("byobRequest");

                                                if (
                                                    void 0 === this._byobRequest &&
                                                    this._pendingPullIntos.length > 0
                                                ) {
                                                    var e = this._pendingPullIntos[0],
                                                        t = new Uint8Array(
                                                            e.buffer,
                                                            e.byteOffset + e.bytesFilled,
                                                            e.byteLength - e.bytesFilled
                                                        );
                                                    this._byobRequest = new he(this, t);
                                                }

                                                return this._byobRequest;
                                            }
                                        },
                                        {
                                            key: "desiredSize",
                                            get: function () {
                                                if (!1 === fe(this)) throw Me("desiredSize");
                                                return xe(this);
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();

                        function fe(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_underlyingByteSource"
                                )
                            );
                        }

                        function pe(e) {
                            return (
                                !!g(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_associatedReadableByteStreamController"
                                )
                            );
                        }

                        function me(e) {
                            !1 !==
                                (function (e) {
                                    var t = e._controlledReadableStream;
                                    if ("readable" !== t._state) return !1;
                                    if (!0 === e._closeRequested) return !1;
                                    if (!1 === e._started) return !1;
                                    if (!0 === V(t) && X(t) > 0) return !0;
                                    if (!0 === Y(t) && H(t) > 0) return !0;
                                    if (xe(e) > 0) return !0;
                                    return !1;
                                })(e) &&
                                (!0 !== e._pulling ?
                                    (b(!1 === e._pullAgain),
                                        (e._pulling = !0),
                                        c(e._underlyingByteSource, "pull", [e])
                                        .then(
                                            function () {
                                                (e._pulling = !1),
                                                !0 === e._pullAgain && ((e._pullAgain = !1), me(e));
                                            },
                                            function (t) {
                                                "readable" === e._controlledReadableStream._state &&
                                                    Re(e, t);
                                            }
                                        )
                                        .catch(y)) :
                                    (e._pullAgain = !0));
                        }

                        function ve(e) {
                            we(e), (e._pendingPullIntos = []);
                        }

                        function ge(e, t) {
                            b("errored" !== e._state, "state must not be errored");
                            var r = !1;
                            "closed" === e._state && (b(0 === t.bytesFilled), (r = !0));

                            var n = _e(t);

                            "default" === t.readerType ?
                                G(e, n, r) :
                                (b("byob" === t.readerType),
                                    (function (e, t, r) {
                                        var n = e._reader;
                                        b(n._readIntoRequests.length > 0),
                                            n._readIntoRequests.shift()._resolve(o(t, r));
                                    })(e, n, r));
                        }

                        function _e(e) {
                            var t = e.bytesFilled,
                                r = e.elementSize;
                            return (
                                b(t <= e.byteLength),
                                b(t % r == 0),
                                new e.ctor(e.buffer, e.byteOffset, t / r)
                            );
                        }

                        function be(e, t, r, n) {
                            e._queue.push({
                                    buffer: t,
                                    byteOffset: r,
                                    byteLength: n
                                }),
                                (e._queueTotalSize += n);
                        }

                        function ye(e, t) {
                            var r = t.elementSize,
                                n = t.bytesFilled - (t.bytesFilled % r),
                                i = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled),
                                a = t.bytesFilled + i,
                                o = a - (a % r),
                                l = i,
                                u = !1;
                            o > n && ((l = o - t.bytesFilled), (u = !0));

                            for (var c = e._queue; l > 0;) {
                                var h = c[0],
                                    d = Math.min(l, h.byteLength),
                                    f = t.byteOffset + t.bytesFilled;
                                s(t.buffer, f, h.buffer, h.byteOffset, d),
                                    h.byteLength === d ?
                                    c.shift() :
                                    ((h.byteOffset += d), (h.byteLength -= d)),
                                    (e._queueTotalSize -= d),
                                    Ae(e, d, t),
                                    (l -= d);
                            }

                            return (
                                !1 === u &&
                                (b(0 === e._queueTotalSize, "queue must be empty"),
                                    b(t.bytesFilled > 0),
                                    b(t.bytesFilled < t.elementSize)),
                                u
                            );
                        }

                        function Ae(e, t, r) {
                            b(
                                    0 === e._pendingPullIntos.length || e._pendingPullIntos[0] === r
                                ),
                                we(e),
                                (r.bytesFilled += t);
                        }

                        function Se(e) {
                            b("readable" === e._controlledReadableStream._state),
                                0 === e._queueTotalSize && !0 === e._closeRequested ?
                                B(e._controlledReadableStream) :
                                me(e);
                        }

                        function we(e) {
                            void 0 !== e._byobRequest &&
                                ((e._byobRequest._associatedReadableByteStreamController = void 0),
                                    (e._byobRequest._view = void 0),
                                    (e._byobRequest = void 0));
                        }

                        function Pe(e) {
                            for (
                                b(!1 === e._closeRequested); e._pendingPullIntos.length > 0;

                            ) {
                                if (0 === e._queueTotalSize) return;
                                var t = e._pendingPullIntos[0];
                                !0 === ye(e, t) && (Ce(e), ge(e._controlledReadableStream, t));
                            }
                        }

                        function ke(e, t) {
                            var r = e._pendingPullIntos[0],
                                n = e._controlledReadableStream;

                            if ("closed" === n._state) {
                                if (0 !== t)
                                    throw new TypeError(
                                        "bytesWritten must be 0 when calling respond() on a closed stream"
                                    );
                                !(function (e, t) {
                                    (t.buffer = h(t.buffer)),
                                    b(0 === t.bytesFilled, "bytesFilled must be 0");
                                    var r = e._controlledReadableStream;
                                    if (!0 === Y(r))
                                        for (; H(r) > 0;) ge(r, Ce(e));
                                })(e, r);
                            } else
                                b("readable" === n._state),
                                (function (e, t, r) {
                                    if (r.bytesFilled + t > r.byteLength)
                                        throw new RangeError("bytesWritten out of range");

                                    if ((Ae(e, t, r), !(r.bytesFilled < r.elementSize))) {
                                        Ce(e);
                                        var n = r.bytesFilled % r.elementSize;

                                        if (n > 0) {
                                            var i = r.byteOffset + r.bytesFilled,
                                                a = r.buffer.slice(i - n, i);
                                            be(e, a, 0, a.byteLength);
                                        }

                                        (r.buffer = h(r.buffer)),
                                        (r.bytesFilled -= n),
                                        ge(e._controlledReadableStream, r),
                                            Pe(e);
                                    }
                                })(e, t, r);
                        }

                        function Ce(e) {
                            var t = e._pendingPullIntos.shift();

                            return we(e), t;
                        }

                        function Re(e, t) {
                            var r = e._controlledReadableStream;
                            b("readable" === r._state), ve(e), P(e), z(r, t);
                        }

                        function xe(e) {
                            var t = e._controlledReadableStream._state;
                            return "errored" === t ?
                                null :
                                "closed" === t ?
                                0 :
                                e._strategyHWM - e._queueTotalSize;
                        }

                        function Te(e) {
                            return new TypeError(
                                "ReadableStream.prototype." +
                                e +
                                " can only be used on a ReadableStream"
                            );
                        }

                        function Ee(e) {
                            return new TypeError(
                                "Cannot " + e + " a stream using a released reader"
                            );
                        }

                        function Oe(e) {
                            return new TypeError(
                                "ReadableStreamDefaultReader.prototype." +
                                e +
                                " can only be used on a ReadableStreamDefaultReader"
                            );
                        }

                        function Ie(e, t) {
                            b(void 0 !== e._closedPromise_resolve),
                                b(void 0 !== e._closedPromise_reject),
                                e._closedPromise_reject(t),
                                (e._closedPromise_resolve = void 0),
                                (e._closedPromise_reject = void 0);
                        }

                        function Fe(e) {
                            return new TypeError(
                                "ReadableStreamBYOBReader.prototype." +
                                e +
                                " can only be used on a ReadableStreamBYOBReader"
                            );
                        }

                        function Le(e) {
                            return new TypeError(
                                "ReadableStreamDefaultController.prototype." +
                                e +
                                " can only be used on a ReadableStreamDefaultController"
                            );
                        }

                        function De(e) {
                            return new TypeError(
                                "ReadableStreamBYOBRequest.prototype." +
                                e +
                                " can only be used on a ReadableStreamBYOBRequest"
                            );
                        }

                        function Me(e) {
                            return new TypeError(
                                "ReadableByteStreamController.prototype." +
                                e +
                                " can only be used on a ReadableByteStreamController"
                            );
                        }
                    },
                    function (e, t, r) {
                        var n = r(6),
                            i = r(4),
                            a = r(2);
                        (t.TransformStream = n.TransformStream),
                        (t.ReadableStream = i.ReadableStream),
                        (t.IsReadableStreamDisturbed = i.IsReadableStreamDisturbed),
                        (t.ReadableStreamDefaultControllerClose =
                            i.ReadableStreamDefaultControllerClose),
                        (t.ReadableStreamDefaultControllerEnqueue =
                            i.ReadableStreamDefaultControllerEnqueue),
                        (t.ReadableStreamDefaultControllerError =
                            i.ReadableStreamDefaultControllerError),
                        (t.ReadableStreamDefaultControllerGetDesiredSize =
                            i.ReadableStreamDefaultControllerGetDesiredSize),
                        (t.AcquireWritableStreamDefaultWriter =
                            a.AcquireWritableStreamDefaultWriter),
                        (t.IsWritableStream = a.IsWritableStream),
                        (t.IsWritableStreamLocked = a.IsWritableStreamLocked),
                        (t.WritableStream = a.WritableStream),
                        (t.WritableStreamAbort = a.WritableStreamAbort),
                        (t.WritableStreamDefaultControllerError =
                            a.WritableStreamDefaultControllerError),
                        (t.WritableStreamDefaultWriterCloseWithErrorPropagation =
                            a.WritableStreamDefaultWriterCloseWithErrorPropagation),
                        (t.WritableStreamDefaultWriterRelease =
                            a.WritableStreamDefaultWriterRelease),
                        (t.WritableStreamDefaultWriterWrite =
                            a.WritableStreamDefaultWriterWrite);
                    },
                    function (e, t, r) {
                        var n = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                        Object.defineProperty(e, n.key, n);
                                }
                            }

                            return function (t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t;
                            };
                        })();

                        function i(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }

                        var a = r(1).assert,
                            s = r(0),
                            o = s.InvokeOrNoop,
                            l = s.PromiseInvokeOrPerformFallback,
                            u = s.PromiseInvokeOrNoop,
                            c = s.typeIsObject,
                            h = r(4),
                            d = h.ReadableStream,
                            f = h.ReadableStreamDefaultControllerClose,
                            p = h.ReadableStreamDefaultControllerEnqueue,
                            m = h.ReadableStreamDefaultControllerError,
                            v = h.ReadableStreamDefaultControllerGetDesiredSize,
                            g = r(2),
                            _ = g.WritableStream,
                            b = g.WritableStreamDefaultControllerError;

                        function y(e, t) {
                            if (!0 === e._errored)
                                throw new TypeError("TransformStream is already errored");
                            if (!0 === e._readableClosed)
                                throw new TypeError("Readable side is already closed");
                            var r = e._readableController;

                            try {
                                p(r, t);
                            } catch (t) {
                                throw ((e._readableClosed = !0), S(e, t), e._storedError);
                            }

                            !0 === v(r) <= 0 && !1 === e._backpressure && k(e, !0);
                        }

                        function A(e) {
                            a(!1 === e._errored), a(!1 === e._readableClosed);

                            try {
                                f(e._readableController);
                            } catch (e) {
                                a(!1);
                            }

                            e._readableClosed = !0;
                        }

                        function S(e, t) {
                            !1 === e._errored && w(e, t);
                        }

                        function w(e, t) {
                            a(!1 === e._errored),
                                (e._errored = !0),
                                (e._storedError = t),
                                !1 === e._writableDone && b(e._writableController, t),
                                !1 === e._readableClosed && m(e._readableController, t);
                        }

                        function P(e) {
                            return (
                                a(
                                    void 0 !== e._backpressureChangePromise,
                                    "_backpressureChangePromise should have been initialized"
                                ),
                                !1 === e._backpressure ?
                                Promise.resolve() :
                                (a(
                                        !0 === e._backpressure,
                                        "_backpressure should have been initialized"
                                    ),
                                    e._backpressureChangePromise)
                            );
                        }

                        function k(e, t) {
                            a(
                                    e._backpressure !== t,
                                    "TransformStreamSetBackpressure() should be called only when backpressure is changed"
                                ),
                                void 0 !== e._backpressureChangePromise &&
                                e._backpressureChangePromise_resolve(t),
                                (e._backpressureChangePromise = new Promise(function (t) {
                                    e._backpressureChangePromise_resolve = t;
                                })),
                                e._backpressureChangePromise.then(function (e) {
                                    a(
                                        e !== t,
                                        "_backpressureChangePromise should be fulfilled only when backpressure is changed"
                                    );
                                }),
                                (e._backpressure = t);
                        }

                        function C(e, t) {
                            return y(t._controlledTransformStream, e), Promise.resolve();
                        }

                        function R(e) {
                            return (
                                !!c(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_controlledTransformStream"
                                )
                            );
                        }

                        function x(e) {
                            return (
                                !!c(e) &&
                                !!Object.prototype.hasOwnProperty.call(
                                    e,
                                    "_transformStreamController"
                                )
                            );
                        }

                        var T = (function () {
                                function e(t, r) {
                                    i(this, e),
                                        (this._transformStream = t),
                                        (this._startPromise = r);
                                }

                                return (
                                    n(e, [{
                                            key: "start",
                                            value: function (e) {
                                                var t = this._transformStream;
                                                return (
                                                    (t._writableController = e),
                                                    this._startPromise.then(function () {
                                                        return P(t);
                                                    })
                                                );
                                            }
                                        },
                                        {
                                            key: "write",
                                            value: function (e) {
                                                return (function (e, t) {
                                                    a(!1 === e._errored),
                                                        a(!1 === e._transforming),
                                                        a(!1 === e._backpressure),
                                                        (e._transforming = !0);
                                                    var r = e._transformer,
                                                        n = e._transformStreamController;
                                                    return l(r, "transform", [t, n], C, [t, n]).then(
                                                        function () {
                                                            return (e._transforming = !1), P(e);
                                                        },
                                                        function (t) {
                                                            return S(e, t), Promise.reject(t);
                                                        }
                                                    );
                                                })(this._transformStream, e);
                                            }
                                        },
                                        {
                                            key: "abort",
                                            value: function () {
                                                var e = this._transformStream;
                                                (e._writableDone = !0),
                                                w(e, new TypeError("Writable side aborted"));
                                            }
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                var e = this._transformStream;
                                                return (
                                                    a(!1 === e._transforming),
                                                    (e._writableDone = !0),
                                                    u(e._transformer, "flush", [
                                                        e._transformStreamController
                                                    ])
                                                    .then(function () {
                                                        return !0 === e._errored ?
                                                            Promise.reject(e._storedError) :
                                                            (!1 === e._readableClosed && A(e),
                                                                Promise.resolve());
                                                    })
                                                    .catch(function (t) {
                                                        return S(e, t), Promise.reject(e._storedError);
                                                    })
                                                );
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(),
                            E = (function () {
                                function e(t, r) {
                                    i(this, e),
                                        (this._transformStream = t),
                                        (this._startPromise = r);
                                }

                                return (
                                    n(e, [{
                                            key: "start",
                                            value: function (e) {
                                                var t = this._transformStream;
                                                return (
                                                    (t._readableController = e),
                                                    this._startPromise.then(function () {
                                                        return (
                                                            a(
                                                                void 0 !== t._backpressureChangePromise,
                                                                "_backpressureChangePromise should have been initialized"
                                                            ),
                                                            !0 === t._backpressure ?
                                                            Promise.resolve() :
                                                            (a(
                                                                    !1 === t._backpressure,
                                                                    "_backpressure should have been initialized"
                                                                ),
                                                                t._backpressureChangePromise)
                                                        );
                                                    })
                                                );
                                            }
                                        },
                                        {
                                            key: "pull",
                                            value: function () {
                                                var e = this._transformStream;
                                                return (
                                                    a(
                                                        !0 === e._backpressure,
                                                        "pull() should be never called while _backpressure is false"
                                                    ),
                                                    a(
                                                        void 0 !== e._backpressureChangePromise,
                                                        "_backpressureChangePromise should have been initialized"
                                                    ),
                                                    k(e, !1),
                                                    e._backpressureChangePromise
                                                );
                                            }
                                        },
                                        {
                                            key: "cancel",
                                            value: function () {
                                                var e = this._transformStream;
                                                (e._readableClosed = !0),
                                                w(e, new TypeError("Readable side canceled"));
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(),
                            O = (function () {
                                function e(t) {
                                    if ((i(this, e), !1 === x(t)))
                                        throw new TypeError(
                                            "TransformStreamDefaultController can only be constructed with a TransformStream instance"
                                        );
                                    if (void 0 !== t._transformStreamController)
                                        throw new TypeError(
                                            "TransformStreamDefaultController instances can only be created by the TransformStream constructor"
                                        );
                                    this._controlledTransformStream = t;
                                }

                                return (
                                    n(e, [{
                                            key: "enqueue",
                                            value: function (e) {
                                                if (!1 === R(this)) throw F("enqueue");
                                                y(this._controlledTransformStream, e);
                                            }
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                if (!1 === R(this)) throw F("close");
                                                !(function (e) {
                                                    if (!0 === e._errored)
                                                        throw new TypeError(
                                                            "TransformStream is already errored"
                                                        );
                                                    if (!0 === e._readableClosed)
                                                        throw new TypeError(
                                                            "Readable side is already closed"
                                                        );
                                                    A(e);
                                                })(this._controlledTransformStream);
                                            }
                                        },
                                        {
                                            key: "error",
                                            value: function (e) {
                                                if (!1 === R(this)) throw F("error");
                                                !(function (e, t) {
                                                    if (!0 === e._errored)
                                                        throw new TypeError(
                                                            "TransformStream is already errored"
                                                        );
                                                    w(e, t);
                                                })(this._controlledTransformStream, e);
                                            }
                                        },
                                        {
                                            key: "desiredSize",
                                            get: function () {
                                                if (!1 === R(this)) throw F("desiredSize");
                                                var e = this._controlledTransformStream
                                                    ._readableController;
                                                return v(e);
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(),
                            I = (function () {
                                function e() {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] :
                                        {};
                                    i(this, e), (this._transformer = t);
                                    var r = t.readableStrategy,
                                        n = t.writableStrategy;
                                    (this._transforming = !1),
                                    (this._errored = !1),
                                    (this._storedError = void 0),
                                    (this._writableController = void 0),
                                    (this._readableController = void 0),
                                    (this._transformStreamController = void 0),
                                    (this._writableDone = !1),
                                    (this._readableClosed = !1),
                                    (this._backpressure = void 0),
                                    (this._backpressureChangePromise = void 0),
                                    (this._backpressureChangePromise_resolve = void 0),
                                    (this._transformStreamController = new O(this));
                                    var s = void 0,
                                        l = new Promise(function (e) {
                                            s = e;
                                        }),
                                        u = new E(this, l);
                                    this._readable = new d(u, r);
                                    var c = new T(this, l);
                                    (this._writable = new _(c, n)),
                                    a(void 0 !== this._writableController),
                                        a(void 0 !== this._readableController),
                                        k(this, v(this._readableController) <= 0);
                                    var h = this,
                                        f = o(t, "start", [h._transformStreamController]);
                                    s(f),
                                        l.catch(function (e) {
                                            !1 === h._errored &&
                                                ((h._errored = !0), (h._storedError = e));
                                        });
                                }

                                return (
                                    n(e, [{
                                            key: "readable",
                                            get: function () {
                                                if (!1 === x(this)) throw L("readable");
                                                return this._readable;
                                            }
                                        },
                                        {
                                            key: "writable",
                                            get: function () {
                                                if (!1 === x(this)) throw L("writable");
                                                return this._writable;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();

                        function F(e) {
                            return new TypeError(
                                "TransformStreamDefaultController.prototype." +
                                e +
                                " can only be used on a TransformStreamDefaultController"
                            );
                        }

                        function L(e) {
                            return new TypeError(
                                "TransformStream.prototype." +
                                e +
                                " can only be used on a TransformStream"
                            );
                        }

                        e.exports = {
                            TransformStream: I
                        };
                    },
                    function (e, t, r) {
                        e.exports = r(5);
                    }
                ])
            );
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.PDFJS = t.globalScope = void 0);
            var n,
                i = r(0),
                a = r(10),
                s = r(59),
                o = r(61),
                l = r(15),
                u =
                (n = l) && n.__esModule ?
                n :
                {
                    default: n
                },
                c = r(39),
                h = r(60),
                d = r(62),
                f = r(63);
            u.default.PDFJS || (u.default.PDFJS = {});
            var p = u.default.PDFJS;
            (p.pdfBug = !1),
            (p.OPS = i.OPS),
            (p.UNSUPPORTED_FEATURES = i.UNSUPPORTED_FEATURES),
            (p.shadow = i.shadow),
            (p.createBlob = i.createBlob),
            (p.createObjectURL = function (e, t) {
                return (0, i.createObjectURL)(e, t, p.disableCreateObjectURL);
            }),
            Object.defineProperty(p, "isLittleEndian", {
                    configurable: !0,
                    get: function () {
                        return (0, i.shadow)(p, "isLittleEndian", (0, i.isLittleEndian)());
                    }
                }),
                (p.removeNullCharacters = i.removeNullCharacters),
                (p.PasswordResponses = i.PasswordResponses),
                (p.PasswordException = i.PasswordException),
                (p.UnknownErrorException = i.UnknownErrorException),
                (p.InvalidPDFException = i.InvalidPDFException),
                (p.MissingPDFException = i.MissingPDFException),
                (p.UnexpectedResponseException = i.UnexpectedResponseException),
                (p.Util = i.Util),
                (p.PageViewport = i.PageViewport),
                (p.createPromiseCapability = i.createPromiseCapability),
                (p.maxImageSize = void 0 === p.maxImageSize ? -1 : p.maxImageSize),
                (p.cMapUrl = void 0 === p.cMapUrl ? null : p.cMapUrl),
                (p.cMapPacked = void 0 !== p.cMapPacked && p.cMapPacked),
                (p.disableFontFace = void 0 !== p.disableFontFace && p.disableFontFace),
                (p.disableRange = void 0 !== p.disableRange && p.disableRange),
                (p.disableStream = void 0 !== p.disableStream && p.disableStream),
                (p.disableAutoFetch =
                    void 0 !== p.disableAutoFetch && p.disableAutoFetch),
                (p.pdfBug = void 0 !== p.pdfBug && p.pdfBug),
                (p.disableCreateObjectURL =
                    void 0 !== p.disableCreateObjectURL && p.disableCreateObjectURL),
                (p.externalLinkTarget =
                    void 0 === p.externalLinkTarget ?
                    a.LinkTarget.NONE :
                    p.externalLinkTarget),
                (p.externalLinkRel =
                    void 0 === p.externalLinkRel ?
                    a.DEFAULT_LINK_REL :
                    p.externalLinkRel),
                (p.isEvalSupported = void 0 === p.isEvalSupported || p.isEvalSupported),
                (p.getDocument = s.getDocument),
                (p.LoopbackPort = s.LoopbackPort),
                (p.PDFDataRangeTransport = s.PDFDataRangeTransport),
                (p.PDFWorker = s.PDFWorker),
                (p.GlobalWorkerOptions = c.GlobalWorkerOptions),
                (p.getFilenameFromUrl = a.getFilenameFromUrl),
                (p.AnnotationLayer = o.AnnotationLayer),
                (p.renderTextLayer = d.renderTextLayer),
                (p.Metadata = h.Metadata),
                (p.SVGGraphics = f.SVGGraphics),
                (t.globalScope = u.default),
                (t.PDFJS = p);
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.FontLoader = t.FontFaceObject = void 0);
            var n = r(0);

            function i(e) {
                (this.docId = e),
                (this.styleElement = null),
                (this.nativeFontFaces = []),
                (this.loadTestFontId = 0),
                (this.loadingContext = {
                    requests: [],
                    nextRequestId: 0
                });
            }

            i.prototype = {
                insertRule: function (e) {
                    var t = this.styleElement;
                    t ||
                        (((t = this.styleElement = document.createElement("style")).id =
                                "PDFJS_FONT_STYLE_TAG_" + this.docId),
                            document.documentElement
                            .getElementsByTagName("head")[0]
                            .appendChild(t));
                    var r = t.sheet;
                    r.insertRule(e, r.cssRules.length);
                },
                clear: function () {
                    this.styleElement &&
                        (this.styleElement.remove(), (this.styleElement = null)),
                        this.nativeFontFaces.forEach(function (e) {
                            document.fonts.delete(e);
                        }),
                        (this.nativeFontFaces.length = 0);
                }
            };
            Object.defineProperty(i.prototype, "loadTestFont", {
                    get: function () {
                        return (0, n.shadow)(
                            this,
                            "loadTestFont",
                            atob(
                                "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                            )
                        );
                    },
                    configurable: !0
                }),
                (i.prototype.addNativeFontFace = function (e) {
                    this.nativeFontFaces.push(e), document.fonts.add(e);
                }),
                (i.prototype.bind = function (e, t) {
                    for (
                        var r = [],
                            a = [],
                            s = [],
                            o = function o(e) {
                                return e.loaded.catch(function (t) {
                                    (0, n.warn)('Failed to load font "' + e.family + '": ' + t);
                                });
                            },
                            l = i.isFontLoadingAPISupported && !i.isSyncFontLoadingSupported,
                            u = 0,
                            c = e.length; u < c; u++
                    ) {
                        var h = e[u];
                        if (!h.attached && !1 !== h.loading)
                            if (((h.attached = !0), l)) {
                                var d = h.createNativeFontFace();
                                d && (this.addNativeFontFace(d), s.push(o(d)));
                            } else {
                                var f = h.createFontFaceRule();
                                f && (this.insertRule(f), r.push(f), a.push(h));
                            }
                    }

                    var p = this.queueLoadingCallback(t);
                    l
                        ?
                        Promise.all(s).then(function () {
                            p.complete();
                        }) :
                        r.length > 0 && !i.isSyncFontLoadingSupported ?
                        this.prepareFontLoadEvent(r, a, p) :
                        p.complete();
                }),
                (i.prototype.queueLoadingCallback = function (e) {
                    var t = this.loadingContext,
                        r = {
                            id: "pdfjs-font-loading-" + t.nextRequestId++,
                            complete: function () {
                                for (
                                    (0, n.assert)(
                                        !r.end,
                                        "completeRequest() cannot be called twice"
                                    ),
                                    r.end = Date.now(); t.requests.length > 0 && t.requests[0].end;

                                ) {
                                    var e = t.requests.shift();
                                    setTimeout(e.callback, 0);
                                }
                            },
                            callback: e,
                            started: Date.now()
                        };
                    return t.requests.push(r), r;
                }),
                (i.prototype.prepareFontLoadEvent = function (e, t, r) {
                    function i(e, t) {
                        return (
                            (e.charCodeAt(t) << 24) |
                            (e.charCodeAt(t + 1) << 16) |
                            (e.charCodeAt(t + 2) << 8) |
                            (255 & e.charCodeAt(t + 3))
                        );
                    }

                    function a(e, t, r, n) {
                        return e.substr(0, t) + n + e.substr(t + r);
                    }

                    var s,
                        o,
                        l = document.createElement("canvas");
                    (l.width = 1), (l.height = 1);
                    var u = l.getContext("2d"),
                        c = 0;
                    var h = "lt" + Date.now() + this.loadTestFontId++,
                        d = this.loadTestFont,
                        f = i((d = a(d, 976, h.length, h)), 16);

                    for (s = 0, o = h.length - 3; s < o; s += 4)
                        f = (f - 1482184792 + i(h, s)) | 0;

                    s < h.length && (f = (f - 1482184792 + i(h + "XXX", s)) | 0),
                        (d = a(d, 16, 4, (0, n.string32)(f)));
                    var p =
                        '@font-face { font-family:"' +
                        h +
                        '";src:' +
                        ("url(data:font/opentype;base64," + btoa(d) + ");") +
                        "}";
                    this.insertRule(p);
                    var m = [];

                    for (s = 0, o = t.length; s < o; s++) m.push(t[s].loadedName);

                    m.push(h);
                    var v = document.createElement("div");

                    for (
                        v.setAttribute(
                            "style",
                            "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"
                        ),
                        s = 0,
                        o = m.length; s < o;
                        ++s
                    ) {
                        var g = document.createElement("span");
                        (g.textContent = "Hi"),
                        (g.style.fontFamily = m[s]),
                        v.appendChild(g);
                    }

                    document.body.appendChild(v),
                        (function e(t, r) {
                            if (++c > 30)
                                return (0, n.warn)("Load test font never loaded."), void r();
                            (u.font = "30px " + t),
                            u.fillText(".", 0, 20),
                                u.getImageData(0, 0, 1, 1).data[3] > 0 ?
                                r() :
                                setTimeout(e.bind(null, t, r));
                        })(h, function () {
                            document.body.removeChild(v), r.complete();
                        });
                }),
                (i.isFontLoadingAPISupported =
                    "undefined" != typeof document && !!document.fonts);
            Object.defineProperty(i, "isSyncFontLoadingSupported", {
                get: function () {
                    return (0, n.shadow)(
                        i,
                        "isSyncFontLoadingSupported",
                        (function () {
                            if ("undefined" == typeof navigator) return !0;
                            var e = !1,
                                t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                                    navigator.userAgent
                                );
                            return t && t[1] >= 14 && (e = !0), e;
                        })()
                    );
                },
                enumerable: !0,
                configurable: !0
            });

            var a = {
                    get value() {
                        return (0, n.shadow)(this, "value", (0, n.isEvalSupported)());
                    }
                },
                s = (function () {
                    function e(e, t) {
                        for (var r in ((this.compiledGlyphs = Object.create(null)), e))
                            this[r] = e[r];

                        this.options = t;
                    }

                    return (
                        (e.prototype = {
                            createNativeFontFace: function () {
                                if (!this.data) return null;
                                if (this.options.disableFontFace)
                                    return (this.disableFontFace = !0), null;
                                var e = new FontFace(this.loadedName, this.data, {});
                                return (
                                    this.options.fontRegistry &&
                                    this.options.fontRegistry.registerFont(this),
                                    e
                                );
                            },
                            createFontFaceRule: function () {
                                if (!this.data) return null;
                                if (this.options.disableFontFace)
                                    return (this.disableFontFace = !0), null;
                                var e = (0, n.bytesToString)(new Uint8Array(this.data)),
                                    t = this.loadedName,
                                    r = "url(data:" + this.mimetype + ";base64," + btoa(e) + ");",
                                    i = '@font-face { font-family:"' + t + '";src:' + r + "}";
                                return (
                                    this.options.fontRegistry &&
                                    this.options.fontRegistry.registerFont(this, r),
                                    i
                                );
                            },
                            getPathGenerator: function (e, t) {
                                if (!(t in this.compiledGlyphs)) {
                                    var r,
                                        n,
                                        i,
                                        s = e.get(this.loadedName + "_path_" + t);

                                    if (this.options.isEvalSupported && a.value) {
                                        var o,
                                            l = "";

                                        for (n = 0, i = s.length; n < i; n++)
                                            (o = void 0 !== (r = s[n]).args ? r.args.join(",") : ""),
                                            (l += "c." + r.cmd + "(" + o + ");\n");

                                        this.compiledGlyphs[t] = new Function("c", "size", l);
                                    } else
                                        this.compiledGlyphs[t] = function (e, t) {
                                            for (n = 0, i = s.length; n < i; n++)
                                                "scale" === (r = s[n]).cmd && (r.args = [t, -t]),
                                                e[r.cmd].apply(e, r.args);
                                        };
                                }

                                return this.compiledGlyphs[t];
                            }
                        }),
                        e
                    );
                })();

            (t.FontFaceObject = s), (t.FontLoader = i);
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.CanvasGraphics = void 0);
            var n = r(0),
                i = r(124),
                a = 16,
                s = {
                    get value() {
                        return (0, n.shadow)(s, "value", (0, n.isLittleEndian)());
                    }
                };

            function o(e) {
                e.mozCurrentTransform ||
                    ((e._originalSave = e.save),
                        (e._originalRestore = e.restore),
                        (e._originalRotate = e.rotate),
                        (e._originalScale = e.scale),
                        (e._originalTranslate = e.translate),
                        (e._originalTransform = e.transform),
                        (e._originalSetTransform = e.setTransform),
                        (e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0]),
                        (e._transformStack = []),
                        Object.defineProperty(e, "mozCurrentTransform", {
                            get: function () {
                                return this._transformMatrix;
                            }
                        }),
                        Object.defineProperty(e, "mozCurrentTransformInverse", {
                            get: function () {
                                var e = this._transformMatrix,
                                    t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    i = e[3],
                                    a = e[4],
                                    s = e[5],
                                    o = t * i - r * n,
                                    l = r * n - t * i;
                                return [
                                    i / o,
                                    r / l,
                                    n / l,
                                    t / o,
                                    (i * a - n * s) / l,
                                    (r * a - t * s) / o
                                ];
                            }
                        }),
                        (e.save = function () {
                            var e = this._transformMatrix;
                            this._transformStack.push(e),
                                (this._transformMatrix = e.slice(0, 6)),
                                this._originalSave();
                        }),
                        (e.restore = function () {
                            var e = this._transformStack.pop();

                            e && ((this._transformMatrix = e), this._originalRestore());
                        }),
                        (e.translate = function (e, t) {
                            var r = this._transformMatrix;
                            (r[4] = r[0] * e + r[2] * t + r[4]),
                            (r[5] = r[1] * e + r[3] * t + r[5]),
                            this._originalTranslate(e, t);
                        }),
                        (e.scale = function (e, t) {
                            var r = this._transformMatrix;
                            (r[0] = r[0] * e),
                            (r[1] = r[1] * e),
                            (r[2] = r[2] * t),
                            (r[3] = r[3] * t),
                            this._originalScale(e, t);
                        }),
                        (e.transform = function (t, r, n, i, a, s) {
                            var o = this._transformMatrix;
                            (this._transformMatrix = [
                                o[0] * t + o[2] * r,
                                o[1] * t + o[3] * r,
                                o[0] * n + o[2] * i,
                                o[1] * n + o[3] * i,
                                o[0] * a + o[2] * s + o[4],
                                o[1] * a + o[3] * s + o[5]
                            ]),
                            e._originalTransform(t, r, n, i, a, s);
                        }),
                        (e.setTransform = function (t, r, n, i, a, s) {
                            (this._transformMatrix = [t, r, n, i, a, s]),
                            e._originalSetTransform(t, r, n, i, a, s);
                        }),
                        (e.rotate = function (e) {
                            var t = Math.cos(e),
                                r = Math.sin(e),
                                n = this._transformMatrix;
                            (this._transformMatrix = [
                                n[0] * t + n[2] * r,
                                n[1] * t + n[3] * r,
                                n[0] * -r + n[2] * t,
                                n[1] * -r + n[3] * t,
                                n[4],
                                n[5]
                            ]),
                            this._originalRotate(e);
                        }));
            }

            var l = (function () {
                function e(e) {
                    (this.canvasFactory = e), (this.cache = Object.create(null));
                }

                return (
                    (e.prototype = {
                        getCanvas: function (e, t, r, n) {
                            var i;
                            return (
                                void 0 !== this.cache[e] ?
                                ((i = this.cache[e]),
                                    this.canvasFactory.reset(i, t, r),
                                    i.context.setTransform(1, 0, 0, 1, 0, 0)) :
                                ((i = this.canvasFactory.create(t, r)),
                                    (this.cache[e] = i)),
                                n && o(i.context),
                                i
                            );
                        },
                        clear: function () {
                            for (var e in this.cache) {
                                var t = this.cache[e];
                                this.canvasFactory.destroy(t), delete this.cache[e];
                            }
                        }
                    }),
                    e
                );
            })();

            var u = (function () {
                    function e() {
                        (this.alphaIsShape = !1),
                        (this.fontSize = 0),
                        (this.fontSizeScale = 1),
                        (this.textMatrix = n.IDENTITY_MATRIX),
                        (this.textMatrixScale = 1),
                        (this.fontMatrix = n.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRenderingMode = n.TextRenderingMode.FILL),
                        (this.textRise = 0),
                        (this.fillColor = "#000000"),
                        (this.strokeColor = "#000000"),
                        (this.patternFill = !1),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.activeSMask = null),
                        (this.resumeSMaskCtx = null);
                    }

                    return (
                        (e.prototype = {
                            clone: function () {
                                return Object.create(this);
                            },
                            setCurrentPoint: function (e, t) {
                                (this.x = e), (this.y = t);
                            }
                        }),
                        e
                    );
                })(),
                c = (function () {
                    function e(e, t, r, n, i, a) {
                        (this.ctx = e),
                        (this.current = new u()),
                        (this.stateStack = []),
                        (this.pendingClip = null),
                        (this.pendingEOFill = !1),
                        (this.res = null),
                        (this.xobjs = null),
                        (this.commonObjs = t),
                        (this.objs = r),
                        (this.canvasFactory = n),
                        (this.webGLContext = i),
                        (this.imageLayer = a),
                        (this.groupStack = []),
                        (this.processingType3 = null),
                        (this.baseTransform = null),
                        (this.baseTransformStack = []),
                        (this.groupLevel = 0),
                        (this.smaskStack = []),
                        (this.smaskCounter = 0),
                        (this.tempSMask = null),
                        (this.cachedCanvases = new l(this.canvasFactory)),
                        e && o(e),
                            (this.cachedGetSinglePixelWidth = null);
                    }

                    function t(e, t) {
                        if ("undefined" != typeof ImageData && t instanceof ImageData)
                            e.putImageData(t, 0, 0);
                        else {
                            var r,
                                i,
                                o,
                                l,
                                u,
                                c = t.height,
                                h = t.width,
                                d = c % a,
                                f = (c - d) / a,
                                p = 0 === d ? f : f + 1,
                                m = e.createImageData(h, a),
                                v = 0,
                                g = t.data,
                                _ = m.data;

                            if (t.kind === n.ImageKind.GRAYSCALE_1BPP) {
                                var b = g.byteLength,
                                    y = new Uint32Array(_.buffer, 0, _.byteLength >> 2),
                                    A = y.length,
                                    S = (h + 7) >> 3,
                                    w = 4294967295,
                                    P = s.value ? 4278190080 : 255;

                                for (i = 0; i < p; i++) {
                                    for (l = i < f ? a : d, r = 0, o = 0; o < l; o++) {
                                        for (
                                            var k = b - v,
                                                C = 0,
                                                R = k > S ? h : 8 * k - 7,
                                                x = -8 & R,
                                                T = 0,
                                                E = 0; C < x; C += 8
                                        )
                                            (E = g[v++]),
                                            (y[r++] = 128 & E ? w : P),
                                            (y[r++] = 64 & E ? w : P),
                                            (y[r++] = 32 & E ? w : P),
                                            (y[r++] = 16 & E ? w : P),
                                            (y[r++] = 8 & E ? w : P),
                                            (y[r++] = 4 & E ? w : P),
                                            (y[r++] = 2 & E ? w : P),
                                            (y[r++] = 1 & E ? w : P);

                                        for (; C < R; C++)
                                            0 === T && ((E = g[v++]), (T = 128)),
                                            (y[r++] = E & T ? w : P),
                                            (T >>= 1);
                                    }

                                    for (; r < A;) y[r++] = 0;

                                    e.putImageData(m, 0, i * a);
                                }
                            } else if (t.kind === n.ImageKind.RGBA_32BPP) {
                                for (o = 0, u = h * a * 4, i = 0; i < f; i++)
                                    _.set(g.subarray(v, v + u)),
                                    (v += u),
                                    e.putImageData(m, 0, o),
                                    (o += a);

                                i < p &&
                                    ((u = h * d * 4),
                                        _.set(g.subarray(v, v + u)),
                                        e.putImageData(m, 0, o));
                            } else {
                                if (t.kind !== n.ImageKind.RGB_24BPP)
                                    throw new Error("bad image kind: " + t.kind);

                                for (u = h * (l = a), i = 0; i < p; i++) {
                                    for (i >= f && (u = h * (l = d)), r = 0, o = u; o--;)
                                        (_[r++] = g[v++]),
                                        (_[r++] = g[v++]),
                                        (_[r++] = g[v++]),
                                        (_[r++] = 255);

                                    e.putImageData(m, 0, i * a);
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        for (
                            var r = t.height,
                                n = t.width,
                                i = r % a,
                                s = (r - i) / a,
                                o = 0 === i ? s : s + 1,
                                l = e.createImageData(n, a),
                                u = 0,
                                c = t.data,
                                h = l.data,
                                d = 0; d < o; d++
                        ) {
                            for (var f = d < s ? a : i, p = 3, m = 0; m < f; m++)
                                for (var v = 0, g = 0; g < n; g++) {
                                    if (!v) {
                                        var _ = c[u++];
                                        v = 128;
                                    }

                                    (h[p] = _ & v ? 0 : 255), (p += 4), (v >>= 1);
                                }

                            e.putImageData(l, 0, d * a);
                        }
                    }

                    function c(e, t) {
                        for (
                            var r = [
                                    "strokeStyle",
                                    "fillStyle",
                                    "fillRule",
                                    "globalAlpha",
                                    "lineWidth",
                                    "lineCap",
                                    "lineJoin",
                                    "miterLimit",
                                    "globalCompositeOperation",
                                    "font"
                                ],
                                n = 0,
                                i = r.length; n < i; n++
                        ) {
                            var a = r[n];
                            void 0 !== e[a] && (t[a] = e[a]);
                        }

                        void 0 !== e.setLineDash &&
                            (t.setLineDash(e.getLineDash()),
                                (t.lineDashOffset = e.lineDashOffset));
                    }

                    function h(e) {
                        (e.strokeStyle = "#000000"),
                        (e.fillStyle = "#000000"),
                        (e.fillRule = "nonzero"),
                        (e.globalAlpha = 1),
                        (e.lineWidth = 1),
                        (e.lineCap = "butt"),
                        (e.lineJoin = "miter"),
                        (e.miterLimit = 10),
                        (e.globalCompositeOperation = "source-over"),
                        (e.font = "10px sans-serif"),
                        void 0 !== e.setLineDash &&
                            (e.setLineDash([]), (e.lineDashOffset = 0));
                    }

                    function d(e, t, r, n) {
                        for (var i = e.length, a = 3; a < i; a += 4) {
                            var s = e[a];
                            if (0 === s)(e[a - 3] = t), (e[a - 2] = r), (e[a - 1] = n);
                            else if (s < 255) {
                                var o = 255 - s;
                                (e[a - 3] = (e[a - 3] * s + t * o) >> 8),
                                (e[a - 2] = (e[a - 2] * s + r * o) >> 8),
                                (e[a - 1] = (e[a - 1] * s + n * o) >> 8);
                            }
                        }
                    }

                    function f(e, t, r) {
                        for (var n = e.length, i = 3; i < n; i += 4) {
                            var a = r ? r[e[i]] : e[i];
                            t[i] = (t[i] * a * (1 / 255)) | 0;
                        }
                    }

                    function p(e, t, r) {
                        for (var n = e.length, i = 3; i < n; i += 4) {
                            var a = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
                            t[i] = r ? (t[i] * r[a >> 8]) >> 8 : (t[i] * a) >> 16;
                        }
                    }

                    function m(e, t, r, n) {
                        var i = t.canvas,
                            a = t.context;
                        e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                        var s = t.backdrop || null;

                        if (!t.transferMap && n.isEnabled) {
                            var o = n.composeSMask({
                                layer: r.canvas,
                                mask: i,
                                properties: {
                                    subtype: t.subtype,
                                    backdrop: s
                                }
                            });
                            return (
                                e.setTransform(1, 0, 0, 1, 0, 0),
                                void e.drawImage(o, t.offsetX, t.offsetY)
                            );
                        }

                        !(function (e, t, r, n, i, a, s) {
                            var o,
                                l = !!a,
                                u = l ? a[0] : 0,
                                c = l ? a[1] : 0,
                                h = l ? a[2] : 0;
                            o = "Luminosity" === i ? p : f;

                            for (
                                var m = Math.min(n, Math.ceil(1048576 / r)), v = 0; v < n; v += m
                            ) {
                                var g = Math.min(m, n - v),
                                    _ = e.getImageData(0, v, r, g),
                                    b = t.getImageData(0, v, r, g);

                                l && d(_.data, u, c, h),
                                    o(_.data, b.data, s),
                                    e.putImageData(b, 0, v);
                            }
                        })(a, r, i.width, i.height, t.subtype, s, t.transferMap),
                        e.drawImage(i, 0, 0);
                    }

                    var v = ["butt", "round", "square"],
                        g = ["miter", "round", "bevel"],
                        _ = {},
                        b = {};

                    for (var y in ((e.prototype = {
                                beginDrawing: function (e) {
                                    var t = e.transform,
                                        r = e.viewport,
                                        n = e.transparency,
                                        i = e.background,
                                        a = void 0 === i ? null : i,
                                        s = this.ctx.canvas.width,
                                        o = this.ctx.canvas.height;

                                    if (
                                        (this.ctx.save(),
                                            (this.ctx.fillStyle = a || "rgb(255, 255, 255)"),
                                            this.ctx.fillRect(0, 0, s, o),
                                            this.ctx.restore(),
                                            n)
                                    ) {
                                        var l = this.cachedCanvases.getCanvas("transparent", s, o, !0);
                                        (this.compositeCtx = this.ctx),
                                        (this.transparentCanvas = l.canvas),
                                        (this.ctx = l.context),
                                        this.ctx.save(),
                                            this.ctx.transform.apply(
                                                this.ctx,
                                                this.compositeCtx.mozCurrentTransform
                                            );
                                    }

                                    this.ctx.save(),
                                        h(this.ctx),
                                        t && this.ctx.transform.apply(this.ctx, t),
                                        this.ctx.transform.apply(this.ctx, r.transform),
                                        (this.baseTransform = this.ctx.mozCurrentTransform.slice()),
                                        this.imageLayer && this.imageLayer.beginLayout();
                                },
                                executeOperatorList: function (e, t, r, i) {
                                    var a = e.argsArray,
                                        s = e.fnArray,
                                        o = t || 0,
                                        l = a.length;
                                    if (l === o) return o;

                                    for (
                                        var u,
                                            c = l - o > 10 && "function" == typeof r,
                                            h = c ? Date.now() + 15 : 0,
                                            d = 0,
                                            f = this.commonObjs,
                                            p = this.objs;;

                                    ) {
                                        if (void 0 !== i && o === i.nextBreakPoint)
                                            return i.breakIt(o, r), o;
                                        if ((u = s[o]) !== n.OPS.dependency) this[u].apply(this, a[o]);
                                        else
                                            for (var m = a[o], v = 0, g = m.length; v < g; v++) {
                                                var _ = m[v],
                                                    b = "g" === _[0] && "_" === _[1] ? f : p;
                                                if (!b.isResolved(_)) return b.get(_, r), o;
                                            }
                                        if (++o === l) return o;

                                        if (c && ++d > 10) {
                                            if (Date.now() > h) return r(), o;
                                            d = 0;
                                        }
                                    }
                                },
                                endDrawing: function () {
                                    null !== this.current.activeSMask && this.endSMaskGroup(),
                                        this.ctx.restore(),
                                        this.transparentCanvas &&
                                        ((this.ctx = this.compositeCtx),
                                            this.ctx.save(),
                                            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                                            this.ctx.drawImage(this.transparentCanvas, 0, 0),
                                            this.ctx.restore(),
                                            (this.transparentCanvas = null)),
                                        this.cachedCanvases.clear(),
                                        this.webGLContext.clear(),
                                        this.imageLayer && this.imageLayer.endLayout();
                                },
                                setLineWidth: function (e) {
                                    (this.current.lineWidth = e), (this.ctx.lineWidth = e);
                                },
                                setLineCap: function (e) {
                                    this.ctx.lineCap = v[e];
                                },
                                setLineJoin: function (e) {
                                    this.ctx.lineJoin = g[e];
                                },
                                setMiterLimit: function (e) {
                                    this.ctx.miterLimit = e;
                                },
                                setDash: function (e, t) {
                                    var r = this.ctx;
                                    void 0 !== r.setLineDash &&
                                        (r.setLineDash(e), (r.lineDashOffset = t));
                                },
                                setRenderingIntent: function (e) {},
                                setFlatness: function (e) {},
                                setGState: function (e) {
                                    for (var t = 0, r = e.length; t < r; t++) {
                                        var n = e[t],
                                            i = n[0],
                                            a = n[1];

                                        switch (i) {
                                            case "LW":
                                                this.setLineWidth(a);
                                                break;

                                            case "LC":
                                                this.setLineCap(a);
                                                break;

                                            case "LJ":
                                                this.setLineJoin(a);
                                                break;

                                            case "ML":
                                                this.setMiterLimit(a);
                                                break;

                                            case "D":
                                                this.setDash(a[0], a[1]);
                                                break;

                                            case "RI":
                                                this.setRenderingIntent(a);
                                                break;

                                            case "FL":
                                                this.setFlatness(a);
                                                break;

                                            case "Font":
                                                this.setFont(a[0], a[1]);
                                                break;

                                            case "CA":
                                                this.current.strokeAlpha = n[1];
                                                break;

                                            case "ca":
                                                (this.current.fillAlpha = n[1]),
                                                (this.ctx.globalAlpha = n[1]);
                                                break;

                                            case "BM":
                                                this.ctx.globalCompositeOperation = a;
                                                break;

                                            case "SMask":
                                                this.current.activeSMask &&
                                                    (this.stateStack.length > 0 &&
                                                        this.stateStack[this.stateStack.length - 1]
                                                        .activeSMask === this.current.activeSMask ?
                                                        this.suspendSMaskGroup() :
                                                        this.endSMaskGroup()),
                                                    (this.current.activeSMask = a ? this.tempSMask : null),
                                                    this.current.activeSMask && this.beginSMaskGroup(),
                                                    (this.tempSMask = null);
                                        }
                                    }
                                },
                                beginSMaskGroup: function () {
                                    var e = this.current.activeSMask,
                                        t = e.canvas.width,
                                        r = e.canvas.height,
                                        n = "smaskGroupAt" + this.groupLevel,
                                        i = this.cachedCanvases.getCanvas(n, t, r, !0),
                                        a = this.ctx,
                                        s = a.mozCurrentTransform;
                                    this.ctx.save();
                                    var o = i.context;
                                    o.scale(1 / e.scaleX, 1 / e.scaleY),
                                        o.translate(-e.offsetX, -e.offsetY),
                                        o.transform.apply(o, s),
                                        (e.startTransformInverse = o.mozCurrentTransformInverse),
                                        c(a, o),
                                        (this.ctx = o),
                                        this.setGState([
                                            ["BM", "source-over"],
                                            ["ca", 1],
                                            ["CA", 1]
                                        ]),
                                        this.groupStack.push(a),
                                        this.groupLevel++;
                                },
                                suspendSMaskGroup: function () {
                                    var e = this.ctx;
                                    this.groupLevel--,
                                        (this.ctx = this.groupStack.pop()),
                                        m(this.ctx, this.current.activeSMask, e, this.webGLContext),
                                        this.ctx.restore(),
                                        this.ctx.save(),
                                        c(e, this.ctx),
                                        (this.current.resumeSMaskCtx = e);
                                    var t = n.Util.transform(
                                        this.current.activeSMask.startTransformInverse,
                                        e.mozCurrentTransform
                                    );
                                    this.ctx.transform.apply(this.ctx, t),
                                        e.save(),
                                        e.setTransform(1, 0, 0, 1, 0, 0),
                                        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                                        e.restore();
                                },
                                resumeSMaskGroup: function () {
                                    var e = this.current.resumeSMaskCtx,
                                        t = this.ctx;
                                    (this.ctx = e), this.groupStack.push(t), this.groupLevel++;
                                },
                                endSMaskGroup: function () {
                                    var e = this.ctx;
                                    this.groupLevel--,
                                        (this.ctx = this.groupStack.pop()),
                                        m(this.ctx, this.current.activeSMask, e, this.webGLContext),
                                        this.ctx.restore(),
                                        c(e, this.ctx);
                                    var t = n.Util.transform(
                                        this.current.activeSMask.startTransformInverse,
                                        e.mozCurrentTransform
                                    );
                                    this.ctx.transform.apply(this.ctx, t);
                                },
                                save: function () {
                                    this.ctx.save();
                                    var e = this.current;
                                    this.stateStack.push(e),
                                        (this.current = e.clone()),
                                        (this.current.resumeSMaskCtx = null);
                                },
                                restore: function () {
                                    this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                                        null === this.current.activeSMask ||
                                        (0 !== this.stateStack.length &&
                                            this.stateStack[this.stateStack.length - 1].activeSMask ===
                                            this.current.activeSMask) ||
                                        this.endSMaskGroup(),
                                        0 !== this.stateStack.length &&
                                        ((this.current = this.stateStack.pop()),
                                            this.ctx.restore(),
                                            (this.pendingClip = null),
                                            (this.cachedGetSinglePixelWidth = null));
                                },
                                transform: function (e, t, r, n, i, a) {
                                    this.ctx.transform(e, t, r, n, i, a),
                                        (this.cachedGetSinglePixelWidth = null);
                                },
                                constructPath: function (e, t) {
                                    for (
                                        var r = this.ctx,
                                            i = this.current,
                                            a = i.x,
                                            s = i.y,
                                            o = 0,
                                            l = 0,
                                            u = e.length; o < u; o++
                                    )
                                        switch (0 | e[o]) {
                                            case n.OPS.rectangle:
                                                (a = t[l++]), (s = t[l++]);
                                                var c = t[l++],
                                                    h = t[l++];
                                                0 === c && (c = this.getSinglePixelWidth()),
                                                    0 === h && (h = this.getSinglePixelWidth());
                                                var d = a + c,
                                                    f = s + h;
                                                this.ctx.moveTo(a, s),
                                                    this.ctx.lineTo(d, s),
                                                    this.ctx.lineTo(d, f),
                                                    this.ctx.lineTo(a, f),
                                                    this.ctx.lineTo(a, s),
                                                    this.ctx.closePath();
                                                break;

                                            case n.OPS.moveTo:
                                                (a = t[l++]), (s = t[l++]), r.moveTo(a, s);
                                                break;

                                            case n.OPS.lineTo:
                                                (a = t[l++]), (s = t[l++]), r.lineTo(a, s);
                                                break;

                                            case n.OPS.curveTo:
                                                (a = t[l + 4]),
                                                (s = t[l + 5]),
                                                r.bezierCurveTo(t[l], t[l + 1], t[l + 2], t[l + 3], a, s),
                                                    (l += 6);
                                                break;

                                            case n.OPS.curveTo2:
                                                r.bezierCurveTo(a, s, t[l], t[l + 1], t[l + 2], t[l + 3]),
                                                    (a = t[l + 2]),
                                                    (s = t[l + 3]),
                                                    (l += 4);
                                                break;

                                            case n.OPS.curveTo3:
                                                (a = t[l + 2]),
                                                (s = t[l + 3]),
                                                r.bezierCurveTo(t[l], t[l + 1], a, s, a, s),
                                                    (l += 4);
                                                break;

                                            case n.OPS.closePath:
                                                r.closePath();
                                        }

                                    i.setCurrentPoint(a, s);
                                },
                                closePath: function () {
                                    this.ctx.closePath();
                                },
                                stroke: function (e) {
                                    e = void 0 === e || e;
                                    var t = this.ctx,
                                        r = this.current.strokeColor;
                                    (t.lineWidth = Math.max(
                                        0.65 * this.getSinglePixelWidth(),
                                        this.current.lineWidth
                                    )),
                                    (t.globalAlpha = this.current.strokeAlpha),
                                    r && r.hasOwnProperty("type") && "Pattern" === r.type ?
                                        (t.save(),
                                            (t.strokeStyle = r.getPattern(t, this)),
                                            t.stroke(),
                                            t.restore()) :
                                        t.stroke(),
                                        e && this.consumePath(),
                                        (t.globalAlpha = this.current.fillAlpha);
                                },
                                closeStroke: function () {
                                    this.closePath(), this.stroke();
                                },
                                fill: function (e) {
                                    e = void 0 === e || e;
                                    var t = this.ctx,
                                        r = this.current.fillColor,
                                        n = !1;
                                    this.current.patternFill &&
                                        (t.save(),
                                            this.baseTransform &&
                                            t.setTransform.apply(t, this.baseTransform),
                                            (t.fillStyle = r.getPattern(t, this)),
                                            (n = !0)),
                                        this.pendingEOFill ?
                                        (t.fill("evenodd"), (this.pendingEOFill = !1)) :
                                        t.fill(),
                                        n && t.restore(),
                                        e && this.consumePath();
                                },
                                eoFill: function () {
                                    (this.pendingEOFill = !0), this.fill();
                                },
                                fillStroke: function () {
                                    this.fill(!1), this.stroke(!1), this.consumePath();
                                },
                                eoFillStroke: function () {
                                    (this.pendingEOFill = !0), this.fillStroke();
                                },
                                closeFillStroke: function () {
                                    this.closePath(), this.fillStroke();
                                },
                                closeEOFillStroke: function () {
                                    (this.pendingEOFill = !0), this.closePath(), this.fillStroke();
                                },
                                endPath: function () {
                                    this.consumePath();
                                },
                                clip: function () {
                                    this.pendingClip = _;
                                },
                                eoClip: function () {
                                    this.pendingClip = b;
                                },
                                beginText: function () {
                                    (this.current.textMatrix = n.IDENTITY_MATRIX),
                                    (this.current.textMatrixScale = 1),
                                    (this.current.x = this.current.lineX = 0),
                                    (this.current.y = this.current.lineY = 0);
                                },
                                endText: function () {
                                    var e = this.pendingTextPaths,
                                        t = this.ctx;

                                    if (void 0 !== e) {
                                        t.save(), t.beginPath();

                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            t.setTransform.apply(t, n.transform),
                                                t.translate(n.x, n.y),
                                                n.addToPath(t, n.fontSize);
                                        }

                                        t.restore(),
                                            t.clip(),
                                            t.beginPath(),
                                            delete this.pendingTextPaths;
                                    } else t.beginPath();
                                },
                                setCharSpacing: function (e) {
                                    this.current.charSpacing = e;
                                },
                                setWordSpacing: function (e) {
                                    this.current.wordSpacing = e;
                                },
                                setHScale: function (e) {
                                    this.current.textHScale = e / 100;
                                },
                                setLeading: function (e) {
                                    this.current.leading = -e;
                                },
                                setFont: function (e, t) {
                                    var r = this.commonObjs.get(e),
                                        i = this.current;
                                    if (!r) throw new Error("Can't find font for " + e);

                                    if (
                                        ((i.fontMatrix = r.fontMatrix ?
                                                r.fontMatrix :
                                                n.FONT_IDENTITY_MATRIX),
                                            (0 !== i.fontMatrix[0] && 0 !== i.fontMatrix[3]) ||
                                            (0, n.warn)("Invalid font matrix for font " + e),
                                            t < 0 ?
                                            ((t = -t), (i.fontDirection = -1)) :
                                            (i.fontDirection = 1),
                                            (this.current.font = r),
                                            (this.current.fontSize = t),
                                            !r.isType3Font)
                                    ) {
                                        var a = r.loadedName || "sans-serif",
                                            s = r.black ? "900" : r.bold ? "bold" : "normal",
                                            o = r.italic ? "italic" : "normal",
                                            l = '"' + a + '", ' + r.fallbackName,
                                            u = t < 16 ? 16 : t > 100 ? 100 : t;
                                        this.current.fontSizeScale = t / u;
                                        var c = o + " " + s + " " + u + "px " + l;
                                        this.ctx.font = c;
                                    }
                                },
                                setTextRenderingMode: function (e) {
                                    this.current.textRenderingMode = e;
                                },
                                setTextRise: function (e) {
                                    this.current.textRise = e;
                                },
                                moveText: function (e, t) {
                                    (this.current.x = this.current.lineX += e),
                                    (this.current.y = this.current.lineY += t);
                                },
                                setLeadingMoveText: function (e, t) {
                                    this.setLeading(-t), this.moveText(e, t);
                                },
                                setTextMatrix: function (e, t, r, n, i, a) {
                                    (this.current.textMatrix = [e, t, r, n, i, a]),
                                    (this.current.textMatrixScale = Math.sqrt(e * e + t * t)),
                                    (this.current.x = this.current.lineX = 0),
                                    (this.current.y = this.current.lineY = 0);
                                },
                                nextLine: function () {
                                    this.moveText(0, this.current.leading);
                                },
                                paintChar: function (e, t, r, i) {
                                    var a,
                                        s = this.ctx,
                                        o = this.current,
                                        l = o.font,
                                        u = o.textRenderingMode,
                                        c = o.fontSize / o.fontSizeScale,
                                        h = u & n.TextRenderingMode.FILL_STROKE_MASK,
                                        d = !!(u & n.TextRenderingMode.ADD_TO_PATH_FLAG),
                                        f = o.patternFill && l.data;
                                    ((l.disableFontFace || d || f) &&
                                        (a = l.getPathGenerator(this.commonObjs, e)),
                                        l.disableFontFace || f ?
                                        (s.save(),
                                            s.translate(t, r),
                                            s.beginPath(),
                                            a(s, c),
                                            i && s.setTransform.apply(s, i),
                                            (h !== n.TextRenderingMode.FILL &&
                                                h !== n.TextRenderingMode.FILL_STROKE) ||
                                            s.fill(),
                                            (h !== n.TextRenderingMode.STROKE &&
                                                h !== n.TextRenderingMode.FILL_STROKE) ||
                                            s.stroke(),
                                            s.restore()) :
                                        ((h !== n.TextRenderingMode.FILL &&
                                                h !== n.TextRenderingMode.FILL_STROKE) ||
                                            s.fillText(e, t, r),
                                            (h !== n.TextRenderingMode.STROKE &&
                                                h !== n.TextRenderingMode.FILL_STROKE) ||
                                            s.strokeText(e, t, r)),
                                        d) &&
                                    (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                        transform: s.mozCurrentTransform,
                                        x: t,
                                        y: r,
                                        fontSize: c,
                                        addToPath: a
                                    });
                                },

                                get isFontSubpixelAAEnabled() {
                                    var e = this.canvasFactory.create(10, 10).context;
                                    e.scale(1.5, 1), e.fillText("I", 0, 10);

                                    for (
                                        var t = e.getImageData(0, 0, 10, 10).data, r = !1, i = 3; i < t.length; i += 4
                                    )
                                        if (t[i] > 0 && t[i] < 255) {
                                            r = !0;
                                            break;
                                        }

                                    return (0, n.shadow)(this, "isFontSubpixelAAEnabled", r);
                                },

                                showText: function (e) {
                                    var t = this.current,
                                        r = t.font;
                                    if (r.isType3Font) return this.showType3Text(e);
                                    var i = t.fontSize;

                                    if (0 !== i) {
                                        var a = this.ctx,
                                            s = t.fontSizeScale,
                                            o = t.charSpacing,
                                            l = t.wordSpacing,
                                            u = t.fontDirection,
                                            c = t.textHScale * u,
                                            h = e.length,
                                            d = r.vertical,
                                            f = d ? 1 : -1,
                                            p = r.defaultVMetrics,
                                            m = i * t.fontMatrix[0],
                                            v =
                                            t.textRenderingMode === n.TextRenderingMode.FILL &&
                                            !r.disableFontFace &&
                                            !t.patternFill;
                                        a.save();
                                        var g = void 0;

                                        if (t.patternFill) {
                                            a.save();

                                            var _ = t.fillColor.getPattern(a, this);

                                            (g = a.mozCurrentTransform), a.restore(), (a.fillStyle = _);
                                        }

                                        a.transform.apply(a, t.textMatrix),
                                            a.translate(t.x, t.y + t.textRise),
                                            u > 0 ? a.scale(c, -1) : a.scale(c, 1);
                                        var b = t.lineWidth,
                                            y = t.textMatrixScale;

                                        if (0 === y || 0 === b) {
                                            var A =
                                                t.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                                            (A !== n.TextRenderingMode.STROKE &&
                                                A !== n.TextRenderingMode.FILL_STROKE) ||
                                            ((this.cachedGetSinglePixelWidth = null),
                                                (b = 0.65 * this.getSinglePixelWidth()));
                                        } else b /= y;

                                        1 !== s && (a.scale(s, s), (b /= s)), (a.lineWidth = b);
                                        var S,
                                            w = 0;

                                        for (S = 0; S < h; ++S) {
                                            var P = e[S];
                                            if ((0, n.isNum)(P)) w += (f * P * i) / 1e3;
                                            else {
                                                var k,
                                                    C,
                                                    R,
                                                    x,
                                                    T,
                                                    E,
                                                    O,
                                                    I = !1,
                                                    F = (P.isSpace ? l : 0) + o,
                                                    L = P.fontChar,
                                                    D = P.accent,
                                                    M = P.width;
                                                if (d)
                                                    (T = P.vmetric || p),
                                                    (E = -(E = P.vmetric ? T[1] : 0.5 * M) * m),
                                                    (O = T[2] * m),
                                                    (M = T ? -T[0] : M),
                                                    (k = E / s),
                                                    (C = (w + O) / s);
                                                else(k = w / s), (C = 0);

                                                if (r.remeasure && M > 0) {
                                                    var j = ((1e3 * a.measureText(L).width) / i) * s;

                                                    if (M < j && this.isFontSubpixelAAEnabled) {
                                                        var N = M / j;
                                                        (I = !0), a.save(), a.scale(N, 1), (k /= N);
                                                    } else M !== j && (k += (((M - j) / 2e3) * i) / s);
                                                }

                                                (P.isInFont || r.missingFile) &&
                                                (v && !D ?
                                                    a.fillText(L, k, C) :
                                                    (this.paintChar(L, k, C, g),
                                                        D &&
                                                        ((R = k + D.offset.x / s),
                                                            (x = C - D.offset.y / s),
                                                            this.paintChar(D.fontChar, R, x, g)))),
                                                (w += M * m + F * u),
                                                I && a.restore();
                                            }
                                        }

                                        d ? (t.y -= w * c) : (t.x += w * c), a.restore();
                                    }
                                },
                                showType3Text: function (e) {
                                    var t,
                                        r,
                                        i,
                                        a,
                                        s = this.ctx,
                                        o = this.current,
                                        l = o.font,
                                        u = o.fontSize,
                                        c = o.fontDirection,
                                        h = l.vertical ? 1 : -1,
                                        d = o.charSpacing,
                                        f = o.wordSpacing,
                                        p = o.textHScale * c,
                                        m = o.fontMatrix || n.FONT_IDENTITY_MATRIX,
                                        v = e.length;

                                    if (
                                        !(o.textRenderingMode === n.TextRenderingMode.INVISIBLE) &&
                                        0 !== u
                                    ) {
                                        for (
                                            this.cachedGetSinglePixelWidth = null,
                                            s.save(),
                                            s.transform.apply(s, o.textMatrix),
                                            s.translate(o.x, o.y),
                                            s.scale(p, c),
                                            t = 0; t < v;
                                            ++t
                                        )
                                            if (((r = e[t]), (0, n.isNum)(r)))
                                                (a = (h * r * u) / 1e3),
                                                this.ctx.translate(a, 0),
                                                (o.x += a * p);
                                            else {
                                                var g = (r.isSpace ? f : 0) + d,
                                                    _ = l.charProcOperatorList[r.operatorListId];
                                                if (_)
                                                    (this.processingType3 = r),
                                                    this.save(),
                                                    s.scale(u, u),
                                                    s.transform.apply(s, m),
                                                    this.executeOperatorList(_),
                                                    this.restore(),
                                                    (i = n.Util.applyTransform([r.width, 0], m)[0] * u + g),
                                                    s.translate(i, 0),
                                                    (o.x += i * p);
                                                else
                                                    (0, n.warn)(
                                                        'Type3 character "' +
                                                        r.operatorListId +
                                                        '" is not available.'
                                                    );
                                            }

                                        s.restore(), (this.processingType3 = null);
                                    }
                                },
                                setCharWidth: function (e, t) {},
                                setCharWidthAndBounds: function (e, t, r, n, i, a) {
                                    this.ctx.rect(r, n, i - r, a - n), this.clip(), this.endPath();
                                },
                                getColorN_Pattern: function (t) {
                                    var r,
                                        n = this;

                                    if ("TilingPattern" === t[0]) {
                                        var a = t[1],
                                            s =
                                            this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                                            o = {
                                                createCanvasGraphics: function (t) {
                                                    return new e(
                                                        t,
                                                        n.commonObjs,
                                                        n.objs,
                                                        n.canvasFactory,
                                                        n.webGLContext
                                                    );
                                                }
                                            };
                                        r = new i.TilingPattern(t, a, this.ctx, o, s);
                                    } else r = (0, i.getShadingPatternFromIR)(t);

                                    return r;
                                },
                                setStrokeColorN: function () {
                                    this.current.strokeColor = this.getColorN_Pattern(arguments);
                                },
                                setFillColorN: function () {
                                    (this.current.fillColor = this.getColorN_Pattern(arguments)),
                                    (this.current.patternFill = !0);
                                },
                                setStrokeRGBColor: function (e, t, r) {
                                    var i = n.Util.makeCssRgb(e, t, r);
                                    (this.ctx.strokeStyle = i), (this.current.strokeColor = i);
                                },
                                setFillRGBColor: function (e, t, r) {
                                    var i = n.Util.makeCssRgb(e, t, r);
                                    (this.ctx.fillStyle = i),
                                    (this.current.fillColor = i),
                                    (this.current.patternFill = !1);
                                },
                                shadingFill: function (e) {
                                    var t = this.ctx;
                                    this.save();
                                    var r = (0, i.getShadingPatternFromIR)(e);
                                    t.fillStyle = r.getPattern(t, this, !0);
                                    var a = t.mozCurrentTransformInverse;

                                    if (a) {
                                        var s = t.canvas,
                                            o = s.width,
                                            l = s.height,
                                            u = n.Util.applyTransform([0, 0], a),
                                            c = n.Util.applyTransform([0, l], a),
                                            h = n.Util.applyTransform([o, 0], a),
                                            d = n.Util.applyTransform([o, l], a),
                                            f = Math.min(u[0], c[0], h[0], d[0]),
                                            p = Math.min(u[1], c[1], h[1], d[1]),
                                            m = Math.max(u[0], c[0], h[0], d[0]),
                                            v = Math.max(u[1], c[1], h[1], d[1]);
                                        this.ctx.fillRect(f, p, m - f, v - p);
                                    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);

                                    this.restore();
                                },
                                beginInlineImage: function () {
                                    (0, n.unreachable)("Should not call beginInlineImage");
                                },
                                beginImageData: function () {
                                    (0, n.unreachable)("Should not call beginImageData");
                                },
                                paintFormXObjectBegin: function (e, t) {
                                    if (
                                        (this.save(),
                                            this.baseTransformStack.push(this.baseTransform),
                                            Array.isArray(e) &&
                                            6 === e.length &&
                                            this.transform.apply(this, e),
                                            (this.baseTransform = this.ctx.mozCurrentTransform),
                                            Array.isArray(t) && 4 === t.length)
                                    ) {
                                        var r = t[2] - t[0],
                                            n = t[3] - t[1];
                                        this.ctx.rect(t[0], t[1], r, n), this.clip(), this.endPath();
                                    }
                                },
                                paintFormXObjectEnd: function () {
                                    this.restore(),
                                        (this.baseTransform = this.baseTransformStack.pop());
                                },
                                beginGroup: function (e) {
                                    this.save();
                                    var t = this.ctx;
                                    e.isolated || (0, n.info)("TODO: Support non-isolated groups."),
                                        e.knockout && (0, n.warn)("Knockout groups not supported.");
                                    var r = t.mozCurrentTransform;
                                    if ((e.matrix && t.transform.apply(t, e.matrix), !e.bbox))
                                        throw new Error("Bounding box is required.");
                                    var i = n.Util.getAxialAlignedBoundingBox(
                                            e.bbox,
                                            t.mozCurrentTransform
                                        ),
                                        a = [0, 0, t.canvas.width, t.canvas.height];
                                    i = n.Util.intersect(i, a) || [0, 0, 0, 0];
                                    var s = Math.floor(i[0]),
                                        o = Math.floor(i[1]),
                                        l = Math.max(Math.ceil(i[2]) - s, 1),
                                        u = Math.max(Math.ceil(i[3]) - o, 1),
                                        h = 1,
                                        d = 1;
                                    l > 4096 && ((h = l / 4096), (l = 4096)),
                                        u > 4096 && ((d = u / 4096), (u = 4096));
                                    var f = "groupAt" + this.groupLevel;
                                    e.smask && (f += "_smask_" + (this.smaskCounter++ % 2));
                                    var p = this.cachedCanvases.getCanvas(f, l, u, !0),
                                        m = p.context;
                                    m.scale(1 / h, 1 / d),
                                        m.translate(-s, -o),
                                        m.transform.apply(m, r),
                                        e.smask ?
                                        this.smaskStack.push({
                                            canvas: p.canvas,
                                            context: m,
                                            offsetX: s,
                                            offsetY: o,
                                            scaleX: h,
                                            scaleY: d,
                                            subtype: e.smask.subtype,
                                            backdrop: e.smask.backdrop,
                                            transferMap: e.smask.transferMap || null,
                                            startTransformInverse: null
                                        }) :
                                        (t.setTransform(1, 0, 0, 1, 0, 0),
                                            t.translate(s, o),
                                            t.scale(h, d)),
                                        c(t, m),
                                        (this.ctx = m),
                                        this.setGState([
                                            ["BM", "source-over"],
                                            ["ca", 1],
                                            ["CA", 1]
                                        ]),
                                        this.groupStack.push(t),
                                        this.groupLevel++,
                                        (this.current.activeSMask = null);
                                },
                                endGroup: function (e) {
                                    this.groupLevel--;
                                    var t = this.ctx;
                                    (this.ctx = this.groupStack.pop()),
                                    void 0 !== this.ctx.imageSmoothingEnabled ?
                                        (this.ctx.imageSmoothingEnabled = !1) :
                                        (this.ctx.mozImageSmoothingEnabled = !1),
                                        e.smask ?
                                        (this.tempSMask = this.smaskStack.pop()) :
                                        this.ctx.drawImage(t.canvas, 0, 0),
                                        this.restore();
                                },
                                beginAnnotations: function () {
                                    this.save(),
                                        this.baseTransform &&
                                        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
                                },
                                endAnnotations: function () {
                                    this.restore();
                                },
                                beginAnnotation: function (e, t, r) {
                                    if (
                                        (this.save(),
                                            h(this.ctx),
                                            (this.current = new u()),
                                            Array.isArray(e) && 4 === e.length)
                                    ) {
                                        var n = e[2] - e[0],
                                            i = e[3] - e[1];
                                        this.ctx.rect(e[0], e[1], n, i), this.clip(), this.endPath();
                                    }

                                    this.transform.apply(this, t), this.transform.apply(this, r);
                                },
                                endAnnotation: function () {
                                    this.restore();
                                },
                                paintJpegXObject: function (e, t, r) {
                                    var i = this.objs.get(e);

                                    if (i) {
                                        this.save();
                                        var a = this.ctx;

                                        if (
                                            (a.scale(1 / t, -1 / r),
                                                a.drawImage(i, 0, 0, i.width, i.height, 0, -r, t, r),
                                                this.imageLayer)
                                        ) {
                                            var s = a.mozCurrentTransformInverse,
                                                o = this.getCanvasPosition(0, 0);
                                            this.imageLayer.appendImage({
                                                objId: e,
                                                left: o[0],
                                                top: o[1],
                                                width: t / s[0],
                                                height: r / s[3]
                                            });
                                        }

                                        this.restore();
                                    } else(0, n.warn)("Dependent image isn't ready yet");
                                },
                                paintImageMaskXObject: function (e) {
                                    var t = this.ctx,
                                        n = e.width,
                                        i = e.height,
                                        a = this.current.fillColor,
                                        s = this.current.patternFill,
                                        o = this.processingType3;
                                    if (
                                        (o &&
                                            void 0 === o.compiled &&
                                            (o.compiled =
                                                n <= 1e3 && i <= 1e3 ?
                                                (function (e) {
                                                    var t,
                                                        r,
                                                        n,
                                                        i,
                                                        a = e.width,
                                                        s = e.height,
                                                        o = a + 1,
                                                        l = new Uint8Array(o * (s + 1)),
                                                        u = new Uint8Array([
                                                            0,
                                                            2,
                                                            4,
                                                            0,
                                                            1,
                                                            0,
                                                            5,
                                                            4,
                                                            8,
                                                            10,
                                                            0,
                                                            8,
                                                            0,
                                                            2,
                                                            1,
                                                            0
                                                        ]),
                                                        c = (a + 7) & -8,
                                                        h = e.data,
                                                        d = new Uint8Array(c * s),
                                                        f = 0;

                                                    for (t = 0, i = h.length; t < i; t++)
                                                        for (var p = 128, m = h[t]; p > 0;)
                                                            (d[f++] = m & p ? 0 : 255), (p >>= 1);

                                                    var v = 0;

                                                    for (
                                                        0 !== d[(f = 0)] && ((l[0] = 1), ++v), r = 1; r < a; r++
                                                    )
                                                        d[f] !== d[f + 1] && ((l[r] = d[f] ? 2 : 1), ++v),
                                                        f++;

                                                    for (
                                                        0 !== d[f] && ((l[r] = 2), ++v), t = 1; t < s; t++
                                                    ) {
                                                        (n = t * o),
                                                        d[(f = t * c) - c] !== d[f] &&
                                                            ((l[n] = d[f] ? 1 : 8), ++v);
                                                        var g = (d[f] ? 4 : 0) + (d[f - c] ? 8 : 0);

                                                        for (r = 1; r < a; r++)
                                                            u[
                                                                (g =
                                                                    (g >> 2) +
                                                                    (d[f + 1] ? 4 : 0) +
                                                                    (d[f - c + 1] ? 8 : 0))
                                                            ] && ((l[n + r] = u[g]), ++v),
                                                            f++;

                                                        if (
                                                            (d[f - c] !== d[f] &&
                                                                ((l[n + r] = d[f] ? 2 : 4), ++v),
                                                                v > 1e3)
                                                        )
                                                            return null;
                                                    }

                                                    for (
                                                        n = t * o,
                                                        0 !== d[(f = c * (s - 1))] && ((l[n] = 8), ++v),
                                                        r = 1; r < a; r++
                                                    )
                                                        d[f] !== d[f + 1] &&
                                                        ((l[n + r] = d[f] ? 4 : 8), ++v),
                                                        f++;

                                                    if ((0 !== d[f] && ((l[n + r] = 4), ++v), v > 1e3))
                                                        return null;

                                                    var _ = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]),
                                                        b = [];

                                                    for (t = 0; v && t <= s; t++) {
                                                        for (var y = t * o, A = y + a; y < A && !l[y];)
                                                            y++;

                                                        if (y !== A) {
                                                            var S,
                                                                w = [y % o, t],
                                                                P = l[y],
                                                                k = y;

                                                            do {
                                                                var C = _[P];

                                                                do {
                                                                    y += C;
                                                                } while (!l[y]);

                                                                5 !== (S = l[y]) && 10 !== S ?
                                                                    ((P = S), (l[y] = 0)) :
                                                                    ((P = S & ((51 * P) >> 4)),
                                                                        (l[y] &= (P >> 2) | (P << 2))),
                                                                    w.push(y % o),
                                                                    w.push((y / o) | 0),
                                                                    --v;
                                                            } while (k !== y);

                                                            b.push(w), --t;
                                                        }
                                                    }

                                                    return function (e) {
                                                        e.save(),
                                                            e.scale(1 / a, -1 / s),
                                                            e.translate(0, -s),
                                                            e.beginPath();

                                                        for (var t = 0, r = b.length; t < r; t++) {
                                                            var n = b[t];
                                                            e.moveTo(n[0], n[1]);

                                                            for (var i = 2, o = n.length; i < o; i += 2)
                                                                e.lineTo(n[i], n[i + 1]);
                                                        }

                                                        e.fill(), e.beginPath(), e.restore();
                                                    };
                                                })({
                                                    data: e.data,
                                                    width: n,
                                                    height: i
                                                }) :
                                                null),
                                            o && o.compiled)
                                    )
                                        o.compiled(t);
                                    else {
                                        var l = this.cachedCanvases.getCanvas("maskCanvas", n, i),
                                            u = l.context;
                                        u.save(),
                                            r(u, e),
                                            (u.globalCompositeOperation = "source-in"),
                                            (u.fillStyle = s ? a.getPattern(u, this) : a),
                                            u.fillRect(0, 0, n, i),
                                            u.restore(),
                                            this.paintInlineImageXObject(l.canvas);
                                    }
                                },
                                paintImageMaskXObjectRepeat: function (e, t, n, i) {
                                    var a = e.width,
                                        s = e.height,
                                        o = this.current.fillColor,
                                        l = this.current.patternFill,
                                        u = this.cachedCanvases.getCanvas("maskCanvas", a, s),
                                        c = u.context;
                                    c.save(),
                                        r(c, e),
                                        (c.globalCompositeOperation = "source-in"),
                                        (c.fillStyle = l ? o.getPattern(c, this) : o),
                                        c.fillRect(0, 0, a, s),
                                        c.restore();

                                    for (var h = this.ctx, d = 0, f = i.length; d < f; d += 2)
                                        h.save(),
                                        h.transform(t, 0, 0, n, i[d], i[d + 1]),
                                        h.scale(1, -1),
                                        h.drawImage(u.canvas, 0, 0, a, s, 0, -1, 1, 1),
                                        h.restore();
                                },
                                paintImageMaskXObjectGroup: function (e) {
                                    for (
                                        var t = this.ctx,
                                            n = this.current.fillColor,
                                            i = this.current.patternFill,
                                            a = 0,
                                            s = e.length; a < s; a++
                                    ) {
                                        var o = e[a],
                                            l = o.width,
                                            u = o.height,
                                            c = this.cachedCanvases.getCanvas("maskCanvas", l, u),
                                            h = c.context;
                                        h.save(),
                                            r(h, o),
                                            (h.globalCompositeOperation = "source-in"),
                                            (h.fillStyle = i ? n.getPattern(h, this) : n),
                                            h.fillRect(0, 0, l, u),
                                            h.restore(),
                                            t.save(),
                                            t.transform.apply(t, o.transform),
                                            t.scale(1, -1),
                                            t.drawImage(c.canvas, 0, 0, l, u, 0, -1, 1, 1),
                                            t.restore();
                                    }
                                },
                                paintImageXObject: function (e) {
                                    var t = this.objs.get(e);
                                    t
                                        ?
                                        this.paintInlineImageXObject(t) :
                                        (0, n.warn)("Dependent image isn't ready yet");
                                },
                                paintImageXObjectRepeat: function (e, t, r, i) {
                                    var a = this.objs.get(e);

                                    if (a) {
                                        for (
                                            var s = a.width, o = a.height, l = [], u = 0, c = i.length; u < c; u += 2
                                        )
                                            l.push({
                                                transform: [t, 0, 0, r, i[u], i[u + 1]],
                                                x: 0,
                                                y: 0,
                                                w: s,
                                                h: o
                                            });

                                        this.paintInlineImageXObjectGroup(a, l);
                                    } else(0, n.warn)("Dependent image isn't ready yet");
                                },
                                paintInlineImageXObject: function (e) {
                                    var r = e.width,
                                        n = e.height,
                                        i = this.ctx;
                                    this.save(), i.scale(1 / r, -1 / n);
                                    var a,
                                        s,
                                        o = i.mozCurrentTransformInverse,
                                        l = o[0],
                                        u = o[1],
                                        c = Math.max(Math.sqrt(l * l + u * u), 1),
                                        h = o[2],
                                        d = o[3],
                                        f = Math.max(Math.sqrt(h * h + d * d), 1);
                                    if (e instanceof HTMLElement || !e.data) a = e;
                                    else {
                                        var p = (s = this.cachedCanvases.getCanvas("inlineImage", r, n))
                                            .context;
                                        t(p, e), (a = s.canvas);
                                    }

                                    for (
                                        var m = r, v = n, g = "prescale1";
                                        (c > 2 && m > 1) || (f > 2 && v > 1);

                                    ) {
                                        var _ = m,
                                            b = v;
                                        c > 2 && m > 1 && (c /= m / (_ = Math.ceil(m / 2))),
                                            f > 2 && v > 1 && (f /= v / (b = Math.ceil(v / 2))),
                                            (p = (s = this.cachedCanvases.getCanvas(g, _, b))
                                                .context).clearRect(0, 0, _, b),
                                            p.drawImage(a, 0, 0, m, v, 0, 0, _, b),
                                            (a = s.canvas),
                                            (m = _),
                                            (v = b),
                                            (g = "prescale1" === g ? "prescale2" : "prescale1");
                                    }

                                    if ((i.drawImage(a, 0, 0, m, v, 0, -n, r, n), this.imageLayer)) {
                                        var y = this.getCanvasPosition(0, -n);
                                        this.imageLayer.appendImage({
                                            imgData: e,
                                            left: y[0],
                                            top: y[1],
                                            width: r / o[0],
                                            height: n / o[3]
                                        });
                                    }

                                    this.restore();
                                },
                                paintInlineImageXObjectGroup: function (e, r) {
                                    var n = this.ctx,
                                        i = e.width,
                                        a = e.height,
                                        s = this.cachedCanvases.getCanvas("inlineImage", i, a);
                                    t(s.context, e);

                                    for (var o = 0, l = r.length; o < l; o++) {
                                        var u = r[o];

                                        if (
                                            (n.save(),
                                                n.transform.apply(n, u.transform),
                                                n.scale(1, -1),
                                                n.drawImage(s.canvas, u.x, u.y, u.w, u.h, 0, -1, 1, 1),
                                                this.imageLayer)
                                        ) {
                                            var c = this.getCanvasPosition(u.x, u.y);
                                            this.imageLayer.appendImage({
                                                imgData: e,
                                                left: c[0],
                                                top: c[1],
                                                width: i,
                                                height: a
                                            });
                                        }

                                        n.restore();
                                    }
                                },
                                paintSolidColorImageMask: function () {
                                    this.ctx.fillRect(0, 0, 1, 1);
                                },
                                paintXObject: function () {
                                    (0, n.warn)("Unsupported 'paintXObject' command.");
                                },
                                markPoint: function (e) {},
                                markPointProps: function (e, t) {},
                                beginMarkedContent: function (e) {},
                                beginMarkedContentProps: function (e, t) {},
                                endMarkedContent: function () {},
                                beginCompat: function () {},
                                endCompat: function () {},
                                consumePath: function () {
                                    var e = this.ctx;
                                    this.pendingClip &&
                                        (this.pendingClip === b ? e.clip("evenodd") : e.clip(),
                                            (this.pendingClip = null)),
                                        e.beginPath();
                                },
                                getSinglePixelWidth: function (e) {
                                    if (null === this.cachedGetSinglePixelWidth) {
                                        this.ctx.save();
                                        var t = this.ctx.mozCurrentTransformInverse;
                                        this.ctx.restore(),
                                            (this.cachedGetSinglePixelWidth = Math.sqrt(
                                                Math.max(
                                                    t[0] * t[0] + t[1] * t[1],
                                                    t[2] * t[2] + t[3] * t[3]
                                                )
                                            ));
                                    }

                                    return this.cachedGetSinglePixelWidth;
                                },
                                getCanvasPosition: function (e, t) {
                                    var r = this.ctx.mozCurrentTransform;
                                    return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]];
                                }
                            }),
                            n.OPS))
                        e.prototype[n.OPS[y]] = e.prototype[y];

                    return e;
                })();

            t.CanvasGraphics = c;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.TilingPattern = t.getShadingPatternFromIR = void 0);

            var n = r(0),
                i = {
                    RadialAxial: {
                        fromIR: function (e) {
                            var t = e[1],
                                r = e[2],
                                n = e[3],
                                i = e[4],
                                a = e[5],
                                s = e[6];
                            return {
                                type: "Pattern",
                                getPattern: function (e) {
                                    var o;
                                    "axial" === t
                                        ?
                                        (o = e.createLinearGradient(n[0], n[1], i[0], i[1])) :
                                        "radial" === t &&
                                        (o = e.createRadialGradient(
                                            n[0],
                                            n[1],
                                            a,
                                            i[0],
                                            i[1],
                                            s
                                        ));

                                    for (var l = 0, u = r.length; l < u; ++l) {
                                        var c = r[l];
                                        o.addColorStop(c[0], c[1]);
                                    }

                                    return o;
                                }
                            };
                        }
                    }
                },
                a = (function () {
                    function e(e, t, r, n, i, a, s, o) {
                        var l,
                            u = t.coords,
                            c = t.colors,
                            h = e.data,
                            d = 4 * e.width;
                        u[r + 1] > u[n + 1] &&
                            ((l = r), (r = n), (n = l), (l = a), (a = s), (s = l)),
                            u[n + 1] > u[i + 1] &&
                            ((l = n), (n = i), (i = l), (l = s), (s = o), (o = l)),
                            u[r + 1] > u[n + 1] &&
                            ((l = r), (r = n), (n = l), (l = a), (a = s), (s = l));

                        var f = (u[r] + t.offsetX) * t.scaleX,
                            p = (u[r + 1] + t.offsetY) * t.scaleY,
                            m = (u[n] + t.offsetX) * t.scaleX,
                            v = (u[n + 1] + t.offsetY) * t.scaleY,
                            g = (u[i] + t.offsetX) * t.scaleX,
                            _ = (u[i + 1] + t.offsetY) * t.scaleY;

                        if (!(p >= _))
                            for (
                                var b,
                                    y,
                                    A,
                                    S,
                                    w,
                                    P,
                                    k,
                                    C,
                                    R,
                                    x = c[a],
                                    T = c[a + 1],
                                    E = c[a + 2],
                                    O = c[s],
                                    I = c[s + 1],
                                    F = c[s + 2],
                                    L = c[o],
                                    D = c[o + 1],
                                    M = c[o + 2],
                                    j = Math.round(p),
                                    N = Math.round(_),
                                    q = j; q <= N; q++
                            ) {
                                q < v ?
                                    ((b =
                                            f -
                                            (f - m) *
                                            (R = q < p ? 0 : p === v ? 1 : (p - q) / (p - v))),
                                        (y = x - (x - O) * R),
                                        (A = T - (T - I) * R),
                                        (S = E - (E - F) * R)) :
                                    ((b =
                                            m -
                                            (m - g) *
                                            (R = q > _ ? 1 : v === _ ? 0 : (v - q) / (v - _))),
                                        (y = O - (O - L) * R),
                                        (A = I - (I - D) * R),
                                        (S = F - (F - M) * R)),
                                    (w =
                                        f -
                                        (f - g) * (R = q < p ? 0 : q > _ ? 1 : (p - q) / (p - _))),
                                    (P = x - (x - L) * R),
                                    (k = T - (T - D) * R),
                                    (C = E - (E - M) * R);

                                for (
                                    var W = Math.round(Math.min(b, w)),
                                        U = Math.round(Math.max(b, w)),
                                        B = d * q + 4 * W,
                                        z = W; z <= U; z++
                                )
                                    (R = (R = (b - z) / (b - w)) < 0 ? 0 : R > 1 ? 1 : R),
                                    (h[B++] = (y - (y - P) * R) | 0),
                                    (h[B++] = (A - (A - k) * R) | 0),
                                    (h[B++] = (S - (S - C) * R) | 0),
                                    (h[B++] = 255);
                            }
                    }

                    function t(t, r, n) {
                        var i,
                            a,
                            s = r.coords,
                            o = r.colors;

                        switch (r.type) {
                            case "lattice":
                                var l = r.verticesPerRow,
                                    u = Math.floor(s.length / l) - 1,
                                    c = l - 1;

                                for (i = 0; i < u; i++)
                                    for (var h = i * l, d = 0; d < c; d++, h++)
                                        e(t, n, s[h], s[h + 1], s[h + l], o[h], o[h + 1], o[h + l]),
                                        e(
                                            t,
                                            n,
                                            s[h + l + 1],
                                            s[h + 1],
                                            s[h + l],
                                            o[h + l + 1],
                                            o[h + 1],
                                            o[h + l]
                                        );

                                break;

                            case "triangles":
                                for (i = 0, a = s.length; i < a; i += 3)
                                    e(t, n, s[i], s[i + 1], s[i + 2], o[i], o[i + 1], o[i + 2]);

                                break;

                            default:
                                throw new Error("illegal figure");
                        }
                    }

                    return function (e, r, n, i, a, s, o, l) {
                        var u,
                            c,
                            h,
                            d,
                            f = Math.floor(e[0]),
                            p = Math.floor(e[1]),
                            m = Math.ceil(e[2]) - f,
                            v = Math.ceil(e[3]) - p,
                            g = Math.min(Math.ceil(Math.abs(m * r[0] * 1.1)), 3e3),
                            _ = Math.min(Math.ceil(Math.abs(v * r[1] * 1.1)), 3e3),
                            b = m / g,
                            y = v / _,
                            A = {
                                coords: n,
                                colors: i,
                                offsetX: -f,
                                offsetY: -p,
                                scaleX: 1 / b,
                                scaleY: 1 / y
                            },
                            S = g + 4,
                            w = _ + 4;

                        if (l.isEnabled)
                            (u = l.drawFigures({
                                width: g,
                                height: _,
                                backgroundColor: s,
                                figures: a,
                                context: A
                            })),
                            (c = o.getCanvas("mesh", S, w, !1)).context.drawImage(u, 2, 2),
                            (u = c.canvas);
                        else {
                            var P = (c = o.getCanvas("mesh", S, w, !1)).context,
                                k = P.createImageData(g, _);

                            if (s) {
                                var C = k.data;

                                for (h = 0, d = C.length; h < d; h += 4)
                                    (C[h] = s[0]),
                                    (C[h + 1] = s[1]),
                                    (C[h + 2] = s[2]),
                                    (C[h + 3] = 255);
                            }

                            for (h = 0; h < a.length; h++) t(k, a[h], A);

                            P.putImageData(k, 2, 2), (u = c.canvas);
                        }
                        return {
                            canvas: u,
                            offsetX: f - 2 * b,
                            offsetY: p - 2 * y,
                            scaleX: b,
                            scaleY: y
                        };
                    };
                })();

            (i.Mesh = {
                fromIR: function (e) {
                    var t = e[2],
                        r = e[3],
                        i = e[4],
                        s = e[5],
                        o = e[6],
                        l = e[8];
                    return {
                        type: "Pattern",
                        getPattern: function (e, u, c) {
                            var h;
                            if (c)
                                h = n.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
                            else if (
                                ((h = n.Util.singularValueDecompose2dScale(u.baseTransform)), o)
                            ) {
                                var d = n.Util.singularValueDecompose2dScale(o);
                                h = [h[0] * d[0], h[1] * d[1]];
                            }
                            var f = a(
                                s,
                                h,
                                t,
                                r,
                                i,
                                c ? null : l,
                                u.cachedCanvases,
                                u.webGLContext
                            );
                            return (
                                c ||
                                (e.setTransform.apply(e, u.baseTransform),
                                    o && e.transform.apply(e, o)),
                                e.translate(f.offsetX, f.offsetY),
                                e.scale(f.scaleX, f.scaleY),
                                e.createPattern(f.canvas, "no-repeat")
                            );
                        }
                    };
                }
            }),
            (i.Dummy = {
                fromIR: function () {
                    return {
                        type: "Pattern",
                        getPattern: function () {
                            return "hotpink";
                        }
                    };
                }
            });

            var s = (function () {
                var e = 1,
                    t = 2;

                function r(e, t, r, n, i) {
                    (this.operatorList = e[2]),
                    (this.matrix = e[3] || [1, 0, 0, 1, 0, 0]),
                    (this.bbox = e[4]),
                    (this.xstep = e[5]),
                    (this.ystep = e[6]),
                    (this.paintType = e[7]),
                    (this.tilingType = e[8]),
                    (this.color = t),
                    (this.canvasGraphicsFactory = n),
                    (this.baseTransform = i),
                    (this.type = "Pattern"),
                    (this.ctx = r);
                }

                return (
                    (r.prototype = {
                        createPatternCanvas: function (e) {
                            var t = this.operatorList,
                                r = this.bbox,
                                i = this.xstep,
                                a = this.ystep,
                                s = this.paintType,
                                o = this.tilingType,
                                l = this.color,
                                u = this.canvasGraphicsFactory;
                            (0, n.info)("TilingType: " + o);

                            var c = r[0],
                                h = r[1],
                                d = r[2],
                                f = r[3],
                                p = [c, h],
                                m = [c + i, h + a],
                                v = m[0] - p[0],
                                g = m[1] - p[1],
                                _ = n.Util.singularValueDecompose2dScale(this.matrix),
                                b = n.Util.singularValueDecompose2dScale(this.baseTransform),
                                y = [_[0] * b[0], _[1] * b[1]];

                            (v = Math.min(Math.ceil(Math.abs(v * y[0])), 3e3)),
                            (g = Math.min(Math.ceil(Math.abs(g * y[1])), 3e3));
                            var A = e.cachedCanvases.getCanvas("pattern", v, g, !0),
                                S = A.context,
                                w = u.createCanvasGraphics(S);
                            (w.groupLevel = e.groupLevel),
                            this.setFillAndStrokeStyleToContext(w, s, l),
                                this.setScale(v, g, i, a),
                                this.transformToScale(w);
                            var P = [1, 0, 0, 1, -p[0], -p[1]];
                            return (
                                w.transform.apply(w, P),
                                this.clipBbox(w, r, c, h, d, f),
                                w.executeOperatorList(t),
                                A.canvas
                            );
                        },
                        setScale: function (e, t, r, n) {
                            this.scale = [e / r, t / n];
                        },
                        transformToScale: function (e) {
                            var t = this.scale,
                                r = [t[0], 0, 0, t[1], 0, 0];
                            e.transform.apply(e, r);
                        },
                        scaleToContext: function () {
                            var e = this.scale;
                            this.ctx.scale(1 / e[0], 1 / e[1]);
                        },
                        clipBbox: function (e, t, r, n, i, a) {
                            if (Array.isArray(t) && 4 === t.length) {
                                var s = i - r,
                                    o = a - n;
                                e.ctx.rect(r, n, s, o), e.clip(), e.endPath();
                            }
                        },
                        setFillAndStrokeStyleToContext: function (r, i, a) {
                            var s = r.ctx,
                                o = r.current;

                            switch (i) {
                                case e:
                                    var l = this.ctx;
                                    (s.fillStyle = l.fillStyle),
                                    (s.strokeStyle = l.strokeStyle),
                                    (o.fillColor = l.fillStyle),
                                    (o.strokeColor = l.strokeStyle);
                                    break;

                                case t:
                                    var u = n.Util.makeCssRgb(a[0], a[1], a[2]);
                                    (s.fillStyle = u),
                                    (s.strokeStyle = u),
                                    (o.fillColor = u),
                                    (o.strokeColor = u);
                                    break;

                                default:
                                    throw new n.FormatError("Unsupported paint type: " + i);
                            }
                        },
                        getPattern: function (e, t) {
                            var r = this.createPatternCanvas(t);
                            return (
                                (e = this.ctx).setTransform.apply(e, this.baseTransform),
                                e.transform.apply(e, this.matrix),
                                this.scaleToContext(),
                                e.createPattern(r, "repeat")
                            );
                        }
                    }),
                    r
                );
            })();

            (t.getShadingPatternFromIR = function (e) {
                var t = i[e[0]];
                if (!t) throw new Error("Unknown IR type: " + e[0]);
                return t.fromIR(e);
            }),
            (t.TilingPattern = s);
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.PDFDataTransportStream = void 0);

            var n = r(0),
                i = (function () {
                    function e(e, t) {
                        var r = this;
                        (0, n.assert)(t), (this._queuedChunks = []);
                        var i = e.initialData;

                        if (i && i.length > 0) {
                            var a = new Uint8Array(i).buffer;

                            this._queuedChunks.push(a);
                        }

                        (this._pdfDataRangeTransport = t),
                        (this._isStreamingSupported = !e.disableStream),
                        (this._isRangeSupported = !e.disableRange),
                        (this._contentLength = e.length),
                        (this._fullRequestReader = null),
                        (this._rangeReaders = []),
                        this._pdfDataRangeTransport.addRangeListener(function (e, t) {
                                r._onReceiveData({
                                    begin: e,
                                    chunk: t
                                });
                            }),
                            this._pdfDataRangeTransport.addProgressListener(function (e) {
                                r._onProgress({
                                    loaded: e
                                });
                            }),
                            this._pdfDataRangeTransport.addProgressiveReadListener(function (
                                e
                            ) {
                                r._onReceiveData({
                                    chunk: e
                                });
                            }),
                            this._pdfDataRangeTransport.transportReady();
                    }

                    function t(e, t) {
                        (this._stream = e),
                        (this._done = !1),
                        (this._filename = null),
                        (this._queuedChunks = t || []),
                        (this._requests = []),
                        (this._headersReady = Promise.resolve()),
                        (e._fullRequestReader = this),
                        (this.onProgress = null);
                    }

                    function r(e, t, r) {
                        (this._stream = e),
                        (this._begin = t),
                        (this._end = r),
                        (this._queuedChunk = null),
                        (this._requests = []),
                        (this._done = !1),
                        (this.onProgress = null);
                    }

                    return (
                        (e.prototype = {
                            _onReceiveData: function (e) {
                                var t = new Uint8Array(e.chunk).buffer;
                                if (void 0 === e.begin)
                                    this._fullRequestReader ?
                                    this._fullRequestReader._enqueue(t) :
                                    this._queuedChunks.push(t);
                                else {
                                    var r = this._rangeReaders.some(function (r) {
                                        return r._begin === e.begin && (r._enqueue(t), !0);
                                    });

                                    (0, n.assert)(r);
                                }
                            },
                            _onProgress: function (e) {
                                if (this._rangeReaders.length > 0) {
                                    var t = this._rangeReaders[0];
                                    t.onProgress &&
                                        t.onProgress({
                                            loaded: e.loaded
                                        });
                                }
                            },
                            _removeRangeReader: function (e) {
                                var t = this._rangeReaders.indexOf(e);

                                t >= 0 && this._rangeReaders.splice(t, 1);
                            },
                            getFullReader: function () {
                                (0, n.assert)(!this._fullRequestReader);
                                var e = this._queuedChunks;
                                return (this._queuedChunks = null), new t(this, e);
                            },
                            getRangeReader: function (e, t) {
                                var n = new r(this, e, t);
                                return (
                                    this._pdfDataRangeTransport.requestDataRange(e, t),
                                    this._rangeReaders.push(n),
                                    n
                                );
                            },
                            cancelAllRequests: function (e) {
                                this._fullRequestReader && this._fullRequestReader.cancel(e),
                                    this._rangeReaders.slice(0).forEach(function (t) {
                                        t.cancel(e);
                                    }),
                                    this._pdfDataRangeTransport.abort();
                            }
                        }),
                        (t.prototype = {
                            _enqueue: function (e) {
                                this._done ||
                                    (this._requests.length > 0 ?
                                        this._requests.shift().resolve({
                                            value: e,
                                            done: !1
                                        }) :
                                        this._queuedChunks.push(e));
                            },

                            get headersReady() {
                                return this._headersReady;
                            },

                            get filename() {
                                return this._filename;
                            },

                            get isRangeSupported() {
                                return this._stream._isRangeSupported;
                            },

                            get isStreamingSupported() {
                                return this._stream._isStreamingSupported;
                            },

                            get contentLength() {
                                return this._stream._contentLength;
                            },

                            read: function () {
                                if (this._queuedChunks.length > 0) {
                                    var e = this._queuedChunks.shift();

                                    return Promise.resolve({
                                        value: e,
                                        done: !1
                                    });
                                }

                                if (this._done)
                                    return Promise.resolve({
                                        value: void 0,
                                        done: !0
                                    });
                                var t = (0, n.createPromiseCapability)();
                                return this._requests.push(t), t.promise;
                            },
                            cancel: function (e) {
                                (this._done = !0),
                                this._requests.forEach(function (e) {
                                        e.resolve({
                                            value: void 0,
                                            done: !0
                                        });
                                    }),
                                    (this._requests = []);
                            }
                        }),
                        (r.prototype = {
                            _enqueue: function (e) {
                                if (!this._done) {
                                    if (0 === this._requests.length) this._queuedChunk = e;
                                    else
                                        this._requests.shift().resolve({
                                            value: e,
                                            done: !1
                                        }),
                                        this._requests.forEach(function (e) {
                                            e.resolve({
                                                value: void 0,
                                                done: !0
                                            });
                                        }),
                                        (this._requests = []);
                                    (this._done = !0), this._stream._removeRangeReader(this);
                                }
                            },

                            get isStreamingSupported() {
                                return !1;
                            },

                            read: function () {
                                if (this._queuedChunk) {
                                    var e = this._queuedChunk;
                                    return (
                                        (this._queuedChunk = null),
                                        Promise.resolve({
                                            value: e,
                                            done: !1
                                        })
                                    );
                                }

                                if (this._done)
                                    return Promise.resolve({
                                        value: void 0,
                                        done: !0
                                    });
                                var t = (0, n.createPromiseCapability)();
                                return this._requests.push(t), t.promise;
                            },
                            cancel: function (e) {
                                (this._done = !0),
                                this._requests.forEach(function (e) {
                                        e.resolve({
                                            value: void 0,
                                            done: !0
                                        });
                                    }),
                                    (this._requests = []),
                                    this._stream._removeRangeReader(this);
                            }
                        }),
                        e
                    );
                })();

            t.PDFDataTransportStream = i;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.WebGLContext = void 0);

            var n = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(0);

            var a = (function () {
                    function e(t) {
                        var r = t.enable,
                            n = void 0 !== r && r;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (this._enabled = !0 === n);
                    }

                    return (
                        n(e, [{
                                key: "composeSMask",
                                value: function (e) {
                                    var t = e.layer,
                                        r = e.mask,
                                        n = e.properties;
                                    return s.composeSMask(t, r, n);
                                }
                            },
                            {
                                key: "drawFigures",
                                value: function (e) {
                                    var t = e.width,
                                        r = e.height,
                                        n = e.backgroundColor,
                                        i = e.figures,
                                        a = e.context;
                                    return s.drawFigures(t, r, n, i, a);
                                }
                            },
                            {
                                key: "clear",
                                value: function () {
                                    s.cleanup();
                                }
                            },
                            {
                                key: "isEnabled",
                                get: function () {
                                    var e = this._enabled;
                                    return (
                                        e && (e = s.tryInitGL()),
                                        (0, i.shadow)(this, "isEnabled", e)
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(),
                s = (function () {
                    function e(e, t, r) {
                        var n = e.createShader(r);

                        if (
                            (e.shaderSource(n, t),
                                e.compileShader(n),
                                !e.getShaderParameter(n, e.COMPILE_STATUS))
                        ) {
                            var i = e.getShaderInfoLog(n);
                            throw new Error("Error during shader compilation: " + i);
                        }

                        return n;
                    }

                    function t(t, r) {
                        return e(t, r, t.VERTEX_SHADER);
                    }

                    function r(t, r) {
                        return e(t, r, t.FRAGMENT_SHADER);
                    }

                    function n(e, t) {
                        for (var r = e.createProgram(), n = 0, i = t.length; n < i; ++n)
                            e.attachShader(r, t[n]);

                        if ((e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS))) {
                            var a = e.getProgramInfoLog(r);
                            throw new Error("Error during program linking: " + a);
                        }

                        return r;
                    }

                    function i(e, t, r) {
                        e.activeTexture(r);
                        var n = e.createTexture();
                        return (
                            e.bindTexture(e.TEXTURE_2D, n),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
                            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
                            n
                        );
                    }

                    var a, s;

                    function o() {
                        a ||
                            ((s = document.createElement("canvas")),
                                (a = s.getContext("webgl", {
                                    premultipliedalpha: !1
                                })));
                    }

                    var l =
                        "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
                        u =
                        "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
                        c = null;
                    var h =
                        "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
                        d =
                        "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
                        f = null;
                    return {
                        tryInitGL: function () {
                            try {
                                return o(), !!a;
                            } catch (e) {}

                            return !1;
                        },
                        composeSMask: function (e, h, d) {
                            var f = e.width,
                                p = e.height;
                            c ||
                                (function () {
                                    var e, i;
                                    o(), (e = s), (s = null), (i = a), (a = null);
                                    var h = n(i, [t(i, l), r(i, u)]);
                                    i.useProgram(h);
                                    var d = {};
                                    (d.gl = i),
                                    (d.canvas = e),
                                    (d.resolutionLocation = i.getUniformLocation(
                                        h,
                                        "u_resolution"
                                    )),
                                    (d.positionLocation = i.getAttribLocation(h, "a_position")),
                                    (d.backdropLocation = i.getUniformLocation(
                                        h,
                                        "u_backdrop"
                                    )),
                                    (d.subtypeLocation = i.getUniformLocation(h, "u_subtype"));
                                    var f = i.getAttribLocation(h, "a_texCoord"),
                                        p = i.getUniformLocation(h, "u_image"),
                                        m = i.getUniformLocation(h, "u_mask"),
                                        v = i.createBuffer();
                                    i.bindBuffer(i.ARRAY_BUFFER, v),
                                        i.bufferData(
                                            i.ARRAY_BUFFER,
                                            new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
                                            i.STATIC_DRAW
                                        ),
                                        i.enableVertexAttribArray(f),
                                        i.vertexAttribPointer(f, 2, i.FLOAT, !1, 0, 0),
                                        i.uniform1i(p, 0),
                                        i.uniform1i(m, 1),
                                        (c = d);
                                })();
                            var m = c,
                                v = m.canvas,
                                g = m.gl;
                            (v.width = f),
                            (v.height = p),
                            g.viewport(0, 0, g.drawingBufferWidth, g.drawingBufferHeight),
                                g.uniform2f(m.resolutionLocation, f, p),
                                d.backdrop ?
                                g.uniform4f(
                                    m.resolutionLocation,
                                    d.backdrop[0],
                                    d.backdrop[1],
                                    d.backdrop[2],
                                    1
                                ) :
                                g.uniform4f(m.resolutionLocation, 0, 0, 0, 0),
                                g.uniform1i(
                                    m.subtypeLocation,
                                    "Luminosity" === d.subtype ? 1 : 0
                                );

                            var _ = i(g, e, g.TEXTURE0),
                                b = i(g, h, g.TEXTURE1),
                                y = g.createBuffer();

                            return (
                                g.bindBuffer(g.ARRAY_BUFFER, y),
                                g.bufferData(
                                    g.ARRAY_BUFFER,
                                    new Float32Array([0, 0, f, 0, 0, p, 0, p, f, 0, f, p]),
                                    g.STATIC_DRAW
                                ),
                                g.enableVertexAttribArray(m.positionLocation),
                                g.vertexAttribPointer(m.positionLocation, 2, g.FLOAT, !1, 0, 0),
                                g.clearColor(0, 0, 0, 0),
                                g.enable(g.BLEND),
                                g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA),
                                g.clear(g.COLOR_BUFFER_BIT),
                                g.drawArrays(g.TRIANGLES, 0, 6),
                                g.flush(),
                                g.deleteTexture(_),
                                g.deleteTexture(b),
                                g.deleteBuffer(y),
                                v
                            );
                        },
                        drawFigures: function (e, i, l, u, c) {
                            f ||
                                (function () {
                                    var e, i;
                                    o(), (e = s), (s = null), (i = a), (a = null);
                                    var l = n(i, [t(i, h), r(i, d)]);
                                    i.useProgram(l);
                                    var u = {};
                                    (u.gl = i),
                                    (u.canvas = e),
                                    (u.resolutionLocation = i.getUniformLocation(
                                        l,
                                        "u_resolution"
                                    )),
                                    (u.scaleLocation = i.getUniformLocation(l, "u_scale")),
                                    (u.offsetLocation = i.getUniformLocation(l, "u_offset")),
                                    (u.positionLocation = i.getAttribLocation(l, "a_position")),
                                    (u.colorLocation = i.getAttribLocation(l, "a_color")),
                                    (f = u);
                                })();
                            var p = f,
                                m = p.canvas,
                                v = p.gl;
                            (m.width = e),
                            (m.height = i),
                            v.viewport(0, 0, v.drawingBufferWidth, v.drawingBufferHeight),
                                v.uniform2f(p.resolutionLocation, e, i);

                            var g,
                                _,
                                b,
                                y = 0;

                            for (g = 0, _ = u.length; g < _; g++)
                                switch (u[g].type) {
                                    case "lattice":
                                        y +=
                                            ((b = (u[g].coords.length / u[g].verticesPerRow) | 0) -
                                                1) *
                                            (u[g].verticesPerRow - 1) *
                                            6;
                                        break;

                                    case "triangles":
                                        y += u[g].coords.length;
                                }

                            var A = new Float32Array(2 * y),
                                S = new Uint8Array(3 * y),
                                w = c.coords,
                                P = c.colors,
                                k = 0,
                                C = 0;

                            for (g = 0, _ = u.length; g < _; g++) {
                                var R = u[g],
                                    x = R.coords,
                                    T = R.colors;

                                switch (R.type) {
                                    case "lattice":
                                        var E = R.verticesPerRow;
                                        b = (x.length / E) | 0;

                                        for (var O = 1; O < b; O++)
                                            for (var I = O * E + 1, F = 1; F < E; F++, I++)
                                                (A[k] = w[x[I - E - 1]]),
                                                (A[k + 1] = w[x[I - E - 1] + 1]),
                                                (A[k + 2] = w[x[I - E]]),
                                                (A[k + 3] = w[x[I - E] + 1]),
                                                (A[k + 4] = w[x[I - 1]]),
                                                (A[k + 5] = w[x[I - 1] + 1]),
                                                (S[C] = P[T[I - E - 1]]),
                                                (S[C + 1] = P[T[I - E - 1] + 1]),
                                                (S[C + 2] = P[T[I - E - 1] + 2]),
                                                (S[C + 3] = P[T[I - E]]),
                                                (S[C + 4] = P[T[I - E] + 1]),
                                                (S[C + 5] = P[T[I - E] + 2]),
                                                (S[C + 6] = P[T[I - 1]]),
                                                (S[C + 7] = P[T[I - 1] + 1]),
                                                (S[C + 8] = P[T[I - 1] + 2]),
                                                (A[k + 6] = A[k + 2]),
                                                (A[k + 7] = A[k + 3]),
                                                (A[k + 8] = A[k + 4]),
                                                (A[k + 9] = A[k + 5]),
                                                (A[k + 10] = w[x[I]]),
                                                (A[k + 11] = w[x[I] + 1]),
                                                (S[C + 9] = S[C + 3]),
                                                (S[C + 10] = S[C + 4]),
                                                (S[C + 11] = S[C + 5]),
                                                (S[C + 12] = S[C + 6]),
                                                (S[C + 13] = S[C + 7]),
                                                (S[C + 14] = S[C + 8]),
                                                (S[C + 15] = P[T[I]]),
                                                (S[C + 16] = P[T[I] + 1]),
                                                (S[C + 17] = P[T[I] + 2]),
                                                (k += 12),
                                                (C += 18);

                                        break;

                                    case "triangles":
                                        for (var L = 0, D = x.length; L < D; L++)
                                            (A[k] = w[x[L]]),
                                            (A[k + 1] = w[x[L] + 1]),
                                            (S[C] = P[T[L]]),
                                            (S[C + 1] = P[T[L] + 1]),
                                            (S[C + 2] = P[T[L] + 2]),
                                            (k += 2),
                                            (C += 3);
                                }
                            }

                            l
                                ?
                                v.clearColor(l[0] / 255, l[1] / 255, l[2] / 255, 1) :
                                v.clearColor(0, 0, 0, 0),
                                v.clear(v.COLOR_BUFFER_BIT);
                            var M = v.createBuffer();
                            v.bindBuffer(v.ARRAY_BUFFER, M),
                                v.bufferData(v.ARRAY_BUFFER, A, v.STATIC_DRAW),
                                v.enableVertexAttribArray(p.positionLocation),
                                v.vertexAttribPointer(p.positionLocation, 2, v.FLOAT, !1, 0, 0);
                            var j = v.createBuffer();
                            return (
                                v.bindBuffer(v.ARRAY_BUFFER, j),
                                v.bufferData(v.ARRAY_BUFFER, S, v.STATIC_DRAW),
                                v.enableVertexAttribArray(p.colorLocation),
                                v.vertexAttribPointer(
                                    p.colorLocation,
                                    3,
                                    v.UNSIGNED_BYTE,
                                    !1,
                                    0,
                                    0
                                ),
                                v.uniform2f(p.scaleLocation, c.scaleX, c.scaleY),
                                v.uniform2f(p.offsetLocation, c.offsetX, c.offsetY),
                                v.drawArrays(v.TRIANGLES, 0, y),
                                v.flush(),
                                v.deleteBuffer(M),
                                v.deleteBuffer(j),
                                m
                            );
                        },
                        cleanup: function () {
                            c && c.canvas && ((c.canvas.width = 0), (c.canvas.height = 0)),
                                f && f.canvas && ((f.canvas.width = 0), (f.canvas.height = 0)),
                                (c = null),
                                (f = null);
                        }
                    };
                })();

            t.WebGLContext = a;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.PDFNodeStream = void 0);

            var n = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(0),
                a = r(40);

            function s(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                t &&
                    (Object.setPrototypeOf ?
                        Object.setPrototypeOf(e, t) :
                        (e.__proto__ = t));
            }

            function l(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }

            var u = require("fs"),
                c = require("http"),
                h = require("https"),
                d = require("url"),
                f = /^file:\/\/\/[a-zA-Z]:\//;

            var p = (function () {
                    function e(t) {
                        var r, n;
                        l(this, e),
                            (this.source = t),
                            (this.url =
                                ((r = t.url),
                                    "file:" === (n = d.parse(r)).protocol || n.host ?
                                    n :
                                    /^[a-z]:[/\\]/i.test(r) ?
                                    d.parse("file:///" + r) :
                                    (n.host || (n.protocol = "file:"), n))),
                            (this.isHttp =
                                "http:" === this.url.protocol ||
                                "https:" === this.url.protocol),
                            (this.isFsUrl = "file:" === this.url.protocol),
                            (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
                            (this._fullRequest = null),
                            (this._rangeRequestReaders = []);
                    }

                    return (
                        n(e, [{
                                key: "getFullReader",
                                value: function () {
                                    return (
                                        (0, i.assert)(!this._fullRequest),
                                        (this._fullRequest = this.isFsUrl ?
                                            new y(this) :
                                            new _(this)),
                                        this._fullRequest
                                    );
                                }
                            },
                            {
                                key: "getRangeReader",
                                value: function (e, t) {
                                    var r = this.isFsUrl ? new A(this, e, t) : new b(this, e, t);
                                    return this._rangeRequestReaders.push(r), r;
                                }
                            },
                            {
                                key: "cancelAllRequests",
                                value: function (e) {
                                    this._fullRequest && this._fullRequest.cancel(e),
                                        this._rangeRequestReaders.slice(0).forEach(function (t) {
                                            t.cancel(e);
                                        });
                                }
                            }
                        ]),
                        e
                    );
                })(),
                m = (function () {
                    function e(t) {
                        l(this, e),
                            (this._url = t.url),
                            (this._done = !1),
                            (this._errored = !1),
                            (this._reason = null),
                            (this.onProgress = null);
                        var r = t.source;
                        (this._contentLength = r.length),
                        (this._loaded = 0),
                        (this._filename = null),
                        (this._disableRange = r.disableRange || !1),
                        (this._rangeChunkSize = r.rangeChunkSize),
                        this._rangeChunkSize ||
                            this._disableRange ||
                            (this._disableRange = !0),
                            (this._isStreamingSupported = !r.disableStream),
                            (this._isRangeSupported = !r.disableRange),
                            (this._readableStream = null),
                            (this._readCapability = (0, i.createPromiseCapability)()),
                            (this._headersCapability = (0, i.createPromiseCapability)());
                    }

                    return (
                        n(e, [{
                                key: "read",
                                value: function () {
                                    var e = this;
                                    return this._readCapability.promise.then(function () {
                                        if (e._done)
                                            return Promise.resolve({
                                                value: void 0,
                                                done: !0
                                            });
                                        if (e._errored) return Promise.reject(e._reason);

                                        var t = e._readableStream.read();

                                        if (null === t)
                                            return (
                                                (e._readCapability = (0, i.createPromiseCapability)()),
                                                e.read()
                                            );
                                        (e._loaded += t.length),
                                        e.onProgress &&
                                            e.onProgress({
                                                loaded: e._loaded,
                                                total: e._contentLength
                                            });
                                        var r = new Uint8Array(t).buffer;
                                        return Promise.resolve({
                                            value: r,
                                            done: !1
                                        });
                                    });
                                }
                            },
                            {
                                key: "cancel",
                                value: function (e) {
                                    this._readableStream ?
                                        this._readableStream.destroy(e) :
                                        this._error(e);
                                }
                            },
                            {
                                key: "_error",
                                value: function (e) {
                                    (this._errored = !0),
                                    (this._reason = e),
                                    this._readCapability.resolve();
                                }
                            },
                            {
                                key: "_setReadableStream",
                                value: function (e) {
                                    var t = this;
                                    (this._readableStream = e),
                                    e.on("readable", function () {
                                            t._readCapability.resolve();
                                        }),
                                        e.on("end", function () {
                                            e.destroy(), (t._done = !0), t._readCapability.resolve();
                                        }),
                                        e.on("error", function (e) {
                                            t._error(e);
                                        }),
                                        !this._isStreamingSupported &&
                                        this._isRangeSupported &&
                                        this._error(
                                            new i.AbortException("streaming is disabled")
                                        ),
                                        this._errored && this._readableStream.destroy(this._reason);
                                }
                            },
                            {
                                key: "headersReady",
                                get: function () {
                                    return this._headersCapability.promise;
                                }
                            },
                            {
                                key: "filename",
                                get: function () {
                                    return this._filename;
                                }
                            },
                            {
                                key: "contentLength",
                                get: function () {
                                    return this._contentLength;
                                }
                            },
                            {
                                key: "isRangeSupported",
                                get: function () {
                                    return this._isRangeSupported;
                                }
                            },
                            {
                                key: "isStreamingSupported",
                                get: function () {
                                    return this._isStreamingSupported;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                v = (function () {
                    function e(t) {
                        l(this, e),
                            (this._url = t.url),
                            (this._done = !1),
                            (this._errored = !1),
                            (this._reason = null),
                            (this.onProgress = null),
                            (this._loaded = 0),
                            (this._readableStream = null),
                            (this._readCapability = (0, i.createPromiseCapability)());
                        var r = t.source;
                        this._isStreamingSupported = !r.disableStream;
                    }

                    return (
                        n(e, [{
                                key: "read",
                                value: function () {
                                    var e = this;
                                    return this._readCapability.promise.then(function () {
                                        if (e._done)
                                            return Promise.resolve({
                                                value: void 0,
                                                done: !0
                                            });
                                        if (e._errored) return Promise.reject(e._reason);

                                        var t = e._readableStream.read();

                                        if (null === t)
                                            return (
                                                (e._readCapability = (0, i.createPromiseCapability)()),
                                                e.read()
                                            );
                                        (e._loaded += t.length),
                                        e.onProgress &&
                                            e.onProgress({
                                                loaded: e._loaded
                                            });
                                        var r = new Uint8Array(t).buffer;
                                        return Promise.resolve({
                                            value: r,
                                            done: !1
                                        });
                                    });
                                }
                            },
                            {
                                key: "cancel",
                                value: function (e) {
                                    this._readableStream ?
                                        this._readableStream.destroy(e) :
                                        this._error(e);
                                }
                            },
                            {
                                key: "_error",
                                value: function (e) {
                                    (this._errored = !0),
                                    (this._reason = e),
                                    this._readCapability.resolve();
                                }
                            },
                            {
                                key: "_setReadableStream",
                                value: function (e) {
                                    var t = this;
                                    (this._readableStream = e),
                                    e.on("readable", function () {
                                            t._readCapability.resolve();
                                        }),
                                        e.on("end", function () {
                                            e.destroy(), (t._done = !0), t._readCapability.resolve();
                                        }),
                                        e.on("error", function (e) {
                                            t._error(e);
                                        }),
                                        this._errored && this._readableStream.destroy(this._reason);
                                }
                            },
                            {
                                key: "isStreamingSupported",
                                get: function () {
                                    return this._isStreamingSupported;
                                }
                            }
                        ]),
                        e
                    );
                })();

            function g(e, t) {
                return {
                    protocol: e.protocol,
                    auth: e.auth,
                    host: e.hostname,
                    port: e.port,
                    path: e.path,
                    method: "GET",
                    headers: t
                };
            }

            var _ = (function (e) {
                    function t(e) {
                        l(this, t);

                        var r = s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                            ),
                            n = function n(t) {
                                r._headersCapability.resolve(), r._setReadableStream(t);

                                var n = function n(e) {
                                        return r._readableStream.headers[e.toLowerCase()];
                                    },
                                    i = (0, a.validateRangeRequestCapabilities)({
                                        getResponseHeader: n,
                                        isHttp: e.isHttp,
                                        rangeChunkSize: r._rangeChunkSize,
                                        disableRange: r._disableRange
                                    }),
                                    s = i.allowRangeRequests,
                                    o = i.suggestedLength;

                                (r._isRangeSupported = s),
                                (r._contentLength = o || r._contentLength),
                                (r._filename = (0, a.extractFilenameFromHeader)(n));
                            };

                        return (
                            (r._request = null),
                            "http:" === r._url.protocol ?
                            (r._request = c.request(g(r._url, e.httpHeaders), n)) :
                            (r._request = h.request(g(r._url, e.httpHeaders), n)),
                            r._request.on("error", function (e) {
                                (r._errored = !0),
                                (r._reason = e),
                                r._headersCapability.reject(e);
                            }),
                            r._request.end(),
                            r
                        );
                    }

                    return o(t, m), t;
                })(),
                b = (function (e) {
                    function t(e, r, n) {
                        l(this, t);
                        var i = s(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                        );

                        for (var a in ((i._httpHeaders = {}), e.httpHeaders)) {
                            var o = e.httpHeaders[a];
                            void 0 !== o && (i._httpHeaders[a] = o);
                        }

                        return (
                            (i._httpHeaders.Range = "bytes=" + r + "-" + (n - 1)),
                            (i._request = null),
                            "http:" === i._url.protocol ?
                            (i._request = c.request(g(i._url, i._httpHeaders), function (
                                e
                            ) {
                                i._setReadableStream(e);
                            })) :
                            (i._request = h.request(g(i._url, i._httpHeaders), function (
                                e
                            ) {
                                i._setReadableStream(e);
                            })),
                            i._request.on("error", function (e) {
                                (i._errored = !0), (i._reason = e);
                            }),
                            i._request.end(),
                            i
                        );
                    }

                    return o(t, v), t;
                })(),
                y = (function (e) {
                    function t(e) {
                        l(this, t);
                        var r = s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                            ),
                            n = decodeURIComponent(r._url.path);
                        return (
                            f.test(r._url.href) && (n = n.replace(/^\//, "")),
                            u.lstat(n, function (e, t) {
                                if (e)
                                    return (
                                        (r._errored = !0),
                                        (r._reason = e),
                                        void r._headersCapability.reject(e)
                                    );
                                (r._contentLength = t.size),
                                r._setReadableStream(u.createReadStream(n)),
                                    r._headersCapability.resolve();
                            }),
                            r
                        );
                    }

                    return o(t, m), t;
                })(),
                A = (function (e) {
                    function t(e, r, n) {
                        l(this, t);
                        var i = s(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                            ),
                            a = decodeURIComponent(i._url.path);
                        return (
                            f.test(i._url.href) && (a = a.replace(/^\//, "")),
                            i._setReadableStream(
                                u.createReadStream(a, {
                                    start: r,
                                    end: n - 1
                                })
                            ),
                            i
                        );
                    }

                    return o(t, v), t;
                })();

            t.PDFNodeStream = p;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            var n = (function () {
                return function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function (e, t) {
                            var r = [],
                                n = !0,
                                i = !1,
                                a = void 0;

                            try {
                                for (
                                    var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) &&
                                    (r.push(s.value), !t || r.length !== t); n = !0
                                );
                            } catch (e) {
                                (i = !0), (a = e);
                            } finally {
                                try {
                                    !n && o.return && o.return();
                                } finally {
                                    if (i) throw a;
                                }
                            }

                            return r;
                        })(e, t);
                    throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                    );
                };
            })();

            t.getFilenameFromContentDispositionHeader = function (e) {
                var t = !0,
                    r = s("filename\\*", "i").exec(e);

                if (r) {
                    var i = u((r = r[1]));
                    return l((i = h((i = c((i = unescape(i)))))));
                }

                if (
                    (r = (function (e) {
                        for (
                            var t = [],
                                r = void 0,
                                i = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig"); null !== (r = i.exec(e));

                        ) {
                            var a = r,
                                o = n(a, 4),
                                l = o[1],
                                h = o[2],
                                d = o[3];

                            if ((l = parseInt(l, 10)) in t) {
                                if (0 === l) break;
                            } else t[l] = [h, d];
                        }

                        for (var f = [], p = 0; p < t.length && p in t; ++p) {
                            var m = n(t[p], 2),
                                v = m[0],
                                g = m[1];
                            (g = u(g)),
                            v && ((g = unescape(g)), 0 === p && (g = c(g))),
                                f.push(g);
                        }

                        return f.join("");
                    })(e))
                )
                    return l(h(r));

                if ((r = s("filename", "i").exec(e))) {
                    var a = u((r = r[1]));
                    return l((a = h(a)));
                }

                function s(e, t) {
                    return new RegExp(
                        "(?:^|;)\\s*" +
                        e +
                        '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                        t
                    );
                }

                function o(e, r) {
                    if (e) {
                        if (!/^[^\x00-\xFF]+$/.test(r)) return r;

                        try {
                            for (
                                var n = new TextDecoder(e, {
                                        fatal: !0
                                    }),
                                    i = new Array(r.length),
                                    a = 0; a < r.length;
                                ++a
                            )
                                i[a] = r.charCodeAt(0);

                            (r = n.decode(new Uint8Array(i))), (t = !1);
                        } catch (n) {
                            /^utf-?8$/i.test(e) &&
                                ((r = decodeURIComponent(escape(r))), (t = !1));
                        }
                    }

                    return r;
                }

                function l(e) {
                    return t && /[\x80-\xff]/.test(e) ? o("utf-8", e) : e;
                }

                function u(e) {
                    if ('"' === e.charAt(0)) {
                        for (var t = e.slice(1).split('\\"'), r = 0; r < t.length; ++r) {
                            var n = t[r].indexOf('"'); -
                            1 !== n && ((t[r] = t[r].slice(0, n)), (t.length = r + 1)),
                                (t[r] = t[r].replace(/\\(.)/g, "$1"));
                        }

                        e = t.join('"');
                    }

                    return e;
                }

                function c(e) {
                    var t = e.indexOf("'");
                    return -1 === t ?
                        e :
                        o(e.slice(0, t), e.slice(t + 1).replace(/^[^']*'/, ""));
                }

                function h(e) {
                    return "=?" !== e.slice(0, 2) || /[\x00-\x19\x80-\xff]/.test(e) ?
                        e :
                        e.replace(
                            /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                            function (e, t, r, n) {
                                if ("q" === r || "Q" === r)
                                    return o(
                                        t,
                                        (n = (n = n.replace(/_/g, " ")).replace(
                                            /=([0-9a-fA-F]{2})/g,
                                            function (e, t) {
                                                return String.fromCharCode(parseInt(t, 16));
                                            }
                                        ))
                                    );

                                try {
                                    return atob(n);
                                } catch (e) {
                                    return n;
                                }
                            }
                        );
                }

                return "";
            };
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.PDFFetchStream = void 0);

            var n = (function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }

                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(0),
                a = r(40);

            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }

            function o(e, t) {
                return {
                    method: "GET",
                    headers: e,
                    mode: "cors",
                    credentials: t ? "include" : "same-origin",
                    redirect: "follow"
                };
            }

            var l = (function () {
                    function e(t) {
                        s(this, e),
                            (this.source = t),
                            (this.isHttp = /^https?:/i.test(t.url)),
                            (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
                            (this._fullRequestReader = null),
                            (this._rangeRequestReaders = []);
                    }

                    return (
                        n(e, [{
                                key: "getFullReader",
                                value: function () {
                                    return (
                                        (0, i.assert)(!this._fullRequestReader),
                                        (this._fullRequestReader = new u(this)),
                                        this._fullRequestReader
                                    );
                                }
                            },
                            {
                                key: "getRangeReader",
                                value: function (e, t) {
                                    var r = new c(this, e, t);
                                    return this._rangeRequestReaders.push(r), r;
                                }
                            },
                            {
                                key: "cancelAllRequests",
                                value: function (e) {
                                    this._fullRequestReader && this._fullRequestReader.cancel(e),
                                        this._rangeRequestReaders.slice(0).forEach(function (t) {
                                            t.cancel(e);
                                        });
                                }
                            }
                        ]),
                        e
                    );
                })(),
                u = (function () {
                    function e(t) {
                        var r = this;
                        s(this, e),
                            (this._stream = t),
                            (this._reader = null),
                            (this._loaded = 0),
                            (this._filename = null);
                        var n = t.source;

                        for (var l in ((this._withCredentials = n.withCredentials),
                                (this._contentLength = n.length),
                                (this._headersCapability = (0, i.createPromiseCapability)()),
                                (this._disableRange = n.disableRange || !1),
                                (this._rangeChunkSize = n.rangeChunkSize),
                                this._rangeChunkSize ||
                                this._disableRange ||
                                (this._disableRange = !0),
                                (this._isStreamingSupported = !n.disableStream),
                                (this._isRangeSupported = !n.disableRange),
                                (this._headers = new Headers()),
                                this._stream.httpHeaders)) {
                            var u = this._stream.httpHeaders[l];
                            void 0 !== u && this._headers.append(l, u);
                        }

                        var c = n.url;
                        fetch(c, o(this._headers, this._withCredentials))
                            .then(function (e) {
                                if (!(0, a.validateResponseStatus)(e.status))
                                    throw (0, a.createResponseStatusError)(e.status, c);
                                (r._reader = e.body.getReader()),
                                r._headersCapability.resolve();

                                var t = function t(t) {
                                        return e.headers.get(t);
                                    },
                                    n = (0, a.validateRangeRequestCapabilities)({
                                        getResponseHeader: t,
                                        isHttp: r._stream.isHttp,
                                        rangeChunkSize: r._rangeChunkSize,
                                        disableRange: r._disableRange
                                    }),
                                    s = n.allowRangeRequests,
                                    o = n.suggestedLength;

                                (r._isRangeSupported = s),
                                (r._contentLength = o || r._contentLength),
                                (r._filename = (0, a.extractFilenameFromHeader)(t)),
                                !r._isStreamingSupported &&
                                    r._isRangeSupported &&
                                    r.cancel(new i.AbortException("streaming is disabled"));
                            })
                            .catch(this._headersCapability.reject),
                            (this.onProgress = null);
                    }

                    return (
                        n(e, [{
                                key: "read",
                                value: function () {
                                    var e = this;
                                    return this._headersCapability.promise.then(function () {
                                        return e._reader.read().then(function (t) {
                                            var r = t.value,
                                                n = t.done;
                                            if (n)
                                                return Promise.resolve({
                                                    value: r,
                                                    done: n
                                                });
                                            (e._loaded += r.byteLength),
                                            e.onProgress &&
                                                e.onProgress({
                                                    loaded: e._loaded,
                                                    total: e._contentLength
                                                });
                                            var i = new Uint8Array(r).buffer;
                                            return Promise.resolve({
                                                value: i,
                                                done: !1
                                            });
                                        });
                                    });
                                }
                            },
                            {
                                key: "cancel",
                                value: function (e) {
                                    this._reader && this._reader.cancel(e);
                                }
                            },
                            {
                                key: "headersReady",
                                get: function () {
                                    return this._headersCapability.promise;
                                }
                            },
                            {
                                key: "filename",
                                get: function () {
                                    return this._filename;
                                }
                            },
                            {
                                key: "contentLength",
                                get: function () {
                                    return this._contentLength;
                                }
                            },
                            {
                                key: "isRangeSupported",
                                get: function () {
                                    return this._isRangeSupported;
                                }
                            },
                            {
                                key: "isStreamingSupported",
                                get: function () {
                                    return this._isStreamingSupported;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                c = (function () {
                    function e(t, r, n) {
                        var l = this;
                        s(this, e),
                            (this._stream = t),
                            (this._reader = null),
                            (this._loaded = 0);
                        var u = t.source;

                        for (var c in ((this._withCredentials = u.withCredentials),
                                (this._readCapability = (0, i.createPromiseCapability)()),
                                (this._isStreamingSupported = !u.disableStream),
                                (this._headers = new Headers()),
                                this._stream.httpHeaders)) {
                            var h = this._stream.httpHeaders[c];
                            void 0 !== h && this._headers.append(c, h);
                        }

                        var d = r + "-" + (n - 1);

                        this._headers.append("Range", "bytes=" + d);

                        var f = u.url;
                        fetch(f, o(this._headers, this._withCredentials)).then(function (
                                e
                            ) {
                                if (!(0, a.validateResponseStatus)(e.status))
                                    throw (0, a.createResponseStatusError)(e.status, f);
                                l._readCapability.resolve(), (l._reader = e.body.getReader());
                            }),
                            (this.onProgress = null);
                    }

                    return (
                        n(e, [{
                                key: "read",
                                value: function () {
                                    var e = this;
                                    return this._readCapability.promise.then(function () {
                                        return e._reader.read().then(function (t) {
                                            var r = t.value,
                                                n = t.done;
                                            if (n)
                                                return Promise.resolve({
                                                    value: r,
                                                    done: n
                                                });
                                            (e._loaded += r.byteLength),
                                            e.onProgress &&
                                                e.onProgress({
                                                    loaded: e._loaded
                                                });
                                            var i = new Uint8Array(r).buffer;
                                            return Promise.resolve({
                                                value: i,
                                                done: !1
                                            });
                                        });
                                    });
                                }
                            },
                            {
                                key: "cancel",
                                value: function (e) {
                                    this._reader && this._reader.cancel(e);
                                }
                            },
                            {
                                key: "isStreamingSupported",
                                get: function () {
                                    return this._isStreamingSupported;
                                }
                            }
                        ]),
                        e
                    );
                })();

            t.PDFFetchStream = l;
        },
        function (e, t, r) {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                (t.NetworkManager = t.PDFNetworkStream = void 0);
            var n,
                i = r(0),
                a = r(40),
                s = r(15),
                o =
                (n = s) && n.__esModule ?
                n :
                {
                    default: n
                };

            function l(e, t) {
                (this.url = e),
                (t = t || {}),
                (this.isHttp = /^https?:/i.test(e)),
                (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
                (this.withCredentials = t.withCredentials || !1),
                (this.getXhr =
                    t.getXhr ||
                    function () {
                        return new XMLHttpRequest();
                    }),
                (this.currXhrId = 0),
                (this.pendingRequests = Object.create(null)),
                (this.loadedRequests = Object.create(null));
            }

            function u(e) {
                var t = e.response;
                return "string" != typeof t ? t : (0, i.stringToBytes)(t).buffer;
            }

            var c = (function () {
                try {
                    var e = new XMLHttpRequest();
                    return (
                        e.open("GET", o.default.location.href),
                        (e.responseType = "moz-chunked-arraybuffer"),
                        "moz-chunked-arraybuffer" === e.responseType
                    );
                } catch (e) {
                    return !1;
                }
            })();

            function h(e) {
                (this._source = e),
                (this._manager = new l(e.url, {
                    httpHeaders: e.httpHeaders,
                    withCredentials: e.withCredentials
                })),
                (this._rangeChunkSize = e.rangeChunkSize),
                (this._fullRequestReader = null),
                (this._rangeRequestReaders = []);
            }

            function d(e, t) {
                this._manager = e;
                var r = {
                    onHeadersReceived: this._onHeadersReceived.bind(this),
                    onProgressiveData: t.disableStream ?
                        null :
                        this._onProgressiveData.bind(this),
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                };
                (this._url = t.url),
                (this._fullRequestId = e.requestFull(r)),
                (this._headersReceivedCapability = (0, i.createPromiseCapability)()),
                (this._disableRange = t.disableRange || !1),
                (this._contentLength = t.length),
                (this._rangeChunkSize = t.rangeChunkSize),
                this._rangeChunkSize ||
                    this._disableRange ||
                    (this._disableRange = !0),
                    (this._isStreamingSupported = !1),
                    (this._isRangeSupported = !1),
                    (this._cachedChunks = []),
                    (this._requests = []),
                    (this._done = !1),
                    (this._storedError = void 0),
                    (this._filename = null),
                    (this.onProgress = null);
            }

            function f(e, t, r) {
                this._manager = e;
                var n = {
                    onDone: this._onDone.bind(this),
                    onProgress: this._onProgress.bind(this)
                };
                (this._requestId = e.requestRange(t, r, n)),
                (this._requests = []),
                (this._queuedChunk = null),
                (this._done = !1),
                (this.onProgress = null),
                (this.onClosed = null);
            }

            (l.prototype = {
                requestRange: function (e, t, r) {
                    var n = {
                        begin: e,
                        end: t
                    };

                    for (var i in r) n[i] = r[i];

                    return this.request(n);
                },
                requestFull: function (e) {
                    return this.request(e);
                },
                request: function (e) {
                    var t = this.getXhr(),
                        r = this.currXhrId++,
                        n = (this.pendingRequests[r] = {
                            xhr: t
                        });

                    for (var i in (t.open("GET", this.url),
                            (t.withCredentials = this.withCredentials),
                            this.httpHeaders)) {
                        var a = this.httpHeaders[i];
                        void 0 !== a && t.setRequestHeader(i, a);
                    }

                    if (this.isHttp && "begin" in e && "end" in e) {
                        var s = e.begin + "-" + (e.end - 1);
                        t.setRequestHeader("Range", "bytes=" + s), (n.expectedStatus = 206);
                    } else n.expectedStatus = 200;

                    return (
                        c && !!e.onProgressiveData ?
                        ((t.responseType = "moz-chunked-arraybuffer"),
                            (n.onProgressiveData = e.onProgressiveData),
                            (n.mozChunked = !0)) :
                        (t.responseType = "arraybuffer"),
                        e.onError &&
                        (t.onerror = function (r) {
                            e.onError(t.status);
                        }),
                        (t.onreadystatechange = this.onStateChange.bind(this, r)),
                        (t.onprogress = this.onProgress.bind(this, r)),
                        (n.onHeadersReceived = e.onHeadersReceived),
                        (n.onDone = e.onDone),
                        (n.onError = e.onError),
                        (n.onProgress = e.onProgress),
                        t.send(null),
                        r
                    );
                },
                onProgress: function (e, t) {
                    var r = this.pendingRequests[e];

                    if (r) {
                        if (r.mozChunked) {
                            var n = u(r.xhr);
                            r.onProgressiveData(n);
                        }

                        var i = r.onProgress;
                        i && i(t);
                    }
                },
                onStateChange: function (e, t) {
                    var r = this.pendingRequests[e];

                    if (r) {
                        var n = r.xhr;
                        if (
                            (n.readyState >= 2 &&
                                r.onHeadersReceived &&
                                (r.onHeadersReceived(), delete r.onHeadersReceived),
                                4 === n.readyState && e in this.pendingRequests)
                        )
                            if (
                                (delete this.pendingRequests[e], 0 === n.status && this.isHttp)
                            )
                                r.onError && r.onError(n.status);
                            else {
                                var i = n.status || 200;

                                if (
                                    (200 === i && 206 === r.expectedStatus) ||
                                    i === r.expectedStatus
                                ) {
                                    this.loadedRequests[e] = !0;
                                    var a = u(n);

                                    if (206 === i) {
                                        var s = n.getResponseHeader("Content-Range"),
                                            o = /bytes (\d+)-(\d+)\/(\d+)/.exec(s),
                                            l = parseInt(o[1], 10);
                                        r.onDone({
                                            begin: l,
                                            chunk: a
                                        });
                                    } else
                                        r.onProgressiveData ?
                                        r.onDone(null) :
                                        a ?
                                        r.onDone({
                                            begin: 0,
                                            chunk: a
                                        }) :
                                        r.onError && r.onError(n.status);
                                } else r.onError && r.onError(n.status);
                            }
                    }
                },
                hasPendingRequests: function () {
                    for (var e in this.pendingRequests) return !0;

                    return !1;
                },
                getRequestXhr: function (e) {
                    return this.pendingRequests[e].xhr;
                },
                isStreamingRequest: function (e) {
                    return !!this.pendingRequests[e].onProgressiveData;
                },
                isPendingRequest: function (e) {
                    return e in this.pendingRequests;
                },
                isLoadedRequest: function (e) {
                    return e in this.loadedRequests;
                },
                abortAllRequests: function () {
                    for (var e in this.pendingRequests) this.abortRequest(0 | e);
                },
                abortRequest: function (e) {
                    var t = this.pendingRequests[e].xhr;
                    delete this.pendingRequests[e], t.abort();
                }
            }),
            (h.prototype = {
                _onRangeRequestReaderClosed: function (e) {
                    var t = this._rangeRequestReaders.indexOf(e);

                    t >= 0 && this._rangeRequestReaders.splice(t, 1);
                },
                getFullReader: function () {
                    return (
                        (0, i.assert)(!this._fullRequestReader),
                        (this._fullRequestReader = new d(this._manager, this._source)),
                        this._fullRequestReader
                    );
                },
                getRangeReader: function (e, t) {
                    var r = new f(this._manager, e, t);
                    return (
                        (r.onClosed = this._onRangeRequestReaderClosed.bind(this)),
                        this._rangeRequestReaders.push(r),
                        r
                    );
                },
                cancelAllRequests: function (e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e),
                        this._rangeRequestReaders.slice(0).forEach(function (t) {
                            t.cancel(e);
                        });
                }
            }),
            (d.prototype = {
                _onHeadersReceived: function () {
                    var e = this._fullRequestId,
                        t = this._manager.getRequestXhr(e),
                        r = function r(e) {
                            return t.getResponseHeader(e);
                        },
                        n = (0, a.validateRangeRequestCapabilities)({
                            getResponseHeader: r,
                            isHttp: this._manager.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange
                        }),
                        i = n.allowRangeRequests,
                        s = n.suggestedLength;

                    i && (this._isRangeSupported = !0),
                        (this._contentLength = s || this._contentLength),
                        (this._filename = (0, a.extractFilenameFromHeader)(r));
                    var o = this._manager;
                    o.isStreamingRequest(e) ?
                        (this._isStreamingSupported = !0) :
                        this._isRangeSupported && o.abortRequest(e),
                        this._headersReceivedCapability.resolve();
                },
                _onProgressiveData: function (e) {
                    this._requests.length > 0 ?
                        this._requests.shift().resolve({
                            value: e,
                            done: !1
                        }) :
                        this._cachedChunks.push(e);
                },
                _onDone: function (e) {
                    e && this._onProgressiveData(e.chunk),
                        (this._done = !0),
                        this._cachedChunks.length > 0 ||
                        (this._requests.forEach(function (e) {
                                e.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            }),
                            (this._requests = []));
                },
                _onError: function (e) {
                    var t = this._url,
                        r = (0, a.createResponseStatusError)(e, t);
                    (this._storedError = r),
                    this._headersReceivedCapability.reject(r),
                        this._requests.forEach(function (e) {
                            e.reject(r);
                        }),
                        (this._requests = []),
                        (this._cachedChunks = []);
                },
                _onProgress: function (e) {
                    this.onProgress &&
                        this.onProgress({
                            loaded: e.loaded,
                            total: e.lengthComputable ? e.total : this._contentLength
                        });
                },

                get filename() {
                    return this._filename;
                },

                get isRangeSupported() {
                    return this._isRangeSupported;
                },

                get isStreamingSupported() {
                    return this._isStreamingSupported;
                },

                get contentLength() {
                    return this._contentLength;
                },

                get headersReady() {
                    return this._headersReceivedCapability.promise;
                },

                read: function () {
                    if (this._storedError) return Promise.reject(this._storedError);

                    if (this._cachedChunks.length > 0) {
                        var e = this._cachedChunks.shift();

                        return Promise.resolve({
                            value: e,
                            done: !1
                        });
                    }

                    if (this._done)
                        return Promise.resolve({
                            value: void 0,
                            done: !0
                        });
                    var t = (0, i.createPromiseCapability)();
                    return this._requests.push(t), t.promise;
                },
                cancel: function (e) {
                    (this._done = !0),
                    this._headersReceivedCapability.reject(e),
                        this._requests.forEach(function (e) {
                            e.resolve({
                                value: void 0,
                                done: !0
                            });
                        }),
                        (this._requests = []),
                        this._manager.isPendingRequest(this._fullRequestId) &&
                        this._manager.abortRequest(this._fullRequestId),
                        (this._fullRequestReader = null);
                }
            }),
            (f.prototype = {
                _close: function () {
                    this.onClosed && this.onClosed(this);
                },
                _onDone: function (e) {
                    var t = e.chunk;
                    this._requests.length > 0 ?
                        this._requests.shift().resolve({
                            value: t,
                            done: !1
                        }) :
                        (this._queuedChunk = t);
                    (this._done = !0),
                    this._requests.forEach(function (e) {
                            e.resolve({
                                value: void 0,
                                done: !0
                            });
                        }),
                        (this._requests = []),
                        this._close();
                },
                _onProgress: function (e) {
                    !this.isStreamingSupported &&
                        this.onProgress &&
                        this.onProgress({
                            loaded: e.loaded
                        });
                },

                get isStreamingSupported() {
                    return !1;
                },

                read: function () {
                    if (null !== this._queuedChunk) {
                        var e = this._queuedChunk;
                        return (
                            (this._queuedChunk = null),
                            Promise.resolve({
                                value: e,
                                done: !1
                            })
                        );
                    }

                    if (this._done)
                        return Promise.resolve({
                            value: void 0,
                            done: !0
                        });
                    var t = (0, i.createPromiseCapability)();
                    return this._requests.push(t), t.promise;
                },
                cancel: function (e) {
                    (this._done = !0),
                    this._requests.forEach(function (e) {
                            e.resolve({
                                value: void 0,
                                done: !0
                            });
                        }),
                        (this._requests = []),
                        this._manager.isPendingRequest(this._requestId) &&
                        this._manager.abortRequest(this._requestId),
                        this._close();
                }
            }),
            (t.PDFNetworkStream = h),
            (t.NetworkManager = l);
        }
    ]);
});