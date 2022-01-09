import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

const onResetPage = () => {
    let currentData = localStorage.getItem("feedback-form-state");
    if (currentData) {
        currentData = JSON.parse(currentData);
        Object.entries(currentData).forEach(([name, value]) => {
            refs.form.elements[name].value = value
        })
    }
}
 
onResetPage();

const onInputHandler = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({"email": refs.input.value, "message": refs.textarea.value}));
};

const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
        console.log(value, name)
    });

    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
}

refs.form.addEventListener('input', throttle(onInputHandler, 500));
refs.form.addEventListener('submit', onSubmitHandler);
