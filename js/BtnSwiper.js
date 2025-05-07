const BtnSwiper = {
    setup() {
        const pic1 = ref('')
        const pic2 = ref('')

        const checkWidth = () => {
            if (window.innerWidth >= 1400) {
                pic1.value = './img/01.avif'
                pic2.value = './img/02.avif'
            } else
                if (window.innerWidth >= 1080) {
                    pic1.value = './img/Highlight-Microsoft-365-Icon-Toss-Cycle-2_VP4-1399x600.avif'
                    pic2.value = './img/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682_VP4-1399x600.avif'
                } else {
                    pic1.value = './img/mobile01.png'
                    pic2.value = './img/mobile02.png'
                }
        }


        onMounted(() => {
            checkWidth()
            new Swiper('.swiper', {

                effect: 'slide',
                loop: true,  // <<< 開啟循環
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            addEventListener('resize', checkWidth)
        })

        onUnmounted(() => {
            removeEventListener('resize', checkWidth)
        })

        return {
            pic1,
            pic2
        }

    },
    template: `<div class="swiperBox">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img :src="pic1" alt="" key="1" />
                        <div class="promo2">
                            <div class="promo2-box">
                                <h2>驚奇不斷的收穫</h2>
                                <p>Microsoft 365 在您喜愛的應用程式中提供雲端儲存空間、安全性及 Microsoft Copilot——購買一個方案，就可享有這一切。</p>
                                <button>選購 Microsoft 365</button>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-slide">
                        <img :src="pic2" alt="" key="2" />
                        <div class="promo1">
                            <div class="promo1-box">
                                <h2>認識 Surface Pro</h2>
                                <p>這台膝上型電腦擁有無與倫比的彈性和人工智慧功能，例如即時輔助字幕和 Cocreator，助您獲得更多選項。</p>
                                <button>深入了解</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>`,



}