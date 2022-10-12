// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// for ( var day in days ){
//     console.log(day);
//     console.log(days[day]);
// }

// for (var day of days ) {
//     console.log(day)
// }

var mesaj = "the quick brown fox jumps over the lazy dog"
var rez = []
rez = mesaj.split(" ")
for(var i=0; i<=rez.length-1; i++){
    var nr = 1;
    for(var j=i+1; j<=rez.length;j++){
        if(rez[i]==rez[j]){
            nr++;
            rez.splice(j, 1)
        }
    }
    rez[i] = rez[i] + ": " + nr;
}
console.log(rez.join(", \n"))