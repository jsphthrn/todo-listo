class Note {

    constructor (title, description, tags) {

        this._title = title;
        this._description = description;
        this._tags = tags;
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

    get tags () {

        return this._tags

    }

    set tags (newTags) {

        this._tags = newTags;

    }

    get id () {

        return this._id;

    }

}