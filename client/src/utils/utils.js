export const validatePassword = (value, setErrors) => {
    const rules = [
        { regex: /.{10,}/, message: "Must contain at least 10 characters" },
        { regex: /[A-Z]/, message: "Must contain at least one uppercase letter" },
        { regex: /[a-z]/, message: "Must contain at least one lowercase letter" },
        { regex: /\d/, message: "Must contain at least one number" },
        { regex: /[@$!%*?&]/, message: "Must contain at least one special character (@$!%*?&)" },
    ];

    const failed = rules
    .filter(rule => !rule.regex.test(value))
    .map(rule => rule.message);

    setErrors(failed);
};