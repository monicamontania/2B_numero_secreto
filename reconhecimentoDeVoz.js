window.SpeechRecognition = window.SpeechReconigtion ||
webkitSpeechRecognition;

const reconigtion = new SpeechRecognition();
reconigtion.lang = lang = 'pt-Br'
reconigtion.start()

reconigtion.addEventListener('result',onSpeak)

function onSpeak (e) {
    console.log(e.results [0] [0].transcript)
}

