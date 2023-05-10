<template>
  <div class="page3-container">
    <div class="page3-container1">
      <div class="page3-container2"></div>
      <span class="page3-text">Изучить</span>
      <span class="page3-text1">Повторить</span>
      <img
        alt="image"
        src="/playground_assets/rectangle31427-27o-500h.png"
        class="page3-image"
      />
      <img
        alt="image"
        src="/playground_assets/imagephotoroom11533-knum-500h.png"
        class="page3-image1"
      />
      <router-link to="/11" class="page3-navlink">
        <img
          alt="image"
          src="/playground_assets/rectangle31427-27o-500h.png"
          class="page3-image2"
        />
      </router-link>
      <span class="page3-text2">1 2 3</span>
      <span class="page3-text3">?</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  metaInfo: {
    title: 'exported project',
    meta: [
      {
        property: 'og:title',
        content: 'exported project',
      },
    ],
  },
}
</script>

<style scoped>
.page3-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: row;
  background-size: cover;
  justify-content: center;
  background-image: url("/playground_assets/3ba568a4-6e96-48e9-a247-3448b80f3874-e16p-1500w.undefined");
}
.page3-container1 {
  width: 100%;
  height: 822px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.page3-container2 {
  flex: 0 0 auto;
  width: 100px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page3-text {
  top: 528px;
  left: 276px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 100px;
  align-self: flex-end;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
}
.page3-text1 {
  top: 528px;
  left: 893px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 100px;
  align-self: flex-end;
  font-family: Frozen1;
  font-weight: 700;
  text-transform: none;
  text-decoration: none;
}
.page3-image {
  top: 107px;
  left: 0px;
  right: 0px;
  width: 430px;
  height: 430px;
  position: absolute;
  align-self: center;
  margin-top: auto;
  object-fit: cover;
  margin-left: auto;
  border-color: var(--dl-color-primary-text);
  border-width: 5px;
  margin-right: 257px;
  border-radius: var(--dl-radius-radius-radius15);
  margin-bottom: auto;
}
.page3-image1 {
  top: 107px;
  right: 0px;
  width: 430px;
  height: 430px;
  position: absolute;
  align-self: flex-end;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 257px;
  border-radius: var(--dl-radius-radius-radius15);
  margin-bottom: 0px;
}
.page3-navlink {
  display: contents;
}
.page3-image2 {
  top: 107px;
  left: 0px;
  width: 430px;
  height: 430px;
  position: absolute;
  object-fit: cover;
  margin-left: 250px;
  border-color: var(--dl-color-primary-text);
  border-width: 5px;
  border-radius: var(--dl-radius-radius-radius15);
  text-decoration: none;
}
.page3-text2 {
  top: 251px;
  left: 343px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 120px;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
}
.page3-text3 {
  top: 267px;
  left: 1115px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 120px;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
}
</style>
