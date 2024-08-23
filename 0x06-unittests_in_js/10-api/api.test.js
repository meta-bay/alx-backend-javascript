const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('should return 200 and welcome message for GET /', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 200 and correct message for valid cart ID in GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/47`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('should return 404 for negative cart ID in GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/-47`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should return 404 for non-numeric cart ID in GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('should return 200 and welcome message for valid POST /login', (done) => {
    request.post(
      `${API_URL}/login`,
      { json: { userName: 'Pinkbrook' } },
      (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Pinkbrook');
        done();
      }
    );
  });

  it('should return 200 and valid payment methods for GET /available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
