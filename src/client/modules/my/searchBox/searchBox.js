import LightningElementWithBootstrap  from '../../lib/lightningElementWithBootstrap';

export default class SearchBox extends LightningElementWithBootstrap {

    searchField={
        description:'',
        location:'',
        full_time:false
    }
    changeHandler(event){
        const {name, value, checked} = event.target
        if(name==='full_time'){
            this.searchField[name] = checked
        }else{
            this.searchField[name] = value
        }
        console.log(this.searchField)

    }

    searchHandler(){

    }
}