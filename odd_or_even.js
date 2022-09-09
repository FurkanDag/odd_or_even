//tek mi çift mi uygulaması;ama bu uygulamada farklı olarak rakamların toplamının ikiye bölümüne bakılır
//ör:37==3+7=10   10%2=0=>Even
//ör:179==1+7+9=17   17%2=1=>Odd

const oddOrEven = (n) => {
    let a = n.toString();
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b += parseInt(a[i]);
    }
    if (b % 2 === 1) {
        return "Oddish"
    } else return "Evenish"
};


console.log(oddOrEven(13));
console.log(oddOrEven(6474484884));