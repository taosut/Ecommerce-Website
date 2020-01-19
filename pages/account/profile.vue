<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <accountnav></accountnav>
        </div>
        <div class="col-lg-8 col-md-8">
          <div class="account-details" style="background-color: white">
            <h4 class="header">
              Profile Information
              <span v-if="isEditing == 0" @click="allowEdit" class="link"
                >Edit</span
              >
              <span v-if="isEditing == 1" @click="cancelEdit" class="link"
                >Cancel</span
              >
            </h4>
            <div class="row pt-3">
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    :value="user_info.firstname"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    :value="user_info.lastname"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    :checked = "user_info.gender == 0"
                    :value="user_info.gender"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Male</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    :checked = "user_info.gender == 1"
                    :value="user_info.gender"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Female</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    :checked = "user_info.gender == 2"
                    :value="user_info.gender"
                  />
                  <label class="form-check-label" for="inlineRadio3"
                    >Others</label
                  >
                </div>
              </div>
              <div class="col-12">
                <button type="button" v-if="isEditing == 1" class="btn btn-primary">SAVE</button>
              </div>
            </div>

            <!-- <h4 class="header">Email Address</h4> -->

            <div>
              <div
                style="font-size: 18px;font-weight: 500;margin-bottom: 24px;"
              >
                FAQs
              </div>
              <div>
                <h4 class="faq">
                  What happens when I update my email address (or mobile
                  number)?
                </h4>
                <p>
                  Your login email id (or mobile number) changes, likewise.
                  You'll receive all your account related communication on your
                  updated email address (or mobile number).
                </p>
                <h4 class="faq">
                  When will my WENSLink account be updated with the new email
                  address (or mobile number)?
                </h4>
                <p>
                  It happens as soon as you confirm the verification code sent
                  to your email (or mobile) and save the changes.
                </p>
                <h4 class="faq">
                  What happens to my existing WENSLink account when I update my
                  email address (or mobile number)?
                </h4>
                <p>
                  Updating your email address (or mobile number) doesn't
                  invalidate your account. Your account remains fully
                  functional. You'll continue seeing your Order history, saved
                  information and personal details.
                </p>
              </div>
            </div>
            <!-- <div>Deactivate Account</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import accountnav from '@/components/account_nav'
export default {
  data() {
    return {
      isEditing: 0,
      user_info: []
    }
  },
  components: {
    accountnav
  },
  mounted(){

    this.$store.dispatch('getuserinfo').then(res=>{
      console.log(res.data)
      this.user_info = res.data
    })

  },
  middleware: 'auth',
  methods: {
    allowEdit: function() {
      this.isEditing = 1
    },
    cancelEdit: function() {
      this.isEditing = 0
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 20px 0;
}
.account-details {
  padding: 24px 32px;
}

.header {
  font-size: 18px;
  font-weight: 500;
  padding-right: 24px;
}

h4.faq {
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 20px;
  padding: 0;
  line-height: 1.5;
  font-weight: 500;
}

p {
  line-height: 1.5;
  margin-top: 15px;
}

.link {
  font-size: 13px;
  color: blue;
  margin-left: 20px;
  cursor: pointer;
}
</style>
