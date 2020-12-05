import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {

    @api childCount = 'Child One';
    @api label = 'Select';
    @api variant = 'success';
    
   toggleSelection(){

        if(this.label==='Select'){

            this.label='Deselect';
            this.variant='destructive';

        } else{
            this.label='Select';
            this.variant='success';
        }

        // Custom event created to pass values from child to parent.
        const childevent = new CustomEvent('customclick',
            {
                bubbles : true,
                composed : true,
                detail:{
                    trackAll:this.label
                }
                
            });
            this.dispatchEvent(childevent);
    }
   
}