const request = require('supertest');
const { app, server } = require('../app');

describe('GET /api/sample', () => {
    it('should return a JSON object', async () => {
        const response = await request(app).get('/api/sample');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'This is a sample JSON object');
        expect(response.body.data).toHaveProperty('name', 'John Doe');
        expect(response.body.data).toHaveProperty('age', 30);
        expect(response.body.data).toHaveProperty('email', 'john.doe@example.com');
    });
});

// Close the server after all tests are done
afterAll((done) => {
    server.close(done);
});