import * as THREE from 'three';
//import {} from "three-addons/build"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);


document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x1D44CC } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render(time){
	time *= 0.001;
	cube.rotation.x = time;
	cube.rotation.y = time/3;
	renderer.render(scene, camera);

	requestAnimationFrame(render)
}


const light = new THREE.DirectionalLight(0xFFFFF, 1);
light.position.set(-1, 2, 4);
scene.add(light)
requestAnimationFrame(render);


const title = document.createElement('h1');
title.classList.add("title")
title.innerHTML = "GEO";
title.style.top = window.innerHeight/3 + 'px';
title.style.left =  window.innerWidth/2 - 50+ 'px';
document.body.appendChild(title);

const text = document.createElement('h2');
title.classList.add("title");
