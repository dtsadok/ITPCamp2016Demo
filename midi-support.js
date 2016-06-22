//2016 Daniel Tsadok

var SoundfontUrl = "vendor/soundfont/";

var Song = [];

var Notes = { DO: 52, RE: 54, MI: 56 };

var loadMidi = function(instrument, callback) {
  MIDI.loadPlugin({
    soundfontUrl: SoundfontUrl,
    instrument: instrument,

    onsuccess: function() {
      console.log("Ready to play");
      if (callback) callback();
    }
  });
}

//play notes 0.5s apart
var playSong = function(notes) {
  for (var i in notes) {
    var delay = 0.5 * i;  //e.g. for 3 notes, 0s, 0.5s, 1s

    MIDI.setVolume(0, 127);
    MIDI.noteOn(0, notes[i], 127, delay);
    MIDI.noteOff(0, notes[i], delay + 0.75);
  }
}

var addNoteToSong = function(note) {
  Song.push(note);
}

var clearSong = function() {
  if (confirm("Are you sure?"))
    Song = [];
}

var previewSong = function() {
  playSong(Song);
}
