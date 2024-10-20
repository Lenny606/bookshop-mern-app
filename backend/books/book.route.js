import express from 'express';
import Book from "./book.model.js";
import {createBook, getBook, getBooks, editBook, deleteBook} from "./book.controller.js";

const router = express.Router()

router.post('/create', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)
router.put('/edit/:id', editBook)
router.delete('/:id', deleteBook)

export default router;