import './assets/scss/all.scss';
import AOS from 'aos';

console.log("Hello world!");

AOS.init({
    easing: "ease", // AOS 動畫的默認緩動
    once: true, // 是否動畫應該只發生一次 - 向下滾動時
    duration: 800
  });