import React, { useState } from "react";
import "./AddProduct.css";
import TextField from '@mui/material/TextField';
import { toaster } from "../../utils/toast";
import { postProduct } from "../../Services/ProductService";


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

  const cancelAddProduct = ()=>{
    props.close();
    setProductObj(INITIAL_PRODUCT)
  }

  const addProduct = async()=>{
    let isValid = true;
    Object.keys(productObj).forEach(key => {
      if(!productObj[key] || productObj[key] == ""){
       isValid=false;
      }
    });

    if(!isValid){
      toaster("error", "All fields are mandatory")
      return
    }

    try{
       const result = await postProduct(productObj);
       toaster("info", "Product added successfully")
       setProductObj(INITIAL_PRODUCT)
       props.close()
    }catch(error){
      toaster("error", error.message)
    }
  }

  return (
    <div className="add_product">
      <div className="add_products_fields">
        <div class="text-box">
          <TextField
            id="outlined-basic"
            onChange={(event)=> setProductObj(prev=> ({...prev, title: event.target.value}))}
            label="Product name"
            variant="outlined"
            size="small"
            value={productObj.title}
          />
        </div>
        <div class="text-box">
          <TextField
            id="outlined-basic"
            label="Manufacturer"
            onChange={(event)=> setProductObj(prev=> ({...prev, manufacturer: event.target.value}))}
            variant="outlined"
            size="small"
            value={productObj.manufacturer}
          />
        </div>
        <div class="text-box">
          <TextField
            id="outlined-basic"
            onChange={(event)=> setProductObj(prev=> ({...prev, realPrice: event.target.value, buyprice: event.target.value}))}
            label="Price"
            variant="outlined"
            size="small"
            value={productObj.realPrice}
          />
        </div>
        <div class="text-box">
          <TextField
            onChange={(event)=> setProductObj(prev=> ({...prev, discountedPrice: event.target.value}))}
            id="outlined-basic"
            label="Discounted Price"
            variant="outlined"
            size="small"
            value={productObj.discountedPrice}
          />
        </div>


        <div class="text-box">
          <TextField
            onChange={(event)=> setProductObj(prev=> ({...prev, quantity: event.target.value}))}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            size="small"
            value={productObj.quantity}
          />
        </div>

        <div class="text-box">
          <TextField
            id="outlined-basic"
            onChange={(event)=> setProductObj(prev=> ({...prev, image: event.target.value}))}
            label="Image"
            variant="outlined"
            size="small"
            value={productObj.image}
          />
        </div>

        <div class="text-box">
          <TextField
            onChange={(event)=> setProductObj(prev=> ({...prev, category: event.target.value}))}
            id="outlined-basic"
            label="Category"
            variant="outlined"
            size="small"
            value={productObj.category}
          />

        </div>
        <div class="text-box big-text">
          <TextField
            onChange={(event)=> setProductObj(prev=> ({...prev, description: event.target.value}))}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="big"
            value={productObj.description}
          />
        </div>
      </div>
      <div className="add_products_footer">
        <button className="button_info" onClick={addProduct}>Create</button>
        <button className="button_cancel" onClick={cancelAddProduct}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProduct