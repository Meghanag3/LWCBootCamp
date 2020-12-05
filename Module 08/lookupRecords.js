import { LightningElement, wire, track } from 'lwc';
import getAccounts from "@salesforce/apex/LookupRecordsController.getAccounts";
import getContactList from '@salesforce/apex/LookupRecordsController.getRelatedContacts';

const columns = [
    { label: 'Id', fieldName: 'Id'},
    { label: 'Name', fieldName: 'Name'},
];

export default class LookupRecords extends LightningElement {

    searchKey = '';
    @track contacts;   
    @track accounts= '';
    selectedAccount = '';
    selectedAccountId = '';
    
    columns = columns;

    handleChange(event) {
        this.accounts = '';
        this.searchKey = event.target.value;
        getAccounts({searchKey:this.searchKey})
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {
            this.error = error;
        });

        
    }

    getContactsForAccount(event) {
        this.selectedAccountId = event.target.dataset.label;
        this.selectedAccount = event.target.dataset.name;
        this.handleLoad();
    }


    handleLoad() {
        getContactList({
            accountId: this.selectedAccountId
        })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    resetSearch() {
        try {
            this.searchKey = ' ';
            this.selectedAccountId = '';
            this.selectedAccount = '';
            this.contacts = undefined;
            this.accounts = undefined;
        } catch (e) {
            console.log(e);
        }

    }
}