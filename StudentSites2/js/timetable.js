function showGroups(institute) {
  var groupsElement = document.getElementById('groups');
  groupsElement.innerHTML = '';

  var groups = getGroupsByInstitute(institute);

  groups.forEach(function (group) {
    var button = document.createElement('button');
    button.textContent = group;
    button.addEventListener('click', function () {
      showSchedule(group);
    });
    groupsElement.appendChild(button);
  });
}

function showSchedule(group) {
  // Відкрити сторінку з розкладом для вибраної групи
  window.location.href = 'shedule.html?group=' + group;
}

// Приклад функцій для отримання даних (потрібно замінити на реальні дані)
function getGroupsByInstitute(institute) {
  if (institute === 'ІКНІ') {
    return ['КН-201', 'КН-202', 'КН-203', 'КН-204', 'КН-205', 'КН-206', 'КН-207'];
  } else if (institute === 'ІКТА') {
    return ['КБ-201', 'КБ-202', 'КБ-203', 'КБ-204', 'КБ-205', 'КБ-206', 'КБ-207'];
  } else if (institute === 'ІМІТ') {
    return ['МЗ-21', 'МЗ-22', 'АТ-21', 'АТ-22', 'АТ-23'];
  } else if (institute === 'ІАРД') {
    return ['ДС-21', 'ДС-22', 'ДЗЗВ-21', 'ДЗЗВ-22', 'ДЗЗВ-23'];
  } else if (institute === 'ІЕСК') {
    return ['АВ-21', 'АВ-22', 'АВКВ-21', 'АВКВ-22', 'ЕЕМ-23'];
  } else if (institute === 'ІНЕМ') {
    return ['ЕЕ-201', 'ЕЕ-202', 'ЕЕ-203', 'ЕЕ-204', 'ЕЕ-205', 'ЕЕ-206', 'ЕЕ-207'];
  } else {
    return [];
  }
}