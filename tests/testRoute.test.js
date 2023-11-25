const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Task = require('../models/task');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  before(async () => {
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

  after(async () => {
    await Task.deleteMany();
  });

  it('should retrieve all tasks', (done) => {
    chai.request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
        done();
      });
  });
});
