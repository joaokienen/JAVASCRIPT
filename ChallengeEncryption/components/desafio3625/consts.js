import $ from "jquery";
import Router from 'next/router';
import nookies from 'nookies';

export const Fin = (e) => {
    const phraseToSearch = /Confirmar/;
    const name = e.target.outerText;
    if (!phraseToSearch.test(e.target.outerText)) {
        e.currentTarget.append( " - Confirmar?" );
        setTimeout(() => {e.target.innerHTML = name;}, 1000);
    }
    else {
        const name = $('#inputname').val();
        $("#phrase1, #phrase2").css("opacity", "0.1");
        $("#phrase3").text("Resposta registrada!");
        $("#result").css("pointer-events", "none");
        nookies.set(null, 'jcwn83nd12xnbbbe3y8793n3knqcuhg72m2c29', 'jcwn83nd12xnbbbe3y8793n3knqcuhg72m2c29', {maxAge: 10000, path: '/'});
        setTimeout(() => {$( "#phrase3" ).text(`Obrigado ${name}!`);}, 3000);
        setTimeout(() => {Router.replace('/null');}, 10000);
    }
}

if (typeof window === 'object') {
    setTimeout(() => {
      $("#name").css("opacity", "1");
  }, 10000);
}

export const OK = () => {
    const name = $('#inputname').val();
    if (name == "") {
        $("#inputname").focus()
    } else {
        $("#inputname").css("pointer-events", "none");
        $("#buttonname").css("pointer-events", "none");
        $("#inputname").css("opacity", "0.8");
        $("#buttonname").css("opacity", "0.4");
        $("#phrase1, #phrase2, #phrase3").css("pointer-events", "auto");
        $("#result").css("display", "block");
        setTimeout(() => {$("#result").css("opacity", "1");}, 3000);
    }
}