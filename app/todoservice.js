/// <reference path="../typings/tsd.d.ts" />
angular
    .module("todoApp")
    .service("todoService", function () {
    var self = this;
    this.todoArray = [
        {
            name: "Arsalan",
            age: 23
        }
    ];
    this.addItem = function () {
        self.todoArray.push();
    };
    this.removeItem = function (index) {
        self.todoArray.splice(index, 1);
    };
    return this.todoArray;
});
