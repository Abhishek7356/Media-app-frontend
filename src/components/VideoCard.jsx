import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToWatchHistory, deleteAVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard({ item, setDeleteVideos, insideCategory }) {

  const [show, setShow] = useState(false);
  // console.log(item);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)

    //api call to add watchhistory
    const { caption, embed_link } = item;
    //to get current date
    let today = new Date();
    let timestamp = Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)
    // console.log(timestamp);
    const watchDetails = {
      caption,
      embed_link,
      timestamp
    }
    //api call to set video
    await addToWatchHistory(watchDetails);
    // console.log(response);
  };

  const handleDelete = async (id) => {
    let response = await deleteAVideo(id);
    setDeleteVideos(response.data)
    toast.error('Video Deleted Successfully')
    // console.log(response);
  }

  const dragHandler = (e,id) => {
    console.log("drag started "+ id , e);
    e.dataTransfer.setData("videoId",id)

  }

  return (
    <div className='mt-2'>
      <Row>
        <Col>
          <Card draggable onDragStart={(e) => dragHandler(e,item.id)} style={{ width: '17rem' }}>
            <ToastContainer />
            <Card.Img onClick={handleShow} variant="top" style={{ height: '250px', cursor: 'pointer', width: '100%', objectFit: 'cover' }} src={item.url} />
            <Card.Body>
              <div className='d-flex justify-content-between align-items-center'>
                <Card.Title>{item?.caption}</Card.Title>
                { !insideCategory && <Button onClick={() => handleDelete(item.id)} variant="primary"><i className='fa-solid fa-trash'></i></Button>}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe style={{ width: '100%', borderRadius: '10px' }} height="315" src={item.embed_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard