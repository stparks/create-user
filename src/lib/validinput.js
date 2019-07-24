const ValidInput = {

    // this is added just for the fun of it
    StartsWithS: function (elementId) {
        if (this.IsEmpty(elementId))
            return false;

        return 0 === document.getElementById(elementId).value.indexOf("s");
    },

    IsEmpty: function (elementId) {
        let input = document.getElementById(elementId);
        let value = input.value;

        return 0 === value.length;
    },


    IsValidEmail: function (elementId) {
        let input = document.getElementById(elementId);
        let value = input.value;

        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },




};

export default ValidInput;