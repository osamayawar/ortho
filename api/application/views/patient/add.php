<form class="form-horizontal">
	<div class="form-wrapper">
		<div class="form-group">
			<div class="col-md-2">
				<label for="gender">Initials</label>
				<select class="form-control" id="initials" name="initials">
					<option selected="selected">Mr. </option>
					<option> Miss. </option>
				</select>
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-6">
				<label for="firstname">First Name</label>
				<input type="text" class="form-control" id="firstname" name="firstname" placeholder="Enter your first name">
			</div>
			<div class="col-md-6">
				<label for="lastname">Last Name</label>
				<input type="text" class="form-control" id="lastname" name="lastname" placeholder="Enter your last name">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-12">
				<label for="address">Home Address</label>
				<input type="text" class="form-control" id="address" name="address" placeholder="Enter your address">
			</div>
		</div>


		<div class="form-group date">
			<div class="col-md-3">
				<label for="dob">Date of Birth</label>
				<input type="text" class="form-control" id="datepicker" name="dob" aria-describedby="calendaricon">
			</div>
			<div class="col-md-3">
				<label for="cellphone">Cell Phone</label>
				<input type="text" class="form-control" id="cellphone" name="cellphone" placeholder="Enter your mobile phone number">
			</div>
			<div class="col-md-6">
				<label for="lastname">Email Address</label>
				<input type="email" class="form-control" id="lastname" name="email" placeholder="Enter your email address">
			</div>
		</div>
		
		<div class="form-group">
			<div class="col-md-3">
				<label for="refdoctor">Referring Doctor</label>
				<select class="form-control" id="refdoctor" name="refdoctor">
					<option> Doctor 1 </option>
					<option> Doctor 2 </option>
					<option> Doctor 3 </option>
					<option> Doctor 4 </option>
					<option> Doctor 5 </option>
					<option> Doctor 6 </option>
				</select>
				<!-- <input type="text" class="form-control" id="refdoctor" name="refdoctor"> -->
			</div>
			<div class="col-md-3">
				<label for="refpatient">Referring Patient</label>
				<select class="form-control" id="refpatient" name="refpatient">
					<option> Patient 1 </option>
					<option> Patient 2 </option>
					<option> Patient 3 </option>
					<option> Patient 4 </option>
					<option> Patient 5 </option>
					<option> Patient 6 </option>
				</select>
			</div>
			<div class="col-md-6">
				<label for="attendingdoctor">Attending Doctor</label>
				<select class="form-control" id="attendingdoctor" name="attendingdoctor">
					<option> Doctor 1 </option>
					<option> Doctor 2 </option>
					<option> Doctor 3 </option>
					<option> Doctor 4 </option>
					<option> Doctor 5 </option>
					<option> Doctor 6 </option>
				</select>
			</div>
		</div>
	</div>
	<div class="form-group">	
		<div class="col-md-6">
			<div class="form-wrapper row-top-buffer">
				<b>Health Alerts</b>
				<div class="checkbox">
					<label>
						<input type="checkbox" value="">Option one is this and that&mdash;be sure to include why it's great
					</label>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox" value="">Option one is this and that&mdash;be sure to include why it's great
					</label>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-wrapper row-top-buffer">
				<b>Allergies</b>
				<div class="checkbox">
					<label>
						<input type="checkbox" value="">Option one is this and that&mdash;be sure to include why it's great
					</label>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox" value="">Option one is this and that&mdash;be sure to include why it's great
					</label>
				</div>
			</div>
		</div>
	</div>

	<div class="form-group">
		<div class="col-md-4">
			<div class="form-wrapper row-top-buffer">
				<label class="radio-inline">
						<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Treatment in progress
				</label>
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-wrapper row-top-buffer">
				<label class="radio-inline">
						<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Treatment Completed, Payment Due.
				</label>
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-wrapper row-top-buffer">
				<label class="radio-inline">
						<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Treatment Completed, Fully Paid.
				</label>
			</div>
		</div>
	</div>
	<div class="form-group">
	<div class="col-md-12">
		<button class="btn-block btn-success">Submit</button>
	</div>
	</div>
</form>

<script>
	JS.datepickerInit();
</script>