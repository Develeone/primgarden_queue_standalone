var WebSocketWorker = {
  connection : null,

  onMessageCallback : null,
  onOpenCallback : null,
  onCloseCallback : null,
  onErrorCallback : null,

  Connect : function (_onMessage, _onOpen, _onClose, _onError) {

    if (_onMessage)     this.onMessageCallback = _onMessage;
    if (_onOpen)        this.onOpenCallback = _onOpen;
    if (_onClose)       this.onCloseCallback = _onClose;
    if (_onError)       this.onErrorCallback = _onError;

    this.connection = new WebSocket("ws://192.168.100.172:1448/");

    var self = this;

    this.connection.onmessage = function (message) {
      self.onMessageCallback(message.data);
    };

    this.connection.onopen = function () {
      //alert("Connected");

      self.KeepAlive();

      self.onOpenCallback();
    };

    this.connection.onclose = function (event) {
      //alert(JSON.stringify(event));

      self.Reconnect();

      self.onCloseCallback();
    };

    this.connection.onerror = function (error) {
      //alert(JSON.stringify(error));

      //this.Reconnect();

      self.onErrorCallback();
    };
  },

  Reconnect : function () {
    this.StopKeepingAlive();
    this.Connect();
  },

  SendMessage : function (message) {
    this.connection.send(message);
  },

  KeepAlive : function () {
    var intervalDuration = 20000;

    this.keepingAliveTimer = setInterval(function () {
      if (WebSocketWorker.connection.readyState === WebSocketWorker.connection.OPEN) {
        //WebSocketWorker.connection.send('');
      } else {
        WebSocketWorker.Reconnect();
      }
    }, intervalDuration);
  },

  StopKeepingAlive : function () {
    if (this.keepingAliveTimer) {
      clearTimeout(this.keepingAliveTimer);
    }
  }
};