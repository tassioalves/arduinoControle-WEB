angular.module("SmartHome").factory("novoAgendamentoService", function ($http) {
    var _salvarAgendamento = function (agendamento) {


        var requerimentoGet = {
            method: "GET",
            url: url + "/order/" + idCompra,
            headers: {
                "Authorization": "Bearer " + JSON.parse(token)
            }
        };
        return $http(requerimentoGet);
    };

    return {
        salvarAgendamento: _salvarAgendamento
    };
});