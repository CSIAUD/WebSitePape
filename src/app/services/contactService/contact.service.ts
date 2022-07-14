import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/model/contact/contact';
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

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private URL = `${environment.apiURL}/api/contacts`

  public findOne(id: number): Contact {
    let result = new Contact;
    try {
      fetch(`${this.URL}/${id}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          let item = val.data;
          result.id = item['id'];
          item = item['attributes'];
          result.firstName = item['firstName'];
          result.lastName = item['lastName'];
          result.email = item['email'];
          result.phone = item['phone'];
          result.text = item['text'];
          result.subject = item['subject'];

          const date = new Date(item['createdAt'])
          result.date = transformDate(date);
          return result;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return result;
  }

  public findAll(): Contact[] {
    let couteaux: Array<Contact> = [];

    try {
      fetch(`${this.URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          for(let item of val.data){
            let itemTemp = new Contact;
            itemTemp.id = item['id'];
            item = item['attributes'];
            itemTemp.firstName = item['firstName'];
            itemTemp.lastName = item['lastName'];
            itemTemp.email = item['email'];
            itemTemp.phone = item['phone'];
            itemTemp.text = item['text'];
            itemTemp.subject = item['subject'];
            
            const date = new Date(item['createdAt'])
            itemTemp.date = transformDate(date);
          }
          return couteaux;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return couteaux;
  }
}

function transformDate(date: Date): string{
  let result = "";

  result += date.getDate();
  result += "/";
  result += ("0" + date.getMonth()).slice(-2);
  result += "/";
  result += date.getFullYear();
  result += " ";
  result += date.getHours();
  result += ":";
  result += date.getMinutes();

  return result;
}