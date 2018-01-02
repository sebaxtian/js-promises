// Uso de promesas en jQuery
// Deferred Objects
(function($) {

    var serverURL = 'http://172.104.91.187';

    /*
    // 1.
    // CALLBACK HELLS
    $.ajax({
        url: serverURL + '/users',
        headers: {
            'Content-Type': 'application/json',
            'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80ignk0skp9Jp6NQ3'
        },
        success: function(response) {
            console.info(response);
            $.ajax({
                url: serverURL + '/projects',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80ignk0skp9Jp6NQ3'
                },
                success: function(response) {
                    console.info(response);
                    $.ajax({
                        url: serverURL + '/issues',
                        headers: {
                            'Content-Type': 'application/json',
                            'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80ignk0skp9Jp6NQ3'
                        },
                        success: function(response) {
                            console.info(response);
                        },
                        error: function(reason) {
                            console.error("Error !! ", reason);
                        }
                    });
                },
                error: function(reason) {
                    console.error("Error !! ", reason);
                }
            });
        },
        error: function(reason) {
            console.error("Error !! ", reason);
        }
    });
    // CALLBACK HELLS
    */
    // 2.
    function getDataByAJAX(url) {
        // Deferred
        // Promise A+
        // then
        // promise()
        return $.ajax({
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80ignk0skp9Jp6NQ3'
            }
        }).promise();
    }

    // 2.
    getDataByAJAX(serverURL + '/users')
        .then(getDataByAJAX(serverURL + '/projects'))
        .then(getDataByAJAX(serverURL + '/issues'));

    // 3.
    $.when(
        getDataByAJAX(serverURL + '/users'),
        getDataByAJAX(serverURL + '/projects'),
        getDataByAJAX(serverURL + '/issues')
    ).then(function (valueUsers, valueProjects, valueIssues) {
        console.log(valueUsers, valueProjects, valueIssues);
    });

    // 4.
    Promise.all([
        getDataByAJAX(serverURL + '/users'),
        getDataByAJAX(serverURL + '/projects'),
        getDataByAJAX(serverURL + '/issues')
    ]).then(function (value) {
        console.log(value);
    });


})(jQuery);