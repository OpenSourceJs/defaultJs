const isValidEmail = (email) => {
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    return emailRegex.test(email);
};

module.exports = {
  isValidEmail
}
