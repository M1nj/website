import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contact from "./routes/contact";
import Naturewise from './routes/projects/naturewise';
import About from './routes/about';
import { Header } from './stories/Header';
import { Card } from './stories/Card';
import Mailbox from './routes/projects/mailbox';

export default function Appl() {
  return (
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<App />} />
          <Route path="routes/contact" element={<Contact />} />
          <Route path="routes/about" element={<About />} />
          <Route path="routes/project/naturewise" element={<Naturewise />} />
          <Route path="routes/project/mailbox" element={<Mailbox />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Appl />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
