export interface IAbility {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface IPokemon {
    id: number;
    name: string;
    abilities: IAbility[];
  }