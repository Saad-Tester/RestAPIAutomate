// cypress/e2e/api-tests.cy.js

import ApiRequests from '../support/apiRequests';

describe('ReqRes API Tests', () => {

    before(() => {
      // Logs to confirm test setup
      cy.log('Starting API Tests');
    });

    describe('GET /users Tests', () => {
      // Test for GET /users endpoint with valid page number
      it('Verify GET /users endpoint with valid page number', () => {
        ApiRequests.getUsers(2).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.be.an('array');
        });
      });

      // Test for GET /users endpoint with invalid page number
      it('Verify GET /users endpoint with invalid page number', () => {
        ApiRequests.getUsers(999, false).then((response) => {
          expect(response.status).to.eq(200); // Empty response is still valid
          expect(response.body.data).to.be.an('array').that.is.empty;
        });
      });

      // Test for GET /users/2 endpoint for single user
      it('Verify GET /users/2 endpoint for single user', () => {
        ApiRequests.getUser(2).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.include({
            id: 2,
            email: 'janet.weaver@reqres.in',
            first_name: 'Janet',
            last_name: 'Weaver'
          });
        });
      });

      // Test for GET /users?delay=3 for delayed response
      it('Verify GET /users?delay=3 for delayed response', () => {
        ApiRequests.getUsersWithDelay(3).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.be.an('array');
        });
      });
    });

    describe('POST /users Tests', () => {
      // Test for POST /users endpoint with valid data
      it('Verify POST /users endpoint with valid data', () => {
        const payload = {
          name: 'John',
          job: 'Engineer'
        };
    
        ApiRequests.createUser(payload).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('name', payload.name);
          expect(response.body).to.have.property('job', payload.job);
        });
      });
    
      // Test for POST /users endpoint with invalid data
      it('Verify POST /users endpoint with invalid data', () => {
        const invalidPayload = {}; // Empty payload
    
        ApiRequests.createUser(invalidPayload, false).then((response) => {
          expect(response.status).to.be.oneOf([201]); // Adjust based on API spec
        });
      });
    });

    describe('PUT /users Tests', () => {
      // Test for PUT /users/2 endpoint
      it('Verify PUT /users/2 endpoint', () => {
        const payload = {
          name: 'morpheus',
          job: 'zion resident'
        };
    
        ApiRequests.updateUser(2, payload).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include({
            name: payload.name,
            job: payload.job
          });
          expect(response.body).to.have.property('updatedAt');
        });
      });
    });

    describe('PATCH /users Tests', () => {
      // Test for PATCH /users/2 endpoint
      it('Verify PATCH /users/2 endpoint', () => {
        const payload = {
          name: 'morpheus',
          job: 'zion resident'
        };
    
        ApiRequests.patchUser(2, payload).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include({
            name: payload.name,
            job: payload.job
          });
          expect(response.body).to.have.property('updatedAt');
        });
      });
    });

    describe('DELETE /users Tests', () => {
      // Test for DELETE /users endpoint
      it('Verify DELETE /users endpoint', () => {
        ApiRequests.deleteUser(2).then((response) => {
          expect(response.status).to.eq(204);
          expect(response.body).to.be.empty;
        });
      });
    });

    describe('POST /login Tests', () => {
      // Test for POST /login endpoint for successful login
      it('Verify POST /login endpoint for successful login', () => {
        const credentials = {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        };
    
        ApiRequests.login(credentials).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('token');
        });
      });
    
      // Test for POST /login endpoint for unsuccessful login
      it('Verify POST /login endpoint for unsuccessful login', () => {
        const credentials = {
          email: 'peter@klaven'
        };
    
        ApiRequests.login(credentials, false).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Missing password');
        });
      });
    });

});
