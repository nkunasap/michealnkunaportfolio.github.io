// Initialize Three.js scene for the robot
let scene, camera, renderer, robot;

function initRobot() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 100, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight - 100); // Adjust height
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('robot-container').appendChild(renderer.domElement);
    
    // Create robot
    createRobot();
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Animation loop
    animateRobot();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function createRobot() {
    // Robot group
    robot = new THREE.Group();
    robot.scale.set(1.5, 1.5, 1.5); // Scale the robot

    // Body
    const bodyGeometry = new THREE.BoxGeometry(1, 1.2, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x3498db });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    robot.add(body);
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0x2980b9 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.9;
    robot.add(head);
    
    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 1, 0.4);
    robot.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 1, 0.4);
    robot.add(rightEye);
    
    // Eye pupils
    const pupilGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const pupilMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.2, 1, 0.45);
    robot.add(leftPupil);
    
    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.2, 1, 0.45);
    robot.add(rightPupil);
    
    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0x3498db });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.7, 0.2, 0);
    leftArm.rotation.z = Math.PI / 4;
    robot.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.7, 0.2, 0);
    rightArm.rotation.z = -Math.PI / 4;
    robot.add(rightArm);
    
    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 16);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0x2c3e50 });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.3, -0.9, 0);
    robot.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.3, -0.9, 0);
    robot.add(rightLeg);
    
    // Add robot to the scene
    scene.add(robot);
}

function animateRobot() {
    requestAnimationFrame(animateRobot);

    // Optional: Add simple animation to make it more lively
    robot.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / 100;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight - 100);
}

// Call the init function to kick things off
initRobot();
