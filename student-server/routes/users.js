var express = require('express');
const {Observable} = require("rxjs");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse  = {
    "users": [
      { "id": 0, "name": "Server Ваня", "surname": "Иванов", "patronymic": "Иванович", "birthday": new Date(2000, 4, 20), "grade": 5 },
      { "id": 1, "name": "Server Петя", "surname": "Петров", "patronymic": "Петрович", "birthday": new Date(1997, 11, 24), "grade": 4 },
      { "id": 2, "name": "Server Игорь", "surname": "Игорев", "patronymic": "Игоревич", "birthday": new Date(1997, 11, 23), "grade": 2 },
      { "id": 3, "name": "Server Костя", "surname": "Костев", "patronymic": "Константинович", "birthday": new Date(1980, 2, 27), "grade": 1 },
      { "id": 4, "name": "Server Кирилл", "surname": "Кириллов", "patronymic": "Кириллович", "birthday": new Date(2002, 5, 21), "grade": 3 },
      { "id": 5, "name": "Server Никита", "surname": "Никитов", "patronymic": "Никитович", "birthday": new Date(1996, 11, 14), "grade": 5 },
      { "id": 6, "name": "Server Саша", "surname": "Сашев", "patronymic": "Александрович", "birthday": new Date(2008, 7, 7), "grade": 3 },
      { "id": 7, "name": "Server Юра", "surname": "Юров", "patronymic": "Юрьевич", "birthday": new Date(2017, 6, 3), "grade": 2 },
      { "id": 8, "name": "Server Денис", "surname": "Денисов", "patronymic": "Денисович", "birthday": new Date(2019, 3, 29), "grade": 1 },
      { "id": 9, "name": "Server Илья", "surname": "Ильев", "patronymic": "Ильевич", "birthday": new Date(2020, 8, -18), "grade": 4 },
    ]
  }
  res.json(jsonResponse);
});

module.exports = router;
