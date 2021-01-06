import Cookies from 'js-cookie';

const SEND_EMAIL = 'email/SEND_EMAIL'

export const sentEmail = () => {
    return {
        type: SENT_EMAIL
    }
}

export const email = (userEmail, title, name, message) => {
    const csrfToken = Cookies.get
}
