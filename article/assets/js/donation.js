/* Hidden donation popup shell for later activation. */
(function() {
    var popup = document.querySelector('[data-donation-popup]');
    var backdrop = document.querySelector('[data-donation-backdrop]');
    var supportPage = document.querySelector('[data-donation-support-page]');

    if (!popup && !supportPage) {
        return;
    }

    if (popup) {
        initPopup();
    }

    if (supportPage) {
        initSupportPage();
    }

    function initPopup() {
        var closeButtons = Array.prototype.slice.call(popup.querySelectorAll('[data-donation-close]'));

        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                closePopup();
            });
        });

        if (backdrop) {
            backdrop.addEventListener('click', function() {
                closePopup();
            });
        }

        window.top2tenDonationPopup = {
            open: openPopup,
            close: closePopup
        };

        closePopup();
    }

    function openPopup() {
        if (!popup) {
            return;
        }

        popup.hidden = false;
        popup.setAttribute('aria-hidden', 'false');
        if (backdrop) {
            backdrop.hidden = false;
        }
        document.body.classList.add('is-donation-sheet-visible');
    }

    function closePopup() {
        if (!popup) {
            return;
        }

        popup.hidden = true;
        popup.setAttribute('aria-hidden', 'true');
        if (backdrop) {
            backdrop.hidden = true;
        }
        document.body.classList.remove('is-donation-sheet-visible');
    }

    function initSupportPage() {
        var amountButtons = Array.prototype.slice.call(supportPage.querySelectorAll('[data-donation-select-amount]'));
        var selectedAmount = parseInt((amountButtons[0] && amountButtons[0].getAttribute('data-donation-select-amount')) || '99', 10);

        updateAmountButtons(amountButtons, selectedAmount);
        updateSupportLinks(selectedAmount);

        amountButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var value = this.getAttribute('data-donation-select-amount');
                if (value === 'custom') {
                    var customValue = window.prompt('Enter your donation amount in INR', String(selectedAmount));
                    if (!customValue) {
                        return;
                    }
                    customValue = parseInt(String(customValue).replace(/[^0-9]/g, ''), 10);
                    if (!customValue || customValue < 1) {
                        return;
                    }
                    selectedAmount = customValue;
                } else {
                    selectedAmount = parseInt(value, 10) || selectedAmount;
                }

                updateAmountButtons(amountButtons, selectedAmount);
                updateSupportLinks(selectedAmount);
            });
        });
    }

    function updateSupportLinks(amount) {
        Array.prototype.slice.call(supportPage.querySelectorAll('[data-donation-link]')).forEach(function(link) {
            var href = link.getAttribute('href');
            if (!href) {
                return;
            }

            var url = new URL(href, window.location.origin);
            url.searchParams.set('amount', amount);
            link.setAttribute('href', url.pathname + url.search);
            link.setAttribute('data-amount', String(amount));
        });
    }

    function updateAmountButtons(buttons, amount) {
        buttons.forEach(function(button) {
            var value = button.getAttribute('data-donation-select-amount');
            var matches = value === 'custom' ? false : parseInt(value, 10) === amount;
            button.classList.toggle('is-selected', matches);
            if (value === 'custom' && !buttons.some(function(item) {
                var itemValue = item.getAttribute('data-donation-select-amount');
                return itemValue !== 'custom' && parseInt(itemValue, 10) === amount;
            })) {
                button.classList.add('is-selected');
                button.textContent = 'Custom Rs' + amount;
            } else if (value === 'custom') {
                button.classList.remove('is-selected');
                button.textContent = 'Custom';
            }
        });
    }
})();
