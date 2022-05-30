Animation d'un 'chrono' avec utf8 + class javascript----------------------------------------------------
Url     : http://codes-sources.commentcamarche.net/source/103233-animation-d-un-chrono-avec-utf8-class-javascriptAuteur  : pabbatiDate    : 01/03/2021
Licence :
=========

Ce document intitul� � Animation d'un 'chrono' avec utf8 + class javascript � issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis � disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fix�es par la licence, tant que cette note
appara�t clairement.

Description :
=============

2 versions
<br />une par class avec étude des class en javascript
<br />avec 
get set #private public, il manque des static
<br />
<br />et une autre versio
n dans une fonction simple :
<br />
<br /><pre class="code" data-mode="js">fun
ction plussimplesansclass(id)
{
 let div = document.getElementById(id);
 let t =
 0; // l&apos;indice de chrono [t]
 let chrono = [&apos;🕛&apos;,&apos;🕐&ap
os;,&apos;🕑&apos;,&apos;🕒&apos;,&apos;🕓&apos;,&apos;🕔&apos;,&apos;�
��&apos;,&apos;🕖&apos;,&apos;🕗&apos;,&apos;🕘&apos;,&apos;🕙&apos;,&ap
os;🕚&apos;]
 function affiche() {
  div.innerText = chrono[t = ++ t % 12];
 }

 return setInterval(affiche,83); // 1 tour par seconde
}
var i = plussimplesans
class(&apos;div&apos;);
// clearInterval(i);// pour stopper</pre>
