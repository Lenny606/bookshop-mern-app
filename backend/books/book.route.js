import express from 'express';
import Book from "./book.model.js";

const router = express.Router()

router.post('/create', async (req, res) => {
    const newBook = Book({...req.body})
    try {
        const response = await newBook.save()
        res.status(201).send({success: true, message: "saved book", data: newBook})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }

})

export default router;