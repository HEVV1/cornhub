export function useAnimateOnShow(propsIsItInViewPort: boolean[]) {
    const animateOnShow = (): void => {
        const viewPort: any = {
            height: window.innerHeight,
            width: window.innerWidth,
        };
        const animatedElements: any = document.getElementsByClassName('animated');
        for (let i: number = 0; i < animatedElements.length; i++) {
            const topEl: number = animatedElements[i].getBoundingClientRect().top;
            const bottomEl: number = animatedElements[i].getBoundingClientRect().bottom;
            if (viewPort.height >= topEl && bottomEl >= 0) {
                propsIsItInViewPort[i] = true;
            }
        }
    }
    return {
        animateOnShow
    };
}
