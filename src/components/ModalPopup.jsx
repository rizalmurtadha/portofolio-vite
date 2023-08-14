import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const PopupModal = ({ item, onClose, fetchData }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [itemName, setItemName] = useState('');

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [stock, setStock] = useState('');
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (item) {
        console.log(item);
        // If editing, populate form fields with item data
        setId(item.id);
        setName(item.name);
        setBrand(item.brand);
        setStock(item.stock);
        setStatus(item.status);
        } else {
        // If adding, reset form fields
        setName('');
        setBrand('');
        setStock('');
        setStatus('');
        }
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const statusValue = status === "true";
        const data = {
            name,
            brand,
            stock,
            status: statusValue,
        };
    
        try {
            console.log(data);
            console.log(item);
            if (item) {
                // Update existing item
                await axios.put(`/api/items/${item.id}`, data);
            } else {
                // Add new item
                await axios.post('/api/items/create', data);
            }
    
            // Refresh data and close the modal
            fetchData();
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // ... Item creation or editing logic here ...

//     console.log('Item Name:', itemName);
//     toggleModal();
//   };

  let modalTitle = 'Add Item';

  if (item) {
    modalTitle = 'Edit Item : ' + id;
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} toggle={onClose} >
        <ModalHeader toggle={onClose}>{modalTitle}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="itemName">Item Name</Label>
                <Input
                    type="text"
                    id="itemName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter item name"
                />
                <Label for="itemName">Item Brand</Label>
                <Input
                    type="text"
                    id="itemBrand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Enter brand name"
                />
                <Label for="itemName">Item Stock</Label>
                <Input
                    type="number"
                    id="itemStock"
                    value={stock}
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    placeholder="Enter stock name"
                />
                <Label for="itemName">Item Status</Label>
                <Input
                    className='input-checkbox'
                    type="checkbox"
                    id="itemStatus"
                    checked={status === "true"}
                    onChange={(e) => setStatus(e.target.checked ? "true" : "false")}
                />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            {item ? 'Save Changes' : 'Create'}
          </Button>{' '}
          <Button color="secondary" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupModal;
