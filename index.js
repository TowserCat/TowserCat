




let times = 100;
let layers = 100;
let quality = 1;
let length = 123456;
let constantTimes = times;
let constantLayers = layers;
let constantQuality = quality;
let constantLength = length;
let listOfStringsX = [];
let listOfStringsY = [];
let listOfColors = [];
let widthOfScreen = window.innerWidth;
let heightOfScreen = window.innerHeight;
let backroundColor = "black";
let stringReset = false;
let centering = false;
let staticing = false;
let picMode = false;
let clickMode = false;
let outside = false;
let o = 0;


function saveInput(){
    stringReset = document.getElementById("stringReset").value||null;
    times = document.getElementById("times").value||100;
    constantTimes = times;
    layers = document.getElementById("layers").value||100;
    constantLayers = layers;
    quality = document.getElementById("quality").value||1;
    constantQuality = quality;
    length = document.getElementById("length").value||123456;
    constantLength = length;
    widthOfScreen = document.getElementById("width").value||1200;
    canvas.width = widthOfScreen;
    heightOfScreen = document.getElementById("height").value||675;
    canvas.width = widthOfScreen;
    canvas.height = heightOfScreen;
    backroundColor = document.getElementById("backround").value||"black";
    context.fillStyle = backroundColor;
}

function generate(){
    if(picMode === false){
        if(centering === false){
            if(outside === false){
                if(staticing === false){
                    run();
                }else{
                    runStatic();
                } 
            }else{
                if(staticing === false){
                    runOutside();
                }else{
                    runStaticOutside();
                } 
            }
        }else{
            if(outside === false){
                if(staticing === false){
                    runCenter();
                }else{
                    runStaticCenter();
                } 
            }else{
                alert("Outside and center musn't be selected at the same time.");
            }
        }
    }else{
        if(centering === false){
            if(outside === false){
                if(staticing === false){
                    pic();
                }else{
                    picStatic();
                } 
            }else{
                if(staticing === false){
                    picOutside();
                }else{
                    picStaticOutside();
                } 
            }
        }else{
            if(outside === false){
                if(staticing === false){
                    picCenter();
                }else{
                    picStaticCenter();
                } 
            }else{
                alert("Outside and center musn't be selected at the same time.");
            }
        }
    }
}

function setup(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    widthOfScreen = window.innerWidth;
    heightOfScreen = window.innerHeight;
    saveTimes();
    saveQuality();
    saveLayers();
    saveCenter();
    saveStatic();
    saveCenter();
    saveStatic();
    saveStringReset();
    saveClickMode();
    saveBackround();
    saveLength();
    run();
}

function saveTimes(){
    times = document.getElementById("times").value||100;
    constantTimes = times;
    let timeId = document.getElementById("timesNum");
    timeId.innerHTML = times;
}

function saveQuality(){
    quality = document.getElementById("quality").value||1;
    constantQuality = quality;
    let qualityId = document.getElementById("qualityNum");
    qualityId.innerHTML = quality;
}

function saveLayers(){
    layers = document.getElementById("layers").value||100;
    constantLayers = layers;
    let layersId = document.getElementById("layersNum");
    layersId.innerHTML = layers;
}

function saveLength(){
    length = document.getElementById("length").value||123456;
    constantLength = length;
    let lengthId = document.getElementById("lengthNum");
    lengthId.innerHTML = length;
}

function saveCenter(){
    if(centering === false){
        centering = true;
    }else{
        centering = false;
    }
}

function saveStatic(){
    if(staticing === false){
        staticing = true;
    }else{
        staticing = false;
    }
}

function savePic(){
    if(picMode === false){
        picMode = true;
    }else{
        picMode = false;
    }
}

function saveStringReset(){
    if(stringReset === false){
        stringReset = true;
    }else{
        stringReset = false;
    }
}

function saveClickMode(){
    if(clickMode === false){
        clickMode = true;
    }else{
        clickMode = false;
    }
}

function saveOutside(){
    if(outside === false){
        outside = true;
    }else{
        outside = false;
    }
}

function saveBackround(){
    backroundColor = document.getElementById("backround").value||"rgb(0,0,0)";
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
}

let type = undefined;
let intervalId = null;

const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 675;

function pause(key){
    
    times = 0;
}

function unpause(){
    times = constantTimes;
}

function resetScreen(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    widthOfScreen = window.innerWidth;
    heightOfScreen = window.innerHeight;
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    clearInterval(intervalId);
    intervalId = null;
}

function pic(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = getRandomInt(0,widthOfScreen);
        let placementY = getRandomInt(0,heightOfScreen);
        let colors = colorMixRand();
        addStringPic(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function picStatic(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = getRandomInt(0,widthOfScreen);
        let placementY = getRandomInt(0,heightOfScreen);
        let colors = colorMixRand();
        addStringPicStatic(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function picCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = widthOfScreen/2;
        let placementY = heightOfScreen/2;
        let colors = colorMixRand();
        addStringPicCenter(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function picStaticCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = widthOfScreen/2
        let placementY = heightOfScreen/2
        let colors = colorMixRand();
        addStringPicStaticCenter(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function picOutside(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let wall = getRandomInt(1,4);
        if(wall === 1){
            placementX = getRandomInt(0, widthOfScreen);
            placementY = 0;
        }else if(wall === 2){
            placementX = getRandomInt(0, widthOfScreen);
            placementY = heightOfScreen;
        }else if(wall === 3){
            placementX = 0
            placementY = getRandomInt(0, heightOfScreen);
        }else{
            placementX = widthOfScreen
            placementY = getRandomInt(0,heightOfScreen);
        }
        let colors = colorMixRand();
        addStringPicOutside(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function picStaticOutside(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let wall = getRandomInt(1,4);
        if(wall === 1){
            placementX = getRandomInt(0, widthOfScreen);
            placementY = 0;
        }else if(wall === 2){
            placementX = getRandomInt(0, widthOfScreen);
            placementY = heightOfScreen;
        }else if(wall === 3){
            placementX = 0
            placementY = getRandomInt(0, heightOfScreen);
        }else{
            placementX = widthOfScreen
            placementY = getRandomInt(0,heightOfScreen);
        }
        let colors = colorMixRand();
        addStringPicStaticOutside(placementX,placementY,colors);
        length = length - (constantLength/layers)/2;
    }
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function run(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = getRandomInt(0,widthOfScreen);
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRun,1);
    }
}

function runStatic(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = getRandomInt(0,widthOfScreen);
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRunStatic,1);
    }
}

function runCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = widthOfScreen/2;
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = heightOfScreen/2;
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRunCenter,1);
    }
}

function runStaticCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = widthOfScreen/2;
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = heightOfScreen/2;
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRunStaticCenter,1);
    }
}

function runOutside(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let wall = getRandomInt(1,4);
        if(wall === 1){
            listOfStringsX[i] = getRandomInt(0, widthOfScreen);
            listOfStringsY[i] = 0;
        }else if(wall === 2){
            listOfStringsX[i] = getRandomInt(0, widthOfScreen);
            listOfStringsY[i] = heightOfScreen;
        }else if(wall === 3){
            listOfStringsX[i] = 0
            listOfStringsY[i] = getRandomInt(0, heightOfScreen);
        }else{
            listOfStringsX[i] = widthOfScreen
            listOfStringsY[i] = getRandomInt(0,heightOfScreen);
        }
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRunOutside,1);
    }
}

function runStaticOutside(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let wall = getRandomInt(1,4);
        if(wall === 1){
            listOfStringsX[i] = getRandomInt(0, widthOfScreen);
            listOfStringsY[i] = 0;
        }else if(wall === 2){
            listOfStringsX[i] = getRandomInt(0, widthOfScreen);
            listOfStringsY[i] = heightOfScreen;
        }else if(wall === 3){
            listOfStringsX[i] = 0
            listOfStringsY[i] = getRandomInt(0, heightOfScreen);
        }else{
            listOfStringsX[i] = widthOfScreen
            listOfStringsY[i] = getRandomInt(0,heightOfScreen);
        }
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringRunStaticOutside,1);
    }
}

function addStringRun(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
            context.fillStyle = listOfColors[i];
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringRunStatic(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                listOfStringsX[i] = getRandomInt(0,widthOfScreen);
                listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
            context.fillStyle = colorMixRand();
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringRunCenter(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
            context.fillStyle = listOfColors[i];
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringRunStaticCenter(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                listOfStringsX[i] = widthOfScreen/2;
                listOfStringsY[i] = heightOfScreen/2;
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
            context.fillStyle = colorMixRand();
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringRunOutside(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    let wall = getRandomInt(1,4);
                    if(wall === 1){
                        listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                        listOfStringsY[i] = 0;
                    }else if(wall === 2){
                        listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                        listOfStringsY[i] = heightOfScreen;
                    }else if(wall === 3){
                        listOfStringsX[i] = 0
                        listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                    }else{
                        listOfStringsX[i] = widthOfScreen
                        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                    }
                }
            }
            context.fillStyle = listOfColors[i];
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringRunStaticOutside(){
    for(let i = 0; i < layers; i++){
        if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
            if(stringReset === true){
                listOfStringsX[i] = null;
                listOfStringsY[i] = null;
                listOfColors[i] = null;
            }
        }
    }
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    listOfStringsX[i] = null;
                    listOfStringsY[i] = null;
                    listOfColors[i] = null;
                }
            }
        }
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(!listOfStringsX[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(!listOfStringsY[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(!listOfColors[i]){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = 0;
                }else if(wall === 2){
                    listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                    listOfStringsY[i] = heightOfScreen;
                }else if(wall === 3){
                    listOfStringsX[i] = 0
                    listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                }else{
                    listOfStringsX[i] = widthOfScreen
                    listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                }
                listOfColors[i] = colorMixRand();
            }
            if(listOfStringsX[i] < 0||listOfStringsX[i] > widthOfScreen||listOfStringsY[i] < 0||listOfStringsY[i] > heightOfScreen){
                if(stringReset === true){
                    let wall = getRandomInt(1,4);
                    if(wall === 1){
                        listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                        listOfStringsY[i] = 0;
                    }else if(wall === 2){
                        listOfStringsX[i] = getRandomInt(0, widthOfScreen);
                        listOfStringsY[i] = heightOfScreen;
                    }else if(wall === 3){
                        listOfStringsX[i] = 0
                        listOfStringsY[i] = getRandomInt(0, heightOfScreen);
                    }else{
                        listOfStringsX[i] = widthOfScreen
                        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
                    }
                }
            }
            context.fillStyle = colorMixRand();
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringPic(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                placementX = getRandomInt(0,widthOfScreen);
                placementY = getRandomInt(0,heightOfScreen);
                color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
context.fillStyle = color;
context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringPicStatic(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                placementX = getRandomInt(0,widthOfScreen);
                placementY = getRandomInt(0,heightOfScreen);
                color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        color = colorMixRand();
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}


function addStringPicCenter(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                placementX = widthOfScreen/2;
                placementY = heightOfScreen/2;
                    color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringPicStaticCenter(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                placementX = widthOfScreen/2;
                placementY = heightOfScreen/2;
                color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        color = colorMixRand();
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringPicOutside(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    placementX = getRandomInt(0, widthOfScreen);
                    placementY = 0;
                }else if(wall === 2){
                    placementX = getRandomInt(0, widthOfScreen);
                    placementY = heightOfScreen;
                }else if(wall === 3){
                    placementX = 0
                    placementY = getRandomInt(0, heightOfScreen);
                }else{
                    placementX = widthOfScreen
                    placementY = getRandomInt(0,heightOfScreen);
                }
                color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringPicStaticOutside(placementX,placementY,color){
    for(let i = 0; i < length; i++){
        if(placementX < 0||placementX > widthOfScreen||placementY < 0||placementY > heightOfScreen){
            if(stringReset === true){
                let wall = getRandomInt(1,4);
                if(wall === 1){
                    placementX = getRandomInt(0, widthOfScreen);
                    placementY = 0;
                }else if(wall === 2){
                    placementX = getRandomInt(0, widthOfScreen);
                    placementY = heightOfScreen;
                }else if(wall === 3){
                    placementX = 0
                    placementY = getRandomInt(0, heightOfScreen);
                }else{
                    placementX = widthOfScreen
                    placementY = getRandomInt(0,heightOfScreen);
                }
                color = colorMixRand();
            }
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        color = colorMixRand();
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringMoveAtMouse(event){
    if(clickMode === false){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        listOfStringsX[o] = mouseX;
        listOfStringsY[o] = mouseY;
        listOfColors[o] = colorMixRand();
        o = (o + 1)%layers;
    }
}

function addStringClickAtMouse(event){
    if(clickMode === true){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        listOfStringsX[o] = mouseX;
        listOfStringsY[o] = mouseY;
        listOfColors[o] = colorMixRand();
        o = (o + 1)%layers;
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorMixRand(){
    let thisRandColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return thisRandColor;
}

window.onload = setup();










