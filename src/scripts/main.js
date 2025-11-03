'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification');

  switch (type) {
    case 'success':
      container.classList.add('success');
      break;
    case 'error':
      container.classList.add('error');
      break;
    case 'warning':
      container.classList.add('warning');
      break;
  }

  const h2Element = document.createElement('h2');

  h2Element.classList.add('title');
  h2Element.textContent = title;

  const pElement = document.createElement('p');

  pElement.textContent = description;
  container.appendChild(h2Element);
  container.appendChild(pElement);

  container.style.position = 'absolute';
  container.style.top = `${Number(posTop)}px`;
  container.style.right = `${Number(posRight)}px`;

  document.body.appendChild(container);

  setTimeout(() => {
    container.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
