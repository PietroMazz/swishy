import Store from './Store';

export default class StoreLink extends Store{
    url : string;

    constructor(label : string, icon : string, url: string)
    {
        super(label);
        this.url = url;
    }


}