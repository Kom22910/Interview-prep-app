
import React, { StrictMode } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Subject = () => {

    const nav = useNavigate();


    return (
        <StrictMode>

            <div className="container-fluid subject p-0">

                <h1 className='head1 py-4 text-center'>Subject Preparation for Interview</h1>


                <div className="row">

                    <div className="col-sm-11 col-12 m-auto px-4 box-container">
                        <div className="row">

                            {/* subject 1 */}
                            <div className="col-sm-3 col-5 box" onClick={() => nav('/html')}>
                                <img src="asset/html.png" alt="" />
                            </div>


                            {/* subject 2 */}
                            <div className="col-sm-3 col-5  box" onClick={() => nav('/css')}>
                                <img src="asset/css.png" alt="" />
                            </div>

                            {/* subject 3 */}
                            <div className="col-sm-3  col-5 box" onClick={() => nav('/js')}>
                                <img src="asset/javascript.png" alt="" />
                            </div>

                            {/* subject 4 */}
                            <div className=" col-sm-3  col-5 box">
                                <img src="asset/react.png" alt="" />
                            </div>


                            {/* subject 5 */}
                            <div className=" col-sm-3 col-5 box" onClick={() => nav('/mongodb')}>
                                <img src="asset/mongo.png" alt="" className='d-block w-25' />
                            </div>

                            {/* subject 6 */}
                            <div className=" col-sm-3 col-5 box" onClick={() => nav('/node')}>
                                <img src="asset/node.png" alt="" className='d-block w-25' />
                            </div>


                            {/* subject 6 */}
                            <div className=" col-sm-3 col-5 box" onClick={() => nav('/express')}>
                                <img src="asset/express.png" alt="" className='d-block w-25' />
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            <Outlet />


        </StrictMode>
    )
}

export default Subject;