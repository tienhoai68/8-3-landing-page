import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./WomenDayLandingPage.css";

export default function WomenDayLandingPage() {
  const [hearts, setHearts] = useState([]);
  const staticHearts = [];

  // Hàm tạo hình trái tim từ nhiều trái tim nhỏ (hình trái tim bằng công thức toán học)
  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    const x = 50 + 20 * (16 * Math.pow(Math.sin(t), 3)); // Tọa độ X
    const y =
      50 -
      20 *
        (13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t)); // Tọa độ Y
    staticHearts.push({ id: t, left: x, top: y, size: 8 });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100, // Ngẫu nhiên theo chiều ngang
          size: Math.random() * 30 + 10, // Kích thước ngẫu nhiên
        },
      ]);
    }, 600); // Tạo trái tim nhanh hơn

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Happy Women's Day</h1>
      <p className="subtitle">
        Chúc em bé của anh một ngày 8/3 thật ý nghĩa, luôn vui vẻ và hạnh phúc
        💞, chúc em chân cứng đá mềm, đường xa không mỏi, đường đời có anh 💖,
        chúc em tất cả trừ vất vả nhe.
      </p>
      <p className="subtitle">💕 Love you 💕</p>
      {/* Hiển thị các trái tim động */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -window.innerHeight }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Hiển thị các trái tim tĩnh tạo thành hình trái tim */}
      <div className="heart-container">
        {staticHearts.map((heart) => (
          <div
            key={heart.id}
            className="static-heart"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}
