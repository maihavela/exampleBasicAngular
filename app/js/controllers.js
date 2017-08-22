angular.module('WidgetApp.controllers', [])
.controller('productsController', function($scope) {
    $scope.productsList = [
        {
        "title": "Heladera No Frost Whirlpool Wrm39k2 354lt",
        "price": "18.999",
        "stock": "8",
        "quantity": "1",
        "payment": "1", 
        "payments": [ "1", "6", "12"], 
        "expire_time": "15/9/2018",
        "description": "Tipo de deshielo Frost Free. Eficiencia energética A. Material de estantes de freezer Vidrio.Material de estantes de heladera Vidrio"
        },

        // {
        // "title": "Heladera Whirlpool 429lts No Frost Con Dispenser Acero Inoxt",
        // "price": "23.999",
        // "stock": "3",
        // "quantity": "1",
        // "payment": "1", 
        // "payments": [ "1", "2", "3"], 
        // "expire_time": "18/9/2018",
        // "description": "Tipo de deshielo Frost Free. Eficiencia energética A. Material de estantes de freezer Vidrio.Material de estantes de heladera Vidrio"
        // },

        // {
        // "title": "Sillon Ejecutivo Silla De Oficina Pc Escritorio Regulable",
        // "price": "1.999",
        // "stock": "4",
        // "quantity": "1",
        // "payment": "1", 
        // "payments": [ "1", "3", "6"], 
        // "expire_time": "20/9/2018",
        // "description": "Ruedas Siliconadas (no rayan el piso). Altura regulable por sist. oleo-neumático. Asiento relleno de espuma 18kg/m3"
        // }
]
});