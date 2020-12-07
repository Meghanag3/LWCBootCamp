import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/ContactSubscription__c';

export default class QuickCreateContact extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleSuccess(event) {
        this.handleReset();
        const message = {
            recordId: event.detail.id      
        };
        publish(this.messageContext, recordSelected, message);
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
}