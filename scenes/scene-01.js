const preto = 0x000000;
const branco = 0xFFFFFF;
const amarelo = 0xFfff00;
const laranja = 0xFf6e00;
const verde = 0x00ff24;
const azul = 0x00e8ff;
const vermelho = 0xFf0004;

const destaque = 0xF0F0F0;

const loader = new THREE.TextureLoader();

function createCube() {
    return new THREE.BoxBufferGeometry(.9, .9, .9);
}
function returnMesh(colore) {
    return new THREE.MeshStandardMaterial(
        {
            color: colore,
            roughness: 0,
            metalness: 0,
            map: colore != 0x000000 ? loader.load('./maps/marble/Marble_Tiles_001_basecolor.jpg') : null,
            normalMap: colore != 0x000000 ? loader.load('./maps/marble/Marble_Tiles_001_normal.jpg') : null,
            roughnessMap: colore != 0x000000 ? loader.load('./maps/marble/Marble_Tiles_001_roughness.jpg') : null,
            aoMap: colore != 0x000000 ? loader.load('./maps/marble/Marble_Tiles_001_ambientOcclusion.jpg') : null,
        }
    );
}
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function swapEls(idx) {

    let donRepeat = [];
    idx.forEach( (item, i) => {
        let from = cloneGroupIndexes[0][item];
        let to = cloneGroupIndexes[0][i];
        if(!donRepeat.includes(to)){
            donRepeat.push(from);
            [ cubes[to], cubes[from] ] = [ cubes[from], cubes[to] ];
        }
    });
}



//FLOOR
let floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000,1000),
    new THREE.MeshStandardMaterial(
        { color: branco, roughness: 0, metalness: 0, side: THREE.DoubleSide }
    )
);
scene.add(floor);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2;
floor.receiveShadow = true;
//x3.add(floor);

//LIGHT
const focusLight = new THREE.SpotLight(
    0xabf0ff, 8, 300, 3
);
focusLight.position.x = 15;
focusLight.position.y = 7.6;
focusLight.position.z = 1;
focusLight.castShadow = true;
focusLight.shadow.mapSize.width = 2048;
focusLight.shadow.mapSize.height = 2048;
scene.add(focusLight);
//x3.add(focusLight, { helper: { visible: false } });




//amarelo em cima, laranja na frente e verde na esquerda
const mat1 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat2 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat3 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat4 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat5 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat6 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat7 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat8 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat9 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(laranja), //frente
    returnMesh(preto), //costas
];
const mat10 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat11 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat12 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat13 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat14 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat15 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat16 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat17 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat18 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(preto), //costas
];
const mat19 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat20 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat21 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(amarelo), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat22 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat23 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat24 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(preto), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat25 = [
    returnMesh(preto), //direita
    returnMesh(verde), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat26 = [
    returnMesh(preto), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];
const mat27 = [
    returnMesh(azul), //direita
    returnMesh(preto), //esquerda
    returnMesh(preto), //topo
    returnMesh(branco), //base
    returnMesh(preto), //frente
    returnMesh(vermelho), //costas
];

cubes = [];
cubes[0] = new THREE.Mesh(createCube(), mat1);
cubes[0].position.z = 1;
cubes[0].position.x = -1;
cubes[0].position.y = 1;

cubes[1] = new THREE.Mesh(createCube(), mat2);
cubes[1].position.z = 1;
cubes[1].position.x = 0;
cubes[1].position.y = 1;

cubes[2] = new THREE.Mesh(createCube(), mat3);
cubes[2].position.z = 1;
cubes[2].position.x = 1;
cubes[2].position.y = 1;

cubes[3] = new THREE.Mesh(createCube(), mat4);
cubes[3].position.z = 1;
cubes[3].position.x = -1;
cubes[3].position.y = 0;

cubes[4] = new THREE.Mesh(createCube(), mat5);
cubes[4].position.z = 1;
cubes[4].position.x = 0;
cubes[4].position.y = 0;

cubes[5] = new THREE.Mesh(createCube(), mat6);
cubes[5].position.z = 1;
cubes[5].position.x = 1;
cubes[5].position.y = 0;

cubes[6] = new THREE.Mesh(createCube(), mat7);
cubes[6].position.z = 1;
cubes[6].position.x = -1;
cubes[6].position.y = -1;

cubes[7] = new THREE.Mesh(createCube(), mat8);
cubes[7].position.z = 1;
cubes[7].position.x = 0;
cubes[7].position.y = -1;

cubes[8] = new THREE.Mesh(createCube(), mat9);
cubes[8].position.z = 1;
cubes[8].position.x = 1;
cubes[8].position.y = -1;

cubes[9] = new THREE.Mesh(createCube(), mat10);
cubes[9].position.z = 0;
cubes[9].position.x = -1;
cubes[9].position.y = 1;

cubes[10] = new THREE.Mesh(createCube(), mat11);
cubes[10].position.z = 0;
cubes[10].position.x = 0;
cubes[10].position.y = 1;

cubes[11] = new THREE.Mesh(createCube(), mat12);
cubes[11].position.z = 0;
cubes[11].position.x = 1;
cubes[11].position.y = 1;

cubes[12] = new THREE.Mesh(createCube(), mat13);
cubes[12].position.z = 0;
cubes[12].position.x = -1;
cubes[12].position.y = 0;

cubes[13] = new THREE.Mesh(createCube(), mat14);
cubes[13].position.z = 0;
cubes[13].position.x = 0;
cubes[13].position.y = 0;

cubes[14] = new THREE.Mesh(createCube(), mat15);
cubes[14].position.z = 0;
cubes[14].position.x = 1;
cubes[14].position.y = 0;

cubes[15] = new THREE.Mesh(createCube(), mat16);
cubes[15].position.z = 0;
cubes[15].position.x = -1;
cubes[15].position.y = -1;

cubes[16] = new THREE.Mesh(createCube(), mat17);
cubes[16].position.z = 0;
cubes[16].position.x = 0;
cubes[16].position.y = -1;

cubes[17] = new THREE.Mesh(createCube(), mat18);
cubes[17].position.z = 0;
cubes[17].position.x = 1;
cubes[17].position.y = -1;

cubes[18] = new THREE.Mesh(createCube(), mat19);
cubes[18].position.z = -1;
cubes[18].position.x = -1;
cubes[18].position.y = 1;

cubes[19] = new THREE.Mesh(createCube(), mat20);
cubes[19].position.z = -1;
cubes[19].position.x = 0;
cubes[19].position.y = 1;

cubes[20] = new THREE.Mesh(createCube(), mat21);
cubes[20].position.z = -1;
cubes[20].position.x = 1;
cubes[20].position.y = 1;

cubes[21] = new THREE.Mesh(createCube(), mat22);
cubes[21].position.z = -1;
cubes[21].position.x = -1;
cubes[21].position.y = 0;

cubes[22] = new THREE.Mesh(createCube(), mat23);
cubes[22].position.z = -1;
cubes[22].position.x = 0;
cubes[22].position.y = 0;

cubes[23] = new THREE.Mesh(createCube(), mat24);
cubes[23].position.z = -1;
cubes[23].position.x = 1;
cubes[23].position.y = 0;

cubes[24] = new THREE.Mesh(createCube(), mat25);
cubes[24].position.z = -1;
cubes[24].position.x = -1;
cubes[24].position.y = -1;

cubes[25] = new THREE.Mesh(createCube(), mat26);
cubes[25].position.z = -1;
cubes[25].position.x = 0;
cubes[25].position.y = -1;

cubes[26] = new THREE.Mesh(createCube(), mat27);
cubes[26].position.z = -1;
cubes[26].position.x = 1;
cubes[26].position.y = -1;

cubes.forEach(cube => {
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
});


let groupIndexes = {
    x: [
        [0, 3, 6, 9, 12, 15, 18, 21, 24], //L
        [1, 4, 7, 10, 13, 16, 19, 22, 25], //X
        [2, 5, 8, 11, 14, 17, 20, 23, 26], //R
    ],
    y: [
        [20, 19, 18, 11, 10, 9, 2, 1, 0], //U
        [23, 22, 21, 14, 13, 12, 5, 4, 3], //Y
        [26, 25, 24, 17, 16, 15, 8, 7, 6], //D
    ],
    z: [
        [0, 3, 6, 1, 4, 7, 2, 5, 8], //F
        [9, 12, 15, 10, 13, 16, 11, 14, 17], //Z
        [18, 21, 24, 19, 22, 25, 20, 23, 26], //B
    ]
}
let cloneGroupIndexes;
let sortRotationArr = ['x', 'y', 'z'];

let animation = {
    status: false,
    pivot: undefined,
    target: 0,
    sortedAxis: undefined,
}

function rotate() {
    if (!animation.status) {
        animation.status = true;
        animation.target = Math.random() < .5 ? Math.PI / 2 : -Math.PI / 2;
        shuffleArray(sortRotationArr);
        animation.sortedAxis = sortRotationArr[0];

        animation.pivot = new THREE.Object3D();
        animation.pivot.rotation.set(0, 0, 0);
        scene.add(animation.pivot);

        cloneGroupIndexes = groupIndexes[animation.sortedAxis];
        shuffleArray(cloneGroupIndexes);
        for (let idx in cloneGroupIndexes[0]) {
            animation.pivot.attach(cubes[cloneGroupIndexes[0][idx]]);
        }
        scene.updateMatrixWorld()
    }
    else {
        switch (animation.sortedAxis) {
            case 'x':
                rotateX();
                break;
            case 'y':
                rotateY();
                break;
            case 'z':
                rotateZ();
                break;
        }
    }
}

function resetAnimation() {
    for (let idx in groupIndexes[animation.sortedAxis][0]) {
        scene.attach(cubes[groupIndexes[animation.sortedAxis][0][idx]]);
    }
    animation.pivot.rotation.set(0, 0, 0);
    scene.updateMatrixWorld()
    animation.pivot.updateMatrixWorld();
    animation.pivot = undefined;
    
    adjustPermutation();
    animation.status = false;
}

adjustPermutation = () => {
    /* console.log(
        cloneGroupIndexes[0],
        animation.sortedAxis,
        animation.target
    ) */
    if (animation.target < 0) {
        //rotated anticlockwise
        /*
        0 -> 2
        1 -> 5
        2 -> 8
        3 -> 1
        4 -> 4
        5 -> 7
        6 -> 0
        7 -> 3
        8 -> 6
        */
       swapEls([6, 3, 0, 7, 4, 1, 8, 5, 2]);
    }
    else {
        //rotated clockwise
        swapEls([2, 5, 8, 1, 4, 7, 0, 3, 6]);
    }
}

function rotateX() {
    if (Math.abs(animation.pivot.rotation.x) < Math.abs(animation.target)) {
        animation.pivot.rotation.x += animation.target - animation.pivot.rotation.x > 0 ? .1 : -.1;
    }
    else {
        animation.pivot.rotation.x = animation.target;
        resetAnimation();
    }
}
function rotateY() {
    if (Math.abs(animation.pivot.rotation.y) < Math.abs(animation.target)) {
        animation.pivot.rotation.y += animation.target - animation.pivot.rotation.y > 0 ? .1 : -.1;
    }
    else {
        animation.pivot.rotation.y = animation.target;
        resetAnimation();
    }
}
function rotateZ() {
    if (Math.abs(animation.pivot.rotation.z) < Math.abs(animation.target)) {
        animation.pivot.rotation.z += animation.target - animation.pivot.rotation.z > 0 ? .1 : -.1;
    }
    else {
        animation.pivot.rotation.z = animation.target;
        resetAnimation();
    }
}

renderer.setAnimationLoop(() => {
    //x3.tick();

    rotate();
    renderer.render(scene, camera);

    /* x3.fps(
        () => { renderer.render(scene, camera); }
    ); */
});