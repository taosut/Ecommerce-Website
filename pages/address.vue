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
                <div
                  class="col-12 col-sm-6"
                  v-for="(p, index) in alluseraddress"
                  :key="p.id"
                >
                  <div>
                    <div>
                      <p class="pad-9" style="font-size:16px">
                        {{ p.fullname }}
                      </p>
                    </div>
                    <div>
                      <p class="pad-11 font-12">
                        {{ p.building }} {{ p.street }}
                      </p>
                      <p v-if="p.landmark != ''" class="pad-11 font-12">
                        {{ p.landmark }}
                      </p>
                    </div>
                    <div>
                      <p class="pad-11">
                        {{ p.city }}, {{ p.state }} {{ p.pincode }}
                      </p>
                      <p class="pad-11">{{ p.country }}</p>
                    </div>
                    <button
                      type="button"
                      @click="selectedAddress(index)"
                      class="btn btn-primary btn-sm"
                    >
                      Deliver to this address
                    </button>
                    <button type="button" class="btn btn-danger btn-sm">
                      Delete
                    </button>
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
                        <label for="email">Full Name</label>
                        <input
                          type="email"
                          v-model="payload.fullname"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Mobile Number</label>
                        <input
                          type="text"
                          v-model="payload.mobilenumber"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Pincode</label>
                        <input
                          type="text"
                          v-model="payload.pincode"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email"
                          >Flat, House no., Building, Company, Apartment:</label
                        >
                        <input
                          type="text"
                          v-model="payload.building"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email"
                          >Area, Colony, Street, Sector, Village:</label
                        >
                        <input
                          type="text"
                          v-model="payload.street"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Town/City:</label>
                        <input
                          type="text"
                          v-model="payload.city"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email"
                          >Landmark e.g. near apollo hospital:</label
                        >
                        <input
                          type="text"
                          v-model="payload.landmark"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">State:</label>
                        <input
                          type="text"
                          v-model="payload.state"
                          class="form-control"
                          id="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <button
                        @click="addNewAddress"
                        type="button"
                        class="btn btn-order"
                      >
                        Add Address
                      </button>
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
                          <div
                            style="display:flex;flex-direction:column"
                            class="pb-4"
                          >
                            <label>Card Number</label>
                            <input
                              v-model="card_number"
                              type="text"
                              maxlength="16"
                              class="form-control"
                            />
                          </div>
                          <div
                            style="display:flex;flex-direction:column"
                            class="pb-4"
                          >
                            <label>Card Holder</label>
                            <input
                              v-model="card_holder"
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <div class="row pb-4">
                            <div class="form-group col-2">
                              <label>Valid Thru</label>
                              <select
                                id="inputState"
                                class="form-control"
                                v-model="valid_month"
                              >
                                <option selected>MM</option>
                                <option v-for="p in 12" :key="p" :value="p">
                                  {{ p }}
                                </option>
                              </select>
                            </div>
                            <div class="form-group col-2">
                              <label>Year</label>
                              <select
                                id="inputState"
                                class="form-control"
                                v-model="valid_year"
                              >
                                <option selected>YY</option>
                                <option
                                  v-for="p in 50"
                                  :key="p + 19"
                                  :value="p + 18"
                                  >{{ p + 18 }}</option
                                >
                              </select>
                            </div>
                            <div class="form-group col-2">
                              <label>CVV</label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="cvv"
                              />
                            </div>
                            <div class="form-group col-2">
                              <label>Pay</label>
                              <button
                                @click="createOrder(1)"
                                class="btn btn-order"
                              >
                                PAY ₹ {{ totalSum }}
                              </button>
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
                              <input
                                type="radio"
                                v-model="bank"
                                value="HDFC"
                                name="bank_radio"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRUQyMzJBIiBkPSJNMCAwaDI2djI2SDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNC42IDQuNmgxNi44djE2LjhINC42Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjcgMGgyLjZ2MjZoLTIuNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDExLjdoMjZ2Mi42SDAiLz48cGF0aCBmaWxsPSIjMDA0QzhGIiBkPSJNOSA5aDh2OEg5Ii8+PC9nPjwvc3ZnPg=="
                                />
                                HDFC Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-2">
                              <input
                                type="radio"
                                v-model="bank"
                                value="ICIC"
                                name="bank_radio"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctNmg0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRjk5RDI3IiBkPSJNNy41IDZjNi4zLTYuMiAxNC04IDE3LTMuNiAzIDQuMy40IDEzLTYgMTkuMi02LjIgNi4zLTE0IDgtMTcgMy42LTMtNC4zLS4zLTEzIDYtMTkuMiIvPjxwYXRoIGZpbGw9IiNCMDJBMzAiIGQ9Ik0xMS43IDIuN2MtLjcuNS0xLjQgMS0yIDEuOC01LjYgNS41LTggMTMtNS4yIDE2LjcgMi44IDMuOCA5LjYgMi40IDE1LjMtMyAzLTMgNS02LjUgNi05LjcgMC0yLjQtLjItNC41LTEuMy02QzIyLTEgMTctLjUgMTEuNyAyLjUiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTkuMyAyLjVjLjcuNy4zIDIuNC0xIDMuNi0xLjMgMS43LTMgMi0zLjYgMS0uOC0uMy0uMy0yIDEtMy4yIDEuMi0xLjMgMy0xLjcgMy42LTF6bS00LjUgMjIuMmMtMyAyLjItNiAzLjMtOSAzIDEuMyAwIDIuMy0xLjQgMy0zLjMgMS0yIDEuNS0zLjcgMi01LjQuNS0yLjYuNS00LjUuMi01LS41LS42LTEuNy0uNC0zIC40LS42LjMtMS40IDAtLjQtMSAxLTEuMyA1LTQuMiA2LjMtNC42IDEuMi0uNSAzIDAgMi4zIDEuOC0uNCAxLjMtNS44IDE1LjYtMS44IDE0eiIvPjwvZz48L3N2Zz4="
                                />
                                ICICI Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-2">
                              <input
                                type="radio"
                                v-model="bank"
                                value="SBIN"
                                name="bank_radio"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjMTZEIiBkPSJNMTIuNiAyN0M1LjQgMjYuNS0uMiAyMC40IDAgMTMgLjIgNiA2LjIgMCAxMy41IDBTMjYuOCA1LjggMjcgMTNjLjIgNy40LTUuNCAxMy41LTEyLjYgMTRWMTZjMS0uNSAxLjctMS42IDEuNS0yLjgtLjQtMS4yLTEuNC0yLTIuNi0ycy0yLjIuOC0yLjQgMmMwIDEuMi41IDIuMyAxLjYgMi43Ii8+PC9nPjwvc3ZnPg=="
                                />
                                State Bank of India
                              </span>
                            </div>
                            <div class="col-sm-4 mt-3">
                              <input
                                type="radio"
                                v-model="bank"
                                value="UTIB"
                                name="bank_radio"
                              />
                              <span class="ml-2">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48cGF0aCBmaWxsPSIjQkM0MTcwIiBkPSJNMjggMjRoLTguN0wxNCAxNWg4LjdtLTQuNC03LjZMOC43IDI0SDBMMTQgMCIvPjwvZz48L3N2Zz4="
                                />
                                Axis Bank
                              </span>
                            </div>
                            <div class="col-sm-4 mt-3">
                              <input
                                type="radio"
                                v-model="bank"
                                value="KKBK"
                                name="bank_radio"
                              />
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
                            <option value="1" selected="selected"
                              >---Select Bank---</option
                            >
                            <option
                              name="bank_radio"
                              v-for="(p, key) in methods.netbanking"
                              :key="p.id"
                              :value="key"
                              >{{ p }}</option
                            >
                          </select>
                        </div>
                        <div class="pt-3 ml-2">
                          <button @click="createOrder(2)" class="btn btn-order">
                            PAY ₹ {{ totalSum }}
                          </button>
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
                          <button @click="createOrder(2)" class="btn btn-order">
                            PAY ₹ {{ totalSum }}
                          </button>
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
                              <button
                                @click="createOrder(4)"
                                class="btn btn-order"
                              >
                                PAY ₹ {{ totalSum }}
                              </button>
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
        <div class="col-md-4">
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
    order_step: 2,
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
    selected_wallet: 'freecharge'
  }),

  //   computed: mapState(['cart_data']),

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
        email: this.cart[0].seller_id.email,
        contact: this.cart[0].seller_id.phone_number,
        order_id: this.order_id,
        method: 'card',
        'card[name]': this.card_holder,
        'card[number]': this.card_number,
        'card[cvv]': this.cvv,
        'card[expiry_month]': this.valid_month,
        'card[expiry_year]': '20' + this.valid_year
      }

      this.razorpay.createPayment(data)

      this.razorpay.on('payment.success', function(resp) {
        console.log('yeyhxdsdnsmdnm')
        console.log(resp)
      }) // will pass payment ID, order ID, and Razorpay signature to success handler.

      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
      }) // will pass error object to error handler
    },
    pay_net: function() {
      var data = {
        amount: this.totalSum * 100,
        email: this.cart[0].seller_id.email,
        contact: this.cart[0].seller_id.phone_number,
        order_id: this.order_id,
        method: 'netbanking',
        bank: this.bank
      }

      this.razorpay.createPayment(data)

      this.razorpay.on('payment.success', function(resp) {
        console.log('yeyhxdsdnsmdnm')
        console.log(resp)
      }) // will pass payment ID, order ID, and Razorpay signature to success handler.

      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
      }) // will pass error object to error handler
    },
    pay_wallet: function() {
      var data = {
        amount: this.totalSum * 100,
        email: this.cart[0].seller_id.email,
        contact: this.cart[0].seller_id.phone_number,
        order_id: this.order_id,
        method: 'wallet',
        wallet: this.selected_wallet
      }

      this.razorpay.createPayment(data)

      this.razorpay.on('payment.success', function(resp) {
        console.log('yeyhxdsdnsmdnm')
        console.log(resp)
      }) // will pass payment ID, order ID, and Razorpay signature to success handler.

      this.razorpay.on('payment.error', function(resp) {
        alert(resp.error.description)
      }) // will pass error object to error handler
    },
    createOrder: function(method) {
      var payload = new FormData()

      var cart_simplified = []

      this.cart.forEach((food, index) => {
        var single_cart = {}

        single_cart['id'] = index + 1

        single_cart['product_name'] = food['product_name']
        single_cart['product_id'] = food.product_info.product_id['id']
        single_cart['product_price'] = food.product_info['price']

        single_cart['seller_name'] = food.seller_id['name']
        single_cart['seller_id'] = food.seller_id['id']

        single_cart['quantity'] = food['quantity']
        single_cart['cart_id'] = food['cart_key']

        cart_simplified.push(single_cart)
      })

      console.log(cart_simplified)

      switch (method) {
        case 1:
          payload.append('payment_method', 1)
          payload.append('payment_detail', this.card_number.replace(/.(?=.{4})/g, ''))
          break
        case 2:
          payload.append('payment_method', 2)
          payload.append('payment_detail', this.methods.netbanking[this.bank])
          break
        case 3:
          payload.append('payment_method', 3)
          payload.append('payment_detail', this.selected_wallet)
          break
        case 3:
          payload.append('payment_method', 4)
          payload.append('payment_detail', 'COD')
          break
      }

      payload.append('amount', this.totalSum * 100)
      payload.append('cart', JSON.stringify(cart_simplified))

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
          }
        })
        .catch(err => {
          console.log('error in request', err)
        })
    },
    getCartByUser: function() {
      this.$store.dispatch('getCartByUser').then(res => {
        this.cart = JSON.parse(JSON.stringify(res.data))

        this.cart.filter(
          v =>
            (v.product_info.images = JSON.parse(
              v.product_info.product_id.images
            ))
        )

        this.cart.forEach((element, index) => {
          this.cart[index]['product_name'] = this.cart[index].product_info[
            'product_id'
          ]['product_name']
          this.totalSum += parseInt(element.product_info.price)
          this.discountedtotalSum +=
            parseInt(element.product_info.mrp) - this.totalSum
        })
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
        httpOnly: process.env.cookie,
        secure: process.env.cookie,
        maxAge: 60 * 60 * 24 * 7
      })

      console.log(this.alluseraddress[id])

      this.$store.commit('cart_address', this.alluseraddress[id])

      this.$router.push('/payment')
    },
    addNewAddress: function() {
      var payload = new FormData()

      console.log(this.payload.fullname)

      payload.append('fullname', this.payload.fullname)
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
  box-shadow: 1px 5px 8px 7px rgba(128, 128, 128, 0.25882352941176473);
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
</style>

<!-- <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">CART</h4>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
 

        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-12 mt-3 no-padd">
              <div>
                <div class="border">
                  <div class="w-100" style="border-bottom:1px solid #dee2e6 ">
                    <p
                      class="m-0 padding-right-10 my-text-custom2"
                      style="padding: 15px 20px;font-size: 16px;font-weight: bold;"
                    >My Cart ( {{cart.length}} )</p>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-fluid h-100 mb-4">
                        <div class="row mb-5 mt-3" v-for="p in cart" :key="p.id">
                          <div class="col-md-3">
                            <img
                              :src='baseurl + "/media/products/" + p.product_info["images"][0]'
                              style="width: 100%;height: 120px;object-fit: contain;"
                              @error="setFallbackImageUrl"
                            />
                          </div>
                          <div class="col-md-9">
                              <p class="clamp1" style="font-size:14px;color:#545454;font-weight:bold">{{p.product_info['product_name']}}</p>
                              <p class="clamp1" style="font-size:18px">$ {{p.product_info['price']}}</p>    
                              <p class="clamp1 pointer" @click="removeFromCart(p.id)" style="font-size:14px;color:red;padding-top: 25px">REMOVE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div class="col-lg-4 col-md-12">
          <div class="row">
            <div class="col-12 mt-3 no-padd">
              <div>
                <div class="border">
                  <div class="w-100" style="border-bottom:1px solid #dee2e6 ">
                    <p
                      class="m-0 padding-right-10 my-text-custom2"
                      style="padding: 15px 20px;font-size: 16px;font-weight: bold;"
                    >Price Details</p>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-fluid h-100 mb-4">
                        <div style="display:flex; justify-content: space-between;padding-top:10px">
                          <div>Price ({{cart.length}} items)</div>
                          <div>$ {{totalSum}}</div>
                        </div>
                      </div>
                      <div class="container-fluid h-100 mb-3" style="border-top:1px solid rgb(222, 226, 230)">
                        <div style="display:flex; justify-content: space-between;padding-top:10px">
                          <button type="button" class="btn btn-danger" style="font-size:12px">PLACE ORDER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
