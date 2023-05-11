import React, { useEffect } from 'react'
import {useParams,useHistory} from 'react-router-dom';
import {useState} from 'react';
import ProductService from './ProductService';
const EditProduct = () => {

    const [product, setproduct] = useState({
        id:"",
        productName:"",
        description:"",
        price:"",
        status:""
      });

      const {id} = useParams();
      console.log(id);

      const history = useHistory();

      useEffect(()=>{
          ProductService
          .getProductById(id)
          .then((res)=>{
              setproduct(res.data);
          })
          .catch((error)=>{
              console.log(error);
          });
      },[]);

      const handleChange=(e)=>{
        const name = e.target.name;
        setproduct({...product,[name]:e.target.value})
      };
    
      const ProductUpdate=(e)=>{
        e.preventDefault();  

        ProductService
        .editProduct(product)
        .then((res)=>{
            history.push("/list");
        })
        .catch((error)=>{
          console.log(error);
        });
      };
    
    
      return (
        <div className='container'>
          <h3>Edit Product</h3>
          <hr />
          <form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control col-4'
                id='productName'
                name="productName"
                placeholder='Enter product name'
                onChange={(e)=> handleChange(e)}
                value={product.productName}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control col-4'
                id='description'
                name="description"
                placeholder='Enter description'
                onChange={(e)=> handleChange(e)}
                value={product.description}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control col-4'
                id='price'
                name="price"
                placeholder='Enter price'
                onChange={(e)=> handleChange(e)}
                value = {product.price}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control col-4'
                id='status'
                name="status"
                placeholder='Enter status'
                onChange={(e)=> handleChange(e)}
                value = {product.status}
              />
            </div>
            <div>
              <button className='btn btn-primary' onClick={(e)=>ProductUpdate(e)}>
                Update
              </button>
            </div>
          </form>
          <hr />
        </div>
      );
}

export default EditProduct
