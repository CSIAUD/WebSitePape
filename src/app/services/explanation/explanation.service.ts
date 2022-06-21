import { Injectable } from '@angular/core';
import { Explanation } from 'src/app/model/explanation/explanation';
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
export class ExplanationsService {

  private explanationUrl = `${environment.apiURL}/api/explanations`

  public findByPage(page: string): Explanation[] {
    let explanations: Array<Explanation> = [];

    try {
      fetch(`${this.explanationUrl}?filters[page][$eq]=${page}&populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          for(let item of val.data){
            let itemTemp = new Explanation;
            itemTemp.id = item['id'];
            item = item['attributes'];
            itemTemp.title = item['title'];
            itemTemp.text = item['text'];
            itemTemp.contact = item['contact'];
            for(let img of item['images'].data){
              let src = '';
              if(img['attributes']['formats']['small'] != null){
                src = img['attributes']['formats']['small']['url'];
              }else{
                src = img['attributes']['formats']['thumbnail']['url'];
              }
              itemTemp.images.push(environment.apiURL + src)
            }
            explanations.push(itemTemp);
          }
          return explanations;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return explanations;
  }

  public getLinks(page: string): Link[] {
    let links: Array<Link> = [];

    try {
      fetch(`${this.explanationUrl}?filters[page][$eq]=${page}&sort[0]=order&populate=*`, {
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
            itemTemp.ref = "exp" + item['id'];
            item = item['attributes'];
            itemTemp.title = item['title'];
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
