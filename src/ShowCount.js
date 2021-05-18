import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const  ShowCount = (props) => {


function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}



var my_months= new Array('AVIV','ZIV','SIVAN');




var d = new Date();

var start_of_year = 4;
var start_month = 4; 
var start_day=14 ;
var number_of_days_in_month = daysInMonth(4,2021)-start_day; 




var current_Month=d.getMonth();
var current_day=d.getDate(); 
var my_date ; 



my_date= my_months[0]+" " + ((number_of_days_in_month + current_day)+1); 



var countDownDate = new Date("June 20, 2021 15:37:25").getTime();
function hideintro(){
	
	document.getElementById("news").style.visibility="hidden"; 
	
	document.getElementById("contenedor").style.display="grid"; 
	
}
// Update the count down every 1 second

  // Get today's date and time
  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var weeks = Math.ceil(((50-days)-1)/7);
var display_days = (50-days)+1;






return(
<div style={{width:"300px",height:"200px",fontSize:"30px",backgroundColor:"purple",boxShadow:"2px 1px white",borderradius: "10px"}} >
Conteo del Ómer Semana #{weeks}<br/>
Fecha #{my_date} <br/>
Día #{display_days} <br/>
</div>

)
}

export default ShowCount