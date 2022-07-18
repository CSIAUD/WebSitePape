import { Injectable } from '@angular/core';
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
export class ConditionService {

  private conditionUrl = `${environment.apiURL}/api/cgv`

  public getAll(): String[] {
    let links: Array<String> = [];

    try {
      fetch(`${this.conditionUrl}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          let items = val.data.attributes.texts
          console.log(items)
          for(let item of items){
            links.push(item['order'] + ". " + item['text']);
          }
          return links;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return links;
  }
}
