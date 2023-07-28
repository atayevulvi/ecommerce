/* eslint-disable react/prop-types */
import { FaXmark } from 'react-icons/fa6';
import {FiSearch} from 'react-icons/fi'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
export default function LocationModal({ gorunen, handleClose }) {
    return (

        <Modal show={gorunen} onHide={handleClose}
            className="modal location-modal fade theme-modal"
            id="locationModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h5 style={{transform:'translate(-30px,-30px)'}} className="modal-title" id="exampleModalLabel">
                            Choose your Delivery Location
                        </h5>
                        <p style={{transform:'translate(-30px,-30px)'}} className="mt-1 text-content">
                            Enter your address and we will specify the offer for your area.
                        </p>
                        <button style={{transform:'translate(30px,-25px)'}}
                            type="button"
                            onClick={handleClose}
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <FaXmark />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="location-list">
                            <div style={{transform:'translate(-35px,-20px)'}} className="search-input">
                                <input 
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Your Area"
                                />
                               <FiSearch style={{transform:'translate(10px, -26px)'}}/>
                            </div>
                            <div style={{transform:'translateX(-35px)'}} className="disabled-box">
                                <h6>Select a Location</h6>
                            </div>
                            <ul style={{transform:'translateX(-50px)'}} className="location-select custom-height">
                                <li>
                                    <a href="">
                                        <h6>Alabama</h6>
                                        <span>Min: $130</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Arizona</h6>
                                        <span>Min: $150</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>California</h6>
                                        <span>Min: $110</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Colorado</h6>
                                        <span>Min: $140</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Florida</h6>
                                        <span>Min: $160</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Georgia</h6>
                                        <span>Min: $120</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Kansas</h6>
                                        <span>Min: $170</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Minnesota</h6>
                                        <span>Min: $120</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>New York</h6>
                                        <span>Min: $110</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h6>Washington</h6>
                                        <span>Min: $130</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
LocationModal.prototype = {
    gorunen: PropTypes.bool,
    handleClose: PropTypes.func
}