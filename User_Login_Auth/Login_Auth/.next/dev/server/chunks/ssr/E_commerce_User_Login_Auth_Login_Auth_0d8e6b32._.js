module.exports = [
"[project]/E_commerce/User_Login_Auth/Login_Auth/data/products.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProductCard({ product }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Helper to safely get cart
    const getCart = ()=>{
        try {
            const stored = localStorage.getItem("cart");
            return stored ? JSON.parse(stored) : [];
        } catch  {
            return [];
        }
    };
    // Load cart on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cart = getCart();
        const item = cart.find((p)=>p.id === product.id);
        if (item) {
            setQty(item.qty);
        }
    }, [
        product.id
    ]);
    const updateCart = (newQty)=>{
        let cart = getCart();
        const index = cart.findIndex((p)=>p.id === product.id);
        if (index >= 0) {
            cart[index].qty = newQty;
        } else if (newQty > 0) {
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
        const newQty = Math.max(qty - 1, 0);
        setQty(newQty);
        updateCart(newQty);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: product.image || "/products/placeholder.jpg",
                alt: product.name,
                width: 400,
                height: 300,
                className: "rounded"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-3 font-semibold",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-600 font-bold",
                children: [
                    "₹",
                    product.price
                ]
            }, void 0, true, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            qty === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: increase,
                className: "mt-3 bg-yellow-500 text-black w-full py-2 rounded font-semibold",
                children: "Add to Cart"
            }, void 0, false, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 117,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mt-3 bg-yellow-500 text-black py-2 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: decrease,
                        className: "text-lg font-bold",
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: qty
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: increase,
                        className: "text-lg font-bold",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/E_commerce/User_Login_Auth/Login_Auth/app/products/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$react$2d$window$2f$dist$2f$react$2d$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/node_modules/react-window/dist/react-window.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/data/products.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/E_commerce/User_Login_Auth/Login_Auth/components/ProductCard.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const COLUMN_COUNT = 4;
function Cell({ columnIndex, rowIndex, style }) {
    const index = rowIndex * COLUMN_COUNT + columnIndex;
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"][index];
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style,
        className: "p-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            product: product
        }, void 0, false, {
            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/products/page.js",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/products/page.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function Products() {
    const rowCount = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].length / COLUMN_COUNT);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-24 flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$E_commerce$2f$User_Login_Auth$2f$Login_Auth$2f$node_modules$2f$react$2d$window$2f$dist$2f$react$2d$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
            columnCount: COLUMN_COUNT,
            columnWidth: 250,
            height: 800,
            rowCount: rowCount,
            rowHeight: 340,
            width: 1000,
            children: Cell
        }, void 0, false, {
            fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/products/page.js",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/E_commerce/User_Login_Auth/Login_Auth/app/products/page.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=E_commerce_User_Login_Auth_Login_Auth_0d8e6b32._.js.map