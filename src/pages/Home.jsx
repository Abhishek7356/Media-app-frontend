import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

    //state creation
    const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({});

    return (
        <div>
            <div className='container d-flex justify-content-between  mt-4'>
                <div className="add_videos me-4">
                    <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
                </div>
                <Link style={{ textDecoration: 'none' }} to={'/watchhistory'}>Watch history</Link>
            </div>
            <div className='container-fluid mt-4 d-flex  justify-content-between'>
                <div className="all_videos me-4">
                    <h5 className='text-center m-4' >All videos</h5>
                    <View uploadVideoServerResponse={uploadVideoServerResponse} />
                </div>
                <Category />
            </div>
        </div>

    )
}

export default Home