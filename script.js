function changeScene(sceneObject){
    document.querySelector('.scene-title').innerText = sceneObject.title;
    document.querySelector('.scene-img').src = sceneObject.img;
    document.querySelector('.crime-description').innerText = sceneObject.description;
}
    
let userStartedGame = false;
let correctAnswer = 0;
let answer = null;
let currentScenario = null;
let currentScene = null;


const createScene = (title, img, description) => {
    let sceneObject = {title:title, img:img, description:description, correctAnswer:correctAnswer
    };
    return sceneObject;
}

const createScenarios = (scenario1Title, scenario1Description,
     scenario2Title, scenario2Description, scenario3Title, scenario3Description) =>{
let scenarioObject = {
    scenario1Title:scenario1Title, scenario1Description:scenario1Description,
    scenario2Title:scenario2Title, scenario2Description:scenario2Description,
    scenario3Title:scenario3Title, scenario3Description:scenario3Description
}
return scenarioObject;
}

const firstScenarios = createScenarios('Poisoned Wine', 'A slow demise, lips stained with traces of poison.',
    'Strangled in Her Sleep', 'Bruises on the neck suggest a struggle, but was she asleep?', 
    'A Hidden Blade', 'The wound was hidden under the chair, only visible up close.');

const changeScenarios = (scenarioObject) =>{
    document.querySelector('.scenario-1-title').innerText = scenarioObject.scenario1Title;
    document.querySelector('.scenario-2-title').innerText = scenarioObject.scenario2Title;
    document.querySelector('.scenario-3-title').innerText = scenarioObject.scenario3Title;
    document.querySelector('.scenario-1-description').innerText = scenarioObject.scenario1Description;
    document.querySelector('.scenario-2-description').innerText = scenarioObject.scenario2Description;
    document.querySelector('.scenario-3-description').innerText = scenarioObject.scenario3Description;
}


const firstScene = createScene('The Bloodied Parlor', './images/horrorScene1.jpg', 'A woman sits lifeless in her chair, eyes wide open. The scene is eerily undisturbed except for a broken glass on the table.', 0)
const secondScene = createScene('The Silent Library','./images/horrorScene2.jpg','A scholar is found slumped over his desk, his final notes smudged with ink. The air smells of burnt paper.',1);
const thirdScene = createScene('The Frozen Alleyway', './images/horrorScene3.jpg', 'A man is found frozen stiff, his hands clutching his coat. No signs of struggle, yet his face is locked in terror.',1);
const fourthScene = createScene('The Abandoned Cabin', './images/horrorScene4.jpg', 'The victim lies by the fireplace, eyes wide open. A half-burnt note clenched in their hand.',1);


const secondScenario = createScenarios('His research, set ablaze, took him with it.', 'A hidden gas leak silently ended his work.',
    'A Toxic Fume', 'A hidden gas leak silently ended his work.',
    'A Vengeful Rival', 'A deep stab wound marks the final page.'
)

const thirdScenario = createScenarios("Hypothermia's Grip", 'He simply succumbed to the cold, or did he?',
    'A Paralyzing Toxin', 'A rare venom that mimics frostbite.',
    'A Sudden Heart Failure', 'Shock and fear stopped his heart instantly.'
)

const fourthScenario = createScenarios('A Fateful Fall', 'A deadly accident on the stairs.',
    'A Conspiracy Unfolded', 'The note reveals a dark secret worth killing for.',
    'Smoke Inhalation', 'The fire took more than just warmth.'
)


const scenes = [secondScene, thirdScene, fourthScene];
const scenarios = [secondScenario, thirdScenario, fourthScenario];

document.querySelector('.btn-start-game').addEventListener('click', ()=>{
    document.querySelector('.container-instructions').remove();
    document.querySelector('.container-scene').classList.remove('hide');
    changeScene(firstScene);
    changeScenarios(firstScenarios);
    currentScene = firstScene;
    correctAnswer = currentScene.correctAnswer;
    userStartedGame = true;
})



const nextButton = document.querySelector('.btn-next-scene');
let index = 0;

nextButton.addEventListener('click', ()=>{
    if(index === scenes.length){
        alert('You have finished the demo.')
        setTimeout(()=>{
            window.location.href = '/'; // This will take the user to the homepage
        },1000);
        
    } else {
        let currentSceneInScenes = scenes[index];
        let currentScenarioInScenarios = scenarios[index];
        changeScene(currentSceneInScenes);
        changeScenarios(currentScenarioInScenarios);
        correctAnswer = currentScene.correctAnswer;
        nextButton.classList.add('hide');
        index += 1;
        document.querySelector('.overlay').classList.add('hide');
    }

 
})


const scenarioDivsAll = document.querySelectorAll('.scenario');
scenarioDivsAll[0].addEventListener('click', ()=>{
answer = 0;
if(answer === correctAnswer){
    console.log('correct answer')
    document.querySelector('.btn-next-scene').classList.remove('hide');
}
});

scenarioDivsAll[0].addEventListener('click', ()=>{
    answer = 1;
    if(answer === correctAnswer){
        console.log('correct answer')
        document.querySelector('.btn-next-scene').classList.remove('hide');
    }
});


scenarioDivsAll[2].addEventListener('click', ()=>{
        answer = 2;
        if(answer === correctAnswer){
            console.log('correct answer')
            document.querySelector('.btn-next-scene').classList.remove('hide');
        }
});



function applyDistortionEffect() {
    document.body.classList.add("distorted");

    // Play a scary sound
    // const audio = new Audio("scary-glitch.mp3");
    // audio.play();

    // Remove the effect after a short delay
    setTimeout(() => {
        document.body.classList.remove("distorted");
    }, 500);
}

// Randomly trigger the distortion effect
setInterval(() => {
    if (Math.random() > 0.5) { // 50% chance of triggering
        applyDistortionEffect();
    }
}, Math.random() * (4000 - 2000) + 500); // Between 2 to 5 seconds



const creepyObjects = [
    {
        imgSrc: "./images/distoredImage1.jpg",  // Replace with actual paths
        soundSrc: "./sounds/horrorSound1.mp3"
    },
    {
        imgSrc: "./images/distoredImage2.jpg",  // Replace with actual paths
        soundSrc: "./sounds/horrorSound2.mp3"
    },
    {
        imgSrc: "./images/distoredImage3.jpg",  // Replace with actual paths
        soundSrc: "./sounds/horrorSound3.wav"
    }
];

const creepyImg = document.getElementById('creepy-img');



   function showCreepyOverlay() {

    const overlay = document.getElementById('creepy-overlay');
    const creepyImg = document.getElementById('creepy-img');
    overlay.classList.remove('hide');
    
    // Select a random creepy object
    const randomCreepy = creepyObjects[Math.floor(Math.random() * creepyObjects.length)];
    
    const audio = new Audio(randomCreepy.soundSrc);
    audio.play();
    // Log the random image source to make sure it's correct
    console.log('Random Image Source:', randomCreepy.imgSrc);

    setTimeout(()=>{
        audio.pause();
    },2000)
    
    // Set the image source
    creepyImg.src = randomCreepy.imgSrc;
    
    // Show the overlay by changing display to flex
    overlay.style.display = "flex";  // Use flex display to show overlay
    console.log('Showing creepy overlay...');
    
    // Random duration between 0.2s and 1s
    const randomDuration = Math.random() * (1000 - 200) + 200;  // Between 200ms and 1000ms

    // Hide overlay after random time by removing the flex display
    setTimeout(() => {
        overlay.style.display = "none";  // Use none to hide overlay
    }, randomDuration);
}

// Randomly trigger the creepy overlay effect
setInterval(() => {
    if(userStartedGame === false){
        return;
    } else {
        if (Math.random() > 0.5) { // 50% chance of triggering
            showCreepyOverlay();
        }
    }
}, Math.random() * (5000 - 2000) + 2000); // Trigger every 2-5 seconds
