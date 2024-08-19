import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AddProduct.css';
import {useNavigate} from "react-router-dom";
import Navbar from "../../Components/Navbar.tsx";

function EditProduct() {
    const navigate = useNavigate();  // Initialize useNavigate hook


    const [item, setItem] = useState({
        itemName: '',
        imageUrl: '',
        description: '',
        price: '',
        quantity: '',
    });

    // @ts-ignore
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;


        setItem((prevItem) => ({
            ...prevItem,
            [name]: inputValue,
        }));
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/Item/getByName/${item.itemName}`);
            const itemData = response.data;

            setItem({
                itemName: itemData.itemName,
                imageUrl: itemData.imageUrl,
                description: itemData.description,
                price: itemData.price,
                quantity: itemData.quantity,
            });
        } catch (error) {
            console.error('Error searching product:', error);
            toast.error('Error searching product. Please try again!');
        }
    };

    const handleEdit = async () => {


        try {

            const response = await axios.put('http://localhost:8080/Item/update', {
                id: null,
                itemName: item.itemName,
                imageUrl: item.imageUrl,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
            });

            if (response.data === 'Product successfully updated') {
                toast.success('Product edited successfully!');
                navigate('/dashboard');

            } else {
                toast.error('Error editing product. Please try again!');
            }
        } catch (error) {
            console.error('Error editing product:', error);
            toast.error('Error editing product. Please try again!');
        }
    };



    return (
        <>
            <Navbar/>
            <div className='addproduct'>
                <h2 className="addheader">Edit Product</h2>
                <label className="addlabel">Name:</label>
                <input
                    className="addinput"
                    type="text"
                    name="itemName"
                    value={item.itemName}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>

                <label className="addlabel">Image:</label>
                <input
                    className="addinput"
                    type="text"
                    name="imageUrl"
                    value={item.imageUrl}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Description:</label>
                <input
                    className="addinput"
                    type="text"
                    name="description"
                    value={item.description}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Price:</label>
                <input
                    className="addinput"
                    type="text"
                    name="price"
                    value={item.price}
                    onChange={handleInputChange}
                />

                <label className="addlabel">Quantity:</label>
                <input
                    className="addinput"
                    type="text"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleInputChange}
                />

                <button className="addbttn" onClick={handleEdit}>
                    Edit Product
                </button>
            </div>

        </>
    );
}

export default EditProduct
