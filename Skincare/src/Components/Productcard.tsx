import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Productcard.css";

interface Item {
    id: number;
    imageUrl: string;
    itemName: string;
    price: string;
    description: string;
}

interface ProductCardProps {
    item: Item;
}

const Productcard: React.FC<ProductCardProps> = ({ item }) => {
    const handleAddToCart = async () => {
        try {
            const response = await fetch("http://localhost:8080/orders/save", {
                method: "POST", // Corrected the method to "POST"
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    itemId: item.id,
                    itemName: item.itemName,
                    price: item.price,
                    description: item.description,
                }),
            });

            if (response.ok) {
                toast.success(`Your ${item.itemName} has been ORDERED!`);
            } else {
                toast.error("Failed to place the order. Please try again.");
            }
        } catch (error) {
            console.error("Error placing the order:", error);
            toast.error("An error occurred while placing the order. Please try again.");
        }
    };

    return (
        <div className="product-card">
            <img
                src={item.imageUrl}
                alt="productImg"
                className="product-image"
                style={{ width: "200px", height: "200px" }}
            />
            <div className="product-details">
                <h3 className="product-name">{item.itemName}</h3>
                <p className="product-price">Price: Rs.{item.price}</p>
                <p className="product-details"> {item.description}</p>
                <div className="button-container">
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;
