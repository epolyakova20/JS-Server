import { render, showError, hideError } from './render';

export const addUsers = () => {
  const form = document.querySelector('form');
  const nameInput = form.querySelector('#form-name');
  const emailInput = form.querySelector('#form-email');
  const childrenInput = form.querySelector('#form-children');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
      name: nameInput.value,
      email: emailInput.value,
      children: childrenInput.checked,
      permissions: false,
    };

    try {
      await userService.addUser(user);
      const users = await userService.getUsers();

      hideError();
      render(users);
      form.reset();
    } catch (error) {
      console.error('Не удалось добавить пользователя:', error);
      showError();
    }
  });
};