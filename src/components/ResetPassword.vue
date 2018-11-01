<template>
	<div class="container ">
		<div class="row">

			
			<div class="col-md-12 "  v-if="seen" >

				<h2>Reset your password</h2>
				<div class="col-md-4 text-left " style="margin:auto;float:none;margin-top:20px">
					<form>
						<div class="form-group">
							<input type="password" class="form-control" id="newpassword" v-model="password" placeholder="Enter your new password">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="retypepassword" v-model="retypepassword" placeholder="Re-type your new password">
						</div>
						<button type="button"  v-on:click="resetPassword" class="btn btn-primary">Submit</button>
					</form>

				</div>
			</div>

			<div class="col-md-12 "  v-if="!seen" >
				<h2>Your password has been reset</h2>
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
					seen: true,
					password: '',
					retypepassword:'',
			};
		}
		,methods: {
			resetPassword (e) {
				if(this.password==this.retypepassword){
					var mode=this.$route.query.mode;
					var uid=this.$route.query.uid;

					this.axios.post('http://tracking.findplace2stay.com/index.php/api/member/resetpassword', {
						token:mode,
						uid:uid,
						password:this.password,
					}).then(res => {
						if(res.data.status=="202"){
								if(res.data.results==""){
									this.seen=false;
								}else{
									this.password="";
									this.retypepassword="";
									alert(res.data.results);
								}
						}else{
							console.log(res);
							alert("Something went wrong");
						}
					})
					.catch(e => {
						console.log(e)
						alert("Something went wrong");
					})
				}else{
					alert("Password mismatch");
				}
			}
		}
	};
</script>

<style scoped>
</style>