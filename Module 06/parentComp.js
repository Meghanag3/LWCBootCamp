import { LightningElement, api } from 'lwc';

export default class ParentCmp extends LightningElement {

    @api selection1 = 'Deselected';
    @api selection2 = 'Deselected';
    @api selection3 = 'Deselected';
    reset = false;

    //Based on the child label, the parent label will be updated.
    handleChildClick1(event){
       if(event.target.label === 'Select'){
           this.selection1 = 'Deselected';
       }else{
           this.selection1 = 'Selected';
       }
    }
    handleChildClick2(event){
        if(event.target.label === 'Select'){
            this.selection2 = 'Deselected';
        }else{
            this.selection2 = 'Selected';
        }       
    }
    handleChildClick3(event){
        if(event.target.label === 'Select'){
            this.selection3 = 'Deselected';
        }else{  
            this.selection3 = 'Selected';
        }     
    }
    @api
    resetAll(){
        this.selection1 = 'Deselected';
        this.selection2 = 'Deselected';
        this.selection3 = 'Deselected';

        this.template.querySelectorAll("c-child-comp").forEach((element)=>{
            element.label = 'Select';
            element.variant = 'success';
         });
    }
}