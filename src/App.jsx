import React, { useEffect, useState } from "react";

function App() {
  const [show1, setShow1] = useState(null);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    console.log(
      rect.top,
      rect.bottom,
      window.innerHeight,
      document.documentElement.clientHeight
    );
    return (
      rect.top <= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      if (isInViewport(document.getElementById("section1"))) {
        setShow1({ open: true, sectionName: "sectionName 1" });
        console.log;
      }

      if (isInViewport(document.getElementById("section2"))) {
        setShow1({ open: true, sectionName: "sectionName 2" });
      }

      if (isInViewport(document.getElementById("section3"))) {
        setShow1({ open: true, sectionName: "sectionName 3" });
      }

      if (isInViewport(document.getElementById("end"))) {
        setShow1(null);
      }
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="overflow-x-hidden">
        <div className="h-screen w-screen bg-red-600"></div>
        <div
          className="grid h-screen w-screen place-items-center bg-blue-800"
          id="section1"
        >
          <h1 className="text-8xl text-white">Section 1</h1>
        </div>
        <div
          className="grid h-screen w-screen place-items-center bg-yellow-500"
          id="section2"
        >
          <h1 className="text-8xl text-white">Section 2</h1>
        </div>
        <div
          className="grid h-screen w-screen place-items-center bg-pink-800"
          id="section3"
        >
          {" "}
          <h1 className="text-8xl text-white">Section 3</h1>
        </div>
        <div className="h-screen w-screen bg-pink-800" id="end"></div>
      </div>

      {show1?.open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 10000,
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "200px",
          }}
        >
          <h1>{show1?.sectionName}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
