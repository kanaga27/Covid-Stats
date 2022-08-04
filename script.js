$(document).ready(function () {
    
    $('#example').DataTable({
        processing: true,
        ajax: 'data.json',
        columns: [
            { data: '_id' },
            { data: 'postcode' }
        ],
        pageLength: 10,
        filter: true,
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true
    });
});

// ajax: {
//     "url": "https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from '5d63b527-e2b8-4c42-ad6f-677f14433520' WHERE notification_date LIKE '2022-08-03'",
//     "type": "GET"
//   },