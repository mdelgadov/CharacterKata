export class Character{

    constructor(public name?:string, public short?:string, public titles: Array<string> = [], public salutation?: string) {}

    iAm():string {
        return 'I am ' + this.name;
    }

    myNameIs():string {
        return 'My name is ' + this.name;
    }

    prefix():string{
        return this.short.substr(0,1).toUpperCase() + this.short.substr(1).toLowerCase() + ': ';
    }

    listTitles():string{
        return this.titles.toString();
    }
}