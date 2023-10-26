import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';


function View({ uploadVideoServerResponse }) {

    const [allVideos, setAllVideos] = useState([])
    const [deleteVideos, setDeleteVideos] = useState({})

    const getUploadVideos = async () => {
        const response = await getAllVideos();
        setAllVideos(response.data)
        // console.log(allVideos);
    }

    useEffect(() => {
        getUploadVideos();
    }, [uploadVideoServerResponse, deleteVideos])

    let viewAllVideos = allVideos.map((item) => {
        return (
            <Col >
                <VideoCard setDeleteVideos={setDeleteVideos} item={item} />
            </Col>
        )
    })

    return (
        <div className='mb-5'>
            <div className=''>
                <Row>
                    {viewAllVideos ? viewAllVideos : <p>nothing</p>}
                </Row>
            </div>
        </div>
    )
}

export default View