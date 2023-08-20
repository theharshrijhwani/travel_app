// src/Components/Spline3DScene.js
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const Spline3DScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    const sceneURL =
      "https://prod.spline.design/I9kHreRgtK3xlNBz/scene.splinecode";

    app.load(sceneURL);

    return () => {
      app.unload();
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
        id="canvas3d"
      />
    </div>
  );
};

export default Spline3DScene;
