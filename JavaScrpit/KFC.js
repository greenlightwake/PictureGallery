function showpic(_tupian)
{
    var oldPic=document.getElementById("默认图片");
    var picLink=_tupian.getAttribute("href");
    oldPic.setAttribute("src",picLink);
    return true;
}
