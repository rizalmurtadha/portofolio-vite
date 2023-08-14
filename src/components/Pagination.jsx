import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {FaEdit, FaWindowClose} from 'react-icons/fa'
import { IoIosAddCircle } from "react-icons/io";
import { BiMessageAdd } from "react-icons/bi";
import './../App.css'
import Modals from './ModalPopup'; 
// import 'bootstrap/dist/css/bootstrap.css';
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

import BGHome2 from '../img/Home2.jpg'


function Pagination() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(Math.ceil(window.innerHeight/75));
    const [tableHegiht, setTableHeight] = useState(Math.ceil(window.innerHeight/75) * 48 + 57)
    // const itemsPerPage = 15; // Number of items per page

    useEffect(() => {
        // Fetch data from your Flask API and update the items state
        console.log("fetch data")
        axios.get('/api/all_items')
        .then(response => {
            console.log(response);
            setItems(response.data.items);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [currentPage]);

    useEffect(() => {
        console.log("use effect 2")
        const handleResize = () => {
            console.log("handle resize")
            rowHeight = Math.ceil(window.innerHeight/75) * 48 + 57;
            headHeight = 57;
            setTableHeight(Math.ceil(window.innerHeight/75) * 48 + 57);
            setItemsPerPage(Math.ceil(window.innerHeight/75));
        };

        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = items.slice(startIndex, endIndex);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/all_items');
            setItems(response.data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handleEditItem = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleAddNewItem = () => {
        setSelectedItem(null);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const handleDeleteItem = (itemId) => {
        console.log("handle delete")
        // Handle delete logic
        axios.delete(`/api/items/${itemId}`)
        .then(response => {
            if (response.statusText == "OK") {
                console.log("OK");
                // Item deleted successfully, update your UI or data
                // For example, remove the item from your displayedItems array
                // setDisplayedItems(displayedItems => displayedItems.filter(item => item.id !== itemId));
                window.location.reload();
            } else {
                console.log("ERROR");
                // throw new Error('Failed to delete item');
            }
        })
        .catch(error => {
            console.error('Error deleting item:', error);
        });
    };

    return (
        <div className=''>
            {/* <Modal 
                size='lg'
                isOpen={modalOpen}
                toggle = {() => setModalOpen(!modalOpen)}
            >
                <ModalHeader
                toggle = {() => setModalOpen(!modalOpen)}>
                    {selectedItem ? 'Edit Item : ' : 'Add Item'} 
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit="">
                        <FormGroup>
                        <Label for="itemName">Item Name</Label>
                        <Input
                            type="text"
                            id="itemName"
                            value="{itemName}"
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter item name"
                        />
                        <Input
                            type="text"
                            id="itemBrand"
                            value="{itemName}"
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter item name"
                        />
                        <Input
                            type="text"
                            id="itemName"
                            value="{itemName}"
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter item name"
                        />
                        <Input
                            type="text"
                            id="itemName"
                            value="{itemName}"
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter item name"
                        />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick="">Create</Button>{' '}
                    <Button color="secondary" onClick={handleCloseModal}>Cancel</Button>
                </ModalFooter>
            </Modal> */}
            <img className='mainBG h-screen -z-10' src={BGHome2} alt='' />
            
            <div className='container App mt-0 '> 
                <h1>CRUD TEST</h1>
                
                

                <table style={{ minHeight: tableHegiht }} className='table transparent-table table-container'>
                    <thead >
                        <tr >
                            <th style={{ width: '10%' }} className='p-3'>Id</th>
                            <th style={{ width: '20%' }} className='p-3'>Nama</th>
                            <th style={{ width: '20%' }} className='p-3'>Brand</th>
                            <th style={{ width: '20%' }} className='p-3'>Stok</th>
                            <th style={{ width: '20%' }} className='p-3'>Status</th>
                            <th style={{ width: '5%' }} className='p-3'><button onClick={handleAddNewItem}><BiMessageAdd size={25} className='add-button'/></button></th>
                            <th style={{ width: '5%' }} className='p-3'></th>
                        </tr>
                    </thead>
                    <tbody >
                        {displayedItems.map(item => (
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.stock}</td>
                                <td>{item.status}</td>
                                <td><button onClick={() => handleEditItem(item)}><FaEdit  size={25}/></button></td>
                                <td><button onClick={() => handleDeleteItem(item.id)}><FaWindowClose  size={25} className='delete-button'/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
                {/* <ul>
                    {displayedItems.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Brand: {item.brand}</p>
                        <p>Status: {item.status}</p>
                        <p>Stock: {item.stock}</p>
                        <button onClick={() => handleEditItem(item.id)}>Edit</button>
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                    ))}
                </ul> */}
                {/* <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                    </button>
                </div> */}

                

                <div className='flex flex-row content-center justify-center control-page'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <AiOutlineArrowLeft size={30} />
                    </button>
                    
                    <div className='text'>
                        <p>
                            Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
                            <strong className="text-gray-900">{totalPages}</strong>
                        </p>
                    </div>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <AiOutlineArrowRight size={30} />
                    </button>
                </div>
                
                {modalOpen && (
                        <Modals
                        item={selectedItem}
                        onClose={handleCloseModal}
                        fetchData={fetchData}
                        />
                    )}
            </div>
            
        </div>
    );
}

export default Pagination;
