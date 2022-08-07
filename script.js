

let refIdAgeWise = '4b03bc25-ab4b-46c0-bb3e-0c839c9915c5';
let refIdLocation = '5d63b527-e2b8-4c42-ad6f-677f14433520';
let sqlQueryForLocation, sqlQueryForAgeWise;
let todayDate = formatDate(new Date()) ;

function displayDate() {
    todayDate = $("#startDate").val();
    alert ("date =" +todayDate);
//    console.log($("#btnDate"));
    sqlQueryForLocation = 'https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from "' +
                                refIdLocation + '" WHERE notification_date LIKE \'' + todayDate + '\'';

    console.log(sqlQueryForLocation);

    sqlQueryForAgeWise = 'https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from "' +
                                refIdAgeWise + '" WHERE notification_date LIKE \'' + todayDate + '\'';

    $('#example').DataTable().ajax.url(sqlQueryForLocation).load();

}

function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }





$(document).ready(function () {
    
    $("#startDate").datepicker({
        format: 'yyyy-mm-dd',
        // startDate: '-3d',
        endDate: '-2d',
        daysOfWeekDisabled: "0,6",
        todayHighlight: true
    });

    


     
   
    console.log(todayDate);
    

    sqlQueryForLocation = 'https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from "' +
                                refIdLocation + '" WHERE notification_date LIKE \'' + todayDate + '\'';

    console.log(sqlQueryForLocation);

    sqlQueryForAgeWise = 'https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from "' +
                                refIdAgeWise + '" WHERE notification_date LIKE \'' + todayDate + '\'';
    
    $('#example').DataTable({
        processing: true,
        ajax: 
        {
            url: sqlQueryForLocation,
            dataSrc: "result.records",
            type: 'GET',
            dataType: 'jsonp',
            cors: true ,
            contentType:'application/json',

        },
        columns: [
            {data: "_id" },
            {data: "lga_name19" },
            {data: "lhd_2010_name"},
            {data: "postcode"},
            {data: "confirmed_by_pcr"},
            {data: "confirmed_cases_count"}
        ],
        pageLength: 6,
        filter: true,
        deferRender: true,
        // scrollY: 200,
        scrollCollapse: true,
        // scroller: true
        
    });
});










/* $(document).ready(function () {
    
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
});*/

// ajax: {
//     "url": "https://data.nsw.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT * from '5d63b527-e2b8-4c42-ad6f-677f14433520' WHERE notification_date LIKE '2022-08-03'",
//     "type": "GET"
//   },

    // function getCurrentDate() {
    //     // var today = new Date();
    //     var curdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //     return curdate;
    // }