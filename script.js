class Main {
    constructor() {
        console.log("Main constructor called");
        this.init();
    }

    init() {
        console.log("Main initialized");
        const url = this.getCurrentLocation();
        console.log("Current URL:", url);
        const input = this.getDOCUMENT_URL_Input();
        if (input)
        {
            input.forEach(input => {
                input.value = url;
            })
        }
    }

    getCurrentLocation() {
        return window.location.href;
    }

    getDocumentURL() {
        return document.URL;
    }

    getDOCUMENT_URL_Input() {
        const input = document.querySelectorAll("input[data-url]");
        if ( input.length )
        {
            console.log("Input founded.", input);
            return input;
        }
        else
        {
            console.warn("Input not founded.");
        }
    }
}

const main =  new Main();