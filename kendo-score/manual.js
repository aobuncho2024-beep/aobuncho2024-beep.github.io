const search=document.querySelector('#search');
if(search){search.addEventListener('input',()=>{const query=search.value.trim().toLocaleLowerCase('ja');let count=0;document.querySelectorAll('[data-chapter]').forEach(el=>{const match=!query||el.dataset.search.toLocaleLowerCase('ja').includes(query);el.hidden=!match;if(match)count++;});document.querySelectorAll('.toc-group').forEach(el=>{el.hidden=!el.querySelector('[data-chapter]:not([hidden])');});document.querySelector('#search-status').textContent=query?`${count}件の項目が見つかりました。`:'';});}
const images=document.querySelectorAll('[data-image]');
if(images.length&&typeof HTMLDialogElement!=='undefined'){
 const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.setAttribute('aria-label','画面例を拡大');
 const close=document.createElement('button');close.type='button';close.textContent='閉じる ×';
 const img=document.createElement('img');const p=document.createElement('p');const original=document.createElement('a');original.textContent='元の大きさで画像を開く';original.target='_blank';original.rel='noopener';p.append(original);dialog.append(close,img,p);document.body.append(dialog);
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 images.forEach(link=>link.addEventListener('click',event=>{event.preventDefault();img.src=link.href;img.alt=link.querySelector('img').alt;original.href=link.href;dialog.showModal();}));
}
