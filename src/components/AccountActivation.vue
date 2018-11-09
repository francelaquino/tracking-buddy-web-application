<template>
	<div class="container ">
		<div class="row">

			
			<div class="col-md-12 "  v-if="completed==true" >

				<h2>Account Activation</h2>
				<p><b>Congratulations!</b> You have completed the registration.</p>
                <p>You can now login using your email and password you registered.</p>
			</div>

			<div class="col-md-12 "  v-if="completed==false" >
				<h2>Account Activation</h2>
                <p>Invalid account activation request.</p>
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
					completed: null,
					password: '',
					retypepassword:'',
			};
		}
		,mounted: function () {
                    var mode=this.$route.query.mode;
					var uid=this.$route.query.uid;

					this.axios.post('http://tracking.findplace2stay.com/index.php/api/member/accountactivation', {
						token:mode,
						uid:uid,
					}).then(res => {
						if(res.data.status=="202"){
								if(res.data.results==""){
									this.completed=true;
								}else{
                                    this.completed=false;
								}
						}else{
							alert("Something went wrong");
						}
					})
					.catch(e => {
						console.log(e)
						alert("Something went wrong");
					})
        }
            
					
	};
</script>

<style scoped>
</style>