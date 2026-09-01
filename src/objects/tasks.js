import Note from notes;

class Task extends Note {

    constructor (title, description, tags, dueDate, priority, isComplete) {

        super (title, description, tags);

        this._dueDate = dueDate;
        this._priority = priority;
        this._isComplete = isComplete;

    }

    get dueDate () {

        return this._dueDate;
    
    }

    set dueDate (newDueDate) {

        this._dueDate = newDueDate;

    }

    get priority () {

        return this._property;

    }

    set priority (newPriority) {

        this._priority = newPriority; 
    }

    get isComplete () {

        return this._isComplete;

    }

    statusSwitch () {

        this._isComplete = !(this._isComplete);

    }

}

