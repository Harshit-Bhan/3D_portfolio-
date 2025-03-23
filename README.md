# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<- CODE EXPLANATION ->

<----------------------->   
COMPUTER.JSX

<Suspense>: A React component that allows you to delay rendering certain parts of the UI until some data or components are ready. 

<everything related to three js appears on canvas hence we need to import canvas>

fallback={<CanvasLoader />} means while waiting, CanvasLoader (a loading animation) will be shown.

<OrbitControls> (from @react-three/drei): Adds mouse controls to move the camera around the scene.

enableZoom={false} → Disables zooming with scroll.

maxPolarAngle={Math.PI / 2} → Restricts upward movement (so the camera doesn’t rotate upside down).

minPolarAngle={Math.PI / 2} → Fixes the camera at this angle (so the camera can’t tilt down or up).

<-------------------------->

ABOUT.JSX

A motion.div is an animated version of a regular div provided by Framer Motion. Unlike a normal div, which only serves as a static container, motion.div allows you to add animations, gestures, and transitions directly. It supports properties like initial, animate, and exit for smooth animations and interactions, whereas a standard div has no built-in animation capabilities. Additionally, motion.div can respond to gestures such as whileHover and whileTap, making it useful for interactive UI elements. If no animation is needed, a normal div is more efficient as it avoids unnecessary rendering overhead.

<Tilt> is used to create a parallax effect when moving your mouse over an element. It slightly rotates and moves based on the cursor position.

<Service Card Animation (Framer Motion + Tilt)>
Each card appears with a fade-in + slide effect.
The animation is handled using Framer Motion's motion.div inside a Tilt component for a parallax effect.
Cards slide in from the right (x: 100 to x: 0) and fade in (opacity: 0 → 1).
Spring animation is used for a smooth, natural motion.
Animation delay depends on the card's index (0.5 * index), so each card appears one after another.
First card (index = 0) → Appears immediately (delay = 0s)
Second card (index = 1) → Appears after 0.5s
Third card (index = 2) → Appears after 1s, and so on.
This creates a cascading effect, making the UI feel more dynamic and engaging.
The direction can be changed by modifying "right" inside the fadeIn(...) function:
"left" → Cards appear from the left.
"up" → Cards appear from below.
"down" → Cards appear from above.

<Vertical Timeline Summary>

VerticalTimeline → The main container for the timeline.

VerticalTimelineElement → Represents an individual event or step in the timeline.

icon → Defines the icon for the timeline event (can be a React component like FaCode or an image).

iconStyle → Customizes the appearance of the icon (e.g., background color, size, text color).

react-vertical-timeline-component is the library used to create the timeline, and it requires importing its CSS for proper styling.

Framer Motion can be used inside VerticalTimelineElement to add animations.

<<-------------------------------Ball_Canvas------------------------------------->>

<useTexture> loads and converts an image into a usable texture.
<Decal> applies that texture to a 3D surface.

<We use useTexture because useState alone won't convert an image into a texture that Three.js can use.>

<<----------------------------WORK.JSX----------------------->

<Variants> is an object that defines different animation states (e.g., initial, animate, exit).

<fadeIn> is a specific animation that can be one of the properties inside a variants object.

<<---------------CONTACT.JSX----------------->>

<useRef> is a React Hook that creates a mutable reference (ref) to store a value that persists across renders without causing re-renders when updated. It is mainly used to access and interact with DOM elements or to store mutable values that don’t trigger a component re-render.

<frameloop="demand" in React Three Fiber
By default, React Three Fiber continuously re-renders frames at 60 FPS. This is useful for animations but can waste resources when the scene is static.>

🔹 What Does frameloop="demand" Do?
It stops the scene from rendering constantly.

It renders a new frame only when necessary (e.g., when the camera moves, user interacts, or state changes).

<<-------------EARTH.JSX---------------->>

Yes, <primitive /> is basically used to render a pre-built 3D model or any Three.js object directly in React Three Fiber. Instead of manually creating shapes and materials, you can just load and display a full 3D scene. 🚀


<<---------------STARS.JSX---------------->>

 <mesh> → Creates a Custom 3D Object
Used for manually creating 3D shapes.

You define its geometry (shape) and material (appearance).

It allows you to apply transformations like position, rotation, and scale directly inside it.

<primitive> → Renders a Pre-Loaded 3D Model
Used for rendering 3D models loaded from files (.gltf, .glb, etc.).

Instead of defining geometry and materials manually, it directly renders an existing 3D model.

You pass an entire Three.js object (GLTF scene, light, camera, etc.).

The <points> component in React Three Fiber is used to render point clouds, which are collections of small dots in 3D space instead of solid meshes. Each dot represents a point in space and can be used to create particle effects, stars, fireflies, or even complex volumetric visuals.

In React Three Fiber, <group> is used to group multiple 3D objects together, so they can be transformed (moved, rotated, or scaled) as a single unit.

Key Points 🔑
1️⃣ Creates a Reference (useRef())

Stores a reference to the Points object for future modifications.

2️⃣ Generates Random Star Positions

Uses random.inSphere() to create 5000 points inside a sphere of radius 1.2.

3️⃣ Renders the Points

<group> → Groups all points together.

<Points> → Efficiently renders stars as points instead of meshes.

Optimized Performance:

stride={3} → Each point has (x, y, z) coordinates.

frustumCulled → Hides points outside the camera view.

Final Output
✔ A 3D cluster of stars randomly placed inside a sphere.
✔ Lightweight & optimized (uses points instead of heavy meshes).
✔ Can be animated later using useRef().

Perfect for creating a space/starry background! 🚀✨

✅ state → Holds the current state of the scene (like camera position, mouse movements, etc.).

✅ useFrame → Runs on every frame (like a loop) to update animations or logic.

✅ delta → The time difference between two frames, used to make movements smooth and consistent across different FPS. <iska mathematically check kro chatgpt pe>














