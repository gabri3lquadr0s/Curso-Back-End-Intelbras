(async () => {
    const db = require(`./db`);
    console.log(`Start`);

    // console.log(`INSERT INTO CLIENTES`);
    // const result = await db.insertCustomers({nome: `DaniloGamer12`, idade: 8, uf:`PE`});
    // console.log(result.rowcount);

    console.log(`SELECT * FROM CLIENTES`);
    const clientes = await db.selectCustomers();
    console.log(clientes)

    console.log(`UPDATE CLIENTES`);
    const result2 = await db.updateCustomers(5, {nome: `Marcola Rafael`, idade: 38, uf: `SC`});
    console.log(result2.rowCount);

    // console.log(`DELETE FROM CLIENTES`);
    // const result3 = await db.deleteCustomer(1);
    // console.log(result3.rowCount);
})();