import * as THREE from 'three';
import './style.css'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

//light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)
//camera

camera.position.z = 15;
scene.add(camera)


function animate() {

  cube.rotation.x += 0.0;
  cube.rotation.y += 0;

  renderer.render(scene, camera);

}