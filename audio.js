var gAudio = AudioContext ? new AudioContext : new webkitAudioContext;

function playRotateSound(audio) {
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
  gain.gain.linearRampToValueAtTime(0, start + 0.19);
}

function playSlideSound(audio) {
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
  gain.gain.linearRampToValueAtTime(0, start + 0.09);
}

function playDropSound(audio) {
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
  gain.gain.linearRampToValueAtTime(0, start + 0.09);
}
