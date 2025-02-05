// Функция для открытия модального окна
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block'; // Показываем модальное окно
  } else {
    console.error(`Ошибка: модальное окно с ID "${modalId}" не найдено.`);
  }
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none'; // Скрываем модальное окно
  } else {
    console.error(`Ошибка: модальное окно с ID "${modalId}" не найдено.`);
  }
}

// Закрытие модального окна при клике вне его содержимого
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none'; // Скрываем модальное окно
  }
};