import gsap from "gsap";
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable, InertiaPlugin);

function App() {
  useGSAP(() => {
    Draggable.create("img", {
      type: "x, y",
      bounds: ".wrapper",
      inertia: true,
    });
  });

  return (
    <div className="wrapper">
      <img src="https://assets.codepen.io/16327/gsap-logo-green.svg" className="logo react" alt="React logo" />
    </div>
  )
}

export default App
