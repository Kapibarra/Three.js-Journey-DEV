import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()


// Group
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
scene.add(group)

const cube1 = new THREE.Mesh(
new THREE.BoxGeometry(1,1,1),
new THREE.MeshBasicMaterial({color: 0xff0000})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x002Aff})
    )
cube2.position.x = 1.3    
group.add(cube2)

const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: 0x00ff2A})
        )
        cube3.position.x = -1.3         
group.add(cube3)
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

// camera.lookAt(new THREE.Vector3(0, -1, 0) )

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)