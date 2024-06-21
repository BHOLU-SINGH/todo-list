import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do List - Powered by FreeProjects1",
  keywords: "To-Do List, Task Management, Local Storage, Next.js",
  description:
    "Streamline your tasks with our user-friendly to-do list application, designed to simplify task management and boost productivity. Stay organized effortlessly and accomplish more with ease.",
  other: {
    "twitter:card": "summary",
    "twitter:site": "@bholu7972",
    "twitter:creator": "@bholu7972",
    "twitter:title": "To-Do List - Powered by FreeProjects1",
    "twitter:description":
      "Streamline your tasks with our user-friendly to-do list application, designed to simplify task management and boost productivity. Stay organized effortlessly and accomplish more with ease.",
    "og:type": "website",
    "og:title": "To-Do List - Powered by FreeProjects1",
    "og:description":
      "Streamline your tasks with our user-friendly to-do list application, designed to simplify task management and boost productivity. Stay organized effortlessly and accomplish more with ease.",
    "og:image": "https://example.com/outputIMG.png",
    "og:url": "https://example.com/todo-list",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Bholu Singh" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
