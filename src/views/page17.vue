<template>
  <div class="page17-container">
    <div class="page17-container1">
      <div class="page17-container2">
        <span class="page17-text">Повторить</span>
        <router-link to="/12" class="page17-navlink">
          <img
            alt="image"
            src="/playground_assets/rectangle31427-27o-500h.png"
            class="page17-image"
          />
        </router-link>
        <router-link to="/12" class="page17-navlink1">
          <img
            alt="image"
            src="/playground_assets/imagephotoroom11533-knum-500h.png"
            class="page17-image1"
          />
        </router-link>
        <router-link to="/12" class="page17-navlink2">?</router-link>
      </div>
      <router-link to="/11" class="page17-navlink3">
        <img
          alt="image"
          src="/playground_assets/rectangle31427-27o-500h.png"
          class="page17-image2"
        />
      </router-link>
      <router-link to="/11" class="page17-navlink4">1 2 3</router-link>
      <span class="page17-text1">Изучить</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page17',
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
.page17-container {
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
.page17-container1 {
  width: 100%;
  height: 822px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.page17-container2 {
  top: 107px;
  left: 893px;
  width: 489.84375px;
  height: 536px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
}
.page17-text {
  left: 0px;
  color: var(--dl-color-primary-text);
  bottom: 0px;
  position: absolute;
  font-size: 100px;
  align-self: flex-end;
  font-family: Frozen1;
  font-weight: 700;
  text-transform: none;
  text-decoration: none;
}
.page17-navlink {
  display: contents;
}
.page17-image {
  top: 0px;
  left: 20px;
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
  text-decoration: none;
}
.page17-navlink1 {
  display: contents;
}
.page17-image1 {
  top: 0px;
  left: 20px;
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
  text-decoration: none;
}
.page17-navlink2 {
  top: 160px;
  left: 222px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 120px;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
  text-decoration: none;
}
.page17-navlink3 {
  display: contents;
}
.page17-image2 {
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
.page17-navlink4 {
  top: 251px;
  left: 343px;
  color: var(--dl-color-primary-text);
  position: absolute;
  font-size: 120px;
  font-style: normal;
  font-family: Frozen1;
  font-weight: 700;
  text-decoration: none;
}
.page17-text1 {
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
</style>
