import {PokemonChiName} from "./PokemonChiName";
import {PokemonData} from "./pokemonData";
export class InventoryPokemon{
    poke_id: number;
    name:string;
    nickname:string;
    lv:number;
    cp: number;
    move_1:string;
    move_2:string;
    iv:number;
    iv_a:number;
    iv_d:number;
    iv_s:number;
    height:number;
    weight:number;
    fav:boolean;
    created_at:number;
    max_cp_abs:number; //max cp that this type of pokemon can be
    max_cp:number; //max cp that your (this) pokemon can be
    max_cp_fp:number; //max cp that can achieve by you (your player), after power up
    max_cp_fepufp:number; //max cp that can achieve by you (your player), after full power up and evolve

    // getChineseName():string{
    //     return PokemonChiName[this.poke_id-1];
    // }
    // getName():string{
    //     return PokemonData[this.poke_id-1].name;
    // }
}

export const EMPTY_POKEMON = new InventoryPokemon();