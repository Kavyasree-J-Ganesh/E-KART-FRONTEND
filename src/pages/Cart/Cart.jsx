// import { Link } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import "./Cart.css";
// import { addToCart, getCart, removeFromCart } from "../../services/cartService";

// const Cart = (props) => {

//     async function getCartItems() {
//         try {
//             const cart = await getCart();
//             props.dispatch({ type: "SET_CART", payload: cart.data.data })
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const addToCartList = async (id) => {
//         try {
//             await addToCart(id);
//             getCartItems();
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const removeFromCartList = async (id) => {
//         try {
//             await removeFromCart(id);
//             getCartItems();
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return (
//         <div className="prodct" >
//             <Header />
//             <p style={{ padding: "20px 12% 0px 12%", fontSize: "12px", color: "#0A0102", fontWeight: "600" }}>
//                 <Link to="/dashboard" className="home_nav">Home</Link>/Cart
//             </p>
//             {props.cart && <div className="cart">
//                 {props.cart.books.map(product => (
//                     <div className="cart_item">
//                         <div className="cart_item_image">
//                             <img style={{ width: "4rem" }} src="/image2.png" alt="product" />
//                         </div>
//                         <div className="cart_item_desc">
//                             <h6 className="cart_item_heading">{product.productName}</h6>
//                             <div className="cart_item_author">by {product.author}</div>
//                             <div class="cart_item_price">
//                                 <span className="cart_item_price">{`Rs. ${product.price}`}</span>
//                                 <span className="cart_item_discount_price">{`Rs. 500`}</span>
//                             </div>
//                             <div className="cart_add_or_remove">
//                                 <button className="cart_add" onClick={() => addToCartList(product.productID)}>+</button>
//                                 <div className="cart_count">{product.quantity}</div>
//                                 <button className="cart_remove" onClick={() => removeFromCartList(product.productID)}>-</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="cart_place">
//                     <button className="cart_place_order">
//                         PLACE ORDER
//                     </button>
//                 </div>
//             </div>}
//         </div>)
// }



// export default Cart;