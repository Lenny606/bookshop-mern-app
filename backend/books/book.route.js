import express from 'express';
import Book from "./book.model.js";
import {createBook, getBook, getBooks} from "./book.controller.js";

const router = express.Router()

router.post('/create', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)

export default router;