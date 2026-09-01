import Checklist from checklists;

class Project extends Checklist {

    constructor (title, description, itemList, owner, users, dueDate) {

        super (title, description, itemList);

        this._owner = owner;
        this._users = users;
        this._dueDate = dueDate;

    }

    get owner () {

        return this._owner;

    }

    set owner (newOwner) {

        this._owner = newOwner;

    }

    get users () {

        return this._users;

    }

    addUser (newUserID) {

        aux = this._users;
        aux.push(newUser);
        this._users = aux;

    }

    removeUser (userID) {

        // later

    }

    get dueDate () {

        return this._dueDate;
    
    }

    set dueDate (newDueDate) {

        this._dueDate = newDueDate;

    }

}
