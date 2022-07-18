import { Injectable } from '@angular/core';
import { Landing } from 'src/app/model/landing/landing';
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
export class LandingService {

  private landingUrl = `${environment.apiURL}/api/landing`

  public get(): Landing {
    let landing = new Landing;
    try {
      fetch(`${this.landingUrl}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          let elem = val.data
          landing.id = elem['id']
          elem = elem['attributes']
          landing.text = elem['text']
          landing.title = elem['title']
          for (let img of val['data']['attributes']['imgs']['data']) {
            let imgUrl = img['attributes']['formats']['small'] != undefined ? img['attributes']['formats']['small']['url'] : img['attributes']['formats']['thumbnail']['url']
            landing.imgs.push(environment.apiURL + imgUrl);
          }
          return landing;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return landing;
  }
}