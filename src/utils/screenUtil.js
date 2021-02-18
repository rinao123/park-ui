export default class ScreenUtil {
    static DESIGN_WIDTH = 3840;
    static DESIGN_HEIGHT = 1080;

    static setRem = () => {
        const widthRate = document.body.clientWidth / ScreenUtil.DESIGN_WIDTH;
        const heightRate = document.body.clientHeight / ScreenUtil.DESIGN_HEIGHT;
        const rate = Math.min(widthRate, heightRate);
        document.documentElement.style.fontSize = "1px";
        document.body.style = `transform: scale(${rate});transform-origin: left top;background-size: "100% 100%";`;
    }
}