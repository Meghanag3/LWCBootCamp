import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {

    celebrityList = [
        {
            Id: 'C1',
            Name: 'John Abraham',
            Email: 'ja@gmail.com',
        },
        {
            Id: 'C2',
            Name: 'Brad Pitt',
            Email: 'bpitt@gmail.com',
        },
        {
            Id: 'C3',
            Name: 'Angeline Jolie',
            Email: 'angelina@gmail.com',
        },{
            Id: 'C4',
            Name: 'Peter Parker',
            Email: 'spiderman@marvel.com',
        }
    ];
}