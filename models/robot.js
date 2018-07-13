	// call the render function
	var step = 0;

	// once everything is loaded, we run our Three.js stuff.
	var keyboard	= new THREEx.KeyboardState();
	
	var velocity=0;
	var maxvelocity= 3.5;
	var robotScale=2;
	
	// create meshes
	var sphere = createMesh(new THREE.SphereGeometry(robotScale, 10, 10));
	sphere.position.set(0,-2,0);
	var neck = createMesh(new THREE.CylinderGeometry(0.1*robotScale,0.1*robotScale,2,7*robotScale))
	neck.position.set(0,0,0);

	var robot = new THREE.Group();
	robot.add( neck );
	robot.add( sphere );
	
	// add the sphere to the scene


	scene.add(robot);
	
	neck.add(sphere);

	//render();

	function moveRobot() {

		if(keyboard.pressed("D"))
		{
			if (velocity<maxvelocity)
				velocity += 0.1;
		}
		else if(keyboard.pressed("A"))
		{
			if (velocity>-maxvelocity)
				velocity -= 0.1;
		}
		else
		{
			if (Math.abs(velocity)>0.01)
				velocity = velocity/1.1;
			else
				velocity = 0;
		}
		
		sphere.rotation.z = step -= 0.05*velocity;
		var axis = new THREE.Vector3(neck.position.x+(velocity),neck.position.y,0);
		neck.translateOnAxis(neck.worldToLocal(axis),0.05); 

	}