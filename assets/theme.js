/**
 * Goal: Keep the displayed product price aligned with the chosen variant.
 * Method: Read the selected option's server-rendered price and availability data.
 * Inputs/Outputs: Accepts a product form element and updates nearby page elements; returns nothing.
 */
function updateSelectedVariant(form) {
  const select = form.querySelector('[data-variant-select]');
  if (!select) return;

  const option = select.selectedOptions[0];
  const price = form.closest('.product-info').querySelector('[data-product-price]');
  const button = form.querySelector('[data-add-button]');
  price.textContent = option.dataset.price;
  button.disabled = option.dataset.available !== 'true';
}

/**
 * Goal: Connect every product variant picker to its price and availability display.
 * Method: Attach one change listener to each product form after the page loads.
 * Inputs/Outputs: Takes no arguments and returns nothing.
 */
function initializeVariantPickers() {
  document.querySelectorAll('.product-form').forEach((form) => {
    form.addEventListener('change', () => updateSelectedVariant(form));
  });
}

initializeVariantPickers();
