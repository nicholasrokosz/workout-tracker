const Workout = require('../models/workout.js');

module.exports = app => {
  app.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await Workout.find({});
      res.json(workouts);
    } catch (err) {
      console.log(err);
    }
  });
};
