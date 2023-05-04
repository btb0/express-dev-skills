const skills = [
    {id: 041121, skill: 'JavaScript', learning: 'yes'},
    {id: 920207, skill: 'HTML & CSS', learning: 'yes'},
    {id: 210411, skill: 'Express.js', learning: 'yes'},
    {id: 321031, skill: 'jQuery', learning: 'yes'},
    {id: 530510, skill: 'RESTful Routing', learning: 'yes'},
    {id: 621309, skill: 'EJS', learning: 'yes'},
    {id: 120744, skill: 'React', learning: 'not yet'},
    {id: 912301, skill: 'Python', learning: 'not yet'}
  ];

  module.exports = {
    getAll
  }

  function getAll() {
    return skills
  }