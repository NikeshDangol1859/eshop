import React from 'react';
import { useParams } from 'react-router-dom';
import Items from '../../data/Items';
import CategoryPage from './CategoryPage';

function ItemDetail() {
  let {item_id} =useParams()
  let find_item=Items.find((fi)=>item_id==fi.id)

    if (!find_item) {
        return <h2>Item not found</h2>;
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <CategoryPage />
                    </div>
                    <div className="col-md-9">
                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-4 ml-2">
                                    <img
                                        src={find_item.image}
                                        className="img-fluid rounded-start"
                                        alt={find_item.item_name}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h2 className="card-title">{find_item.item_name}</h2>
                                        <p className="card-text"><strong>Description:</strong> {find_item.description}</p>
                                        <p className="card-text"><strong>Category:</strong> {find_item.Catagory}</p>
                                        <p className="card-text"><strong>Price:</strong> Rs. {find_item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
