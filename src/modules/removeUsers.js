import { render, showError, hideError } from './render';

export const removeUsers = () => {
  const tbody = document.getElementById('table-body');

  tbody.addEventListener('click', async (event) => {
    const removeButton = event.target.closest('.btn-remove');

    if (!removeButton) {
      return;
    }

    const tr = removeButton.closest('tr');
    const id = tr.dataset.key;

    try {
      await userService.removeUser(id);
      const users = await userService.getUsers();

      hideError();
      render(users);
    } catch (error) {
      console.error('Не удалось удалить пользователя:', error);
      showError();
    }
  });
};