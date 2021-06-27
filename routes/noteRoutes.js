const express = require("express");

const notes = require("../controllers/noteController");
const router = express.Router();

router.get('/', notes.getNotes);
router.get('/:id', notes.getSpecNote);
router.post('/', notes.createNote);
router.patch('/:id', notes.updateNote);
router.delete('/:id', notes.deleteNote);

module.exports = router;