export class Series{
    constructor(public title :  string, public episode : number, public director : string){
        if (title.trim() == '') {
            throw new Error("Nem lehes üres a cím")
        }
        else if(episode < 1 || isNaN(episode)){
            throw new Error("Rossz adatot adtál meg a epizódhoz")
        }
        else if(director.trim() == ''){
            throw new Error("Nem lehet üres a Rendező")
        }
    }
}