document.addEventListener('DOMContentLoaded', function () {
    var VERSION_NUMBER = 1.0
        API_CLIENT = 'CHROME_EXT';
    function getRandomQuote() {
        $.get("http://api.irkfdb.in/facts/random?api_type=" + API_CLIENT + "&version_number=" + VERSION_NUMBER, function (data) {
            $("#fact").html(data.resultSet.data[0].fact);
            setMetaInfo('categories', 'Categories', data.resultSet.data[0].categories);
            setMetaInfo('sources', 'Sources', data.resultSet.data[0].sources);
        });
    }

    function setMetaInfo(id, title, data) {
        if (data.length > 0) {
            $('#' + id).html('');
            var $title = $('<b>' + title + '</b><br />');
            var $data = $('<kbd>' + data.join('</kbd><br /><kbd>', data) + '</kbd>');
            $('#' + id).append($title).append($data);
        }
    }

    $("#fetch-another-fact").bind("click", function () {
        getRandomQuote();
    });
    getRandomQuote();
}, false);
