const express = require("express");
const cors = require("cors");

const auditRoute = require("./routes/audit");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/audit", auditRoute);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;