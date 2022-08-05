$(document).ready(function () {
    
    $('#example').DataTable({
        processing: true,
        ajax: 'data.json',
        columns: [
            { data: '_id' },
            { data: 'lga_name19' },
            {data: 'lhd_2010_name'},
            {data: 'postcode'},
            {data: 'confirmed_by_pcr'},
            {data: 'confirmed_cases_count'}
        ],
        pageLength: 8,
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