import React from 'react';
import { useParams } from 'react-router-dom';
import Items from '../../data/Items';
import CategoryPage from './CategoryPage';

function CategoryDetail() {
  const { item_cat } = useParams();
  const categoryData = Items.filter(fi => item_cat === fi.Catagory);

  console.log(categoryData);

  return (
    <div className="container my-5">
      <h1 className="text-center fs-1 my-4 bg-body-tertiary">Category</h1>
      <div className="row">
        <div className="col-md-3">
          <CategoryPage />
        </div>
        <div className="col-md-9">
          <div className="container">
            <div className="row">
            {categoryData.length > 0 ? (
            <div className="row">
              {categoryData.map((item) => (
                <div className="col-md-4 col-sm-6 my-3" key={item.id}>
                  <div className="card h-100">
                    <img src={item.image} className="card-img-top" alt={item.item_name} />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{item.item_name}</h5>
                      <p className="card-text text-dark">{item.description}</p>
                      <p className="card-text text-primary">$ {item.price}</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                        <button type="button" className="btn btn-danger">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-warning fs-3">No items found in this category</p>
          )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
