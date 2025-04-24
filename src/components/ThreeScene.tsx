import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { initScene, createParticles, animateParticles } from '../utils/three';
interface ThreeSceneProps {
  containerRef: React.RefObject<HTMLDivElement>;
}
const ThreeScene: React.FC<ThreeSceneProps> = ({
  containerRef
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    animationId: number;
  } | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    // Initialize Three.js scene
    const {
      scene,
      camera,
      renderer
    } = initScene(canvasRef.current);
    // Create particle system
    const particles = createParticles();
    scene.add(particles);
    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      animateParticles(particles);
      renderer.render(scene, camera);
    };
    animate();
    // Store references for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      animationId
    };
    // Resize handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      const {
        camera,
        renderer
      } = sceneRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);
  return <div ref={canvasRef} className="w-full h-full" />;
};
export default ThreeScene;