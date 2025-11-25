// Language greetings
const greetings = [
    'Hello',      // English
    'سلام',       // Persian
    'Merhaba',    // Turkish
    'Bonjour',    // French
    'Hola'        // Spanish
];

let currentGreetingIndex = 0;
let greetingInterval;

// Your heartfelt expression (customize this!)
const expression = "Each time i See, feel or think of you is like a dream. Your smile lights up my world in ways words can barely capture. I wanted to create something special, just for you, to show you how much you mean to me...";

// Franz Kafka quote
const kafkaQuote = "If a million people love you, I am one of them. If a hundred people love you, I am one of them. If ten people love you, I am one of them. If one person loves you, that is me. If no one loves you, that means I am no longer alive. - Frants Kafka";

// Final question
const finalQuestion = "Hope you will see all of them.";

// Final quote to display
const finalQuoteDisplay = "In a world full of temporary things, you are a perpetual feeling. Every sunrise reminds me of your smile, and every sunset whispers your name. You are my favorite chapter in the story of my life.";

// Persian explanation (customize this with your own message!)
const persianExplanation = " من این وب‌سایت رو ساختم چون می‌خواستم یه چیز خاص و متفاوت برات درست کنم. می‌خواستم بهت نشون بدم که چقدر برام مهمی و چقدر وقت گذاشتم که یه لحظه‌ی خاص برات بسازم. هر کلمه، هر عکس و هر لحظه‌ای که اینجا هست، از ته دلم برای توئه. امیدوارم این کار کوچیک بتونه حس واقعی منو بهت نشون بده و لبخندی رو بهت اصافه کنه";

// Second Persian message (customize this!)
const persianMessage2 = "میدونم خیلی یهویی شد یا اینکه خیلی دیر شد ولی چون نشد که اینا رو با زل زدن و غرق در چشات بهت بگم ولی اینم یه راهی هست یه راهی که سخت تر از همه ی اینها نمیدونم چی فکر میکنی ولی نمیخوام به اون لبخند خاص و بینظیری که من را به این حال انداخته آسیب بیاد";

// Third Persian message (customize this!)
const persianMessage3 = "ممنونم ازت که این همه وقت گذاشتی، تمام اون کادو ها معنی خاصی به همراه دارند و امیدوارم که ازشون خوشت بیاد";

// Final name
const finalName = "SELINA";

// Music information (customize this!)
const musicInfo = {
    title: "Off Day",
    artist: "Lyn Lapid",
    quote: "you don't cross my mind, you live in it"
};

// Album images (add your image paths here)
const albumImages = [
    'assests/images/photo1.jpg',
    'assests/images/photo2.jpg',
    'assests/images/photo3.jpg',
    'assests/images/photo4.jpg',
    'assests/images/photo5.jpg',
    'assests/images/photo6.jpg',
    'assests/images/photo7.jpg'
];

// Audio element
let audioPlayer;
let currentImageIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    audioPlayer = document.getElementById('audioPlayer');
    startGreetingRotation();
    setupHelloScreenClick();
    setupContinueButton();
    setupAlbumButton();
    setupAlbumPopup();
    setupQuestionContinue();
    setupFinalQuoteContinue();
    setupPersianContinue();
    setupPersian2Continue();
    setupPersian3Continue();
    setupImageViewer();
});

// Rotate greetings
function startGreetingRotation() {
    const helloText = document.getElementById('helloText');
    
    // Set initial greeting
    helloText.textContent = greetings[0];
    helloText.style.animation = 'fadeInOut 2.5s ease-in-out';
    
    greetingInterval = setInterval(() => {
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        
        // Restart animation
        helloText.style.animation = 'none';
        
        // Force reflow to restart animation
        void helloText.offsetWidth;
        
        helloText.textContent = greetings[currentGreetingIndex];
        helloText.style.animation = 'fadeInOut 2.5s ease-in-out';
    }, 2500);
}

// Hello screen click handler
function setupHelloScreenClick() {
    const helloScreen = document.getElementById('helloScreen');
    
    helloScreen.addEventListener('click', () => {
        clearInterval(greetingInterval);
        transitionToExpression();
    });
}

// Transition to expression screen
function transitionToExpression() {
    const helloScreen = document.getElementById('helloScreen');
    const expressionScreen = document.getElementById('expressionScreen');
    
    helloScreen.classList.remove('active');
    
    setTimeout(() => {
        expressionScreen.classList.add('active');
        startTypewriter();
    }, 800);
}

// Typewriter effect
function startTypewriter() {
    const typewriterElement = document.getElementById('typewriterText');
    const continueBtn = document.getElementById('continueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < expression.length) {
            typewriterElement.textContent = expression.substring(0, charIndex + 1);
            charIndex++;
            
            // Faster, consistent speed
            const speed = 50;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            typewriterElement.classList.add('finished');
            setTimeout(() => {
                continueBtn.classList.add('show');
            }, 500);
            
            // Show music player after typing completes
            setTimeout(showMusicPlayer, 1500);
        }
    }
    
    type();
}

// Setup continue button
function setupContinueButton() {
    const continueBtn = document.getElementById('continueBtn');
    
    continueBtn.addEventListener('click', () => {
        transitionToQuote();
    });
}

// Transition to quote screen
function transitionToQuote() {
    const expressionScreen = document.getElementById('expressionScreen');
    const quoteScreen = document.getElementById('quoteScreen');
    
    expressionScreen.classList.remove('active');
    
    setTimeout(() => {
        quoteScreen.classList.add('active');
        startQuoteTypewriter();
    }, 800);
}

// Quote typewriter effect
function startQuoteTypewriter() {
    const quoteElement = document.getElementById('quoteText');
    const albumBtn = document.getElementById('albumBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < kafkaQuote.length) {
            quoteElement.textContent = kafkaQuote.substring(0, charIndex + 1);
            charIndex++;
            
            // Faster, consistent speed
            const speed = 40;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show album button
            quoteElement.classList.add('finished');
            setTimeout(() => {
                albumBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup album button
function setupAlbumButton() {
    const albumBtn = document.getElementById('albumBtn');
    
    albumBtn.addEventListener('click', () => {
        showAlbumPopup();
    });
}

// Show album popup
function showAlbumPopup() {
    const albumPopup = document.getElementById('albumPopup');
    albumPopup.classList.add('active');
}

// Setup album popup
function setupAlbumPopup() {
    const showAlbumBtn = document.getElementById('showAlbumBtn');
    const albumContinueBtn = document.getElementById('albumContinueBtn');
    
    showAlbumBtn.addEventListener('click', () => {
        transitionToAlbum();
    });
    
    albumContinueBtn.addEventListener('click', () => {
        transitionToQuestion();
    });
}

// Transition to album screen
function transitionToAlbum() {
    const albumPopup = document.getElementById('albumPopup');
    const quoteScreen = document.getElementById('quoteScreen');
    const albumScreen = document.getElementById('albumScreen');
    const albumContinueBtn = document.getElementById('albumContinueBtn');
    
    albumPopup.classList.remove('active');
    quoteScreen.classList.remove('active');
    
    setTimeout(() => {
        albumScreen.classList.add('active');
        loadAlbumImages();
        
        // Show continue button after images load
        setTimeout(() => {
            albumContinueBtn.classList.add('show');
        }, 1000);
    }, 800);
}

// Load album images
function loadAlbumImages() {
    const albumGrid = document.getElementById('albumGrid');
    const totalImagesSpan = document.getElementById('totalImages');
    
    albumGrid.innerHTML = '';
    totalImagesSpan.textContent = albumImages.length;
    
    albumImages.forEach((imagePath, index) => {
        const albumItem = document.createElement('div');
        albumItem.className = 'album-item';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Memory ${index + 1}`;
        img.loading = 'lazy';
        
        albumItem.appendChild(img);
        albumItem.addEventListener('click', () => openImageViewer(index));
        
        albumGrid.appendChild(albumItem);
    });
}

// Setup image viewer
function setupImageViewer() {
    const closeBtn = document.getElementById('closeViewer');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    const viewer = document.getElementById('imageViewer');
    
    closeBtn.addEventListener('click', closeImageViewer);
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close on background click
    viewer.addEventListener('click', (e) => {
        if (e.target === viewer) {
            closeImageViewer();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const viewer = document.getElementById('imageViewer');
        if (viewer.classList.contains('active')) {
            if (e.key === 'Escape') closeImageViewer();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

// Open image viewer
function openImageViewer(index) {
    currentImageIndex = index;
    updateViewerImage();
    document.getElementById('imageViewer').classList.add('active');
}

// Close image viewer
function closeImageViewer() {
    document.getElementById('imageViewer').classList.remove('active');
}

// Update viewer image
function updateViewerImage() {
    const viewerImage = document.getElementById('viewerImage');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    
    viewerImage.src = albumImages[currentImageIndex];
    currentIndexSpan.textContent = currentImageIndex + 1;
}

// Show previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + albumImages.length) % albumImages.length;
    updateViewerImage();
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % albumImages.length;
    updateViewerImage();
}

// Transition to question screen
function transitionToQuestion() {
    const albumScreen = document.getElementById('albumScreen');
    const questionScreen = document.getElementById('questionScreen');
    
    albumScreen.classList.remove('active');
    
    setTimeout(() => {
        questionScreen.classList.add('active');
        startQuestionTypewriter();
    }, 800);
}

// Question typewriter effect
function startQuestionTypewriter() {
    const questionElement = document.getElementById('questionText');
    const questionContinueBtn = document.getElementById('questionContinueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < finalQuestion.length) {
            questionElement.textContent = finalQuestion.substring(0, charIndex + 1);
            charIndex++;
            
            // Slower, dramatic speed for the question
            const speed = 80;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            questionElement.classList.add('finished');
            setTimeout(() => {
                questionContinueBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup question continue button
function setupQuestionContinue() {
    const questionContinueBtn = document.getElementById('questionContinueBtn');
    
    questionContinueBtn.addEventListener('click', () => {
        transitionToFinalQuote();
    });
}

// Transition to final quote screen
function transitionToFinalQuote() {
    const questionScreen = document.getElementById('questionScreen');
    const finalQuoteScreen = document.getElementById('finalQuoteScreen');
    
    questionScreen.classList.remove('active');
    
    setTimeout(() => {
        finalQuoteScreen.classList.add('active');
        startFinalQuoteTypewriter();
    }, 800);
}

// Final quote typewriter effect
function startFinalQuoteTypewriter() {
    const finalQuoteElement = document.getElementById('finalQuoteText');
    const finalQuoteContinueBtn = document.getElementById('finalQuoteContinueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < finalQuoteDisplay.length) {
            finalQuoteElement.textContent = finalQuoteDisplay.substring(0, charIndex + 1);
            charIndex++;
            
            // Consistent speed
            const speed = 45;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            finalQuoteElement.classList.add('finished');
            setTimeout(() => {
                finalQuoteContinueBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup final quote continue button
function setupFinalQuoteContinue() {
    const finalQuoteContinueBtn = document.getElementById('finalQuoteContinueBtn');
    
    finalQuoteContinueBtn.addEventListener('click', () => {
        transitionToPersian();
    });
}

// Transition to Persian explanation screen
function transitionToPersian() {
    const finalQuoteScreen = document.getElementById('finalQuoteScreen');
    const persianScreen = document.getElementById('persianScreen');
    
    finalQuoteScreen.classList.remove('active');
    
    setTimeout(() => {
        persianScreen.classList.add('active');
        startPersianTypewriter();
    }, 800);
}

// Persian typewriter effect
function startPersianTypewriter() {
    const persianElement = document.getElementById('persianText');
    const persianContinueBtn = document.getElementById('persianContinueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < persianExplanation.length) {
            persianElement.textContent = persianExplanation.substring(0, charIndex + 1);
            charIndex++;
            
            // Consistent speed
            const speed = 50;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            persianElement.classList.add('finished');
            setTimeout(() => {
                persianContinueBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup Persian continue button
function setupPersianContinue() {
    const persianContinueBtn = document.getElementById('persianContinueBtn');
    
    persianContinueBtn.addEventListener('click', () => {
        transitionToPersian2();
    });
}

// Transition to second Persian screen
function transitionToPersian2() {
    const persianScreen = document.getElementById('persianScreen');
    const persianScreen2 = document.getElementById('persianScreen2');
    
    persianScreen.classList.remove('active');
    
    setTimeout(() => {
        persianScreen2.classList.add('active');
        startPersian2Typewriter();
    }, 800);
}

// Second Persian typewriter effect
function startPersian2Typewriter() {
    const persian2Element = document.getElementById('persianText2');
    const persian2ContinueBtn = document.getElementById('persian2ContinueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < persianMessage2.length) {
            persian2Element.textContent = persianMessage2.substring(0, charIndex + 1);
            charIndex++;
            
            // Consistent speed
            const speed = 50;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            persian2Element.classList.add('finished');
            setTimeout(() => {
                persian2ContinueBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup Persian 2 continue button
function setupPersian2Continue() {
    const persian2ContinueBtn = document.getElementById('persian2ContinueBtn');
    
    persian2ContinueBtn.addEventListener('click', () => {
        transitionToPersian3();
    });
}

// Transition to third Persian screen
function transitionToPersian3() {
    const persianScreen2 = document.getElementById('persianScreen2');
    const persianScreen3 = document.getElementById('persianScreen3');
    
    persianScreen2.classList.remove('active');
    
    setTimeout(() => {
        persianScreen3.classList.add('active');
        startPersian3Typewriter();
    }, 800);
}

// Third Persian typewriter effect
function startPersian3Typewriter() {
    const persian3Element = document.getElementById('persianText3');
    const persian3ContinueBtn = document.getElementById('persian3ContinueBtn');
    let charIndex = 0;
    
    function type() {
        if (charIndex < persianMessage3.length) {
            persian3Element.textContent = persianMessage3.substring(0, charIndex + 1);
            charIndex++;
            
            // Consistent speed
            const speed = 50;
            setTimeout(type, speed);
        } else {
            // Remove cursor and show continue button
            persian3Element.classList.add('finished');
            setTimeout(() => {
                persian3ContinueBtn.classList.add('show');
            }, 500);
        }
    }
    
    type();
}

// Setup Persian 3 continue button
function setupPersian3Continue() {
    const persian3ContinueBtn = document.getElementById('persian3ContinueBtn');
    
    persian3ContinueBtn.addEventListener('click', () => {
        transitionToFinalName();
    });
}

// Transition to final name screen
function transitionToFinalName() {
    const persianScreen3 = document.getElementById('persianScreen3');
    const finalNameScreen = document.getElementById('finalNameScreen');
    
    persianScreen3.classList.remove('active');
    
    setTimeout(() => {
        finalNameScreen.classList.add('active');
        startFinalNameTypewriter();
    }, 800);
}

// Final name typewriter effect
function startFinalNameTypewriter() {
    const finalNameElement = document.getElementById('finalNameText');
    let charIndex = 0;
    
    function type() {
        if (charIndex < finalName.length) {
            finalNameElement.textContent = finalName.substring(0, charIndex + 1);
            charIndex++;
            
            // Slower, dramatic speed for the name
            const speed = 200;
            setTimeout(type, speed);
        } else {
            // Add the dot after a pause
            setTimeout(() => {
                finalNameElement.classList.add('show-dot');
            }, 500);
        }
    }
    
    type();
}

// Show music player
function showMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const songTitle = document.getElementById('songTitle');
    const songArtist = document.getElementById('songArtist');
    const musicQuote = document.getElementById('musicQuote');
    
    songTitle.textContent = musicInfo.title;
    songArtist.textContent = musicInfo.artist;
    musicQuote.textContent = `"${musicInfo.quote}"`;
    
    musicPlayer.classList.add('show');
    
    // Start playing music
    audioPlayer.play().catch(err => {
        console.log('Audio autoplay prevented:', err);
    });
    
    setupMusicControls();
}

// Music player controls
let musicControlsSetup = false;

function setupMusicControls() {
    if (musicControlsSetup) return; // Prevent duplicate event listeners
    musicControlsSetup = true;
    
    const musicPlayer = document.getElementById('musicPlayer');
    const collapseBtn = document.getElementById('collapseBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    let isPlaying = true;
    let isCollapsed = false;
    
    // Collapse/Expand
    collapseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isCollapsed = !isCollapsed;
        
        if (isCollapsed) {
            musicPlayer.classList.add('collapsed');
            collapseBtn.textContent = '♪';
            collapseBtn.title = 'Expand';
        } else {
            musicPlayer.classList.remove('collapsed');
            collapseBtn.textContent = '−';
            collapseBtn.title = 'Collapse';
        }
    });
    
    // Play/Pause
    playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPlaying = !isPlaying;
        musicPlayer.classList.toggle('paused');
        const icon = playPauseBtn.querySelector('.play-icon');
        
        if (isPlaying) {
            audioPlayer.play();
            icon.textContent = '⏸';
            playPauseBtn.title = 'Pause';
        } else {
            audioPlayer.pause();
            icon.textContent = '▶';
            playPauseBtn.title = 'Play';
        }
    });
    
    // Stop
    stopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        musicPlayer.classList.remove('show');
        musicPlayer.classList.remove('collapsed');
        musicPlayer.classList.add('hidden');
        isPlaying = false;
    });
}
