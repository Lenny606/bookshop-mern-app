import express from 'express';
import Book from "./book.model.js";
import {createBook, getBooks} from "./book.controller.js";

const router = express.Router()

router.post('/create', createBook)
router.get('/', getBooks)

export default router;