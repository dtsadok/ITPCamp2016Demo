// UI Code for PeerJS demo
// 2016 Daniel Tsadok

var initMessageUI = function(peerServer) {
  var getPeerFromList = function(peerList) {
    if (peerList && peerList.selectedIndex >= 0)
      return peerList.options[peerList.selectedIndex].value;
  }

  document.getElementById("me").firstElementChild.innerHTML = peerServer.id;

  var peerList = document.getElementById('others');
  var refreshButton = document.getElementById('refresh');
  refreshButton.onclick = function() { showPeers(peerServer, peerList) };

  showPeers(peerServer, peerList);

  var sendButton = document.getElementById('send');
  sendButton.onclick = function() {
    var message = document.getElementById('message').value;
    var thou = getPeerFromList(peerList);

    if (message && thou) {
      sendMessage(peerServer, thou, message);
    }
  }

  //show when we receive a message
  peerServer.on('connection', function(conn) {
    conn.on('data', function(data){
      document.getElementById('incoming').value += conn.peer + ": " + data + "\n";
    });
  });
}
