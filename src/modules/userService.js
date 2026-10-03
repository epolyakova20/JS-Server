export class UserService {
  async getData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async sendData(url, method, data = null) {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (data !== null) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const text = await response.text();
      return text ? JSON.parse(text) : null;
    } catch (error) {
      throw error;
    }
  }

  getUsers() {
    return this.getData('http://localhost:4545/users');
  }

  addUser(user) {
    return this.sendData('http://localhost:4545/users', 'POST', user);
  }

  removeUser(id) {
    return this.sendData(`http://localhost:4545/users/${id}`, 'DELETE');
  }
}