


import React, { StrictMode } from 'react'

const Navbar = () => {

    return (
        <StrictMode>

            <div className="col-12 py-3 NavbarPage">
                <div className="col-8 m-auto py-4">
                    <div className="row">

                        {/* first row */}
                        <div className="col-2 ms-auto">
                            <button className='btn  w-100 fw-bold'>HTML</button>
                        </div>

                        {/* second row */}
                        <div className="col-2">
                            <button className='btn  w-100 fw-bold'>CSS</button>
                        </div>

                        {/* third row */}
                        <div className="col-2">
                            <button className='btn w-100 fw-bold'>Javascript</button>
                        </div>

                        {/* fourth row */}
                        <div className="col-2 me-auto">
                            <button className='btn w-100 fw-bold'>React</button>
                        </div>

                    </div>
                </div>
            </div>





        </StrictMode>
    )
}

export default Navbar;