//diferença entre arrow function e funções nominais ou expressões de função.

const resultado = document.querySelector ("#resultado");

let myFunc1 = {

    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);

    },
};
//chamando a função.

myFunc1.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);


myFunc2.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

//console.log(...arguments);
let user = {
    name = "Iris Gonçalves";
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "ArrowFunction");
    },
    usandoNominal: () => {
        console.log("Meu nome é", this.name, "ArrowNominal");
    },
};

user.usandoArrow();
user.usandoNominal();
/**
 
{
    "name":"Glaucio Daniel",
    "email":"glauciodaniel@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 /** 
