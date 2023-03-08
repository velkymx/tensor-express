const request = require('supertest');
const app = require('../app');

describe('POST /api/predict', () => {
  test('predicts the correct class for a test image', async () => {
    const res = await request(app)
      .post('/api/predict')
      .send({ image: 'base64-encoded-test-image' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('label', 'test-class');
  });
});
