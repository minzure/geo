import * as THREE from 'three';
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1 , 500);
camera.position.set(0,0, 100);
camera.lookAt(0,0,0);

const screen = new THREE.Scene();

const material = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10,0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

alert("TEST")