import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { useQuery } from 'react-query'


export default function Brands() {
    // const [brands, setBrands] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // async function getbrands(){
    //     let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    //     console.log(data);
    //     setBrands(data.data)
    //     setIsLoading(false)
    // }
    // useEffect(()=>{
    //     getbrands()
    // },[])


    function getBrands(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }

    let {data, isLoading, isFetching} = useQuery("Brands", getBrands)
  return (
    
      <>
      <div className='container pt-5'>
        <div className="row">
        {isLoading? <div className="vh-100 d-flex justify-content-center align-items-center">
    <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        />
    </div> :""}
        {data?.data?.data.map((el)=> <div key={el._id} className="col-md-3">
            <div className="product py-1 px-2">
            <img src={el.image} className='w-100' alt="" />
            <h2>{el.name}</h2>
            </div>
        </div>)}
    </div>
      </div>
      </>
    
  )
}
