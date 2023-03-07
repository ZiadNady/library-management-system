//import bookschema
const bookSchema = require('./../Models/bookModel');

//add new book 
exports.addNewBook = (req, res) => {
    //create new book
    const newBook = new bookSchema({
        title: req.body.title,
        auther: req.body.auther,
        publisher: req.body.publisher,
        PublishingDate: req.body.PublishingDate,
        Category: req.body.Category,
        Edition: req.body.Edition,
        pages: req.body.pages,
        NoOfCopies: req.body.NoOfCopies,
        Avilable: req.body.Avilable,
        shelfNo: req.body.shelfNo
    });
    //save book
    newBook.save().then(() => {
        res.status(201).json({
            message: 'Book Added Successfully'
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Adding Book'
        });
    });
}

//update book by id
exports.updateBookById = (req, res) => {

    bookSchema.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        auther: req.body.auther,
        publisher: req.body.publisher,
        PublishingDate: req.body.PublishingDate,
        Category: req.body.Category,
        Edition: req.body.Edition,
        pages: req.body.pages,
        NoOfCopies: req.body.NoOfCopies,
        Avilable: req.body.Avilable,
        shelfNo: req.body.shelfNo
    }).then(() => {
        res.status(200).json({
            message: 'Book Updated Successfully'
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Updating Book'
        });
    });
}

//delete book by id
exports.deleteBookById = (req, res) => {
    bookSchema.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({
            message: 'Book Deleted Successfully'
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Deleting Book'
        });
    });
}

//get all books
exports.getAllBooks = (req, res) => {
    bookSchema.find().then((books) => {
        res.status(200).json({
            message: 'Books fetched successfully',
            books: books
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Fetching Books'
        });
    });
}

//get book by id
exports.getBookById = (req, res) => {
    bookSchema.findById(req.params.id).then((book) => {
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Fetching Book'
        });
    });
}

//get book by auther and publisher
exports.getBookByAutherAndPublisher = (req, res) => {
    bookSchema.find({ auther: req.params.auther, publisher: req.params.publisher }).then((book) => {
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Fetching Book'
        });
    });
}


// get book by title
exports.getBookByTitle = (req, res) => {
    bookSchema.find({ title: req.params.title }).then((book) => {
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Fetching Book'
        });
    });
}

//get book by category
exports.getBookByCategory = (req, res) => {
    bookSchema.find({ Category: req.params.Category }).then((book) => {
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }).catch((err) => {
        res.status(500).json({
            message: 'Error in Fetching Book'
        });
    });
}

