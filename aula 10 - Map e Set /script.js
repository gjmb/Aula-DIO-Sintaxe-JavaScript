function getAdm(map){
    if(!map)
        return [];
    let admins = [];
    for ([key, value] of map) {
        if(value==='ADMIN')
            admins.push(key);
    }
    return admins;

}

const map = new Map();

map.set('Nino','ADMIN');
map.set('Jonboy','USER');
map.set('Pucca','ADMIN');
map.set('Aika','USER');
map.set('Abby','USER');

let adm = getAdm(map);
for(admin of adm)
    console.log(admin);

const vet =[30,30,40,40,5,5,2000,444];

function uniqueValue(v){
    const set = new Set(v);
    return [...set];
}