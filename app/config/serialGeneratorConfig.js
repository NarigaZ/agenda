angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLenght(10);
    console.log(serialGeneratorProvider.getLength())
});