<template>
	<div class="container ">
		<div class="row">

			<div class="col-md-12 "  v-if="seen" >

				<h2>Change your password?</h2>
				<div class="col-md-4 text-left " style="margin:auto;float:none;margin-top:20px">
					<form>
						<div class="form-group">
							<input type="password" class="form-control" id="currentpassword" v-model="currentpassword" placeholder="Enter current password">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="newpassword" v-model="newpassword" placeholder="Enter new password">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="retypepassword" v-model="retypepassword" placeholder="Re-type new password">
						</div>
						<button type="button"  v-on:click="changePassword" class="btn btn-primary">Submit</button>
					</form>

				</div>
			</div>
			<div class="col-md-12 "  v-if="!seen" >

				<h2>You successfully change your password</h2>
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
				email: 'aquinof@rchsp.med.sa',
				userid:'66b56c644fe4e46ad8694e34965c24318c13b3d93504ea5f4a746b0bf19a8a57',
				currentpassword:'',
				newpassword:'',
				retypepassword:'',
				seen: true,
			};
		}
		,methods: {
			changePassword (e) {
				if(this.currentpassword==""){
					alert("Please enter current password");
					return false;
				}
				if(this.newpassword==""){
					alert("Please enter new password");
					return false;
				}
				if(this.retypepassword!=this.newpassword){
					alert("Password mismatch");
					return false;
				}



				this.axios.post('http://tracking.findplace2stay.com/index.php/api/member/changepassword', {
					email:this.email,
					userid:this.userid,
					currentpassword:this.currentpassword,
					newpassword:this.newpassword
				}).then(res => {
					if(res.data.status=="202"){
							if(res.data.results==""){
								this.seen=false;
							}else{
								this.currentpassword="";
								this.newpassword="";
								this.retypepassword="";
							}
					}else{
						alert("Something went wrong");
					}
				})
				.catch(e => {
					alert("Something went wrong");
				})
			}
		}
	};
</script>

<style scoped>
</style>