	// create meshes
	var tree = createMesh(new THREE.CylinderGeometry(0.2,0.2,5,5))


	// add the sphere to the scene
	scene.add(tree);
	tree.position.x=5;
	tree.position.y=-2;