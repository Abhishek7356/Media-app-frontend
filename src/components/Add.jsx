import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setUploadVideoServerResponse }) {

  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embed_link: ""
  })
  console.log(video);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e) => {
    let { value } = e.target;
    console.log(value.slice(-31));
    const link = `https://www.youtube.com/embed/${value.slice(-31)}`;
    setVideo({ ...video, embed_link: link })
    // https://www.youtube.com/embed/kcTV3G-Wi34?si=iodfHdgKGDgC1_cN
  }

  const handleUpload = async () => {
    const { id, url, caption, embed_link } = video
    if (!id || !url || !caption || !embed_link) {
      toast.error('Please fill this form correctly')
    } else {
      // make an api call
      const response = await uploadVideo(video);
      console.log(response);
      if (response.status >= 200 && response.status <= 300) {
        //set server response
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} add successfully`);
        setVideo({
          id: "",
          caption: "",
          url: "",
          embed_link: ""
        })
        handleClose();
      } else {
        toast.warning('error')
      }
    }
  }

  return (
    <div>
      <div className="div d-flex align-items-center">
        <h5>Upload new video</h5>
        <button onClick={handleShow} className='btn border-0  ms-1'><i class="fa-solid fs-2 fa-circle-plus fa-beat-fade"></i></button>
        <ToastContainer />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload a video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>please fill the following details</p>
            <form className='p-4'>
              <FloatingLabel label="Video ID" className="mb-3">
                <Form.Control onChange={(e) => setVideo({ ...video, id: e.target.value })} type="text" placeholder="Video id" />
              </FloatingLabel>
              <FloatingLabel label="Video caption" className="mb-3">
                <Form.Control onChange={(e) => setVideo({ ...video, caption: e.target.value })} type="text" placeholder="Video caption" />
              </FloatingLabel>
              <FloatingLabel label="Video image url" className="mb-3">
                <Form.Control onChange={(e) => setVideo({ ...video, url: e.target.value })} type="text" placeholder="Video image url" />
              </FloatingLabel>
              <FloatingLabel label="Youtube link" className="mb-3">
                <Form.Control onChange={getEmbedLink} type="text" placeholder="Youtube link" />
              </FloatingLabel>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>

          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Add