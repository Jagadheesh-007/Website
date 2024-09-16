// // const function_1 = () => console.log("Arrow function called")
// // function_1()
// // const arr1 = ["S1","S2"];
// // const arr2 = [1,22];
// // const arr3 = [...arr1,...arr2];
// // console.log(...arr3)
// // for(let i=0;i<5;i++)
// // {
// //     console.log(i);
// // }

// function fail()
// {
//     console.log("Transaction Failed");
// }
// function success()
// {
//     console.log("Transaction Successfull");
// }
// function error()
// {
//     console.log("Error");
// }
// function exec(data,call)
// {
//     console.log(`Balance : ${data}`);
//     call();
// }
// function trigger(data)
// {
//     if(data>0)
//         exec(data,success);
//     else if(data<=0)
//         exec(data,fail);
//     else
//         exec(data,error);
// }
// trigger(-1);

function API(){
    const response = fetch('https://66e526d65cc7f9b6273c69ee.mockapi.io/register');
    const data = response.json();
}
API()