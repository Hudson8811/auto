jQuery(function ($) {
	function LoadingRow(row) {
		var row=$(row);
		return {
			set: function (loadValue) {
				var row1= row.find('.loading_row1');
				var row2= row.find('.loading_row2');
				$([]).add(row1).add(row2).removeClass(['w100', 'w90', 'w80', 'w70', 'w60', 'w50', 'w40', 'w30', 'w20', 'w10']);
				row1.addClass('w'+loadValue);
				row2.addClass('w'+(loadValue-10));
				console.log(loadValue);

			}
		}

	}

	function intFromText(str) {
		return parseInt(str.replace(/[aA-zZ]|\W+/g, ''));
	}

	function isTradein($obj) {
		return $obj.hasClass('tradein')
	}

	function isUtil($obj) {
		return $obj.hasClass('util')
	}

	window.WidgetCreditFormStep = {
		discountCredit: 0,
		discountCreditMod: 30000,
		init: function () {
			this.$creditFormBrand = $('#creditFormBrand');
			this.$jsChangeColorBrandImage = $('#jsChangeColorBrandImage');
			this.$creditFormCar = $('#creditFormCar');
			this.$creditFormEq = $('#creditFormEq');
			this.$creditFormBrandTitle = $('#creditFormBrandTitle');
			this.$creditFormCarTitle = $('#creditFormCarTitle');

			this.$jsChangeColorImage = $('#jsChangeColorImage');
			this.defaultImage = '/assets/images/img/auto_grey2.png';

			this.$creditFormCarColors = $('#creditFormCarColors');
			this.$creditFormEqTitle = $('#creditFormEqTitle');
			this.$creditFormCarDiscountPrice = $('.creditFormCarDiscountPrice');
			this.$creditFormCarPrice = $('#creditFormCarPrice');
			this.$jsColorName = $('#jsColorName');
			this.$creditFormBank = $('#prioritybank');
			this.$sum_price_new = $('#sum_price_new');
			this.$jsAgreePersent = $('#jsAgreePersent');
			this.loadingRowStep4 = new LoadingRow('.loading_row.step4');

			this.step4();
			this.agreePersent();
		},
		/** form */
		step4: function () {
			$(".link-to-btn").on('click', function () {
				$('.step_4 button').addClass('bloom-bloom');
				setTimeout(function () {
					$('.step_4 button').removeClass('bloom-bloom');
				}, 400)
			});
		},
		agreePersent: function () {
			let self = this;
			$('#jsTradeinModel, #tickets-other-year,#tickets-other-city').on('keyup', function () {
				$(document).trigger('creditFormAgree');
			});

			self.$jsAgreePersent.text(`50 %`);
			$(document).on('creditFormAgree', function () {
				let agreePersent = 60;
				let yearValue = $('#tickets-other-year').val().trim();
				let cityValue = $('#tickets-other-city').val().trim();



				let loadValue = 80;
				if (yearValue) {
					loadValue += 10;
					agreePersent += 5;
				}
				if (cityValue) {
					loadValue += 10;
					agreePersent += 5;
				}

				self.loadingRowStep4.set(loadValue);

				self.$jsAgreePersent.text(`${agreePersent} %`);
			});
		},
		getYourPriceStep2: function () {
			let $input = $('#jsTradeinYourPrice');
			if ($input.length && $input.val()) {
				return intFromText($input.val());
			}
			return 0;

		}
	}


	window.WidgetCreditFormStep.init();
});