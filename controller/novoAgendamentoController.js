angular.module("SmartHome")
    .controller("novoAgendamentoController",
        function ($scope, $websocket) {

            var dataStream = $websocket('ws://localhost:3000/iot/websocket');

            $scope.ligar = function () {
                var msg = {
                    comando: "LIGAR"
                };

                dataStream.send(msg);
            };
        });