//external style results in a brief moment of not-hidden on page
//  load. Inline is preferred because of this

export function dropDown(button, menu) {
    button.addEventListener('click', () => {
        let style = menu.style;
        style.display === 'none'
            ? style.display = ''
            : style.display = 'none';
    });
}