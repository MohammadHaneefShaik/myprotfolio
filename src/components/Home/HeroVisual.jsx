import React, { useEffect, useState } from "react";
import "./HeroVisual.css";

const codeLines = [
  { text: "const developer = {", color: "#c084fc" },
  { text: '  name: "Mohammad Haneef",', color: "#e2e8f0" },
  { text: '  role: "Full-Stack Developer",', color: "#e2e8f0" },
  { text: '  stack: ["React", "Node", "MongoDB"],', color: "#e2e8f0" },
  { text: "  passion: true,", color: "#4ade80" },
  { text: "  coffee: Infinity,", color: "#fbbf24" },
  { text: "};", color: "#c084fc" },
  { text: "", color: "" },
  { text: "while (developer.passion) {", color: "#818cf8" },
  { text: "  buildAmazingThings();", color: "#67e8f9" },
  { text: "}", color: "#818cf8" },
];

function HeroVisual() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          // Reset after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-visual">
      {/* Animated gradient orb behind the terminal */}
      <div className="hero-glow"></div>

      {/* Code Terminal */}
      <div className="hero-terminal">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="terminal-title">portfolio.js</span>
          <div style={{ width: "52px" }}></div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`code-line ${index < visibleLines ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="line-number">{index + 1}</span>
              <span style={{ color: line.color }}>{line.text}</span>
              {index === visibleLines - 1 && (
                <span className="cursor-blink">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating tech badges */}
      <div className="floating-badge badge-1">⚛️ React</div>
      <div className="floating-badge badge-2">🟢 Node.js</div>
      <div className="floating-badge badge-3">🍃 MongoDB</div>
    </div>
  );
}

export default HeroVisual;
