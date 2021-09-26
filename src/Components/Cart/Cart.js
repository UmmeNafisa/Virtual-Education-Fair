import React from 'react';

const Cart = (props) => {
    const { name, imgSrc } = props.instructor;
    return (
        <div>
            <div className="card mb-3 rounded-3 instructor-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;