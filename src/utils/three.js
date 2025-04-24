import * as THREE from 'three';
export const initScene = container => {
  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505);
  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  return {
    scene,
    camera,
    renderer
  };
};
export const createParticles = () => {
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x36BCF7,
    transparent: true,
    opacity: 0.8
  });
  // Create mesh
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  return particles;
};
export const animateParticles = particles => {
  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.0005;
};
export const createTextMesh = (text, font, color = 0xffffff, size = 0.5) => {
  const textGeometry = new THREE.TextGeometry(text, {
    font: font,
    size: size,
    height: 0.1,
    curveSegments: 12,
    bevelEnabled: false
  });
  const textMaterial = new THREE.MeshStandardMaterial({
    color: color
  });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textGeometry.center();
  return textMesh;
};