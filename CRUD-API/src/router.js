const express = require('express');
const { PrismaClient } = require('@prisma/client');
const usersController = require('./controller/userController');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/User', async (req, res) => {
    usersController.create(req, res)
});

router.get('/User', async (req, res) => {
    usersController.findMany(req, res)
});

router.get('/User/:id', async (req, res) => {
    usersController.findUnique(req, res)
});

router.put('/User/:id', async (req, res) => {
    usersController.update(req, res)
});

router.delete('/User/:id', async (req, res) => {
    usersController.delete(req, res)
});

module.exports = router;