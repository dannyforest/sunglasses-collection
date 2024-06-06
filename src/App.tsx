import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {UserSunglasses} from "./API";

const UserSunglassesForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        brand: '',
        model: '',
        color: '',
        polarized: false,
        tint: '',
        purchasePrice: 0
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('/sunglasses', formData);
            console.log('Sunglasses saved:', response.data);
        } catch (error) {
            console.error('Error saving sunglasses:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID:</label>
                <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Brand:</label>
                <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Color:</label>
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Polarized:</label>
                <input
                    type="checkbox"
                    name="polarized"
                    checked={formData.polarized}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Tint:</label>
                <input
                    type="text"
                    name="tint"
                    value={formData.tint}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Purchase Price:</label>
                <input
                    type="number"
                    name="purchasePrice"
                    value={formData.purchasePrice}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    const [sunglasses, setSunglasses] = useState<UserSunglasses[]>([]);
    const [myFavouriteSunglasses, setMyFavouriteSunglasses] = useState<UserSunglasses | null>(null);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editFormData, setEditFormData] = useState({ brand: '', model: '' });

    useEffect(() => {
        axios.get('/sunglasses?brand=Oakley')
            .then(res => {
                console.log(res.data);
                setSunglasses(res.data.data.items);
            });

        axios.get('/sunglasses/7a6df354-d1c4-4023-baf8-f62fc26c4230')
            .then(res => {
                console.log(res.data);
                setMyFavouriteSunglasses(res.data.data);
            });
    }, []);

    const handleEditClick = (index: any) => {
        setEditIndex(index);
        setEditFormData({
            brand: sunglasses[index].brand,
            model: sunglasses[index].model
        });
    };

    const handleEditChange = (e: any) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const handleEditSubmit = (e: any) => {
        e.preventDefault();
        if (editIndex === null)
            return;

        const updatedSunglasses = [...sunglasses];
        updatedSunglasses[editIndex] = {
            ...updatedSunglasses[editIndex],
            brand: editFormData.brand,
            model: editFormData.model
        };
        setSunglasses(updatedSunglasses);
        setEditIndex(null);

        axios.put(`/sunglasses/${updatedSunglasses[editIndex].id}`, updatedSunglasses[editIndex])
            .then(res => {
                console.log('Sunglass updated:', res.data);
            })
            .catch(error => {
                console.error('Error updating sunglasses:', error);
            });
    };

    return (
        <div className="App">
            <h1>My Favourite Sunglasses</h1>
            <p>{myFavouriteSunglasses?.brand} - {myFavouriteSunglasses?.model}</p>
            <ul>
                {sunglasses.map((sunglass, index) => (
                    <li key={sunglass.id}>
                        {editIndex === index ? (
                            <form onSubmit={handleEditSubmit}>
                                <input
                                    type="text"
                                    name="brand"
                                    value={editFormData.brand}
                                    onChange={handleEditChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="model"
                                    value={editFormData.model}
                                    onChange={handleEditChange}
                                    required
                                />
                                <button type="submit">Save</button>
                                <button type="button" onClick={() => setEditIndex(null)}>Cancel</button>
                            </form>
                        ) : (
                            <>
                                {sunglass.brand} - {sunglass.model}
                                <button onClick={() => handleEditClick(index)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <UserSunglassesForm />
        </div>
    );
}

export default App;
