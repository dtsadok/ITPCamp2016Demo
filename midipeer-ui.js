//2016 Daniel Tsadok

var initMidiPeerUI = function(peerServer) {
  var getPeerFromList = function(peerList) {
    if (peerList && peerList.selectedIndex >= 0)
      return peerList.options[peerList.selectedIndex].value;
  }

  document.getElementById("me").firstElementChild.innerHTML = peerServer.id;

  var peerList = document.getElementById('others');
  showPeers(peerServer, peerList);

  var refreshButton = document.getElementById('refresh');
  refreshButton.onclick = function() { showPeers(peerServer, peerList) };

  var sendButton = document.getElementById('send');
  sendButton.onclick = function() {
    //who are we sending to?
    var thou = getPeerFromList(peerList);
    if (thou) { sendSong(peerServer, thou) }
  };

  var playButton = document.getElementById('play');
  playButton.onclick = function() {
    if (ReceivedSong) { playSong(ReceivedSong) }
  };

  //show when we receive a message
  //Note: This will replace each incoming song, so play it quick!
  peerServer.on('connection', function(conn) {
    conn.on('data', function(data){
      ReceivedSong = JSON.parse(data);
      console.log(ReceivedSong);

      document.getElementById('incoming').firstElementChild.innerHTML = 
        "Received song from " + conn.peer;

      //enable play button so we can play song
      var playButton = document.getElementById('play');
      playButton.disabled = false;
    });
  });
}
