const express = require("express");
const axios = require("axios");
const parser = require("../utils/parser");

const router = express.Router();

router.post("/", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }

    try {

        new URL(url);

        const start = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            validateStatus: () => true
        });

        const end = Date.now();

        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            return res.status(400).json({
                error: "The URL does not contain an HTML webpage."
            });
        }

        const result = parser(response.data);

        return res.json({
            status: response.status,
            responseTime: `${end - start} ms`,
            title: result.title,
            metaDescription: result.metaDescription,
            h1Count: result.h1Count,
            missingAltImages: result.missingAltImages,
            wordCount: result.wordCount
        });

    } catch (err) {

        if (err.code === "ERR_INVALID_URL") {
            return res.status(400).json({
                error: "Please enter a valid URL."
            });
        }

        if (err.code === "ECONNABORTED") {
            return res.status(408).json({
                error: "Website took too long to respond."
            });
        }

        return res.status(500).json({
            error: "Something went wrong."
        });

    }

});

module.exports = router;