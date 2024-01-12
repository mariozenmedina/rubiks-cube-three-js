const options = {
    targetSelector: '#scene',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xBBBBBB
}

const renderer = new THREE.WebGLRenderer(
    { antialias: true }
);

renderer.setSize( options.width, options.height );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();

scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.x = -7;
camera.position.y = 7;
camera.position.z = 18;

const light = new THREE.HemisphereLight(
    0xFFFFFF, 0x111111, 2.7
);
light.position.y = 1;
light.position.x = 0;
light.position.z = 0;

scene.add(light);

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        //scene
    },
    {
        grid: { visible: false },
        axes: { visible: false }
    }
);

//x3.add(camera);
//x3.add(light, { helper: { visible: false } });