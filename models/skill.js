const skills = [
    {id: 041121, skill: 'JavaScript', learning: true},
    {id: 920207, skill: 'HTML & CSS', learning: true},
    {id: 210411, skill: 'Express.js', learning: true},
    {id: 321031, skill: 'jQuery', learning: true},
    {id: 530510, skill: 'RESTful Routing', learning: true},
    {id: 621309, skill: 'EJS', learning: true},
    {id: 120744, skill: 'React', learning: false},
    {id: 912301, skill: 'Python', learning: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  }

  // Returns all skills
  function getAll() {
    return skills
  }

  // Returns one skill
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  // Creates new skill
  function create(skill) {
    // generates random id
    skill.id = Date.now() % 1000000
    skill.learning = false
    skills.push(skill)
  }

  // Deletes a skill
  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  // Updates a skill
  function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
  }