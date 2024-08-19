import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import Navbar from "../../Components/Navbar.tsx";

function AddProduct() {
    const [{description, imageUrl, itemName, price, quantity}, setItem] = useState({
        itemName: '',
        imageUrl: ' ',
        description: '',
        price: '',
        quantity: '',
    });

    const navigate = useNavigate();
// @ts-ignore
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;

        // If the input type is file, use the selected file
        const inputValue = type === 'file' ? files[0] : value;

        setItem((prevItem) => ({
            ...prevItem,
            [name]: inputValue,
        }));
    };

    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('itemName', itemName);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('quantity', quantity);
            formData.append('imageUrl', imageUrl);  // Append imageUrl as a string

            const response = await axios.post('http://localhost:8080/Item/save', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Product added:', response.data);
            toast.success('Product added successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Error adding product. Please try again!');
        }
    };


    return (
        <>
            <Navbar/>
            <div className='addproduct'>
                <h2 className="addheader">Add Product</h2>
                <label className="addlabel">Name:</label>
                <input
                    className="addinput"
                    type="text"
                    name="itemName"
                    value={itemName}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Image:</label>
                <input
                    className="addinput"
                    type="text"
                    name="imageUrl"
                    onChange={handleInputChange}
                />

                <label className="addlabel">Description:</label>
                <input
                    className="addinput"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Price:</label>
                <input
                    className="addinput"
                    type="text"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Quantity:</label>
                <input
                    className="addinput"
                    type="text"
                    name="quantity"
                    value={quantity}
                    onChange={handleInputChange}
                />

                <button className="addbttn" onClick={handleAddProduct}>
                    Add Product
                </button>
            </div>

        </>
    );
}

export default AddProduct
