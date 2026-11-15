'use strict';
// An explanatory local simulation; never calls a browser bridge or network API.
(() => {
  let visible = false;
  let checked = false;
  const el = id => document.getElementById(id);
  function render(message) {
    el('tab-state').textContent = 'Work tab: ' + (visible ? 'visible' : 'hidden');
    el('checkbox-state').textContent = checked ? 'checked' : 'unchecked';
    el('check-mark').textContent = checked ? '✓' : ' ';
    el('check-mark').classList.toggle('checked', checked);
    el('lab-result').textContent = message;
  }
  el('try-input').addEventListener('click', () => {
    if (!visible) {
      render('Refused: the connected tab is hidden. No input sent; checkbox unchanged. Focus the work tab, then try again.');
      return;
    }
    checked = !checked;
    render('Visible input accepted. Verify the result: the checkbox is now ' + (checked ? 'checked.' : 'unchecked.'));
  });
  el('focus-tab').addEventListener('click', () => {
    visible = true;
    render('The same connected work tab is now visible. No click has been sent. Try a click to change the checkbox.');
  });
  el('reset-lab').addEventListener('click', () => {
    visible = false;
    checked = false;
    render('Reset. Try a click while hidden, then focus the tab and try again.');
  });
})();
