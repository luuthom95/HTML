document.write('<table><tr><td id="header" colspan="10"></td>Bảng cửu chương</td></tr>');
    for(var times=2; times<10; times++) {
        document.write('<tr>')
        for(var start=1; start<=10; start++) {
            document.write("<td>"+times+" x "+start+" = "+start*times+"</td>");
        }
        document.write('</tr>')
    }
document.write('</table>')

