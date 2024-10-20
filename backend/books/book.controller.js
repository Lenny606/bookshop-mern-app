import express from 'express';
import Book from "./book.model.js";

export const createBook = async (req, res) => {
    const newBook = Book({...req.body})
    try {
        const response = await newBook.save()
        res.status(201).send({success: true, message: "saved book", data: newBook})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send({success: true, data: books})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
