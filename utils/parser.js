const cheerio = require("cheerio");

function parser(html) {

    const $ = cheerio.load(html);

    const title = $("title").text().trim() || "No Title";

    const metaDescription =
        $('meta[name="description"]').attr("content") || "No Meta Description";

    const h1Count = $("h1").length;

    let missingAltImages = 0;

    $("img").each((i, img) => {
        const alt = $(img).attr("alt");

        if (!alt || alt.trim() === "") {
            missingAltImages++;
        }
    });

    const bodyText = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = bodyText === ""
        ? 0
        : bodyText.split(" ").length;

    return {
        title,
        metaDescription,
        h1Count,
        missingAltImages,
        wordCount
    };
}

module.exports = parser;