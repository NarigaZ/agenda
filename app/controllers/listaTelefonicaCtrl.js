angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http , contatosAPI , operadorasAPI , serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];

    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(function (response) {
            $scope.message = "Aconteceu um problema: "+ response.data;
        });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contato.serial = serialGenerator.gerenate();
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };
    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos){
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordernarPor = function (campo){
        $scope.ordenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
    carregarContatos();
    carregarOperadoras();
});