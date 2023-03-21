


export const playSound = () => {
    const audio = new Audio("/src/sounds/sfx-riser10.mp3");
    audio.play();
};

export const soundHeal = () => {
    const audio1 = new Audio("/src/sounds/sfx-spell-ray-ice.mp3");
    audio1.play();
};

export const soundVictoryHumans = () => {
    const audio2 = new Audio("/src/sounds/sfx-victory1.mp3");
    audio2.play();
};

export const soundVictoryDarkness = () => {
    const audio3 = new Audio("/src/sounds/331163__tyops__dark-battle.wav");
    audio3.play();
    setTimeout(() => audio3.pause(), 7000);
};

export const soundAttackArrow = () => {
    const audio4 = new Audio("/src/sounds/blow_air.mp3");
    audio4.play();
};

export const soundFailArrow = () => {
    const audio5 = new Audio("/src/sounds/SF-wood_knife.mp3");
    audio5.play();
};

export const soundAttackSword = () => {
    const audio6 = new Audio("/src/sounds/SF-sword-15.mp3");
    audio6.play();
};

export const soundFailMetal = () => {
    const audio7 = new Audio("/src/sounds/sfx-metal7.mp3");
    audio7.play();
};

export const soundAttackHammer = () => {
    const audio6 = new Audio("/src/sounds/sf_decapitation.mp3");
    audio6.play();
};

export const soundAttackSpear = () => {
    const audio7 = new Audio("/src/sounds/sfx-metal10.mp3");
    audio7.play();
};








  