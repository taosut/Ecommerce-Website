<template>
  <div>
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-md-8" v-if="order_step == 1">
          <div class="bg-white pb-4">
            <div class="d-flex w-100 justify-content-between border-bottom">
              <div class="cart-header">
                <p>Select Delivery Address</p>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <!-- <div class="pad24" > -->
                <div class="col-12 col-sm-6" v-for="(p, index) in alluseraddress" :key="p.id">
                  <div>
                    <div>
                      <p class="pad-9" style="font-size:16px">{{ p.firstname }} {{ p.lastname }}</p>
                    </div>
                    <div>
                      <p class="pad-11 font-12">{{ p.building }} {{ p.street }}</p>
                      <p v-if="p.landmark != ''" class="pad-11 font-12">{{ p.landmark }}</p>
                    </div>
                    <div>
                      <p class="pad-11">{{ p.city }}, {{ p.state }} {{ p.pincode }}</p>
                      <p class="pad-11">{{ p.country }}</p>
                    </div>
                    <button
                      type="button"
                      @click="selectedAddress(p.id)"
                      class="btn btn-primary btn-sm"
                    >Deliver to this address</button>
                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>

            <div class="address-section">
              <div class="container">
                <div class="row" style="padding-top: 50px">
                  <div class="col-xs-6">
                    <div class="col-12">
                      <p>Add New Address</p>
                      <div class="form-group">
                        <label for="fullname">First Name</label>
                        <input
                          type="text"
                          v-model="payload.firstname"
                          class="form-control"
                          id="fullname"
                        />
                      </div>
                      <div class="form-group">
                        <label for="fullname">Last Name</label>
                        <input
                          type="text"
                          v-model="payload.lastname"
                          class="form-control"
                          id="fullname"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="phonenumber">Mobile Number</label>
                        <input
                          type="text"
                          v-model="payload.mobilenumber"
                          class="form-control"
                          id="phonenumber"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="pincode">Pincode</label>
                        <input
                          type="text"
                          v-model="payload.pincode"
                          class="form-control"
                          id="pincode"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="address">Flat, House no., Building, Company, Apartment:</label>
                        <input
                          type="text"
                          v-model="payload.building"
                          class="form-control"
                          id="address"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="area">Area, Colony, Street, Sector, Village:</label>
                        <input type="text" v-model="payload.street" class="form-control" id="area" />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="city">Town/City:</label>
                        <input type="text" v-model="payload.city" class="form-control" id="city" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="landmark">Landmark e.g. near apollo hospital:</label>
                        <input
                          type="text"
                          v-model="payload.landmark"
                          class="form-control"
                          id="landmark"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="state">State:</label>
                        <input type="text" v-model="payload.state" class="form-control" id="state" />
                      </div>
                    </div>

                    <div class="col-12">
                      <button @click="addNewAddress" type="button" class="btn btn-order">Add Address</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8" v-if="order_step == 2">
          <div class="bg-white pb-4">
            <div class="d-flex w-100 justify-content-between border-bottom">
              <div class="cart-header">
                <p>Select Payment</p>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-md-12 padding-0">
                  <div class="d-flex">
                    <div class style="padding: 16px 25px">PAYMENTS OPTION</div>
                  </div>

                  <div class="payment_options">
                    <label class="credit-debit payment-li">
                      <div class="d-flex align-center">
                        <input
                          type="radio"
                          name="payment_methods"
                          @change="payment_active = 1"
                          :checked="payment_active == 1"
                        />
                        <p class="pl-2">Credit / Debit / ATM Card</p>
                      </div>
                      <div class="ml-4" v-if="payment_active == 1">
                        <div>
                          <div style="display:flex;flex-direction:column" class="pb-4">
                            <label>Card Number</label>
                            <input
                              v-model="card_number"
                              type="text"
                              maxlength="16"
                              class="form-control"
                            />
                          </div>
                          <div style="display:flex;flex-direction:column" class="pb-4">
                            <label>Card Holder</label>
                            <input v-model="card_holder" type="text" class="form-control" />
                          </div>
                          <div class="row pb-4">
                            <div class="form-group col-2">
                              <label>Valid Thru</label>
                              <select id="inputState" class="form-control" v-model="valid_month">
                                <option selected>MM</option>
                                <option v-for="p in 12" :key="p" :value="p">{{ p }}</option>
                              </select>
                            </div>
                            <div class="form-group col-2">
                              <label>Year</label>
                              <select id="inputState" class="form-control" v-model="valid_year">
                                <option selected>YY</option>
                                <option v-for="p in 50" :key="p + 19" :value="p + 18">{{ p + 18 }}</option>
                              </select>
                            </div>
                            <div class="form-group col-2">
                              <label>CVV</label>
                              <input type="text" class="form-control" v-model="cvv" />
                            </div>
                            <div class="form-group col-2">
                              <label>Pay</label>
                              <button
                                @click="createOrder(1)"
                                class="btn btn-order"
                              >PAY ₹ {{ totalSum }}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label class="netbanking payment-li">
                      <div class="d-flex align-center">
                        <input
                          type="radio"
                          name="payment_methods"
                          @change="payment_active = 2"
                          :checked="payment_active == 2"
                        />
                        <p class="pl-2">Net Banking</p>
                      </div>
                      <div class="ml-4" v-if="payment_active == 2">
                        <div>
                          <h6 class="mb-4 mt-4">Popular Banks</h6>

                          <div class="d-flex row">
                            <div class="col-sm-4">
                              <input type="radio" v-model="bank" value="HDFC" name="bank_radio" />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRUQyMzJBIiBkPSJNMCAwaDI2djI2SDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNC42IDQuNmgxNi44djE2LjhINC42Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjcgMGgyLjZ2MjZoLTIuNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDExLjdoMjZ2Mi42SDAiLz48cGF0aCBmaWxsPSIjMDA0QzhGIiBkPSJNOSA5aDh2OEg5Ii8+PC9nPjwvc3ZnPg=="
                                />
                                HDFC Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-2">
                              <input type="radio" v-model="bank" value="ICIC" name="bank_radio" />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctNmg0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRjk5RDI3IiBkPSJNNy41IDZjNi4zLTYuMiAxNC04IDE3LTMuNiAzIDQuMy40IDEzLTYgMTkuMi02LjIgNi4zLTE0IDgtMTcgMy42LTMtNC4zLS4zLTEzIDYtMTkuMiIvPjxwYXRoIGZpbGw9IiNCMDJBMzAiIGQ9Ik0xMS43IDIuN2MtLjcuNS0xLjQgMS0yIDEuOC01LjYgNS41LTggMTMtNS4yIDE2LjcgMi44IDMuOCA5LjYgMi40IDE1LjMtMyAzLTMgNS02LjUgNi05LjcgMC0yLjQtLjItNC41LTEuMy02QzIyLTEgMTctLjUgMTEuNyAyLjUiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTkuMyAyLjVjLjcuNy4zIDIuNC0xIDMuNi0xLjMgMS43LTMgMi0zLjYgMS0uOC0uMy0uMy0yIDEtMy4yIDEuMi0xLjMgMy0xLjcgMy42LTF6bS00LjUgMjIuMmMtMyAyLjItNiAzLjMtOSAzIDEuMyAwIDIuMy0xLjQgMy0zLjMgMS0yIDEuNS0zLjcgMi01LjQuNS0yLjYuNS00LjUuMi01LS41LS42LTEuNy0uNC0zIC40LS42LjMtMS40IDAtLjQtMSAxLTEuMyA1LTQuMiA2LjMtNC42IDEuMi0uNSAzIDAgMi4zIDEuOC0uNCAxLjMtNS44IDE1LjYtMS44IDE0eiIvPjwvZz48L3N2Zz4="
                                />
                                ICICI Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-2">
                              <input type="radio" v-model="bank" value="SBIN" name="bank_radio" />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjMTZEIiBkPSJNMTIuNiAyN0M1LjQgMjYuNS0uMiAyMC40IDAgMTMgLjIgNiA2LjIgMCAxMy41IDBTMjYuOCA1LjggMjcgMTNjLjIgNy40LTUuNCAxMy41LTEyLjYgMTRWMTZjMS0uNSAxLjctMS42IDEuNS0yLjgtLjQtMS4yLTEuNC0yLTIuNi0ycy0yLjIuOC0yLjQgMmMwIDEuMi41IDIuMyAxLjYgMi43Ii8+PC9nPjwvc3ZnPg=="
                                />
                                State Bank of India
                              </span>
                            </div>
                            <div class="col-sm-4 mt-3">
                              <input type="radio" v-model="bank" value="UTIB" name="bank_radio" />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48cGF0aCBmaWxsPSIjQkM0MTcwIiBkPSJNMjggMjRoLTguN0wxNCAxNWg4LjdtLTQuNC03LjZMOC43IDI0SDBMMTQgMCIvPjwvZz48L3N2Zz4="
                                />
                                Axis Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-3">
                              <input type="radio" v-model="bank" value="KKBK" name="bank_radio" />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMjggMEgwdjIzLjhoMjhWMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjMDAzODc0IiBkPSJNMCAxMkMwIDUuMiA2LjMgMCAxNCAwczE0IDUuMyAxNCAxMmMwIDYuNS02LjMgMTEuOC0xNCAxMS44cy0xNC01LjMtMTQtMTIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRUQxQzI0IiBkPSJNMTIuMyAzLjhsMy4yLTFWMjBsLTMuMiAxLjIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuMiAxNC43QzEyLjggMTYuMyAxMS40IDE4IDkgMThjLTMuNyAwLTUuNC0zLjQtNS40LTYuMyAwLTIuOCAxLjMtNiA0LjgtNiAxLjUgMCAzIDEgNCAyVjEwYy0xLS43LTIuNS0xLTMuNi0xLTIuMiAwLTQuMi43LTQgMyAwIDEuNCAxLjQgMi40IDMgMi40IDIuMiAwIDMuNi0yIDQuNy0zLjZMMTQgOWMxLTEuNiAyLjYtMy4yIDUtMy4yIDMgMCA0LjcgMi40IDUuMiA1SDIzYy0uNS0xLTEuNS0xLjQtMi42LTEuNC0yLjMgMC0zLjggMi01IDMuN2wtMS4yIDJ6TTI0LjUgMTNjLS4zIDIuNi0xLjcgNS00LjggNS0xLjggMC0zLjItMS00LjItMi42di0xLjdjMS4zLjYgMi40IDEuMiAzLjggMS4yIDEuNyAwIDMuMi0xIDMuOC0yaDJ6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPg=="
                                />
                                Kotak Bank
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h6 class="mb-3 mt-4">Other Banks</h6>

                          <select
                            id="myselect"
                            class="btn btn-outline-light text-dark"
                            style="min-width: 180px; border: 1px solid #C0C0C0"
                            v-model="bank"
                          >
                            <option value="1" selected="selected">---Select Bank---</option>
                            <option
                              name="bank_radio"
                              v-for="(p, key) in methods.netbanking"
                              :key="p.id"
                              :value="key"
                            >{{ p }}</option>
                          </select>
                        </div>
                        <div class="pt-3 ml-2">
                          <button @click="createOrder(2)" class="btn btn-order">PAY ₹ {{ totalSum }}</button>
                        </div>
                      </div>
                    </label>

                    <label class="wallet payment-li">
                      <div class="d-flex align-center">
                        <input
                          type="radio"
                          name="payment_methods"
                          @change="payment_active = 3"
                          :checked="payment_active == 3"
                        />
                        <p class="pl-2">Wallet / UPI</p>
                      </div>
                      <div class="ml-4" v-if="payment_active == 3">
                        <div>
                          <h6 class="mb-4 mt-4">Wallet</h6>

                          <div class="d-flex row">
                            <div class="col-sm-4">
                              <input
                                type="radio"
                                v-model="selected_wallet"
                                value="freecharge"
                                name="wallet"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRUQyMzJBIiBkPSJNMCAwaDI2djI2SDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNC42IDQuNmgxNi44djE2LjhINC42Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjcgMGgyLjZ2MjZoLTIuNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDExLjdoMjZ2Mi42SDAiLz48cGF0aCBmaWxsPSIjMDA0QzhGIiBkPSJNOSA5aDh2OEg5Ii8+PC9nPjwvc3ZnPg=="
                                />
                                FreeCharge
                              </span>
                            </div>
                            <div class="col-sm-4">
                              <input
                                type="radio"
                                v-model="selected_wallet"
                                value="payzapp"
                                name="wallet"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctNmg0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRjk5RDI3IiBkPSJNNy41IDZjNi4zLTYuMiAxNC04IDE3LTMuNiAzIDQuMy40IDEzLTYgMTkuMi02LjIgNi4zLTE0IDgtMTcgMy42LTMtNC4zLS4zLTEzIDYtMTkuMiIvPjxwYXRoIGZpbGw9IiNCMDJBMzAiIGQ9Ik0xMS43IDIuN2MtLjcuNS0xLjQgMS0yIDEuOC01LjYgNS41LTggMTMtNS4yIDE2LjcgMi44IDMuOCA5LjYgMi40IDE1LjMtMyAzLTMgNS02LjUgNi05LjcgMC0yLjQtLjItNC41LTEuMy02QzIyLTEgMTctLjUgMTEuNyAyLjUiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTkuMyAyLjVjLjcuNy4zIDIuNC0xIDMuNi0xLjMgMS43LTMgMi0zLjYgMS0uOC0uMy0uMy0yIDEtMy4yIDEuMi0xLjMgMy0xLjcgMy42LTF6bS00LjUgMjIuMmMtMyAyLjItNiAzLjMtOSAzIDEuMyAwIDIuMy0xLjQgMy0zLjMgMS0yIDEuNS0zLjcgMi01LjQuNS0yLjYuNS00LjUuMi01LS41LS42LTEuNy0uNC0zIC40LS42LjMtMS40IDAtLjQtMSAxLTEuMyA1LTQuMiA2LjMtNC42IDEuMi0uNSAzIDAgMi4zIDEuOC0uNCAxLjMtNS44IDE1LjYtMS44IDE0eiIvPjwvZz48L3N2Zz4="
                                />
                                PayZapp
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="pt-3 ml-2">
                          <button @click="createOrder(3)" class="btn btn-order">PAY ₹ {{ totalSum }}</button>
                        </div>
                      </div>
                    </label>

                    <label class="cod payment-li">
                      <div class="d-flex align-center">
                        <input
                          type="radio"
                          name="payment_methods"
                          @change="payment_active = 4"
                          :checked="payment_active == 4"
                        />
                        <p class="pl-2">Cash on Delivery</p>
                      </div>
                      <div class="ml-4" v-if="payment_active == 4">
                        <div>
                          <div class="row pb-4">
                            <div class="form-group col-2">
                              <label>Pay</label>
                              <button @click="createOrder(4)" class="btn btn-order">Place Order</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" v-if="order_step == 3">
          <div class="bg-white pb-4">
            <div class="confirmation center">
              <div class="container">
                <div class="white box pt-3">
                  <div class="container section">
                    <svg
                      class="checkmark"
                      id="this"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    <p class="pt-3">
                      Your Order has been Confirmed.
                      <br />It is being processed by the seller
                    </p>
                    <p class="approval-text">You will receive an SMS when the order is approved</p>
                  </div>
                </div>
                <div class="confirmation-action mt-3">
                  <nuxt-link to="/" class="btn btn-primary white-text">Continue Shopping</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-if="order_step != 3">
          <div class="bg-white shadow border-rad">
            <div class="border-bottom f600" style="padding:13px 24px">
              <p style="color:#878787">PRICE DETAILS</p>
            </div>
            <div style="padding:0 24px">
              <div class="d-flex justify-content-between" style="margin:20px 0">
                <span>
                  <p>Price (2 items)</p>
                </span>
                <span>
                  <p>₹ {{ totalSum }}</p>
                </span>
              </div>
              <div class="d-flex justify-content-between" style="margin:20px 0">
                <span>
                  <p>Delivery</p>
                </span>
                <span>
                  <p>FREE</p>
                </span>
              </div>
              <div
                class="d-flex justify-content-between border-top-dotted f600"
                style="margin:20px 0"
              >
                <span>
                  <p>Total Payable</p>
                </span>
                <span>
                  <p>₹ {{ totalSum }}</p>
                </span>
              </div>
            </div>
            <div class="border-top" style="padding:20px 24px">
              <p>You will save ₹{{ discountedtotalSum }} on this order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data: () => ({
    totalSum: 0,
    payload: [],
    payment_active: 1,
    order_step: 1,
    order_id: '',
    alluseraddress: [],
    razorpay: [],
    discountedtotalSum: 0,
    baseurl: process.env.baseUrl,
    cart: [],
    methods: {},
    card_number: '',
    card_holder: '',
    cvv: '',
    valid_month: '',
    valid_year: '',
    bank: '',
    selected_wallet: 'freecharge',
    selected_address: 0
  }),

  //   computed: mapState(['cart_data']),

  middleware: 'cart_auth',

  mounted() {
    this.getCartByUser()
    this.getAllUserAddress()

    this.init_payment()

    var vm = this
  },
  methods: {
    init_payment: function() {
      this.$store.dispatch('getrazorpayapi').then(res => {
        this.razorpay = new Razorpay({
          key: res.data.api_key,
          image: 'https://i.imgur.com/n5tjHFD.png'
        })

        var vm = this
        this.razorpay.once('ready', function(response) {
          console.log(response.methods)
          vm.methods = response.methods
        })
      })
    },
    pay_card: function() {
      var data = {
        amount: this.totalSum * 100,
        email: this.cart[0].customer_email,
        contact: this.cart[0].customer_phone_number,
        order_id: this.order_id,
        method: 'card',
        'card[name]': this.card_holder,
        'card[number]': this.card_number,
        'card[cvv]': this.cvv,
        'card[expiry_month]': this.valid_month,
        'card[expiry_year]': '20' + this.valid_year
      }

      this.razorpay.createPayment(data)

      var vm = this

      this.razorpay.on('payment.success', function(res) {
        console.log('yeyhxdsdnsmdnm')
        var payload = new FormData()

        payload.append('razorpay_order_id', res.razorpay_order_id)
        payload.append('razorpay_payment_id', res.razorpay_payment_id)
        payload.append('razorpay_signature', res.razorpay_signature)
        payload.append('session_key', vm.$store.state.session_key)

        console.log('success____')

        vm.$store.dispatch('order_payment_success', payload).then(res => {
          console.log('success')
          vm.order_step = 3
        })

        console.log(resp)
      })
      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
      }) // will pass error object to error handler
    },
    pay_net: function() {
      console.log("netbank")
      var data = {
        amount: this.totalSum * 100,
        email: this.cart[0].customer_email,
        contact: this.cart[0].customer_phone_number,
        order_id: this.order_id,
        method: 'netbanking',
        bank: this.bank
      }

      this.razorpay.createPayment(data)

      var vm = this

      this.razorpay.on('payment.success', function(res) {
        var payload = new FormData()

        payload.append('razorpay_order_id', res.razorpay_order_id)
        payload.append('razorpay_payment_id', res.razorpay_payment_id)
        payload.append('razorpay_signature', res.razorpay_signature)
        payload.append('session_key', vm.$store.state.session_key)

        console.log('success____')

        vm.$store.dispatch('order_payment_success', payload).then(res => {
          console.log('success')
          vm.order_step = 3
        })

        console.log(resp)
      })

      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
        console.log(resp)
      }) // will pass error object to error handler
    },
    pay_wallet: function() {
      var data = {
        amount: this.totalSum * 100,
        email: this.cart[0].customer_email,
        contact: this.cart[0].customer_phone_number,
        order_id: this.order_id,
        method: 'wallet',
        wallet: this.selected_wallet
      }

      this.razorpay.createPayment(data)
      
      this.razorpay.on('payment.success', function(res) {
        var payload = new FormData()

        payload.append('razorpay_order_id', res.razorpay_order_id)
        payload.append('razorpay_payment_id', res.razorpay_payment_id)
        payload.append('razorpay_signature', res.razorpay_signature)
        payload.append('session_key', vm.$store.state.session_key)

        console.log('success____')

        vm.$store.dispatch('order_payment_success', payload).then(res => {
          console.log('success')
          vm.order_step = 3
        })

        console.log(resp)
      })

      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
        console.log(resp)
      }) // will pass error object to error handler
    },
    createOrder: function(method) {
      var payload = new FormData()

      switch (method) {
        case 1:
          payload.append('payment_method', 1)
          payload.append(
            'payment_detail',
            this.card_number.replace(/.(?=.{4})/g, '')
          )
          break
        case 2:
          payload.append('payment_method', 2)
          payload.append('payment_detail', this.methods.netbanking[this.bank])
          break
        case 3:
          payload.append('payment_method', 3)
          payload.append('payment_detail', this.selected_wallet)
          break
        case 4:
          payload.append('payment_method', 4)
          payload.append('payment_detail', 'COD')
          break
      }

      payload.append('session_key', this.$store.state.session_key)
      payload.append('delivery_address', this.selectedAddress)

      axios({
        method: 'POST',
        url: this.$store.state.api.createOrder,
        data: payload,
        contentType: 'application/json',
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          console.log(method)
          console.log('response')
          this.order_id = res.data.order_id
          this.totalSum = res.data.real_amount
          console.log(this.order_id)
          switch (method) {
            case 1:
              this.pay_card()
              break
            case 2:
              this.pay_net()
              break
            case 3:
              this.pay_wallet()
              break
            case 4:
              console.log("sdsds")
              payload.append('razorpay_order_id', res.data.order_id)
              payload.append('razorpay_payment_id', "")
              payload.append('razorpay_signature', "")
              payload.append('session_key', this.$store.state.session_key)
              this.$store.dispatch('order_payment_success', payload).then(res => {
                console.log('success')
                this.order_step = 3
              })
              break
          }
        })
        .catch(err => {
          console.log('error in request', err)
          if (err.response.status == 401) {
            this.$router.push('/cart')
          }
        })
    },
    getCartByUser: function() {
      this.$store.dispatch('getCartByUser').then(res => {
        this.cart = JSON.parse(JSON.stringify(res.data.body))

        console.log(this.cart)

        this.cart.filter(v => (v.product_images = JSON.parse(v.product_images)))

        this.cart.forEach((element, index) => {
          this.totalSum += element.price

          this.cart[index]['price_changed'] = 0
          if (element.product_mrp > element.current_product_price) {
            this.discountedtotalSum += element.product_mrp
          } else {
            this.discountedtotalSum += element.current_product_price
          }
          if (element.price != element.current_product_price) {
            this.cart[index]['price_changed'] = 1
          }
        })

        this.discountedtotalSum = this.discountedtotalSum - this.totalSum
      })
    },
    removeFromCart: function(id) {
      this.$store.dispatch('removeFromCart', id).then(res => {
        this.totalSum = 0
        this.getCartByUser()
      })
    },
    getAllUserAddress: function(id) {
      this.$store.dispatch('getAllUserAddress').then(res => {
        this.alluseraddress = res.data
      })
    },
    selectedAddress: function(id) {
      this.$cookies.set('order_step', '2', {
        path: '/',
        // httpOnly: process.env.cookie,
        // secure: process.env.cookie,
        maxAge: 60 * 60 * 24 * 7
      })

      console.log(this.alluseraddress[id])
      console.log(id)

      this.$store.commit('cart_address', this.alluseraddress[id])

      this.selectedAddress = id

      this.order_step = 2
    },
    addNewAddress: function() {
      var payload = new FormData()

      console.log(this.payload.fullname)

      payload.append('firstname', this.payload.firstname)
      payload.append('lastname', this.payload.lastname)
      payload.append('pincode', this.payload.pincode)
      payload.append('mobilenumber', this.payload.mobilenumber)
      payload.append('building', this.payload.building)
      payload.append('street', this.payload.street)
      payload.append('city', this.payload.city)
      payload.append('landmark', this.payload.landmark)
      payload.append('state', this.payload.state)

      this.$store.dispatch('addNewAddress', payload).then(res => {
        console.log(res)
        this.alluseraddress = res.data
      })
    }
  }
}
</script>

<style scoped>
.pad24 {
  padding: 24px;
}
.btn-order {
  background: #fb641b;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: none;
  color: #fff;
  width: 248px;
  height: 47px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 2px;
  position: relative;
}
.shadow {
  box-shadow: 0 3px 10px rgba(62, 85, 120, 0.07);
}
.bg-white {
  background-color: #ffffff;
}
.pad12 {
  padding: 12px 0;
}
.pad-2 {
  padding: 14px 9px 0 0;
}
.cart-header {
  font-size: 23px;
  font-weight: 600;
  padding: 15px 0 15px 15px;
}
.border-rad {
  border-radius: 2px;
}
.border-bottom {
  border-bottom: 1px solid #b3adad3b;
}
.border-top {
  border-top: 1px solid #b3adad3b;
}
.border-top-dotted {
  border-top: 1px dotted #b3adad3b;
}
.f600 {
  font-weight: 600;
}
.none {
  text-decoration: none;
}
.none:hover {
  color: black;
  text-decoration: none;
}
.pad-9 {
  padding: 0 0 9px 0;
}
.pad-11 {
  padding: 0 0 11px 0;
}
.font-12 {
  font-size: 12px;
}
.form-group option {
  /* color: #b3adad3b; */
  font-size: 13px;
}
.quantity {
  display: inline-block;
}

.quantity .input-text.qty {
  width: 35px;
  height: 39px;
  padding: 0 5px;
  text-align: center;
  background-color: transparent;
  border: 1px solid #efefef;
}

.quantity.buttons_added {
  text-align: left;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}

.quantity.buttons_added input {
  display: inline-block;
  margin: 0;
  vertical-align: top;
  box-shadow: none;
}

.quantity.buttons_added .minus,
.quantity.buttons_added .plus {
  /* padding: 7px 10px 8px; */
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #efefef;
  cursor: pointer;
  border-radius: 100%;
  width: 40px;
}

.quantity.buttons_added .minus {
  border-right: 0;
}

.quantity.buttons_added .plus {
  border-left: 0;
}

.quantity.buttons_added .minus:hover,
.quantity.buttons_added .plus:hover {
  background: #eeeeee;
}

.quantity input::-webkit-outer-spin-button,
.quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}

.quantity.buttons_added .minus:focus,
.quantity.buttons_added .plus:focus {
  outline: none;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1260px;
  }
}

.payment-li {
  padding: 16px 25px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  cursor: pointer;
}

.padding-0 {
  padding: 0;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>
