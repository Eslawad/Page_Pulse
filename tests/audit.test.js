const request = require("supertest");
const app = require("../server");

describe("POST /audit", () => {

    test("should return 400 if URL is missing", async () => {
        const res = await request(app)
            .post("/audit")
            .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("URL is required");
    });

    test("should return 400 for invalid URL", async () => {
        const res = await request(app)
            .post("/audit")
            .send({
                url: "abc123"
            });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Please enter a valid URL.");
    });

    test("should return JSON for a valid website", async () => {
        const res = await request(app)
            .post("/audit")
            .send({
                url: "https://example.com"
            });

        expect(res.statusCode).toBe(200);

        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("responseTime");
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("metaDescription");
        expect(res.body).toHaveProperty("h1Count");
        expect(res.body).toHaveProperty("missingAltImages");
        expect(res.body).toHaveProperty("wordCount");
    });

});