import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchHistory } from '../services/allAPI';


function WatcHistory() {

    const [watchVideos, setWatchVideos] = useState([]);
    const fetchData = async () => {
        let response = await getWatchHistory();
        setWatchVideos(response.data)
        // console.log(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    let allWatchedVideos = watchVideos.map((video, key) => (
        <tr>
            <td>{key + 1}</td>
            <td>{video.caption}</td>
            <td><a href={video.embed_link} >{video.embed_link}</a></td>
            <td>{video.timestamp}</td>
        </tr>
    ));

    return (
        <div className='container' style={{ minHeight: '75vh' }}>
            <div>
                <div className='d-flex  py-4 justify-content-between'>
                    <h3>Watch history</h3>
                    <Link to={'/home'} style={{ textDecoration: 'none' }} className='d-flex border rounded-pill border-1 border-primary py-2 px-4 align-items-center'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
                </div>
                <Table style={{ width: '70%', margin: 'auto' }} striped bordered hover variant="dark" className='my-5'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Caption</th>
                            <th>URL</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allWatchedVideos ? allWatchedVideos : <p>No Watch History</p>}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default WatcHistory