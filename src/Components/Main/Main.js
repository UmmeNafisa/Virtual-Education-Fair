import React, { useEffect, useState } from 'react';
import './Main.css'
import Instructor from '../Instructor/Instructor';
import Cart from '../Cart/Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    //event handler to add the cart
    const [selectInst, setSelectInst] = useState([])
    const handleAddToCart = (members) => {
        members.isAdded = true;
        const newSelectInst = [...selectInst, members]
        setSelectInst(newSelectInst);
        console.log(newSelectInst)
    }
    //total fees Calculation
    let total = 0;
    for (let inst of selectInst) {
        total += inst.payAmount;
    }

    //user icon
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const paymentIcon = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="main-body">
            <h1 className="text-center pt-5 text-primary fw-bolder">All Instructors</h1>
            <div className='row m-2'>
                <div className='col-md-3 col-5'>
                    <h4 className="pt-4"> Your Selected Instructors  </h4>
                    <h5>{userIcon} Instructor Added : {selectInst.length} </h5>
                    <h5 className='mb-5'>{paymentIcon} Total fees: ${total} </h5>
                    {
                        selectInst.map(instructor => <Cart key={instructor.id} instructor={instructor} > </Cart>)
                    }
                    <button className="btn btn-color ms-5 px-3 text-white"> {paymentIcon} Payment </button>
                </div>
                <div className='col-md-9 col-7'>
                    <div className='row'>
                        {
                            instructors.map(instructor => <Instructor
                                key={instructor.id} instructor={instructor} handleAddToCart={handleAddToCart}
                            ></Instructor>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;