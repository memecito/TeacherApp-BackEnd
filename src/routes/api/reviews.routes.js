const router = require('express').Router();
const {
  getAllBookingsFromStudent,
  getAllBookingsFromTeacher,
  getAllBookingsBetweenStudentAndTeacher,
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingById
} = require('../../controllers/bookings.controller');

// Obtener todos los bookings de un estudiante
router.get('/student/:studentId', getAllBookingsFromStudent);

// Obtener todos los bookings de un profesor
router.get('/teacher/:teacherId', getAllBookingsFromTeacher);

// Obtener todos los bookings entre un estudiante y un profesor
router.get('/between/', getAllBookingsBetweenStudentAndTeacher);

// Obtener un booking por su ID
router.get('/:id', getBookingById);

// Crear un nuevo booking
router.post('/', createBooking);

// Actualizar un booking existente
router.put('/:id', updateBooking);

// Eliminar un booking
router.delete('/:id', deleteBooking);


module.exports = router;
