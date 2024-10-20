import express from 'express';
import Book from "./book.model.js";
import {createBook, getBook, getBooks, editBook} from "./book.controller.js";

const router = express.Router()

router.post('/create', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)
router.put('/edit/:id', editBook)

export default router;