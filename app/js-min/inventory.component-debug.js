"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pokemonData_1 = require("./pokemonData");
var InventoryComponent = (function () {
    function InventoryComponent() {
        this.jsonString = '';
        this.pokemons = [];
        this.errorMessage = "";
        this.orderBy = "id";
        this.orderAsc = true;
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent.prototype.doCalculate = function () {
        if (this.jsonString != '') {
            var pokemons;
            try {
                pokemons = JSON.parse(this.jsonString);
                for (var _i = 0, pokemons_1 = pokemons; _i < pokemons_1.length; _i++) {
                    var pokemon = pokemons_1[_i];
                    pokemon.perfection = (pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina) / 45;
                    pokemon.name = pokemonData_1.PokemonData[pokemon.id - 1].name;
                }
                this.pokemons = this.sortPokemonBy(pokemons, "perfection");
            }
            catch (e) {
                console.log(e);
                this.errorMessage = "Invalid JSON!";
            }
        }
    };
    InventoryComponent.prototype.sortPokemonBy = function (pokemons, criteria) {
        if (criteria == this.orderBy) {
            this.orderAsc = !this.orderAsc;
        }
        this.orderBy = criteria;
        var sortBy = function (a, b) {
            var v1 = a[criteria];
            var v2 = b[criteria];
            return ((v1 < v2) ? -1 : ((v1 > v2) ? 1 : 0));
        };
        pokemons.sort(sortBy);
        return this.orderAsc ? pokemons : pokemons.reverse();
    };
    InventoryComponent = __decorate([
        core_1.Component({
            selector: "inventory",
            templateUrl: "app/template/inventory.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;

//# sourceMappingURL=inventory.component.js.map
