const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Developer Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Developer Skill'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add a New Skill'
    })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('skills')
}