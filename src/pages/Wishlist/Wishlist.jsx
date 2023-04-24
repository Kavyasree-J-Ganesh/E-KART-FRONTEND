import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from "react-router-dom";
import './Wishlist.css'
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import download from '../../assest/download.jpg'



function Wishlist() {

    const [product, setProduct] = useState(null);

    return (
        <div>
            <Header />
            <div className="cartMainBox">

                <div className="page-dir" style={{ color: "#9D9D9D" }}>
                    Home /
                </div>
                <div className="page-dir"> My Wishlist</div>
            </div>
            <div className="mainMyCArtt">

                <div className="HeadingOfMyCartog">
                    <div className="MycartLeftHeading">
                        My Wishlist
                        {/* {itemInpage.length ? `(${itemInpage.length})` : ""} */}
                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iphone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashank{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iophone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashankas{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iophone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashankas{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iophone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashankas{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iophone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashankas{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>
                <div className="productSectionOfmyCart">
                    {/* {itemInpage.map((item) => (/ */}
                    <div className="productsArrayMyArt">
                        <div className="imgInMyCartOfproduct">
                            {/* <img src={image1} height={"85px"} width={"60px"}></img> */}
                            <img src={download} height={"80px"} width={"65px"}></img>
                        </div>
                        <div className="productrightcontntmtcrt">
                            <div className="titleMyproductcrt">
                                {/* {item.productName} */}
                                iophone
                                <Button
                                    onClick={() => {
                                    }}
                                    variant={"text"}
                                >
                                    <DeleteIcon style={{ color: "#999e9e" }} />
                                </Button>
                            </div>
                            <div
                                className="author"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "25px",
                                    marginLeft: "auto",
                                }}
                            >
                                {/* by {item.manufacture}{" "} */}
                                by Shashankas{" "}
                            </div>

                            {/* <div className="price111cart">RS {item.price}</div> */}
                            <div className="price111cart">RS 300</div>
                        </div>
                    </div>
                    {/* ))} */}

                    <div className="butnnsLasplcor">

                    </div>
                </div>

            </div>

        </div>

    )
}


export default Wishlist
