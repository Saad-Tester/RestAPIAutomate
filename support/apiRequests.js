class ApiRequests {
  static getUsers(page, failOnStatusCode = true) {
    return cy.request({
      method: 'GET',
      url: `/users?page=${page}`,
      failOnStatusCode: failOnStatusCode
    });
  }

  static getUser(id) {
    return cy.request(`/users/${id}`);
  }

  static getUsersWithDelay(delay) {
    return cy.request(`/users?delay=${delay}`);
  }

  static createUser(payload, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: '/users',
      body: payload,
      failOnStatusCode: failOnStatusCode
    });
  }

  static updateUser(id, payload) {
    return cy.request({
      method: 'PUT',
      url: `/users/${id}`,
      body: payload
    });
  }

  static patchUser(id, payload) {
    return cy.request({
      method: 'PATCH',
      url: `/users/${id}`,
      body: payload
    });
  }

  static deleteUser(id) {
    return cy.request({
      method: 'DELETE',
      url: `/users/${id}`
    });
  }

  static login(credentials, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: credentials,
      failOnStatusCode: failOnStatusCode
    });
  }
}

export default ApiRequests;
