import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import download from '../../assest/download.jpg'
import { Button } from "@mui/material";
import { TextField, TextareaAutosize } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";



function Cart1() {




    const [state1, setState1] = useState({
        // bookDataInCart: [],
        // realDta: [],
        condition: true,
    });

    const placeOrderClick = (value) => {
        setState1((prev) => ({
            ...prev,
            AddressDeatilsVal: value,
            AddressSetUpsVal: !value,
        }));
    };

    const chnageState = () => {
        placeOrderClick(false);
        setState1((prev) => ({
            ...prev,
            condition: false,
        }));
    };

    const clickOnContinue = (value) => {
        // handleSubmit();
        setState1((prev) => ({
            ...prev,
            orderSum: value,
            OrderSumUnit: !value,
        }));
    };

    return (
        <div>
            <Header />
            <div className="cartMainBox">
                <div className="cartHeadNames">
                    <div className="page-dir" style={{ color: "#9D9D9D" }}>
                        {" "}
                        Home /&nbsp;
                    </div>
                    <div className="page-dir"> My Cart</div>
                </div>
                <div className="mainMyCArtt">

                    <div className="HeadingOfMyCartog">
                        <div className="MycartLeftHeading">
                            My Cart
                            {/* {product.length ? `(${product.length})` : ""} */}
                        </div>
                    </div>
                    {/* headings */}
                    <div className="productSectionOfmyCart">
                        {/* {product.map((item) => ( */}
                        <div className="productsArrayMyArt">
                            <div className="imgInMyCartOfproduct">
                                <img src={download} height={"85px"} width={"60px"}></img>
                            </div>
                            <div className="productrightcontntmtcrt">
                                {/* <div className="titleMyproductcrt">{item.productName}</div> */}
                                <div className="titleMyproductcrt">Shashank</div>
                                <div
                                    className="author"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: "25px",
                                        marginLeft: "auto",
                                    }}
                                >
                                    by Shashank
                                    {/* {item.author}{" "} */}
                                </div>

                                {/* <div className="price111cart">RS {item.price}</div> */}
                                <div className="price111cart">RS 100</div>
                                <div className="buttonOperationsMycrt">
                                    {/* {console.log("eeeexxxx", item)} */}
                                    <RemoveCircleOutlineIcon
                                        // onClick={() => reduce(item.productId, item)}
                                        sx={{ height: "24px" }}
                                    />
                                    {/* <div className="counterFormycrtt">{item.quantity}</div> */}
                                    <div className="counterFormycrtt">5</div>
                                    <AddCircleOutlineIcon
                                        // onClick={() => increment(item.productId, item)}
                                        sx={{ height: "24px" }}
                                    />
                                    <Button
                                        onClick={() => {
                                            // reset(item.productId, item);
                                        }}
                                        variant={"text"}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* ))} */}

                        <div className="butnnsLasplcor">
                            {state1.condition && (
                                <Button
                                    onClick={() => {
                                        chnageState();
                                    }}
                                    className="butnplceOrder"
                                    size="small"
                                    variant="contained"
                                    style={{
                                        borderRadius: "2px",
                                    }}
                                >
                                    PLACE ORDER
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                {state1.AddressDeatilsVal && (
                    <div className="adbokDeatils">
                        <div style={{ marginLeft: "40px" }}>Address Details</div>
                    </div>
                )}
                {state1.AddressSetUpsVal && (
                    <div className="addrsetUpgg">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div> Customer Details</div>
                            <div className="tittleBAr">Add new Address</div>
                        </div>

                        <div className="fulNAameaddress">
                            <div
                                style={{
                                    width: "48%",
                                }}
                            >
                                <h3 className="field-label">Full Name</h3>
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    // onChange={handleEmail}
                                    size="small"
                                // onChange={handleFullNameChange}
                                // value={fullName}
                                // error={regx.FullnameError}
                                // helperText={regx.FullnameHelper}
                                />
                            </div>
                            <div
                                style={{
                                    width: "48%",
                                }}
                            >
                                <h3 className="field-label">Mobile Number</h3>
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    // onChange={handleEmail}
                                    size="small"
                                // onChange={handleMobileNumberChange}
                                // value={mobileNumber}
                                // error={regx.PhoneError}
                                // helperText={regx.PhoneHelper}
                                />
                            </div>
                        </div>
                        <div
                            className="fulNAameaddress"
                            style={{ marginTop: "50px", marginBottom: "30px" }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                }}
                            >
                                <h3 className="field-label">Address</h3>
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    // onChange={handleEmail}
                                    size="small"
                                // onChange={handleAddressChange}
                                // value={address}
                                // error={regx.AddressError}
                                // helperText={regx.AddressHelper}
                                />
                            </div>
                        </div>
                        <div
                            className="fulNAameaddress"
                            style={{ marginTop: "50px", marginBottom: "20px" }}
                        >
                            <div
                                style={{
                                    width: "48%",
                                }}
                            >
                                <h3 className="field-label">Town</h3>
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    // onChange={handleEmail}
                                    size="small"
                                // onChange={handleTownChange}
                                // value={town}
                                // error={regx.CityError}
                                // helperText={regx.cityHelper}
                                />
                            </div>
                            <div
                                style={{
                                    width: "48%",
                                }}
                            >
                                <h3 className="field-label">State</h3>
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    // onChange={handleEmail}
                                    size="small"
                                // onChange={handleStateChange}s
                                // value={state}
                                // error={regx.StateError}
                                // helperText={regx.stateHelper}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "20px",
                                marginTop: "45px",
                            }}
                        >
                            {!state1.OrderSumUnit && (
                                <Button
                                    onClick={() => clickOnContinue(false)}
                                    variant="contained"
                                    style={{
                                        borderRadius: "2px",
                                    }}
                                >
                                    Continue
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                {state1.orderSum && (
                    <div className="adbokDeatils">
                        <div style={{ marginLeft: "40px" }}>Order summary</div>
                    </div>
                )}
                {state1.OrderSumUnit && (
                    <div className="mainMyCArtt">
                        {/* headings */}
                        <div className="HeadingOfMyCartog">
                            <div
                                className="MycartLeftHeading"
                                style={{
                                    width: "146px",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    marginRight: "60px",
                                }}
                            >
                                Order Summary
                            </div>
                            <div
                                className="MycartLeftHeading"
                                style={{
                                    marginRight: "0px",
                                    width: "275px",
                                    height: "40px",
                                    fontWeight: "600",
                                }}
                            >
                                {/* <div className='locationMyCart'>
              <div>  <PinDropIcon sx={{ marginLeft: '10px', color: '#A03037', marginTop: '9px' }} /> </div>
              <div style={{ marginTop: '12px', marginLeft: '3px', fontSize: '14px' }}>Use current location</div>
            </div> */}
                            </div>
                        </div>
                        {/* headings */}
                        <div className="productSectionOfmyCart">
                            {/* {product.map((x) => ( */}
                            <div className="productsArrayMyArt">
                                <div className="imgInMyCartOfproduct">
                                    <img src={download} height={"85px"} width={"60px"}></img>
                                </div>
                                <div className="productrightcontntmtcrt">
                                    {/* <div className="titleMyproductcrt">{x.productName}</div> */}
                                    <div className="titleMyproductcrt">iphone</div>
                                    <div
                                        className="author"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            height: "25px",
                                            marginLeft: "auto",
                                        }}
                                    >
                                        by sdasda
                                        {/* {x.author}{" "} */}
                                    </div>

                                    {/* <div className="price111cart">RS {x.price}</div> */}
                                    <div className="price111cart">RS 1000</div>
                                    {/* <div className="counterFormycrtt">{x.quantity}</div> */}
                                    <div className="counterFormycrtt">3</div>
                                </div>
                            </div>
                            {/* ))} */}
                            Total Cart Price Rs: q131231
                            {/* {total} */}
                            <div className="butnnsLasplcor">
                                {/* {state1.condition && ( */}
                                <Button
                                    onClick={() => {
                                        // chnageState();
                                        // navigate("/checkoutpage");
                                    }}
                                    // className="butnplceOrder"
                                    size="small"
                                    variant="contained"
                                >
                                    Checkout
                                </Button>
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                )}
                {!state1.AddressSetUpsVal && (
                    <div className="extra-box">Address Detail</div>
                )}
                {!state1.OrderSumUnit && <div className="extra-box">Order Summary</div>}
            </div>

        </div >
    );
}

export default Cart1
