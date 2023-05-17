import React, { useState } from "react";
import "./AddProduct.css";
import TextField from '@mui/material/TextField';
import { toaster } from "../../utils/toast";
import { deleteProduct, editProduct, getProducts, postProduct } from "../../Services/ProductService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const INITIAL_PRODUCT = {
  title: "",
  manufacturer: "",
  realPrice: 0,
  discountedPrice: "",
  quantity: 0,
  image: "",
  category: "",
  description: "",
  buyprice: 0
}

function AddProduct(props) {
  const [productObj, setProductObj] = useState(INITIAL_PRODUCT)
  const dispatch = useDispatch();
  const product = useSelector(state=> state.product)

  const cancelAddProduct = () => {
    props.close();
    setProductObj(INITIAL_PRODUCT)
  }

  useEffect(() => {
    if(props.product){
      setProductObj({
        title: props.product.title,
        manufacturer: props.product.manufacturer,
        realPrice: props.product.realPrice,
        discountedPrice: props.product.discountedPrice,
        quantity: props.product.quantity,
        image: props.product.image,
        category: props.product.category,
        description: props.product.description,
        buyprice: props.product.buyprice
      })
    }
    
  }, [props.product])

  const addProduct = async () => {
    let isValid = true;
    Object.keys(productObj).forEach(key => {
      if (!productObj[key] || productObj[key] == "") {
        isValid = false;
      }
    });

    if (!isValid) {
      toaster("error", "All fields are mandatory")
      return
    }

    try {
      const result = props.isNew ? await postProduct(productObj) : await editProduct(props.product._id, productObj);
      toaster("info", props.isNew ? "Product added successfully" : "Product updated successfully")
      setProductObj(INITIAL_PRODUCT)
      getProductList();
      props.close()
    } catch (error) {
      toaster("error", error.message)
    }
  }

  const removeProduct = async()=>{
    try {
      const result = await deleteProduct(props.product._id)
      toaster("info","Product removed ccessfully")
      setProductObj(INITIAL_PRODUCT)
      getProductList();
      props.close()
    } catch (error) {
      toaster("error", error.message)
    }
  }

  async function getProductList() {
    try {
        const products = await getProducts(product.selectedCategory,"");
        dispatch({type:"SET_PRODUCTS", payload: products.data})
    } catch (e) {
        console.log(e)
    }
}

  return (
    <div className="add_product">
      <div className="add_products_fields">
        <div className="text-box">
          <TextField
            id="title"
            onChange={(event) => setProductObj(prev => ({ ...prev, title: event.target.value }))}
            label="Product name"
            variant="outlined"
            size="small"
            value={productObj.title}
          />
        </div>
        <div className="text-box">
          <TextField
            id="Manufacturer"
            label="Manufacturer"
            onChange={(event) => setProductObj(prev => ({ ...prev, manufacturer: event.target.value }))}
            variant="outlined"
            size="small"
            value={productObj.manufacturer}
          />
        </div>
        <div className="text-box">
          <TextField
            id="Price"
            onChange={(event) => setProductObj(prev => ({ ...prev, realPrice: event.target.value, buyprice: event.target.value }))}
            label="Price"
            variant="outlined"
            size="small"
            value={productObj.realPrice}
          />
        </div>
        <div className="text-box">
          <TextField
            onChange={(event) => setProductObj(prev => ({ ...prev, discountedPrice: event.target.value }))}
            id="discounted_price"
            label="Discounted Price"
            variant="outlined"
            size="small"
            value={productObj.discountedPrice}
          />
        </div>


        <div className="text-box">
          <TextField
            onChange={(event) => setProductObj(prev => ({ ...prev, quantity: event.target.value }))}
            id="quantity"
            label="Quantity"
            variant="outlined"
            size="small"
            value={productObj.quantity}
          />
        </div>

        <div className="text-box">
          <TextField
            id="image"
            onChange={(event) => setProductObj(prev => ({ ...prev, image: event.target.value }))}
            label="Image"
            variant="outlined"
            size="small"
            value={productObj.image}
          />
        </div>

        <div className="text-box">
          <TextField
            onChange={(event) => setProductObj(prev => ({ ...prev, category: event.target.value }))}
            id="category"
            label="Category"
            variant="outlined"
            size="small"
            value={productObj.category}
          />

        </div>
        <div className="text-box big-text">
          <TextField
            onChange={(event) => setProductObj(prev => ({ ...prev, description: event.target.value }))}
            id="description"
            label="Description"
            variant="outlined"
            size="big"
            value={productObj.description}
          />
        </div>
      </div>
      <div className="add_products_footer">
        <button className="button_info" onClick={removeProduct}>Remove</button>
        <button className="button_info" onClick={addProduct}>{props.isNew ? "Create" : "Update"}</button>
        <button className="button_cancel" onClick={cancelAddProduct}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProduct