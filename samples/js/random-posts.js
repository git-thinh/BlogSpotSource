var a = 0;
var b = 0;
var entries = new Array();
function randomposts(json) {
    for (var i in json.feed.entry) {
        var entry = json.feed.entry[i];
        if (entry != null) {
            entries[b++] = entry;
        }
    }
    a++;
    if (a < 2) return;
    var randarray = new Array();
    var l = 0;
    var flag;
    var numofpost = 10;

    var total = entries.length;

    for (var i = 0; i < numofpost;) {
        flag = 0;
        randarray.length = numofpost;
        l = Math.floor(Math.random() * total);
        for (j in randarray) {
            if (l == randarray[j]) {
                flag = 1;
            }
        }
        if (flag == 0 && l != 0) {
            randarray[i++] = l;
            //alert(l);
        }
    }
    // correct output
    // alert(randarray);

    document.write('<ul>');

    // dummy for testing 500 limit
    //for (var x = 0; x < numofpost; x++) {
    //  randarray[x]= 495 + x;
    //}

    for (var n in randarray) {
        var p = randarray[n];
        var entry = entries[p - 1];
        var posttitle = entry.title.$t;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                document.write('<li> ' + posttitle.link(entry.link[k].href) + '</li>');

            }
        }
    }
    document.write('</ul>');
}

/*
     
<script src="/feeds/posts/default?alt=json-in-script&start-index=1&max-results=500&callback=randomposts" type="text/javascript"></script>
<script src="/feeds/posts/default?alt=json-in-script&start-index=501&max-results=500&callback=randomposts" type="text/javascript"></script>

*/