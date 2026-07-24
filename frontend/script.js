const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {

    const url = document.getElementById("url").value.trim();

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    if (url === "") {
        alert("Please enter a URL.");
        return;
    }

    loading.innerHTML = "Analyzing...";
    result.style.display = "none";

    try {

        const response = await fetch("https://page-pulse-api-ivvn.onrender.com/audit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        document.getElementById("status").innerText = data.status;
        document.getElementById("time").innerText = data.responseTime;
        document.getElementById("title").innerText = data.title;
        document.getElementById("meta").innerText = data.metaDescription;
        document.getElementById("h1").innerText = data.h1Count;
        document.getElementById("alt").innerText = data.missingAltImages;
        document.getElementById("words").innerText = data.wordCount;

        result.style.display = "block";

    } catch (err) {

        alert(err.message);

    }

    loading.innerHTML = "";

});