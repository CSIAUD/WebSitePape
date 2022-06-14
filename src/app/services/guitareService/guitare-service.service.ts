import { Injectable } from '@angular/core';
import { Caracteristics } from 'src/app/model/caracteristics/caracteristics';
import { Guitare } from 'src/app/model/guitare/guitare';
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
export class GuitareService {

  // constructor() { }

  private guitareUrl = `${environment.apiURL}/api/guitares`

  public findOne(id: number): Guitare {
    let result = new Guitare;
    try {
      fetch(`${this.guitareUrl}/${id}?populate=*`, {
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
          result.file = environment.apiURL + item['file']['data']['attributes']['url'];
          result.description = item['description'];
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

  public findAll(): Guitare[] {
    let guitares: Array<Guitare> = [];

    try {
      fetch(`${this.guitareUrl}?fields[0]=id&populate=image`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON)
        .then((val) => {
          for(let item of val.data){
            let itemTemp = new Guitare;
            itemTemp.id = item['id'];
            itemTemp.images.push(environment.apiURL + item['attributes']['image']['data'][0]['attributes']['formats']['small']['url'])
            guitares.push(itemTemp);
          }
          return guitares;
        });
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
    return guitares;
  }
}
