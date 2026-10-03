export const render = (users) => {
const tbody = document.getElementById('table-body');
tbody.innerHTML = '';

users.forEach(user => {
    tbody.insertAdjacentHTML('beforeend', `
    <tr data-key="${user.id}">
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.children ? 'Есть' : 'Нет'}</td>
        <td>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch"
                    id="form-children-${user.id}" ${user.permissions ? 'checked' : ''}>
            </div>
        </td>
        <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-warning">
                    <i class="bi-pencil-square"></i>
                </button>
                <button type="button" class="btn btn-danger btn-remove">
                    <i class="bi-person-x"></i>
                </button>
            </div>
        </td>
    </tr>
    `);
});
};

export const showError = () => {
let errorElement = document.getElementById('data-error');

if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.id = 'data-error';
    errorElement.className = 'alert alert-danger mt-3';

    const table = document.querySelector('.section-table .table-responsive');
    table.after(errorElement);
}

errorElement.textContent = 'Произошла ошибка, данных нет!';
errorElement.hidden = false;
};

export const hideError = () => {
const errorElement = document.getElementById('data-error');

if (errorElement) {
    errorElement.hidden = true;
}
};