if(location.href.indexOf('index.html')>-1){
	location.replace(location.href.replace('index.html',''));
}
window.onload = function() {
	var new_element = document.createElement('header');
	new_element.innerHTML=`<!--<button class='head' id='ope'><svg style="fill:#888;width:3em;height:3em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></button>--><span><a href='/' aria-label='(icon)' id='rogo' tabindex='-1'></a><h2>輝く光</h2></span><div id='menu'><a class='head' href='/' tabindex='-1'>トップ</a><a class='head' href='/meaning/' tabindex='-1'>趣旨</a><a class='head' href='/join/' tabindex='-1'>入会</a><a class='head' href='/sacred-place/' tabindex='-1'>聖地光岳</a><a class='head' href='/inquiry/' tabindex='-1'>お問い合わせ</a></div><div></div>`;
	document.body.children[0].before(new_element);
}