import React from 'react'
import Modal from 'react-modal';


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

const PopoverModal = () => {
const [modalIsOpen, setIsOpen] = useState(false);
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

  const classes = useStyles();

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

}