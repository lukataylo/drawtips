/* Grid overlay: 12-column grid + 8px baseline grid.
   Toggle with the "Grid" button (bottom-right) or press "g".
   Cycles: off -> columns -> columns + baseline -> off */
(function () {
  var wrap = document.createElement('div');
  wrap.id = 'grid-overlay';
  wrap.setAttribute('aria-hidden', 'true');

  var cols = document.createElement('div');
  cols.className = 'go-cols';
  var inner = document.createElement('div');
  inner.className = 'go-cols-inner';
  for (var i = 0; i < 12; i++) {
    var c = document.createElement('div');
    c.className = 'go-col';
    inner.appendChild(c);
  }
  cols.appendChild(inner);

  var baseline = document.createElement('div');
  baseline.className = 'go-baseline';

  wrap.appendChild(cols);
  wrap.appendChild(baseline);
  document.body.appendChild(wrap);

  var btn = document.createElement('button');
  btn.id = 'grid-overlay-btn';
  btn.type = 'button';
  btn.textContent = 'Grid: off';
  document.body.appendChild(btn);

  var style = document.createElement('style');
  style.textContent = [
    'body{position:relative;}', /* so the overlay spans the full document, not one viewport */
    '#grid-overlay{position:absolute;inset:0;pointer-events:none;z-index:9998;display:none;}',
    'body.go-cols-on #grid-overlay, body.go-all-on #grid-overlay{display:block;}',
    '.go-cols{position:absolute;inset:0;}',
    '.go-cols-inner{box-sizing:border-box;height:100%;margin:0 auto;display:grid;grid-template-columns:repeat(12,1fr);gap:var(--go-gutter,24px);max-width:var(--go-max,1128px);padding:0 var(--go-margin,24px);}',
    '.go-col{background:rgba(255,60,60,.09);outline:1px solid rgba(255,60,60,.18);}',
    '.go-baseline{position:absolute;inset:0;display:none;background:repeating-linear-gradient(to bottom,rgba(0,120,255,.28) 0,rgba(0,120,255,.28) 1px,transparent 1px,transparent 8px);}',
    'body.go-all-on .go-baseline{display:block;}',
    '#grid-overlay-btn{position:fixed;right:16px;bottom:16px;z-index:9999;font:600 12px/1 system-ui,sans-serif;padding:8px 12px;border-radius:4px;border:1px solid rgba(0,0,0,.25);background:#fff;color:#111;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.15);}'
  ].join('\n');
  document.head.appendChild(style);

  var state = 0; // 0 off, 1 cols, 2 cols+baseline
  function apply() {
    document.body.classList.toggle('go-cols-on', state === 1);
    document.body.classList.toggle('go-all-on', state === 2);
    btn.textContent = state === 0 ? 'Grid: off' : state === 1 ? 'Grid: 12 col' : 'Grid: 12 col + 8px';
  }
  function cycle() { state = (state + 1) % 3; apply(); }
  btn.addEventListener('click', cycle);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'g' && !e.metaKey && !e.ctrlKey && !e.altKey) cycle();
  });
})();
