<template>
  <div class="page5-container">
    <div class="page5-container1">
      <img
        alt="image"
        src="/playground_assets/image155-8q0i-400w.png"
        class="page5-image"
      />
      <img
        alt="image"
        src="/playground_assets/image2610-ek8g-400w.png"
        class="page5-image1"
      />
      <span class="page5-text">Математика с Олафом</span>
      <router-link to="/1" class="page5-navlink button">Начать</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page5',
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.page5-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url("/playground_assets/64eef3de-bc38-4320-a160-64628a4c2e50-125h-1500w.undefined");
}
.page5-container1 {
  top: 229px;
  left: 8px;
  width: 1584px;
  height: 632px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page5-image {
  top: 136px;
  left: 0px;
  width: 325px;
  height: 496px;
  position: absolute;
  align-self: flex-end;
  object-fit: cover;
}
.page5-image1 {
  top: 136px;
  right: 0px;
  width: 325px;
  height: 496px;
  position: absolute;
  align-self: flex-end;
  object-fit: cover;
}
.page5-text {
  top: 0px;
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
.page5-navlink {
  top: 291px;
  left: 595px;
  color: var(--dl-color-primary-text);
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
