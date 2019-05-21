angular.module("SmartHome").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/smartHome", {
        templateUrl: "view/smartHomeView.html",
        controller: "smartHomeController"
    });

    $routeProvider.when("/agendamentos", {
        templateUrl: "view/agendamentoView.html",
        controller: "agendamentoController"
    });

    $routeProvider.when("/novoAgendamento", {
        templateUrl: "view/novoAgendamentoView.html",
        controller: "novoAgendamentoController"
    });
}]);