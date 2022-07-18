import { Injectable } from '@angular/core';
import { Link } from 'src/app/model/link/link';
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
export class LinkService {

  private linkUrl = `${environment.apiURL}/api/links`

  public getAll(): Link[] {
    let links: Array<Link> = [];

    try {
      fetch(`${this.linkUrl}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          for(let item of val.data){
            let itemTemp = new Link;
            itemTemp.ref = item['id'];
            itemTemp.title = item['attributes']['title'];
            itemTemp.text = item['attributes']['text'];
            itemTemp.url = item['attributes']['url'];
            if(item['attributes']['img']['data']['attributes']['formats']['small'] != undefined){
              itemTemp.img = environment.apiURL + item['attributes']['img']['data']['attributes']['formats']['small']['url'];
            }else{
              itemTemp.img = environment.apiURL + item['attributes']['img']['data']['attributes']['formats']['thumbnail']['url'];
            }
            links.push(itemTemp);
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
