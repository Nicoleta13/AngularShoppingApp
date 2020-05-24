export class Ingredient{
    // public name : string;
    // public amount: number;

    // seting "public" in front of both arguments
    //this will automaticaly will create the 2 variables like above
    // and will assign the values we receive in the constructor 
    // to this newely created propersties
    constructor(public name : string, public amount: number){
        // this.name = name;
        // this.amount = amount;
    }
}
