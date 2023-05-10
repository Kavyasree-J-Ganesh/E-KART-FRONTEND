import React from "react";
import { Chart } from "react-google-charts";
import { useEffect } from "react";
import { getSaleRepoprt, getTopSelledProducts } from "../../Services/saleServices";
import classes from "./SaleAnalysis.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SaleAnalysis = () => {
    const [data, setData] = useState([])
    const [topSelled, setTopSelled] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        saleReport()
        getTopSelledProductList()
    }, [])

    const saleReport = async () => {
        try {
            const result = await getSaleRepoprt();
            let dataList = [["sale", "category"]]
            result?.data?.data.forEach(cat => {
                dataList.push([cat._id, cat.quantity])
            })
            setData(dataList)
        } catch (error) {

        }
    }

    const getTopSelledProductList = async () => {
        try {
            const result = await getTopSelledProducts();
            setTopSelled(result.data.data)
        } catch (error) {

        }
    }
    return (
        <div className={classes.sale_analysis}>
            <div className={classes.sale_analysis_chart}>
                <h3 className={classes.sale_analysis_chart_heading}>Sale/Category report</h3>
                <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
            <div className={classes.top_selled_cat}>
                <h3 className={classes.sale_analysis_products_heading}>Top Selling products</h3>
                {topSelled.map(item => <div><span>{item._id}</span> (<span style={{fontWeight:600}}>{item.quantity} quantities sold</span>)</div>)}
                <button onClick={()=> navigate("/home")} style={{marginTop:"40px"}} className="button_info">View/Edit the stock</button>
            </div>
        </div>
    )
}

export default SaleAnalysis;




