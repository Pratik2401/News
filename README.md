# 📰 News App

A sleek, responsive React-based news aggregator built with Vite. This application fetches and displays the latest news articles, offering users a clean and intuitive interface for browsing trending headlines.

---

## 🚀 Features

- 🗞️ Display latest news using components
- 🔄 Reusable `NewsItem` component
- 🔗 Navigation bar (`Navbar`) for smooth transitions
- 💅 Styled with custom CSS for each component
- ⚡ Built using [Vite](https://vitejs.dev/) for lightning-fast development

---

## 📦 Tech Stack

- **React.js** (Frontend Framework)
- **Vite** (Build Tool)
- **CSS** (Styling)
- **ESLint** (Linting)

---

## 🛠️ Installation

To set up the project locally:

```bash
git clone https://github.com/Pratik2401/News.git
cd News
npm install
npm run dev
```

---

## 🌐 Usage

Once the app is running, it will open in your default browser at:

```
http://localhost:5173
```

You should see a navigation bar and a list of latest news cards with images, titles, and descriptions.

---

## 🧱 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx / Navbar.css     # Navigation bar
│   ├── News.jsx / News.css         # News listing component
│   └── NewsItem.jsx / NewsItem.css # Individual news card
├── App.jsx / App.css               # Main app container
├── main.jsx                        # Entry point for React
├── index.css                       # Global styles
```

---

## 📃 Configuration

If your app uses environment variables (like an API key), create a `.env` file:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

And access it in code via:

```js
import.meta.env.VITE_NEWS_API_KEY
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -m 'Add foo'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📸 Screenshots

> Add screenshots or GIFs here to showcase the UI.

---

## 🔗 Related Links

- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Vite Docs](https://vitejs.dev/guide/)
