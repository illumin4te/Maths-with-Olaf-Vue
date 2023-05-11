<template>
  <div class="page2-container">
    <div class="page2-container1">
      <img
        alt="image"
        src="/playground_assets/image155-8q0i-400w.png"
        class="page2-image"
      />
      <img
        alt="image"
        src="/playground_assets/image2610-ek8g-400w.png"
        class="page2-image1"
      />
      <span class="page2-text">Математика с Олафом</span>
      <router-link to="/1" class="page2-navlink button">Начать</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.page2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: row;
  background-size: cover;
  justify-content: flex-start;
  background-image: url("/playground_assets/3ba568a4-6e96-48e9-a247-3448b80f3874-e16p-1500w.undefined");
}
.page2-container1 {
  top: 200px;
  left: var(--dl-space-space-halfunit);
  right: var(--dl-space-space-halfunit);
  width: 100%;
  height: 669px;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.page2-image {
  left: 0px;
  width: 325px;
  bottom: var(--dl-space-space-halfunit);
  height: 496px;
  position: absolute;
  align-self: flex-end;
  object-fit: cover;
}
.page2-image1 {
  right: var(--dl-space-space-unit);
  width: 325px;
  bottom: var(--dl-space-space-halfunit);
  height: 496px;
  position: absolute;
  align-self: flex-end;
  object-fit: cover;
}
.page2-text {
  top: 29px;
  left: 184px;
  color: var(--dl-color-primary-text);
  margin: auto;
  position: absolute;
  font-size: 120px;
  align-self: flex-start;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
  text-transform: none;
  text-decoration: none;
}
.page2-navlink {
  top: 320px;
  left: 0px;
  color: var(--dl-color-primary-text);
  right: 0px;
  width: 410px;
  height: 130px;
  margin: auto;
  position: absolute;
  font-size: 100px;
  box-shadow: rgb(0, 0, 0) 5px 5px 10px 0px;
  font-style: normal;
  text-align: center;
  font-family: Frozen1;
  font-weight: 700;
  border-color: var(--dl-color-primary-text);
  border-width: 5px;
  border-radius: 15px;
  background-size: auto;
  text-decoration: none;
  background-image: url("/playground_assets/rectangle31427-27o-500w.png");
  background-repeat: space;
  background-position: center;
}
</style>
