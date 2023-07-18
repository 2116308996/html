            Vue.component("swiperItem",{
				template:`
				<div class="swiper-slide">
					 <slot></slot>
				</div>
				`
			})
            Vue.component("swiper-bar",{
				props:{
					loop:{
						type:Boolean,
						default:true
					}
				},
				template:`
				<div class="swiper">
			    <div class="swiper-wrapper">
				    <slot></slot>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			    
			    <!-- 如果需要导航按钮 -->
			    <div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div>
			    
			    <!-- 如果需要滚动条 -->
			    <!-- <div class="swiper-scrollbar"></div>  -->
			    </div>
				`,
				mounted() {
					// 初始化swiper
						new Swiper(".zhuhui", {
							//direction: 'vertical', // 垂直切换选项
							loop:this.loop, // 循环模式选项
							
							//如果需要分页器
							pagination: {
							  el: '.swiper-pagination',
							},
							 
							// 如果需要前进后退按钮
							navigation: {
							  nextEl: '.swiper-button-next',
							  prevEl: '.swiper-button-prev',
							},
							
							// 自动切换
							 autoplay: {
							          delay: 2500,
							          disableOnInteraction: false,
							        },
							
							// 如果需要滚动条
							// scrollbar: {
							//   el: '.swiper-scrollbar',
							// },
						})
					
				},
				updated() {
					
				}
			})
			