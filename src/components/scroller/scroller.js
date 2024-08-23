export function initializeScrollers() {
    const scrollers = document.querySelectorAll(".scroller__container");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation(scrollers);
    }
}

export function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

export function CleanUpScroller() {
    const scrollers = document.querySelectorAll(".scroller__container");
    scrollers.forEach((scroller) => {
        scroller.removeAttribute("data-animated"); // Remove animation attributes
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const duplicatedItems = scrollerInner.querySelectorAll('[aria-hidden="true"]');
        duplicatedItems.forEach((item) => {
            scrollerInner.removeChild(item); // Remove duplicated items
        });
    });
}
