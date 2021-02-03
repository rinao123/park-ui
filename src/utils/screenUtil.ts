export default class ScreenUtil {
    static readonly DESIGN_WIDTH = 3840;
    static readonly DESIGN_HEIGHT = 1080;

    static setRem = (): void => {
        const widthRate = window.innerWidth / ScreenUtil.DESIGN_WIDTH;
        const heightRate = window.innerHeight / ScreenUtil.DESIGN_HEIGHT;
        const rate = Math.min(widthRate, heightRate);
        document.documentElement.style.fontSize = rate + "px";
    }
    
}
