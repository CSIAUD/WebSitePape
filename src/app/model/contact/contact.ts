
import { SujetService } from "src/app/services/sujetService/sujet.service";
import { Sujet } from "../sujet/sujet";

export class Contact {

    constructor(private sujetService: SujetService) {}

    public id = 0;
    public email = '';
    public firstName = '';
    public lastName = '';
    public phone = '';
    public subject = new Sujet;
    public text = '';
    public date = '';

    public set(param: string, val:string){
        switch (param) {
            case "firstName":
                this.firstName = val;                
                break;
            case "lastName":
                this.lastName = val;                
                break;
            case "email":
                this.email = val;                
                break;
            case "tel":
                this.phone = val;                
                break;
            case "subject":
                this.subject = this.sujetService.get(val);             
                break;
            case "text":
                this.text = val;                
                break;
        
            default:
                break;
        }
    }
}
