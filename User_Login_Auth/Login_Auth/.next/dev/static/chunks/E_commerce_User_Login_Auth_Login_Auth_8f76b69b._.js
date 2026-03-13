(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/E_commerce/User_Login_Auth/Login_Auth/data/products.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const baseProducts = [
    {
        name: "Laptop",
        price: 60000,
        img: "laptop"
    },
    {
        name: "Headphones",
        price: 2000,
        img: "headphones"
    },
    {
        name: "Smart Watch",
        price: 5000,
        img: "smartwatch"
    },
    {
        name: "Gaming Mouse",
        price: 1500,
        img: "mouse"
    },
    {
        name: "Bluetooth Speaker",
        price: 3000,
        img: "speaker"
    },
    {
        name: "Mechanical Keyboard",
        price: 4500,
        img: "keyboard"
    },
    {
        name: "4K Monitor",
        price: 25000,
        img: "monitor"
    },
    {
        name: "Tablet",
        price: 20000,
        img: "tablet"
    },
    {
        name: "Wireless Earbuds",
        price: 3500,
        img: "earbuds"
    },
    {
        name: "External SSD",
        price: 7000,
        img: "ssd"
    }
];
let id = 1;
const products = Array.from({
    length: 100
}).map((_, index)=>{
    const item = baseProducts[index % baseProducts.length];
    const priceVariation = Math.floor(Math.random() * 5000);
    const price = item.price + priceVariation;
    const offer = Math.random() > 0.5 ? price - Math.floor(price * 0.15) : null;
    return {
        id: id++,
        name: `${item.name} ${index + 1}`,
        price: price,
        offer: offer,
        image: `https://picsum.photos/seed/${index}/400/400`,
        description: `High quality ${item.name.toLowerCase()}`
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductCard({ product }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCard.useEffect": ()=>{
            let cart = [];
            try {
                const stored = localStorage.getItem("cart");
                cart = stored ? JSON.parse(stored) : [];
            } catch  {
                cart = [];
            }
            const item = cart.find({
                "ProductCard.useEffect.item": (p)=>p.id === product.id
            }["ProductCard.useEffect.item"]);
            if (item) {
                setQty(item.qty);
            }
        }
    }["ProductCard.useEffect"], [
        product.id
    ]);
    const updateCart = (newQty)=>{
        let cart = [];
        try {
            const stored = localStorage.getItem("cart");
            cart = stored ? JSON.parse(stored) : [];
        } catch  {
            cart = [];
        }
        const index = cart.findIndex((p)=>p.id === product.id);
        if (index >= 0) {
            cart[index].qty = newQty;
        } else {
            cart.push({
                ...product,
                qty: newQty
            });
        }
        if (newQty === 0) {
            cart = cart.filter((p)=>p.id !== product.id);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };
    const increase = ()=>{
        if (!session) {
            alert("Please sign in to add items to cart");
            router.push("/login");
            return;
        }
        const newQty = qty + 1;
        setQty(newQty);
        updateCart(newQty);
    };
    const decrease = ()=>{
        const newQty = qty - 1;
        setQty(newQty);
        updateCart(newQty);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow rounded-lg p-4 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: product.image,
                alt: product.name,
                width: 400,
                height: 300,
                className: "rounded"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-3 font-semibold",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-600 font-bold",
                children: [
                    "₹",
                    product.price
                ]
            }, void 0, true, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            qty === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: increase,
                className: "mt-3 bg-yellow-500 text-black w-full py-2 rounded font-semibold",
                children: "Add to Cart"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 114,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mt-3 bg-yellow-500 text-black py-2 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: decrease,
                        className: "text-lg font-bold",
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: qty
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: increase,
                        className: "text-lg font-bold",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "sVrYL3ajeetCVISYRBEnt3JQkbA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/data/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const offers = __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.offer);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchEmployees = {
                "Home.useEffect.fetchEmployees": async ()=>{
                    try {
                        const res = await fetch("/api/employees");
                        if (!res.ok) return;
                        const data = await res.json();
                        setEmployees(data);
                        const uniqueDepartments = new Set(data.map({
                            "Home.useEffect.fetchEmployees": (emp)=>emp.department
                        }["Home.useEffect.fetchEmployees"]).filter(Boolean));
                        setDepartments(uniqueDepartments.size);
                    } catch (error) {
                        console.error(error);
                    }
                }
            }["Home.useEffect.fetchEmployees"];
            fetchEmployees();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-24 max-w-0xl mx-auto px-6 bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-lg mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold",
                        children: "Big Sale Today"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                        lineNumber: 53,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2",
                        children: "Best deals on electronics"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                        lineNumber: 57,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                lineNumber: 51,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Current Offers"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                lineNumber: 66,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10",
                children: offers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: p
                    }, p.id, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                        lineNumber: 73,
                        columnNumber: 1
                    }, this))
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                lineNumber: 70,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Featured Products"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                lineNumber: 81,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 4).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: p
                    }, p.id, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                        lineNumber: 88,
                        columnNumber: 1
                    }, this))
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
                lineNumber: 85,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/page.js",
        lineNumber: 47,
        columnNumber: 3
    }, this);
}
_s(Home, "MNg5Q+VCOU5iIxWiIl6QB+EIsE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=E_commerce_User_Login_Auth_Login_Auth_8f76b69b._.js.map