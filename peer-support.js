// Supporting functions for PeerJS Demo
// 2016 Daniel Tsadok

var showPeers = function(peerServer, myPeerId, peerList) {
  //server must have --allow_discovery
  peerServer.listAllPeers(function(others) {

    peerList.innerHTML = "<option></option>";

    for (var i in others) {
      if (others[i] == myPeerId) continue;
      peerList.innerHTML += "<option>"+ others[i] +"</option>";
    }
  });
}

var sendMessage = function(peerServer, otherId, message) {
  var conn = peerServer.connect(otherId);

  conn.on('open', function(){
    conn.send(message);
  });
}
