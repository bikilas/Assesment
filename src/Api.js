import React, { useState } from "react";

function App() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setShortUrl("");

        try {
            const response = await fetch(`https://api.tinyurl.com/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer YOUR_TINYURL_API_KEY"  // Replace with your TinyURL API key
                },
                body: JSON.stringify({ url: longUrl }),
            });

            if (!response.ok) {
                throw new Error("Failed to shorten URL. Please try again.");
            }

            const data = await response.json();
            setShortUrl(data.data.tiny_url);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter a long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        width: "300px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: "10px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                    }}
                    disabled={loading}
                >
                    {loading ? "Shortening..." : "Shorten"}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {shortUrl && (
                <div style={{ marginTop: "20px" }}>
                    <p>Short URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
}

export default App;
