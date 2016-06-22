// UI Code for PeerJS demo
// 2016 Daniel Tsadok

var initMessageUI = function(peerServer, myPeerId) {
  document.getElementById("me").firstElementChild.innerHTML = myPeerId;

  var peerList = document.getElementById('others');
  var refreshButton = document.getElementById('refresh');
  refreshButton.onclick = function() { showPeers(peerServer, myPeerId, peerList) };

  showPeers(peerServer, myPeerId, peerList);

  var sendButton = document.getElementById('send');
  sendButton.onclick = function() {
    var message = document.getElementById('message').value;
    var peerList = document.getElementById('others');
    var otherId = peerList.options[peerList.selectedIndex].value;

    if (message && otherId) {
      sendMessage(peerServer, otherId, message);
    }
  }

  //show when we receive a message
  peerServer.on('connection', function(conn) {
    conn.on('data', function(data){
      document.getElementById('incoming').value += conn.peer + ": " + data + "\n";
    });
  });
}
