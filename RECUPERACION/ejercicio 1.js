function contarParesImpares(cedula) {
            var total = 0;
            var pares = 0;
            var impares = 0;
            let arrayNumeros = Array.from(String(cedula), Number);
            for (let i = 0; i < arrayNumeros.length; i++) {
                total += arrayNumeros[i];
                if (arrayNumeros[i] %2 == 0) {
                    pares++;
                } else {
                    impares++;
                }
            }
            console.log("La suma de los números es = " + total);
            console.log("La cantidad de los números pares es = " + pares);
            console.log("La cantidad de los números impares es = " + impares);
        }
        contarParesImpares(987654);