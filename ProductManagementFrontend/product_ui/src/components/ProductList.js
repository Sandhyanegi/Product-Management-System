import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductService from './ProductService';

const ProductList = () => {

  const [productList, setproductList] = useState([])
  const [msg, setmsg] = useState("")
  useEffect(()=>{
    init();
  },[]);

  const init=()=>{
    ProductService
    .getAllProduct()
    .then((res)=>{
      setproductList(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  }

  const deleteProduct=(id)=>{
    ProductService
    .deleteProduct(id)
    .then((res)=>{
      setmsg("Product deleted successfully");
      init();
    }).catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className='container'>
      <h3>List of Products</h3>
      <hr/>
      {
        msg &&<p className="fs-4 text-center text-success">{msg}</p>
      }
      <div>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>s.no</th>
              <th>Product id</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p,num)=>(
              <tr>
                <td>{num+1}</td>
                <td>{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.status}</td>
                <td>
                  <Link to={'editProduct/'+p.id} className = "btn btn-sm btn-primary">Edit</Link>
                  <button onClick={()=>deleteProduct(p.id)} className = "btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
