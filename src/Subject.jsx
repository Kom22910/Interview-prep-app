
import React, { StrictMode } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Subject = () => {

    const nav = useNavigate();


    return (
        <StrictMode>

            <div className="container-fluid subject p-0">

                <h1 className='head1 py-4 text-center'>Subject Preparation for Interview</h1>


                <div className="row">

                    <div className="col-sm-8 col-12 m-auto py-sm-5 py-1 px-4 mt-4 box-container">
                        <div className="row">

                            {/* subject 1 */}
                            <div className="col-5 box" onClick={()=>nav('/html')}>
                                <h1 className='text-center'>HTML</h1>
                            </div>


                            {/* subject 2 */}
                            <div className="col-5  box" onClick={()=>nav('/css')}>
                                <h1 className='text-center'>CSS</h1>
                            </div>

                            {/* subject 3 */}
                            <div className="col-5 box mt-3" onClick={()=> nav('/js')}>
                                <h1 className='text-center'>Javascript</h1>
                            </div>

                            {/* subject 4 */}
                            <div className="col-5 box mt-3">
                                <h1 className='text-center'>React</h1>
                            </div>


                            {/* subject 5 */}
                            <div className="col-5 box mt-3" onClick={()=> nav('/mongodb')}>
                                <h1 className='text-center'>MongoDB</h1>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        <Outlet/>


        </StrictMode>
    )
}

export default Subject;