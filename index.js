var rover = {
    x: 5,
    y: 5,
    direction: "N",
    travelLog: []
}

// ======================

function displayRover(rover) {
    console.log(rover.x, rover.y, rover.direction);
}

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else {
        rover.direction = "N";
    }
    console.log(displayRover(rover));

}

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "W";
    } else {
        rover.direction = "N";
    }
    console.log(displayRover(rover));
}

function moveForward(rover) {
    if (rover.direction === "N") {
        rover.y--;
    } else if (rover.direction === "S") {
        rover.y++;
    } else if (rover.direction === "E") {
        rover.x++;
    } else {
        rover.x--;
    }
    console.log(displayRover(rover));
}

function moveBackward(rover) {
    if (rover.direction === "N") {
        rover.y++;
    } else if (rover.direction === "S") {
        rover.y--;
    } else if (rover.direction === "E") {
        rover.x--;
    } else {
        rover.x++;
    }
    console.log(displayRover(rover));
}

// ======================

function startMovement(string) {
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "l":
                turnLeft(rover)
                break;
            case "r":
                turnRight(rover)
                break;
            case "f":
                moveForward(rover)
                break;
            case "b":
                moveBackward(rover)
                break;
            default:
                window.alert("You pressed a wrong key, use 'l', 'r', 'f', or 'b' to move the rover!")
                break;
        }
        rover.travelLog.push(rover.x, rover.y, rover.direction);
    }
    console.log(rover.travelLog);
}