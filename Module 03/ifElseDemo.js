import { LightningElement } from 'lwc';
import TOM_URL from '@salesforce/resourceUrl/Tom';
import JERRY_URL from '@salesforce/resourceUrl/Jerry';

export default class IfElseDemo extends LightningElement {

     btnLabel = 'Show Jerry';
     showTom = true;
     //imageURL = TOM_URL;
     tomImageURL = TOM_URL;
     jerryImageURL = JERRY_URL;

   toggleImage(event) {
      if (this.showTom === true){
        this.showTom = false;
        this.btnLabel = 'Show Tom';
       // this.imageURL = JERRY_URL;

      } else {
        this.showTom = true;
        this.btnLabel = 'Show Jerry';
        //this.imageURL = TOM_URL;
      }
   }
   

}