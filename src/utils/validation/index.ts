const ENTER_USERNAME = 'Введите имя пользователя';
const WRONG_USERNAME_LANGUAGE =
    'Имя пользователя должно состоять из латинских букв и цифр';
const WRONG_MAX_LENGTH = 'Превышено максимальное количество символов - 10';
const WRONG_MIN_LENGTH = 'Введите не меньше 5 символов'

const ENTER_EMAIL = 'Введите Ваш имейл';
const WRONG_EMAIL_LANGUAGE = 'Ваш имейл должен состоять из латинских букв и цифр';
const WRONG_EMAIL = 'Ваш имейл должен содержать символ @ и домен';
const NOT_ERROR = 'true';

const ENTER_PASSWORD = 'Введите пароль';
const WRONG_PASSWORD_LANGUAGE =
    'Пароль должен состоять из латинских букв и цифр';
const WRONG_PASSWORD_LENGTH =
    'Пароль должен содержать не менее 8 и не более 15 символов';

// регулярные выражения для подстрок
const _userNameLanguageRegExp  = /[a-zA-Z][a-zA-Z0-9-]+$/;
const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const _passwordLanguageRegExp = /^[A-z\d]/;

// валидация пользователя-имейла-пароля
export const validateUserName = (user:string):string => {
    if (!user) {
        return ENTER_USERNAME;
    }

    if (!_userNameLanguageRegExp.test(user)) {
        return WRONG_USERNAME_LANGUAGE;
    }

    if (user.length > 10) {
        return WRONG_MAX_LENGTH;
    }
    if(user.length < 5){
        return WRONG_MIN_LENGTH
    }
    return NOT_ERROR;

}

export const validateEmail = (email: string): string => {
    if (!email) {
        return ENTER_EMAIL;
    }

    if (!_emailLanguageRegExp.test(email)) {
        return WRONG_EMAIL_LANGUAGE;
    }

    if (!_emailRegExp.test(email)) {
        return WRONG_EMAIL;
    }

    return NOT_ERROR;
}

export const validatePassword = (password: string): string =>{
    if (!password) {
        return ENTER_PASSWORD;
    }

    if (!_passwordLanguageRegExp.test(password)) {
        return WRONG_PASSWORD_LANGUAGE;
    }

    if (password.length < 8) {
        return WRONG_PASSWORD_LENGTH;
    }

    if (password.length > 15) {
        return WRONG_PASSWORD_LENGTH;
    }

    return NOT_ERROR;
}