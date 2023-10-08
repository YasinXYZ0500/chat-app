getProducts
// Api

state [Product] (Store.js)
// All Api from fakeStore
// [همه "ای‌پی‌آی" ها بعد از مانتینگ، ست(اضافه) میشن داخل [استیت پروداکت

[setProducts] (ProductContextProvider.js)
// Add(Set) Data(API) from (fakeStore.com) to [Product] after Mounting

1- ProductsContext (ProductContextProvider.js)
// provide api from [products] to other
// پروداکت کانتکس "ای‌پی‌آی" های گرفته شده‌ای که داخل [استیتِ پروداکت] هستن فراهم میکنه برای بقیه فایل‌ها

2- products (Store.js)
// useContext(ProductsContext)
// متغیر پروداکتس، "ای‌پی‌آی" های که توسط (پروداکتس کانتکس) فراهم شده رو میگیره و میریزه داخل خودش

3- productData (Store.js, Product.js)
products.map(product => <Product productData={product}/>)
// این "پروداکت-دیتا" میشه => (پراپسِ کامپوننت پروداکتِ) که همه‌ی اطلاعات محصول که از متغیر پروداکتس اومده داخلشه

CartContext (CartContextProvider.js)
// provide state and setState {{state, dispatch}}

[state, dispatch] (CartContextProvider.js)
// All actions Add, Decrease, Remove, Clear

[state, dispatch] (Product.js)
// {استیتی که داخل کامپوننت "کارت کانتکس.پروایدر" و دادیمش به ولیو = {کارت.کانتکس
// و داخل "کامپوننت پروداکت" داریم ازش استفاده میکنیم

