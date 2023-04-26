import React, { useState } from "react";
import "./AddProduct.css";
import TextField from '@mui/material/TextField';


const INITIAL_PRODUCT = {
  title: "",
  manufacturer: "",
  realPrice: null,
  discountedPrice: "",
  quantity: null,
  image: "",
  categories: "",
  description: ""
}

function AddProduct() {
  const [productObj, setProductObj] = useState(INITIAL_PRODUCT)

  return (
    <div className="add_product">
          <div class="text-box">
            <TextField
              id="outlined-basic"
              label="Product name"
              variant="outlined"
              size="small"
            />
          </div>
          <div class="text-box">
            <TextField
              id="outlined-basic"
              label="Manufacturer"
              variant="outlined"
              size="small"
            />
          </div>
          <div class="text-box">
            <TextField

              id="outlined-basic"
              label="Price"
              variant="outlined"
              size="small"
            />
          </div>
          <div class="text-box">
            <TextField

              id="outlined-basic"
              label="Discounted Price"
              variant="outlined"
              size="small"
            />
          </div>


          <div class="text-box">
            <TextField

              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              size="small"
            />
          </div>

          <div class="text-box">
            <TextField
              id="outlined-basic"
              label="Image"
              variant="outlined"
              size="small"

            />
          </div>

          <div class="text-box">
            <TextField

              id="outlined-basic"
              label="Category"
              variant="outlined"
              size="small"
              />
             
          </div>
          <div class="text-box big-text">
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              size="big"
               />
          </div>
    </div>
  );
}

export default AddProduct