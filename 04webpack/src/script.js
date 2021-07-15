import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Red Cube

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Positioning

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)

scene.add(mesh)
//Scale 
// mesh.scale.x = 1.5
// mesh.scale.y = 0.4
// mesh.scale.z = 0.4
mesh.scale.set(1.5, 0.4, 0.4)

//Rotation 
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

// Axis helper

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


// Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

camera.lookAt(new THREE.Vector3(0, -1, 0) )

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)