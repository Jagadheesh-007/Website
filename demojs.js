async function API()
{
    try{
    const response =await fetch('https://66e526d65cc7f9b6273c69ee.mockapi.io/register');
    const data =await response.json();
    // console.table(data);
    return data;
    }
    catch(e)
    {
        console.warn("Error");
    }
}
async function apidata()
{
    const a = await API();
    // const b = [{name:"hello"}];
    const activeusers = a.filter(b => b.isActive);
    console.table(activeusers)
    // const structuredata = a.map((data)=>console.log(data));
}
apidata();
