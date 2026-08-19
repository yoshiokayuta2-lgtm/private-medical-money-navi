
// 公開時はこの1か所を実際の国公立医学科ページURLへ変更してください。
const NATIONAL_MEDICAL_URL="https://yoshiokayuta2-lgtm.github.io/kokkoritsu-medical-navi/";
document.querySelector("#nationalMedicalLink").href=NATIONAL_MEDICAL_URL;
["#headNationalLink","#footerNationalLink"].forEach(sel=>{const el=document.querySelector(sel);if(el)el.href=NATIONAL_MEDICAL_URL;});
const data=[
{name:'国際医療福祉大学',place:'千葉県成田市',pref:'千葉県',total:1850,first:450,badge:'2026公式',status:'公式確認済み',tags:['分割納入あり','特待制度あり','成田キャンパス'],tip:'2026年度は初年度450万円、2年次以降年280万円、6年間総額1,850万円。学生納付金とは別に教育後援会費・海外臨床実習積立金等が必要。',special:'特待Sは最大6年間の学納金全額相当、特待Aは最大1,400万円を給付。継続条件あり',installment:'初年度は一括・分割を選択可',extra:'教育後援会年4.5万円＋海外臨床実習積立年7万円等',url:'https://narita.iuhw.ac.jp/gakubu/igakubu/admission/fees.html'},
{name:'順天堂大学',place:'東京都・千葉県',pref:'東京都',total:2080,first:290,badge:'低学費',status:'公式確認済み',tags:['初年度全寮制','特待6年間700万円','地域枠あり'],tip:'初年度のみ全寮制のため、学費とは別に寮費・諸会費・教材費が必要。',special:'特待時は6年間700万円。継続条件あり。',installment:'公式ページで要確認',extra:'寮費・諸会費・教材費が別途',url:'https://www.juntendo.ac.jp/admission/scholarship/med/'},
{name:'関西医科大学',place:'大阪府枚方市',pref:'大阪府',total:2100,first:290,badge:'低学費',status:'公式確認済み',tags:['特待初年度190万円免除','分割納入の考慮あり','諸会費あり'],tip:'学費とは別に、慈仁会費・学生自治会費・電子教科書代などが必要。',special:'特待は初年度190万円免除',installment:'初年度一部の分割を考慮',extra:'初年度27万円、次年度以降年5.6万円等',url:'https://www.kmu.ac.jp/admission/faculty/medicine/fee/index.html'},
{name:'藤田医科大学',place:'愛知県豊明市',pref:'愛知県',total:2152,first:492,badge:'2026値下げ',status:'公式確認済み',tags:['2026年度から値下げ','学援ローン','東海'],tip:'2026年度は学費のみ初年度492万円、2年次以降年332万円で6年間2,152万円。委託徴収金を含む6年間合計は2,212.6万円。',special:'一般入試成績上位10名を対象とする特待制度、FUJITA学援ローンあり',installment:'各学年とも前期・後期の2期納入',extra:'初年度委託徴収金27.6万円、2年次以降年6.6万円',url:'https://www.fujita-hu.ac.jp/admission/med_bosyu_2026.pdf'},
{name:'日本医科大学',place:'東京都・神奈川県',pref:'東京都',total:2200,first:450,badge:'特待枠',status:'公式確認済み',tags:['前期上位35名','後期上位3名','2年次以降分納・延納'],tip:'一般選抜特待は初年度授業料250万円免除。選抜区分により制度が異なる。',special:'一般選抜は初年度250万円免除など',installment:'2年次以降に分納・延納制度',extra:'諸会費等は公式資料で確認',url:'https://www.nms.ac.jp/college/medicine/school_expenses/'},
{name:'東京慈恵会医科大学',place:'東京都港区',pref:'東京都',total:2250,first:350,badge:'東京・低学費',status:'公式ページ確認',tags:['特待制度','奨学金','都心'],tip:'学費以外の学生会費・保護者会費などは年度の募集要項でも確認したい。',special:'特待生・奨学金制度あり',installment:'公式ページで要確認',extra:'諸会費等は募集要項で確認',url:'https://www.jikei.ac.jp/university/medicine/admission/fee/'},
{name:'東邦大学',place:'東京都大田区',pref:'東京都',total:2580,first:480,badge:'2026公式',status:'公式確認済み',tags:['在学生特待','分納・延納','東京'],tip:'2026年度は初年度学納金480万円、2年次以降年420万円で6年間2,580万円。初年度は別に委託徴収金49.78万円。',special:'2年次以降の在学生対象特待生制度は各学年若干名、授業料を最高100万円免除',installment:'延納・分納制度あり。条件は公式ページで確認',extra:'初年度委託徴収金49.78万円',url:'https://www.toho-u.ac.jp/info_exam/fee_nyusi.html'},
{name:'昭和医科大学',place:'東京都品川区ほか',pref:'東京都',total:2700,first:450,badge:'全寮制',status:'公式確認済み',tags:['初年度全寮制','寮費別途','特待制度'],tip:'2026年度の学費部分は初年度450万円、2〜6年次は授業料300万円＋教育施設充実費150万円で、6年間2,700万円。1年次は全寮制。',special:'医学部特待制度では初年度授業料を免除',installment:'納付時期・延納の詳細は大学案内で確認',extra:'初年度は寮費・食費・寝具等80万円＋学生会費等9.5万円',url:'https://www.showa-u.ac.jp/albums/abm.php?d=169&f=abm00071647.pdf'},
{name:'東京医科大学',place:'東京都新宿区',pref:'東京都',total:2940,first:480,badge:'2026公式',status:'公式確認済み',tags:['初年度授業料免除','地域枠','新宿'],tip:'2024年度以降入学者は初年度480万円、2年次以降年492万円、6年間2,940万円。2025年度以降は一般選抜上位40名等に初年度授業料290万円の免除制度あり。',special:'一般選抜上位40名、共通テスト利用上位9名等は初年度授業料290万円免除',installment:'納付方法は入学手続案内で確認',extra:'初年度その他費用9.68万円、2年次以降年6.9万円',url:'https://www.tokyo-med.ac.jp/english/faculty/med/fees.html'},
{name:'愛知医科大学',place:'愛知県長久手市',pref:'愛知県',total:3420,first:820,badge:'東海',status:'公式確認済み',tags:['委託徴収金あり','後援会費あり','自宅通学候補'],tip:'学納金とは別に、入学手続時30万円、2年度以降は毎年12万円の委託徴収金が案内されている。',special:'制度の詳細は公式資料で確認',installment:'公式ページで要確認',extra:'初回30万円＋2年次以降毎年12万円',url:'https://www.aichi-med-u.ac.jp/su11/su1107/su110702/index.html'},
{name:'兵庫医科大学',place:'兵庫県西宮市',pref:'兵庫県',total:3700,first:850,badge:'別途費用明示',status:'公式確認済み',tags:['前後期2回払い','委託徴収金あり','西宮'],tip:'委託徴収金は初年度52.5万円、次年度以降1.5万円。学外実習の交通・宿泊費も個人負担の場合がある。',special:'奨学金制度あり',installment:'2年次以降は前後期2回払い',extra:'初年度52.5万円、次年度以降年1.5万円',url:'https://www.hyo-med.ac.jp/admission/expenses/payment/'},
{name:'岩手医科大学',place:'岩手県紫波郡矢巾町',pref:'岩手県',total:3400,first:900,badge:'2026公式',status:'公式確認済み',tags:['東北','地域枠','年次別学費明示'],tip:'現行学則では、入学金200万円、授業料年250万円、実験実習費年50万円、施設設備費年100万円。教育充実費は入学時300万円、2年次以降年100万円。6年間単純合計は3,400万円。',special:'地域枠・奨学制度あり。貸与・勤務条件は選抜区分ごとに確認',installment:'納付方法は入学手続要項で確認',extra:'学生会費等の委託徴収金は入学手続資料で確認',url:'https://www.iwate-med.ac.jp/wp/wp-content/uploads/03iwateika_1608nsecchi_gakusoku.pdf'},
{name:'東北医科薬科大学',place:'宮城県仙台市',pref:'宮城県',total:3700,first:700,badge:'2026公式',status:'公式確認済み',tags:['東北','地域医療','分納あり'],tip:'2026年度は初年度700万円、2年次以降年600万円、6年間総計3,700万円。修学資金は勤務条件もあわせて確認したい。',special:'県等の修学資金制度あり。条件により卒業後の勤務義務あり',installment:'授業料・施設設備費は前後期に分納',extra:'二松会（保護者会）会費 年6,000円',url:'https://www.tohoku-mpu.ac.jp/admission/medicine-fee/'},
{name:'自治医科大学',place:'栃木県下野市',pref:'栃木県',total:null,first:null,badge:'特殊制度',status:'公式確認済み・特殊制度',tags:['修学資金','全寮制','勤務義務'],tip:'学生納付金相当額と入学時学業準備費を全員に修学資金として貸与。所定の地域医療勤務等で返還免除となるため、通常の学費ランキングとは分けて表示。',special:'入学者全員に修学資金貸与。返還免除には卒業後の勤務条件あり',installment:'制度上の納付・貸与方法は募集要項で確認',extra:'寮費等は別途',url:'https://www.jichi.ac.jp/medicine/about/'},
{name:'獨協医科大学',place:'栃木県下都賀郡壬生町',pref:'栃木県',total:3660,first:860,badge:'2026公式',status:'公式確認済み',tags:['北関東','分納あり','特待あり'],tip:'6年間学納金3,660万円。初年度は別に学友会費10万円・父母会費60万円が必要。',special:'一般選抜成績優秀者は初年度教育充実費の5割（180万円）減免制度あり',installment:'授業料・教育充実費は2分割納入可',extra:'入学時に委託徴収金70万円',url:'https://www.dokkyomed.ac.jp/dusm/exam/tuition.html'},
{name:'埼玉医科大学',place:'埼玉県入間郡毛呂山町',pref:'埼玉県',total:3700,first:825,badge:'2026公式',status:'公式確認済み',tags:['埼玉','地域枠','特待あり'],tip:'学納金6年間3,700万円。学生会費・毛呂山会費等は6年間で約260万円と大学が案内。',special:'地域枠・特別奨学金・成績優秀者の学費100万円免除等あり',installment:'公式ページ・納付案内で確認',extra:'学生会費・毛呂山会費等 6年間約260万円',url:'https://adm.saitama-med.ac.jp/payment/'},
{name:'北里大学',place:'神奈川県相模原市',pref:'神奈川県',total:3890,first:900,badge:'2026公式',status:'公式確認済み',tags:['神奈川','分割納入','諸会費あり'],tip:'医学部は初年度900万円、2〜3年次年640万円、4〜6年次年570万円で6年間3,890万円。',special:'奨学金・特待制度は大学公式で確認',installment:'前期・後期の分割納入',extra:'初年度にPPA・同窓会・けやき会・医学部同窓会費など別途',url:'https://www.kitasato-u.ac.jp/jp/campuslife/procedure/index.html'},
{name:'杏林大学',place:'東京都三鷹市',pref:'東京都',total:3700,first:950,badge:'2026公式',status:'公式確認済み',tags:['東京','分納','諸費明示'],tip:'2026年4月入学生は初年度950万円、2年次以降年550万円。大学は2年次以降の学納金が変更される可能性も明記。',special:'奨学金・表彰制度は大学公式で確認',installment:'各年度2期に分けて納入',extra:'医学部の初年度諸費74万700円',url:'https://www.kyorin-u.ac.jp/univ/student/gakuhi/payment/'},
{name:'慶應義塾大学',place:'東京都新宿区',pref:'東京都',total:2272,first:395.3,badge:'年額ベース',status:'公式年額から概算',tags:['東京','スライド制','2026据置'],tip:'2026年度医学部1年次は約395.3万円。2年次以降の現行年額を単純合算した6年間目安は約2,272万円だが、在学中はスライド制で毎年改定され得る。',special:'奨学金制度あり',installment:'春学期・秋学期に分納',extra:'自治会費・学生健保等を含む。将来年度は学費改定の可能性あり',url:'https://www.keio.ac.jp/ja/admissions/fees/'},
{name:'帝京大学',place:'東京都板橋区',pref:'東京都',total:3937.2,first:936.2,badge:'2026公式',status:'公式確認済み',tags:['東京','年次別学費明示','奨学金'],tip:'2026年度在学生向け学費表では、1年次936.2万円、2〜6年次は各600.2万円。6年間単純合計は3,937.2万円。',special:'入学時・在学生向けの各種奨学金制度あり',installment:'納付時期・分納条件は入学手続要項で確認',extra:'学費表に実験実習費・施設拡充費・医学教育維持費を含む',url:'https://www.teikyo-u.ac.jp/studentlife/life_support/financial_support'},
{name:'東海大学',place:'神奈川県伊勢原市',pref:'神奈川県',total:3500,first:640,badge:'2026公式',status:'公式確認済み',tags:['神奈川','諸会費明示','前後期納入'],tip:'2026年度は学費部分が初年度640万円、2〜6年次各572万円で6年間3,500万円。諸会費を含む年間合計は初年度667.32万円。',special:'奨学金制度あり',installment:'春学期・秋学期に分けて納付',extra:'6年間の諸会費合計は約50.62万円（2026年度表を単純合算）',url:'https://www.u-tokai.ac.jp/examination-admissions/fee/undergraduate/'},
{name:'東京女子医科大学',place:'東京都新宿区',pref:'東京都',total:4621.4,first:1144.9,badge:'2026学納金',status:'2026データ確認',tags:['女子大学','東京','2027値下げ決定'],tip:'2026年度の6年間納付金は4,621.4万円。大学は2027年度から入学金・授業料を減額し、6年間で計220万円負担を軽減すると公表している。',special:'2027年度以降は学納金を減額。一般選抜の入学辞退者には入学金半額返還制度も導入予定',installment:'納付方法は募集要項で確認',extra:'2027年度は2026年度比で6年間220万円減額予定',url:'https://www.twmu.ac.jp/univ/news/detail.php?cd=1754&kbn=1&ym=202606'},
{name:'日本大学',place:'東京都板橋区',pref:'東京都',total:3310,first:635,badge:'2026公式',status:'公式確認済み',tags:['東京','分割納入','諸会費明示'],tip:'学納金は初年度635万円、2年次以降年535万円、6年間3,310万円。諸会費を含む6年間合計は3,338万円。',special:'奨学金制度あり',installment:'授業料・施設設備資金等は前後期に分割',extra:'諸会費6年間合計28万円',url:'https://www.med.nihon-u.ac.jp/gaiyou/gakunoukin.php'},
{name:'聖マリアンナ医科大学',place:'神奈川県川崎市',pref:'神奈川県',total:3482,first:697,badge:'2026公式',status:'公式確認済み',tags:['神奈川','教育維持費','教育充実費'],tip:'2026年度は初年度697万円、次年度以降年557万円。6年間単純合計は3,482万円。次年度以降学費は社会情勢で改定される場合あり。',special:'奨学金制度あり',installment:'募集要項・学費案内で確認',extra:'学費以外の諸会費等は入学手続資料で確認',url:'https://www.marianna-u.ac.jp/univ/ent_info/tuition.html'},
{name:'金沢医科大学',place:'石川県河北郡内灘町',pref:'石川県',total:3950,first:1100,badge:'2026公式',status:'公式確認済み',tags:['北陸','特待450万円免除','奨学金'],tip:'2026年度一般選抜入学者は初年度1,100万円、6年間総計3,950万円。特待生は初年度前期分450万円が免除。',special:'一般選抜前期の特待生は初年度学納金450万円免除。特別奨学金貸与制度もあり',installment:'前期・後期で納付',extra:'橘会費21.6万円、国試対策事業負担金20万円など別途',url:'https://www.kanazawa-med.ac.jp/medicine_exam/life/study-payment.html'},
{name:'大阪医科薬科大学',place:'大阪府高槻市',pref:'大阪府',total:2841,first:598.5,badge:'2026公式',status:'公式確認済み',tags:['大阪','2026学生便覧','分納'],tip:'2026年度の学生生活資料では初年度598.5万円。2年次以降の年額448.5万円を含めた6年間合計は2,841万円。',special:'特待・奨学金制度あり',installment:'授業料等は前後期で納付',extra:'学生会費等の諸費は別途確認',url:'https://www.ompu.ac.jp/admission/undergraduate/medical.html'},
{name:'近畿大学',place:'大阪府大阪狭山市',pref:'大阪府',total:3756.7,first:709.45,badge:'公式確認',status:'公式確認済み',tags:['大阪','奨学金','校友会費'],tip:'初年度709.45万円、2年次以降年609.45万円。6年間単純合計は3,756.7万円。',special:'医学部独自の給付奨学金等あり',installment:'授業料は前期・後期で納付',extra:'校友会終身会費3万円（入学年2万円、最終学年1万円）',url:'https://www.kindai.ac.jp/medicine/admissions/scholarships/'},
{name:'川崎医科大学',place:'岡山県倉敷市',pref:'岡山県',total:4550,first:1050,badge:'2026公式',status:'公式確認済み',tags:['中国地方','1年次寮必須','留年時費用明示'],tip:'2026年度は初年度1,050万円、2年次以降年700万円、6年間4,550万円。1年次は教育寮への入寮が必須。',special:'奨学金・授業料減免制度あり',installment:'公式納付案内で確認',extra:'1年次寮費80万円＋食費36万円、学友会費17万円、保護者会費42万円',url:'https://m.kawasaki-m.ac.jp/information/academicpay.php'},
{name:'久留米大学',place:'福岡県久留米市',pref:'福岡県',total:3637.8,first:931.3,badge:'2027公式',status:'公式確認済み',tags:['九州','特待制度','委託徴収金明示'],tip:'2027年度は初年度合計931.3万円、2年次621.3万円、3年次以降521.3万円。委託徴収金を含む6年間総計は3,637.8万円。',special:'大学独自の奨学金・特待生制度あり',installment:'医学科は1年次を複数回に分けて納付。詳細は学費ページで確認',extra:'6年間総計には委託徴収金17.8万円を含む',url:'https://best.kurume-u.ac.jp/expense/tuition/'},
{name:'産業医科大学',place:'福岡県北九州市',pref:'福岡県',total:3049,first:591.5,badge:'修学資金',status:'公式確認済み・特殊制度',tags:['修学資金','産業医','実質負担'],tip:'2026年度予定額は学生納入金6年間3,049万円。修学資金貸与総額1,919.32万円を差し引くと実質負担は約1,129.68万円。返還免除には勤務条件がある。',special:'修学資金貸与制度あり。所定の産業医等勤務で返還免除',installment:'授業料等は前・後学期で納付',extra:'入学手続時の諸会費・保険料20.78万円',url:'https://www.uoeh-u.ac.jp/University/College/kokai/tuition.html'},
{name:'福岡大学',place:'福岡県福岡市',pref:'福岡県',total:3773.826,first:862.671,badge:'2026公式',status:'公式確認済み',tags:['九州','FUスカラシップ','分納'],tip:'2026年度入学生の大学案内では、初年度862.671万円。委託徴収金を含む入学から卒業までの納入予定額は3,773.826万円。',special:'対象入試の成績優秀者を対象とするFUスカラシップあり',installment:'授業料・教育充実費は第1期・第2期の分納制',extra:'6年間総計には委託徴収金を含む。教科書代等は別途',url:'https://www.fukuoka-u.ac.jp/fukudai2026/pageindices/index170.html'}
];
const COST_ONLY_HIDDEN_RE=/(特待|奨学|修学資金|地域枠|減免|給付|貸与|返還免除|勤務義務|実質負担)/;
function costOnlyTags(tags=[]){return tags.filter(t=>!COST_ONLY_HIDDEN_RE.test(t));}
function costOnlyTip(text=''){return text.split(/(?<=。)/).filter(s=>s.trim()&&!COST_ONLY_HIDDEN_RE.test(s)).join('').trim();}
const publicData=data.filter(x=>x.name!=='自治医科大学').map(x=>{
  const y={...x,tags:costOnlyTags(x.tags),tip:costOnlyTip(x.tip),special:''};
  if(y.name==='日本医科大学'&&COST_ONLY_HIDDEN_RE.test(y.badge)) y.badge='東京';
  if(y.name==='産業医科大学'){y.badge='2026公式';y.status='公式確認済み';}
  return y;
});
const pricedCount=publicData.filter(x=>x.total!=null).length;
const progressText=document.querySelector('#progressText');
if(progressText) progressText.textContent=`学費比較データ ${pricedCount}校を掲載`;
const progressBar=document.querySelector('#progressBar');
if(progressBar) progressBar.style.width='100%';
let selected=[];
let visibleCount=8;
let lastFilteredCount=0;
function yen(n){return n==null?'—':n.toLocaleString()+'万円'}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toggleCompare(name){
  const i=selected.indexOf(name);
  if(i>=0){selected.splice(i,1)}else{
    if(selected.length>=3){alert('比較できるのは3校までです。画面下の大学名の×ボタンから1校外してください。');return}
    selected.push(name)
  }
  render();updateCompareBar();
}
function updateCompareBar(){
  const bar=document.querySelector('#comparebar');
  document.querySelector('#comparecount').textContent=selected.length;
  document.querySelector('#comparechips').innerHTML=selected.map(n=>`<span class="comparechip"><span>${escapeHtml(n)}</span><button class="chipremove" type="button" aria-label="${escapeHtml(n)}を比較から外す" data-remove="${escapeHtml(n)}">×</button></span>`).join('');
  document.querySelectorAll('[data-remove]').forEach(btn=>btn.addEventListener('click',()=>toggleCompare(btn.dataset.remove)));
  bar.classList.toggle('hidden',selected.length===0);
  document.querySelector('#opencompare').disabled=selected.length<2;
  document.querySelector('#opencompare').style.opacity=selected.length<2?'.55':'1';
  const hint=document.querySelector('#comparehint');
  if(hint){hint.textContent=selected.length===1?'あと2校選べます':selected.length===2?'あと1校選べます':selected.length===3?'3校選択済み':'あと3校選べます';}
}

function defaultLife(x){const rent=prefRent30[x.pref]||59656;return Math.max(0,Math.min(25,Math.round((rent+55000)/10000)))}
function burden(x){return x.total==null?null:x.total+defaultLife(x)*72}
function rankAmongPriced(x,key){
  if(x.total==null)return null;
  const priced=publicData.filter(d=>d.total!=null);
  const sorted=[...priced].sort((a,b)=>{const av=key==='burden'?burden(a):a[key],bv=key==='burden'?burden(b):b[key];return (av??99999)-(bv??99999)});
  const idx=sorted.findIndex(d=>d.name===x.name);return idx>=0?idx+1:null;
}
function costInsight(x){
  if(x.total==null)return '特殊制度校のため、通常の学費順位とは分けて確認';
  const tr=rankAmongPriced(x,'total'),br=rankAmongPriced(x,'burden');
  if(!tr||!br)return '';
  const diff=br-tr;
  if(diff>=5)return `学費は${tr}位 → 生活費込みでは${br}位。所在地で負担感が変わります。`;
  if(diff<=-5)return `学費は${tr}位 → 生活費込みでは${br}位。生活費を含めると相対的に有利です。`;
  return `学費${tr}位／生活費込み${br}位。大きな順位差はありません。`;
}
function updateSnapshot(){
  const priced=publicData.filter(x=>x.total!=null);
  const minTotal=[...priced].sort((a,b)=>a.total-b.total)[0];
  const minFirst=[...priced].filter(x=>x.first!=null).sort((a,b)=>a.first-b.first)[0];
  const minBurden=[...priced].sort((a,b)=>burden(a)-burden(b))[0];
  if(minTotal){document.querySelector('#snapTotal').textContent=yen(minTotal.total);document.querySelector('#snapTotalName').textContent=minTotal.name;}
  if(minFirst){document.querySelector('#snapFirst').textContent=yen(minFirst.first);document.querySelector('#snapFirstName').textContent=minFirst.name;}
  if(minBurden){document.querySelector('#snapBurden').textContent=yen(burden(minBurden));document.querySelector('#snapBurdenName').textContent=minBurden.name+'（概算）';}
  const stat=document.querySelector('#statCount');if(stat)stat.textContent=publicData.length+'校';
}

function getFiltered(){
  const q=document.querySelector('#q').value.toLowerCase();
  const budget=+document.querySelector('#budget').value;
  const sort=document.querySelector('#sort').value;
  const status=document.querySelector('#status').value;
  let arr=publicData.filter(x=>{
    const text=(x.name+x.place+x.tags.join('')+x.status).toLowerCase();
    const statusOk=status==='all'||(status==='priced'&&x.total!=null)||(status==='verified'&&x.status.includes('公式'));
    const budgetOk=x.total==null?budget===9999:x.total<=budget;
    return text.includes(q)&&statusOk&&budgetOk;
  });
  arr.sort((a,b)=>{
    const av=sort==='burden'?burden(a):a[sort],bv=sort==='burden'?burden(b):b[sort];
    return (av??99999)-(bv??99999)
  });
  return arr;
}
function render(){
  const arr=getFiltered();
  lastFilteredCount=arr.length;
  const shown=arr.slice(0,visibleCount);
  document.querySelector('#resultSummary').textContent=`${arr.length}校中${Math.min(shown.length,arr.length)}校を表示`;
  const more=arr.length-shown.length;
  const load=document.querySelector('#loadmore');
  load.classList.toggle('hidden',more<=0);
  load.textContent=more>0?`さらに${Math.min(8,more)}件を表示（残り${more}件）`:'すべて表示中';
  document.querySelector('#cards').innerHTML=shown.map(x=>{
    const totalRank=rankAmongPriced(x,'total');
    const burdenRank=rankAmongPriced(x,'burden');
    const extraText=x.extra&&x.extra.trim()?x.extra:'金額の明示なし／最新募集要項で確認';
    return `<article class="card"><div class="topline"><span><span class="badge">${x.badge}</span></span><span class="rank">学費 #${totalRank}</span></div><h3>${x.name}</h3><div class="place">${x.place}</div><div class="primarymoney"><span>6年間学費</span><b>${yen(x.total)}</b><small>大学公表額ベース</small></div><div class="minimoney"><div><span>初年度</span><b>${yen(x.first)}</b></div><div><span>生活費 初期値</span><b>月${defaultLife(x)}万円</b><small>県平均ベース</small></div><div><span>生活費込み</span><b>${yen(burden(x))}</b><small>総負担 #${burdenRank}</small></div></div><div class="cost-insight">${escapeHtml(costInsight(x))}</div><div class="extra-callout"><span>先に確認したい別途費用</span><b>${escapeHtml(extraText)}</b></div><div class="tags">${x.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>${x.tip?`<details class="tipdetails"><summary>費用・注意点を詳しく見る</summary><div class="tipbody">${escapeHtml(x.tip)}</div></details>`:''}<div class="actions">${x.url?`<a class="btn primary" target="_blank" rel="noopener" href="${x.url}">公式で確認</a>`:`<span class="btn" aria-disabled="true">公式資料を確認</span>`}<button class="btn ${selected.includes(x.name)?'selected':''}" data-compare="${escapeHtml(x.name)}">${selected.includes(x.name)?'比較から外す':'比較に追加'}</button></div></article>`;
  }).join('')||'<p>条件に合う大学がありません。</p>';
  document.querySelectorAll('[data-compare]').forEach(btn=>btn.addEventListener('click',()=>toggleCompare(btn.dataset.compare)));
}
function resetAndRender(){visibleCount=8;render()}

function openCompare(){
  if(selected.length<2)return;
  document.querySelector('#comparemodal').setAttribute('aria-hidden','false');
  const items=selected.map(n=>publicData.find(x=>x.name===n)).filter(Boolean);
  const rows=[['所在地','place'],['6年間学費','total'],['初年度納入額','first'],['所在地別生活費の初期値','lifeDefault'],['学費＋6年間生活費の目安','burden'],['確認できた別途費用','extra']];
  let html='<table class="comparetable"><thead><tr><th>比較項目</th>'+items.map(x=>`<th><div class="compareunihead"><span>${escapeHtml(x.name)}</span><button type="button" data-modal-remove="${escapeHtml(x.name)}">外す</button></div></th>`).join('')+'</tr></thead><tbody>';
  for(const [label,key] of rows){html+=`<tr><th class="rowlabel">${label}</th>`+items.map(x=>`<td data-label="${escapeHtml(x.name)}">${key==='total'||key==='first'?yen(x[key]):key==='lifeDefault'?'月'+defaultLife(x)+'万円':key==='burden'?yen(burden(x)):escapeHtml(x[key])}</td>`).join('')+'</tr>'}
  html+='<tr><th class="rowlabel">公式情報</th>'+items.map(x=>`<td data-label="${escapeHtml(x.name)}"><a class="btn primary" target="_blank" rel="noopener" href="${x.url}">公式で確認</a></td>`).join('')+'</tr></tbody></table>';
  document.querySelector('#comparecontent').innerHTML=html;
  document.querySelector('#comparemodal').classList.add('open');
  document.querySelector('#comparemodal').setAttribute('aria-hidden','false');
  document.querySelectorAll('[data-modal-remove]').forEach(btn=>btn.addEventListener('click',()=>{toggleCompare(btn.dataset.modalRemove);if(selected.length>=2){openCompare()}else{closeCompare()}}));
}
function closeCompare(){document.querySelector('#comparemodal').classList.remove('open');document.querySelector('#comparemodal').setAttribute('aria-hidden','true');document.querySelector('#opencompare').focus()}
['q','status','budget','sort'].forEach(id=>document.querySelector('#'+id).addEventListener('input',resetAndRender));
document.querySelector('#loadmore').addEventListener('click',()=>{visibleCount+=8;render()});
document.querySelector('#clearcompare').addEventListener('click',()=>{selected=[];render();updateCompareBar();closeCompare()});
document.querySelector('#opencompare').addEventListener('click',openCompare);
document.querySelector('#closecompare').addEventListener('click',closeCompare);
document.querySelector('#comparemodal').addEventListener('click',e=>{if(e.target.id==='comparemodal')closeCompare()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCompare()});
const prefRent30={"東京都":64606,"神奈川県":52623,"埼玉県":46201,"千葉県":45520,"大阪府":43740,"兵庫県":42903,"京都府":42574,"愛知県":40922,"奈良県":38810,"静岡県":38503,"広島県":38317,"宮城県":38156,"福岡県":37972,"滋賀県":37750,"沖縄県":37246,"岡山県":35911,"茨城県":35557,"三重県":35292,"栃木県":35005,"新潟県":34815,"福井県":34580,"長野県":34411,"石川県":34359,"岐阜県":34166,"山梨県":33962,"富山県":33793,"山形県":33751,"香川県":33708,"佐賀県":33697,"北海道":33420,"熊本県":33418,"群馬県":33397,"福島県":32882,"長崎県":32660,"岩手県":32584,"鳥取県":32148,"徳島県":32074,"島根県":31950,"秋田県":31542,"高知県":31531,"和歌山県":31525,"山口県":31431,"大分県":31376,"愛媛県":31289,"宮崎県":30793,"青森県":30647,"鹿児島県":29735};
const life=document.querySelector('#life');
const calcUniversity=document.querySelector('#calcUniversity');
function updateLifeResult(){
  const uni=publicData.find(x=>x.name===calcUniversity.value)||publicData[0];
  const v=+life.value;
  document.querySelector('#lifeLabel').textContent=v+'万円';
  document.querySelector('#resultUniversity').textContent=uni.name;
  document.querySelector('#grand').textContent=yen(uni.total+v*72);
}
function applyPrefectureDefault(){
  const uni=publicData.find(x=>x.name===calcUniversity.value)||publicData[0];
  const rent=prefRent30[uni.pref]||59656;
  const initial=defaultLife(uni);
  life.value=initial;
  document.querySelector('#rentNote').innerHTML='<b>'+uni.pref+'の家賃目安：</b>'+Math.round(rent/1000).toLocaleString()+'千円／月（30㎡換算）<br>食費・光熱費など5.5万円を加え、月'+initial+'万円から開始します。';
  updateLifeResult();
}
calcUniversity.innerHTML=publicData.filter(x=>x.total!=null).map(x=>'<option value="'+escapeHtml(x.name)+'">'+escapeHtml(x.name)+'（'+escapeHtml(x.pref)+'）</option>').join('');
calcUniversity.addEventListener('change',applyPrefectureDefault);
life.addEventListener('input',updateLifeResult);
const snapshotLabels={
  total:'6年間学費が安い順',
  first:'初年度負担が安い順',
  burden:'生活費込みの6年間負担が安い順'
};
function clearSnapshotState(){
  document.querySelectorAll('[data-snapshot-sort]').forEach(card=>{card.classList.remove('active');card.setAttribute('aria-pressed','false')});
  const feedback=document.querySelector('#sortFeedback');
  if(feedback){feedback.classList.remove('show');feedback.textContent='';}
}
function applySnapshotSort(btn){
  const sortKey=btn.dataset.snapshotSort;
  document.querySelector('#sort').value=sortKey;
  document.querySelector('#budget').value='9999';
  document.querySelector('#status').value='priced';
  document.querySelectorAll('[data-snapshot-sort]').forEach(card=>{const active=card===btn;card.classList.toggle('active',active);card.setAttribute('aria-pressed',active?'true':'false')});
  const feedback=document.querySelector('#sortFeedback');
  if(feedback){
    feedback.textContent=`${snapshotLabels[sortKey]}に切り替えました。大学一覧をこの順で表示しています。`;
    feedback.classList.add('show');
    clearTimeout(window.__sortFeedbackTimer);
    window.__sortFeedbackTimer=setTimeout(()=>feedback.classList.remove('show'),2200);
  }
  resetAndRender();
  setTimeout(()=>document.querySelector('#finder').scrollIntoView({behavior:'smooth',block:'start'}),80);
}
document.querySelectorAll('[data-snapshot-sort]').forEach(btn=>btn.addEventListener('click',()=>applySnapshotSort(btn)));
document.querySelector('#sort').addEventListener('input',clearSnapshotState);
updateSnapshot();applyPrefectureDefault();render();updateCompareBar();
