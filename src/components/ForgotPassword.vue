<template>
	<div class="container ">
		<div class="row">

			<div class="col-md-12 "  v-if="seen" >

				<h2>Forgot your password?</h2>
				<p>Don't worry, resetting your password is easy, just tell us the email address you registered with My GPS Buddy.</p>
				<div class="col-md-4 text-left " style="margin:auto;float:none;margin-top:20px">
					<form>
						<div class="form-group">
							<input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email address">
						</div>
						<button type="button"  v-on:click="forgotPassword" class="btn btn-primary">Submit</button>
					</form>

				</div>
			</div>
			<div class="col-md-12 "  v-if="!seen" >

				<h2>Reset your password</h2>
				<p>We have sent a reset password to your email. Please click the reset password link to set your new password.</p>
			</div>
				


		</div>
		<div class="row">
		
				</div>

	</div>
	
</template>

<script>
	export default {
		data: function () {
			return {
				email: '',
				id:'',
				seen: true,
			};
		}
		,methods: {
			forgotPassword (e) {




				this.axios.post('http://tracking.findplace2stay.com/index.php/api/member/forgotpassword', {
					email:this.email
				}).then(res => {
					if(res.data.status=="202"){
							if(res.data.results==""){
								this.seen=false;
							}else{
								this.email="";
								alert(res.data.results);
							}
					}else{
						console.log(res.data)
						alert("Something went wrong");
					}
				})
				.catch(e => {
					console.log(e)
					alert("Something went wrong");
				})
			}
		}
	};
</script>

<style scoped>
</style>