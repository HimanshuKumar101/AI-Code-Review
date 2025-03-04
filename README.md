# Code Review AI Application

This is a web application that allows users to write code in a code editor and receive AI-powered code reviews. The application is built using **React** for the frontend, **Express** for the backend, and **Google Gemini** for AI-based code reviews.

## Features

- **Code Editor:** Write and edit code in a user-friendly editor with syntax highlighting.
- **AI Code Review:** Get detailed code reviews powered by Google Gemini.
- **Markdown Support:** Display code reviews in a clean, formatted Markdown view.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.

## Technologies Used

### Frontend:

- **React**
- **React Simple Code Editor** (for code editing)
- **Prism.js** (syntax highlighting)
- **React Markdown** (Markdown rendering)
- **Axios** (HTTP requests)

### Backend:

- **Express.js**
- **Google Gemini API** (AI Code Review)
- **CORS** (Cross-Origin Resource Sharing)

### Styling:

- **CSS** (custom styling)
- **Highlight.js** (code block styling)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Gemini API Key**

### Installation

#### Clone the Repository:

```sh
git clone https://github.com/your-username/code-review-ai.git
cd code-review-ai
```

#### Install Dependencies:

**For the frontend:**

```sh
cd client
npm install
```

**For the backend:**

```sh
cd server
npm install
```

#### Set Up Environment Variables:

Create a **.env** file in the **server** directory and add your Google Gemini API key:

```env
GOOGLE_GEMINI_KEY=your-api-key-here
```

### Run the Application

#### Start the Backend:

```sh
cd server
npm start
```

The backend will start at `http://localhost:3000`.

#### Start the Frontend:

```sh
cd client
npm start
```

The frontend will start at `http://localhost:3001`.

## Usage

1. Open the application in your browser.
2. Write or paste your code into the **code editor** on the left side.
3. Click the **Review** button to get an **AI-powered code review**.
4. The review will be displayed on the right side in **Markdown format**.

## Folder Structure

```
code-review-ai/
├── client/                  # Frontend (React)
│   ├── public/              # Static assets
│   ├── src/                 # React components and logic
│   │   ├── App.css          # Main styles
│   │   ├── App.js           # Main component
│   │   └── index.js         # Entry point
│   └── package.json         # Frontend dependencies
├── server/                  # Backend (Express)
│   ├── controllers/         # Route controllers
│   ├── routes/              # API routes
│   ├── services/            # Business logic (e.g., AI service)
│   ├── app.js               # Express app setup
│   └── package.json         # Backend dependencies
└── README.md                # Project documentation
```

## Configuration

### Frontend

Update the API URL in the **axios.post** call in `App.js` to match your backend URL:

```js
axios.post('http://localhost:3000/ai/get-review', { code });
```

### Backend

Enable **CORS** in `app.js` to allow requests from your frontend URL:

```js
app.use(cors({
    origin: 'http://localhost:3001'
}));
```

## Deployment

### Deploying to Vercel

#### Frontend:

1. Go to the [Vercel dashboard](https://vercel.com/).
2. Import your Git repository.
3. Set the root directory to **client**.
4. Add environment variables if needed.

#### Backend:

1. Repeat the same steps above, but set the root directory to **server**.

#### Update API URL:

After deployment, update the **API URL** in the frontend to point to the deployed backend URL.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.


## Acknowledgments

- **Google Gemini** for providing the AI API.
- **React Simple Code Editor** for the code editor component.
- **Prism.js** for syntax highlighting.

