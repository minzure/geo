import * as THREE from 'three';
//import {} from "three-addons/build"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);


document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x1D44CC } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();


var text2 = document.createElement('h1');
text2.style.position = 'absolute';
text2.style.width = 100;    
text2.style.height = 100;
text2.style.backgroundColor = "white";
text2.innerHTML = "GEO";
text2.style.top = window.innerHeight/2 + 'px';
text2.style.left =  window.innerWidth/2 - 50+ 'px';
document.body.appendChild(text2);


