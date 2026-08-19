(function(){
  const config = window.YOSHI_ANALYTICS_CONFIG || {};
  const measurementId = String(config.measurementId || '').trim();
  const configured = /^G-[A-Z0-9]+$/i.test(measurementId) && measurementId !== 'G-XXXXXXXXXX';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  window.yoshiTrack = function(name, params){
    if(!configured) return;
    const safeParams = Object.assign({site_area:'private_medical_money_navi'}, params || {});
    window.gtag('event', name, safeParams);
  };
  window.yoshiAnalyticsConfigured = function(){ return configured; };

  if(!configured) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, config.debug ? {debug_mode:true} : {});

  function text(el, selector){
    const node = el && el.querySelector ? el.querySelector(selector) : null;
    return node ? node.textContent.trim() : '';
  }
  function queryLengthBand(value){
    const n = String(value || '').trim().length;
    if(n === 0) return '0';
    if(n <= 3) return '1_3';
    if(n <= 8) return '4_8';
    return '9_plus';
  }

  document.addEventListener('click', function(e){
    const target = e.target.closest('a,button');
    if(!target) return;

    if(target.matches('.instagram-btn, a[href*="instagram.com/yoshi.daigaku_navi"]')){
      window.yoshiTrack('instagram_click', {placement: target.closest('footer') ? 'footer' : 'cta'});
      return;
    }

    if(target.matches('#headNationalLink,#nationalMedicalLink,#footerNationalLink')){
      window.yoshiTrack('series_link_click', {destination:'national_public_medical', placement: target.id || 'unknown'});
      return;
    }

    if(target.id === 'loadmore'){
      const summary = document.querySelector('#resultSummary');
      window.yoshiTrack('load_more', {result_summary: summary ? summary.textContent.trim() : ''});
      return;
    }

    if(target.matches('[data-snapshot-sort]')){
      window.yoshiTrack('quick_sort', {sort_key: target.dataset.snapshotSort || 'unknown'});
      return;
    }

    if(target.matches('[data-compare]')){
      const card = target.closest('.card');
      window.yoshiTrack('compare_toggle', {
        action: target.classList.contains('selected') ? 'remove' : 'add',
        school_name: target.dataset.compare || text(card,'h3') || 'unknown'
      });
      return;
    }

    if(target.id === 'opencompare'){
      const count = document.querySelector('#comparecount');
      window.yoshiTrack('compare_open', {school_count: Number(count ? count.textContent : 0) || 0});
      return;
    }

    if(target.id === 'clearcompare'){
      window.yoshiTrack('compare_clear');
      return;
    }

    if(target.closest('.card') && target.matches('a[href^="http"]')){
      window.yoshiTrack('official_source_click', {school_name:text(target.closest('.card'),'h3') || 'unknown'});
      return;
    }

    if(target.closest('#comparecontent') && target.matches('a[href^="http"]')){
      window.yoshiTrack('official_source_click', {school_name:text(target.closest('td'),'[data-label]') || 'compare_modal'});
    }
  });

  document.addEventListener('change', function(e){
    const el = e.target;
    if(!el || !el.id) return;

    if(['status','budget','sort'].includes(el.id)){
      window.yoshiTrack('filter_change', {filter_name:el.id, filter_value:String(el.value)});
      return;
    }

    if(el.id === 'q'){
      window.yoshiTrack('keyword_search', {query_length_band:queryLengthBand(el.value)});
      return;
    }

    if(el.id === 'calcUniversity'){
      window.yoshiTrack('calculator_school_change', {school_name:String(el.value || 'unknown')});
      return;
    }

    if(el.id === 'life'){
      window.yoshiTrack('calculator_life_change', {monthly_life_man:Number(el.value) || 0});
    }
  });

  document.addEventListener('toggle', function(e){
    const details = e.target;
    if(details && details.matches && details.matches('.tipdetails') && details.open){
      const card = details.closest('.card');
      window.yoshiTrack('cost_detail_open', {school_name:text(card,'h3') || 'unknown'});
    }
  }, true);
})();
