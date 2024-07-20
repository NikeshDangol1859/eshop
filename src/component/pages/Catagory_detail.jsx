import React from 'react';
import { useParams } from 'react-router-dom';
import Items from '../../data/Items';

function Catagory_detail() {
  const { item_cat } = useParams();
  const catagoryData = Items.filter(fi => item_cat === fi.Catagory);

  console.log(catagoryData);

  

  if (catagoryData.length > 0) {
    
    return (
        
      <>
      <h1 className='text-center fs-1 my-4 bg-body-tertiary'>Category</h1>
        <div className="row">
        {catagoryData.map((item) => (
          <div className="container " key={item.id}>
            <div className="col-3 d-flex my-3">
                <div className='row'>
            
            
            <div className="card my-5 " style={{ width: '18rem' }}>
              <img src={item.image} className="card-img-top" alt={item.item_name} />
              <div className="card-body">
                <p>Name: {item.item_name}</p>
                <p>Description: {item.description}</p>
                <p>Price: $ {item.price}</p>
                <button type="button" className="btn btn-outline-primary">Buy Now</button>
                <button type="button" className="btn btn-danger m-1">Cancel</button>
              </div>
            </div>
            </div>
            </div>
          </div>
        ))}
        </div>
      </>
    );
  } else {
    return (
        <>
      <h1 className='text-center fs-1 my-4 bg-body-tertiary'>Category</h1>
      <p className='text-center text-warning fs-3'>No items found in this category</p>

        </>
      
    );
  }
}

export default Catagory_detail;



{/* {catagoryData.map((item)=>  
<div className="container">
    <h1 className='text-center'>{item.Catagory} Category</h1>  
    <div className="card" style={{ width: '18rem' }}>
        <div key={item.Catagory}>
            <img src={item.image} className="card-img-top" alt={item.item_name} />
            <div className="card-body">
                <p>Name: {item.item_name}</p>
                <p>Description: {item.description}</p>
                <p>Price: $ {item.price}</p>
                <button type="button" class="btn btn-outline-primary">Buy Now</button>
                <button type="button" class="btn btn-danger m-1">Cancel</button>
            </div>
            

        </div>
            
    </div>
    </div> 

    )
    

} */}