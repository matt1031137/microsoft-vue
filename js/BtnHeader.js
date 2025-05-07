const BtnHeader = {
    setup() {
        const isMore = ref(false)
        const toggleIsMore = () => {
            isMore.value = !isMore.value
            isMicrosoft.value = false
        }

        const isMicrosoft = ref(false)
        const toggleIsMicrosoft = () => {
            isMicrosoft.value = !isMicrosoft.value
            isMore.value = false
            console.log(isMicrosoft.value)
        }

        const closeNav = (e) => {
            if (!e.target.closest('.more') &&
                !e.target.closest('.micro') &&
                !e.target.closest('.search-btn') &&
                !e.target.closest('.search') &&
                !e.target.closest('.mobile-btn1') &&
                !e.target.closest('.mobile-btn2') &&
                !e.target.closest('#mobileToggle') &&
                !e.target.closest('#mobileToggle2') &&
                !e.target.closest('#goSearch') &&
                !e.target.closest('#backSearch') &&
                !e.target.closest('#textSearch') &&
                !e.target.closest('[data-close]') ) {
                isMore.value = false
                isMicrosoft.value = false
                isSearch.value = false
                mobileNav.value = false
                isMobileSearch.value = false
            }
        }
        // const closeNav = (e) => {
        //     if (!e.target.closest('  ')) {
        //         isMore.value = false
        //         isMicrosoft.value = false
        //         isSearch.value = false
        //         mobileNav.value = false
        //         isMobileSearch.value = false
        //     }
        // }

        const input = ref(null) //抓input元件
        const isSearch = ref(false)
        const toggleIsSearch = () => {
            isSearch.value = !isSearch.value;
            isMicrosoft.value = false
            isMore.value = false
            if (isSearch.value) {
                setTimeout(() => { input.value.focus() }, 100)
            }
        }


        // 操作手機板選單
        const mobileNav = ref(false);
        const setMobileNav = () => {
            mobileNav.value = !mobileNav.value
        }

        const mobileToggle0 = ref(false)
        const mobileToggle1 = ref(false)
        const mobileToggle2 = ref(false)
        const mobileToggle3 = ref(false)
        const mobileToggle4 = ref(false)
        const mobileToggle5 = ref(false)

        const setMobileToggle = (num) => {
            switch (num) {
                case 0:
                    mobileToggle0.value = !mobileToggle0.value
                    break
                case 1:
                    mobileToggle1.value = !mobileToggle1.value
                    break
                case 2:
                    mobileToggle2.value = !mobileToggle2.value
                    break
                case 3:
                    mobileToggle3.value = !mobileToggle3.value
                    break
                case 4:
                    mobileToggle4.value = !mobileToggle4.value
                    break
                case 5:
                    mobileToggle5.value = !mobileToggle5.value
                    break
            }

        }


        //操作手機搜尋
        const input2 = ref(null) //抓手機input元件
        const isMobileSearch = ref(false)
        const setIsMobileSearch = () => {
            isMobileSearch.value = !isMobileSearch.value
            mobileNav.value = false
            if (isMobileSearch.value) {
                setTimeout(() => { input2.value.focus() }, 100)
            }
        }

        onMounted(() => {
            addEventListener("click", closeNav)
        })

        onUnmounted(() => {
            removeEventListener("click", closeNav)
        })


        return {
            isMore,
            toggleIsMore,
            isMicrosoft,
            toggleIsMicrosoft,
            isSearch,
            toggleIsSearch,
            input,
            mobileNav,
            setMobileNav,
            mobileToggle0,
            mobileToggle1,
            mobileToggle2,
            mobileToggle3,
            mobileToggle4,
            mobileToggle5,
            setMobileToggle,
            isMobileSearch,
            setIsMobileSearch,
            input2
        }
    },
    template: `
        <header>
            <div class="header-left">
                <div class="header-left-one"><img src="./img/RE1Mu3b.png" alt="">
                </div>

                <div v-if="!isSearch" class="header-left-two">
                    <span>Microsoft 365</span>
                    <span>Teams</span>
                    <span>Windows</span>
                    <span>Surface</span>
                    <span class="less">Xbox</span>
                    <span class="less">支援</span>
                    <span class="more" :class="{active:isMore}" @click="toggleIsMore"   >
                        更多<i class="fa-solid fa-chevron-down"></i>
                        <ul class="sub" v-if="isMore">
                            <li class="sub-menu">Xbox</li>
                            <li class="sub-menu">支援</li>
                        </ul>
                    </span>

                </div>

            </div>
            <div v-if="!isSearch" class="header-right">
                <span @click="toggleIsMicrosoft" :class="{active:isMicrosoft}" class="micro"   >
                    <span class="under">所有Microsoft</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </span>

                <span class="search" @click="toggleIsSearch"><span class="under2 xl">搜尋</span>
                    <i class="big fa-solid fa-magnifying-glass"></i>
                </span>

                <span><span class="under2 xl">購物車</span>
                    <i class="fa-solid fa-cart-shopping big"></i>
                </span>

                <span><span class="xl">登入</span>
          <img src="./img/member.png" alt="">
              
                </span>


            </div>
            <!-- 搜尋 -->
            <div class="search" v-if="isSearch"   >
                <input type="text" placeholder="搜尋 Microsoft.com" ref="input">
                <button class="search-btn" @click="toggleIsSearch"   >取消</button>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
            </div>
            <div v-if="isMicrosoft" class="microsoft">
                <div class="microsoft-top">
                    <ul>
                        <li class="subTitle">軟體</li>
                        <li class="sun-menu">Windows 應用程式</li>
                        <li class="sun-menu">AI</li>
                        <li class="sun-menu">OneDrive</li>
                        <li class="sun-menu">Outlook</li>
                        <li class="sun-menu">Skype</li>
                        <li class="sun-menu">OneNote</li>
                        <li class="sun-menu">Microsoft Teams</li>
                    </ul>
                    <ul>
                        <li class="subTitle">個人電腦和設備</li>
                        <li class="sun-menu">電腦配件</li>
                    </ul>
                    <ul>
                        <li class="subTitle">娛樂</li>
                        <li class="sun-menu">Xbox Game Pass Ultimate</li>
                        <li class="sun-menu">Xbox Live Gold</li>
                        <li class="sun-menu">Xbox 與遊戲</li>
                        <li class="sun-menu">電腦遊戲</li>
                        <li class="sun-menu">Windows 遊戲</li>
                    </ul>
                    <ul>
                        <li class="subTitle">商務適用</li>
                        <li class="sun-menu">Microsoft Cloud</li>
                        <li class="sun-menu">Microsoft 安全性</li>
                        <li class="sun-menu">Azure</li>
                        <li class="sun-menu">Dynamics 365</li>
                        <li class="sun-menu">商務用 Microsoft 365</li>
                        <li class="sun-menu">Microsoft 產業</li>
                        <li class="sun-menu">Microsoft Power Platform</li>
                        <li class="sun-menu">Windows 365</li>
                    </ul>
                    <ul>
                        <li class="subTitle">開發人員與IT</li>
                        <li class="sun-menu">Microsoft 開發人員工具</li>
                        <li class="sun-menu">Microsoft Learn</li>
                        <li class="sun-menu">支援AI 市場應用程式</li>
                        <li class="sun-menu">Microsoft 技術支援</li>
                        <li class="sun-menu">Azure Marketplace</li>
                        <li class="sun-menu">AppSource</li>
                        <li class="sun-menu">Visual Studio</li>
                    </ul>
                    <ul>
                        <li class="subTitle">其他</li>
                        <li class="sun-menu">Microsoft Rewards</li>
                        <li class="sun-menu">免費下載與安全性</li>
                        <li class="sun-menu">教育</li>
                        <li class="sun-menu">禮品卡</li>
                        <li class="sun-menu">Licensing</li>
                    </ul>
                </div>
                <div class="microsoft-botton">
                    檢視網站地圖 <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </header>


        <mobileHeader v-if="!isMobileSearch">
            <div class="mobile-left">
                <i v-if="!mobileNav"
                @click="setMobileNav" id="mobileToggle" class="fa-solid fa-bars"   ></i>
                <i v-if="mobileNav" 
                @click="setMobileNav" id="mobileToggle2" class="fa-solid fa-xmark"   ></i>
                <i @click="setIsMobileSearch" 
                class="big fa-solid fa-magnifying-glass"
                id="goSearch"   ></i>
            </div>

            <div class="mobile-mid">
                <img src="./img/RE1Mu3b.png" alt="">
            </div>

            <div class="mobile-right">
                <i class="fa-solid fa-cart-shopping big"></i>
                  <img src="./img/member.png" alt="">
            </div>

            <div class="mobile-nav" v-if="mobileNav">
                <ul>
                    <li class="mobile-btn1"   >Microsoft 365</li>
                    <li class="mobile-btn1"   >Teams</li>
                    <li class="mobile-btn1"   >Windows</li>
                    <li class="mobile-btn1"   >Surface</li>
                    <li class="mobile-btn1"   >xbox</li>
                    <li>
                     <span class="mobile-btn2" @click="setMobileToggle(0)"   >
                            <span>軟體</span> <i class="fa-solid fa-chevron-down"></i>
                    </span>
                        <ul v-if="mobileToggle0 == true">
                            <li data-close>Windows應用程式</li>
                            <li data-close>AI</li>
                            <li data-close>OneDrive</li>
                            <li data-close>Outlook</li>
                            <li data-close>Skype</li>
                            <li data-close>OneNote</li>
                            <li data-close class="lastOne">Microsoft Teams</li>
                        </ul>
                    </li>
                    <li><span class="mobile-btn2"  @click="setMobileToggle(1)   "
                        ><span>個人電腦與設備</span> <i class="fa-solid fa-chevron-down"></i></span>
                        <ul v-if="mobileToggle1 == true">
                            <li data-close class="lastOne">電腦配件</li>
                        </ul>
                    </li>
                    <li><span class="mobile-btn2"   
                        @click="setMobileToggle(2)"><span>娛樂</span><i class="fa-solid fa-chevron-down"></i></span>
                        <ul v-if="mobileToggle2 == true">
                            <li data-close>Xbox Game Pass</li>
                            <li data-close>Xbox Live Gold</li>
                            <li data-close>Xbox與遊戲</li>
                            <li data-close>電腦遊戲</li>
                            <li data-close class="lastOne">Windows 遊戲</li>
                        </ul>
                    </li>
                    <li><span class="mobile-btn2"   
                        @click="setMobileToggle(3)"
                        ><span>商務通用</span><i class="fa-solid fa-chevron-down"></i></span>
                        <ul v-if="mobileToggle3 == true">
                            <li data-close>Microsoft Cloud</li>
                            <li data-close>Microsoft 安全性</li>
                            <li data-close>Azure</li>
                            <li data-close>Dynamic 365</li>
                            <li data-close>商務用 Dynamic 365</li>
                            <li data-close>Microsoft 產業</li>
                            <li data-close>Microsoft Power Platform</li>
                            <li data-close class="lastOne">Windows 365</li>
                        </ul>
                    </li>
                    <li><span class="mobile-btn2"   
                          @click="setMobileToggle(4)"
                        ><span>開發人員與IT</span><i class="fa-solid fa-chevron-down"></i></span>
                        <ul  v-if="mobileToggle4 == true">
                            <li data-close>Microsoft 開發人員工具</li>
                            <li data-close>Microsoft Learn</li>
                            <li data-close>支援AI 市場應用程式</li>
                            <li data-close>Microsoft 技術社群</li>
                            <li data-close>Azure Marketplace</li>
                            <li data-close>AppSource</li>
                            <li data-close class="lastOne">Visual Studio</li>
                        </ul>
                    </li>
                    <li><span class="mobile-btn2"   
                          @click="setMobileToggle(5)"
                        ><span>其他</span><i class="fa-solid fa-chevron-down"></i></span>
                        <ul  v-if="mobileToggle5 == true">
                            <li data-close>Microsoft Rewards</li>
                            <li data-close>免費下載與安全性</li>
                            <li data-close>教育</li>
                            <li data-close>禮品卡</li>
                            <li data-close class="lastOne">Licensing</li>
                        </ul>
                    </li>
                    <li class="mobile-btn1">檢視網站地圖</li>

                    
                </ul>
            </div>
        </mobileHeader>

        <mobileSearchHeader v-if="isMobileSearch"> 
            <i @click="setIsMobileSearch" class="fa-solid fa-arrow-left" id="backSearch"   ></i>
            <input type="text" placeholder="搜尋 Microsoft.com" ref="input2" id="textSearch"   >
                    <i
                    class="big fa-solid fa-magnifying-glass"></i>
        </mobileSearchHeader>`
}