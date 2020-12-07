import { LightningElement, wire, track  } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

// Import message service features required for subscribing and the message channel
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/ContactSubscription__c';

import NAME_FIELD from '@salesforce/schema/Contact.Name';

const fields = [NAME_FIELD];

export default class ContactSubscriptionList extends LightningElement {
    subscription = null;
    recordId;
    @track contactList=[];
    receivedMessage;
    @track subscribed =false;

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ error, data }) {

        if (error) {
            ///error
         } else if (data) {
            
            this.contactList.push( getFieldValue(data, NAME_FIELD));
        }
    }

    @wire(MessageContext)
    messageContext;
    
    clear(){
        this.contactList = '';
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        this.subscribed =true;
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        this.subscribed = false;
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
       
        this.recordId = message.recordId;
    }
}
