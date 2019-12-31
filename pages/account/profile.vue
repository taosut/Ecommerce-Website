<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <accountnav></accountnav>
        </div>
        <div class="col-lg-8 col-md-8">
          <div class="account-details" style="background-color: white">
            <h4 class="header">Profile Information</h4>

            <div>
              <div
                style="font-size: 18px;font-weight: 500;margin-bottom: 24px;">
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
  components: {
    accountnav
  },
    middleware: 'auth',
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
</style>
