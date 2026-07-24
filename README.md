# 🚀 Page Pulse

Page Pulse is a simple web application that audits any webpage by analyzing its HTML and returning important SEO and webpage metrics.

This project was built as part of the **Digital Heroes Software Development Internship Qualification Task**.

---

## 🌐 Features

- ✅ HTTP Status Code
- ✅ Response Time
- ✅ Page Title
- ✅ Meta Description
- ✅ H1 Count
- ✅ Images Missing ALT Text
- ✅ Approximate Word Count
- ✅ Invalid URL Handling
- ✅ Timeout Handling
- ✅ Non-HTML Response Handling

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- Axios
- Cheerio

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

### Testing

- Jest
- Supertest

---

## 📁 Project Structure

```
page-pulse/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   │      audit.js
│   ├── utils/
│   │      parser.js
│   └── tests/
│          audit.test.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/page-pulse.git
```

Go inside backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Start the server

```bash
npm start
```

Backend runs on

```
http://localhost:3000
```

Open

```
frontend/index.html
```

in your browser.

---

# 📡 API

### Endpoint

```
POST /audit
```

### Request

```json
{
  "url":"https://example.com"
}
```

### Success Response

```json
{
  "status":200,
  "responseTime":"158 ms",
  "title":"Example Domain",
  "metaDescription":"Example website",
  "h1Count":1,
  "missingAltImages":0,
  "wordCount":210
}
```

### Error Responses

Invalid URL

```json
{
    "error":"Please enter a valid URL."
}
```

Timeout

```json
{
    "error":"Website took too long to respond."
}
```

Missing URL

```json
{
    "error":"URL is required"
}
```

Non HTML Page

```json
{
    "error":"The URL does not contain an HTML webpage."
}
```

---

# ✅ Tests

Run

```bash
npm test
```

The following cases are tested

- Missing URL
- Invalid URL
- Successful audit request

---

# 💡 Design Decisions

## 1. Express.js

Chosen because it is lightweight, fast, and suitable for creating REST APIs.

## 2. Axios

Used for fetching webpages with configurable timeout support.

## 3. Cheerio

Chosen because it efficiently parses HTML without launching a browser.

## 4. Modular Structure

Separated routing and parsing logic into different files for maintainability and readability.

---

# 🔮 Future Improvements

If more time were available, the project could be extended with:

- Lighthouse Performance Score
- SEO Score
- Broken Link Detection
- SSL Certificate Check
- Mobile Friendliness Detection
- Open Graph Tag Analysis
- Robots.txt and Sitemap Validation

---

# 🤖 AI Usage

I used AI tools to better understand the project requirements, improve the application structure, and explore implementation approaches. After using these suggestions, I manually implemented the application, verified the functionality, handled edge cases, and refined the documentation and overall project organization.

---

## 👨‍💻 Author

Your Name

---

## Footer Requirement

Every page contains the footer

```
Built for Digital Heroes Training Task
```

linked to

```
https://digitalheroesco.com
```