const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    // inserir dados na tabela
   /* await saveOrphanage(db, {
        
        lat: "-12.271787", 
        lng: "-38.9737843",
        name: "Lar das meninas",
        about:"Presta assistência a crianças de 1 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"75991625845",
        images: [

            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80://images.unsplash.com/photo-1595295413110-3304e36b564f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" ,
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        instructions: "Venha sentir afeto e traga muito amor para dar.",
        opening_hours:"Horários de visitação: Das 8 às 18 horas.",
        open_on_weekends:"0"
    })*/

    //consultar dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // const selectedAll = await db.all("SELECT * FROM orphanages")
    

    // apagar dado
    /*console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '8'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"))
    */
})