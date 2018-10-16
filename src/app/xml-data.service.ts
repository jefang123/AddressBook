import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

// const xmlToJson = function(xml) {
//   var obj = {};
//   if (xml.nodeType == 1) {                
//       if (xml.attributes.length > 0) {
//           obj["@attributes"] = {};
//           for (var j = 0; j < xml.attributes.length; j++) {
//               var attribute = xml.attributes.item(j);
//               obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
//           }
//       }
//   } else if (xml.nodeType == 3) { 
//       obj = xml.nodeValue;
//   }            
//   if (xml.hasChildNodes()) {
//       for (var i = 0; i < xml.childNodes.length; i++) {
//           var item = xml.childNodes.item(i);
//           var nodeName = item.nodeName;
//           if (typeof (obj[nodeName]) == "undefined") {
//               obj[nodeName] = xmlToJson(item);
//           } else {
//               if (typeof (obj[nodeName].push) == "undefined") {
//                   var old = obj[nodeName];
//                   obj[nodeName] = [];
//                   obj[nodeName].push(old);
//               }
//               obj[nodeName].push(xmlToJson(item));
//           }
//       }
//   }
//   return obj;
//    }
    
export class XmlDataService {

  constructor(private http: HttpClient) { 
    // this.http.get('assets/ab.xml')
    //   .subscribe(res => console.log(res));
    this.getJSON().subscribe(data => {
      console.log(data)
  });
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/ab.json")
  }
  // getContacts(): Observable<any>{

  //   this.http.get('/assets/ab.xml').subscribe(data=>{
  //     return JSON.stringify(xmlToJson(data))
  //   });
  // }
 
  // getColumns(): string[]{
  //   return [
  //     "CustomerID",
  //     "CompanyName",
  //     "ContactName",
  //     "ContactTitle",
  //     "Address",
  //     "City",
  //     "Email",
  //     "PostalCode",
  //     "Country",
  //     "Phone"
  //   ]};
}
