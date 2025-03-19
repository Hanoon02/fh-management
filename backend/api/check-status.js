const axios = require("axios");

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow frontend to access this API
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

    if (req.method === "OPTIONS") {
        return res.status(200).end(); // Preflight request response
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: "URL parameter is required" });
    }

    try {
        const response = await axios.head(url, { timeout: 5000 }); // 5 sec timeout
        res.json({ url, status: `HTTP/1.1 ${response.status} OK` });
    } catch (error) {
        const statusCode = error.response ? error.response.status : 502;
        res.json({ url, status: `HTTP/1.1 ${statusCode} Bad Gateway` });
    }
};