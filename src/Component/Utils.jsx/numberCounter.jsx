import { useEffect, useState, useRef } from "react";

const NumberCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationSpeed = 20; // Lower means faster counting

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = Math.ceil(targetNumber / (1000 / animationSpeed)); // Adjust speed

          const counter = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, animationSpeed);
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the section is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <h1 ref={ref}>
      {count.toLocaleString()} {/* Formats number with commas */}
    </h1>
  );
};

export default NumberCounter;

// const StatsSection = () => {
//   return (
//     <div
//       style={{ height: "100vh", background: "#f4f4f4", textAlign: "center" }}
//     >
//       <h1>Scroll Down</h1>

//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#222",
//           color: "#fff",
//         }}
//       >
//         <h1>Our Achievements</h1>
//         <NumberCounter targetNumber={12220} />
//         <NumberCounter targetNumber={3406} />
//       </div>
//     </div>
//   );
// };

// export default StatsSection;
