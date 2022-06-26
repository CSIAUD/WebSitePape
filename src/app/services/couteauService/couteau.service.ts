import { Injectable } from '@angular/core';
import { Caracteristics } from 'src/app/model/caracteristics/caracteristics';
import { Couteau } from 'src/app/model/couteau/couteau';
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
export class CouteauService {

  private couteauUrl = `${environment.apiURL}/api/couteaux`

  public findOne(id: number): Couteau {
    let result = new Couteau;
    try {
      fetch(`${this.couteauUrl}/${id}?populate=*`, {
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
          result.title = item['title'];
          result.video = item['videoUrl'] != '' ? "https://www.youtube.com/embed/"+item['videoUrl'] : "";
          result.file = item['file']['data'] ? environment.apiURL + item['file']['data']['attributes']['url'] : "";
          result.description = item['description'] ? item['description'] : "";
          for(let img of item['image'].data){
            result.images.push(environment.apiURL + img['attributes']['formats']['small']['url'])
          }
          for(let carateristic of item['caracteristics']){
            let temp = new Caracteristics(carateristic['name'], carateristic['value'])
            result.caracteristics.push(temp)
          }
          return result;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return result;
  }

  public findAll(): Couteau[] {
    let couteaux: Array<Couteau> = [];

    try {
      fetch(`${this.couteauUrl}?fields[0]=id&populate=image`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          for(let item of val.data){
            let itemTemp = new Couteau;
            itemTemp.id = item['id'];
            itemTemp.images.push(environment.apiURL + item['attributes']['image']['data'][0]['attributes']['formats']['small']['url'])
            couteaux.push(itemTemp);
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
