document.body.addEventListener('click', function(event) {
    const section = event.target.closest('.section');
    if (section) {
        const sectionId = section.id;
        const textId = `${sectionId.replace('Section', 'Text')}`;
        const soundId = `${sectionId.replace('Section', 'Sound')}`;
        toggleSection(sectionId, textId, soundId);
    }
});

function toggleSection(sectionId, textId, soundId) {
    const allSections = ['aboutSection', 'experienceSection', 'contactSection'];
    const allTexts = ['aboutText', 'experienceText', 'contactText'];
    
    allSections.forEach(id => {
        if (id !== sectionId) {
            document.getElementById(id).classList.add('disabled');
            document.getElementById(id).querySelector('.transparent-text').style.display = 'none';
        }
    });

    const section = document.getElementById(sectionId);
    const textElement = document.getElementById(textId);
    const sound = document.getElementById(soundId);

    if (section.classList.contains('disabled')) {
        section.classList.remove('disabled');
        textElement.style.display = 'block';
        sound.play();

        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0;
        }, 1000);
    } else {
        sound.play();

        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0;
        }, 1000);

        section.classList.add('disabled');
        textElement.style.display = 'none';
    }
}

const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

let cursorX = 0;
let cursorY = 0;
document.addEventListener('mousemove', (e) => {
  cursorX = e.pageX;
  cursorY = e.pageY;
});

function moveCursor() {
  customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  requestAnimationFrame(moveCursor);
}
moveCursor();

const sounds = {
    aboutSound: new Audio('path-to-about-sound.mp3'),
    experienceSound: new Audio('path-to-experience-sound.mp3'),
    contactSound: new Audio('path-to-contact-sound.mp3')
};

Object.values(sounds).forEach((sound) => {
    sound.load();
});
