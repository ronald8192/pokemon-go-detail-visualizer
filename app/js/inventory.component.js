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
var inventoryPokemon_1 = require("./inventoryPokemon");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var PokemonChiName_1 = require("./PokemonChiName");
var PokemonTypeList_1 = require("./PokemonTypeList");
var InventoryComponent = (function () {
    function InventoryComponent() {
        this.jsonString = '';
        this.pokemons = [];
        this.selectedPokemon = null;
        this.selectedIndex = 0; // need this because cannot access selectedPokemon.poke_id in html (pokeData[selectedPokemon.poke_id].name --> TypeError: Cannot read property 'name' of undefined), bug?
        this.errorMessage = "";
        this.orderBy = "poke_id";
        this.orderAsc = true;
        //have to do this to let PokemonData accessible from html?
        this.pokeData = pokemonData_1.PokemonData;
        this.chiName = PokemonChiName_1.PokemonChiName;
        this.pokemonTypes = PokemonTypeList_1.PokemonTypeList;
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.selectedPokemon = inventoryPokemon_1.EMPTY_POKEMON;
        // this.jsonString='{"pokemons":[{"iv_d":15,"max_cp_fp":719,"max_cp":1071,"weight":7.8,"created_at":1470480774969,"lv":18,"cp":551,"iv":1,"max_cp_fepufp":1732,"move_1":"Tackle","iv_s":15,"poke_id":1,"move_2":"Seed Bomb","nickname":"Bulbasaur100","fav":false,"iv_a":15,"height":0.72},{"iv_d":4,"max_cp_fp":396,"max_cp":590,"weight":2.07,"created_at":1470914138657,"lv":18,"cp":303,"iv":0.4222,"max_cp_fepufp":1069,"move_1":"Peck","iv_s":1,"poke_id":21,"move_2":"Aerial Ace","nickname":"","fav":false,"iv_a":14,"height":0.31},{"iv_d":10,"max_cp_fp":409,"max_cp":610,"weight":2.91,"created_at":1470909903290,"lv":20,"cp":348,"iv":0.6444,"max_cp_fepufp":1089,"move_1":"Quick Attack","iv_s":13,"poke_id":21,"move_2":"Twister","nickname":"","fav":false,"iv_a":6,"height":0.37},{"iv_d":13,"max_cp_fp":729,"max_cp":1086,"weight":0.77,"created_at":1470254607720,"lv":9,"cp":277,"iv":0.7556,"max_cp_fepufp":1452,"move_1":"Acid","iv_s":8,"poke_id":109,"move_2":"Sludge","nickname":"Koffing75.6","fav":false,"iv_a":13,"height":0.48},{"iv_d":10,"max_cp_fp":601,"max_cp":896,"weight":42.92,"created_at":1470848294619,"lv":17,"cp":435,"iv":0.8,"max_cp_fepufp":1421,"move_1":"Quick Attack","iv_s":14,"poke_id":120,"move_2":"Bubble Beam","nickname":"Staryu80","fav":false,"iv_a":12,"height":0.87},{"iv_d":9,"max_cp_fp":703,"max_cp":1047,"weight":7.59,"created_at":1470915749280,"lv":16,"cp":479,"iv":0.4444,"max_cp_fepufp":1464,"move_1":"Zen Headbutt","iv_s":7,"poke_id":35,"move_2":"Disarming Voice","nickname":"","fav":false,"iv_a":4,"height":0.67},{"iv_d":10,"max_cp_fp":406,"max_cp":605,"weight":4.16,"created_at":1470913320058,"lv":20,"cp":345,"iv":0.7778,"max_cp_fepufp":1246,"move_1":"Bite","iv_s":12,"poke_id":41,"move_2":"Air Cutter","nickname":"Zubat-egg","fav":false,"iv_a":13,"height":0.66},{"iv_d":13,"max_cp_fp":381,"max_cp":568,"weight":2.64,"created_at":1470829975989,"lv":14,"cp":227,"iv":0.5333,"max_cp_fepufp":1268,"move_1":"Quick Attack","iv_s":11,"poke_id":16,"move_2":"Twister","nickname":"Pidgey53@14","fav":false,"iv_a":0,"height":0.35},{"iv_d":7,"max_cp_fp":2034,"max_cp":3030,"weight":262.92,"created_at":1470829042894,"lv":15,"cp":1298,"iv":0.7333,"max_cp_fepufp":2034,"move_1":"Zen Headbutt","iv_s":11,"poke_id":143,"move_2":"Body Slam","nickname":"Snorlax73.3","fav":false,"iv_a":15,"height":1.76},{"iv_d":15,"max_cp_fp":533,"max_cp":794,"weight":11.14,"created_at":1470829635874,"lv":15,"cp":340,"iv":0.8,"max_cp_fepufp":1605,"move_1":"Peck","iv_s":11,"poke_id":32,"move_2":"Sludge Bomb","nickname":"Nidoran♂-egg","fav":false,"iv_a":10,"height":0.5},{"iv_d":11,"max_cp_fp":1428,"max_cp":2127,"weight":33.18,"created_at":1469651221071,"lv":7,"cp":415,"iv":0.8,"max_cp_fepufp":1428,"move_1":"Ember","iv_s":14,"poke_id":78,"move_2":"Fire Blast","nickname":"Ponyta80","fav":true,"iv_a":11,"height":1.26},{"iv_d":3,"max_cp_fp":1224,"max_cp":1823,"weight":51.8,"created_at":1470909163465,"lv":11,"cp":573,"iv":0.6444,"max_cp_fepufp":1224,"move_1":"Bite","iv_s":13,"poke_id":42,"move_2":"Air Cutter","nickname":"","fav":false,"iv_a":13,"height":1.43},{"iv_d":13,"max_cp_fp":386,"max_cp":575,"weight":1.84,"created_at":1470912554029,"lv":15,"cp":246,"iv":0.4889,"max_cp_fepufp":1049,"move_1":"Quick Attack","iv_s":8,"poke_id":21,"move_2":"Twister","nickname":"","fav":false,"iv_a":1,"height":0.3},{"iv_d":15,"max_cp_fp":616,"max_cp":918,"weight":19.04,"created_at":1469783569824,"lv":5,"cp":123,"iv":0.7778,"max_cp_fepufp":1332,"move_1":"Mud Shot","iv_s":5,"poke_id":118,"move_2":"Aqua Tail","nickname":"Goldeen77.78","fav":true,"iv_a":15,"height":0.66}]}';
        // this.doCalculate();
    };
    InventoryComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    };
    InventoryComponent.prototype.doCalculate = function () {
        if (this.jsonString != '') {
            var pokemons;
            try {
                pokemons = JSON.parse(this.jsonString).pokemons;
                // for(let pokemon of pokemons){
                //     // pokemon.iv = (pokemon.iv_a + pokemon.iv_d + pokemon.iv_s)/45;
                //     pokemon.name = PokemonData[pokemon.poke_id-1].name;
                // }
                this.pokemons = this.sortPokemonBy(pokemons, "iv");
            }
            catch (e) {
                console.log(e);
                this.errorMessage = "Invalid JSON!";
            }
            this.jsonString = "";
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
    InventoryComponent.prototype.selectPokemon = function (pokemon) {
        this.selectedPokemon = pokemon;
        this.selectedIndex = this.selectedPokemon.poke_id - 1;
        console.log(this.selectedPokemon.poke_id);
        this.pokeModal.open();
    };
    InventoryComponent.prototype.close = function () {
        this.pokeModal.close();
    };
    InventoryComponent.prototype.open = function () {
        this.pokeModal.open();
    };
    __decorate([
        core_1.ViewChild('pokeModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], InventoryComponent.prototype, "pokeModal", void 0);
    InventoryComponent = __decorate([
        core_1.Component({
            selector: "inventory",
            templateUrl: "app/template/inventory.component.html",
            directives: [
                ng2_bs3_modal_1.MODAL_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;

//# sourceMappingURL=inventory.component.js.map
