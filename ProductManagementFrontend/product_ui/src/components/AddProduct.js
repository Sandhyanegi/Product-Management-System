import { Link} from 'react-router-dom';
import {useState} from 'react';
import ProductService from './ProductService';

const AddProduct = () => {

  const [product, setproduct] = useState({
    productName:"",
    description:"",
    price:"",
    status:""
  });

  const [msg, setmsg] = useState("");

  const handleChange=(e)=>{
    const name = e.target.name;
    setproduct({...product,[name]:e.target.value})
  };

  const ProductRegister=(e)=>{
    e.preventDefault();
    
    ProductService
    .saveProduct(product)
    .then((res)=>{
      console.log("product added successfully");
      setmsg("Product added successfully");
      setproduct({
        productName:"",
        description:"",
        price:"",
        status:""

      })
    })
    .catch((error)=>{
      console.log(error);
    });
  };


  return (
    <div className='container'>
      <h3>Add Product</h3>
      <hr />
      {
        msg &&<p className="fs-4 text-center text-success">{msg}</p>
      }
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
          <button className='btn btn-primary' onClick={(e)=>ProductRegister(e)}>
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to='/'>Back</Link>
    </div>
  );
};

export default AddProduct;
