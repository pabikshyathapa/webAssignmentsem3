import  { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer.tsx';
import Navbar from '../../Components/Navbar.tsx';
import './Dashboard.css';
import Slideshow from '../../Components/Slideshow.tsx';
import Productcard from "../../Components/Productcard.tsx";

function Dashboard() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/Item/getAll');
                setItem(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="Top">
                <Navbar />
            </div>

            <div className="bodyheight">
                <Slideshow />

                <div className="bodytoaddproduct">
                    {item && item.length > 0 ? (
                        item .map((item:any) => (
                            <Productcard key={item.id} item={item} />
                        ))
                    ) : (
                        <h1>No Data found</h1>
                    )}
                </div>
            </div>

            <div className="Bottom">
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;
