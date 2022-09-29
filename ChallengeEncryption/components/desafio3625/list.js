import $ from "jquery";

const list = [
    'uma cabra surfou no mar',
    'uma zebra surfou no mar',
    'uma cobra surfou no mar',
    'uma arara surfou no mar',
    'uma aguia surfou no mar',
    'uma cabra fugiu no mar',
    'uma zebra fugiu no mar',
    'uma cobra fugiu no mar',
    'uma arara fugiu no mar',
    'uma aguia mirou no mar',
    'uma cabra mirou no mar',
    'uma zebra mirou no mar',
    'uma cobra mirou no mar',
    'uma arara mirou no mar',
    'uma aguia mirou no mar'
];

export const GO = () => {
    const sorted = [];
    while(sorted.length < 2){
        const r = Math.floor(Math.random() * list.length);
        if(sorted.indexOf(r) === -1) sorted.push(r);
    }

    const mix1 = sorted[0];
    const mix2 = sorted[1];
    const mixZ1 = list[mix1];
    const mixZ2 = list[mix2];

    $( "#phrase1" ).text(mixZ1);
    $( "#phrase2" ).text(mixZ2);

}
