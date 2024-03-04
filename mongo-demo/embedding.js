const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
  const course=await Course.updateOne({_id:courseId},{
    // $set:{
    //   'author.name':'Kausic'
    // },
    $unset:{
      'author':''
    }
  })
}
async function addAuthor(courseId,author){
  const course=await Course.findById(courseId)
  course.authors.push(author)
   await course.save()
}
async function removeAuthor(courseId,authorId){
  const course=await Course.findById(courseId)
  const authorIndex = course.authors.findIndex(author => author._id.equals(authorId));

  if (authorIndex === -1) {
    console.log('Author not found in the course');
    return;
  }

  // Remove the author from the authors array
  course.authors.splice(authorIndex, 1);

  // Save the updated course
  await course.save();
}
//updateAuthor('65e523f4efceaac2d18f9775')
// createCourse('Node Course', [new Author({ name: 'Mosh' }),new Author({ name: 'Kausic' })]);
//addAuthor('65e525f832d4a9cf1a240987',new Author({ name: 'Cloud' }))
removeAuthor('65e525f832d4a9cf1a240987','65e528fb6e2645d35d72fd89')
