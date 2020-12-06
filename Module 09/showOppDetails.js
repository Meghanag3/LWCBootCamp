import { LightningElement, wire, api } from 'lwc';
import getOpportunity from '@salesforce/apex/showOppDetailsCntrl.searchOpportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNTNAME_FIELD from '@salesforce/schema/Opportunity.Account.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';

export default class ShowOppDetails extends LightningElement {
    @api recordId;
    searchKey = '';
    oppId = '';
    showOpp = false;
    stage = '';
    progress = '';
    fields = [NAME_FIELD, ACCOUNTNAME_FIELD, CLOSEDATE_FIELD, AMOUNT_FIELD];

    @wire(getOpportunity, {searchKey: "$searchKey", recordId: "$recordId"})
    opportunitySearchResult;

    steps = [
        { label: 'Prospecting', value: 'step-1' },
        { label: 'Qualification', value: 'step-2' },
        { label: 'Needs Analysis', value: 'step-3' },
        { label: 'Value Proposition', value: 'step-4' },
        { label: 'Id.Decision Makers', value: 'step-5' },
        { label: 'Perception Analysis', value: 'step-6' },
        { label: 'Proposal/Price Quote', value: 'step-7' },
        { label: 'Negotiation/Review', value: 'step-8' },
        { label: 'Closed', value: 'step-9' },
    ];


   // @wire(getRecord, { recordId: '$oppId', layoutTypes: ['Full', 'Compact'], modes:['View'] })
    selectedOpportunity({ data, error }) {
        if (data) {
            this.stage = data.fields.StageName.value;

            switch(this.stage){
            
                case "Prospecting": this.progress = "step-1"; break;
                case "Qualification": this.progress = "step-2"; break;
                case "Needs Analysis": this.progress = "step-3"; break;
                case "Value Proposition": this.progress = "step-4"; break;
                case "Id.Decision Makers": this.progress = "step-5"; break;
                case "Perception Analysis": this.progress = "step-6"; break;
                case "Proposal/Price Quote": this.progress = "step-7"; break;
                case "Negotiation/Review": this.progress = "step-8"; break;
                case "Closed": this.progress = "step-9"; break;

            }
            
        } else if (error) {
            console.log(error);
        }
    }
    
    handleSearchKeyChange(event){
        this.searchKey = event.target.value;
        this.showOpp = false;
    }

    selectOpportunity(event){
        this.oppId = event.currentTarget.value;
        this.showOpp = true;
    }

    
}