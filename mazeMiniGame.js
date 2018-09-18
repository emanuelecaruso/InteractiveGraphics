
//TERZA PROVA

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0  );
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
var objects = [];

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 170;

var startColor;

var objectsThatChanges = [];
var xCoordsToReset = [];
var yCoordsToReset = [];

var circlesToReset = [];
var xCircleCoordsToReset = [];
var yCircleCoordsToReset = [];

var XstartSquarePosition =-100;
var YstartSquarePosition = 100;
xCoordsToReset.push(XstartSquarePosition);
yCoordsToReset.push(YstartSquarePosition);

var XstartGreenDoorPos = 1;
var YstartGreenDoorPos = -47;
xCoordsToReset.push(XstartGreenDoorPos);
yCoordsToReset.push(YstartGreenDoorPos);

var XstartYellowDoorPos = 42;
var YstartYellowDoorPos = 23;
xCoordsToReset.push(XstartYellowDoorPos);
yCoordsToReset.push(YstartYellowDoorPos);

var XstartPurpleDoorPos = -42;
var YstartPurpleDoorPos = 84;
xCoordsToReset.push(XstartPurpleDoorPos);
yCoordsToReset.push(YstartPurpleDoorPos);

var XstartOrangeDoorPos = -12;
var YstartOrangeDoorPos = -62;
xCoordsToReset.push(XstartOrangeDoorPos);
yCoordsToReset.push(YstartOrangeDoorPos);


var XcircleGoalPos = 71;
var YcircleGoalPos = -74;
xCircleCoordsToReset.push(XcircleGoalPos);
yCircleCoordsToReset.push(YcircleGoalPos);

var XcircleStartPos = -100;
var YcircleStartPos = 100;
xCircleCoordsToReset.push(XcircleStartPos);
yCircleCoordsToReset.push(YcircleStartPos);


var XpurpleCirlceUnlockPos = -70;
var YpurpleCircleUnlockPos = 100;
xCircleCoordsToReset.push(XpurpleCirlceUnlockPos);
yCircleCoordsToReset.push(YpurpleCircleUnlockPos);


var XyellowCircleUnlockPos = 14;
var YyellowcircleUnlockPos = 69;
xCircleCoordsToReset.push(XyellowCircleUnlockPos);
yCircleCoordsToReset.push(YyellowcircleUnlockPos);


var XpinkCircleUnlock = -100;
var YpinkCircleUnlock = -74;
xCircleCoordsToReset.push(XpinkCircleUnlock);
yCircleCoordsToReset.push(YpinkCircleUnlock);


var XorangeCircleUnlock = -40;
var YorangeCircleUnlock = -74;
xCircleCoordsToReset.push(XorangeCircleUnlock);
yCircleCoordsToReset.push(YorangeCircleUnlock);


var XbrownCircleUnlock = -70;
var YbrownCircleUnlock = 69;
xCircleCoordsToReset.push(XbrownCircleUnlock);
yCircleCoordsToReset.push(YbrownCircleUnlock);


var XprawnCircleUnlock = 71;
var YprawnCircleUnlock = 100;
xCircleCoordsToReset.push(XprawnCircleUnlock);
yCircleCoordsToReset.push(YprawnCircleUnlock);



function init() {
	scene.add( new THREE.AmbientLight( 0xFFFFFF  ) ); //white

	var light = new THREE.SpotLight( 0xffffff, 1.5 );
	light.position.set( 0, 500, 2000 );

	scene.add(light);

	var geometry = new THREE.PlaneGeometry( 20, 20 ); //simple 2D square
	//var geometry = new THREE.SphereGeometry( 40, 40, 40 );


	var square = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x0000FF } ) ); //blu
	var sqbb = new THREE.Box3().setFromObject(square);
	square.name = "square";


	square.position.x = -100
	//console.log(square.position.x);
	square.position.y = 100;
	//console.log(square.position.y);
	//square.position.z = 10;
	//console.log(square.position.z);

	square.castShadow = true;
	square.receiveShadow = true;

	scene.add( square );

	objects.push( square );

	objectsThatChanges.push(square);



	//objects[1].position.x = objects[0].position.x+44;
	//console.log(objects[1].position.x);

	//console.log(objects[0].position.x);

	/*GRID*/
	var rect = new THREE.PlaneGeometry(2,200);

	var line1 = new THREE.Mesh(rect, new THREE.MeshLambertMaterial( {color: 0x000000})); //riga verticale a sinistra
	line1.name = "line1";
	line1.position.x=objects[0].position.x-14;
	//console.log(line1.position.x);
	line1.position.y=objects[0].position.y-86;
	//line1.position.z=10;
	objects.push(line1);
	scene.add(line1);



	var rect3 = new THREE.PlaneGeometry(200,2);

	var line2 = new THREE.Mesh(rect3, new THREE.MeshLambertMaterial( {color: 0x000000})); //riga orizziontale in basso
	line2.name = "line2";
	line2.position.x=line1.position.x+99;
	//console.log(line2.position.x);
	line2.position.y=line1.position.y-100;
	//line2.position.z=10;
	objects.push(line2);
	scene.add(line2);



	//var rect3 = new THREE.BoxGeometry(200,2);

	var line3 = new THREE.Mesh(rect3, new THREE.MeshLambertMaterial( {color: 0x000000})); //riga orizzontale in alto
	line3.name = "line3";
	line3.position.x=line1.position.x+99;
	//console.log(line3.position.x);
	line3.position.y=line1.position.y+99;
	//line3.position.z=10;
	objects.push(line3);
	scene.add(line3);



	//var rect4 = new THREE.BoxGeometry(2,200);

	var line4 = new THREE.Mesh(rect, new THREE.MeshLambertMaterial( {color: 0x000000})); //riga verticale a destra
	line4.name = "line4";
	line4.position.x=line1.position.x+99*2;
	//console.log(line4.position.x);
	line4.position.y=line1.position.y;
	//line4.position.z=10;
	objects.push(line4);
	scene.add(line4);






	/*MAZE WALLS*/
	var verticalLine1 = new THREE.PlaneGeometry(2,90);

	var line5 = new THREE.Mesh(verticalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line5.name = "line5";
	line5.position.x=line1.position.x+28;
	//console.log(line4.position.x);
	line5.position.y=line1.position.y+55;
	//line5.position.z=10;
	objects.push(line5);
	scene.add(line5);


	var horizontalLine1 = new THREE.PlaneGeometry(30,2);

	var line6 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line6.name = "line6";
	line6.position.x = line5.position.x+15;
	line6.position.y = line5.position.y+15;
	objects.push(line6);
	scene.add(line6);

	var line7 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line7.name = "line7";
	line7.position.x = line6.position.x;
	line7.position.y = line6.position.y-30;
	objects.push(line7);
	scene.add(line7);


	var line8 = new THREE.Mesh(verticalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line8.name = "line8";
	line8.position.x=line7.position.x+15;
	//console.log(line4.position.x);
	line8.position.y=line7.position.y-44;
	//line5.position.z=10;
	objects.push(line8);
	scene.add(line8);


	var verticalLine2 = new THREE.PlaneGeometry(2,80);

	var line9 = new THREE.Mesh(verticalLine2, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line9.name = "line9";
	line9.position.x=line1.position.x+28;
	//console.log(line4.position.x);
	line9.position.y=line1.position.y-60;
	//line5.position.z=10;
	objects.push(line9);
	scene.add(line9);


	var verticalLine3 = new THREE.PlaneGeometry(2,25);
	
	var line10 = new THREE.Mesh(verticalLine3, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line10.name = "line10";
	line10.position.x=line8.position.x+1;
	//console.log(line4.position.x);
	line10.position.y=line1.position.y-88;
	//line5.position.z=10;
	objects.push(line10);
	scene.add(line10);


	var line11 = new THREE.Mesh(verticalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line11.name = "line11";
	line11.position.x=line7.position.x+44
	//console.log(line4.position.x);
	line11.position.y=line1.position.y+55;
	//line5.position.z=10;
	objects.push(line11);
	scene.add(line11);


	var horizontalLine2 = new THREE.PlaneGeometry(20,2);

	var horizontalLine6 = new THREE.PlaneGeometry(32,2);

	var line12 = new THREE.Mesh(horizontalLine6, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in basso a dx finale
	line12.name = "line12";
	line12.position.x=line7.position.x+31;
	//console.log(line6.position.x);
	line12.position.y=line10.position.y+12;
	//line6.position.z=10;
	objects.push(line12);
	scene.add(line12);


	var line13 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //muretto in basso a dx finale
	line13.name = "line13";
	line13.position.x=line7.position.x+30;
	//console.log(line6.position.x);
	line13.position.y=line10.position.y+40;
	//line6.position.z=10;
	objects.push(line13);
	scene.add(line13);

	var line14 = new THREE.Mesh(verticalLine3, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line14.name = "line14";
	line14.position.x=line11.position.x;
	//console.log(line4.position.x);
	line14.position.y=line13.position.y+12;
	//line5.position.z=10;
	objects.push(line14);
	scene.add(line14);


	var verticalLine4 = new THREE.PlaneGeometry(2,32);

	var line15 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line15.name = "line15";
	line15.position.x=line11.position.x+25;
	line15.position.y=line13.position.y+40;
	objects.push(line15);
	scene.add(line15);

	var line16 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line16.name = "line16";
	line16.position.x = line15.position.x+15;
	line16.position.y = line15.position.y+48;
	objects.push(line16);
	scene.add(line16);


	var line17 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line17.name = "line17";
	line17.position.x = line15.position.x+15;
	line17.position.y = line15.position.y+78;
	objects.push(line17);
	scene.add(line17);

	var line18 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line18.name = "line18";
	line18.position.x=line11.position.x+25;
	line18.position.y=line13.position.y+103;
	objects.push(line18);
	scene.add(line18);

	var line19 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line19.name = "line19";
	line19.position.x=line18.position.x+58;
	line19.position.y=line18.position.y;
	objects.push(line19);
	scene.add(line19);	

	
	var horizontalLine3 = new THREE.PlaneGeometry(88,2);

	var line20 = new THREE.Mesh(horizontalLine3, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line20.name = "line20";
	line20.position.x = line15.position.x+43;
	line20.position.y = line15.position.y-16;
	objects.push(line20);
	scene.add(line20);

	var line21 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line21.name = "line21";
	line21.position.x=line18.position.x+58;
	line21.position.y=line13.position.y+72;
	objects.push(line21);
	scene.add(line21);


	var line22 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line22.name = "line22";
	line22.position.x=line18.position.x+29;
	line22.position.y=line13.position.y+72;
	objects.push(line22);
	scene.add(line22);

	var line23 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line23.name = "line23";
	line23.position.x = line15.position.x+44;
	line23.position.y = line15.position.y+78;
	objects.push(line23);
	scene.add(line23);	


	var horizontalLine4 = new THREE.PlaneGeometry(84,2);
	var line24 = new THREE.Mesh(horizontalLine4, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line24.name = "line24";
	line24.position.x = line15.position.x+44;
	line24.position.y = line15.position.y-40;
	objects.push(line24);
	scene.add(line24);

	var line25 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line25.name = "line25";
	line25.position.x = line24.position.x-27;
	line25.position.y = line24.position.y-28;
	objects.push(line25);
	scene.add(line25);

	var line26 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line26.name = "line26";
	line26.position.x = line25.position.x+30;
	line26.position.y = line25.position.y;
	objects.push(line26);
	scene.add(line26);

	var line27 = new THREE.Mesh(verticalLine3, new THREE.MeshLambertMaterial( {color: 0x000000}));
	line27.name = "line27";
	line27.position.x=line26.position.x+14;
	line27.position.y=line13.position.y-40;
	objects.push(line27);
	scene.add(line27);



	var verticalLine5 = new THREE.PlaneGeometry(2,28);
	var line28 = new THREE.Mesh(verticalLine5, new THREE.MeshLambertMaterial( {color: 0x000000})); //green door
	line28.name = "line28";
	line28.position.x=line27.position.x-58;
	line28.position.y=line27.position.y+27;
	objects.push(line28);
	scene.add(line28);

	objectsThatChanges.push(line28);


	var line29 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //yellow door
	line29.name = "line29";
	line29.position.x = line16.position.x+29;
	line29.position.y = line16.position.y-31;
	objects.push(line29);
	scene.add(line29);

	objectsThatChanges.push(line29);



	var line30 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //purple door
	line30.name = "line30";
	line30.position.x = line15.position.x-40;
	line30.position.y = line15.position.y+78;
	objects.push(line30);
	scene.add(line30);

	objectsThatChanges.push(line30);


/*
	var line31 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000})); //purple opened door
	line31.name = "line31";
	line31.position.x = line15.position.x-54;
	line31.position.y = line15.position.y+63;
	objects.push(line31);
	//scene.add(line31);
	//line31.visible = false; //hide the purple opened door (make it visible later)*/

	/*
	line31.traverse(function ( object ) { 
		object.visible = false; } );
	*/

/*
	var line32 = new THREE.Mesh(verticalLine4, new THREE.MeshLambertMaterial( {color: 0x000000})); //yellow opened door
	line32.name = "line32";
	line32.position.x = line16.position.x+43;
	line32.position.y = line16.position.y-48;
	objects.push(line32);
	//scene.add(line32);
	//line32.visible=false; //hide the yellow opened door (make it visible later)*/

	/*
	line32.traverse(function(object) { 
		object.visible=false;
	});
	*/

/*
	var line33 = new THREE.Mesh(horizontalLine1, new THREE.MeshLambertMaterial( {color: 0x000000})); //green opened door
	line33.name = "line33";
	line33.position.x=line27.position.x-74;
	line33.position.y=line27.position.y+38;
	objects.push(line33);*/
	//scene.add(line33);

	//line33.visible=false; //hide the green opened door (make it visible later)

	/*
	line33.traverse(function(object) { 
		object.visible=false;
	});
	*/
/*
	var line34 = new THREE.Mesh(verticalLine3, new THREE.MeshLambertMaterial( {color: 0x000000})); //orange opened door
	line34.name = "line34";
	line34.position.x=line27.position.x-58;
	line34.position.y=line27.position.y;
	objects.push(line34);*/
	//scene.add(line34);

	var horizontalLine5 = new THREE.PlaneGeometry(26,2);

	var line35 = new THREE.Mesh(horizontalLine5, new THREE.MeshLambertMaterial( {color: 0x000000})); //orange door
	line35.name = "line35";
	line35.position.x=line27.position.x-71;
	line35.position.y=line27.position.y+12;
	//line35.rotation.z = Math.PI/2;
	objects.push(line35);
	scene.add(line35);

	objectsThatChanges.push(line35);





	var circle = new THREE.CircleGeometry( 5,40 );

	var circleGoal = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0x008000}));
	circleGoal.name = "circleGoal";
	circleGoal.position.x = line27.position.x+12;
	circleGoal.position.y = line27.position.y;
	objects.push(circleGoal);
	scene.add(circleGoal);

	circlesToReset.push(circleGoal);

	var circleStart = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xFF0000}));
	circleStart.name = "circleStart";
	circleStart.position.x = objects[0].position.x;
	circleStart.position.y = objects[0].position.y;
	objects.push(circleStart);
	scene.add(circleStart);

	circlesToReset.push(circleStart);


	var circleUnlock1 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0x800080}));
	circleUnlock1.name = "purpleCircleUnlock";
	circleUnlock1.position.x = circleStart.position.x+30;
	circleUnlock1.position.y = circleStart.position.y;
	objects.push(circleUnlock1);
	scene.add(circleUnlock1);

	circlesToReset.push(circleUnlock1);


	var circleUnlock2 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xFFFF00}));
	circleUnlock2.name = "yellowCircleUnlock";
	circleUnlock2.position.x = circleGoal.position.x-57;
	circleUnlock2.position.y = circleGoal.position.y+143;
	objects.push(circleUnlock2);
	scene.add(circleUnlock2);

	circlesToReset.push(circleUnlock2);


	var circleUnlock3 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xFF69B4}));
	circleUnlock3.name = "pinkCircleUnlock";
	circleUnlock3.position.x = circleStart.position.x;
	circleUnlock3.position.y = circleStart.position.y-174;
	objects.push(circleUnlock3);
	scene.add(circleUnlock3);

	circlesToReset.push(circleUnlock3);


	var circleUnlock4 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xff4300}));
	circleUnlock4.name = "orangeCircleUnlock";
	circleUnlock4.position.x = circleStart.position.x+60;
	circleUnlock4.position.y = circleStart.position.y-174;
	objects.push(circleUnlock4);
	scene.add(circleUnlock4);

	circlesToReset.push(circleUnlock4);


	var circleUnlock5 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xD2691E}));
	circleUnlock5.name = "brownCircleUnlock";
	circleUnlock5.position.x = circleStart.position.x+30;
	circleUnlock5.position.y = circleStart.position.y-31;
	objects.push(circleUnlock5);
	scene.add(circleUnlock5);

	circlesToReset.push(circleUnlock5);


	var circleUnlock6 = new THREE.Mesh(circle, new THREE.MeshLambertMaterial( {color: 0xb04949}));
	circleUnlock6.name = "prawnCircleUnlock";
	circleUnlock6.position.x = circleGoal.position.x;
	circleUnlock6.position.y = circleStart.position.y;
	objects.push(circleUnlock6);
	scene.add(circleUnlock6);

	circlesToReset.push(circleUnlock6);

	/*for(var i=0; i<objects.length; i++) {
		console.log(objects[i].name);
	}

	console.log("----");

	for(var i=0; i<objectsThatChanges.length; i++) {
		console.log(objectsThatChanges[i].name);
	}

	console.log("----");

	for(var i=0; i<circlesToReset.length; i++) {
		console.log(circlesToReset[i].name);
	}

	console.log("----");

	for(var i=0; i<objects.length; i++) {
		console.log(objects[i].name);
		console.log(objects[i].position.x);
		console.log(objects[i].position.y);
	}
	console.log("----");*/



	//console.log(scene.getObjectByName("line"+2+"").name);
	/*for( i=1; i <= 33; i++) { //i=0 non preso perchè in objects[0] c'è square, in objects[1],....,objects[33] ci sono solo le linee
		console.log((objects[i].name));//scene.getObjectByName("line"+i+"")));
	}*/

}




document.addEventListener("keydown", onDocumentKeyDown);

//document.addEventListener("keyup", onDocumentKeyUp);

/*document.addEventListener("keyup", function(e){ //press spacebar to restart the game
	if(collisionIsVerified(sqbb,objects)) {
		if(e.keyCode == 32) {
    		window.location.reload();
		}
	}
})*/

function onDocumentKeyDown(event) {
	// movement
	var xSpeed = 2;
	var ySpeed = 2;

	//event.preventDefault();

	var sq = scene.getObjectByName("square");
	var sqbb = new THREE.Box3().setFromObject(scene.getObjectByName("square"));
	/*var helper = new THREE.BoxHelper(sq, 0xff0000);
	var helper2 = new THREE.BoxHelper(line1, 0xff0000);

	helper.update();
	helper2.update();
	// If you want a visible bounding box
	scene.add(helper);
	scene.add(helper2);*/

    var keyCode = event.which;




    if (keyCode == 38) { //up arrow


    	if(collisionIsVerified(sqbb, objects) == true ) {
    		sq.material.color.setHex(0xFF0000);
    		sq.position.y+=0;
    	} else {
	    	sq.position.y+=ySpeed;
    	}
    	


    } else if (keyCode == 40) { //down arrow

    	if(collisionIsVerified(sqbb, objects) == true ) {
    		sq.material.color.setHex(0xFF0000);
    		sq.position.y+=0;
    	} else {
    		sq.position.y -= ySpeed;
      	}


    } else if (keyCode == 37) { //left arrow
    	
    	if(collisionIsVerified(sqbb, objects) == true ) {
    		sq.material.color.setHex(0xFF0000);
    		sq.position.x-=0;
    	} else {
    		sq.position.x -= xSpeed;
    	}
    	
        
    } else if (keyCode == 39) { //right arrow
    	
    	if(collisionIsVerified(sqbb, objects) == true ) {
    		sq.material.color.setHex(0xFF0000);
    		sq.position.x+=0;
    	} else {
    		sq.position.x += xSpeed;
    	}

    } else if (keyCode==32) {
    	if(collisionIsVerified(sqbb,objects)==true) {
			//window.location.reload();

			resetPositions(objectsThatChanges,xCoordsToReset,yCoordsToReset);
			resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);
			/*for(var i=0; i<objects.length; i++) {
				var temp = scene.getObjectByName(objects[i].name);
				console.log(temp.name);
				console.log(temp.position.x);
				console.log(temp.position.y);
			}*/
			/*for(var i=0; i<objects.length; i++) {
				scene.remove(objects[i]);
			}*/
			//scene.remove.apply(scene, scene.children);
			//reset();
			//init();
			//animate();
		}
    }

	unlockDoors();

};



function resetPositions(objectsThatChanges, xCoordsToReset, yCoordsToReset) {
	var obj,i;
	for(i=0; i<objectsThatChanges.length; i++) {
		obj = scene.getObjectByName(objectsThatChanges[i].name);
		if(obj.rotation.z != 0) {
			obj.rotation.z = 0;
		}
		if(obj.position.x != xCoordsToReset[i]) {
			obj.position.x = xCoordsToReset[i];
		}

		if(obj.position.y != yCoordsToReset[i]) {
			obj.position.y = yCoordsToReset[i];
		}
	}
	objectsThatChanges[0].material.color.setHex(0x0000FF);	
}



function resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset) {
	var crc,i;
	for(i=0; i<circlesToReset.length; i++) {
		crc = scene.getObjectByName(circlesToReset[i].name);
		if(crc.visible == false) {
			crc.visible = true;
		}
		if(crc.position.x != xCircleCoordsToReset[i]) {
			crc.position.x = xCircleCoordsToReset[i];
		}
		if(crc.position.y != yCircleCoordsToReset[i]) {
			crc.position.y = yCircleCoordsToReset[i];
		}
	}
}


/*function removeDoor(array, door) {
    const index = array.indexOf(element);
	array.splice(index, 1);
}*/


function unlockDoors() {

	var sq = scene.getObjectByName("square");

	var pinkCircle = scene.getObjectByName("pinkCircleUnlock");
	var l30 = scene.getObjectByName("line30"); //purple door
	
	var purpleCircle = scene.getObjectByName("purpleCircleUnlock");
	var l29 = scene.getObjectByName("line29"); //yellow door
	
	var yellowCircle = scene.getObjectByName("yellowCircleUnlock");
	var l28 = scene.getObjectByName("line28"); //green door

	var orangeCircle = scene.getObjectByName("orangeCircleUnlock");
	var l35 = scene.getObjectByName("line35"); //orange door

	var brownCircle = scene.getObjectByName("brownCircleUnlock");

	var prawnCircle = scene.getObjectByName("prawnCircleUnlock");

	var goalCircle = scene.getObjectByName("circleGoal");

	var l31 = objects[31];//scene.getObjectByName("line31"); //purple opened door

	var l32 = objects[32];//scene.getObjectByName("line32"); //yellow opened door

	var l33 = objects[33];//scene.getObjectByName("line33"); //green opened door

	var l34 = objects[34];//scene.getObjectByName("line34"); //orange opened door

	/*var porteDaAprire = [];
	porteDaAprire.push(l30);
	porteDaAprire.push(l29);
	porteDaAprire.push(l28);
	porteDaAprire.push(l35)*/


	//var randDaAprire = porteDaAprire[Math.floor(Math.random() * porteDaAprire.length)];
	
	var door;


	//if(pinkCircle.position.x <= sq.position.x+2 && pinkCircle.position.y == sq.position.y) {// && (square.position.x <= circleGoal.position.x)) {

	if(pinkCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= pinkCircle.position.x && pinkCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= pinkCircle.position.y) {// && (square.position.x <= circleGoal.position.x)) {
		//scene.remove(l29);
		//scene.add(l32);
		
		door = scene.getObjectByName("line29");
		door.rotation.z = -Math.PI/2;
		door.translateX(16);
		door.translateY(14);
		

		pinkCircle.position.x = pinkCircle.position.x-40;

		

		

		pinkCircle.visible=false;

	} else if (purpleCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= purpleCircle.position.x && purpleCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= purpleCircle.position.y) {// && (square.position.x <= circleGoal.position.x)) {
		//scene.remove(l35);
		//scene.remove(l28);
		//scene.add(l34);
		door = scene.getObjectByName("line35");
		door.rotation.z = -Math.PI/2;
		door.translateX(12);
		door.translateY(13);

		purpleCircle.position.x = purpleCircle.position.x -80;
		//scene.remove(purpleCircle);
		purpleCircle.visible=false;

	} else if(yellowCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= yellowCircle.position.x && yellowCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= yellowCircle.position.y) {// && (square.position.x <= circleGoal.position.x)) {
		//scene.remove(l30);
		//scene.add(l31);
		door = scene.getObjectByName("line30");
		door.rotation.z = Math.PI/2;
		door.translateX(-14);
		door.translateY(14);

		yellowCircle.position.x = yellowCircle.position.x +90;
		//scene.remove(yellowCircle);
		yellowCircle.visible=false;
	
	} else if(orangeCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= orangeCircle.position.x && orangeCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= orangeCircle.position.y) {
		//scene.remove(l28)
		//scene.add(l33);
		door = scene.getObjectByName("line28");
		door.rotation.z = Math.PI/2;
		door.translateX(13);
		door.translateY(13);

		orangeCircle.position.x = orangeCircle.position.x-90
		//scene.remove(orangeCircle);
		orangeCircle.visible=false;
	
	} else if(brownCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= brownCircle.position.x && brownCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= brownCircle.position.y) {
		//scene.add(l31);
		//scene.remove(l28);
		door = scene.getObjectByName("line30");
		door.rotation.z = Math.PI/2;
		door.translateX(-14);
		door.translateY(14);

		brownCircle.position.x = brownCircle.position.x-60;

		brownCircle.visible=false;
		document.addEventListener("keydown", function(e){ //press spacebar to restart the game
			if(e.keyCode == 32) {
    			//window.location.reload();
				resetPositions(objectsThatChanges,xCoordsToReset,yCoordsToReset);
				resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);

			}
		});
	} else if(prawnCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= prawnCircle.position.x && prawnCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= prawnCircle.position.y) {
		//scene.add(l33);
		//scene.remove(l28);
		door = scene.getObjectByName("line28");
		door.rotation.z = Math.PI/2;
		door.translateX(13);
		door.translateY(13);

		prawnCircle.position.x = prawnCircle.position.x+40;
		prawnCircle.visible=false;
		document.addEventListener("keydown", function(e){ //press spacebar to restart the game
			if(e.keyCode==32) {
				//window.location.reload();
				resetPositions(objectsThatChanges,xCoordsToReset,yCoordsToReset);
				resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);

			}
		}); 
	} else if(goalCircle.position.x<= (sq.position.x+2) && (sq.position.x-2)<= goalCircle.position.x && goalCircle.position.y <= (sq.position.y+2) && (sq.position.y-2) <= goalCircle.position.y) {
		window.alert("YOU WIN!");
		resetPositions(objectsThatChanges,xCoordsToReset,yCoordsToReset);
		resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);
	}

}


function collisionIsVerified(sqbb,objects) {
	var verified;
	var i, obj, tempbb;
	
	for( i=1; i <=35; i++) { //i=0 non preso perchè in objects[0] c'è square, in objects[1],....,objects[33] ci sono solo le linee
		obj = scene.getObjectByName("line"+i+"");
		if(obj != null) {
			tempbb = new THREE.Box3().setFromObject(obj);//;
			if(sqbb.intersectsBox(tempbb) == true) {
		//if(obj!=null) {
			//if(sqbb.intersectsBox(obj)==true) {
				verified = true;
				break;
			} else {
				verified = false;
			}
		}
	}
	//console.log(verified);
	return verified;
}	
		


function animate() {
	requestAnimationFrame( animate );

	renderer.render(scene, camera);
};

init();
animate();
