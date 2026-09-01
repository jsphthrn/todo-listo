export class Checklist {

    constructor (title, description, itemList) {

        this._title = title;
        this._description = description;
        this._itemList = itemList;
        this._id = crypto.randomUUID();

    }

    get title () {

        return this._title;

    }

    set title (newTitle) {

        this._title = newTitle;

    }

    get description () {

        return this._description;

    }

    set description (newDescription) {

        this._description = newDescription;

    } 

}