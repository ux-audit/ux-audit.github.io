<template>
  <div>
    <div>Carte Bancaire</div>
    <div>Paypal</div>
    <div>Google Pay</div>
  </div>
  <div>
    <form>
      <label>
        <span>Numéro CB*</span>
        <input type="text" pattern="\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d" />
      </label>
      <div>
        <label>
          <span>Expire le </span>
          <input type="text" pattern="\d\d \d\d" />
        </label>
        <label>
          <span>CVC*</span>
          <input type="text" pattern="\d\d\d" />
        </label>
      </div>
    </form>
  </div>
</template>
