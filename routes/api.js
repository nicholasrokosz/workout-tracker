const Workout = require('../models/workout.js');

module.exports = app => {
  app.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await Workout.find({});
      res.json(workouts);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.put('/api/workouts/:id', async ({ params, body }, res) => {
    try {
      const updatedWorkout = await Workout.findByIdAndUpdate(
        params.id,
        {
          $push: { excercises: body },
        },
        { new: true, upsert: true }
      );
      res.json(updatedWorkout);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.post('/api/workouts', async (req, res) => {
    try {
      const newWorkout = await Workout.create({});
      res.json(newWorkout);
    } catch (err) {
      res.status(500).end();
    }
  });
};
