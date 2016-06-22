// UI Code for PeerJS demo
// 2016 Daniel Tsadok

var initMessageUI = function(peerServer) {
  document.getElementById("me").firstElementChild.innerHTML = peerServer.id;

  var peerList = document.getElementById('others');
  var refreshButton = document.getElementById('refresh');
  refreshButton.onclick = function() { showPeers(peerServer, peerList) };

  showPeers(peerServer, peerList);

  var sendButton = document.getElementById('send');
  sendButton.onclick = function() {
    var message = document.getElementById('message').value;
    var peerList = document.getElementById('others');
    var thou = peerList.options[peerList.selectedIndex].value;

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
