WebSocketWorker.Connect(
  queue.processMessage,
  queue.onConnectionOpen,
  queue.onConnectionClose,
  queue.onConnectionError
);

setTimeout(function () {
//  queue.processMessage('{"action":"update","orders":[{"client_number":"11","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"11С/1","status":"completed"},{"number":"11С/2","status":"completed"}]}}]},{"client_number":"19","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"19С/1","status":"completed"}]}}]},{"client_number":"20","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"20С/1","status":"completed"}]}}]},{"client_number":"22","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"22С/3","status":"completed"}]}}]},{"client_number":"25","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"25С/2","status":"completed"},{"number":"25С/1","status":"completed"}]}}]},{"client_number":"26","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"26С/1","status":"completed"}]}}]},{"client_number":"28","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"28С/1","status":"completed"}]}}]},{"client_number":"30","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"30С/1","status":"completed"}]}}]},{"client_number":"43","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"43С/1","status":"completed"}]}}]},{"client_number":"49","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"49С/2","status":"completed"}]}}]},{"client_number":"54","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"54С/1","status":"completed"}]}}]},{"client_number":"62","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"62С/2","status":"completed"},{"number":"62С/1","status":"completed"}]}}]},{"client_number":"81","name":"Иванов","printName":"Иванов","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"81С/2","status":"completed"},{"number":"81С/1","status":"completed"}]}}]},{"client_number":"166","name":"ИП Докунина Наталья Владимировна","printName":"ИП Докунина Наталья Владимировна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"166С/1","status":"completed"}]}}]},{"client_number":"219","name":"Игнатова Светлана (покупатель)","printName":"Игнатова Светлана (покупатель)","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"219С/2","status":"completed"},{"number":"219С/3","status":"completed"}]}}]},{"client_number":"309","name":"ИП Богданенко Екатерина Александровна","printName":"ИП Богданенко Екатерина Александровна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"new","items":[{"number":"309С/1","status":"new"}]}}]},{"client_number":"337","name":"ИП Борченко Анатолий Дмитриевич 10%","printName":"ИП Борченко Анатолий Дмитриевич","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"337С/2","status":"completed"},{"number":"337С/1","status":"completed"},{"number":"337С/3","status":"completed"}]}}]},{"client_number":"388","name":"ИП Вдовина Татьяна Васильевна 8%","printName":"ИП Вдовина Татьяна Васильевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"new","items":[{"number":"388С/1","status":"new"}]}}]},{"client_number":"479","name":"ИП Григорян Левон Володяевич","printName":"ИП Григорян Левон Володяевич","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"479С/1","status":"completed"},{"number":"479С/2","status":"completed"}]}}]},{"client_number":"565","name":"ИП Жаркова Людмила Михайловна 8%","printName":"ИП Жаркова Людмила Михайловна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"565С/1","status":"completed"}]}}]},{"client_number":"594","name":"ИП Зускина Наталья Александровна","printName":"ИП Зускина Наталья Александровна","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"594Д/3","status":"completed"},{"number":"594Д/1","status":"completed"},{"number":"594Д/2","status":"completed"}]}}]},{"client_number":"596","name":"ИП Зюмченко Инна Николаевна 12%","printName":"ИП Зюмченко Инна Николаевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"596С/1","status":"completed"}]}}]},{"client_number":"631","name":"ИП Карпович Наталья Николаевна","printName":"ИП Карпович Наталья Николаевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"631С/1","status":"completed"}]}}]},{"client_number":"651","name":"ИП Ким Наталья Александровна 5%","printName":"ИП Ким Наталья Александровна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"651С/3","status":"completed"},{"number":"651С/1","status":"completed"},{"number":"651С/2","status":"completed"}]}}]},{"client_number":"679","name":"ИП Ковалева Юлия Юрьевна","printName":"ИП Ковалева Юлия Юрьевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"679С/2","status":"completed"},{"number":"679С/1","status":"completed"},{"number":"679С/3","status":"completed"}]}}]},{"client_number":"790","name":"ИП Левашов Вадим Михайлович 3%","printName":"ИП Левашов Вадим Михайлович","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"790С/1","status":"completed"}]}}]},{"client_number":"840","name":"ИП Макаренко Андрей Анатольевич","printName":"ИП Макаренко Андрей Анатольевич","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"840Д/1","status":"completed"}]}}]},{"client_number":"990","name":"ИП Павлов Андрей Леонидович","printName":"ИП Павлов Андрей Леонидович","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"990С/1","status":"completed"}]}}]},{"client_number":"1058","name":"ИП Пятакова Ирина Владимировна","printName":"ИП Пятакова Ирина Владимировна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1058С/2","status":"completed"},{"number":"1058С/1","status":"completed"}]}}]},{"client_number":"1119","name":"ИП Сергоян Меланя Сергеевна","printName":"ИП Сергоян Меланя Сергеевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1119С/2","status":"completed"},{"number":"1119С/1","status":"completed"}]}}]},{"client_number":"1160","name":"ИП Соловей Татьяна Сергеевна 22% семена, 7%луковица","printName":"ИП Соловей Татьяна Сергеевна","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"1160Д/1","status":"completed"},{"number":"1160Д/2","status":"completed"}]}}]},{"client_number":"1161","name":"ИП Соловей Татьяна Сергеевна 8% прочие","printName":"ИП Соловей Татьяна Сергеевна","parts":[{"delivery":{"date":"26.04.19","displaying_date":"23.04.19","status":"completed","items":[{"number":"1161Д/4","status":"completed"},{"number":"1161Д/1","status":"completed"},{"number":"1161Д/1","status":"completed"},{"number":"1161Д/1","status":"completed"},{"number":"1161Д/5","status":"completed"},{"number":"1161Д/2","status":"completed"}]}}]},{"client_number":"1317","name":"ИП Чаркина Ольга Васильевна 10%","printName":"ИП Чаркина Ольга Васильевна 10%","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"1317Д/1","status":"completed"}]}}]},{"client_number":"1333","name":"ИП Чернусь Татьяна Николаевна","printName":"ИП Чернусь Татьяна Николаевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1333С/1","status":"completed"}]}}]},{"client_number":"1350","name":"ИП Шаманаева Анна Владимировна","printName":"ИП Шаманаева Анна Владимировна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1350С/1","status":"completed"}]}}]},{"client_number":"1520","name":"АО Горнорудная компания АИР (для себя)","printName":"АО Горнорудная компания АИР","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"1520Д/1","status":"completed"}]}}]},{"client_number":"1521","name":"АО Горнорудная компания АИР 4%","printName":"АО Горнорудная компания АИР","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"1521Д/2","status":"completed"},{"number":"1521Д/1","status":"completed"}]}}]},{"client_number":"1551","name":"ООО Агенство Шанс","printName":"ООО Агенство Шанс","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1551С/1","status":"completed"},{"number":"1551С/2","status":"completed"}]}}]},{"client_number":"1604","name":"ООО Влад Юр Центр 8%","printName":"ООО Влад Юр Центр","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1604С/1","status":"completed"},{"number":"1604С/2","status":"completed"}]}}]},{"client_number":"1877","name":"ООО ЭКО - САБСАН (Не торгуют)","printName":"ООО ЭКО - САБСАН","parts":[{"delivery":{"date":"26.04.19","displaying_date":"22.04.19","status":"completed","items":[{"number":"1877Д/2","status":"completed"},{"number":"1877Д/1","status":"completed"}]}}]},{"client_number":"1889","name":"ООО Эскарп","printName":"ООО Эскарп","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1889С/1","status":"completed"}]}}]},{"client_number":"1951","name":"Сидорова Елена Николаевна(покупатель)","printName":"Сидорова Елена Николаевна(покупатель)","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"1951С/3","status":"completed"}]}}]},{"client_number":"2031","name":"Фермерское хозяйство Супряга Вячеслав Анатольевич","printName":"Фермерское хозяйство Супряга Вячеслав Анатольевич","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"2031С/2","status":"completed"},{"number":"2031С/1","status":"completed"}]}}]},{"client_number":"2948","name":"ИП Шинеленко Денис Павлович","printName":"ИП Шинеленко Денис Павлович","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"2948С/1","status":"completed"}]}}]},{"client_number":"2952","name":"ИП Суслова Фрозина Сергеевна","printName":"ИП Суслова Фрозина Сергеевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"2952С/1","status":"completed"}]}}]},{"client_number":"2961","name":"ООО Ирина","printName":"ООО Ирина","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"2961Д/1","status":"completed"},{"number":"2961Д/2","status":"completed"}]}}]},{"client_number":"2981","name":"ИП Кирчук Анна Витальевна 10%","printName":"ИП Кирчук Анна Витальевна","parts":[{"delivery":{"date":"26.04.19","displaying_date":"22.04.19","status":"completed","items":[{"number":"2981Д/5","status":"completed"},{"number":"2981Д/2","status":"completed"},{"number":"2981Д/4","status":"completed"},{"number":"2981Д/1","status":"completed"},{"number":"2981Д/3","status":"completed"},{"number":"2981Д/1","status":"completed"},{"number":"2981Д/1","status":"completed"},{"number":"2981Д/1","status":"completed"}]}}]},{"client_number":"2989","name":"ИП Доронин Николай Анатольевич 10%","printName":"ИП Доронин Николай Анатольевич","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"2989С/8","status":"completed"},{"number":"2989С/5","status":"completed"},{"number":"2989С/1","status":"completed"},{"number":"2989С/2","status":"completed"},{"number":"2989С/7","status":"completed"},{"number":"2989С/6","status":"completed"},{"number":"2989С/4","status":"completed"},{"number":"2989С/9","status":"completed"}]}}]},{"client_number":"3033","name":"ИП Тифанова Елена Владимировна (не торгует)","printName":"ИП Тифанова Елена Владимировна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"3033С/1","status":"completed"}]}}]},{"client_number":"3172","name":"ИП Кобзарь Елена Юрьевна 6% ( ИП Ерохина Т)","printName":"ИП Кобзарь Елена Юрьевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"3172С/6","status":"completed"},{"number":"3172С/5","status":"completed"},{"number":"3172С/1","status":"completed"},{"number":"3172С/2","status":"completed"},{"number":"3172С/3","status":"completed"},{"number":"3172С/4","status":"completed"}]}}]},{"client_number":"3208","name":"ИП Оськина Татьяна Борисовна 12% ( ООО КАБ)","printName":"ИП Оськина Татьяна Борисовна","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"3208Д/4","status":"completed"},{"number":"3208Д/3","status":"completed"},{"number":"3208Д/2","status":"completed"},{"number":"3208Д/1","status":"completed"}]}}]},{"client_number":"3232","name":"ООО Морион","printName":"Общество с Ограниченной Ответственностью Морион","parts":[{"delivery":{"date":"26.04.19","displaying_date":"25.04.19","status":"completed","items":[{"number":"3232Д/1","status":"completed"},{"number":"3232Д/2","status":"completed"}]}}]},{"client_number":"3247","name":"ООО Ремонтно-строительная компания КФК","printName":"ООО Ремонтно-строительная компания КФК","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"new","items":[{"number":"3247С/1","status":"new"}]}}]},{"client_number":"3290","name":"ИП Гардеев Денис Вячеславович ( не торгую, кафе)","printName":"ИП Гардеев Денис Вячеславович","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"3290С/1","status":"completed"},{"number":"3290С/2","status":"completed"}]}}]},{"client_number":"3679","name":"ООО СВЛ","printName":"ООО СВЛ","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"3679С/1","status":"completed"},{"number":"3679С/2","status":"completed"}]}}]},{"client_number":"3711","name":"ИП Даничкина Наталья Геннадьевна (не торгует)","printName":"ИП Даничкина Наталья Геннадьевна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"3711С/3","status":"completed"},{"number":"3711С/2","status":"completed"},{"number":"3711С/1","status":"completed"}]}}]},{"client_number":"4878","name":"ИП Мускатина Татьяна Викторовна прочие 12%, луковица 25%","printName":"ИП Мускатина Татьяна Викторовна","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"completed","items":[{"number":"4878С/2","status":"completed"},{"number":"4878С/1","status":"completed"},{"number":"4878С/3","status":"completed"}]}}]},{"client_number":"7070","name":"Склад Угольная","printName":"Склад Угольная","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"new","items":[{"number":"7070С/6","status":"new"}]}}]},{"client_number":"7777","name":"Склад уссурийск ТЦ","printName":"Склад уссурийск ТЦ","parts":[{"pickup":{"date":"01.01.53","displaying_date":"26.04.19","status":"new","items":[{"number":"7777С/1","status":"new"},{"number":"7777С/2","status":"new"}]}}]}],"message_id":609}');
}, 1000);