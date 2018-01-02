// Simular Operaciones Asincronas
// Sincronizar Operaciones Asincronas
(function() {

    function getUsers() {
        /*
        setTimeout(function() {
            console.log("Users are ready !!");
        }, 800);
        */
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Users are ready !!");
                // Termina la promesa
                resolve();
            }, 800);
        });
    }

    function getProjects() {
        /*
        setTimeout(function() {
            console.log("Projects are ready !!");
        }, 400);
        */
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Projects are ready !!");
                // Rechaza la promesa (Posible error)
                reject();
            }, 400);
        });
    }

    function getIssues() {
        /*
        setTimeout(function() {
            console.log("Issues are ready !!");
        }, 700);
        */
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("Issues are ready !!");
                // Termina la promesa
                resolve();
            }, 700);
        });
    }

    /*
    getUsers();
    getProjects();
    getIssues();
    */
    getUsers()
        .then(getProjects)
        .then(getIssues)
        .catch(function(reason) {
            console.error("Error !!", reason);
        });

})();