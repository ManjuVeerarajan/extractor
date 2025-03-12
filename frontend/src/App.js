import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [mediaItems, setMediaItems] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [loading, setLoading] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const API_BASE_URL = 'http://localhost:8080';

    const fetchAllMedia = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/all`);
            setMediaItems(response.data);
        } catch (error) {
            console.error('Error fetching all media:', error);
        }
        setLoading(false);
    };

    const filterMedia = async () => {
        if (!keyword.trim()) {
            fetchAllMedia();
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/filter?keyword=${keyword}`);
            setMediaItems(response.data);
        } catch (error) {
            console.error('Error filtering media:', error);
        }
        setLoading(false);
    };

    const fetchMediaDetails = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${API_BASE_URL}/filter?keyword=${id}`
            );
            const detailedItem = response.data[0] || null;
            setSelectedMedia(detailedItem);
        } catch (error) {
            console.error('Error fetching media details:', error);
            setSelectedMedia(null);
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Media Extractor</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Filter by keyword (press Enter)"
                />
                <button onClick={filterMedia}>Search</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="media-grid">
                        {mediaItems.length > 0 ? (
                            mediaItems.map((item) => (
                                <div key={item.id} className="media-item">
                                    <img src={item.thumbnailUrl} alt={item.id}/>
                                    <h3>{item.photoGraphers}</h3>
                                    <p>{item.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>No media items found.</p>
                        )}
                    </div>
                </>
            )}
            <button onClick={fetchAllMedia}>Fetch All Media</button>
        </div>
    );
}

export default App;