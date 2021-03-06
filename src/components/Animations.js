import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class Animations extends Component {

    state = { width: window.innerWidth, height: window.innerHeight, halfWidth: window.innerWidth / 2 };


    componentDidMount() {
        const scene = new THREE.Scene();

        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);

        const canvasContainer = document.querySelector('#divR');

        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);


        let aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
        const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        camera.position.z = 2

        /*         document.body.appendChild(renderer.domElement);
         */
        const controls = new OrbitControls(camera, canvas)

        controls.target.set(0, 0, 0);
        controls.enableDamping = true;
        controls.enableRotate = true;
        controls.enableZoom = true;
        controls.update();

        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        })

        const cube = new THREE.Mesh(geometry, material)


        scene.add(cube)

        window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            console.log("resize fired")
            window.location.reload();
            render()
        }

        function animate() {
            requestAnimationFrame(animate)

            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            render()
        }

        function render() {
            renderer.render(scene, camera)
        }

        animate()

        window.addEventListener('resize', this.updateDimensions);
        /*         window.addEventListener('resize',canvasContainer.location.reload()); */
        window.addEventListener('mousemove', this.updateDimensions);

    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight, halfWidth: window.innerWidth / 2 });
    };


    render() {
        return (


            <div id='mainDiv'

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blueviolet'
                    /*  height: '800hv' */
                }}
            >

                <div style={{
                    justifyContent: 'right',
                    alignItems: 'right',

                    height: this.state.height / 2,
                    width: this.state.width / 2

                }}>



<div class="bg-gray-500 hover:bg-red-600 ..."
style={{borderRadius:'25px'}}
>asdasdasdasdasdasd</div>

                    <p style={{ color: 'green' }}>Window size: {this.state.width} x {this.state.height} </p>
                    <p style={{ color: 'red' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,

                    </p>
                    <p style={{ color: 'red' }}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p style={{ color: 'red' }}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p style={{ color: 'red' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <p style={{ color: 'red' }}> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                </div>



                {this.state.width > this.state.halfWidth ? (<div id='divR'

                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',

                        height: this.state.height / 2,
                        width: this.state.width / 2

                    }}
                >


                    <canvas id='c'></canvas>

                </div>) : (<div id='divR'

                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',

                        height: this.state.height / 5,
                        width: this.state.width / 5

                    }}
                >
                    <canvas id='c'></canvas>
                </div>)}

                <div>

                </div>

            </div>


        );
    }
}

export default Animations;