import { LightningElement, track } from 'lwc';

export default class CalcFull extends LightningElement {
    
    @track calcResult = 0;
    @track calcExp = '';
    @track clickedButtonLabel;
    @track previousValue = '';
    @track currValue = '';
    @track bolOperatorFlag = 0;
    @track prevResult = 0;
    @track firstNumber = 0;

    handleClick(event){

        this.clickedButtonLabel = event.target.label;
       
        if(this.clickedButtonLabel === 'CLR' || this.clickedButtonLabel === "="){
            this.calcExp = '';
            this.calcResult = 0;
            this.previousValue = '';
            this.currValue = '';
            this.firstNumber = 0;
            this.prevResult = 0;

       
        } else if(this.clickedButtonLabel === "+" || this.clickedButtonLabel === "-" || this.clickedButtonLabel === "*" || this.clickedButtonLabel === "/" ){
                
            this.previousValue = this.clickedButtonLabel;
            this.calcExp = `${this.calcExp} ${this.clickedButtonLabel}`;
            if ( this.firstNumber  == 0){
                this.firstNumber =1 ;
                this.calcResult = parseInt(this.currValue);

            }
            this.prevResult = this.calcResult;

            this.currValue = '';

        } else {

            this.calcExp = `${this.calcExp} ${this.clickedButtonLabel}`;
            this.currValue = `${this.currValue}${this.clickedButtonLabel}`;

            switch(this.previousValue){
            
            case "+": this.calcResult = parseInt(parseInt(this.prevResult) + parseInt(this.currValue));
                    break;
            case "-":  this.calcResult =  parseInt(parseInt(this.prevResult) - parseInt(this.currValue));
                    break;
            case "*" :  this.calcResult = parseInt(parseInt(this.prevResult) * parseInt(this.currValue));
                    break;
            case "/" : this.calcResult = parseInt(parseInt(this.prevResult) / parseInt(this.currValue));
                    break;

        	}     
        }

    }
}