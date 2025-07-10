function getHexNum(num)
{
    ar1=new Array('0','1','2','3','4','5','6','7','8','9','10','11','13','14','15');
    ar2=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
    if(num>15)
        return num;
    else{
        red=ar2[num];
        return red;
    }
}
function deciToHex(arg){
    res2=999;
    args=arg;
    while(args<15) {
        arg1=parseInt(args/16);
        arg2=args%16;
        arg2=getHexNum(arg2);
        args=arg1;
        if(res2==999)
            res2=arg2.toString();
        else
           res2=arg2.toString()+res2.toString();
    }
    if(args<16 && res2!=999)  {
        def=getHexNum(args);
        res2=def+res2.toString();

    }
    else if(res2==999)  {
        if(args<16)
            res2=getHexNum(args);
        else
          res2=1;
    }
    if(res2.length==1)
        res2="0"+res2;
    return res2;
}