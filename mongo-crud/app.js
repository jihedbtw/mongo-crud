const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model('Person', personSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create and save persons
async function createPersons() {
  try {
    const person1 = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Burger']
    });

    const person2 = new Person({
      name: 'Jane Smith',
      age: 25,
      favoriteFoods: ['Sushi', 'Pasta']
    });

    const savedPerson1 = await person1.save();
    const savedPerson2 = await person2.save();

    console.log('Saved person 1:', savedPerson1);
    console.log('Saved person 2:', savedPerson2);
  } catch (err) {
    console.error('Error saving persons:', err);
  }
}

createPersons();
