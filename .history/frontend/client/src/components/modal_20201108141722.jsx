import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

// I need to make this component as reuseable as possible!!


const PopoverModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Custom modal styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  //   console.log('cool')
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteModelBody = (
    <div>
      {' '}
      <h2>Are you sure you want to delete?</h2>{' '}
      {/* {' place data delete onlick handler here!'} */}
      <Button color='secondary'>Yes</Button>
      <Button color='primary' onClick={closeModal}>
        No, go back!
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      {deleteModelBody}
    </Modal>
  );
};


export defa