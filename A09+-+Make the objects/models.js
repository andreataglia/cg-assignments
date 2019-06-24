function buildGeometry() {
    var i, j, k;

    // Draws a pyramid
    var vert1 = [
        [-1.0, 0.0, -1.0],
        [-1.0, 0.0, 1.0],
        [1.0, 0.0, 1.0],
        [1.0, 0.0, -1.0],
        [0.0, 2.0, 0.0]
    ];
    var ind1 = [0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4, 3, 2, 1, 1, 0, 3];
    var color1 = [1.0, 0.0, 0.0];
    addMesh(vert1, ind1, color1);

    // Draws a cube
    var vert2 = [
        [-1.0, -1.0, -1.0],
        [1.0, -1.0, -1.0],
        [1.0, 1.0, -1.0],
        [-1.0, 1.0, -1.0],
        [-1.0, -1.0, 1.0],
        [1.0, -1.0, 1.0],
        [1.0, 1.0, 1.0],
        [-1.0, 1.0, 1.0]
    ];
    var ind2 = [1, 0, 3, 3, 2, 1, 5, 1, 2, 2, 6, 5, 4, 5, 6, 6, 7, 4, 0, 4, 7, 7, 3, 0, 2, 3, 7, 7, 6, 2, 5, 4, 0, 0, 1, 5];
    var color2 = [0.0, 0.0, 1.0];
    addMesh(vert2, ind2, color2);

    // Draws a Monopoly house
    var vert3 = [
        [-1.0, -1.0, 0.0], //0
        [1.0, -1.0, 0.0], //1
        [1.0, 1.0, 0.0], //2
        [-1.0, 1.0, 0.0], //3
        [-1.0, -1.0, -2.0], //4
        [1.0, -1.0, -2.0], //5
        [1.0, 1.0, -2.0], //6
        [-1.0, 1.0, -2.0], //7
        [0.0, 1.5, 0.0], //8
        [0.0, 1.5, -2.0] //9
    ];
    for (var i = vert3.length - 1; i >= 0; i--) {
        vert3[i][0] += +0.5;
        vert3[i][1] += +0.5;
        vert3[i][2] += +1;
    }
    var ind3 = [0, 1, 2, 0, 2, 3, 1, 0, 4, 4, 0, 3, 1, 5, 2, 1, 4, 5, 2, 5, 6, 5, 4, 6, 4, 3, 7, 4, 7, 6, 3, 2, 7, 7, 2, 6, 2, 8, 3, 3, 8, 7, 8, 9, 7, 2, 6, 8, 6, 9, 8, 7, 9, 6];
    var color3 = [0.0, 1.0, 0.0];
    addMesh(vert3, ind3, color3);

    // Draws a Cone
    var vert4 = [
        [0.0, 1.0, 0.0]
    ];
    var ind4 = [];
    var color4 = [1.0, 1.0, 0.0];
    var slices4 = 50;
    for (i = 0; i < slices4; i++) {
        vert4[i + 1] = [Math.cos(2 * Math.PI / slices4 * i), -1.0, Math.sin(2 * Math.PI / slices4 * i)];
    }
    j = 0
    for (i = slices4; i > 0; i--) {
        ind4[j] = 0;
        ind4[j + 1] = i;
        ind4[j + 2] = (i > 1) ? i - 1 : slices4;
        j += 3
    }
    vert4[slices4 + 1] = [0.0, -1.0, 0.0]
    j = 0
    for (i = 1; i <= slices4; i++) {
        ind4[3 * slices4 + j] = slices4 + 1;
        ind4[3 * slices4 + j + 1] = i;
        ind4[3 * slices4 + j + 2] = (i < slices4) ? i + 1 : 1;
        j += 3
    }
    addMesh(vert4, ind4, color4);


    // Draws a Cylinder
    var vert5 = [];
    var ind5 = [];
    var color5 = [1.0, 0.0, 1.0];
    var slices5 = 50;
    for (i = 0; i < slices5; i++) {
        vert5[2 * i] = [Math.cos(2 * Math.PI / slices5 * i), -1.0, Math.sin(2 * Math.PI / slices5 * i)];
        vert5[2 * i + 1] = [Math.cos(2 * Math.PI / slices5 * i), 1.0, Math.sin(2 * Math.PI / slices5 * i)];
    }
    j = 0
    // Lateral faces
    for (i = 0; i < slices5; i++) {
        ind5[j] = 2 * i;
        ind5[j + 1] = 2 * i + 1;
        ind5[j + 2] = (i < slices5 - 1) ? 2 * i + 2 : 0;
        ind5[j + 3] = (i < slices5 - 1) ? 2 * i + 2 : 0;
        ind5[j + 4] = 2 * i + 1;
        ind5[j + 5] = (i < slices5 - 1) ? 2 * i + 3 : 1;
        j += 6
    }
    vert5[2 * slices5] = [0.0, 1.0, 0.0]
    // Top face
    for (i = 1; i <= 2 * slices5 - 1; i += 2) {
        ind5[j] = 2 * slices5;
        ind5[j + 1] = i;
        ind5[j + 2] = (2 * slices5 - 2 + i) % (2 * slices5);
        j += 3
    }
    vert5[2 * slices5 + 1] = [0.0, -1.0, 0.0]
    // Bottom face
    for (i = 0; i <= slices5 * 2 - 2; i += 2) {
        ind5[j] = 2 * slices5 + 1;
        ind5[j + 1] = i;
        ind5[j + 2] = (i + 2) % (2 * slices5);
        j += 3
    }
    addMesh(vert5, ind5, color5);

    // Draws a Sphere
    var phi, theta;
    var vert6 = [];
    var ind6 = [];
    var color6 = [0.0, 1.0, 1.0];
    var sectors = 30; //horizontal slices
    var stacks = 30; //vertical stacks
    //make the vertices
    for (i = 0; i < sectors; i++)
        for (k = 0; k <= stacks; k++) {
            //needed to make spaces bewteen stacks non linear
            phi = (Math.PI / 2) - Math.PI * k / stacks
            //how much we separate the sectors
            theta = (2 * Math.PI) * i / sectors
            vert6[stacks * i + k] = [(Math.cos(phi) * Math.cos(theta)), Math.sin(phi), (Math.cos(phi) * Math.sin(theta))];
        }
    j = 0

    // Top and lateral faces
    for (k = 0; k < stacks - 1; k++) {
        for (i = 0; i < sectors; i++) {
            ind6[j] = (i < sectors - 1) ? stacks * i + k + stacks : 0 + k;
            ind6[j + 1] = stacks * i + k + 1;
            ind6[j + 2] = stacks * i + k;
            ind6[j + 3] = (i < sectors - 1) ? stacks * i + k + stacks + 1 : 1 + k;
            ind6[j + 4] = stacks * i + k + 1;
            ind6[j + 5] = (i < sectors - 1) ? stacks * i + k + stacks : 0 + k;
            j += 6
        }
    }
    //close bottom face
    for (i = 0; i < sectors; i++) {
        ind6[j] = stacks * sectors
        ind6[j + 1] = (i + 1) * stacks - 1
        ind6[j + 2] = (i < sectors - 1) ? (i + 2) * stacks - 1 : stacks - 1
        j += 3
    }


    addMesh(vert6, ind6, color6);
}