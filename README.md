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

fallback={<CanvasLoader />} means while waiting, CanvasLoader (a loading animation) will be shown.

<OrbitControls> (from @react-three/drei): Adds mouse controls to move the camera around the scene.

enableZoom={false} → Disables zooming with scroll.

maxPolarAngle={Math.PI / 2} → Restricts upward movement (so the camera doesn’t rotate upside down).

minPolarAngle={Math.PI / 2} → Fixes the camera at this angle (so the camera can’t tilt down or up).


