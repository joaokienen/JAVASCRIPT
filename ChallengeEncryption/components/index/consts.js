import $ from "jquery";
import Router from 'next/router';

if (typeof window === 'object') {
    setTimeout(() => {
      $("#butt0").css("opacity", "1");
  }, 10000);
}

export const Init = () => {
  $("#butt0").css("opacity", "0.1");
  setTimeout(() => {
    Router.replace('/desafio3625');
  }, 3000);
}