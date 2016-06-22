//2016 Daniel Tsadok

var SoundfontUrl = "vendor/soundfont/";

//play notes 0.5s apart
var playSong = function(notes) {
  for (var i in notes) {
    var delay = 0.5 * i;  //e.g. for 3 notes, 0s, 0.5s, 1s

    MIDI.setVolume(0, 127);
    MIDI.noteOn(0, notes[i], 127, delay);
    MIDI.noteOff(0, notes[i], delay + 0.75);
  }
}

var loadAndPlay = function(instrument, song) {
  MIDI.loadPlugin({
    soundfontUrl: SoundfontUrl,
    instrument: instrument,

    onprogress: function(state, progress) {
      console.log(state, progress);
    },

    onsuccess: function() {
      console.log("Ready to play");
      if (song) playSong(song);
    }
  });
}
