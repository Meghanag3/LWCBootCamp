import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPTYNAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';


export default class QuickCreate extends LightningElement {
    
    showAllAccFields = false;
    showAllContactFields = false;
    showAllOpptyFields = false;

    objectApiName1 = ACCOUNT_OBJECT;
    fields1 = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    objectApiName2 = CONTACT_OBJECT;
    fields2 = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];

    objectApiName3 = OPPORTUNITY_OBJECT;
    fields3 = [OPPTYNAME_FIELD, STAGE_FIELD,CLOSEDATE_FIELD];

    handleSuccess1(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    handleSuccess2(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    handleSuccess3(event) {
        const toastEvent = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    showAllAcc(event){
        this.showAllAccFields = true;
    }

    showAllContact(event){
        this.showAllContactFields = true;
    }

    showAllOppty(event){
        this.showAllOpptyFields = true;
    }
}