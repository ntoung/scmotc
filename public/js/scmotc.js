'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	$('.project a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		// this is the URL we'll call
		var url_call = '/project/'+idNumber;

		// How to respond to the GET request
		function addProjectDetails(project_json) {
			// We need to compute a display string for the date
			// Search 'toLocaleDateString' online for more details.
			var date_obj = new Date(project_json['date']);
			var options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			var display_date = date_obj.toLocaleDateString('en-US', options);

			// compose the HTML
			var new_html =
			'<div class="project-date">'+display_date+'</div>'+
			'<div class="project-summary">'+project_json['summary']+'</div>'+
			'<button class="project-delete btn btn-default" '+
			'type="button">delete</button>';

			// get the DIV to add content to
			var details_div = $('#project' + idNumber + ' .details');
			// add the content to the DIV
			details_div.html(new_html);

			details_div.find('.project-delete').click(function(e) {
				$.post('/project/'+idNumber+'/delete', function() {
					window.location.href = '/';
				});
			});
		}

		// issue the GET request
		$.get(url_call, addProjectDetails);
	});

$('#newApplicationSubmitButton').click(function(e)){
	console.log('clicked');
	var name = $('#p2').val();
	var name_first = $('#p2').val();
	var name_last = $('#p2').val();
	var name_middle = $('#p2').val();

	var address = $('#p3').val();
	var address_state = $('#p3').val();
	var address_city = $('#p3').val();
	var address_country = $('#p3').val();
	var address_zip = $('#p3').val();
	var address_street = $('#p3').val();

	var email = $("#p4").val();	

	var telephone_home = $('#p5').val();
	var telephone_cell = $('#p6').val();

	var dob = $('#p7').val();

	var existing_member = $('#p8').val();
	var existing_member_explain = $('#p9').val();

	var current_school = $('#p10').val();
	var current_school_gradDate = $('#p11').val();
	var current_school_address = $('#p12').val();
	var current_school_address_street = $('#p12').val();
	var current_school_address_city = $('#p12').val();
	var current_school_address_state = $('#p12').val();
	var current_school_address_zip = $('#p12').val();
	var current_school_address_country = $('#p12').val();
	var current_school_phone = $('#p13').val();
	var current_school_principal_name = $('#p14').val();
	var current_school_counselor_name = $('#p15').val();

	var future_plans = $('#p16').val();
	var future_plans_university = $('#p16').val();
	var future_plans_cc = $('#p16').val();
	var future_plans_vocational = $('#p16').val();
	var future_plans_institute = $('#p17').val();
	var future_institute_mailing_address = $('#p18').val();
	


	var school_response = $('#p19').val();

	var living_plan = $('#p20').val();

	var attendance = $('#p21').val();


	var financial_info = $('f1').val();
	var financial_info_employed = $('f1').val();
	var financial_info_emolyers_name = $('f2').val();
	var financial_info_income = $('f3').val();
	var financial_info_employer_number = $('f5').val();
	var financial_info_mailing_address = $('f4').val();
	var financial_info_mailing_address_street = $('f4').val();
	var financial_info_mailing_address_zip = $('f4').val();
	var financial_info_mailing_address_state = $('f4').val();
	var financial_info_mailing_address_country = $('f4').val();
	var financial_info_mailing_address_city = $('f4').val();
	var financial_info_work_during_school = $('f6').val();

	var dependent = $('f4').val();
	var dependent_children_amount = $('d1').val();
	var dependent_children_ages = $('d2').val();

	var dependent_father_name = $('d3').val();
	var dependent_living_with_father = $('d4').val();
	var dependent_father_address = $('d5').val();
	var dependent_father_number = $('d6').val();
	var dependent_father_employer = $('d7').val();
	var dependent_father_income = $('d8').val();
	var dependent_father_work_address = $('d9').val();

	var dependent_mother_name = $('d10').val();
	var dependent_living_with_mother = $('d11').val();
	var dependent_mother_address = $('d12').val();
	var dependent_mother_number = $('d13').val();
	var dependent_mother_employer = $('d14').val();
	var dependent_mother_income = $('d15').val();
	var dependent_mother_work_address = $('d16').val();

	var dependent_other_income 
	var dependent_other_obligations = $('#text2').val();
	var dependent_explanation
	var dependent_contribution
	var dependent_other_scholarships


	var independent = $('#i1').val();
	var independent_status = $('#i1').val();
	var independent_children = $('#i2').val();
	var independent_children_ages = $('#i3').val();
	var independent_spouse_name = $('#i4').val();
	var independent_income = $('#i5').val();

	var independent_spouse_employer_address = $('#i6').val();
	var independent_spouse_employer_telephone = $('#i7').val();
	var independent_sources_of_income = $('#text6').val();
	var independent_financial_obilgations = $('#text7').val();
	var independent_special_circumstances = $('#text8').val();
	var independent_edu_contribution = $('#text9').val();
	var independent_other_scholarships = $('#text10').val();

	var independent_work_experience = $('#11').val();
	var independent_place_of_employment1 = $('#11').val();
	var independent_job_title1 = $('#w2').val();
	var independent_started1 = $('#w3').val();
	var independent_ended1 = $('#w4').val();
	var independent_hourly_rate1 = $('#w5').val();
	var independent_full_part1 = $('#w6').val();

	var independent_place_of_employment2
	var independent_job_title2
	var independent_started2
	var independent_ended2
	var independent_hourly_rate2
	var independent_full_part2

	var independent_place_of_employment3
	var independent_job_title3
	var independent_started3
	var independent_ended3
	var independent_hourly_rate3
	var independent_full_part3

	var independent_place_of_employment4
	var independent_job_title4
	var independent_started4
	var independent_ended4
	var independent_hourly_rate4
	var independent_full_part4

	var independent_extracurricular = $('#e1').val();
	var independent_year1 = $('#e1').val();
	var independent_activity1 = $('#e2').val();
	var indepedent_position1 = $('#e3').val();

	var independent_year2 = $('#e4').val();
	var independent_activity2 = $('#e5').val();
	var indepedent_position2 = $('#e6').val();

	var independent_year3 = $('#e7').val();
	var independent_activity3 = $('#e8').val();
	var indepedent_position3 = $('#e9').val();

	var independent_year4
	var independent_activity4
	var indepedent_position4

	var independent_year5
	var independent_activity5
	var indepedent_position5

	var independent_year6
	var independent_activity6
	var indepedent_position6

	var independent_year7
	var independent_activity7
	var indepedent_position7

	var independent_year8
	var independent_activity8
	var indepedent_position8

	var independent_year9
	var independent_activity9
	var indepedent_position9
	
	var independent_year10
	var independent_activity10
	var indepedent_position10

	var independent_year11
	var independent_activity11
	var indepedent_position11

	var independent_year12
	var independent_activity12
	var indepedent_position12

	var independent_year13
	var independent_activity13
	var indepedent_position13

	var independent_year14
	var independent_activity14
	var indepedent_position14

	var independent_year15
	var independent_activity15
	var indepedent_position15

	var independent_year16
	var independent_activity16
	var indepedent_position16

	var application_checklist = $('#a1').val();
	var app_complete = $('#a1').val();
	var current_transcript = $('#a2').val();
	var rec_letters = $('#a3').val();
	var written_essay = $('#a4').val();
	var picture_of_self = $('#a5').val();




}
$('#newApplicationSubmitButton').click(function(e) {
	console.log('clicked');
	var title = $('#p1').val();
	console.log(title);
	var image_url = $('#new-project-form #image_url').val();
	var date = $('#new-project-form #date').val();
	var summary = $('#new-project-form #summary').val();
	var json = {
		'project_title': title,
		'image_url': image_url,
		'date':  date,
		'summary': summary
	};
	$.post('/project/new', json, function() {
			window.location.href = '/'; // reload the page
		});
});

$('#guidelineSignature').signature({guideline: true});
}