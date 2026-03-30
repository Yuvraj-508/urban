import React,{useState} from "react";
import { useAppContext } from "../context/AppContext";
import { dummyProducts } from "../assets/asstes";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
function Cart() {
const [loading, setLoading] = useState(false);
  const { cartItems, setCartItems, updateCart, removeItem } = useAppContext();
  const navigate = useNavigate();
const [savedAddress, setSavedAddress] = useState(
  JSON.parse(localStorage.getItem("shippingAddress"))
);
  const getCartProducts = () => {
    let items = [];

    for (const id in cartItems) {
      const product = dummyProducts.find(p => p._id === id);

      for (const size in cartItems[id]) {
        for (const color in cartItems[id][size]) {

          items.push({
            product,
            size,
            color,
            quantity: cartItems[id][size][color]
          });

        }
      }
    }

    return items;
  };

  const cartProducts = getCartProducts();


  const getSubtotal = () => {

    let total = 0;

    cartProducts.forEach(item => {
      total += item.product.offerPrice * item.quantity;
    });

    return total;
  };

  const tax = getSubtotal() * 0.02;
  const total = getSubtotal() + tax;

  if(cartProducts.length === 0){
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <h2 className="text-3xl font-semibold">Your Cart is Empty</h2>
        <button
        onClick={()=>navigate("/all-products")}
        className="mt-5 px-6 py-3 bg-indigo-600 text-white rounded-lg"
        >
        Continue Shopping
        </button>
      </div>
    )
  }
  const deleteAddress = () => {
  localStorage.removeItem("shippingAddress");
  setSavedAddress(null);
};

const placeOrder = async () => {
setLoading(true);
  if (!savedAddress) {
   toast.error("Please add a shipping address.");
    navigate("/address");
    return;
  }

  // Format product list
  const items = cartProducts.map(item =>
    `${item.product.name} | Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}`
  ).join("\n");

  const orderText = `
🛒 *New UrbanKicks Order*

━━━━━━━━━━━━━━

👤 *Customer Details*
Name: ${savedAddress.firstName} ${savedAddress.lastName}
Phone: ${savedAddress.phone}

📍 *Shipping Address*
${savedAddress.street}
${savedAddress.city}, ${savedAddress.state}
${savedAddress.country} - ${savedAddress.zipCode}

━━━━━━━━━━━━━━

📦 *Ordered Items*
${items}

━━━━━━━━━━━━━━

💰 *Order Total:* ₹${total.toFixed(0)}


`;

  try {
    // Send email using Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "9b609585-2571-4097-9603-87e7295cc943",
        subject: "New Order - UrbanKicks",
        name: savedAddress.firstName + " " + savedAddress.lastName,
        phone: savedAddress.phone,
        message: orderText
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Order placed successfully! Opening WhatsApp...");
      setCartItems({});
    }

  } catch (error) {
    console.log(error);
  }

  // Open WhatsApp
  window.open(
    `https://wa.me/916280276965?text=${encodeURIComponent(orderText)}`
  );
 setLoading(false);
};

  return (

<div className="max-w-7xl mx-auto px-6 py-12">

<h1 className="text-3xl font-semibold mb-8">
Shopping Cart
<span className="text-indigo-600 ml-2">
{cartProducts.length} Items
</span>
</h1>

<div className="grid lg:grid-cols-3 gap-10">

{/* CART ITEMS */}

<div className="lg:col-span-2">

<div className="border rounded-xl overflow-hidden">

{/* HEADER */}

<div className="grid grid-cols-4 p-4 text-sm font-semibold bg-gray-50 border-b">

<p className="col-span-2">Product Details</p>
<p>Subtotal</p>
<p className="text-center">Action</p>

</div>

{/* PRODUCTS */}

{cartProducts.map((item,index)=>(

<div
key={index}
className="grid grid-cols-4 p-5 items-center border-b hover:bg-gray-50 transition"
>

{/* PRODUCT */}

<div className="col-span-2 flex gap-4 items-center">

<img
src={item.product.image[0]}
className="w-20 h-20 bg-gray-100 rounded-lg object-contain"
/>

<div>

<p className="font-semibold">
{item.product.name}
</p>

<p className="text-sm text-gray-500">
Size: {item.size} | Color: {item.color}
</p>

{/* QTY */}

<select
value={item.quantity}
onChange={(e)=>updateCart(
item.product._id,
item.size,
item.color,
Number(e.target.value)
)}
className="mt-2 border rounded-md px-2 py-1 text-sm"
>

{[1,2,3,4,5].map(num=>(
<option key={num} value={num}>
Qty: {num}
</option>
))}

</select>

</div>

</div>

{/* SUBTOTAL */}

<p className="font-medium text-indigo-600">

₹{item.product.offerPrice * item.quantity}

</p>

{/* REMOVE */}

<div className="flex justify-center">

<button
onClick={()=>removeItem(
item.product._id,
item.size,
item.color
)}
className="text-red-500 hover:scale-110 transition"
>
<Trash2 size={18}/>
</button>

</div>

</div>

))}

</div>

<button
onClick={()=>navigate("/all-products")}
className="mt-5 text-indigo-600 text-sm"
>
← Continue Shopping
</button>

</div>

{/* ORDER SUMMARY */}

{/* ORDER SUMMARY */}

<div className="bg-white border rounded-2xl p-6 shadow-lg sticky top-20 lg:w-[420px]">

<h2 className="text-xl font-semibold mb-4">
Order Summary
</h2>

{/* Coupon Section */}

<div className="mb-3">

<p className="text-sm font-medium mb-1">
Apply Coupon
</p>

<div className="flex gap-2">

<input
placeholder="Enter coupon code"
className="flex-1 border rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
/>

<button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs hover:bg-black transition">
Apply
</button>

</div>

</div>

<hr className="mb-3"/>

{/* Address */}

<div className="mb-3">

  <p className="text-sm font-medium mb-1">
    Delivery Address
  </p>

 {savedAddress ? (

  <div className="text-xs text-gray-600 space-y-1 border rounded-lg p-3 bg-gray-50">

    <p className="font-medium">
      {savedAddress.firstName} {savedAddress.lastName}
    </p>

    <p>{savedAddress.street}</p>

    <p>
      {savedAddress.city}, {savedAddress.state}
    </p>

    <p>
      {savedAddress.country} - {savedAddress.zipCode}
    </p>

    <p>📞 {savedAddress.phone}</p>

    <div className="flex gap-3 mt-2">

      {/* Change Address */}
      <button
        onClick={() => navigate("/address")}
        className="text-indigo-600 text-xs hover:underline"
      >
        Change
      </button>

      {/* Delete Address */}
      <button
        onClick={deleteAddress}
        className="text-red-500 text-xs hover:underline"
      >
        Delete
      </button>

    </div>

  </div>

) : (

  <button
    onClick={() => navigate("/address")}
    className="text-xs px-3 py-1.5 border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
  >
    + Add Address
  </button>

)}

</div>

{/* Payment */}

<div className="mb-3">

<p className="text-sm font-medium mb-1">
Payment Method
</p>

<select className="w-full border rounded-md px-3 py-1.5 text-sm">

<option>Cash On Delivery</option>
<option>UPI</option>
<option>Credit Card</option>

</select>

</div>

<hr className="mb-3"/>

{/* Price Details */}

<div className="space-y-2 text-sm">

<div className="flex justify-between">
<span>Price</span>
<span>₹{getSubtotal()}</span>
</div>

<div className="flex justify-between">
<span>Shipping</span>
<span className="text-green-600">Free</span>
</div>


<div className="flex justify-between text-green-600">
<span>Discount</span>
<span>-₹0</span>
</div>

</div>

<hr className="my-3"/>

{/* Total */}

<div className="flex justify-between text-lg font-semibold">

<span>Total</span>
<span>₹{total.toFixed(0)}</span>

</div>

<button
  onClick={placeOrder}
  disabled={loading}
  className="mt-4 w-full py-3 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:scale-105 transition flex items-center justify-center gap-2 disabled:opacity-70"
>
  {loading ? (
    <>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Placing Order...
    </>
  ) : (
    "Place Order"
  )}
</button>

<p className="text-xs text-gray-500 mt-2 text-center">
  Order confirmation will be done through <span className="text-green-600 font-medium">WhatsApp</span>.
</p>

</div>

</div>

</div>

  );
}

export default Cart;