function showpic(_tupian)
{
    var oldPic=document.getElementById("默认图片");
    var picLink=_tupian.getAttribute("href");
    oldPic.setAttribute("src",picLink);
    var _oldDescription=document.getElementById("默认描述文本");
    var _descrpitiontext=_tupian.getAttribute("title");
    _oldDescription.firstChild.nodeValue=_descrpitiontext;
    return true;
}
