import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class BooksService {
  
    
    constructor(private http: HttpClient) {

       
    }
getBooks  (val:string):Observable<any>
{
console.log(val)

return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&maxResults=40&fields=items(saleInfo%2FlistPrice%2
CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2Cmai
nCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
}


  
}


