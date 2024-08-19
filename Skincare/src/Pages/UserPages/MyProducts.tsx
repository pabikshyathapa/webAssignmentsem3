import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyProducts.css'
import {useNavigate} from "react-router-dom";
import Navbar from "../../Components/Navbar.tsx";


interface Item {
    id: number;
    imageUrl: string;
    itemName: string;
    price: string;
    description: string;
}

function MyProducts() {
    const navigate = useNavigate();

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Item/getAll') // Use 'http' instead of 'https'
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);


    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/Item/deleteById/${id}`); // Use 'http' instead of 'https'
            setItems(prevItems => prevItems.filter(item => item.id !== id));
            toast.success('Item deleted successfully');
            navigate('/dashboard');


        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Error deleting item');
        }
    };


    return (
        <>
            <Navbar/>
            <h2 className='header2'>My Products</h2>
            <table className='tablemyproducts'>
                <thead className='heademypoducts'>
                <tr className='trmyproducts'>
                    <th className='thmyproducts'>ID</th>
                    <th className='thmyproducts'>Name</th>
                    <th className='thmyproducts'>Image</th>
                    <th className='thmyproducts'>Description</th>
                    <th className='thmyproducts'>Price</th>
                    <th className='thmyproducts'>Actions</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.itemName}</td>
                        <td>{item.imageUrl}</td>
                        <td>{item.description}</td>
                        <td>RS {item.price}</td>
                        <td>
                            <button className='buttons' onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>




        </>
    );
}

export default MyProducts
