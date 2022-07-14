import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Sujet } from 'src/app/model/sujet/sujet';
import { ExplanationsService } from 'src/app/services/explanationService/explanation.service';
import { environment } from 'src/environments/environment';

const parseJSON = (resp: any) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp: any) => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id = 0;
  title = 'Papecaster';
  error = null;
  init = true;
  selectedOption: any;
  data;

  public subjects: Sujet [] = [];
  myDestroy: Subject<any> = new Subject<any>();

  constructor(
    private formBuilder: FormBuilder,
    private explanationService:ExplanationsService,
    private route: ActivatedRoute
  ) {
    this.data = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      text: ['', Validators.required],
      phone: ['', Validators.required],
      explanation: ['', Validators.required]
    });
  }
  // constructor(private sujetService:SujetService, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    if(this.init){
      this.init = false;
      if(this.id > 0){
        console.log("ID")
        setTimeout(() => {
          this.selectedOption = this.id;
        }, 500);
      }
    }
  }

  ngOnInit(): void {
    this.subjects = this.explanationService.getSubjects();
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "0");
  }

  public validateForm(ev: Event){
    let form = (ev.target as HTMLInputElement).form
    if(form){
      let nb = Number(form.dataset['valid'])
      let type = (ev.target as HTMLInputElement).type;
      let name = (ev.target as HTMLElement).attributes.getNamedItem("formcontrolname")?.value
      if(type == "text"){
        if(name == "lastName" || name == "firstName"){
          if((ev.target as HTMLInputElement).value.length > 0 
          && nb < 6 
          && (ev.target as HTMLInputElement).dataset['validate'] != "true"){
            form.dataset['valid'] = ++nb + "";
            (ev.target as HTMLElement).dataset['validate'] = "true";
          }else if((ev.target as HTMLInputElement).value.length <= 0 
          && (ev.target as HTMLElement).dataset['validate'] == "true"){
            form.dataset['valid'] = --nb + "";
            (ev.target as HTMLElement).dataset['validate'] = "false"
          }
        }else if(name == "email"){
          let mail = (ev.target as HTMLInputElement).value
          if(isEmail(mail)
          && (ev.target as HTMLInputElement).dataset['validate'] != "true"){
            form.dataset['valid'] = ++nb + "";
            (ev.target as HTMLElement).dataset['validate'] = "true";
          }else if((ev.target as HTMLInputElement).value.length <= 0 
          && (ev.target as HTMLElement).dataset['validate'] == "true"){
            form.dataset['valid'] = --nb + "";
            (ev.target as HTMLElement).dataset['validate'] = "false"
          }
        }
      }else if(type == "select-one"){
        if(nb < 6 
          && (ev.target as HTMLInputElement).dataset['validate'] != "true"){
          form.dataset['valid'] = ++nb + "";
          (ev.target as HTMLElement).dataset['validate'] = "true";
        }else if((ev.target as HTMLElement).dataset['validate'] == "true"){
          form.dataset['valid'] = --nb + "";
          (ev.target as HTMLElement).dataset['validate'] = "false"
        }
      }else if(type == "textarea"
      && nb < 6){
        let length = (ev.target as HTMLInputElement).value.length;
        let display = document.querySelector("#textareaLenght");
        if(display){
          display.textContent = length + "";
        }
        if(length >= 75 
        && nb < 6 
        && (ev.target as HTMLInputElement).dataset['validate'] != "true"){
          form.dataset['valid'] = ++nb + "";
          (ev.target as HTMLElement).dataset['validate'] = "true";
        }else if(length < 75 
        && (ev.target as HTMLElement).dataset['validate'] == "true"){
          form.dataset['valid'] = --nb + "";
          (ev.target as HTMLElement).dataset['validate'] = "false"
        }
      }
      formIsValid(form);
    }
  }

  async onSubmit(data: any) {
    data.phone = ("**********" + data.phone).slice(-10);
    if(data.explanation == ""){
      checkResponse(false);
    }
    let infos = "{\"data\":"+JSON.stringify(data)+"}";
    await fetch(environment.apiURL + '/api/contacts', {
      method: 'POST',
      headers: headers,
      body: infos,
    })
    .then(response => response.json())
    .then(data => checkResponse(data));
  }
}

function isEmail(search:string):boolean{
    var  serchfind:boolean;
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(search);
    return serchfind
}

function formIsValid(form: HTMLFormElement){
  let total = form.elements.length - 1;
  let nbValid = Number(form.dataset['valid']);
  if(nbValid == total || nbValid == total-1){
    (form.lastChild as HTMLElement).removeAttribute('disabled')
  }else{
    // (form.lastChild as HTMLElement).setAttribute("disabled", "")
  }
}

function checkResponse(data: any){
  if(data.error){
    let errors = data.error.details.errors;
    let nbErrors = errors.length;
    let str = "";
    for (let i = 0; i < nbErrors; i++) {
      str += errors[i].path[0];
      if(i == nbErrors - 2){
        str += " et ";
      }else if(i < nbErrors - 1){
        str += ", ";
      }
    }
    alert("Erreur : " + str + " invalide" + (nbErrors>1 ? "s" : "") + ".");
  }else if(!data){
    alert("Erreur : Aucun sujet sélectionné");
  }else{
    resetForm();
    alert("Merci, votre message a bien été enregistré");
  }
}

function resetForm(){
  let elements = document.querySelectorAll("form input, form textarea, form select");
  let form = document.querySelector("form") as HTMLFormElement;
  let display = document.querySelector("#textareaLenght");

  elements.forEach(item => {
    let elem = item as HTMLInputElement
    elem.value = "";
  });

  formIsValid(form);
  
  if(display){
    display.textContent = "0";
  }
}

function initSelect(id: number){
  let options = document.querySelectorAll("select option");
  
  options.forEach(option => {
    let elem = option as HTMLInputElement;
    console.log(elem.value == String(id));
    if(elem.value == String(id)){
      console.log("selected")
      elem.setAttribute("selected", "");
    }else{
      elem.removeAttribute("selected");
    }
  });
}