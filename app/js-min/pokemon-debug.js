/**
 * Created by ronald8192 on 8/1/16.
 */
"use strict";
var Pokemon = (function () {
    function Pokemon() {
        this.pokemons = [
            {
                "number": "001",
                "name": "Bulbasaur",
                "classification": "Seed Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Tackle",
                    "Vine Whip"
                ],
                "weight": "6.9 kg",
                "height": "0.7 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Bulbasaur candies"
                },
                "nextEvolution": [
                    {
                        "number": "002",
                        "name": "Ivysaur"
                    },
                    {
                        "number": "003",
                        "name": "Venusaur"
                    }
                ]
            },
            {
                "number": "002",
                "name": "Ivysaur",
                "classification": "Seed Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Razor Leaf",
                    "Vine Whip"
                ],
                "weight": "13.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "001",
                        "name": "Bulbasaur"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Bulbasaur candies"
                },
                "nextEvolution": [
                    {
                        "number": "003",
                        "name": "Venusaur"
                    }
                ]
            },
            {
                "number": "003",
                "name": "Venusaur",
                "classification": "Seed Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Razor Leaf",
                    "Vine Whip"
                ],
                "weight": "100.0 kg",
                "height": "2.0 m",
                "previousEvolution": [
                    {
                        "number": "001",
                        "name": "Bulbasaur"
                    },
                    {
                        "number": "002",
                        "name": "Ivysaur"
                    }
                ]
            },
            {
                "number": "004",
                "name": "Charmander",
                "classification": "Lizard Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Scratch"
                ],
                "weight": "8.5 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Charmander candies"
                },
                "nextEvolution": [
                    {
                        "number": "005",
                        "name": "Charmeleon"
                    },
                    {
                        "number": "006",
                        "name": "Charizard"
                    }
                ]
            },
            {
                "number": "005",
                "name": "Charmeleon",
                "classification": "Flame Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    ""
                ],
                "weight": "19.0 kg",
                "height": "1.1 m",
                "previousEvolution": [
                    {
                        "number": "004",
                        "name": "Charmander"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Charmander candies"
                },
                "nextEvolution": [
                    {
                        "number": "006",
                        "name": "Charizard"
                    }
                ]
            },
            {
                "number": "006",
                "name": "Charizard",
                "classification": "Flame Pokèmon",
                "type1": [
                    "Fire"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Water",
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Wing Attack"
                ],
                "weight": "90.5 kg",
                "height": "1.7 m",
                "previousEvolution": [
                    {
                        "number": "004",
                        "name": "Charmander"
                    },
                    {
                        "number": "005",
                        "name": "Charmeleon"
                    }
                ]
            },
            {
                "number": "007",
                "name": "Squirtle",
                "classification": "Tiny Turtle Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Tackle",
                    "Bubble"
                ],
                "weight": "9.0 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Squirtle candies"
                },
                "nextEvolution": [
                    {
                        "number": "008",
                        "name": "Wartortle"
                    },
                    {
                        "number": "009",
                        "name": "Blastoise"
                    }
                ]
            },
            {
                "number": "008",
                "name": "Wartortle",
                "classification": "Turtle Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bite",
                    "Water Gun"
                ],
                "weight": "22.5 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "007",
                        "name": "Squirtle"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Squirtle candies"
                },
                "nextEvolution": [
                    {
                        "number": "009",
                        "name": "Blastoise"
                    }
                ]
            },
            {
                "number": "009",
                "name": "Blastoise",
                "classification": "Shellfish Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bite",
                    "Water Gun"
                ],
                "weight": "85.5 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "007",
                        "name": "Squirtle"
                    },
                    {
                        "number": "008",
                        "name": "Wartortle"
                    }
                ]
            },
            {
                "number": "010",
                "name": "Caterpie",
                "classification": "Worm Pokèmon",
                "type1": [
                    "Bug"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Tackle"
                ],
                "weight": "2.9 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 12,
                    "name": "Caterpie candies"
                },
                "nextEvolution": [
                    {
                        "number": "011",
                        "name": "Metapod"
                    },
                    {
                        "number": "012",
                        "name": "Butterfree"
                    }
                ]
            },
            {
                "number": "011",
                "name": "Metapod",
                "classification": "Cocoon Pokèmon",
                "type1": [
                    "Bug"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Tackle"
                ],
                "weight": "9.9 kg",
                "height": "0.7 m",
                "previousEvolution": [
                    {
                        "number": "010",
                        "name": "Caterpie"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Caterpie candies"
                },
                "nextEvolution": [
                    {
                        "number": "012",
                        "name": "Butterfree"
                    }
                ]
            },
            {
                "number": "012",
                "name": "Butterfree",
                "classification": "Butterfly Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Fire",
                    "Electric",
                    "Ice",
                    "Flying",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Confusion"
                ],
                "weight": "32.0 kg",
                "height": "1.1 m",
                "previousEvolution": [
                    {
                        "number": "010",
                        "name": "Caterpie"
                    },
                    {
                        "number": "011",
                        "name": "Metapod"
                    }
                ]
            },
            {
                "number": "013",
                "name": "Weedle",
                "classification": "Hairy Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Poison Sting"
                ],
                "weight": "3.2 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 12,
                    "name": "Weedle candies"
                },
                "nextEvolution": [
                    {
                        "number": "014",
                        "name": "Kakuna"
                    },
                    {
                        "number": "015",
                        "name": "Beedrill"
                    }
                ]
            },
            {
                "number": "014",
                "name": "Kakuna",
                "classification": "Cocoon Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Posion Sting"
                ],
                "weight": "10.0 kg",
                "height": "0.6 m",
                "previousEvolution": [
                    {
                        "number": "013",
                        "name": "Weedle"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Weedle candies"
                },
                "nextEvolution": [
                    {
                        "number": "015",
                        "name": "Beedrill"
                    }
                ]
            },
            {
                "number": "015",
                "name": "Beedrill",
                "classification": "Poison Bee Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Poison Jab"
                ],
                "weight": "29.5 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "013",
                        "name": "Weedle"
                    },
                    {
                        "number": "014",
                        "name": "Kakuna"
                    }
                ]
            },
            {
                "number": "016",
                "name": "Pidgey",
                "classification": "Tiny Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Tackle"
                ],
                "specialAttack": [
                    "Aerial Ace",
                    "Air Cutter",
                    "Twister"
                ],
                "weight": "1.8 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 12,
                    "name": "Pidgey candies"
                },
                "nextEvolution": [
                    {
                        "number": "017",
                        "name": "Pidgeotto"
                    },
                    {
                        "number": "018",
                        "name": "Pidgeot"
                    }
                ]
            },
            {
                "number": "017",
                "name": "Pidgeotto",
                "classification": "Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Steel Wing",
                    "Wing Attack"
                ],
                "specialAttack": [
                    "Aerial Ace",
                    "Air Cutter",
                    "Twister"
                ],
                "weight": "30.0 kg",
                "height": "1.1 m",
                "previousEvolution": [
                    {
                        "number": "016",
                        "name": "Pidgey"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Pidgey candies"
                },
                "nextEvolution": [
                    {
                        "number": "018",
                        "name": "Pidgeot"
                    }
                ]
            },
            {
                "number": "018",
                "name": "Pidgeot",
                "classification": "Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Steel Wing",
                    "Wing Attack"
                ],
                "specialAttack": [
                    "Hurricane"
                ],
                "weight": "39.5 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "016",
                        "name": "Pidgey"
                    },
                    {
                        "number": "017",
                        "name": "Pidgeotto"
                    }
                ]
            },
            {
                "number": "019",
                "name": "Rattata",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Tackle"
                ],
                "specialAttack": [
                    "Body Slam",
                    "Dig",
                    "Hyper Fang"
                ],
                "weight": "3.5 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Rattata candies"
                },
                "nextEvolution": [
                    {
                        "number": "020",
                        "name": "Raticate"
                    }
                ]
            },
            {
                "number": "020",
                "name": "Raticate",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Bite",
                    "Quick Attack"
                ],
                "specialAttack": [
                    "Dig",
                    "Hyper Beam",
                    "Hyper Fang"
                ],
                "weight": "18.5 kg",
                "height": "0.7 m",
                "previousEvolution": [
                    {
                        "number": "019",
                        "name": "Rattata"
                    }
                ]
            },
            {
                "number": "021",
                "name": "Spearow",
                "classification": "Tiny Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Peck",
                    "Quick Attack"
                ],
                "weight": "2.0 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Spearow candies"
                },
                "nextEvolution": [
                    {
                        "number": "022",
                        "name": "Fearow"
                    }
                ]
            },
            {
                "number": "022",
                "name": "Fearow",
                "classification": "Beak Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Peck",
                    "Steel Wing"
                ],
                "weight": "38.0 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "021",
                        "name": "Spearow"
                    }
                ]
            },
            {
                "number": "023",
                "name": "Ekans",
                "classification": "Snake Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Poison Sting"
                ],
                "weight": "6.9 kg",
                "height": "2.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Ekans candies"
                },
                "nextEvolution": [
                    {
                        "number": "024",
                        "name": "Arbok"
                    }
                ]
            },
            {
                "number": "024",
                "name": "Arbok",
                "classification": "Cobra Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Bite"
                ],
                "weight": "65.0 kg",
                "height": "3.5 m",
                "previousEvolution": [
                    {
                        "number": "023",
                        "name": "Ekans"
                    }
                ]
            },
            {
                "number": "025",
                "name": "Pikachu",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Thunder Shock"
                ],
                "weight": "6.0 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Pikachu candies"
                },
                "nextEvolution": [
                    {
                        "number": "026",
                        "name": "Raichu"
                    }
                ]
            },
            {
                "number": "026",
                "name": "Raichu",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Thunder Shock",
                    "Spark"
                ],
                "weight": "30.0 kg",
                "height": "0.8 m",
                "previousEvolution": [
                    {
                        "number": "025",
                        "name": "Pikachu"
                    }
                ]
            },
            {
                "number": "027",
                "name": "Sandshrew",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Scratch"
                ],
                "weight": "12.0 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Sandshrew candies"
                },
                "nextEvolution": [
                    {
                        "number": "028",
                        "name": "Sandslash"
                    }
                ]
            },
            {
                "number": "028",
                "name": "Sandslash",
                "classification": "Mouse Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Metal Claw",
                    "Mud Shot"
                ],
                "weight": "29.5 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "027",
                        "name": "Sandshrew"
                    }
                ]
            },
            {
                "number": "029",
                "name": "Nidoran(Female)",
                "classification": "Poison Pin Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Bite",
                    "Poison Sting"
                ],
                "weight": "7.0 kg",
                "height": "0.4 m",
                "nextEvolution": [
                    {
                        "number": "030",
                        "name": "Nidorina"
                    },
                    {
                        "number": "031",
                        "name": "Nidoqueen"
                    }
                ]
            },
            {
                "number": "030",
                "name": "Nidorina",
                "classification": "Poison Pin Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Bite",
                    "Poison Sting"
                ],
                "weight": "20.0 kg",
                "height": "0.8 m",
                "previousEvolution": [
                    {
                        "number": "029",
                        "name": "Nidoran(Female)"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Nidoran♀ candies"
                },
                "nextEvolution": [
                    {
                        "number": "031",
                        "name": "Nidoqueen"
                    }
                ]
            },
            {
                "number": "031",
                "name": "Nidoqueen",
                "classification": "Drill Pokèmon",
                "type1": [
                    "Poison"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Ice",
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Bite",
                    "Poison Jab"
                ],
                "weight": "60.0 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "029",
                        "name": "Nidoran(Female)"
                    },
                    {
                        "number": "030",
                        "name": "Nidorina"
                    }
                ]
            },
            {
                "number": "032",
                "name": "Nidoran(Male)",
                "classification": "Poison Pin Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Peck",
                    "Poison Sting"
                ],
                "weight": "9.0 kg",
                "height": "0.5 m",
                "nextEvolution": [
                    {
                        "number": "033",
                        "name": "Nidorino"
                    },
                    {
                        "number": "034",
                        "name": "Nidoking"
                    }
                ]
            },
            {
                "number": "033",
                "name": "Nidorino",
                "classification": "Poison Pin Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Bite",
                    "Poison Jab"
                ],
                "weight": "19.5 kg",
                "height": "0.9 m",
                "previousEvolution": [
                    {
                        "number": "032",
                        "name": "Nidoran(Male)"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Nidoran♂ candies"
                },
                "nextEvolution": [
                    {
                        "number": "034",
                        "name": "Nidoking"
                    }
                ]
            },
            {
                "number": "034",
                "name": "Nidoking",
                "classification": "Drill Pokèmon",
                "type1": [
                    "Poison"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Ice",
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Fury Cutter",
                    "Poison Jab"
                ],
                "weight": "62.0 kg",
                "height": "1.4 m",
                "previousEvolution": [
                    {
                        "number": "032",
                        "name": "Nidoran(Male)"
                    },
                    {
                        "number": "033",
                        "name": "Nidorino"
                    }
                ]
            },
            {
                "number": "035",
                "name": "Clefairy",
                "classification": "Fairy Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Pound",
                    "Zen Headbutt"
                ],
                "weight": "7.5 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Clefairy candies"
                },
                "nextEvolution": [
                    {
                        "number": "036",
                        "name": "Clefable"
                    }
                ]
            },
            {
                "number": "036",
                "name": "Clefable",
                "classification": "Fairy Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Pound",
                    "Zen Headbutt"
                ],
                "weight": "40.0 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "035",
                        "name": "Clefairy"
                    }
                ]
            },
            {
                "number": "037",
                "name": "Vulpix",
                "classification": "Fox Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Quick Attack"
                ],
                "weight": "9.9 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Vulpi"
                },
                "nextEvolution": [
                    {
                        "number": "038",
                        "name": "Ninetales"
                    }
                ]
            },
            {
                "number": "038",
                "name": "Ninetales",
                "classification": "Fox Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Quick Attack"
                ],
                "weight": "19.9 kg",
                "height": "1.1 m",
                "previousEvolution": [
                    {
                        "number": "037",
                        "name": "Vulpix"
                    }
                ]
            },
            {
                "number": "039",
                "name": "Jigglypuff",
                "classification": "Balloon Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Feint Attack",
                    "Pound"
                ],
                "weight": "5.5 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Jigglypuff candies"
                },
                "nextEvolution": [
                    {
                        "number": "040",
                        "name": "Wigglytuff"
                    }
                ]
            },
            {
                "number": "040",
                "name": "Wigglytuff",
                "classification": "Balloon Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Feint Attack",
                    "Pound"
                ],
                "weight": "12.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "040",
                        "name": "Wigglytuff"
                    }
                ]
            },
            {
                "number": "041",
                "name": "Zubat",
                "classification": "Bat Pokèmon",
                "type1": [
                    "Poison"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Ice",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bite",
                    "Quick Attack"
                ],
                "weight": "7.5 kg",
                "height": "0.8 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Zubat candies"
                },
                "nextEvolution": [
                    {
                        "number": "042",
                        "name": "Golbat"
                    }
                ]
            },
            {
                "number": "042",
                "name": "Golbat",
                "classification": "Bat Pokèmon",
                "type1": [
                    "Poison"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Ice",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bite",
                    "Wing Attack"
                ],
                "weight": "55.0 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "041",
                        "name": "Zubat"
                    }
                ]
            },
            {
                "number": "043",
                "name": "Oddish",
                "classification": "Weed Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Razor Leaf"
                ],
                "weight": "5.4 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Oddish candies"
                },
                "nextEvolution": [
                    {
                        "number": "044",
                        "name": "Gloom"
                    },
                    {
                        "number": "045",
                        "name": "Vileplume"
                    }
                ]
            },
            {
                "number": "044",
                "name": "Gloom",
                "classification": "Weed Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Razor Leaf"
                ],
                "weight": "8.6 kg",
                "height": "0.8 m",
                "previousEvolution": [
                    {
                        "number": "043",
                        "name": "Oddish"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Oddish candies"
                },
                "nextEvolution": [
                    {
                        "number": "045",
                        "name": "Vileplume"
                    }
                ]
            },
            {
                "number": "045",
                "name": "Vileplume",
                "classification": "Flower Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    ""
                ],
                "weight": "18.6 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "043",
                        "name": "Oddish"
                    },
                    {
                        "number": "044",
                        "name": "Gloom"
                    }
                ]
            },
            {
                "number": "046",
                "name": "Paras",
                "classification": "Mushroom Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Grass"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Poison",
                    "Flying",
                    "Bug",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Scratch"
                ],
                "weight": "5.4 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Paras candies"
                },
                "nextEvolution": [
                    {
                        "number": "047",
                        "name": "Parasect"
                    }
                ]
            },
            {
                "number": "047",
                "name": "Parasect",
                "classification": "Mushroom Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Grass"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Poison",
                    "Flying",
                    "Bug",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Fury Cutter"
                ],
                "weight": "29.5 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "046",
                        "name": "Paras"
                    }
                ]
            },
            {
                "number": "048",
                "name": "Venonat",
                "classification": "Insect Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Confusion"
                ],
                "weight": "30.0 kg",
                "height": "1.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Venonat candies"
                },
                "nextEvolution": [
                    {
                        "number": "049",
                        "name": "Venomoth"
                    }
                ]
            },
            {
                "number": "049",
                "name": "Venomoth",
                "classification": "Poison Moth Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Psychic",
                    "Rock"
                ],
                "fastAttack": [
                    "Bug Bite",
                    "Confusion"
                ],
                "weight": "12.5 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "048",
                        "name": "Venonat"
                    }
                ]
            },
            {
                "number": "050",
                "name": "Diglett",
                "classification": "Mole Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Scratch"
                ],
                "weight": "0.8 kg",
                "height": "0.2 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Diglett candies"
                },
                "nextEvolution": [
                    {
                        "number": "051",
                        "name": "Dugtrio"
                    }
                ]
            },
            {
                "number": "051",
                "name": "Dugtrio",
                "classification": "Mole Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Sucker Punch"
                ],
                "weight": "33.3 kg",
                "height": "0.7 m",
                "previousEvolution": [
                    {
                        "number": "050",
                        "name": "Diglett"
                    }
                ]
            },
            {
                "number": "052",
                "name": "Meowth",
                "classification": "Scratch Cat Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Bite",
                    "Scratch"
                ],
                "weight": "4.2 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Meowth candies"
                },
                "nextEvolution": [
                    {
                        "number": "053",
                        "name": "Persian"
                    }
                ]
            },
            {
                "number": "053",
                "name": "Persian",
                "classification": "Classy Cat Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Feint Attack",
                    "Scratch"
                ],
                "weight": "32.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "052",
                        "name": "Meowth"
                    }
                ]
            },
            {
                "number": "054",
                "name": "Psyduck",
                "classification": "Duck Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Water Gun",
                    "Zen Headbutt"
                ],
                "weight": "19.6 kg",
                "height": "0.8 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Psyduck candies"
                },
                "nextEvolution": [
                    {
                        "number": "055",
                        "name": "Golduck"
                    }
                ]
            },
            {
                "number": "055",
                "name": "Golduck",
                "classification": "Duck Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Confusion",
                    "Zen Headbutt"
                ],
                "weight": "76.6 kg",
                "height": "1.7 m",
                "previousEvolution": [
                    {
                        "number": "054",
                        "name": "Psyduck"
                    }
                ]
            },
            {
                "number": "056",
                "name": "Mankey",
                "classification": "Pig Monkey Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Karate Chop",
                    "Scratch"
                ],
                "weight": "28.0 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Mankey candies"
                },
                "nextEvolution": [
                    {
                        "number": "057",
                        "name": "Primeape"
                    }
                ]
            },
            {
                "number": "057",
                "name": "Primeape",
                "classification": "Pig Monkey Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Karate Chop",
                    "Low Kick"
                ],
                "weight": "32.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "056",
                        "name": "Mankey"
                    }
                ]
            },
            {
                "number": "058",
                "name": "Growlithe",
                "classification": "Puppy Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Bite",
                    "Ember"
                ],
                "weight": "19.0 kg",
                "height": "0.7 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Growlithe candies"
                },
                "nextEvolution": [
                    {
                        "number": "059",
                        "name": "Arcanine"
                    }
                ]
            },
            {
                "number": "059",
                "name": "Arcanine",
                "classification": "Legendary Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Bite",
                    "Fire Fang"
                ],
                "weight": "155.0 kg",
                "height": "1.9 m",
                "previousEvolution": [
                    {
                        "number": "058",
                        "name": "Growlithe"
                    }
                ]
            },
            {
                "number": "060",
                "name": "Poliwag",
                "classification": "Tadpole Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bubble",
                    "Mud Shot"
                ],
                "weight": "12.4 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Poliwag candies"
                },
                "nextEvolution": [
                    {
                        "number": "061",
                        "name": "Poliwhirl"
                    },
                    {
                        "number": "062",
                        "name": "Poliwrath"
                    }
                ]
            },
            {
                "number": "061",
                "name": "Poliwhirl",
                "classification": "Tadpole Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bubble",
                    "Mud Shot"
                ],
                "weight": "20.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "060",
                        "name": "Poliwag"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Poliwag candies"
                },
                "nextEvolution": [
                    {
                        "number": "062",
                        "name": "Poliwrath"
                    }
                ]
            },
            {
                "number": "062",
                "name": "Poliwrath",
                "classification": "Tadpole Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Bubble",
                    "Mud Shot"
                ],
                "weight": "54.0 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "060",
                        "name": "Poliwag"
                    },
                    {
                        "number": "061",
                        "name": "Poliwhirl"
                    }
                ]
            },
            {
                "number": "063",
                "name": "Abra",
                "classification": "Psi Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Zen Headbutt",
                    ""
                ],
                "weight": "19.5 kg",
                "height": "0.9 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Abra candies"
                },
                "nextEvolution": [
                    {
                        "number": "064",
                        "name": "Kadabra"
                    },
                    {
                        "number": "065",
                        "name": "Alakazam"
                    }
                ]
            },
            {
                "number": "064",
                "name": "Kadabra",
                "classification": "Psi Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Psycho Cut"
                ],
                "weight": "56.5 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "063",
                        "name": "Abra"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Abra candies"
                },
                "nextEvolution": [
                    {
                        "number": "065",
                        "name": "Alakazam"
                    }
                ]
            },
            {
                "number": "065",
                "name": "Alakazam",
                "classification": "Psi Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Psycho Cut"
                ],
                "weight": "48.0 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "063",
                        "name": "Abra"
                    },
                    {
                        "number": "064",
                        "name": "Kadabra"
                    }
                ]
            },
            {
                "number": "066",
                "name": "Machop",
                "classification": "Superpower Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Karate Chop",
                    "Low Kick"
                ],
                "weight": "19.5 kg",
                "height": "0.8 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Machop candies"
                },
                "nextEvolution": [
                    {
                        "number": "067",
                        "name": "Machoke"
                    },
                    {
                        "number": "068",
                        "name": "Machamp"
                    }
                ]
            },
            {
                "number": "067",
                "name": "Machoke",
                "classification": "Superpower Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Karate Chop",
                    "Low Kick"
                ],
                "weight": "70.5 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "066",
                        "name": "Machop"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Machop candies"
                },
                "nextEvolution": [
                    {
                        "number": "068",
                        "name": "Machamp"
                    }
                ]
            },
            {
                "number": "068",
                "name": "Machamp",
                "classification": "Superpower Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Bullet Punch",
                    "Karate Chop"
                ],
                "weight": "130.0 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "066",
                        "name": "Machop"
                    },
                    {
                        "number": "067",
                        "name": "Machoke"
                    }
                ]
            },
            {
                "number": "069",
                "name": "Bellsprout",
                "classification": "Flower Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Vine Whip"
                ],
                "weight": "4.0 kg",
                "height": "0.7 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Bellsprout candies"
                },
                "nextEvolution": [
                    {
                        "number": "070",
                        "name": "Weepinbell"
                    },
                    {
                        "number": "071",
                        "name": "Victreebel"
                    }
                ]
            },
            {
                "number": "070",
                "name": "Weepinbell",
                "classification": "Flycatcher Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Razor Leaf"
                ],
                "weight": "6.4 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "069",
                        "name": "Bellsprout"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Bellsprout candies"
                },
                "nextEvolution": [
                    {
                        "number": "071",
                        "name": "Victreebel"
                    }
                ]
            },
            {
                "number": "071",
                "name": "Victreebel",
                "classification": "Flycatcher Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Flying",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Razor Leaf"
                ],
                "weight": "15.5 kg",
                "height": "1.7 m",
                "previousEvolution": [
                    {
                        "number": "069",
                        "name": "Bellsprout"
                    },
                    {
                        "number": "070",
                        "name": "Weepinbell"
                    }
                ]
            },
            {
                "number": "072",
                "name": "Tentacool",
                "classification": "Jellyfish Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Electric",
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Bubble",
                    "Poison Sting"
                ],
                "weight": "45.5 kg",
                "height": "0.9 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Tentacool candies"
                },
                "nextEvolution": [
                    {
                        "number": "073",
                        "name": "Tentacruel"
                    }
                ]
            },
            {
                "number": "073",
                "name": "Tentacruel",
                "classification": "Jellyfish Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Electric",
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Poison Jab"
                ],
                "weight": "55.0 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "072",
                        "name": "Tentacool"
                    }
                ]
            },
            {
                "number": "074",
                "name": "Geodude",
                "classification": "Rock Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Rock Throw",
                    "Tackle"
                ],
                "weight": "20.0 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Geodude candies"
                },
                "nextEvolution": [
                    {
                        "number": "075",
                        "name": "Graveler"
                    },
                    {
                        "number": "076",
                        "name": "Golem"
                    }
                ]
            },
            {
                "number": "075",
                "name": "Graveler",
                "classification": "Rock Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Rock Throw"
                ],
                "weight": "105.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "074",
                        "name": "Geodude"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Geodude candies"
                },
                "nextEvolution": [
                    {
                        "number": "076",
                        "name": "Golem"
                    }
                ]
            },
            {
                "number": "076",
                "name": "Golem",
                "classification": "Megaton Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Rock Throw"
                ],
                "weight": "300.0 kg",
                "height": "1.4 m",
                "previousEvolution": [
                    {
                        "number": "074",
                        "name": "Geodude"
                    },
                    {
                        "number": "075",
                        "name": "Graveler"
                    }
                ]
            },
            {
                "number": "077",
                "name": "Ponyta",
                "classification": "Fire Horse Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Tackle"
                ],
                "weight": "30.0 kg",
                "height": "1.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Ponyta candies"
                },
                "nextEvolution": [
                    {
                        "number": "078",
                        "name": "Rapidash"
                    }
                ]
            },
            {
                "number": "078",
                "name": "Rapidash",
                "classification": "Fire Horse Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Low Kick"
                ],
                "weight": "95.0 kg",
                "height": "1.7 m",
                "previousEvolution": [
                    {
                        "number": "077",
                        "name": "Ponyta"
                    }
                ]
            },
            {
                "number": "079",
                "name": "Slowpoke",
                "classification": "Dopey Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Water Gun"
                ],
                "weight": "36.0 kg",
                "height": "1.2 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Slowpoke candies"
                },
                "nextEvolution": [
                    {
                        "number": "080",
                        "name": "Slowbro"
                    }
                ]
            },
            {
                "number": "080",
                "name": "Slowbro",
                "classification": "Hermit Crab Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Water Gun"
                ],
                "weight": "78.5 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "079",
                        "name": "Slowpoke"
                    }
                ]
            },
            {
                "number": "081",
                "name": "Magnemite",
                "classification": "Magnet Pokèmon",
                "type1": [
                    "Electric"
                ],
                "type2": [
                    "Steel"
                ],
                "weaknesses": [
                    "Fire",
                    "Water",
                    "Ground"
                ],
                "fastAttack": [
                    "Spark",
                    "Thunder Shock"
                ],
                "weight": "6.0 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Magnemite candies"
                },
                "nextEvolution": [
                    {
                        "number": "082",
                        "name": "Magneton"
                    }
                ]
            },
            {
                "number": "082",
                "name": "Magneton",
                "classification": "Magnet Pokèmon",
                "type1": [
                    "Electric"
                ],
                "type2": [
                    "Steel"
                ],
                "weaknesses": [
                    "Fire",
                    "Water",
                    "Ground"
                ],
                "fastAttack": [
                    "Spark",
                    "Thunder Shock"
                ],
                "weight": "60.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "081",
                        "name": "Magnemite"
                    }
                ]
            },
            {
                "number": "083",
                "name": "Farfetch'd",
                "classification": "Wild Duck Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "15.0 kg",
                "height": "0.8 m"
            },
            {
                "number": "084",
                "name": "Doduo",
                "classification": "Twin Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Peck",
                    "Quick Attack"
                ],
                "weight": "39.2 kg",
                "height": "1.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Doduo candies"
                },
                "nextEvolution": [
                    {
                        "number": "085",
                        "name": "Dodrio"
                    }
                ]
            },
            {
                "number": "085",
                "name": "Dodrio",
                "classification": "Triple Bird Pokèmon",
                "type1": [
                    "Normal"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Feint Attack",
                    "Steel Wing"
                ],
                "weight": "85.2 kg",
                "height": "1.8 m",
                "previousEvolution": [
                    {
                        "number": "084",
                        "name": "Doduo"
                    }
                ]
            },
            {
                "number": "086",
                "name": "Seel",
                "classification": "Sea Lion Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Ice Shard",
                    "Water Gun"
                ],
                "weight": "90.0 kg",
                "height": "1.1 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Seel candies"
                },
                "nextEvolution": [
                    {
                        "number": "087",
                        "name": "Dewgong"
                    }
                ]
            },
            {
                "number": "087",
                "name": "Dewgong",
                "classification": "Sea Lion Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Ice"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Rock"
                ],
                "fastAttack": [
                    "Frost Breath",
                    "Ice Shard"
                ],
                "weight": "120.0 kg",
                "height": "1.7 m",
                "previousEvolution": [
                    {
                        "number": "086",
                        "name": "Seel"
                    }
                ]
            },
            {
                "number": "088",
                "name": "Grimer",
                "classification": "Sludge Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Mud Slap"
                ],
                "weight": "30.0 kg",
                "height": "0.9 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Grimer candies"
                },
                "nextEvolution": [
                    {
                        "number": "089",
                        "name": "Muk"
                    }
                ]
            },
            {
                "number": "089",
                "name": "Muk",
                "classification": "Sludge Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Poison Jab",
                    ""
                ],
                "weight": "30.0 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "088",
                        "name": "Grimer"
                    }
                ]
            },
            {
                "number": "090",
                "name": "Shellder",
                "classification": "Bivalve Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Ice Shard",
                    "Tackle"
                ],
                "weight": "4.0 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Shellder candies"
                },
                "nextEvolution": [
                    {
                        "number": "091",
                        "name": "Cloyster"
                    }
                ]
            },
            {
                "number": "091",
                "name": "Cloyster",
                "classification": "Bivalve Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Ice"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Rock"
                ],
                "fastAttack": [
                    "Frost Breath",
                    "Ice Shard"
                ],
                "weight": "132.5 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "090",
                        "name": "Shellder"
                    }
                ]
            },
            {
                "number": "092",
                "name": "Gastly",
                "classification": "Gas Pokèmon",
                "type1": [
                    "Ghost"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Lick",
                    "Sucker Punch"
                ],
                "weight": "0.1 kg",
                "height": "1.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Gastly candies"
                },
                "nextEvolution": [
                    {
                        "number": "093",
                        "name": "Haunter"
                    },
                    {
                        "number": "094",
                        "name": "Gengar"
                    }
                ]
            },
            {
                "number": "093",
                "name": "Haunter",
                "classification": "Gas Pokèmon",
                "type1": [
                    "Ghost"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Lick",
                    "Shadow Claw"
                ],
                "weight": "0.1 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "092",
                        "name": "Gastly"
                    }
                ],
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Gastly candies"
                },
                "nextEvolution": [
                    {
                        "number": "094",
                        "name": "Gengar"
                    }
                ]
            },
            {
                "number": "094",
                "name": "Gengar",
                "classification": "Shadow Pokèmon",
                "type1": [
                    "Ghost"
                ],
                "type2": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Shadow Claw",
                    "Sucker Punch"
                ],
                "weight": "40.5 kg",
                "height": "1.5 m",
                "previousEvolution": [
                    {
                        "number": "092",
                        "name": "Gastly"
                    },
                    {
                        "number": "093",
                        "name": "Haunter"
                    }
                ]
            },
            {
                "number": "095",
                "name": "Onix",
                "classification": "Rock Snake Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Rock Throw",
                    "Tackle"
                ],
                "weight": "210.0 kg",
                "height": "8.8 m"
            },
            {
                "number": "096",
                "name": "Drowzee",
                "classification": "Hypnosis Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Pound"
                ],
                "weight": "32.4 kg",
                "height": "1.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Drowzee candies"
                },
                "nextEvolution": [
                    {
                        "number": "097",
                        "name": "Hypno"
                    }
                ]
            },
            {
                "number": "097",
                "name": "Hypno",
                "classification": "Hypnosis Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Zen Headbutt"
                ],
                "weight": "75.6 kg",
                "height": "1.6 m",
                "previousEvolution": [
                    {
                        "number": "096",
                        "name": "Drowzee"
                    }
                ]
            },
            {
                "number": "098",
                "name": "Krabby",
                "classification": "River Crab Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bubble",
                    "Mud Shot"
                ],
                "weight": "6.5 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Krabby candies"
                },
                "nextEvolution": [
                    {
                        "number": "099",
                        "name": "Kingler"
                    }
                ]
            },
            {
                "number": "099",
                "name": "Kingler",
                "classification": "Pincer Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Metal Claw",
                    "Mud Shot"
                ],
                "weight": "60.0 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "098",
                        "name": "Krabby"
                    }
                ]
            },
            {
                "number": "100",
                "name": "Voltorb",
                "classification": "Ball Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Spark",
                    "Tackle"
                ],
                "weight": "10.4 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Voltorb candies"
                },
                "nextEvolution": [
                    {
                        "number": "101",
                        "name": "Electrode"
                    }
                ]
            },
            {
                "number": "101",
                "name": "Electrode",
                "classification": "Ball Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Spark",
                    ""
                ],
                "weight": "66.6 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "100",
                        "name": "Voltorb"
                    }
                ]
            },
            {
                "number": "102",
                "name": "Exeggcute",
                "classification": "Egg Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Poison",
                    "Flying",
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    ""
                ],
                "weight": "2.5 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "E"
                },
                "nextEvolution": [
                    {
                        "number": "103",
                        "name": "Exeggutor"
                    }
                ]
            },
            {
                "number": "103",
                "name": "Exeggutor",
                "classification": "Coconut Pokèmon",
                "type1": [
                    "Grass"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Poison",
                    "Flying",
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Zen Headbutt"
                ],
                "weight": "120.0 kg",
                "height": "2.0 m",
                "previousEvolution": [
                    {
                        "number": "102",
                        "name": "Exeggcute"
                    }
                ]
            },
            {
                "number": "104",
                "name": "Cubone",
                "classification": "Lonely Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Mud Slap",
                    "Rock Smash"
                ],
                "weight": "6.5 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Cubone candies"
                },
                "nextEvolution": [
                    {
                        "number": "105",
                        "name": "Marowak"
                    }
                ]
            },
            {
                "number": "105",
                "name": "Marowak",
                "classification": "Bone Keeper Pokèmon",
                "type1": [
                    "Ground"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice"
                ],
                "fastAttack": [
                    "Mud Slap",
                    "Rock Smash"
                ],
                "weight": "45.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "104",
                        "name": "Cubone"
                    }
                ]
            },
            {
                "number": "106",
                "name": "Hitmonlee",
                "classification": "Kicking Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Low Kick",
                    "Rock Smash"
                ],
                "weight": "49.8 kg",
                "height": "1.5 m",
                "nextEvolution": [
                    {
                        "number": "107",
                        "name": "Hitmonchan"
                    }
                ]
            },
            {
                "number": "107",
                "name": "Hitmonchan",
                "classification": "Punching Pokèmon",
                "type1": [
                    "Fighting"
                ],
                "weaknesses": [
                    "Flying",
                    "Psychic",
                    "Fairy"
                ],
                "fastAttack": [
                    "Bullet Punch",
                    "Rock Smash"
                ],
                "weight": "50.2 kg",
                "height": "1.4 m",
                "previousEvolution": [
                    {
                        "number": "106",
                        "name": "Hitmonlee"
                    }
                ]
            },
            {
                "number": "108",
                "name": "Lickitung",
                "classification": "Licking Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Lick",
                    "Zen Headbutt"
                ],
                "weight": "65.5 kg",
                "height": "1.2 m"
            },
            {
                "number": "109",
                "name": "Koffing",
                "classification": "Poison Gas Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Tackle"
                ],
                "weight": "1.0 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Koffing candies"
                },
                "nextEvolution": [
                    {
                        "number": "110",
                        "name": "Weezing"
                    }
                ]
            },
            {
                "number": "110",
                "name": "Weezing",
                "classification": "Poison Gas Pokèmon",
                "type1": [
                    "Poison"
                ],
                "weaknesses": [
                    "Ground",
                    "Psychic"
                ],
                "fastAttack": [
                    "Acid",
                    "Tackle"
                ],
                "weight": "9.5 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "109",
                        "name": "Koffing"
                    }
                ]
            },
            {
                "number": "111",
                "name": "Rhyhorn",
                "classification": "Spikes Pokèmon",
                "type1": [
                    "Ground"
                ],
                "type2": [
                    "Rock"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Mud Slap",
                    "Rock Smash"
                ],
                "weight": "115.0 kg",
                "height": "1.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Rhyhorn candies"
                },
                "nextEvolution": [
                    {
                        "number": "112",
                        "name": "Rhydon"
                    }
                ]
            },
            {
                "number": "112",
                "name": "Rhydon",
                "classification": "Drill Pokèmon",
                "type1": [
                    "Ground"
                ],
                "type2": [
                    "Rock"
                ],
                "weaknesses": [
                    "Water",
                    "Grass",
                    "Ice",
                    "Fighting",
                    "Ground",
                    "Steel"
                ],
                "fastAttack": [
                    "Mud Slap",
                    "Rock Smash"
                ],
                "weight": "120.0 kg",
                "height": "1.9 m",
                "previousEvolution": [
                    {
                        "number": "111",
                        "name": "Rhyhorn"
                    }
                ]
            },
            {
                "number": "113",
                "name": "Chansey",
                "classification": "Egg Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Pound",
                    "Zen Headbutt"
                ],
                "weight": "34.6 kg",
                "height": "1.1 m"
            },
            {
                "number": "114",
                "name": "Tangela",
                "classification": "Vine Pokèmon",
                "type1": [
                    "Grass"
                ],
                "weaknesses": [
                    "Fire",
                    "Ice",
                    "Poison",
                    "Flying",
                    "Bug"
                ],
                "fastAttack": [
                    "Vine Whip",
                    ""
                ],
                "weight": "35.0 kg",
                "height": "1.0 m"
            },
            {
                "number": "115",
                "name": "Kangaskhan",
                "classification": "Parent Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Low Kick",
                    ""
                ],
                "weight": "80.0 kg",
                "height": "2.2 m"
            },
            {
                "number": "116",
                "name": "Horsea",
                "classification": "Dragon Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Bubble",
                    "Water Gun"
                ],
                "weight": "8.0 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Horsea candies"
                },
                "nextEvolution": [
                    {
                        "number": "117",
                        "name": "Seadra"
                    }
                ]
            },
            {
                "number": "117",
                "name": "Seadra",
                "classification": "Dragon Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Dragon Breath",
                    "Water Gun"
                ],
                "weight": "25.0 kg",
                "height": "1.2 m",
                "previousEvolution": [
                    {
                        "number": "116",
                        "name": "Horsea"
                    }
                ]
            },
            {
                "number": "118",
                "name": "Goldeen",
                "classification": "Goldfish Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Peck",
                    "Mud Shot"
                ],
                "weight": "15.0 kg",
                "height": "0.6 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Goldeen candies"
                },
                "nextEvolution": [
                    {
                        "number": "119",
                        "name": "Seaking"
                    }
                ]
            },
            {
                "number": "119",
                "name": "Seaking",
                "classification": "Goldfish Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Peck",
                    "Poison Jab"
                ],
                "weight": "39.0 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "118",
                        "name": "Goldeen"
                    }
                ]
            },
            {
                "number": "120",
                "name": "Staryu",
                "classification": "Starshape Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Water Gun"
                ],
                "weight": "34.5 kg",
                "height": "0.8 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Staryu candies"
                },
                "nextEvolution": [
                    {
                        "number": "121",
                        "name": "Starmie"
                    }
                ]
            },
            {
                "number": "121",
                "name": "Starmie",
                "classification": "Mysterious Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Water Gun"
                ],
                "weight": "80.0 kg",
                "height": "1.1 m",
                "previousEvolution": [
                    {
                        "number": "121",
                        "name": "Starmie"
                    }
                ]
            },
            {
                "number": "122",
                "name": "Mr. Mime",
                "classification": "Barrier Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Confusion",
                    "Zen Headbutt"
                ],
                "weight": "54.5 kg",
                "height": "1.3 m"
            },
            {
                "number": "123",
                "name": "Scyther",
                "classification": "Mantis Pokèmon",
                "type1": [
                    "Bug"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Fire",
                    "Electric",
                    "Ice",
                    "Flying",
                    "Rock"
                ],
                "fastAttack": [
                    "Fury Cutter",
                    "Steel Wing"
                ],
                "weight": "56.0 kg",
                "height": "1.5 m"
            },
            {
                "number": "124",
                "name": "Jynx",
                "classification": "Humanshape Pokèmon",
                "type1": [
                    "Ice"
                ],
                "type2": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Fire",
                    "Bug",
                    "Rock",
                    "Ghost",
                    "Dark",
                    "Steel"
                ],
                "fastAttack": [
                    "Frost Breath",
                    "Pound"
                ],
                "weight": "40.6 kg",
                "height": "1.4 m"
            },
            {
                "number": "125",
                "name": "Electabuzz",
                "classification": "Electric Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Low Kick",
                    "Thunder Shock"
                ],
                "weight": "30.0 kg",
                "height": "1.1 m"
            },
            {
                "number": "126",
                "name": "Magmar",
                "classification": "Spitfire Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    "Karate Chop"
                ],
                "weight": "44.5 kg",
                "height": "1.3 m"
            },
            {
                "number": "127",
                "name": "Pinsir",
                "classification": "Stagbeetle Pokèmon",
                "type1": [
                    "Bug"
                ],
                "weaknesses": [
                    "Fire",
                    "Flying",
                    "Rock"
                ],
                "fastAttack": [
                    "Fury Cutter",
                    "Rock Smash"
                ],
                "weight": "55.0 kg",
                "height": "1.5 m"
            },
            {
                "number": "128",
                "name": "Tauros",
                "classification": "Wild Bull Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Tackle",
                    "Zen Headbutt"
                ],
                "weight": "88.4 kg",
                "height": "1.4 m"
            },
            {
                "number": "129",
                "name": "Magikarp",
                "classification": "Fish Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Splash",
                    ""
                ],
                "weight": "10.0 kg",
                "height": "0.9 m",
                "nextEvolutionRequirements": {
                    "Amount": 400,
                    "name": "Magikarp candies"
                },
                "nextEvolution": [
                    {
                        "number": "130",
                        "name": "Gyarados"
                    }
                ]
            },
            {
                "number": "130",
                "name": "Gyarados",
                "classification": "Atrocious Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Bite",
                    "Dragon Breath"
                ],
                "weight": "235.0 kg",
                "height": "6.5 m",
                "previousEvolution": [
                    {
                        "number": "129",
                        "name": "Magikarp"
                    }
                ]
            },
            {
                "number": "131",
                "name": "Lapras",
                "classification": "Transport Pokèmon",
                "type1": [
                    "Water"
                ],
                "type2": [
                    "Ice"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Rock"
                ],
                "fastAttack": [
                    "Frost Breath",
                    "Ice Shard"
                ],
                "weight": "220.0 kg",
                "height": "2.5 m"
            },
            {
                "number": "132",
                "name": "Ditto",
                "classification": "Transform Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "4.0 kg",
                "height": "0.3 m"
            },
            {
                "number": "133",
                "name": "Eevee",
                "classification": "Evolution Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Tackle"
                ],
                "weight": "6.5 kg",
                "height": "0.3 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Eevee candies"
                },
                "nextEvolution": [
                    {
                        "number": "134",
                        "name": "Vaporeon"
                    },
                    {
                        "number": "135",
                        "name": "Jolteon"
                    },
                    {
                        "number": "136",
                        "name": "Flareon"
                    }
                ]
            },
            {
                "number": "134",
                "name": "Vaporeon",
                "classification": "Bubble Jet Pokèmon",
                "type1": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass"
                ],
                "fastAttack": [
                    "Water Gun",
                    ""
                ],
                "weight": "29.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "133",
                        "name": "Eevee"
                    }
                ]
            },
            {
                "number": "135",
                "name": "Jolteon",
                "classification": "Lightning Pokèmon",
                "type1": [
                    "Electric"
                ],
                "weaknesses": [
                    "Ground"
                ],
                "fastAttack": [
                    "Thunder Shock",
                    ""
                ],
                "weight": "24.5 kg",
                "height": "0.8 m",
                "previousEvolution": [
                    {
                        "number": "133",
                        "name": "Eevee"
                    }
                ]
            },
            {
                "number": "136",
                "name": "Flareon",
                "classification": "Flame Pokèmon",
                "type1": [
                    "Fire"
                ],
                "weaknesses": [
                    "Water",
                    "Ground",
                    "Rock"
                ],
                "fastAttack": [
                    "Ember",
                    ""
                ],
                "weight": "25.0 kg",
                "height": "0.9 m",
                "previousEvolution": [
                    {
                        "number": "133",
                        "name": "Eevee"
                    }
                ]
            },
            {
                "number": "137",
                "name": "Porygon",
                "classification": "Virtual Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Quick Attack",
                    "Tackle"
                ],
                "weight": "36.5 kg",
                "height": "0.8 m"
            },
            {
                "number": "138",
                "name": "Omanyte",
                "classification": "Spiral Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Ground"
                ],
                "fastAttack": [
                    "Water Gun",
                    ""
                ],
                "weight": "7.5 kg",
                "height": "0.4 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Omanyte candies"
                },
                "nextEvolution": [
                    {
                        "number": "139",
                        "name": "Omastar"
                    }
                ]
            },
            {
                "number": "139",
                "name": "Omastar",
                "classification": "Spiral Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Ground"
                ],
                "fastAttack": [
                    "Rock Throw",
                    "Water Gun"
                ],
                "weight": "35.0 kg",
                "height": "1.0 m",
                "previousEvolution": [
                    {
                        "number": "138",
                        "name": "Omanyte"
                    }
                ]
            },
            {
                "number": "140",
                "name": "Kabuto",
                "classification": "Shellfish Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Ground"
                ],
                "fastAttack": [
                    "Mud Shot",
                    "Scratch"
                ],
                "weight": "11.5 kg",
                "height": "0.5 m",
                "nextEvolutionRequirements": {
                    "Amount": 50,
                    "name": "Kabuto candies"
                },
                "nextEvolution": [
                    {
                        "number": "141",
                        "name": "Kabutops"
                    }
                ]
            },
            {
                "number": "141",
                "name": "Kabutops",
                "classification": "Shellfish Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Water"
                ],
                "weaknesses": [
                    "Electric",
                    "Grass",
                    "Fighting",
                    "Ground"
                ],
                "fastAttack": [
                    "Fury Cutter",
                    "Mud Shot"
                ],
                "weight": "40.5 kg",
                "height": "1.3 m",
                "previousEvolution": [
                    {
                        "number": "140",
                        "name": "Kabuto"
                    }
                ]
            },
            {
                "number": "142",
                "name": "Aerodactyl",
                "classification": "Fossil Pokèmon",
                "type1": [
                    "Rock"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Water",
                    "Electric",
                    "Ice",
                    "Rock",
                    "Steel"
                ],
                "fastAttack": [
                    "Bite",
                    "Steel Wing"
                ],
                "weight": "59.0 kg",
                "height": "1.8 m"
            },
            {
                "number": "143",
                "name": "Snorlax",
                "classification": "Sleeping Pokèmon",
                "type1": [
                    "Normal"
                ],
                "weaknesses": [
                    "Fighting"
                ],
                "fastAttack": [
                    "Lick",
                    "Zen Headbutt"
                ],
                "weight": "460.0 kg",
                "height": "2.1 m"
            },
            {
                "number": "144",
                "name": "Articuno",
                "classification": "Freeze Pokèmon",
                "type1": [
                    "Ice"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Fire",
                    "Electric",
                    "Rock",
                    "Steel"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "55.4 kg",
                "height": "1.7 m"
            },
            {
                "number": "145",
                "name": "Zapdos",
                "classification": "Electric Pokèmon",
                "type1": [
                    "Electric"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Ice",
                    "Rock"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "52.6 kg",
                "height": "1.6 m"
            },
            {
                "number": "146",
                "name": "Moltres",
                "classification": "Flame Pokèmon",
                "type1": [
                    "Fire"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Water",
                    "Electric",
                    "Rock"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "60.0 kg",
                "height": "2.0 m"
            },
            {
                "number": "147",
                "name": "Dratini",
                "classification": "Dragon Pokèmon",
                "type1": [
                    "Dragon"
                ],
                "weaknesses": [
                    "Ice",
                    "Dragon",
                    "Fairy"
                ],
                "fastAttack": [
                    "Dragon Breath",
                    ""
                ],
                "weight": "3.3 kg",
                "height": "1.8 m",
                "nextEvolutionRequirements": {
                    "Amount": 25,
                    "name": "Dratini candies"
                },
                "nextEvolution": [
                    {
                        "number": "148",
                        "name": "Dragonair"
                    },
                    {
                        "number": "149",
                        "name": "Dragonite"
                    }
                ]
            },
            {
                "number": "148",
                "name": "Dragonair",
                "classification": "Dragon Pokèmon",
                "type1": [
                    "Dragon"
                ],
                "weaknesses": [
                    "Ice",
                    "Dragon",
                    "Fairy"
                ],
                "fastAttack": [
                    "Dragon Breath",
                    ""
                ],
                "weight": "16.5 kg",
                "height": "4.0 m",
                "nextEvolutionRequirements": {
                    "Amount": 100,
                    "name": "Dratini candies"
                },
                "nextEvolution": [
                    {
                        "number": "149",
                        "name": "Dragonite"
                    }
                ]
            },
            {
                "number": "149",
                "name": "Dragonite",
                "classification": "Dragon Pokèmon",
                "type1": [
                    "Dragon"
                ],
                "type2": [
                    "Flying"
                ],
                "weaknesses": [
                    "Ice",
                    "Rock",
                    "Dragon",
                    "Fairy"
                ],
                "fastAttack": [
                    "Dragon Breath",
                    "Steel Wing"
                ],
                "weight": "210.0 kg",
                "height": "2.2 m",
                "previousEvolution": [
                    {
                        "number": "148",
                        "name": "Dragonair"
                    }
                ]
            },
            {
                "number": "150",
                "name": "Mewtwo",
                "classification": "Genetic Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "122.0 kg",
                "height": "2.0 m"
            },
            {
                "number": "151",
                "name": "Mew",
                "classification": "New Species Pokèmon",
                "type1": [
                    "Psychic"
                ],
                "weaknesses": [
                    "Bug",
                    "Ghost",
                    "Dark"
                ],
                "fastAttack": [
                    "Unknown"
                ],
                "specialAttack": [
                    "Unknown"
                ],
                "weight": "4.0 kg",
                "height": "0.4 m"
            }
        ];
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map