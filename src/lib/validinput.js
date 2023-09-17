const ValidInput = {
    IsEmpty: function (elementId) {
        let input = document.getElementById(elementId);
        let value = input.value;

        return 0 === value.length;
    },

    IsValidEmail: function (elementId) {
        let input = document.getElementById(elementId);
        let value = input.value;

        //eslint-disable-next-line
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }
};

export default ValidInput;