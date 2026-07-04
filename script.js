 let inputBox = document.getElementById("data");
        let button = document.getElementById("btn");

        button.addEventListener("click", paragraph);

        function paragraph() {

            let text = inputBox.value;

            let trimmed = text.trim();
            let parts = trimmed.split(" ");
            let words = parts.filter(p => p !== "").length;

            let characters = text.length;

            let withoutSpaces = text.replace(/\s/g, "");
            let charactersWithoutSpaces = withoutSpaces.length;

            let readingTime = (words / 200).toFixed(2);

            document.getElementById("words").innerText = words;
            document.getElementById("chrts").innerText = characters;
            document.getElementById("chsp").innerText = charactersWithoutSpaces;
            document.getElementById("rdtm").innerText = readingTime;
        }