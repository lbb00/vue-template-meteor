<template>
  <div class="error-page">
    <div class="error-page_content">
      <div>
        <h1 class="error-page_code">{{ error.statusCode }}</h1>
        <h2 class="error-page_message">{{ error.message }}</h2>
      </div>
      <router-link class="error-page_link" to="/">Back to the home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      required: true,
      default () {
        return {
          statusCode: 'null',
          message: 'An unexpected error'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.error-page {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  font-size: 14px;
  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";
  &_content {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  &_code {
    display: inline-block;
    margin: 0px 20px 0px 0px;
    padding: 10px 23px 10px 0px;
    border-right: 1px solid rgba(0, 0, 0, 0.298039);
    font-weight: 500;
    font-size: 24px;
    vertical-align: middle;
  }
  &_message {
    display: inline-block;
    height: 100%;
    font-size: 14px;
    font-weight: normal;
    vertical-align: middle;
  }
  &_link {
    display: block;
    margin-top: 14px;
    color: #00bcd4;
    text-decoration: none;
  }
}
</style>