import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories, deleteCategory, getAVideo, getCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';


function Category() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('')
  const [allCategories, setAllCategories] = useState([])

  // console.log(category);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchCategory = async () => {
    let response = await getCategories();
    setAllCategories(response.data)
  };
  // console.log(allCategories);

  useEffect(() => {
    fetchCategory();
  }, [])

  const handleAdd = async () => {
    if (category) {
      let response = await addCategories({ category });
      toast.success(`${category} category added succesfully`);
      fetchCategory();
      handleClose();
      setCategory('');

      // console.log(response);
    } else {
      toast.error('please enter category name')
    }
  }

  const handleDelete = async (id) => {
    let response = await deleteCategory(id);
    console.log(response);
    fetchCategory();
  }

  const handleDrop = async (e, categoryId) => {
    console.log("video dropped" + categoryId);
    const videoId = e.dataTransfer.getData("videoId");
    // console.log(videoId);
    //api call for video data
    let { data } = await getAVideo(videoId)
    // console.log(data);

    //get category details
    const selectedCategory = allCategories.find((item) => item.id === categoryId);

    //add video details to the array (allVideos[])
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory)

    //make an api call to update category details
    await updateCategory(categoryId, selectedCategory);
    fetchCategory();

  }

  const handleDragOver = (e) => {
    console.log("video drag over")
    e.preventDefault();
  }

  let showAllCategories = allCategories.map((item) => (
    <div>
      <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, item.id)} className='d-flex gap-3 border border-1 border-primary p-2 rounded  mt-3 justify-content-between fs-5 align-items-center'>
        <h5>{item.category}</h5>
        <i className='fa-solid fa-trash text-danger' style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)}></i>
      </div>
      <Row>
        {
          item.allVideos && item.allVideos.map((video) => (
            <Col>
              <VideoCard item={video} insideCategory={true} />
            </Col>
          ))
        }
      </Row>
    </div>

  ))

  return (
    <div>
      <div className='d-flex flex-column align-items-center' style={{ width: '270px' }}>
        <Button onClick={handleShow} style={{ width: '200px' }} className='rounded-pill' variant="primary">Add new category</Button>
        <ToastContainer />
        <div className='mt-2 w-100'>
          {showAllCategories.length > 0 ? showAllCategories : <h5 className='mt-3 text-center'>No data</h5>}
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='p-4'>
              <FloatingLabel label="Category name" className="mb-3">
                <Form.Control onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category name" />
              </FloatingLabel>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleAdd} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Category