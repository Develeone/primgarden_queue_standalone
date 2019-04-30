var queue = {
  onConnectionOpen : function () {
    WebSocketWorker.SendMessage("first_connection");
  },

  onConnectionClose : function () {
  },

  onConnectionError : function () {
  },

  processMessage : function (data) {
    data = JSON.parse(data);

    console.log("Received message: ", data);

    if (data.action == "update")
      queue.update(data.orders);

    else if (data.action == "remove")
      queue.remove(data.number);

    WebSocketWorker.SendMessage(
      JSON.stringify({
        action: "message_got",
        message_id: data.message_id
      })
    );
  },

  update : function (orders) {
    document.getElementById("orders-queue-container").innerHTML = "";

    for (var order in orders) {
      for (var deliveryType in orders[order].parts[0]) {
        var orderParts = (deliveryType == "delivery" ? orders[order].parts[0].delivery.items : orders[order].parts[0].pickup.items)

        var orderPartsString = "";

        orderParts.sort(function (a, b) { return (a.number > b.number) ? 1 : -1 });

        for (var orderPart in orderParts) {
          var status = "";

          if (orderParts[orderPart].status == "new")
              status = "<img src='svg/times.svg'>";
          if (orderParts[orderPart].status == "checked")
              status = "<img src='svg/check.svg'>";
          if (orderParts[orderPart].status == "completed")
              status = "<img src='svg/star.svg'>";

          orderPartsString += "<span class='order-part'>" + status + orderParts[orderPart].number + "</span> ";
        }

        var status = deliveryType == "delivery" ? orders[order].parts[0].delivery.status : orders[order].parts[0].pickup.status;

        if (status == "new")
          status = "<span><img src='svg/times.svg'>" + status + "</span>";
        if (status == "checked")
          status = "<span><img src='svg/check.svg'>" + status + "</span>";
        if (status == "completed")
          status = "<span><img src='svg/star.svg'>" + status + "</span>";

        document.getElementById("orders-queue-container").innerHTML += '' +
          '<tr>' +
          '<td style="width: 2em">' + (deliveryType == "delivery" ? orders[order].parts[0].delivery.displaying_date : orders[order].parts[0].pickup.displaying_date) + '</td>' +
          '<td>' + status + '</td>' +
          '<td><b>' + orders[order].client_number + "</b> " + (deliveryType == "delivery" ? "Д" : "С") + '</td>' +
          '<td>' + orders[order].printName + '</td>' +
          '<td>' + orderPartsString + '</td>' +
          '<td>' +
          '<button onclick="queue.removeFromQueueRequest('+orders[order].client_number+', '+ (deliveryType == "delivery" ? "1" : "0") +')">' +
          'Удалить из очереди' +
          '</button>' +
          '</td>' +
          '</tr>';
      }
    }
  },

  remove: function (data) {
    $('td:contains("' + data + '")').parent().remove();
  },

  removeFromQueueRequest: function (number, isDelivery) {
    WebSocketWorker.SendMessage(JSON.stringify({
      action: "remove_form_queue",
      data: {
        client_number: number,
        isDelivery: isDelivery
      }
    }));
  }

};