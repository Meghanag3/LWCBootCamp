import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickCreateNavigation extends NavigationMixin(LightningElement) {

    accQuickCreate = false;
    conQuickCreate = false;
    oppQuickCreate = false;
    selectedObject = "None";

   
    chooseObject(event){

        const field = event.target.name;
        if (field === 'SelectedObject') {
            this.selectedObject = event.target.value;
        }
    }

    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }

    handleQuickCreate(event){

        if(this.selectedObject === "Account"){
            this.accQuickCreate = true;
            this.conQuickCreate = false;
            this.oppQuickCreate = false;
        }
        else if(this.selectedObject === "Contact"){
            this.accQuickCreate = false;
            this.conQuickCreate = true;
            this.oppQuickCreate = false;
        }
        else if(this.selectedObject === "Opportunity"){
            this.accQuickCreate = false;
            this.conQuickCreate = false;
            this.oppQuickCreate = true;
        }
        else {
            alert("Please select an object");
        }
    }

    handleCreateRecord(event){

        if(this.selectedObject === "Account"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                }
            });
            
        }
        else if(this.selectedObject === "Contact"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObject === "Opportunity"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                }
            })
        }
        else {
            alert("Please select an object");
        }
    }

    handleSuccess1(event) {

        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        this.handleReset();
    }

    handleSuccess2(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        this.handleReset();

    }

    handleSuccess3(event) {
        const toastEvent = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        this.handleReset();

    }


   
}