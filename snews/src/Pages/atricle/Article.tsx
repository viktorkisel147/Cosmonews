import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import {ArticleView} from "./ArticleView";
export const Article = () => {
    let params = useParams();
    const [data,setData] = useState({})

    const getapidata = async () => {
        let buf_data = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${params.atricle_id}`)
        setData(buf_data)
        console.log(buf_data)
    }

    useEffect(()=>{getapidata()},[])

    return (
        <ArticleView data={data}></ArticleView>
    )
}