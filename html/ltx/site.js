/* Layout helper: after MathJax typesets, widen any p{}-column cell whose content
   (usually one long unbreakable inline formula) is wider than its LaTeX column width,
   so it never overlaps the next column or gets clipped. Layout only. */
(function(){
  function fit(){
    var ps=document.querySelectorAll('.ltx_tabular .ltx_inline-block > .ltx_p[style*="width"]');
    for(var i=0;i<ps.length;i++){var p=ps[i];if(p.scrollWidth>p.clientWidth+1)p.style.width=Math.ceil(p.scrollWidth+2)+'px';}
  }
  function go(){ if(window.MathJax&&MathJax.startup&&MathJax.startup.promise){MathJax.startup.promise.then(fit);} else fit(); }
  if(document.readyState==='complete')go(); else window.addEventListener('load',go);
})();
