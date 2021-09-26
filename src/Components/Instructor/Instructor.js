import React from 'react';
import './Instructor.css'
//get import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Instructor = (props) => {
    // console.log(props.instructor)
    const { name, imgSrc, profession, location, payAmount, eventDate, eventTime } = props.instructor;
    const cartIcon = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <div className="col-md-4 gy-4 p-3 text-center">
            <div className='instructor-card shadow-lg p-3 mb-5 bg-body rounded h-100'>
                <div className="instructor-image card-img-top">
                    <img src={imgSrc} alt="" />
                </div>
                <h5 className="card-title pt-2"> {name}</h5>
                <h6> {profession} of {location}</h6>
                <p> Event Date: {eventDate} </p>
                <p> Event Time: {eventTime}</p>
                <h5 className='text-success fw-bold'>Fee : ${payAmount}</h5>
                <a href="/facbook"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="/twiter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="/linkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>

                <br />
                {
                    (props.instructor.isAdded) ?
                        (<button className="btn btn-success mt-2"> Selected </button>) :
                        (<button onClick={() => props.handleAddToCart(props.instructor)} className="btn btn-color px-3 mx-auto mt-2 text-white">{cartIcon}  Select </button>)
                }


            </div>
        </div>
    );
};

export default Instructor;