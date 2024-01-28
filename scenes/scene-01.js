const cubeGeometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#FFFFFF" });

const cube = new THREE.Mesh(cubeGeometry, material);

scene.add(cube);

x3.add(cube);

renderer.setAnimationLoop(() => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  x3.tick();

  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
