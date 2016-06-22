var initMidiUI = function() {
  var addNote = function(noteName) {
    addNoteToSong(Notes[noteName]);
    document.getElementById("song").innerHTML += " " + noteName;
  }

  var doButton = document.getElementById('do');
  doButton.onclick = function() {
    addNote("DO");
  };
  //document -> recument (thanks, search & replace)
  var reButton = document.getElementById('re');
  reButton.onclick = function() {
    addNote("RE");
  };
  var miButton = document.getElementById('mi');
  miButton.onclick = function() {
    addNote("MI");
  };

  var clearButton = document.getElementById('clear');
  clearButton.onclick = function() {
    clearSong();
    document.getElementById("song").innerHTML = "";
  }

  var previewButton = document.getElementById('preview');
  previewButton.onclick = previewSong;
}
