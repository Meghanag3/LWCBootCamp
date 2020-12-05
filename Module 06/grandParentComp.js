import { api,LightningElement, track } from 'lwc';

export default class GrandParentComp extends LightningElement {

    @track selectionCount = 0;
    
    // reset in parent and child
    handleReset(){
        this.template.querySelector("c-parent-comp").resetAll();
        this.selectionCount = 0;
    }

   // To track the count in grand parent.
    handleChildClick(event){

       if(event.detail.trackAll === 'Deselect'){
            this.selectionCount = this.selectionCount + 1;
       }
       else{
            this.selectionCount = this.selectionCount - 1;
       }
    }
}