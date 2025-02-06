// Функция для открытия модального окна
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
  }
};

// Добавление снежков
function addSnowflakes() {
  for (let i = 0; i < 50; i++) {
    let snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);
  }
}

// Запуск добавления снежков при загрузке страницы
window.onload = function() {
  addSnowflakes();
};