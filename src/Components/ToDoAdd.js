import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddModal from './AddModal';


const ToDoAdd = () => {
    const [openAddItemModal, setOpenAddItemModal] = useState(false)
    return (
        <div style={{textAlign: 'center'}}>
            <Button variant='primary' onClick={() => setOpenAddItemModal(true)}>Add Item</Button>
            <Modal 
                show={openAddItemModal} 
                onHide={()=>setOpenAddItemModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <AddModal closeModal={()=>setOpenAddItemModal(false)} />
        </Modal>
        </div>
    );
};

export default ToDoAdd;