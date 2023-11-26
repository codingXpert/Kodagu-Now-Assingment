const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const Task = require('../models/tasks');

describe('Task API', function() {
  this.timeout(10000); 

  beforeEach(async function() {
    await Task.create([
      {
        title: 'Task 1',
        description: 'Description for Task 1',
        assignedUser: 'user1',
        dueDate: new Date('2023-12-01'),
        completionStatus: false,
      },
      {
        title: 'Task 2',
        description: 'Description for Task 2',
        assignedUser: 'user2',
        dueDate: new Date('2023-12-05'),
        completionStatus: false,
      },
    ]);
  });

  afterEach(async function() {
    await Task.deleteMany();
  });

  it('should retrieve all tasks', async function() {
    try {
      const res = await chai.request(app).get('/tasks');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf(2);
    } catch (err) {
      throw err; // Throw the error for Mocha to handle it
    }
  });
});
