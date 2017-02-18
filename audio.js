var gAudio;
try {
  gAudio = AudioContext ? new AudioContext : new webkitAudioContext;
}
catch (err) {
  gAudio = false;
}

function playRotateSound(audio) {
  if (audio === false) return;
  var osc = audio.createOscillator();
  var gain = audio.createGain();
  var start = audio.currentTime;

  osc.connect(gain);
  gain.connect(audio.destination);

  osc.start(start);
  osc.frequency.linearRampToValueAtTime(220, start);
  osc.frequency.linearRampToValueAtTime(440, start + 0.2);
  osc.stop(start + 0.2);

  gain.gain.linearRampToValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(0.1, start + 0.01);
  gain.gain.linearRampToValueAtTime(0, start + 0.2);
}

function playSlideSound(audio) {
  if (audio === false) return;
  var osc = audio.createOscillator();
  var gain = audio.createGain();
  var start = audio.currentTime;

  osc.connect(gain);
  gain.connect(audio.destination);

  osc.start(start);
  osc.frequency.linearRampToValueAtTime(220, start);
  osc.frequency.linearRampToValueAtTime(440, start + 0.1);
  osc.stop(start + 0.1);

  gain.gain.linearRampToValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(0.1, start + 0.01);
  gain.gain.linearRampToValueAtTime(0, start + 0.1);
}

function playDropSound(audio) {
  if (audio === false) return;
  var osc = audio.createOscillator();
  var gain = audio.createGain();
  var start = audio.currentTime;

  osc.connect(gain);
  gain.connect(audio.destination);

  osc.frequency.value = 330;
  osc.start(start);
  osc.stop(start + 0.1);

  gain.gain.linearRampToValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(0.1, start + 0.01);
  gain.gain.linearRampToValueAtTime(0, start + 0.1);
}

function playNote(audio, gain, note, start, end) {
  var osc = audio.createOscillator();
  var freq;
  switch (note[0]) {
    case 'c'  : freq = 16.35; break;
    case 'db' : freq = 17.32; break;
    case 'd'  : freq = 18.35; break;
    case 'eb' : freq = 19.45; break;
    case 'e'  : freq = 20.60; break;
    case 'f'  : freq = 21.83; break;
    case 'gb' : freq = 23.12; break;
    case 'g'  : freq = 24.50; break;
    case 'ab' : freq = 25.96; break;
    case 'a'  : freq = 27.50; break;
    case 'bb' : freq = 29.14; break;
    case 'b'  : freq = 30.87; break;
  }

  osc.type = 'triangle';
  osc.frequency.value = Math.pow(2, note[1]) * freq;
  osc.connect(gain);
  gain.connect(audio.destination);

  osc.start(start);
  osc.stop(end);

  gain.gain.linearRampToValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(0.1, start + 0.01);
  gain.gain.linearRampToValueAtTime(0, end);
}
