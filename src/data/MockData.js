export const user = {
  name: 'Иванов Иван Иванович',
  group: 'Ф-18',
  course: 1,
  email: 'ivan.ivanov@akademy.ru',
};

// Счета к оплате (изначально пусто)
export const initialInvoices = [];

// История платежей (изначально пусто)
export const initialPayments = [];

// Данные по специальностям
// 10 специальностей
export const specialties = {
  'Лечебное дело': {
    semesters: 12,      // 6 лет (специалитет)
    pricePerSemester: 60000,
  },
  'Фармация': {
    semesters: 10,      // 5 лет (специалитет)
    pricePerSemester: 55000,
  },
  'Менеджмент': {
    semesters: 8,       // 4 года (бакалавриат)
    pricePerSemester: 45000,
  },
  'Экономика': {
    semesters: 8,
    pricePerSemester: 40000,
  },
  'Информатика': {
    semesters: 8,
    pricePerSemester: 50000,
  },
  'Психология': {
    semesters: 8,
    pricePerSemester: 35000,
  },
  'Юриспруденция': {
    semesters: 8,
    pricePerSemester: 42000,
  },
  'Строительство': {
    semesters: 8,
    pricePerSemester: 38000,
  },
  'Журналистика': {
    semesters: 8,
    pricePerSemester: 32000,
  },
  'Дизайн': {
    semesters: 8,
    pricePerSemester: 48000,
  },
};