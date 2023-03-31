function calculator(sk1, sk2, veiksmas){
    switch(veiksmas) {
        case "/":
            console.log(sk1/sk2);
            break;
        case "*":
            console.log(sk1*sk2);
            break;
        case "+":
           console.log(sk1+sk2);
            break;
        case "-":
            console.log(sk1-sk2);
            break;
            default:
            console.log("tokio simbolio nera");
    }
       
}
calculator(50, 10, "/");