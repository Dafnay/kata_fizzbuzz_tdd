//Caso 1. Cuando el usuario digite un número divisible por 3, devuelve Fizz.

//Caso 2. Cuando el usuario digite un número divisible por 5, devuelve Buzz,

//Caso 3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz

//Caso 4. Cuando el usuario digite un número que no sea divisible por 3 y 5, devuelve el número

const FizzBuzz = require('../fizzBuzz')


describe(
    'Verificar que cuando 3 y 5 tengan divisores comunes se retorne FizzBuzz',()=>{
        test('caso 1 devuelve Fizz cuando sea divisible por 3',() =>{
            /*
            *GHERKING TEST (Given - When -Then)
            *Given / dado un número
            *When / cuándo sea divisible entre 3
            *Then / entonces devuelva "Fizz"
            */

            //ARRANGE: Definimos las variables  usar
             const fizz_buzz = new FizzBuzz();
             let numero = 3;
             let respuesta_esperada = "Fizz";

            //ACT: ejecutar el escenario

             const respuesta = fizz_buzz.retornar_fizz_buzz(numero);

             //ASSERT: comprobar el escenario
              expect(respuesta).toBe(respuesta_esperada);
            
            

        }

    )}
)

describe(
    'Verificar que cuando 3 y 5 tengan divisores comunes se retorne FizzBuzz',()=>{
        test('caso 2 devuelve Buzz cuando sea divisible por 5',() =>{
           
             const fizz_buzz = new FizzBuzz();
             let numero = 10;
             let respuesta_esperada = "Buzz";

             const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
             expect(respuesta).toBe(respuesta_esperada);
            
            

        }

    )}
)

describe(
    'Verificar que cuando 3 y 5 tengan divisores comunes se retorne FizzBuzz',()=>{
        test('caso 3 devuelve FizzBuzz cuando sea divisible por 15',() =>{
          
             const fizz_buzz = new FizzBuzz();
             let numero = 15;
             let respuesta_esperada = "FizzBuzz"; 

             const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
             expect(respuesta).toBe(respuesta_esperada);
            
            

        }

    )}
)
describe(
    'Verificar que cuando el número no sea divisible por 3 y 5 retorne el número',()=>{
        test('caso 4 devuelve el número cuando no divisible por 3 y 5',() =>{
          
             const fizz_buzz = new FizzBuzz();
             let numero = 14;
             let respuesta_esperada = numero; 

             const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
             expect(respuesta).toBe(respuesta_esperada);
            
            

        }

    )}
)