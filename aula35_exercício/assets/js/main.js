function elementGenerator () {
    const elements = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]
    
    function createDiv () {
        const div = document.createElement('div');
        return div;
    }

    function createElements () {
        const tags = [];

        for (let i = 0; i < elements.length; i++) {
            let tag = document.createElement(elements[i].tag)
            tags.push(tag);
        }

        return tags;
    }

    function addElements () {
        const section = document.querySelector('.container');
        const div = createDiv();
        const tags = createElements();

        section.appendChild(div);

        for (let i = 0; i < tags.length; i++) {
            tags[i].innerText = elements[i].texto;
            div.appendChild(tags[i]).style.margin=0;
        }
    }

    addElements();
}

elementGenerator(); 

