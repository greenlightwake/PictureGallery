

function showpic(_tupian)
{
    var oldPic=document.getElementById("默认图片");
    var picLink=_tupian.getAttribute("href");
    oldPic.setAttribute("src",picLink);
    var _oldDescription=document.getElementById("默认描述文本");
    var _descrpitiontext=_tupian.getAttribute("title");
    _oldDescription.firstChild.nodeValue=_descrpitiontext;

}
function preparegallery(){
    if(!document.getElementById)return false;
    if(!document.getElementById("menu"))return false;
    var list=document.getElementById("menu");
    var link=list.getElementsByTagName("a");
    for(var i=0;i<link.length;i++)
    {
        link[i].onclick=function()
        {
            showpic(this);
            return false;}
            
    }
}
window.onload=preparegallery();