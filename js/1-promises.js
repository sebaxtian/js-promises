// Simular Operaciones Asincronas
// Sincronizar Operaciones Asincronas
// Promises A+ https://promisesaplus.com/
(function() {

    function getUsers() {
        /*
        // 1.
        setTimeout(function() {
            console.log("Users are ready !!");
        }, 800);
        */
        /*
        // 2.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Users are ready !!");
                // Termina la promesa
                resolve();
            }, 800);
        });
        */
        // 3.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Users are ready !!");
                // Termina la promesa, retorna un valor
                resolve([1, 2 ,3, 4]);
            }, 800);
        });
    }

    function getProjects() {
        /*
        // 1.
        setTimeout(function() {
            console.log("Projects are ready !!");
        }, 400);
        */
        /*
        // 2.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Projects are ready !!");
                // Rechaza la promesa (Posible error)
                reject();
            }, 400);
        });
        */
        // 3.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Projects are ready !!");
                // Termina la promesa, retorna un valor
                //resolve(["a", "b", "c"]);
                reject("La Promesa no pudo ser completada");
            }, 400);
        });
    }

    function getIssues() {
        /*
        // 1.
        setTimeout(function() {
            console.log("Issues are ready !!");
        }, 700);
        */
        /*
        // 2.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Issues are ready !!");
                // Termina la promesa
                resolve();
            }, 700);
        });
        */
        // 3.
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Issues are ready !!");
                // Termina la promesa, retorna un valor
                resolve([true, false]);
            }, 700);
        });
    }

    /*
    // 1.
    getUsers();
    getProjects();
    getIssues();
    */
    /*
    // 2.
    getUsers()
        .then(getProjects)
        .then(getIssues)
        .catch(function(reason) {
            console.error("Error !!", reason);
        });
    */
    // 3.
    getUsers()
        .then(function (value) {
            console.log(value);
            // Generar una excepcion
            //throw "Error personalizado";
            return getProjects();
        })
        .then(function (value) {
            console.log(value);
            return getIssues();
        })
        .then(function (value) {
            console.log(value);
        })
        .catch(function(reason) {
            console.error("Error !!", reason);
        });

})();