
let a=10;
{
    let a=20;
    {
        let a=30
        {
            let a=40
            console.log('level3 a ->',a);
        }
        console.log('level2 a ->',a);
    }
    console.log('level1 a ->',a);
}

console.log(a);


