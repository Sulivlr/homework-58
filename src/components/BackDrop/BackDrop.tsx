import {useState} from 'react';
import Modal from '../Modal/Modal';

const BackDrop = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div>
        <button className="w-50 btn btn-primary" onClick={() => setShowModal(true)}>Modal Window</button>
        <Modal show={showModal} title="Attractor" onClose={() => setShowModal(false)}>
          <div className="modal-body">JavaScript</div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      </div>
    </>


  );
};

export default BackDrop;