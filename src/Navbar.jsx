


import React, { StrictMode } from 'react'

const Navbar = () => {

    return (
        <StrictMode>

            <div className="col-12 py-3 NavbarPage">
                <div className="col-sm-8 col-11 m-auto py-4">
                    <div className="row">

                        {/* first row */}
                        <div className="col-sm-2 col-3 ms-auto">
                            <button className='btn  w-100 fw-bold'>HTML</button>
                        </div>

                        {/* second row */}
                        <div className="col-sm-2 col-3">
                            <button className='btn  w-100 fw-bold'>CSS</button>
                        </div>

                        {/* third row */}
                        <div className="col-sm-2 col-3">
                            <button className='btn w-100 fw-bold'>Javascript</button>
                        </div>

                        {/* fourth row */}
                        <div className="col-sm-2 col-3 me-auto">
                            <button className='btn w-100 fw-bold'>React</button>
                        </div>

                    </div>
                </div>
            </div>





        </StrictMode>
    )
}

export default Navbar;