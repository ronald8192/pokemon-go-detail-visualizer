import {Component, OnInit} from "@angular/core";
import {PokemonData} from "./pokemonData";
import {InventoryPokemon} from "./inventoryPokemon";


@Component({
    selector: "inventory",
    templateUrl: "app/template/inventory.component.html",
})

export class InventoryComponent implements OnInit{
    jsonString:string = '';
    pokemons:InventoryPokemon[] = [];
    errorMessage:string = "";

    orderBy:string = "poke_id";
    orderAsc:boolean = true;

    constructor(){

    }

    ngOnInit() {
        
    }

    doCalculate():void{
        if(this.jsonString != ''){
            var pokemons:InventoryPokemon[];
            try {
                pokemons = JSON.parse(this.jsonString);
                for(let pokemon of pokemons){
                    pokemon.iv = (pokemon.iv_a + pokemon.iv_d + pokemon.iv_s)/45;
                    pokemon.name = PokemonData[pokemon.poke_id-1].name;
                }
                this.pokemons = this.sortPokemonBy(pokemons, "iv");
            }catch (e){
                console.log(e);
                this.errorMessage = "Invalid JSON!"
            }
            
        }

    }

    sortPokemonBy(pokemons:InventoryPokemon[], criteria:string):InventoryPokemon[]{
        if(criteria == this.orderBy){
            this.orderAsc = !this.orderAsc;
        }
        this.orderBy = criteria;
        var sortBy = function(a, b){
            var v1 = a[criteria];
            var v2 = b[criteria];
            return ((v1 < v2) ? -1 : ((v1 > v2) ? 1 : 0));
        };

        pokemons.sort(sortBy);
        return this.orderAsc ? pokemons : pokemons.reverse();
    }
}