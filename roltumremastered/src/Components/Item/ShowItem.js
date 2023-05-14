import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { displayItem } from "../../Services/Item";
import { ItemCard } from "../Card/Card";
import HeaderMenu from "../Layout/Layout";
export function ShowItemList() {
    const [items, setItems] = useState([]);
    const { userId, campaignId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (userId && campaignId) {
            displayItem(userId, campaignId)
                .then(data => {
                    console.log("ShowItemList component: ", data);
                    setItems(data || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId, campaignId]);
    const addItem = () => {
        console.log("Adding new Item");
        navigate(`/addItems/${userId}/${campaignId}`);
    };
    return (
        <div>
            <HeaderMenu />
            <button className="button" onClick={addItem}>Add new Item</button>
            <div className="list-container">
                {items && items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}