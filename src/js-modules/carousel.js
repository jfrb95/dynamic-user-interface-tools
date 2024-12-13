const log = console.log;

export function carousel(frame, carousel) {
    const numOfItems = carousel.childElementCount;
    const itemWidth = 700;

    const leftButton = document.querySelector("button.scroll-left");
    leftButton.addEventListener("click", scrollLeft);
    
    const rightButton = document.querySelector("button.scroll-right");
    rightButton.addEventListener("click", scrollRight);
    let pointer = 0;
    
    function goToImage(index) {
        carousel.style.right = `${index * itemWidth}px`;
    }

    function scrollLeft() {
        removeCurrentNode();
        pointer = ((pointer - 1) % numOfItems + numOfItems) % numOfItems;
        setCurrentNode();
        goToImage(pointer);
    }
    
    function scrollRight() {
        removeCurrentNode();
        pointer = (pointer + 1) % numOfItems;
        setCurrentNode();
        goToImage(pointer);
    }

    function navigate(event) {
        const node = event.target;

        if (!node.classList.contains("carousel-nav-node")) {
            return;
        }

        removeCurrentNode();
        pointer = Number(node.dataset.index);
        setCurrentNode();
        goToImage(pointer);
    }

    const carouselNavigation = document.querySelector(".carousel-navigation");
    carouselNavigation.addEventListener("click", navigate);

    function removeCurrentNode() {
        carouselNavigation.children.item(pointer)
            .classList.remove("current-node");
    }

    function setCurrentNode() {
        carouselNavigation.children.item(pointer)
            .classList.add("current-node");
    }

    for (let i = 0; i < numOfItems; ++i) {
        const navButton = document.createElement("button");
        navButton.classList.add("carousel-nav-node");
        if (i === pointer) {
            navButton.classList.add("current-node");
        }
        navButton.dataset.index = i;
        carouselNavigation.appendChild(navButton);
    }
}