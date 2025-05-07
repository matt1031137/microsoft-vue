const BannerSwiper = {
  props: {
    bannerList: Array
  },
  setup(props) {
    onMounted(() => {
      new Swiper('.bannerSwiper', {
        autoplay: true,
        effect: 'fade',
        pagination: {
          el: '.pagination',
          clickable: true
        },
      });
    })
    return {
      props
    }
  },
  template: /*html*/ `<div class="swiper bannerSwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="list in props.bannerList" :key="list.id">
      <img :src="list.b_pic" alt="" class="w-full max-h-[825px]">
    </div>
  </div>
  <div class="pagination absolute flex items-center justify-center z-10 lg:!bottom-8 left-0">
  </div>
</div>`
}