const dia = new Date().getDate();
let destinRitas = `destinRita${dia}`;
destinRitas = {};

Object.defineProperty(destinRitas, 'proper1', {value: "Lopen1", writable: false});
Object.defineProperty(destinRitas, 'proper2', {value: "Lopen2", writable: false});

export default function Home () {
   console.log(destinRitas.proper2);
    return null;
}