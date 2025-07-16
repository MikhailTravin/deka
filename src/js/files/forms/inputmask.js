/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const data = document.querySelectorAll('.input-tel');
if (data) {
	Inputmask({ "mask": "+7(999)-999-99-99" }).mask(data);
}