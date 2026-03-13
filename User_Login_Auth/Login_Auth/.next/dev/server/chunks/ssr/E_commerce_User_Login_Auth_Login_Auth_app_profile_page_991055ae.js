module.exports = [
"[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function Profile() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-28 text-center text-gray-600",
            children: "Loading profile..."
        }, void 0, false, {
            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
            lineNumber: 11,
            columnNumber: 7
        }, this);
    }
    const name = session?.user?.name ?? "";
    const email = session?.user?.email ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100 flex justify-center items-start pt-28 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-indigo-500 to-purple-600 h-36 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 transform -translate-x-1/2 top-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg text-3xl font-bold text-indigo-600",
                            children: name ? name.charAt(0).toUpperCase() : "U"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-20 pb-10 px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: name || "User"
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mb-6",
                            children: email
                        }, void 0, false, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Account Type"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-lg",
                                            children: "Standard User"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Account Status"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-lg text-green-600",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Member Since"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-lg",
                                            children: "2026"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Employees Managed"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-lg",
                                            children: "--"
                                        }, void 0, false, {
                                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/profile/page.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=E_commerce_User_Login_Auth_Login_Auth_app_profile_page_991055ae.js.map