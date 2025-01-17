function changeTheme(val){
    if (val == 1) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        let codecontainers = document.getElementsByClassName("code-container");
        let codeElements = document.getElementsByClassName("code");
        for (let i = 0; i < codeElements.length; i++) {
            codeElements[i].style.backgroundColor = 'rgb(42, 42, 42)';
            codeElements[i].style.color = 'white';
        }
        for (let i = 0; i < codecontainers.length; i++) {
            codecontainers[i].style.backgroundColor = 'rgb(63, 63, 63)';
        }
        let keywords = document.getElementsByClassName("keyword");
        for (let i = 0; i < keywords.length; i++) {
            keywords[i].style.color = 'lightskyblue';
        }
        let objects = document.getElementsByClassName("object");
        for (let i = 0; i < keywords.length; i++) {
            objects[i].style.color = "lightseagreen"
        }
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        let codeElements = document.getElementsByClassName("code");
        for (let i = 0; i < codeElements.length; i++) {
            codeElements[i].style.backgroundColor = 'gray';
            codeElements[i].style.color = 'black';
        }
        let codecontainers = document.getElementsByClassName("code-container");
        for (let i = 0; i < codecontainers.length; i++) {
            codecontainers[i].style.backgroundColor = 'darkgray';
        }
        let keywords = document.getElementsByClassName("keyword");
        for (let i = 0; i < keywords.length; i++) {
            keywords[i].style.color = 'blue';
        }
        let objects = document.getElementsByClassName("object");
        for (let i = 0; i < objects.length; i++) {
            objects[i].style.color = "rgb(102, 227, 164)"
        }
    }
}