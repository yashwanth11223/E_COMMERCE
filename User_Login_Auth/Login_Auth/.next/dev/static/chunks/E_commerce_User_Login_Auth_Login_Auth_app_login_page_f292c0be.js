(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Login() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirect: false
        });
        setLoading(false);
        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-xl p-8 w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center text-gray-800 mb-6",
                    children: "Login to your account"
                }, void 0, false, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Enter email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            className: "w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Enter password",
                            value: password,
                            autoComplete: "current-password",
                            onChange: (e)=>setPassword(e.target.value),
                            className: "w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition",
                            children: loading ? "Logging in..." : "Login"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-4 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Don't have an account?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    className: "text-indigo-600 font-semibold",
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/forgot-password",
                                className: "text-indigo-600",
                                children: "Forgot Password?"
                            }, void 0, false, {
                                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 my-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500",
                            children: "OR"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("github", {
                                    callbackUrl: "/"
                                }),
                            className: "w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                "Continue with GitHub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google", {
                                    callbackUrl: "/"
                                }),
                            className: "w-full flex items-center justify-center gap-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGoogle"], {}, void 0, false, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                "Continue with Google"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/login/page.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Login, "lBmUQaos6NCDl4VLlQfEBEKfBb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=E_commerce_User_Login_Auth_Login_Auth_app_login_page_f292c0be.js.map